(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6383], {
        52077: function(e, l, t) {
            "use strict";
            t.d(l, {
                Z: function() {
                    return i
                }
            });
            var a = t(85893),
                n = t(41664),
                o = t.n(n),
                s = t(16494),
                r = t(31996);

            function i(e) {
                var l, t, n, i, u = e.button,
                    d = e.type,
                    c = e.website,
                    f = e.action,
                    v = e.loading,
                    p = e.className,
                    m = (null === c || void 0 === c || null === (l = c.button) || void 0 === l ? void 0 : l.background) || (null === c || void 0 === c ? void 0 : c.secondaryColor),
                    x = {
                        background: "outline" === (null === c || void 0 === c || null === (t = c.button) || void 0 === t ? void 0 : t.style) ? "transparent" : m,
                        borderRadius: isNaN(null === c || void 0 === c || null === (n = c.button) || void 0 === n ? void 0 : n.cornerRadius) ? 8 : c.button.cornerRadius,
                        color: "outline" === (null === c || void 0 === c || null === (i = c.button) || void 0 === i ? void 0 : i.style) ? m : (0, r.$O)(m),
                        border: "2px solid ".concat(m)
                    };
                return f && "function" === typeof f || "submit" === d ? (0, a.jsx)("button", {
                    type: "submit" === d ? "submit" : "button",
                    onClick: f,
                    className: (0, r.AK)("button primary", p),
                    style: x,
                    disabled: v,
                    children: v ? (0, a.jsx)(s.Z, {}) : u.label
                }) : (0, a.jsx)(o(), {
                    href: function(e) {
                        if (e) {
                            if ("email" === e.type) return "mailto:" + e.link;
                            if ("phone" === e.type) return "tel:" + e.link;
                            if ("page" === e.type) {
                                var l, t, a, n = null === c || void 0 === c || null === (l = c.pages) || void 0 === l ? void 0 : l.find((function(l) {
                                        return l._id === e.page
                                    })),
                                    o = (null === n || void 0 === n ? void 0 : n.Parent) ? null === c || void 0 === c || null === (t = c.pages) || void 0 === t ? void 0 : t.find((function(e) {
                                        return e._id === (null === n || void 0 === n ? void 0 : n.Parent)
                                    })) : null,
                                    s = "";
                                return o && (s += "".concat(o.slug, "/")), s += null !== (a = null === n || void 0 === n ? void 0 : n.slug) && void 0 !== a ? a : "/"
                            }
                            var r, i = null === (r = e.link) || void 0 === r ? void 0 : r.replace(/https?:\/\//gi, "");
                            return i && "#" !== i ? "https://" + i : "#"
                        }
                        return "/"
                    }(u),
                    children: (0, a.jsx)("a", {
                        className: (0, r.AK)("button primary", p),
                        target: function(e) {
                            var l, t, a, n = null === c || void 0 === c || null === (l = c.pages) || void 0 === l ? void 0 : l.find((function(l) {
                                return l._id === e.page
                            }));
                            return e.newPage ? "_blank" : (null === n || void 0 === n ? void 0 : n.forceRender) ? "_parent" : (null === c || void 0 === c || null === (t = c.button) || void 0 === t ? void 0 : t.target) ? null === c || void 0 === c || null === (a = c.button) || void 0 === a ? void 0 : a.target : "_self"
                        }(u),
                        style: x,
                        children: u.label
                    })
                })
            }
        },
        16494: function(e, l, t) {
            "use strict";
            t.d(l, {
                Z: function() {
                    return o
                }
            });
            var a = t(85893),
                n = t(31996);

            function o(e) {
                var l = e.text,
                    t = e.className,
                    o = e.classNameChild;
                switch (e.variant) {
                    case "form":
                        return (0, a.jsx)("div", {
                            className: "w-full max-w-screen-sm my-8",
                            children: (0, a.jsxs)("div", {
                                className: "animate-pulse flex space-y-8 flex-col",
                                children: [(0, a.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, a.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/2"
                                    }), (0, a.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, a.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-5/6"
                                    })]
                                }), (0, a.jsx)("hr", {}), (0, a.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, a.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, a.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, a.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, a.jsx)("hr", {}), (0, a.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, a.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, a.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, a.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, a.jsx)("hr", {}), (0, a.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, a.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/6"
                                    }), (0, a.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, a.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-3/4"
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"
                                })]
                            })
                        });
                    case "skeleton":
                        return (0, a.jsx)("div", {
                            className: t,
                            children: (0, a.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, a.jsx)("div", {
                                    className: (0, n.AK)("h-6 bg-gray-200 rounded", o)
                                })
                            })
                        });
                    case "table":
                        return (0, a.jsx)("div", {
                            className: "w-full my-8",
                            children: (0, a.jsxs)("div", {
                                className: "animate-pulse flex space-y-2 flex-col",
                                children: [(0, a.jsxs)("div", {
                                    className: "space-x-2 flex",
                                    children: [(0, a.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, a.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, a.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, a.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, a.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, a.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map((function(e) {
                                    return (0, a.jsxs)("div", {
                                        className: "space-x-2 flex",
                                        children: [(0, a.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, a.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, a.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, a.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, a.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, a.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        })]
                                    }, e)
                                }))]
                            })
                        });
                    default:
                        return (0, a.jsxs)("div", {
                            className: (0, n.AK)("inline-flex items-center", t),
                            children: [(0, a.jsxs)("svg", {
                                className: (0, n.AK)("animate-spin ml-1 mr-3 h-4 w-4", t && "text-indigo-600"),
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, a.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, a.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), l || "" === l ? l : "Loading..."]
                        })
                }
            }
        },
        76383: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return u
                }
            });
            var a = t(85893),
                n = t(31996),
                o = t(67294),
                s = t(29260),
                r = t.n(s),
                i = t(52077);

            function u(e) {
                var l, t = e.block,
                    s = e.website,
                    u = (0, o.useState)(null),
                    d = u[0],
                    c = u[1],
                    f = (0, o.useState)(null),
                    v = f[0],
                    p = f[1],
                    m = (0, o.useState)(null),
                    x = m[0],
                    g = m[1],
                    h = (0, o.useState)(null),
                    y = h[0],
                    b = h[1],
                    j = (0, o.useState)("#FFFFFF"),
                    N = j[0],
                    w = j[1],
                    C = (0, o.useState)("#111827"),
                    _ = C[0],
                    k = C[1];
                return (0, o.useEffect)((function() {
                    t && (c(t.content), p(t.align), g(t.image), b(t.button), w(t.background))
                }), [t]), (0, o.useEffect)((function() {
                    N && k((0, n.$O)(N))
                }), [N]), (0, a.jsx)("section", {
                    className: "flex-shrink-0",
                    style: {
                        backgroundColor: N
                    },
                    children: (0, a.jsx)("div", {
                        className: (0, n.AK)("container mx-auto py-12 lg:py-14 xl:py-20"),
                        children: (0, a.jsxs)("div", {
                            className: (0, n.AK)("flex flex-col lg:flex-row w-full gap-10 lg:gap-20", "top" === v ? "items-start" : "bottom" === v ? "items-end" : "items-center", "left" === (null === x || void 0 === x ? void 0 : x.align) && "lg:!flex-row-reverse"),
                            children: [(0, a.jsxs)("div", {
                                className: (0, n.AK)("flex-1 flex flex-col items-center lg:items-start"),
                                children: [(0, a.jsx)("div", {
                                    className: "rich-text-block",
                                    style: {
                                        color: _
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: d
                                    }
                                }), y && (0, a.jsx)(i.Z, {
                                    button: y,
                                    website: s,
                                    className: "lg mt-6 lg:mt-8 w-full md:w-max"
                                })]
                            }), (0, a.jsx)("div", {
                                className: (0, n.AK)("flex-1 flex w-full justify-center lg:justify-start", "left" === (null === x || void 0 === x ? void 0 : x.align) && "lg:!justify-end"),
                                children: (null === x || void 0 === x ? void 0 : x.media) && (0, a.jsx)("div", {
                                    className: (0, n.AK)("flex-shrink-0 relative w-full mx-auto", (0, n.n3)(x.aspectRatio)),
                                    children: (0, a.jsx)(r(), {
                                        src: null === (l = x.media) || void 0 === l ? void 0 : l.url,
                                        objectFit: (null === x || void 0 === x ? void 0 : x.imageFit) || "cover",
                                        objectPosition: "".concat((null === x || void 0 === x ? void 0 : x.imagePositionX) || "center", " ").concat((null === x || void 0 === x ? void 0 : x.imagePositionY) || "center"),
                                        layout: "fill",
                                        alt: (null === s || void 0 === s ? void 0 : s.headline) || "We provide high quality services",
                                        className: (0, n.yW)(null === x || void 0 === x ? void 0 : x.cornerRadius)
                                    })
                                })
                            })]
                        })
                    })
                })
            }
        },
        71210: function(e, l) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.getDomainLocale = function(e, l, t, a) {
                return !1
            };
            ("function" === typeof l.default || "object" === typeof l.default && null !== l.default) && "undefined" === typeof l.default.__esModule && (Object.defineProperty(l.default, "__esModule", {
                value: !0
            }), Object.assign(l.default, l), e.exports = l.default)
        },
        48418: function(e, l, t) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var a = t(39274).Z;
            t(25654).default;
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var n = t(12845).Z,
                o = t(38774).Z,
                s = n(t(67294)),
                r = t(76273),
                i = t(22725),
                u = t(63462),
                d = t(21018),
                c = t(57190),
                f = t(71210),
                v = t(98684),
                p = {};

            function m(e, l, t, a) {
                if (e && r.isLocalURL(l)) {
                    Promise.resolve(e.prefetch(l, t, a)).catch((function(e) {
                        0
                    }));
                    var n = a && "undefined" !== typeof a.locale ? a.locale : e && e.locale;
                    p[l + "%" + t + (n ? "%" + n : "")] = !0
                }
            }
            var x = s.default.forwardRef((function(e, l) {
                var t, n = e.href,
                    x = e.as,
                    g = e.children,
                    h = e.prefetch,
                    y = e.passHref,
                    b = e.replace,
                    j = e.shallow,
                    N = e.scroll,
                    w = e.locale,
                    C = e.onClick,
                    _ = e.onMouseEnter,
                    k = e.onTouchStart,
                    L = e.legacyBehavior,
                    R = void 0 === L ? !0 !== Boolean(!1) : L,
                    M = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                t = g, !R || "string" !== typeof t && "number" !== typeof t || (t = s.default.createElement("a", null, t));
                var P = !1 !== h,
                    A = s.default.useContext(u.RouterContext),
                    E = s.default.useContext(d.AppRouterContext);
                E && (A = E);
                var K, S = s.default.useMemo((function() {
                        var e = a(r.resolveHref(A, n, !0), 2),
                            l = e[0],
                            t = e[1];
                        return {
                            href: l,
                            as: x ? r.resolveHref(A, x) : t || l
                        }
                    }), [A, n, x]),
                    O = S.href,
                    T = S.as,
                    F = s.default.useRef(O),
                    Z = s.default.useRef(T);
                R && (K = s.default.Children.only(t));
                var B = R ? K && "object" === typeof K && K.ref : l,
                    H = a(c.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    U = H[0],
                    D = H[1],
                    W = H[2],
                    z = s.default.useCallback((function(e) {
                        Z.current === T && F.current === O || (W(), Z.current = T, F.current = O), U(e), B && ("function" === typeof B ? B(e) : "object" === typeof B && (B.current = e))
                    }), [T, B, O, W, U]);
                s.default.useEffect((function() {
                    var e = D && P && r.isLocalURL(O),
                        l = "undefined" !== typeof w ? w : A && A.locale,
                        t = p[O + "%" + T + (l ? "%" + l : "")];
                    e && !t && m(A, O, T, {
                        locale: l
                    })
                }), [T, O, D, w, P, A]);
                var G = {
                    ref: z,
                    onClick: function(e) {
                        R || "function" !== typeof C || C(e), R && K.props && "function" === typeof K.props.onClick && K.props.onClick(e), e.defaultPrevented || function(e, l, t, a, n, o, i, u, d, c) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                    var l = e.currentTarget.target;
                                    return l && "_self" !== l || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && r.isLocalURL(t)) {
                                e.preventDefault();
                                var f = function() {
                                    "beforePopState" in l ? l[n ? "replace" : "push"](t, a, {
                                        shallow: o,
                                        locale: u,
                                        scroll: i
                                    }) : l[n ? "replace" : "push"](t, {
                                        forceOptimisticNavigation: !c
                                    })
                                };
                                d ? s.default.startTransition(f) : f()
                            }
                        }(e, A, O, T, b, j, N, w, Boolean(E), P)
                    },
                    onMouseEnter: function(e) {
                        R || "function" !== typeof _ || _(e), R && K.props && "function" === typeof K.props.onMouseEnter && K.props.onMouseEnter(e), !P && E || r.isLocalURL(O) && m(A, O, T, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        R || "function" !== typeof k || k(e), R && K.props && "function" === typeof K.props.onTouchStart && K.props.onTouchStart(e), !P && E || r.isLocalURL(O) && m(A, O, T, {
                            priority: !0
                        })
                    }
                };
                if (!R || y || "a" === K.type && !("href" in K.props)) {
                    var I = "undefined" !== typeof w ? w : A && A.locale,
                        $ = A && A.isLocaleDomain && f.getDomainLocale(T, I, A.locales, A.domainLocales);
                    G.href = $ || v.addBasePath(i.addLocale(T, I, A && A.defaultLocale))
                }
                return R ? s.default.cloneElement(K, G) : s.default.createElement("a", Object.assign({}, M, G), t)
            }));
            l.default = x, ("function" === typeof l.default || "object" === typeof l.default && null !== l.default) && "undefined" === typeof l.default.__esModule && (Object.defineProperty(l.default, "__esModule", {
                value: !0
            }), Object.assign(l.default, l), e.exports = l.default)
        },
        21018: function(e, l, t) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.TemplateContext = l.GlobalLayoutRouterContext = l.LayoutRouterContext = l.AppRouterContext = void 0;
            var a = (0, t(12845).Z)(t(67294)),
                n = a.default.createContext(null);
            l.AppRouterContext = n;
            var o = a.default.createContext(null);
            l.LayoutRouterContext = o;
            var s = a.default.createContext(null);
            l.GlobalLayoutRouterContext = s;
            var r = a.default.createContext(null);
            l.TemplateContext = r
        },
        41664: function(e, l, t) {
            e.exports = t(48418)
        }
    }
]);