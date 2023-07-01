(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6880, 1664, 5063], {
        71210: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, n, r) {
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
            var r = n(39274).Z;
            n(25654).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(12845).Z,
                u = n(38774).Z,
                a = o(n(67294)),
                l = n(76273),
                c = n(22725),
                f = n(63462),
                i = n(21018),
                s = n(57190),
                d = n(71210),
                p = n(98684),
                v = {};

            function y(e, t, n, r) {
                if (e && l.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, n, r)).catch((function(e) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    v[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var b = a.default.forwardRef((function(e, t) {
                var n, o = e.href,
                    b = e.as,
                    h = e.children,
                    g = e.prefetch,
                    x = e.passHref,
                    C = e.replace,
                    _ = e.shallow,
                    M = e.scroll,
                    m = e.locale,
                    L = e.onClick,
                    E = e.onMouseEnter,
                    R = e.onTouchStart,
                    j = e.legacyBehavior,
                    O = void 0 === j ? !0 !== Boolean(!1) : j,
                    w = u(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = h, !O || "string" !== typeof n && "number" !== typeof n || (n = a.default.createElement("a", null, n));
                var I = !1 !== g,
                    k = a.default.useContext(f.RouterContext),
                    P = a.default.useContext(i.AppRouterContext);
                P && (k = P);
                var N, T = a.default.useMemo((function() {
                        var e = r(l.resolveHref(k, o, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: b ? l.resolveHref(k, b) : n || t
                        }
                    }), [k, o, b]),
                    S = T.href,
                    D = T.as,
                    B = a.default.useRef(S),
                    U = a.default.useRef(D);
                O && (N = a.default.Children.only(n));
                var A = O ? N && "object" === typeof N && N.ref : t,
                    H = r(s.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    Z = H[0],
                    K = H[1],
                    F = H[2],
                    G = a.default.useCallback((function(e) {
                        U.current === D && B.current === S || (F(), U.current = D, B.current = S), Z(e), A && ("function" === typeof A ? A(e) : "object" === typeof A && (A.current = e))
                    }), [D, A, S, F, Z]);
                a.default.useEffect((function() {
                    var e = K && I && l.isLocalURL(S),
                        t = "undefined" !== typeof m ? m : k && k.locale,
                        n = v[S + "%" + D + (t ? "%" + t : "")];
                    e && !n && y(k, S, D, {
                        locale: t
                    })
                }), [D, S, K, m, I, k]);
                var W = {
                    ref: G,
                    onClick: function(e) {
                        O || "function" !== typeof L || L(e), O && N.props && "function" === typeof N.props.onClick && N.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, u, c, f, i, s) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
                                    var t = e.currentTarget.target;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) && l.isLocalURL(n)) {
                                e.preventDefault();
                                var d = function() {
                                    "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                        shallow: u,
                                        locale: f,
                                        scroll: c
                                    }) : t[o ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !s
                                    })
                                };
                                i ? a.default.startTransition(d) : d()
                            }
                        }(e, k, S, D, C, _, M, m, Boolean(P), I)
                    },
                    onMouseEnter: function(e) {
                        O || "function" !== typeof E || E(e), O && N.props && "function" === typeof N.props.onMouseEnter && N.props.onMouseEnter(e), !I && P || l.isLocalURL(S) && y(k, S, D, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        O || "function" !== typeof R || R(e), O && N.props && "function" === typeof N.props.onTouchStart && N.props.onTouchStart(e), !I && P || l.isLocalURL(S) && y(k, S, D, {
                            priority: !0
                        })
                    }
                };
                if (!O || x || "a" === N.type && !("href" in N.props)) {
                    var q = "undefined" !== typeof m ? m : k && k.locale,
                        z = k && k.isLocaleDomain && d.getDomainLocale(D, q, k.locales, k.domainLocales);
                    W.href = z || p.addBasePath(c.addLocale(D, q, k && k.defaultLocale))
                }
                return O ? a.default.cloneElement(N, W) : a.default.createElement("a", Object.assign({}, w, W), n)
            }));
            t.default = b, ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        57190: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(39274).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootRef,
                    n = e.rootMargin,
                    f = e.disabled || !a,
                    i = r(o.useState(!1), 2),
                    s = i[0],
                    d = i[1],
                    p = r(o.useState(null), 2),
                    v = p[0],
                    y = p[1];
                o.useEffect((function() {
                    if (a) {
                        if (f || s) return;
                        if (v && v.tagName) {
                            var e = function(e, t, n) {
                                var r = function(e) {
                                        var t, n = {
                                                root: e.root || null,
                                                margin: e.rootMargin || ""
                                            },
                                            r = c.find((function(e) {
                                                return e.root === n.root && e.margin === n.margin
                                            }));
                                        if (r && (t = l.get(r))) return t;
                                        var o = new Map,
                                            u = new IntersectionObserver((function(e) {
                                                e.forEach((function(e) {
                                                    var t = o.get(e.target),
                                                        n = e.isIntersecting || e.intersectionRatio > 0;
                                                    t && n && t(n)
                                                }))
                                            }), e);
                                        return t = {
                                            id: n,
                                            observer: u,
                                            elements: o
                                        }, c.push(n), l.set(n, t), t
                                    }(n),
                                    o = r.id,
                                    u = r.observer,
                                    a = r.elements;
                                return a.set(e, t), u.observe(e),
                                    function() {
                                        if (a.delete(e), u.unobserve(e), 0 === a.size) {
                                            u.disconnect(), l.delete(o);
                                            var t = c.findIndex((function(e) {
                                                return e.root === o.root && e.margin === o.margin
                                            }));
                                            t > -1 && c.splice(t, 1)
                                        }
                                    }
                            }(v, (function(e) {
                                return e && d(e)
                            }), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return e
                        }
                    } else if (!s) {
                        var r = u.requestIdleCallback((function() {
                            return d(!0)
                        }));
                        return function() {
                            return u.cancelIdleCallback(r)
                        }
                    }
                }), [v, f, n, t, s]);
                var b = o.useCallback((function() {
                    d(!1)
                }), []);
                return [y, s, b]
            };
            var o = n(67294),
                u = n(9311),
                a = "function" === typeof IntersectionObserver,
                l = new Map,
                c = [];
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        21018: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var r = (0, n(12845).Z)(n(67294)),
                o = r.default.createContext(null);
            t.AppRouterContext = o;
            var u = r.default.createContext(null);
            t.LayoutRouterContext = u;
            var a = r.default.createContext(null);
            t.GlobalLayoutRouterContext = a;
            var l = r.default.createContext(null);
            t.TemplateContext = l
        },
        41664: function(e, t, n) {
            e.exports = n(48418)
        },
        14157: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return a
                }
            });
            var r = n(67294),
                o = n(16723);

            function u(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                return "string" == typeof n && "button" === n.toLowerCase() ? "button" : void 0
            }

            function a(e, t) {
                let [n, a] = (0, r.useState)((() => u(e)));
                return (0, o.e)((() => {
                    a(u(e))
                }), [e.type, e.as]), (0, o.e)((() => {
                    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && a("button")
                }), [n, t]), n
            }
        },
        40476: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return u
                }
            });
            var r = n(67294);

            function o(e) {
                return [e.screenX, e.screenY]
            }

            function u() {
                let e = (0, r.useRef)([-1, -1]);
                return {
                    wasMoved(t) {
                        let n = o(t);
                        return (e.current[0] !== n[0] || e.current[1] !== n[1]) && (e.current = n, !0)
                    },
                    update(t) {
                        e.current = o(t)
                    }
                }
            }
        },
        31591: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return a
                }
            });
            var r = n(67294),
                o = n(16723),
                u = n(15466);

            function a({
                container: e,
                accept: t,
                walk: n,
                enabled: a = !0
            }) {
                let l = (0, r.useRef)(t),
                    c = (0, r.useRef)(n);
                (0, r.useEffect)((() => {
                    l.current = t, c.current = n
                }), [t, n]), (0, o.e)((() => {
                    if (!e || !a) return;
                    let t = (0, u.r)(e);
                    if (!t) return;
                    let n = l.current,
                        r = c.current,
                        o = Object.assign((e => n(e)), {
                            acceptNode: n
                        }),
                        f = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, o, !1);
                    for (; f.nextNode();) r(f.currentNode)
                }), [e, a, l, c])
            }
        },
        11497: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return o
                },
                d: function() {
                    return u
                }
            });
            var r, o = ((r = o || {})[r.First = 0] = "First", r[r.Previous = 1] = "Previous", r[r.Next = 2] = "Next", r[r.Last = 3] = "Last", r[r.Specific = 4] = "Specific", r[r.Nothing = 5] = "Nothing", r);

            function u(e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let r = t.resolveActiveIndex(),
                    o = null != r ? r : -1,
                    u = (() => {
                        switch (e.focus) {
                            case 0:
                                return n.findIndex((e => !t.resolveDisabled(e)));
                            case 1: {
                                let e = n.slice().reverse().findIndex(((e, n, r) => !(-1 !== o && r.length - n - 1 >= o) && !t.resolveDisabled(e)));
                                return -1 === e ? e : n.length - 1 - e
                            }
                            case 2:
                                return n.findIndex(((e, n) => !(n <= o) && !t.resolveDisabled(e)));
                            case 3: {
                                let e = n.slice().reverse().findIndex((e => !t.resolveDisabled(e)));
                                return -1 === e ? e : n.length - 1 - e
                            }
                            case 4:
                                return n.findIndex((n => t.resolveId(n) === e.id));
                            case 5:
                                return null;
                            default:
                                ! function(e) {
                                    throw new Error("Unexpected object: " + e)
                                }(e)
                        }
                    })();
                return -1 === u ? r : u
            }
        }
    }
]);