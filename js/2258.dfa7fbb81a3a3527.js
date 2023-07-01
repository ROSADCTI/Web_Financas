(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2258, 1664, 5063], {
        52077: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var o = n(85893),
                r = n(41664),
                a = n.n(r),
                l = n(16494),
                u = n(31996);

            function i(e) {
                var t, n, r, i, s = e.button,
                    c = e.type,
                    d = e.website,
                    f = e.action,
                    v = e.loading,
                    p = e.className,
                    g = (null === d || void 0 === d || null === (t = d.button) || void 0 === t ? void 0 : t.background) || (null === d || void 0 === d ? void 0 : d.secondaryColor),
                    m = {
                        background: "outline" === (null === d || void 0 === d || null === (n = d.button) || void 0 === n ? void 0 : n.style) ? "transparent" : g,
                        borderRadius: isNaN(null === d || void 0 === d || null === (r = d.button) || void 0 === r ? void 0 : r.cornerRadius) ? 8 : d.button.cornerRadius,
                        color: "outline" === (null === d || void 0 === d || null === (i = d.button) || void 0 === i ? void 0 : i.style) ? g : (0, u.$O)(g),
                        border: "2px solid ".concat(g)
                    };
                return f && "function" === typeof f || "submit" === c ? (0, o.jsx)("button", {
                    type: "submit" === c ? "submit" : "button",
                    onClick: f,
                    className: (0, u.AK)("button primary", p),
                    style: m,
                    disabled: v,
                    children: v ? (0, o.jsx)(l.Z, {}) : s.label
                }) : (0, o.jsx)(a(), {
                    href: function(e) {
                        if (e) {
                            if ("email" === e.type) return "mailto:" + e.link;
                            if ("phone" === e.type) return "tel:" + e.link;
                            if ("page" === e.type) {
                                var t, n, o, r = null === d || void 0 === d || null === (t = d.pages) || void 0 === t ? void 0 : t.find((function(t) {
                                        return t._id === e.page
                                    })),
                                    a = (null === r || void 0 === r ? void 0 : r.Parent) ? null === d || void 0 === d || null === (n = d.pages) || void 0 === n ? void 0 : n.find((function(e) {
                                        return e._id === (null === r || void 0 === r ? void 0 : r.Parent)
                                    })) : null,
                                    l = "";
                                return a && (l += "".concat(a.slug, "/")), l += null !== (o = null === r || void 0 === r ? void 0 : r.slug) && void 0 !== o ? o : "/"
                            }
                            var u, i = null === (u = e.link) || void 0 === u ? void 0 : u.replace(/https?:\/\//gi, "");
                            return i && "#" !== i ? "https://" + i : "#"
                        }
                        return "/"
                    }(s),
                    children: (0, o.jsx)("a", {
                        className: (0, u.AK)("button primary", p),
                        target: function(e) {
                            var t, n, o, r = null === d || void 0 === d || null === (t = d.pages) || void 0 === t ? void 0 : t.find((function(t) {
                                return t._id === e.page
                            }));
                            return e.newPage ? "_blank" : (null === r || void 0 === r ? void 0 : r.forceRender) ? "_parent" : (null === d || void 0 === d || null === (n = d.button) || void 0 === n ? void 0 : n.target) ? null === d || void 0 === d || null === (o = d.button) || void 0 === o ? void 0 : o.target : "_self"
                        }(s),
                        style: m,
                        children: s.label
                    })
                })
            }
        },
        16494: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var o = n(85893),
                r = n(31996);

            function a(e) {
                var t = e.text,
                    n = e.className,
                    a = e.classNameChild;
                switch (e.variant) {
                    case "form":
                        return (0, o.jsx)("div", {
                            className: "w-full max-w-screen-sm my-8",
                            children: (0, o.jsxs)("div", {
                                className: "animate-pulse flex space-y-8 flex-col",
                                children: [(0, o.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/2"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, o.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-5/6"
                                    })]
                                }), (0, o.jsx)("hr", {}), (0, o.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, o.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, o.jsx)("hr", {}), (0, o.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, o.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, o.jsx)("hr", {}), (0, o.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/6"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, o.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-3/4"
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"
                                })]
                            })
                        });
                    case "skeleton":
                        return (0, o.jsx)("div", {
                            className: n,
                            children: (0, o.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, o.jsx)("div", {
                                    className: (0, r.AK)("h-6 bg-gray-200 rounded", a)
                                })
                            })
                        });
                    case "table":
                        return (0, o.jsx)("div", {
                            className: "w-full my-8",
                            children: (0, o.jsxs)("div", {
                                className: "animate-pulse flex space-y-2 flex-col",
                                children: [(0, o.jsxs)("div", {
                                    className: "space-x-2 flex",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map((function(e) {
                                    return (0, o.jsxs)("div", {
                                        className: "space-x-2 flex",
                                        children: [(0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        })]
                                    }, e)
                                }))]
                            })
                        });
                    default:
                        return (0, o.jsxs)("div", {
                            className: (0, r.AK)("inline-flex items-center", n),
                            children: [(0, o.jsxs)("svg", {
                                className: (0, r.AK)("animate-spin ml-1 mr-3 h-4 w-4", n && "text-indigo-600"),
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, o.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, o.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), t || "" === t ? t : "Loading..."]
                        })
                }
            }
        },
        82258: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n(14251),
                r = n(52875),
                a = n(85893),
                l = n(31996),
                u = n(67294),
                i = n(52077),
                s = "#F3F4F6";

            function c(e) {
                var t, n = e.block,
                    c = e.website,
                    d = function(e) {
                        var t = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
                            n = t ? (256 | t[1]).toString(16).slice(1) + (256 | t[2]).toString(16).slice(1) + (256 | t[3]).toString(16).slice(1) : e;
                        return "#".concat(n)
                    },
                    f = (0, u.useState)(null),
                    v = f[0],
                    p = f[1],
                    g = (0, u.useState)(null),
                    m = g[0],
                    y = g[1],
                    b = (0, u.useState)(null),
                    x = b[0],
                    h = b[1],
                    j = (0, u.useState)(null),
                    N = j[0],
                    w = j[1],
                    k = (0, u.useState)(null),
                    C = k[0],
                    O = k[1],
                    _ = (0, u.useState)("#111827"),
                    P = _[0],
                    M = _[1];
                return (0, u.useEffect)((function() {
                    var e, t;
                    if (n)
                        if (p(n.headline), y(n.content), h(n.button), w(n.align), "image" === (null === (e = n.background) || void 0 === e ? void 0 : e.type) && (null === (t = n.background) || void 0 === t ? void 0 : t.overlay)) {
                            var a = n.background.overlay.color.includes("rgba") ? d(n.background.overlay.color) : n.background.overlay.color;
                            O((0, r.Z)((0, o.Z)({}, n.background), {
                                overlay: {
                                    color: (0, l.mR)(a || "#000000", n.background.overlay.amount || 50),
                                    amount: n.background.overlay.amount || 50
                                }
                            }))
                        } else O(n.background)
                }), [n]), (0, u.useEffect)((function() {
                    var e;
                    "image" === (null === C || void 0 === C ? void 0 : C.type) ? M((0, l.$O)(d((null === (e = C.overlay) || void 0 === e ? void 0 : e.color) || (0, l.mR)(s)))): M((0, l.$O)((null === C || void 0 === C ? void 0 : C.color) || s))
                }), [C]), (0, a.jsxs)("section", {
                    className: "flex-shrink-0 relative flex items-center min-h-120",
                    style: "image" === (null === C || void 0 === C ? void 0 : C.type) ? {
                        backgroundImage: "url(".concat((null === (t = C.image) || void 0 === t ? void 0 : t.url) || C.image, ")"),
                        backgroundPosition: "".concat(C.imagePositionX || "center", " ").concat(C.imagePositionY || "center"),
                        backgroundSize: "cover"
                    } : {
                        backgroundColor: null === C || void 0 === C ? void 0 : C.color
                    },
                    children: ["image" === (null === C || void 0 === C ? void 0 : C.type) && (null === C || void 0 === C ? void 0 : C.overlay) && (0, a.jsx)("div", {
                        className: (0, l.AK)("absolute inset-0"),
                        style: {
                            backgroundColor: C.overlay.color
                        }
                    }), (0, a.jsx)("div", {
                        className: "relative container mx-auto px-6 z-10 py-12 lg:py-32 xl:py-40 text-8xl",
                        children: (0, a.jsxs)("div", {
                            className: (0, l.AK)("max-w-3xl", "text-".concat(N), "left" === N ? "ml-0 mr-auto" : "right" === N ? "ml-auto mr-0" : "mx-auto"),
                            children: [v && (0, a.jsx)("h2", {
                                className: (0, l.AK)("heading-xlarge mb-6 break-word", "text-".concat(N)),
                                style: (0, o.Z)({
                                    color: P
                                }, (0, l.j2)(c)),
                                children: v
                            }), m && (0, a.jsx)("p", {
                                className: (0, l.AK)("body-large"),
                                style: (0, o.Z)({
                                    color: P
                                }, (0, l.SV)(c)),
                                children: m
                            }), x && (0, a.jsx)(i.Z, {
                                button: x,
                                website: c,
                                className: "xl mt-6 lg:mt-8 w-full md:w-max"
                            })]
                        })
                    })]
                })
            }
        },
        71210: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, n, o) {
                return !1
            };
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        48418: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(39274).Z;
            n(25654).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(12845).Z,
                a = n(38774).Z,
                l = r(n(67294)),
                u = n(76273),
                i = n(22725),
                s = n(63462),
                c = n(21018),
                d = n(57190),
                f = n(71210),
                v = n(98684),
                p = {};

            function g(e, t, n, o) {
                if (e && u.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, n, o)).catch((function(e) {
                        0
                    }));
                    var r = o && "undefined" !== typeof o.locale ? o.locale : e && e.locale;
                    p[t + "%" + n + (r ? "%" + r : "")] = !0
                }
            }
            var m = l.default.forwardRef((function(e, t) {
                var n, r = e.href,
                    m = e.as,
                    y = e.children,
                    b = e.prefetch,
                    x = e.passHref,
                    h = e.replace,
                    j = e.shallow,
                    N = e.scroll,
                    w = e.locale,
                    k = e.onClick,
                    C = e.onMouseEnter,
                    O = e.onTouchStart,
                    _ = e.legacyBehavior,
                    P = void 0 === _ ? !0 !== Boolean(!1) : _,
                    M = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = y, !P || "string" !== typeof n && "number" !== typeof n || (n = l.default.createElement("a", null, n));
                var R = !1 !== b,
                    L = l.default.useContext(s.RouterContext),
                    S = l.default.useContext(c.AppRouterContext);
                S && (L = S);
                var E, A = l.default.useMemo((function() {
                        var e = o(u.resolveHref(L, r, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: m ? u.resolveHref(L, m) : n || t
                        }
                    }), [L, r, m]),
                    Z = A.href,
                    K = A.as,
                    T = l.default.useRef(Z),
                    I = l.default.useRef(K);
                P && (E = l.default.Children.only(n));
                var D = P ? E && "object" === typeof E && E.ref : t,
                    B = o(d.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    U = B[0],
                    z = B[1],
                    H = B[2],
                    F = l.default.useCallback((function(e) {
                        I.current === K && T.current === Z || (H(), I.current = K, T.current = Z), U(e), D && ("function" === typeof D ? D(e) : "object" === typeof D && (D.current = e))
                    }), [K, D, Z, H, U]);
                l.default.useEffect((function() {
                    var e = z && R && u.isLocalURL(Z),
                        t = "undefined" !== typeof w ? w : L && L.locale,
                        n = p[Z + "%" + K + (t ? "%" + t : "")];
                    e && !n && g(L, Z, K, {
                        locale: t
                    })
                }), [K, Z, z, w, R, L]);
                var $ = {
                    ref: F,
                    onClick: function(e) {
                        P || "function" !== typeof k || k(e), P && E.props && "function" === typeof E.props.onClick && E.props.onClick(e), e.defaultPrevented || function(e, t, n, o, r, a, i, s, c, d) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                    var t = e.currentTarget.target;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && u.isLocalURL(n)) {
                                e.preventDefault();
                                var f = function() {
                                    "beforePopState" in t ? t[r ? "replace" : "push"](n, o, {
                                        shallow: a,
                                        locale: s,
                                        scroll: i
                                    }) : t[r ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !d
                                    })
                                };
                                c ? l.default.startTransition(f) : f()
                            }
                        }(e, L, Z, K, h, j, N, w, Boolean(S), R)
                    },
                    onMouseEnter: function(e) {
                        P || "function" !== typeof C || C(e), P && E.props && "function" === typeof E.props.onMouseEnter && E.props.onMouseEnter(e), !R && S || u.isLocalURL(Z) && g(L, Z, K, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        P || "function" !== typeof O || O(e), P && E.props && "function" === typeof E.props.onTouchStart && E.props.onTouchStart(e), !R && S || u.isLocalURL(Z) && g(L, Z, K, {
                            priority: !0
                        })
                    }
                };
                if (!P || x || "a" === E.type && !("href" in E.props)) {
                    var G = "undefined" !== typeof w ? w : L && L.locale,
                        V = L && L.isLocaleDomain && f.getDomainLocale(K, G, L.locales, L.domainLocales);
                    $.href = V || v.addBasePath(i.addLocale(K, G, L && L.defaultLocale))
                }
                return P ? l.default.cloneElement(E, $) : l.default.createElement("a", Object.assign({}, M, $), n)
            }));
            t.default = m, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        57190: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(39274).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    s = e.disabled || !l,
                    c = o(r.useState(!1), 2),
                    d = c[0],
                    f = c[1],
                    v = o(r.useState(null), 2),
                    p = v[0],
                    g = v[1];
                r.useEffect((function() {
                    if (l) {
                        if (s || d) return;
                        if (p && p.tagName) {
                            var e = function(e, t, n) {
                                var o = function(e) {
                                        var t, n = {
                                                root: e.root || null,
                                                margin: e.rootMargin || ""
                                            },
                                            o = i.find((function(e) {
                                                return e.root === n.root && e.margin === n.margin
                                            }));
                                        if (o && (t = u.get(o))) return t;
                                        var r = new Map,
                                            a = new IntersectionObserver((function(e) {
                                                e.forEach((function(e) {
                                                    var t = r.get(e.target),
                                                        n = e.isIntersecting || e.intersectionRatio > 0;
                                                    t && n && t(n)
                                                }))
                                            }), e);
                                        return t = {
                                            id: n,
                                            observer: a,
                                            elements: r
                                        }, i.push(n), u.set(n, t), t
                                    }(n),
                                    r = o.id,
                                    a = o.observer,
                                    l = o.elements;
                                return l.set(e, t), a.observe(e),
                                    function() {
                                        if (l.delete(e), a.unobserve(e), 0 === l.size) {
                                            a.disconnect(), u.delete(r);
                                            var t = i.findIndex((function(e) {
                                                return e.root === r.root && e.margin === r.margin
                                            }));
                                            t > -1 && i.splice(t, 1)
                                        }
                                    }
                            }(p, (function(e) {
                                return e && f(e)
                            }), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return e
                        }
                    } else if (!d) {
                        var o = a.requestIdleCallback((function() {
                            return f(!0)
                        }));
                        return function() {
                            return a.cancelIdleCallback(o)
                        }
                    }
                }), [p, s, n, t, d]);
                var m = r.useCallback((function() {
                    f(!1)
                }), []);
                return [g, d, m]
            };
            var r = n(67294),
                a = n(9311),
                l = "function" === typeof IntersectionObserver,
                u = new Map,
                i = [];
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        21018: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var o = (0, n(12845).Z)(n(67294)),
                r = o.default.createContext(null);
            t.AppRouterContext = r;
            var a = o.default.createContext(null);
            t.LayoutRouterContext = a;
            var l = o.default.createContext(null);
            t.GlobalLayoutRouterContext = l;
            var u = o.default.createContext(null);
            t.TemplateContext = u
        },
        41664: function(e, t, n) {
            e.exports = n(48418)
        },
        52875: function(e, t, n) {
            "use strict";

            function o(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                })), e
            }
            n.d(t, {
                Z: function() {
                    return o
                }
            })
        }
    }
]);