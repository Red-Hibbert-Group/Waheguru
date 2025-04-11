"use strict";
(() => {
var exports = {};
exports.id = 1252;
exports.ids = [1252];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 16428:
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

// NAMESPACE OBJECT: ./src/app/api/fix-newsletter-table/route.ts
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
;// CONCATENATED MODULE: ./src/app/api/fix-newsletter-table/route.ts

// Use the same URL and key from the supabase.ts file
const supabaseUrl = "https://obwokyhpvdqewaatrnma.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9id29reWhwdmRxZXdhYXRybm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNjMzMjgsImV4cCI6MjA1OTkzOTMyOH0.DK8PEGmTyC32HWislTj1oDmx4y6JG0gK43HX2IR8xck";
async function GET(request) {
    try {
        // Direct SQL approach - create the table if not exists with all required columns
        const sql = `
    CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    
    -- Now add columns if they don't exist
    DO $$
    BEGIN
      -- Add subscription_date column if it doesn't exist
      IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'newsletter_subscriptions' 
        AND column_name = 'subscription_date'
      ) THEN
        ALTER TABLE public.newsletter_subscriptions 
        ADD COLUMN subscription_date TIMESTAMPTZ NOT NULL DEFAULT now();
      END IF;
      
      -- Add status column if it doesn't exist
      IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'newsletter_subscriptions' 
        AND column_name = 'status'
      ) THEN
        ALTER TABLE public.newsletter_subscriptions 
        ADD COLUMN status TEXT NOT NULL DEFAULT 'active';
      END IF;
      
      -- Add source column if it doesn't exist
      IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'newsletter_subscriptions' 
        AND column_name = 'source'
      ) THEN
        ALTER TABLE public.newsletter_subscriptions 
        ADD COLUMN source TEXT DEFAULT 'website';
      END IF;
      
      -- Add unsubscribed_at column if it doesn't exist
      IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'newsletter_subscriptions' 
        AND column_name = 'unsubscribed_at'
      ) THEN
        ALTER TABLE public.newsletter_subscriptions 
        ADD COLUMN unsubscribed_at TIMESTAMPTZ NULL;
      END IF;
    END $$;
    
    -- Create index on email if it doesn't exist
    CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email 
    ON public.newsletter_subscriptions(email);
    `;
        // Use the Supabase REST API to execute the SQL
        // Note: This won't work with anon key, but worth a try
        const response = await fetch(`${supabaseUrl}/rest/v1/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${supabaseKey}`,
                "Prefer": "resolution=merge-duplicates"
            },
            body: JSON.stringify({
                query: sql
            })
        });
        if (!response.ok) {
            return next_response/* default */.Z.json({
                success: false,
                message: "Error executing SQL directly",
                error: await response.text()
            }, {
                status: 500
            });
        }
        return next_response/* default */.Z.json({
            success: true,
            message: "Newsletter table structure updated successfully"
        });
    } catch (error) {
        console.error("Error fixing newsletter table:", error);
        return next_response/* default */.Z.json({
            success: false,
            message: "Failed to fix newsletter table",
            error
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ffix-newsletter-table%2Froute&name=app%2Fapi%2Ffix-newsletter-table%2Froute&pagePath=private-next-app-dir%2Fapi%2Ffix-newsletter-table%2Froute.ts&appDir=%2FUsers%2Frhg003%2FDocuments%2FGitHub%2FWaheguru%2Fsrc%2Fapp&appPaths=%2Fapi%2Ffix-newsletter-table%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/fix-newsletter-table/route",
        pathname: "/api/fix-newsletter-table",
        filename: "route",
        bundlePath: "app/api/fix-newsletter-table/route"
    },
    resolvedPagePath: "/Users/rhg003/Documents/GitHub/Waheguru/src/app/api/fix-newsletter-table/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/fix-newsletter-table/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,2778], () => (__webpack_exec__(16428)));
module.exports = __webpack_exports__;

})();