exports.id = 728;
exports.ids = [728];
exports.modules = {

/***/ 5187:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 9254:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2493))

/***/ }),

/***/ 2493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ClientLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 197 modules
var proxy = __webpack_require__(2105);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(7686);
;// CONCATENATED MODULE: ./src/components/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Header() {
    const [isScrolled, setIsScrolled] = (0,react_.useState)(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react_.useState)(false);
    const pathname = (0,navigation.usePathname)();
    (0,react_.useEffect)(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const navItems = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Info",
            href: "/info"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ];
    const headerVariants = {
        hidden: {
            y: -100
        },
        visible: {
            y: 0
        }
    };
    const menuItemVariants = {
        closed: {
            opacity: 0,
            x: -10
        },
        open: (i)=>({
                opacity: 1,
                x: 0,
                transition: {
                    delay: i * 0.1
                }
            })
    };
    // Check if the current page has a hero image
    const hasHeroImage = pathname ? pathname === "/about" || pathname.includes("/services/") : false;
    // Check if this is the faith page specifically
    const isFaithPage = pathname === "/faith";
    return /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.header, {
        variants: headerVariants,
        initial: "hidden",
        animate: "visible",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        },
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-neutral-50/95 backdrop-blur-md shadow-md" : isFaithPage ? "bg-neutral-900/40 backdrop-blur-md" // Special dark overlay for faith page
         : "bg-transparent"}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `text-xl font-bold ${isScrolled ? "text-primary-600" : isFaithPage ? "text-white" : "text-primary-600"}`,
                                children: "Waheguru"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: item.href,
                                        className: `relative px-3 py-2 text-sm font-medium transition-colors ${pathname === item.href ? isScrolled ? "text-primary-600" : isFaithPage ? "text-white font-semibold" : "text-primary-600" : isScrolled ? "text-neutral-900 hover:text-primary-600" : isFaithPage ? "text-white hover:text-primary-200" // White text for faith page
                                         : "text-neutral-900 hover:text-primary-600"}`,
                                        children: [
                                            item.name,
                                            pathname === item.href && /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                                layoutId: "underline",
                                                className: `absolute left-0 right-0 bottom-0 h-0.5 ${isScrolled ? "bg-primary-600" : isFaithPage ? "bg-white" : "bg-primary-600"}`,
                                                initial: false,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }
                                            })
                                        ]
                                    }, item.name)),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/donate",
                                    className: `inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide 
							transition-all duration-300 rounded-lg 
							hover:shadow-md hover:scale-105 ${isFaithPage && !isScrolled ? "text-neutral-900 bg-white hover:bg-neutral-100" : "text-white bg-secondary-500 hover:bg-secondary-600"}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "relative z-10",
                                        children: "Donate"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            className: `md:hidden p-2 rounded-md ${isScrolled ? "text-neutral-600 hover:bg-neutral-100 hover:text-primary-600" : isFaithPage ? "text-white hover:bg-white/20" // Light background for faith page
                             : "text-neutral-900 hover:bg-neutral-100 hover:text-primary-600"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: isMobileMenuOpen ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                    children: isMobileMenuOpen && /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "md:hidden",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-2 pt-2 pb-3 space-y-1 bg-neutral-50 rounded-lg shadow-lg mt-2",
                            children: [
                                navItems.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                        custom: i,
                                        variants: menuItemVariants,
                                        initial: "closed",
                                        animate: "open",
                                        exit: "closed",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: item.href,
                                            className: `block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href ? "text-primary-600 bg-primary-50" : "text-neutral-900 hover:text-primary-600 hover:bg-neutral-100"}`,
                                            onClick: ()=>setIsMobileMenuOpen(false),
                                            children: item.name
                                        })
                                    }, item.name)),
                                /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                    custom: navItems.length,
                                    variants: menuItemVariants,
                                    initial: "closed",
                                    animate: "open",
                                    exit: "closed",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/donate",
                                        className: "block w-full text-center px-3 py-2 rounded-md text-base font-medium            text-white bg-secondary-500 transition-all duration-300           hover:bg-secondary-600 hover:shadow-md",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "relative z-10",
                                            children: "Donate"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Footer() {
    const usefulLinks = [
        {
            name: "Sikh Coalition",
            href: "https://www.sikhcoalition.org"
        },
        {
            name: "Sikh History",
            href: "https://www.sikhhistory.com"
        },
        {
            name: "Sikhs.org",
            href: "https://www.sikhs.org"
        },
        {
            name: "Sikh Wikipedia",
            href: "https://en.wikipedia.org/wiki/Sikhism"
        }
    ];
    const socialLinks = [
        {
            name: "Twitter",
            href: "https://twitter.com/waheguru",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "w-6 h-6",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                })
            })
        },
        {
            name: "Facebook",
            href: "https://facebook.com/waheguru",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "w-6 h-6",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                })
            })
        },
        {
            name: "Pinterest",
            href: "https://pinterest.com/waheguru",
            icon: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "w-6 h-6",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                })
            })
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-primary-500 text-neutral-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-xl font-semibold text-secondary-500 mb-4",
                                    children: "ABOUT WAHEGURU"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-neutral-800 leading-relaxed",
                                    children: "Waheguru is devoted to the spread of Sikhism through community outreach. We are a religious nonprofit and all proceeds help advance our gurdwara facilities."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-xl font-semibold text-secondary-500 mb-4",
                                    children: "USEFUL LINKS"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "space-y-3",
                                    children: usefulLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: link.href,
                                                className: "text-neutral-800 hover:text-secondary-500 transition-colors duration-200",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: link.name
                                            })
                                        }, link.name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-xl font-semibold text-secondary-500 mb-4",
                                    children: "SOCIAL"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "space-y-3",
                                    children: socialLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: link.href,
                                                className: "flex items-center gap-3 text-neutral-800 hover:text-secondary-500 transition-colors duration-200 group",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "group-hover:text-secondary-500 transition-colors duration-200",
                                                        children: link.icon
                                                    }),
                                                    link.name
                                                ]
                                            })
                                        }, link.name))
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-12 pt-8 border-t border-primary-400",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-center text-neutral-800 text-sm",
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " Waheguru. All rights reserved."
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/ClientLayout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ClientLayout({ children }) {
    const [mounted, setMounted] = (0,react_.useState)(false);
    // Effect to handle dark/light mode on initial render
    (0,react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        // Returning a minimal layout to avoid hydration mismatch
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "min-h-screen bg-neutral-50 dark:bg-neutral-900",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-16 bg-white dark:bg-neutral-800 shadow-sm"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-64 bg-primary-500 dark:bg-primary-800"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex-grow",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 8755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter"}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter_ = __webpack_require__(7834);
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Poppins","arguments":[{"weight":["400","500","600","700"],"subsets":["latin"],"variable":"--font-poppins"}],"variableName":"poppins"}
var layout_tsx_import_Poppins_arguments_weight_400_500_600_700_subsets_latin_variable_font_poppins_variableName_poppins_ = __webpack_require__(5526);
var layout_tsx_import_Poppins_arguments_weight_400_500_600_700_subsets_latin_variable_font_poppins_variableName_poppins_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Poppins_arguments_weight_400_500_600_700_subsets_latin_variable_font_poppins_variableName_poppins_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Merriweather","arguments":[{"weight":["300","400","700","900"],"subsets":["latin"],"variable":"--font-merriweather"}],"variableName":"merriweather"}
var layout_tsx_import_Merriweather_arguments_weight_300_400_700_900_subsets_latin_variable_font_merriweather_variableName_merriweather_ = __webpack_require__(9350);
var layout_tsx_import_Merriweather_arguments_weight_300_400_700_900_subsets_latin_variable_font_merriweather_variableName_merriweather_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Merriweather_arguments_weight_300_400_700_900_subsets_latin_variable_font_merriweather_variableName_merriweather_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/ClientLayout.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/rhg003/Documents/GitHub/Waheguru/src/components/ClientLayout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ClientLayout = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    metadataBase: new URL("https://waheguru.org"),
    title: "Waheguru - Empowering Communities Through Seva",
    description: "Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world through Sikh values and principles.",
    keywords: "Sikh, Gurdwara, Community Service, Seva, Education, Langar, California",
    openGraph: {
        title: "Waheguru - Empowering Communities Through Seva",
        description: "Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world through Sikh values and principles.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Waheguru Community Service"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Waheguru - Empowering Communities Through Seva",
        description: "Join us in making a difference. Your contribution helps us create lasting positive change in communities around the world through Sikh values and principles.",
        images: [
            "/images/og-image.jpg"
        ]
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: `${(layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter_default()).variable} ${(layout_tsx_import_Poppins_arguments_weight_400_500_600_700_subsets_latin_variable_font_poppins_variableName_poppins_default()).variable} ${(layout_tsx_import_Merriweather_arguments_weight_300_400_700_900_subsets_latin_variable_font_merriweather_variableName_merriweather_default()).variable}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "min-h-screen flex flex-col",
            children: /*#__PURE__*/ jsx_runtime_.jsx(ClientLayout, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;