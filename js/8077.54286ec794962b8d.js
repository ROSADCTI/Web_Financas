"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8077], {
        52077: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return r
                }
            });
            var a = n(85893),
                s = n(41664),
                i = n.n(s),
                t = n(16494),
                o = n(31996);

            function r(e) {
                var l, n, s, r, d = e.button,
                    c = e.type,
                    u = e.website,
                    m = e.action,
                    v = e.loading,
                    f = e.className,
                    h = (null === u || void 0 === u || null === (l = u.button) || void 0 === l ? void 0 : l.background) || (null === u || void 0 === u ? void 0 : u.secondaryColor),
                    x = {
                        background: "outline" === (null === u || void 0 === u || null === (n = u.button) || void 0 === n ? void 0 : n.style) ? "transparent" : h,
                        borderRadius: isNaN(null === u || void 0 === u || null === (s = u.button) || void 0 === s ? void 0 : s.cornerRadius) ? 8 : u.button.cornerRadius,
                        color: "outline" === (null === u || void 0 === u || null === (r = u.button) || void 0 === r ? void 0 : r.style) ? h : (0, o.$O)(h),
                        border: "2px solid ".concat(h)
                    };
                return m && "function" === typeof m || "submit" === c ? (0, a.jsx)("button", {
                    type: "submit" === c ? "submit" : "button",
                    onClick: m,
                    className: (0, o.AK)("button primary", f),
                    style: x,
                    disabled: v,
                    children: v ? (0, a.jsx)(t.Z, {}) : d.label
                }) : (0, a.jsx)(i(), {
                    href: function(e) {
                        if (e) {
                            if ("email" === e.type) return "mailto:" + e.link;
                            if ("phone" === e.type) return "tel:" + e.link;
                            if ("page" === e.type) {
                                var l, n, a, s = null === u || void 0 === u || null === (l = u.pages) || void 0 === l ? void 0 : l.find((function(l) {
                                        return l._id === e.page
                                    })),
                                    i = (null === s || void 0 === s ? void 0 : s.Parent) ? null === u || void 0 === u || null === (n = u.pages) || void 0 === n ? void 0 : n.find((function(e) {
                                        return e._id === (null === s || void 0 === s ? void 0 : s.Parent)
                                    })) : null,
                                    t = "";
                                return i && (t += "".concat(i.slug, "/")), t += null !== (a = null === s || void 0 === s ? void 0 : s.slug) && void 0 !== a ? a : "/"
                            }
                            var o, r = null === (o = e.link) || void 0 === o ? void 0 : o.replace(/https?:\/\//gi, "");
                            return r && "#" !== r ? "https://" + r : "#"
                        }
                        return "/"
                    }(d),
                    children: (0, a.jsx)("a", {
                        className: (0, o.AK)("button primary", f),
                        target: function(e) {
                            var l, n, a, s = null === u || void 0 === u || null === (l = u.pages) || void 0 === l ? void 0 : l.find((function(l) {
                                return l._id === e.page
                            }));
                            return e.newPage ? "_blank" : (null === s || void 0 === s ? void 0 : s.forceRender) ? "_parent" : (null === u || void 0 === u || null === (n = u.button) || void 0 === n ? void 0 : n.target) ? null === u || void 0 === u || null === (a = u.button) || void 0 === a ? void 0 : a.target : "_self"
                        }(d),
                        style: x,
                        children: d.label
                    })
                })
            }
        },
        68077: function(e, l, n) {
            n.r(l), n.d(l, {
                default: function() {
                    return F
                }
            });
            var a = n(34727),
                s = n(14251),
                i = n(52875),
                t = n(69779),
                o = n(97582),
                r = n(85893),
                d = n(31996),
                c = n(67294),
                u = n(52077),
                m = n(34853);
            var v = c.forwardRef((function(e, l) {
                    return c.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: l
                    }, e), c.createElement("path", {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                        clipRule: "evenodd"
                    }))
                })),
                f = n(41664),
                h = n.n(f),
                x = n(57333),
                b = n(14441),
                p = n(80360),
                g = n(33253),
                y = n(30120),
                N = n(9198),
                j = n.n(N),
                w = (n(18698), {
                    name: "",
                    email: "",
                    message: "",
                    idBusiness: null,
                    valid: !0
                });

            function F(e) {
                var l, n, f, N, F = e.block,
                    Z = e.website,
                    C = e.apiUrl,
                    _ = e.captchaKey,
                    k = (0, c.useState)(!1),
                    S = k[0],
                    L = k[1],
                    A = (0, c.useState)(null),
                    E = A[0],
                    K = A[1],
                    M = (0, c.useState)((0, i.Z)((0, s.Z)({}, w), {
                        customFields: F.customFields
                    })),
                    R = M[0],
                    P = M[1],
                    O = (0, c.useState)(null),
                    T = O[0],
                    q = O[1],
                    B = (0, c.useState)("#FFFFFF"),
                    D = B[0],
                    H = B[1],
                    $ = (0, c.useState)("#111827"),
                    I = $[0],
                    z = $[1],
                    G = (0, c.useState)(!1),
                    J = G[0],
                    U = G[1],
                    V = (0, c.useState)(null),
                    W = V[0],
                    Q = V[1],
                    X = (0, c.useState)("Name"),
                    Y = X[0],
                    ee = X[1],
                    le = (0, c.useState)("E-mail"),
                    ne = le[0],
                    ae = le[1],
                    se = (0, c.useState)("Message"),
                    ie = se[0],
                    te = se[1],
                    oe = (0, c.useState)("Send"),
                    re = oe[0],
                    de = oe[1],
                    ce = c.createRef(),
                    ue = new d.bl(C),
                    me = {
                        borderRadius: isNaN(null === Z || void 0 === Z || null === (l = Z.button) || void 0 === l ? void 0 : l.cornerRadius) ? 8 : Z.button.cornerRadius,
                        backgroundColor: D && (0, d.jn)(D) ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
                        color: I
                    },
                    ve = function() {
                        var e = (0, a.Z)((function(e) {
                            var l, n, a, t, r, c, u, m;
                            return (0, o.__generator)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!e) return L(!1), [2];
                                        if (ce.current.reset(), !R.name || !R.email || !(0, d.oH)(R.email) || !R.message) return P((0, i.Z)((0, s.Z)({}, R), {
                                            valid: !1
                                        })), L(!1), [2];
                                        if (F && (null === F || void 0 === F ? void 0 : F.fields) && (null === F || void 0 === F || null === (l = F.fields) || void 0 === l ? void 0 : l.length)) {
                                            n = !0, a = !1, t = void 0;
                                            try {
                                                for (r = F.fields[Symbol.iterator](); !(n = (c = r.next()).done); n = !0)
                                                    if ((u = c.value).required && !R[u.label.toLowerCase()]) return P((0, i.Z)((0, s.Z)({}, R), {
                                                        valid: !1
                                                    })), L(!1), [2]
                                            } catch (v) {
                                                a = !0, t = v
                                            } finally {
                                                try {
                                                    n || null == r.return || r.return()
                                                } finally {
                                                    if (a) throw t
                                                }
                                            }
                                        }
                                        return R.captcha = e, [4, ue.post("/website/send-contact-form", R)];
                                    case 1:
                                        return (m = o.sent()) && !0 === m.status ? (P(w), U(!0)) : Q("Error while sending your message. Try again later."), L(!1), [2]
                                }
                            }))
                        }));
                        return function(l) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    fe = function(e, l) {
                        var n = [];
                        (null === R || void 0 === R ? void 0 : R.customFields) && (n = (0, t.Z)(R.customFields));
                        var a = null === n || void 0 === n ? void 0 : n.find((function(l) {
                            return l.Field === e
                        }));
                        a ? a.value = l : n.push({
                            Field: e,
                            value: l
                        }), P((function(e) {
                            return (0, i.Z)((0, s.Z)({}, e), {
                                customFields: n
                            })
                        }))
                    };
                return (0, c.useEffect)((function() {
                    var e, l, n, a;
                    F && (F.headline && (F.content = "<h3>".concat(F.headline, "</h3><br/><p>").concat(F.content, "</p>")), K(F.content), q(F.align), H(F.background), ee(null !== (e = F.nameFieldLabel) && void 0 !== e ? e : "Name"), ae(null !== (l = F.emailFieldLabel) && void 0 !== l ? l : "E-mail"), te(null !== (n = F.messageFieldLabel) && void 0 !== n ? n : "Message"), de(null !== (a = F.sendButtonLabel) && void 0 !== a ? a : "Send"), P((0, i.Z)((0, s.Z)({}, R), {
                        customFields: F.customFields
                    })))
                }), [F]), (0, c.useEffect)((function() {
                    D && z((0, d.$O)(D))
                }), [D]), (0, c.useEffect)((function() {
                    P((0, i.Z)((0, s.Z)({}, R), {
                        idBusiness: Z.Business._id
                    }))
                }), [Z]), (0, r.jsx)("section", {
                    className: "flex-shrink-0",
                    style: {
                        backgroundColor: D
                    },
                    children: (0, r.jsx)("div", {
                        className: (0, d.AK)("container mx-auto py-12 lg:py-14 xl:py-20"),
                        children: J ? (0, r.jsx)("div", {
                            className: "w-full flex flex-col items-center py-20",
                            children: (null === F || void 0 === F ? void 0 : F.successMessage) ? (0, r.jsx)("div", {
                                className: "rich-text-block max-w-5xl",
                                style: {
                                    color: I
                                },
                                dangerouslySetInnerHTML: {
                                    __html: F.successMessage
                                }
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("h3", {
                                    className: "heading-medium mb-5",
                                    style: {
                                        color: I
                                    },
                                    children: "Message sent!"
                                }), (0, r.jsx)("p", {
                                    className: "body-normal text-gray-600",
                                    style: {
                                        color: I
                                    },
                                    children: "We'll get in touch with you as soon as possible."
                                })]
                            })
                        }) : (0, r.jsxs)("div", {
                            className: (0, d.AK)("flex flex-col w-full gap-10 lg:gap-20", "left" === T ? "lg:!flex-row-reverse" : "lg:flex-row"),
                            children: [(0, r.jsx)("div", {
                                className: "w-full lg:w-1/2 lg:mt-10",
                                children: (0, r.jsx)("div", {
                                    className: "rich-text-block",
                                    style: {
                                        color: I
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: E
                                    }
                                })
                            }), (0, r.jsxs)("div", {
                                className: "w-full lg:w-1/2",
                                children: [W && (0, r.jsx)("div", {
                                    className: "rounded-md bg-red-50 p-4 mb-4",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: (0, r.jsx)(v, {
                                                className: "h-5 w-5 text-red-400",
                                                "aria-hidden": "true"
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "ml-3",
                                            children: (0, r.jsx)("p", {
                                                className: "text-sm font-medium text-red-800",
                                                children: W
                                            })
                                        })]
                                    })
                                }), (0, r.jsxs)("form", {
                                    className: "block",
                                    onSubmit: function(e) {
                                        Q(null), e.preventDefault(), L(!0), ce.current.execute()
                                    },
                                    noValidate: !0,
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row gap-4 mb-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("label", {
                                                className: "mb-1 body-small",
                                                style: {
                                                    color: I
                                                },
                                                children: Y
                                            }), (0, r.jsx)("input", {
                                                className: "input border-none !shadow-none !placeholder-current",
                                                type: "text",
                                                value: R.name,
                                                onChange: function(e) {
                                                    return P((0, i.Z)((0, s.Z)({}, R), {
                                                        name: e.target.value
                                                    }))
                                                },
                                                style: me
                                            }), !R.valid && !R.name && (0, r.jsx)("div", {
                                                className: "text-sm mt-1 text-red-500",
                                                children: "Provide a name"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("label", {
                                                className: "mb-1 body-small",
                                                style: {
                                                    color: I
                                                },
                                                children: ne
                                            }), (0, r.jsx)("input", {
                                                className: "input border-none !shadow-none !placeholder-current",
                                                type: "text",
                                                value: R.email,
                                                onChange: function(e) {
                                                    return P((0, i.Z)((0, s.Z)({}, R), {
                                                        email: e.target.value
                                                    }))
                                                },
                                                style: me
                                            }), !R.valid && (!R.email || !(0, d.oH)(R.email)) && (0, r.jsx)("div", {
                                                className: "text-sm mt-1 text-red-500",
                                                children: "Provide a valid email"
                                            })]
                                        })]
                                    }), null === F || void 0 === F || null === (n = F.fields) || void 0 === n ? void 0 : n.map((function(e, l) {
                                        return (0, r.jsxs)("div", {
                                            className: "mb-4",
                                            children: [(0, r.jsx)("label", {
                                                className: "mb-1 body-small",
                                                style: {
                                                    color: I
                                                },
                                                children: e.label
                                            }), (0, r.jsx)("input", {
                                                className: "input border-none !shadow-none !placeholder-current",
                                                type: "text",
                                                required: e.required,
                                                value: R[e.label.toLowerCase()],
                                                onChange: function(l) {
                                                    return function(e, l) {
                                                        var n = (0, d.p$)(R);
                                                        n[l.label.toLowerCase()] = e.target.value, P(n)
                                                    }(l, e)
                                                },
                                                style: me
                                            }), !R.valid && !R[e.label.toLowerCase()] && e.required && (0, r.jsxs)("div", {
                                                className: "text-sm mt-1 text-red-500",
                                                children: [e.label, " is required"]
                                            })]
                                        }, "custom-field-".concat(l))
                                    })), (null === R || void 0 === R || null === (f = R.customFields) || void 0 === f ? void 0 : f.length) > 0 && (0, r.jsx)("div", {
                                        className: "flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full mb-4",
                                        children: null === R || void 0 === R || null === (N = R.customFields) || void 0 === N ? void 0 : N.map((function(e, l) {
                                            var n, a, o = null === (a = null === R || void 0 === R || null === (n = R.customFields) || void 0 === n ? void 0 : n.find((function(l) {
                                                return l.Field === e.Field._id
                                            }))) || void 0 === a ? void 0 : a.value;
                                            switch (e.Field.type) {
                                                case "text":
                                                    var c;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)(l % 2 === 0 && l === (null === F || void 0 === F || null === (c = F.customFields) || void 0 === c ? void 0 : c.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)("input", {
                                                            className: "input border-none !shadow-none !placeholder-current",
                                                            name: e.Field.name,
                                                            value: o || "",
                                                            onChange: function(l) {
                                                                return fe(e.Field._id, l.target.value)
                                                            },
                                                            type: "text",
                                                            style: me
                                                        })]
                                                    }, l);
                                                case "number":
                                                    var u;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("w-full", l % 2 === 0 && l === (null === F || void 0 === F || null === (u = F.customFields) || void 0 === u ? void 0 : u.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(x.Z, {
                                                            value: o || "",
                                                            onChange: function(l) {
                                                                return fe(e.Field._id, l.target.value)
                                                            },
                                                            thousandSeparator: !1,
                                                            allowNegative: !0,
                                                            decimalScale: 0,
                                                            allowLeadingZeros: !1,
                                                            allowEmptyFormatting: !1,
                                                            className: "input w-full border-none !shadow-none !placeholder-current",
                                                            style: me
                                                        })]
                                                    }, l);
                                                case "money":
                                                    var m;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("w-full", l % 2 === 0 && l === (null === F || void 0 === F || null === (m = F.customFields) || void 0 === m ? void 0 : m.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(x.Z, {
                                                            value: o || "",
                                                            onChange: function(l) {
                                                                return fe(e.Field._id, l.target.value)
                                                            },
                                                            thousandSeparator: ",",
                                                            decimalSeparator: ".",
                                                            allowNegative: !0,
                                                            decimalScale: 2,
                                                            prefix: "$",
                                                            placeholder: "$0",
                                                            allowLeadingZeros: !1,
                                                            allowEmptyFormatting: !1,
                                                            className: "input w-full border-none !shadow-none !placeholder-current",
                                                            style: me
                                                        })]
                                                    }, l);
                                                case "date":
                                                    var v;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("flex flex-col md:min-w-40 w-full", l % 2 === 0 && l === (null === F || void 0 === F || null === (v = F.customFields) || void 0 === v ? void 0 : v.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(j(), {
                                                            className: "w-full flex-1",
                                                            selected: o ? new Date(o) : null,
                                                            onChange: function(l) {
                                                                return fe(e.Field._id, y.ou.fromJSDate(l).startOf("day").toISO())
                                                            },
                                                            dateFormat: "MMM dd, yyyy",
                                                            calendarClassName: "tailwind-calendar",
                                                            customInput: (0, r.jsx)(b.Z, {
                                                                className: "border-none !shadow-none !placeholder-current",
                                                                labelClass: "text-current",
                                                                hint: y.ou.now().toFormat("DD"),
                                                                onClear: function() {
                                                                    return fe(e.Field._id, null)
                                                                },
                                                                style: me
                                                            })
                                                        })]
                                                    }, l);
                                                case "checkbox":
                                                    var f, h;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("flex flex-col md:min-w-40 w-full", l % 2 === 0 && l === (null === F || void 0 === F || null === (f = F.customFields) || void 0 === f ? void 0 : f.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)("div", {
                                                            className: "flex flex-wrap gap-x-6 gap-y-2",
                                                            children: null === (h = e.Field.options) || void 0 === h ? void 0 : h.map((function(l) {
                                                                return (0, r.jsxs)("label", {
                                                                    className: "inline-flex items-center",
                                                                    children: [(0, r.jsx)("input", {
                                                                        type: "checkbox",
                                                                        className: "mr-1",
                                                                        value: l.id,
                                                                        checked: !!(null === o || void 0 === o ? void 0 : o.includes(l.id)),
                                                                        onChange: function(n) {
                                                                            return function(e, l, n) {
                                                                                var a = (0, t.Z)(R.customFields),
                                                                                    o = null === a || void 0 === a ? void 0 : a.find((function(l) {
                                                                                        return l.Field === e
                                                                                    }));
                                                                                if (o || (o = {
                                                                                        Field: e,
                                                                                        value: []
                                                                                    }, a.push(o)), n) o.value.includes(l) || o.value.push(l);
                                                                                else {
                                                                                    var r = o.value.indexOf(l); - 1 !== r && o.value.splice(r, 1)
                                                                                }
                                                                                P((function(e) {
                                                                                    return (0, i.Z)((0, s.Z)({}, e), {
                                                                                        customFields: a
                                                                                    })
                                                                                }))
                                                                            }(e.Field._id, l.id, n.target.checked)
                                                                        }
                                                                    }), (0, r.jsx)("span", {
                                                                        style: {
                                                                            color: I
                                                                        },
                                                                        children: l.name
                                                                    })]
                                                                }, l.id)
                                                            }))
                                                        })]
                                                    }, l);
                                                case "dropdown":
                                                    var N;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("flex flex-col md:min-w-40 w-full", l % 2 === 0 && l === (null === F || void 0 === F || null === (N = F.customFields) || void 0 === N ? void 0 : N.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small text-current",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(p.Z, {
                                                            className: "w-full",
                                                            btnClassName: "border-none !shadow-none !placeholder-current",
                                                            value: o ? e.Field.options.find((function(e) {
                                                                return e.id === o
                                                            })) : e.Field.options[0],
                                                            onChange: function(l) {
                                                                return fe(e.Field._id, l.id)
                                                            },
                                                            values: e.Field.options,
                                                            style: me,
                                                            iconStyle: {
                                                                color: I
                                                            }
                                                        }, l)]
                                                    }, l);
                                                case "rating":
                                                    var w;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("flex flex-col md:min-w-40 w-full", l % 2 === 0 && l === (null === F || void 0 === F || null === (w = F.customFields) || void 0 === w ? void 0 : w.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(g.Z, {
                                                            className: "flex mt-2",
                                                            rating: o || 0,
                                                            setRating: function(l) {
                                                                return fe(e.Field._id, l)
                                                            }
                                                        })]
                                                    }, l)
                                            }
                                        }))
                                    }), (0, r.jsxs)("div", {
                                        className: "mb-4",
                                        children: [(0, r.jsx)("label", {
                                            className: "mb-1 body-small",
                                            style: {
                                                color: I
                                            },
                                            children: ie
                                        }), (0, r.jsx)("textarea", {
                                            className: "input border-none !shadow-none !placeholder-current",
                                            placeholder: "",
                                            rows: "5",
                                            value: R.message,
                                            onChange: function(e) {
                                                return P((0, i.Z)((0, s.Z)({}, R), {
                                                    message: e.target.value
                                                }))
                                            },
                                            style: me
                                        }), !R.valid && !R.message && (0, r.jsx)("div", {
                                            className: "text-sm mt-1 text-red-500",
                                            children: "Provide a message"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex flex-col md:flex-row justify-between items-start gap-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "text-xs max-w-sm text-gray-500",
                                            style: {
                                                color: I
                                            },
                                            children: ["This site is protected by reCAPTCHA and the Google", (0, r.jsx)(h(), {
                                                href: "https://policies.google.com/privacy",
                                                children: (0, r.jsx)("a", {
                                                    target: "_blank",
                                                    className: "font-bold",
                                                    style: {
                                                        color: I
                                                    },
                                                    children: " Privacy Policy"
                                                })
                                            }), " and", (0, r.jsx)(h(), {
                                                href: "https://policies.google.com/terms",
                                                children: (0, r.jsx)("a", {
                                                    target: "_blank",
                                                    className: "font-bold",
                                                    style: {
                                                        color: I
                                                    },
                                                    children: " Terms of Service"
                                                })
                                            }), " apply."]
                                        }), (0, r.jsx)(u.Z, {
                                            type: "submit",
                                            button: {
                                                label: re
                                            },
                                            website: Z,
                                            loading: S,
                                            className: "lg w-36 mt-2 md:mt-0"
                                        })]
                                    }), (0, r.jsx)(m.Z, {
                                        ref: ce,
                                        className: "invisible",
                                        size: "invisible",
                                        badge: "inline",
                                        sitekey: _,
                                        onChange: ve
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
        }
    }
]);