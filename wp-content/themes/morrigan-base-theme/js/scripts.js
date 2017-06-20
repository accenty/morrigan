!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        var n = (t = t || ne).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }
    function i(e) {
        var t = !!e && "length" in e && e.length, n = me.type(e);
        return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function o(e, t, n) {
        return me.isFunction(t) ? me.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n;
        }) : t.nodeType ? me.grep(e, function(e) {
            return e === t !== n;
        }) : "string" != typeof t ? me.grep(e, function(e) {
            return se.call(t, e) > -1 !== n;
        }) : ke.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
    }
    function a(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function s(e) {
        var t = {};
        return me.each(e.match(Ie) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function l(e) {
        return e;
    }
    function u(e) {
        throw e;
    }
    function c(e, t, n, i) {
        var r;
        try {
            e && me.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && me.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [ e ].slice(i));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    function d() {
        ne.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), 
        me.ready();
    }
    function p() {
        this.expando = me.expando + p.uid++;
    }
    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : qe.test(e) ? JSON.parse(e) : e);
    }
    function h(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = f(n);
            } catch (e) {}
            Me.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function m(e, t, n, i) {
        var r, o = 1, a = 20, s = i ? function() {
            return i.cur();
        } : function() {
            return me.css(e, t, "");
        }, l = s(), u = n && n[3] || (me.cssNumber[t] ? "" : "px"), c = (me.cssNumber[t] || "px" !== u && +l) && ze.exec(me.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                o = o || ".5", c /= o, me.style(e, t, c + u);
            } while (o !== (o = s() / l) && 1 !== o && --a);
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, 
        i.start = c, i.end = r)), r;
    }
    function v(e) {
        var t, n = e.ownerDocument, i = e.nodeName, r = $e[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = me.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === r && (r = "block"), $e[i] = r, r);
    }
    function g(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++) (i = e[o]).style && (n = i.style.display, 
        t ? ("none" === n && (r[o] = He.get(i, "display") || null, r[o] || (i.style.display = "")), 
        "" === i.style.display && Re(i) && (r[o] = v(i))) : "none" !== n && (r[o] = "none", 
        He.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
    }
    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && r(e, t) ? me.merge([ e ], n) : n;
    }
    function x(e, t) {
        for (var n = 0, i = e.length; n < i; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"));
    }
    function w(e, t, n, i, r) {
        for (var o, a, s, l, u, c, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((o = e[f]) || 0 === o) if ("object" === me.type(o)) me.merge(p, o.nodeType ? [ o ] : o); else if (Ke.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (Ue.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = Qe[s] || Qe._default, a.innerHTML = l[1] + me.htmlPrefilter(o) + l[2], c = l[0]; c--; ) a = a.lastChild;
            me.merge(p, a.childNodes), (a = d.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
        for (d.textContent = "", f = 0; o = p[f++]; ) if (i && me.inArray(o, i) > -1) r && r.push(o); else if (u = me.contains(o.ownerDocument, o), 
        a = y(d.appendChild(o), "script"), u && x(a), n) for (c = 0; o = a[c++]; ) Ge.test(o.type || "") && n.push(o);
        return d;
    }
    function b() {
        return !0;
    }
    function C() {
        return !1;
    }
    function T() {
        try {
            return ne.activeElement;
        } catch (e) {}
    }
    function S(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) S(e, s, n, i, t[s], o);
            return e;
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, 
        i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = C; else if (!r) return e;
        return 1 === o && (a = r, r = function(e) {
            return me().off(e), a.apply(this, arguments);
        }, r.guid = a.guid || (a.guid = me.guid++)), e.each(function() {
            me.event.add(this, t, r, i, n);
        });
    }
    function k(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? me(">tbody", e)[0] || e : e;
    }
    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function A(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function N(e, t) {
        var n, i, r, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (He.hasData(e) && (o = He.access(e), a = He.set(t, o), u = o.events)) {
                delete a.handle, a.events = {};
                for (r in u) for (n = 0, i = u[r].length; n < i; n++) me.event.add(t, r, u[r][n]);
            }
            Me.hasData(e) && (s = Me.access(e), l = me.extend({}, s), Me.set(t, l));
        }
    }
    function P(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function I(e, t, i, r) {
        t = oe.apply([], t);
        var o, a, s, l, u, c, d = 0, p = e.length, f = p - 1, h = t[0], m = me.isFunction(h);
        if (m || p > 1 && "string" == typeof h && !fe.checkClone && nt.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            m && (t[0] = h.call(this, n, o.html())), I(o, t, i, r);
        });
        if (p && (o = w(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, 1 === o.childNodes.length && (o = a), 
        a || r)) {
            for (l = (s = me.map(y(o, "script"), E)).length; d < p; d++) u = o, d !== f && (u = me.clone(u, !0, !0), 
            l && me.merge(s, y(u, "script"))), i.call(e[d], u, d);
            if (l) for (c = s[s.length - 1].ownerDocument, me.map(s, A), d = 0; d < l; d++) u = s[d], 
            Ge.test(u.type || "") && !He.access(u, "globalEval") && me.contains(c, u) && (u.src ? me._evalUrl && me._evalUrl(u.src) : n(u.textContent.replace(rt, ""), c));
        }
        return e;
    }
    function D(e, t, n) {
        for (var i, r = t ? me.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || me.cleanData(y(i)), 
        i.parentNode && (n && me.contains(i.ownerDocument, i) && x(y(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    function j(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || st(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || me.contains(e.ownerDocument, e) || (a = me.style(e, t)), 
        !fe.pixelMarginRight() && at.test(a) && ot.test(t) && (i = s.width, r = s.minWidth, 
        o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, 
        s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function O(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
        };
    }
    function L(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--; ) if ((e = pt[n] + t) in ft) return e;
    }
    function H(e) {
        var t = me.cssProps[e];
        return t || (t = me.cssProps[e] = L(e) || e), t;
    }
    function M(e, t, n) {
        var i = ze.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function q(e, t, n, i, r) {
        var o, a = 0;
        for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += me.css(e, n + _e[o], !0, r)), 
        i ? ("content" === n && (a -= me.css(e, "padding" + _e[o], !0, r)), "margin" !== n && (a -= me.css(e, "border" + _e[o] + "Width", !0, r))) : (a += me.css(e, "padding" + _e[o], !0, r), 
        "padding" !== n && (a += me.css(e, "border" + _e[o] + "Width", !0, r)));
        return a;
    }
    function F(e, t, n) {
        var i, r = st(e), o = j(e, t, r), a = "border-box" === me.css(e, "boxSizing", !1, r);
        return at.test(o) ? o : (i = a && (fe.boxSizingReliable() || o === e.style[t]), 
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + q(e, t, n || (a ? "border" : "content"), i, r) + "px");
    }
    function W(e, t, n, i, r) {
        return new W.prototype.init(e, t, n, i, r);
    }
    function z() {
        mt && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, me.fx.interval), 
        me.fx.tick());
    }
    function _() {
        return e.setTimeout(function() {
            ht = void 0;
        }), ht = me.now();
    }
    function R(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = _e[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function B(e, t, n) {
        for (var i, r = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, t, e)) return i;
    }
    function $(e, t, n) {
        var i, r, o, a, s, l, u, c, d = "width" in t || "height" in t, p = this, f = {}, h = e.style, m = e.nodeType && Re(e), v = He.get(e, "fxshow");
        n.queue || (null == (a = me._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, 
        a.empty.fire = function() {
            a.unqueued || s();
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, me.queue(e, "fx").length || a.empty.fire();
            });
        }));
        for (i in t) if (r = t[i], vt.test(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                if ("show" !== r || !v || void 0 === v[i]) continue;
                m = !0;
            }
            f[i] = v && v[i] || me.style(e, i);
        }
        if ((l = !me.isEmptyObject(t)) || !me.isEmptyObject(f)) {
            d && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (u = v && v.display) && (u = He.get(e, "display")), "none" === (c = me.css(e, "display")) && (u ? c = u : (g([ e ], !0), 
            u = e.style.display || u, c = me.css(e, "display"), g([ e ]))), ("inline" === c || "inline-block" === c && null != u) && "none" === me.css(e, "float") && (l || (p.done(function() {
                h.display = u;
            }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), l = !1;
            for (i in f) l || (v ? "hidden" in v && (m = v.hidden) : v = He.access(e, "fxshow", {
                display: u
            }), o && (v.hidden = !m), m && g([ e ], !0), p.done(function() {
                m || g([ e ]), He.remove(e, "fxshow");
                for (i in f) me.style(e, i, f[i]);
            })), l = B(m ? v[i] : 0, i, p), i in v || (v[i] = l.start, m && (l.end = l.start, 
            l.start = 0));
        }
    }
    function X(e, t) {
        var n, i, r, o, a;
        for (n in e) if (i = me.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], 
        o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = me.cssHooks[i]) && "expand" in a) {
            o = a.expand(o), delete e[i];
            for (n in o) n in e || (e[n] = o[n], t[n] = r);
        } else t[i] = r;
    }
    function U(e, t, n) {
        var i, r, o = 0, a = U.prefilters.length, s = me.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (r) return !1;
            for (var t = ht || _(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
            return s.notifyWith(e, [ u, i, n ]), i < 1 && a ? n : (a || s.notifyWith(e, [ u, 1, 0 ]), 
            s.resolveWith(e, [ u ]), !1);
        }, u = s.promise({
            elem: e,
            props: me.extend({}, t),
            opts: me.extend(!0, {
                specialEasing: {},
                easing: me.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ht || _(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = me.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i;
            },
            stop: function(t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [ u, 1, 0 ]), s.resolveWith(e, [ u, t ])) : s.rejectWith(e, [ u, t ]), 
                this;
            }
        }), c = u.props;
        for (X(c, u.opts.specialEasing); o < a; o++) if (i = U.prefilters[o].call(u, e, c, u.opts)) return me.isFunction(i.stop) && (me._queueHooks(u.elem, u.opts.queue).stop = me.proxy(i.stop, i)), 
        i;
        return me.map(c, B, u), me.isFunction(u.opts.start) && u.opts.start.call(e, u), 
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), 
        me.fx.timer(me.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u;
    }
    function G(e) {
        return (e.match(Ie) || []).join(" ");
    }
    function Q(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function K(e, t, n, i) {
        var r;
        if (Array.isArray(t)) me.each(t, function(t, r) {
            n || At.test(e) ? i(e, r) : K(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
        }); else if (n || "object" !== me.type(t)) i(e, t); else for (r in t) K(e + "[" + r + "]", t[r], n, i);
    }
    function Y(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(Ie) || [];
            if (me.isFunction(n)) for (;i = o[r++]; ) "+" === i[0] ? (i = i.slice(1) || "*", 
            (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }
    function V(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, me.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), 
                r(u), !1);
            }), l;
        }
        var o = {}, a = e === Wt;
        return r(t.dataTypes[0]) || !o["*"] && r("*");
    }
    function Z(e, t) {
        var n, i, r = me.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && me.extend(!0, e, i), e;
    }
    function J(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (r in s) if (s[r] && s[r].test(i)) {
            l.unshift(r);
            break;
        }
        if (l[0] in n) o = l[0]; else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break;
                }
                a || (a = r);
            }
            o = o || a;
        }
        if (o) return o !== l[0] && l.unshift(o), n[o];
    }
    function ee(e, t, n, i) {
        var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o])) for (r in u) if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                break;
            }
            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                t = a(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + l + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    var te = [], ne = e.document, ie = Object.getPrototypeOf, re = te.slice, oe = te.concat, ae = te.push, se = te.indexOf, le = {}, ue = le.toString, ce = le.hasOwnProperty, de = ce.toString, pe = de.call(Object), fe = {}, he = "3.2.1", me = function(e, t) {
        return new me.fn.init(e, t);
    }, ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, ye = /-([a-z])/g, xe = function(e, t) {
        return t.toUpperCase();
    };
    me.fn = me.prototype = {
        jquery: he,
        constructor: me,
        length: 0,
        toArray: function() {
            return re.call(this);
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = me.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return me.each(this, e);
        },
        map: function(e) {
            return this.pushStack(me.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: ae,
        sort: te.sort,
        splice: te.splice
    }, me.extend = me.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || me.isFunction(a) || (a = {}), 
        s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
        i = e[t], a !== i && (u && i && (me.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, 
        o = n && Array.isArray(n) ? n : []) : o = n && me.isPlainObject(n) ? n : {}, a[t] = me.extend(u, o, i)) : void 0 !== i && (a[t] = i));
        return a;
    }, me.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === me.type(e);
        },
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = me.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e) || (t = ie(e)) && ("function" != typeof (n = ce.call(t, "constructor") && t.constructor) || de.call(n) !== pe));
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            n(e);
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(ye, xe);
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ve, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? me.merge(n, "string" == typeof e ? [ e ] : e) : ae.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i;
        },
        map: function(e, t, n) {
            var r, o, a = 0, s = [];
            if (i(e)) for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o); else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return oe.apply([], s);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e)) return i = re.call(arguments, 2), 
            r = function() {
                return e.apply(t || this, i.concat(re.call(arguments)));
            }, r.guid = e.guid = e.guid || me.guid++, r;
        },
        now: Date.now,
        support: fe
    }), "function" == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]), 
    me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase();
    });
    var we = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, c, p, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : W) !== D && I(t), t = t || D, O)) {
                if (11 !== h && (l = me.exec(e))) if (r = l[1]) {
                    if (9 === h) {
                        if (!(a = t.getElementById(r))) return n;
                        if (a.id === r) return n.push(a), n;
                    } else if (f && (a = f.getElementById(r)) && q(t, a) && a.id === r) return n.push(a), 
                    n;
                } else {
                    if (l[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(r)), 
                    n;
                }
                if (w.qsa && !$[e + " "] && (!L || !L.test(e))) {
                    if (1 !== h) f = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, we) : t.setAttribute("id", s = F), 
                        o = (c = S(e)).length; o--; ) c[o] = "#" + s + " " + d(c[o]);
                        p = c.join(","), f = ve.test(e) && u(t.parentNode) || t;
                    }
                    if (p) try {
                        return Y.apply(n, f.querySelectorAll(p)), n;
                    } catch (e) {} finally {
                        s === F && t.removeAttribute("id");
                    }
                }
            }
            return E(e.replace(oe, "$1"), t, n, i);
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = i;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[F] = !0, e;
        }
        function r(e) {
            var t = D.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) b.attrHandle[n[i]] = t;
        }
        function a(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function s(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; ) n[r = o[a]] && (n[r] = !(i[r] = n[r]));
                });
            });
        }
        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function c() {}
        function d(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function p(e, t, n) {
            var i = t.dir, r = t.next, o = r || i, a = n && "parentNode" === o, s = _++;
            return t.first ? function(t, n, r) {
                for (;t = t[i]; ) if (1 === t.nodeType || a) return e(t, n, r);
                return !1;
            } : function(t, n, l) {
                var u, c, d, p = [ z, s ];
                if (l) {
                    for (;t = t[i]; ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                } else for (;t = t[i]; ) if (1 === t.nodeType || a) if (d = t[F] || (t[F] = {}), 
                c = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((u = c[o]) && u[0] === z && u[1] === s) return p[2] = u[2];
                    if (c[o] = p, p[2] = e(t, n, l)) return !0;
                }
                return !1;
            };
        }
        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
            } : e[0];
        }
        function h(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i;
        }
        function m(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (n && !n(o, i, r) || (a.push(o), 
            u && t.push(s)));
            return a;
        }
        function v(e, t, n, r, o, a) {
            return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, a)), i(function(i, a, s, l) {
                var u, c, d, p = [], f = [], v = a.length, g = i || h(t || "*", s.nodeType ? [ s ] : s, []), y = !e || !i && t ? g : m(g, p, e, s, l), x = n ? o || (i ? e : v || r) ? [] : a : y;
                if (n && n(y, x, s, l), r) for (u = m(x, f), r(u, [], s, l), c = u.length; c--; ) (d = u[c]) && (x[f[c]] = !(y[f[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = x.length; c--; ) (d = x[c]) && u.push(y[c] = d);
                            o(null, x = [], u, l);
                        }
                        for (c = x.length; c--; ) (d = x[c]) && (u = o ? Z(i, d) : p[c]) > -1 && (i[u] = !(a[u] = d));
                    }
                } else x = m(x === a ? x.splice(v, x.length) : x), o ? o(null, a, x, l) : Y.apply(a, x);
            });
        }
        function g(e) {
            for (var t, n, i, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                return e === t;
            }, a, !0), u = p(function(e) {
                return Z(t, e) > -1;
            }, a, !0), c = [ function(e, n, i) {
                var r = !o && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null, r;
            } ]; s < r; s++) if (n = b.relative[e[s].type]) c = [ p(f(c), n) ]; else {
                if ((n = b.filter[e[s].type].apply(null, e[s].matches))[F]) {
                    for (i = ++s; i < r && !b.relative[e[i].type]; i++) ;
                    return v(s > 1 && f(c), s > 1 && d(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(oe, "$1"), n, s < i && g(e.slice(s, i)), i < r && g(e = e.slice(i)), i < r && d(e));
                }
                c.push(n);
            }
            return f(c);
        }
        function y(e, n) {
            var r = n.length > 0, o = e.length > 0, a = function(i, a, s, l, u) {
                var c, d, p, f = 0, h = "0", v = i && [], g = [], y = A, x = i || o && b.find.TAG("*", u), w = z += null == y ? 1 : Math.random() || .1, C = x.length;
                for (u && (A = a === D || a || u); h !== C && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (d = 0, a || c.ownerDocument === D || (I(c), s = !O); p = e[d++]; ) if (p(c, a || D, s)) {
                            l.push(c);
                            break;
                        }
                        u && (z = w);
                    }
                    r && ((c = !p && c) && f--, i && v.push(c));
                }
                if (f += h, r && h !== f) {
                    for (d = 0; p = n[d++]; ) p(v, g, a, s);
                    if (i) {
                        if (f > 0) for (;h--; ) v[h] || g[h] || (g[h] = Q.call(l));
                        g = m(g);
                    }
                    Y.apply(l, g), u && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l);
                }
                return u && (z = w, A = y), v;
            };
            return r ? i(a) : a;
        }
        var x, w, b, C, T, S, k, E, A, N, P, I, D, j, O, L, H, M, q, F = "sizzle" + 1 * new Date(), W = e.document, z = 0, _ = 0, R = n(), B = n(), $ = n(), X = function(e, t) {
            return e === t && (P = !0), 0;
        }, U = {}.hasOwnProperty, G = [], Q = G.pop, K = G.push, Y = G.push, V = G.slice, Z = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", re = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie), ce = new RegExp("^" + te + "$"), de = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, pe = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, be = function() {
            I();
        }, Ce = p(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Y.apply(G = V.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType;
        } catch (e) {
            Y = {
                apply: G.length ? function(e, t) {
                    K.apply(e, V.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        w = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, I = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : W;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, j = D.documentElement, 
            O = !T(D), W !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), 
            w.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), w.getElementsByTagName = r(function(e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length;
            }), w.getElementsByClassName = he.test(D.getElementsByClassName), w.getById = r(function(e) {
                return j.appendChild(e).id = F, !D.getElementsByName || !D.getElementsByName(F).length;
            }), w.getById ? (b.filter.ID = function(e) {
                var t = e.replace(ge, ye);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (b.filter.ID = function(e) {
                var t = e.replace(ge, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), b.find.TAG = w.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return o;
            }, b.find.CLASS = w.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e);
            }, H = [], L = [], (w.qsa = he.test(D.querySelectorAll)) && (r(function(e) {
                j.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || L.push("\\[" + ee + "*(?:value|" + J + ")"), 
                e.querySelectorAll("[id~=" + F + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), 
                e.querySelectorAll("a#" + F + "+*").length || L.push(".#.+[+~]");
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ee + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), 
                j.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), L.push(",.*:");
            })), (w.matchesSelector = he.test(M = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), H.push("!=", ie);
            }), L = L.length && new RegExp(L.join("|")), H = H.length && new RegExp(H.join("|")), 
            t = he.test(j.compareDocumentPosition), q = t || he.test(j.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, X = t ? function(e, t) {
                if (e === t) return P = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === W && q(W, e) ? -1 : t === D || t.ownerDocument === W && q(W, t) ? 1 : N ? Z(N, e) - Z(N, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return P = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [ e ], l = [ t ];
                if (!r || !o) return e === D ? -1 : t === D ? 1 : r ? -1 : o ? 1 : N ? Z(N, e) - Z(N, t) : 0;
                if (r === o) return a(e, t);
                for (n = e; n = n.parentNode; ) s.unshift(n);
                for (n = t; n = n.parentNode; ) l.unshift(n);
                for (;s[i] === l[i]; ) i++;
                return i ? a(s[i], l[i]) : s[i] === W ? -1 : l[i] === W ? 1 : 0;
            }, D) : D;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && I(e), n = n.replace(le, "='$1']"), w.matchesSelector && O && !$[n + " "] && (!H || !H.test(n)) && (!L || !L.test(n))) try {
                var i = M.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
            } catch (e) {}
            return t(n, D, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && I(e), q(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && I(e);
            var n = b.attrHandle[t.toLowerCase()], i = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : w.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, t.escape = function(e) {
            return (e + "").replace(xe, we);
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (P = !w.detectDuplicates, N = !w.sortStable && e.slice(0), e.sort(X), P) {
                for (;t = e[r++]; ) t === e[r] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return N = null, e;
        }, C = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i++]; ) n += C(t);
            return n;
        }, (b = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(ge, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ye), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ge, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && R(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var u, c, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, g = s && t.nodeName.toLowerCase(), y = !l && !s, x = !1;
                        if (v) {
                            if (o) {
                                for (;m; ) {
                                    for (p = t; p = p[m]; ) if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? v.firstChild : v.lastChild ], a && y) {
                                for (x = (f = (u = (c = (d = (p = v)[F] || (p[F] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === z && u[1]) && u[2], 
                                p = f && v.childNodes[f]; p = ++f && p && p[m] || (x = f = 0) || h.pop(); ) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [ z, f, x ];
                                    break;
                                }
                            } else if (y && (p = t, d = p[F] || (p[F] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), 
                            u = c[e] || [], f = u[0] === z && u[1], x = f), !1 === x) for (;(p = ++f && p && p[m] || (x = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++x || (y && (d = p[F] || (p[F] = {}), 
                            c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [ z, x ]), p !== t)); ) ;
                            return (x -= r) === i || x % i == 0 && x / i >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var r, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (r = [ e, e, "", n ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--; ) i = Z(e, r[a]), e[i] = !(t[i] = r[a]);
                    }) : function(e) {
                        return o(e, 0, r);
                    }) : o;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], r = k(e.replace(oe, "$1"));
                    return r[F] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return e = e.replace(ge, ye), function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ye).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === j;
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return fe.test(e.nodeName);
                },
                input: function(e) {
                    return pe.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: l(function() {
                    return [ 0 ];
                }),
                last: l(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: l(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                    return e;
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = b.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[x] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(x);
        for (x in {
            submit: !0,
            reset: !0
        }) b.pseudos[x] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }(x);
        return c.prototype = b.filters = b.pseudos, b.setFilters = new c(), S = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, u, c = B[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = b.preFilter; s; ) {
                i && !(r = ae.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), 
                i = !1, (r = se.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), s = s.slice(i.length));
                for (a in b.filter) !(r = de[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), 
                o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break;
            }
            return n ? s.length : s ? t.error(e) : B(e, l).slice(0);
        }, k = t.compile = function(e, t) {
            var n, i = [], r = [], o = $[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--; ) o = g(t[n]), o[F] ? i.push(o) : r.push(o);
                (o = $(e, y(r, i))).selector = e;
            }
            return o;
        }, E = t.select = function(e, t, n, i) {
            var r, o, a, s, l, c = "function" == typeof e && e, p = !i && S(e = c.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && O && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(ge, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !b.relative[s = a.type]); ) if ((l = b.find[s]) && (i = l(a.matches[0].replace(ge, ye), ve.test(o[0].type) && u(t.parentNode) || t))) {
                    if (o.splice(r, 1), !(e = i.length && d(o))) return Y.apply(n, i), n;
                    break;
                }
            }
            return (c || k(e, p))(i, t, !O, n, !t || ve.test(e) && u(t.parentNode) || t), n;
        }, w.sortStable = F.split("").sort(X).join("") === F, w.detectDuplicates = !!P, 
        I(), w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("fieldset"));
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), w.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), r(function(e) {
            return null == e.getAttribute("disabled");
        }) || o(J, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), t;
    }(e);
    me.find = we, me.expr = we.selectors, me.expr[":"] = me.expr.pseudos, me.uniqueSort = me.unique = we.uniqueSort, 
    me.text = we.getText, me.isXMLDoc = we.isXML, me.contains = we.contains, me.escapeSelector = we.escape;
    var be = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (r && me(e).is(n)) break;
            i.push(e);
        }
        return i;
    }, Ce = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, Te = me.expr.match.needsContext, Se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, ke = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? me.find.matchesSelector(i, e) ? [ i ] : [] : me.find.matches(e, me.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, me.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(me(e).filter(function() {
                for (t = 0; t < i; t++) if (me.contains(r[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) me.find(e, r[t], n);
            return i > 1 ? me.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0));
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Te.test(e) ? me(e) : e || [], !1).length;
        }
    });
    var Ee, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (me.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || Ee, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : Ae.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), 
                Se.test(i[1]) && me.isPlainObject(t)) for (i in t) me.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (r = ne.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this);
    }).prototype = me.fn, Ee = me(ne);
    var Ne = /^(?:parents|prev(?:Until|All))/, Pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    me.fn.extend({
        has: function(e) {
            var t = me(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (me.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], a = "string" != typeof e && me(e);
            if (!Te.test(e)) for (;i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(me(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), me.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return be(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n);
        },
        next: function(e) {
            return a(e, "nextSibling");
        },
        prev: function(e) {
            return a(e, "previousSibling");
        },
        nextAll: function(e) {
            return be(e, "nextSibling");
        },
        prevAll: function(e) {
            return be(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n);
        },
        siblings: function(e) {
            return Ce((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return Ce(e.firstChild);
        },
        contents: function(e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), 
            me.merge([], e.childNodes));
        }
    }, function(e, t) {
        me.fn[e] = function(n, i) {
            var r = me.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = me.filter(i, r)), 
            this.length > 1 && (Pe[e] || me.uniqueSort(r), Ne.test(e) && r.reverse()), this.pushStack(r);
        };
    });
    var Ie = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : me.extend({}, e);
        var t, n, i, r, o = [], a = [], l = -1, u = function() {
            for (r = r || e.once, i = t = !0; a.length; l = -1) for (n = a.shift(); ++l < o.length; ) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, 
            n = !1);
            e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
        }, c = {
            add: function() {
                return o && (n && !t && (l = o.length - 1, a.push(n)), function t(n) {
                    me.each(n, function(n, i) {
                        me.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== me.type(i) && t(i);
                    });
                }(arguments), n && !t && u()), this;
            },
            remove: function() {
                return me.each(arguments, function(e, t) {
                    for (var n; (n = me.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? me.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return r = a = [], o = n = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return r = a = [], n || t || (o = n = ""), this;
            },
            locked: function() {
                return !!r;
            },
            fireWith: function(e, n) {
                return r || (n = n || [], n = [ e, n.slice ? n.slice() : n ], a.push(n), t || u()), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return c;
    }, me.extend({
        Deferred: function(t) {
            var n = [ [ "notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2 ], [ "resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", r = {
                state: function() {
                    return i;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return r.then(null, e);
                },
                pipe: function() {
                    var e = arguments;
                    return me.Deferred(function(t) {
                        me.each(n, function(n, i) {
                            var r = me.isFunction(e[i[4]]) && e[i[4]];
                            o[i[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                then: function(t, i, r) {
                    function o(t, n, i, r) {
                        return function() {
                            var s = this, c = arguments, d = function() {
                                var e, d;
                                if (!(t < a)) {
                                    if ((e = i.apply(s, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    d = e && ("object" == typeof e || "function" == typeof e) && e.then, me.isFunction(d) ? r ? d.call(e, o(a, n, l, r), o(a, n, u, r)) : (a++, 
                                    d.call(e, o(a, n, l, r), o(a, n, u, r), o(a, n, l, n.notifyWith))) : (i !== l && (s = void 0, 
                                    c = [ e ]), (r || n.resolveWith)(s, c));
                                }
                            }, p = r ? d : function() {
                                try {
                                    d();
                                } catch (e) {
                                    me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (i !== u && (s = void 0, 
                                    c = [ e ]), n.rejectWith(s, c));
                                }
                            };
                            t ? p() : (me.Deferred.getStackHook && (p.stackTrace = me.Deferred.getStackHook()), 
                            e.setTimeout(p));
                        };
                    }
                    var a = 0;
                    return me.Deferred(function(e) {
                        n[0][3].add(o(0, e, me.isFunction(r) ? r : l, e.notifyWith)), n[1][3].add(o(0, e, me.isFunction(t) ? t : l)), 
                        n[2][3].add(o(0, e, me.isFunction(i) ? i : u));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? me.extend(e, r) : r;
                }
            }, o = {};
            return me.each(n, function(e, t) {
                var a = t[2], s = t[5];
                r[t[1]] = a.add, s && a.add(function() {
                    i = s;
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + "With"] = a.fireWith;
            }), r.promise(o), t && t.call(o, o), o;
        },
        when: function(e) {
            var t = arguments.length, n = t, i = Array(n), r = re.call(arguments), o = me.Deferred(), a = function(e) {
                return function(n) {
                    i[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(i, r);
                };
            };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || me.isFunction(r[n] && r[n].then))) return o.then();
            for (;n--; ) c(r[n], a(n), o.reject);
            return o.promise();
        }
    });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, me.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    };
    var je = me.Deferred();
    me.fn.ready = function(e) {
        return je.then(e).catch(function(e) {
            me.readyException(e);
        }), this;
    }, me.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --me.readyWait : me.isReady) || (me.isReady = !0, !0 !== e && --me.readyWait > 0 || je.resolveWith(ne, [ me ]));
        }
    }), me.ready.then = je.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(me.ready) : (ne.addEventListener("DOMContentLoaded", d), 
    e.addEventListener("load", d));
    var Oe = function(e, t, n, i, r, o, a) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === me.type(n)) {
            r = !0;
            for (s in n) Oe(e, t, s, n[s], !0, o, a);
        } else if (void 0 !== i && (r = !0, me.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), 
        t = null) : (u = t, t = function(e, t, n) {
            return u.call(me(e), n);
        })), t)) for (;s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    }, Le = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    p.uid = 1, p.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[me.camelCase(t)] = n; else for (i in t) r[me.camelCase(i)] = t[i];
            return r;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in i ? [ t ] : t.match(Ie) || []), 
                    n = t.length;
                    for (;n--; ) delete i[t[n]];
                }
                (void 0 === t || me.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !me.isEmptyObject(t);
        }
    };
    var He = new p(), Me = new p(), qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Fe = /[A-Z]/g;
    me.extend({
        hasData: function(e) {
            return Me.hasData(e) || He.hasData(e);
        },
        data: function(e, t, n) {
            return Me.access(e, t, n);
        },
        removeData: function(e, t) {
            Me.remove(e, t);
        },
        _data: function(e, t, n) {
            return He.access(e, t, n);
        },
        _removeData: function(e, t) {
            He.remove(e, t);
        }
    }), me.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Me.get(o), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; ) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = me.camelCase(i.slice(5)), 
                    h(o, i, r[i]));
                    He.set(o, "hasDataAttrs", !0);
                }
                return r;
            }
            return "object" == typeof e ? this.each(function() {
                Me.set(this, e);
            }) : Oe(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Me.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n;
                } else this.each(function() {
                    Me.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                Me.remove(this, e);
            });
        }
    }), me.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = He.get(e, t), n && (!i || Array.isArray(n) ? i = He.access(e, t, me.makeArray(n)) : i.push(n)), 
            i || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = me.queue(e, t), i = n.length, r = n.shift(), o = me._queueHooks(e, t), a = function() {
                me.dequeue(e, t);
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return He.get(e, n) || He.access(e, n, {
                empty: me.Callbacks("once memory").add(function() {
                    He.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), me.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = me.queue(this, e, t);
                me._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                me.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, r = me.Deferred(), o = this, a = this.length, s = function() {
                --i || r.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = He.get(o[a], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(s));
            return s(), r.promise(t);
        }
    });
    var We = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ze = new RegExp("^(?:([+-])=|)(" + We + ")([a-z%]*)$", "i"), _e = [ "Top", "Right", "Bottom", "Left" ], Re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display");
    }, Be = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = a[o];
        return r;
    }, $e = {};
    me.fn.extend({
        show: function() {
            return g(this, !0);
        },
        hide: function() {
            return g(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? me(this).show() : me(this).hide();
            });
        }
    });
    var Xe = /^(?:checkbox|radio)$/i, Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ge = /^$|\/(?:java|ecma)script/i, Qe = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, 
    Qe.th = Qe.td;
    var Ke = /<|&#?\w+;/;
    !function() {
        var e = ne.createDocumentFragment().appendChild(ne.createElement("div")), t = ne.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ye = ne.documentElement, Ve = /^key/, Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Je = /^([^.]*)(?:\.(.+)|)/;
    me.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, p, f, h, m, v = He.get(e);
            if (v) for (n.handler && (o = n, n = o.handler, r = o.selector), r && me.find.matchesSelector(Ye, r), 
            n.guid || (n.guid = me.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                return void 0 !== me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0;
            }), u = (t = (t || "").match(Ie) || [ "" ]).length; u--; ) s = Je.exec(t[u]) || [], 
            f = m = s[1], h = (s[2] || "").split(".").sort(), f && (d = me.event.special[f] || {}, 
            f = (r ? d.delegateType : d.bindType) || f, d = me.event.special[f] || {}, c = me.extend({
                type: f,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && me.expr.match.needsContext.test(r),
                namespace: h.join(".")
            }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(f, a)), 
            d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
            me.event.global[f] = !0);
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, p, f, h, m, v = He.hasData(e) && He.get(e);
            if (v && (l = v.events)) {
                for (u = (t = (t || "").match(Ie) || [ "" ]).length; u--; ) if (s = Je.exec(t[u]) || [], 
                f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                    for (d = me.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; ) c = p[o], 
                    !r && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), 
                    c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                    a && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || me.removeEvent(e, f, v.handle), 
                    delete l[f]);
                } else for (f in l) me.event.remove(e, f + t[u], n, i, !0);
                me.isEmptyObject(l) && He.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, a, s = me.event.fix(e), l = new Array(arguments.length), u = (He.get(this, "events") || {})[s.type] || [], c = me.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = me.event.handlers.call(this, s, u), t = 0; (r = a[t++]) && !s.isPropagationStopped(); ) for (s.currentTarget = r.elem, 
                n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped(); ) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, 
                s.data = o.data, void 0 !== (i = ((me.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), 
                s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a, s = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (o = [], a = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === a[r] && (a[r] = i.needsContext ? me(r, this).index(u) > -1 : me.find(r, this, null, [ u ]).length), 
                a[r] && o.push(i);
                o.length && s.push({
                    elem: u,
                    handlers: o
                });
            }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s;
        },
        addProp: function(e, t) {
            Object.defineProperty(me.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: me.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e];
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                }
            });
        },
        fix: function(e) {
            return e[me.expando] ? e : new me.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return r(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, me.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, me.Event = function(e, t) {
        return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : C, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void (this[me.expando] = !0)) : new me.Event(e, t);
    }, me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, me.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, me.event.addProp), me.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        me.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || me.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), me.fn.extend({
        on: function(e, t, n, i) {
            return S(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return S(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, me(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), 
            this.each(function() {
                me.event.remove(this, e, n, t);
            });
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, tt = /<script|<style|<link/i, nt = /checked\s*(?:[^=]|=\s*.checked.)/i, it = /^true\/(.*)/, rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0), l = me.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e))) for (a = y(s), 
            o = y(e), i = 0, r = o.length; i < r; i++) P(o[i], a[i]);
            if (t) if (n) for (o = o || y(e), a = a || y(s), i = 0, r = o.length; i < r; i++) N(o[i], a[i]); else N(e, s);
            return (a = y(s, "script")).length > 0 && x(a, !l && y(e, "script")), s;
        },
        cleanData: function(e) {
            for (var t, n, i, r = me.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Le(n)) {
                if (t = n[He.expando]) {
                    if (t.events) for (i in t.events) r[i] ? me.event.remove(n, i) : me.removeEvent(n, i, t.handle);
                    n[He.expando] = void 0;
                }
                n[Me.expando] && (n[Me.expando] = void 0);
            }
        }
    }), me.fn.extend({
        detach: function(e) {
            return D(this, e, !0);
        },
        remove: function(e) {
            return D(this, e);
        },
        text: function(e) {
            return Oe(this, function(e) {
                return void 0 === e ? me.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return I(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return I(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(y(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return me.clone(this, e, t);
            });
        },
        html: function(e) {
            return Oe(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !tt.test(e) && !Qe[(Ue.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = me.htmlPrefilter(e);
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (me.cleanData(y(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return I(this, arguments, function(t) {
                var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(y(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), me.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        me.fn[e] = function(e) {
            for (var n, i = [], r = me(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
            me(r[a])[t](n), ae.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var ot = /^margin/, at = new RegExp("^(" + We + ")(?!px)[a-z%]+$", "i"), st = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                s.innerHTML = "", Ye.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", 
                r = "4px" === t.marginRight, Ye.removeChild(a), s = null;
            }
        }
        var n, i, r, o, a = ne.createElement("div"), s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", 
        fe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        a.appendChild(s), me.extend(fe, {
            pixelPosition: function() {
                return t(), n;
            },
            boxSizingReliable: function() {
                return t(), i;
            },
            pixelMarginRight: function() {
                return t(), r;
            },
            reliableMarginLeft: function() {
                return t(), o;
            }
        }));
    }();
    var lt = /^(none|table(?!-c[ea]).+)/, ut = /^--/, ct = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, dt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, pt = [ "Webkit", "Moz", "ms" ], ft = ne.createElement("div").style;
    me.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = j(e, "opacity");
                        return "" === n ? "1" : n;
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
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = me.camelCase(t), l = ut.test(t), u = e.style;
                return l || (t = H(s)), a = me.cssHooks[t] || me.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t] : ("string" === (o = typeof n) && (r = ze.exec(n)) && r[1] && (n = m(e, t, r), 
                o = "number"), void (null != n && n === n && ("number" === o && (n += r && r[3] || (me.cssNumber[s] ? "" : "px")), 
                fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))));
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = me.camelCase(t);
            return ut.test(t) || (t = H(s)), (a = me.cssHooks[t] || me.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), 
            void 0 === r && (r = j(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (o = parseFloat(r), 
            !0 === n || isFinite(o) ? o || 0 : r) : r;
        }
    }), me.each([ "height", "width" ], function(e, t) {
        me.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !lt.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : Be(e, ct, function() {
                    return F(e, t, i);
                });
            },
            set: function(e, n, i) {
                var r, o = i && st(e), a = i && q(e, t, i, "border-box" === me.css(e, "boxSizing", !1, o), o);
                return a && (r = ze.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = me.css(e, t)), 
                M(e, n, a);
            }
        };
    }), me.cssHooks.marginLeft = O(fe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), me.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        me.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; i < 4; i++) r[e + _e[i] + t] = o[i] || o[i - 2] || o[0];
                return r;
            }
        }, ot.test(e) || (me.cssHooks[e + t].set = M);
    }), me.fn.extend({
        css: function(e, t) {
            return Oe(this, function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = st(e), r = t.length; a < r; a++) o[t[a]] = me.css(e, t[a], !1, i);
                    return o;
                }
                return void 0 !== n ? me.style(e, t, n) : me.css(e, t);
            }, e, t, arguments.length > 1);
        }
    }), me.Tween = W, W.prototype = {
        constructor: W,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || me.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = i, this.unit = o || (me.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = W.propHooks[this.prop];
            return e && e.get ? e.get(this) : W.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = W.propHooks[this.prop];
            return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : W.propHooks._default.set(this), this;
        }
    }, W.prototype.init.prototype = W.prototype, W.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0);
            },
            set: function(e) {
                me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, me.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, me.fx = W.prototype.init, me.fx.step = {};
    var ht, mt, vt = /^(?:toggle|show|hide)$/, gt = /queueHooks$/;
    me.Animation = me.extend(U, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return m(n.elem, e, ze.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            me.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(Ie);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], 
            U.tweeners[n].unshift(t);
        },
        prefilters: [ $ ],
        prefilter: function(e, t) {
            t ? U.prefilters.unshift(e) : U.prefilters.push(e);
        }
    }), me.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? me.extend({}, e) : {
            complete: n || !n && t || me.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !me.isFunction(t) && t
        };
        return me.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in me.fx.speeds ? i.duration = me.fx.speeds[i.duration] : i.duration = me.fx.speeds._default), 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            me.isFunction(i.old) && i.old.call(this), i.queue && me.dequeue(this, i.queue);
        }, i;
    }, me.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(e, t, n, i) {
            var r = me.isEmptyObject(e), o = me.speed(t, n, i), a = function() {
                var t = U(this, me.extend({}, e), o);
                (r || He.get(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, r = null != e && e + "queueHooks", o = me.timers, a = He.get(this);
                if (r) a[r] && a[r].stop && i(a[r]); else for (r in a) a[r] && a[r].stop && gt.test(r) && i(a[r]);
                for (r = o.length; r--; ) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), 
                t = !1, o.splice(r, 1));
                !t && n || me.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = He.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = me.timers, a = i ? i.length : 0;
                for (n.finish = !0, me.queue(this, e, []), r && r.stop && r.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
            });
        }
    }), me.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = me.fn[t];
        me.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, r);
        };
    }), me.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        me.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
        };
    }), me.timers = [], me.fx.tick = function() {
        var e, t = 0, n = me.timers;
        for (ht = me.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || me.fx.stop(), ht = void 0;
    }, me.fx.timer = function(e) {
        me.timers.push(e), me.fx.start();
    }, me.fx.interval = 13, me.fx.start = function() {
        mt || (mt = !0, z());
    }, me.fx.stop = function() {
        mt = null;
    }, me.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, me.fn.delay = function(t, n) {
        return t = me.fx ? me.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r);
            };
        });
    }, function() {
        var e = ne.createElement("input"), t = ne.createElement("select").appendChild(ne.createElement("option"));
        e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = t.selected, (e = ne.createElement("input")).value = "t", 
        e.type = "radio", fe.radioValue = "t" === e.value;
    }();
    var yt, xt = me.expr.attrHandle;
    me.fn.extend({
        attr: function(e, t) {
            return Oe(this, me.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                me.removeAttr(this, e);
            });
        }
    }), me.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? me.prop(e, t, n) : (1 === o && me.isXMLDoc(e) || (r = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? yt : void 0)), 
            void 0 !== n ? null === n ? void me.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
            n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = me.find.attr(e, t), 
            null == i ? void 0 : i));
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && r(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(Ie);
            if (r && 1 === e.nodeType) for (;n = r[i++]; ) e.removeAttribute(n);
        }
    }), yt = {
        set: function(e, t, n) {
            return !1 === t ? me.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = xt[t] || me.find.attr;
        xt[t] = function(e, t, i) {
            var r, o, a = t.toLowerCase();
            return i || (o = xt[a], xt[a] = r, r = null != n(e, t, i) ? a : null, xt[a] = o), 
            r;
        };
    });
    var wt = /^(?:input|select|textarea|button)$/i, bt = /^(?:a|area)$/i;
    me.fn.extend({
        prop: function(e, t) {
            return Oe(this, me.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[me.propFix[e] || e];
            });
        }
    }), me.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && me.isXMLDoc(e) || (t = me.propFix[t] || t, 
            r = me.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = me.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), fe.optSelected || (me.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), me.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        me.propFix[this.toLowerCase()] = this;
    }), me.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).addClass(e.call(this, t, Q(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(Ie) || []; n = this[l++]; ) if (r = Q(n), 
            i = 1 === n.nodeType && " " + G(r) + " ") {
                for (a = 0; o = t[a++]; ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (s = G(i)) && n.setAttribute("class", s);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).removeClass(e.call(this, t, Q(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Ie) || []; n = this[l++]; ) if (r = Q(n), 
            i = 1 === n.nodeType && " " + G(r) + " ") {
                for (a = 0; o = t[a++]; ) for (;i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                r !== (s = G(i)) && n.setAttribute("class", s);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) {
                me(this).toggleClass(e.call(this, n, Q(this), t), t);
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n) for (i = 0, r = me(this), o = e.match(Ie) || []; t = o[i++]; ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || ((t = Q(this)) && He.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : He.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + G(Q(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var Ct = /\r/g;
    me.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = me.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, me(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = me.map(r, function(e) {
                    return null == e ? "" : e + "";
                })), (t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
            })) : r ? (t = me.valHooks[r.type] || me.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, 
            "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)) : void 0;
        }
    }), me.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = me.find.attr(e, "value");
                    return null != t ? t : G(me.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, a = e.selectedIndex, s = "select-one" === e.type, l = s ? null : [], u = s ? a + 1 : o.length;
                    for (i = a < 0 ? u : s ? a : 0; i < u; i++) if (((n = o[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                        if (t = me(n).val(), s) return t;
                        l.push(t);
                    }
                    return l;
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = me.makeArray(t), a = r.length; a--; ) i = r[a], 
                    (i.selected = me.inArray(me.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), me.each([ "radio", "checkbox" ], function() {
        me.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = me.inArray(me(e).val(), t) > -1;
            }
        }, fe.checkOn || (me.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, {
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, c, d, p = [ i || ne ], f = ce.call(t, "type") ? t.type : t, h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(f + me.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), 
            f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[me.expando] ? t : new me.Event(f, "object" == typeof t && t), 
            t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : me.makeArray(n, [ t ]), 
            d = me.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !me.isWindow(i)) {
                    for (l = d.delegateType || f, Tt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), 
                    s = a;
                    s === (i.ownerDocument || ne) && p.push(s.defaultView || s.parentWindow || e);
                }
                for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); ) t.type = o > 1 ? l : d.bindType || f, 
                (c = (He.get(a, "events") || {})[t.type] && He.get(a, "handle")) && c.apply(a, n), 
                (c = u && a[u]) && c.apply && Le(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Le(i) || u && me.isFunction(i[f]) && !me.isWindow(i) && ((s = i[u]) && (i[u] = null), 
                me.event.triggered = f, i[f](), me.event.triggered = void 0, s && (i[u] = s)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var i = me.extend(new me.Event(), n, {
                type: e,
                isSimulated: !0
            });
            me.event.trigger(i, null, t);
        }
    }), me.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                me.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return me.event.trigger(e, t, n, !0);
        }
    }), me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        me.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), me.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), fe.focusin = "onfocusin" in e, fe.focusin || me.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            me.event.simulate(t, e.target, me.event.fix(e));
        };
        me.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this, r = He.access(i, t);
                r || i.addEventListener(e, n, !0), He.access(i, t, (r || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, r = He.access(i, t) - 1;
                r ? He.access(i, t, r) : (i.removeEventListener(e, n, !0), He.remove(i, t));
            }
        };
    });
    var St = e.location, kt = me.now(), Et = /\?/;
    me.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t), 
        n;
    };
    var At = /\[\]$/, Nt = /\r?\n/g, Pt = /^(?:submit|button|image|reset|file)$/i, It = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = me.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (Array.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function() {
            r(this.name, this.value);
        }); else for (n in e) K(n, e[n], t, r);
        return i.join("&");
    }, me.fn.extend({
        serialize: function() {
            return me.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = me.prop(this, "elements");
                return e ? me.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !me(this).is(":disabled") && It.test(this.nodeName) && !Pt.test(e) && (this.checked || !Xe.test(e));
            }).map(function(e, t) {
                var n = me(this).val();
                return null == n ? null : Array.isArray(n) ? me.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                };
            }).get();
        }
    });
    var Dt = /%20/g, jt = /#.*$/, Ot = /([?&])_=[^&]*/, Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, qt = /^\/\//, Ft = {}, Wt = {}, zt = "*/".concat("*"), _t = ne.createElement("a");
    _t.href = St.href, me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: Ht.test(St.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
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
                "text json": JSON.parse,
                "text xml": me.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Z(Z(e, me.ajaxSettings), t) : Z(me.ajaxSettings, e);
        },
        ajaxPrefilter: Y(Ft),
        ajaxTransport: Y(Wt),
        ajax: function(t, n) {
            function i(t, n, i, s) {
                var u, p, f, w, b, C = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, a = s || "", T.readyState = t > 0 ? 4 : 0, 
                u = t >= 200 && t < 300 || 304 === t, i && (w = J(h, T, i)), w = ee(h, w, T, u), 
                u ? (h.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (me.lastModified[o] = b), 
                (b = T.getResponseHeader("etag")) && (me.etag[o] = b)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, 
                p = w.data, f = w.error, u = !f)) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), 
                T.status = t, T.statusText = (n || C) + "", u ? g.resolveWith(m, [ p, C, T ]) : g.rejectWith(m, [ T, C, f ]), 
                T.statusCode(x), x = void 0, d && v.trigger(u ? "ajaxSuccess" : "ajaxError", [ T, h, u ? p : f ]), 
                y.fireWith(m, [ T, C ]), d && (v.trigger("ajaxComplete", [ T, h ]), --me.active || me.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, u, c, d, p, f, h = me.ajaxSetup({}, n), m = h.context || h, v = h.context && (m.nodeType || m.jquery) ? me(m) : me.event, g = me.Deferred(), y = me.Callbacks("once memory"), x = h.statusCode || {}, w = {}, b = {}, C = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s) for (s = {}; t = Lt.exec(a); ) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return c ? a : null;
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, w[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (c) T.always(e[T.status]); else for (t in e) x[t] = [ x[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || C;
                    return r && r.abort(t), i(0, t), this;
                }
            };
            if (g.promise(T), h.url = ((t || h.url || St.href) + "").replace(qt, St.protocol + "//"), 
            h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ie) || [ "" ], 
            null == h.crossDomain) {
                u = ne.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = _t.protocol + "//" + _t.host != u.protocol + "//" + u.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = me.param(h.data, h.traditional)), 
            V(Ft, h, n, T), c) return T;
            (d = me.event && h.global) && 0 == me.active++ && me.event.trigger("ajaxStart"), 
            h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(jt, ""), 
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (f = h.url.slice(o.length), 
            h.data && (o += (Et.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ot, "$1"), 
            f = (Et.test(o) ? "&" : "?") + "_=" + kt++ + f), h.url = o + f), h.ifModified && (me.lastModified[o] && T.setRequestHeader("If-Modified-Since", me.lastModified[o]), 
            me.etag[o] && T.setRequestHeader("If-None-Match", me.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), 
            T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) T.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, T, h) || c)) return T.abort();
            if (C = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), r = V(Wt, h, n, T)) {
                if (T.readyState = 1, d && v.trigger("ajaxSend", [ T, h ]), c) return T;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout");
                }, h.timeout));
                try {
                    c = !1, r.send(w, i);
                } catch (e) {
                    if (c) throw e;
                    i(-1, e);
                }
            } else i(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return me.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return me.get(e, void 0, t, "script");
        }
    }), me.each([ "get", "post" ], function(e, t) {
        me[t] = function(e, n, i, r) {
            return me.isFunction(n) && (r = r || i, i = n, n = void 0), me.ajax(me.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, me.isPlainObject(e) && e));
        };
    }), me._evalUrl = function(e) {
        return me.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, me.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(e) {
            return me.isFunction(e) ? this.each(function(t) {
                me(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = me(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = me.isFunction(e);
            return this.each(function(n) {
                me(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                me(this).replaceWith(this.childNodes);
            }), this;
        }
    }), me.expr.pseudos.hidden = function(e) {
        return !me.expr.pseudos.visible(e);
    }, me.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, me.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var Rt = {
        0: 200,
        1223: 204
    }, Bt = me.ajaxSettings.xhr();
    fe.cors = !!Bt && "withCredentials" in Bt, fe.ajax = Bt = !!Bt, me.ajaxTransport(function(t) {
        var n, i;
        if (fe.cors || Bt && !t.crossDomain) return {
            send: function(r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (a in r) s.setRequestHeader(a, r[a]);
                n = function(e) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Rt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()));
                    };
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            },
            abort: function() {
                n && n();
            }
        };
    }), me.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), me.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return me.globalEval(e), e;
            }
        }
    }), me.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), me.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = me("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type);
                    }), ne.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var $t = [], Xt = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || me.expando + "_" + kt++;
            return this[e] = !0, e;
        }
    }), me.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        s ? t[s] = t[s].replace(Xt, "$1" + r) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), 
        t.converters["script json"] = function() {
            return a || me.error(r + " was not called"), a[0];
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments;
        }, i.always(function() {
            void 0 === o ? me(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, 
            $t.push(r)), a && me.isFunction(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), fe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), me.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, o;
        return t || (fe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), 
        i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), 
        r = Se.exec(e), o = !n && [], r ? [ t.createElement(r[1]) ] : (r = w([ e ], t, o), 
        o && o.length && me(o).remove(), me.merge([], r.childNodes));
    }, me.fn.load = function(e, t, n) {
        var i, r, o, a = this, s = e.indexOf(" ");
        return s > -1 && (i = G(e.slice(s)), e = e.slice(0, s)), me.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && me.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? me("<div>").append(me.parseHTML(e)).find(i) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, me.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        me.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), me.expr.pseudos.animated = function(e) {
        return me.grep(me.timers, function(t) {
            return e === t.elem;
        }).length;
    }, me.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u = me.css(e, "position"), c = me(e), d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = me.css(e, "top"), 
            l = me.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (i = c.position(), 
            a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, s))), 
            null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), 
            "using" in t ? t.using.call(e, d) : c.css(d);
        }
    }, me.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                me.offset.setOffset(this, e, t);
            });
            var t, n, i, r, o = this[0];
            return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, 
            n = t.documentElement, r = t.defaultView, {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), r(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + me.css(e[0], "borderTopWidth", !0),
                    left: i.left + me.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - me.css(n, "marginTop", !0),
                    left: t.left - i.left - me.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === me.css(e, "position"); ) e = e.offsetParent;
                return e || Ye;
            });
        }
    }), me.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        me.fn[e] = function(i) {
            return Oe(this, function(e, i, r) {
                var o;
                return me.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r);
            }, e, i, arguments.length);
        };
    }), me.each([ "top", "left" ], function(e, t) {
        me.cssHooks[t] = O(fe.pixelPosition, function(e, n) {
            if (n) return n = j(e, t), at.test(n) ? me(e).position()[t] + "px" : n;
        });
    }), me.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        me.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            me.fn[i] = function(r, o) {
                var a = arguments.length && (n || "boolean" != typeof r), s = n || (!0 === r || !0 === o ? "margin" : "border");
                return Oe(this, function(t, n, r) {
                    var o;
                    return me.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? me.css(t, n, s) : me.style(t, n, r, s);
                }, t, a ? r : void 0, a);
            };
        });
    }), me.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), me.holdReady = function(e) {
        e ? me.readyWait++ : me.ready(!0);
    }, me.isArray = Array.isArray, me.parseJSON = JSON.parse, me.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() {
        return me;
    });
    var Ut = e.jQuery, Gt = e.$;
    return me.noConflict = function(t) {
        return e.$ === me && (e.$ = Gt), t && e.jQuery === me && (e.jQuery = Ut), me;
    }, t || (e.jQuery = e.$ = me), me;
}), function(e) {
    var t = !0;
    e.flexslider = function(n, i) {
        var r = e(n);
        r.vars = e.extend({}, e.flexslider.defaults, i);
        var o, a = r.vars.namespace, s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, l = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch, u = "click touchend MSPointerUp keyup", c = "", d = "vertical" === r.vars.direction, p = r.vars.reverse, f = r.vars.itemWidth > 0, h = "fade" === r.vars.animation, m = "" !== r.vars.asNavFor, v = {};
        e.data(n, "flexslider", r), v = {
            init: function() {
                r.animating = !1, r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10), 
                isNaN(r.currentSlide) && (r.currentSlide = 0), r.animatingTo = r.currentSlide, r.atEnd = 0 === r.currentSlide || r.currentSlide === r.last, 
                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" ")), r.slides = e(r.vars.selector, r), 
                r.container = e(r.containerSelector, r), r.count = r.slides.length, r.syncExists = e(r.vars.sync).length > 0, 
                "slide" === r.vars.animation && (r.vars.animation = "swing"), r.prop = d ? "top" : "marginLeft", 
                r.args = {}, r.manualPause = !1, r.stopped = !1, r.started = !1, r.startTimeout = null, 
                r.transitions = !r.vars.video && !h && r.vars.useCSS && function() {
                    var e = document.createElement("div"), t = [ "perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective" ];
                    for (var n in t) if (void 0 !== e.style[t[n]]) return r.pfx = t[n].replace("Perspective", "").toLowerCase(), 
                    r.prop = "-" + r.pfx + "-transform", !0;
                    return !1;
                }(), r.ensureAnimationEnd = "", "" !== r.vars.controlsContainer && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer)), 
                "" !== r.vars.manualControls && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls)), 
                "" !== r.vars.customDirectionNav && (r.customDirectionNav = 2 === e(r.vars.customDirectionNav).length && e(r.vars.customDirectionNav)), 
                r.vars.randomize && (r.slides.sort(function() {
                    return Math.round(Math.random()) - .5;
                }), r.container.empty().append(r.slides)), r.doMath(), r.setup("init"), r.vars.controlNav && v.controlNav.setup(), 
                r.vars.directionNav && v.directionNav.setup(), r.vars.keyboard && (1 === e(r.containerSelector).length || r.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
                    var t = e.keyCode;
                    if (!r.animating && (39 === t || 37 === t)) {
                        var n = 39 === t ? r.getTarget("next") : 37 === t && r.getTarget("prev");
                        r.flexAnimate(n, r.vars.pauseOnAction);
                    }
                }), r.vars.mousewheel && r.bind("mousewheel", function(e, t, n, i) {
                    e.preventDefault();
                    var o = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(o, r.vars.pauseOnAction);
                }), r.vars.pausePlay && v.pausePlay.setup(), r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init(), 
                r.vars.slideshow && (r.vars.pauseOnHover && r.hover(function() {
                    r.manualPlay || r.manualPause || r.pause();
                }, function() {
                    r.manualPause || r.manualPlay || r.stopped || r.play();
                }), r.vars.pauseInvisible && v.pauseInvisible.isHidden() || (r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play())), 
                m && v.asNav.setup(), l && r.vars.touch && v.touch(), (!h || h && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize), 
                r.find("img").attr("draggable", "false"), setTimeout(function() {
                    r.vars.start(r);
                }, 200);
            },
            asNav: {
                setup: function() {
                    r.asNav = !0, r.animatingTo = Math.floor(r.currentSlide / r.move), r.currentItem = r.currentSlide, 
                    r.slides.removeClass(a + "active-slide").eq(r.currentItem).addClass(a + "active-slide"), 
                    s ? (n._slider = r, r.slides.each(function() {
                        var t = this;
                        t._gesture = new MSGesture(), t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId);
                        }, !1), t.addEventListener("MSGestureTap", function(t) {
                            t.preventDefault();
                            var n = e(this), i = n.index();
                            e(r.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (r.direction = r.currentItem < i ? "next" : "prev", 
                            r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0));
                        });
                    })) : r.slides.on(u, function(t) {
                        t.preventDefault();
                        var n = e(this), i = n.index();
                        n.offset().left - e(r).scrollLeft() <= 0 && n.hasClass(a + "active-slide") ? r.flexAnimate(r.getTarget("prev"), !0) : e(r.vars.asNavFor).data("flexslider").animating || n.hasClass(a + "active-slide") || (r.direction = r.currentItem < i ? "next" : "prev", 
                        r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0));
                    });
                }
            },
            controlNav: {
                setup: function() {
                    r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging();
                },
                setupPaging: function() {
                    var t, n, i = "thumbnails" === r.vars.controlNav ? "control-thumbs" : "control-paging", o = 1;
                    if (r.controlNavScaffold = e('<ol class="' + a + "control-nav " + a + i + '"></ol>'), 
                    r.pagingCount > 1) for (var s = 0; s < r.pagingCount; s++) {
                        void 0 === (n = r.slides.eq(s)).attr("data-thumb-alt") && n.attr("data-thumb-alt", "");
                        var l = "" !== n.attr("data-thumb-alt") ? l = ' alt="' + n.attr("data-thumb-alt") + '"' : "";
                        if (t = "thumbnails" === r.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + o + "</a>", 
                        "thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
                            var d = n.attr("data-thumbcaption");
                            "" !== d && void 0 !== d && (t += '<span class="' + a + 'caption">' + d + "</span>");
                        }
                        r.controlNavScaffold.append("<li>" + t + "</li>"), o++;
                    }
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold), 
                    v.controlNav.set(), v.controlNav.active(), r.controlNavScaffold.delegate("a, img", u, function(t) {
                        if (t.preventDefault(), "" === c || c === t.type) {
                            var n = e(this), i = r.controlNav.index(n);
                            n.hasClass(a + "active") || (r.direction = i > r.currentSlide ? "next" : "prev", 
                            r.flexAnimate(i, r.vars.pauseOnAction));
                        }
                        "" === c && (c = t.type), v.setToClearWatchedEvent();
                    });
                },
                setupManual: function() {
                    r.controlNav = r.manualControls, v.controlNav.active(), r.controlNav.bind(u, function(t) {
                        if (t.preventDefault(), "" === c || c === t.type) {
                            var n = e(this), i = r.controlNav.index(n);
                            n.hasClass(a + "active") || (i > r.currentSlide ? r.direction = "next" : r.direction = "prev", 
                            r.flexAnimate(i, r.vars.pauseOnAction));
                        }
                        "" === c && (c = t.type), v.setToClearWatchedEvent();
                    });
                },
                set: function() {
                    var t = "thumbnails" === r.vars.controlNav ? "img" : "a";
                    r.controlNav = e("." + a + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r);
                },
                active: function() {
                    r.controlNav.removeClass(a + "active").eq(r.animatingTo).addClass(a + "active");
                },
                update: function(t, n) {
                    r.pagingCount > 1 && "add" === t ? r.controlNavScaffold.append(e('<li><a href="#">' + r.count + "</a></li>")) : 1 === r.pagingCount ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove(), 
                    v.controlNav.set(), r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active();
                }
            },
            directionNav: {
                setup: function() {
                    var t = e('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + r.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
                    r.customDirectionNav ? r.directionNav = r.customDirectionNav : r.controlsContainer ? (e(r.controlsContainer).append(t), 
                    r.directionNav = e("." + a + "direction-nav li a", r.controlsContainer)) : (r.append(t), 
                    r.directionNav = e("." + a + "direction-nav li a", r)), v.directionNav.update(), 
                    r.directionNav.bind(u, function(t) {
                        t.preventDefault();
                        var n;
                        "" !== c && c !== t.type || (n = e(this).hasClass(a + "next") ? r.getTarget("next") : r.getTarget("prev"), 
                        r.flexAnimate(n, r.vars.pauseOnAction)), "" === c && (c = t.type), v.setToClearWatchedEvent();
                    });
                },
                update: function() {
                    var e = a + "disabled";
                    1 === r.pagingCount ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : 0 === r.animatingTo ? r.directionNav.removeClass(e).filter("." + a + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + a + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex");
                }
            },
            pausePlay: {
                setup: function() {
                    var t = e('<div class="' + a + 'pauseplay"><a href="#"></a></div>');
                    r.controlsContainer ? (r.controlsContainer.append(t), r.pausePlay = e("." + a + "pauseplay a", r.controlsContainer)) : (r.append(t), 
                    r.pausePlay = e("." + a + "pauseplay a", r)), v.pausePlay.update(r.vars.slideshow ? a + "pause" : a + "play"), 
                    r.pausePlay.bind(u, function(t) {
                        t.preventDefault(), "" !== c && c !== t.type || (e(this).hasClass(a + "pause") ? (r.manualPause = !0, 
                        r.manualPlay = !1, r.pause()) : (r.manualPause = !1, r.manualPlay = !0, r.play())), 
                        "" === c && (c = t.type), v.setToClearWatchedEvent();
                    });
                },
                update: function(e) {
                    "play" === e ? r.pausePlay.removeClass(a + "pause").addClass(a + "play").html(r.vars.playText) : r.pausePlay.removeClass(a + "play").addClass(a + "pause").html(r.vars.pauseText);
                }
            },
            touch: function() {
                function e(e) {
                    e.stopPropagation(), r.animating ? e.preventDefault() : (r.pause(), n._gesture.addPointer(e.pointerId), 
                    C = 0, u = d ? r.h : r.w, m = Number(new Date()), l = f && p && r.animatingTo === r.last ? 0 : f && p ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : f && r.currentSlide === r.last ? r.limit : f ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : p ? (r.last - r.currentSlide + r.cloneOffset) * u : (r.currentSlide + r.cloneOffset) * u);
                }
                function t(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        var i = -e.translationX, r = -e.translationY;
                        c = C += d ? r : i, x = d ? Math.abs(C) < Math.abs(-i) : Math.abs(C) < Math.abs(-r), 
                        e.detail !== e.MSGESTURE_FLAG_INERTIA ? (!x || Number(new Date()) - m > 500) && (e.preventDefault(), 
                        !h && t.transitions && (t.vars.animationLoop || (c = C / (0 === t.currentSlide && C < 0 || t.currentSlide === t.last && C > 0 ? Math.abs(C) / u + 2 : 1)), 
                        t.setProps(l + c, "setTouch"))) : setImmediate(function() {
                            n._gesture.stop();
                        });
                    }
                }
                function i(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !x && null !== c) {
                            var n = p ? -c : c, i = n > 0 ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(i) && (Number(new Date()) - m < 550 && Math.abs(n) > 50 || Math.abs(n) > u / 2) ? t.flexAnimate(i, t.vars.pauseOnAction) : h || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0);
                        }
                        o = null, a = null, c = null, l = null, C = 0;
                    }
                }
                var o, a, l, u, c, m, v, g, y, x = !1, w = 0, b = 0, C = 0;
                s ? (n.style.msTouchAction = "none", n._gesture = new MSGesture(), n._gesture.target = n, 
                n.addEventListener("MSPointerDown", e, !1), n._slider = r, n.addEventListener("MSGestureChange", t, !1), 
                n.addEventListener("MSGestureEnd", i, !1)) : (v = function(e) {
                    r.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (r.pause(), 
                    u = d ? r.h : r.w, m = Number(new Date()), w = e.touches[0].pageX, b = e.touches[0].pageY, 
                    l = f && p && r.animatingTo === r.last ? 0 : f && p ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : f && r.currentSlide === r.last ? r.limit : f ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : p ? (r.last - r.currentSlide + r.cloneOffset) * u : (r.currentSlide + r.cloneOffset) * u, 
                    o = d ? b : w, a = d ? w : b, n.addEventListener("touchmove", g, !1), n.addEventListener("touchend", y, !1));
                }, g = function(e) {
                    w = e.touches[0].pageX, b = e.touches[0].pageY, c = d ? o - b : o - w;
                    (!(x = d ? Math.abs(c) < Math.abs(w - a) : Math.abs(c) < Math.abs(b - a)) || Number(new Date()) - m > 500) && (e.preventDefault(), 
                    !h && r.transitions && (r.vars.animationLoop || (c /= 0 === r.currentSlide && c < 0 || r.currentSlide === r.last && c > 0 ? Math.abs(c) / u + 2 : 1), 
                    r.setProps(l + c, "setTouch")));
                }, y = function(e) {
                    if (n.removeEventListener("touchmove", g, !1), r.animatingTo === r.currentSlide && !x && null !== c) {
                        var t = p ? -c : c, i = t > 0 ? r.getTarget("next") : r.getTarget("prev");
                        r.canAdvance(i) && (Number(new Date()) - m < 550 && Math.abs(t) > 50 || Math.abs(t) > u / 2) ? r.flexAnimate(i, r.vars.pauseOnAction) : h || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0);
                    }
                    n.removeEventListener("touchend", y, !1), o = null, a = null, c = null, l = null;
                }, n.addEventListener("touchstart", v, !1));
            },
            resize: function() {
                !r.animating && r.is(":visible") && (f || r.doMath(), h ? v.smoothHeight() : f ? (r.slides.width(r.computedW), 
                r.update(r.pagingCount), r.setProps()) : d ? (r.viewport.height(r.h), r.setProps(r.h, "setTotal")) : (r.vars.smoothHeight && v.smoothHeight(), 
                r.newSlides.width(r.computedW), r.setProps(r.computedW, "setTotal")));
            },
            smoothHeight: function(e) {
                if (!d || h) {
                    var t = h ? r : r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).innerHeight()
                    }, e) : t.innerHeight(r.slides.eq(r.animatingTo).innerHeight());
                }
            },
            sync: function(t) {
                var n = e(r.vars.sync).data("flexslider"), i = r.animatingTo;
                switch (t) {
                  case "animate":
                    n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
                    break;

                  case "play":
                    n.playing || n.asNav || n.play();
                    break;

                  case "pause":
                    n.pause();
                }
            },
            uniqueID: function(t) {
                return t.filter("[id]").add(t.find("[id]")).each(function() {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone");
                }), t;
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = v.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function() {
                            v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play();
                        });
                    }
                },
                isHidden: function() {
                    var e = v.pauseInvisible.getHiddenProp();
                    return !!e && document[e];
                },
                getHiddenProp: function() {
                    var e = [ "webkit", "moz", "ms", "o" ];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null;
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(o), o = setTimeout(function() {
                    c = "";
                }, 3e3);
            }
        }, r.flexAnimate = function(t, n, i, o, s) {
            if (r.vars.animationLoop || t === r.currentSlide || (r.direction = t > r.currentSlide ? "next" : "prev"), 
            m && 1 === r.pagingCount && (r.direction = r.currentItem < t ? "next" : "prev"), 
            !r.animating && (r.canAdvance(t, s) || i) && r.is(":visible")) {
                if (m && o) {
                    var u = e(r.vars.asNavFor).data("flexslider");
                    if (r.atEnd = 0 === t || t === r.count - 1, u.flexAnimate(t, !0, !1, !0, s), r.direction = r.currentItem < t ? "next" : "prev", 
                    u.direction = r.direction, Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || 0 === t) return r.currentItem = t, 
                    r.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), !1;
                    r.currentItem = t, r.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), 
                    t = Math.floor(t / r.visible);
                }
                if (r.animating = !0, r.animatingTo = t, n && r.pause(), r.vars.before(r), r.syncExists && !s && v.sync("animate"), 
                r.vars.controlNav && v.controlNav.active(), f || r.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), 
                r.atEnd = 0 === t || t === r.last, r.vars.directionNav && v.directionNav.update(), 
                t === r.last && (r.vars.end(r), r.vars.animationLoop || r.pause()), h) l ? (r.slides.eq(r.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), r.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), r.wrapup(x)) : (r.slides.eq(r.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, r.vars.animationSpeed, r.vars.easing), r.slides.eq(t).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, r.vars.animationSpeed, r.vars.easing, r.wrapup)); else {
                    var c, g, y, x = d ? r.slides.filter(":first").height() : r.computedW;
                    f ? (c = r.vars.itemMargin, g = (y = (r.itemW + c) * r.move * r.animatingTo) > r.limit && 1 !== r.visible ? r.limit : y) : g = 0 === r.currentSlide && t === r.count - 1 && r.vars.animationLoop && "next" !== r.direction ? p ? (r.count + r.cloneOffset) * x : 0 : r.currentSlide === r.last && 0 === t && r.vars.animationLoop && "prev" !== r.direction ? p ? 0 : (r.count + 1) * x : p ? (r.count - 1 - t + r.cloneOffset) * x : (t + r.cloneOffset) * x, 
                    r.setProps(g, "", r.vars.animationSpeed), r.transitions ? (r.vars.animationLoop && r.atEnd || (r.animating = !1, 
                    r.currentSlide = r.animatingTo), r.container.unbind("webkitTransitionEnd transitionend"), 
                    r.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(r.ensureAnimationEnd), r.wrapup(x);
                    }), clearTimeout(r.ensureAnimationEnd), r.ensureAnimationEnd = setTimeout(function() {
                        r.wrapup(x);
                    }, r.vars.animationSpeed + 100)) : r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function() {
                        r.wrapup(x);
                    });
                }
                r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed);
            }
        }, r.wrapup = function(e) {
            h || f || (0 === r.currentSlide && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && 0 === r.animatingTo && r.vars.animationLoop && r.setProps(e, "jumpStart")), 
            r.animating = !1, r.currentSlide = r.animatingTo, r.vars.after(r);
        }, r.animateSlides = function() {
            !r.animating && t && r.flexAnimate(r.getTarget("next"));
        }, r.pause = function() {
            clearInterval(r.animatedSlides), r.animatedSlides = null, r.playing = !1, r.vars.pausePlay && v.pausePlay.update("play"), 
            r.syncExists && v.sync("pause");
        }, r.play = function() {
            r.playing && clearInterval(r.animatedSlides), r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed), 
            r.started = r.playing = !0, r.vars.pausePlay && v.pausePlay.update("pause"), r.syncExists && v.sync("play");
        }, r.stop = function() {
            r.pause(), r.stopped = !0;
        }, r.canAdvance = function(e, t) {
            var n = m ? r.pagingCount - 1 : r.last;
            return !!t || (!(!m || r.currentItem !== r.count - 1 || 0 !== e || "prev" !== r.direction) || (!m || 0 !== r.currentItem || e !== r.pagingCount - 1 || "next" === r.direction) && (!(e === r.currentSlide && !m) && (!!r.vars.animationLoop || (!r.atEnd || 0 !== r.currentSlide || e !== n || "next" === r.direction) && (!r.atEnd || r.currentSlide !== n || 0 !== e || "next" !== r.direction))));
        }, r.getTarget = function(e) {
            return r.direction = e, "next" === e ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : 0 === r.currentSlide ? r.last : r.currentSlide - 1;
        }, r.setProps = function(e, t, n) {
            var i = function() {
                var n = e || (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo;
                return -1 * function() {
                    if (f) return "setTouch" === t ? e : p && r.animatingTo === r.last ? 0 : p ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;
                    switch (t) {
                      case "setTotal":
                        return p ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;

                      case "setTouch":
                        return e;

                      case "jumpEnd":
                        return p ? e : r.count * e;

                      case "jumpStart":
                        return p ? r.count * e : e;

                      default:
                        return e;
                    }
                }() + "px";
            }();
            r.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", 
            n = void 0 !== n ? n / 1e3 + "s" : "0s", r.container.css("-" + r.pfx + "-transition-duration", n), 
            r.container.css("transition-duration", n)), r.args[r.prop] = i, (r.transitions || void 0 === n) && r.container.css(r.args), 
            r.container.css("transform", i);
        }, r.setup = function(t) {
            if (h) r.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (l ? r.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(r.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == r.vars.fadeFirstSlide ? r.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(r.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : r.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(r.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, r.vars.animationSpeed, r.vars.easing)), r.vars.smoothHeight && v.smoothHeight(); else {
                var n, i;
                "init" === t && (r.viewport = e('<div class="' + a + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(r).append(r.container), r.cloneCount = 0, r.cloneOffset = 0, p && (i = e.makeArray(r.slides).reverse(), 
                r.slides = e(i), r.container.empty().append(r.slides))), r.vars.animationLoop && !f && (r.cloneCount = 2, 
                r.cloneOffset = 1, "init" !== t && r.container.find(".clone").remove(), r.container.append(v.uniqueID(r.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(v.uniqueID(r.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), 
                r.newSlides = e(r.vars.selector, r), n = p ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset, 
                d && !f ? (r.container.height(200 * (r.count + r.cloneCount) + "%").css("position", "absolute").width("100%"), 
                setTimeout(function() {
                    r.newSlides.css({
                        display: "block"
                    }), r.doMath(), r.viewport.height(r.h), r.setProps(n * r.h, "init");
                }, "init" === t ? 100 : 0)) : (r.container.width(200 * (r.count + r.cloneCount) + "%"), 
                r.setProps(n * r.computedW, "init"), setTimeout(function() {
                    r.doMath(), r.newSlides.css({
                        width: r.computedW,
                        marginRight: r.computedM,
                        float: "left",
                        display: "block"
                    }), r.vars.smoothHeight && v.smoothHeight();
                }, "init" === t ? 100 : 0));
            }
            f || r.slides.removeClass(a + "active-slide").eq(r.currentSlide).addClass(a + "active-slide"), 
            r.vars.init(r);
        }, r.doMath = function() {
            var e = r.slides.first(), t = r.vars.itemMargin, n = r.vars.minItems, i = r.vars.maxItems;
            r.w = void 0 === r.viewport ? r.width() : r.viewport.width(), r.h = e.height(), 
            r.boxPadding = e.outerWidth() - e.width(), f ? (r.itemT = r.vars.itemWidth + t, 
            r.itemM = t, r.minW = n ? n * r.itemT : r.w, r.maxW = i ? i * r.itemT - t : r.w, 
            r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth, 
            r.visible = Math.floor(r.w / r.itemW), r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible, 
            r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1), r.last = r.pagingCount - 1, 
            r.limit = 1 === r.pagingCount ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t) : (r.itemW = r.w, 
            r.itemM = t, r.pagingCount = r.count, r.last = r.count - 1), r.computedW = r.itemW - r.boxPadding, 
            r.computedM = r.itemM;
        }, r.update = function(e, t) {
            r.doMath(), f || (e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && 0 !== e && (r.currentSlide -= 1), 
            r.animatingTo = r.currentSlide), r.vars.controlNav && !r.manualControls && ("add" === t && !f || r.pagingCount > r.controlNav.length ? v.controlNav.update("add") : ("remove" === t && !f || r.pagingCount < r.controlNav.length) && (f && r.currentSlide > r.last && (r.currentSlide -= 1, 
            r.animatingTo -= 1), v.controlNav.update("remove", r.last))), r.vars.directionNav && v.directionNav.update();
        }, r.addSlide = function(t, n) {
            var i = e(t);
            r.count += 1, r.last = r.count - 1, d && p ? void 0 !== n ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : void 0 !== n ? r.slides.eq(n).before(i) : r.container.append(i), 
            r.update(n, "add"), r.slides = e(r.vars.selector + ":not(.clone)", r), r.setup(), 
            r.vars.added(r);
        }, r.removeSlide = function(t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1, r.last = r.count - 1, isNaN(t) ? e(t, r.slides).remove() : d && p ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove(), 
            r.doMath(), r.update(n, "remove"), r.slides = e(r.vars.selector + ":not(.clone)", r), 
            r.setup(), r.vars.removed(r);
        }, v.init();
    }, e(window).blur(function(e) {
        t = !1;
    }).focus(function(e) {
        t = !0;
    }), e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, e.fn.flexslider = function(t) {
        if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
            var n = e(this), i = t.selector ? t.selector : ".slides > li", r = n.find(i);
            1 === r.length && !1 === t.allowOneSlide || 0 === r.length ? (r.fadeIn(400), t.start && t.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, t);
        });
        var n = e(this).data("flexslider");
        switch (t) {
          case "play":
            n.play();
            break;

          case "pause":
            n.pause();
            break;

          case "stop":
            n.stop();
            break;

          case "next":
            n.flexAnimate(n.getTarget("next"), !0);
            break;

          case "prev":
          case "previous":
            n.flexAnimate(n.getTarget("prev"), !0);
            break;

          default:
            "number" == typeof t && n.flexAnimate(t, !0);
        }
    };
}(jQuery), function() {
    "use strict";
    function e(i) {
        if (!i) throw new Error("No options passed to Waypoint constructor");
        if (!i.element) throw new Error("No element option passed to Waypoint constructor");
        if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, i), 
        this.element = this.options.element, this.adapter = new e.Adapter(this.element), 
        this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", 
        this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), 
        this.group.add(this), this.context.add(this), n[this.key] = this, t += 1;
    }
    var t = 0, n = {};
    e.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e);
    }, e.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e);
    }, e.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete n[this.key];
    }, e.prototype.disable = function() {
        return this.enabled = !1, this;
    }, e.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this;
    }, e.prototype.next = function() {
        return this.group.next(this);
    }, e.prototype.previous = function() {
        return this.group.previous(this);
    }, e.invokeAll = function(e) {
        var t = [];
        for (var i in n) t.push(n[i]);
        for (var r = 0, o = t.length; r < o; r++) t[r][e]();
    }, e.destroyAll = function() {
        e.invokeAll("destroy");
    }, e.disableAll = function() {
        e.invokeAll("disable");
    }, e.enableAll = function() {
        e.Context.refreshAll();
        for (var t in n) n[t].enabled = !0;
        return this;
    }, e.refreshAll = function() {
        e.Context.refreshAll();
    }, e.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight;
    }, e.viewportWidth = function() {
        return document.documentElement.clientWidth;
    }, e.adapters = [], e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, e.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth();
        }
    }, window.Waypoint = e;
}(), function() {
    "use strict";
    function e(e) {
        window.setTimeout(e, 1e3 / 60);
    }
    function t(e) {
        this.element = e, this.Adapter = r.Adapter, this.adapter = new this.Adapter(e), 
        this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, r.windowContext || (r.windowContext = !0, 
        r.windowContext = new t(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
    }
    var n = 0, i = {}, r = window.Waypoint, o = window.onload;
    t.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e, this.refresh();
    }, t.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal), t = this.Adapter.isEmptyObject(this.waypoints.vertical), n = this.element == this.element.window;
        e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key]);
    }, t.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(), t.didResize = !1;
        }
        var t = this;
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0, r.requestAnimationFrame(e));
        });
    }, t.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(), t.didScroll = !1;
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            t.didScroll && !r.isTouch || (t.didScroll = !0, r.requestAnimationFrame(e));
        });
    }, t.prototype.handleResize = function() {
        r.Context.refreshAll();
    }, t.prototype.handleScroll = function() {
        var e = {}, t = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var n in t) {
            var i = t[n], r = i.newScroll > i.oldScroll ? i.forward : i.backward;
            for (var o in this.waypoints[n]) {
                var a = this.waypoints[n][o];
                if (null !== a.triggerPoint) {
                    var s = i.oldScroll < a.triggerPoint, l = i.newScroll >= a.triggerPoint, u = s && l, c = !s && !l;
                    (u || c) && (a.queueTrigger(r), e[a.group.id] = a.group);
                }
            }
        }
        for (var d in e) e[d].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        };
    }, t.prototype.innerHeight = function() {
        return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight();
    }, t.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty();
    }, t.prototype.innerWidth = function() {
        return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth();
    }, t.prototype.destroy = function() {
        var e = [];
        for (var t in this.waypoints) for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var i = 0, r = e.length; i < r; i++) e[i].destroy();
    }, t.prototype.refresh = function() {
        var e, t = this.element == this.element.window, n = t ? void 0 : this.adapter.offset(), i = {};
        this.handleScroll(), e = {
            horizontal: {
                contextOffset: t ? 0 : n.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : n.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var o in e) {
            var a = e[o];
            for (var s in this.waypoints[o]) {
                var l, u, c, d, p, f = this.waypoints[o][s], h = f.options.offset, m = f.triggerPoint, v = 0, g = null == m;
                f.element !== f.element.window && (v = f.adapter.offset()[a.offsetProp]), "function" == typeof h ? h = h.apply(f) : "string" == typeof h && (h = parseFloat(h), 
                f.options.offset.indexOf("%") > -1 && (h = Math.ceil(a.contextDimension * h / 100))), 
                l = a.contextScroll - a.contextOffset, f.triggerPoint = Math.floor(v + l - h), u = m < a.oldScroll, 
                c = f.triggerPoint >= a.oldScroll, d = u && c, p = !u && !c, !g && d ? (f.queueTrigger(a.backward), 
                i[f.group.id] = f.group) : !g && p ? (f.queueTrigger(a.forward), i[f.group.id] = f.group) : g && a.oldScroll >= f.triggerPoint && (f.queueTrigger(a.forward), 
                i[f.group.id] = f.group);
            }
        }
        return r.requestAnimationFrame(function() {
            for (var e in i) i[e].flushTriggers();
        }), this;
    }, t.findOrCreateByElement = function(e) {
        return t.findByElement(e) || new t(e);
    }, t.refreshAll = function() {
        for (var e in i) i[e].refresh();
    }, t.findByElement = function(e) {
        return i[e.waypointContextKey];
    }, window.onload = function() {
        o && o(), t.refreshAll();
    }, r.requestAnimationFrame = function(t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t);
    }, r.Context = t;
}(), function() {
    "use strict";
    function e(e, t) {
        return e.triggerPoint - t.triggerPoint;
    }
    function t(e, t) {
        return t.triggerPoint - e.triggerPoint;
    }
    function n(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], 
        this.clearTriggerQueues(), i[this.axis][this.name] = this;
    }
    var i = {
        vertical: {},
        horizontal: {}
    }, r = window.Waypoint;
    n.prototype.add = function(e) {
        this.waypoints.push(e);
    }, n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        };
    }, n.prototype.flushTriggers = function() {
        for (var n in this.triggerQueues) {
            var i = this.triggerQueues[n], r = "up" === n || "left" === n;
            i.sort(r ? t : e);
            for (var o = 0, a = i.length; o < a; o += 1) {
                var s = i[o];
                (s.options.continuous || o === i.length - 1) && s.trigger([ n ]);
            }
        }
        this.clearTriggerQueues();
    }, n.prototype.next = function(t) {
        this.waypoints.sort(e);
        var n = r.Adapter.inArray(t, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1];
    }, n.prototype.previous = function(t) {
        this.waypoints.sort(e);
        var n = r.Adapter.inArray(t, this.waypoints);
        return n ? this.waypoints[n - 1] : null;
    }, n.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e);
    }, n.prototype.remove = function(e) {
        var t = r.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1);
    }, n.prototype.first = function() {
        return this.waypoints[0];
    }, n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1];
    }, n.findOrCreate = function(e) {
        return i[e.axis][e.name] || new n(e);
    }, r.Group = n;
}(), function() {
    "use strict";
    function e(e) {
        this.$element = t(e);
    }
    var t = window.jQuery, n = window.Waypoint;
    t.each([ "innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop" ], function(t, n) {
        e.prototype[n] = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[n].apply(this.$element, e);
        };
    }), t.each([ "extend", "inArray", "isEmptyObject" ], function(n, i) {
        e[i] = t[i];
    }), n.adapters.push({
        name: "jquery",
        Adapter: e
    }), n.Adapter = e;
}(), function() {
    "use strict";
    function e(e) {
        return function() {
            var n = [], i = arguments[0];
            return e.isFunction(arguments[0]) && ((i = e.extend({}, arguments[1])).handler = arguments[0]), 
            this.each(function() {
                var r = e.extend({}, i, {
                    element: this
                });
                "string" == typeof r.context && (r.context = e(this).closest(r.context)[0]), n.push(new t(r));
            }), n;
        };
    }
    var t = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto));
}(), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
}(function(e) {
    var t, n, i, r, o, a, s = function() {}, l = !!window.jQuery, u = e(window), c = function(e, n) {
        t.ev.on("mfp" + e + ".mfp", n);
    }, d = function(t, n, i, r) {
        var o = document.createElement("div");
        return o.className = "mfp-" + t, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = e(o), 
        n && o.appendTo(n)), o;
    }, p = function(n, i) {
        t.ev.triggerHandler("mfp" + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), 
        t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [ i ]));
    }, f = function(n) {
        return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), 
        a = n), t.currTemplate.closeBtn;
    }, h = function() {
        e.magnificPopup.instance || ((t = new s()).init(), e.magnificPopup.instance = t);
    }, m = function() {
        var e = document.createElement("p").style, t = [ "ms", "O", "Moz", "Webkit" ];
        if (void 0 !== e.transition) return !0;
        for (;t.length; ) if (t.pop() + "Transition" in e) return !0;
        return !1;
    };
    s.prototype = {
        constructor: s,
        init: function() {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), 
            t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = m(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), 
            i = e(document), t.popupsCache = {};
        },
        open: function(n) {
            var r;
            if (!1 === n.isObj) {
                t.items = n.items.toArray(), t.index = 0;
                var a, s = n.items;
                for (r = 0; r < s.length; r++) if ((a = s[r]).parsed && (a = a.el[0]), a === n.el[0]) {
                    t.index = r;
                    break;
                }
            } else t.items = e.isArray(n.items) ? n.items : [ n.items ], t.index = n.index || 0;
            {
                if (!t.isOpen) {
                    t.types = [], o = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, 
                    n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, 
                    t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, 
                    t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, 
                    t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = d("bg").on("click.mfp", function() {
                        t.close();
                    }), t.wrap = d("wrap").attr("tabindex", -1).on("click.mfp", function(e) {
                        t._checkIfClose(e.target) && t.close();
                    }), t.container = d("container", t.wrap)), t.contentContainer = d("content"), t.st.preloader && (t.preloader = d("preloader", t.container, t.st.tLoading));
                    var l = e.magnificPopup.modules;
                    for (r = 0; r < l.length; r++) {
                        var h = l[r];
                        h = h.charAt(0).toUpperCase() + h.slice(1), t["init" + h].call(t);
                    }
                    p("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (c("MarkupParse", function(e, t, n, i) {
                        n.close_replaceWith = f(i.type);
                    }), o += " mfp-close-btn-in") : t.wrap.append(f())), t.st.alignTop && (o += " mfp-align-top"), 
                    t.fixedContentPos ? t.wrap.css({
                        overflow: t.st.overflowY,
                        overflowX: "hidden",
                        overflowY: t.st.overflowY
                    }) : t.wrap.css({
                        top: u.scrollTop(),
                        position: "absolute"
                    }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                        height: i.height(),
                        position: "absolute"
                    }), t.st.enableEscapeKey && i.on("keyup.mfp", function(e) {
                        27 === e.keyCode && t.close();
                    }), u.on("resize.mfp", function() {
                        t.updateSize();
                    }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o);
                    var m = t.wH = u.height(), v = {};
                    if (t.fixedContentPos && t._hasScrollBar(m)) {
                        var g = t._getScrollbarSize();
                        g && (v.marginRight = g);
                    }
                    t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : v.overflow = "hidden");
                    var y = t.st.mainClass;
                    return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), 
                    p("BuildControls"), e("html").css(v), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), 
                    t._lastFocusedEl = document.activeElement, setTimeout(function() {
                        t.content ? (t._addClassToMFP("mfp-ready"), t._setFocus()) : t.bgOverlay.addClass("mfp-ready"), 
                        i.on("focusin.mfp", t._onFocusIn);
                    }, 16), t.isOpen = !0, t.updateSize(m), p("Open"), n;
                }
                t.updateItemHTML();
            }
        },
        close: function() {
            t.isOpen && (p("BeforeClose"), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP("mfp-removing"), 
            setTimeout(function() {
                t._close();
            }, t.st.removalDelay)) : t._close());
        },
        _close: function() {
            p("Close");
            var n = "mfp-removing mfp-ready ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), 
            t._removeClassFromMFP(n), t.fixedContentPos) {
                var r = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r);
            }
            i.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), 
            t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), 
            !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), 
            t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, 
            t.content = null, t.currTemplate = null, t.prevHeight = 0, p("AfterClose");
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i;
            } else t.wH = e || u.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), p("Resize");
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (p("BeforeChange", [ t.currItem ? t.currItem.type : "", i ]), t.currItem = n, 
            !t.currTemplate[i]) {
                var o = !!t.st[i] && t.st[i].markup;
                p("FirstMarkupParse", o), t.currTemplate[i] = !o || e(o);
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, p("Change", n), r = n.type, t.container.prepend(t.contentContainer), 
            p("AfterChange");
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(f()) : t.content = e : t.content = "", 
            p("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
        },
        parseEl: function(n) {
            var i, r = t.items[n];
            if (r.tagName ? r = {
                el: e(r)
            } : (i = r.type, r = {
                data: r,
                src: r.src
            }), r.el) {
                for (var o = t.types, a = 0; a < o.length; a++) if (r.el.hasClass("mfp-" + o[a])) {
                    i = o[a];
                    break;
                }
                r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"));
            }
            return r.type = i || t.st.type || "inline", r.index = n, r.parsed = !0, t.items[n] = r, 
            p("ElementParse", r), t.items[n];
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n);
            };
            n || (n = {});
            var r = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(r).on(r, i)) : (n.isObj = !1, n.delegate ? e.off(r).on(r, n.delegate, i) : (n.items = e, 
            e.off(r).on(r, i)));
        },
        _openClick: function(n, i, r) {
            if ((void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var o = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;
                if (o) if (e.isFunction(o)) {
                    if (!o.call(t)) return !0;
                } else if (u.width() < o) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), r.el = e(n.mfpEl), 
                r.delegate && (r.items = i.find(r.delegate)), t.open(r);
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var r = {
                    status: e,
                    text: i
                };
                p("UpdateStatus", r), e = r.status, i = r.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation();
                }), t.container.addClass("mfp-s-" + e), n = e;
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass("mfp-prevent-close")) {
                var i = t.st.closeOnContentClick, r = t.st.closeOnBgClick;
                if (i && r) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0;
                } else if (r && e.contains(document, n)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e);
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || u.height());
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
        },
        _onFocusIn: function(n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), 
            !1;
        },
        _parseMarkup: function(t, n, i) {
            var r;
            i.data && (n = e.extend(i.data, n)), p("MarkupParse", [ t, n, i ]), e.each(n, function(n, i) {
                if (void 0 === i || !1 === i) return !0;
                if ((r = n.split("_")).length > 1) {
                    var o = t.find(".mfp-" + r[0]);
                    if (o.length > 0) {
                        var a = r[1];
                        "replaceWith" === a ? o[0] !== i[0] && o.replaceWith(i) : "img" === a ? o.is("img") ? o.attr("src", i) : o.replaceWith(e("<img>").attr("src", i).attr("class", o.attr("class"))) : o.attr(r[1], i);
                    }
                } else t.find(".mfp-" + n).html(i);
            });
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", 
                document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
            }
            return t.scrollbarSize;
        }
    }, e.magnificPopup = {
        instance: null,
        proto: s.prototype,
        modules: [],
        open: function(t, n) {
            return h(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t);
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close();
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), 
            this.modules.push(t);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(n) {
        h();
        var i = e(this);
        if ("string" == typeof n) if ("open" === n) {
            var r, o = l ? i.data("magnificPopup") : i[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
            o.items ? r = o.items[a] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(a)), 
            t._openClick({
                mfpEl: r
            }, i, o);
        } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1)); else n = e.extend(!0, {}, n), 
        l ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i;
    };
    var v, g, y, x = function() {
        y && (g.after(y.addClass(v)).detach(), y = null);
    };
    e.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push("inline"), c("Close.inline", function() {
                    x();
                });
            },
            getInline: function(n, i) {
                if (x(), n.src) {
                    var r = t.st.inline, o = e(n.src);
                    if (o.length) {
                        var a = o[0].parentNode;
                        a && a.tagName && (g || (v = r.hiddenClass, g = d(v), v = "mfp-" + v), y = o.after(g).detach().removeClass(v)), 
                        t.updateStatus("ready");
                    } else t.updateStatus("error", r.tNotFound), o = e("<div>");
                    return n.inlineElement = o, o;
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
            }
        }
    });
    var w, b = function() {
        w && e(document.body).removeClass(w);
    }, C = function() {
        b(), t.req && t.req.abort();
    };
    e.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push("ajax"), w = t.st.ajax.cursor, c("Close.ajax", C), c("BeforeChange.ajax", C);
            },
            getAjax: function(n) {
                w && e(document.body).addClass(w), t.updateStatus("loading");
                var i = e.extend({
                    url: n.src,
                    success: function(i, r, o) {
                        var a = {
                            data: i,
                            xhr: o
                        };
                        p("ParseAjax", a), t.appendContent(e(a.data), "ajax"), n.finished = !0, b(), t._setFocus(), 
                        setTimeout(function() {
                            t.wrap.addClass("mfp-ready");
                        }, 16), t.updateStatus("ready"), p("AjaxContentAdded");
                    },
                    error: function() {
                        b(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i), "";
            }
        }
    });
    var T, S = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || "";
        }
        return "";
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image, i = ".image";
                t.types.push("image"), c("Open" + i, function() {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor);
                }), c("Close" + i, function() {
                    n.cursor && e(document.body).removeClass(n.cursor), u.off("resize.mfp");
                }), c("Resize" + i, t.resizeImage), t.isLowIE && c("AfterChange", t.resizeImage);
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), 
                    e.img.css("max-height", t.wH - n);
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, T && clearInterval(T), e.isCheckingImgSize = !1, p("ImageHasSize", e), 
                e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
            },
            findImageSize: function(e) {
                var n = 0, i = e.img[0], r = function(o) {
                    T && clearInterval(T), T = setInterval(function() {
                        i.naturalWidth > 0 ? t._onImageHasSize(e) : (n > 200 && clearInterval(T), 3 === ++n ? r(10) : 40 === n ? r(50) : 100 === n && r(500));
                    }, o);
                };
                r(1);
            },
            getImage: function(n, i) {
                var r = 0, o = function() {
                    n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), 
                    t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, p("ImageLoadComplete")) : ++r < 200 ? setTimeout(o, 100) : a());
                }, a = function() {
                    n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), 
                    n.hasSize = !0, n.loaded = !0, n.loadError = !0);
                }, s = t.st.image, l = i.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", n.el && n.el.find("img").length && (u.alt = n.el.find("img").attr("alt")), 
                    n.img = e(u).on("load.mfploader", o).on("error.mfploader", a), u.src = n.src, l.is("img") && (n.img = n.img.clone()), 
                    (u = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1);
                }
                return t._parseMarkup(i, {
                    title: S(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (T && clearInterval(T), n.loadError ? (i.addClass("mfp-loading"), 
                t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), 
                t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, 
                i.addClass("mfp-loading"), t.findImageSize(n)), i);
            }
        }
    });
    var k, E = function() {
        return void 0 === k && (k = void 0 !== document.createElement("p").style.MozTransform), 
        k;
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img");
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom, i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var r, o, a = n.duration, s = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), i = "all " + n.duration / 1e3 + "s " + n.easing, r = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, o = "transition";
                        return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, t.css(r), t;
                    }, l = function() {
                        t.content.css("visibility", "visible");
                    };
                    c("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(r), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();
                            (o = s(e)).css(t._getOffset()), t.wrap.append(o), r = setTimeout(function() {
                                o.css(t._getOffset(!0)), r = setTimeout(function() {
                                    l(), setTimeout(function() {
                                        o.remove(), e = o = null, p("ZoomAnimationEnded");
                                    }, 16);
                                }, a);
                            }, 16);
                        }
                    }), c("BeforeClose" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(r), t.st.removalDelay = a, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                o = s(e);
                            }
                            o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), 
                            setTimeout(function() {
                                o.css(t._getOffset());
                            }, 16);
                        }
                    }), c("Close" + i, function() {
                        t._allowZoom() && (l(), o && o.remove(), e = null);
                    });
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type;
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img;
            },
            _getOffset: function(n) {
                var i, r = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(), o = parseInt(i.css("padding-top"), 10), a = parseInt(i.css("padding-bottom"), 10);
                r.top -= e(window).scrollTop() - o;
                var s = {
                    width: i.width(),
                    height: (l ? i.innerHeight() : i[0].offsetHeight) - a - o
                };
                return E() ? s["-moz-transform"] = s.transform = "translate(" + r.left + "px," + r.top + "px)" : (s.left = r.left, 
                s.top = r.top), s;
            }
        }
    });
    var A = function(e) {
        if (t.currTemplate.iframe) {
            var n = t.currTemplate.iframe.find("iframe");
            n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
        }
    };
    e.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push("iframe"), c("BeforeChange", function(e, t, n) {
                    t !== n && ("iframe" === t ? A() : "iframe" === n && A(!0));
                }), c("Close.iframe", function() {
                    A();
                });
            },
            getIframe: function(n, i) {
                var r = n.src, o = t.st.iframe;
                e.each(o.patterns, function() {
                    if (r.indexOf(this.index) > -1) return this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), 
                    r = this.src.replace("%id%", r), !1;
                });
                var a = {};
                return o.srcAction && (a[o.srcAction] = r), t._parseMarkup(i, a, n), t.updateStatus("ready"), 
                i;
            }
        }
    });
    var N = function(e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : e < 0 ? n + e : e;
    }, P = function(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [ 0, 2 ],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery, r = ".mfp-gallery";
                if (t.direction = !0, !n || !n.enabled) return !1;
                o += " mfp-gallery", c("Open" + r, function() {
                    n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function() {
                        if (t.items.length > 1) return t.next(), !1;
                    }), i.on("keydown" + r, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                    });
                }), c("UpdateStatus" + r, function(e, n) {
                    n.text && (n.text = P(n.text, t.currItem.index, t.items.length));
                }), c("MarkupParse" + r, function(e, i, r, o) {
                    var a = t.items.length;
                    r.counter = a > 1 ? P(n.tCounter, o.index, a) : "";
                }), c("BuildControls" + r, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup, r = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"), o = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                        r.click(function() {
                            t.prev();
                        }), o.click(function() {
                            t.next();
                        }), t.container.append(r.add(o));
                    }
                }), c("Change" + r, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null;
                    }, 16);
                }), c("Close" + r, function() {
                    i.off(r), t.wrap.off("click" + r), t.arrowRight = t.arrowLeft = null;
                });
            },
            next: function() {
                t.direction = !0, t.index = N(t.index + 1), t.updateItemHTML();
            },
            prev: function() {
                t.direction = !1, t.index = N(t.index - 1), t.updateItemHTML();
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload, i = Math.min(n[0], t.items.length), r = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index - e);
            },
            _preloadItem: function(n) {
                if (n = N(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), p("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0;
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, p("LazyLoadError", i);
                    }).attr("src", i.src)), i.preloaded = !0;
                }
            }
        }
    });
    e.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina, n = e.ratio;
                    (n = isNaN(n) ? n() : n) > 1 && (c("ImageHasSize.retina", function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        });
                    }), c("ElementParse.retina", function(t, i) {
                        i.src = e.replaceSrc(i, n);
                    }));
                }
            }
        }
    }), h();
}), function(e, t, n) {
    function i() {
        e(window).scroll(function() {
            var t = e(window).scrollTop();
            e(".parallax").css({
                transform: "translate(0px, " + t / 3 + "px)"
            });
        });
    }
    function r() {
        e(window).scroll(function() {
            var t = e(window).scrollTop(), n = e(".title-container").innerHeight();
            e(".header").toggleClass("sticky", t > n);
        });
    }
    function o() {
        e(".flexslider").flexslider({
            animation: "slide",
            controlsContainer: e(".slider-controls-container"),
            customDirectionNav: e(".slider-navigation a")
        });
    }
    function a() {
        e(".ce").each(function(t, n) {
            e(this).waypoint(function() {
                e(n).addClass("transition");
            }, {
                offset: "75%"
            });
        });
    }
    function s() {
        e(window).scroll(function() {
            var t = e(window).scrollTop();
            e(".to-top").toggleClass("visible", t > 600);
        }), e(".to-top").click(function(t) {
            t.preventDefault(), e("html,body").animate({
                scrollTop: 0
            }, 700);
        });
    }
    function l() {
        e(".lightbox-trigger").magnificPopup({
            type: "image",
            titleSrc: "title"
        });
    }
    function u() {
        e(".image-gallery").magnificPopup({
            delegate: ".lightbox-trigger-gallery",
            type: "image",
            gallery: {
                enabled: !0
            }
        });
    }
    e(function() {
        i(), r(), o(), a(), s(), l(), u();
    });
}(jQuery);