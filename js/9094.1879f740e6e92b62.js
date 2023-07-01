"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9094], {
        52077: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(85893),
                a = n(41664),
                i = n.n(a),
                l = n(16494),
                s = n(31996);

            function o(e) {
                var t, n, a, o, u = e.button,
                    d = e.type,
                    c = e.website,
                    m = e.action,
                    v = e.loading,
                    f = e.className,
                    p = (null === c || void 0 === c || null === (t = c.button) || void 0 === t ? void 0 : t.background) || (null === c || void 0 === c ? void 0 : c.secondaryColor),
                    g = {
                        background: "outline" === (null === c || void 0 === c || null === (n = c.button) || void 0 === n ? void 0 : n.style) ? "transparent" : p,
                        borderRadius: isNaN(null === c || void 0 === c || null === (a = c.button) || void 0 === a ? void 0 : a.cornerRadius) ? 8 : c.button.cornerRadius,
                        color: "outline" === (null === c || void 0 === c || null === (o = c.button) || void 0 === o ? void 0 : o.style) ? p : (0, s.$O)(p),
                        border: "2px solid ".concat(p)
                    };
                return m && "function" === typeof m || "submit" === d ? (0, r.jsx)("button", {
                    type: "submit" === d ? "submit" : "button",
                    onClick: m,
                    className: (0, s.AK)("button primary", f),
                    style: g,
                    disabled: v,
                    children: v ? (0, r.jsx)(l.Z, {}) : u.label
                }) : (0, r.jsx)(i(), {
                    href: function(e) {
                        if (e) {
                            if ("email" === e.type) return "mailto:" + e.link;
                            if ("phone" === e.type) return "tel:" + e.link;
                            if ("page" === e.type) {
                                var t, n, r, a = null === c || void 0 === c || null === (t = c.pages) || void 0 === t ? void 0 : t.find((function(t) {
                                        return t._id === e.page
                                    })),
                                    i = (null === a || void 0 === a ? void 0 : a.Parent) ? null === c || void 0 === c || null === (n = c.pages) || void 0 === n ? void 0 : n.find((function(e) {
                                        return e._id === (null === a || void 0 === a ? void 0 : a.Parent)
                                    })) : null,
                                    l = "";
                                return i && (l += "".concat(i.slug, "/")), l += null !== (r = null === a || void 0 === a ? void 0 : a.slug) && void 0 !== r ? r : "/"
                            }
                            var s, o = null === (s = e.link) || void 0 === s ? void 0 : s.replace(/https?:\/\//gi, "");
                            return o && "#" !== o ? "https://" + o : "#"
                        }
                        return "/"
                    }(u),
                    children: (0, r.jsx)("a", {
                        className: (0, s.AK)("button primary", f),
                        target: function(e) {
                            var t, n, r, a = null === c || void 0 === c || null === (t = c.pages) || void 0 === t ? void 0 : t.find((function(t) {
                                return t._id === e.page
                            }));
                            return e.newPage ? "_blank" : (null === a || void 0 === a ? void 0 : a.forceRender) ? "_parent" : (null === c || void 0 === c || null === (n = c.button) || void 0 === n ? void 0 : n.target) ? null === c || void 0 === c || null === (r = c.button) || void 0 === r ? void 0 : r.target : "_self"
                        }(u),
                        style: g,
                        children: u.label
                    })
                })
            }
        },
        74007: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(85893),
                a = n(67294),
                i = n(17258),
                l = n(44080),
                s = n(31996),
                o = n(40944);

            function u(e) {
                var t = e.className,
                    n = e.icon,
                    u = e.iconClassName,
                    d = e.button,
                    c = e.buttonClassName,
                    m = e.openClassName,
                    v = e.iconOpenClassName,
                    f = e.children,
                    p = e.inline,
                    g = e.itemsContainerClass,
                    y = e.disabled,
                    x = e.itemsContainerStyle,
                    h = e.openUp,
                    b = void 0 !== h && h,
                    N = function() {
                        j(function(e) {
                            if (!e) return !1;
                            var t = e.getBoundingClientRect();
                            return !(t.left >= 0 && t.right <= (window.innerWidth || document.documentElement.clientWidth))
                        }(I.current))
                    },
                    I = (0, a.useRef)(),
                    R = (0, a.useState)(!1),
                    w = R[0],
                    j = R[1];
                return (0, r.jsx)(i.v, {
                    as: "div",
                    className: (0, s.AK)("relative inline-block text-left", t),
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    children: function(e) {
                        var t = e.open;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i.v.Button, {
                                className: (0, s.AK)(c, t ? m : "", "cursor-pointer z-5 focus:outline-none"),
                                disabled: y,
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: d || (0, r.jsx)(o.Z, {
                                    icon: n || "DotsVerticalIcon",
                                    className: (0, s.AK)(u, "h-5 w-5", t ? v || "text-indigo-500" : "text-gray-500")
                                })
                            }), (0, r.jsx)(l.u, {
                                show: t,
                                as: a.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                ref: I,
                                beforeEnter: N,
                                afterLeave: function() {
                                    return j(!1)
                                },
                                children: (0, r.jsx)(i.v.Items, {
                                    className: (0, s.AK)(g, "z-100 max-h-60 py-3 px-6 rounded-lg bg-white focus:outline-none overflow-y-auto space-y-2 shadow-lg", p ? "static" : "absolute", b ? "bottom-full origin-bottom-left" : "top-full origin-top-left", w ? "right-0" : "left-0"),
                                    style: x,
                                    children: f
                                })
                            })]
                        })
                    }
                })
            }
        },
        40944: function(e, t, n) {
            var r = n(6453),
                a = n(85893),
                i = n(83282);
            t.Z = function(e) {
                var t = (0, r.Z)({}, i)[e.icon];
                return t ? (0, a.jsx)(t, {
                    className: e.className,
                    onClick: e.onClick,
                    "aria-hidden": "true"
                }) : "<></>"
            }
        },
        16494: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(85893),
                a = n(31996);

            function i(e) {
                var t = e.text,
                    n = e.className,
                    i = e.classNameChild;
                switch (e.variant) {
                    case "form":
                        return (0, r.jsx)("div", {
                            className: "w-full max-w-screen-sm my-8",
                            children: (0, r.jsxs)("div", {
                                className: "animate-pulse flex space-y-8 flex-col",
                                children: [(0, r.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/2"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, r.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-5/6"
                                    })]
                                }), (0, r.jsx)("hr", {}), (0, r.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, r.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, r.jsx)("hr", {}), (0, r.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, r.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, r.jsx)("hr", {}), (0, r.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/6"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, r.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-3/4"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"
                                })]
                            })
                        });
                    case "skeleton":
                        return (0, r.jsx)("div", {
                            className: n,
                            children: (0, r.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, r.jsx)("div", {
                                    className: (0, a.AK)("h-6 bg-gray-200 rounded", i)
                                })
                            })
                        });
                    case "table":
                        return (0, r.jsx)("div", {
                            className: "w-full my-8",
                            children: (0, r.jsxs)("div", {
                                className: "animate-pulse flex space-y-2 flex-col",
                                children: [(0, r.jsxs)("div", {
                                    className: "space-x-2 flex",
                                    children: [(0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, r.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map((function(e) {
                                    return (0, r.jsxs)("div", {
                                        className: "space-x-2 flex",
                                        children: [(0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, r.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        })]
                                    }, e)
                                }))]
                            })
                        });
                    default:
                        return (0, r.jsxs)("div", {
                            className: (0, a.AK)("inline-flex items-center", n),
                            children: [(0, r.jsxs)("svg", {
                                className: (0, a.AK)("animate-spin ml-1 mr-3 h-4 w-4", n && "text-indigo-600"),
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, r.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, r.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), t || "" === t ? t : "Loading..."]
                        })
                }
            }
        },
        17258: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return Z
                }
            });
            var r = n(67294),
                a = n(32984),
                i = n(12351),
                l = n(9362),
                s = n(94192),
                o = n(16723),
                u = n(23784),
                d = n(19946),
                c = n(61363),
                m = n(11497),
                v = n(64103),
                f = n(84575),
                p = n(39650),
                g = n(31591),
                y = n(16567),
                x = n(14157),
                h = n(51074),
                b = n(73781),
                N = n(40476);
            let I = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

            function R(e) {
                var t, n;
                let r = null != (t = e.innerText) ? t : "",
                    a = e.cloneNode(!0);
                if (!(a instanceof HTMLElement)) return r;
                let i = !1;
                for (let s of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), i = !0;
                let l = i ? null != (n = a.innerText) ? n : "" : r;
                return I.test(l) && (l = l.replace(I, "")), l
            }

            function w(e) {
                let t = (0, r.useRef)(""),
                    n = (0, r.useRef)("");
                return (0, b.z)((() => {
                    let r = e.current;
                    if (!r) return "";
                    let a = r.innerText;
                    if (t.current === a) return n.current;
                    let i = function(e) {
                        let t = e.getAttribute("aria-label");
                        if ("string" == typeof t) return t.trim();
                        let n = e.getAttribute("aria-labelledby");
                        if (n) {
                            let e = n.split(" ").map((e => {
                                let t = document.getElementById(e);
                                if (t) {
                                    let e = t.getAttribute("aria-label");
                                    return "string" == typeof e ? e.trim() : R(t).trim()
                                }
                                return null
                            })).filter(Boolean);
                            if (e.length > 0) return e.join(", ")
                        }
                        return R(e).trim()
                    }(r).trim().toLowerCase();
                    return t.current = a, n.current = i, i
                }))
            }
            var j, T = ((j = T || {})[j.Open = 0] = "Open", j[j.Closed = 1] = "Closed", j),
                k = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(k || {}),
                C = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(C || {});

            function M(e, t = (e => e)) {
                let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    r = (0, f.z2)(t(e.items.slice()), (e => e.dataRef.current.domRef.current)),
                    a = n ? r.indexOf(n) : null;
                return -1 === a && (a = null), {
                    items: r,
                    activeItemIndex: a
                }
            }
            let P = {
                    1: e => 1 === e.menuState ? e : {
                        ...e,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: e => 0 === e.menuState ? e : {
                        ...e,
                        __demoMode: !1,
                        menuState: 0
                    },
                    2: (e, t) => {
                        var n;
                        let r = M(e),
                            a = (0, m.d)(t, {
                                resolveItems: () => r.items,
                                resolveActiveIndex: () => r.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return {
                            ...e,
                            ...r,
                            searchQuery: "",
                            activeItemIndex: a,
                            activationTrigger: null != (n = t.trigger) ? n : 1
                        }
                    },
                    3: (e, t) => {
                        let n = "" !== e.searchQuery ? 0 : 1,
                            r = e.searchQuery + t.value.toLowerCase(),
                            a = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                            })),
                            i = a ? e.items.indexOf(a) : -1;
                        return -1 === i || i === e.activeItemIndex ? {
                            ...e,
                            searchQuery: r
                        } : {
                            ...e,
                            searchQuery: r,
                            activeItemIndex: i,
                            activationTrigger: 1
                        }
                    },
                    4: e => "" === e.searchQuery ? e : {
                        ...e,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (e, t) => {
                        let n = M(e, (e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]));
                        return {
                            ...e,
                            ...n
                        }
                    },
                    6: (e, t) => {
                        let n = M(e, (e => {
                            let n = e.findIndex((e => e.id === t.id));
                            return -1 !== n && e.splice(n, 1), e
                        }));
                        return {
                            ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    }
                },
                S = (0, r.createContext)(null);

            function D(e) {
                let t = (0, r.useContext)(S);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, D), t
                }
                return t
            }

            function F(e, t) {
                return (0, a.E)(t.type, P, e, t)
            }
            S.displayName = "MenuContext";
            let E = r.Fragment;
            let A = i.AN.RenderStrategy | i.AN.Static;
            let _ = r.Fragment;
            let z = (0, i.yV)((function(e, t) {
                    let {
                        __demoMode: n = !1,
                        ...l
                    } = e, s = (0, r.useReducer)(F, {
                        __demoMode: n,
                        menuState: n ? 0 : 1,
                        buttonRef: (0, r.createRef)(),
                        itemsRef: (0, r.createRef)(),
                        items: [],
                        searchQuery: "",
                        activeItemIndex: null,
                        activationTrigger: 1
                    }), [{
                        menuState: o,
                        itemsRef: d,
                        buttonRef: c
                    }, m] = s, v = (0, u.T)(t);
                    (0, p.O)([c, d], ((e, t) => {
                        var n;
                        m({
                            type: 1
                        }), (0, f.sP)(t, f.tJ.Loose) || (e.preventDefault(), null == (n = c.current) || n.focus())
                    }), 0 === o);
                    let g = (0, b.z)((() => {
                            m({
                                type: 1
                            })
                        })),
                        x = (0, r.useMemo)((() => ({
                            open: 0 === o,
                            close: g
                        })), [o, g]),
                        h = {
                            ref: v
                        };
                    return r.createElement(S.Provider, {
                        value: s
                    }, r.createElement(y.up, {
                        value: (0, a.E)(o, {
                            0: y.ZM.Open,
                            1: y.ZM.Closed
                        })
                    }, (0, i.sY)({
                        ourProps: h,
                        theirProps: l,
                        slot: x,
                        defaultTag: E,
                        name: "Menu"
                    })))
                })),
                O = (0, i.yV)((function(e, t) {
                    var n;
                    let a = (0, d.M)(),
                        {
                            id: l = `headlessui-menu-button-${a}`,
                            ...o
                        } = e,
                        [f, p] = D("Menu.Button"),
                        g = (0, u.T)(f.buttonRef, t),
                        y = (0, s.G)(),
                        h = (0, b.z)((e => {
                            switch (e.key) {
                                case c.R.Space:
                                case c.R.Enter:
                                case c.R.ArrowDown:
                                    e.preventDefault(), e.stopPropagation(), p({
                                        type: 0
                                    }), y.nextFrame((() => p({
                                        type: 2,
                                        focus: m.T.First
                                    })));
                                    break;
                                case c.R.ArrowUp:
                                    e.preventDefault(), e.stopPropagation(), p({
                                        type: 0
                                    }), y.nextFrame((() => p({
                                        type: 2,
                                        focus: m.T.Last
                                    })))
                            }
                        })),
                        N = (0, b.z)((e => {
                            if (e.key === c.R.Space) e.preventDefault()
                        })),
                        I = (0, b.z)((t => {
                            if ((0, v.P)(t.currentTarget)) return t.preventDefault();
                            e.disabled || (0 === f.menuState ? (p({
                                type: 1
                            }), y.nextFrame((() => {
                                var e;
                                return null == (e = f.buttonRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }))) : (t.preventDefault(), p({
                                type: 0
                            })))
                        })),
                        R = (0, r.useMemo)((() => ({
                            open: 0 === f.menuState
                        })), [f]),
                        w = {
                            ref: g,
                            id: l,
                            type: (0, x.f)(e, f.buttonRef),
                            "aria-haspopup": "menu",
                            "aria-controls": null == (n = f.itemsRef.current) ? void 0 : n.id,
                            "aria-expanded": e.disabled ? void 0 : 0 === f.menuState,
                            onKeyDown: h,
                            onKeyUp: N,
                            onClick: I
                        };
                    return (0, i.sY)({
                        ourProps: w,
                        theirProps: o,
                        slot: R,
                        defaultTag: "button",
                        name: "Menu.Button"
                    })
                })),
                K = (0, i.yV)((function(e, t) {
                    var n, a;
                    let o = (0, d.M)(),
                        {
                            id: v = `headlessui-menu-items-${o}`,
                            ...p
                        } = e,
                        [x, N] = D("Menu.Items"),
                        I = (0, u.T)(x.itemsRef, t),
                        R = (0, h.i)(x.itemsRef),
                        w = (0, s.G)(),
                        j = (0, y.oJ)(),
                        T = null !== j ? (j & y.ZM.Open) === y.ZM.Open : 0 === x.menuState;
                    (0, r.useEffect)((() => {
                        let e = x.itemsRef.current;
                        e && 0 === x.menuState && e !== (null == R ? void 0 : R.activeElement) && e.focus({
                            preventScroll: !0
                        })
                    }), [x.menuState, x.itemsRef, R]), (0, g.B)({
                        container: x.itemsRef.current,
                        enabled: 0 === x.menuState,
                        accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                        walk(e) {
                            e.setAttribute("role", "none")
                        }
                    });
                    let k = (0, b.z)((e => {
                            var t, n;
                            switch (w.dispose(), e.key) {
                                case c.R.Space:
                                    if ("" !== x.searchQuery) return e.preventDefault(), e.stopPropagation(), N({
                                        type: 3,
                                        value: e.key
                                    });
                                case c.R.Enter:
                                    if (e.preventDefault(), e.stopPropagation(), N({
                                            type: 1
                                        }), null !== x.activeItemIndex) {
                                        let {
                                            dataRef: e
                                        } = x.items[x.activeItemIndex];
                                        null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                                    }(0, f.wI)(x.buttonRef.current);
                                    break;
                                case c.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), N({
                                        type: 2,
                                        focus: m.T.Next
                                    });
                                case c.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), N({
                                        type: 2,
                                        focus: m.T.Previous
                                    });
                                case c.R.Home:
                                case c.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), N({
                                        type: 2,
                                        focus: m.T.First
                                    });
                                case c.R.End:
                                case c.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), N({
                                        type: 2,
                                        focus: m.T.Last
                                    });
                                case c.R.Escape:
                                    e.preventDefault(), e.stopPropagation(), N({
                                        type: 1
                                    }), (0, l.k)().nextFrame((() => {
                                        var e;
                                        return null == (e = x.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                    break;
                                case c.R.Tab:
                                    e.preventDefault(), e.stopPropagation(), N({
                                        type: 1
                                    }), (0, l.k)().nextFrame((() => {
                                        (0, f.EO)(x.buttonRef.current, e.shiftKey ? f.TO.Previous : f.TO.Next)
                                    }));
                                    break;
                                default:
                                    1 === e.key.length && (N({
                                        type: 3,
                                        value: e.key
                                    }), w.setTimeout((() => N({
                                        type: 4
                                    })), 350))
                            }
                        })),
                        C = (0, b.z)((e => {
                            if (e.key === c.R.Space) e.preventDefault()
                        })),
                        M = (0, r.useMemo)((() => ({
                            open: 0 === x.menuState
                        })), [x]),
                        P = {
                            "aria-activedescendant": null === x.activeItemIndex || null == (n = x.items[x.activeItemIndex]) ? void 0 : n.id,
                            "aria-labelledby": null == (a = x.buttonRef.current) ? void 0 : a.id,
                            id: v,
                            onKeyDown: k,
                            onKeyUp: C,
                            role: "menu",
                            tabIndex: 0,
                            ref: I
                        };
                    return (0, i.sY)({
                        ourProps: P,
                        theirProps: p,
                        slot: M,
                        defaultTag: "div",
                        features: A,
                        visible: T,
                        name: "Menu.Items"
                    })
                })),
                L = (0, i.yV)((function(e, t) {
                    let n = (0, d.M)(),
                        {
                            id: a = `headlessui-menu-item-${n}`,
                            disabled: s = !1,
                            ...c
                        } = e,
                        [v, p] = D("Menu.Item"),
                        g = null !== v.activeItemIndex && v.items[v.activeItemIndex].id === a,
                        y = (0, r.useRef)(null),
                        x = (0, u.T)(t, y);
                    (0, o.e)((() => {
                        if (v.__demoMode || 0 !== v.menuState || !g || 0 === v.activationTrigger) return;
                        let e = (0, l.k)();
                        return e.requestAnimationFrame((() => {
                            var e, t;
                            null == (t = null == (e = y.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })), e.dispose
                    }), [v.__demoMode, y, g, v.menuState, v.activationTrigger, v.activeItemIndex]);
                    let h = w(y),
                        I = (0, r.useRef)({
                            disabled: s,
                            domRef: y,
                            get textValue() {
                                return h()
                            }
                        });
                    (0, o.e)((() => {
                        I.current.disabled = s
                    }), [I, s]), (0, o.e)((() => (p({
                        type: 5,
                        id: a,
                        dataRef: I
                    }), () => p({
                        type: 6,
                        id: a
                    }))), [I, a]);
                    let R = (0, b.z)((() => {
                            p({
                                type: 1
                            })
                        })),
                        j = (0, b.z)((e => {
                            if (s) return e.preventDefault();
                            p({
                                type: 1
                            }), (0, f.wI)(v.buttonRef.current)
                        })),
                        T = (0, b.z)((() => {
                            if (s) return p({
                                type: 2,
                                focus: m.T.Nothing
                            });
                            p({
                                type: 2,
                                focus: m.T.Specific,
                                id: a
                            })
                        })),
                        k = (0, N.g)(),
                        C = (0, b.z)((e => k.update(e))),
                        M = (0, b.z)((e => {
                            k.wasMoved(e) && (s || g || p({
                                type: 2,
                                focus: m.T.Specific,
                                id: a,
                                trigger: 0
                            }))
                        })),
                        P = (0, b.z)((e => {
                            k.wasMoved(e) && (s || g && p({
                                type: 2,
                                focus: m.T.Nothing
                            }))
                        })),
                        S = (0, r.useMemo)((() => ({
                            active: g,
                            disabled: s,
                            close: R
                        })), [g, s, R]);
                    return (0, i.sY)({
                        ourProps: {
                            id: a,
                            ref: x,
                            role: "menuitem",
                            tabIndex: !0 === s ? void 0 : -1,
                            "aria-disabled": !0 === s || void 0,
                            disabled: void 0,
                            onClick: j,
                            onFocus: T,
                            onPointerEnter: C,
                            onMouseEnter: C,
                            onPointerMove: M,
                            onMouseMove: M,
                            onPointerLeave: P,
                            onMouseLeave: P
                        },
                        theirProps: c,
                        slot: S,
                        defaultTag: _,
                        name: "Menu.Item"
                    })
                })),
                Z = Object.assign(z, {
                    Button: O,
                    Items: K,
                    Item: L
                })
        }
    }
]);