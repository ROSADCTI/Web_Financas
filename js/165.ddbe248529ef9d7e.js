"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [165], {
        165: function(l, e, s) {
            s.r(e), s.d(e, {
                default: function() {
                    return A
                }
            });
            var o = s(14251),
                i = s(85893),
                t = s(31996),
                n = s(67294),
                a = s(41664),
                d = s.n(a),
                c = s(90387),
                r = s(52077),
                u = s(90434),
                v = s(41984),
                m = s(71029),
                h = s(85296),
                x = s(44171),
                g = s(43180),
                f = s(10151),
                p = s(36234),
                j = s(66909),
                b = s(49791),
                y = s(28239),
                N = s(48192),
                w = s(94206),
                k = s(13487),
                Z = s(43751),
                F = s(17258),
                D = s(22872),
                C = s(74007),
                _ = [{
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

            function A(l) {
                var e, s, a, A = l.website,
                    S = (0, n.useState)(!1),
                    L = S[0],
                    R = S[1],
                    K = (0, n.useState)("#FFFFFF"),
                    M = K[0],
                    P = K[1],
                    E = (0, n.useState)("#111827"),
                    z = E[0],
                    W = E[1],
                    I = (0, n.useState)(""),
                    O = I[0],
                    V = I[1],
                    B = (0, n.useState)(null),
                    U = B[0],
                    T = B[1],
                    $ = (0, c.useRouter)(),
                    q = null === A || void 0 === A ? void 0 : A.footer,
                    G = null === A || void 0 === A ? void 0 : A.header,
                    H = null === A || void 0 === A || null === (e = A.pages) || void 0 === e ? void 0 : e.find((function(l) {
                        return !l.slug && l.default
                    })),
                    J = null === (a = null === (s = A.pages) || void 0 === s ? void 0 : s.filter((function(l) {
                        return !0 === l.showOnFooter || void 0 === l.showOnFooter
                    }))) || void 0 === a ? void 0 : a.map((function(l) {
                        var e = {
                            href: "/".concat(l.slug || ""),
                            name: l.label,
                            current: $.asPath === "/".concat(l.slug || "") || $.asPath.includes("/".concat(l.slug, "/")),
                            type: l.type,
                            forceRender: l.forceRender
                        };
                        return "parent" === e.type && (e.nests = A.pages.filter((function(e) {
                            return e.Parent === l._id
                        })).map((function(e) {
                            return {
                                href: "/".concat(l.slug, "/").concat(e.slug || ""),
                                name: e.label,
                                current: $.asPath === "/".concat(l.slug, "/").concat(e.slug || ""),
                                forceRender: e.forceRender
                            }
                        })), 0 === e.nests.length) ? null : e
                    })).filter((function(l) {
                        return null !== l
                    })),
                    Q = function() {
                        var l, e, s, n, a, d, c, r;
                        return q.showLogo && "branding" === q.source && (null === A || void 0 === A ? void 0 : A.logo) ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("img", {
                                className: "hidden lg:block transition-all object-contain",
                                src: null === A || void 0 === A || null === (l = A.logo) || void 0 === l ? void 0 : l.url,
                                alt: null === q || void 0 === q ? void 0 : q.businessName,
                                style: {
                                    height: (null === q || void 0 === q || null === (e = q.logoDesktop) || void 0 === e ? void 0 : e.height) + "px"
                                }
                            }), (0, i.jsx)("img", {
                                className: "lg:hidden transition-all object-contain",
                                src: null === A || void 0 === A || null === (s = A.logo) || void 0 === s ? void 0 : s.url,
                                alt: null === q || void 0 === q ? void 0 : q.businessName,
                                style: {
                                    height: (null === q || void 0 === q || null === (n = q.logoMobile) || void 0 === n ? void 0 : n.height) + "px"
                                }
                            })]
                        }) : q.showLogo && "upload" === q.source && (null === q || void 0 === q ? void 0 : q.customLogo) ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("img", {
                                className: "hidden lg:block transition-all object-contain",
                                src: null === q || void 0 === q || null === (a = q.customLogo) || void 0 === a ? void 0 : a.url,
                                alt: null === q || void 0 === q ? void 0 : q.businessName,
                                style: {
                                    height: (null === q || void 0 === q || null === (d = q.logoDesktop) || void 0 === d ? void 0 : d.height) + "px"
                                }
                            }), (0, i.jsx)("img", {
                                className: "lg:hidden transition-all object-contain",
                                src: null === q || void 0 === q || null === (c = q.customLogo) || void 0 === c ? void 0 : c.url,
                                alt: null === q || void 0 === q ? void 0 : q.businessName,
                                style: {
                                    height: (null === q || void 0 === q || null === (r = q.logoMobile) || void 0 === r ? void 0 : r.height) + "px"
                                }
                            })]
                        }) : (0, i.jsx)("h3", {
                            className: (0, t.AK)("heading-medium", "simple-right" !== (null === q || void 0 === q ? void 0 : q.style) && "simple-center" !== (null === q || void 0 === q ? void 0 : q.style) && "xl:heading-small"),
                            style: (0, o.Z)({
                                color: z
                            }, (0, t.j2)(A)),
                            children: null === q || void 0 === q ? void 0 : q.businessName
                        })
                    },
                    X = function() {
                        if (0 === (null === J || void 0 === J ? void 0 : J.length)) return (0, i.jsx)(i.Fragment, {});
                        var l = (0, t.h)(M, -10);
                        return l !== z && l !== M || (l = (0, t.h)(M, 10)), (0, i.jsx)("ul", {
                            className: (0, t.AK)("flex flex-col lg:flex-row items-start lg:items-center flex-wrap gap-6", "stacked-right" === (null === q || void 0 === q ? void 0 : q.style) && "justify-end items-end", ("stacked-center" === (null === q || void 0 === q ? void 0 : q.style) || "simple-center" === (null === q || void 0 === q ? void 0 : q.style)) && "justify-center items-center"),
                            style: {
                                color: z
                            },
                            children: null === J || void 0 === J ? void 0 : J.filter((function(l) {
                                return "nested" !== l.type
                            })).map((function(e) {
                                var s;
                                return (0, i.jsx)("li", {
                                    className: "border-b-2",
                                    style: {
                                        borderColor: e.current ? "".concat(z) : "transparent"
                                    },
                                    children: "parent" === e.type ? (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(C.Z, {
                                            className: "!hidden lg:!inline-block",
                                            openUp: !0,
                                            buttonClassName: "inline-flex items-center gap-2 py-1.5",
                                            itemsContainerClass: "!pl-6 !pr-12 w-max max-w-120 !max-h-50 no-scrollbar",
                                            button: (0, i.jsxs)(i.Fragment, {
                                                children: [(0, i.jsx)("span", {
                                                    className: "body-normal whitespace-nowrap",
                                                    children: e.name
                                                }), (0, i.jsx)(u.Z, {
                                                    className: "w-4 h-4"
                                                })]
                                            }),
                                            itemsContainerStyle: {
                                                backgroundColor: l,
                                                color: z
                                            },
                                            children: null === (s = e.nests) || void 0 === s ? void 0 : s.map((function(l) {
                                                return (0, i.jsx)(F.v.Item, {
                                                    children: (0, i.jsx)(d(), {
                                                        href: l.href,
                                                        legacyBehavior: !1,
                                                        className: "block py-2 body-normal border-b-2",
                                                        style: {
                                                            borderColor: l.current ? "".concat(z) : "transparent"
                                                        },
                                                        children: l.name
                                                    })
                                                }, "page-link-".concat(l.href))
                                            }))
                                        }), (0, i.jsxs)("button", {
                                            className: "inline-flex lg:hidden items-center gap-2",
                                            onClick: function() {
                                                R(!0), T(e.nests)
                                            },
                                            children: [(0, i.jsx)("span", {
                                                className: "body-normal",
                                                children: e.name
                                            }), (0, i.jsx)(v.Z, {
                                                className: "w-4 h-4",
                                                "aria-hidden": "true"
                                            })]
                                        })]
                                    }) : (0, i.jsx)(d(), {
                                        href: e.href,
                                        children: (0, i.jsx)("a", {
                                            className: "block py-1.5 body-normal",
                                            target: e.forceRender ? "_parent" : "_self",
                                            children: e.name
                                        })
                                    })
                                }, "page-link-".concat(e.href))
                            }))
                        })
                    },
                    Y = function() {
                        return (0, i.jsx)("ul", {
                            className: (0, t.AK)("flex items-center gap-x-4 gap-y-2 flex-wrap", "stacked-right" === (null === q || void 0 === q ? void 0 : q.style) && "justify-end", ("stacked-center" === (null === q || void 0 === q ? void 0 : q.style) || "simple-center" === (null === q || void 0 === q ? void 0 : q.style)) && "justify-center"),
                            children: Array.isArray(A.social) && A.social.map((function(l, e) {
                                var s = _.find((function(e) {
                                        return e.id === l.type
                                    })),
                                    o = l.link;
                                return "custom" !== l.type && (o = (o = l.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === s || void 0 === s ? void 0 : s.host, ""), o = "https://".concat(null === s || void 0 === s ? void 0 : s.host, "/").concat(o)), (0, i.jsx)("li", {
                                    children: (0, i.jsx)(d(), {
                                        href: o,
                                        children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            children: el(l)
                                        })
                                    })
                                }, "social-icon-header-".concat(e))
                            }))
                        })
                    },
                    ll = function() {
                        return !1 === q.madeWithDurable ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsxs)("p", {
                            className: (0, t.AK)("body-normal lg:text-right whitespace-nowrap", ("stacked-center" === (null === q || void 0 === q ? void 0 : q.style) || "simple-center" === (null === q || void 0 === q ? void 0 : q.style)) && "!text-center", "stacked-left" === (null === q || void 0 === q ? void 0 : q.style) && "!text-left"),
                            children: [(0, i.jsx)("span", {
                                children: "Made with\xa0"
                            }), (0, i.jsx)(d(), {
                                href: "https://durable.co?referrer=".concat(encodeURIComponent(O)),
                                children: (0, i.jsx)("a", {
                                    target: "_blank",
                                    className: "underline",
                                    style: {
                                        color: z
                                    },
                                    children: "Durable"
                                })
                            })]
                        })
                    },
                    el = function(l) {
                        var e = "w-8 h-8";
                        switch (l.type) {
                            case "angi":
                                return (0, i.jsx)(m.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "behance":
                                return (0, i.jsx)(h.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "dribbble":
                                return (0, i.jsx)(x.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "facebook":
                                return (0, i.jsx)(g.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "homeadvisor":
                                return (0, i.jsx)(f.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "instagram":
                                return (0, i.jsx)(p.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "linkedin":
                                return (0, i.jsx)(j.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "pinterest":
                                return (0, i.jsx)(b.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "tiktok":
                                return (0, i.jsx)(y.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "thumbtack":
                                return (0, i.jsx)(N.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "twitter":
                                return (0, i.jsx)(w.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "youtube":
                                return (0, i.jsx)(k.Z, {
                                    className: e,
                                    style: {
                                        color: z
                                    }
                                });
                            case "custom":
                                var s, o;
                                return (0, i.jsx)("div", {
                                    className: (0, t.AK)("flex-shrink-0 relative", e),
                                    children: (0, i.jsx)("div", {
                                        className: "absolute w-full h-full",
                                        style: {
                                            backgroundColor: z || "#000000",
                                            WebkitMaskImage: 'url("'.concat(null === l || void 0 === l || null === (s = l.icon) || void 0 === s ? void 0 : s.url, '")'),
                                            maskImage: 'url("'.concat(null === l || void 0 === l || null === (o = l.icon) || void 0 === o ? void 0 : o.url, '")'),
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
                        R(!1), T(null)
                    };
                return (0, n.useEffect)((function() {
                    if (q) {
                        var l;
                        if (P(q.background || "#FFFFFF"), q.showName && (null === q.businessName || void 0 === q.businessName)) q.businessName = null === A || void 0 === A || null === (l = A.Business) || void 0 === l ? void 0 : l.name;
                        null !== q.businessAddress && void 0 !== q.businessAddress || (q.businessAddress = "")
                    }
                }), [q]), (0, n.useEffect)((function() {
                    M && W((0, t.$O)(M))
                }), [M]), (0, n.useEffect)((function() {
                    $ && sl()
                }), [$]), (0, n.useEffect)((function() {
                    V(null === location || void 0 === location ? void 0 : location.origin)
                }), []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("footer", {
                        className: "flex-1",
                        style: {
                            backgroundColor: M,
                            color: z
                        },
                        children: (0, i.jsx)("div", {
                            className: "container mx-auto py-12 lg:py-14 xl:py-20",
                            children: "split-left" === (null === q || void 0 === q ? void 0 : q.style) ? (0, i.jsxs)("div", {
                                className: "flex flex-col lg:flex-row lg:justify-between gap-12",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col items-start gap-12 lg:gap-6",
                                    children: [Q(), (0, i.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row lg:items-center gap-12",
                                        children: [X(), q.showSocial && Y(), (null === q || void 0 === q ? void 0 : q.button) && (0, i.jsx)(r.Z, {
                                            className: "lg !py-2",
                                            button: q.button,
                                            website: A
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-6",
                                    children: [!!q.additionalDetails && (0, i.jsx)("div", {
                                        className: "body-normal lg:text-right",
                                        style: {
                                            color: z
                                        },
                                        children: null === q || void 0 === q ? void 0 : q.additionalDetails
                                    }), ll()]
                                })]
                            }) : "stacked-right" === q.style ? (0, i.jsxs)("div", {
                                className: "flex flex-col justify-end items-end gap-12 text-right",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col items-end gap-6",
                                    children: [Q(), !!q.additionalDetails && (0, i.jsx)("div", {
                                        className: "body-normal",
                                        style: {
                                            color: z
                                        },
                                        children: null === q || void 0 === q ? void 0 : q.additionalDetails
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col justify-end gap-12 lg:gap-14",
                                    children: [X(), q.showSocial && Y(), (null === q || void 0 === q ? void 0 : q.button) && (0, i.jsx)("div", {
                                        children: (0, i.jsx)(r.Z, {
                                            className: "lg !py-2",
                                            button: q.button,
                                            website: A
                                        })
                                    })]
                                }), ll()]
                            }) : "stacked-center" === q.style ? (0, i.jsxs)("div", {
                                className: "flex flex-col justify-center gap-12 text-center",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col items-center gap-6",
                                    children: [Q(), !!q.additionalDetails && (0, i.jsx)("div", {
                                        className: "body-normal",
                                        style: {
                                            color: z
                                        },
                                        children: null === q || void 0 === q ? void 0 : q.additionalDetails
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-12 lg:gap-14",
                                    children: [X(), q.showSocial && Y(), (null === q || void 0 === q ? void 0 : q.button) && (0, i.jsx)("div", {
                                        children: (0, i.jsx)(r.Z, {
                                            className: "lg !py-2",
                                            button: q.button,
                                            website: A
                                        })
                                    })]
                                }), ll()]
                            }) : "stacked-left" === q.style ? (0, i.jsxs)("div", {
                                className: "flex flex-col items-start gap-12 text-left",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col items-start gap-6",
                                    children: [Q(), !!q.additionalDetails && (0, i.jsx)("div", {
                                        className: "body-normal",
                                        style: {
                                            color: z
                                        },
                                        children: null === q || void 0 === q ? void 0 : q.additionalDetails
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col items-start gap-12 lg:gap-14",
                                    children: [X(), q.showSocial && Y(), (null === q || void 0 === q ? void 0 : q.button) && (0, i.jsx)("div", {
                                        children: (0, i.jsx)(r.Z, {
                                            className: "lg !py-2",
                                            button: q.button,
                                            website: A
                                        })
                                    })]
                                }), ll()]
                            }) : "simple-right" === q.style ? (0, i.jsxs)("div", {
                                className: "flex flex-col lg:flex-row gap-12",
                                children: [(0, i.jsxs)("div", {
                                    className: (0, t.AK)("flex flex-col lg:flex-row items-start lg:items-center gap-6", (null === q || void 0 === q ? void 0 : q.showLogo) ? "lg:gap-10" : "lg:gap-2"),
                                    children: [Q(), !!q.additionalDetails && (0, i.jsxs)(i.Fragment, {
                                        children: [!(null === q || void 0 === q ? void 0 : q.showLogo) && (0, i.jsx)("span", {
                                            className: "hidden lg:inline-block",
                                            children: "\xb7"
                                        }), (0, i.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: z
                                            },
                                            children: null === q || void 0 === q ? void 0 : q.additionalDetails
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex-1 w-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-14 justify-end",
                                    children: [(0, i.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-12 lg:gap-14 w-full lg:w-auto max-w-[100vw]",
                                        children: [X(), q.showSocial && Y(), (null === q || void 0 === q ? void 0 : q.button) && (0, i.jsx)(r.Z, {
                                            className: "lg !py-2",
                                            button: q.button,
                                            website: A
                                        })]
                                    }), ll()]
                                })]
                            }) : "simple-center" === q.style ? (0, i.jsxs)("div", {
                                className: "flex flex-col justify-center gap-12 text-center",
                                children: [(0, i.jsxs)("div", {
                                    className: (0, t.AK)("flex flex-col justify-center lg:items-center gap-6", (null === q || void 0 === q ? void 0 : q.showLogo) ? "lg:gap-6" : "lg:flex-row lg:gap-2"),
                                    children: [Q(), !!q.additionalDetails && (0, i.jsxs)(i.Fragment, {
                                        children: [!(null === q || void 0 === q ? void 0 : q.showLogo) && (0, i.jsx)("span", {
                                            className: "hidden lg:inline-block",
                                            children: "\xb7"
                                        }), (0, i.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: z
                                            },
                                            children: null === q || void 0 === q ? void 0 : q.additionalDetails
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:gap-14",
                                    children: [X(), q.showSocial && Y(), (null === q || void 0 === q ? void 0 : q.button) && (0, i.jsx)(r.Z, {
                                        className: "lg !py-2",
                                        button: q.button,
                                        website: A
                                    }), ll()]
                                })]
                            }) : (0, i.jsxs)("div", {
                                className: "flex flex-col lg:flex-row items-start lg:justify-between gap-12",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col gap-6 items-start",
                                    children: [Q(), !!(null === q || void 0 === q ? void 0 : q.additionalDetails) && (0, i.jsx)("div", {
                                        className: "body-normal",
                                        style: {
                                            color: z
                                        },
                                        children: null === q || void 0 === q ? void 0 : q.additionalDetails
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-12 lg:gap-6",
                                    children: [(0, i.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end",
                                        children: [X(), q.showSocial && Y(), (null === q || void 0 === q ? void 0 : q.button) && (0, i.jsx)(r.Z, {
                                            className: "lg !py-2",
                                            button: q.button,
                                            website: A
                                        })]
                                    }), ll()]
                                })]
                            })
                        })
                    }), (0, i.jsx)(D.V, {
                        open: L,
                        onClose: sl,
                        className: "relative z-[3000] h-full",
                        children: (0, i.jsx)(D.V.Panel, {
                            className: "fixed inset-0 flex flex-col h-full",
                            style: {
                                backgroundColor: M,
                                color: z
                            },
                            children: (0, i.jsxs)("div", {
                                className: "flex-1 flex flex-col h-full container mx-auto pb-6",
                                children: [(0, i.jsxs)("div", {
                                    className: (0, t.AK)("items-center gap-3 py-6", "left" !== (null === G || void 0 === G ? void 0 : G.style) ? "grid" : "flex justify-between"),
                                    style: "left" !== (null === G || void 0 === G ? void 0 : G.style) ? {
                                        gridTemplateColumns: "1fr auto 1fr"
                                    } : {},
                                    children: [("center" === (null === G || void 0 === G ? void 0 : G.style) || "full-center" === (null === G || void 0 === G ? void 0 : G.style)) && (0, i.jsx)("div", {}), function() {
                                        var l, e, s, n, a, c, r, u;
                                        return (null === G || void 0 === G ? void 0 : G.showLogo) && "branding" === (null === G || void 0 === G ? void 0 : G.source) && (null === A || void 0 === A ? void 0 : A.logo) ? (0, i.jsx)(d(), {
                                            href: "/",
                                            children: (0, i.jsxs)("a", {
                                                target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                                children: [(0, i.jsx)("img", {
                                                    className: "hidden lg:block transition-all object-contain",
                                                    src: null === A || void 0 === A || null === (l = A.logo) || void 0 === l ? void 0 : l.url,
                                                    alt: null === G || void 0 === G ? void 0 : G.siteName,
                                                    style: {
                                                        height: (null === G || void 0 === G || null === (e = G.logoDesktop) || void 0 === e ? void 0 : e.height) + "px"
                                                    }
                                                }), (0, i.jsx)("img", {
                                                    className: "lg:hidden transition-all object-contain",
                                                    src: null === A || void 0 === A || null === (s = A.logo) || void 0 === s ? void 0 : s.url,
                                                    alt: null === G || void 0 === G ? void 0 : G.siteName,
                                                    style: {
                                                        height: (null === G || void 0 === G || null === (n = G.logoMobile) || void 0 === n ? void 0 : n.height) + "px"
                                                    }
                                                })]
                                            })
                                        }) : (null === G || void 0 === G ? void 0 : G.showLogo) && "upload" === (null === G || void 0 === G ? void 0 : G.source) && (null === G || void 0 === G ? void 0 : G.customLogo) ? (0, i.jsx)(d(), {
                                            href: "/",
                                            children: (0, i.jsxs)("a", {
                                                target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                                children: [(0, i.jsx)("img", {
                                                    className: "hidden lg:block transition-all object-contain",
                                                    src: null === G || void 0 === G || null === (a = G.customLogo) || void 0 === a ? void 0 : a.url,
                                                    alt: null === G || void 0 === G ? void 0 : G.siteName,
                                                    style: {
                                                        height: (null === G || void 0 === G || null === (c = G.logoDesktop) || void 0 === c ? void 0 : c.height) + "px"
                                                    }
                                                }), (0, i.jsx)("img", {
                                                    className: "lg:hidden transition-all object-contain",
                                                    src: null === G || void 0 === G || null === (r = G.customLogo) || void 0 === r ? void 0 : r.url,
                                                    alt: null === G || void 0 === G ? void 0 : G.siteName,
                                                    style: {
                                                        height: (null === G || void 0 === G || null === (u = G.logoMobile) || void 0 === u ? void 0 : u.height) + "px"
                                                    }
                                                })]
                                            })
                                        }) : (0, i.jsx)(d(), {
                                            href: "/",
                                            children: (0, i.jsx)("a", {
                                                target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                                children: (0, i.jsx)("h1", {
                                                    className: "heading-small lg:heading-medium overflow-hidden overflow-ellipsis max-w-full",
                                                    style: (0, o.Z)({
                                                        color: z
                                                    }, (0, t.j2)(A)),
                                                    children: null === G || void 0 === G ? void 0 : G.siteName
                                                })
                                            })
                                        })
                                    }(), (0, i.jsx)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: (0, i.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: z
                                            },
                                            onClick: sl,
                                            children: (0, i.jsx)(Z.Z, {
                                                className: "block h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    })]
                                }), (0, i.jsx)("ul", {
                                    className: (0, t.AK)("flex-1 flex flex-col justify-center gap-3 w-full py-6 overflow-auto", "center" === (null === q || void 0 === q ? void 0 : q.style) || "full-center" === (null === q || void 0 === q ? void 0 : q.style) ? "text-center" : ""),
                                    style: (0, o.Z)({
                                        color: z
                                    }, (0, t.SV)(A)),
                                    children: null === U || void 0 === U ? void 0 : U.map((function(l) {
                                        return (0, i.jsx)("li", {
                                            className: (0, t.AK)("body-large py-2 border-b-2"),
                                            style: {
                                                borderColor: l.current ? "".concat(z) : "transparent"
                                            },
                                            children: (0, i.jsx)(d(), {
                                                href: l.href,
                                                children: (0, i.jsx)("a", {
                                                    className: "block w-full",
                                                    target: l.forceRender ? "_parent" : "_self",
                                                    children: l.name
                                                })
                                            })
                                        }, "page-link-".concat(l.href))
                                    }))
                                })]
                            })
                        })
                    })]
                })
            }
        }
    }
]);