"use strict";
(() => {
var exports = {};
exports.id = 6102;
exports.ids = [6102];
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

/***/ 77335:
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

// NAMESPACE OBJECT: ./src/app/api/init-db/route.ts
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
;// CONCATENATED MODULE: ./src/app/api/init-db/route.ts


/**
 * This is a protected API route that initializes the database structure
 * It should only be called by administrators
 */ async function GET(request) {
    try {
        // In a real app, you would add authentication here to ensure only admins can run this
        // Check if the newsletter_subscriptions table exists
        const { error: checkError } = await supabase/* supabase */.OQ.from("newsletter_subscriptions").select("id").limit(1);
        if (checkError && checkError.code === "42P01") {
            // Table doesn't exist, create it using the SQL API
            // Note: This requires the service_role key with more permissions
            // than the anon key in a real application
            const { error: createError } = await supabase/* supabase */.OQ.rpc("create_newsletter_table", {});
            if (createError) {
                return next_response/* default */.Z.json({
                    success: false,
                    message: "Failed to create table",
                    error: createError
                }, {
                    status: 500
                });
            }
            return next_response/* default */.Z.json({
                success: true,
                message: "Newsletter subscriptions table created successfully"
            });
        }
        // Check if we need to add missing columns
        const { data: columns, error: columnsError } = await supabase/* supabase */.OQ.rpc("get_table_columns", {
            table_name: "newsletter_subscriptions"
        });
        if (columnsError) {
            return next_response/* default */.Z.json({
                success: false,
                message: "Failed to check table columns",
                error: columnsError
            }, {
                status: 500
            });
        }
        const requiredColumns = [
            "id",
            "email",
            "subscription_date",
            "status",
            "source",
            "unsubscribed_at"
        ];
        const missingColumns = requiredColumns.filter((col)=>!columns || !columns.some((c)=>c.column_name === col));
        if (missingColumns.length > 0) {
            // Add missing columns
            const { error: alterError } = await supabase/* supabase */.OQ.rpc("add_missing_columns", {
                table_name: "newsletter_subscriptions",
                missing_columns: missingColumns
            });
            if (alterError) {
                return next_response/* default */.Z.json({
                    success: false,
                    message: "Failed to add missing columns",
                    error: alterError
                }, {
                    status: 500
                });
            }
            return next_response/* default */.Z.json({
                success: true,
                message: `Added missing columns: ${missingColumns.join(", ")}`
            });
        }
        return next_response/* default */.Z.json({
            success: true,
            message: "Database structure is correct"
        });
    } catch (error) {
        console.error("Error initializing database:", error);
        return next_response/* default */.Z.json({
            success: false,
            message: "Failed to initialize database",
            error
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Finit-db%2Froute&name=app%2Fapi%2Finit-db%2Froute&pagePath=private-next-app-dir%2Fapi%2Finit-db%2Froute.ts&appDir=%2FUsers%2Frhg003%2FDocuments%2FGitHub%2FWaheguru%2Fsrc%2Fapp&appPaths=%2Fapi%2Finit-db%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/init-db/route",
        pathname: "/api/init-db",
        filename: "route",
        bundlePath: "app/api/init-db/route"
    },
    resolvedPagePath: "/Users/rhg003/Documents/GitHub/Waheguru/src/app/api/init-db/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/init-db/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,2778,3066,8100], () => (__webpack_exec__(77335)));
module.exports = __webpack_exports__;

})();