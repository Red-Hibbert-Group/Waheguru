"use strict";
(() => {
var exports = {};
exports.id = 1793;
exports.ids = [1793];
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

/***/ 12491:
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

// NAMESPACE OBJECT: ./src/app/api/enable-rls/route.ts
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
;// CONCATENATED MODULE: ./src/app/api/enable-rls/route.ts


async function GET(request) {
    try {
        // Try to create the RLS policy for anonymous users
        const createPolicySql = `
      -- Enable RLS on the table if it's not already enabled
      ALTER TABLE IF EXISTS public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
      
      -- Drop existing policies if they exist to avoid conflicts
      DROP POLICY IF EXISTS "Allow anonymous inserts to newsletter_subscriptions" ON public.newsletter_subscriptions;
      
      -- Create policy to allow inserts from anonymous users
      CREATE POLICY "Allow anonymous inserts to newsletter_subscriptions"
        ON public.newsletter_subscriptions
        FOR INSERT
        TO anon
        WITH CHECK (true);
        
      -- Policy to allow reading subscriptions (needed for insert...returning)
      DROP POLICY IF EXISTS "Allow public read access to newsletter_subscriptions" ON public.newsletter_subscriptions;
      CREATE POLICY "Allow public read access to newsletter_subscriptions"
        ON public.newsletter_subscriptions
        FOR SELECT
        TO anon
        USING (true);
    `;
        // Try multiple approaches to execute the SQL
        // Approach 1: Using RPC if available
        try {
            const { error: rpcError } = await supabase/* supabase */.OQ.rpc("exec_sql", {
                sql: createPolicySql
            });
            if (!rpcError) {
                return next_response/* default */.Z.json({
                    success: true,
                    message: "RLS policies created successfully",
                    method: "rpc"
                });
            }
        } catch (e) {
            console.error("RPC approach failed:", e);
        }
        // Approach 2: Test if we can insert directly now - maybe policy already exists
        try {
            const testEmail = `test_${Date.now()}@example.com`;
            const { data, error } = await supabase/* supabase */.OQ.from("newsletter_subscriptions").insert({
                email: testEmail
            }).select().single();
            if (!error) {
                // Clean up test data
                await supabase/* supabase */.OQ.from("newsletter_subscriptions").delete().eq("email", testEmail);
                return next_response/* default */.Z.json({
                    success: true,
                    message: "Insert test successful, RLS appears to be properly configured",
                    method: "test-insert"
                });
            }
        } catch (e) {
            console.error("Test insert failed:", e);
        }
        // If we can't fix it automatically, provide SQL for manual execution
        return next_response/* default */.Z.json({
            success: false,
            message: "Could not automatically configure RLS policies. Please run the following SQL in the Supabase SQL editor:",
            sql: createPolicySql
        });
    } catch (error) {
        console.error("Error configuring RLS:", error);
        return next_response/* default */.Z.json({
            success: false,
            message: "Failed to configure RLS policies",
            error
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fenable-rls%2Froute&name=app%2Fapi%2Fenable-rls%2Froute&pagePath=private-next-app-dir%2Fapi%2Fenable-rls%2Froute.ts&appDir=%2FUsers%2Frhg003%2FDocuments%2FGitHub%2FWaheguru%2Fsrc%2Fapp&appPaths=%2Fapi%2Fenable-rls%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/enable-rls/route",
        pathname: "/api/enable-rls",
        filename: "route",
        bundlePath: "app/api/enable-rls/route"
    },
    resolvedPagePath: "/Users/rhg003/Documents/GitHub/Waheguru/src/app/api/enable-rls/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/enable-rls/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,2778,3066,8100], () => (__webpack_exec__(12491)));
module.exports = __webpack_exports__;

})();