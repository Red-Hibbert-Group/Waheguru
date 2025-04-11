"use strict";
(() => {
var exports = {};
exports.id = 6397;
exports.ids = [6397];
exports.modules = {

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 95593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/db-fix/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./src/lib/supabase.ts
var supabase = __webpack_require__(68100);
;// CONCATENATED MODULE: ./src/app/api/db-fix/route.ts


async function GET(request) {
    try {
        // Check if the table exists
        const { error: checkError } = await supabase/* supabase */.OQ.from("newsletter_subscriptions").select("id").limit(1);
        let message = "";
        // If we can query the table but source column is missing,
        // the table structure needs to be updated
        if (!checkError) {
            // Execute custom SQL to add the source column if it doesn't exist
            const { error: sourceError } = await supabase/* supabase */.OQ.rpc("add_column_if_not_exists", {
                table_name: "newsletter_subscriptions",
                column_name: "source",
                column_type: "TEXT",
                column_default: "'website'"
            });
            if (sourceError) {
                // If the stored procedure doesn't exist, create it first
                if (sourceError.message.includes("could not find the function")) {
                    const createFunctionSQL = `
          create or replace function add_column_if_not_exists(
            table_name text,
            column_name text,
            column_type text,
            column_default text default null
          ) returns void as $$
          declare
            column_exists boolean;
            alter_statement text;
          begin
            select exists(
              select 1
              from information_schema.columns
              where table_schema = 'public'
              and table_name = add_column_if_not_exists.table_name
              and column_name = add_column_if_not_exists.column_name
            ) into column_exists;
          
            if not column_exists then
              alter_statement := format('ALTER TABLE public.%I ADD COLUMN %I %s', 
                                        table_name, column_name, column_type);
                                        
              if column_default is not null then
                alter_statement := alter_statement || ' DEFAULT ' || column_default;
              end if;
              
              execute alter_statement;
            end if;
          end;
          $$ language plpgsql security definer;
          `;
                    // Create the function
                    const { error: createFnError } = await supabase/* supabase */.OQ.rpc("exec_sql", {
                        sql: createFunctionSQL
                    });
                    if (createFnError) {
                        // If we can't create the function, try a direct SQL approach
                        // Note: This might not work with anon key, but worth a try
                        message = "Could not create helpers, trying direct SQL";
                        // Check if column exists
                        try {
                            const { data: colData, error: colCheckError } = await supabase/* supabase */.OQ.from("newsletter_subscriptions").select("source").limit(1);
                            if (colCheckError && colCheckError.message.includes("column")) {
                                // Try to add the column directly
                                const { error: alterError } = await supabase/* supabase */.OQ.rpc("exec_sql", {
                                    sql: "ALTER TABLE public.newsletter_subscriptions ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'website'"
                                });
                                if (alterError) {
                                    return next_response/* default */.Z.json({
                                        success: false,
                                        message: "Could not add source column. Please execute SQL manually.",
                                        error: alterError
                                    }, {
                                        status: 500
                                    });
                                } else {
                                    message = "Added source column directly";
                                }
                            } else {
                                message = "Source column already exists";
                            }
                        } catch (err) {
                            // Column doesn't exist, which is what we expected
                            // Try to add the column directly
                            const { error: alterError } = await supabase/* supabase */.OQ.rpc("exec_sql", {
                                sql: "ALTER TABLE public.newsletter_subscriptions ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'website'"
                            });
                            if (alterError) {
                                return next_response/* default */.Z.json({
                                    success: false,
                                    message: "Could not add source column. Please execute SQL manually.",
                                    error: alterError
                                }, {
                                    status: 500
                                });
                            } else {
                                message = "Added source column directly after error";
                            }
                        }
                    } else {
                        // Function created, now try to add the column
                        const { error: addColError } = await supabase/* supabase */.OQ.rpc("add_column_if_not_exists", {
                            table_name: "newsletter_subscriptions",
                            column_name: "source",
                            column_type: "TEXT",
                            column_default: "'website'"
                        });
                        if (addColError) {
                            return next_response/* default */.Z.json({
                                success: false,
                                message: "Created function but could not add source column",
                                error: addColError
                            }, {
                                status: 500
                            });
                        } else {
                            message = "Created helper function and added source column";
                        }
                    }
                } else {
                    return next_response/* default */.Z.json({
                        success: false,
                        message: "Error adding source column",
                        error: sourceError
                    }, {
                        status: 500
                    });
                }
            } else {
                message = "Added source column successfully";
            }
            // Add subscription_date column if needed
            const { error: dateError } = await supabase/* supabase */.OQ.rpc("add_column_if_not_exists", {
                table_name: "newsletter_subscriptions",
                column_name: "subscription_date",
                column_type: "TIMESTAMPTZ",
                column_default: "now()"
            });
            if (!dateError) {
                message += ", added subscription_date column";
            }
            // Add status column if needed
            const { error: statusError } = await supabase/* supabase */.OQ.rpc("add_column_if_not_exists", {
                table_name: "newsletter_subscriptions",
                column_name: "status",
                column_type: "TEXT",
                column_default: "'active'"
            });
            if (!statusError) {
                message += ", added status column";
            }
            return next_response/* default */.Z.json({
                success: true,
                message: message || "Table structure updated successfully"
            });
        } else if (checkError.code === "42P01") {
            // Table doesn't exist, try to create it
            const createTableSQL = `
      CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT NOT NULL UNIQUE,
        subscription_date TIMESTAMPTZ NOT NULL DEFAULT now(),
        status TEXT NOT NULL DEFAULT 'active',
        source TEXT DEFAULT 'website',
        unsubscribed_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
      
      -- Create index on email if it doesn't exist
      CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email 
      ON public.newsletter_subscriptions(email);
      `;
            const { error: createError } = await supabase/* supabase */.OQ.rpc("exec_sql", {
                sql: createTableSQL
            });
            if (createError) {
                // If we can't execute the SQL directly, provide instructions
                return next_response/* default */.Z.json({
                    success: false,
                    message: "Table does not exist and could not be created automatically",
                    error: createError
                }, {
                    status: 500
                });
            }
            return next_response/* default */.Z.json({
                success: true,
                message: "Created newsletter_subscriptions table with all required columns"
            });
        } else {
            return next_response/* default */.Z.json({
                success: false,
                message: "Unknown error checking table existence",
                error: checkError
            }, {
                status: 500
            });
        }
    } catch (error) {
        console.error("Database fix error:", error);
        return next_response/* default */.Z.json({
            success: false,
            message: "Failed to fix database structure",
            error
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fdb-fix%2Froute&name=app%2Fapi%2Fdb-fix%2Froute&pagePath=private-next-app-dir%2Fapi%2Fdb-fix%2Froute.ts&appDir=%2FUsers%2Frhg003%2FDocuments%2FGitHub%2FWaheguru%2Fsrc%2Fapp&appPaths=%2Fapi%2Fdb-fix%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/db-fix/route",
        pathname: "/api/db-fix",
        filename: "route",
        bundlePath: "app/api/db-fix/route"
    },
    resolvedPagePath: "/Users/rhg003/Documents/GitHub/Waheguru/src/app/api/db-fix/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/db-fix/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,2778,3066,8100], () => (__webpack_exec__(95593)));
module.exports = __webpack_exports__;

})();