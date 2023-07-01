"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [258], {
        40944: function(l, e, t) {
            var i = t(6453),
                n = t(85893),
                o = t(83282);
            e.Z = function(l) {
                var e = (0, i.Z)({}, o)[l.icon];
                return e ? (0, n.jsx)(e, {
                    className: l.className,
                    onClick: l.onClick,
                    "aria-hidden": "true"
                }) : "<></>"
            }
        },
        10258: function(l, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return m
                }
            });
            var i = t(14251),
                n = t(85893),
                o = t(31996),
                r = t(67294),
                a = t(33752),
                s = t.n(a),
                d = t(40944),
                u = t(29260),
                c = t.n(u);

            function m(l) {
                var e, t, a, u, m, v, x, h, f, g, y, j, p = l.website,
                    b = l.block;
                Array.isArray(b.items) || (b.items = [{
                    content: b.content,
                    by: b.by
                }]);
                var N = (0, r.useState)(null),
                    w = N[0],
                    A = N[1],
                    k = (0, r.useState)(null),
                    C = k[0],
                    K = k[1],
                    S = (0, r.useState)("#111827"),
                    Z = S[0],
                    B = S[1];
                return (0, r.useEffect)((function() {
                    b && (A(b.align), K(b.background))
                }), [b]), (0, r.useEffect)((function() {
                    C && B((0, o.$O)(C))
                }), [C]), (0, n.jsx)("section", {
                    className: "flex-shrink-0",
                    style: {
                        backgroundColor: C
                    },
                    children: (0, n.jsx)("div", {
                        className: (0, o.AK)("container mx-auto pt-12 lg:pt-14 xl:pt-20 testimonials-carousel", (null === b || void 0 === b || null === (e = b.items) || void 0 === e || e.length, "pb-12 lg:pb-14 xl:pb-20")),
                        children: (null === b || void 0 === b || null === (t = b.items) || void 0 === t ? void 0 : t.length) > 1 ? (0, n.jsx)(s(), {
                            cellAlign: "center",
                            slidesToShow: 1,
                            autoplay: !0,
                            pauseOnHover: !0,
                            wrapAround: !0,
                            transitionMode: "scroll",
                            defaultControlsConfig: {
                                nextButtonStyle: {
                                    background: "transparent"
                                },
                                nextButtonText: (0, n.jsx)(d.Z, {
                                    icon: "ChevronRightIcon",
                                    className: (0, o.AK)("w-6 lg:w-12 h-6 lg:h-12 -mr-4 md:mr-0", "#111827" === Z ? "text-gray-900" : "text-white")
                                }),
                                prevButtonStyle: {
                                    background: "transparent"
                                },
                                prevButtonText: (0, n.jsx)(d.Z, {
                                    icon: "ChevronLeftIcon",
                                    className: (0, o.AK)("w-6 lg:w-12 h-6 lg:h-12 -ml-4 md:ml-0", "#111827" === Z ? "text-gray-900" : "text-white")
                                })
                            },
                            renderBottomCenterControls: function(l) {
                                var e;
                                return (0, n.jsx)("ul", {
                                    className: (0, o.AK)("flex gap-4 lg:gap-5 w-full", "right" === w ? "justify-end" : "left" === w ? "justify-start" : "justify-center"),
                                    children: null === b || void 0 === b || null === (e = b.items) || void 0 === e ? void 0 : e.map((function(e, t) {
                                        return (0, n.jsx)("li", {
                                            children: (0, n.jsx)("button", {
                                                className: (0, o.AK)("w-2.5 h-2.5 rounded-full transition-all", l.currentSlide === t ? "bg-gray-900 ring-4 ring-gray-200" : "", l.currentSlide > t ? "bg-gray-900" : "", l.currentSlide < t ? "bg-gray-400" : ""),
                                                onClick: function() {
                                                    return l.goToSlide(t)
                                                }
                                            })
                                        }, t)
                                    }))
                                })
                            },
                            children: null === b || void 0 === b || null === (a = b.items) || void 0 === a ? void 0 : a.map((function(l, e) {
                                var t, r, a;
                                return (0, n.jsx)("div", {
                                    className: (0, o.AK)("px-8 md:px-28 my-auto h-full flex"),
                                    children: (0, n.jsxs)("div", {
                                        className: (0, o.AK)("max-w-5xl flex flex-col gap-4 justify-center", "text-".concat(w), "".concat("left" === w ? "ml-0 mr-auto items-start" : "right" === w ? "ml-auto mr-0 items-end" : "mx-auto items-center")),
                                        children: [(null === (t = l.image) || void 0 === t ? void 0 : t.url) && (0, n.jsx)("div", {
                                            className: (0, o.AK)("relative w-24 h-24 rounded-full overflow-hidden"),
                                            children: (0, n.jsx)(c(), {
                                                src: null === l || void 0 === l || null === (r = l.image) || void 0 === r ? void 0 : r.url,
                                                alt: null === l || void 0 === l || null === (a = l.image) || void 0 === a ? void 0 : a.author,
                                                layout: "fill",
                                                objectFit: "cover"
                                            })
                                        }), l.content && (0, n.jsx)("h3", {
                                            className: "heading-medium",
                                            style: (0, i.Z)({
                                                color: Z
                                            }, (0, o.j2)(p)),
                                            children: l.content
                                        }), l.by && (0, n.jsx)("p", {
                                            className: "body-large",
                                            style: {
                                                color: Z
                                            },
                                            children: l.by
                                        })]
                                    })
                                }, "testimonial-item-".concat(e))
                            }))
                        }) : (0, n.jsx)("div", {
                            className: "flex h-full my-auto",
                            children: (0, n.jsxs)("div", {
                                className: (0, o.AK)("max-w-5xl flex flex-col gap-4 justify-center", "text-".concat(w), "".concat("left" === w ? "ml-0 mr-auto items-start" : "right" === w ? "ml-auto mr-0 items-end" : "mx-auto items-center")),
                                children: [(null === (u = null === b || void 0 === b ? void 0 : b.items[0]) || void 0 === u ? void 0 : u.image) && (0, n.jsx)("div", {
                                    className: (0, o.AK)("relative w-24 h-24 rounded-full overflow-hidden"),
                                    children: (0, n.jsx)(c(), {
                                        src: null === (m = null === b || void 0 === b ? void 0 : b.items[0]) || void 0 === m || null === (v = m.image) || void 0 === v ? void 0 : v.url,
                                        alt: null === (x = null === b || void 0 === b ? void 0 : b.items[0]) || void 0 === x || null === (h = x.image) || void 0 === h ? void 0 : h.author,
                                        layout: "fill",
                                        objectFit: "cover"
                                    })
                                }), (null === (f = null === b || void 0 === b ? void 0 : b.items[0]) || void 0 === f ? void 0 : f.content) && (0, n.jsx)("h3", {
                                    className: "heading-medium",
                                    style: (0, i.Z)({
                                        color: Z
                                    }, (0, o.j2)(p)),
                                    children: null === (g = null === b || void 0 === b ? void 0 : b.items[0]) || void 0 === g ? void 0 : g.content
                                }), (null === (y = null === b || void 0 === b ? void 0 : b.items[0]) || void 0 === y ? void 0 : y.by) && (0, n.jsx)("p", {
                                    className: "body-large",
                                    style: {
                                        color: Z
                                    },
                                    children: null === (j = null === b || void 0 === b ? void 0 : b.items[0]) || void 0 === j ? void 0 : j.by
                                })]
                            })
                        })
                    })
                })
            }
        }
    }
]);