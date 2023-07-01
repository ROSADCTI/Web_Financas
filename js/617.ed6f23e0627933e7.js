(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [617], {
        52077: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = l(85893),
                n = l(41664),
                o = l.n(n),
                s = l(16494),
                r = l(31996);

            function i(e) {
                var t, l, n, i, u = e.button,
                    c = e.type,
                    d = e.website,
                    f = e.action,
                    v = e.loading,
                    m = e.className,
                    p = (null === d || void 0 === d || null === (t = d.button) || void 0 === t ? void 0 : t.background) || (null === d || void 0 === d ? void 0 : d.secondaryColor),
                    h = {
                        background: "outline" === (null === d || void 0 === d || null === (l = d.button) || void 0 === l ? void 0 : l.style) ? "transparent" : p,
                        borderRadius: isNaN(null === d || void 0 === d || null === (n = d.button) || void 0 === n ? void 0 : n.cornerRadius) ? 8 : d.button.cornerRadius,
                        color: "outline" === (null === d || void 0 === d || null === (i = d.button) || void 0 === i ? void 0 : i.style) ? p : (0, r.$O)(p),
                        border: "2px solid ".concat(p)
                    };
                return f && "function" === typeof f || "submit" === c ? (0, a.jsx)("button", {
                    type: "submit" === c ? "submit" : "button",
                    onClick: f,
                    className: (0, r.AK)("button primary", m),
                    style: h,
                    disabled: v,
                    children: v ? (0, a.jsx)(s.Z, {}) : u.label
                }) : (0, a.jsx)(o(), {
                    href: function(e) {
                        if (e) {
                            if ("email" === e.type) return "mailto:" + e.link;
                            if ("phone" === e.type) return "tel:" + e.link;
                            if ("page" === e.type) {
                                var t, l, a, n = null === d || void 0 === d || null === (t = d.pages) || void 0 === t ? void 0 : t.find((function(t) {
                                        return t._id === e.page
                                    })),
                                    o = (null === n || void 0 === n ? void 0 : n.Parent) ? null === d || void 0 === d || null === (l = d.pages) || void 0 === l ? void 0 : l.find((function(e) {
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
                        className: (0, r.AK)("button primary", m),
                        target: function(e) {
                            var t, l, a, n = null === d || void 0 === d || null === (t = d.pages) || void 0 === t ? void 0 : t.find((function(t) {
                                return t._id === e.page
                            }));
                            return e.newPage ? "_blank" : (null === n || void 0 === n ? void 0 : n.forceRender) ? "_parent" : (null === d || void 0 === d || null === (l = d.button) || void 0 === l ? void 0 : l.target) ? null === d || void 0 === d || null === (a = d.button) || void 0 === a ? void 0 : a.target : "_self"
                        }(u),
                        style: h,
                        children: u.label
                    })
                })
            }
        },
        16494: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = l(85893),
                n = l(31996);

            function o(e) {
                var t = e.text,
                    l = e.className,
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
                            className: l,
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
                            className: (0, n.AK)("inline-flex items-center", l),
                            children: [(0, a.jsxs)("svg", {
                                className: (0, n.AK)("animate-spin ml-1 mr-3 h-4 w-4", l && "text-indigo-600"),
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
                            }), t || "" === t ? t : "Loading..."]
                        })
                }
            }
        },
        40617: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l(14251),
                n = l(85893),
                o = l(31996),
                s = l(67294),
                r = l(29260),
                i = l.n(r),
                u = l(52077);

            function c(e) {
                var t = e.block,
                    l = e.website,
                    r = (0, s.useState)(null),
                    c = r[0],
                    d = r[1],
                    f = (0, s.useState)(!1),
                    v = f[0],
                    m = f[1],
                    p = (0, s.useState)(!1),
                    h = p[0],
                    x = p[1],
                    g = (0, s.useState)(!1),
                    y = g[0],
                    b = g[1],
                    j = (0, s.useState)(!1),
                    N = j[0],
                    w = j[1],
                    k = (0, s.useState)(!1),
                    C = k[0],
                    _ = k[1],
                    R = (0, s.useState)(null),
                    L = R[0],
                    S = R[1],
                    M = (0, s.useState)(null),
                    P = M[0],
                    A = M[1],
                    E = (0, s.useState)(null),
                    K = (E[0], E[1]),
                    O = (0, s.useState)(null),
                    T = O[0],
                    Z = O[1],
                    F = (0, s.useState)("#FFFFFF"),
                    B = F[0],
                    H = F[1],
                    I = (0, s.useState)("#111827"),
                    U = I[0],
                    W = I[1];
                return (0, s.useEffect)((function() {
                    t && (d(t.headline), m(t.showImage), x(t.showIcon), b(t.showHeading), w(t.showContent), _(t.showButton), S(t.aspectRatio), A(t.cornerRadius), K(t.justify), Z(t.align), H(t.background))
                }), [t]), (0, s.useEffect)((function() {
                    B && W((0, o.$O)(B))
                }), [B]), (0, n.jsx)("section", {
                    className: "flex-shrink-0",
                    style: {
                        backgroundColor: B
                    },
                    children: (0, n.jsxs)("div", {
                        className: (0, o.AK)("container mx-auto py-12 lg:py-14 xl:py-20"),
                        children: [c && (0, n.jsx)("h2", {
                            className: (0, o.AK)("heading-large mb-6", "text-".concat(T)),
                            style: (0, a.Z)({
                                color: U
                            }, (0, o.j2)(l)),
                            children: c
                        }), (null === t || void 0 === t ? void 0 : t.items) && (0, n.jsxs)("div", {
                            className: (0, o.AK)("flex flex-col sm:flex-row flex-wrap gap-10", "justify-".concat("left" === T ? "start" : "center" === T ? "center" : "end")),
                            children: [(0, n.jsx)("span", {
                                className: "hidden justify-center justify-end justify-start"
                            }), t.items.map((function(e, s) {
                                var r, c, d, f, m, p;
                                return (0, n.jsxs)("div", {
                                    className: "block-list-item w-full",
                                    children: [v && e.image && (0, n.jsx)("div", {
                                        className: (0, o.AK)("flex-shrink-0 relative mb-6", (0, o.n3)(L)),
                                        children: (0, n.jsx)(i(), {
                                            src: e.image.url,
                                            objectFit: (null === t || void 0 === t ? void 0 : t.imageFit) || "cover",
                                            objectPosition: "".concat(e.imagePositionX || "center", " ").concat(e.imagePositionY || "center"),
                                            layout: "fill",
                                            alt: e.title,
                                            className: (0, o.yW)(P)
                                        })
                                    }), h && (null === (r = e.icon) || void 0 === r ? void 0 : r.media) && (0, n.jsx)("div", {
                                        className: (0, o.AK)("flex-shrink-0 relative mb-6", (null === t || void 0 === t ? void 0 : t.iconSize) || "w-12 h-12", "left" === T ? "mr-auto" : "center" === T ? "mx-auto" : "ml-auto"),
                                        children: (0, n.jsx)("div", {
                                            className: "absolute w-full h-full",
                                            style: {
                                                backgroundColor: (null === (c = e.icon) || void 0 === c ? void 0 : c.color) || "#1F2937",
                                                WebkitMaskImage: 'url("'.concat(null === e || void 0 === e || null === (d = e.icon) || void 0 === d || null === (f = d.media) || void 0 === f ? void 0 : f.url, '")'),
                                                maskImage: 'url("'.concat(null === e || void 0 === e || null === (m = e.icon) || void 0 === m || null === (p = m.media) || void 0 === p ? void 0 : p.url, '")'),
                                                WebkitMaskPosition: "center",
                                                maskPosition: "center",
                                                WebkitMaskRepeat: "no-repeat",
                                                maskRepeat: "no-repeat",
                                                WebkitMaskSize: "contain",
                                                maskSize: "contain"
                                            }
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: "text-".concat(T),
                                        children: [y && (0, n.jsx)("p", {
                                            className: "heading-medium mb-4",
                                            style: (0, a.Z)({
                                                color: U
                                            }, (0, o.j2)(l)),
                                            children: e.title
                                        }), N && (0, n.jsx)("div", {
                                            className: "rich-text-block",
                                            style: {
                                                color: U
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html: e.content
                                            }
                                        }), C && (null === e || void 0 === e ? void 0 : e.button) && (0, n.jsx)(u.Z, {
                                            button: e.button,
                                            website: l,
                                            className: "lg mt-4"
                                        })]
                                    })]
                                }, s)
                            }))]
                        })]
                    })
                })
            }
        },
        71210: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, l, a) {
                return !1
            };
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        48418: function(e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = l(39274).Z;
            l(25654).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = l(12845).Z,
                o = l(38774).Z,
                s = n(l(67294)),
                r = l(76273),
                i = l(22725),
                u = l(63462),
                c = l(21018),
                d = l(57190),
                f = l(71210),
                v = l(98684),
                m = {};

            function p(e, t, l, a) {
                if (e && r.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, l, a)).catch((function(e) {
                        0
                    }));
                    var n = a && "undefined" !== typeof a.locale ? a.locale : e && e.locale;
                    m[t + "%" + l + (n ? "%" + n : "")] = !0
                }
            }
            var h = s.default.forwardRef((function(e, t) {
                var l, n = e.href,
                    h = e.as,
                    x = e.children,
                    g = e.prefetch,
                    y = e.passHref,
                    b = e.replace,
                    j = e.shallow,
                    N = e.scroll,
                    w = e.locale,
                    k = e.onClick,
                    C = e.onMouseEnter,
                    _ = e.onTouchStart,
                    R = e.legacyBehavior,
                    L = void 0 === R ? !0 !== Boolean(!1) : R,
                    S = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                l = x, !L || "string" !== typeof l && "number" !== typeof l || (l = s.default.createElement("a", null, l));
                var M = !1 !== g,
                    P = s.default.useContext(u.RouterContext),
                    A = s.default.useContext(c.AppRouterContext);
                A && (P = A);
                var E, K = s.default.useMemo((function() {
                        var e = a(r.resolveHref(P, n, !0), 2),
                            t = e[0],
                            l = e[1];
                        return {
                            href: t,
                            as: h ? r.resolveHref(P, h) : l || t
                        }
                    }), [P, n, h]),
                    O = K.href,
                    T = K.as,
                    Z = s.default.useRef(O),
                    F = s.default.useRef(T);
                L && (E = s.default.Children.only(l));
                var B = L ? E && "object" === typeof E && E.ref : t,
                    H = a(d.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    I = H[0],
                    U = H[1],
                    W = H[2],
                    z = s.default.useCallback((function(e) {
                        F.current === T && Z.current === O || (W(), F.current = T, Z.current = O), I(e), B && ("function" === typeof B ? B(e) : "object" === typeof B && (B.current = e))
                    }), [T, B, O, W, I]);
                s.default.useEffect((function() {
                    var e = U && M && r.isLocalURL(O),
                        t = "undefined" !== typeof w ? w : P && P.locale,
                        l = m[O + "%" + T + (t ? "%" + t : "")];
                    e && !l && p(P, O, T, {
                        locale: t
                    })
                }), [T, O, U, w, M, P]);
                var D = {
                    ref: z,
                    onClick: function(e) {
                        L || "function" !== typeof k || k(e), L && E.props && "function" === typeof E.props.onClick && E.props.onClick(e), e.defaultPrevented || function(e, t, l, a, n, o, i, u, c, d) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                    var t = e.currentTarget.target;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && r.isLocalURL(l)) {
                                e.preventDefault();
                                var f = function() {
                                    "beforePopState" in t ? t[n ? "replace" : "push"](l, a, {
                                        shallow: o,
                                        locale: u,
                                        scroll: i
                                    }) : t[n ? "replace" : "push"](l, {
                                        forceOptimisticNavigation: !d
                                    })
                                };
                                c ? s.default.startTransition(f) : f()
                            }
                        }(e, P, O, T, b, j, N, w, Boolean(A), M)
                    },
                    onMouseEnter: function(e) {
                        L || "function" !== typeof C || C(e), L && E.props && "function" === typeof E.props.onMouseEnter && E.props.onMouseEnter(e), !M && A || r.isLocalURL(O) && p(P, O, T, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        L || "function" !== typeof _ || _(e), L && E.props && "function" === typeof E.props.onTouchStart && E.props.onTouchStart(e), !M && A || r.isLocalURL(O) && p(P, O, T, {
                            priority: !0
                        })
                    }
                };
                if (!L || y || "a" === E.type && !("href" in E.props)) {
                    var G = "undefined" !== typeof w ? w : P && P.locale,
                        $ = P && P.isLocaleDomain && f.getDomainLocale(T, G, P.locales, P.domainLocales);
                    D.href = $ || v.addBasePath(i.addLocale(T, G, P && P.defaultLocale))
                }
                return L ? s.default.cloneElement(E, D) : s.default.createElement("a", Object.assign({}, S, D), l)
            }));
            t.default = h, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        21018: function(e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var a = (0, l(12845).Z)(l(67294)),
                n = a.default.createContext(null);
            t.AppRouterContext = n;
            var o = a.default.createContext(null);
            t.LayoutRouterContext = o;
            var s = a.default.createContext(null);
            t.GlobalLayoutRouterContext = s;
            var r = a.default.createContext(null);
            t.TemplateContext = r
        },
        41664: function(e, t, l) {
            e.exports = l(48418)
        }
    }
]);