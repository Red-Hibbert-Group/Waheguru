"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 2549:
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

// NAMESPACE OBJECT: ./src/app/api/create-payment-intent/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./node_modules/stripe/esm/stripe.esm.node.js + 147 modules
var stripe_esm_node = __webpack_require__(1550);
;// CONCATENATED MODULE: ./src/app/api/create-payment-intent/route.ts


const stripe = new stripe_esm_node/* default */.Z(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-03-31.basil"
});
async function POST(req) {
    try {
        const { amount, type } = await req.json();
        // Create a product
        const product = await stripe.products.create({
            name: `${type === "one-time" ? "One-time" : "Monthly"} Donation`,
            description: `Donation to Waheguru - ${type === "one-time" ? "One-time" : "Monthly"} contribution`
        });
        // Create a price for the product
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: Math.round(amount * 100),
            currency: "usd",
            recurring: type === "monthly" ? {
                interval: "month"
            } : undefined
        });
        return next_response/* default */.Z.json({
            priceId: price.id
        });
    } catch (error) {
        console.error("Error creating Stripe product/price:", error);
        return next_response/* default */.Z.json({
            error: "Error creating Stripe product/price"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcreate-payment-intent%2Froute&name=app%2Fapi%2Fcreate-payment-intent%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcreate-payment-intent%2Froute.ts&appDir=%2FUsers%2Frhg003%2FDocuments%2FGitHub%2FWaheguru%2Fsrc%2Fapp&appPaths=%2Fapi%2Fcreate-payment-intent%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/create-payment-intent/route",
        pathname: "/api/create-payment-intent",
        filename: "route",
        bundlePath: "app/api/create-payment-intent/route"
    },
    resolvedPagePath: "/Users/rhg003/Documents/GitHub/Waheguru/src/app/api/create-payment-intent/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/create-payment-intent/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,778,550], () => (__webpack_exec__(2549)));
module.exports = __webpack_exports__;

})();