"use strict";
(() => {
var exports = {};
exports.id = 6499;
exports.ids = [6499];
exports.modules = {

/***/ 56786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 17252:
/***/ ((module) => {

module.exports = require("prettier/plugins/html");

/***/ }),

/***/ 87413:
/***/ ((module) => {

module.exports = require("prettier/standalone");

/***/ }),

/***/ 50852:
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ 84492:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 76820:
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

// NAMESPACE OBJECT: ./src/app/api/send-email/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./node_modules/resend/dist/index.mjs
var dist = __webpack_require__(3506);
;// CONCATENATED MODULE: ./src/lib/email-templates/contact-confirmation.tsx
/**
 * Generate the HTML email template for contact confirmation
 * @param props - Contact email props including name and email
 * @returns HTML string for the email
 */ function generateContactEmailTemplate({ name, email }) {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Waheguru</title>
    <style>
      .button-hover:hover {
        background: linear-gradient(90deg, #FFB84D, #FF9D00) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 12px rgba(255, 157, 0, 0.3) !important;
      }
    </style>
  </head>
  <body style='background-color:#f6f9fc;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'>
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
      Thank you for contacting Waheguru! We've received your message and will get back to you soon.
    </div>
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:37.5em;background-color:#ffffff;margin:0 auto;padding:20px 0 48px;margin-bottom:64px">
      <tbody>
        <tr style="width:100%">
          <td>
            <div style="padding:20px 48px">
              <div style="display:flex;align-items:center">
                <div style="display:inline-block">
                  <span style="background:linear-gradient(90deg, #F0A500 0%, #444444 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:28px;font-weight:600">Wahe</span><span style="color:#444444;font-size:28px;font-weight:600">guru</span>
                </div>
              </div>
            </div>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="padding:0 48px">
              <tbody>
                <tr>
                  <td>
                    <div style="width:100%;height:4px;background:linear-gradient(90deg, #F0A500, #444444);margin:0 0 20px 0;border-radius:2px"></div>
                    
                    <h1 style="color:#333333;font-size:24px;line-height:32px;text-align:center;margin:24px 0">
                      Thank You for Contacting Us
                    </h1>
                    
                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      Dear ${name},
                    </p>
                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      Thank you for reaching out to Waheguru. We have received your message and will get back to you shortly. Our team appreciates your interest and will respond as soon as possible.
                    </p>

                    <div style="background-color:#f8fafc;border-radius:8px;padding:24px;margin:32px 0">
                      <div style="font-style:italic;color:#525f7f;margin-bottom:16px">
                        "Through the Guru's teachings, we remain absorbed in the Lord's Name."
                        — Guru Granth Sahib Ji
                      </div>
                    </div>

                    <div style="background-color:#f8fafc;border-radius:8px;padding:24px;margin:32px 0">
                      <h2 style="color:#333333;font-size:18px;margin:0 0 16px 0">As a member of our community, you'll have access to:</h2>
                      <ul style="color:#525f7f;font-size:16px;line-height:24px;margin:0;padding:0 0 0 24px">
                        <li style="margin-bottom:8px">Daily spiritual guidance and teachings</li>
                        <li style="margin-bottom:8px">Community events and gatherings</li>
                        <li style="margin-bottom:8px">Langar services and community kitchen</li>
                        <li style="margin-bottom:8px">Educational programs and workshops</li>
                        <li>Youth activities and leadership programs</li>
                      </ul>
                    </div>

                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      We encourage you to participate in our various programs and services:
                    </p>
                    <ul style="color:#525f7f;font-size:16px;line-height:24px;margin:0;padding:0 0 0 24px">
                      <li style="margin-bottom:8px">Daily prayer services</li>
                      <li style="margin-bottom:8px">Community outreach programs</li>
                      <li style="margin-bottom:8px">Cultural celebrations</li>
                      <li>Educational workshops</li>
                    </ul>

                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin:24px 0">
                      Stay connected with us through our regular updates and events. If you need assistance, please contact us at 
                      <a href="mailto:contact@waheguru.com" style="color:#FF9D00;text-decoration-line:none" target="_blank">
                        contact@waheguru.com
                      </a>.
                    </p>

                    <a href="https://waheguru-delta.vercel.app/" class="button-hover" style="line-height:100%;text-decoration:none;display:block;max-width:300px;background:linear-gradient(90deg, #FF9D00, #FFB84D);border-radius:8px;color:#fff;font-size:16px;font-weight:600;text-align:center;padding:16px 24px;margin:32px auto;transition:all 0.3s ease;box-shadow:0 4px 8px rgba(255, 157, 0, 0.2)" target="_blank">
                      <span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:7.5px">
                        Visit Our Website
                      </span>
                    </a>

                    <div style="width:100%;height:1px;background-color:#e6ebf1;margin:20px 0"></div>

                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      With warm regards,<br/>
                      The Waheguru Team
                    </p>

                    <div style="width:100%;height:1px;background-color:#e6ebf1;margin:20px 0"></div>

                    <p style="font-size:12px;line-height:16px;color:#8898aa;text-align:center;margin-bottom:16px;margin-top:16px">
                      © 2024 Waheguru. All rights reserved.<br/>
                      This email was sent to ${email} because you contacted us on our website.<br/>
                      If you wish to unsubscribe, please <a href="#" style="color:#FF9D00;text-decoration-line:none">click here</a>.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

;// CONCATENATED MODULE: ./src/app/api/send-email/route.ts



// Initialize Resend with API key
const resend = new dist/* Resend */.R("re_JQWx3euy_8D2grrbT8wCG6GAURADqAVij");
const dynamic = "force-dynamic" // Mark this route as dynamic
;
async function POST(request) {
    try {
        // Parse the request body
        const body = await request.json();
        const { name, email, message } = body;
        console.log("Sending email to:", email);
        // Validate required fields
        if (!name || !email || !message) {
            return next_response/* default */.Z.json({
                success: false,
                error: "Missing required fields"
            }, {
                status: 400
            });
        }
        // Send the confirmation email using verified domain
        const { data, error } = await resend.emails.send({
            from: "Waheguru Contact <contact@e.waheguru.org>",
            to: [
                email
            ],
            subject: "Thank you for contacting Waheguru",
            html: generateContactEmailTemplate({
                name,
                email
            }),
            text: `Dear ${name}, Thank you for contacting Waheguru. We have received your message and will get back to you shortly.`
        });
        if (error) {
            console.error("Resend API error:", error);
            return next_response/* default */.Z.json({
                success: false,
                error: error.message
            }, {
                status: 500
            });
        }
        console.log("Email sent successfully, ID:", data?.id);
        return next_response/* default */.Z.json({
            success: true,
            message: "Email sent successfully",
            messageId: data?.id
        });
    } catch (error) {
        console.error("Email sending error:", error);
        return next_response/* default */.Z.json({
            success: false,
            error: "Failed to send email",
            details: error.message
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsend-email%2Froute&name=app%2Fapi%2Fsend-email%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Frhg003%2FDocuments%2FGitHub%2FWaheguru%2Fsrc%2Fapp&appPaths=%2Fapi%2Fsend-email%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/send-email/route",
        pathname: "/api/send-email",
        filename: "route",
        bundlePath: "app/api/send-email/route"
    },
    resolvedPagePath: "/Users/rhg003/Documents/GitHub/Waheguru/src/app/api/send-email/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/send-email/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,2778,3506], () => (__webpack_exec__(76820)));
module.exports = __webpack_exports__;

})();