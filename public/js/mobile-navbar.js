! function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "../assets/", e(0)
}([function (t, e, n) {
    t.exports = n(8)
}, function (t, e, n) {
    var i, r;
    /*!
     * jQuery JavaScript Library v2.2.4
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-05-20T17:23Z
     */
    ! function (e, n) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function (n, s) {
        function o(t) {
            var e = !!t && "length" in t && t.length,
                n = ut.type(t);
            return "function" !== n && !ut.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function a(t, e, n) {
            if (ut.isFunction(e)) return ut.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ut.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (wt.test(e)) return ut.filter(e, t, n);
                e = ut.filter(e, t)
            }
            return ut.grep(t, function (t) {
                return it.call(e, t) > -1 !== n
            })
        }

        function l(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function u(t) {
            var e = {};
            return ut.each(t.match(Et) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function c() {
            K.removeEventListener("DOMContentLoaded", c), n.removeEventListener("load", c), ut.ready()
        }

        function h() {
            this.expando = ut.expando + h.uid++
        }

        function d(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace($t, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : jt.test(n) ? ut.parseJSON(n) : n)
                    } catch (t) {}
                    Nt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function f(t, e, n, i) {
            var r, s = 1,
                o = 20,
                a = i ? function () {
                    return i.cur()
                } : function () {
                    return ut.css(t, e, "")
                },
                l = a(),
                u = n && n[3] || (ut.cssNumber[e] ? "" : "px"),
                c = (ut.cssNumber[e] || "px" !== u && +l) && Pt.exec(ut.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do s = s || ".5", c /= s, ut.style(t, e, c + u); while (s !== (s = a() / l) && 1 !== s && --o)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function p(t, e) {
            var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && ut.nodeName(t, e) ? ut.merge([t], n) : n
        }

        function g(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Dt.set(t[n], "globalEval", !e || Dt.get(e[n], "globalEval"))
        }

        function m(t, e, n, i, r) {
            for (var s, o, a, l, u, c, h = e.createDocumentFragment(), d = [], f = 0, m = t.length; f < m; f++)
                if (s = t[f], s || 0 === s)
                    if ("object" === ut.type(s)) ut.merge(d, s.nodeType ? [s] : s);
                    else if (Ht.test(s)) {
                for (o = o || h.appendChild(e.createElement("div")), a = (Ft.exec(s) || ["", ""])[1].toLowerCase(), l = Rt[a] || Rt._default, o.innerHTML = l[1] + ut.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
                ut.merge(d, o.childNodes), o = h.firstChild, o.textContent = ""
            } else d.push(e.createTextNode(s));
            for (h.textContent = "", f = 0; s = d[f++];)
                if (i && ut.inArray(s, i) > -1) r && r.push(s);
                else if (u = ut.contains(s.ownerDocument, s), o = p(h.appendChild(s), "script"), u && g(o), n)
                for (c = 0; s = o[c++];) Ot.test(s.type || "") && n.push(s);
            return h
        }

        function v() {
            return !0
        }

        function y() {
            return !1
        }

        function w() {
            try {
                return K.activeElement
            } catch (t) {}
        }

        function x(t, e, n, i, r, s) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) x(t, a, n, i, e[a], s);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = y;
            else if (!r) return t;
            return 1 === s && (o = r, r = function (t) {
                return ut().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = ut.guid++)), t.each(function () {
                ut.event.add(this, e, r, i, n)
            })
        }

        function b(t, e) {
            return ut.nodeName(t, "table") && ut.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function _(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function C(t) {
            var e = Zt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function T(t, e) {
            var n, i, r, s, o, a, l, u;
            if (1 === e.nodeType) {
                if (Dt.hasData(t) && (s = Dt.access(t), o = Dt.set(e, s), u = s.events)) {
                    delete o.handle, o.events = {};
                    for (r in u)
                        for (n = 0, i = u[r].length; n < i; n++) ut.event.add(e, r, u[r][n])
                }
                Nt.hasData(t) && (a = Nt.access(t), l = ut.extend({}, a), Nt.set(e, l))
            }
        }

        function E(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Mt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function k(t, e, n, i) {
            e = et.apply([], e);
            var r, s, o, a, l, u, c = 0,
                h = t.length,
                d = h - 1,
                f = e[0],
                g = ut.isFunction(f);
            if (g || h > 1 && "string" == typeof f && !at.checkClone && Xt.test(f)) return t.each(function (r) {
                var s = t.eq(r);
                g && (e[0] = f.call(this, r, s.html())), k(s, e, n, i)
            });
            if (h && (r = m(e, t[0].ownerDocument, !1, t, i), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
                for (o = ut.map(p(r, "script"), _), a = o.length; c < h; c++) l = r, c !== d && (l = ut.clone(l, !0, !0), a && ut.merge(o, p(l, "script"))), n.call(t[c], l, c);
                if (a)
                    for (u = o[o.length - 1].ownerDocument, ut.map(o, C), c = 0; c < a; c++) l = o[c], Ot.test(l.type || "") && !Dt.access(l, "globalEval") && ut.contains(u, l) && (l.src ? ut._evalUrl && ut._evalUrl(l.src) : ut.globalEval(l.textContent.replace(Yt, "")))
            }
            return t
        }

        function S(t, e, n) {
            for (var i, r = e ? ut.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || ut.cleanData(p(i)), i.parentNode && (n && ut.contains(i.ownerDocument, i) && g(p(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function A(t, e) {
            var n = ut(e.createElement(t)).appendTo(e.body),
                i = ut.css(n[0], "display");
            return n.detach(), i
        }

        function D(t) {
            var e = K,
                n = Jt[t];
            return n || (n = A(t, e), "none" !== n && n || (Gt = (Gt || ut("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Gt[0].contentDocument, e.write(), e.close(), n = A(t, e), Gt.detach()), Jt[t] = n), n
        }

        function N(t, e, n) {
            var i, r, s, o, a = t.style;
            return n = n || te(t), o = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== o && void 0 !== o || ut.contains(t.ownerDocument, t) || (o = ut.style(t, e)), n && !at.pixelMarginRight() && Kt.test(o) && Qt.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s), void 0 !== o ? o + "" : o
        }

        function j(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function $(t) {
            if (t in ae) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = oe.length; n--;)
                if (t = oe[n] + e, t in ae) return t
        }

        function L(t, e, n) {
            var i = Pt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function P(t, e, n, i, r) {
            for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; s < 4; s += 2) "margin" === n && (o += ut.css(t, n + qt[s], !0, r)), i ? ("content" === n && (o -= ut.css(t, "padding" + qt[s], !0, r)), "margin" !== n && (o -= ut.css(t, "border" + qt[s] + "Width", !0, r))) : (o += ut.css(t, "padding" + qt[s], !0, r), "padding" !== n && (o += ut.css(t, "border" + qt[s] + "Width", !0, r)));
            return o
        }

        function q(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = te(t),
                o = "border-box" === ut.css(t, "boxSizing", !1, s);
            if (r <= 0 || null == r) {
                if (r = N(t, e, s), (r < 0 || null == r) && (r = t.style[e]), Kt.test(r)) return r;
                i = o && (at.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + P(t, e, n || (o ? "border" : "content"), i, s) + "px"
        }

        function z(t, e) {
            for (var n, i, r, s = [], o = 0, a = t.length; o < a; o++) i = t[o], i.style && (s[o] = Dt.get(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && zt(i) && (s[o] = Dt.access(i, "olddisplay", D(i.nodeName)))) : (r = zt(i), "none" === n && r || Dt.set(i, "olddisplay", r ? n : ut.css(i, "display"))));
            for (o = 0; o < a; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none"));
            return t
        }

        function M(t, e, n, i, r) {
            return new M.prototype.init(t, e, n, i, r)
        }

        function F() {
            return n.setTimeout(function () {
                le = void 0
            }), le = ut.now()
        }

        function O(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = qt[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function R(t, e, n) {
            for (var i, r = (W.tweeners[e] || []).concat(W.tweeners["*"]), s = 0, o = r.length; s < o; s++)
                if (i = r[s].call(n, e, t)) return i
        }

        function H(t, e, n) {
            var i, r, s, o, a, l, u, c, h = this,
                d = {},
                f = t.style,
                p = t.nodeType && zt(t),
                g = Dt.get(t, "fxshow");
            n.queue || (a = ut._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, ut.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ut.css(t, "display"), c = "none" === u ? Dt.get(t, "olddisplay") || D(t.nodeName) : u, "inline" === c && "none" === ut.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], ce.exec(r)) {
                    if (delete e[i], s = s || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        p = !0
                    }
                    d[i] = g && g[i] || ut.style(t, i)
                } else u = void 0;
            if (ut.isEmptyObject(d)) "inline" === ("none" === u ? D(t.nodeName) : u) && (f.display = u);
            else {
                g ? "hidden" in g && (p = g.hidden) : g = Dt.access(t, "fxshow", {}), s && (g.hidden = !p), p ? ut(t).show() : h.done(function () {
                    ut(t).hide()
                }), h.done(function () {
                    var e;
                    Dt.remove(t, "fxshow");
                    for (e in d) ut.style(t, e, d[e])
                });
                for (i in d) o = R(p ? g[i] : 0, i, h), i in g || (g[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function I(t, e) {
            var n, i, r, s, o;
            for (n in t)
                if (i = ut.camelCase(n), r = e[i], s = t[n], ut.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = ut.cssHooks[i], o && "expand" in o) {
                    s = o.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = r)
                } else e[i] = r
        }

        function W(t, e, n) {
            var i, r, s = 0,
                o = W.prefilters.length,
                a = ut.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (r) return !1;
                    for (var e = le || F(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, s = 1 - i, o = 0, l = u.tweens.length; o < l; o++) u.tweens[o].run(s);
                    return a.notifyWith(t, [u, s, n]), s < 1 && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: ut.extend({}, e),
                    opts: ut.extend(!0, {
                        specialEasing: {},
                        easing: ut.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: le || F(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = ut.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (I(c, u.opts.specialEasing); s < o; s++)
                if (i = W.prefilters[s].call(u, t, c, u.opts)) return ut.isFunction(i.stop) && (ut._queueHooks(u.elem, u.opts.queue).stop = ut.proxy(i.stop, i)), i;
            return ut.map(c, R, u), ut.isFunction(u.opts.start) && u.opts.start.call(t, u), ut.fx.timer(ut.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function B(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function V(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    s = e.toLowerCase().match(Et) || [];
                if (ut.isFunction(n))
                    for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function U(t, e, n, i) {
            function r(a) {
                var l;
                return s[a] = !0, ut.each(t[a] || [], function (t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var s = {},
                o = t === Ne;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function X(t, e) {
            var n, i, r = ut.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && ut.extend(!0, t, i), t
        }

        function Z(t, e, n) {
            for (var i, r, s, o, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    } if (l[0] in n) s = l[0];
            else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        s = r;
                        break
                    }
                    o || (o = r)
                }
                s = s || o
            }
            if (s) return s !== l[0] && l.unshift(s), n[s]
        }

        function Y(t, e, n, i) {
            var r, s, o, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
            for (s = c.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (o = u[l + " " + s] || u["* " + s], !o)
                    for (r in u)
                        if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                            o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
                            break
                        } if (o !== !0)
                    if (o && t.throws) e = o(e);
                    else try {
                        e = o(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: o ? t : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function G(t, e, n, i) {
            var r;
            if (ut.isArray(e)) ut.each(e, function (e, r) {
                n || Pe.test(t) ? i(t, r) : G(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== ut.type(e)) i(t, e);
            else
                for (r in e) G(t + "[" + r + "]", e[r], n, i)
        }

        function J(t) {
            return ut.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var Q = [],
            K = n.document,
            tt = Q.slice,
            et = Q.concat,
            nt = Q.push,
            it = Q.indexOf,
            rt = {},
            st = rt.toString,
            ot = rt.hasOwnProperty,
            at = {},
            lt = "2.2.4",
            ut = function (t, e) {
                return new ut.fn.init(t, e)
            },
            ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ht = /^-ms-/,
            dt = /-([\da-z])/gi,
            ft = function (t, e) {
                return e.toUpperCase()
            };
        ut.fn = ut.prototype = {
            jquery: lt,
            constructor: ut,
            selector: "",
            length: 0,
            toArray: function () {
                return tt.call(this)
            },
            get: function (t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : tt.call(this)
            },
            pushStack: function (t) {
                var e = ut.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function (t) {
                return ut.each(this, t)
            },
            map: function (t) {
                return this.pushStack(ut.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function () {
                return this.pushStack(tt.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: nt,
            sort: Q.sort,
            splice: Q.splice
        }, ut.extend = ut.fn.extend = function () {
            var t, e, n, i, r, s, o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || ut.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = o[e], i = t[e], o !== i && (u && i && (ut.isPlainObject(i) || (r = ut.isArray(i))) ? (r ? (r = !1, s = n && ut.isArray(n) ? n : []) : s = n && ut.isPlainObject(n) ? n : {}, o[e] = ut.extend(u, s, i)) : void 0 !== i && (o[e] = i));
            return o
        }, ut.extend({
            expando: "jQuery" + (lt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === ut.type(t)
            },
            isArray: Array.isArray,
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                var e = t && t.toString();
                return !ut.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function (t) {
                var e;
                if ("object" !== ut.type(t) || t.nodeType || ut.isWindow(t)) return !1;
                if (t.constructor && !ot.call(t, "constructor") && !ot.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || ot.call(t, e)
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? rt[st.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                var e, n = eval;
                t = ut.trim(t), t && (1 === t.indexOf("use strict") ? (e = K.createElement("script"), e.text = t, K.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function (t) {
                return t.replace(ht, "ms-").replace(dt, ft)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e) {
                var n, i = 0;
                if (o(t))
                    for (n = t.length; i < n && e.call(t[i], i, t[i]) !== !1; i++);
                else
                    for (i in t)
                        if (e.call(t[i], i, t[i]) === !1) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(ct, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (o(Object(t)) ? ut.merge(n, "string" == typeof t ? [t] : t) : nt.call(n, t)), n
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : it.call(e, t, n)
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function (t, e, n) {
                for (var i, r = [], s = 0, o = t.length, a = !n; s < o; s++) i = !e(t[s], s), i !== a && r.push(t[s]);
                return r
            },
            map: function (t, e, n) {
                var i, r, s = 0,
                    a = [];
                if (o(t))
                    for (i = t.length; s < i; s++) r = e(t[s], s, n), null != r && a.push(r);
                else
                    for (s in t) r = e(t[s], s, n), null != r && a.push(r);
                return et.apply([], a)
            },
            guid: 1,
            proxy: function (t, e) {
                var n, i, r;
                if ("string" == typeof e && (n = t[e], e = t, t = n), ut.isFunction(t)) return i = tt.call(arguments, 2), r = function () {
                    return t.apply(e || this, i.concat(tt.call(arguments)))
                }, r.guid = t.guid = t.guid || ut.guid++, r
            },
            now: Date.now,
            support: at
        }), "function" == typeof Symbol && (ut.fn[Symbol.iterator] = Q[Symbol.iterator]), ut.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            rt["[object " + e + "]"] = e.toLowerCase()
        });
        var pt =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            function (t) {
                function e(t, e, n, i) {
                    var r, s, o, a, l, u, h, f, p = e && e.ownerDocument,
                        g = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!i && ((e ? e.ownerDocument || e : R) !== $ && j(e), e = e || $, P)) {
                        if (11 !== g && (u = vt.exec(t)))
                            if (r = u[1]) {
                                if (9 === g) {
                                    if (!(o = e.getElementById(r))) return n;
                                    if (o.id === r) return n.push(o), n
                                } else if (p && (o = p.getElementById(r)) && F(e, o) && o.id === r) return n.push(o), n
                            } else {
                                if (u[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                                if ((r = u[3]) && b.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(r)), n
                            } if (b.qsa && !V[t + " "] && (!q || !q.test(t))) {
                            if (1 !== g) p = e, f = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = O), h = E(t), s = h.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; s--;) h[s] = l + " " + d(h[s]);
                                f = h.join(","), p = yt.test(t) && c(e.parentNode) || e
                            }
                            if (f) try {
                                return Q.apply(n, p.querySelectorAll(f)), n
                            } catch (t) {} finally {
                                a === O && e.removeAttribute("id")
                            }
                        }
                    }
                    return S(t.replace(at, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }

                function i(t) {
                    return t[O] = !0, t
                }

                function r(t) {
                    var e = $.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function s(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = e
                }

                function o(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function l(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function u(t) {
                    return i(function (e) {
                        return e = +e, i(function (n, i) {
                            for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function c(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function h() {}

                function d(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function f(t, e, n) {
                    var i = e.dir,
                        r = n && "parentNode" === i,
                        s = I++;
                    return e.first ? function (e, n, s) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) return t(e, n, s)
                    } : function (e, n, o) {
                        var a, l, u, c = [H, s];
                        if (o) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || r) && t(e, n, o)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || r) {
                                    if (u = e[O] || (e[O] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === H && a[1] === s) return c[2] = a[2];
                                    if (l[i] = c, c[2] = t(e, n, o)) return !0
                                }
                    }
                }

                function p(t) {
                    return t.length > 1 ? function (e, n, i) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function g(t, n, i) {
                    for (var r = 0, s = n.length; r < s; r++) e(t, n[r], i);
                    return i
                }

                function m(t, e, n, i, r) {
                    for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), u && e.push(a)));
                    return o
                }

                function v(t, e, n, r, s, o) {
                    return r && !r[O] && (r = v(r)), s && !s[O] && (s = v(s, o)), i(function (i, o, a, l) {
                        var u, c, h, d = [],
                            f = [],
                            p = o.length,
                            v = i || g(e || "*", a.nodeType ? [a] : a, []),
                            y = !t || !i && e ? v : m(v, d, t, a, l),
                            w = n ? s || (i ? t : p || r) ? [] : o : y;
                        if (n && n(y, w, a, l), r)
                            for (u = m(w, f), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (w[f[c]] = !(y[f[c]] = h));
                        if (i) {
                            if (s || t) {
                                if (s) {
                                    for (u = [], c = w.length; c--;)(h = w[c]) && u.push(y[c] = h);
                                    s(null, w = [], u, l)
                                }
                                for (c = w.length; c--;)(h = w[c]) && (u = s ? tt(i, h) : d[c]) > -1 && (i[u] = !(o[u] = h))
                            }
                        } else w = m(w === o ? w.splice(p, w.length) : w), s ? s(null, o, w, l) : Q.apply(o, w)
                    })
                }

                function y(t) {
                    for (var e, n, i, r = t.length, s = _.relative[t[0].type], o = s || _.relative[" "], a = s ? 1 : 0, l = f(function (t) {
                            return t === e
                        }, o, !0), u = f(function (t) {
                            return tt(e, t) > -1
                        }, o, !0), c = [function (t, n, i) {
                            var r = !s && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                            return e = null, r
                        }]; a < r; a++)
                        if (n = _.relative[t[a].type]) c = [f(p(c), n)];
                        else {
                            if (n = _.filter[t[a].type].apply(null, t[a].matches), n[O]) {
                                for (i = ++a; i < r && !_.relative[t[i].type]; i++);
                                return v(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(at, "$1"), n, a < i && y(t.slice(a, i)), i < r && y(t = t.slice(i)), i < r && d(t))
                            }
                            c.push(n)
                        } return p(c)
                }

                function w(t, n) {
                    var r = n.length > 0,
                        s = t.length > 0,
                        o = function (i, o, a, l, u) {
                            var c, h, d, f = 0,
                                p = "0",
                                g = i && [],
                                v = [],
                                y = A,
                                w = i || s && _.find.TAG("*", u),
                                x = H += null == y ? 1 : Math.random() || .1,
                                b = w.length;
                            for (u && (A = o === $ || o || u); p !== b && null != (c = w[p]); p++) {
                                if (s && c) {
                                    for (h = 0, o || c.ownerDocument === $ || (j(c), a = !P); d = t[h++];)
                                        if (d(c, o || $, a)) {
                                            l.push(c);
                                            break
                                        } u && (H = x)
                                }
                                r && ((c = !d && c) && f--, i && g.push(c))
                            }
                            if (f += p, r && p !== f) {
                                for (h = 0; d = n[h++];) d(g, v, o, a);
                                if (i) {
                                    if (f > 0)
                                        for (; p--;) g[p] || v[p] || (v[p] = G.call(l));
                                    v = m(v)
                                }
                                Q.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                            }
                            return u && (H = x, A = y), g
                        };
                    return r ? i(o) : o
                }
                var x, b, _, C, T, E, k, S, A, D, N, j, $, L, P, q, z, M, F, O = "sizzle" + 1 * new Date,
                    R = t.document,
                    H = 0,
                    I = 0,
                    W = n(),
                    B = n(),
                    V = n(),
                    U = function (t, e) {
                        return t === e && (N = !0), 0
                    },
                    X = 1 << 31,
                    Z = {}.hasOwnProperty,
                    Y = [],
                    G = Y.pop,
                    J = Y.push,
                    Q = Y.push,
                    K = Y.slice,
                    tt = function (t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    nt = "[\\x20\\t\\r\\n\\f]",
                    it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                    st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                    ot = new RegExp(nt + "+", "g"),
                    at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                    lt = new RegExp("^" + nt + "*," + nt + "*"),
                    ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                    ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                    ht = new RegExp(st),
                    dt = new RegExp("^" + it + "$"),
                    ft = {
                        ID: new RegExp("^#(" + it + ")"),
                        CLASS: new RegExp("^\\.(" + it + ")"),
                        TAG: new RegExp("^(" + it + "|[*])"),
                        ATTR: new RegExp("^" + rt),
                        PSEUDO: new RegExp("^" + st),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    pt = /^(?:input|select|textarea|button)$/i,
                    gt = /^h\d$/i,
                    mt = /^[^{]+\{\s*\[native \w/,
                    vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    yt = /[+~]/,
                    wt = /'|\\/g,
                    xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                    bt = function (t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    _t = function () {
                        j()
                    };
                try {
                    Q.apply(Y = K.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
                } catch (t) {
                    Q = {
                        apply: Y.length ? function (t, e) {
                            J.apply(t, K.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                b = e.support = {}, T = e.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, j = e.setDocument = function (t) {
                    var e, n, i = t ? t.ownerDocument || t : R;
                    return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, L = $.documentElement, P = !T($), (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), b.attributes = r(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), b.getElementsByTagName = r(function (t) {
                        return t.appendChild($.createComment("")), !t.getElementsByTagName("*").length
                    }), b.getElementsByClassName = mt.test($.getElementsByClassName), b.getById = r(function (t) {
                        return L.appendChild(t).id = O, !$.getElementsByName || !$.getElementsByName(O).length
                    }), b.getById ? (_.find.ID = function (t, e) {
                        if ("undefined" != typeof e.getElementById && P) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }, _.filter.ID = function (t) {
                        var e = t.replace(xt, bt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete _.find.ID, _.filter.ID = function (t) {
                        var e = t.replace(xt, bt);
                        return function (t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), _.find.TAG = b.getElementsByTagName ? function (t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, i = [],
                            r = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return s
                    }, _.find.CLASS = b.getElementsByClassName && function (t, e) {
                        if ("undefined" != typeof e.getElementsByClassName && P) return e.getElementsByClassName(t)
                    }, z = [], q = [], (b.qsa = mt.test($.querySelectorAll)) && (r(function (t) {
                        L.appendChild(t).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || q.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + O + "-]").length || q.push("~="), t.querySelectorAll(":checked").length || q.push(":checked"), t.querySelectorAll("a#" + O + "+*").length || q.push(".#.+[+~]")
                    }), r(function (t) {
                        var e = $.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && q.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), q.push(",.*:")
                    })), (b.matchesSelector = mt.test(M = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (t) {
                        b.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), z.push("!=", st)
                    }), q = q.length && new RegExp(q.join("|")), z = z.length && new RegExp(z.join("|")), e = mt.test(L.compareDocumentPosition), F = e || mt.test(L.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, U = e ? function (t, e) {
                        if (t === e) return N = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === $ || t.ownerDocument === R && F(R, t) ? -1 : e === $ || e.ownerDocument === R && F(R, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return N = !0, 0;
                        var n, i = 0,
                            r = t.parentNode,
                            s = e.parentNode,
                            a = [t],
                            l = [e];
                        if (!r || !s) return t === $ ? -1 : e === $ ? 1 : r ? -1 : s ? 1 : D ? tt(D, t) - tt(D, e) : 0;
                        if (r === s) return o(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (; a[i] === l[i];) i++;
                        return i ? o(a[i], l[i]) : a[i] === R ? -1 : l[i] === R ? 1 : 0
                    }, $) : $
                }, e.matches = function (t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function (t, n) {
                    if ((t.ownerDocument || t) !== $ && j(t), n = n.replace(ct, "='$1']"), b.matchesSelector && P && !V[n + " "] && (!z || !z.test(n)) && (!q || !q.test(n))) try {
                        var i = M.call(t, n);
                        if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return e(n, $, null, [t]).length > 0
                }, e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== $ && j(t), F(t, e)
                }, e.attr = function (t, e) {
                    (t.ownerDocument || t) !== $ && j(t);
                    var n = _.attrHandle[e.toLowerCase()],
                        i = n && Z.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
                    return void 0 !== i ? i : b.attributes || !P ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function (t) {
                    var e, n = [],
                        i = 0,
                        r = 0;
                    if (N = !b.detectDuplicates, D = !b.sortStable && t.slice(0), t.sort(U), N) {
                        for (; e = t[r++];) e === t[r] && (i = n.push(r));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return D = null, t
                }, C = e.getText = function (t) {
                    var e, n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += C(e);
                    return n
                }, _ = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ft,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(xt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(xt, bt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function (t) {
                            var e = W[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (t, n, i) {
                            return function (r) {
                                var s = e.attr(r, t);
                                return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function (t, e, n, i, r) {
                            var s = "nth" !== t.slice(0, 3),
                                o = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, l) {
                                var u, c, h, d, f, p, g = s !== o ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    w = !1;
                                if (m) {
                                    if (s) {
                                        for (; g;) {
                                            for (d = e; d = d[g];)
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [o ? m.firstChild : m.lastChild], o && y) {
                                        for (d = m, h = d[O] || (d[O] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === H && u[1], w = f && u[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (w = f = 0) || p.pop();)
                                            if (1 === d.nodeType && ++w && d === e) {
                                                c[t] = [H, f, w];
                                                break
                                            }
                                    } else if (y && (d = e, h = d[O] || (d[O] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === H && u[1], w = f), w === !1)
                                        for (;
                                            (d = ++f && d && d[g] || (w = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && (h = d[O] || (d[O] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), c[t] = [H, w]), d !== e)););
                                    return w -= r, w === i || w % i === 0 && w / i >= 0
                                }
                            }
                        },
                        PSEUDO: function (t, n) {
                            var r, s = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return s[O] ? s(n) : s.length > 1 ? (r = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                                for (var i, r = s(t, n), o = r.length; o--;) i = tt(t, r[o]), t[i] = !(e[i] = r[o])
                            }) : function (t) {
                                return s(t, 0, r)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: i(function (t) {
                            var e = [],
                                n = [],
                                r = k(t.replace(at, "$1"));
                            return r[O] ? i(function (t, e, n, i) {
                                for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                            }) : function (t, i, s) {
                                return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: i(function (t) {
                            return function (n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function (t) {
                            return t = t.replace(xt, bt),
                                function (e) {
                                    return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                                }
                        }),
                        lang: i(function (t) {
                            return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, bt).toLowerCase(),
                                function (e) {
                                    var n;
                                    do
                                        if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function (t) {
                            return t === L
                        },
                        focus: function (t) {
                            return t === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function (t) {
                            return t.disabled === !1
                        },
                        disabled: function (t) {
                            return t.disabled === !0
                        },
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (t) {
                            return !_.pseudos.empty(t)
                        },
                        header: function (t) {
                            return gt.test(t.nodeName)
                        },
                        input: function (t) {
                            return pt.test(t.nodeName)
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: u(function () {
                            return [0]
                        }),
                        last: u(function (t, e) {
                            return [e - 1]
                        }),
                        eq: u(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: u(function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }),
                        odd: u(function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }),
                        lt: u(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: u(function (t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) _.pseudos[x] = a(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) _.pseudos[x] = l(x);
                return h.prototype = _.filters = _.pseudos, _.setFilters = new h, E = e.tokenize = function (t, n) {
                    var i, r, s, o, a, l, u, c = B[t + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (a = t, l = [], u = _.preFilter; a;) {
                        i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), s.push({
                            value: i,
                            type: r[0].replace(at, " ")
                        }), a = a.slice(i.length));
                        for (o in _.filter) !(r = ft[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({
                            value: i,
                            type: o,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length : a ? e.error(t) : B(t, l).slice(0)
                }, k = e.compile = function (t, e) {
                    var n, i = [],
                        r = [],
                        s = V[t + " "];
                    if (!s) {
                        for (e || (e = E(t)), n = e.length; n--;) s = y(e[n]), s[O] ? i.push(s) : r.push(s);
                        s = V(t, w(r, i)), s.selector = t
                    }
                    return s
                }, S = e.select = function (t, e, n, i) {
                    var r, s, o, a, l, u = "function" == typeof t && t,
                        h = !i && E(t = u.selector || t);
                    if (n = n || [], 1 === h.length) {
                        if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && b.getById && 9 === e.nodeType && P && _.relative[s[1].type]) {
                            if (e = (_.find.ID(o.matches[0].replace(xt, bt), e) || [])[0], !e) return n;
                            u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                        }
                        for (r = ft.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !_.relative[a = o.type]);)
                            if ((l = _.find[a]) && (i = l(o.matches[0].replace(xt, bt), yt.test(s[0].type) && c(e.parentNode) || e))) {
                                if (s.splice(r, 1), t = i.length && d(s), !t) return Q.apply(n, i), n;
                                break
                            }
                    }
                    return (u || k(t, h))(i, e, !P, n, !e || yt.test(t) && c(e.parentNode) || e), n
                }, b.sortStable = O.split("").sort(U).join("") === O, b.detectDuplicates = !!N, j(), b.sortDetached = r(function (t) {
                    return 1 & t.compareDocumentPosition($.createElement("div"))
                }), r(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), b.attributes && r(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || s("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), r(function (t) {
                    return null == t.getAttribute("disabled")
                }) || s(et, function (t, e, n) {
                    var i;
                    if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(n);
        ut.find = pt, ut.expr = pt.selectors, ut.expr[":"] = ut.expr.pseudos, ut.uniqueSort = ut.unique = pt.uniqueSort, ut.text = pt.getText, ut.isXMLDoc = pt.isXML, ut.contains = pt.contains;
        var gt = function (t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && ut(t).is(n)) break;
                        i.push(t)
                    } return i
            },
            mt = function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            vt = ut.expr.match.needsContext,
            yt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            wt = /^.[^:#\[\.,]*$/;
        ut.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ut.find.matchesSelector(i, t) ? [i] : [] : ut.find.matches(t, ut.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, ut.fn.extend({
            find: function (t) {
                var e, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(ut(t).filter(function () {
                    for (e = 0; e < n; e++)
                        if (ut.contains(r[e], this)) return !0
                }));
                for (e = 0; e < n; e++) ut.find(t, r[e], i);
                return i = this.pushStack(n > 1 ? ut.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function (t) {
                return this.pushStack(a(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(a(this, t || [], !0))
            },
            is: function (t) {
                return !!a(this, "string" == typeof t && vt.test(t) ? ut(t) : t || [], !1).length
            }
        });
        var xt, bt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            _t = ut.fn.init = function (t, e, n) {
                var i, r;
                if (!t) return this;
                if (n = n || xt, "string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : bt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof ut ? e[0] : e, ut.merge(this, ut.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : K, !0)), yt.test(i[1]) && ut.isPlainObject(e))
                            for (i in e) ut.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return r = K.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ut.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ut) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ut.makeArray(t, this))
            };
        _t.prototype = ut.fn, xt = ut(K);
        var Ct = /^(?:parents|prev(?:Until|All))/,
            Tt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ut.fn.extend({
            has: function (t) {
                var e = ut(t, this),
                    n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++)
                        if (ut.contains(this, e[t])) return !0
                })
            },
            closest: function (t, e) {
                for (var n, i = 0, r = this.length, s = [], o = vt.test(t) || "string" != typeof t ? ut(t, e || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ut.find.matchesSelector(n, t))) {
                            s.push(n);
                            break
                        } return this.pushStack(s.length > 1 ? ut.uniqueSort(s) : s)
            },
            index: function (t) {
                return t ? "string" == typeof t ? it.call(ut(t), this[0]) : it.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(ut.uniqueSort(ut.merge(this.get(), ut(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ut.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return gt(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return gt(t, "parentNode", n)
            },
            next: function (t) {
                return l(t, "nextSibling")
            },
            prev: function (t) {
                return l(t, "previousSibling")
            },
            nextAll: function (t) {
                return gt(t, "nextSibling")
            },
            prevAll: function (t) {
                return gt(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return gt(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return gt(t, "previousSibling", n)
            },
            siblings: function (t) {
                return mt((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return mt(t.firstChild)
            },
            contents: function (t) {
                return t.contentDocument || ut.merge([], t.childNodes)
            }
        }, function (t, e) {
            ut.fn[t] = function (n, i) {
                var r = ut.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ut.filter(i, r)), this.length > 1 && (Tt[t] || ut.uniqueSort(r), Ct.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var Et = /\S+/g;
        ut.Callbacks = function (t) {
            t = "string" == typeof t ? u(t) : ut.extend({}, t);
            var e, n, i, r, s = [],
                o = [],
                a = -1,
                l = function () {
                    for (r = t.once, i = e = !0; o.length; a = -1)
                        for (n = o.shift(); ++a < s.length;) s[a].apply(n[0], n[1]) === !1 && t.stopOnFalse && (a = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                },
                c = {
                    add: function () {
                        return s && (n && !e && (a = s.length - 1, o.push(n)), function e(n) {
                            ut.each(n, function (n, i) {
                                ut.isFunction(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== ut.type(i) && e(i)
                            })
                        }(arguments), n && !e && l()), this
                    },
                    remove: function () {
                        return ut.each(arguments, function (t, e) {
                            for (var n;
                                (n = ut.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= a && a--
                        }), this
                    },
                    has: function (t) {
                        return t ? ut.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function () {
                        return s && (s = []), this
                    },
                    disable: function () {
                        return r = o = [], s = n = "", this
                    },
                    disabled: function () {
                        return !s
                    },
                    lock: function () {
                        return r = o = [], n || (s = n = ""), this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], o.push(n), e || l()), this
                    },
                    fire: function () {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return c
        }, ut.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", ut.Callbacks("once memory"), "resolved"], ["reject", "fail", ut.Callbacks("once memory"), "rejected"], ["notify", "progress", ut.Callbacks("memory")]],
                    n = "pending",
                    i = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var t = arguments;
                            return ut.Deferred(function (n) {
                                ut.each(e, function (e, s) {
                                    var o = ut.isFunction(t[e]) && t[e];
                                    r[s[1]](function () {
                                        var t = o && o.apply(this, arguments);
                                        t && ut.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? ut.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ut.each(e, function (t, s) {
                    var o = s[2],
                        a = s[3];
                    i[s[1]] = o.add, a && o.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function () {
                        return r[s[0] + "With"](this === r ? i : this, arguments), this
                    }, r[s[0] + "With"] = o.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function (t) {
                var e, n, i, r = 0,
                    s = tt.call(arguments),
                    o = s.length,
                    a = 1 !== o || t && ut.isFunction(t.promise) ? o : 0,
                    l = 1 === a ? t : ut.Deferred(),
                    u = function (t, n, i) {
                        return function (r) {
                            n[t] = this, i[t] = arguments.length > 1 ? tt.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (o > 1)
                    for (e = new Array(o), n = new Array(o), i = new Array(o); r < o; r++) s[r] && ut.isFunction(s[r].promise) ? s[r].promise().progress(u(r, n, e)).done(u(r, i, s)).fail(l.reject) : --a;
                return a || l.resolveWith(i, s), l.promise()
            }
        });
        var kt;
        ut.fn.ready = function (t) {
            return ut.ready.promise().done(t), this
        }, ut.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? ut.readyWait++ : ut.ready(!0)
            },
            ready: function (t) {
                (t === !0 ? --ut.readyWait : ut.isReady) || (ut.isReady = !0, t !== !0 && --ut.readyWait > 0 || (kt.resolveWith(K, [ut]), ut.fn.triggerHandler && (ut(K).triggerHandler("ready"), ut(K).off("ready"))))
            }
        }), ut.ready.promise = function (t) {
            return kt || (kt = ut.Deferred(), "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll ? n.setTimeout(ut.ready) : (K.addEventListener("DOMContentLoaded", c), n.addEventListener("load", c))), kt.promise(t)
        }, ut.ready.promise();
        var St = function (t, e, n, i, r, s, o) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === ut.type(n)) {
                    r = !0;
                    for (a in n) St(t, e, a, n[a], !0, s, o)
                } else if (void 0 !== i && (r = !0, ut.isFunction(i) || (o = !0), u && (o ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                        return u.call(ut(t), n)
                    })), e))
                    for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : s
            },
            At = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        h.uid = 1, h.prototype = {
            register: function (t, e) {
                var n = e || {};
                return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function (t) {
                if (!At(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, At(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function (t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[e] = n;
                else
                    for (i in e) r[i] = e[i];
                return r
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function (t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, ut.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function (t, e) {
                var n, i, r, s = t[this.expando];
                if (void 0 !== s) {
                    if (void 0 === e) this.register(t);
                    else {
                        ut.isArray(e) ? i = e.concat(e.map(ut.camelCase)) : (r = ut.camelCase(e), e in s ? i = [e, r] : (i = r, i = i in s ? [i] : i.match(Et) || [])), n = i.length;
                        for (; n--;) delete s[i[n]]
                    }(void 0 === e || ut.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !ut.isEmptyObject(e)
            }
        };
        var Dt = new h,
            Nt = new h,
            jt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            $t = /[A-Z]/g;
        ut.extend({
            hasData: function (t) {
                return Nt.hasData(t) || Dt.hasData(t)
            },
            data: function (t, e, n) {
                return Nt.access(t, e, n)
            },
            removeData: function (t, e) {
                Nt.remove(t, e)
            },
            _data: function (t, e, n) {
                return Dt.access(t, e, n)
            },
            _removeData: function (t, e) {
                Dt.remove(t, e)
            }
        }), ut.fn.extend({
            data: function (t, e) {
                var n, i, r, s = this[0],
                    o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Nt.get(s), 1 === s.nodeType && !Dt.get(s, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = ut.camelCase(i.slice(5)), d(s, i, r[i])));
                        Dt.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    Nt.set(this, t)
                }) : St(this, function (e) {
                    var n, i;
                    if (s && void 0 === e) {
                        if (n = Nt.get(s, t) || Nt.get(s, t.replace($t, "-$&").toLowerCase()), void 0 !== n) return n;
                        if (i = ut.camelCase(t), n = Nt.get(s, i), void 0 !== n) return n;
                        if (n = d(s, i, void 0), void 0 !== n) return n
                    } else i = ut.camelCase(t), this.each(function () {
                        var n = Nt.get(this, i);
                        Nt.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Nt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each(function () {
                    Nt.remove(this, t)
                })
            }
        }), ut.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Dt.get(t, e), n && (!i || ut.isArray(n) ? i = Dt.access(t, e, ut.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = ut.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    s = ut._queueHooks(t, e),
                    o = function () {
                        ut.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return Dt.get(t, n) || Dt.access(t, n, {
                    empty: ut.Callbacks("once memory").add(function () {
                        Dt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), ut.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ut.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = ut.queue(this, t, e);
                    ut._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ut.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    ut.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var n, i = 1,
                    r = ut.Deferred(),
                    s = this,
                    o = this.length,
                    a = function () {
                        --i || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = Dt.get(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Pt = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"),
            qt = ["Top", "Right", "Bottom", "Left"],
            zt = function (t, e) {
                return t = e || t, "none" === ut.css(t, "display") || !ut.contains(t.ownerDocument, t)
            },
            Mt = /^(?:checkbox|radio)$/i,
            Ft = /<([\w:-]+)/,
            Ot = /^$|\/(?:java|ecma)script/i,
            Rt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td;
        var Ht = /<|&#?\w+;/;
        ! function () {
            var t = K.createDocumentFragment(),
                e = t.appendChild(K.createElement("div")),
                n = K.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), at.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", at.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var It = /^key/,
            Wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Bt = /^([^.]*)(?:\.(.+)|)/;
        ut.event = {
            global: {},
            add: function (t, e, n, i, r) {
                var s, o, a, l, u, c, h, d, f, p, g, m = Dt.get(t);
                if (m)
                    for (n.handler && (s = n, n = s.handler, r = s.selector), n.guid || (n.guid = ut.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function (e) {
                            return "undefined" != typeof ut && ut.event.triggered !== e.type ? ut.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(Et) || [""], u = e.length; u--;) a = Bt.exec(e[u]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f && (h = ut.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = ut.event.special[f] || {}, c = ut.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ut.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, s), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, i, p, o) !== !1 || t.addEventListener && t.addEventListener(f, o)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), ut.event.global[f] = !0)
            },
            remove: function (t, e, n, i, r) {
                var s, o, a, l, u, c, h, d, f, p, g, m = Dt.hasData(t) && Dt.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(Et) || [""], u = e.length; u--;)
                        if (a = Bt.exec(e[u]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (h = ut.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) c = d[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(s, 1),
                                c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                            o && !d.length && (h.teardown && h.teardown.call(t, p, m.handle) !== !1 || ut.removeEvent(t, f, m.handle), delete l[f])
                        } else
                            for (f in l) ut.event.remove(t, f + e[u], n, i, !0);
                    ut.isEmptyObject(l) && Dt.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                t = ut.event.fix(t);
                var e, n, i, r, s, o = [],
                    a = tt.call(arguments),
                    l = (Dt.get(this, "events") || {})[t.type] || [],
                    u = ut.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (o = ut.event.handlers.call(this, t, l), e = 0;
                        (r = o[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, n = 0;
                            (s = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, i = ((ut.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, r, s, o = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (i = [], n = 0; n < a; n++) s = e[n], r = s.selector + " ", void 0 === i[r] && (i[r] = s.needsContext ? ut(r, this).index(l) > -1 : ut.find(r, this, null, [l]).length), i[r] && i.push(s);
                            i.length && o.push({
                                elem: l,
                                handlers: i
                            })
                        } return a < e.length && o.push({
                    elem: this,
                    handlers: e.slice(a)
                }), o
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, r, s = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || K, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function (t) {
                if (t[ut.expando]) return t;
                var e, n, i, r = t.type,
                    s = t,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Wt.test(r) ? this.mouseHooks : It.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new ut.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
                return t.target || (t.target = K), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== w() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        if (this === w() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && ut.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function (t) {
                        return ut.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, ut.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, ut.Event = function (t, e) {
            return this instanceof ut.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? v : y) : this.type = t, e && ut.extend(this, e), this.timeStamp = t && t.timeStamp || ut.now(), void(this[ut.expando] = !0)) : new ut.Event(t, e)
        }, ut.Event.prototype = {
            constructor: ut.Event,
            isDefaultPrevented: y,
            isPropagationStopped: y,
            isImmediatePropagationStopped: y,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = v, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = v, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = v, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ut.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            ut.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        s = t.handleObj;
                    return r && (r === i || ut.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ut.fn.extend({
            on: function (t, e, n, i) {
                return x(this, t, e, n, i)
            },
            one: function (t, e, n, i) {
                return x(this, t, e, n, i, 1)
            },
            off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ut(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = y), this.each(function () {
                    ut.event.remove(this, t, n, e)
                })
            }
        });
        var Vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Ut = /<script|<style|<link/i,
            Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Zt = /^true\/(.*)/,
            Yt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ut.extend({
            htmlPrefilter: function (t) {
                return t.replace(Vt, "<$1></$2>")
            },
            clone: function (t, e, n) {
                var i, r, s, o, a = t.cloneNode(!0),
                    l = ut.contains(t.ownerDocument, t);
                if (!(at.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ut.isXMLDoc(t)))
                    for (o = p(a), s = p(t), i = 0, r = s.length; i < r; i++) E(s[i], o[i]);
                if (e)
                    if (n)
                        for (s = s || p(t), o = o || p(a), i = 0, r = s.length; i < r; i++) T(s[i], o[i]);
                    else T(t, a);
                return o = p(a, "script"), o.length > 0 && g(o, !l && p(t, "script")), a
            },
            cleanData: function (t) {
                for (var e, n, i, r = ut.event.special, s = 0; void 0 !== (n = t[s]); s++)
                    if (At(n)) {
                        if (e = n[Dt.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? ut.event.remove(n, i) : ut.removeEvent(n, i, e.handle);
                            n[Dt.expando] = void 0
                        }
                        n[Nt.expando] && (n[Nt.expando] = void 0)
                    }
            }
        }), ut.fn.extend({
            domManip: k,
            detach: function (t) {
                return S(this, t, !0)
            },
            remove: function (t) {
                return S(this, t)
            },
            text: function (t) {
                return St(this, function (t) {
                    return void 0 === t ? ut.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return k(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = b(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function () {
                return k(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = b(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return k(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return k(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ut.cleanData(p(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return ut.clone(this, t, e)
                })
            },
            html: function (t) {
                return St(this, function (t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Ut.test(t) && !Rt[(Ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ut.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (ut.cleanData(p(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = [];
                return k(this, arguments, function (e) {
                    var n = this.parentNode;
                    ut.inArray(this, t) < 0 && (ut.cleanData(p(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), ut.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            ut.fn[t] = function (t) {
                for (var n, i = [], r = ut(t), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), ut(r[o])[e](n), nt.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Gt, Jt = {
                HTML: "block",
                BODY: "block"
            },
            Qt = /^margin/,
            Kt = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"),
            te = function (t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            },
            ee = function (t, e, n, i) {
                var r, s, o = {};
                for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                r = n.apply(t, i || []);
                for (s in e) t.style[s] = o[s];
                return r
            },
            ne = K.documentElement;
        ! function () {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ne.appendChild(o);
                var t = n.getComputedStyle(a);
                e = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, ne.removeChild(o)
            }
            var e, i, r, s, o = K.createElement("div"),
                a = K.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", at.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), ut.extend(at, {
                pixelPosition: function () {
                    return t(), e
                },
                boxSizingReliable: function () {
                    return null == i && t(), i
                },
                pixelMarginRight: function () {
                    return null == i && t(), r
                },
                reliableMarginLeft: function () {
                    return null == i && t(), s
                },
                reliableMarginRight: function () {
                    var t, e = a.appendChild(K.createElement("div"));
                    return e.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", a.style.width = "1px", ne.appendChild(o), t = !parseFloat(n.getComputedStyle(e).marginRight), ne.removeChild(o), a.removeChild(e), t
                }
            }))
        }();
        var ie = /^(none|table(?!-c[ea]).+)/,
            re = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            se = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            oe = ["Webkit", "O", "Moz", "ms"],
            ae = K.createElement("div").style;
        ut.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = N(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, o, a = ut.camelCase(e),
                        l = t.style;
                    return e = ut.cssProps[a] || (ut.cssProps[a] = $(a) || a), o = ut.cssHooks[e] || ut.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : l[e] : (s = typeof n, "string" === s && (r = Pt.exec(n)) && r[1] && (n = f(t, e, r), s = "number"), null != n && n === n && ("number" === s && (n += r && r[3] || (ut.cssNumber[a] ? "" : "px")), at.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l[e] = n)), void 0)
                }
            },
            css: function (t, e, n, i) {
                var r, s, o, a = ut.camelCase(e);
                return e = ut.cssProps[a] || (ut.cssProps[a] = $(a) || a), o = ut.cssHooks[e] || ut.cssHooks[a], o && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = N(t, e, i)), "normal" === r && e in se && (r = se[e]), "" === n || n ? (s = parseFloat(r), n === !0 || isFinite(s) ? s || 0 : r) : r
            }
        }), ut.each(["height", "width"], function (t, e) {
            ut.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n) return ie.test(ut.css(t, "display")) && 0 === t.offsetWidth ? ee(t, re, function () {
                        return q(t, e, i)
                    }) : q(t, e, i)
                },
                set: function (t, n, i) {
                    var r, s = i && te(t),
                        o = i && P(t, e, i, "border-box" === ut.css(t, "boxSizing", !1, s), s);
                    return o && (r = Pt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ut.css(t, e)), L(t, n, o)
                }
            }
        }), ut.cssHooks.marginLeft = j(at.reliableMarginLeft, function (t, e) {
            if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - ee(t, {
                marginLeft: 0
            }, function () {
                return t.getBoundingClientRect().left
            })) + "px"
        }), ut.cssHooks.marginRight = j(at.reliableMarginRight, function (t, e) {
            if (e) return ee(t, {
                display: "inline-block"
            }, N, [t, "marginRight"])
        }), ut.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            ut.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + qt[i] + e] = s[i] || s[i - 2] || s[0];
                    return r
                }
            }, Qt.test(t) || (ut.cssHooks[t + e].set = L)
        }), ut.fn.extend({
            css: function (t, e) {
                return St(this, function (t, e, n) {
                    var i, r, s = {},
                        o = 0;
                    if (ut.isArray(e)) {
                        for (i = te(t), r = e.length; o < r; o++) s[e[o]] = ut.css(t, e[o], !1, i);
                        return s
                    }
                    return void 0 !== n ? ut.style(t, e, n) : ut.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function () {
                return z(this, !0)
            },
            hide: function () {
                return z(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    zt(this) ? ut(this).show() : ut(this).hide()
                })
            }
        }), ut.Tween = M, M.prototype = {
            constructor: M,
            init: function (t, e, n, i, r, s) {
                this.elem = t, this.prop = n, this.easing = r || ut.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ut.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = M.propHooks[this.prop];
                return t && t.get ? t.get(this) : M.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = M.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ut.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ut.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function (t) {
                    ut.fx.step[t.prop] ? ut.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ut.cssProps[t.prop]] && !ut.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ut.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ut.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, ut.fx = M.prototype.init, ut.fx.step = {};
        var le, ue, ce = /^(?:toggle|show|hide)$/,
            he = /queueHooks$/;
        ut.Animation = ut.extend(W, {
                tweeners: {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e);
                        return f(n.elem, t, Pt.exec(e), n), n
                    }]
                },
                tweener: function (t, e) {
                    ut.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Et);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(e)
                },
                prefilters: [H],
                prefilter: function (t, e) {
                    e ? W.prefilters.unshift(t) : W.prefilters.push(t)
                }
            }), ut.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? ut.extend({}, t) : {
                    complete: n || !n && e || ut.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ut.isFunction(e) && e
                };
                return i.duration = ut.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ut.fx.speeds ? ut.fx.speeds[i.duration] : ut.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    ut.isFunction(i.old) && i.old.call(this), i.queue && ut.dequeue(this, i.queue)
                }, i
            }, ut.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(zt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function (t, e, n, i) {
                    var r = ut.isEmptyObject(t),
                        s = ut.speed(e, n, i),
                        o = function () {
                            var e = W(this, ut.extend({}, t), s);
                            (r || Dt.get(this, "finish")) && e.stop(!0)
                        };
                    return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            s = ut.timers,
                            o = Dt.get(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && he.test(r) && i(o[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                        !e && n || ut.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, n = Dt.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            s = ut.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, ut.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ut.each(["toggle", "show", "hide"], function (t, e) {
                var n = ut.fn[e];
                ut.fn[e] = function (t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(O(e, !0), t, i, r)
                }
            }), ut.each({
                slideDown: O("show"),
                slideUp: O("hide"),
                slideToggle: O("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                ut.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ut.timers = [], ut.fx.tick = function () {
                var t, e = 0,
                    n = ut.timers;
                for (le = ut.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || ut.fx.stop(), le = void 0
            }, ut.fx.timer = function (t) {
                ut.timers.push(t), t() ? ut.fx.start() : ut.timers.pop()
            }, ut.fx.interval = 13, ut.fx.start = function () {
                ue || (ue = n.setInterval(ut.fx.tick, ut.fx.interval))
            }, ut.fx.stop = function () {
                n.clearInterval(ue), ue = null
            }, ut.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ut.fn.delay = function (t, e) {
                return t = ut.fx ? ut.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                    var r = n.setTimeout(e, t);
                    i.stop = function () {
                        n.clearTimeout(r)
                    }
                })
            },
            function () {
                var t = K.createElement("input"),
                    e = K.createElement("select"),
                    n = e.appendChild(K.createElement("option"));
                t.type = "checkbox", at.checkOn = "" !== t.value, at.optSelected = n.selected, e.disabled = !0, at.optDisabled = !n.disabled, t = K.createElement("input"), t.value = "t", t.type = "radio", at.radioValue = "t" === t.value
            }();
        var de, fe = ut.expr.attrHandle;
        ut.fn.extend({
            attr: function (t, e) {
                return St(this, ut.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    ut.removeAttr(this, t)
                })
            }
        }), ut.extend({
            attr: function (t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? ut.prop(t, e, n) : (1 === s && ut.isXMLDoc(t) || (e = e.toLowerCase(), r = ut.attrHooks[e] || (ut.expr.match.bool.test(e) ? de : void 0)), void 0 !== n ? null === n ? void ut.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ut.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!at.radioValue && "radio" === e && ut.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var n, i, r = 0,
                    s = e && e.match(Et);
                if (s && 1 === t.nodeType)
                    for (; n = s[r++];) i = ut.propFix[n] || n, ut.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }
        }), de = {
            set: function (t, e, n) {
                return e === !1 ? ut.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, ut.each(ut.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = fe[e] || ut.find.attr;
            fe[e] = function (t, e, i) {
                var r, s;
                return i || (s = fe[e], fe[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, fe[e] = s), r
            }
        });
        var pe = /^(?:input|select|textarea|button)$/i,
            ge = /^(?:a|area)$/i;
        ut.fn.extend({
            prop: function (t, e) {
                return St(this, ut.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[ut.propFix[t] || t]
                })
            }
        }), ut.extend({
            prop: function (t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ut.isXMLDoc(t) || (e = ut.propFix[e] || e, r = ut.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = ut.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : pe.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), at.optSelected || (ut.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ut.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ut.propFix[this.toLowerCase()] = this
        });
        var me = /[\t\r\n\f]/g;
        ut.fn.extend({
            addClass: function (t) {
                var e, n, i, r, s, o, a, l = 0;
                if (ut.isFunction(t)) return this.each(function (e) {
                    ut(this).addClass(t.call(this, e, B(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Et) || []; n = this[l++];)
                        if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(me, " ")) {
                            for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            a = ut.trim(i), r !== a && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function (t) {
                var e, n, i, r, s, o, a, l = 0;
                if (ut.isFunction(t)) return this.each(function (e) {
                    ut(this).removeClass(t.call(this, e, B(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Et) || []; n = this[l++];)
                        if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(me, " ")) {
                            for (o = 0; s = e[o++];)
                                for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                            a = ut.trim(i), r !== a && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ut.isFunction(t) ? this.each(function (n) {
                    ut(this).toggleClass(t.call(this, n, B(this), e), e)
                }) : this.each(function () {
                    var e, i, r, s;
                    if ("string" === n)
                        for (i = 0, r = ut(this), s = t.match(Et) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = B(this), e && Dt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Dt.get(this, "__className__") || ""))
                })
            },
            hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + B(n) + " ").replace(me, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ve = /\r/g,
            ye = /[\x20\t\r\n\f]+/g;
        ut.fn.extend({
            val: function (t) {
                var e, n, i, r = this[0]; {
                    if (arguments.length) return i = ut.isFunction(t), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, ut(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ut.isArray(r) && (r = ut.map(r, function (t) {
                            return null == t ? "" : t + ""
                        })), e = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return e = ut.valHooks[r.type] || ut.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ve, "") : null == n ? "" : n)
                }
            }
        }), ut.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = ut.find.attr(t, "value");
                        return null != e ? e : ut.trim(ut.text(t)).replace(ye, " ")
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || r < 0, o = s ? null : [], a = s ? r + 1 : i.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
                            if (n = i[l], (n.selected || l === r) && (at.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ut.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ut(n).val(), s) return e;
                                o.push(e)
                            } return o
                    },
                    set: function (t, e) {
                        for (var n, i, r = t.options, s = ut.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = ut.inArray(ut.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), s
                    }
                }
            }
        }), ut.each(["radio", "checkbox"], function () {
            ut.valHooks[this] = {
                set: function (t, e) {
                    if (ut.isArray(e)) return t.checked = ut.inArray(ut(t).val(), e) > -1
                }
            }, at.checkOn || (ut.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var we = /^(?:focusinfocus|focusoutblur)$/;
        ut.extend(ut.event, {
            trigger: function (t, e, i, r) {
                var s, o, a, l, u, c, h, d = [i || K],
                    f = ot.call(t, "type") ? t.type : t,
                    p = ot.call(t, "namespace") ? t.namespace.split(".") : [];
                if (o = a = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !we.test(f + ut.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[ut.expando] ? t : new ut.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : ut.makeArray(e, [t]), h = ut.event.special[f] || {}, r || !h.trigger || h.trigger.apply(i, e) !== !1)) {
                    if (!r && !h.noBubble && !ut.isWindow(i)) {
                        for (l = h.delegateType || f, we.test(l + f) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                        a === (i.ownerDocument || K) && d.push(a.defaultView || a.parentWindow || n)
                    }
                    for (s = 0;
                        (o = d[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? l : h.bindType || f, c = (Dt.get(o, "events") || {})[t.type] && Dt.get(o, "handle"), c && c.apply(o, e), c = u && o[u], c && c.apply && At(o) && (t.result = c.apply(o, e), t.result === !1 && t.preventDefault());
                    return t.type = f, r || t.isDefaultPrevented() || h._default && h._default.apply(d.pop(), e) !== !1 || !At(i) || u && ut.isFunction(i[f]) && !ut.isWindow(i) && (a = i[u], a && (i[u] = null), ut.event.triggered = f, i[f](), ut.event.triggered = void 0, a && (i[u] = a)), t.result
                }
            },
            simulate: function (t, e, n) {
                var i = ut.extend(new ut.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                ut.event.trigger(i, null, e)
            }
        }), ut.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    ut.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return ut.event.trigger(t, e, n, !0)
            }
        }), ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            ut.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ut.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), at.focusin = "onfocusin" in n, at.focusin || ut.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var n = function (t) {
                ut.event.simulate(e, t.target, ut.event.fix(t))
            };
            ut.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        r = Dt.access(i, e);
                    r || i.addEventListener(t, n, !0), Dt.access(i, e, (r || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        r = Dt.access(i, e) - 1;
                    r ? Dt.access(i, e, r) : (i.removeEventListener(t, n, !0), Dt.remove(i, e))
                }
            }
        });
        var xe = n.location,
            be = ut.now(),
            _e = /\?/;
        ut.parseJSON = function (t) {
            return JSON.parse(t + "")
        }, ut.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + t), e
        };
        var Ce = /#.*$/,
            Te = /([?&])_=[^&]*/,
            Ee = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ke = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Se = /^(?:GET|HEAD)$/,
            Ae = /^\/\//,
            De = {},
            Ne = {},
            je = "*/".concat("*"),
            $e = K.createElement("a");
        $e.href = xe.href, ut.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe.href,
                type: "GET",
                isLocal: ke.test(xe.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": je,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ut.parseJSON,
                    "text xml": ut.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? X(X(t, ut.ajaxSettings), e) : X(ut.ajaxSettings, t)
            },
            ajaxPrefilter: V(De),
            ajaxTransport: V(Ne),
            ajax: function (t, e) {
                function i(t, e, i, a) {
                    var u, h, y, w, b, C = e;
                    2 !== x && (x = 2, l && n.clearTimeout(l), r = void 0, o = a || "", _.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = Z(d, _, i)), w = Y(d, w, _, u), u ? (d.ifModified && (b = _.getResponseHeader("Last-Modified"), b && (ut.lastModified[s] = b), b = _.getResponseHeader("etag"), b && (ut.etag[s] = b)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, h = w.data, y = w.error, u = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || C) + "", u ? g.resolveWith(f, [h, C, _]) : g.rejectWith(f, [_, C, y]), _.statusCode(v), v = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [_, d, u ? h : y]), m.fireWith(f, [_, C]), c && (p.trigger("ajaxComplete", [_, d]), --ut.active || ut.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, s, o, a, l, u, c, h, d = ut.ajaxSetup({}, e),
                    f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery) ? ut(f) : ut.event,
                    g = ut.Deferred(),
                    m = ut.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    w = {},
                    x = 0,
                    b = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; e = Ee.exec(o);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === x ? o : null
                        },
                        setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return x || (t = w[n] = w[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return x || (d.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (x < 2)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else _.always(t[_.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || b;
                            return r && r.abort(e), i(0, e), this
                        }
                    };
                if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((t || d.url || xe.href) + "").replace(Ce, "").replace(Ae, xe.protocol + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = ut.trim(d.dataType || "*").toLowerCase().match(Et) || [""], null == d.crossDomain) {
                    u = K.createElement("a");
                    try {
                        u.href = d.url, u.href = u.href, d.crossDomain = $e.protocol + "//" + $e.host != u.protocol + "//" + u.host
                    } catch (t) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = ut.param(d.data, d.traditional)), U(De, d, e, _), 2 === x) return _;
                c = ut.event && d.global, c && 0 === ut.active++ && ut.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Se.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (_e.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Te.test(s) ? s.replace(Te, "$1_=" + be++) : s + (_e.test(s) ? "&" : "?") + "_=" + be++)), d.ifModified && (ut.lastModified[s] && _.setRequestHeader("If-Modified-Since", ut.lastModified[s]), ut.etag[s] && _.setRequestHeader("If-None-Match", ut.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + je + "; q=0.01" : "") : d.accepts["*"]);
                for (h in d.headers) _.setRequestHeader(h, d.headers[h]);
                if (d.beforeSend && (d.beforeSend.call(f, _, d) === !1 || 2 === x)) return _.abort();
                b = "abort";
                for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[h](d[h]);
                if (r = U(Ne, d, e, _)) {
                    if (_.readyState = 1, c && p.trigger("ajaxSend", [_, d]), 2 === x) return _;
                    d.async && d.timeout > 0 && (l = n.setTimeout(function () {
                        _.abort("timeout")
                    }, d.timeout));
                    try {
                        x = 1, r.send(y, i)
                    } catch (t) {
                        if (!(x < 2)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function (t, e, n) {
                return ut.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return ut.get(t, void 0, e, "script")
            }
        }), ut.each(["get", "post"], function (t, e) {
            ut[e] = function (t, n, i, r) {
                return ut.isFunction(n) && (r = r || i, i = n, n = void 0), ut.ajax(ut.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, ut.isPlainObject(t) && t))
            }
        }), ut._evalUrl = function (t) {
            return ut.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, ut.fn.extend({
            wrapAll: function (t) {
                var e;
                return ut.isFunction(t) ? this.each(function (e) {
                    ut(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = ut(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function (t) {
                return ut.isFunction(t) ? this.each(function (e) {
                    ut(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = ut(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = ut.isFunction(t);
                return this.each(function (n) {
                    ut(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ut.expr.filters.hidden = function (t) {
            return !ut.expr.filters.visible(t)
        }, ut.expr.filters.visible = function (t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var Le = /%20/g,
            Pe = /\[\]$/,
            qe = /\r?\n/g,
            ze = /^(?:submit|button|image|reset|file)$/i,
            Me = /^(?:input|select|textarea|keygen)/i;
        ut.param = function (t, e) {
            var n, i = [],
                r = function (t, e) {
                    e = ut.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(t) || t.jquery && !ut.isPlainObject(t)) ut.each(t, function () {
                r(this.name, this.value)
            });
            else
                for (n in t) G(n, t[n], e, r);
            return i.join("&").replace(Le, "+")
        }, ut.fn.extend({
            serialize: function () {
                return ut.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = ut.prop(this, "elements");
                    return t ? ut.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !ut(this).is(":disabled") && Me.test(this.nodeName) && !ze.test(t) && (this.checked || !Mt.test(t))
                }).map(function (t, e) {
                    var n = ut(this).val();
                    return null == n ? null : ut.isArray(n) ? ut.map(n, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(qe, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(qe, "\r\n")
                    }
                }).get()
            }
        }), ut.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var Fe = {
                0: 200,
                1223: 204
            },
            Oe = ut.ajaxSettings.xhr();
        at.cors = !!Oe && "withCredentials" in Oe, at.ajax = Oe = !!Oe, ut.ajaxTransport(function (t) {
            var e, i;
            if (at.cors || Oe && !t.crossDomain) return {
                send: function (r, s) {
                    var o, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) a.setRequestHeader(o, r[o]);
                    e = function (t) {
                        return function () {
                            e && (e = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), i = a.onerror = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && n.setTimeout(function () {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function () {
                    e && e()
                }
            }
        }), ut.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return ut.globalEval(t), t
                }
            }
        }), ut.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ut.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (i, r) {
                        e = ut("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), K.head.appendChild(e[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Re = [],
            He = /(=)\?(?=&|$)|\?\?/;
        ut.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Re.pop() || ut.expando + "_" + be++;
                return this[t] = !0, t
            }
        }), ut.ajaxPrefilter("json jsonp", function (t, e, i) {
            var r, s, o, a = t.jsonp !== !1 && (He.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && He.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = ut.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(He, "$1" + r) : t.jsonp !== !1 && (t.url += (_e.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return o || ut.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", s = n[r], n[r] = function () {
                o = arguments
            }, i.always(function () {
                void 0 === s ? ut(n).removeProp(r) : n[r] = s, t[r] && (t.jsonpCallback = e.jsonpCallback, Re.push(r)), o && ut.isFunction(s) && s(o[0]), o = s = void 0
            }), "script"
        }), ut.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || K;
            var i = yt.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = m([t], e, r), r && r.length && ut(r).remove(), ut.merge([], i.childNodes))
        };
        var Ie = ut.fn.load;
        ut.fn.load = function (t, e, n) {
            if ("string" != typeof t && Ie) return Ie.apply(this, arguments);
            var i, r, s, o = this,
                a = t.indexOf(" ");
            return a > -1 && (i = ut.trim(t.slice(a)), t = t.slice(0, a)), ut.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && ut.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                s = arguments, o.html(i ? ut("<div>").append(ut.parseHTML(t)).find(i) : t)
            }).always(n && function (t, e) {
                o.each(function () {
                    n.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            ut.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), ut.expr.filters.animated = function (t) {
            return ut.grep(ut.timers, function (e) {
                return t === e.elem
            }).length
        }, ut.offset = {
            setOffset: function (t, e, n) {
                var i, r, s, o, a, l, u, c = ut.css(t, "position"),
                    h = ut(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = h.offset(), s = ut.css(t, "top"), l = ut.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (i = h.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), ut.isFunction(e) && (e = e.call(t, n, ut.extend({}, a))), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
            }
        }, ut.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    ut.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    s = i && i.ownerDocument;
                if (s) return e = s.documentElement, ut.contains(e, i) ? (r = i.getBoundingClientRect(), n = J(s), {
                    top: r.top + n.pageYOffset - e.clientTop,
                    left: r.left + n.pageXOffset - e.clientLeft
                }) : r
            },
            position: function () {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ut.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ut.nodeName(t[0], "html") || (i = t.offset()), i.top += ut.css(t[0], "borderTopWidth", !0), i.left += ut.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - ut.css(n, "marginTop", !0),
                        left: e.left - i.left - ut.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === ut.css(t, "position");) t = t.offsetParent;
                    return t || ne
                })
            }
        }), ut.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var n = "pageYOffset" === e;
            ut.fn[t] = function (i) {
                return St(this, function (t, i, r) {
                    var s = J(t);
                    return void 0 === r ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r)
                }, t, i, arguments.length)
            }
        }), ut.each(["top", "left"], function (t, e) {
            ut.cssHooks[e] = j(at.pixelPosition, function (t, n) {
                if (n) return n = N(t, e), Kt.test(n) ? ut(t).position()[e] + "px" : n
            })
        }), ut.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            ut.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (n, i) {
                ut.fn[i] = function (i, r) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                        o = n || (i === !0 || r === !0 ? "margin" : "border");
                    return St(this, function (e, n, i) {
                        var r;
                        return ut.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ut.css(e, n, o) : ut.style(e, n, i, o)
                    }, e, s ? i : void 0, s, null)
                }
            })
        }), ut.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            size: function () {
                return this.length
            }
        }), ut.fn.andSelf = ut.fn.addBack, i = [], r = function () {
            return ut
        }.apply(e, i), !(void 0 !== r && (t.exports = r));
        var We = n.jQuery,
            Be = n.$;
        return ut.noConflict = function (t) {
            return n.$ === ut && (n.$ = Be), t && n.jQuery === ut && (n.jQuery = We), ut
        }, s || (n.jQuery = n.$ = ut), ut
    })
}, function (t, e, n) {
    (function (t) {
        "use strict";
        t(document).ready(function () {
            t("#top").click(function () {
                return t("html, body").animate({
                    scrollTop: 0
                }, "slow"), !1
            })
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        n(24), t(document).ready(function () {
            t(".hero-carousel.owl-carousel").owlCarousel({
                loop: !0,
                items: 1,
                mouseDrag: !1,
                touchDrag: !1,
                nav: !1,
                dots: !0,
                autoplay: !0,
                autoplayTimeout: 5800,
                onChange: function (e) {
                    setTimeout(function () {
                        t(e.currentTarget).find("video").each(function (t, e) {
                            e.pause(), e.currentTime = 0
                        })
                    }, 0), setTimeout(function () {
                        t(e.currentTarget).find(".owl-item.active video").each(function (t, e) {
                            e.play()
                        })
                    }, 0)
                },
                onInitialized: function (e) {
                    setTimeout(function () {
                        var n = t(e.target).find(".owl-stage");
                        n.addClass("ease-transition")
                    }, 3500)
                }
            });
            t(".services-block-carousel.owl-carousel").owlCarousel({
                loop: !0,
                items: 1,
                mouseDrag: !0,
                nav: !1,
                dots: !0,
                autoplay: !0,
                autoplayTimeout: 5e3
            }), t(".story-block-carousel.owl-carousel").owlCarousel({
                loop: !0,
                items: 1,
                mouseDrag: !0,
                nav: !1,
                dots: !0,
                autoplay: !0,
                autoplayTimeout: 5e3
            })
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        n(23), t(document).ready(function () {
            t("#contactForm").validate({
                success: function (t) {
                    t.parent().addClass("success"), t.remove()
                },
                highlight: function (e, n) {
                    t(e).parent().removeClass("success"), t(e).addClass(n)
                },
                errorElement: "span",
                rules: {
                    subject: "required",
                    fullName: "required",
                    number: {
                        required: !0,
                        number: !0
                    },
                    email: {
                        required: !0,
                        email: !0
                    },
                    company: "required",
                    message: "required"
                },
                messages: {
                    subject: "Please enter the subject of your message",
                    fullName: "Please enter your full name",
                    number: {
                        required: "Please enter your telephone number",
                        number: "You must enter a number"
                    },
                    email: {
                        required: "Please enter your email address",
                        email: "You must enter a valid email address"
                    },
                    company: "Please enter your company name",
                    message: "Please enter your message"
                }
            })
        }, 0)
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        t(document).ready(function () {
            t(".filter-list li").click(function (e) {
                t(this).find(".news-filter-type").slideToggle(), t(this).find(".category-filter-type").slideToggle()
            })
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        t(document).ready(function () {
            function e() {
                var e = t(window).scrollTop();
                Math.abs(i - e) <= r || (e > i && e > s ? t("header").removeClass("nav-down").addClass("nav-up") : e + t(window).height() < t(document).height() && t("header").removeClass("nav-up").addClass("nav-down"), i = e)
            }
            var n, i = 0,
                r = 5,
                s = t("header").outerHeight();
            t(window).scroll(function (t) {
                n = !0
            }), setInterval(function () {
                n && (e(), n = !1)
            }, 250)
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var i = n(16),
            r = e(i),
            s = n(21),
            o = e(s);
        t(document).ready(function () {
            function e(e) {
                e.done || (t(e).addClass("fadeInUp"), e.done = !0)
            }

            function n(e) {
                var n = t(e).find(".workflow-pagination li");
                t(n.get(0)).trigger("click", ["true"]);
                var r = 1;
                a = setInterval(function () {
                    t(n.get(r)).trigger("click", ["true"]), r = r + 1 < n.length ? r + 1 : 0
                }, 11e3), t(e).click(i)
            }

            function i() {
                clearInterval(a)
            }

            function s(t) {
                if (!t.done) {
                    var e = {
                            start: 0,
                            end: t.innerHTML,
                            duration: 5e3,
                            selector: t,
                            done: function () {}
                        },
                        n = new r.default(e);
                    n.run(), t.done = !0
                }
            }(0, o.default)(".inview").on("enter", e), (0, o.default)(".inview-autoplay").on("enter", n).on("exit", i);
            var a;
            o.default.offset(100), (0, o.default)(".counter").on("enter", s);
            var l = /(\d+|[^\d]+)/g;
            (0, o.default)(".inview-boxcount").on("enter", function (e) {
                if (!e.done) {
                    var n = (Math.random(), ""),
                        i = t(e).text().match(l);
                    t(i).each(function (e, i) {
                        var r = "<big class='" + (t.isNumeric(i) ? "numeric" : "") + "'>" + i + "</big>";
                        n += r
                    }), t(e).html(n), t(e).children(".numeric").each(function (t, e) {
                        s(e)
                    }), e.done = !0
                }
            })
        })
    }).call(e, n(1))
}, function (t, e, n) {
    "use strict";
    n(4), n(3), n(7), n(14), n(10), n(15), n(5), n(2), n(12), n(13), n(6), n(11), n(9), n(17), n(20), n(19), n(18)
}, function (t, e, n) {
    (function (t) {
        "use strict";

        function e(e) {
            e.preventDefault(), t("#contact-modal").toggleClass("open")
        }
        t(document).ready(function () {
            t("*[data-modal-toggle]").click(e)
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        t(document).ready(function () {
            t(".nav-trigger").click(function () {
                t(".nav-overlay").fadeIn(200), t(this).fadeOut(200).addClass("active")
            }), t(".close-menu").click(function () {
                t(".nav-overlay").fadeOut(300), t(".nav-trigger").fadeIn(300).removeClass("active")
            })
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        t(document).ready(function () {
            t(".preloader").fadeIn(200, function () {
                setTimeout(function () {
                    t(".preloader").fadeOut(400), t(".preload-content").show()
                }, 2e3)
            })
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        t(document).ready(function () {
            t(".staff-pro").click(function () {
                t(this).hasClass("active") || (t(".staff-pro").removeClass("active").find(".staff-bio").slideUp(), t(this).addClass("active"), t(this).find(".staff-bio").slideDown())
            })
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        t(document).ready(function () {
            t(".share").click(function () {
                return t(".share-items").slideToggle(), t(this).toggleClass("active"), !1
            })
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        var e = t(document);
        e.on("scroll", function (n) {
            var i = t(".signpost"),
                r = void 0;
            r = t(".page-home").length >= 1 ? t(".hero").first().height() / 2 - i.width() : t(".hero-half").first().height() - parseInt(i.css("top"), 10) - i.width(), e.scrollTop() > r ? i.addClass("body") : i.removeClass("body")
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (t) {
        "use strict";
        n(22), t(document).ready(function () {
            t(".workflow").not(".non-sequential").each(function (e, n) {
                var i = t(n),
                    r = i.find(".workflow-pagination li"),
                    s = i.find(".section-intro"),
                    o = i.find(".text"),
                    a = i.find(".workflow-icon"),
                    l = 1 / r.length;
                i.find(".circle").circleProgress({
                    value: l,
                    size: 724,
                    thickness: 30,
                    startAngle: -Math.PI / 2,
                    fill: "#029BE5",
                    emptyFill: "#f2f2f2"
                }), i.find(".workflow-pagination li").click(function (e, n) {
                    n && e.stopPropagation();
                    var u = t(e.currentTarget);
                    r.removeClass("active"), s.removeClass("active"), a.removeClass("active"), o.removeClass("active");
                    var c = r.index(u);
                    u.addClass("active"), t(s.get(c)).addClass("active"), t(a.get(c)).addClass("active"), t(o.get(c)).addClass("active"), i.find(".circle").circleProgress("value", l * (c + 1))
                })
            }), t(".workflow.non-sequential").each(function (e, n) {
                var i = t(n),
                    r = i.find(".workflow-pagination li"),
                    s = i.find(".section-intro"),
                    o = i.find(".text"),
                    a = i.find(".workflow-icon"),
                    l = 1 / r.length,
                    u = -Math.PI / 2;
                i.find(".circle").circleProgress({
                    value: l,
                    size: 724,
                    thickness: 30,
                    startAngle: u,
                    fill: "#029BE5",
                    emptyFill: "#f2f2f2"
                }), i.find(".workflow-pagination li").click(function (e, n) {
                    n && e.stopPropagation();
                    var c = t(e.currentTarget);
                    r.removeClass("active"), s.removeClass("active"), a.removeClass("active"), o.removeClass("active");
                    var h = r.index(c);
                    c.addClass("active"), t(s.get(h)).addClass("active"), t(a.get(h)).addClass("active"), t(o.get(h)).addClass("active");
                    var d = u;
                    if (l > 0) {
                        var f = l * h + 1,
                            p = 360 * f,
                            g = p * Math.PI / 180;
                        d = g + u
                    }
                    i.find(".circle").circleProgress({
                        startAngle: d
                    }), i.find(".circle").circleProgress("redraw")
                })
            })
        })
    }).call(e, n(1))
}, function (t, e, n) {
    var i, i;
    ! function (e) {
        t.exports = e()
    }(function () {
        return function t(e, n, r) {
            function s(a, l) {
                if (!n[a]) {
                    if (!e[a]) {
                        var u = "function" == typeof i && i;
                        if (!l && u) return i(a, !0);
                        if (o) return o(a, !0);
                        var c = new Error("Cannot find module '" + a + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var h = n[a] = {
                        exports: {}
                    };
                    e[a][0].call(h.exports, function (t) {
                        var n = e[a][1][t];
                        return s(n ? n : t)
                    }, h, h.exports, t, e, n, r)
                }
                return n[a].exports
            }
            for (var o = "function" == typeof i && i, a = 0; a < r.length; a++) s(r[a]);
            return s
        }({
            1: [function (t, e, n) {
                "use strict";

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var r = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    s = function () {
                        function t(e) {
                            i(this, t), this.start = e.start, this.end = e.end, this.selector = e.selector, this.done = e.done, this.duration = e.duration || 2e3
                        }
                        return r(t, [{
                            key: "run",
                            value: function () {
                                parseInt(this.selector.textContent) !== this.end && requestAnimationFrame(this._tick.bind(this))
                            }
                        }, {
                            key: "_tick",
                            value: function (t) {
                                var e = this;
                                e.timeStart || (e.timeStart = t), e.timeElapsed = t - e.timeStart;
                                var n = e._ease(e.timeElapsed, e.start, e.end - e.start, e.duration);
                                if (e.selector.textContent = Math.round(n), this.end < this.start) {
                                    if (n > e.end) return requestAnimationFrame(e._tick.bind(e))
                                } else if (n < e.end) return requestAnimationFrame(e._tick.bind(e));
                                return e.done()
                            }
                        }, {
                            key: "_ease",
                            value: function (t, e, n, i) {
                                return n * (-Math.pow(2, -10 * t / i) + 1) * 1024 / 1023 + e
                            }
                        }]), t
                    }();
                n.default = s, e.exports = n.default
            }, {}]
        }, {}, [1])(1)
    })
}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e) {}, function (t, e, n) {
    /*!
     * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
     * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
     * License: MIT
     */
    ! function (e, n) {
        t.exports = n()
    }(this, function () {
        return function (t) {
            function e(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function (t, e, n) {
            "use strict";

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var r = n(2),
                s = i(r);
            t.exports = s.default
        }, function (t, e) {
            function n(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
            t.exports = n
        }, function (t, e, n) {
            "use strict";

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(9),
                s = i(r),
                o = n(3),
                a = i(o),
                l = n(4),
                u = function () {
                    if ("undefined" != typeof window) {
                        var t = 100,
                            e = ["scroll", "resize", "load"],
                            n = {
                                history: []
                            },
                            i = {
                                offset: {},
                                threshold: 0,
                                test: l.inViewport
                            },
                            r = (0, s.default)(function () {
                                n.history.forEach(function (t) {
                                    n[t].check()
                                })
                            }, t);
                        e.forEach(function (t) {
                            return addEventListener(t, r)
                        }), window.MutationObserver && addEventListener("DOMContentLoaded", function () {
                            new MutationObserver(r).observe(document.body, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            })
                        });
                        var o = function (t) {
                            if ("string" == typeof t) {
                                var e = [].slice.call(document.querySelectorAll(t));
                                return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, a.default)(e, i), n.history.push(t)), n[t]
                            }
                        };
                        return o.offset = function (t) {
                            if (void 0 === t) return i.offset;
                            var e = function (t) {
                                return "number" == typeof t
                            };
                            return ["top", "right", "bottom", "left"].forEach(e(t) ? function (e) {
                                return i.offset[e] = t
                            } : function (n) {
                                return e(t[n]) ? i.offset[n] = t[n] : null
                            }), i.offset
                        }, o.threshold = function (t) {
                            return "number" == typeof t && t >= 0 && t <= 1 ? i.threshold = t : i.threshold
                        }, o.test = function (t) {
                            return "function" == typeof t ? i.test = t : i.test
                        }, o.is = function (t) {
                            return i.test(t, i)
                        }, o.offset(0), o
                    }
                };
            e.default = u()
        }, function (t, e) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function (e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                r = function () {
                    function t(e, i) {
                        n(this, t), this.options = i, this.elements = e, this.current = [], this.handlers = {
                            enter: [],
                            exit: []
                        }, this.singles = {
                            enter: [],
                            exit: []
                        }
                    }
                    return i(t, [{
                        key: "check",
                        value: function () {
                            var t = this;
                            return this.elements.forEach(function (e) {
                                var n = t.options.test(e, t.options),
                                    i = t.current.indexOf(e),
                                    r = i > -1,
                                    s = n && !r,
                                    o = !n && r;
                                s && (t.current.push(e), t.emit("enter", e)), o && (t.current.splice(i, 1), t.emit("exit", e))
                            }), this
                        }
                    }, {
                        key: "on",
                        value: function (t, e) {
                            return this.handlers[t].push(e), this
                        }
                    }, {
                        key: "once",
                        value: function (t, e) {
                            return this.singles[t].unshift(e), this
                        }
                    }, {
                        key: "emit",
                        value: function (t, e) {
                            for (; this.singles[t].length;) this.singles[t].pop()(e);
                            for (var n = this.handlers[t].length; --n > -1;) this.handlers[t][n](e);
                            return this
                        }
                    }]), t
                }();
            e.default = function (t, e) {
                return new r(t, e)
            }
        }, function (t, e) {
            "use strict";

            function n(t, e) {
                var n = t.getBoundingClientRect(),
                    i = n.top,
                    r = n.right,
                    s = n.bottom,
                    o = n.left,
                    a = n.width,
                    l = n.height,
                    u = {
                        t: s,
                        r: window.innerWidth - o,
                        b: window.innerHeight - i,
                        l: r
                    },
                    c = {
                        x: e.threshold * a,
                        y: e.threshold * l
                    };
                return u.t > e.offset.top + c.y && u.r > e.offset.right + c.x && u.b > e.offset.bottom + c.y && u.l > e.offset.left + c.x
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.inViewport = n
        }, function (t, e) {
            (function (e) {
                var n = "object" == typeof e && e && e.Object === Object && e;
                t.exports = n
            }).call(e, function () {
                return this
            }())
        }, function (t, e, n) {
            var i = n(5),
                r = "object" == typeof self && self && self.Object === Object && self,
                s = i || r || Function("return this")();
            t.exports = s
        }, function (t, e, n) {
            function i(t, e, n) {
                function i(e) {
                    var n = y,
                        i = w;
                    return y = w = void 0, T = e, b = t.apply(i, n)
                }

                function c(t) {
                    return T = t, _ = setTimeout(f, e), E ? i(t) : b
                }

                function h(t) {
                    var n = t - C,
                        i = t - T,
                        r = e - n;
                    return k ? u(r, x - i) : r
                }

                function d(t) {
                    var n = t - C,
                        i = t - T;
                    return void 0 === C || n >= e || n < 0 || k && i >= x
                }

                function f() {
                    var t = s();
                    return d(t) ? p(t) : void(_ = setTimeout(f, h(t)))
                }

                function p(t) {
                    return _ = void 0, S && y ? i(t) : (y = w = void 0, b)
                }

                function g() {
                    void 0 !== _ && clearTimeout(_), T = 0, y = C = w = _ = void 0
                }

                function m() {
                    return void 0 === _ ? b : p(s())
                }

                function v() {
                    var t = s(),
                        n = d(t);
                    if (y = arguments, w = this, C = t, n) {
                        if (void 0 === _) return c(C);
                        if (k) return _ = setTimeout(f, e), i(C)
                    }
                    return void 0 === _ && (_ = setTimeout(f, e)), b
                }
                var y, w, x, b, _, C, T = 0,
                    E = !1,
                    k = !1,
                    S = !0;
                if ("function" != typeof t) throw new TypeError(a);
                return e = o(e) || 0, r(n) && (E = !!n.leading, k = "maxWait" in n, x = k ? l(o(n.maxWait) || 0, e) : x, S = "trailing" in n ? !!n.trailing : S), v.cancel = g, v.flush = m, v
            }
            var r = n(1),
                s = n(8),
                o = n(10),
                a = "Expected a function",
                l = Math.max,
                u = Math.min;
            t.exports = i
        }, function (t, e, n) {
            var i = n(6),
                r = function () {
                    return i.Date.now()
                };
            t.exports = r
        }, function (t, e, n) {
            function i(t, e, n) {
                var i = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError(o);
                return s(n) && (i = "leading" in n ? !!n.leading : i, a = "trailing" in n ? !!n.trailing : a), r(t, e, {
                    leading: i,
                    maxWait: e,
                    trailing: a
                })
            }
            var r = n(7),
                s = n(1),
                o = "Expected a function";
            t.exports = i
        }, function (t, e) {
            function n(t) {
                return t
            }
            t.exports = n
        }])
    })
}, function (t, e, n) {
    var i, r, s;
    /**
     * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
     * {@link http://kottenator.github.io/jquery-circle-progress/}
     *
     * @author Rostyslav Bryzgunov <kottenator@gmail.com>
     * @version 1.2.2
     * @licence MIT
     * @preserve
     */
    ! function (o) {
        r = [n(1)], i = o, s = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== s && (t.exports = s))
    }(function (t) {
        function e(t) {
            this.init(t)
        }
        e.prototype = {
            value: 0,
            size: 100,
            startAngle: -Math.PI,
            thickness: "auto",
            fill: {
                gradient: ["#3aeabb", "#fdd250"]
            },
            emptyFill: "rgba(0, 0, 0, .1)",
            animation: {
                duration: 1200,
                easing: "circleProgressEasing"
            },
            animationStartValue: 0,
            reverse: !1,
            lineCap: "butt",
            insertMode: "prepend",
            constructor: e,
            el: null,
            canvas: null,
            ctx: null,
            radius: 0,
            arcFill: null,
            lastFrameValue: 0,
            init: function (e) {
                t.extend(this, e), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited")
            },
            initWidget: function () {
                this.canvas || (this.canvas = t("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
                var e = this.canvas;
                if (e.width = this.size, e.height = this.size, this.ctx = e.getContext("2d"), window.devicePixelRatio > 1) {
                    var n = window.devicePixelRatio;
                    e.style.width = e.style.height = this.size + "px", e.width = e.height = this.size * n, this.ctx.scale(n, n)
                }
            },
            initFill: function () {
                function e() {
                    var e = t("<canvas>")[0];
                    e.width = n.size, e.height = n.size, e.getContext("2d").drawImage(f, 0, 0, s, s), n.arcFill = n.ctx.createPattern(e, "no-repeat"), n.drawFrame(n.lastFrameValue)
                }
                var n = this,
                    i = this.fill,
                    r = this.ctx,
                    s = this.size;
                if (!i) throw Error("The fill is not specified!");
                if ("string" == typeof i && (i = {
                        color: i
                    }), i.color && (this.arcFill = i.color), i.gradient) {
                    var o = i.gradient;
                    if (1 == o.length) this.arcFill = o[0];
                    else if (o.length > 1) {
                        for (var a = i.gradientAngle || 0, l = i.gradientDirection || [s / 2 * (1 - Math.cos(a)), s / 2 * (1 + Math.sin(a)), s / 2 * (1 + Math.cos(a)), s / 2 * (1 - Math.sin(a))], u = r.createLinearGradient.apply(r, l), c = 0; c < o.length; c++) {
                            var h = o[c],
                                d = c / (o.length - 1);
                            t.isArray(h) && (d = h[1], h = h[0]), u.addColorStop(d, h)
                        }
                        this.arcFill = u
                    }
                }
                if (i.image) {
                    var f;
                    i.image instanceof Image ? f = i.image : (f = new Image, f.src = i.image), f.complete ? e() : f.onload = e
                }
            },
            draw: function () {
                this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
            },
            drawFrame: function (t) {
                this.lastFrameValue = t, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(t), this.drawArc(t)
            },
            drawArc: function (t) {
                if (0 !== t) {
                    var e = this.ctx,
                        n = this.radius,
                        i = this.getThickness(),
                        r = this.startAngle;
                    e.save(), e.beginPath(), this.reverse ? e.arc(n, n, n - i / 2, r - 2 * Math.PI * t, r) : e.arc(n, n, n - i / 2, r, r + 2 * Math.PI * t), e.lineWidth = i, e.lineCap = this.lineCap, e.strokeStyle = this.arcFill, e.stroke(), e.restore()
                }
            },
            drawEmptyArc: function (t) {
                var e = this.ctx,
                    n = this.radius,
                    i = this.getThickness(),
                    r = this.startAngle;
                t < 1 && (e.save(), e.beginPath(), t <= 0 ? e.arc(n, n, n - i / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(n, n, n - i / 2, r, r - 2 * Math.PI * t) : e.arc(n, n, n - i / 2, r + 2 * Math.PI * t, r), e.lineWidth = i, e.strokeStyle = this.emptyFill, e.stroke(), e.restore())
            },
            drawAnimated: function (e) {
                var n = this,
                    i = this.el,
                    r = t(this.canvas);
                r.stop(!0, !1), i.trigger("circle-animation-start"), r.css({
                    animationProgress: 0
                }).animate({
                    animationProgress: 1
                }, t.extend({}, this.animation, {
                    step: function (t) {
                        var r = n.animationStartValue * (1 - t) + e * t;
                        n.drawFrame(r), i.trigger("circle-animation-progress", [t, r])
                    }
                })).promise().always(function () {
                    i.trigger("circle-animation-end")
                })
            },
            getThickness: function () {
                return t.isNumeric(this.thickness) ? this.thickness : this.size / 14
            },
            getValue: function () {
                return this.value
            },
            setValue: function (t) {
                this.animation && (this.animationStartValue = this.lastFrameValue), this.value = t, this.draw()
            }
        }, t.circleProgress = {
            defaults: e.prototype
        }, t.easing.circleProgressEasing = function (t) {
            return t < .5 ? (t *= 2, .5 * t * t * t) : (t = 2 - 2 * t, 1 - .5 * t * t * t)
        }, t.fn.circleProgress = function (n, i) {
            var r = "circle-progress",
                s = this.data(r);
            if ("widget" == n) {
                if (!s) throw Error('Calling "widget" method on not initialized instance is forbidden');
                return s.canvas
            }
            if ("value" == n) {
                if (!s) throw Error('Calling "value" method on not initialized instance is forbidden');
                if ("undefined" == typeof i) return s.getValue();
                var o = arguments[1];
                return this.each(function () {
                    t(this).data(r).setValue(o)
                })
            }
            return this.each(function () {
                var i = t(this),
                    s = i.data(r),
                    o = t.isPlainObject(n) ? n : {};
                if (s) s.init(o);
                else {
                    var a = t.extend({}, i.data());
                    "string" == typeof a.fill && (a.fill = JSON.parse(a.fill)), "string" == typeof a.animation && (a.animation = JSON.parse(a.animation)), o = t.extend(a, o), o.el = i, s = new e(o), i.data(r, s)
                }
            })
        }
    })
}, function (t, e, n) {
    var i, r, s;
    /*!
     * jQuery Validation Plugin v1.19.2
     *
     * https://jqueryvalidation.org/
     *
     * Copyright (c) 2020 Jörn Zaefferer
     * Released under the MIT license
     */
    ! function (o) {
        r = [n(1)], i = o, s = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== s && (t.exports = s))
    }(function (t) {
        t.extend(t.fn, {
            validate: function (e) {
                if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var n = t.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
                    n.submitButton = e.currentTarget, t(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.on("submit.validate", function (e) {
                    function i() {
                        var i, r;
                        return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), !(n.settings.submitHandler && !n.settings.debug) || (r = n.settings.submitHandler.call(n, n.currentForm, e), i && i.remove(), void 0 !== r && r)
                    }
                    return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function () {
                var e, n, i;
                return t(this[0]).is("form") ? e = this.validate().form() : (i = [], e = !0, n = t(this[0].form).validate(), this.each(function () {
                    e = n.element(this) && e, e || (i = i.concat(n.errorList))
                }), n.errorList = i), e
            },
            rules: function (e, n) {
                var i, r, s, o, a, l, u = this[0],
                    c = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
                if (null != u && (!u.form && c && (u.form = this.closest("form")[0], u.name = this.attr("name")), null != u.form)) {
                    if (e) switch (i = t.data(u.form, "validator").settings, r = i.rules, s = t.validator.staticRules(u), e) {
                        case "add":
                            t.extend(s, t.validator.normalizeRule(n)), delete s.messages, r[u.name] = s, n.messages && (i.messages[u.name] = t.extend(i.messages[u.name], n.messages));
                            break;
                        case "remove":
                            return n ? (l = {}, t.each(n.split(/\s/), function (t, e) {
                                l[e] = s[e], delete s[e]
                            }), l) : (delete r[u.name], s)
                    }
                    return o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(u), t.validator.attributeRules(u), t.validator.dataRules(u), t.validator.staticRules(u)), u), o.required && (a = o.required, delete o.required, o = t.extend({
                        required: a
                    }, o)), o.remote && (a = o.remote, delete o.remote, o = t.extend(o, {
                        remote: a
                    })), o
                }
            }
        });
        var e = function (t) {
            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        };
        t.extend(t.expr.pseudos || t.expr[":"], {
            blank: function (n) {
                return !e("" + t(n).val())
            },
            filled: function (n) {
                var i = t(n).val();
                return null !== i && !!e("" + i)
            },
            unchecked: function (e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function (e, n) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
        }, t.validator.format = function (e, n) {
            return 1 === arguments.length ? function () {
                var n = t.makeArray(arguments);
                return n.unshift(e), t.validator.format.apply(this, n)
            } : void 0 === n ? e : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function (t, n) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                    return n
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function (t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function (e, n) {
                    var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === n.which && "" === this.elementValue(e) || t.inArray(n.keyCode, i) !== -1 || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
                },
                onclick: function (t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function (e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
                },
                unhighlight: function (e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
                }
            },
            setDefaults: function (e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}."),
                step: t.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    function e(e) {
                        var n = "undefined" != typeof t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                        if (!this.form && n && (this.form = t(this).closest("form")[0], this.name = t(this).attr("name")), i === this.form) {
                            var r = t.data(this.form, "validator"),
                                s = "on" + e.type.replace(/^validate/, ""),
                                o = r.settings;
                            o[s] && !t(this).is(o.ignore) && o[s].call(r, this, e)
                        }
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n, i = this.currentForm,
                        r = this.groups = {};
                    t.each(this.settings.groups, function (e, n) {
                        "string" == typeof n && (n = n.split(/\s/)), t.each(n, function (t, n) {
                            r[n] = e
                        })
                    }), n = this.settings.rules, t.each(n, function (e, i) {
                        n[e] = t.validator.normalizeRule(i)
                    }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function () {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function () {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function (e) {
                    var n, i, r = this.clean(e),
                        s = this.validationTargetFor(r),
                        o = this,
                        a = !0;
                    return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = t(s), i = this.groups[s.name], i && t.each(this.groups, function (t, e) {
                        e === i && t !== s.name && (r = o.validationTargetFor(o.clean(o.findByName(t))), r && r.name in o.invalid && (o.currentElements.push(r), a = o.check(r) && a))
                    }), n = this.check(s) !== !1, a = a && n, n ? this.invalid[s.name] = !1 : this.invalid[s.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !n)), a
                },
                showErrors: function (e) {
                    if (e) {
                        var n = this;
                        t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function (t, e) {
                            return {
                                message: t,
                                element: n.findByName(e)[0]
                            }
                        }), this.successList = t.grep(this.successList, function (t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function () {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(e)
                },
                resetElements: function (t) {
                    var e;
                    if (this.settings.unhighlight)
                        for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                    else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function () {
                    return this.objectLength(this.invalid)
                },
                objectLength: function (t) {
                    var e, n = 0;
                    for (e in t) void 0 !== t[e] && null !== t[e] && t[e] !== !1 && n++;
                    return n
                },
                hideErrors: function () {
                    this.hideThese(this.toHide)
                },
                hideThese: function (t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function () {
                    return 0 === this.size()
                },
                size: function () {
                    return this.errorList.length
                },
                focusInvalid: function () {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function () {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function (t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function () {
                    var e = this,
                        n = {};
                    return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                        var i = this.name || t(this).attr("name"),
                            r = "undefined" != typeof t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                        return !i && e.settings.debug && window.console && console.error("%o has no name assigned", this), r && (this.form = t(this).closest("form")[0], this.name = i), this.form === e.currentForm && (!(i in n || !e.objectLength(t(this).rules())) && (n[i] = !0, !0))
                    })
                },
                clean: function (e) {
                    return t(e)[0]
                },
                errors: function () {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                resetInternals: function () {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
                },
                reset: function () {
                    this.resetInternals(), this.currentElements = t([])
                },
                prepareForm: function () {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function (t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function (e) {
                    var n, i, r = t(e),
                        s = e.type,
                        o = "undefined" != typeof r.attr("contenteditable") && "false" !== r.attr("contenteditable");
                    return "radio" === s || "checkbox" === s ? this.findByName(e.name).filter(":checked").val() : "number" === s && "undefined" != typeof e.validity ? e.validity.badInput ? "NaN" : r.val() : (n = o ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/"), i >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\"), i >= 0 ? n.substr(i + 1) : n)) : "string" == typeof n ? n.replace(/\r/g, "") : n)
                },
                check: function (e) {
                    e = this.validationTargetFor(this.clean(e));
                    var n, i, r, s, o = t(e).rules(),
                        a = t.map(o, function (t, e) {
                            return e
                        }).length,
                        l = !1,
                        u = this.elementValue(e);
                    "function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s && (u = s.call(e, u), delete o.normalizer);
                    for (i in o) {
                        r = {
                            method: i,
                            parameters: o[i]
                        };
                        try {
                            if (n = t.validator.methods[i].call(this, u, e, r.parameters), "dependency-mismatch" === n && 1 === a) {
                                l = !0;
                                continue
                            }
                            if (l = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!n) return this.formatAndAdd(e, r), !1
                        } catch (t) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."), t
                        }
                    }
                    if (!l) return this.objectLength(o) && this.successList.push(e), !0
                },
                customDataMessage: function (e, n) {
                    return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
                },
                customMessage: function (t, e) {
                    var n = this.settings.messages[t];
                    return n && (n.constructor === String ? n : n[e])
                },
                findDefined: function () {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function (e, n) {
                    "string" == typeof n && (n = {
                        method: n
                    });
                    var i = this.findDefined(this.customMessage(e.name, n.method), this.customDataMessage(e, n.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                        r = /\$?\{(\d+)\}/g;
                    return "function" == typeof i ? i = i.call(this, n.parameters, e) : r.test(i) && (i = t.validator.format(i.replace(r, "{$1}"), n.parameters)), i
                },
                formatAndAdd: function (t, e) {
                    var n = this.defaultMessage(t, e);
                    this.errorList.push({
                        message: n,
                        element: t,
                        method: e.method
                    }), this.errorMap[t.name] = n, this.submitted[t.name] = n
                },
                addWrapper: function (t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function () {
                    var t, e, n;
                    for (t = 0; this.errorList[t]; t++) n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function () {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function () {
                    return t(this.errorList).map(function () {
                        return this.element
                    })
                },
                showLabel: function (e, n) {
                    var i, r, s, o, a = this.errorsFor(e),
                        l = this.idOrName(e),
                        u = t(e).attr("aria-describedby");
                    a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, t(e)) : i.insertAfter(e), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (s = a.attr("id"), u ? u.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (u += " " + s) : u = s, t(e).attr("aria-describedby", u), r = this.groups[e.name], r && (o = this, t.each(o.groups, function (e, n) {
                        n === r && t("[name='" + o.escapeCssMeta(e) + "']", o.currentForm).attr("aria-describedby", a.attr("id"))
                    })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
                },
                errorsFor: function (e) {
                    var n = this.escapeCssMeta(this.idOrName(e)),
                        i = t(e).attr("aria-describedby"),
                        r = "label[for='" + n + "'], label[for='" + n + "'] *";
                    return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r)
                },
                escapeCssMeta: function (t) {
                    return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function (t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function (e) {
                    return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
                },
                checkable: function (t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function (e) {
                    return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
                },
                getLength: function (e, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function (t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    boolean: function (t) {
                        return t
                    },
                    string: function (e, n) {
                        return !!t(e, n.form).length
                    },
                    function: function (t, e) {
                        return t(e)
                    }
                },
                optional: function (e) {
                    var n = this.elementValue(e);
                    return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
                },
                startRequest: function (e) {
                    this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
                },
                stopRequest: function (e, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function (e, n) {
                    return n = "string" == typeof n && n || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, {
                            method: n
                        })
                    })
                },
                destroy: function () {
                    this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function (e, n) {
                e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
            },
            classRules: function (e) {
                var n = {},
                    i = t(e).attr("class");
                return i && t.each(i.split(" "), function () {
                    this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
                }), n
            },
            normalizeAttributeRule: function (t, e, n, i) {
                /min|max|step/.test(n) && (null === e || /number|range|text/.test(e)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? t[n] = i : e === n && "range" !== e && (t[n] = !0)
            },
            attributeRules: function (e) {
                var n, i, r = {},
                    s = t(e),
                    o = e.getAttribute("type");
                for (n in t.validator.methods) "required" === n ? (i = e.getAttribute(n), "" === i && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(r, o, n, i);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function (e) {
                var n, i, r = {},
                    s = t(e),
                    o = e.getAttribute("type");
                for (n in t.validator.methods) i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), "" === i && (i = !0), this.normalizeAttributeRule(r, o, n, i);
                return r
            },
            staticRules: function (e) {
                var n = {},
                    i = t.data(e.form, "validator");
                return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
            },
            normalizeRules: function (e, n) {
                return t.each(e, function (i, r) {
                    if (r === !1) return void delete e[i];
                    if (r.param || r.depends) {
                        var s = !0;
                        switch (typeof r.depends) {
                            case "string":
                                s = !!t(r.depends, n.form).length;
                                break;
                            case "function":
                                s = r.depends.call(n, n)
                        }
                        s ? e[i] = void 0 === r.param || r.param : (t.data(n.form, "validator").resetElements(t(n)), delete e[i])
                    }
                }), t.each(e, function (i, r) {
                    e[i] = t.isFunction(r) && "normalizer" !== i ? r(n) : r
                }), t.each(["minlength", "maxlength"], function () {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function () {
                    var n;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
                }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function (e) {
                if ("string" == typeof e) {
                    var n = {};
                    t.each(e.split(/\s/), function () {
                        n[this] = !0
                    }), e = n
                }
                return e
            },
            addMethod: function (e, n, i) {
                t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function (e, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var r = t(n).val();
                        return r && r.length > 0
                    }
                    return this.checkable(n) ? this.getLength(e, n) > 0 : void 0 !== e && null !== e && e.length > 0
                },
                email: function (t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function (t, e) {
                    return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
                },
                date: function () {
                    var t = !1;
                    return function (e, n) {
                        return t || (t = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(n) || !/Invalid|NaN/.test(new Date(e).toString())
                    }
                }(),
                dateISO: function (t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function (t, e) {
                    return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function (t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                minlength: function (e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= i
                },
                maxlength: function (e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r <= i
                },
                rangelength: function (e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= i[0] && r <= i[1]
                },
                min: function (t, e, n) {
                    return this.optional(e) || t >= n
                },
                max: function (t, e, n) {
                    return this.optional(e) || t <= n
                },
                range: function (t, e, n) {
                    return this.optional(e) || t >= n[0] && t <= n[1]
                },
                step: function (e, n, i) {
                    var r, s = t(n).attr("type"),
                        o = "Step attribute on input type " + s + " is not supported.",
                        a = ["text", "number", "range"],
                        l = new RegExp("\\b" + s + "\\b"),
                        u = s && !l.test(a.join()),
                        c = function (t) {
                            var e = ("" + t).match(/(?:\.(\d+))?$/);
                            return e && e[1] ? e[1].length : 0
                        },
                        h = function (t) {
                            return Math.round(t * Math.pow(10, r))
                        },
                        d = !0;
                    if (u) throw new Error(o);
                    return r = c(i), (c(e) > r || h(e) % h(i) !== 0) && (d = !1), this.optional(n) || d
                },
                equalTo: function (e, n, i) {
                    var r = t(i);
                    return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                        t(n).valid()
                    }), e === r.val()
                },
                remote: function (e, n, i, r) {
                    if (this.optional(n)) return "dependency-mismatch";
                    r = "string" == typeof r && r || "remote";
                    var s, o, a, l = this.previousValue(n, r);
                    return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = l.message, i = "string" == typeof i && {
                        url: i
                    } || i, a = t.param(t.extend({
                        data: e
                    }, i.data)), l.old === a ? l.valid : (l.old = a, s = this, this.startRequest(n), o = {}, o[n.name] = e, t.ajax(t.extend(!0, {
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        context: s.currentForm,
                        success: function (t) {
                            var i, o, a, u = t === !0 || "true" === t;
                            s.settings.messages[n.name][r] = l.originalMessage, u ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = a, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, o = t || s.defaultMessage(n, {
                                method: r,
                                parameters: e
                            }), i[n.name] = l.message = o, s.invalid[n.name] = !0, s.showErrors(i)), l.valid = u, s.stopRequest(n, u)
                        }
                    }, i)), "pending")
                }
            }
        });
        var n, i = {};
        return t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, n) {
            var r = t.port;
            "abort" === t.mode && (i[r] && i[r].abort(), i[r] = n)
        }) : (n = t.ajax, t.ajax = function (e) {
            var r = ("mode" in e ? e : t.ajaxSettings).mode,
                s = ("port" in e ? e : t.ajaxSettings).port;
            return "abort" === r ? (i[s] && i[s].abort(), i[s] = n.apply(this, arguments), i[s]) : n.apply(this, arguments)
        }), t
    })
}, function (t, e, n) {
    (function (t, e) {
        ! function (t, n, i, r) {
            function s(e, n) {
                this.settings = null, this.options = t.extend({}, s.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                    time: null,
                    target: null,
                    pointer: null,
                    stage: {
                        start: null,
                        current: null
                    },
                    direction: null
                }, this._states = {
                    current: {},
                    tags: {
                        initializing: ["busy"],
                        animating: ["busy"],
                        dragging: ["interacting"]
                    }
                }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, n) {
                    this._handlers[n] = t.proxy(this[n], this)
                }, this)), t.each(s.Plugins, t.proxy(function (t, e) {
                    this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
                }, this)), t.each(s.Workers, t.proxy(function (e, n) {
                    this._pipe.push({
                        filter: n.filter,
                        run: t.proxy(n.run, this)
                    })
                }, this)), this.setup(), this.initialize()
            }
            s.Defaults = {
                items: 3,
                loop: !1,
                center: !1,
                rewind: !1,
                mouseDrag: !0,
                touchDrag: !0,
                pullDrag: !0,
                freeDrag: !1,
                margin: 0,
                stagePadding: 0,
                merge: !1,
                mergeFit: !0,
                autoWidth: !1,
                startPosition: 0,
                rtl: !1,
                smartSpeed: 250,
                fluidSpeed: !1,
                dragEndSpeed: !1,
                responsive: {},
                responsiveRefreshRate: 200,
                responsiveBaseElement: n,
                fallbackEasing: "swing",
                info: !1,
                nestedItemSelector: !1,
                itemElement: "div",
                stageElement: "div",
                refreshClass: "owl-refresh",
                loadedClass: "owl-loaded",
                loadingClass: "owl-loading",
                rtlClass: "owl-rtl",
                responsiveClass: "owl-responsive",
                dragClass: "owl-drag",
                itemClass: "owl-item",
                stageClass: "owl-stage",
                stageOuterClass: "owl-stage-outer",
                grabClass: "owl-grab"
            }, s.Width = {
                Default: "default",
                Inner: "inner",
                Outer: "outer"
            }, s.Type = {
                Event: "event",
                State: "state"
            }, s.Plugins = {}, s.Workers = [{
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width()
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    t.current = this._items && this._items[this.relative(this._current)]
                }
            }, {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove()
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    var e = this.settings.margin || "",
                        n = !this.settings.autoWidth,
                        i = this.settings.rtl,
                        r = {
                            width: "auto",
                            "margin-left": i ? e : "",
                            "margin-right": i ? "" : e
                        };
                    !n && this.$stage.children().css(r), t.css = r
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        n = null,
                        i = this._items.length,
                        r = !this.settings.autoWidth,
                        s = [];
                    for (t.items = {
                            merge: !1,
                            width: e
                        }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, s[i] = r ? e * n : this._items[i].width();
                    this._widths = s
                }
            }, {
                filter: ["items", "settings"],
                run: function () {
                    var e = [],
                        n = this._items,
                        i = this.settings,
                        r = Math.max(2 * i.items, 4),
                        s = 2 * Math.ceil(n.length / 2),
                        o = i.loop && n.length ? i.rewind ? r : Math.max(r, s) : 0,
                        a = "",
                        l = "";
                    for (o /= 2; o--;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l;
                    this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, s = []; ++n < e;) i = s[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, s.push(i + r * t);
                    this._coordinates = s
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function () {
                    var t = this.settings.stagePadding,
                        e = this._coordinates,
                        n = {
                            width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                            "padding-left": t || "",
                            "padding-right": t || ""
                        };
                    this.$stage.css(n)
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    var e = this._coordinates.length,
                        n = !this.settings.autoWidth,
                        i = this.$stage.children();
                    if (n && t.items.merge)
                        for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
                    else n && (t.css.width = t.items.width, i.css(t.css))
                }
            }, {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style")
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function (t) {
                    t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
                }
            }, {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current))
                }
            }, {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var t, e, n, i, r = this.settings.rtl ? 1 : -1,
                        s = 2 * this.settings.stagePadding,
                        o = this.coordinates(this.current()) + s,
                        a = o + this.width() * r,
                        l = [];
                    for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(n);
                    this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
                }
            }], s.prototype.initialize = function () {
                if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                    var e, n, i;
                    e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, i = this.$element.children(n).width(), e.length && i <= 0 && this.preloadAutoWidthImages(e)
                }
                this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
            }, s.prototype.setup = function () {
                var e = this.viewport(),
                    n = this.options.responsive,
                    i = -1,
                    r = null;
                n ? (t.each(n, function (t) {
                    t <= e && t > i && (i = Number(t))
                }), r = t.extend({}, this.options, n[i]), "function" == typeof r.stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = t.extend({}, this.options), this.trigger("change", {
                    property: {
                        name: "settings",
                        value: r
                    }
                }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
                    property: {
                        name: "settings",
                        value: this.settings
                    }
                })
            }, s.prototype.optionsLogic = function () {
                this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
            }, s.prototype.prepare = function (e) {
                var n = this.trigger("prepare", {
                    content: e
                });
                return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                    content: n.data
                }), n.data
            }, s.prototype.update = function () {
                for (var e = 0, n = this._pipe.length, i = t.proxy(function (t) {
                        return this[t]
                    }, this._invalidated), r = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
                this._invalidated = {}, !this.is("valid") && this.enter("valid")
            }, s.prototype.width = function (t) {
                switch (t = t || s.Width.Default) {
                    case s.Width.Inner:
                    case s.Width.Outer:
                        return this._width;
                    default:
                        return this._width - 2 * this.settings.stagePadding + this.settings.margin
                }
            }, s.prototype.refresh = function () {
                this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
            }, s.prototype.onThrottledResize = function () {
                n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
            }, s.prototype.onResize = function () {
                return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"),
                    this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
            }, s.prototype.registerEventHandlers = function () {
                t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                    return !1
                })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
            }, s.prototype.onDragStart = function (e) {
                var n = null;
                3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
                    x: n[16 === n.length ? 12 : 4],
                    y: n[16 === n.length ? 13 : 5]
                }) : (n = this.$stage.position(), n = {
                    x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                    y: n.top
                }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
                    var n = this.difference(this._drag.pointer, this.pointer(e));
                    t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
                }, this)))
            }, s.prototype.onDragMove = function (t) {
                var e = null,
                    n = null,
                    i = null,
                    r = this.difference(this._drag.pointer, this.pointer(t)),
                    s = this.difference(this._drag.stage.start, r);
                this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + i), n + i)), this._drag.stage.current = s, this.animate(s.x))
            }, s.prototype.onDragEnd = function (e) {
                var n = this.difference(this._drag.pointer, this.pointer(e)),
                    r = this._drag.stage.current,
                    s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
                t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
                    return !1
                })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
            }, s.prototype.closest = function (e, n) {
                var i = -1,
                    r = 30,
                    s = this.width(),
                    o = this.coordinates();
                return this.settings.freeDrag || t.each(o, t.proxy(function (t, a) {
                    return "left" === n && e > a - r && e < a + r ? i = t : "right" === n && e > a - s - r && e < a - s + r ? i = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] || a - s) && (i = "left" === n ? t + 1 : t), i === -1
                }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
            }, s.prototype.animate = function (e) {
                var n = this.speed() > 0;
                this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                    transform: "translate3d(" + e + "px,0px,0px)",
                    transition: this.speed() / 1e3 + "s"
                }) : n ? this.$stage.animate({
                    left: e + "px"
                }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                    left: e + "px"
                })
            }, s.prototype.is = function (t) {
                return this._states.current[t] && this._states.current[t] > 0
            }, s.prototype.current = function (t) {
                if (t === r) return this._current;
                if (0 === this._items.length) return r;
                if (t = this.normalize(t), this._current !== t) {
                    var e = this.trigger("change", {
                        property: {
                            name: "position",
                            value: t
                        }
                    });
                    e.data !== r && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                        property: {
                            name: "position",
                            value: this._current
                        }
                    })
                }
                return this._current
            }, s.prototype.invalidate = function (e) {
                return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
                    return e
                })
            }, s.prototype.reset = function (t) {
                t = this.normalize(t), t !== r && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
            }, s.prototype.normalize = function (t, e) {
                var n = this._items.length,
                    i = e ? 0 : this._clones.length;
                return !this.isNumeric(t) || n < 1 ? t = r : (t < 0 || t >= n + i) && (t = ((t - i / 2) % n + n) % n + i / 2), t
            }, s.prototype.relative = function (t) {
                return t -= this._clones.length / 2, this.normalize(t, !0)
            }, s.prototype.maximum = function (t) {
                var e, n, i, r = this.settings,
                    s = this._coordinates.length;
                if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
                else if (r.autoWidth || r.merge) {
                    for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && (n += this._items[e].width() + this.settings.margin, !(n > i)););
                    s = e + 1
                } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
                return t && (s -= this._clones.length / 2), Math.max(s, 0)
            }, s.prototype.minimum = function (t) {
                return t ? 0 : this._clones.length / 2
            }, s.prototype.items = function (t) {
                return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
            }, s.prototype.mergers = function (t) {
                return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
            }, s.prototype.clones = function (e) {
                var n = this._clones.length / 2,
                    i = n + this._items.length,
                    s = function (t) {
                        return t % 2 === 0 ? i + t / 2 : n - (t + 1) / 2
                    };
                return e === r ? t.map(this._clones, function (t, e) {
                    return s(e)
                }) : t.map(this._clones, function (t, n) {
                    return t === e ? s(n) : null
                })
            }, s.prototype.speed = function (t) {
                return t !== r && (this._speed = t), this._speed
            }, s.prototype.coordinates = function (e) {
                var n, i = 1,
                    s = e - 1;
                return e === r ? t.map(this._coordinates, t.proxy(function (t, e) {
                    return this.coordinates(e)
                }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, s = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[s] || 0)) / 2 * i) : n = this._coordinates[s] || 0, n = Math.ceil(n))
            }, s.prototype.duration = function (t, e, n) {
                return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
            }, s.prototype.to = function (t, e) {
                var n = this.current(),
                    i = null,
                    r = t - this.relative(n),
                    s = (r > 0) - (r < 0),
                    o = this._items.length,
                    a = this.minimum(),
                    l = this.maximum();
                this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += s * -1 * o), t = n + r, i = ((t - a) % o + o) % o + a, i !== t && i - r <= l && i - r > 0 && (n = i - r, t = i, this.reset(n))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
            }, s.prototype.next = function (t) {
                t = t || !1, this.to(this.relative(this.current()) + 1, t)
            }, s.prototype.prev = function (t) {
                t = t || !1, this.to(this.relative(this.current()) - 1, t)
            }, s.prototype.onTransitionEnd = function (t) {
                return (t === r || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
            }, s.prototype.viewport = function () {
                var e;
                return this.options.responsiveBaseElement !== n ? e = t(this.options.responsiveBaseElement).width() : n.innerWidth ? e = n.innerWidth : i.documentElement && i.documentElement.clientWidth ? e = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), e
            }, s.prototype.replace = function (n) {
                this.$stage.empty(), this._items = [], n && (n = n instanceof e ? n : t(n)), this.settings.nestedItemSelector && (n = n.find("." + this.settings.nestedItemSelector)), n.filter(function () {
                    return 1 === this.nodeType
                }).each(t.proxy(function (t, e) {
                    e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
            }, s.prototype.add = function (n, i) {
                var s = this.relative(this._current);
                i = i === r ? this._items.length : this.normalize(i, !0), n = n instanceof e ? n : t(n), this.trigger("add", {
                    content: n,
                    position: i
                }), n = this.prepare(n), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(n), 0 !== this._items.length && this._items[i - 1].after(n), this._items.push(n), this._mergers.push(1 * n.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(n), this._items.splice(i, 0, n), this._mergers.splice(i, 0, 1 * n.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
                    content: n,
                    position: i
                })
            }, s.prototype.remove = function (t) {
                t = this.normalize(t, !0), t !== r && (this.trigger("remove", {
                    content: this._items[t],
                    position: t
                }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                    content: null,
                    position: t
                }))
            }, s.prototype.preloadAutoWidthImages = function (e) {
                e.each(t.proxy(function (e, n) {
                    this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function (t) {
                        n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                    }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
                }, this))
            }, s.prototype.destroy = function () {
                this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), this.settings.responsive !== !1 && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize));
                for (var e in this._plugins) this._plugins[e].destroy();
                this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
            }, s.prototype.op = function (t, e, n) {
                var i = this.settings.rtl;
                switch (e) {
                    case "<":
                        return i ? t > n : t < n;
                    case ">":
                        return i ? t < n : t > n;
                    case ">=":
                        return i ? t <= n : t >= n;
                    case "<=":
                        return i ? t >= n : t <= n
                }
            }, s.prototype.on = function (t, e, n, i) {
                t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
            }, s.prototype.off = function (t, e, n, i) {
                t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
            }, s.prototype.trigger = function (e, n, i, r, o) {
                var a = {
                        item: {
                            count: this._items.length,
                            index: this.current()
                        }
                    },
                    l = t.camelCase(t.grep(["on", e, i], function (t) {
                        return t
                    }).join("-").toLowerCase()),
                    u = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
                        relatedTarget: this
                    }, a, n));
                return this._supress[e] || (t.each(this._plugins, function (t, e) {
                    e.onTrigger && e.onTrigger(u)
                }), this.register({
                    type: s.Type.Event,
                    name: e
                }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
            }, s.prototype.enter = function (e) {
                t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
                    this._states.current[e] === r && (this._states.current[e] = 0), this._states.current[e]++
                }, this))
            }, s.prototype.leave = function (e) {
                t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
                    this._states.current[e]--
                }, this))
            }, s.prototype.register = function (e) {
                if (e.type === s.Type.Event) {
                    if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                        var n = t.event.special[e.name]._default;
                        t.event.special[e.name]._default = function (t) {
                            return !n || !n.apply || t.namespace && t.namespace.indexOf("owl") !== -1 ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                        }, t.event.special[e.name].owl = !0
                    }
                } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (n, i) {
                    return t.inArray(n, this._states.tags[e.name]) === i
                }, this)))
            }, s.prototype.suppress = function (e) {
                t.each(e, t.proxy(function (t, e) {
                    this._supress[e] = !0
                }, this))
            }, s.prototype.release = function (e) {
                t.each(e, t.proxy(function (t, e) {
                    delete this._supress[e]
                }, this))
            }, s.prototype.pointer = function (t) {
                var e = {
                    x: null,
                    y: null
                };
                return t = t.originalEvent || t || n.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
            }, s.prototype.isNumeric = function (t) {
                return !isNaN(parseFloat(t))
            }, s.prototype.difference = function (t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }, t.fn.owlCarousel = function (e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var i = t(this),
                        r = i.data("owl.carousel");
                    r || (r = new s(this, "object" == typeof e && e), i.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, n) {
                        r.register({
                            type: s.Type.Event,
                            name: n
                        }), r.$element.on(n + ".owl.carousel.core", t.proxy(function (t) {
                            t.namespace && t.relatedTarget !== this && (this.suppress([n]), r[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                        }, r))
                    })), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, n)
                })
            }, t.fn.owlCarousel.Constructor = s
        }(window.Zepto || t, window, document),
        function (t, e, n, i) {
            var r = function (e) {
                this._core = e, this._interval = null, this._visible = null, this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoRefresh && this.watch()
                    }, this)
                }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
            };
            r.Defaults = {
                autoRefresh: !0,
                autoRefreshInterval: 500
            }, r.prototype.watch = function () {
                this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
            }, r.prototype.refresh = function () {
                this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
            }, r.prototype.destroy = function () {
                var t, n;
                e.clearInterval(this._interval);
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
        }(window.Zepto || t, window, document),
        function (t, e, n, i) {
            var r = function (e) {
                this._core = e, this._loaded = [], this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                            for (var n = this._core.settings, r = n.center && Math.ceil(n.items / 2) || n.items, s = n.center && r * -1 || 0, o = (e.property && e.property.value !== i ? e.property.value : this._core.current()) + s, a = this._core.clones().length, l = t.proxy(function (t, e) {
                                    this.load(e)
                                }, this); s++ < r;) this.load(a / 2 + this._core.relative(o)), a && t.each(this._core.clones(this._core.relative(o)), l), o++
                    }, this)
                }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
            };
            r.Defaults = {
                lazyLoad: !1
            }, r.prototype.load = function (n) {
                var i = this._core.$stage.children().eq(n),
                    r = i && i.find(".owl-lazy");
                !r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy(function (n, i) {
                    var r, s = t(i),
                        o = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
                    this._core.trigger("load", {
                        element: s,
                        url: o
                    }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function () {
                        s.css("opacity", 1), this._core.trigger("loaded", {
                            element: s,
                            url: o
                        }, "lazy")
                    }, this)).attr("src", o) : (r = new Image, r.onload = t.proxy(function () {
                        s.css({
                            "background-image": 'url("' + o + '")',
                            opacity: "1"
                        }), this._core.trigger("loaded", {
                            element: s,
                            url: o
                        }, "lazy")
                    }, this), r.src = o)
                }, this)), this._loaded.push(i.get(0)))
            }, r.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
        }(window.Zepto || t, window, document),
        function (t, e, n, i) {
            var r = function (e) {
                this._core = e, this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && this.update()
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                    }, this),
                    "loaded.owl.lazy": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                    }, this)
                }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
            };
            r.Defaults = {
                autoHeight: !1,
                autoHeightClass: "owl-height"
            }, r.prototype.update = function () {
                var e = this._core._current,
                    n = e + this._core.settings.items,
                    i = this._core.$stage.children().toArray().slice(e, n),
                    r = [],
                    s = 0;
                t.each(i, function (e, n) {
                    r.push(t(n).height())
                }), s = Math.max.apply(null, r), this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
            }, r.prototype.destroy = function () {
                var t, e;
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
        }(window.Zepto || t, window, document),
        function (t, e, n, i) {
            var r = function (e) {
                this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.register({
                            type: "state",
                            name: "playing",
                            tags: ["interacting"]
                        })
                    }, this),
                    "resize.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                    }, this),
                    "refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" === t.property.name && this._playing && this.stop()
                    }, this),
                    "prepared.owl.carousel": t.proxy(function (e) {
                        if (e.namespace) {
                            var n = t(e.content).find(".owl-video");
                            n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                        }
                    }, this)
                }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
                    this.play(t)
                }, this))
            };
            r.Defaults = {
                video: !1,
                videoHeight: !1,
                videoWidth: !1
            }, r.prototype.fetch = function (t, e) {
                var n = function () {
                        return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
                    }(),
                    i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                    r = t.attr("data-width") || this._core.settings.videoWidth,
                    s = t.attr("data-height") || this._core.settings.videoHeight,
                    o = t.attr("href");
                if (!o) throw new Error("Missing video URL.");
                if (i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
                else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
                else {
                    if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    n = "vzaar"
                }
                i = i[6], this._videos[o] = {
                    type: n,
                    id: i,
                    width: r,
                    height: s
                }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
            }, r.prototype.thumbnail = function (e, n) {
                var i, r, s, o = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
                    a = e.find("img"),
                    l = "src",
                    u = "",
                    c = this._core.settings,
                    h = function (t) {
                        r = '<div class="owl-video-play-icon"></div>', i = c.lazyLoad ? '<div class="owl-video-tn ' + u + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after(r)
                    };
                return e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (l = "data-src", u = "owl-lazy"), a.length ? (h(a.attr(l)), a.remove(), !1) : void("youtube" === n.type ? (s = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", h(s)) : "vimeo" === n.type ? t.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + n.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (t) {
                        s = t[0].thumbnail_large, h(s)
                    }
                }) : "vzaar" === n.type && t.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + n.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (t) {
                        s = t.framegrab_url, h(s)
                    }
                }))
            }, r.prototype.stop = function () {
                this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
            }, r.prototype.play = function (e) {
                var n, i = t(e.target),
                    r = i.closest("." + this._core.settings.itemClass),
                    s = this._videos[r.attr("data-video")],
                    o = s.width || "100%",
                    a = s.height || this._core.$stage.height();
                this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), "youtube" === s.type ? n = '<iframe width="' + o + '" height="' + a + '" src="//www.youtube.com/embed/' + s.id + "?autoplay=1&rel=0&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type ? n = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + o + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (n = '<iframe frameborder="0"height="' + a + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + n + "</div>").insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
            }, r.prototype.isInFullScreen = function () {
                var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
                return e && t(e).parent().hasClass("owl-video-frame")
            }, r.prototype.destroy = function () {
                var t, e;
                this._core.$element.off("click.owl.video");
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.Video = r
        }(window.Zepto || t, window, document),
        function (t, e, n, i) {
            var r = function (e) {
                this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
                    "change.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                        t.namespace && (this.swapping = "translated" == t.type)
                    }, this),
                    "translate.owl.carousel": t.proxy(function (t) {
                        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                    }, this)
                }, this.core.$element.on(this.handlers)
            };
            r.Defaults = {
                animateOut: !1,
                animateIn: !1
            }, r.prototype.swap = function () {
                if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                    this.core.speed(0);
                    var e, n = t.proxy(this.clear, this),
                        i = this.core.$stage.children().eq(this.previous),
                        r = this.core.$stage.children().eq(this.next),
                        s = this.core.settings.animateIn,
                        o = this.core.settings.animateOut;
                    this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({
                        left: e + "px"
                    }).addClass("animated owl-animated-out").addClass(o)), s && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(s))
                }
            }, r.prototype.clear = function (e) {
                t(e.target).css({
                    left: ""
                }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
            }, r.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
        }(window.Zepto || t, window, document),
        function (t, e, n, i) {
            var r = function (e) {
                this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                    }, this),
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoplay && this.play()
                    }, this),
                    "play.owl.autoplay": t.proxy(function (t, e, n) {
                        t.namespace && this.play(e, n)
                    }, this),
                    "stop.owl.autoplay": t.proxy(function (t) {
                        t.namespace && this.stop()
                    }, this),
                    "mouseover.owl.autoplay": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                    }, this),
                    "mouseleave.owl.autoplay": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                    }, this),
                    "touchstart.owl.core": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                    }, this),
                    "touchend.owl.core": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play()
                    }, this)
                }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
            };
            r.Defaults = {
                autoplay: !1,
                autoplayTimeout: 5e3,
                autoplayHoverPause: !1,
                autoplaySpeed: !1
            }, r.prototype.play = function (t, e) {
                this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
            }, r.prototype._getNextTimeout = function (n, i) {
                return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function () {
                    this._paused || this._core.is("interacting") || this._core.next(i || this._core.settings.autoplaySpeed)
                }, this), n || this._core.settings.autoplayTimeout)
            }, r.prototype._setAutoPlayInterval = function () {
                this._timeout = this._getNextTimeout()
            }, r.prototype.stop = function () {
                this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
            }, r.prototype.pause = function () {
                this._core.is("rotating") && (this._paused = !0)
            }, r.prototype.destroy = function () {
                var t, e;
                this.stop();
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
        }(window.Zepto || t, window, document),
        function (t, e, n, i) {
            "use strict";
            var r = function (e) {
                this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                    next: this._core.next,
                    prev: this._core.prev,
                    to: this._core.to
                }, this._handlers = {
                    "prepared.owl.carousel": t.proxy(function (e) {
                        e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                    }, this),
                    "added.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                    }, this),
                    "remove.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" == t.property.name && this.draw()
                    }, this),
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                    }, this),
                    "refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                    }, this)
                }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
            };
            r.Defaults = {
                nav: !1,
                navText: ["prev", "next"],
                navSpeed: !1,
                navElement: "div",
                navContainer: !1,
                navContainerClass: "owl-nav",
                navClass: ["owl-prev", "owl-next"],
                slideBy: 1,
                dotClass: "owl-dot",
                dotsClass: "owl-dots",
                dots: !0,
                dotsEach: !1,
                dotsData: !1,
                dotsSpeed: !1,
                dotsContainer: !1
            }, r.prototype.initialize = function () {
                var e, n = this._core.settings;
                this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
                    this.prev(n.navSpeed)
                }, this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
                    this.next(n.navSpeed)
                }, this)), n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function (e) {
                    var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                    e.preventDefault(), this.to(i, n.dotsSpeed)
                }, this));
                for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
            }, r.prototype.destroy = function () {
                var t, e, n, i;
                for (t in this._handlers) this.$element.off(t, this._handlers[t]);
                for (e in this._controls) "$relative" === e && settings.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                for (i in this.overides) this._core[i] = this._overrides[i];
                for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
            }, r.prototype.update = function () {
                var t, e, n, i = this._core.clones().length / 2,
                    r = i + this._core.items().length,
                    s = this._core.maximum(!0),
                    o = this._core.settings,
                    a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                    for (this._pages = [], t = i, e = 0, n = 0; t < r; t++) {
                        if (e >= a || 0 === e) {
                            if (this._pages.push({
                                    start: Math.min(s, t - i),
                                    end: t - i + a - 1
                                }), Math.min(s, t - i) === s) break;
                            e = 0, ++n
                        }
                        e += this._core.mergers(this._core.relative(t))
                    }
            }, r.prototype.draw = function () {
                var e, n = this._core.settings,
                    i = this._core.items().length <= n.items,
                    r = this._core.relative(this._core.current()),
                    s = n.loop || n.rewind;
                this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
            }, r.prototype.onTrigger = function (e) {
                var n = this._core.settings;
                e.page = {
                    index: t.inArray(this.current(), this._pages),
                    count: this._pages.length,
                    size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
                }
            }, r.prototype.current = function () {
                var e = this._core.relative(this._core.current());
                return t.grep(this._pages, t.proxy(function (t, n) {
                    return t.start <= e && t.end >= e
                }, this)).pop()
            }, r.prototype.getPosition = function (e) {
                var n, i, r = this._core.settings;
                return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n
            }, r.prototype.next = function (e) {
                t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
            }, r.prototype.prev = function (e) {
                t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
            }, r.prototype.to = function (e, n, i) {
                var r;
                !i && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n);
            }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
        }(window.Zepto || t, window, document),
        function (t, e, n, i) {
            "use strict";
            var r = function (n) {
                this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (n) {
                        n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                    }, this),
                    "prepared.owl.carousel": t.proxy(function (e) {
                        if (e.namespace) {
                            var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!n) return;
                            this._hashes[n] = e.content
                        }
                    }, this),
                    "changed.owl.carousel": t.proxy(function (n) {
                        if (n.namespace && "position" === n.property.name) {
                            var i = this._core.items(this._core.relative(this._core.current())),
                                r = t.map(this._hashes, function (t, e) {
                                    return t === i ? e : null
                                }).join();
                            if (!r || e.location.hash.slice(1) === r) return;
                            e.location.hash = r
                        }
                    }, this)
                }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
                    var n = e.location.hash.substring(1),
                        r = this._core.$stage.children(),
                        s = this._hashes[n] && r.index(this._hashes[n]);
                    s !== i && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
                }, this))
            };
            r.Defaults = {
                URLhashListener: !1
            }, r.prototype.destroy = function () {
                var n, i;
                t(e).off("hashchange.owl.navigation");
                for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.Hash = r
        }(window.Zepto || t, window, document),
        function (t, e, n, i) {
            function r(e, n) {
                var r = !1,
                    s = e.charAt(0).toUpperCase() + e.slice(1);
                return t.each((e + " " + a.join(s + " ") + s).split(" "), function (t, e) {
                    if (o[e] !== i) return r = !n || e, !1
                }), r
            }

            function s(t) {
                return r(t, !0)
            }
            var o = t("<support>").get(0).style,
                a = "Webkit Moz O ms".split(" "),
                l = {
                    transition: {
                        end: {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd",
                            transition: "transitionend"
                        }
                    },
                    animation: {
                        end: {
                            WebkitAnimation: "webkitAnimationEnd",
                            MozAnimation: "animationend",
                            OAnimation: "oAnimationEnd",
                            animation: "animationend"
                        }
                    }
                },
                u = {
                    csstransforms: function () {
                        return !!r("transform")
                    },
                    csstransforms3d: function () {
                        return !!r("perspective")
                    },
                    csstransitions: function () {
                        return !!r("transition")
                    },
                    cssanimations: function () {
                        return !!r("animation")
                    }
                };
            u.csstransitions() && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), u.cssanimations() && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), u.csstransforms() && (t.support.transform = new String(s("transform")), t.support.transform3d = u.csstransforms3d())
        }(window.Zepto || t, window, document)
    }).call(e, n(1), n(1))
}]);
//# sourceMappingURL=package.js.map