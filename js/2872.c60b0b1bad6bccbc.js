"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2872], {
        22872: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return Fe
                }
            });
            var r = n(67294),
                o = n.t(r, 2),
                l = n(32984),
                u = n(12351),
                a = n(23784),
                i = n(61363),
                s = n(64103),
                c = n(19946),
                d = n(82180),
                f = n(46045),
                p = n(84575),
                m = n(73781),
                v = n(7815),
                g = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(g || {});
            var h = n(14879),
                E = n(51074),
                w = n(3855);

            function T(e, t, n, o) {
                let l = (0, w.E)(n);
                (0, r.useEffect)((() => {
                    function n(e) {
                        l.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, o), () => e.removeEventListener(t, n, o)
                }), [e, t, o])
            }
            var b = n(81021),
                y = n(96599),
                C = n(94192);

            function L(e) {
                let t = (0, m.z)(e),
                    n = (0, r.useRef)(!1);
                (0, r.useEffect)((() => (n.current = !1, () => {
                    n.current = !0, (0, b.Y)((() => {
                        n.current && t()
                    }))
                })), [t])
            }

            function P(e) {
                if (!e) return new Set;
                if ("function" == typeof e) return new Set(e());
                let t = new Set;
                for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
                return t
            }
            var M, S = ((M = S || {})[M.None = 1] = "None", M[M.InitialFocus = 2] = "InitialFocus", M[M.TabLock = 4] = "TabLock", M[M.FocusLock = 8] = "FocusLock", M[M.RestoreFocus = 16] = "RestoreFocus", M[M.All = 30] = "All", M);
            let D = (0, u.yV)((function(e, t) {
                    let n = (0, r.useRef)(null),
                        o = (0, a.T)(n, t),
                        {
                            initialFocus: i,
                            containers: s,
                            features: c = 30,
                            ...w
                        } = e;
                    (0, d.H)() || (c = 1);
                    let L = (0, E.i)(n);
                    k({
                        ownerDocument: L
                    }, Boolean(16 & c));
                    let M = function({
                        ownerDocument: e,
                        container: t,
                        initialFocus: n
                    }, o) {
                        let l = (0, r.useRef)(null),
                            u = (0, h.t)();
                        return (0, y.q)((() => {
                            if (!o) return;
                            let r = t.current;
                            r && (0, b.Y)((() => {
                                if (!u.current) return;
                                let t = null == e ? void 0 : e.activeElement;
                                if (null != n && n.current) {
                                    if ((null == n ? void 0 : n.current) === t) return void(l.current = t)
                                } else if (r.contains(t)) return void(l.current = t);
                                null != n && n.current ? (0, p.C5)(n.current) : (0, p.jA)(r, p.TO.First) === p.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.current = null == e ? void 0 : e.activeElement
                            }))
                        }), [o]), l
                    }({
                        ownerDocument: L,
                        container: n,
                        initialFocus: i
                    }, Boolean(2 & c));
                    ! function({
                        ownerDocument: e,
                        container: t,
                        containers: n,
                        previousActiveElement: r
                    }, o) {
                        let l = (0, h.t)();
                        T(null == e ? void 0 : e.defaultView, "focus", (e => {
                            if (!o || !l.current) return;
                            let u = P(n);
                            t.current instanceof HTMLElement && u.add(t.current);
                            let a = r.current;
                            if (!a) return;
                            let i = e.target;
                            i && i instanceof HTMLElement ? A(u, i) ? (r.current = i, (0, p.C5)(i)) : (e.preventDefault(), e.stopPropagation(), (0, p.C5)(a)) : (0, p.C5)(r.current)
                        }), !0)
                    }({
                        ownerDocument: L,
                        container: n,
                        containers: s,
                        previousActiveElement: M
                    }, Boolean(8 & c));
                    let S = function() {
                            let e = (0, r.useRef)(0);
                            return (0, v.s)("keydown", (t => {
                                "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
                            }), !0), e
                        }(),
                        D = (0, m.z)((e => {
                            let t = n.current;
                            t && (0, l.E)(S.current, {
                                [g.Forwards]: () => {
                                    (0, p.jA)(t, p.TO.First, {
                                        skipElements: [e.relatedTarget]
                                    })
                                },
                                [g.Backwards]: () => {
                                    (0, p.jA)(t, p.TO.Last, {
                                        skipElements: [e.relatedTarget]
                                    })
                                }
                            })
                        })),
                        O = (0, C.G)(),
                        R = (0, r.useRef)(!1),
                        F = {
                            ref: o,
                            onKeyDown(e) {
                                "Tab" == e.key && (R.current = !0, O.requestAnimationFrame((() => {
                                    R.current = !1
                                })))
                            },
                            onBlur(e) {
                                let t = P(s);
                                n.current instanceof HTMLElement && t.add(n.current);
                                let r = e.relatedTarget;
                                r instanceof HTMLElement && "true" !== r.dataset.headlessuiFocusGuard && (A(t, r) || (R.current ? (0, p.jA)(n.current, (0, l.E)(S.current, {
                                    [g.Forwards]: () => p.TO.Next,
                                    [g.Backwards]: () => p.TO.Previous
                                }) | p.TO.WrapAround, {
                                    relativeTo: e.target
                                }) : e.target instanceof HTMLElement && (0, p.C5)(e.target)))
                            }
                        };
                    return r.createElement(r.Fragment, null, Boolean(4 & c) && r.createElement(f._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: D,
                        features: f.A.Focusable
                    }), (0, u.sY)({
                        ourProps: F,
                        theirProps: w,
                        defaultTag: "div",
                        name: "FocusTrap"
                    }), Boolean(4 & c) && r.createElement(f._, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: D,
                        features: f.A.Focusable
                    }))
                })),
                O = Object.assign(D, {
                    features: S
                }),
                R = [];

            function k({
                ownerDocument: e
            }, t) {
                let n = function(e = !0) {
                    let t = (0, r.useRef)(R.slice());
                    return (0, y.q)((([e], [n]) => {
                        !0 === n && !1 === e && (0, b.Y)((() => {
                            t.current.splice(0)
                        })), !1 === n && !0 === e && (t.current = R.slice())
                    }), [e, R, t]), (0, m.z)((() => {
                        var e;
                        return null != (e = t.current.find((e => null != e && e.isConnected))) ? e : null
                    }))
                }(t);
                (0, y.q)((() => {
                    t || (null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0, p.C5)(n())
                }), [t]), L((() => {
                    t && (0, p.C5)(n())
                }))
            }

            function A(e, t) {
                for (let n of e)
                    if (n.contains(t)) return !0;
                return !1
            }! function(e) {
                function t() {
                    "loading" !== document.readyState && (e(), document.removeEventListener("DOMContentLoaded", t))
                }
                "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", t), t())
            }((() => {
                function e(e) {
                    e.target instanceof HTMLElement && e.target !== document.body && R[0] !== e.target && (R.unshift(e.target), R = R.filter((e => null != e && e.isConnected)), R.splice(10))
                }
                window.addEventListener("click", e, {
                    capture: !0
                }), window.addEventListener("mousedown", e, {
                    capture: !0
                }), window.addEventListener("focus", e, {
                    capture: !0
                }), document.body.addEventListener("click", e, {
                    capture: !0
                }), document.body.addEventListener("mousedown", e, {
                    capture: !0
                }), document.body.addEventListener("focus", e, {
                    capture: !0
                })
            }));
            var F = n(73935),
                x = n(16723);
            let H = (0, r.createContext)(!1);

            function N() {
                return (0, r.useContext)(H)
            }

            function Y(e) {
                return r.createElement(H.Provider, {
                    value: e.force
                }, e.children)
            }
            var V = n(77896);
            let B = r.Fragment;
            let z = r.Fragment,
                I = (0, r.createContext)(null);
            let _ = (0, r.createContext)(null);

            function j() {
                let e = (0, r.useContext)(_),
                    t = (0, r.useRef)([]),
                    n = (0, m.z)((n => (t.current.push(n), e && e.register(n), () => o(n)))),
                    o = (0, m.z)((n => {
                        let r = t.current.indexOf(n); - 1 !== r && t.current.splice(r, 1), e && e.unregister(n)
                    })),
                    l = (0, r.useMemo)((() => ({
                        register: n,
                        unregister: o,
                        portals: t
                    })), [n, o, t]);
                return [t, (0, r.useMemo)((() => function({
                    children: e
                }) {
                    return r.createElement(_.Provider, {
                        value: l
                    }, e)
                }), [l])]
            }
            let $ = (0, u.yV)((function(e, t) {
                    let n = e,
                        o = (0, r.useRef)(null),
                        l = (0, a.T)((0, a.h)((e => {
                            o.current = e
                        })), t),
                        i = (0, E.i)(o),
                        s = function(e) {
                            let t = N(),
                                n = (0, r.useContext)(I),
                                o = (0, E.i)(e),
                                [l, u] = (0, r.useState)((() => {
                                    if (!t && null !== n || V.O.isServer) return null;
                                    let e = null == o ? void 0 : o.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === o) return null;
                                    let r = o.createElement("div");
                                    return r.setAttribute("id", "headlessui-portal-root"), o.body.appendChild(r)
                                }));
                            return (0, r.useEffect)((() => {
                                null !== l && (null != o && o.body.contains(l) || null == o || o.body.appendChild(l))
                            }), [l, o]), (0, r.useEffect)((() => {
                                t || null !== n && u(n.current)
                            }), [n, u, t]), l
                        }(o),
                        [c] = (0, r.useState)((() => {
                            var e;
                            return V.O.isServer ? null : null != (e = null == i ? void 0 : i.createElement("div")) ? e : null
                        })),
                        f = (0, r.useContext)(_),
                        p = (0, d.H)();
                    return (0, x.e)((() => {
                        !s || !c || s.contains(c) || (c.setAttribute("data-headlessui-portal", ""), s.appendChild(c))
                    }), [s, c]), (0, x.e)((() => {
                        if (c && f) return f.register(c)
                    }), [f, c]), L((() => {
                        var e;
                        !s || !c || (c instanceof Node && s.contains(c) && s.removeChild(c), s.childNodes.length <= 0 && (null == (e = s.parentElement) || e.removeChild(s)))
                    })), p && s && c ? (0, F.createPortal)((0, u.sY)({
                        ourProps: {
                            ref: l
                        },
                        theirProps: n,
                        defaultTag: B,
                        name: "Portal"
                    }), c) : null
                })),
                W = (0, u.yV)((function(e, t) {
                    let {
                        target: n,
                        ...o
                    } = e, l = {
                        ref: (0, a.T)(t)
                    };
                    return r.createElement(I.Provider, {
                        value: n
                    }, (0, u.sY)({
                        ourProps: l,
                        theirProps: o,
                        defaultTag: z,
                        name: "Popover.Group"
                    }))
                })),
                q = Object.assign($, {
                    Group: W
                }),
                G = (0, r.createContext)(null);

            function U() {
                let e = (0, r.useContext)(G);
                if (null === e) {
                    let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(e, U), e
                }
                return e
            }
            let Z = (0, u.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: r = `headlessui-description-${n}`,
                            ...o
                        } = e,
                        l = U(),
                        i = (0, a.T)(t);
                    (0, x.e)((() => l.register(r)), [r, l.register]);
                    let s = {
                        ref: i,
                        ...l.props,
                        id: r
                    };
                    return (0, u.sY)({
                        ourProps: s,
                        theirProps: o,
                        slot: l.slot || {},
                        defaultTag: "p",
                        name: l.name || "Description"
                    })
                })),
                K = Object.assign(Z, {});
            var J = n(16567);
            let Q = (0, r.createContext)((() => {}));
            Q.displayName = "StackContext";
            var X = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(X || {});

            function ee({
                children: e,
                onUpdate: t,
                type: n,
                element: o,
                enabled: l
            }) {
                let u = (0, r.useContext)(Q),
                    a = (0, m.z)(((...e) => {
                        null == t || t(...e), u(...e)
                    }));
                return (0, x.e)((() => {
                    let e = void 0 === l || !0 === l;
                    return e && a(0, n, o), () => {
                        e && a(1, n, o)
                    }
                }), [a, n, o, l]), r.createElement(Q.Provider, {
                    value: a
                }, e)
            }
            var te = n(39650);
            const ne = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                },
                {
                    useState: re,
                    useEffect: oe,
                    useLayoutEffect: le,
                    useDebugValue: ue
                } = o;

            function ae(e) {
                const t = e.getSnapshot,
                    n = e.value;
                try {
                    const e = t();
                    return !ne(n, e)
                } catch {
                    return !0
                }
            }
            const ie = !("undefined" != typeof window && "undefined" != typeof window.document && "undefined" != typeof window.document.createElement) ? function(e, t, n) {
                    return t()
                } : function(e, t, n) {
                    const r = t(),
                        [{
                            inst: o
                        }, l] = re({
                            inst: {
                                value: r,
                                getSnapshot: t
                            }
                        });
                    return le((() => {
                        o.value = r, o.getSnapshot = t, ae(o) && l({
                            inst: o
                        })
                    }), [e, r, t]), oe((() => (ae(o) && l({
                        inst: o
                    }), e((() => {
                        ae(o) && l({
                            inst: o
                        })
                    })))), [e]), ue(r), r
                },
                se = ie;
            var ce = n(9362);

            function de() {
                let e;
                return {
                    before({
                        doc: t
                    }) {
                        var n;
                        let r = t.documentElement;
                        e = (null != (n = t.defaultView) ? n : window).innerWidth - r.clientWidth
                    },
                    after({
                        doc: t,
                        d: n
                    }) {
                        let r = t.documentElement,
                            o = r.clientWidth - r.offsetWidth,
                            l = e - o;
                        n.style(r, "paddingRight", `${l}px`)
                    }
                }
            }
            var fe = n(78657);

            function pe() {
                if (!(0, fe.gn)()) return {};
                let e;
                return {
                    before() {
                        e = window.pageYOffset
                    },
                    after({
                        doc: t,
                        d: n,
                        meta: r
                    }) {
                        function o(e) {
                            return r.containers.flatMap((e => e())).some((t => t.contains(e)))
                        }
                        n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
                        let l = null;
                        n.addEventListener(t, "click", (e => {
                            if (e.target instanceof HTMLElement) try {
                                let n = e.target.closest("a");
                                if (!n) return;
                                let {
                                    hash: r
                                } = new URL(n.href), u = t.querySelector(r);
                                u && !o(u) && (l = u)
                            } catch {}
                        }), !0), n.addEventListener(t, "touchmove", (e => {
                            e.target instanceof HTMLElement && !o(e.target) && e.preventDefault()
                        }), {
                            passive: !1
                        }), n.add((() => {
                            window.scrollTo(0, window.pageYOffset + e), l && l.isConnected && (l.scrollIntoView({
                                block: "nearest"
                            }), l = null)
                        }))
                    }
                }
            }

            function me(e) {
                let t = {};
                for (let n of e) Object.assign(t, n(t));
                return t
            }
            let ve = function(e, t) {
                let n = e(),
                    r = new Set;
                return {
                    getSnapshot: () => n,
                    subscribe: e => (r.add(e), () => r.delete(e)),
                    dispatch(e, ...o) {
                        let l = t[e].call(n, ...o);
                        l && (n = l, r.forEach((e => e())))
                    }
                }
            }((() => new Map), {
                PUSH(e, t) {
                    var n;
                    let r = null != (n = this.get(e)) ? n : {
                        doc: e,
                        count: 0,
                        d: (0, ce.k)(),
                        meta: new Set
                    };
                    return r.count++, r.meta.add(t), this.set(e, r), this
                },
                POP(e, t) {
                    let n = this.get(e);
                    return n && (n.count--, n.meta.delete(t)), this
                },
                SCROLL_PREVENT({
                    doc: e,
                    d: t,
                    meta: n
                }) {
                    let r = {
                            doc: e,
                            d: t,
                            meta: me(n)
                        },
                        o = [pe(), de(), {
                            before({
                                doc: e,
                                d: t
                            }) {
                                t.style(e.documentElement, "overflow", "hidden")
                            }
                        }];
                    o.forEach((({
                        before: e
                    }) => null == e ? void 0 : e(r))), o.forEach((({
                        after: e
                    }) => null == e ? void 0 : e(r)))
                },
                SCROLL_ALLOW({
                    d: e
                }) {
                    e.dispose()
                },
                TEARDOWN({
                    doc: e
                }) {
                    this.delete(e)
                }
            });

            function ge(e, t, n) {
                let r = function(e) {
                        return se(e.subscribe, e.getSnapshot, e.getSnapshot)
                    }(ve),
                    o = e ? r.get(e) : void 0,
                    l = !!o && o.count > 0;
                return (0, x.e)((() => {
                    if (e && t) return ve.dispatch("PUSH", e, n), () => ve.dispatch("POP", e, n)
                }), [t, e]), l
            }
            ve.subscribe((() => {
                let e = ve.getSnapshot(),
                    t = new Map;
                for (let [n] of e) t.set(n, n.documentElement.style.overflow);
                for (let n of e.values()) {
                    let e = "hidden" === t.get(n.doc),
                        r = 0 !== n.count;
                    (r && !e || !r && e) && ve.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), 0 === n.count && ve.dispatch("TEARDOWN", n)
                }
            }));
            let he = new Map,
                Ee = new Map;

            function we(e, t = !0) {
                (0, x.e)((() => {
                    var n;
                    if (!t) return;
                    let r = "function" == typeof e ? e() : e.current;
                    if (!r) return;
                    let o = null != (n = Ee.get(r)) ? n : 0;
                    return Ee.set(r, o + 1), 0 !== o || (he.set(r, {
                            "aria-hidden": r.getAttribute("aria-hidden"),
                            inert: r.inert
                        }), r.setAttribute("aria-hidden", "true"), r.inert = !0),
                        function() {
                            var e;
                            if (!r) return;
                            let t = null != (e = Ee.get(r)) ? e : 1;
                            if (1 === t ? Ee.delete(r) : Ee.set(r, t - 1), 1 !== t) return;
                            let n = he.get(r);
                            n && (null === n["aria-hidden"] ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", n["aria-hidden"]), r.inert = n.inert, he.delete(r))
                        }
                }), [e, t])
            }
            var Te, be = ((Te = be || {})[Te.Open = 0] = "Open", Te[Te.Closed = 1] = "Closed", Te),
                ye = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(ye || {});
            let Ce = {
                    0: (e, t) => e.titleId === t.id ? e : {
                        ...e,
                        titleId: t.id
                    }
                },
                Le = (0, r.createContext)(null);

            function Pe(e) {
                let t = (0, r.useContext)(Le);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, Pe), t
                }
                return t
            }

            function Me(e, t) {
                return (0, l.E)(t.type, Ce, e, t)
            }
            Le.displayName = "DialogContext";
            let Se = u.AN.RenderStrategy | u.AN.Static;
            let De = (0, u.yV)((function(e, t) {
                    var n;
                    let o = (0, c.M)(),
                        {
                            id: s = `headlessui-dialog-${o}`,
                            open: p,
                            onClose: v,
                            initialFocus: g,
                            __demoMode: h = !1,
                            ...w
                        } = e,
                        [b, y] = (0, r.useState)(0),
                        C = (0, J.oJ)();
                    void 0 === p && null !== C && (p = (C & J.ZM.Open) === J.ZM.Open);
                    let L = (0, r.useRef)(null),
                        P = (0, a.T)(L, t),
                        M = (0, E.i)(L),
                        S = e.hasOwnProperty("open") || null !== C,
                        D = e.hasOwnProperty("onClose");
                    if (!S && !D) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!S) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!D) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof p) throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p}`);
                    if ("function" != typeof v) throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${v}`);
                    let R = p ? 0 : 1,
                        [k, A] = (0, r.useReducer)(Me, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, r.createRef)()
                        }),
                        F = (0, m.z)((() => v(!1))),
                        x = (0, m.z)((e => A({
                            type: 0,
                            id: e
                        }))),
                        H = !!(0, d.H)() && (!h && 0 === R),
                        N = b > 1,
                        V = null !== (0, r.useContext)(Le),
                        [B, z] = j(),
                        {
                            resolveContainers: I,
                            mainTreeNodeRef: _,
                            MainTreeNode: $
                        } = function({
                            defaultContainers: e = [],
                            portals: t
                        } = {}) {
                            let n = (0, r.useRef)(null),
                                o = (0, E.i)(n),
                                l = (0, m.z)((() => {
                                    var r;
                                    let l = [];
                                    for (let t of e) null !== t && (t instanceof HTMLElement ? l.push(t) : "current" in t && t.current instanceof HTMLElement && l.push(t.current));
                                    if (null != t && t.current)
                                        for (let e of t.current) l.push(e);
                                    for (let e of null != (r = null == o ? void 0 : o.querySelectorAll("html > *, body > *")) ? r : []) e !== document.body && e !== document.head && e instanceof HTMLElement && "headlessui-portal-root" !== e.id && (e.contains(n.current) || l.some((t => e.contains(t))) || l.push(e));
                                    return l
                                }));
                            return {
                                resolveContainers: l,
                                contains: (0, m.z)((e => l().some((t => t.contains(e))))),
                                mainTreeNodeRef: n,
                                MainTreeNode: (0, r.useMemo)((() => function() {
                                    return r.createElement(f._, {
                                        features: f.A.Hidden,
                                        ref: n
                                    })
                                }), [n])
                            }
                        }({
                            portals: B,
                            defaultContainers: [null != (n = k.panelRef.current) ? n : L.current]
                        }),
                        W = N ? "parent" : "leaf",
                        U = null !== C && (C & J.ZM.Closing) === J.ZM.Closing,
                        Z = !V && !U && H,
                        K = (0, r.useCallback)((() => {
                            var e, t;
                            return null != (t = Array.from(null != (e = null == M ? void 0 : M.querySelectorAll("body > *")) ? e : []).find((e => "headlessui-portal-root" !== e.id && (e.contains(_.current) && e instanceof HTMLElement)))) ? t : null
                        }), [_]);
                    we(K, Z);
                    let Q = !!N || H,
                        ne = (0, r.useCallback)((() => {
                            var e, t;
                            return null != (t = Array.from(null != (e = null == M ? void 0 : M.querySelectorAll("[data-headlessui-portal]")) ? e : []).find((e => e.contains(_.current) && e instanceof HTMLElement))) ? t : null
                        }), [_]);
                    we(ne, Q);
                    let re = !(!H || N);
                    (0, te.O)(I, F, re);
                    let oe = !(N || 0 !== R);
                    T(null == M ? void 0 : M.defaultView, "keydown", (e => {
                            oe && (e.defaultPrevented || e.key === i.R.Escape && (e.preventDefault(), e.stopPropagation(), F()))
                        })),
                        function(e, t, n = (() => [document.body])) {
                            ge(e, t, (e => {
                                var t;
                                return {
                                    containers: [...null != (t = e.containers) ? t : [], n]
                                }
                            }))
                        }(M, !(U || 0 !== R || V), I), (0, r.useEffect)((() => {
                            if (0 !== R || !L.current) return;
                            let e = new ResizeObserver((e => {
                                for (let t of e) {
                                    let e = t.target.getBoundingClientRect();
                                    0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && F()
                                }
                            }));
                            return e.observe(L.current), () => e.disconnect()
                        }), [R, L, F]);
                    let [le, ue] = function() {
                        let [e, t] = (0, r.useState)([]);
                        return [e.length > 0 ? e.join(" ") : void 0, (0, r.useMemo)((() => function(e) {
                            let n = (0, m.z)((e => (t((t => [...t, e])), () => t((t => {
                                    let n = t.slice(),
                                        r = n.indexOf(e);
                                    return -1 !== r && n.splice(r, 1), n
                                }))))),
                                o = (0, r.useMemo)((() => ({
                                    register: n,
                                    slot: e.slot,
                                    name: e.name,
                                    props: e.props
                                })), [n, e.slot, e.name, e.props]);
                            return r.createElement(G.Provider, {
                                value: o
                            }, e.children)
                        }), [t])]
                    }(), ae = (0, r.useMemo)((() => [{
                        dialogState: R,
                        close: F,
                        setTitleId: x
                    }, k]), [R, k, F, x]), ie = (0, r.useMemo)((() => ({
                        open: 0 === R
                    })), [R]), se = {
                        ref: P,
                        id: s,
                        role: "dialog",
                        "aria-modal": 0 === R || void 0,
                        "aria-labelledby": k.titleId,
                        "aria-describedby": le
                    };
                    return r.createElement(ee, {
                        type: "Dialog",
                        enabled: 0 === R,
                        element: L,
                        onUpdate: (0, m.z)(((e, t) => {
                            "Dialog" === t && (0, l.E)(e, {
                                [X.Add]: () => y((e => e + 1)),
                                [X.Remove]: () => y((e => e - 1))
                            })
                        }))
                    }, r.createElement(Y, {
                        force: !0
                    }, r.createElement(q, null, r.createElement(Le.Provider, {
                        value: ae
                    }, r.createElement(q.Group, {
                        target: L
                    }, r.createElement(Y, {
                        force: !1
                    }, r.createElement(ue, {
                        slot: ie,
                        name: "Dialog.Description"
                    }, r.createElement(O, {
                        initialFocus: g,
                        containers: I,
                        features: H ? (0, l.E)(W, {
                            parent: O.features.RestoreFocus,
                            leaf: O.features.All & ~O.features.FocusLock
                        }) : O.features.None
                    }, r.createElement(z, null, (0, u.sY)({
                        ourProps: se,
                        theirProps: w,
                        slot: ie,
                        defaultTag: "div",
                        features: Se,
                        visible: 0 === R,
                        name: "Dialog"
                    }))))))))), r.createElement($, null))
                })),
                Oe = (0, u.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: o = `headlessui-dialog-backdrop-${n}`,
                            ...l
                        } = e,
                        [{
                            dialogState: i
                        }, s] = Pe("Dialog.Backdrop"),
                        d = (0, a.T)(t);
                    (0, r.useEffect)((() => {
                        if (null === s.panelRef.current) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                    }), [s.panelRef]);
                    let f = (0, r.useMemo)((() => ({
                        open: 0 === i
                    })), [i]);
                    return r.createElement(Y, {
                        force: !0
                    }, r.createElement(q, null, (0, u.sY)({
                        ourProps: {
                            ref: d,
                            id: o,
                            "aria-hidden": !0
                        },
                        theirProps: l,
                        slot: f,
                        defaultTag: "div",
                        name: "Dialog.Backdrop"
                    })))
                })),
                Re = (0, u.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: o = `headlessui-dialog-panel-${n}`,
                            ...l
                        } = e,
                        [{
                            dialogState: i
                        }, s] = Pe("Dialog.Panel"),
                        d = (0, a.T)(t, s.panelRef),
                        f = (0, r.useMemo)((() => ({
                            open: 0 === i
                        })), [i]),
                        p = (0, m.z)((e => {
                            e.stopPropagation()
                        }));
                    return (0, u.sY)({
                        ourProps: {
                            ref: d,
                            id: o,
                            onClick: p
                        },
                        theirProps: l,
                        slot: f,
                        defaultTag: "div",
                        name: "Dialog.Panel"
                    })
                })),
                ke = (0, u.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: o = `headlessui-dialog-overlay-${n}`,
                            ...l
                        } = e,
                        [{
                            dialogState: i,
                            close: d
                        }] = Pe("Dialog.Overlay"),
                        f = (0, a.T)(t),
                        p = (0, m.z)((e => {
                            if (e.target === e.currentTarget) {
                                if ((0, s.P)(e.currentTarget)) return e.preventDefault();
                                e.preventDefault(), e.stopPropagation(), d()
                            }
                        })),
                        v = (0, r.useMemo)((() => ({
                            open: 0 === i
                        })), [i]);
                    return (0, u.sY)({
                        ourProps: {
                            ref: f,
                            id: o,
                            "aria-hidden": !0,
                            onClick: p
                        },
                        theirProps: l,
                        slot: v,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                })),
                Ae = (0, u.yV)((function(e, t) {
                    let n = (0, c.M)(),
                        {
                            id: o = `headlessui-dialog-title-${n}`,
                            ...l
                        } = e,
                        [{
                            dialogState: i,
                            setTitleId: s
                        }] = Pe("Dialog.Title"),
                        d = (0, a.T)(t);
                    (0, r.useEffect)((() => (s(o), () => s(null))), [o, s]);
                    let f = (0, r.useMemo)((() => ({
                        open: 0 === i
                    })), [i]);
                    return (0, u.sY)({
                        ourProps: {
                            ref: d,
                            id: o
                        },
                        theirProps: l,
                        slot: f,
                        defaultTag: "h2",
                        name: "Dialog.Title"
                    })
                })),
                Fe = Object.assign(De, {
                    Backdrop: Oe,
                    Panel: Re,
                    Overlay: ke,
                    Title: Ae,
                    Description: K
                })
        },
        51074: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return l
                }
            });
            var r = n(67294),
                o = n(15466);

            function l(...e) {
                return (0, r.useMemo)((() => (0, o.r)(...e)), [...e])
            }
        }
    }
]);