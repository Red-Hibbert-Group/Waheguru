"use strict";
(() => {
var exports = {};
exports.id = 86;
exports.ids = [86];
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

/***/ 34906:
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

// NAMESPACE OBJECT: ./src/app/api/fix-db/route.ts
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
// EXTERNAL MODULE: ./node_modules/@supabase/supabase-js/dist/main/index.js
var main = __webpack_require__(53066);
;// CONCATENATED MODULE: ./src/app/api/fix-db/route.ts



// Direct database client for raw SQL
const supabaseUrl = "https://obwokyhpvdqewaatrnma.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9id29reWhwdmRxZXdhYXRybm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjMzMjgsImV4cCI6MjA1OTkzOTMyOH0.DK8PEGmTyC32HWislTj1oDmx4y6JG0gK43HX2IR8xck";
const supabaseAdmin = (0,main.createClient)(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
async function GET(request) {
    try {
        // Try multiple approaches to fix the table
        // Approach 1: Simple insert to check if table exists and has required columns
        try {
            console.log("Trying direct insert to test table structure...");
            const { data, error } = await supabase/* supabase */.OQ.from("newsletter_subscriptions").insert({
                email: `test_${Date.now()}@example.com`,
                subscription_date: new Date().toISOString(),
                status: "test",
                source: "test"
            }).select().single();
            if (!error) {
                // If successful, delete the test record
                await supabase/* supabase */.OQ.from("newsletter_subscriptions").delete().eq("id", data.id);
                return next_response/* default */.Z.json({
                    success: true,
                    message: "Table structure is valid, test record created and deleted successfully",
                    approach: "direct-insert"
                });
            } else {
                console.log("Initial test failed:", error.message);
            }
        } catch (e) {
            console.log("Insert test failed:", e);
        }
        // Approach 2: Try to add columns individually with RPC
        try {
            console.log("Trying RPC method...");
            const query = `
        SELECT 1;
      `;
            const { error: rpcError } = await supabase/* supabase */.OQ.rpc("exec_sql", {
                sql: query
            });
            if (!rpcError) {
                // We can execute SQL, so let's create the table and columns
                const createTableSql = `
          CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT NOT NULL UNIQUE,
            subscription_date TIMESTAMPTZ DEFAULT now(),
            status TEXT DEFAULT 'active',
            source TEXT DEFAULT 'website',
            unsubscribed_at TIMESTAMPTZ,
            created_at TIMESTAMPTZ DEFAULT now(),
            updated_at TIMESTAMPTZ DEFAULT now()
          );
        `;
                const { error: createError } = await supabase/* supabase */.OQ.rpc("exec_sql", {
                    sql: createTableSql
                });
                if (!createError) {
                    return next_response/* default */.Z.json({
                        success: true,
                        message: "Table created or updated successfully",
                        approach: "rpc-sql"
                    });
                } else {
                    console.log("RPC execution failed:", createError);
                }
            } else {
                console.log("RPC method not available:", rpcError);
            }
        } catch (e) {
            console.log("RPC approach failed:", e);
        }
        // Approach 3: Use raw SQL with the REST API
        try {
            console.log("Trying REST API approach...");
            const response = await fetch(`${supabaseUrl}/rest/sql`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": supabaseKey,
                    "Authorization": `Bearer ${supabaseKey}`,
                    "Prefer": "resolution=merge-duplicates"
                },
                body: JSON.stringify({
                    query: `
            CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
              id UUID PRIMARY KEY DEFAULT gen_uuid_generate_v4(),
              email TEXT NOT NULL UNIQUE,
              subscription_date TIMESTAMPTZ DEFAULT now(),
              status TEXT DEFAULT 'active',
              source TEXT DEFAULT 'website',
              unsubscribed_at TIMESTAMPTZ,
              created_at TIMESTAMPTZ DEFAULT now(),
              updated_at TIMESTAMPTZ DEFAULT now()
            );
          `
                })
            });
            if (response.ok) {
                return next_response/* default */.Z.json({
                    success: true,
                    message: "Table created successfully via REST API",
                    approach: "rest-api"
                });
            } else {
                console.log("REST API approach failed:", await response.text());
            }
        } catch (e) {
            console.log("REST API approach failed:", e);
        }
        // Approach 4: Try using Supabase client's pgsql method if available
        try {
            console.log("Trying direct SQL execution if available...");
            // @ts-ignore - This method might exist in some versions of the client
            const { error: sqlError } = await supabase/* supabase */.OQ.rpc("pgdump", {
                command: `
          CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT NOT NULL UNIQUE,
            subscription_date TIMESTAMPTZ DEFAULT now(),
            status TEXT DEFAULT 'active',
            source TEXT DEFAULT 'website',
            unsubscribed_at TIMESTAMPTZ,
            created_at TIMESTAMPTZ DEFAULT now(),
            updated_at TIMESTAMPTZ DEFAULT now()
          );
        `
            });
            if (!sqlError) {
                return next_response/* default */.Z.json({
                    success: true,
                    message: "Table created successfully via pgdump",
                    approach: "pgdump"
                });
            }
        } catch (e) {
            console.log("Direct SQL execution failed:", e);
        }
        // If all else fails, suggest manual fixes
        return next_response/* default */.Z.json({
            success: false,
            message: "Could not automatically fix the database structure. Please add the missing columns manually.",
            requiredColumns: [
                {
                    name: "id",
                    type: "UUID",
                    constraints: "PRIMARY KEY DEFAULT gen_random_uuid()"
                },
                {
                    name: "email",
                    type: "TEXT",
                    constraints: "NOT NULL UNIQUE"
                },
                {
                    name: "subscription_date",
                    type: "TIMESTAMPTZ",
                    constraints: "DEFAULT now()"
                },
                {
                    name: "status",
                    type: "TEXT",
                    constraints: "DEFAULT 'active'"
                },
                {
                    name: "source",
                    type: "TEXT",
                    constraints: "DEFAULT 'website'"
                },
                {
                    name: "unsubscribed_at",
                    type: "TIMESTAMPTZ",
                    constraints: ""
                },
                {
                    name: "created_at",
                    type: "TIMESTAMPTZ",
                    constraints: "DEFAULT now()"
                },
                {
                    name: "updated_at",
                    type: "TIMESTAMPTZ",
                    constraints: "DEFAULT now()"
                }
            ],
            manualSql: `
      -- Run this in the Supabase SQL Editor:
      
      -- First check if the table exists
      CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT NOT NULL UNIQUE,
        created_at TIMESTAMPTZ DEFAULT now() NOT NULL
      );
      
      -- Then add each column if it doesn't exist
      DO $$
      BEGIN
        -- Check and add subscription_date
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'subscription_date'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN subscription_date TIMESTAMPTZ DEFAULT now();
        END IF;
        
        -- Check and add status
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'status'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN status TEXT DEFAULT 'active';
        END IF;
        
        -- Check and add source
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'source'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN source TEXT DEFAULT 'website';
        END IF;
        
        -- Check and add unsubscribed_at
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'unsubscribed_at'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN unsubscribed_at TIMESTAMPTZ;
        END IF;
        
        -- Check and add updated_at
        IF NOT EXISTS (
          SELECT FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = 'newsletter_subscriptions' 
          AND column_name = 'updated_at'
        ) THEN
          ALTER TABLE public.newsletter_subscriptions 
          ADD COLUMN updated_at TIMESTAMPTZ DEFAULT now();
        END IF;
      END $$;
      `
        });
    } catch (error) {
        console.error("Error fixing database:", error);
        return next_response/* default */.Z.json({
            success: false,
            message: "Failed to fix database structure",
            error
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ffix-db%2Froute&name=app%2Fapi%2Ffix-db%2Froute&pagePath=private-next-app-dir%2Fapi%2Ffix-db%2Froute.ts&appDir=%2FUsers%2Frhg003%2FDocuments%2FGitHub%2FWaheguru%2Fsrc%2Fapp&appPaths=%2Fapi%2Ffix-db%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/fix-db/route",
        pathname: "/api/fix-db",
        filename: "route",
        bundlePath: "app/api/fix-db/route"
    },
    resolvedPagePath: "/Users/rhg003/Documents/GitHub/Waheguru/src/app/api/fix-db/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/fix-db/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,2778,3066,8100], () => (__webpack_exec__(34906)));
module.exports = __webpack_exports__;

})();