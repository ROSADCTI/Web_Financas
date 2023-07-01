"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3175], {
        73175: function(l, e, o) {
            o.r(e), o.d(e, {
                default: function() {
                    return K
                }
            });
            var n = o(14251),
                i = o(85893),
                t = o(31996),
                s = o(67294),
                a = o(52077),
                r = o(90387),
                d = o(41664),
                c = o.n(d),
                u = o(17258),
                v = o(22872),
                h = o(71029),
                m = o(85296),
                f = o(44171),
                x = o(43180),
                g = o(10151),
                p = o(36234),
                y = o(66909),
                j = o(49791),
                b = o(28239),
                N = o(48192),
                w = o(94206),
                k = o(13487),
                A = o(32713),
                C = o(65710),
                Z = o(43751),
                _ = o(3677),
                S = o(41984),
                F = o(74007),
                R = [{
                    id: "facebook",
                    host: "facebook.com"
                }, {
                    id: "twitter",
                    host: "twitter.com"
                }, {
                    id: "linkedin",
                    host: "linkedin.com"
                }, {
                    id: "youtube",
                    host: "youtube.com"
                }, {
                    id: "pinterest",
                    host: "pinterest.com"
                }, {
                    id: "instagram",
                    host: "instagram.com"
                }, {
                    id: "tiktok",
                    host: "tiktok.com"
                }, {
                    id: "thumbtack",
                    host: "thumbtack.com"
                }, {
                    id: "homeadvisor",
                    host: "homeadvisor.com"
                }, {
                    id: "angi",
                    host: "angi.com"
                }, {
                    id: "behance",
                    host: "behance.net"
                }, {
                    id: "dribbble",
                    host: "dribbble.com"
                }];

            function K(l) {
                var e, o, d, K, z, M, P, W, E, L, T, D, B = l.website,
                    I = (0, t.ac)("(max-width: 1023px)"),
                    O = (0, s.useState)(!1),
                    V = O[0],
                    H = O[1],
                    $ = (0, s.useState)("#FFFFFF"),
                    q = $[0],
                    G = $[1],
                    J = (0, s.useState)("#000000"),
                    Q = J[0],
                    U = J[1],
                    X = (0, s.useState)(null),
                    Y = X[0],
                    ll = X[1],
                    el = (0, r.useRouter)(),
                    ol = null === B || void 0 === B || null === (e = B.pages) || void 0 === e ? void 0 : e.find((function(l) {
                        return !l.slug && l.default
                    })),
                    nl = null === B || void 0 === B ? void 0 : B.header,
                    il = null === (d = null === (o = B.pages) || void 0 === o ? void 0 : o.filter((function(l) {
                        return (!0 === l.showOnHeader || void 0 === l.showOnHeader) && null !== l.slug
                    }))) || void 0 === d ? void 0 : d.map((function(l) {
                        var e = {
                            href: "/".concat(l.slug || ""),
                            name: l.label,
                            current: el.asPath === "/".concat(l.slug || "") || el.asPath.includes("/".concat(l.slug, "/")),
                            type: l.type,
                            forceRender: l.forceRender
                        };
                        return "parent" === e.type && (e.nests = B.pages.filter((function(e) {
                            return e.Parent === l._id
                        })).map((function(e) {
                            return {
                                href: "/".concat(l.slug, "/").concat(e.slug || ""),
                                name: e.label,
                                current: el.asPath === "/".concat(l.slug, "/").concat(e.slug || ""),
                                forceRender: e.forceRender
                            }
                        })), 0 === e.nests.length) ? null : e
                    })).filter((function(l) {
                        return null !== l && "nested" !== l.type
                    })),
                    tl = function(l, e) {
                        var o = e ? "w-6 h-6 lg:w-8 lg:h-8" : "w-8 h-8";
                        switch (l.type) {
                            case "angi":
                                return (0, i.jsx)(h.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "behance":
                                return (0, i.jsx)(m.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "dribbble":
                                return (0, i.jsx)(f.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "facebook":
                                return (0, i.jsx)(x.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "homeadvisor":
                                return (0, i.jsx)(g.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "instagram":
                                return (0, i.jsx)(p.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "linkedin":
                                return (0, i.jsx)(y.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "pinterest":
                                return (0, i.jsx)(j.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "tiktok":
                                return (0, i.jsx)(b.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "thumbtack":
                                return (0, i.jsx)(N.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "twitter":
                                return (0, i.jsx)(w.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "youtube":
                                return (0, i.jsx)(k.Z, {
                                    className: o,
                                    style: {
                                        color: Q
                                    }
                                });
                            case "custom":
                                var n, s;
                                return (0, i.jsx)("div", {
                                    className: (0, t.AK)("flex-shrink-0 relative", o),
                                    children: (0, i.jsx)("div", {
                                        className: "absolute w-full h-full",
                                        style: {
                                            backgroundColor: Q || "#000000",
                                            WebkitMaskImage: 'url("'.concat(null === l || void 0 === l || null === (n = l.icon) || void 0 === n ? void 0 : n.url, '")'),
                                            maskImage: 'url("'.concat(null === l || void 0 === l || null === (s = l.icon) || void 0 === s ? void 0 : s.url, '")'),
                                            WebkitMaskPosition: "center",
                                            maskPosition: "center",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskRepeat: "no-repeat",
                                            WebkitMaskSize: "contain",
                                            maskSize: "contain"
                                        }
                                    })
                                })
                        }
                    },
                    sl = function() {
                        return (0, i.jsx)("div", {
                            className: (0, t.AK)("hidden lg:flex items-center flex-shrink-0"),
                            children: (0, i.jsx)(a.Z, {
                                className: "xl !text-2xl !py-1.5",
                                button: null === nl || void 0 === nl ? void 0 : nl.button,
                                website: B
                            })
                        })
                    },
                    al = function(l, e) {
                        return (0, i.jsx)("ul", {
                            className: (0, t.AK)("lg:flex items-center gap-x-4 gap-y-2 flex-wrap", "full-center" !== l ? "justify-end" : "", !e && "hidden"),
                            children: Array.isArray(B.social) && B.social.map((function(l, o) {
                                var n = R.find((function(e) {
                                        return e.id === l.type
                                    })),
                                    t = l.link;
                                return "custom" !== l.type && (t = (t = l.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === n || void 0 === n ? void 0 : n.host, ""), t = "https://".concat(null === n || void 0 === n ? void 0 : n.host, "/").concat(t)), (0, i.jsx)("li", {
                                    children: (0, i.jsx)(c(), {
                                        href: t,
                                        children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            children: tl(l, e)
                                        })
                                    })
                                }, "social-icon-header-".concat(o))
                            }))
                        })
                    },
                    rl = function() {
                        var l, e, o, s, a, r, d, u;
                        return (null === nl || void 0 === nl ? void 0 : nl.showLogo) && "branding" === (null === nl || void 0 === nl ? void 0 : nl.source) && (null === B || void 0 === B ? void 0 : B.logo) ? (0, i.jsx)(c(), {
                            href: "/",
                            children: (0, i.jsxs)("a", {
                                className: "max-w-full overflow-hidden grid",
                                target: (null === ol || void 0 === ol ? void 0 : ol.forceRender) ? "_parent" : "_self",
                                children: [(0, i.jsx)("img", {
                                    className: "hidden lg:block transition-all object-contain",
                                    src: null === B || void 0 === B || null === (l = B.logo) || void 0 === l ? void 0 : l.url,
                                    alt: null === nl || void 0 === nl ? void 0 : nl.siteName,
                                    style: {
                                        height: (null === nl || void 0 === nl || null === (e = nl.logoDesktop) || void 0 === e ? void 0 : e.height) + "px"
                                    }
                                }), (0, i.jsx)("img", {
                                    className: "lg:hidden transition-all object-contain",
                                    src: null === B || void 0 === B || null === (o = B.logo) || void 0 === o ? void 0 : o.url,
                                    alt: null === nl || void 0 === nl ? void 0 : nl.siteName,
                                    style: {
                                        height: (null === nl || void 0 === nl || null === (s = nl.logoMobile) || void 0 === s ? void 0 : s.height) + "px"
                                    }
                                })]
                            })
                        }) : (null === nl || void 0 === nl ? void 0 : nl.showLogo) && "upload" === (null === nl || void 0 === nl ? void 0 : nl.source) && (null === nl || void 0 === nl ? void 0 : nl.customLogo) ? (0, i.jsx)(c(), {
                            href: "/",
                            children: (0, i.jsxs)("a", {
                                className: "max-w-full overflow-hidden grid",
                                target: (null === ol || void 0 === ol ? void 0 : ol.forceRender) ? "_parent" : "_self",
                                children: [(0, i.jsx)("img", {
                                    className: "hidden lg:block transition-all object-contain",
                                    src: null === nl || void 0 === nl || null === (a = nl.customLogo) || void 0 === a ? void 0 : a.url,
                                    alt: null === nl || void 0 === nl ? void 0 : nl.siteName,
                                    style: {
                                        height: (null === nl || void 0 === nl || null === (r = nl.logoDesktop) || void 0 === r ? void 0 : r.height) + "px"
                                    }
                                }), (0, i.jsx)("img", {
                                    className: "lg:hidden transition-all object-contain",
                                    src: null === nl || void 0 === nl || null === (d = nl.customLogo) || void 0 === d ? void 0 : d.url,
                                    alt: null === nl || void 0 === nl ? void 0 : nl.siteName,
                                    style: {
                                        height: (null === nl || void 0 === nl || null === (u = nl.logoMobile) || void 0 === u ? void 0 : u.height) + "px"
                                    }
                                })]
                            })
                        }) : (0, i.jsx)(c(), {
                            href: "/",
                            children: (0, i.jsx)("a", {
                                className: "max-w-full overflow-hidden grid",
                                target: (null === ol || void 0 === ol ? void 0 : ol.forceRender) ? "_parent" : "_self",
                                children: (0, i.jsx)("h1", {
                                    className: "heading-small lg:heading-medium overflow-hidden whitespace-nowrap overflow-ellipsis",
                                    style: (0, n.Z)({
                                        color: Q
                                    }, (0, t.j2)(B)),
                                    children: null === nl || void 0 === nl ? void 0 : nl.siteName
                                })
                            })
                        })
                    },
                    dl = function(l) {
                        if (0 === (null === il || void 0 === il ? void 0 : il.length)) return (0, i.jsx)(i.Fragment, {});
                        var e = (0, t.h)(q, -10);
                        return e !== Q && e !== q || (e = (0, t.h)(q, 10)), (0, i.jsx)("ul", {
                            className: (0, t.AK)("hidden lg:flex items-center flex-wrap gap-x-6", "left" === l && "justify-end", "full-center" === l && "justify-center"),
                            style: {
                                color: Q
                            },
                            children: null === il || void 0 === il ? void 0 : il.map((function(l) {
                                var o;
                                return (0, i.jsx)("li", {
                                    className: "border-b-2",
                                    style: {
                                        borderColor: l.current ? "".concat(Q) : "transparent"
                                    },
                                    children: "parent" === l.type ? (0, i.jsx)(F.Z, {
                                        buttonClassName: "inline-flex items-center gap-2 py-1.5",
                                        itemsContainerClass: "!pl-6 !pr-12 w-max max-w-120 !max-h-50 no-scrollbar",
                                        button: (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)("span", {
                                                className: "body-normal whitespace-nowrap",
                                                children: l.name
                                            }), (0, i.jsx)(A.Z, {
                                                className: "w-4 h-4"
                                            })]
                                        }),
                                        itemsContainerStyle: {
                                            backgroundColor: e,
                                            color: Q
                                        },
                                        children: null === (o = l.nests) || void 0 === o ? void 0 : o.map((function(e) {
                                            return (0, i.jsx)(u.v.Item, {
                                                children: (0, i.jsx)(c(), {
                                                    href: e.href,
                                                    legacyBehavior: !1,
                                                    className: "block py-2 body-normal border-b-2",
                                                    style: {
                                                        borderColor: e.current ? "".concat(Q) : "transparent"
                                                    },
                                                    children: (0, i.jsx)("a", {
                                                        target: l.forceRender ? "_parent" : "_self",
                                                        children: e.name
                                                    })
                                                })
                                            }, "page-link-".concat(e.href))
                                        }))
                                    }) : (0, i.jsx)(c(), {
                                        href: l.href,
                                        children: (0, i.jsx)("a", {
                                            className: "block py-1.5 body-normal whitespace-nowrap",
                                            target: l.forceRender ? "_parent" : "_self",
                                            children: l.name
                                        })
                                    })
                                }, "page-link-".concat(l.href))
                            }))
                        })
                    };
                return (0, s.useEffect)((function() {
                    if (nl) {
                        var l, e, o;
                        if (G(nl.background || "#FFFFFF"), null === nl.siteName || void 0 === nl.siteName) nl.siteName = null === B || void 0 === B || null === (o = B.Business) || void 0 === o ? void 0 : o.name;
                        nl.style || (nl.style = "left"), (null === (l = nl.logoDesktop) || void 0 === l ? void 0 : l.height) || (nl.logoDesktop = {
                            height: 80
                        }), (null === (e = nl.logoMobile) || void 0 === e ? void 0 : e.height) || (nl.logoMobile = {
                            height: 40
                        })
                    }
                }), [nl]), (0, s.useEffect)((function() {
                    q && U((0, t.$O)(q))
                }), [q]), (0, s.useEffect)((function() {
                    H(!1), ll(null)
                }), [el, I]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("header", {
                        className: (0, t.AK)((null === nl || void 0 === nl ? void 0 : nl.sticky) ? "sticky top-0 shadow-sm" : "", (null === nl || void 0 === nl ? void 0 : nl.sticky) && !V ? "!z-[2000]" : ""),
                        style: {
                            backgroundColor: q,
                            color: Q
                        },
                        children: (0, i.jsx)("div", {
                            className: (0, t.AK)("grid items-center lg:gap-6 xl:gap-10 mx-auto py-6", (null === nl || void 0 === nl ? void 0 : nl.fullWidth) ? "px-6 lg:px-12" : "container"),
                            style: (D = null === nl || void 0 === nl ? void 0 : nl.style, "center" === D ? {
                                gridTemplateColumns: "1fr auto 1fr"
                            } : "full-center" === D ? (null === il || void 0 === il ? void 0 : il.length) > 6 ? {
                                gridTemplateColumns: "1fr 4fr 1fr"
                            } : {
                                gridTemplateColumns: "1fr auto 1fr"
                            } : {
                                gridTemplateColumns: "auto auto auto"
                            }),
                            children: "center" === (null === nl || void 0 === nl ? void 0 : nl.style) ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "lg:w-auto whitespace-nowrap",
                                    children: dl(null === nl || void 0 === nl ? void 0 : nl.style)
                                }), (0, i.jsx)("div", {
                                    className: "flex justify-center truncate",
                                    children: rl()
                                }), (0, i.jsxs)("div", {
                                    className: "flex justify-end",
                                    children: [(0, i.jsxs)("div", {
                                        className: "hidden lg:flex item-center gap-10",
                                        children: [(null === nl || void 0 === nl ? void 0 : nl.showSocial) && al(null === nl || void 0 === nl ? void 0 : nl.style), (null === nl || void 0 === nl ? void 0 : nl.button) && sl()]
                                    }), (0, i.jsxs)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: [((null === nl || void 0 === nl ? void 0 : nl.button) || (null === il || void 0 === il ? void 0 : il.length) > 0 || (null === nl || void 0 === nl ? void 0 : nl.showSocial) && Array.isArray(null === B || void 0 === B ? void 0 : B.social) && (null === B || void 0 === B || null === (K = B.social) || void 0 === K ? void 0 : K.length) > 1) && (0, i.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: Q
                                            },
                                            onClick: function() {
                                                return H(!0)
                                            },
                                            children: (0, i.jsx)(C.Z, {
                                                className: "block h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        }), !(null === nl || void 0 === nl ? void 0 : nl.button) && 0 === (null === il || void 0 === il ? void 0 : il.length) && (null === nl || void 0 === nl ? void 0 : nl.showSocial) && Array.isArray(null === B || void 0 === B ? void 0 : B.social) && 1 === (null === B || void 0 === B || null === (z = B.social) || void 0 === z ? void 0 : z.length) && al(null === nl || void 0 === nl ? void 0 : nl.style, !0)]
                                    })]
                                })]
                            }) : "full-center" === (null === nl || void 0 === nl ? void 0 : nl.style) ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "lg:w-auto whitespace-nowrap",
                                    children: (null === nl || void 0 === nl ? void 0 : nl.showSocial) && al(null === nl || void 0 === nl ? void 0 : nl.style)
                                }), (0, i.jsxs)("div", {
                                    className: "flex-1 flex flex-col items-center gap-4 whitespace-nowrap",
                                    children: [(0, i.jsx)("div", {
                                        className: "flex justify-center w-full truncate",
                                        children: rl()
                                    }), dl(null === nl || void 0 === nl ? void 0 : nl.style)]
                                }), (0, i.jsxs)("div", {
                                    className: "flex justify-end whitespace-nowrap",
                                    children: [(null === nl || void 0 === nl ? void 0 : nl.button) && sl(), (0, i.jsxs)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: [((null === nl || void 0 === nl ? void 0 : nl.button) || (null === il || void 0 === il ? void 0 : il.length) > 0 || (null === nl || void 0 === nl ? void 0 : nl.showSocial) && Array.isArray(null === B || void 0 === B ? void 0 : B.social) && (null === B || void 0 === B || null === (M = B.social) || void 0 === M ? void 0 : M.length) > 1) && (0, i.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: Q
                                            },
                                            onClick: function() {
                                                return H(!0)
                                            },
                                            children: (0, i.jsx)(C.Z, {
                                                className: "block h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        }), !(null === nl || void 0 === nl ? void 0 : nl.button) && 0 === (null === il || void 0 === il ? void 0 : il.length) && (null === nl || void 0 === nl ? void 0 : nl.showSocial) && Array.isArray(null === B || void 0 === B ? void 0 : B.social) && 1 === (null === B || void 0 === B || null === (P = B.social) || void 0 === P ? void 0 : P.length) && al(null === nl || void 0 === nl ? void 0 : nl.style, !0)]
                                    })]
                                })]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "col-span-2 lg:col-span-1 truncate",
                                    children: rl()
                                }), (0, i.jsxs)("div", {
                                    className: "hidden lg:flex item-center justify-end gap-10 lg:col-span-2",
                                    children: [dl(null === nl || void 0 === nl ? void 0 : nl.style), (null === nl || void 0 === nl ? void 0 : nl.showSocial) && al(null === nl || void 0 === nl ? void 0 : nl.style), (null === nl || void 0 === nl ? void 0 : nl.button) && sl()]
                                }), (0, i.jsxs)("div", {
                                    className: "ml-auto lg:hidden",
                                    children: [((null === nl || void 0 === nl ? void 0 : nl.button) || (null === il || void 0 === il ? void 0 : il.length) > 0 || (null === nl || void 0 === nl ? void 0 : nl.showSocial) && Array.isArray(null === B || void 0 === B ? void 0 : B.social) && (null === B || void 0 === B || null === (W = B.social) || void 0 === W ? void 0 : W.length) > 1) && (0, i.jsx)("button", {
                                        className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                        style: {
                                            color: Q
                                        },
                                        onClick: function() {
                                            return H(!0)
                                        },
                                        children: (0, i.jsx)(C.Z, {
                                            className: "block h-5 w-5",
                                            "aria-hidden": "true"
                                        })
                                    }), !(null === nl || void 0 === nl ? void 0 : nl.button) && 0 === (null === il || void 0 === il ? void 0 : il.length) && (null === nl || void 0 === nl ? void 0 : nl.showSocial) && Array.isArray(null === B || void 0 === B ? void 0 : B.social) && 1 === (null === B || void 0 === B || null === (E = B.social) || void 0 === E ? void 0 : E.length) && al(null === nl || void 0 === nl ? void 0 : nl.style, !0)]
                                })]
                            })
                        })
                    }), (0, i.jsx)(v.V, {
                        open: V,
                        onClose: function() {
                            return H(!1)
                        },
                        className: "relative z-[3000] h-full",
                        children: (0, i.jsx)(v.V.Panel, {
                            className: (0, t.AK)("fixed flex flex-col", (!(null === nl || void 0 === nl ? void 0 : nl.button) || 0 !== (null === il || void 0 === il ? void 0 : il.length) || (null === nl || void 0 === nl ? void 0 : nl.showSocial)) && !(0 === (null === il || void 0 === il ? void 0 : il.length) && (null === nl || void 0 === nl ? void 0 : nl.showSocial) && Array.isArray(null === B || void 0 === B ? void 0 : B.social) && (null === B || void 0 === B ? void 0 : B.social.length) > 1) && ((null === nl || void 0 === nl ? void 0 : nl.button) || nl.showSocial || 1 !== il.length) && (1 !== (null === il || void 0 === il ? void 0 : il.length) || !(null === nl || void 0 === nl ? void 0 : nl.button) && !nl.showSocial) ? "inset-0 h-full" : "top-0 left-0 right-0"),
                            style: {
                                backgroundColor: q,
                                color: Q
                            },
                            children: (0, i.jsxs)("div", {
                                className: (0, t.AK)("flex-1 flex flex-col h-full mx-auto pb-6", (null === nl || void 0 === nl ? void 0 : nl.fullWidth) ? "w-full px-6" : "container"),
                                children: [(0, i.jsxs)("div", {
                                    className: (0, t.AK)("items-center py-6", "left" !== (null === nl || void 0 === nl ? void 0 : nl.style) ? "grid" : "flex justify-between"),
                                    style: "left" !== (null === nl || void 0 === nl ? void 0 : nl.style) ? {
                                        gridTemplateColumns: "1fr auto 1fr"
                                    } : {},
                                    children: [("center" === (null === nl || void 0 === nl ? void 0 : nl.style) || "full-center" === (null === nl || void 0 === nl ? void 0 : nl.style)) && (0, i.jsx)("div", {}), rl(), (0, i.jsx)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: (0, i.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: Q
                                            },
                                            onClick: function() {
                                                return H(!1)
                                            },
                                            children: (0, i.jsx)(Z.Z, {
                                                className: "block h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    })]
                                }), (null === il || void 0 === il ? void 0 : il.length) > 0 && (0, i.jsx)("ul", {
                                    className: (0, t.AK)("flex-1 flex flex-col justify-center gap-3 w-full py-6 overflow-auto", "center" === (null === nl || void 0 === nl ? void 0 : nl.style) || "full-center" === (null === nl || void 0 === nl ? void 0 : nl.style) ? "text-center" : ""),
                                    style: (0, n.Z)({
                                        color: Q
                                    }, (0, t.SV)(B)),
                                    children: 1 === il.length && "parent" === il[0].type ? (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)("li", {
                                            className: "text-xl font-medium py-2",
                                            style: {
                                                borderColor: il[0].current ? "".concat(Q) : "transparent"
                                            },
                                            children: (0, i.jsx)("span", {
                                                className: "block w-full",
                                                children: il[0].name
                                            })
                                        }, "page-link-".concat(il[0].href)), null === (L = il[0].nests) || void 0 === L ? void 0 : L.map((function(l) {
                                            return (0, i.jsx)("li", {
                                                className: (0, t.AK)("body-large py-2 border-b-2"),
                                                style: {
                                                    borderColor: l.current ? "".concat(Q) : "transparent"
                                                },
                                                children: (0, i.jsx)(c(), {
                                                    href: l.href,
                                                    children: (0, i.jsx)("a", {
                                                        className: "block w-full",
                                                        target: l.forceRender ? "_parent" : "_self",
                                                        children: l.name
                                                    })
                                                })
                                            }, "page-link-".concat(l.href))
                                        }))]
                                    }) : (0, i.jsxs)(i.Fragment, {
                                        children: [Y && (0, i.jsx)("li", {
                                            className: "pb-6",
                                            children: (0, i.jsxs)("button", {
                                                className: "inline-flex items-center gap-2 body-large",
                                                onClick: function() {
                                                    return ll(null)
                                                },
                                                children: [(0, i.jsx)(_.Z, {
                                                    className: "w-4 h-4",
                                                    "aria-hidden": "true"
                                                }), (0, i.jsx)("span", {
                                                    children: "Back"
                                                })]
                                            })
                                        }), !Y && (null === il || void 0 === il ? void 0 : il.map((function(l) {
                                            return (0, i.jsx)("li", {
                                                className: (0, t.AK)("body-large py-2 border-b-2"),
                                                style: {
                                                    borderColor: l.current ? "".concat(Q) : "transparent"
                                                },
                                                children: "parent" === l.type && l.nests.length > 0 ? (0, i.jsxs)("button", {
                                                    className: "inline-flex items-center gap-2",
                                                    onClick: function() {
                                                        return ll(l.nests)
                                                    },
                                                    children: [(0, i.jsx)("span", {
                                                        children: l.name
                                                    }), (0, i.jsx)(S.Z, {
                                                        className: "w-4 h-4",
                                                        "aria-hidden": "true"
                                                    })]
                                                }) : (0, i.jsx)(c(), {
                                                    href: l.href,
                                                    children: (0, i.jsx)("a", {
                                                        className: "block w-full",
                                                        target: l.forceRender ? "_parent" : "_self",
                                                        children: l.name
                                                    })
                                                })
                                            }, "page-link-".concat(l.href))
                                        }))), null === Y || void 0 === Y ? void 0 : Y.map((function(l) {
                                            return (0, i.jsx)("li", {
                                                className: (0, t.AK)("body-large py-2 border-b-2"),
                                                style: {
                                                    borderColor: l.current ? "".concat(Q) : "transparent"
                                                },
                                                children: (0, i.jsx)(c(), {
                                                    href: l.href,
                                                    children: (0, i.jsx)("a", {
                                                        className: "block w-full",
                                                        target: l.forceRender ? "_parent" : "_self",
                                                        children: l.name
                                                    })
                                                })
                                            }, "page-link-".concat(l.href))
                                        }))]
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: (0, t.AK)("flex flex-col max-w-[100vw]", "center" === (null === nl || void 0 === nl ? void 0 : nl.style) || "full-center" === (null === nl || void 0 === nl ? void 0 : nl.style) ? "items-center" : "", (null === il || void 0 === il ? void 0 : il.length) > 0 ? "" : "h-full justify-center"),
                                    children: [(null === nl || void 0 === nl ? void 0 : nl.showSocial) && (null === (T = B.social) || void 0 === T ? void 0 : T.length) > 0 && (0, i.jsx)("ul", {
                                        className: "flex items-center gap-x-4 gap-y-2 flex-wrap py-6",
                                        children: Array.isArray(B.social) && B.social.map((function(l, e) {
                                            var o = R.find((function(e) {
                                                    return e.id === l.type
                                                })),
                                                n = l.link;
                                            return "custom" !== l.type && (n = (n = l.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === o || void 0 === o ? void 0 : o.host, ""), n = "https://".concat(null === o || void 0 === o ? void 0 : o.host, "/").concat(n)), (0, i.jsx)("li", {
                                                children: (0, i.jsx)(c(), {
                                                    href: n,
                                                    children: (0, i.jsx)("a", {
                                                        target: "_blank",
                                                        children: tl(l)
                                                    })
                                                })
                                            }, "social-icon-header-".concat(e))
                                        }))
                                    }), (null === nl || void 0 === nl ? void 0 : nl.button) && (0, i.jsx)("div", {
                                        className: "py-6",
                                        children: (0, i.jsx)(a.Z, {
                                            className: "xl !font-normal !py-1.5",
                                            button: nl.button,
                                            website: B
                                        })
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        }
    }
]);