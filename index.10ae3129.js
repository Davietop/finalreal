/*!
* Taliwind Elements 1.0.0-beta2
* 
* Tailwind Elements is an open-source UI kit of advanced components for TailwindCSS.
* Copyright © 2023 MDBootstrap.com
* 
* Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
* In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
* 
*/ (function(V, _t) {
    typeof exports == "object" && typeof module < "u" ? _t(exports) : typeof define == "function" && define.amd ? define([
        "exports"
    ], _t) : (V = typeof globalThis < "u" ? globalThis : V || self, _t(V.te = {}));
})(this, function(V) {
    "use strict";
    var Dk = Object.defineProperty;
    var Mk = (V, _t, P)=>_t in V ? Dk(V, _t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: P
        }) : V[_t] = P;
    var Ee = (V, _t, P)=>(Mk(V, typeof _t != "symbol" ? _t + "" : _t, P), P);
    const _t = (()=>{
        const i = {};
        let t = 1;
        return {
            set (e, s, n) {
                typeof e[s] > "u" && (e[s] = {
                    key: s,
                    id: t
                }, t++), i[e[s].id] = n;
            },
            get (e, s) {
                if (!e || typeof e[s] > "u") return null;
                const n = e[s];
                return n.key === s ? i[n.id] : null;
            },
            delete (e, s) {
                if (typeof e[s] > "u") return;
                const n = e[s];
                n.key === s && (delete i[n.id], delete e[s]);
            }
        };
    })(), P = {
        setData (i, t, e) {
            _t.set(i, t, e);
        },
        getData (i, t) {
            return _t.get(i, t);
        },
        removeData (i, t) {
            _t.delete(i, t);
        }
    }, Kp = 1e6, Up = 1e3, vr = "transitionend", Xp = (i)=>i == null ? `${i}` : ({}).toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(), se = (i)=>{
        do i += Math.floor(Math.random() * Kp);
        while (document.getElementById(i));
        return i;
    }, Il = (i)=>{
        let t = i.getAttribute("data-te-target");
        if (!t || t === "#") {
            let e = i.getAttribute("href");
            if (!e || !e.includes("#") && !e.startsWith(".")) return null;
            e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? e.trim() : null;
        }
        return t;
    }, yr = (i)=>{
        const t = Il(i);
        return t && document.querySelector(t) ? t : null;
    }, Ie = (i)=>{
        const t = Il(i);
        return t ? document.querySelector(t) : null;
    }, Gp = (i)=>{
        if (!i) return 0;
        let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(i);
        const s = Number.parseFloat(t), n = Number.parseFloat(e);
        return !s && !n ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * Up);
    }, Ll = (i)=>{
        i.dispatchEvent(new Event(vr));
    }, Mi = (i)=>!i || typeof i != "object" ? !1 : (typeof i.jquery < "u" && (i = i[0]), typeof i.nodeType < "u"), Le = (i)=>Mi(i) ? i.jquery ? i[0] : i : typeof i == "string" && i.length > 0 ? document.querySelector(i) : null, W = (i, t, e)=>{
        Object.keys(e).forEach((s)=>{
            const n = e[s], o = t[s], r = o && Mi(o) ? "element" : Xp(o);
            if (!new RegExp(n).test(r)) throw new Error(`${i.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`);
        });
    }, ne = (i)=>{
        if (!i || i.getClientRects().length === 0) return !1;
        if (i.style && i.parentNode && i.parentNode.style) {
            const t = getComputedStyle(i), e = getComputedStyle(i.parentNode);
            return getComputedStyle(i).getPropertyValue("visibility") === "visible" || t.display !== "none" && e.display !== "none" && t.visibility !== "hidden";
        }
        return !1;
    }, ei = (i)=>!i || i.nodeType !== Node.ELEMENT_NODE || i.classList.contains("disabled") ? !0 : typeof i.disabled < "u" ? i.disabled : i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false", Pl = (i)=>{
        if (!document.documentElement.attachShadow) return null;
        if (typeof i.getRootNode == "function") {
            const t = i.getRootNode();
            return t instanceof ShadowRoot ? t : null;
        }
        return i instanceof ShadowRoot ? i : i.parentNode ? Pl(i.parentNode) : null;
    }, Sn = ()=>function() {}, Ii = (i)=>{
        i.offsetHeight;
    }, Rl = ()=>{
        const { jQuery: i } = window;
        return i && !document.body.hasAttribute("data-te-no-jquery") ? i : null;
    }, xr = [], Nl = (i)=>{
        document.readyState === "loading" ? (xr.length || document.addEventListener("DOMContentLoaded", ()=>{
            xr.forEach((t)=>t());
        }), xr.push(i)) : i();
    }, st = ()=>document.documentElement.dir === "rtl", qp = (i)=>Array.from(i), z = (i)=>document.createElement(i), ii = (i)=>{
        typeof i == "function" && i();
    }, $l = (i, t, e = !0)=>{
        if (!e) {
            ii(i);
            return;
        }
        const s = 5, n = Gp(t) + s;
        let o = !1;
        const r = ({ target: a })=>{
            a === t && (o = !0, t.removeEventListener(vr, r), ii(i));
        };
        t.addEventListener(vr, r), setTimeout(()=>{
            o || Ll(t);
        }, n);
    }, Bl = (i, t, e, s)=>{
        let n = i.indexOf(t);
        if (n === -1) return i[!e && s ? i.length - 1 : 0];
        const o = i.length;
        return n += e ? 1 : -1, s && (n = (n + o) % o), i[Math.max(0, Math.min(n, o - 1))];
    }, Zp = /[^.]*(?=\..*)\.|.*/, Qp = /\..*/, Jp = /::\d+$/, Er = {};
    let Hl = 1;
    const t_ = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, e_ = /^(mouseenter|mouseleave)/i, Fl = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function Vl(i, t) {
        return t && `${t}::${Hl++}` || i.uidEvent || Hl++;
    }
    function Wl(i) {
        const t = Vl(i);
        return i.uidEvent = t, Er[t] = Er[t] || {}, Er[t];
    }
    function i_(i, t) {
        return function e(s) {
            return s.delegateTarget = i, e.oneOff && b.off(i, s.type, t), t.apply(i, [
                s
            ]);
        };
    }
    function s_(i, t, e) {
        return function s(n) {
            const o = i.querySelectorAll(t);
            for(let { target: r } = n; r && r !== this; r = r.parentNode)for(let a = o.length; a--;)if (o[a] === r) return n.delegateTarget = r, s.oneOff && b.off(i, n.type, e), e.apply(r, [
                n
            ]);
            return null;
        };
    }
    function zl(i, t, e = null) {
        const s = Object.keys(i);
        for(let n = 0, o = s.length; n < o; n++){
            const r = i[s[n]];
            if (r.originalHandler === t && r.delegationSelector === e) return r;
        }
        return null;
    }
    function jl(i, t, e) {
        const s = typeof t == "string", n = s ? e : t;
        let o = Kl(i);
        return Fl.has(o) || (o = i), [
            s,
            n,
            o
        ];
    }
    function Yl(i, t, e, s, n) {
        if (typeof t != "string" || !i) return;
        if (e || (e = s, s = null), e_.test(t)) {
            const f = (p)=>function(_) {
                    if (!_.relatedTarget || _.relatedTarget !== _.delegateTarget && !_.delegateTarget.contains(_.relatedTarget)) return p.call(this, _);
                };
            s ? s = f(s) : e = f(e);
        }
        const [o, r, a] = jl(t, e, s), l = Wl(i), c = l[a] || (l[a] = {}), h = zl(c, r, o ? e : null);
        if (h) {
            h.oneOff = h.oneOff && n;
            return;
        }
        const d = Vl(r, t.replace(Zp, "")), u = o ? s_(i, e, s) : i_(i, e);
        u.delegationSelector = o ? e : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, i.addEventListener(a, u, o);
    }
    function Cr(i, t, e, s, n) {
        const o = zl(t[e], s, n);
        o && (i.removeEventListener(e, o, !!n), delete t[e][o.uidEvent]);
    }
    function n_(i, t, e, s) {
        const n = t[e] || {};
        Object.keys(n).forEach((o)=>{
            if (o.includes(s)) {
                const r = n[o];
                Cr(i, t, e, r.originalHandler, r.delegationSelector);
            }
        });
    }
    function Kl(i) {
        return i = i.replace(Qp, ""), t_[i] || i;
    }
    const b = {
        on (i, t, e, s) {
            Yl(i, t, e, s, !1);
        },
        one (i, t, e, s) {
            Yl(i, t, e, s, !0);
        },
        off (i, t, e, s) {
            if (typeof t != "string" || !i) return;
            const [n, o, r] = jl(t, e, s), a = r !== t, l = Wl(i), c = t.startsWith(".");
            if (typeof o < "u") {
                if (!l || !l[r]) return;
                Cr(i, l, r, o, n ? e : null);
                return;
            }
            c && Object.keys(l).forEach((d)=>{
                n_(i, l, d, t.slice(1));
            });
            const h = l[r] || {};
            Object.keys(h).forEach((d)=>{
                const u = d.replace(Jp, "");
                if (!a || t.includes(u)) {
                    const f = h[d];
                    Cr(i, l, r, f.originalHandler, f.delegationSelector);
                }
            });
        },
        trigger (i, t, e) {
            if (typeof t != "string" || !i) return null;
            const s = Rl(), n = Kl(t), o = t !== n, r = Fl.has(n);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && s && (a = s.Event(t, e), s(i).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(t, {
                bubbles: l,
                cancelable: !0
            }), typeof e < "u" && Object.keys(e).forEach((u)=>{
                Object.defineProperty(d, u, {
                    get () {
                        return e[u];
                    }
                });
            }), h && d.preventDefault(), c && i.dispatchEvent(d), d.defaultPrevented && typeof a < "u" && a.preventDefault(), d;
        }
    }, si = {
        on (i, t, e, s) {
            const n = t.split(" ");
            for(let o = 0; o < n.length; o++)b.on(i, n[o], e, s);
        },
        off (i, t, e, s) {
            const n = t.split(" ");
            for(let o = 0; o < n.length; o++)b.off(i, n[o], e, s);
        }
    }, o_ = "5.1.3";
    class Xt {
        constructor(t){
            t = Le(t), t && (this._element = t, P.setData(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            P.removeData(this._element, this.constructor.DATA_KEY), b.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t)=>{
                this[t] = null;
            });
        }
        _queueCallback(t, e, s = !0) {
            $l(t, e, s);
        }
        static getInstance(t) {
            return P.getData(Le(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
        static get VERSION() {
            return o_;
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        static get DATA_KEY() {
            return `te.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
    }
    const r_ = "button", a_ = "active";
    class On extends Xt {
        static get NAME() {
            return r_;
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle(a_));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = On.getOrCreateInstance(this);
                t === "toggle" && e[t]();
            });
        }
    }
    var gt = "top", Ot = "bottom", Dt = "right", mt = "left", bs = "auto", Li = [
        gt,
        Ot,
        Dt,
        mt
    ], ni = "start", Pi = "end", Ul = "clippingParents", Tr = "viewport", Ri = "popper", Xl = "reference", Ar = Li.reduce(function(i, t) {
        return i.concat([
            t + "-" + ni,
            t + "-" + Pi
        ]);
    }, []), wr = [].concat(Li, [
        bs
    ]).reduce(function(i, t) {
        return i.concat([
            t,
            t + "-" + ni,
            t + "-" + Pi
        ]);
    }, []), Gl = "beforeRead", ql = "read", Zl = "afterRead", Ql = "beforeMain", Jl = "main", tc = "afterMain", ec = "beforeWrite", ic = "write", sc = "afterWrite", Dn = [
        Gl,
        ql,
        Zl,
        Ql,
        Jl,
        tc,
        ec,
        ic,
        sc
    ];
    function oe(i) {
        return i ? (i.nodeName || "").toLowerCase() : null;
    }
    function Mt(i) {
        if (i == null) return window;
        if (i.toString() !== "[object Window]") {
            var t = i.ownerDocument;
            return t && t.defaultView || window;
        }
        return i;
    }
    function oi(i) {
        var t = Mt(i).Element;
        return i instanceof t || i instanceof Element;
    }
    function It(i) {
        var t = Mt(i).HTMLElement;
        return i instanceof t || i instanceof HTMLElement;
    }
    function kr(i) {
        if (typeof ShadowRoot > "u") return !1;
        var t = Mt(i).ShadowRoot;
        return i instanceof t || i instanceof ShadowRoot;
    }
    function l_(i) {
        var t = i.state;
        Object.keys(t.elements).forEach(function(e) {
            var s = t.styles[e] || {}, n = t.attributes[e] || {}, o = t.elements[e];
            !It(o) || !oe(o) || (Object.assign(o.style, s), Object.keys(n).forEach(function(r) {
                var a = n[r];
                a === !1 ? o.removeAttribute(r) : o.setAttribute(r, a === !0 ? "" : a);
            }));
        });
    }
    function c_(i) {
        var t = i.state, e = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
        return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
            Object.keys(t.elements).forEach(function(s) {
                var n = t.elements[s], o = t.attributes[s] || {}, r = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : e[s]), a = r.reduce(function(l, c) {
                    return l[c] = "", l;
                }, {});
                !It(n) || !oe(n) || (Object.assign(n.style, a), Object.keys(o).forEach(function(l) {
                    n.removeAttribute(l);
                }));
            });
        };
    }
    const Sr = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: l_,
        effect: c_,
        requires: [
            "computeStyles"
        ]
    };
    function Gt(i) {
        return i.split("-")[0];
    }
    var ri = Math.max, Mn = Math.min, Ni = Math.round;
    function Or() {
        var i = navigator.userAgentData;
        return i != null && i.brands && Array.isArray(i.brands) ? i.brands.map(function(t) {
            return t.brand + "/" + t.version;
        }).join(" ") : navigator.userAgent;
    }
    function nc() {
        return !/^((?!chrome|android).)*safari/i.test(Or());
    }
    function $i(i, t, e) {
        t === void 0 && (t = !1), e === void 0 && (e = !1);
        var s = i.getBoundingClientRect(), n = 1, o = 1;
        t && It(i) && (n = i.offsetWidth > 0 && Ni(s.width) / i.offsetWidth || 1, o = i.offsetHeight > 0 && Ni(s.height) / i.offsetHeight || 1);
        var r = oi(i) ? Mt(i) : window, a = r.visualViewport, l = !nc() && e, c = (s.left + (l && a ? a.offsetLeft : 0)) / n, h = (s.top + (l && a ? a.offsetTop : 0)) / o, d = s.width / n, u = s.height / o;
        return {
            width: d,
            height: u,
            top: h,
            right: c + d,
            bottom: h + u,
            left: c,
            x: c,
            y: h
        };
    }
    function Dr(i) {
        var t = $i(i), e = i.offsetWidth, s = i.offsetHeight;
        return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
            x: i.offsetLeft,
            y: i.offsetTop,
            width: e,
            height: s
        };
    }
    function oc(i, t) {
        var e = t.getRootNode && t.getRootNode();
        if (i.contains(t)) return !0;
        if (e && kr(e)) {
            var s = t;
            do {
                if (s && i.isSameNode(s)) return !0;
                s = s.parentNode || s.host;
            }while (s);
        }
        return !1;
    }
    function qt(i) {
        return Mt(i).getComputedStyle(i);
    }
    function h_(i) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(oe(i)) >= 0;
    }
    function Pe(i) {
        return ((oi(i) ? i.ownerDocument : i.document) || window.document).documentElement;
    }
    function In(i) {
        return oe(i) === "html" ? i : i.assignedSlot || i.parentNode || (kr(i) ? i.host : null) || Pe(i);
    }
    function rc(i) {
        return !It(i) || qt(i).position === "fixed" ? null : i.offsetParent;
    }
    function d_(i) {
        var t = /firefox/i.test(Or()), e = /Trident/i.test(Or());
        if (e && It(i)) {
            var s = qt(i);
            if (s.position === "fixed") return null;
        }
        var n = In(i);
        for(kr(n) && (n = n.host); It(n) && [
            "html",
            "body"
        ].indexOf(oe(n)) < 0;){
            var o = qt(n);
            if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || [
                "transform",
                "perspective"
            ].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return n;
            n = n.parentNode;
        }
        return null;
    }
    function vs(i) {
        for(var t = Mt(i), e = rc(i); e && h_(e) && qt(e).position === "static";)e = rc(e);
        return e && (oe(e) === "html" || oe(e) === "body" && qt(e).position === "static") ? t : e || d_(i) || t;
    }
    function Mr(i) {
        return [
            "top",
            "bottom"
        ].indexOf(i) >= 0 ? "x" : "y";
    }
    function ys(i, t, e) {
        return ri(i, Mn(t, e));
    }
    function u_(i, t, e) {
        var s = ys(i, t, e);
        return s > e ? e : s;
    }
    function ac() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }
    function lc(i) {
        return Object.assign({}, ac(), i);
    }
    function cc(i, t) {
        return t.reduce(function(e, s) {
            return e[s] = i, e;
        }, {});
    }
    var f_ = function(t, e) {
        return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
            placement: e.placement
        })) : t, lc(typeof t != "number" ? t : cc(t, Li));
    };
    function p_(i) {
        var t, e = i.state, s = i.name, n = i.options, o = e.elements.arrow, r = e.modifiersData.popperOffsets, a = Gt(e.placement), l = Mr(a), c = [
            mt,
            Dt
        ].indexOf(a) >= 0, h = c ? "height" : "width";
        if (!(!o || !r)) {
            var d = f_(n.padding, e), u = Dr(o), f = l === "y" ? gt : mt, p = l === "y" ? Ot : Dt, _ = e.rects.reference[h] + e.rects.reference[l] - r[l] - e.rects.popper[h], m = r[l] - e.rects.reference[l], y = vs(o), x = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, E = _ / 2 - m / 2, C = d[f], T = x - u[h] - d[p], A = x / 2 - u[h] / 2 + E, w = ys(C, A, T), S = l;
            e.modifiersData[s] = (t = {}, t[S] = w, t.centerOffset = w - A, t);
        }
    }
    function __(i) {
        var t = i.state, e = i.options, s = e.element, n = s === void 0 ? "[data-popper-arrow]" : s;
        if (n != null && !(typeof n == "string" && (n = t.elements.popper.querySelector(n), !n))) {
            if (({}).NODE_ENV !== "production" && (It(n) || console.error([
                'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
                "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
                "the arrow."
            ].join(" "))), !oc(t.elements.popper, n)) {
                ({}).NODE_ENV !== "production" && console.error([
                    'Popper: "arrow" modifier\'s `element` must be a child of the popper',
                    "element."
                ].join(" "));
                return;
            }
            t.elements.arrow = n;
        }
    }
    const hc = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: p_,
        effect: __,
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function Bi(i) {
        return i.split("-")[1];
    }
    var g_ = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function m_(i, t) {
        var e = i.x, s = i.y, n = t.devicePixelRatio || 1;
        return {
            x: Ni(e * n) / n || 0,
            y: Ni(s * n) / n || 0
        };
    }
    function dc(i) {
        var t, e = i.popper, s = i.popperRect, n = i.placement, o = i.variation, r = i.offsets, a = i.position, l = i.gpuAcceleration, c = i.adaptive, h = i.roundOffsets, d = i.isFixed, u = r.x, f = u === void 0 ? 0 : u, p = r.y, _ = p === void 0 ? 0 : p, m = typeof h == "function" ? h({
            x: f,
            y: _
        }) : {
            x: f,
            y: _
        };
        f = m.x, _ = m.y;
        var y = r.hasOwnProperty("x"), x = r.hasOwnProperty("y"), E = mt, C = gt, T = window;
        if (c) {
            var A = vs(e), w = "clientHeight", S = "clientWidth";
            if (A === Mt(e) && (A = Pe(e), qt(A).position !== "static" && a === "absolute" && (w = "scrollHeight", S = "scrollWidth")), A, n === gt || (n === mt || n === Dt) && o === Pi) {
                C = Ot;
                var k = d && A === T && T.visualViewport ? T.visualViewport.height : A[w];
                _ -= k - s.height, _ *= l ? 1 : -1;
            }
            if (n === mt || (n === gt || n === Ot) && o === Pi) {
                E = Dt;
                var D = d && A === T && T.visualViewport ? T.visualViewport.width : A[S];
                f -= D - s.width, f *= l ? 1 : -1;
            }
        }
        var O = Object.assign({
            position: a
        }, c && g_), M = h === !0 ? m_({
            x: f,
            y: _
        }, Mt(e)) : {
            x: f,
            y: _
        };
        if (f = M.x, _ = M.y, l) {
            var L;
            return Object.assign({}, O, (L = {}, L[C] = x ? "0" : "", L[E] = y ? "0" : "", L.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + _ + "px)" : "translate3d(" + f + "px, " + _ + "px, 0)", L));
        }
        return Object.assign({}, O, (t = {}, t[C] = x ? _ + "px" : "", t[E] = y ? f + "px" : "", t.transform = "", t));
    }
    function b_(i) {
        var t = i.state, e = i.options, s = e.gpuAcceleration, n = s === void 0 ? !0 : s, o = e.adaptive, r = o === void 0 ? !0 : o, a = e.roundOffsets, l = a === void 0 ? !0 : a;
        if (({}).NODE_ENV !== "production") {
            var c = qt(t.elements.popper).transitionProperty || "";
            r && [
                "transform",
                "top",
                "right",
                "bottom",
                "left"
            ].some(function(d) {
                return c.indexOf(d) >= 0;
            }) && console.warn([
                "Popper: Detected CSS transitions on at least one of the following",
                'CSS properties: "transform", "top", "right", "bottom", "left".',
                `

`,
                'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
                "for smooth transitions, or remove these properties from the CSS",
                "transition declaration on the popper element if only transitioning",
                "opacity or background-color for example.",
                `

`,
                "We recommend using the popper element as a wrapper around an inner",
                "element that can have any CSS property transitioned for animations."
            ].join(" "));
        }
        var h = {
            placement: Gt(t.placement),
            variation: Bi(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: n,
            isFixed: t.options.strategy === "fixed"
        };
        t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, dc(Object.assign({}, h, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: r,
            roundOffsets: l
        })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, dc(Object.assign({}, h, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l
        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement
        });
    }
    const Ir = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: b_,
        data: {}
    };
    var Ln = {
        passive: !0
    };
    function v_(i) {
        var t = i.state, e = i.instance, s = i.options, n = s.scroll, o = n === void 0 ? !0 : n, r = s.resize, a = r === void 0 ? !0 : r, l = Mt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return o && c.forEach(function(h) {
            h.addEventListener("scroll", e.update, Ln);
        }), a && l.addEventListener("resize", e.update, Ln), function() {
            o && c.forEach(function(h) {
                h.removeEventListener("scroll", e.update, Ln);
            }), a && l.removeEventListener("resize", e.update, Ln);
        };
    }
    const Lr = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: v_,
        data: {}
    };
    var y_ = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Pn(i) {
        return i.replace(/left|right|bottom|top/g, function(t) {
            return y_[t];
        });
    }
    var x_ = {
        start: "end",
        end: "start"
    };
    function uc(i) {
        return i.replace(/start|end/g, function(t) {
            return x_[t];
        });
    }
    function Pr(i) {
        var t = Mt(i), e = t.pageXOffset, s = t.pageYOffset;
        return {
            scrollLeft: e,
            scrollTop: s
        };
    }
    function Rr(i) {
        return $i(Pe(i)).left + Pr(i).scrollLeft;
    }
    function E_(i, t) {
        var e = Mt(i), s = Pe(i), n = e.visualViewport, o = s.clientWidth, r = s.clientHeight, a = 0, l = 0;
        if (n) {
            o = n.width, r = n.height;
            var c = nc();
            (c || !c && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
        }
        return {
            width: o,
            height: r,
            x: a + Rr(i),
            y: l
        };
    }
    function C_(i) {
        var t, e = Pe(i), s = Pr(i), n = (t = i.ownerDocument) == null ? void 0 : t.body, o = ri(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = ri(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -s.scrollLeft + Rr(i), l = -s.scrollTop;
        return qt(n || e).direction === "rtl" && (a += ri(e.clientWidth, n ? n.clientWidth : 0) - o), {
            width: o,
            height: r,
            x: a,
            y: l
        };
    }
    function Nr(i) {
        var t = qt(i), e = t.overflow, s = t.overflowX, n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(e + n + s);
    }
    function fc(i) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(oe(i)) >= 0 ? i.ownerDocument.body : It(i) && Nr(i) ? i : fc(In(i));
    }
    function xs(i, t) {
        var e;
        t === void 0 && (t = []);
        var s = fc(i), n = s === ((e = i.ownerDocument) == null ? void 0 : e.body), o = Mt(s), r = n ? [
            o
        ].concat(o.visualViewport || [], Nr(s) ? s : []) : s, a = t.concat(r);
        return n ? a : a.concat(xs(In(r)));
    }
    function $r(i) {
        return Object.assign({}, i, {
            left: i.x,
            top: i.y,
            right: i.x + i.width,
            bottom: i.y + i.height
        });
    }
    function T_(i, t) {
        var e = $i(i, !1, t === "fixed");
        return e.top = e.top + i.clientTop, e.left = e.left + i.clientLeft, e.bottom = e.top + i.clientHeight, e.right = e.left + i.clientWidth, e.width = i.clientWidth, e.height = i.clientHeight, e.x = e.left, e.y = e.top, e;
    }
    function pc(i, t, e) {
        return t === Tr ? $r(E_(i, e)) : oi(t) ? T_(t, e) : $r(C_(Pe(i)));
    }
    function A_(i) {
        var t = xs(In(i)), e = [
            "absolute",
            "fixed"
        ].indexOf(qt(i).position) >= 0, s = e && It(i) ? vs(i) : i;
        return oi(s) ? t.filter(function(n) {
            return oi(n) && oc(n, s) && oe(n) !== "body";
        }) : [];
    }
    function w_(i, t, e, s) {
        var n = t === "clippingParents" ? A_(i) : [].concat(t), o = [].concat(n, [
            e
        ]), r = o[0], a = o.reduce(function(l, c) {
            var h = pc(i, c, s);
            return l.top = ri(h.top, l.top), l.right = Mn(h.right, l.right), l.bottom = Mn(h.bottom, l.bottom), l.left = ri(h.left, l.left), l;
        }, pc(i, r, s));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
    }
    function _c(i) {
        var t = i.reference, e = i.element, s = i.placement, n = s ? Gt(s) : null, o = s ? Bi(s) : null, r = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
        switch(n){
            case gt:
                l = {
                    x: r,
                    y: t.y - e.height
                };
                break;
            case Ot:
                l = {
                    x: r,
                    y: t.y + t.height
                };
                break;
            case Dt:
                l = {
                    x: t.x + t.width,
                    y: a
                };
                break;
            case mt:
                l = {
                    x: t.x - e.width,
                    y: a
                };
                break;
            default:
                l = {
                    x: t.x,
                    y: t.y
                };
        }
        var c = n ? Mr(n) : null;
        if (c != null) {
            var h = c === "y" ? "height" : "width";
            switch(o){
                case ni:
                    l[c] = l[c] - (t[h] / 2 - e[h] / 2);
                    break;
                case Pi:
                    l[c] = l[c] + (t[h] / 2 - e[h] / 2);
                    break;
            }
        }
        return l;
    }
    function Hi(i, t) {
        t === void 0 && (t = {});
        var e = t, s = e.placement, n = s === void 0 ? i.placement : s, o = e.strategy, r = o === void 0 ? i.strategy : o, a = e.boundary, l = a === void 0 ? Ul : a, c = e.rootBoundary, h = c === void 0 ? Tr : c, d = e.elementContext, u = d === void 0 ? Ri : d, f = e.altBoundary, p = f === void 0 ? !1 : f, _ = e.padding, m = _ === void 0 ? 0 : _, y = lc(typeof m != "number" ? m : cc(m, Li)), x = u === Ri ? Xl : Ri, E = i.rects.popper, C = i.elements[p ? x : u], T = w_(oi(C) ? C : C.contextElement || Pe(i.elements.popper), l, h, r), A = $i(i.elements.reference), w = _c({
            reference: A,
            element: E,
            strategy: "absolute",
            placement: n
        }), S = $r(Object.assign({}, E, w)), k = u === Ri ? S : A, D = {
            top: T.top - k.top + y.top,
            bottom: k.bottom - T.bottom + y.bottom,
            left: T.left - k.left + y.left,
            right: k.right - T.right + y.right
        }, O = i.modifiersData.offset;
        if (u === Ri && O) {
            var M = O[n];
            Object.keys(D).forEach(function(L) {
                var X = [
                    Dt,
                    Ot
                ].indexOf(L) >= 0 ? 1 : -1, I = [
                    gt,
                    Ot
                ].indexOf(L) >= 0 ? "y" : "x";
                D[L] += M[I] * X;
            });
        }
        return D;
    }
    function k_(i, t) {
        t === void 0 && (t = {});
        var e = t, s = e.placement, n = e.boundary, o = e.rootBoundary, r = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, c = l === void 0 ? wr : l, h = Bi(s), d = h ? a ? Ar : Ar.filter(function(p) {
            return Bi(p) === h;
        }) : Li, u = d.filter(function(p) {
            return c.indexOf(p) >= 0;
        });
        u.length === 0 && (u = d, ({}).NODE_ENV !== "production" && console.error([
            "Popper: The `allowedAutoPlacements` option did not allow any",
            "placements. Ensure the `placement` option matches the variation",
            "of the allowed placements.",
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(" ")));
        var f = u.reduce(function(p, _) {
            return p[_] = Hi(i, {
                placement: _,
                boundary: n,
                rootBoundary: o,
                padding: r
            })[Gt(_)], p;
        }, {});
        return Object.keys(f).sort(function(p, _) {
            return f[p] - f[_];
        });
    }
    function S_(i) {
        if (Gt(i) === bs) return [];
        var t = Pn(i);
        return [
            uc(i),
            t,
            uc(t)
        ];
    }
    function O_(i) {
        var t = i.state, e = i.options, s = i.name;
        if (!t.modifiersData[s]._skip) {
            for(var n = e.mainAxis, o = n === void 0 ? !0 : n, r = e.altAxis, a = r === void 0 ? !0 : r, l = e.fallbackPlacements, c = e.padding, h = e.boundary, d = e.rootBoundary, u = e.altBoundary, f = e.flipVariations, p = f === void 0 ? !0 : f, _ = e.allowedAutoPlacements, m = t.options.placement, y = Gt(m), x = y === m, E = l || (x || !p ? [
                Pn(m)
            ] : S_(m)), C = [
                m
            ].concat(E).reduce(function(xe, Ut) {
                return xe.concat(Gt(Ut) === bs ? k_(t, {
                    placement: Ut,
                    boundary: h,
                    rootBoundary: d,
                    padding: c,
                    flipVariations: p,
                    allowedAutoPlacements: _
                }) : Ut);
            }, []), T = t.rects.reference, A = t.rects.popper, w = new Map, S = !0, k = C[0], D = 0; D < C.length; D++){
                var O = C[D], M = Gt(O), L = Bi(O) === ni, X = [
                    gt,
                    Ot
                ].indexOf(M) >= 0, I = X ? "width" : "height", F = Hi(t, {
                    placement: O,
                    boundary: h,
                    rootBoundary: d,
                    altBoundary: u,
                    padding: c
                }), Y = X ? L ? Dt : mt : L ? Ot : gt;
                T[I] > A[I] && (Y = Pn(Y));
                var Yt = Pn(Y), ee = [];
                if (o && ee.push(F[M] <= 0), a && ee.push(F[Y] <= 0, F[Yt] <= 0), ee.every(function(xe) {
                    return xe;
                })) {
                    k = O, S = !1;
                    break;
                }
                w.set(O, ee);
            }
            if (S) for(var ie = p ? 3 : 1, ti = function(Ut) {
                var Me = C.find(function(mr) {
                    var Oi = w.get(mr);
                    if (Oi) return Oi.slice(0, Ut).every(function(Ol) {
                        return Ol;
                    });
                });
                if (Me) return k = Me, "break";
            }, Kt = ie; Kt > 0; Kt--){
                var ye = ti(Kt);
                if (ye === "break") break;
            }
            t.placement !== k && (t.modifiersData[s]._skip = !0, t.placement = k, t.reset = !0);
        }
    }
    const gc = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: O_,
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function mc(i, t, e) {
        return e === void 0 && (e = {
            x: 0,
            y: 0
        }), {
            top: i.top - t.height - e.y,
            right: i.right - t.width + e.x,
            bottom: i.bottom - t.height + e.y,
            left: i.left - t.width - e.x
        };
    }
    function bc(i) {
        return [
            gt,
            Dt,
            Ot,
            mt
        ].some(function(t) {
            return i[t] >= 0;
        });
    }
    function D_(i) {
        var t = i.state, e = i.name, s = t.rects.reference, n = t.rects.popper, o = t.modifiersData.preventOverflow, r = Hi(t, {
            elementContext: "reference"
        }), a = Hi(t, {
            altBoundary: !0
        }), l = mc(r, s), c = mc(a, n, o), h = bc(l), d = bc(c);
        t.modifiersData[e] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: h,
            hasPopperEscaped: d
        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d
        });
    }
    const vc = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: D_
    };
    function M_(i, t, e) {
        var s = Gt(i), n = [
            mt,
            gt
        ].indexOf(s) >= 0 ? -1 : 1, o = typeof e == "function" ? e(Object.assign({}, t, {
            placement: i
        })) : e, r = o[0], a = o[1];
        return r = r || 0, a = (a || 0) * n, [
            mt,
            Dt
        ].indexOf(s) >= 0 ? {
            x: a,
            y: r
        } : {
            x: r,
            y: a
        };
    }
    function I_(i) {
        var t = i.state, e = i.options, s = i.name, n = e.offset, o = n === void 0 ? [
            0,
            0
        ] : n, r = wr.reduce(function(h, d) {
            return h[d] = M_(d, t.rects, o), h;
        }, {}), a = r[t.placement], l = a.x, c = a.y;
        t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[s] = r;
    }
    const yc = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: I_
    };
    function L_(i) {
        var t = i.state, e = i.name;
        t.modifiersData[e] = _c({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement
        });
    }
    const Br = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: L_,
        data: {}
    };
    function P_(i) {
        return i === "x" ? "y" : "x";
    }
    function R_(i) {
        var t = i.state, e = i.options, s = i.name, n = e.mainAxis, o = n === void 0 ? !0 : n, r = e.altAxis, a = r === void 0 ? !1 : r, l = e.boundary, c = e.rootBoundary, h = e.altBoundary, d = e.padding, u = e.tether, f = u === void 0 ? !0 : u, p = e.tetherOffset, _ = p === void 0 ? 0 : p, m = Hi(t, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h
        }), y = Gt(t.placement), x = Bi(t.placement), E = !x, C = Mr(y), T = P_(C), A = t.modifiersData.popperOffsets, w = t.rects.reference, S = t.rects.popper, k = typeof _ == "function" ? _(Object.assign({}, t.rects, {
            placement: t.placement
        })) : _, D = typeof k == "number" ? {
            mainAxis: k,
            altAxis: k
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, k), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
            x: 0,
            y: 0
        };
        if (A) {
            if (o) {
                var L, X = C === "y" ? gt : mt, I = C === "y" ? Ot : Dt, F = C === "y" ? "height" : "width", Y = A[C], Yt = Y + m[X], ee = Y - m[I], ie = f ? -S[F] / 2 : 0, ti = x === ni ? w[F] : S[F], Kt = x === ni ? -S[F] : -w[F], ye = t.elements.arrow, xe = f && ye ? Dr(ye) : {
                    width: 0,
                    height: 0
                }, Ut = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ac(), Me = Ut[X], mr = Ut[I], Oi = ys(0, w[F], xe[F]), Ol = E ? w[F] / 2 - ie - Oi - Me - D.mainAxis : ti - Oi - Me - D.mainAxis, Tk = E ? -w[F] / 2 + ie + Oi + mr + D.mainAxis : Kt + Oi + mr + D.mainAxis, Dl = t.elements.arrow && vs(t.elements.arrow), Ak = Dl ? C === "y" ? Dl.clientTop || 0 : Dl.clientLeft || 0 : 0, Rp = (L = O == null ? void 0 : O[C]) != null ? L : 0, wk = Y + Ol - Rp - Ak, kk = Y + Tk - Rp, Np = ys(f ? Mn(Yt, wk) : Yt, Y, f ? ri(ee, kk) : ee);
                A[C] = Np, M[C] = Np - Y;
            }
            if (a) {
                var $p, Sk = C === "x" ? gt : mt, Ok = C === "x" ? Ot : Dt, Di = A[T], br = T === "y" ? "height" : "width", Bp = Di + m[Sk], Hp = Di - m[Ok], Ml = [
                    gt,
                    mt
                ].indexOf(y) !== -1, Fp = ($p = O == null ? void 0 : O[T]) != null ? $p : 0, Vp = Ml ? Bp : Di - w[br] - S[br] - Fp + D.altAxis, Wp = Ml ? Di + w[br] + S[br] - Fp - D.altAxis : Hp, zp = f && Ml ? u_(Vp, Di, Wp) : ys(f ? Vp : Bp, Di, f ? Wp : Hp);
                A[T] = zp, M[T] = zp - Di;
            }
            t.modifiersData[s] = M;
        }
    }
    const xc = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: R_,
        requiresIfExists: [
            "offset"
        ]
    };
    function N_(i) {
        return {
            scrollLeft: i.scrollLeft,
            scrollTop: i.scrollTop
        };
    }
    function $_(i) {
        return i === Mt(i) || !It(i) ? Pr(i) : N_(i);
    }
    function B_(i) {
        var t = i.getBoundingClientRect(), e = Ni(t.width) / i.offsetWidth || 1, s = Ni(t.height) / i.offsetHeight || 1;
        return e !== 1 || s !== 1;
    }
    function H_(i, t, e) {
        e === void 0 && (e = !1);
        var s = It(t), n = It(t) && B_(t), o = Pe(t), r = $i(i, n, e), a = {
            scrollLeft: 0,
            scrollTop: 0
        }, l = {
            x: 0,
            y: 0
        };
        return (s || !s && !e) && ((oe(t) !== "body" || Nr(o)) && (a = $_(t)), It(t) ? (l = $i(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Rr(o))), {
            x: r.left + a.scrollLeft - l.x,
            y: r.top + a.scrollTop - l.y,
            width: r.width,
            height: r.height
        };
    }
    function F_(i) {
        var t = new Map, e = new Set, s = [];
        i.forEach(function(o) {
            t.set(o.name, o);
        });
        function n(o) {
            e.add(o.name);
            var r = [].concat(o.requires || [], o.requiresIfExists || []);
            r.forEach(function(a) {
                if (!e.has(a)) {
                    var l = t.get(a);
                    l && n(l);
                }
            }), s.push(o);
        }
        return i.forEach(function(o) {
            e.has(o.name) || n(o);
        }), s;
    }
    function V_(i) {
        var t = F_(i);
        return Dn.reduce(function(e, s) {
            return e.concat(t.filter(function(n) {
                return n.phase === s;
            }));
        }, []);
    }
    function W_(i) {
        var t;
        return function() {
            return t || (t = new Promise(function(e) {
                Promise.resolve().then(function() {
                    t = void 0, e(i());
                });
            })), t;
        };
    }
    function Re(i) {
        for(var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)e[s - 1] = arguments[s];
        return [].concat(e).reduce(function(n, o) {
            return n.replace(/%s/, o);
        }, i);
    }
    var ai = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', z_ = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ec = [
        "name",
        "enabled",
        "phase",
        "fn",
        "effect",
        "requires",
        "options"
    ];
    function j_(i) {
        i.forEach(function(t) {
            [].concat(Object.keys(t), Ec).filter(function(e, s, n) {
                return n.indexOf(e) === s;
            }).forEach(function(e) {
                switch(e){
                    case "name":
                        typeof t.name != "string" && console.error(Re(ai, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
                        break;
                    case "enabled":
                        typeof t.enabled != "boolean" && console.error(Re(ai, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
                        break;
                    case "phase":
                        Dn.indexOf(t.phase) < 0 && console.error(Re(ai, t.name, '"phase"', "either " + Dn.join(", "), '"' + String(t.phase) + '"'));
                        break;
                    case "fn":
                        typeof t.fn != "function" && console.error(Re(ai, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
                        break;
                    case "effect":
                        t.effect != null && typeof t.effect != "function" && console.error(Re(ai, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
                        break;
                    case "requires":
                        t.requires != null && !Array.isArray(t.requires) && console.error(Re(ai, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
                        break;
                    case "requiresIfExists":
                        Array.isArray(t.requiresIfExists) || console.error(Re(ai, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
                        break;
                    case "options":
                    case "data":
                        break;
                    default:
                        console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Ec.map(function(s) {
                            return '"' + s + '"';
                        }).join(", ") + '; but "' + e + '" was provided.');
                }
                t.requires && t.requires.forEach(function(s) {
                    i.find(function(n) {
                        return n.name === s;
                    }) == null && console.error(Re(z_, String(t.name), s, s));
                });
            });
        });
    }
    function Y_(i, t) {
        var e = new Set;
        return i.filter(function(s) {
            var n = t(s);
            if (!e.has(n)) return e.add(n), !0;
        });
    }
    function K_(i) {
        var t = i.reduce(function(e, s) {
            var n = e[s.name];
            return e[s.name] = n ? Object.assign({}, n, s, {
                options: Object.assign({}, n.options, s.options),
                data: Object.assign({}, n.data, s.data)
            }) : s, e;
        }, {});
        return Object.keys(t).map(function(e) {
            return t[e];
        });
    }
    var Cc = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", U_ = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Tc = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Ac() {
        for(var i = arguments.length, t = new Array(i), e = 0; e < i; e++)t[e] = arguments[e];
        return !t.some(function(s) {
            return !(s && typeof s.getBoundingClientRect == "function");
        });
    }
    function Rn(i) {
        i === void 0 && (i = {});
        var t = i, e = t.defaultModifiers, s = e === void 0 ? [] : e, n = t.defaultOptions, o = n === void 0 ? Tc : n;
        return function(a, l, c) {
            c === void 0 && (c = o);
            var h = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Tc, o),
                modifiersData: {},
                elements: {
                    reference: a,
                    popper: l
                },
                attributes: {},
                styles: {}
            }, d = [], u = !1, f = {
                state: h,
                setOptions: function(y) {
                    var x = typeof y == "function" ? y(h.options) : y;
                    _(), h.options = Object.assign({}, o, h.options, x), h.scrollParents = {
                        reference: oi(a) ? xs(a) : a.contextElement ? xs(a.contextElement) : [],
                        popper: xs(l)
                    };
                    var E = V_(K_([].concat(s, h.options.modifiers)));
                    if (h.orderedModifiers = E.filter(function(O) {
                        return O.enabled;
                    }), ({}).NODE_ENV !== "production") {
                        var C = Y_([].concat(E, h.options.modifiers), function(O) {
                            var M = O.name;
                            return M;
                        });
                        if (j_(C), Gt(h.options.placement) === bs) {
                            var T = h.orderedModifiers.find(function(O) {
                                var M = O.name;
                                return M === "flip";
                            });
                            T || console.error([
                                'Popper: "auto" placements require the "flip" modifier be',
                                "present and enabled to work."
                            ].join(" "));
                        }
                        var A = qt(l), w = A.marginTop, S = A.marginRight, k = A.marginBottom, D = A.marginLeft;
                        [
                            w,
                            S,
                            k,
                            D
                        ].some(function(O) {
                            return parseFloat(O);
                        }) && console.warn([
                            'Popper: CSS "margin" styles cannot be used to apply padding',
                            "between the popper and its reference element or boundary.",
                            "To replicate margin, use the `offset` modifier, as well as",
                            "the `padding` option in the `preventOverflow` and `flip`",
                            "modifiers."
                        ].join(" "));
                    }
                    return p(), f.update();
                },
                forceUpdate: function() {
                    if (!u) {
                        var y = h.elements, x = y.reference, E = y.popper;
                        if (!Ac(x, E)) {
                            ({}).NODE_ENV !== "production" && console.error(Cc);
                            return;
                        }
                        h.rects = {
                            reference: H_(x, vs(E), h.options.strategy === "fixed"),
                            popper: Dr(E)
                        }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(O) {
                            return h.modifiersData[O.name] = Object.assign({}, O.data);
                        });
                        for(var C = 0, T = 0; T < h.orderedModifiers.length; T++){
                            if (({}).NODE_ENV !== "production" && (C += 1, C > 100)) {
                                console.error(U_);
                                break;
                            }
                            if (h.reset === !0) {
                                h.reset = !1, T = -1;
                                continue;
                            }
                            var A = h.orderedModifiers[T], w = A.fn, S = A.options, k = S === void 0 ? {} : S, D = A.name;
                            typeof w == "function" && (h = w({
                                state: h,
                                options: k,
                                name: D,
                                instance: f
                            }) || h);
                        }
                    }
                },
                update: W_(function() {
                    return new Promise(function(m) {
                        f.forceUpdate(), m(h);
                    });
                }),
                destroy: function() {
                    _(), u = !0;
                }
            };
            if (!Ac(a, l)) return ({}).NODE_ENV !== "production" && console.error(Cc), f;
            f.setOptions(c).then(function(m) {
                !u && c.onFirstUpdate && c.onFirstUpdate(m);
            });
            function p() {
                h.orderedModifiers.forEach(function(m) {
                    var y = m.name, x = m.options, E = x === void 0 ? {} : x, C = m.effect;
                    if (typeof C == "function") {
                        var T = C({
                            state: h,
                            name: y,
                            instance: f,
                            options: E
                        }), A = function() {};
                        d.push(T || A);
                    }
                });
            }
            function _() {
                d.forEach(function(m) {
                    return m();
                }), d = [];
            }
            return f;
        };
    }
    var X_ = Rn(), G_ = [
        Lr,
        Br,
        Ir,
        Sr
    ], q_ = Rn({
        defaultModifiers: G_
    }), Z_ = [
        Lr,
        Br,
        Ir,
        Sr,
        yc,
        gc,
        xc,
        hc,
        vc
    ], Fi = Rn({
        defaultModifiers: Z_
    });
    const wc = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: tc,
        afterRead: Zl,
        afterWrite: sc,
        applyStyles: Sr,
        arrow: hc,
        auto: bs,
        basePlacements: Li,
        beforeMain: Ql,
        beforeRead: Gl,
        beforeWrite: ec,
        bottom: Ot,
        clippingParents: Ul,
        computeStyles: Ir,
        createPopper: Fi,
        createPopperBase: X_,
        createPopperLite: q_,
        detectOverflow: Hi,
        end: Pi,
        eventListeners: Lr,
        flip: gc,
        hide: vc,
        left: mt,
        main: Jl,
        modifierPhases: Dn,
        offset: yc,
        placements: wr,
        popper: Ri,
        popperGenerator: Rn,
        popperOffsets: Br,
        preventOverflow: xc,
        read: ql,
        reference: Xl,
        right: Dt,
        start: ni,
        top: gt,
        variationPlacements: Ar,
        viewport: Tr,
        write: ic
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function Hr(i) {
        return i === "true" ? !0 : i === "false" ? !1 : i === Number(i).toString() ? Number(i) : i === "" || i === "null" ? null : i;
    }
    function Fr(i) {
        return i.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    const v = {
        setDataAttribute (i, t, e) {
            i.setAttribute(`data-te-${Fr(t)}`, e);
        },
        removeDataAttribute (i, t) {
            i.removeAttribute(`data-te-${Fr(t)}`);
        },
        getDataAttributes (i) {
            if (!i) return {};
            const t = {};
            return Object.keys(i.dataset).filter((e)=>e.startsWith("te")).forEach((e)=>{
                if (e.startsWith("teClass")) return;
                let s = e.replace(/^te/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length), t[s] = Hr(i.dataset[e]);
            }), t;
        },
        getDataClassAttributes (i) {
            if (!i) return {};
            const t = {
                ...i.dataset
            };
            return Object.keys(t).filter((e)=>e.startsWith("teClass")).forEach((e)=>{
                let s = e.replace(/^teClass/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length), t[s] = Hr(t[e]);
            }), t;
        },
        getDataAttribute (i, t) {
            return Hr(i.getAttribute(`data-te-${Fr(t)}`));
        },
        offset (i) {
            const t = i.getBoundingClientRect();
            return {
                top: t.top + document.body.scrollTop,
                left: t.left + document.body.scrollLeft
            };
        },
        position (i) {
            return {
                top: i.offsetTop,
                left: i.offsetLeft
            };
        },
        style (i, t) {
            Object.assign(i.style, t);
        },
        toggleClass (i, t) {
            i && Vr(t).forEach((e)=>{
                i.classList.contains(e) ? i.classList.remove(e) : i.classList.add(e);
            });
        },
        addClass (i, t) {
            Vr(t).forEach((e)=>!i.classList.contains(e) && i.classList.add(e));
        },
        addStyle (i, t) {
            Object.keys(t).forEach((e)=>{
                i.style[e] = t[e];
            });
        },
        removeClass (i, t) {
            Vr(t).forEach((e)=>i.classList.contains(e) && i.classList.remove(e));
        },
        hasClass (i, t) {
            return i.classList.contains(t);
        }
    };
    function Vr(i) {
        return typeof i == "string" ? i.split(" ") : Array.isArray(i) ? i : !1;
    }
    const Q_ = 3, g = {
        closest (i, t) {
            return i.closest(t);
        },
        matches (i, t) {
            return i.matches(t);
        },
        find (i, t = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(t, i));
        },
        findOne (i, t = document.documentElement) {
            return Element.prototype.querySelector.call(t, i);
        },
        children (i, t) {
            return [].concat(...i.children).filter((s)=>s.matches(t));
        },
        parents (i, t) {
            const e = [];
            let s = i.parentNode;
            for(; s && s.nodeType === Node.ELEMENT_NODE && s.nodeType !== Q_;)this.matches(s, t) && e.push(s), s = s.parentNode;
            return e;
        },
        prev (i, t) {
            let e = i.previousElementSibling;
            for(; e;){
                if (e.matches(t)) return [
                    e
                ];
                e = e.previousElementSibling;
            }
            return [];
        },
        next (i, t) {
            let e = i.nextElementSibling;
            for(; e;){
                if (this.matches(e, t)) return [
                    e
                ];
                e = e.nextElementSibling;
            }
            return [];
        },
        focusableChildren (i) {
            const t = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((e)=>`${e}:not([tabindex^="-"])`).join(", ");
            return this.find(t, i).filter((e)=>!ei(e) && ne(e));
        }
    }, Wr = "dropdown", li = ".te.dropdown", zr = ".data-api", Nn = "Escape", kc = "Space", Sc = "Tab", jr = "ArrowUp", $n = "ArrowDown", J_ = 2, tg = new RegExp(`${jr}|${$n}|${Nn}`), eg = `hide${li}`, ig = `hidden${li}`, sg = `show${li}`, ng = `shown${li}`, og = `click${li}${zr}`, Oc = `keydown${li}${zr}`, rg = `keyup${li}${zr}`, Ne = "show", ag = "dropup", lg = "dropend", cg = "dropstart", hg = "[data-te-navbar-ref]", Bn = "[data-te-dropdown-toggle-ref]", Yr = "[data-te-dropdown-menu-ref]", dg = "[data-te-navbar-nav-ref]", ug = "[data-te-dropdown-menu-ref] [data-te-dropdown-item-ref]:not(.disabled):not(:disabled)", fg = st() ? "top-end" : "top-start", pg = st() ? "top-start" : "top-end", _g = st() ? "bottom-end" : "bottom-start", gg = st() ? "bottom-start" : "bottom-end", mg = st() ? "left-start" : "right-start", bg = st() ? "right-start" : "left-start", vg = [
        {
            opacity: "0"
        },
        {
            opacity: "1"
        }
    ], yg = [
        {
            opacity: "1"
        },
        {
            opacity: "0"
        }
    ], Hn = {
        duration: 550,
        iterations: 1,
        easing: "ease",
        fill: "both"
    }, xg = {
        offset: [
            0,
            2
        ],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0,
        dropdownAnimation: "on"
    }, Eg = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)",
        dropdownAnimation: "string"
    };
    class $t extends Xt {
        constructor(t, e){
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._fadeOutAnimate = null;
            const s = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            this._animationCanPlay = this._config.dropdownAnimation === "on" && !s, this._didInit = !1, this._init();
        }
        static get Default() {
            return xg;
        }
        static get DefaultType() {
            return Eg;
        }
        static get NAME() {
            return Wr;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (ei(this._element) || this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            if (b.trigger(this._element, sg, t).defaultPrevented) return;
            const s = $t.getParentFromElement(this._element);
            this._inNavbar ? v.setDataAttribute(this._menu, "popper", "none") : this._createPopper(s), "ontouchstart" in document.documentElement && !s.closest(dg) && [].concat(...document.body.children).forEach((n)=>b.on(n, "mouseover", Sn)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.setAttribute(`data-te-dropdown-${Ne}`, ""), this._animationCanPlay && this._menu.animate(vg, Hn), this._element.setAttribute(`data-te-dropdown-${Ne}`, ""), setTimeout(()=>{
                b.trigger(this._element, ng, t);
            }, this._animationCanPlay ? Hn.duration : 0);
        }
        hide() {
            if (ei(this._element) || !this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _init() {
            this._didInit || (b.on(document, Oc, Bn, $t.dataApiKeydownHandler), b.on(document, Oc, Yr, $t.dataApiKeydownHandler), b.on(document, og, $t.clearMenus), b.on(document, rg, $t.clearMenus), this._didInit = !0);
        }
        _completeHide(t) {
            this._fadeOutAnimate && this._fadeOutAnimate.playState === "running" || b.trigger(this._element, eg, t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((s)=>b.off(s, "mouseover", Sn)), this._animationCanPlay && (this._fadeOutAnimate = this._menu.animate(yg, Hn)), setTimeout(()=>{
                this._popper && this._popper.destroy(), this._menu.removeAttribute(`data-te-dropdown-${Ne}`), this._element.removeAttribute(`data-te-dropdown-${Ne}`), this._element.setAttribute("aria-expanded", "false"), v.removeDataAttribute(this._menu, "popper"), b.trigger(this._element, ig, t);
            }, this._animationCanPlay ? Hn.duration : 0));
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...v.getDataAttributes(this._element),
                ...t
            }, W(Wr, t, this.constructor.DefaultType), typeof t.reference == "object" && !Mi(t.reference) && typeof t.reference.getBoundingClientRect != "function") throw new TypeError(`${Wr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper(t) {
            if (typeof wc > "u") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            this._config.reference === "parent" ? e = t : Mi(this._config.reference) ? e = Le(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
            const s = this._getPopperConfig(), n = s.modifiers.find((o)=>o.name === "applyStyles" && o.enabled === !1);
            this._popper = Fi(e, this._menu, s), n && v.setDataAttribute(this._menu, "popper", "static");
        }
        _isShown(t = this._element) {
            return t.dataset[`teDropdown${Ne.charAt(0).toUpperCase() + Ne.slice(1)}`] === "";
        }
        _getMenuElement() {
            return g.next(this._element, Yr)[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.dataset.teDropdownPosition === lg) return mg;
            if (t.dataset.teDropdownPosition === cg) return bg;
            const e = getComputedStyle(this._menu).getPropertyValue("--te-position").trim() === "end";
            return t.dataset.teDropdownPosition === ag ? e ? pg : fg : e ? gg : _g;
        }
        _detectNavbar() {
            return this._element.closest(hg) !== null;
        }
        _getOffset() {
            const { offset: t } = this._config;
            return typeof t == "string" ? t.split(",").map((e)=>Number.parseInt(e, 10)) : typeof t == "function" ? (e)=>t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return this._config.display === "static" && (t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
            };
        }
        _selectMenuItem({ key: t, target: e }) {
            const s = g.find(ug, this._menu).filter(ne);
            s.length && Bl(s, e, t === $n, !s.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = $t.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (t && (t.button === J_ || t.type === "keyup" && t.key !== Sc)) return;
            const e = g.find(Bn);
            for(let s = 0, n = e.length; s < n; s++){
                const o = $t.getInstance(e[s]);
                if (!o || o._config.autoClose === !1 || !o._isShown()) continue;
                const r = {
                    relatedTarget: o._element
                };
                if (t) {
                    const a = t.composedPath(), l = a.includes(o._menu);
                    if (a.includes(o._element) || o._config.autoClose === "inside" && !l || o._config.autoClose === "outside" && l || o._menu.contains(t.target) && (t.type === "keyup" && t.key === Sc || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                    t.type === "click" && (r.clickEvent = t);
                }
                o._completeHide(r);
            }
        }
        static getParentFromElement(t) {
            return Ie(t) || t.parentNode;
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === kc || t.key !== Nn && (t.key !== $n && t.key !== jr || t.target.closest(Yr)) : !tg.test(t.key)) return;
            const e = this.dataset[`teDropdown${Ne.charAt(0).toUpperCase() + Ne.slice(1)}`] === "";
            if (!e && t.key === Nn || (t.preventDefault(), t.stopPropagation(), ei(this))) return;
            const s = this.matches(Bn) ? this : g.prev(this, Bn)[0], n = $t.getOrCreateInstance(s);
            if (t.key === Nn) {
                n.hide();
                return;
            }
            if (t.key === jr || t.key === $n) {
                e || n.show(), n._selectMenuItem(t);
                return;
            }
            (!e || t.key === kc) && $t.clearMenus();
        }
    }
    const Kr = "collapse", Dc = "te.collapse", Fn = `.${Dc}`, Mc = {
        toggle: !0,
        parent: null
    }, Cg = {
        toggle: "boolean",
        parent: "(null|element)"
    }, Tg = `show${Fn}`, Ag = `shown${Fn}`, wg = `hide${Fn}`, kg = `hidden${Fn}`, Ur = "data-te-collapse-show", Ic = "data-te-collapse-collapsed", Vn = "data-te-collapse-collapsing", Sg = "data-te-collapse-horizontal", Vi = "data-te-collapse-item", Lc = `:scope [${Vi}] [${Vi}]`, Og = "width", Dg = "height", Mg = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", Pc = "[data-te-collapse-init]", Ig = {
        visible: "!visible",
        hidden: "hidden",
        baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
    }, Lg = {
        visible: "string",
        hidden: "string",
        baseTransition: "string",
        collapsing: "string",
        collapsingHorizontal: "string"
    };
    class re extends Xt {
        constructor(t, e, s){
            super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._classes = this._getClasses(s), this._triggerArray = [];
            const n = g.find(Pc);
            for(let o = 0, r = n.length; o < r; o++){
                const a = n[o], l = yr(a), c = g.find(l).filter((h)=>h === this._element);
                l !== null && c.length && (this._selector = l, this._triggerArray.push(a));
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return Mc;
        }
        static get NAME() {
            return Kr;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [], e;
            if (this._config.parent) {
                const h = g.find(Lc, this._config.parent);
                t = g.find(Mg, this._config.parent).filter((d)=>!h.includes(d));
            }
            const s = g.findOne(this._selector);
            if (t.length) {
                const h = t.find((d)=>s !== d);
                if (e = h ? re.getInstance(h) : null, e && e._isTransitioning) return;
            }
            if (b.trigger(this._element, Tg).defaultPrevented) return;
            t.forEach((h)=>{
                s !== h && re.getOrCreateInstance(h, {
                    toggle: !1
                }).hide(), e || P.setData(h, Dc, null);
            });
            const o = this._getDimension(), r = o === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
            v.removeClass(this._element, this._classes.visible), v.removeClass(this._element, this._classes.hidden), v.addClass(this._element, r), this._element.removeAttribute(Vi), this._element.setAttribute(Vn, ""), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const a = ()=>{
                this._isTransitioning = !1, v.removeClass(this._element, this._classes.hidden), v.removeClass(this._element, r), v.addClass(this._element, this._classes.visible), this._element.removeAttribute(Vn), this._element.setAttribute(Vi, ""), this._element.setAttribute(Ur, ""), this._element.style[o] = "", b.trigger(this._element, Ag);
            }, c = `scroll${o[0].toUpperCase() + o.slice(1)}`;
            this._queueCallback(a, this._element, !0), this._element.style[o] = `${this._element[c]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown() || b.trigger(this._element, wg).defaultPrevented) return;
            const e = this._getDimension(), s = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
            this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Ii(this._element), v.addClass(this._element, s), v.removeClass(this._element, this._classes.visible), v.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Vn, ""), this._element.removeAttribute(Vi), this._element.removeAttribute(Ur);
            const n = this._triggerArray.length;
            for(let r = 0; r < n; r++){
                const a = this._triggerArray[r], l = Ie(a);
                l && !this._isShown(l) && this._addAriaAndCollapsedClass([
                    a
                ], !1);
            }
            this._isTransitioning = !0;
            const o = ()=>{
                this._isTransitioning = !1, v.removeClass(this._element, s), v.addClass(this._element, this._classes.visible), v.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Vn), this._element.setAttribute(Vi, ""), b.trigger(this._element, kg);
            };
            this._element.style[e] = "", this._queueCallback(o, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.hasAttribute(Ur);
        }
        _getConfig(t) {
            return t = {
                ...Mc,
                ...v.getDataAttributes(this._element),
                ...t
            }, t.toggle = !!t.toggle, t.parent = Le(t.parent), W(Kr, t, Cg), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...Ig,
                ...e,
                ...t
            }, W(Kr, t, Lg), t;
        }
        _getDimension() {
            return this._element.hasAttribute(Sg) ? Og : Dg;
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = g.find(Lc, this._config.parent);
            g.find(Pc, this._config.parent).filter((e)=>!t.includes(e)).forEach((e)=>{
                const s = Ie(e);
                s && this._addAriaAndCollapsedClass([
                    e
                ], this._isShown(s));
            });
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach((s)=>{
                e ? s.removeAttribute(Ic) : s.setAttribute(`${Ic}`, ""), s.setAttribute("aria-expanded", e);
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = {};
                typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1);
                const s = re.getOrCreateInstance(this, e);
                if (typeof t == "string") {
                    if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
                    s[t]();
                }
            });
        }
    }
    const Rc = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Nc = ".sticky-top";
    class Es {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e)=>e + t), this._setElementAttributes(Rc, "paddingRight", (e)=>e + t), this._setElementAttributes(Nc, "marginRight", (e)=>e - t);
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, s) {
            const n = this.getWidth(), o = (r)=>{
                if (r !== this._element && window.innerWidth > r.clientWidth + n) return;
                this._saveInitialAttribute(r, e);
                const a = window.getComputedStyle(r)[e];
                r.style[e] = `${s(Number.parseFloat(a))}px`;
            };
            this._applyManipulationCallback(t, o);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Rc, "paddingRight"), this._resetElementAttributes(Nc, "marginRight");
        }
        _saveInitialAttribute(t, e) {
            const s = t.style[e];
            s && v.setDataAttribute(t, e, s);
        }
        _resetElementAttributes(t, e) {
            const s = (n)=>{
                const o = v.getDataAttribute(n, e);
                typeof o > "u" ? n.style.removeProperty(e) : (v.removeDataAttribute(n, e), n.style[e] = o);
            };
            this._applyManipulationCallback(t, s);
        }
        _applyManipulationCallback(t, e) {
            Mi(t) ? e(t) : g.find(t, this._element).forEach(e);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const Pg = {
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null,
        backdropClasses: null
    }, Rg = {
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)",
        backdropClasses: "(array|null)"
    }, $c = "backdrop", Bc = `mousedown.te.${$c}`;
    class Xr {
        constructor(t){
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        show(t) {
            if (!this._config.isVisible) {
                ii(t);
                return;
            }
            this._append(), this._config.isAnimated && Ii(this._getElement());
            const e = this._config.backdropClasses || [
                "opacity-50",
                "transition-all",
                "duration-300",
                "ease-in-out",
                "fixed",
                "top-0",
                "left-0",
                "z-[1040]",
                "bg-black",
                "w-screen",
                "h-screen"
            ];
            v.removeClass(this._getElement(), "opacity-0"), v.addClass(this._getElement(), e), this._element.setAttribute("data-te-backdrop-show", ""), this._emulateAnimation(()=>{
                ii(t);
            });
        }
        hide(t) {
            if (!this._config.isVisible) {
                ii(t);
                return;
            }
            this._element.removeAttribute("data-te-backdrop-show"), this._getElement().classList.add("opacity-0"), this._getElement().classList.remove("opacity-50"), this._emulateAnimation(()=>{
                this.dispose(), ii(t);
            });
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("opacity-50"), this._element = t;
            }
            return this._element;
        }
        _getConfig(t) {
            return t = {
                ...Pg,
                ...typeof t == "object" ? t : {}
            }, t.rootElement = Le(t.rootElement), W($c, t, Rg), t;
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), b.on(this._getElement(), Bc, ()=>{
                ii(this._config.clickCallback);
            }), this._isAppended = !0);
        }
        dispose() {
            this._isAppended && (b.off(this._element, Bc), this._element.remove(), this._isAppended = !1);
        }
        _emulateAnimation(t) {
            $l(t, this._getElement(), this._config.isAnimated);
        }
    }
    class Cs {
        constructor(t, e = {}, s){
            this._element = t, this._toggler = s, this._event = e.event || "blur", this._condition = e.condition || (()=>!0), this._selector = e.selector || 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])', this._onlyVisible = e.onlyVisible || !1, this._focusableElements = [], this._firstElement = null, this._lastElement = null, this.handler = (n)=>{
                this._condition(n) && !n.shiftKey && n.target === this._lastElement ? (n.preventDefault(), this._firstElement.focus()) : this._condition(n) && n.shiftKey && n.target === this._firstElement && (n.preventDefault(), this._lastElement.focus());
            };
        }
        trap() {
            this._setElements(), this._init(), this._setFocusTrap();
        }
        disable() {
            this._focusableElements.forEach((t)=>{
                t.removeEventListener(this._event, this.handler);
            }), this._toggler && this._toggler.focus();
        }
        update() {
            this._setElements(), this._setFocusTrap();
        }
        _init() {
            const t = (e)=>{
                !this._firstElement || e.key !== "Tab" || this._focusableElements.includes(e.target) || (e.preventDefault(), this._firstElement.focus(), window.removeEventListener("keydown", t));
            };
            window.addEventListener("keydown", t);
        }
        _filterVisible(t) {
            return t.filter((e)=>{
                if (!ne(e)) return !1;
                const s = g.parents(e, "*");
                for(let n = 0; n < s.length; n++){
                    const o = window.getComputedStyle(s[n]);
                    if (o && (o.display === "none" || o.visibility === "hidden")) return !1;
                }
                return !0;
            });
        }
        _setElements() {
            this._focusableElements = g.focusableChildren(this._element), this._onlyVisible && (this._focusableElements = this._filterVisible(this._focusableElements)), this._firstElement = this._focusableElements[0], this._lastElement = this._focusableElements[this._focusableElements.length - 1];
        }
        _setFocusTrap() {
            this._focusableElements.forEach((t, e)=>{
                e === this._focusableElements.length - 1 || e === 0 ? t.addEventListener(this._event, this.handler) : t.removeEventListener(this._event, this.handler);
            });
        }
    }
    const Wn = (i, t = "hide")=>{
        const e = `click.dismiss${i.EVENT_KEY}`, s = i.NAME;
        b.on(document, e, `[data-te-${s}-dismiss]`, function(n) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && n.preventDefault(), ei(this)) return;
            const o = Ie(this) || this.closest(`.${s}`) || this.closest(`[data-te-${s}-init]`);
            if (!o) return;
            i.getOrCreateInstance(o)[t]();
        });
    }, Hc = "offcanvas", Wi = ".te.offcanvas", Ng = `load${Wi}.data-api`, $g = "Escape", Fc = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Bg = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }, Vc = "show", Hg = "[data-te-offcanvas-init][data-te-offcanvas-show]", Fg = `show${Wi}`, Vg = `shown${Wi}`, Wg = `hide${Wi}`, zg = `hidden${Wi}`, jg = `keydown.dismiss${Wi}`;
    class zi extends Xt {
        constructor(t, e){
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners(), this._didInit = !1, this._init();
        }
        static get NAME() {
            return Hc;
        }
        static get Default() {
            return Fc;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            if (this._isShown || b.trigger(this._element, Fg, {
                relatedTarget: t
            }).defaultPrevented) return;
            this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new Es().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`data-te-offcanvas-${Vc}`, "");
            const s = ()=>{
                this._config.scroll || this._focustrap.trap(), b.trigger(this._element, Vg, {
                    relatedTarget: t
                });
            };
            this._queueCallback(s, this._element, !0);
        }
        hide() {
            if (!this._isShown || b.trigger(this._element, Wg).defaultPrevented) return;
            this._focustrap.disable(), this._element.blur(), this._isShown = !1, this._element.removeAttribute(`data-te-offcanvas-${Vc}`), this._backdrop.hide();
            const e = ()=>{
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new Es().reset(), b.trigger(this._element, zg);
            };
            this._queueCallback(e, this._element, !0);
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
        }
        _init() {
            this._didInit || (b.on(window, Ng, ()=>g.find(Hg).forEach((t)=>zi.getOrCreateInstance(t).show())), Wn(zi), this._didInit = !0);
        }
        _getConfig(t) {
            return t = {
                ...Fc,
                ...v.getDataAttributes(this._element),
                ...typeof t == "object" ? t : {}
            }, W(Hc, t, Bg), t;
        }
        _initializeBackDrop() {
            return new Xr({
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            });
        }
        _initializeFocusTrap() {
            return new Cs(this._element, {
                event: "keydown",
                condition: (t)=>t.key === "Tab"
            });
        }
        _addEventListeners() {
            b.on(this._element, jg, (t)=>{
                this._config.keyboard && t.key === $g && this.hide();
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = zi.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (e[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    const Gr = "alert", Wc = ".te.alert", Yg = `close${Wc}`, Kg = `closed${Wc}`, Ts = "data-te-alert-show", Ug = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, zc = {
        animation: !0,
        autohide: !0,
        delay: 1e3
    }, Xg = {
        fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
        fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
    }, Gg = {
        fadeIn: "string",
        fadeOut: "string"
    };
    class As extends Xt {
        constructor(t, e, s){
            super(t), this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(s), this._didInit = !1, this._init();
        }
        static get DefaultType() {
            return Ug;
        }
        static get Default() {
            return zc;
        }
        static get NAME() {
            return Gr;
        }
        close() {
            if (b.trigger(this._element, Yg).defaultPrevented) return;
            let e = 0;
            this._config.animation && (e = 300, v.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Ts), setTimeout(()=>{
                this._queueCallback(()=>this._destroyElement(), this._element, this._config.animation);
            }, e);
        }
        show() {
            if (this._element) {
                if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Ts) && (v.removeClass(this._element, "hidden"), v.addClass(this._element, "block"), ne(this._element))) {
                    const t = (e)=>{
                        v.removeClass(this._element, "hidden"), v.addClass(this._element, "block"), b.off(e.target, "animationend", t);
                    };
                    this._element.setAttribute(Ts, ""), b.on(this._element, "animationend", t);
                }
                this._config.animation && (v.removeClass(this._element, this._classes.fadeOut), v.addClass(this._element, this._classes.fadeIn));
            }
        }
        hide() {
            if (this._element && this._element.hasAttribute(Ts)) {
                this._element.removeAttribute(Ts);
                const t = (e)=>{
                    v.addClass(this._element, "hidden"), v.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), b.off(e.target, "animationend", t);
                };
                b.on(this._element, "animationend", t), v.removeClass(this._element, this._classes.fadeIn), v.addClass(this._element, this._classes.fadeOut);
            }
        }
        _init() {
            this._didInit || (Wn(As, "close"), this._didInit = !0);
        }
        _getConfig(t) {
            return t = {
                ...zc,
                ...v.getDataAttributes(this._element),
                ...typeof t == "object" && t ? t : {}
            }, W(Gr, t, this.constructor.DefaultType), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...Xg,
                ...e,
                ...t
            }, W(Gr, t, Gg), t;
        }
        _setupAutohide() {
            this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay);
        }
        _destroyElement() {
            this._element.remove(), b.trigger(this._element, Kg), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = As.getOrCreateInstance(this);
                if (typeof t == "string") {
                    if (e[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    const qr = "carousel", Lt = ".te.carousel", jc = ".data-api", qg = "ArrowLeft", Zg = "ArrowRight", Qg = 500, Jg = 40, Yc = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, tm = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, em = {
        pointer: "touch-pan-y",
        block: "!block",
        visible: "data-[te-carousel-fade]:opacity-100 data-[te-carousel-fade]:z-[1]",
        invisible: "data-[te-carousel-fade]:z-0 data-[te-carousel-fade]:opacity-0 data-[te-carousel-fade]:duration-0 data-[te-carousel-fade]:delay-600",
        slideRight: "translate-x-full",
        slideLeft: "-translate-x-full"
    }, im = {
        pointer: "string",
        block: "string",
        visible: "string",
        invisible: "string",
        slideRight: "string",
        slideLeft: "string"
    }, ci = "next", hi = "prev", di = "left", ws = "right", sm = {
        [qg]: ws,
        [Zg]: di
    }, nm = `slide${Lt}`, Kc = `slid${Lt}`, om = `keydown${Lt}`, rm = `mouseenter${Lt}`, am = `mouseleave${Lt}`, lm = `touchstart${Lt}`, cm = `touchmove${Lt}`, hm = `touchend${Lt}`, dm = `pointerdown${Lt}`, um = `pointerup${Lt}`, fm = `dragstart${Lt}`, pm = `load${Lt}${jc}`, _m = `click${Lt}${jc}`, gm = "data-te-carousel-init", ui = "data-te-carousel-active", mm = "data-te-carousel-slide", bm = "data-te-carousel-item-end", Zr = "data-te-carousel-item-start", vm = "data-te-carousel-item-next", ym = "data-te-carousel-item-prev", xm = "data-te-carousel-pointer-event", Em = "[data-te-carousel-init]", Uc = "[data-te-carousel-active]", Qr = "[data-te-carousel-item]", ji = `${Uc}${Qr}`, Cm = `${Qr} img`, Tm = "[data-te-carousel-item-next], [data-te-carousel-item-prev]", Am = "[data-te-carousel-indicators]", wm = "[data-te-target]", km = "[data-te-slide], [data-te-slide-to]", Sm = "touch", Om = "pen";
    class ae extends Xt {
        constructor(t, e, s){
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._classes = this._getClasses(s), this._indicatorsElement = g.findOne(Am, this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!window.PointerEvent, this._setActiveElementClass(), this._addEventListeners(), this._didInit = !1, this._init();
        }
        static get Default() {
            return Yc;
        }
        static get NAME() {
            return qr;
        }
        next() {
            this._slide(ci);
        }
        nextWhenVisible() {
            !document.hidden && ne(this._element) && this.next();
        }
        prev() {
            this._slide(hi);
        }
        pause(t) {
            t || (this._isPaused = !0), g.findOne(Tm, this._element) && (Ll(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }
        to(t) {
            this._activeElement = g.findOne(ji, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) {
                b.one(this._element, Kc, ()=>this.to(t));
                return;
            }
            if (e === t) {
                this.pause(), this.cycle();
                return;
            }
            const s = t > e ? ci : hi;
            this._slide(s, this._items[t]);
        }
        _init() {
            this._didInit || (b.on(document, _m, km, ae.dataApiClickHandler), b.on(window, pm, ()=>{
                const t = g.find(Em);
                for(let e = 0, s = t.length; e < s; e++)ae.carouselInterface(t[e], ae.getInstance(t[e]));
            }), this._didInit = !0);
        }
        _getConfig(t) {
            return t = {
                ...Yc,
                ...v.getDataAttributes(this._element),
                ...typeof t == "object" ? t : {}
            }, W(qr, t, tm), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...em,
                ...e,
                ...t
            }, W(qr, t, im), t;
        }
        _applyInitialClasses() {
            const t = g.findOne(ji, this._element);
            t.classList.add(this._classes.block, ...this._classes.visible.split(" ")), this._setActiveIndicatorElement(t);
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= Jg) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? ws : di);
        }
        _setActiveElementClass() {
            this._activeElement = g.findOne(ji, this._element), v.addClass(this._activeElement, "hidden");
        }
        _addEventListeners() {
            this._config.keyboard && b.on(this._element, om, (t)=>this._keydown(t)), this._config.pause === "hover" && (b.on(this._element, rm, (t)=>this.pause(t)), b.on(this._element, am, (t)=>this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners(), this._applyInitialClasses();
        }
        _addTouchEventListeners() {
            const t = (o)=>this._pointerEvent && (o.pointerType === Om || o.pointerType === Sm), e = (o)=>{
                t(o) ? this.touchStartX = o.clientX : this._pointerEvent || (this.touchStartX = o.touches[0].clientX);
            }, s = (o)=>{
                this.touchDeltaX = o.touches && o.touches.length > 1 ? 0 : o.touches[0].clientX - this.touchStartX;
            }, n = (o)=>{
                t(o) && (this.touchDeltaX = o.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((r)=>this.cycle(r), Qg + this._config.interval));
            };
            g.find(Cm, this._element).forEach((o)=>{
                b.on(o, fm, (r)=>r.preventDefault());
            }), this._pointerEvent ? (b.on(this._element, dm, (o)=>e(o)), b.on(this._element, um, (o)=>n(o)), this._element.classList.add(this._classes.pointer), this._element.setAttribute(`${xm}`, "")) : (b.on(this._element, lm, (o)=>e(o)), b.on(this._element, cm, (o)=>s(o)), b.on(this._element, hm, (o)=>n(o)));
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = sm[t.key];
            e && (t.preventDefault(), this._slide(e));
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? g.find(Qr, t.parentNode) : [], this._items.indexOf(t);
        }
        _getItemByOrder(t, e) {
            const s = t === ci;
            return Bl(this._items, e, s, this._config.wrap);
        }
        _triggerSlideEvent(t, e) {
            const s = this._getItemIndex(t), n = this._getItemIndex(g.findOne(ji, this._element));
            return b.trigger(this._element, nm, {
                relatedTarget: t,
                direction: e,
                from: n,
                to: s
            });
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = g.findOne(Uc, this._indicatorsElement);
                e.removeAttribute(ui), e.removeAttribute("aria-current"), e.classList.remove("!opacity-100");
                const s = g.find(wm, this._indicatorsElement);
                for(let n = 0; n < s.length; n++)if (Number.parseInt(s[n].getAttribute("data-te-slide-to"), 10) === this._getItemIndex(t)) {
                    s[n].setAttribute(`${ui}`, ""), s[n].setAttribute("aria-current", "true"), s[n].classList.add("!opacity-100");
                    break;
                }
            }
        }
        _updateInterval() {
            const t = this._activeElement || g.findOne(ji, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-te-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        _slide(t, e) {
            const s = this._directionToOrder(t), n = g.findOne(ji, this._element), o = this._getItemIndex(n), r = e || this._getItemByOrder(s, n), a = this._getItemIndex(r), l = !!this._interval, c = s === ci, h = c ? Zr : bm, d = c ? vm : ym, u = this._orderToDirection(s), f = h === Zr ? this._classes.slideLeft : this._classes.slideRight, p = h !== Zr ? this._classes.slideLeft : this._classes.slideRight;
            if (r && r.hasAttribute(ui)) {
                this._isSliding = !1;
                return;
            }
            if (this._isSliding || this._triggerSlideEvent(r, u).defaultPrevented || !n || !r) return;
            this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
            const m = ()=>{
                b.trigger(this._element, Kc, {
                    relatedTarget: r,
                    direction: u,
                    from: o,
                    to: a
                });
            };
            if (this._element.hasAttribute(mm)) {
                r.setAttribute(`${d}`, ""), r.classList.add(this._classes.block, p), Ii(r), n.setAttribute(`${h}`, ""), n.classList.add(f, ...this._classes.invisible.split(" ")), n.classList.remove(...this._classes.visible.split(" ")), r.setAttribute(`${h}`, ""), r.classList.add(...this._classes.visible.split(" ")), r.classList.remove(this._classes.slideRight, this._classes.slideLeft);
                const y = ()=>{
                    r.removeAttribute(h), r.removeAttribute(d), r.setAttribute(`${ui}`, ""), n.removeAttribute(ui), n.classList.remove(f, ...this._classes.invisible.split(" "), this._classes.block), n.removeAttribute(d), n.removeAttribute(h), this._isSliding = !1, setTimeout(m, 0);
                };
                this._queueCallback(y, n, !0);
            } else n.removeAttribute(ui), n.classList.remove(this._classes.block), r.setAttribute(`${ui}`, ""), r.classList.add(this._classes.block), this._isSliding = !1, m();
            l && this.cycle();
        }
        _directionToOrder(t) {
            return [
                ws,
                di
            ].includes(t) ? st() ? t === di ? hi : ci : t === di ? ci : hi : t;
        }
        _orderToDirection(t) {
            return [
                ci,
                hi
            ].includes(t) ? st() ? t === hi ? di : ws : t === hi ? ws : di : t;
        }
        static carouselInterface(t, e) {
            const s = ae.getOrCreateInstance(t, e);
            let { _config: n } = s;
            typeof e == "object" && (n = {
                ...n,
                ...e
            });
            const o = typeof e == "string" ? e : n.slide;
            if (typeof e == "number") s.to(e);
            else if (typeof o == "string") {
                if (typeof s[o] > "u") throw new TypeError(`No method named "${o}"`);
                s[o]();
            } else n.interval && n.carouselInit === null && (s.pause(), s.cycle());
        }
        static jQueryInterface(t) {
            return this.each(function() {
                ae.carouselInterface(this, t);
            });
        }
        static dataApiClickHandler(t) {
            const e = Ie(this);
            if (!e || !e.hasAttribute(gm)) return;
            const s = {
                ...v.getDataAttributes(e),
                ...v.getDataAttributes(this)
            }, n = this.getAttribute("data-te-slide-to");
            n && (s.interval = !1), ae.carouselInterface(e, s), n && ae.getInstance(e).to(n), t.preventDefault();
        }
    }
    const Jr = "modal", Zt = ".te.modal", Xc = "Escape", Gc = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }, Dm = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }, Mm = {
        show: "transform-none",
        static: "scale-[1.02]",
        staticProperties: "transition-scale duration-300 ease-in-out"
    }, Im = {
        show: "string",
        static: "string",
        staticProperties: "string"
    }, Lm = `hide${Zt}`, Pm = `hidePrevented${Zt}`, Rm = `hidden${Zt}`, Nm = `show${Zt}`, $m = `shown${Zt}`, qc = `resize${Zt}`, Zc = `click.dismiss${Zt}`, Qc = `keydown.dismiss${Zt}`, Bm = `mouseup.dismiss${Zt}`, Jc = `mousedown.dismiss${Zt}`, th = "data-te-modal-open", eh = "data-te-open", ks = "[data-te-modal-dialog-ref]", Hm = "[data-te-modal-body-ref]";
    class Ss extends Xt {
        constructor(t, e, s){
            super(t), this._config = this._getConfig(e), this._classes = this._getClasses(s), this._dialog = g.findOne(ks, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new Es, this._didInit = !1, this._init();
        }
        static get Default() {
            return Gc;
        }
        static get NAME() {
            return Jr;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || b.trigger(this._element, Nm, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.setAttribute(th, "true"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), b.on(this._dialog, Jc, ()=>{
                b.one(this._element, Bm, (s)=>{
                    s.target === this._element && (this._ignoreBackdropClick = !0);
                });
            }), this._showElement(t), this._showBackdrop());
        }
        hide() {
            if (!this._isShown || this._isTransitioning || b.trigger(this._element, Lm).defaultPrevented) return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.disable(), g.findOne(ks, this._element).classList.remove(this._classes.show), b.off(this._element, Zc), b.off(this._dialog, Jc), this._queueCallback(()=>this._hideModal(), this._element, e), this._element.removeAttribute(eh);
        }
        dispose() {
            [
                window,
                this._dialog
            ].forEach((t)=>b.off(t, Zt)), this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _init() {
            this._didInit || (Wn(Ss), this._didInit = !0);
        }
        _initializeBackDrop() {
            return new Xr({
                isVisible: !!this._config.backdrop,
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new Cs(this._element, {
                event: "keydown",
                condition: (t)=>t.key === "Tab"
            });
        }
        _getConfig(t) {
            return t = {
                ...Gc,
                ...v.getDataAttributes(this._element),
                ...typeof t == "object" ? t : {}
            }, W(Jr, t, Dm), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...Mm,
                ...e,
                ...t
            }, W(Jr, t, Im), t;
        }
        _showElement(t) {
            const e = this._isAnimated(), s = g.findOne(Hm, this._dialog);
            (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.append(this._element), this._element.style.display = "block", this._element.classList.remove("hidden"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`${eh}`, "true"), this._element.scrollTop = 0;
            const n = g.findOne(ks, this._element);
            n.classList.add(this._classes.show), n.classList.remove("opacity-0"), n.classList.add("opacity-100"), s && (s.scrollTop = 0), e && Ii(this._element);
            const o = ()=>{
                this._config.focus && this._focustrap.trap(), this._isTransitioning = !1, b.trigger(this._element, $m, {
                    relatedTarget: t
                });
            };
            this._queueCallback(o, this._dialog, e);
        }
        _setEscapeEvent() {
            this._isShown ? b.on(document, Qc, (t)=>{
                this._config.keyboard && t.key === Xc ? (t.preventDefault(), this.hide()) : !this._config.keyboard && t.key === Xc && this._triggerBackdropTransition();
            }) : b.off(this._element, Qc);
        }
        _setResizeEvent() {
            this._isShown ? b.on(window, qc, ()=>this._adjustDialog()) : b.off(window, qc);
        }
        _hideModal() {
            const t = g.findOne(ks, this._element);
            t.classList.remove(this._classes.show), t.classList.remove("opacity-100"), t.classList.add("opacity-0"), setTimeout(()=>{
                this._element.style.display = "none";
            }, 300), this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.removeAttribute(th), this._resetAdjustments(), this._scrollBar.reset(), b.trigger(this._element, Rm);
            });
        }
        _showBackdrop(t) {
            b.on(this._element, Zc, (e)=>{
                if (this._ignoreBackdropClick) {
                    this._ignoreBackdropClick = !1;
                    return;
                }
                e.target === e.currentTarget && (this._config.backdrop === !0 ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
            }), this._backdrop.show(t);
        }
        _isAnimated() {
            return !!g.findOne(ks, this._element);
        }
        _triggerBackdropTransition() {
            if (b.trigger(this._element, Pm).defaultPrevented) return;
            const { classList: e, scrollHeight: s, style: n } = this._element, o = s > document.documentElement.clientHeight;
            !o && n.overflowY === "hidden" || e.contains(this._classes.static) || (o || (n.overflowY = "hidden"), e.add(...this._classes.static.split(" ")), e.add(...this._classes.staticProperties.split(" ")), this._queueCallback(()=>{
                e.remove(this._classes.static), setTimeout(()=>{
                    e.remove(...this._classes.staticProperties.split(" "));
                }, 300), o || this._queueCallback(()=>{
                    n.overflowY = "";
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), s = e > 0;
            (!s && t && !st() || s && !t && st()) && (this._element.style.paddingLeft = `${e}px`), (s && !t && !st() || !s && t && st()) && (this._element.style.paddingRight = `${e}px`);
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const s = Ss.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
                    s[t](e);
                }
            });
        }
    }
    const Fm = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Vm = /^aria-[\w-]*$/i, Wm = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, zm = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, jm = (i, t)=>{
        const e = i.nodeName.toLowerCase();
        if (t.includes(e)) return Fm.has(e) ? !!(Wm.test(i.nodeValue) || zm.test(i.nodeValue)) : !0;
        const s = t.filter((n)=>n instanceof RegExp);
        for(let n = 0, o = s.length; n < o; n++)if (s[n].test(e)) return !0;
        return !1;
    }, Ym = {
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            Vm
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function ih(i, t, e) {
        if (!i.length) return i;
        if (e && typeof e == "function") return e(i);
        const n = new window.DOMParser().parseFromString(i, "text/html"), o = [].concat(...n.body.querySelectorAll("*"));
        for(let r = 0, a = o.length; r < a; r++){
            const l = o[r], c = l.nodeName.toLowerCase();
            if (!Object.keys(t).includes(c)) {
                l.remove();
                continue;
            }
            const h = [].concat(...l.attributes), d = [].concat(t["*"] || [], t[c] || []);
            h.forEach((u)=>{
                jm(u, d) || l.removeAttribute(u.nodeName);
            });
        }
        return n.body.innerHTML;
    }
    const sh = "tooltip", le = ".te.tooltip", Km = "te-tooltip", Um = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), Xm = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }, Gm = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: st() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: st() ? "right" : "left"
    }, qm = {
        animation: !0,
        template: '<div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip"><div data-te-tooltip-inner-ref class="tooltip-inner max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [
            0,
            0
        ],
        container: !1,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: Ym,
        popperConfig: {
            hide: !0
        }
    }, Zm = {
        HIDE: `hide${le}`,
        HIDDEN: `hidden${le}`,
        SHOW: `show${le}`,
        SHOWN: `shown${le}`,
        INSERTED: `inserted${le}`,
        CLICK: `click${le}`,
        FOCUSIN: `focusin${le}`,
        FOCUSOUT: `focusout${le}`,
        MOUSEENTER: `mouseenter${le}`,
        MOUSELEAVE: `mouseleave${le}`
    }, Qm = "fade", Jm = "modal", ta = "show", Os = "show", ea = "out", nh = ".tooltip-inner", oh = `.${Jm}`, rh = "hide.te.modal", Ds = "hover", ia = "focus", tb = "click", eb = "manual";
    let Ms = class jp extends Xt {
        constructor(t, e){
            if (typeof wc > "u") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
        }
        static get Default() {
            return qm;
        }
        static get NAME() {
            return sh;
        }
        static get Event() {
            return Zm;
        }
        static get DefaultType() {
            return Xm;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t) {
            if (this._isEnabled) {
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains(ta)) {
                        this._leave(null, this);
                        return;
                    }
                    this._enter(null, this);
                }
            }
        }
        dispose() {
            clearTimeout(this._timeout), b.off(this._element.closest(oh), rh, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
        }
        show() {
            if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
            if (!(this.isWithContent() && this._isEnabled)) return;
            const t = b.trigger(this._element, this.constructor.Event.SHOW), e = Pl(this._element), s = e === null ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !s) return;
            this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(nh).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const n = this.getTipElement(), o = se(this.constructor.NAME);
            n.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this._config.animation && setTimeout(()=>{
                this.tip.classList.add("opacity-100"), this.tip.classList.remove("opacity-0");
            }, 100);
            const r = typeof this._config.placement == "function" ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const { container: l } = this._config;
            if (P.setData(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), b.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Fi(this._element, n, this._getPopperConfig(a)), n.getAttribute("id").includes("tooltip")) switch(r){
                case "bottom":
                    n.classList.add("py-[0.4rem]");
                    break;
                case "left":
                    n.classList.add("px-[0.4rem]");
                    break;
                case "right":
                    n.classList.add("px-[0.4rem]");
                    break;
                default:
                    n.classList.add("py-[0.4rem]");
                    break;
            }
            const h = this._resolvePossibleFunction(this._config.customClass);
            h && n.classList.add(...h.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((f)=>{
                b.on(f, "mouseover", Sn);
            });
            const d = ()=>{
                const f = this._hoverState;
                this._hoverState = null, b.trigger(this._element, this.constructor.Event.SHOWN), f === ea && this._leave(null, this);
            }, u = this.tip.classList.contains("transition-opacity");
            this._queueCallback(d, this.tip, u);
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement(), e = ()=>{
                this._isWithActiveTrigger() || (this._hoverState !== Os && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), b.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
            };
            if (b.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t.classList.add("opacity-0"), t.classList.remove("opacity-100"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((o)=>b.off(o, "mouseover", Sn)), this._activeTrigger[tb] = !1, this._activeTrigger[ia] = !1, this._activeTrigger[Ds] = !1;
            const n = this.tip.classList.contains("opacity-0");
            this._queueCallback(e, this.tip, n), this._hoverState = "";
        }
        update() {
            this._popper !== null && this._popper.update();
        }
        isWithContent() {
            return !!this.getTitle();
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e), e.classList.remove(Qm, ta), this.tip = e, this.tip;
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), nh);
        }
        _sanitizeAndSetContent(t, e, s) {
            const n = g.findOne(s, t);
            if (!e && n) {
                n.remove();
                return;
            }
            this.setElementContent(n, e);
        }
        setElementContent(t, e) {
            if (t !== null) {
                if (Mi(e)) {
                    e = Le(e), this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent;
                    return;
                }
                this._config.html ? (this._config.sanitize && (e = ih(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e;
            }
        }
        getTitle() {
            const t = this._element.getAttribute("data-te-original-title") || this._config.title;
            return this._resolvePossibleFunction(t);
        }
        updateAttachment(t) {
            return t === "right" ? "end" : t === "left" ? "start" : t;
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _getOffset() {
            const { offset: t } = this._config;
            return typeof t == "string" ? t.split(",").map((e)=>Number.parseInt(e, 10)) : typeof t == "function" ? (e)=>t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return typeof t == "function" ? t.call(this._element) : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (s)=>this._handlePopperPlacementChange(s)
                    }
                ],
                onFirstUpdate: (s)=>{
                    s.options.placement !== s.placement && this._handlePopperPlacementChange(s);
                }
            };
            return {
                ...e,
                ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
            };
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`);
        }
        _getAttachment(t) {
            return Gm[t.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((e)=>{
                if (e === "click") b.on(this._element, this.constructor.Event.CLICK, this._config.selector, (s)=>this.toggle(s));
                else if (e !== eb) {
                    const s = e === Ds ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, n = e === Ds ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    b.on(this._element, s, this._config.selector, (o)=>this._enter(o)), b.on(this._element, n, this._config.selector, (o)=>this._leave(o));
                }
            }), this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, b.on(this._element.closest(oh), rh, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-te-original-title");
            (t || e !== "string") && (this._element.setAttribute("data-te-original-title", t || ""), t && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
        }
        _enter(t, e) {
            if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusin" ? ia : Ds] = !0), e.getTipElement().classList.contains(ta) || e._hoverState === Os) {
                e._hoverState = Os;
                return;
            }
            if (clearTimeout(e._timeout), e._hoverState = Os, !e._config.delay || !e._config.delay.show) {
                e.show();
                return;
            }
            e._timeout = setTimeout(()=>{
                e._hoverState === Os && e.show();
            }, e._config.delay.show);
        }
        _leave(t, e) {
            if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusout" ? ia : Ds] = e._element.contains(t.relatedTarget)), !e._isWithActiveTrigger()) {
                if (clearTimeout(e._timeout), e._hoverState = ea, !e._config.delay || !e._config.delay.hide) {
                    e.hide();
                    return;
                }
                e._timeout = setTimeout(()=>{
                    e._hoverState === ea && e.hide();
                }, e._config.delay.hide);
            }
        }
        _isWithActiveTrigger() {
            for(const t in this._activeTrigger)if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t) {
            const e = v.getDataAttributes(this._element);
            return Object.keys(e).forEach((s)=>{
                Um.has(s) && delete e[s];
            }), t = {
                ...this.constructor.Default,
                ...e,
                ...typeof t == "object" && t ? t : {}
            }, t.container = t.container === !1 ? document.body : Le(t.container), typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), W(sh, t, this.constructor.DefaultType), t.sanitize && (t.template = ih(t.template, t.allowList, t.sanitizeFn)), t;
        }
        _getDelegateConfig() {
            const t = {};
            for(const e in this._config)this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t;
        }
        _cleanTipClass() {
            const t = this.getTipElement(), e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), s = t.getAttribute("class").match(e);
            s !== null && s.length > 0 && s.map((n)=>n.trim()).forEach((n)=>t.classList.remove(n));
        }
        _getBasicClassPrefix() {
            return Km;
        }
        _handlePopperPlacementChange(t) {
            const { state: e } = t;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = jp.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    };
    const ib = "popover", ce = ".te.popover", sb = "te-popover", nb = {
        ...Ms.Default,
        placement: "right",
        offset: [
            0,
            8
        ],
        trigger: "click",
        content: "",
        template: '<div class="opacity-0 transition-opacity duration-150 ease-in-out absolute top-0 left-0 z-[1070] block max-w-[267px] break-words bg-white bg-clip-padding border border-neutral-100 rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:bg-neutral-700 dark:border-0 dark:text-white data-[popper-reference-hidden]:hidden" role="tooltip"><h3 class="popover-header py-2 px-4 mb-0 border-b-2 border-neutral-100 rounded-t-lg font-medium empty:hidden dark:border-neutral-500"></h3><div class="popover-body p-4 text-[#212529] dark:text-white"></div></div>'
    }, ob = {
        ...Ms.DefaultType,
        content: "(string|element|function)"
    }, rb = {
        HIDE: `hide${ce}`,
        HIDDEN: `hidden${ce}`,
        SHOW: `show${ce}`,
        SHOWN: `shown${ce}`,
        INSERTED: `inserted${ce}`,
        CLICK: `click${ce}`,
        FOCUSIN: `focusin${ce}`,
        FOCUSOUT: `focusout${ce}`,
        MOUSEENTER: `mouseenter${ce}`,
        MOUSELEAVE: `mouseleave${ce}`
    }, ab = ".popover-header", lb = ".popover-body";
    class zn extends Ms {
        static get Default() {
            return nb;
        }
        static get NAME() {
            return ib;
        }
        static get Event() {
            return rb;
        }
        static get DefaultType() {
            return ob;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ab), this._sanitizeAndSetContent(t, this._getContent(), lb);
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        _getBasicClassPrefix() {
            return sb;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = zn.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    const sa = "scrollspy", jn = ".te.scrollspy", cb = ".data-api", ah = {
        offset: 10,
        method: "auto",
        target: ""
    }, hb = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, db = {
        active: "!text-primary dark:!text-primary-400 font-semibold border-l-[0.125rem] border-solid border-primary dark:border-primary-400"
    }, ub = {
        active: "string"
    }, fb = `activate${jn}`, pb = `scroll${jn}`, _b = `load${jn}${cb}`, na = "data-te-nav-link-active", lh = "[data-te-dropdown-item-ref]", gb = '[data-te-spy="scroll"]', mb = "[data-te-nav-list-ref]", oa = "[data-te-nav-link-ref]", bb = "[data-te-nav-item-ref]", ch = "[data-te-list-group-item-ref]", ra = `${oa}, ${ch}, ${lh}`, vb = "[data-te-dropdown-ref]", yb = "[data-te-dropdown-toggle-ref]", xb = "offset", hh = "position";
    class Is extends Xt {
        constructor(t, e, s){
            super(t), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(e), this._classes = this._getClasses(s), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, b.on(this._scrollElement, pb, ()=>this._process()), this.refresh(), this._process(), this._didInit = !1, this._init();
        }
        static get Default() {
            return ah;
        }
        static get NAME() {
            return sa;
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? xb : hh, e = this._config.method === "auto" ? t : this._config.method, s = e === hh ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), g.find(ra, this._config.target).map((o)=>{
                const r = yr(o), a = r ? g.findOne(r) : null;
                if (a) {
                    const l = a.getBoundingClientRect();
                    if (l.width || l.height) return [
                        v[e](a).top + s,
                        r
                    ];
                }
                return null;
            }).filter((o)=>o).sort((o, r)=>o[0] - r[0]).forEach((o)=>{
                this._offsets.push(o[0]), this._targets.push(o[1]);
            });
        }
        dispose() {
            b.off(this._scrollElement, jn), super.dispose();
        }
        _init() {
            this._didInit || (b.on(window, _b, ()=>{
                g.find(gb).forEach((t)=>new Is(t));
            }), this._didInit = !0);
        }
        _getConfig(t) {
            return t = {
                ...ah,
                ...v.getDataAttributes(this._element),
                ...typeof t == "object" && t ? t : {}
            }, t.target = Le(t.target) || document.documentElement, W(sa, t, hb), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...db,
                ...e,
                ...t
            }, W(sa, t, ub), t;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), s = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= s) {
                const n = this._targets[this._targets.length - 1];
                this._activeTarget !== n && this._activate(n);
                return;
            }
            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
                this._activeTarget = null, this._clear();
                return;
            }
            for(let n = this._offsets.length; n--;)this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (typeof this._offsets[n + 1] > "u" || t < this._offsets[n + 1]) && this._activate(this._targets[n]);
        }
        _activate(t) {
            this._activeTarget = t, this._clear();
            const e = ra.split(",").map((n)=>`${n}[data-te-target="${t}"],${n}[href="${t}"]`), s = g.findOne(e.join(","), this._config.target);
            s.classList.add(...this._classes.active.split(" ")), s.setAttribute(na, ""), s.getAttribute(lh) ? g.findOne(yb, s.closest(vb)).classList.add(...this._classes.active.split(" ")) : g.parents(s, mb).forEach((n)=>{
                g.prev(n, `${oa}, ${ch}`).forEach((o)=>{
                    o.classList.add(...this._classes.active.split(" ")), o.setAttribute(na, "");
                }), g.prev(n, bb).forEach((o)=>{
                    g.children(o, oa).forEach((r)=>r.classList.add(...this._classes.active.split(" ")));
                });
            }), b.trigger(this._scrollElement, fb, {
                relatedTarget: t
            });
        }
        _clear() {
            g.find(ra, this._config.target).filter((t)=>t.classList.contains(...this._classes.active.split(" "))).forEach((t)=>{
                t.classList.remove(...this._classes.active.split(" ")), t.removeAttribute(na);
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Is.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    const dh = "tab", Yn = ".te.tab", Eb = `hide${Yn}`, Cb = `hidden${Yn}`, Tb = `show${Yn}`, Ab = `shown${Yn}`, wb = "data-te-dropdown-menu-ref", Yi = "data-te-tab-active", Kn = "data-te-nav-active", kb = "[data-te-dropdown-ref]", Sb = "[data-te-nav-ref]", uh = `[${Yi}]`, Ob = `[${Kn}]`, fh = ":scope > li > .active", Db = "[data-te-dropdown-toggle-ref]", Mb = ":scope > [data-te-dropdown-menu-ref] [data-te-dropdown-show]", Ib = {
        show: "opacity-100",
        hide: "opacity-0"
    }, Lb = {
        show: "string",
        hide: "string"
    };
    class Un extends Xt {
        constructor(t, e){
            super(t), this._classes = this._getClasses(e);
        }
        static get NAME() {
            return dh;
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.getAttribute(Kn) === "") return;
            let t;
            const e = Ie(this._element), s = this._element.closest(Sb), n = g.findOne(Ob, s);
            if (s) {
                const l = s.nodeName === "UL" || s.nodeName === "OL" ? fh : uh;
                t = g.find(l, s), t = t[t.length - 1];
            }
            const o = t ? b.trigger(t, Eb, {
                relatedTarget: this._element
            }) : null;
            if (b.trigger(this._element, Tb, {
                relatedTarget: t
            }).defaultPrevented || o !== null && o.defaultPrevented) return;
            this._activate(this._element, s, null, n, this._element);
            const a = ()=>{
                b.trigger(t, Cb, {
                    relatedTarget: this._element
                }), b.trigger(this._element, Ab, {
                    relatedTarget: t
                });
            };
            e ? this._activate(e, e.parentNode, a, n, this._element) : a();
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...Ib,
                ...e,
                ...t
            }, W(dh, t, Lb), t;
        }
        _activate(t, e, s, n, o) {
            const a = (e && (e.nodeName === "UL" || e.nodeName === "OL") ? g.find(fh, e) : g.children(e, uh))[0], l = s && a && a.hasAttribute(Yi), c = ()=>this._transitionComplete(t, a, s, n, o);
            a && l ? (v.removeClass(a, this._classes.show), v.addClass(a, this._classes.hide), this._queueCallback(c, t, !0)) : c();
        }
        _transitionComplete(t, e, s, n, o) {
            if (e && n) {
                e.removeAttribute(Yi), n.removeAttribute(Kn);
                const a = g.findOne(Mb, e.parentNode);
                a && a.removeAttribute(Yi), e.getAttribute("role") === "tab" && e.setAttribute("aria-selected", !1);
            }
            t.setAttribute(Yi, ""), o.setAttribute(Kn, ""), t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", !0), Ii(t), t.classList.contains(this._classes.hide) && (v.removeClass(t, this._classes.hide), v.addClass(t, this._classes.show));
            let r = t.parentNode;
            if (r && r.nodeName === "LI" && (r = r.parentNode), r && r.hasAttribute(wb)) {
                const a = t.closest(kb);
                a && g.find(Db, a).forEach((l)=>l.setAttribute(Yi, "")), t.setAttribute("aria-expanded", !0);
            }
            s && s();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Un.getOrCreateInstance(this);
                if (typeof t == "string") {
                    if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    const aa = "toast", $e = ".te.toast", Pb = `mouseover${$e}`, Rb = `mouseout${$e}`, Nb = `focusin${$e}`, $b = `focusout${$e}`, Bb = `hide${$e}`, Hb = `hidden${$e}`, Fb = `show${$e}`, Vb = `shown${$e}`, ph = "data-te-toast-hide", la = "data-te-toast-show", Xn = "data-te-toast-showing", Wb = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, _h = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    }, zb = {
        fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
        fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
    }, jb = {
        fadeIn: "string",
        fadeOut: "string"
    };
    class Ls extends Xt {
        constructor(t, e, s){
            super(t), this._config = this._getConfig(e), this._classes = this._getClasses(s), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners(), this._didInit = !1, this._init();
        }
        static get DefaultType() {
            return Wb;
        }
        static get Default() {
            return _h;
        }
        static get NAME() {
            return aa;
        }
        show() {
            if (b.trigger(this._element, Fb).defaultPrevented) return;
            this._clearTimeout(), this._config.animation && (v.removeClass(this._element, this._classes.fadeOut), v.addClass(this._element, this._classes.fadeIn));
            const e = ()=>{
                this._element.removeAttribute(Xn), b.trigger(this._element, Vb), this._maybeScheduleHide();
            };
            this._element.removeAttribute(ph), Ii(this._element), this._element.setAttribute(la, ""), this._element.setAttribute(Xn, ""), this._queueCallback(e, this._element, this._config.animation);
        }
        hide() {
            if (!this._element || this._element.dataset.teToastShow === void 0 || b.trigger(this._element, Bb).defaultPrevented) return;
            const e = ()=>{
                let s = 0;
                this._config.animation && (s = 300, v.removeClass(this._element, this._classes.fadeIn), v.addClass(this._element, this._classes.fadeOut)), setTimeout(()=>{
                    this._element.setAttribute(ph, ""), this._element.removeAttribute(Xn), this._element.removeAttribute(la), b.trigger(this._element, Hb);
                }, s);
            };
            this._element.setAttribute(Xn, ""), this._queueCallback(e, this._element, this._config.animation);
        }
        dispose() {
            this._clearTimeout(), this._element.dataset.teToastShow !== void 0 && this._element.removeAttribute(la), super.dispose();
        }
        _init() {
            this._didInit || (Wn(Ls), this._didInit = !0);
        }
        _getConfig(t) {
            return t = {
                ..._h,
                ...v.getDataAttributes(this._element),
                ...typeof t == "object" && t ? t : {}
            }, W(aa, t, this.constructor.DefaultType), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...zb,
                ...e,
                ...t
            }, W(aa, t, jb), t;
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
                    break;
            }
            if (e) {
                this._clearTimeout();
                return;
            }
            const s = t.relatedTarget;
            this._element === s || this._element.contains(s) || this._maybeScheduleHide();
        }
        _setListeners() {
            b.on(this._element, Pb, (t)=>this._onInteraction(t, !0)), b.on(this._element, Rb, (t)=>this._onInteraction(t, !1)), b.on(this._element, Nb, (t)=>this._onInteraction(t, !0)), b.on(this._element, $b, (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ls.getOrCreateInstance(this, t);
                if (typeof t == "string") {
                    if (typeof e[t] > "u") throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    (()=>{
        var i = {
            454: (s, n, o)=>{
                o.d(n, {
                    Z: ()=>l
                });
                var r = o(645), a = o.n(r)()(function(c) {
                    return c[1];
                });
                a.push([
                    s.id,
                    "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}",
                    ""
                ]);
                const l = a;
            },
            645: (s)=>{
                s.exports = function(n) {
                    var o = [];
                    return o.toString = function() {
                        return this.map(function(r) {
                            var a = n(r);
                            return r[2] ? "@media ".concat(r[2], " {").concat(a, "}") : a;
                        }).join("");
                    }, o.i = function(r, a, l) {
                        typeof r == "string" && (r = [
                            [
                                null,
                                r,
                                ""
                            ]
                        ]);
                        var c = {};
                        if (l) for(var h = 0; h < this.length; h++){
                            var d = this[h][0];
                            d != null && (c[d] = !0);
                        }
                        for(var u = 0; u < r.length; u++){
                            var f = [].concat(r[u]);
                            l && c[f[0]] || (a && (f[2] ? f[2] = "".concat(a, " and ").concat(f[2]) : f[2] = a), o.push(f));
                        }
                    }, o;
                };
            },
            810: ()=>{
                (function() {
                    if (typeof window < "u") try {
                        var s = new window.CustomEvent("test", {
                            cancelable: !0
                        });
                        if (s.preventDefault(), s.defaultPrevented !== !0) throw new Error("Could not prevent default");
                    } catch  {
                        var n = function(r, a) {
                            var l, c;
                            return (a = a || {}).bubbles = !!a.bubbles, a.cancelable = !!a.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(r, a.bubbles, a.cancelable, a.detail), c = l.preventDefault, l.preventDefault = function() {
                                c.call(this);
                                try {
                                    Object.defineProperty(this, "defaultPrevented", {
                                        get: function() {
                                            return !0;
                                        }
                                    });
                                } catch  {
                                    this.defaultPrevented = !0;
                                }
                            }, l;
                        };
                        n.prototype = window.Event.prototype, window.CustomEvent = n;
                    }
                })();
            },
            379: (s, n, o)=>{
                var r, a = function() {
                    var E = {};
                    return function(C) {
                        if (E[C] === void 0) {
                            var T = document.querySelector(C);
                            if (window.HTMLIFrameElement && T instanceof window.HTMLIFrameElement) try {
                                T = T.contentDocument.head;
                            } catch  {
                                T = null;
                            }
                            E[C] = T;
                        }
                        return E[C];
                    };
                }(), l = [];
                function c(E) {
                    for(var C = -1, T = 0; T < l.length; T++)if (l[T].identifier === E) {
                        C = T;
                        break;
                    }
                    return C;
                }
                function h(E, C) {
                    for(var T = {}, A = [], w = 0; w < E.length; w++){
                        var S = E[w], k = C.base ? S[0] + C.base : S[0], D = T[k] || 0, O = "".concat(k, " ").concat(D);
                        T[k] = D + 1;
                        var M = c(O), L = {
                            css: S[1],
                            media: S[2],
                            sourceMap: S[3]
                        };
                        M !== -1 ? (l[M].references++, l[M].updater(L)) : l.push({
                            identifier: O,
                            updater: x(L, C),
                            references: 1
                        }), A.push(O);
                    }
                    return A;
                }
                function d(E) {
                    var C = document.createElement("style"), T = E.attributes || {};
                    if (T.nonce === void 0) {
                        var A = o.nc;
                        A && (T.nonce = A);
                    }
                    if (Object.keys(T).forEach(function(S) {
                        C.setAttribute(S, T[S]);
                    }), typeof E.insert == "function") E.insert(C);
                    else {
                        var w = a(E.insert || "head");
                        if (!w) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        w.appendChild(C);
                    }
                    return C;
                }
                var u, f = (u = [], function(E, C) {
                    return u[E] = C, u.filter(Boolean).join(`
`);
                });
                function p(E, C, T, A) {
                    var w = T ? "" : A.media ? "@media ".concat(A.media, " {").concat(A.css, "}") : A.css;
                    if (E.styleSheet) E.styleSheet.cssText = f(C, w);
                    else {
                        var S = document.createTextNode(w), k = E.childNodes;
                        k[C] && E.removeChild(k[C]), k.length ? E.insertBefore(S, k[C]) : E.appendChild(S);
                    }
                }
                function _(E, C, T) {
                    var A = T.css, w = T.media, S = T.sourceMap;
                    if (w ? E.setAttribute("media", w) : E.removeAttribute("media"), S && typeof btoa < "u" && (A += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(S)))), " */")), E.styleSheet) E.styleSheet.cssText = A;
                    else {
                        for(; E.firstChild;)E.removeChild(E.firstChild);
                        E.appendChild(document.createTextNode(A));
                    }
                }
                var m = null, y = 0;
                function x(E, C) {
                    var T, A, w;
                    if (C.singleton) {
                        var S = y++;
                        T = m || (m = d(C)), A = p.bind(null, T, S, !1), w = p.bind(null, T, S, !0);
                    } else T = d(C), A = _.bind(null, T, C), w = function() {
                        (function(k) {
                            if (k.parentNode === null) return !1;
                            k.parentNode.removeChild(k);
                        })(T);
                    };
                    return A(E), function(k) {
                        if (k) {
                            if (k.css === E.css && k.media === E.media && k.sourceMap === E.sourceMap) return;
                            A(E = k);
                        } else w();
                    };
                }
                s.exports = function(E, C) {
                    (C = C || {}).singleton || typeof C.singleton == "boolean" || (C.singleton = (r === void 0 && (r = !!(window && document && document.all && !window.atob)), r));
                    var T = h(E = E || [], C);
                    return function(A) {
                        if (A = A || [], Object.prototype.toString.call(A) === "[object Array]") {
                            for(var w = 0; w < T.length; w++){
                                var S = c(T[w]);
                                l[S].references--;
                            }
                            for(var k = h(A, C), D = 0; D < T.length; D++){
                                var O = c(T[D]);
                                l[O].references === 0 && (l[O].updater(), l.splice(O, 1));
                            }
                            T = k;
                        }
                    };
                };
            }
        }, t = {};
        function e(s) {
            var n = t[s];
            if (n !== void 0) return n.exports;
            var o = t[s] = {
                id: s,
                exports: {}
            };
            return i[s](o, o.exports, e), o.exports;
        }
        e.n = (s)=>{
            var n = s && s.__esModule ? ()=>s.default : ()=>s;
            return e.d(n, {
                a: n
            }), n;
        }, e.d = (s, n)=>{
            for(var o in n)e.o(n, o) && !e.o(s, o) && Object.defineProperty(s, o, {
                enumerable: !0,
                get: n[o]
            });
        }, e.o = (s, n)=>Object.prototype.hasOwnProperty.call(s, n), (()=>{
            var s = e(379), n = e.n(s), o = e(454);
            function r(l) {
                if (!l.hasAttribute("autocompleted")) {
                    l.setAttribute("autocompleted", "");
                    var c = new window.CustomEvent("onautocomplete", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: null
                    });
                    l.dispatchEvent(c) || (l.value = "");
                }
            }
            function a(l) {
                l.hasAttribute("autocompleted") && (l.removeAttribute("autocompleted"), l.dispatchEvent(new window.CustomEvent("onautocomplete", {
                    bubbles: !0,
                    cancelable: !1,
                    detail: null
                })));
            }
            n()(o.Z, {
                insert: "head",
                singleton: !1
            }), o.Z.locals, e(810), document.addEventListener("animationstart", function(l) {
                l.animationName === "onautofillstart" ? r(l.target) : a(l.target);
            }, !0), document.addEventListener("input", function(l) {
                l.inputType !== "insertReplacementText" && "data" in l ? a(l.target) : r(l.target);
            }, !0);
        })();
    })();
    const ca = "input", Gn = "te.input", gh = "data-te-input-wrapper-init", mh = "data-te-input-notch-ref", bh = "data-te-input-notch-leading-ref", vh = "data-te-input-notch-middle-ref", Yb = "data-te-input-notch-trailing-ref", Kb = "data-te-input-helper-ref", Ub = "data-te-input-placeholder-active", Be = "data-te-input-state-active", yh = "data-te-input-focused", xh = "data-te-input-form-counter", fi = `[${gh}] input`, pi = `[${gh}] textarea`, Ki = `[${mh}]`, Eh = `[${bh}]`, Ch = `[${vh}]`, Xb = `[${Kb}]`, Gb = {
        inputFormWhite: !1
    }, qb = {
        inputFormWhite: "(boolean)"
    }, Zb = {
        notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
        notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0",
        notchLeadingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
        notchLeadingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
        notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent",
        notchMiddleNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
        notchMiddleWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
        notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0",
        notchTrailingNormal: "border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
        notchTrailingWhite: "border-neutral-200 group-data-[te-input-focused]:shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] group-data-[te-input-focused]:border-white",
        counter: "text-right leading-[1.6]"
    }, Qb = {
        notch: "string",
        notchLeading: "string",
        notchLeadingNormal: "string",
        notchLeadingWhite: "string",
        notchMiddle: "string",
        notchMiddleNormal: "string",
        notchMiddleWhite: "string",
        notchTrailing: "string",
        notchTrailingNormal: "string",
        notchTrailingWhite: "string",
        counter: "string"
    };
    class Z {
        constructor(t, e, s){
            this._config = this._getConfig(e, t), this._element = t, this._classes = this._getClasses(s), this._label = null, this._labelWidth = 0, this._labelMarginLeft = 0, this._notchLeading = null, this._notchMiddle = null, this._notchTrailing = null, this._initiated = !1, this._helper = null, this._counter = !1, this._counterElement = null, this._maxLength = 0, this._leadingIcon = null, this._element && (P.setData(t, Gn, this), this.init());
        }
        static get NAME() {
            return ca;
        }
        get input() {
            return g.findOne("input", this._element) || g.findOne("textarea", this._element);
        }
        init() {
            this._initiated || (this._getLabelData(), this._applyDivs(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter(), this._getEvents(), this._initiated = !0);
        }
        update() {
            this._getLabelData(), this._getNotchData(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter();
        }
        forceActive() {
            this.input.setAttribute(Be, ""), g.findOne(Ki, this.input.parentNode).setAttribute(Be, "");
        }
        forceInactive() {
            this.input.removeAttribute(Be), g.findOne(Ki, this.input.parentNode).removeAttribute(Be);
        }
        dispose() {
            this._removeBorder(), P.removeData(this._element, Gn), this._element = null;
        }
        _getConfig(t, e) {
            return t = {
                ...Gb,
                ...v.getDataAttributes(e),
                ...typeof t == "object" ? t : {}
            }, W(ca, t, qb), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...Zb,
                ...e,
                ...t
            }, W(ca, t, Qb), t;
        }
        _getLabelData() {
            this._label = g.findOne("label", this._element), this._label === null ? this._showPlaceholder() : (this._getLabelWidth(), this._getLabelPositionInInputGroup(), this._toggleDefaultDatePlaceholder());
        }
        _getHelper() {
            this._helper = g.findOne(Xb, this._element);
        }
        _getCounter() {
            this._counter = v.getDataAttribute(this.input, "inputShowcounter"), this._counter && (this._maxLength = this.input.maxLength, this._showCounter());
        }
        _getEvents() {
            b.on(document, "focus", fi, Z.activate(new Z)), b.on(document, "input", fi, Z.activate(new Z)), b.on(document, "blur", fi, Z.deactivate(new Z)), b.on(document, "focus", pi, Z.activate(new Z)), b.on(document, "input", pi, Z.activate(new Z)), b.on(document, "blur", pi, Z.deactivate(new Z)), b.on(window, "shown.te.modal", (t)=>{
                g.find(fi, t.target).forEach((e)=>{
                    const s = Z.getInstance(e.parentNode);
                    s && s.update();
                }), g.find(pi, t.target).forEach((e)=>{
                    const s = Z.getInstance(e.parentNode);
                    s && s.update();
                });
            }), b.on(window, "shown.te.dropdown", (t)=>{
                const e = t.target.parentNode.querySelector("[data-te-dropdown-menu-ref]");
                e && (g.find(fi, e).forEach((s)=>{
                    const n = Z.getInstance(s.parentNode);
                    n && n.update();
                }), g.find(pi, e).forEach((s)=>{
                    const n = Z.getInstance(s.parentNode);
                    n && n.update();
                }));
            }), b.on(window, "shown.te.tab", (t)=>{
                let e;
                t.target.href ? e = t.target.href.split("#")[1] : e = v.getDataAttribute(t.target, "target").split("#")[1];
                const s = g.findOne(`#${e}`);
                g.find(fi, s).forEach((n)=>{
                    const o = Z.getInstance(n.parentNode);
                    o && o.update();
                }), g.find(pi, s).forEach((n)=>{
                    const o = Z.getInstance(n.parentNode);
                    o && o.update();
                });
            }), b.on(window, "reset", (t)=>{
                g.find(fi, t.target).forEach((e)=>{
                    const s = Z.getInstance(e.parentNode);
                    s && s.forceInactive();
                }), g.find(pi, t.target).forEach((e)=>{
                    const s = Z.getInstance(e.parentNode);
                    s && s.forceInactive();
                });
            }), b.on(window, "onautocomplete", (t)=>{
                const e = Z.getInstance(t.target.parentNode);
                !e || !t.cancelable || e.forceActive();
            });
        }
        _showCounter() {
            if (g.find(`[${xh}]`, this._element).length > 0) return;
            this._counterElement = document.createElement("div"), v.addClass(this._counterElement, this._classes.counter), this._counterElement.setAttribute(xh, "");
            const e = this.input.value.length;
            this._counterElement.innerHTML = `${e} / ${this._maxLength}`, this._helper.appendChild(this._counterElement), this._bindCounter();
        }
        _bindCounter() {
            b.on(this.input, "input", ()=>{
                const t = this.input.value.length;
                this._counterElement.innerHTML = `${t} / ${this._maxLength}`;
            });
        }
        _toggleDefaultDatePlaceholder(t = this.input) {
            if (!(t.getAttribute("type") === "date")) return;
            !(document.activeElement === t) && !t.value ? t.style.opacity = 0 : t.style.opacity = 1;
        }
        _showPlaceholder() {
            this.input.setAttribute(Ub, "");
        }
        _getNotchData() {
            this._notchMiddle = g.findOne(Ch, this._element), this._notchLeading = g.findOne(Eh, this._element);
        }
        _getLabelWidth() {
            this._labelWidth = this._label.clientWidth * .8 + 8;
        }
        _getLabelPositionInInputGroup() {
            if (this._labelMarginLeft = 0, !this._element.hasAttribute("data-te-input-group-ref")) return;
            const t = this.input, e = g.prev(t, "[data-te-input-group-text-ref]")[0];
            e === void 0 ? this._labelMarginLeft = 0 : this._labelMarginLeft = e.offsetWidth - 1;
        }
        _applyDivs() {
            const t = this._config.inputFormWhite ? this._classes.notchLeadingWhite : this._classes.notchLeadingNormal, e = this._config.inputFormWhite ? this._classes.notchMiddleWhite : this._classes.notchMiddleNormal, s = this._config.inputFormWhite ? this._classes.notchTrailingWhite : this._classes.notchTrailingNormal, n = g.find(Ki, this._element), o = z("div");
            v.addClass(o, this._classes.notch), o.setAttribute(mh, ""), this._notchLeading = z("div"), v.addClass(this._notchLeading, `${this._classes.notchLeading} ${t}`), this._notchLeading.setAttribute(bh, ""), this._notchMiddle = z("div"), v.addClass(this._notchMiddle, `${this._classes.notchMiddle} ${e}`), this._notchMiddle.setAttribute(vh, ""), this._notchTrailing = z("div"), v.addClass(this._notchTrailing, `${this._classes.notchTrailing} ${s}`), this._notchTrailing.setAttribute(Yb, ""), !(n.length >= 1) && (o.append(this._notchLeading), o.append(this._notchMiddle), o.append(this._notchTrailing), this._element.append(o));
        }
        _applyNotch() {
            this._notchMiddle.style.width = `${this._labelWidth}px`, this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`, this._label !== null && (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
        }
        _removeBorder() {
            const t = g.findOne(Ki, this._element);
            t && t.remove();
        }
        _activate(t) {
            Nl(()=>{
                this._getElements(t);
                const e = t ? t.target : this.input, s = g.findOne(Ki, this._element);
                t && t.type === "focus" && s.setAttribute(yh, ""), e.value !== "" && (e.setAttribute(Be, ""), s.setAttribute(Be, "")), this._toggleDefaultDatePlaceholder(e);
            });
        }
        _getElements(t) {
            if (t && (this._element = t.target.parentNode, this._label = g.findOne("label", this._element)), t && this._label) {
                const e = this._labelWidth;
                this._getLabelData(), e !== this._labelWidth && (this._notchMiddle = g.findOne(Ch, t.target.parentNode), this._notchLeading = g.findOne(Eh, t.target.parentNode), this._applyNotch());
            }
        }
        _deactivate(t) {
            const e = t ? t.target : this.input, s = g.findOne(Ki, e.parentNode);
            s.removeAttribute(yh), e.value === "" && (e.removeAttribute(Be), s.removeAttribute(Be)), this._toggleDefaultDatePlaceholder(e);
        }
        static activate(t) {
            return function(e) {
                t._activate(e);
            };
        }
        static deactivate(t) {
            return function(e) {
                t._deactivate(e);
            };
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                let s = P.getData(this, Gn);
                const n = typeof t == "object" && t;
                if (!(!s && /dispose/.test(t)) && (s || (s = new Z(this, n)), typeof t == "string")) {
                    if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
                    s[t](e);
                }
            });
        }
        static getInstance(t) {
            return P.getData(t, Gn);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    }
    const Th = "animation", ha = "te.animation", Jb = {
        animation: "string",
        animationStart: "string",
        animationShowOnLoad: "boolean",
        onStart: "(null|function)",
        onEnd: "(null|function)",
        onHide: "(null|function)",
        onShow: "(null|function)",
        animationOnScroll: "(string)",
        animationWindowHeight: "number",
        animationOffset: "(number|string)",
        animationDelay: "(number|string)",
        animationReverse: "boolean",
        animationInterval: "(number|string)",
        animationRepeat: "(number|boolean)",
        animationReset: "boolean"
    }, tv = {
        animation: "fade",
        animationStart: "onClick",
        animationShowOnLoad: !0,
        onStart: null,
        onEnd: null,
        onHide: null,
        onShow: null,
        animationOnScroll: "once",
        animationWindowHeight: 0,
        animationOffset: 0,
        animationDelay: 0,
        animationReverse: !1,
        animationInterval: 0,
        animationRepeat: !1,
        animationReset: !1
    };
    class qn {
        constructor(t, e){
            this._element = t, this._animateElement = this._getAnimateElement(), this._isFirstScroll = !0, this._repeatAnimateOnScroll = !0, this._options = this._getConfig(e), this._element && (P.setData(t, ha, this), this._init());
        }
        static get NAME() {
            return Th;
        }
        init() {
            this._init();
        }
        startAnimation() {
            this._startAnimation();
        }
        stopAnimation() {
            this._clearAnimationClass();
        }
        changeAnimationType(t) {
            this._options.animation = t;
        }
        dispose() {
            b.off(this._element, "mousedown"), b.off(this._animateElement, "animationend"), b.off(window, "scroll"), b.off(this._element, "mouseover"), P.removeData(this._element, ha), this._element = null, this._animateElement = null, this._isFirstScroll = null, this._repeatAnimateOnScroll = null, this._options = null;
        }
        _init() {
            switch(this._options.animationStart){
                case "onHover":
                    this._bindHoverEvents();
                    break;
                case "onLoad":
                    this._startAnimation();
                    break;
                case "onScroll":
                    this._bindScrollEvents();
                    break;
                case "onClick":
                    this._bindClickEvents();
                    break;
            }
            this._bindTriggerOnEndCallback(), this._options.animationReset && this._bindResetAnimationAfterFinish();
        }
        _getAnimateElement() {
            const t = v.getDataAttribute(this._element, "animation-target");
            return t ? g.find(t)[0] : this._element;
        }
        _getConfig(t) {
            const e = v.getDataAttributes(this._animateElement);
            return t = {
                ...tv,
                ...e,
                ...t
            }, W(Th, t, Jb), t;
        }
        _animateOnScroll() {
            const t = v.offset(this._animateElement).top, e = this._animateElement.offsetHeight, s = window.innerHeight, n = t + this._options.animationOffset <= s && t + this._options.animationOffset + e >= 0, o = this._animateElement.style.visibility === "visible";
            switch(!0){
                case n && this._isFirstScroll:
                    this._isFirstScroll = !1, this._startAnimation();
                    break;
                case !n && this._isFirstScroll:
                    this._isFirstScroll = !1, this._hideAnimateElement();
                    break;
                case n && !o && this._repeatAnimateOnScroll:
                    this._options.animationOnScroll !== "repeat" && (this._repeatAnimateOnScroll = !1), this._callback(this._options.onShow), this._showAnimateElement(), this._startAnimation();
                    break;
                case !n && o && this._repeatAnimateOnScroll:
                    this._hideAnimateElement(), this._clearAnimationClass(), this._callback(this._options.onHide);
                    break;
            }
        }
        _addAnimatedClass() {
            v.addClass(this._animateElement, `animate-${this._options.animation}`);
        }
        _clearAnimationClass() {
            this._animateElement.classList.remove(`animate-${this._options.animation}`);
        }
        _startAnimation() {
            this._callback(this._options.onStart), this._addAnimatedClass(), this._options.animationRepeat && !this._options.animationInterval && this._setAnimationRepeat(), this._options.animationReverse && this._setAnimationReverse(), this._options.animationDelay && this._setAnimationDelay(), this._options.animationDuration && this._setAnimationDuration(), this._options.animationInterval && this._setAnimationInterval();
        }
        _setAnimationReverse() {
            v.style(this._animateElement, {
                animationIterationCount: this._options.animationRepeat === !0 ? "infinite" : "2",
                animationDirection: "alternate"
            });
        }
        _setAnimationDuration() {
            v.style(this._animateElement, {
                animationDuration: `${this._options.animationDuration}ms`
            });
        }
        _setAnimationDelay() {
            v.style(this._animateElement, {
                animationDelay: `${this._options.animationDelay}ms`
            });
        }
        _setAnimationRepeat() {
            v.style(this._animateElement, {
                animationIterationCount: this._options.animationRepeat === !0 ? "infinite" : this._options.animationRepeat
            });
        }
        _setAnimationInterval() {
            b.on(this._animateElement, "click", ()=>{
                this._clearAnimationClass(), setTimeout(()=>{
                    this._addAnimatedClass();
                }, this._options.animationInterval);
            });
        }
        _hideAnimateElement() {
            v.style(this._animateElement, {
                visibility: "hidden"
            });
        }
        _showAnimateElement() {
            v.style(this._animateElement, {
                visibility: "visible"
            });
        }
        _bindResetAnimationAfterFinish() {
            b.on(this._animateElement, "animationend", ()=>{
                this._clearAnimationClass();
            });
        }
        _bindTriggerOnEndCallback() {
            b.on(this._animateElement, "animationend", ()=>{
                this._callback(this._options.onEnd);
            });
        }
        _bindScrollEvents() {
            this._options.animationShowOnLoad || this._animateOnScroll(), b.on(window, "scroll", ()=>{
                this._animateOnScroll();
            });
        }
        _bindClickEvents() {
            b.on(this._element, "mousedown", ()=>{
                this._startAnimation();
            });
        }
        _bindHoverEvents() {
            b.one(this._element, "mouseover", ()=>{
                this._startAnimation();
            }), b.one(this._animateElement, "animationend", ()=>{
                setTimeout(()=>{
                    this._bindHoverEvents();
                }, 100);
            });
        }
        _callback(t) {
            t instanceof Function && t();
        }
        static autoInit(t) {
            t._init();
        }
        static jQueryInterface(t) {
            new qn(this[0], t).init();
        }
        static getInstance(t) {
            return P.getData(t, ha);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    }
    const da = "ripple", Zn = "te.ripple", ev = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", iv = [
        "[data-te-ripple-init]"
    ], Qn = [
        0,
        0,
        0
    ], sv = [
        {
            name: "primary",
            gradientColor: "#3B71CA"
        },
        {
            name: "secondary",
            gradientColor: "#9FA6B2"
        },
        {
            name: "success",
            gradientColor: "#14A44D"
        },
        {
            name: "danger",
            gradientColor: "#DC4C64"
        },
        {
            name: "warning",
            gradientColor: "#E4A11B"
        },
        {
            name: "info",
            gradientColor: "#54B4D3"
        },
        {
            name: "light",
            gradientColor: "#fbfbfb"
        },
        {
            name: "dark",
            gradientColor: "#262626"
        }
    ], Ah = .5, nv = {
        rippleCentered: !1,
        rippleColor: "",
        rippleColorDark: "",
        rippleDuration: "500ms",
        rippleRadius: 0,
        rippleUnbound: !1
    }, ov = {
        rippleCentered: "boolean",
        rippleColor: "string",
        rippleColorDark: "string",
        rippleDuration: "string",
        rippleRadius: "number",
        rippleUnbound: "boolean"
    }, rv = {
        ripple: "relative overflow-hidden inline-block align-bottom",
        rippleWave: "rounded-[50%] opacity-50 pointer-events-none absolute touch-none scale-0 transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999]",
        unbound: "overflow-visible"
    }, av = {
        ripple: "string",
        rippleWave: "string",
        unbound: "string"
    };
    class Ui {
        constructor(t, e, s){
            this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(s), this._element && (P.setData(t, Zn, this), v.addClass(this._element, this._classes.ripple)), this._clickHandler = this._createRipple.bind(this), this._rippleTimer = null, this._isMinWidthSet = !1, this._initialClasses = null, this.init();
        }
        static get NAME() {
            return da;
        }
        init() {
            this._addClickEvent(this._element);
        }
        dispose() {
            P.removeData(this._element, Zn), b.off(this._element, "click", this._clickHandler), this._element = null, this._options = null;
        }
        _autoInit(t) {
            iv.forEach((e)=>{
                g.closest(t.target, e) && (this._element = g.closest(t.target, e));
            }), this._element.style.minWidth || (v.style(this._element, {
                "min-width": getComputedStyle(this._element).width
            }), this._isMinWidthSet = !0), this._initialClasses = [
                ...this._element.classList
            ], v.addClass(this._element, this._classes.ripple), this._options = this._getConfig(), this._createRipple(t);
        }
        _addClickEvent(t) {
            b.on(t, "mousedown", this._clickHandler);
        }
        _createRipple(t) {
            this._element.className.indexOf(this._classes.ripple) < 0 && v.addClass(this._element, this._classes.ripple);
            const { layerX: e, layerY: s } = t, n = e, o = s, r = this._element.offsetHeight, a = this._element.offsetWidth, l = this._durationToMsNumber(this._options.rippleDuration), c = {
                offsetX: this._options.rippleCentered ? r / 2 : n,
                offsetY: this._options.rippleCentered ? a / 2 : o,
                height: r,
                width: a
            }, h = this._getDiameter(c), d = this._options.rippleRadius || h / 2, u = {
                delay: l * Ah,
                duration: l - l * Ah
            }, f = {
                left: this._options.rippleCentered ? `${a / 2 - d}px` : `${n - d}px`,
                top: this._options.rippleCentered ? `${r / 2 - d}px` : `${o - d}px`,
                height: `${this._options.rippleRadius * 2 || h}px`,
                width: `${this._options.rippleRadius * 2 || h}px`,
                transitionDelay: `0s, ${u.delay}ms`,
                transitionDuration: `${l}ms, ${u.duration}ms`
            }, p = z("div");
            this._createHTMLRipple({
                wrapper: this._element,
                ripple: p,
                styles: f
            }), this._removeHTMLRipple({
                ripple: p,
                duration: l
            });
        }
        _createHTMLRipple({ wrapper: t, ripple: e, styles: s }) {
            Object.keys(s).forEach((n)=>e.style[n] = s[n]), v.addClass(e, this._classes.rippleWave), e.setAttribute("data-te-ripple-ref", ""), this._addColor(e, t), this._toggleUnbound(t), this._appendRipple(e, t);
        }
        _removeHTMLRipple({ ripple: t, duration: e }) {
            this._rippleTimer && (clearTimeout(this._rippleTimer), this._rippleTimer = null), t && setTimeout(()=>{
                t.classList.add("!opacity-0");
            }, 10), this._rippleTimer = setTimeout(()=>{
                if (t && (t.remove(), this._element)) {
                    g.find("[data-te-ripple-ref]", this._element).forEach((n)=>{
                        n.remove();
                    }), this._isMinWidthSet && (v.style(this._element, {
                        "min-width": ""
                    }), this._isMinWidthSet = !1);
                    const s = this._initialClasses ? this._addedNewRippleClasses(this._classes.ripple, this._initialClasses) : this._classes.ripple.split(" ");
                    v.removeClass(this._element, s);
                }
            }, e);
        }
        _addedNewRippleClasses(t, e) {
            return t.split(" ").filter((s)=>e.findIndex((n)=>s === n) === -1);
        }
        _durationToMsNumber(t) {
            return Number(t.replace("ms", "").replace("s", "000"));
        }
        _getConfig(t = {}) {
            const e = v.getDataAttributes(this._element);
            return t = {
                ...nv,
                ...e,
                ...t
            }, W(da, t, ov), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...rv,
                ...e,
                ...t
            }, W(da, t, av), t;
        }
        _getDiameter({ offsetX: t, offsetY: e, height: s, width: n }) {
            const o = e <= s / 2, r = t <= n / 2, a = (u, f)=>Math.sqrt(u ** 2 + f ** 2), l = e === s / 2 && t === n / 2, c = {
                first: o === !0 && r === !1,
                second: o === !0 && r === !0,
                third: o === !1 && r === !0,
                fourth: o === !1 && r === !1
            }, h = {
                topLeft: a(t, e),
                topRight: a(n - t, e),
                bottomLeft: a(t, s - e),
                bottomRight: a(n - t, s - e)
            };
            let d = 0;
            return l || c.fourth ? d = h.topLeft : c.third ? d = h.topRight : c.second ? d = h.bottomRight : c.first && (d = h.bottomLeft), d * 2;
        }
        _appendRipple(t, e) {
            e.appendChild(t), setTimeout(()=>{
                v.addClass(t, "opacity-0 scale-100");
            }, 50);
        }
        _toggleUnbound(t) {
            this._options.rippleUnbound === !0 ? v.addClass(t, this._classes.unbound) : v.removeClass(t, this._classes.unbound);
        }
        _addColor(t) {
            let e = this._options.rippleColor || "rgb(0,0,0)";
            (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (e = this._options.rippleColorDark || this._options.rippleColor);
            const s = sv.find((r)=>r.name === e.toLowerCase()), n = s ? this._colorToRGB(s.gradientColor).join(",") : this._colorToRGB(e).join(","), o = ev.split("{{color}}").join(`${n}`);
            t.style.backgroundImage = `radial-gradient(circle, ${o})`;
        }
        _colorToRGB(t) {
            function e(o) {
                return o.length < 7 && (o = `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}`), [
                    parseInt(o.substr(1, 2), 16),
                    parseInt(o.substr(3, 2), 16),
                    parseInt(o.substr(5, 2), 16)
                ];
            }
            function s(o) {
                const r = document.body.appendChild(document.createElement("fictum")), a = "rgb(1, 2, 3)";
                return r.style.color = a, r.style.color !== a || (r.style.color = o, r.style.color === a || r.style.color === "") ? Qn : (o = getComputedStyle(r).color, document.body.removeChild(r), o);
            }
            function n(o) {
                return o = o.match(/[.\d]+/g).map((r)=>+Number(r)), o.length = 3, o;
            }
            return t.toLowerCase() === "transparent" ? Qn : t[0] === "#" ? e(t) : (t.indexOf("rgb") === -1 && (t = s(t)), t.indexOf("rgb") === 0 ? n(t) : Qn);
        }
        static autoInitial(t) {
            return function(e) {
                t._autoInit(e);
            };
        }
        static jQueryInterface(t) {
            return this.each(function() {
                return P.getData(this, Zn) ? null : new Ui(this, t);
            });
        }
        static getInstance(t) {
            return P.getData(t, Zn);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    }
    function bt(i) {
        return i.getDate();
    }
    function Jn(i) {
        return i.getDay();
    }
    function ot(i) {
        return i.getMonth();
    }
    function K(i) {
        return i.getFullYear();
    }
    function lv(i, t, e) {
        const s = e.startDay, n = s > 0 ? 7 - s : 0, r = new Date(i, t).getDay() + n;
        return r >= 7 ? r - 7 : r;
    }
    function ua(i) {
        return cv(i).getDate();
    }
    function cv(i) {
        return he(i.getFullYear(), i.getMonth() + 1, 0);
    }
    function Xi() {
        return new Date;
    }
    function Et(i, t) {
        return Ct(i, t * 12);
    }
    function Ct(i, t) {
        const e = he(i.getFullYear(), i.getMonth() + t, i.getDate()), s = bt(i), n = bt(e);
        return s !== n && e.setDate(0), e;
    }
    function Gi(i, t) {
        return he(i.getFullYear(), i.getMonth(), i.getDate() + t);
    }
    function he(i, t, e) {
        const s = new Date(i, t, e);
        return i >= 0 && i < 100 && s.setFullYear(s.getFullYear() - 1900), s;
    }
    function wh(i) {
        const t = i.split("-"), e = t[0], s = t[1], n = t[2];
        return he(e, s, n);
    }
    function hv(i) {
        return !Number.isNaN(i.getTime());
    }
    function qi(i, t) {
        return K(i) - K(t) || ot(i) - ot(t) || bt(i) - bt(t);
    }
    function _i(i, t) {
        return i.setHours(0, 0, 0, 0), t.setHours(0, 0, 0, 0), i.getTime() === t.getTime();
    }
    function to(i, t) {
        const s = K(i) - uv();
        return dv(s, t);
    }
    function dv(i, t) {
        return (i % t + t) % t;
    }
    function uv(i, t, e) {
        let s = 0;
        return e ? s = K(e) - i + 1 : t && (s = K(t)), s;
    }
    function eo(i, t, e, s, n, o) {
        const r = new Date;
        r.setHours(0, 0, 0, 0);
        const a = t && qi(i, t) <= -1, l = e && qi(i, e) >= 1, c = n && qi(i, r) <= -1, h = o && qi(i, r) >= 1, d = s && s(i) === !1;
        return a || l || d || c || h;
    }
    function kh(i, t, e, s, n, o) {
        const r = new Date, a = s && K(s), l = s && ot(s), c = e && K(e), h = e && ot(e), d = K(r), u = ot(r), f = l && a && (t > a || t === a && i > l), p = h && c && (t < c || t === c && i < h), _ = n && (t < d || t === d && i < u), m = o && (t > d || t === d && i > u);
        return f || p || _ || m;
    }
    function fa(i, t, e, s, n) {
        const o = t && K(t), r = e && K(e), a = K(new Date), l = r && i > r, c = o && i < o, h = s && i < a, d = n && i > a;
        return l || c || h || d;
    }
    function fv(i, t, e, s, n, o, r, a) {
        const l = new Date;
        return l.setHours(0, 0, 0, 0), (i && o && qi(o, l) < 0 || i) && (o = l), o && Ps(t, o, e, s, n, o, r, a);
    }
    function pv(i, t, e, s, n, o, r, a) {
        const l = new Date;
        return l.setHours(0, 0, 0, 0), (i && n && qi(n, l) < 0 || i) && (n = l), n && Ps(t, n, e, s, n, o, r, a);
    }
    function Ps(i, t, e, s, n, o, r, a) {
        return e === "days" ? K(i) === K(t) && ot(i) === ot(t) : e === "months" ? K(i) === K(t) : e === "years" ? K(t) >= a && K(t) <= r : !1;
    }
    const _v = "data-te-datepicker-modal-container-ref", gv = "data-te-datepicker-dropdown-container-ref", mv = "data-te-dropdown-backdrop-ref", bv = "data-te-datepicker-date-text-ref", Sh = "data-te-datepicker-view-ref", vv = "data-te-datepicker-previous-button-ref", yv = "data-te-datepicker-next-button-ref", xv = "data-te-datepicker-ok-button-ref", Ev = "data-te-datepicker-cancel-button-ref", Cv = "data-te-datepicker-clear-button-ref", Tv = "data-te-datepicker-view-change-button-ref";
    function Av(i, t, e, s, n, o, r, a, l, c) {
        const h = ot(i), d = K(i), u = bt(i), f = Jn(i), p = z("div"), _ = `
        ${Oh(i, h, d, t, e, s, n, o, r, a, c)}
    `, m = `
      ${kv(u, f, h, n, c)}
      ${Oh(i, h, d, t, e, s, n, o, r, a, c)}
    `;
        return n.inline ? (v.addClass(p, c.datepickerDropdownContainer), p.setAttribute(gv, l), p.innerHTML = _) : (v.addClass(p, c.modalContainer), p.setAttribute(_v, l), p.innerHTML = m), p;
    }
    function wv(i) {
        const t = z("div");
        return v.addClass(t, i), t.setAttribute(mv, ""), t;
    }
    function kv(i, t, e, s, n) {
        return `
      <div class="${n.datepickerHeader}">
        <div class="${n.datepickerTitle}">
          <span class="${n.datepickerTitleText}">${s.title}</span>
        </div>
        <div class="${n.datepickerDate}">
          <span class="${n.datepickerDateText}" ${bv} >${s.weekdaysShort[t]}, ${s.monthsShort[e]} ${i}</span>
        </div>
      </div>
    `;
    }
    function Oh(i, t, e, s, n, o, r, a, l, c, h) {
        let d;
        return r.inline ? d = `
    <div class="${h.datepickerMain}">
      ${Mh(t, e, r, h)}
      <div class="${h.datepickerView}" ${Sh} tabindex="0">
        ${Dh(i, e, s, n, o, r, a, l, c, h)}
      </div>
    </div>
  ` : d = `
    <div class="${h.datepickerMain}">
      ${Mh(t, e, r, h)}
      <div class="${h.datepickerView}" ${Sh} tabindex="0">
        ${Dh(i, e, s, n, o, r, a, l, c, h)}
      </div>
      ${Sv(r, h)}
    </div>
  `, d;
    }
    function Dh(i, t, e, s, n, o, r, a, l, c) {
        let h;
        return o.view === "days" ? h = io(i, e, o, c) : o.view === "months" ? h = so(t, s, n, o, r, c) : h = no(i, s, o, a, l, c), h;
    }
    function Mh(i, t, e, s) {
        return `
    <div class="${s.datepickerDateControls}">
      <button class="${s.datepickerViewChangeButton}" aria-label="${e.switchToMultiYearViewLabel}" ${Tv}>
        ${e.monthsFull[i]} ${t} ${de(e, s)}
      </button>
      <div class="${s.datepickerArrowControls}">
        <button class="${s.datepickerPreviousButton}" aria-label="${e.prevMonthLabel}" ${vv}>${e.changeMonthIconTemplate}</button>
        <button class="${s.datepickerNextButton}" aria-label="${e.nextMonthLabel}" ${yv}>${e.changeMonthIconTemplate}</button>
      </div>
    </div>
    `;
    }
    function de(i, t) {
        return `
  <span class="${t.datepickerViewChangeIcon}">
  ${i.viewChangeIconTemplate}
  </span>
  `;
    }
    function Sv(i, t) {
        const e = `<button class="${t.datepickerFooterBtn}" aria-label="${i.okBtnLabel}" ${xv}>${i.okBtnText}</button>`, s = `<button class="${t.datepickerFooterBtn}" aria-label="${i.cancelBtnLabel}" ${Ev}>${i.cancelBtnText}</button>`, n = `<button class="${t.datepickerFooterBtn} ${t.datepickerClearBtn}" aria-label="${i.clearBtnLabel}" ${Cv}>${i.clearBtnText}</button>`;
        return `
        <div class="${t.datepickerFooter}">
          
        ${i.removeClearBtn ? "" : n}
        ${i.removeCancelBtn ? "" : s}
        ${i.removeOkBtn ? "" : e}
        </div>
      `;
    }
    function io(i, t, e, s) {
        const n = Ov(i, t, e), r = `
      <tr>
        ${e.weekdaysNarrow.map((l, c)=>`<th class="${s.datepickerDayHeading}" scope="col" aria-label="${e.weekdaysFull[c]}">${l}</th>`).join("")}
      </tr>
    `, a = n.map((l)=>`
        <tr>
          ${l.map((c)=>`
              <td
              class="${s.datepickerCell} ${s.datepickerCellSmall}"
              data-te-date="${K(c.date)}-${ot(c.date)}-${bt(c.date)}"
              aria-label="${c.date}"
              aria-selected="${c.isSelected}"
              ${c.isSelected ? "data-te-datepicker-cell-selected" : ""}
              ${!c.currentMonth || c.disabled ? "data-te-datepicker-cell-disabled" : ""}
              ${c.isToday ? "data-te-datepicker-cell-current" : ""}
              >
                <div
                  class="${s.datepickerCellContent} ${s.datepickerCellContentSmall}"
                  style="${c.currentMonth ? "display: block" : "display: none"}"
                  >
                  ${c.dayNumber}
                  </div>
              </td>
            `).join("")}
        </tr>
      `).join("");
        return `
      <table class="${s.datepickerTable}">
        <thead>
          ${r}
        </thead>
        <tbody>
         ${a}
        </tbody>
      </table>
    `;
    }
    function Ov(i, t, e) {
        const s = [], n = ot(i), o = ot(Ct(i, -1)), r = ot(Ct(i, 1)), a = K(i), l = lv(a, n, e), c = ua(i), h = ua(Ct(i, -1)), d = 7;
        let u = 1, f = !1;
        for(let p = 1; p < d; p++){
            const _ = [];
            if (p === 1) {
                const m = h - l + 1;
                for(let x = m; x <= h; x++){
                    const E = he(a, o, x);
                    _.push({
                        date: E,
                        currentMonth: f,
                        isSelected: t && _i(E, t),
                        isToday: _i(E, Xi()),
                        dayNumber: bt(E)
                    });
                }
                f = !0;
                const y = d - _.length;
                for(let x = 0; x < y; x++){
                    const E = he(a, n, u);
                    _.push({
                        date: E,
                        currentMonth: f,
                        isSelected: t && _i(E, t),
                        isToday: _i(E, Xi()),
                        dayNumber: bt(E),
                        disabled: eo(E, e.min, e.max, e.filter, e.disablePast, e.disableFuture)
                    }), u++;
                }
            } else for(let m = 1; m < 8; m++){
                u > c && (u = 1, f = !1);
                const y = he(a, f ? n : r, u);
                _.push({
                    date: y,
                    currentMonth: f,
                    isSelected: t && _i(y, t),
                    isToday: _i(y, Xi()),
                    dayNumber: bt(y),
                    disabled: eo(y, e.min, e.max, e.filter, e.disablePast, e.disableFuture)
                }), u++;
            }
            s.push(_);
        }
        return s;
    }
    function so(i, t, e, s, n, o) {
        const r = Dv(s, n), a = ot(Xi()), l = K(Xi()), c = `
      ${r.map((h)=>`
          <tr>
            ${h.map((d)=>{
                const u = s.monthsShort.indexOf(d);
                return `
                <td class="${o.datepickerCell} ${o.datepickerCellLarge}"
                ${kh(u, i, s.min, s.max, s.disablePast, s.disableFuture) ? "data-te-datepicker-cell-disabled" : ""}
                
                data-te-month="${u}" data-te-year="${i}" aria-label="${d}, ${i}"
                ${u === e && i === t ? "data-te-datepicker-cell-selected" : ""}
                ${u === a && i === l ? "data-te-datepicker-cell-current" : ""}" data-te-month="${u}" data-te-year="${i}" aria-label="${d}, ${i}">
                  <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${d}</div>
                </td>
              `;
            }).join("")}
          </tr>
        `).join("")}
    `;
        return `
      <table class="${o.datepickerTable}">
        <tbody>
         ${c}
        </tbody>
      </table>
    `;
    }
    function Dv(i, t) {
        const e = [];
        let s = [];
        for(let n = 0; n < i.monthsShort.length; n++)if (s.push(i.monthsShort[n]), s.length === t) {
            const o = s;
            e.push(o), s = [];
        }
        return e;
    }
    function no(i, t, e, s, n, o) {
        const r = Mv(i, s, n), a = K(Xi()), l = `
    ${r.map((c)=>`
        <tr>
          ${c.map((h)=>`
              <td class="${o.datepickerCell} ${o.datepickerCellLarge}"  aria-label="${h}" data-te-year="${h}"
              ${fa(h, e.min, e.max, e.disablePast, e.disableFuture) ? "data-te-datepicker-cell-disabled" : ""}
              ${h === t ? "data-te-datepicker-cell-selected" : ""}
              ${h === a ? "data-te-datepicker-cell-current" : ""}
              >
                <div class="${o.datepickerCellContent} ${o.datepickerCellContentLarge}">${h}</div>
              </td>
            `).join("")}
        </tr>
      `).join("")}
  `;
        return `
      <table class="${o.datepickerTable}">
        <tbody>
        ${l}
        </tbody>
      </table>
    `;
    }
    function Mv(i, t, e) {
        const s = [], n = K(i), o = to(i, t), r = n - o;
        let a = [];
        for(let l = 0; l < t; l++)if (a.push(r + l), a.length === e) {
            const c = a;
            s.push(c), a = [];
        }
        return s;
    }
    function Iv(i, t) {
        return `
    <button id="${i}" type="button" class="${t}" data-te-datepicker-toggle-button-ref data-te-datepicker-toggle-ref>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
      </svg>  
    </button>
  `;
    }
    const Zi = 37, Tt = 38, Qi = 39, ut = 40, Ji = 36, ts = 35, pa = 33, _a = 34, Pt = 13, oo = 32, ro = 27, Rs = 9, Lv = 8, Pv = 46, Qt = 24, ao = 4, lo = 4, ga = "datepicker", co = "te.datepicker", ho = `.${co}`, Rv = ".data-api", Nv = `close${ho}`, $v = `open${ho}`, Bv = `dateChange${ho}`, uo = `click${ho}${Rv}`, Ih = "data-te-datepicker-modal-container-ref", Lh = "data-te-datepicker-dropdown-container-ref", fo = "[data-te-datepicker-toggle-ref]", Hv = `[${Ih}]`, Fv = `[${Lh}]`, Vv = "[data-te-datepicker-view-change-button-ref]", Wv = "[data-te-datepicker-previous-button-ref]", zv = "[data-te-datepicker-next-button-ref]", jv = "[data-te-datepicker-ok-button-ref]", Yv = "[data-te-datepicker-cancel-button-ref]", Kv = "[data-te-datepicker-clear-button-ref]", Uv = "[data-te-datepicker-view-ref]", Xv = "[data-te-datepicker-toggle-button-ref]", Gv = "[data-te-datepicker-date-text-ref]", qv = "[data-te-dropdown-backdrop-ref]", Zv = "animate-[fade-in_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", Qv = "animate-[fade-out_0.3s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", Jv = "animate-[fade-in_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", t0 = "animate-[fade-out_0.15s_both] px-[auto] motion-reduce:transition-none motion-reduce:animate-none", e0 = "flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[328px] h-[512px] bg-white rounded-[0.6rem] shadow-lg z-[1066] xs:max-md:landscape:w-[475px] xs:max-md:landscape:h-[360px] xs:max-md:landscape:flex-row dark:bg-zinc-700", i0 = "w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-black/40 z-[1065]", s0 = "relative h-full", n0 = "xs:max-md:landscape:h-full h-[120px] px-6 bg-primary flex flex-col rounded-t-lg dark:bg-zinc-800", o0 = "h-8 flex flex-col justify-end", r0 = "text-[10px] font-normal uppercase tracking-[1.7px] text-white", a0 = "xs:max-md:landscape:mt-24 h-[72px] flex flex-col justify-end", l0 = "text-[34px] font-normal text-white", c0 = "outline-none px-3", h0 = "px-3 pt-2.5 pb-0 flex justify-between text-black/[64]", d0 = "flex items-center outline-none p-2.5 text-neutral-500 font-medium text-[0.9rem] rounded-xl shadow-none bg-transparent m-0 border-none hover:bg-neutral-200 focus:bg-neutral-200  dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10", u0 = "mt-2.5", f0 = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent mr-6 hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-auto", p0 = "p-0 w-10 h-10 leading-10 border-none outline-none m-0 text-gray-600 bg-transparent hover:bg-neutral-200 hover:rounded-[50%] focus:bg-neutral-200 focus:rounded-[50%] dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:rotate-180 [&>svg]:mx-auto", _0 = "h-14 flex absolute w-full bottom-0 justify-end items-center px-3", g0 = "outline-none bg-white text-primary border-none cursor-pointer py-0 px-2.5 uppercase text-[0.8rem] leading-10 font-medium h-10 tracking-[.1rem] rounded-[10px] mb-2.5 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10", m0 = "mr-auto", b0 = "w-10 h-10 text-center text-[12px] font-normal dark:text-white", v0 = "text-center data-[te-datepicker-cell-disabled]:text-neutral-300 data-[te-datepicker-cell-disabled]:cursor-default data-[te-datepicker-cell-disabled]:pointer-events-none data-[te-datepicker-cell-disabled]:hover:cursor-default hover:cursor-pointer group", y0 = "w-10 h-10 xs:max-md:landscape:w-8 xs:max-md:landscape:h-8", x0 = "w-[76px] h-[42px]", E0 = "mx-auto group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-neutral-300 group-[[data-te-datepicker-cell-selected]]:bg-primary group-[[data-te-datepicker-cell-selected]]:text-white group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-neutral-100 group-[[data-te-datepicker-cell-focused]]:data-[te-datepicker-cell-selected]:bg-primary group-[[data-te-datepicker-cell-current]]:border-solid group-[[data-te-datepicker-cell-current]]:border-black group-[[data-te-datepicker-cell-current]]:border dark:group-[:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover]:bg-white/10 dark:group-[[data-te-datepicker-cell-current]]:border-white dark:text-white dark:group-[:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused]]:bg-white/10 dark:group-[[data-te-datepicker-cell-disabled]]:text-neutral-500", C0 = "w-9 h-9 leading-9 rounded-[50%] text-[13px]", T0 = "w-[72px] h-10 leading-10 py-[1px] px-0.5 rounded-[999px]", A0 = "mx-auto w-[304px]", w0 = "flex items-center justify-content-center [&>svg]:w-5 [&>svg]:h-5 absolute outline-none border-none bg-transparent right-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-primary focus:text-primary dark:hover:text-primary-400 dark:focus:text-primary-400 dark:text-neutral-200", k0 = "inline-block pointer-events-none ml-[3px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-neutral-500 dark:[&>svg]:fill-white", S0 = "w-[328px] h-[380px] bg-white rounded-lg shadow-[0px_2px_15px_-3px_rgba(0,0,0,.07),_0px_10px_20px_-2px_rgba(0,0,0,.04)] z-[1066] dark:bg-zinc-700", O0 = {
        title: "Select date",
        container: "body",
        disablePast: !1,
        disableFuture: !1,
        monthsFull: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        monthsShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        weekdaysFull: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        weekdaysShort: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ],
        weekdaysNarrow: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
        ],
        okBtnText: "Ok",
        clearBtnText: "Clear",
        cancelBtnText: "Cancel",
        okBtnLabel: "Confirm selection",
        clearBtnLabel: "Clear selection",
        cancelBtnLabel: "Cancel selection",
        nextMonthLabel: "Next month",
        prevMonthLabel: "Previous month",
        nextYearLabel: "Next year",
        prevYearLabel: "Previous year",
        changeMonthIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  `,
        nextMultiYearLabel: "Next 24 years",
        prevMultiYearLabel: "Previous 24 years",
        switchToMultiYearViewLabel: "Choose year and month",
        switchToMonthViewLabel: "Choose date",
        switchToDayViewLabel: "Choose date",
        startDate: null,
        startDay: 0,
        format: "dd/mm/yyyy",
        view: "days",
        viewChangeIconTemplate: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  `,
        min: null,
        max: null,
        filter: null,
        inline: !1,
        toggleButton: !0,
        disableToggleButton: !1,
        disableInput: !1,
        animations: !0,
        confirmDateOnSelect: !1,
        removeOkBtn: !1,
        removeCancelBtn: !1,
        removeClearBtn: !1
    }, D0 = {
        title: "string",
        container: "string",
        disablePast: "boolean",
        disableFuture: "boolean",
        monthsFull: "array",
        monthsShort: "array",
        weekdaysFull: "array",
        weekdaysShort: "array",
        weekdaysNarrow: "array",
        okBtnText: "string",
        clearBtnText: "string",
        cancelBtnText: "string",
        okBtnLabel: "string",
        clearBtnLabel: "string",
        cancelBtnLabel: "string",
        nextMonthLabel: "string",
        prevMonthLabel: "string",
        nextYearLabel: "string",
        prevYearLabel: "string",
        nextMultiYearLabel: "string",
        prevMultiYearLabel: "string",
        changeMonthIconTemplate: "string",
        switchToMultiYearViewLabel: "string",
        switchToMonthViewLabel: "string",
        switchToDayViewLabel: "string",
        startDate: "(null|string|date)",
        startDay: "number",
        format: "string",
        view: "string",
        viewChangeIconTemplate: "string",
        min: "(null|string|date)",
        max: "(null|string|date)",
        filter: "(null|function)",
        inline: "boolean",
        toggleButton: "boolean",
        disableToggleButton: "boolean",
        disableInput: "boolean",
        animations: "boolean",
        confirmDateOnSelect: "boolean",
        removeOkBtn: "boolean",
        removeCancelBtn: "boolean",
        removeClearBtn: "boolean"
    }, M0 = {
        fadeIn: Zv,
        fadeOut: Qv,
        fadeInShort: Jv,
        fadeOutShort: t0,
        modalContainer: e0,
        datepickerBackdrop: i0,
        datepickerMain: s0,
        datepickerHeader: n0,
        datepickerTitle: o0,
        datepickerTitleText: r0,
        datepickerDate: a0,
        datepickerDateText: l0,
        datepickerView: c0,
        datepickerDateControls: h0,
        datepickerViewChangeButton: d0,
        datepickerViewChangeIcon: k0,
        datepickerArrowControls: u0,
        datepickerPreviousButton: f0,
        datepickerNextButton: p0,
        datepickerFooter: _0,
        datepickerFooterBtn: g0,
        datepickerClearBtn: m0,
        datepickerDayHeading: b0,
        datepickerCell: v0,
        datepickerCellSmall: y0,
        datepickerCellLarge: x0,
        datepickerCellContent: E0,
        datepickerCellContentSmall: C0,
        datepickerCellContentLarge: T0,
        datepickerTable: A0,
        datepickerToggleButton: w0,
        datepickerDropdownContainer: S0
    }, I0 = {
        fadeIn: "string",
        fadeOut: "string",
        fadeInShort: "string",
        fadeOutShort: "string",
        modalContainer: "string",
        datepickerBackdrop: "string",
        datepickerMain: "string",
        datepickerHeader: "string",
        datepickerTitle: "string",
        datepickerTitleText: "string",
        datepickerDate: "string",
        datepickerDateText: "string",
        datepickerView: "string",
        datepickerDateControls: "string",
        datepickerViewChangeButton: "string",
        datepickerArrowControls: "string",
        datepickerPreviousButton: "string",
        datepickerNextButton: "string",
        datepickerFooter: "string",
        datepickerFooterBtn: "string",
        datepickerClearBtn: "string",
        datepickerDayHeading: "string",
        datepickerCell: "string",
        datepickerCellSmall: "string",
        datepickerCellLarge: "string",
        datepickerCellContent: "string",
        datepickerCellContentSmall: "string",
        datepickerCellContentLarge: "string",
        datepickerTable: "string",
        datepickerToggleButton: "string",
        datepickerDropdownContainer: "string"
    };
    class Ph {
        constructor(t, e, s){
            this._element = t, this._input = g.findOne("input", this._element), this._options = this._getConfig(e), this._classes = this._getClasses(s), this._activeDate = new Date, this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = this._options.view, this._popper = null, this._focusTrap = null, this._isOpen = !1, this._toggleButtonId = se("datepicker-toggle-"), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this._scrollBar = new Es, this._element && P.setData(t, co, this), this._init(), this.toggleButton && this._options.disableToggle && (this.toggleButton.disabled = "true"), this._options.disableInput && (this._input.disabled = "true");
        }
        static get NAME() {
            return ga;
        }
        get container() {
            return g.findOne(`[${Ih}='${this._toggleButtonId}']`) || g.findOne(`[${Lh}='${this._toggleButtonId}']`);
        }
        get options() {
            return this._options;
        }
        get activeCell() {
            let t;
            return this._view === "days" && (t = this._getActiveDayCell()), this._view === "months" && (t = this._getActiveMonthCell()), this._view === "years" && (t = this._getActiveYearCell()), t;
        }
        get activeDay() {
            return bt(this._activeDate);
        }
        get activeMonth() {
            return ot(this._activeDate);
        }
        get activeYear() {
            return K(this._activeDate);
        }
        get firstYearInView() {
            return this.activeYear - to(this._activeDate, Qt);
        }
        get lastYearInView() {
            return this.firstYearInView + Qt - 1;
        }
        get viewChangeButton() {
            return g.findOne(Vv, this.container);
        }
        get previousButton() {
            return g.findOne(Wv, this.container);
        }
        get nextButton() {
            return g.findOne(zv, this.container);
        }
        get okButton() {
            return g.findOne(jv, this.container);
        }
        get cancelButton() {
            return g.findOne(Yv, this.container);
        }
        get clearButton() {
            return g.findOne(Kv, this.container);
        }
        get datesContainer() {
            return g.findOne(Uv, this.container);
        }
        get toggleButton() {
            return g.findOne(Xv, this._element);
        }
        update(t = {}) {
            this._options = this._getConfig({
                ...this._options,
                ...t
            });
        }
        _getConfig(t) {
            const e = v.getDataAttributes(this._element);
            if (t = {
                ...O0,
                ...e,
                ...t
            }, W(ga, t, D0), t.max && typeof t.max == "string" && (t.max = new Date(t.max)), t.min && typeof t.min == "string" && (t.min = new Date(t.min)), t.startDay && t.startDay !== 0) {
                const s = this._getNewDaysOrderArray(t);
                t.weekdaysNarrow = s;
            }
            return t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...M0,
                ...e,
                ...t
            }, W(ga, t, I0), t;
        }
        _getContainer() {
            return g.findOne(this._options.container);
        }
        _getNewDaysOrderArray(t) {
            const e = t.startDay, s = t.weekdaysNarrow;
            return s.slice(e).concat(s.slice(0, e));
        }
        _init() {
            !this.toggleButton && this._options.toggleButton && (this._appendToggleButton(), (this._input.readOnly || this._input.disabled) && (this.toggleButton.style.pointerEvents = "none")), this._listenToUserInput(), this._listenToToggleClick(), this._listenToToggleKeydown();
        }
        _appendToggleButton() {
            const t = Iv(this._toggleButtonId, this._classes.datepickerToggleButton);
            this._element.insertAdjacentHTML("beforeend", t);
        }
        open() {
            if (this._input.readOnly || this._input.disabled) return;
            const t = b.trigger(this._element, $v);
            if (this._isOpen || t.defaultPrevented) return;
            this._setInitialDate();
            const e = wv(this._classes.datepickerBackdrop), s = Av(this._activeDate, this._selectedDate, this._selectedYear, this._selectedMonth, this._options, lo, Qt, ao, this._toggleButtonId, this._classes);
            this._options.inline ? this._openDropdown(s) : (this._openModal(e, s), this._scrollBar.hide()), this._animations && (v.addClass(this.container, this._classes.fadeIn), v.addClass(e, this._classes.fadeInShort)), this._setFocusTrap(this.container), this._listenToDateSelection(), this._addControlsListeners(), this._updateControlsDisabledState(), this._listenToEscapeClick(), this._listenToKeyboardNavigation(), this._listenToDatesContainerFocus(), this._listenToDatesContainerBlur(), this._asyncFocusDatesContainer(), this._updateViewControlsAndAttributes(this._view), this._isOpen = !0, setTimeout(()=>{
                this._listenToOutsideClick();
            }, 0);
        }
        _openDropdown(t) {
            this._popper = Fi(this._input, t, {
                placement: "bottom-start"
            }), this._getContainer().appendChild(t);
        }
        _openModal(t, e) {
            const s = this._getContainer();
            s.appendChild(t), s.appendChild(e);
        }
        _setFocusTrap(t) {
            this._focusTrap = new Cs(t, {
                event: "keydown",
                condition: (e)=>e.key === "Tab"
            }), this._focusTrap.trap();
        }
        _listenToUserInput() {
            b.on(this._input, "input", (t)=>{
                this._handleUserInput(t.target.value);
            });
        }
        _listenToToggleClick() {
            b.on(this._element, uo, fo, (t)=>{
                t.preventDefault(), this.open();
            });
        }
        _listenToToggleKeydown() {
            b.on(this._element, "keydown", fo, (t)=>{
                t.keyCode === Pt && !this._isOpen && this.open();
            });
        }
        _listenToDateSelection() {
            b.on(this.datesContainer, "click", (t)=>{
                this._handleDateSelection(t);
            });
        }
        _handleDateSelection(t) {
            const e = t.target.nodeName === "DIV" ? t.target.parentNode.dataset : t.target.dataset, s = t.target.nodeName === "DIV" ? t.target.parentNode : t.target;
            if (e.teDate && this._pickDay(e.teDate, s), e.teMonth && e.teYear) {
                const n = parseInt(e.teMonth, 10), o = parseInt(e.teYear, 10);
                this._pickMonth(n, o);
            }
            if (e.teYear && !e.teMonth) {
                const n = parseInt(e.teYear, 10);
                this._pickYear(n);
            }
            this._options.inline || this._updateHeaderDate(this._activeDate, this._options.monthsShort, this._options.weekdaysShort);
        }
        _updateHeaderDate(t, e, s) {
            const n = g.findOne(Gv, this.container), o = ot(t), r = bt(t), a = Jn(t);
            n.innerHTML = `${s[a]}, ${e[o]} ${r}`;
        }
        _addControlsListeners() {
            b.on(this.nextButton, "click", ()=>{
                this._view === "days" ? this.nextMonth() : this._view === "years" ? this.nextYears() : this.nextYear(), this._updateControlsDisabledState();
            }), b.on(this.previousButton, "click", ()=>{
                this._view === "days" ? this.previousMonth() : this._view === "years" ? this.previousYears() : this.previousYear(), this._updateControlsDisabledState();
            }), b.on(this.viewChangeButton, "click", ()=>{
                this._view === "days" ? this._changeView("years") : (this._view === "years" || this._view === "months") && this._changeView("days");
            }), this._options.inline || this._listenToFooterButtonsClick();
        }
        _listenToFooterButtonsClick() {
            b.on(this.okButton, "click", ()=>this.handleOk()), b.on(this.cancelButton, "click", ()=>this.handleCancel()), b.on(this.clearButton, "click", ()=>this.handleClear());
        }
        _listenToOutsideClick() {
            b.on(document, uo, (t)=>{
                const e = t.target === this.container, s = this.container && this.container.contains(t.target);
                !e && !s && this.close();
            });
        }
        _listenToEscapeClick() {
            b.on(document, "keydown", (t)=>{
                t.keyCode === ro && this._isOpen && this.close();
            });
        }
        _listenToKeyboardNavigation() {
            b.on(this.datesContainer, "keydown", (t)=>{
                this._handleKeydown(t);
            });
        }
        _listenToDatesContainerFocus() {
            b.on(this.datesContainer, "focus", ()=>{
                this._focusActiveCell(this.activeCell);
            });
        }
        _listenToDatesContainerBlur() {
            b.on(this.datesContainer, "blur", ()=>{
                this._removeCurrentFocusStyles();
            });
        }
        _handleKeydown(t) {
            this._view === "days" && this._handleDaysViewKeydown(t), this._view === "months" && this._handleMonthsViewKeydown(t), this._view === "years" && this._handleYearsViewKeydown(t);
        }
        _handleDaysViewKeydown(t) {
            const e = this._activeDate, s = this.activeCell;
            switch(t.keyCode){
                case Zi:
                    this._activeDate = Gi(this._activeDate, st() ? 1 : -1);
                    break;
                case Qi:
                    this._activeDate = Gi(this._activeDate, st() ? -1 : 1);
                    break;
                case Tt:
                    this._activeDate = Gi(this._activeDate, -7);
                    break;
                case ut:
                    this._activeDate = Gi(this._activeDate, 7);
                    break;
                case Ji:
                    this._activeDate = Gi(this._activeDate, 1 - bt(this._activeDate));
                    break;
                case ts:
                    this._activeDate = Gi(this._activeDate, ua(this._activeDate) - bt(this._activeDate));
                    break;
                case pa:
                    this._activeDate = Ct(this._activeDate, -1);
                    break;
                case _a:
                    this._activeDate = Ct(this._activeDate, 1);
                    break;
                case Pt:
                case oo:
                    this._selectDate(this._activeDate), this._handleDateSelection(t), t.preventDefault();
                    return;
                default:
                    return;
            }
            Ps(e, this._activeDate, this._view, Qt, this._options.min, this._options.max) || this._changeView("days"), this._removeHighlightFromCell(s), this._focusActiveCell(this.activeCell), t.preventDefault();
        }
        _asyncFocusDatesContainer() {
            setTimeout(()=>{
                this.datesContainer.focus();
            }, 0);
        }
        _focusActiveCell(t) {
            t && t.setAttribute("data-te-datepicker-cell-focused", "");
        }
        _removeHighlightFromCell(t) {
            t && t.removeAttribute("data-te-datepicker-cell-focused");
        }
        _getActiveDayCell() {
            const t = g.find("td", this.datesContainer);
            return Array.from(t).find((s)=>{
                const n = wh(s.dataset.teDate);
                return _i(n, this._activeDate);
            });
        }
        _handleMonthsViewKeydown(t) {
            const e = this._activeDate, s = this.activeCell;
            switch(t.keyCode){
                case Zi:
                    this._activeDate = Ct(this._activeDate, st() ? 1 : -1);
                    break;
                case Qi:
                    this._activeDate = Ct(this._activeDate, st() ? -1 : 1);
                    break;
                case Tt:
                    this._activeDate = Ct(this._activeDate, -4);
                    break;
                case ut:
                    this._activeDate = Ct(this._activeDate, 4);
                    break;
                case Ji:
                    this._activeDate = Ct(this._activeDate, -this.activeMonth);
                    break;
                case ts:
                    this._activeDate = Ct(this._activeDate, 11 - this.activeMonth);
                    break;
                case pa:
                    this._activeDate = Et(this._activeDate, -1);
                    break;
                case _a:
                    this._activeDate = Et(this._activeDate, 1);
                    break;
                case Pt:
                case oo:
                    this._selectMonth(this.activeMonth);
                    return;
                default:
                    return;
            }
            Ps(e, this._activeDate, this._view, Qt, this._options.min, this._options.max) || this._changeView("months"), this._removeHighlightFromCell(s), this._focusActiveCell(this.activeCell), t.preventDefault();
        }
        _getActiveMonthCell() {
            const t = g.find("td", this.datesContainer);
            return Array.from(t).find((s)=>{
                const n = parseInt(s.dataset.teYear, 10), o = parseInt(s.dataset.teMonth, 10);
                return n === this.activeYear && o === this.activeMonth;
            });
        }
        _handleYearsViewKeydown(t) {
            const e = this._activeDate, s = this.activeCell, n = 4, o = 24;
            switch(t.keyCode){
                case Zi:
                    this._activeDate = Et(this._activeDate, st() ? 1 : -1);
                    break;
                case Qi:
                    this._activeDate = Et(this._activeDate, st() ? -1 : 1);
                    break;
                case Tt:
                    this._activeDate = Et(this._activeDate, -n);
                    break;
                case ut:
                    this._activeDate = Et(this._activeDate, n);
                    break;
                case Ji:
                    this._activeDate = Et(this._activeDate, -to(this._activeDate, o));
                    break;
                case ts:
                    this._activeDate = Et(this._activeDate, o - to(this._activeDate, o) - 1);
                    break;
                case pa:
                    this._activeDate = Et(this._activeDate, -o);
                    break;
                case _a:
                    this._activeDate = Et(this._activeDate, o);
                    break;
                case Pt:
                case oo:
                    this._selectYear(this.activeYear);
                    return;
                default:
                    return;
            }
            Ps(e, this._activeDate, this._view, Qt, this._options.min, this._options.max) || this._changeView("years"), this._removeHighlightFromCell(s), this._focusActiveCell(this.activeCell), t.preventDefault();
        }
        _getActiveYearCell() {
            const t = g.find("td", this.datesContainer);
            return Array.from(t).find((s)=>parseInt(s.dataset.teYear, 10) === this.activeYear);
        }
        _setInitialDate() {
            this._input.value ? this._handleUserInput(this._input.value) : this._options.startDate ? this._activeDate = new Date(this._options.startDate) : this._activeDate = new Date;
        }
        close() {
            const t = b.trigger(this._element, Nv);
            !this._isOpen || t.defaultPrevented || (this._removeDatepickerListeners(), this._animations && v.addClass(this.container, this._classes.fadeOut), this._options.inline ? this._closeDropdown() : this._closeModal(), this._isOpen = !1, this._view = this._options.view, this.toggleButton ? this.toggleButton.focus() : this._input.focus());
        }
        _closeDropdown() {
            const t = g.findOne(Fv);
            window.matchMedia("(prefers-reduced-motion: reduce)").matches && (t && document.body.removeChild(t), this._popper && this._popper.destroy()), t.addEventListener("animationend", ()=>{
                t && document.body.removeChild(t), this._popper && this._popper.destroy();
            }), this._removeFocusTrap();
        }
        _closeModal() {
            const t = g.findOne(qv), e = g.findOne(Hv);
            !e || !t || (this._animations ? (v.addClass(t, this._classes.fadeOutShort), t.addEventListener("animationend", ()=>{
                this._removePicker(t, e), this._scrollBar.reset();
            })) : (this._removePicker(t, e), this._scrollBar.reset()));
        }
        _removePicker(t, e) {
            const s = this._getContainer();
            s.removeChild(t), s.removeChild(e);
        }
        _removeFocusTrap() {
            this._focusTrap && (this._focusTrap.disable(), this._focusTrap = null);
        }
        _removeDatepickerListeners() {
            b.off(this.nextButton, "click"), b.off(this.previousButton, "click"), b.off(this.viewChangeButton, "click"), b.off(this.okButton, "click"), b.off(this.cancelButton, "click"), b.off(this.clearButton, "click"), b.off(this.datesContainer, "click"), b.off(this.datesContainer, "keydown"), b.off(this.datesContainer, "focus"), b.off(this.datesContainer, "blur"), b.off(document, uo);
        }
        dispose() {
            this._isOpen && this.close(), this._removeInputAndToggleListeners();
            const t = g.findOne(`#${this._toggleButtonId}`);
            t && this._element.removeChild(t), P.removeData(this._element, co), this._element = null, this._input = null, this._options = null, this._activeDate = null, this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this._headerDate = null, this._headerYear = null, this._headerMonth = null, this._view = null, this._popper = null, this._focusTrap = null;
        }
        _removeInputAndToggleListeners() {
            b.off(this._input, "input"), b.off(this._element, uo, fo), b.off(this._element, "keydown", fo);
        }
        handleOk() {
            this._confirmSelection(this._headerDate), this.close();
        }
        _selectDate(t, e = this.activeCell) {
            const { min: s, max: n, filter: o, disablePast: r, disableFuture: a } = this._options;
            eo(t, s, n, o, r, a) || (this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._selectedDate = t, this._selectedYear = K(t), this._selectedMonth = ot(t), this._headerDate = t, (this._options.inline || this.options.confirmDateOnSelect) && (this._confirmSelection(t), this.close()));
        }
        _selectYear(t, e = this.activeCell) {
            this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerYear = t, this._asyncChangeView("months");
        }
        _selectMonth(t, e = this.activeCell) {
            this._removeCurrentSelectionStyles(), this._removeCurrentFocusStyles(), this._addSelectedStyles(e), this._headerMonth = t, this._asyncChangeView("days");
        }
        _removeSelectedStyles(t) {
            t && t.removeAttribute("data-te-datepicker-cell-selected");
        }
        _addSelectedStyles(t) {
            t && t.setAttribute("data-te-datepicker-cell-selected", "");
        }
        _confirmSelection(t) {
            if (t) {
                const e = this.formatDate(t);
                this._input.value = e, b.trigger(this._element, Bv, {
                    date: t
                }), b.trigger(this._input, "input");
            }
        }
        handleCancel() {
            this._selectedDate = null, this._selectedYear = null, this._selectedMonth = null, this.close();
        }
        handleClear() {
            this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null, this._removeCurrentSelectionStyles(), this._input.value = "", this._setInitialDate(), this._changeView("days"), this._updateHeaderDate(this._activeDate, this._options.monthsShort, this._options.weekdaysShort);
        }
        _removeCurrentSelectionStyles() {
            const t = g.findOne("[data-te-datepicker-cell-selected]", this.container);
            t && t.removeAttribute("data-te-datepicker-cell-selected");
        }
        _removeCurrentFocusStyles() {
            const t = g.findOne("[data-te-datepicker-cell-focused]", this.container);
            t && t.removeAttribute("data-te-datepicker-cell-focused");
        }
        formatDate(t) {
            const e = bt(t), s = this._addLeadingZero(bt(t)), n = this._options.weekdaysShort[Jn(t)], o = this._options.weekdaysFull[Jn(t)], r = ot(t) + 1, a = this._addLeadingZero(ot(t) + 1), l = this._options.monthsShort[ot(t)], c = this._options.monthsFull[ot(t)], h = K(t).toString().length === 2 ? K(t) : K(t).toString().slice(2, 4), d = K(t), u = this._options.format.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
            let f = "";
            return u.forEach((p)=>{
                switch(p){
                    case "dddd":
                        p = p.replace(p, o);
                        break;
                    case "ddd":
                        p = p.replace(p, n);
                        break;
                    case "dd":
                        p = p.replace(p, s);
                        break;
                    case "d":
                        p = p.replace(p, e);
                        break;
                    case "mmmm":
                        p = p.replace(p, c);
                        break;
                    case "mmm":
                        p = p.replace(p, l);
                        break;
                    case "mm":
                        p = p.replace(p, a);
                        break;
                    case "m":
                        p = p.replace(p, r);
                        break;
                    case "yyyy":
                        p = p.replace(p, d);
                        break;
                    case "yy":
                        p = p.replace(p, h);
                        break;
                }
                f += p;
            }), f;
        }
        _addLeadingZero(t) {
            return parseInt(t, 10) < 10 ? `0${t}` : t;
        }
        _pickDay(t, e) {
            const s = wh(t), { min: n, max: o, filter: r, disablePast: a, disableFuture: l } = this._options;
            eo(s, n, o, r, a, l) || (this._activeDate = s, this._selectDate(s, e));
        }
        _pickYear(t) {
            const { min: e, max: s, disablePast: n, disableFuture: o } = this._options;
            if (fa(t, e, s, n, o)) return;
            const r = he(t, this.activeMonth, this.activeDay);
            this._activeDate = r, this._selectedDate = r, this._selectYear(t);
        }
        _pickMonth(t, e) {
            const { min: s, max: n, disablePast: o, disableFuture: r } = this._options;
            if (kh(t, e, s, n, o, r) || fa(e, s, n, o, r)) return;
            const a = he(e, t, this.activeDay);
            this._activeDate = a, this._selectMonth(t);
        }
        nextMonth() {
            const t = Ct(this._activeDate, 1), e = io(t, this._headerDate, this._options, this._classes);
            this._activeDate = t, this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += de(this._options, this._classes), this.datesContainer.innerHTML = e;
        }
        previousMonth() {
            const t = Ct(this._activeDate, -1);
            this._activeDate = t;
            const e = io(t, this._headerDate, this._options, this._classes);
            this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += de(this._options, this._classes), this.datesContainer.innerHTML = e;
        }
        nextYear() {
            const t = Et(this._activeDate, 1);
            this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += de(this._options, this._classes);
            const e = so(this.activeYear, this._selectedYear, this._selectedMonth, this._options, lo, this._classes);
            this.datesContainer.innerHTML = e;
        }
        previousYear() {
            const t = Et(this._activeDate, -1);
            this._activeDate = t, this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += de(this._options, this._classes);
            const e = so(this.activeYear, this._selectedYear, this._selectedMonth, this._options, lo, this._classes);
            this.datesContainer.innerHTML = e;
        }
        nextYears() {
            const t = Et(this._activeDate, 24);
            this._activeDate = t;
            const e = no(t, this._selectedYear, this._options, Qt, ao, this._classes);
            this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += de(this._options, this._classes), this.datesContainer.innerHTML = e;
        }
        previousYears() {
            const t = Et(this._activeDate, -24);
            this._activeDate = t;
            const e = no(t, this._selectedYear, this._options, Qt, ao, this._classes);
            this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += de(this._options, this._classes), this.datesContainer.innerHTML = e;
        }
        _asyncChangeView(t) {
            setTimeout(()=>{
                this._changeView(t);
            }, 0);
        }
        _changeView(t) {
            this._view = t, this.datesContainer.blur(), t === "days" && (this.datesContainer.innerHTML = io(this._activeDate, this._headerDate, this._options, this._classes)), t === "months" && (this.datesContainer.innerHTML = so(this.activeYear, this._selectedYear, this._selectedMonth, this._options, lo, this._classes)), t === "years" && (this.datesContainer.innerHTML = no(this._activeDate, this._selectedYear, this._options, Qt, ao, this._classes)), this.datesContainer.focus(), this._updateViewControlsAndAttributes(t), this._updateControlsDisabledState();
        }
        _updateViewControlsAndAttributes(t) {
            t === "days" && (this.viewChangeButton.textContent = `${this._options.monthsFull[this.activeMonth]} ${this.activeYear}`, this.viewChangeButton.innerHTML += de(this._options, this._classes), this.viewChangeButton.setAttribute("aria-label", this._options.switchToMultiYearViewLabel), this.previousButton.setAttribute("aria-label", this._options.prevMonthLabel), this.nextButton.setAttribute("aria-label", this._options.nextMonthLabel)), t === "months" && (this.viewChangeButton.textContent = `${this.activeYear}`, this.viewChangeButton.innerHTML += de(this._options, this._classes), this.viewChangeButton.setAttribute("aria-label", this._options.switchToDayViewLabel), this.previousButton.setAttribute("aria-label", this._options.prevYearLabel), this.nextButton.setAttribute("aria-label", this._options.nextYearLabel)), t === "years" && (this.viewChangeButton.textContent = `${this.firstYearInView} - ${this.lastYearInView}`, this.viewChangeButton.innerHTML += de(this._options, this._classes), this.viewChangeButton.setAttribute("aria-label", this._options.switchToMonthViewLabel), this.previousButton.setAttribute("aria-label", this._options.prevMultiYearLabel), this.nextButton.setAttribute("aria-label", this._options.nextMultiYearLabel));
        }
        _updateControlsDisabledState() {
            fv(this._options.disableFuture, this._activeDate, this._view, Qt, this._options.min, this._options.max, this.lastYearInView, this.firstYearInView) ? this.nextButton.disabled = !0 : this.nextButton.disabled = !1, pv(this._options.disablePast, this._activeDate, this._view, Qt, this._options.min, this._options.max, this.lastYearInView, this.firstYearInView) ? this.previousButton.disabled = !0 : this.previousButton.disabled = !1;
        }
        _handleUserInput(t) {
            const e = this._getDelimeters(this._options.format), s = this._parseDate(t, this._options.format, e);
            hv(s) ? (this._activeDate = s, this._selectedDate = s, this._selectedYear = K(s), this._selectedMonth = ot(s), this._headerDate = s) : (this._activeDate = new Date, this._selectedDate = null, this._selectedMonth = null, this._selectedYear = null, this._headerDate = null, this._headerMonth = null, this._headerYear = null);
        }
        _getDelimeters(t) {
            return t.match(/[^(dmy)]{1,}/g);
        }
        _parseDate(t, e, s) {
            let n;
            s[0] !== s[1] ? n = s[0] + s[1] : n = s[0];
            const o = new RegExp(`[${n}]`), r = t.split(o), a = e.split(o), l = e.indexOf("mmm") !== -1, c = [];
            for(let _ = 0; _ < a.length; _++)a[_].indexOf("yy") !== -1 && (c[0] = {
                value: r[_],
                format: a[_]
            }), a[_].indexOf("m") !== -1 && (c[1] = {
                value: r[_],
                format: a[_]
            }), a[_].indexOf("d") !== -1 && a[_].length <= 2 && (c[2] = {
                value: r[_],
                format: a[_]
            });
            let h;
            e.indexOf("mmmm") !== -1 ? h = this._options.monthsFull : h = this._options.monthsShort;
            const d = Number(c[0].value), u = l ? this.getMonthNumberByMonthName(c[1].value, h) : Number(c[1].value) - 1, f = Number(c[2].value);
            return he(d, u, f);
        }
        getMonthNumberByMonthName(t, e) {
            return e.findIndex((s)=>s === t);
        }
        static getInstance(t) {
            return P.getData(t, co);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    }
    const L0 = ({ format24: i, okLabel: t, cancelLabel: e, headID: s, footerID: n, bodyID: o, pickerID: r, clearLabel: a, inline: l, showClearBtn: c, amLabel: h, pmLabel: d }, u)=>{
        const f = `<div id='${r}' class='${u.timepickerWrapper}' data-te-timepicker-wrapper>
      <div class="${u.timepickerContainer}">
        <div class="${u.timepickerElements}">
        <div id='${s}' class='${u.timepickerHead}' style='padding-right:${i ? 50 : 10}px'>
        <div class='${u.timepickerHeadContent}'>
            <div class="${u.timepickerCurrentWrapper}">
              <span class="${u.timepickerCurrentButtonWrapper}">
                <button type='button' class='${u.timepickerCurrentButton}' tabindex="0" data-te-timepicker-active data-te-timepicker-current data-te-timepicker-hour data-te-ripple-init>21</button>
              </span>
              <button type='button' class='${u.timepickerDot}' disabled>:</button>
            <span class="${u.timepickerCurrentButtonWrapper}">
              <button type='button' class='${u.timepickerCurrentButton}' tabindex="0" data-te-timepicker-current data-te-timepicker-minute data-te-ripple-init>21</button>
            </span>
            </div>
            ${i ? "" : `<div class="${u.timepickerModeWrapper}">
                  <button type='button' class="${u.timepickerModeAm}" tabindex="0" data-te-timepicker-am data-te-timepicker-hour-mode data-te-ripple-init>${h}</button>
                  <button class="${u.timepickerModePm}" tabindex="0" data-te-timepicker-pm data-te-timepicker-hour-mode data-te-ripple-init>${d}</button>
                </div>`}
        </div>
      </div>
      ${l ? "" : `<div id='${o}' class='${u.timepickerClockWrapper}' data-te-timepicker-clock-wrapper>
            <div class='${u.timepickerClock}' data-te-timepicker-clock>
              <span class='${u.timepickerMiddleDot}' data-te-timepicker-middle-dot></span>
              <div class='${u.timepickerHandPointer}' data-te-timepicker-hand-pointer>
                <div class='${u.timepickerPointerCircle}' data-te-timepicker-circle></div>
              </div>
              ${i ? '<div class="' + u.timepickerClockInner + '" data-te-timepicker-clock-inner></div>' : ""}
            </div>
          </div>`}
    </div>
    <div id='${n}' class='${u.timepickerFooterWrapper}'>
      <div class="${u.timepickerFooter}">
        ${c ? `<button type='button' class='${u.timepickerFooterButton}' data-te-timepicker-clear tabindex="0" data-te-ripple-init>${a}</button>` : ""}
        <button type='button' class='${u.timepickerFooterButton}' data-te-timepicker-cancel tabindex="0" data-te-ripple-init>${e}</button>
        <button type='button' class='${u.timepickerFooterButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
      </div>
    </div>
  </div>
</div>`, p = `<div id='${r}' class='${u.timepickerInlineWrapper}' data-te-timepicker-wrapper>
        <div class="${u.timepickerInlineContainer}">
          <div class="${u.timepickerInlineElements}">
          <div id='${s}' class='${u.timepickerInlineHead}'
          style='padding-right:10px'>
          <div class='${u.timepickerInlineHeadContent}'>
              <div class="${u.timepickerCurrentWrapper}">
                <span class="${u.timepickerInlineHourWrapper}" data-te-timepicker-inline-hour-icons>
                  <span class="${u.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-hour>
                    <span class="${u.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>   
                    </span>
                  </span>
                  <button type='button' class='${u.timepickerInlineCurrentButton}' data-te-timepicker-hour data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                  <span class="${u.timepickerInlineIconDown}" data-te-timepicker-icon-inline-hour data-te-timepicker-icon-down>
                    <span class="${u.timepickerInlineIconSvg}">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>  
                    </span>
                  </span>
                </span>
                <button type='button' class='${u.timepickerInlineDot}' data-te-timepicker-current-inline disabled>:</button>
              <span class="${u.timepickerCurrentMinuteWrapper}">
                <span class="${u.timepickerInlineIconUp}" data-te-timepicker-icon-up data-te-timepicker-icon-inline-minute>
                  <span class="${u.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </span>
                </span>
                <button type='button' class='${u.timepickerInlineCurrentButton}' data-te-timepicker-minute data-te-timepicker-current data-te-timepicker-current-inline tabindex="0" data-te-ripple-init>21</button>
                <span class="${u.timepickerInlineIconDown}" data-te-timepicker-icon-inline-minute data-te-timepicker-icon-down>
                  <span class="${u.timepickerInlineIconSvg}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> 
                  </span>
                </span>
              </span>
              </div>
              ${i ? "" : `<div class="${u.timepickerInlineModeWrapper}">
                      <button type='button' class="${u.timepickerInlineModeAm}" data-te-timepicker-am data-te-timepicker-hour-mode tabindex="0" data-te-ripple-init>${h}</button>
                      <button class="${u.timepickerInlineModePm}" data-te-timepicker-hour-mode data-te-timepicker-pm tabindex="0" data-te-ripple-init>${d}</button>
                      <button type='button' class='${u.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>
                    </div>`}
              ${i ? `<button class='${u.timepickerInlineSubmitButton}' data-te-timepicker-submit tabindex="0" data-te-ripple-init>${t}</button>` : ""}
          </div>
        </div>
      </div>
    </div>
</div>`;
        return l ? p : f;
    }, P0 = (i, t, e)=>{
        const { iconSVG: s } = i;
        return `
  <button id="${t}" tabindex="0" type="button" class="${e.timepickerToggleButton}" data-te-toggle="timepicker" data-te-timepicker-toggle-button data-te-timepicker-icon>
    ${s}
  </button>
`;
    }, po = "data-te-timepicker-disabled", _o = "data-te-timepicker-active", gi = (i)=>{
        if (i === "") return;
        let t, e, s, n;
        return Rh(i) ? (t = i.getHours(), n = t, e = i.getMinutes(), t %= 12, n === 0 && t === 0 && (s = "AM"), t = t || 12, s === void 0 && (s = Number(n) >= 12 ? "PM" : "AM"), e = e < 10 ? `0${e}` : e) : ([t, e, s] = j(i, !1), n = t, t %= 12, n === 0 && t === 0 && (s = "AM"), t = t || 12, s === void 0 && (s = Number(n) >= 12 ? "PM" : "AM")), {
            hours: t,
            minutes: e,
            amOrPm: s
        };
    }, Rh = (i)=>i && Object.prototype.toString.call(i) === "[object Date]" && !Number.isNaN(i), Nh = (i)=>{
        if (i === "") return;
        let t, e;
        return Rh(i) ? (t = i.getHours(), e = i.getMinutes()) : [t, e] = j(i, !1), e = Number(e) < 10 ? `0${Number(e)}` : e, {
            hours: t,
            minutes: e
        };
    }, R0 = (i, t, e)=>b.on(document, i, t, ({ target: s })=>{
            if (s.hasAttribute(_o)) return;
            document.querySelectorAll(t).forEach((o)=>{
                o.hasAttribute(_o) && (v.removeClass(o, e.opacity), o.removeAttribute(_o));
            }), v.addClass(s, e.opacity), s.setAttribute(_o, "");
        }), $h = ({ clientX: i, clientY: t, touches: e }, s, n = !1)=>{
        const { left: o, top: r } = s.getBoundingClientRect();
        let a = {};
        return !n || !e ? a = {
            x: i - o,
            y: t - r
        } : n && Object.keys(e).length > 0 && (a = {
            x: e[0].clientX - o,
            y: e[0].clientY - r
        }), a;
    }, go = ()=>navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), j = (i, t = !0)=>t ? i.value.replace(/:/gi, " ").split(" ") : i.replace(/:/gi, " ").split(" "), Bh = (i, t)=>{
        const [e, s, n] = j(i, !1), [o, r, a] = j(t, !1);
        return n === "PM" && a === "AM" || n === a && e > o || s > r;
    }, Hh = ()=>{
        const i = new Date, t = i.getHours(), e = i.getMinutes();
        return `${t}:${e < 10 ? `0${e}` : e}`;
    }, He = (i, t, e)=>{
        if (!t) return i;
        let s = Hh();
        return e && (s = `${gi(s).hours}:${gi(s).minutes} ${gi(s).amOrPm}`), (i !== "" && Bh(s, i) || i === "") && (i = s), i;
    }, Fe = (i, t, e)=>{
        if (!t) return i;
        let s = Hh();
        return e && (s = `${gi(s).hours}:${gi(s).minutes} ${gi(s).amOrPm}`), (i !== "" && !Bh(s, i) || i === "") && (i = s), i;
    }, N0 = ({ format12: i, maxTime: t, minTime: e, disablePast: s, disableFuture: n }, o, r)=>{
        const a = j(o)[1];
        e = He(e, s, i), t = Fe(t, n, i);
        const [l, c, h] = j(t, !1), [d, u, f] = j(e, !1);
        if (h !== void 0 || f !== void 0) return [
            r,
            a
        ];
        if (!(l !== "" && d === "" && Number(r) > Number(l)) && !(l === "" && d !== "" && c === void 0 && u !== "" && Number(r) < Number(d))) return [
            r,
            a
        ];
    }, Fh = (i, t, e, s)=>{
        i.forEach((n)=>{
            t = t === "12" && s ? "0" : t, (n.textContent === "00" || Number(n.textContent === "12" && s ? "0" : n.textContent) > t) && (v.addClass(n, e.tipsDisabled), n.setAttribute(po, ""));
        });
    }, Vh = (i, t, e, s)=>{
        i.forEach((n)=>{
            t = t === "12" && s ? "0" : t, n.textContent !== "00" && Number(n.textContent === "12" && s ? "0" : n.textContent) < Number(t) && (v.addClass(n, e.tipsDisabled), n.setAttribute(po, ""));
        });
    }, Wh = (i, t, e, s)=>{
        if (t === "12" || t === "24") return;
        const n = e ? 12 : 24;
        return s === "max" ? (Number(i) === n ? 0 : Number(i)) > Number(t) : (Number(i) === n ? 0 : Number(i)) < Number(t);
    }, $0 = (i, t, e, s, n, o)=>{
        i.forEach((r)=>{
            (Wh(s, e, o, "max") || Number(r.textContent) > t && Number(s) === Number(e)) && (v.addClass(r, n.tipsDisabled), r.setAttribute(po, ""));
        });
    }, B0 = (i, t, e, s, n, o)=>{
        i.forEach((r)=>{
            (Wh(s, e, o, "min") || Number(r.textContent) < t && Number(s) === Number(e)) && (v.addClass(r, n.tipsDisabled), r.setAttribute(po, ""));
        });
    }, H0 = (i)=>i.startsWith("0") ? Number(i.slice(1)) : Number(i), Ns = "timepicker", H = `data-te-${Ns}`, zh = "[data-te-toggle]", mo = `te.${Ns}`, ue = `.${mo}`, fe = ".data-api", jh = `click${ue}${fe}`, bo = `keydown${ue}${fe}`, Yh = `mousedown${ue}${fe}`, Kh = `mouseup${ue}${fe}`, Uh = `mousemove${ue}${fe}`, Xh = `mouseleave${ue}${fe}`, Gh = `mouseover${ue}${fe}`, qh = `touchmove${ue}${fe}`, Zh = `touchend${ue}${fe}`, Qh = `touchstart${ue}${fe}`, F0 = `[${H}-am]`, V0 = `[${H}-pm]`, W0 = `[${H}-format24]`, vo = `[${H}-current]`, yo = `[${H}-hour-mode]`, z0 = `[${H}-toggle-button]`, ma = `${H}-cancel`, Jh = `${H}-clear`, ba = `${H}-submit`, j0 = `${H}-icon`, va = `${H}-icon-up`, ya = `${H}-icon-down`, Y0 = `${H}-icon-inline-hour`, K0 = `${H}-icon-inline-minute`, td = `${H}-inline-hour-icons`, U0 = `${H}-current-inline`, X0 = "readonly", ed = `${H}-invalid-feedback`, xa = `${H}-is-invalid`, Ve = `${H}-disabled`, J = `${H}-active`, G0 = `${H}-input`, mi = `${H}-clock`, $s = `${H}-clock-inner`, Ea = `${H}-wrapper`, id = `${H}-clock-wrapper`, xo = `${H}-hour`, Ca = `${H}-minute`, Eo = `${H}-tips-element`, ft = `${H}-tips-hours`, vt = `${H}-tips-minutes`, Rt = `${H}-tips-inner`, Co = `${H}-tips-inner-element`, sd = `${H}-middle-dot`, Ta = `${H}-hand-pointer`, Aa = `${H}-circle`, nd = `${H}-modal`, q0 = {
        appendValidationInfo: !0,
        bodyID: "",
        cancelLabel: "Cancel",
        clearLabel: "Clear",
        closeModalOnBackdropClick: !0,
        closeModalOnMinutesClick: !1,
        container: "body",
        defaultTime: "",
        disabled: !1,
        disablePast: !1,
        disableFuture: !1,
        enableValidation: !0,
        focusInputAfterApprove: !1,
        footerID: "",
        format12: !0,
        format24: !1,
        headID: "",
        increment: !1,
        inline: !1,
        invalidLabel: "Invalid Time Format",
        maxTime: "",
        minTime: "",
        modalID: "",
        okLabel: "Ok",
        overflowHidden: !0,
        pickerID: "",
        readOnly: !1,
        showClearBtn: !0,
        switchHoursToMinutesOnClick: !0,
        iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
        withIcon: !0,
        pmLabel: "PM",
        amLabel: "AM",
        animations: !0
    }, Z0 = {
        appendValidationInfo: "boolean",
        bodyID: "string",
        cancelLabel: "string",
        clearLabel: "string",
        closeModalOnBackdropClick: "boolean",
        closeModalOnMinutesClick: "boolean",
        container: "string",
        disabled: "boolean",
        disablePast: "boolean",
        disableFuture: "boolean",
        enableValidation: "boolean",
        footerID: "string",
        format12: "boolean",
        format24: "boolean",
        headID: "string",
        increment: "boolean",
        inline: "boolean",
        invalidLabel: "string",
        modalID: "string",
        okLabel: "string",
        overflowHidden: "boolean",
        pickerID: "string",
        readOnly: "boolean",
        showClearBtn: "boolean",
        switchHoursToMinutesOnClick: "boolean",
        defaultTime: "(string|date|number)",
        iconSVG: "string",
        withIcon: "boolean",
        pmLabel: "string",
        amLabel: "string",
        animations: "boolean"
    }, Q0 = {
        tips: "absolute rounded-[100%] w-[32px] h-[32px] text-center cursor-pointer text-[1.1rem] rounded-[100%] bg-transparent flex justify-center items-center font-light focus:outline-none selection:bg-transparent",
        tipsActive: "text-white bg-[#3b71ca] font-normal",
        tipsDisabled: "text-[#b3afaf] pointer-events-none bg-transparent",
        transform: "transition-[transform,height] ease-in-out duration-[400ms]",
        modal: "z-[1065]",
        clockAnimation: "animate-[show-up-clock_350ms_linear]",
        opacity: "!opacity-100",
        timepickerWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col fixed",
        timepickerContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] min-[320px]:max-[825px]:landscape:rounded-lg",
        timepickerElements: "flex flex-col min-w-[310px] min-h-[325px] bg-white rounded-t-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape:min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
        timepickerHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg pr-[24px] pl-[50px] py-[10px] min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center",
        timepickerHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly",
        timepickerCurrentWrapper: "[direction:ltr] rtl:[direction:rtl]",
        timepickerCurrentButtonWrapper: "relative h-full",
        timepickerCurrentButton: "text-[3.75rem] font-light leading-[1.2] tracking-[-0.00833em] text-white opacity-[.54] border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none ",
        timepickerDot: "font-light leading-[1.2] tracking-[-0.00833em] text-[3.75rem] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal",
        timepickerModeWrapper: "flex flex-col justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
        timepickerModeAm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
        timepickerModePm: "p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none",
        timepickerClockWrapper: "min-w-[310px] max-w-[325px] min-h-[305px] overflow-x-hidden h-full flex justify-center flex-col items-center dark:bg-zinc-500",
        timepickerClock: "relative rounded-[100%] w-[260px] h-[260px] cursor-default my-0 mx-auto bg-[#00000012] dark:bg-zinc-600/50",
        timepickerMiddleDot: "top-1/2 left-1/2 w-[6px] h-[6px] -translate-y-1/2 -translate-x-1/2 rounded-[50%] bg-[#3b71ca] absolute",
        timepickerHandPointer: "bg-[#3b71ca] bottom-1/2 h-2/5 left-[calc(50%-1px)] rtl:!left-auto origin-[center_bottom_0] rtl:!origin-[50%_50%_0] w-[2px] absolute",
        timepickerPointerCircle: "-top-[21px] -left-[15px] w-[4px] border-[14px] border-solid border-[#3b71ca] h-[4px] box-content rounded-[100%] absolute",
        timepickerClockInner: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-[100%]",
        timepickerFooterWrapper: "rounded-b-lg flex justify-between items-center w-full h-[56px] px-[12px] bg-white dark:bg-zinc-500",
        timepickerFooter: "w-full flex justify-between",
        timepickerFooterButton: "text-[0.8rem] min-w-[64px] box-border font-medium leading-[40px] rounded-[10px] tracking-[0.1rem] uppercase text-[#3b71ca] dark:text-white border-none bg-transparent transition-[background-color,box-shadow,border] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[0ms] outline-none py-0 px-[10px] h-[40px] mb-[10px] hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none",
        timepickerInlineWrapper: "touch-none opacity-100 z-[1065] inset-0 bg-[#00000066] h-full flex items-center justify-center flex-col rounded-lg",
        timepickerInlineContainer: "flex items-center justify-center flex-col max-h-[calc(100%-64px)] overflow-y-auto shadow-[0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
        timepickerInlineElements: "flex flex-col min-h-[auto] min-w-[310px] bg-white rounded-[0.6rem] min-[320px]:max-[825px]:landscape:!flex-row min-[320px]:max-[825px]:landscape:rounded-bl-lg min-[320px]:max-[825px]:landscape:min-w-[auto] min-[320px]:max-[825px]:landscape::min-h-[auto] min-[320px]:max-[825px]:landscape:overflow-y-auto justify-around",
        timepickerInlineHead: "bg-[#3b71ca] dark:bg-zinc-700 h-[100px] rounded-t-lg min-[320px]:max-[825px]:landscape:rounded-tr-none min-[320px]:max-[825px]:landscape:rounded-bl-none min-[320px]:max-[825px]:landscape:p-[10px] min-[320px]:max-[825px]:landscape:pr-[10px] min-[320px]:max-[825px]:landscape:h-auto min-[320px]:max-[825px]:landscape:min-h-[305px] flex flex-row items-center justify-center p-0 rounded-b-lg",
        timepickerInlineHeadContent: "min-[320px]:max-[825px]:landscape:flex-col flex w-full justify-evenly items-center",
        timepickerInlineHourWrapper: "relative h-full !opacity-100",
        timepickerCurrentMinuteWrapper: "relative h-full",
        timepickerInlineIconUp: "absolute fill-white -top-[35px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
        timepickerInlineIconSvg: "h-4 w-4",
        timepickerInlineCurrentButton: "font-light leading-[1.2] tracking-[-0.00833em] text-white border-none bg-transparent p-0 min-[320px]:max-[825px]:landscape:text-5xl min-[320px]:max-[825px]:landscape:font-normal !opacity-100 cursor-pointer focus:bg-[#00000026] hover:outline-none focus:outline-none text-[2.5rem] hover:bg-[unset]",
        timepickerInlineIconDown: "absolute fill-white -bottom-[47px] opacity-0 hover:opacity-100 transition-all duration-200 ease-[ease] cursor-pointer -translate-x-1/2 -translate-y-1/2 left-1/2 w-[30px] h-[30px] flex justify-center items-center",
        timepickerInlineDot: "font-light leading-[1.2] tracking-[-0.00833em] opacity-[.54] border-none bg-transparent p-0 text-white min-[320px]:max-[825px]:landscape:text-[3rem] min-[320px]:max-[825px]:landscape:font-normal text-[2.5rem]",
        timepickerInlineModeWrapper: "flex justify-center text-[18px] text-[#ffffff8a] min-[320px]:max-[825px]:landscape:!justify-around min-[320px]:max-[825px]:landscape:!flex-row",
        timepickerInlineModeAm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer mr-2 ml-6",
        timepickerInlineModePm: "hover:bg-[#00000026] hover:outline-none focus:bg-[#00000026] focus:outline-none p-0 bg-transparent border-none text-white opacity-[.54] cursor-pointer",
        timepickerInlineSubmitButton: "hover:bg-[#00000014] focus:bg-[#00000014] focus:outline-none text-[0.8rem] box-border font-medium leading-[40px] tracking-[.1rem] uppercase border-none bg-transparent [transition:background-color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,box-shadow_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,border_250ms_cubic-bezier(0.4,0,0.2,1)_0ms] outline-none rounded-[100%] h-[48px] min-w-[48px] inline-block ml-[30px] text-white py-1 px-2 mb-0",
        timepickerToggleButton: "h-4 w-4 ml-auto absolute outline-none border-none bg-transparent right-1.5 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer hover:text-[#3b71ca] focus:text-[#3b71ca] dark:hover:text-[#3b71ca] dark:focus:text-[#3b71ca] dark:text-white"
    }, J0 = {
        tips: "string",
        tipsActive: "string",
        tipsDisabled: "string",
        transform: "string",
        modal: "string",
        clockAnimation: "string",
        opacity: "string",
        timepickerWrapper: "string",
        timepickerContainer: "string",
        timepickerElements: "string",
        timepickerHead: "string",
        timepickerHeadContent: "string",
        timepickerCurrentWrapper: "string",
        timepickerCurrentButtonWrapper: "string",
        timepickerCurrentButton: "string",
        timepickerDot: "string",
        timepickerModeWrapper: "string",
        timepickerModeAm: "string",
        timepickerModePm: "string",
        timepickerClockWrapper: "string",
        timepickerClock: "string",
        timepickerMiddleDot: "string",
        timepickerHandPointer: "string",
        timepickerPointerCircle: "string",
        timepickerClockInner: "string",
        timepickerFooterWrapper: "string",
        timepickerFooterButton: "string",
        timepickerInlineWrapper: "string",
        timepickerInlineContainer: "string",
        timepickerInlineElements: "string",
        timepickerInlineHead: "string",
        timepickerInlineHeadContent: "string",
        timepickerInlineHourWrapper: "string",
        timepickerCurrentMinuteWrapper: "string",
        timepickerInlineIconUp: "string",
        timepickerInlineIconSvg: "string",
        timepickerInlineCurrentButton: "string",
        timepickerInlineIconDown: "string",
        timepickerInlineDot: "string",
        timepickerInlineModeWrapper: "string",
        timepickerInlineModeAm: "string",
        timepickerInlineModePm: "string",
        timepickerInlineSubmitButton: "string",
        timepickerToggleButton: "string"
    };
    class od {
        constructor(t, e = {}, s){
            Ee(this, "_toggleAmPm", (t)=>{
                t === "PM" ? (this._isPmEnabled = !0, this._isAmEnabled = !1) : t === "AM" && (this._isPmEnabled = !1, this._isAmEnabled = !0);
            });
            Ee(this, "_toggleBackgroundColorCircle", (t)=>{
                if (this._modal.querySelector(`${t}[${J}]`) !== null) {
                    v.addStyle(this._circle, {
                        backgroundColor: "#1976d2"
                    });
                    return;
                }
                v.addStyle(this._circle, {
                    backgroundColor: "transparent"
                });
            });
            Ee(this, "_toggleClassActive", (t, { textContent: e }, s)=>{
                const n = [
                    ...t
                ].find((o)=>Number(o) === Number(e));
                return s.forEach((o)=>{
                    if (!o.hasAttribute(Ve)) {
                        if (o.textContent === n) {
                            v.addClass(o, this._classes.tipsActive), o.setAttribute(J, "");
                            return;
                        }
                        v.removeClass(o, this._classes.tipsActive), o.removeAttribute(J);
                    }
                });
            });
            Ee(this, "_makeMinutesDegrees", (t, e)=>{
                const { increment: s } = this._options;
                return t < 0 ? (e = Math.round(360 + t / 6) % 60, t = 360 + Math.round(t / 6) * 6) : (e = Math.round(t / 6) % 60, t = Math.round(t / 6) * 6), s && (t = Math.round(t / 30) * 30, e = Math.round(t / 6) * 6 / 6, e === 60 && (e = "00")), t >= 360 && (t = 0), {
                    degrees: t,
                    minute: e,
                    addDegrees: s ? 30 : 6
                };
            });
            Ee(this, "_makeHourDegrees", (t, e, s)=>{
                if (t) return this._hasTargetInnerClass(t) ? e < 0 ? (s = Math.round(360 + e / 30) % 24, e = 360 + e) : (s = Math.round(e / 30) + 12, s === 12 && (s = "00")) : e < 0 ? (s = Math.round(360 + e / 30) % 12, e = 360 + e) : (s = Math.round(e / 30) % 12, (s === 0 || s > 12) && (s = 12)), e >= 360 && (e = 0), {
                    degrees: e,
                    hour: s,
                    addDegrees: 30
                };
            });
            Ee(this, "_makeInnerHoursDegrees", (t, e)=>(t < 0 ? (e = Math.round(360 + t / 30) % 24, t = 360 + t) : (e = Math.round(t / 30) + 12, e === 12 && (e = "00")), {
                    degrees: t,
                    hour: e,
                    addDegrees: 30
                }));
            Ee(this, "_getAppendClock", (t = [], e = `[${mi}]`, s)=>{
                let { minTime: n, maxTime: o } = this._options;
                const { inline: r, format12: a, disablePast: l, disableFuture: c } = this._options;
                n = He(n, l, a), o = Fe(o, c, a);
                const [h, d, u] = j(o, !1), [f, p, _] = j(n, !1);
                !r && a && this._isInvalidTimeFormat && !this._AM.hasAttribute(J) && (v.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(J, ""));
                const m = g.findOne(e), y = 360 / t.length;
                function x(A) {
                    return A * (Math.PI / 180);
                }
                if (m === null) return;
                const E = (m.offsetWidth - 32) / 2, C = (m.offsetHeight - 32) / 2, T = E - 4;
                setTimeout(()=>{
                    let A;
                    a && (A = g.findOne(`${yo}[${J}]`).textContent), this._handleDisablingTipsMinTime(A, _, p, f), this._handleDisablingTipsMaxTime(A, u, d, h);
                }, 0), [
                    ...t
                ].forEach((A, w)=>{
                    const S = x(w * y), k = z("span"), D = z("span");
                    D.innerHTML = A, v.addClass(k, this._classes.tips), k.setAttribute(s, "");
                    const O = k.offsetWidth, M = k.offsetHeight;
                    return v.addStyle(k, {
                        left: `${E + Math.sin(S) * T - O}px`,
                        bottom: `${C + Math.cos(S) * T - M}px`
                    }), t.includes("05") && k.setAttribute(vt, ""), t.includes("13") ? D.setAttribute(Co, "") : D.setAttribute(Eo, ""), k.appendChild(D), m.appendChild(k);
                });
            });
            this._element = t, this._element && P.setData(t, mo, this), this._document = document, this._options = this._getConfig(e), this._classes = this._getClasses(s), this._currentTime = null, this._toggleButtonId = se("timepicker-toggle-"), this.hoursArray = [
                "12",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11"
            ], this.innerHours = [
                "00",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23"
            ], this.minutesArray = [
                "00",
                "05",
                "10",
                "15",
                "20",
                "25",
                "30",
                "35",
                "40",
                "45",
                "50",
                "55"
            ], this.input = g.findOne("input", this._element), this.dataWithIcon = t.dataset.withIcon, this.dataToggle = t.dataset.toggle, this.customIcon = g.findOne(z0, this._element), this._checkToggleButton(), this.inputFormatShow = g.findOne(W0, this._element), this.inputFormat = this.inputFormatShow === null ? "" : Object.values(this.inputFormatShow.dataset)[0], this.elementToggle = g.findOne(zh, this._element), this.toggleElement = Object.values(t.querySelector(zh).dataset)[0], this._hour = null, this._minutes = null, this._AM = null, this._PM = null, this._wrapper = null, this._modal = null, this._hand = null, this._circle = null, this._focusTrap = null, this._popper = null, this._interval = null, this._inputValue = this._options.defaultTime !== "" ? this._options.defaultTime : this.input.value, this._options.format24 && (this._options.format12 = !1, this._currentTime = Nh(this._inputValue)), this._options.format12 && (this._options.format24 = !1, this._currentTime = gi(this._inputValue)), this._options.readOnly && this.input.setAttribute(X0, !0), this.inputFormat === "true" && this.inputFormat !== "" && (this._options.format12 = !1, this._options.format24 = !0, this._currentTime = Nh(this._inputValue)), this._animations = !window.matchMedia("(prefers-reduced-motion: reduce)").matches && this._options.animations, this.init(), this._isHours = !0, this._isMinutes = !1, this._isInvalidTimeFormat = !1, this._isMouseMove = !1, this._isInner = !1, this._isAmEnabled = !1, this._isPmEnabled = !1, this._options.format12 && !this._options.defaultTime && (this._isPmEnabled = !0), this._objWithDataOnChange = {
                degrees: null
            }, this._scrollBar = new Es;
        }
        static get NAME() {
            return Ns;
        }
        init() {
            const { format12: t, format24: e, enableValidation: s } = this._options;
            let n, o, r;
            if (this.input.setAttribute(G0, ""), this._currentTime !== void 0) {
                const { hours: a, minutes: l, amOrPm: c } = this._currentTime;
                n = Number(a) < 10 ? 0 : "", o = `${n}${Number(a)}:${l}`, r = c, t ? this.input.value = `${o} ${r}` : e && (this.input.value = `${o}`);
            } else n = "", o = "", r = "", this.input.value = "";
            this.input.value.length > 0 && this.input.value !== "" && (this.input.setAttribute(J, ""), b.trigger(this.input, "input")), !(this._options === null && this._element === null) && (s && this._getValidate("keydown change blur focus"), this._handleOpen(), this._listenToToggleKeydown());
        }
        dispose() {
            this._removeModal(), this._element !== null && P.removeData(this._element, mo), setTimeout(()=>{
                this._element = null, this._options = null, this.input = null, this._focusTrap = null;
            }, 350), b.off(this._document, "click", `[data-te-toggle='${this.toggleElement}']`), b.off(this._element, "keydown", `[data-te-toggle='${this.toggleElement}']`);
        }
        update(t = {}) {
            this._options = this._getConfig({
                ...this._options,
                ...t
            });
        }
        _checkToggleButton() {
            this.customIcon === null && (this.dataWithIcon !== void 0 && (this._options.withIcon = null, this.dataWithIcon === "true" && this._appendToggleButton(this._options)), this._options.withIcon && this._appendToggleButton(this._options));
        }
        _appendToggleButton() {
            const t = P0(this._options, this._toggleButtonId, this._classes);
            this.input.insertAdjacentHTML("afterend", t);
        }
        _getDomElements() {
            this._hour = g.findOne(`[${xo}]`), this._minutes = g.findOne(`[${Ca}]`), this._AM = g.findOne(F0), this._PM = g.findOne(V0), this._wrapper = g.findOne(`[${Ea}]`), this._modal = g.findOne(`[${nd}]`), this._hand = g.findOne(`[${Ta}]`), this._circle = g.findOne(`[${Aa}]`), this._clock = g.findOne(`[${mi}]`), this._clockInner = g.findOne(`[${$s}]`);
        }
        _handlerMaxMinHoursOptions(t, e, s, n, o, r) {
            if (!e && !s) return !0;
            const { format24: a, format12: l, disablePast: c, disableFuture: h } = this._options, { _isAmEnabled: d, _isPmEnabled: u } = this, f = r.keyCode, p = r.target.hasAttribute($s) || r.target.hasAttribute(Rt) || r.target.hasAttribute(Co);
            s = He(s, c, l), e = Fe(e, h, l), typeof e != "number" && (e = j(e, !1)[0]);
            const _ = e !== "" ? e * 30 : "", m = s !== "" ? s * 30 : "";
            t < 0 && (t = 360 + t), t = t === 360 ? 0 : t;
            const y = ()=>{
                const w = document.querySelectorAll(`[${Eo}]`), S = document.querySelectorAll(`[${Co}]`), k = H0(this._hour.innerText);
                let D, O, M;
                return f === Tt ? O = 1 : f === ut && (O = -1), k === 12 && f === Tt ? M = 1 : k === 0 && f === Tt ? M = 13 : k === 0 && f === ut ? M = 23 : k === 13 && f === ut ? M = 0 : k === 1 && f === ut ? M = 12 : M = k + O, w.forEach((L)=>{
                    Number(L.textContent) === M && (D = L);
                }), S.forEach((L)=>{
                    Number(L.textContent) === M && (D = L);
                }), !D.parentElement.hasAttribute(Ve);
            }, x = ()=>{
                const w = s !== "" && s > 12 ? (s - 12) * 30 : "", S = e !== "" && e > 12 ? (e - 12) * 30 : "";
                if (!(w && t < w || S && t > S || e && e < 12)) return !0;
            };
            if (a && r.type !== "keydown" && p) return x();
            if (r.type === "keydown") return y();
            const E = !o || o === "PM" && u || s !== "" && o === "AM" && d, C = !n || n === "PM" && u || e !== "" && n === "AM" && d, T = ()=>{
                const w = m === 360 && l ? 0 : m;
                if (s) {
                    if (o === "PM" && d || E && t < w) return;
                } else return !0;
                return !0;
            }, A = ()=>{
                const w = _ === 360 && l ? 0 : _;
                if (e) {
                    if (n === "AM" && u || C && t > w) return;
                } else return !0;
                return !0;
            };
            return T() && A();
        }
        _handleKeyboard() {
            b.on(this._document, bo, "", (t)=>{
                let e, s, n;
                const { increment: o, maxTime: r, minTime: a, format12: l, disablePast: c, disableFuture: h } = this._options;
                let d = j(a, !1)[0], u = j(r, !1)[0];
                const f = j(a, !1)[2], p = j(r, !1)[2];
                d = He(d, c, l), u = Fe(u, h, l), typeof u != "number" && (u = j(u, !1)[0]);
                const _ = g.findOne(`[${vt}]`) === null, m = g.findOne(`[${Rt}]`) !== null, y = Number(this._hand.style.transform.replace(/[^\d-]/g, "")), x = g.find(`[${vt}]`, this._modal), E = g.find(`[${ft}]`, this._modal), C = g.find(`[${Rt}]`, this._modal);
                let T = this._makeHourDegrees(t.target, y, e).hour;
                const { degrees: A, addDegrees: w } = this._makeHourDegrees(t.target, y, e);
                let { minute: S, degrees: k } = this._makeMinutesDegrees(y, s);
                const D = this._makeMinutesDegrees(y, s).addDegrees;
                let { hour: O } = this._makeInnerHoursDegrees(y, n);
                if (t.keyCode === ro) {
                    const M = g.findOne(`[${ma}]`, this._modal);
                    b.trigger(M, "click");
                } else if (_) {
                    if (m && (t.keyCode === Qi && (this._isInner = !1, v.addStyle(this._hand, {
                        height: "calc(40% + 1px)"
                    }), this._hour.textContent = this._setHourOrMinute(T > 12 ? 1 : T), this._toggleClassActive(this.hoursArray, this._hour, E), this._toggleClassActive(this.innerHours, this._hour, C)), t.keyCode === Zi && (this._isInner = !0, v.addStyle(this._hand, {
                        height: "21.5%"
                    }), this._hour.textContent = this._setHourOrMinute(O >= 24 || O === "00" ? 0 : O), this._toggleClassActive(this.innerHours, this._hour, C), this._toggleClassActive(this.hoursArray, this._hour - 1, E))), t.keyCode === Tt) {
                        if (!this._handlerMaxMinHoursOptions(A + 30, u, d, p, f, t)) return;
                        v.addStyle(this._hand, {
                            transform: `rotateZ(${A + w}deg)`
                        }), this._isInner ? (O += 1, O === 24 ? O = 0 : (O === 25 || O === "001") && (O = 13), this._hour.textContent = this._setHourOrMinute(O), this._toggleClassActive(this.innerHours, this._hour, C)) : (T += 1, this._hour.textContent = this._setHourOrMinute(T > 12 ? 1 : T), this._toggleClassActive(this.hoursArray, this._hour, E));
                    }
                    if (t.keyCode === ut) {
                        if (!this._handlerMaxMinHoursOptions(A - 30, u, d, p, f, t)) return;
                        v.addStyle(this._hand, {
                            transform: `rotateZ(${A - w}deg)`
                        }), this._isInner ? (O -= 1, O === 12 ? O = 0 : O === -1 && (O = 23), this._hour.textContent = this._setHourOrMinute(O), this._toggleClassActive(this.innerHours, this._hour, C)) : (T -= 1, this._hour.textContent = this._setHourOrMinute(T === 0 ? 12 : T), this._toggleClassActive(this.hoursArray, this._hour, E));
                    }
                } else t.keyCode === Tt && (k += D, v.addStyle(this._hand, {
                    transform: `rotateZ(${k}deg)`
                }), S += 1, o && (S += 4, S === "0014" && (S = 5)), this._minutes.textContent = this._setHourOrMinute(S > 59 ? 0 : S), this._toggleClassActive(this.minutesArray, this._minutes, x), this._toggleBackgroundColorCircle(`[${vt}]`)), t.keyCode === ut && (k -= D, v.addStyle(this._hand, {
                    transform: `rotateZ(${k}deg)`
                }), o ? S -= 5 : S -= 1, S === -1 ? S = 59 : S === -5 && (S = 55), this._minutes.textContent = this._setHourOrMinute(S), this._toggleClassActive(this.minutesArray, this._minutes, x), this._toggleBackgroundColorCircle(`[${vt}]`));
            });
        }
        _setActiveClassToTipsOnOpen(t, ...e) {
            if (!this._isInvalidTimeFormat) {
                if (this._options.format24) {
                    const s = g.find(`[${ft}]`, this._modal), n = g.find(`[${Rt}]`, this._modal);
                    this._addActiveClassToTip(s, t), this._addActiveClassToTip(n, t);
                } else {
                    [
                        ...e
                    ].filter((n)=>(n === "PM" ? (v.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(J, "")) : n === "AM" ? (v.addClass(this._AM, this._classes.opacity), this._AM.setAttribute(J, "")) : (v.removeClass(this._AM, this._classes.opacity), v.removeClass(this._PM, this._classes.opacity), this._AM.removeAttribute(J), this._PM.removeAttribute(J)), n));
                    const s = g.find(`[${ft}]`, this._modal);
                    this._addActiveClassToTip(s, t);
                }
            }
        }
        _setTipsAndTimesDependOnInputValue(t, e) {
            const { inline: s, format12: n } = this._options;
            if (this._isInvalidTimeFormat) this._hour.textContent = "12", this._minutes.textContent = "00", s || v.addStyle(this._hand, {
                transform: "rotateZ(0deg)"
            }), n && (v.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(J, ""));
            else {
                const o = t > 12 ? t * 30 - 360 : t * 30;
                this._hour.textContent = t, this._minutes.textContent = e, s || (v.addStyle(this._hand, {
                    transform: `rotateZ(${o}deg)`
                }), v.addStyle(this._circle, {
                    backgroundColor: "#1976d2"
                }), (Number(t) > 12 || t === "00") && v.addStyle(this._hand, {
                    height: "21.5%"
                }));
            }
        }
        _listenToToggleKeydown() {
            b.on(this._element, "keydown", `[data-te-toggle='${this.toggleElement}']`, (t)=>{
                t.keyCode === Pt && (t.preventDefault(), b.trigger(this.elementToggle, "click"));
            });
        }
        _handleOpen() {
            const t = this._getContainer();
            si.on(this._element, "click", `[data-te-toggle='${this.toggleElement}']`, (e)=>{
                if (this._options === null) return;
                const s = v.getDataAttribute(this.input, "toggle") !== null ? 200 : 0;
                setTimeout(()=>{
                    v.addStyle(this.elementToggle, {
                        pointerEvents: "none"
                    }), this.elementToggle.blur();
                    let n;
                    j(this.input)[0] === "" ? n = [
                        "12",
                        "00",
                        "PM"
                    ] : n = j(this.input);
                    const { modalID: o, inline: r, format12: a } = this._options, [l, c, h] = n, d = z("div");
                    if ((Number(l) > 12 || l === "00") && (this._isInner = !0), this.input.blur(), e.target.blur(), d.innerHTML = L0(this._options, this._classes), v.addClass(d, this._classes.modal), d.setAttribute(nd, ""), d.setAttribute("role", "dialog"), d.setAttribute("tabIndex", "-1"), d.setAttribute("id", o), r ? (this._popper = Fi(this.input, d, {
                        placement: "bottom-start"
                    }), t.appendChild(d)) : (t.appendChild(d), this._scrollBar.hide()), this._getDomElements(), this._animations ? this._toggleBackdropAnimation() : v.addClass(this._wrapper, this._classes.opacity), this._setActiveClassToTipsOnOpen(l, c, h), this._appendTimes(), this._setActiveClassToTipsOnOpen(l, c, h), this._setTipsAndTimesDependOnInputValue(l, c), this.input.value === "") {
                        const u = g.find(`[${ft}]`, this._modal);
                        a && (v.addClass(this._PM, this._classes.opacity), this._PM.setAttribute(J, "")), this._hour.textContent = "12", this._minutes.textContent = "00", this._addActiveClassToTip(u, Number(this._hour.textContent));
                    }
                    if (this._handleSwitchTimeMode(), this._handleOkButton(), this._handleClose(), r) this._handleHoverInlineBtn(), this._handleDocumentClickInline(), this._handleInlineClicks();
                    else {
                        this._handleSwitchHourMinute(), this._handleClockClick(), this._handleKeyboard();
                        const u = document.querySelector(`${vo}[${J}]`);
                        v.addClass(u, this._classes.opacity), v.addStyle(this._hour, {
                            pointerEvents: "none"
                        }), v.addStyle(this._minutes, {
                            pointerEvents: ""
                        });
                    }
                    this._focusTrap = new Cs(this._wrapper, {
                        event: "keydown",
                        condition: ({ key: u })=>u === "Tab"
                    }), this._focusTrap.trap();
                }, s);
            });
        }
        _handleInlineClicks() {
            let t, e;
            const s = (u)=>{
                let f = u;
                return f > 59 ? f = 0 : f < 0 && (f = 59), f;
            }, n = (u)=>{
                let f = u;
                return this._options.format24 ? (f > 24 ? f = 1 : f < 0 && (f = 23), f > 23 && (f = 0)) : (f > 12 ? f = 1 : f < 1 && (f = 12), f > 12 && (f = 1)), f;
            }, o = (u)=>{
                const f = n(u);
                this._hour.textContent = this._setHourOrMinute(f);
            }, r = (u)=>{
                const f = s(u);
                this._minutes.textContent = this._setHourOrMinute(f);
            }, a = ()=>{
                t += 1, o(t);
            }, l = ()=>{
                e += 1, r(e);
            }, c = ()=>{
                t -= 1, o(t);
            }, h = ()=>{
                e -= 1, r(e);
            }, d = (u)=>{
                clearInterval(this._interval), this._interval = setInterval(u, 100);
            };
            si.on(this._modal, "click mousedown mouseup touchstart touchend contextmenu", `[${va}], [${ya}]`, (u)=>{
                t = Number(this._hour.textContent), e = Number(this._minutes.textContent);
                const { target: f, type: p } = u, _ = p === "mousedown" || p === "touchstart";
                f.closest(`[${va}]`) ? f.closest(`[${va}]`).parentNode.hasAttribute(td) ? _ ? d(a) : p === "mouseup" || p === "touchend" || p === "contextmenu" ? clearInterval(this._interval) : a() : _ ? d(l) : p === "mouseup" || p === "touchend" || p === "contextmenu" ? clearInterval(this._interval) : l() : f.closest(`[${ya}]`) && (f.closest(`[${ya}]`).parentNode.hasAttribute(td) ? _ ? d(c) : p === "mouseup" || p === "touchend" ? clearInterval(this._interval) : c() : _ ? d(h) : p === "mouseup" || p === "touchend" ? clearInterval(this._interval) : h());
            }), b.on(window, bo, (u)=>{
                const f = u.code, p = document.activeElement.hasAttribute(xo), _ = document.activeElement.hasAttribute(Ca), m = document.activeElement === document.body;
                switch(t = Number(this._hour.textContent), e = Number(this._minutes.textContent), f){
                    case "ArrowUp":
                        u.preventDefault(), m || p ? (this._hour.focus(), a()) : _ && l();
                        break;
                    case "ArrowDown":
                        u.preventDefault(), m || p ? (this._hour.focus(), c()) : _ && h();
                        break;
                }
            });
        }
        _handleClose() {
            b.on(this._modal, "click", `[${Ea}], [${ma}], [${Jh}]`, ({ target: t })=>{
                const { closeModalOnBackdropClick: e } = this._options, s = ()=>{
                    var n;
                    v.addStyle(this.elementToggle, {
                        pointerEvents: "auto"
                    }), this._animations && this._toggleBackdropAnimation(!0), this._removeModal(), (n = this._focusTrap) == null || n.disable(), this._focusTrap = null, this.elementToggle ? this.elementToggle.focus() : this.input && this.input.focus();
                };
                if (t.hasAttribute(Jh)) {
                    this._toggleAmPm("PM"), this.input.value = "", this.input.removeAttribute(J);
                    let n;
                    j(this.input)[0] === "" ? n = [
                        "12",
                        "00",
                        "PM"
                    ] : n = j(this.input);
                    const [o, r, a] = n;
                    this._setTipsAndTimesDependOnInputValue("12", "00"), this._setActiveClassToTipsOnOpen(o, r, a), this._hour.click();
                } else (t.hasAttribute(ma) || t.hasAttribute(ba) || t.hasAttribute(Ea) && e) && s();
            });
        }
        showValueInput() {
            return this.input.value;
        }
        _handleOkButton() {
            si.on(this._modal, "click", `[${ba}]`, ()=>{
                let { maxTime: t, minTime: e } = this._options;
                const { format12: s, format24: n, readOnly: o, focusInputAfterApprove: r, disablePast: a, disableFuture: l } = this._options, c = this._document.querySelector(`${yo}[${J}]`), h = `${this._hour.textContent}:${this._minutes.textContent}`, d = Number(this._hour.textContent), u = d === 12 && s ? 0 : d, f = Number(this._minutes.textContent);
                e = He(e, a, s), t = Fe(t, l, s);
                let [p, _, m] = j(t, !1), [y, x, E] = j(e, !1);
                y = y === "12" && s ? "00" : y, p = p === "12" && s ? "00" : p;
                const C = u < Number(y), T = u > Number(p);
                let A = !0;
                c && (A = m === c.textContent);
                let w = !0;
                c && (w = E === c.textContent);
                const S = f > _ && u === Number(p), k = f < x && u === Number(y);
                if (this.input.setAttribute(J, ""), v.addStyle(this.elementToggle, {
                    pointerEvents: "auto"
                }), t !== "") {
                    if (A && (T || S)) return;
                    if (m === "AM" && c.textContent === "PM") return;
                }
                e !== "" && (w && (C || k) || E === "PM" && c.textContent === "AM") || N0(this._options, this.input, this._hour.textContent) !== void 0 && (this._isInvalidTimeFormat && this.input.removeAttribute(xa), !o && r && this.input.focus(), v.addStyle(this.elementToggle, {
                    pointerEvents: "auto"
                }), n ? this.input.value = h : c === null ? this.input.value = `${h} PM` : this.input.value = `${h} ${c.textContent}`, this._animations && this._toggleBackdropAnimation(!0), this._removeModal(), b.trigger(this.input, "input.te.timepicker"), b.trigger(this.input, "input"));
            });
        }
        _handleHoverInlineBtn() {
            si.on(this._modal, "mouseover mouseleave", `[${U0}]`, ({ type: t, target: e })=>{
                const s = g.find(`[${Y0}]`, this._modal), n = g.find(`[${K0}]`, this._modal), o = (l, c)=>l.forEach((h)=>{
                        if (c) {
                            v.addClass(h, this._classes.opacity), h.setAttribute(J, "");
                            return;
                        }
                        v.removeClass(h, this._classes.opacity), h.removeAttribute(J);
                    }), a = e.hasAttribute(xo) ? s : n;
                o(a, t === "mouseover");
            });
        }
        _handleDocumentClickInline() {
            b.on(document, jh, ({ target: t })=>{
                if (this._modal && !this._modal.contains(t) && !t.hasAttribute(j0)) {
                    if (clearInterval(this._interval), v.addStyle(this.elementToggle, {
                        pointerEvents: "auto"
                    }), this._removeModal(), !this._animations) return;
                    this._toggleBackdropAnimation(!0);
                }
            });
        }
        _handleSwitchHourMinute() {
            R0("click", vo, this._classes), b.on(this._modal, "click", vo, ()=>{
                const { format24: t } = this._options, e = g.find(vo, this._modal), s = g.find(`[${vt}]`, this._modal), n = g.find(`[${ft}]`, this._modal), o = g.find(`[${Rt}]`, this._modal), r = Number(this._hour.textContent), a = Number(this._minutes.textContent), l = (c, h)=>{
                    n.forEach((u)=>u.remove()), s.forEach((u)=>u.remove()), v.addClass(this._hand, this._classes.transform), setTimeout(()=>{
                        v.removeClass(this._hand, this._classes.transform);
                    }, 401), this._getAppendClock(c, `[${mi}]`, h);
                    const d = ()=>{
                        const u = g.find(`[${ft}]`, this._modal), f = g.find(`[${vt}]`, this._modal);
                        this._addActiveClassToTip(u, r), this._addActiveClassToTip(f, a);
                    };
                    if (!t) setTimeout(()=>{
                        d();
                    }, 401);
                    else {
                        const u = g.find(`[${Rt}]`, this._modal);
                        setTimeout(()=>{
                            this._addActiveClassToTip(u, r), d();
                        }, 401);
                    }
                };
                e.forEach((c)=>{
                    c.hasAttribute(J) && (c.hasAttribute(Ca) ? (v.addClass(this._hand, this._classes.transform), v.addStyle(this._hand, {
                        transform: `rotateZ(${this._minutes.textContent * 6}deg)`,
                        height: "calc(40% + 1px)"
                    }), t && o.length > 0 && o.forEach((h)=>h.remove()), l(this.minutesArray, vt), this._hour.style.pointerEvents = "", this._minutes.style.pointerEvents = "none") : c.hasAttribute(xo) && (v.addStyle(this._hand, {
                        transform: `rotateZ(${this._hour.textContent * 30}deg)`
                    }), Number(this._hour.textContent) > 12 ? (v.addStyle(this._hand, {
                        transform: `rotateZ(${this._hour.textContent * 30 - 360}deg)`,
                        height: "21.5%"
                    }), Number(this._hour.textContent) > 12 && v.addStyle(this._hand, {
                        height: "21.5%"
                    })) : v.addStyle(this._hand, {
                        height: "calc(40% + 1px)"
                    }), t && this._getAppendClock(this.innerHours, `[${$s}]`, Rt), o.length > 0 && o.forEach((h)=>h.remove()), l(this.hoursArray, ft), v.addStyle(this._hour, {
                        pointerEvents: "none"
                    }), v.addStyle(this._minutes, {
                        pointerEvents: ""
                    })));
                });
            });
        }
        _handleDisablingTipsMaxTime(t, e, s, n) {
            if (!this._options.maxTime && !this._options.disableFuture) return;
            const o = g.find(`[${ft}]`), r = g.find(`[${Rt}]`), a = g.find(`[${vt}]`);
            if (!e || e === t) {
                Fh(r, n, this._classes, this._options.format12), Fh(o, n, this._classes, this._options.format12), $0(a, s, n, this._hour.textContent, this._classes, this._options.format12);
                return;
            }
            e === "AM" && t === "PM" && (o.forEach((l)=>{
                v.addClass(l, this._classes.tipsDisabled), l.setAttribute(Ve, "");
            }), a.forEach((l)=>{
                v.addClass(l, this._classes.tipsDisabled), l.setAttribute(Ve, "");
            }));
        }
        _handleDisablingTipsMinTime(t, e, s, n) {
            if (!this._options.minTime && !this._options.disablePast) return;
            const o = g.find(`[${ft}]`), r = g.find(`[${Rt}]`), a = g.find(`[${vt}]`);
            !e || e === t ? (Vh(o, n, this._classes, this._options.format12), Vh(r, n, this._classes, this._options.format12), B0(a, s, n, this._hour.textContent, this._classes, this._options.format12)) : e === "PM" && t === "AM" && (o.forEach((l)=>{
                v.addClass(l, this._classes.tipsDisabled), l.setAttribute(Ve, "");
            }), a.forEach((l)=>{
                v.addClass(l, this._classes.tipsDisabled), l.setAttribute(Ve, "");
            }));
        }
        _handleSwitchTimeMode() {
            b.on(document, "click", yo, ({ target: t })=>{
                let { maxTime: e, minTime: s } = this._options;
                const { disablePast: n, disableFuture: o, format12: r } = this._options;
                s = He(s, n, r), e = Fe(e, o, r);
                const [a, l, c] = j(e, !1), [h, d, u] = j(s, !1), f = g.find(`[${ft}]`), p = g.find(`[${vt}]`);
                (()=>{
                    f.forEach((m)=>{
                        v.removeClass(m, this._classes.tipsDisabled), m.removeAttribute(Ve);
                    }), p.forEach((m)=>{
                        v.removeClass(m, this._classes.tipsDisabled), m.removeAttribute(Ve);
                    });
                })(), this._handleDisablingTipsMinTime(t.textContent, u, d, h), this._handleDisablingTipsMaxTime(t.textContent, c, l, a), this._toggleAmPm(t.textContent), t.hasAttribute(J) || (g.find(yo).forEach((y)=>{
                    y.hasAttribute(J) && (v.removeClass(y, this._classes.opacity), y.removeAttribute(J));
                }), v.addClass(t, this._classes.opacity), t.setAttribute(J, ""));
            });
        }
        _handleClockClick() {
            let { maxTime: t, minTime: e } = this._options;
            const { disablePast: s, disableFuture: n, format12: o } = this._options;
            e = He(e, s, o), t = Fe(t, n, o);
            const r = j(t, !1)[2], a = j(e, !1)[2], l = j(t, !1)[0], c = j(e, !1)[0], h = g.findOne(`[${id}]`);
            si.on(document, `${Yh} ${Kh} ${Uh} ${Xh} ${Gh} ${Qh} ${qh} ${Zh}`, "", (d)=>{
                go() || d.preventDefault();
                const { type: u, target: f } = d, { closeModalOnMinutesClick: p, switchHoursToMinutesOnClick: _ } = this._options, m = g.findOne(`[${vt}]`, this._modal) !== null, y = g.findOne(`[${ft}]`, this._modal) !== null, x = g.findOne(`[${Rt}]`, this._modal) !== null, E = g.find(`[${vt}]`, this._modal), C = $h(d, h), T = h.offsetWidth / 2;
                let A = Math.atan2(C.y - T, C.x - T);
                if (go()) {
                    const D = $h(d, h, !0);
                    A = Math.atan2(D.y - T, D.x - T);
                }
                let w = null, S = null, k = null;
                if (u === "mousedown" || u === "mousemove" || u === "touchmove" || u === "touchstart") (u === "mousedown" || u === "touchstart" || u === "touchmove") && (this._hasTargetInnerClass(f) || f.hasAttribute(id) || f.hasAttribute(mi) || f.hasAttribute(vt) || f.hasAttribute(ft) || f.hasAttribute(Aa) || f.hasAttribute(Ta) || f.hasAttribute(sd) || f.hasAttribute(Eo)) && (this._isMouseMove = !0, go() && d.touches && (w = d.touches[0].clientX, S = d.touches[0].clientY, k = document.elementFromPoint(w, S)));
                else if (u === "mouseup" || u === "touchend") {
                    if (this._isMouseMove = !1, this._hasTargetInnerClass(f) || f.hasAttribute(mi) || f.hasAttribute(ft) || f.hasAttribute(Aa) || f.hasAttribute(Ta) || f.hasAttribute(sd) || f.hasAttribute(Eo)) {
                        if ((y || x) && _) {
                            const D = Number(this._hour.textContent) > l || Number(this._hour.textContent) < c;
                            if (this._options.format24 && l !== "" && c !== "" && D) return;
                            if (this._options.format24 && c !== "" && Number(this._hour.textContent) < c) return;
                        }
                        b.trigger(this._minutes, "click");
                    }
                    if (m && p) {
                        const D = g.findOne(`[${ba}]`, this._modal);
                        b.trigger(D, "click");
                    }
                }
                if (m) {
                    let D;
                    const O = Math.trunc(A * 180 / Math.PI) + 90, { degrees: M, minute: L } = this._makeMinutesDegrees(O, D);
                    if (this._handlerMaxMinMinutesOptions(M, L) === void 0) return;
                    const { degrees: X, minute: I } = this._handlerMaxMinMinutesOptions(M, L);
                    if (this._isMouseMove) {
                        if (v.addStyle(this._hand, {
                            transform: `rotateZ(${X}deg)`
                        }), I === void 0) return;
                        const F = ()=>I >= 10 || I === "00" ? I : `0${I}`;
                        this._minutes.textContent = F(), this._toggleClassActive(this.minutesArray, this._minutes, E), this._toggleBackgroundColorCircle(`[${vt}]`), this._objWithDataOnChange.degreesMinutes = X, this._objWithDataOnChange.minutes = I;
                    }
                }
                if (y || x) {
                    let D, O = Math.trunc(A * 180 / Math.PI) + 90;
                    if (O = Math.round(O / 30) * 30, v.addStyle(this._circle, {
                        backgroundColor: "#1976d2"
                    }), this._makeHourDegrees(f, O, D) === void 0) return;
                    const M = ()=>{
                        if (go() && O && k) {
                            const { degrees: L, hour: X } = this._makeHourDegrees(k, O, D);
                            return this._handleMoveHand(k, X, L);
                        } else {
                            const { degrees: L, hour: X } = this._makeHourDegrees(f, O, D);
                            return this._handleMoveHand(f, X, L);
                        }
                    };
                    this._objWithDataOnChange.degreesHours = O, this._handlerMaxMinHoursOptions(O, l, c, r, a, d) && M();
                }
                d.stopPropagation();
            });
        }
        _hasTargetInnerClass(t) {
            return t.hasAttribute($s) || t.hasAttribute(Rt) || t.hasAttribute(Co);
        }
        _handleMoveHand(t, e, s) {
            const n = g.find(`[${ft}]`, this._modal), o = g.find(`[${Rt}]`, this._modal);
            this._isMouseMove && (this._hasTargetInnerClass(t) ? v.addStyle(this._hand, {
                height: "21.5%"
            }) : v.addStyle(this._hand, {
                height: "calc(40% + 1px)"
            }), v.addStyle(this._hand, {
                transform: `rotateZ(${s}deg)`
            }), this._hour.textContent = e >= 10 || e === "00" ? e : `0${e}`, this._toggleClassActive(this.hoursArray, this._hour, n), this._toggleClassActive(this.innerHours, this._hour, o), this._objWithDataOnChange.hour = e >= 10 || e === "00" ? e : `0${e}`);
        }
        _handlerMaxMinMinutesOptions(t, e) {
            let { maxTime: s, minTime: n } = this._options;
            const { format12: o, increment: r, disablePast: a, disableFuture: l } = this._options;
            n = He(n, a, o), s = Fe(s, l, o);
            const c = j(s, !1)[1], h = j(n, !1)[1], d = j(s, !1)[0], u = j(n, !1)[0], f = u === "12" && o ? "0" : u, p = d === "12" && o ? "0" : d, _ = j(s, !1)[2], m = j(n, !1)[2], y = c !== "" ? c * 6 : "", x = h !== "" ? h * 6 : "", E = Number(this._hour.textContent), C = E === 12 && o ? 0 : E;
            if (!_ && !m) {
                if (s !== "" && n !== "") {
                    if (Number(p) === C && t > y || Number(f) === C && t < x) return t;
                } else if (n !== "" && C <= Number(f)) {
                    if (t <= x - 6) return t;
                } else if (s !== "" && C >= Number(p) && t >= y + 6) return t;
            } else {
                if (n !== "") {
                    if (m === "PM" && this._isAmEnabled) return;
                    if (m === "PM" && this._isPmEnabled) {
                        if (C < Number(f)) return;
                        if (C <= Number(f) && t <= x - 6) return t;
                    } else if (m === "AM" && this._isAmEnabled) {
                        if (C < Number(f)) return;
                        if (C <= Number(f) && t <= x - 6) return t;
                    }
                }
                if (s !== "") {
                    if (_ === "AM" && this._isPmEnabled) return;
                    if (_ === "PM" && this._isPmEnabled) {
                        if (C >= Number(p) && t >= y + 6) return t;
                    } else if (_ === "AM" && this._isAmEnabled && C >= Number(p) && t >= y + 6) return t;
                }
            }
            return r && (t = Math.round(t / 30) * 30), t < 0 ? t = 360 + t : t >= 360 && (t = 0), {
                degrees: t,
                minute: e
            };
        }
        _removeModal() {
            this._animations ? setTimeout(()=>{
                this._removeModalElements(), this._scrollBar.reset();
            }, 300) : (this._removeModalElements(), this._scrollBar.reset()), si.off(this._document, `${jh} ${bo} ${Yh} ${Kh} ${Uh} ${Xh} ${Gh} ${Qh} ${qh} ${Zh}`), b.off(window, bo);
        }
        _removeModalElements() {
            this._modal && this._modal.remove();
        }
        _toggleBackdropAnimation(t = !1) {
            t ? this._wrapper.classList.add("animate-[fade-out_350ms_ease-in-out]") : (this._wrapper.classList.add("animate-[fade-in_350ms_ease-in-out]"), this._options.inline || v.addClass(this._clock, this._classes.clockAnimation)), setTimeout(()=>{
                this._wrapper.classList.remove("animate-[fade-out_350ms_ease-in-out]", "animate-[fade-in_350ms_ease-in-out]");
            }, 351);
        }
        _addActiveClassToTip(t, e) {
            t.forEach((s)=>{
                Number(s.textContent) === Number(e) && (v.addClass(s, this._classes.tipsActive), s.setAttribute(J, ""));
            });
        }
        _setHourOrMinute(t) {
            return t < 10 ? `0${t}` : t;
        }
        _appendTimes() {
            const { format24: t } = this._options;
            if (t) {
                this._getAppendClock(this.hoursArray, `[${mi}]`, ft), this._getAppendClock(this.innerHours, `[${$s}]`, Rt);
                return;
            }
            this._getAppendClock(this.hoursArray, `[${mi}]`, ft);
        }
        _getConfig(t) {
            const e = v.getDataAttributes(this._element);
            return t = {
                ...q0,
                ...e,
                ...t
            }, W(Ns, t, Z0), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...Q0,
                ...e,
                ...t
            }, W(Ns, t, J0), t;
        }
        _getContainer() {
            return g.findOne(this._options.container);
        }
        _getValidate(t) {
            const { invalidLabel: e, format24: s, format12: n, appendValidationInfo: o } = this._options;
            let r;
            o && (r = z("div"), r.setAttribute(ed, ""), r.innerHTML = e), si.on(this.input, t, ({ target: a })=>{
                if (this._options === null || this.input.value === "") return;
                const l = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/, c = /^([01]\d|2[0-3])(:[0-5]\d)$/, h = l.test(a.value);
                if (c.test(a.value) !== !0 && s || h !== !0 && n) {
                    o && (this.input.setAttribute(xa, ""), this.input.parentNode.insertBefore(r, this.input.nextSibling)), v.addStyle(a, {
                        marginBottom: 0
                    }), v.addStyle(r, {
                        bottom: "-23px"
                    }), this._isInvalidTimeFormat = !0;
                    return;
                }
                this.input.removeAttribute(xa), this._isInvalidTimeFormat = !1;
                const u = g.findOne(`[${ed}]`);
                u !== null && u.remove();
            });
        }
        static getInstance(t) {
            return P.getData(t, mo);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    } /*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */ 
    function pe(i) {
        return getComputedStyle(i);
    }
    function At(i, t) {
        for(var e in t){
            var s = t[e];
            typeof s == "number" && (s = s + "px"), i.style[e] = s;
        }
        return i;
    }
    function To(i) {
        var t = document.createElement("div");
        return t.className = i, t;
    }
    var rd = typeof Element < "u" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
    function We(i, t) {
        if (!rd) throw new Error("No element matching method supported");
        return rd.call(i, t);
    }
    function es(i) {
        i.remove ? i.remove() : i.parentNode && i.parentNode.removeChild(i);
    }
    function ad(i, t) {
        return Array.prototype.filter.call(i.children, function(e) {
            return We(e, t);
        });
    }
    var at = {
        main: "ps",
        rtl: "ps__rtl",
        element: {
            thumb: function(i) {
                return "ps__thumb-" + i;
            },
            rail: function(i) {
                return "ps__rail-" + i;
            },
            consuming: "ps__child--consume"
        },
        state: {
            focus: "ps--focus",
            clicking: "ps--clicking",
            active: function(i) {
                return "ps--active-" + i;
            },
            scrolling: function(i) {
                return "ps--scrolling-" + i;
            }
        }
    }, ld = {
        x: null,
        y: null
    };
    function cd(i, t) {
        var e = i.element.classList, s = at.state.scrolling(t);
        e.contains(s) ? clearTimeout(ld[t]) : e.add(s);
    }
    function hd(i, t) {
        ld[t] = setTimeout(function() {
            return i.isAlive && i.element.classList.remove(at.state.scrolling(t));
        }, i.settings.scrollingThreshold);
    }
    function ty(i, t) {
        cd(i, t), hd(i, t);
    }
    var Bs = function(t) {
        this.element = t, this.handlers = {};
    }, dd = {
        isEmpty: {
            configurable: !0
        }
    };
    Bs.prototype.bind = function(t, e) {
        typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
    }, Bs.prototype.unbind = function(t, e) {
        var s = this;
        this.handlers[t] = this.handlers[t].filter(function(n) {
            return e && n !== e ? !0 : (s.element.removeEventListener(t, n, !1), !1);
        });
    }, Bs.prototype.unbindAll = function() {
        for(var t in this.handlers)this.unbind(t);
    }, dd.isEmpty.get = function() {
        var i = this;
        return Object.keys(this.handlers).every(function(t) {
            return i.handlers[t].length === 0;
        });
    }, Object.defineProperties(Bs.prototype, dd);
    var is = function() {
        this.eventElements = [];
    };
    is.prototype.eventElement = function(t) {
        var e = this.eventElements.filter(function(s) {
            return s.element === t;
        })[0];
        return e || (e = new Bs(t), this.eventElements.push(e)), e;
    }, is.prototype.bind = function(t, e, s) {
        this.eventElement(t).bind(e, s);
    }, is.prototype.unbind = function(t, e, s) {
        var n = this.eventElement(t);
        n.unbind(e, s), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
    }, is.prototype.unbindAll = function() {
        this.eventElements.forEach(function(t) {
            return t.unbindAll();
        }), this.eventElements = [];
    }, is.prototype.once = function(t, e, s) {
        var n = this.eventElement(t), o = function(r) {
            n.unbind(e, o), s(r);
        };
        n.bind(e, o);
    };
    function Ao(i) {
        if (typeof window.CustomEvent == "function") return new CustomEvent(i);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(i, !1, !1, void 0), t;
    }
    function wo(i, t, e, s, n) {
        s === void 0 && (s = !0), n === void 0 && (n = !1);
        var o;
        if (t === "top") o = [
            "contentHeight",
            "containerHeight",
            "scrollTop",
            "y",
            "up",
            "down"
        ];
        else if (t === "left") o = [
            "contentWidth",
            "containerWidth",
            "scrollLeft",
            "x",
            "left",
            "right"
        ];
        else throw new Error("A proper axis should be provided");
        ey(i, e, o, s, n);
    }
    function ey(i, t, e, s, n) {
        var o = e[0], r = e[1], a = e[2], l = e[3], c = e[4], h = e[5];
        s === void 0 && (s = !0), n === void 0 && (n = !1);
        var d = i.element;
        i.reach[l] = null, d[a] < 1 && (i.reach[l] = "start"), d[a] > i[o] - i[r] - 1 && (i.reach[l] = "end"), t && (d.dispatchEvent(Ao("ps-scroll-" + l)), t < 0 ? d.dispatchEvent(Ao("ps-scroll-" + c)) : t > 0 && d.dispatchEvent(Ao("ps-scroll-" + h)), s && ty(i, l)), i.reach[l] && (t || n) && d.dispatchEvent(Ao("ps-" + l + "-reach-" + i.reach[l]));
    }
    function it(i) {
        return parseInt(i, 10) || 0;
    }
    function iy(i) {
        return We(i, "input,[contenteditable]") || We(i, "select,[contenteditable]") || We(i, "textarea,[contenteditable]") || We(i, "button,[contenteditable]");
    }
    function sy(i) {
        var t = pe(i);
        return it(t.width) + it(t.paddingLeft) + it(t.paddingRight) + it(t.borderLeftWidth) + it(t.borderRightWidth);
    }
    var ss = {
        isWebKit: typeof document < "u" && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: typeof navigator < "u" && navigator.msMaxTouchPoints,
        isChrome: typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent)
    };
    function Ce(i) {
        var t = i.element, e = Math.floor(t.scrollTop), s = t.getBoundingClientRect();
        i.containerWidth = Math.round(s.width), i.containerHeight = Math.round(s.height), i.contentWidth = t.scrollWidth, i.contentHeight = t.scrollHeight, t.contains(i.scrollbarXRail) || (ad(t, at.element.rail("x")).forEach(function(n) {
            return es(n);
        }), t.appendChild(i.scrollbarXRail)), t.contains(i.scrollbarYRail) || (ad(t, at.element.rail("y")).forEach(function(n) {
            return es(n);
        }), t.appendChild(i.scrollbarYRail)), !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0, i.railXWidth = i.containerWidth - i.railXMarginWidth, i.railXRatio = i.containerWidth / i.railXWidth, i.scrollbarXWidth = ud(i, it(i.railXWidth * i.containerWidth / i.contentWidth)), i.scrollbarXLeft = it((i.negativeScrollAdjustment + t.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1, !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0, i.railYHeight = i.containerHeight - i.railYMarginHeight, i.railYRatio = i.containerHeight / i.railYHeight, i.scrollbarYHeight = ud(i, it(i.railYHeight * i.containerHeight / i.contentHeight)), i.scrollbarYTop = it(e * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1, i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth), i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight), ny(t, i), i.scrollbarXActive ? t.classList.add(at.state.active("x")) : (t.classList.remove(at.state.active("x")), i.scrollbarXWidth = 0, i.scrollbarXLeft = 0, t.scrollLeft = i.isRtl === !0 ? i.contentWidth : 0), i.scrollbarYActive ? t.classList.add(at.state.active("y")) : (t.classList.remove(at.state.active("y")), i.scrollbarYHeight = 0, i.scrollbarYTop = 0, t.scrollTop = 0);
    }
    function ud(i, t) {
        return i.settings.minScrollbarLength && (t = Math.max(t, i.settings.minScrollbarLength)), i.settings.maxScrollbarLength && (t = Math.min(t, i.settings.maxScrollbarLength)), t;
    }
    function ny(i, t) {
        var e = {
            width: t.railXWidth
        }, s = Math.floor(i.scrollTop);
        t.isRtl ? e.left = t.negativeScrollAdjustment + i.scrollLeft + t.containerWidth - t.contentWidth : e.left = i.scrollLeft, t.isScrollbarXUsingBottom ? e.bottom = t.scrollbarXBottom - s : e.top = t.scrollbarXTop + s, At(t.scrollbarXRail, e);
        var n = {
            top: s,
            height: t.railYHeight
        };
        t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + i.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth - 9 : n.right = t.scrollbarYRight - i.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + i.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + i.scrollLeft, At(t.scrollbarYRail, n), At(t.scrollbarX, {
            left: t.scrollbarXLeft,
            width: t.scrollbarXWidth - t.railBorderXWidth
        }), At(t.scrollbarY, {
            top: t.scrollbarYTop,
            height: t.scrollbarYHeight - t.railBorderYWidth
        });
    }
    function oy(i) {
        i.element, i.event.bind(i.scrollbarY, "mousedown", function(t) {
            return t.stopPropagation();
        }), i.event.bind(i.scrollbarYRail, "mousedown", function(t) {
            var e = t.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top, s = e > i.scrollbarYTop ? 1 : -1;
            i.element.scrollTop += s * i.containerHeight, Ce(i), t.stopPropagation();
        }), i.event.bind(i.scrollbarX, "mousedown", function(t) {
            return t.stopPropagation();
        }), i.event.bind(i.scrollbarXRail, "mousedown", function(t) {
            var e = t.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left, s = e > i.scrollbarXLeft ? 1 : -1;
            i.element.scrollLeft += s * i.containerWidth, Ce(i), t.stopPropagation();
        });
    }
    function ry(i) {
        fd(i, [
            "containerWidth",
            "contentWidth",
            "pageX",
            "railXWidth",
            "scrollbarX",
            "scrollbarXWidth",
            "scrollLeft",
            "x",
            "scrollbarXRail"
        ]), fd(i, [
            "containerHeight",
            "contentHeight",
            "pageY",
            "railYHeight",
            "scrollbarY",
            "scrollbarYHeight",
            "scrollTop",
            "y",
            "scrollbarYRail"
        ]);
    }
    function fd(i, t) {
        var e = t[0], s = t[1], n = t[2], o = t[3], r = t[4], a = t[5], l = t[6], c = t[7], h = t[8], d = i.element, u = null, f = null, p = null;
        function _(x) {
            x.touches && x.touches[0] && (x[n] = x.touches[0].pageY), d[l] = u + p * (x[n] - f), cd(i, c), Ce(i), x.stopPropagation(), x.type.startsWith("touch") && x.changedTouches.length > 1 && x.preventDefault();
        }
        function m() {
            hd(i, c), i[h].classList.remove(at.state.clicking), i.event.unbind(i.ownerDocument, "mousemove", _);
        }
        function y(x, E) {
            u = d[l], E && x.touches && (x[n] = x.touches[0].pageY), f = x[n], p = (i[s] - i[e]) / (i[o] - i[a]), E ? i.event.bind(i.ownerDocument, "touchmove", _) : (i.event.bind(i.ownerDocument, "mousemove", _), i.event.once(i.ownerDocument, "mouseup", m), x.preventDefault()), i[h].classList.add(at.state.clicking), x.stopPropagation();
        }
        i.event.bind(i[r], "mousedown", function(x) {
            y(x);
        }), i.event.bind(i[r], "touchstart", function(x) {
            y(x, !0);
        });
    }
    function ay(i) {
        var t = i.element, e = function() {
            return We(t, ":hover");
        }, s = function() {
            return We(i.scrollbarX, ":focus") || We(i.scrollbarY, ":focus");
        };
        function n(o, r) {
            var a = Math.floor(t.scrollTop);
            if (o === 0) {
                if (!i.scrollbarYActive) return !1;
                if (a === 0 && r > 0 || a >= i.contentHeight - i.containerHeight && r < 0) return !i.settings.wheelPropagation;
            }
            var l = t.scrollLeft;
            if (r === 0) {
                if (!i.scrollbarXActive) return !1;
                if (l === 0 && o < 0 || l >= i.contentWidth - i.containerWidth && o > 0) return !i.settings.wheelPropagation;
            }
            return !0;
        }
        i.event.bind(i.ownerDocument, "keydown", function(o) {
            if (!(o.isDefaultPrevented && o.isDefaultPrevented() || o.defaultPrevented) && !(!e() && !s())) {
                var r = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
                if (r) {
                    if (r.tagName === "IFRAME") r = r.contentDocument.activeElement;
                    else for(; r.shadowRoot;)r = r.shadowRoot.activeElement;
                    if (iy(r)) return;
                }
                var a = 0, l = 0;
                switch(o.which){
                    case 37:
                        o.metaKey ? a = -i.contentWidth : o.altKey ? a = -i.containerWidth : a = -30;
                        break;
                    case 38:
                        o.metaKey ? l = i.contentHeight : o.altKey ? l = i.containerHeight : l = 30;
                        break;
                    case 39:
                        o.metaKey ? a = i.contentWidth : o.altKey ? a = i.containerWidth : a = 30;
                        break;
                    case 40:
                        o.metaKey ? l = -i.contentHeight : o.altKey ? l = -i.containerHeight : l = -30;
                        break;
                    case 32:
                        o.shiftKey ? l = i.containerHeight : l = -i.containerHeight;
                        break;
                    case 33:
                        l = i.containerHeight;
                        break;
                    case 34:
                        l = -i.containerHeight;
                        break;
                    case 36:
                        l = i.contentHeight;
                        break;
                    case 35:
                        l = -i.contentHeight;
                        break;
                    default:
                        return;
                }
                i.settings.suppressScrollX && a !== 0 || i.settings.suppressScrollY && l !== 0 || (t.scrollTop -= l, t.scrollLeft += a, Ce(i), n(a, l) && o.preventDefault());
            }
        });
    }
    function ly(i) {
        var t = i.element;
        function e(r, a) {
            var l = Math.floor(t.scrollTop), c = t.scrollTop === 0, h = l + t.offsetHeight === t.scrollHeight, d = t.scrollLeft === 0, u = t.scrollLeft + t.offsetWidth === t.scrollWidth, f;
            return Math.abs(a) > Math.abs(r) ? f = c || h : f = d || u, f ? !i.settings.wheelPropagation : !0;
        }
        function s(r) {
            var a = r.deltaX, l = -1 * r.deltaY;
            return (typeof a > "u" || typeof l > "u") && (a = -1 * r.wheelDeltaX / 6, l = r.wheelDeltaY / 6), r.deltaMode && r.deltaMode === 1 && (a *= 10, l *= 10), a !== a && l !== l && (a = 0, l = r.wheelDelta), r.shiftKey ? [
                -l,
                -a
            ] : [
                a,
                l
            ];
        }
        function n(r, a, l) {
            if (!ss.isWebKit && t.querySelector("select:focus")) return !0;
            if (!t.contains(r)) return !1;
            for(var c = r; c && c !== t;){
                if (c.classList.contains(at.element.consuming)) return !0;
                var h = pe(c);
                if (l && h.overflowY.match(/(scroll|auto)/)) {
                    var d = c.scrollHeight - c.clientHeight;
                    if (d > 0 && (c.scrollTop > 0 && l < 0 || c.scrollTop < d && l > 0)) return !0;
                }
                if (a && h.overflowX.match(/(scroll|auto)/)) {
                    var u = c.scrollWidth - c.clientWidth;
                    if (u > 0 && (c.scrollLeft > 0 && a < 0 || c.scrollLeft < u && a > 0)) return !0;
                }
                c = c.parentNode;
            }
            return !1;
        }
        function o(r) {
            var a = s(r), l = a[0], c = a[1];
            if (!n(r.target, l, c)) {
                var h = !1;
                i.settings.useBothWheelAxes ? i.scrollbarYActive && !i.scrollbarXActive ? (c ? t.scrollTop -= c * i.settings.wheelSpeed : t.scrollTop += l * i.settings.wheelSpeed, h = !0) : i.scrollbarXActive && !i.scrollbarYActive && (l ? t.scrollLeft += l * i.settings.wheelSpeed : t.scrollLeft -= c * i.settings.wheelSpeed, h = !0) : (t.scrollTop -= c * i.settings.wheelSpeed, t.scrollLeft += l * i.settings.wheelSpeed), Ce(i), h = h || e(l, c), h && !r.ctrlKey && (r.stopPropagation(), r.preventDefault());
            }
        }
        typeof window.onwheel < "u" ? i.event.bind(t, "wheel", o) : typeof window.onmousewheel < "u" && i.event.bind(t, "mousewheel", o);
    }
    function cy(i) {
        if (!ss.supportsTouch && !ss.supportsIePointer) return;
        var t = i.element;
        function e(p, _) {
            var m = Math.floor(t.scrollTop), y = t.scrollLeft, x = Math.abs(p), E = Math.abs(_);
            if (E > x) {
                if (_ < 0 && m === i.contentHeight - i.containerHeight || _ > 0 && m === 0) return window.scrollY === 0 && _ > 0 && ss.isChrome;
            } else if (x > E && (p < 0 && y === i.contentWidth - i.containerWidth || p > 0 && y === 0)) return !0;
            return !0;
        }
        function s(p, _) {
            t.scrollTop -= _, t.scrollLeft -= p, Ce(i);
        }
        var n = {}, o = 0, r = {}, a = null;
        function l(p) {
            return p.targetTouches ? p.targetTouches[0] : p;
        }
        function c(p) {
            return p.pointerType && p.pointerType === "pen" && p.buttons === 0 ? !1 : !!(p.targetTouches && p.targetTouches.length === 1 || p.pointerType && p.pointerType !== "mouse" && p.pointerType !== p.MSPOINTER_TYPE_MOUSE);
        }
        function h(p) {
            if (c(p)) {
                var _ = l(p);
                n.pageX = _.pageX, n.pageY = _.pageY, o = new Date().getTime(), a !== null && clearInterval(a);
            }
        }
        function d(p, _, m) {
            if (!t.contains(p)) return !1;
            for(var y = p; y && y !== t;){
                if (y.classList.contains(at.element.consuming)) return !0;
                var x = pe(y);
                if (m && x.overflowY.match(/(scroll|auto)/)) {
                    var E = y.scrollHeight - y.clientHeight;
                    if (E > 0 && (y.scrollTop > 0 && m < 0 || y.scrollTop < E && m > 0)) return !0;
                }
                if (_ && x.overflowX.match(/(scroll|auto)/)) {
                    var C = y.scrollWidth - y.clientWidth;
                    if (C > 0 && (y.scrollLeft > 0 && _ < 0 || y.scrollLeft < C && _ > 0)) return !0;
                }
                y = y.parentNode;
            }
            return !1;
        }
        function u(p) {
            if (c(p)) {
                var _ = l(p), m = {
                    pageX: _.pageX,
                    pageY: _.pageY
                }, y = m.pageX - n.pageX, x = m.pageY - n.pageY;
                if (d(p.target, y, x)) return;
                s(y, x), n = m;
                var E = new Date().getTime(), C = E - o;
                C > 0 && (r.x = y / C, r.y = x / C, o = E), e(y, x) && p.preventDefault();
            }
        }
        function f() {
            i.settings.swipeEasing && (clearInterval(a), a = setInterval(function() {
                if (i.isInitialized) {
                    clearInterval(a);
                    return;
                }
                if (!r.x && !r.y) {
                    clearInterval(a);
                    return;
                }
                if (Math.abs(r.x) < .01 && Math.abs(r.y) < .01) {
                    clearInterval(a);
                    return;
                }
                if (!i.element) {
                    clearInterval(a);
                    return;
                }
                s(r.x * 30, r.y * 30), r.x *= .8, r.y *= .8;
            }, 10));
        }
        ss.supportsTouch ? (i.event.bind(t, "touchstart", h), i.event.bind(t, "touchmove", u), i.event.bind(t, "touchend", f)) : ss.supportsIePointer && (window.PointerEvent ? (i.event.bind(t, "pointerdown", h), i.event.bind(t, "pointermove", u), i.event.bind(t, "pointerup", f)) : window.MSPointerEvent && (i.event.bind(t, "MSPointerDown", h), i.event.bind(t, "MSPointerMove", u), i.event.bind(t, "MSPointerUp", f)));
    }
    var hy = function() {
        return {
            handlers: [
                "click-rail",
                "drag-thumb",
                "keyboard",
                "wheel",
                "touch"
            ],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
        };
    }, dy = {
        "click-rail": oy,
        "drag-thumb": ry,
        keyboard: ay,
        wheel: ly,
        touch: cy
    }, Hs = function(t, e) {
        var s = this;
        if (e === void 0 && (e = {}), typeof t == "string" && (t = document.querySelector(t)), !t || !t.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
        this.element = t, t.classList.add(at.main), this.settings = hy();
        for(var n in e)this.settings[n] = e[n];
        this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
        var o = function() {
            return t.classList.add(at.state.focus);
        }, r = function() {
            return t.classList.remove(at.state.focus);
        };
        this.isRtl = pe(t).direction === "rtl", this.isRtl === !0 && t.classList.add(at.rtl), this.isNegativeScroll = function() {
            var c = t.scrollLeft, h = null;
            return t.scrollLeft = -1, h = t.scrollLeft < 0, t.scrollLeft = c, h;
        }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new is, this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = To(at.element.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = To(at.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", o), this.event.bind(this.scrollbarX, "blur", r), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
        var a = pe(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(a.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = it(a.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = it(a.borderLeftWidth) + it(a.borderRightWidth), At(this.scrollbarXRail, {
            display: "block"
        }), this.railXMarginWidth = it(a.marginLeft) + it(a.marginRight), At(this.scrollbarXRail, {
            display: ""
        }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = To(at.element.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = To(at.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", o), this.event.bind(this.scrollbarY, "blur", r), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
        var l = pe(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(l.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = it(l.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? sy(this.scrollbarY) : null, this.railBorderYWidth = it(l.borderTopWidth) + it(l.borderBottomWidth), At(this.scrollbarYRail, {
            display: "block"
        }), this.railYMarginHeight = it(l.marginTop) + it(l.marginBottom), At(this.scrollbarYRail, {
            display: ""
        }), this.railYHeight = null, this.railYRatio = null, this.reach = {
            x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
            y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        }, this.isAlive = !0, this.settings.handlers.forEach(function(c) {
            return dy[c](s);
        }), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", function(c) {
            return s.onScroll(c);
        }), Ce(this);
    };
    Hs.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, At(this.scrollbarXRail, {
            display: "block"
        }), At(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = it(pe(this.scrollbarXRail).marginLeft) + it(pe(this.scrollbarXRail).marginRight), this.railYMarginHeight = it(pe(this.scrollbarYRail).marginTop) + it(pe(this.scrollbarYRail).marginBottom), At(this.scrollbarXRail, {
            display: "none"
        }), At(this.scrollbarYRail, {
            display: "none"
        }), Ce(this), wo(this, "top", 0, !1, !0), wo(this, "left", 0, !1, !0), At(this.scrollbarXRail, {
            display: ""
        }), At(this.scrollbarYRail, {
            display: ""
        }));
    }, Hs.prototype.onScroll = function(t) {
        this.isAlive && (Ce(this), wo(this, "top", this.element.scrollTop - this.lastScrollTop), wo(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
    }, Hs.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(), es(this.scrollbarX), es(this.scrollbarY), es(this.scrollbarXRail), es(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
    }, Hs.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter(function(t) {
            return !t.match(/^ps([-_].+|)$/);
        }).join(" ");
    };
    const uy = {
        threshold: 10,
        direction: "all"
    };
    class fy {
        constructor(t, e){
            this._element = t, this._startPosition = null, this._options = {
                ...uy,
                ...e
            };
        }
        handleTouchStart(t) {
            this._startPosition = this._getCoordinates(t);
        }
        handleTouchMove(t) {
            if (!this._startPosition) return;
            const e = this._getCoordinates(t), s = {
                x: e.x - this._startPosition.x,
                y: e.y - this._startPosition.y
            }, n = this._getDirection(s);
            if (this._options.direction === "all") {
                if (n.y.value < this._options.threshold && n.x.value < this._options.threshold) return;
                const r = n.y.value > n.x.value ? n.y.direction : n.x.direction;
                b.trigger(this._element, `swipe${r}`), b.trigger(this._element, "swipe", {
                    direction: r
                }), this._startPosition = null;
                return;
            }
            const o = this._options.direction === "left" || this._options === "right" ? "x" : "y";
            n[o].direction === this._options.direction && n[o].value > this._options.threshold && (b.trigger(this._element, `swipe${n[o].direction}`), this._startPosition = null);
        }
        handleTouchEnd() {
            this._startPosition = null;
        }
        _getCoordinates(t) {
            const [e] = t.touches;
            return {
                x: e.clientX,
                y: e.clientY
            };
        }
        _getDirection(t) {
            return {
                x: {
                    direction: t.x < 0 ? "left" : "right",
                    value: Math.abs(t.x)
                },
                y: {
                    direction: t.y < 0 ? "up" : "down",
                    value: Math.abs(t.y)
                }
            };
        }
    }
    class py {
        constructor(t, e = "swipe", s = {}){
            this._element = t, this._event = e, this.swipe = new fy(t, s), this._touchStartHandler = this._handleTouchStart.bind(this), this._touchMoveHandler = this._handleTouchMove.bind(this), this._touchEndHandler = this._handleTouchEnd.bind(this);
        }
        dispose() {
            this._element.removeEventListener("touchstart", this._touchStartHandler), this._element.removeEventListener("touchmove", this._touchMoveHandler), window.removeEventListener("touchend", this._touchEndHandler);
        }
        init() {
            this._element.addEventListener("touchstart", (t)=>this._handleTouchStart(t)), this._element.addEventListener("touchmove", (t)=>this._handleTouchMove(t)), window.addEventListener("touchend", (t)=>this._handleTouchEnd(t));
        }
        _handleTouchStart(t) {
            this[this._event].handleTouchStart(t);
        }
        _handleTouchMove(t) {
            this[this._event].handleTouchMove(t);
        }
        _handleTouchEnd(t) {
            this[this._event].handleTouchEnd(t);
        }
    }
    const _y = "group/ps overflow-hidden [overflow-anchor:none] [overflow-style:none] touch-none", gy = "group/x absolute bottom-0 !top-auto h-[15px] hidden opacity-0 [transition:background-color_.2s_linear,_opacity_.2s_linear] motion-reduce:transition-none group-[&.ps--active-x]/ps:block group-[&.ps--active-x]/ps:bg-transparent group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-x]/ps:opacity-60 hover:!opacity-90 hover:bg-[#eee] focus:!opacity-90 focus:bg-[#eee] [&.ps--clicking]:!opacity-90 [&.ps--clicking]:bg-[#eee] outline-none", my = "absolute bottom-[2px] rounded-md h-1.5 opacity-0 group-hover/ps:opacity-100 group-focus/ps:opacity-100 group-active/ps:opacity-100 bg-[#aaa] [transition:background-color_.2s_linear,_height_.2s_ease-in-out] group-hover/x:bg-[#999] group-hover/x:h-[11px] group-focus/x:bg-[#999] group-focus/x:h-[11px] group-[&.ps--clicking]/x:bg-[#999] group-[&.ps--clicking]/x:h-[11px] outline-none", by = "group/y absolute right-0 !left-auto w-[15px] hidden opacity-0 [transition:background-color_.2s_linear,_opacity_.2s_linear] motion-reduce:transition-none group-[&.ps--active-y]/ps:block group-[&.ps--active-y]/ps:bg-transparent group-hover/ps:opacity-60 group-focus/ps:opacity-60 group-[&.ps--scrolling-y]/ps:opacity-60 hover:!opacity-90 hover:bg-[#eee] focus:!opacity-90 focus:bg-[#eee] [&.ps--clicking]:!opacity-90 [&.ps--clicking]:bg-[#eee] outline-none", vy = "absolute right-[2px] rounded-md w-1.5 opacity-0 group-hover/ps:opacity-100 group-focus/ps:opacity-100 group-active/ps:opacity-100 bg-[#aaa] [transition:background-color_.2s_linear,_width_.2s_ease-in-out] group-hover/y:bg-[#999] group-hover/y:w-[11px] group-focus/y:bg-[#999] group-focus/y:w-[11px] group-[&.ps--clicking]/y:bg-[#999] group-[&.ps--clicking]/y:w-[11px] outline-none", yy = (i = document)=>{
        [
            {
                ps: "ps__rail-x",
                te: gy
            },
            {
                ps: "ps__rail-y",
                te: by
            },
            {
                ps: "ps__thumb-x",
                te: my
            },
            {
                ps: "ps__thumb-y",
                te: vy
            }
        ].forEach((e)=>{
            v.addClass(g.findOne(`.${e.ps}`, i), e.te), v.removeClass(g.findOne(`.${e.ps}`, i), e.ps);
        }), v.addClass(i, _y), v.removeClass(i, "ps");
    }, pd = "sidenav", ko = "te.sidenav", xy = "data-te-sidenav-rotate-icon-ref", wa = "[data-te-sidenav-toggle-ref]", Ey = "[data-te-collapse-init]", Cy = '[data-te-sidenav-slim="true"]', Ty = '[data-te-sidenav-slim="false"]', Ay = "[data-te-sidenav-menu-ref]", ns = "[data-te-sidenav-collapse-ref]", Fs = "[data-te-sidenav-link-ref]", wy = st() ? 100 : -100, ky = st() ? -100 : 100, Sy = {
        sidenavAccordion: "(boolean)",
        sidenavBackdrop: "(boolean)",
        sidenavBackdropClass: "(null|string)",
        sidenavCloseOnEsc: "(boolean)",
        sidenavColor: "(string)",
        sidenavContent: "(null|string)",
        sidenavExpandable: "(boolean)",
        sidenavExpandOnHover: "(boolean)",
        sidenavFocusTrap: "(boolean)",
        sidenavHidden: "(boolean)",
        sidenavMode: "(string)",
        sidenavModeBreakpointOver: "(null|string|number)",
        sidenavModeBreakpointSide: "(null|string|number)",
        sidenavModeBreakpointPush: "(null|string|number)",
        sidenavBreakpointSm: "(number)",
        sidenavBreakpointMd: "(number)",
        sidenavBreakpointLg: "(number)",
        sidenavBreakpointXl: "(number)",
        sidenavBreakpoint2xl: "(number)",
        sidenavScrollContainer: "(null|string)",
        sidenavSlim: "(boolean)",
        sidenavSlimCollapsed: "(boolean)",
        sidenavSlimWidth: "(number)",
        sidenavPosition: "(string)",
        sidenavRight: "(boolean)",
        sidenavTransitionDuration: "(number)",
        sidenavWidth: "(number)"
    }, Oy = {
        sidenavAccordion: !1,
        sidenavBackdrop: !0,
        sidenavBackdropClass: null,
        sidenavCloseOnEsc: !0,
        sidenavColor: "primary",
        sidenavContent: null,
        sidenavExpandable: !0,
        sidenavExpandOnHover: !1,
        sidenavFocusTrap: !0,
        sidenavHidden: !0,
        sidenavMode: "over",
        sidenavModeBreakpointOver: null,
        sidenavModeBreakpointSide: null,
        sidenavModeBreakpointPush: null,
        sidenavBreakpointSm: 640,
        sidenavBreakpointMd: 768,
        sidenavBreakpointLg: 1024,
        sidenavBreakpointXl: 1280,
        sidenavBreakpoint2xl: 1536,
        sidenavScrollContainer: null,
        sidenavSlim: !1,
        sidenavSlimCollapsed: !1,
        sidenavSlimWidth: 77,
        sidenavPosition: "fixed",
        sidenavRight: !1,
        sidenavTransitionDuration: 300,
        sidenavWidth: 240
    };
    class bi {
        constructor(t, e = {}){
            Ee(this, "_addBackdropOnInit", ()=>{
                this._options.sidenavHidden || (this._backdrop.show(), b.off(this._element, "transitionend", this._addBackdropOnInit));
            });
            this._element = t, this._options = e, this._ID = se(""), this._content = null, this._initialContentStyle = null, this._slimCollapsed = !1, this._activeNode = null, this._tempSlim = !1, this._backdrop = this._initializeBackDrop(), this._focusTrap = null, this._perfectScrollbar = null, this._touch = null, this._setModeFromBreakpoints(), this.escHandler = (s)=>{
                s.keyCode === ro && this.toggler && ne(this.toggler) && (this._update(!1), b.off(window, "keydown", this.escHandler));
            }, this.hashHandler = ()=>{
                this._setActiveElements();
            }, t && (P.setData(t, ko, this), this._setup()), this.options.sidenavBackdrop && !this.options.sidenavHidden && this.options.sidenavMode === "over" && b.on(this._element, "transitionend", this._addBackdropOnInit), this._didInit = !1, this._init();
        }
        static get NAME() {
            return pd;
        }
        get container() {
            if (this.options.sidenavPosition === "fixed") return g.findOne("body");
            const t = (e)=>!e.parentNode || e.parentNode === document ? e : e.parentNode.style.position === "relative" || e.parentNode.classList.contains("relative") ? e.parentNode : t(e.parentNode);
            return t(this._element);
        }
        get isVisible() {
            let t = 0, e = window.innerWidth;
            if (this.options.sidenavPosition !== "fixed") {
                const n = this.container.getBoundingClientRect();
                t = n.x, e = n.x + n.width;
            }
            const { x: s } = this._element.getBoundingClientRect();
            return this.options.sidenavRight ? Math.abs(s - e) > 10 : Math.abs(s - t) < 10;
        }
        get links() {
            return g.find(Fs, this._element);
        }
        get navigation() {
            return g.find(Ay, this._element);
        }
        get options() {
            const t = {
                ...Oy,
                ...v.getDataAttributes(this._element),
                ...this._options
            };
            return W(pd, t, Sy), t;
        }
        get sidenavStyle() {
            return {
                width: `${this.width}px`,
                height: this.options.sidenavPosition === "fixed" ? "100vh" : "100%",
                position: this.options.sidenavPosition,
                transition: `all ${this.transitionDuration} linear`
            };
        }
        get toggler() {
            return g.find(wa).find((e)=>{
                const s = v.getDataAttribute(e, "target");
                return g.findOne(s) === this._element;
            });
        }
        get transitionDuration() {
            return `${this.options.sidenavTransitionDuration / 1e3}s`;
        }
        get translation() {
            return this.options.sidenavRight ? ky : wy;
        }
        get width() {
            return this._slimCollapsed ? this.options.sidenavSlimWidth : this.options.sidenavWidth;
        }
        get isBackdropVisible() {
            return !!this._backdrop._element;
        }
        changeMode(t) {
            this._setMode(t);
        }
        dispose() {
            b.off(window, "keydown", this.escHandler), this.options.sidenavBackdrop && this._backdrop.dispose(), b.off(window, "hashchange", this.hashHandler), this._touch.dispose(), P.removeData(this._element, ko), this._element = null;
        }
        hide() {
            this._emitEvents(!1), this._update(!1), this._options.sidenavBackdrop && this.isBackdropVisible && this._backdrop.hide();
        }
        show() {
            this._emitEvents(!0), this._update(!0), this._options.sidenavBackdrop && this._options.sidenavMode === "over" && this._backdrop.show();
        }
        toggle() {
            this._emitEvents(!this.isVisible), this._update(!this.isVisible);
        }
        toggleSlim() {
            this._setSlim(!this._slimCollapsed);
        }
        update(t) {
            this._options = t, this._setup();
        }
        getBreakpoint(t) {
            return this._transformBreakpointValuesToObject()[t];
        }
        _init() {
            this._didInit || (b.on(document, "click", wa, bi.toggleSidenav()), this._didInit = !0);
        }
        _transformBreakpointValuesToObject() {
            return {
                sm: this.options.sidenavBreakpointSm,
                md: this.options.sidenavBreakpointMd,
                lg: this.options.sidenavBreakpointLg,
                xl: this.options.sidenavBreakpointXl,
                "2xl": this.options.sidenavBreakpoint2xl
            };
        }
        _setModeFromBreakpoints() {
            const t = window.innerWidth, e = this._transformBreakpointValuesToObject();
            if (t === void 0 || !e) return;
            const s = typeof this.options.sidenavModeBreakpointOver == "number" ? t - this.options.sidenavModeBreakpointOver : t - e[this.options.sidenavModeBreakpointOver], n = typeof this.options.sidenavModeBreakpointSide == "number" ? t - this.options.sidenavModeBreakpointSide : t - e[this.options.sidenavModeBreakpointSide], o = typeof this.options.sidenavModeBreakpointPush == "number" ? t - this.options.sidenavModeBreakpointPush : t - e[this.options.sidenavModeBreakpointPush], r = (l, c)=>l - c < 0 ? -1 : c - l < 0 ? 1 : 0, a = [
                s,
                n,
                o
            ].filter((l)=>l != null && l >= 0).sort(r)[0];
            s > 0 && s === a ? (this._options.sidenavMode = "over", this._options.sidenavHidden = !0) : n > 0 && n === a ? this._options.sidenavMode = "side" : o > 0 && o === a && (this._options.sidenavMode = "push");
        }
        _collapseItems() {
            this.navigation.forEach((t)=>{
                g.find(ns, t).forEach((s)=>{
                    re.getInstance(s).hide();
                });
            });
        }
        _getOffsetValue(t, { index: e, property: s, offsets: n }) {
            const o = this._getPxValue(this._initialContentStyle[e][n[s].property]), r = t ? n[s].value : 0;
            return o + r;
        }
        _getProperty(...t) {
            return t.map((e, s)=>s === 0 ? e : e[0].toUpperCase().concat(e.slice(1))).join("");
        }
        _getPxValue(t) {
            return t ? parseFloat(t) : 0;
        }
        _handleSwipe(t, e) {
            e && this._slimCollapsed && this.options.sidenavSlim && this.options.sidenavExpandable ? this.toggleSlim() : e || (this._slimCollapsed || !this.options.sidenavSlim || !this.options.sidenavExpandable ? this.toggler && ne(this.toggler) && this.toggle() : this.toggleSlim());
        }
        _isActive(t, e) {
            return e ? e === t : t.attributes.href ? new URL(t, window.location.href).href === window.location.href : !1;
        }
        _isAllToBeCollapsed() {
            return g.find(Ey, this._element).filter((s)=>s.getAttribute("aria-expanded") === "true").length === 0;
        }
        _isAllCollapsed() {
            return g.find(ns, this._element).filter((t)=>ne(t)).length === 0;
        }
        _initializeBackDrop() {
            if (!this.options.sidenavBackdrop) return;
            const t = this.options.sidenavBackdropClass ? this.options.sidenavBackdropClass.split(" ") : this.options.sidenavPosition ? [
                "opacity-50",
                "transition-all",
                "duration-300",
                "ease-in-out",
                this.options.sidenavPosition,
                "top-0",
                "left-0",
                "z-50",
                "bg-black/10",
                "dark:bg-black-60",
                "w-full",
                "h-full",
                this._element.id
            ] : null;
            return new Xr({
                isVisible: this.options.sidenavBackdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                backdropClasses: t,
                clickCallback: ()=>this.hide()
            });
        }
        _updateBackdrop(t) {
            if (this.options.sidenavMode === "over") {
                t ? this._backdrop.show() : this.isBackdropVisible && this._backdrop.hide();
                return;
            }
            this.isBackdropVisible && this._backdrop.hide();
        }
        _setup() {
            this._setupTouch(), this.options.sidenavFocusTrap && this._setupFocusTrap(), this._setupCollapse(), this.options.sidenavSlim && this._setupSlim(), this._setupInitialStyling(), this._setupScrolling(), this.options.sidenavContent && this._setupContent(), this._setupActiveState(), this._setupRippleEffect(), this.options.sidenavHidden || this._updateOffsets(!0, !0), this.options.sidenavMode === "over" && this._setTabindex(!0);
        }
        _setupActiveState() {
            this._setActiveElements(), this.links.forEach((t)=>{
                b.on(t, "click", ()=>this._setActiveElements(t)), b.on(t, "keydown", (e)=>{
                    e.keyCode === Pt && this._setActiveElements(t);
                });
            }), b.on(window, "hashchange", this.hashHandler);
        }
        _setupCollapse() {
            this.navigation.forEach((t, e)=>{
                g.find(ns, t).forEach((n, o)=>this._setupCollapseList({
                        list: n,
                        index: o,
                        menu: t,
                        menuIndex: e
                    }));
            });
        }
        _generateCollpaseID(t, e) {
            return `sidenav-collapse-${this._ID}-${e}-${t}`;
        }
        _setupCollapseList({ list: t, index: e, menu: s, menuIndex: n }) {
            const o = this._generateCollpaseID(e, n);
            t.setAttribute("id", o), t.setAttribute("data-te-collapse-item", "");
            const [r] = g.prev(t, Fs);
            v.setDataAttribute(r, "collapse-init", ""), r.setAttribute("href", `#${o}`), r.setAttribute("role", "button");
            const a = re.getInstance(t) || new re(t, {
                toggle: !1,
                parent: this.options.sidenavAccordion ? s : t
            });
            (t.dataset.teSidenavStateShow === "" || t.dataset.teCollapseShow === "") && this._rotateArrow(r, !1), b.on(r, "click", (l)=>{
                this._toggleCategory(l, a, t), this._tempSlim && this._isAllToBeCollapsed() && (this._setSlim(!0), this._tempSlim = !1), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
            }), b.on(t, "show.te.collapse", ()=>this._rotateArrow(r, !1)), b.on(t, "hide.te.collapse", ()=>this._rotateArrow(r, !0)), b.on(t, "shown.te.collapse", ()=>{
                this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
            }), b.on(t, "hidden.te.collapse", ()=>{
                this._tempSlim && this._isAllCollapsed() && (this._setSlim(!0), this._tempSlim = !1), this.options.sidenavMode === "over" && this._focusTrap && this._focusTrap.update();
            });
        }
        _setupContent() {
            this._content = g.find(this.options.sidenavContent), this._content.forEach((t)=>{
                const e = [
                    "!p",
                    "!m",
                    "!px",
                    "!pl",
                    "!pr",
                    "!mx",
                    "!ml",
                    "!mr",
                    "!-p",
                    "!-m",
                    "!-px",
                    "!-pl",
                    "!-pr",
                    "!-mx",
                    "!-ml",
                    "!-mr"
                ];
                [
                    ...t.classList
                ].filter((n)=>e.findIndex((o)=>n.includes(o)) >= 0).forEach((n)=>t.classList.remove(n));
            }), this._initialContentStyle = this._content.map((t)=>{
                const { paddingLeft: e, paddingRight: s, marginLeft: n, marginRight: o, transition: r } = window.getComputedStyle(t);
                return {
                    paddingLeft: e,
                    paddingRight: s,
                    marginLeft: n,
                    marginRight: o,
                    transition: r
                };
            });
        }
        _setupFocusTrap() {
            this._focusTrap = new Cs(this._element, {
                event: "keydown",
                condition: (t)=>t.keyCode === Rs,
                onlyVisible: !0
            }, this.toggler);
        }
        _setupInitialStyling() {
            this._setColor(), v.style(this._element, this.sidenavStyle);
        }
        _setupScrolling() {
            let t = this._element;
            if (this.options.sidenavScrollContainer) {
                t = g.findOne(this.options.sidenavScrollContainer, this._element);
                const s = qp(t.parentNode.children).filter((n)=>n !== t).reduce((n, o)=>n + o.clientHeight, 0);
                v.style(t, {
                    maxHeight: `calc(100% - ${s}px)`,
                    position: "relative"
                });
            }
            this._perfectScrollbar = new Hs(t, {
                suppressScrollX: !0,
                handlers: [
                    "click-rail",
                    "drag-thumb",
                    "wheel",
                    "touch"
                ]
            }), yy(t);
        }
        _setupSlim() {
            this._slimCollapsed = this.options.sidenavSlimCollapsed, this._toggleSlimDisplay(this._slimCollapsed), this.options.sidenavExpandOnHover && (this._element.addEventListener("mouseenter", ()=>{
                this._slimCollapsed && this._setSlim(!1);
            }), this._element.addEventListener("mouseleave", ()=>{
                this._slimCollapsed || this._setSlim(!0);
            }));
        }
        _setupRippleEffect() {
            this.links.forEach((t)=>{
                let e = Ui.getInstance(t), s = this.options.sidenavColor;
                if (e && e._options.sidenavColor !== this.options.sidenavColor) e.dispose();
                else if (e) return;
                (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (s = "white"), e = new Ui(t, {
                    rippleColor: s
                });
            });
        }
        _setupTouch() {
            this._touch = new py(this._element, "swipe", {
                threshold: 20
            }), this._touch.init(), b.on(this._element, "swipeleft", (t)=>this._handleSwipe(t, this.options.sidenavRight)), b.on(this._element, "swiperight", (t)=>this._handleSwipe(t, !this.options.sidenavRight));
        }
        _setActive(t, e) {
            t.setAttribute("data-te-sidebar-state-active", ""), this._activeNode && t.removeAttribute("data-te-sidebar-state-active"), this._activeNode = t;
            const [s] = g.parents(this._activeNode, ns);
            if (!s) {
                this._setActiveCategory();
                return;
            }
            const [n] = g.prev(s, Fs);
            this._setActiveCategory(n), !e && !this._slimCollapsed && re.getInstance(s).show();
        }
        _setActiveCategory(t) {
            this.navigation.forEach((e)=>{
                g.find(ns, e).forEach((n)=>{
                    const [o] = g.prev(n, Fs);
                    o !== t ? o.removeAttribute("data-te-sidenav-state-active") : o.setAttribute("data-te-sidenav-state-active", "");
                });
            });
        }
        _setActiveElements(t) {
            this.navigation.forEach((e)=>{
                g.find(Fs, e).filter((n)=>g.next(n, ns).length === 0).forEach((n)=>{
                    this._isActive(n, t) && n !== this._activeNode && this._setActive(n, t);
                });
            }), t && this._updateFocus(this.isVisible);
        }
        _setColor() {
            const t = [
                "primary",
                "secondary",
                "success",
                "info",
                "warning",
                "danger",
                "light",
                "dark"
            ], { sidenavColor: e } = this.options, s = t.includes(e) ? e : "primary";
            t.forEach((n)=>{
                this._element.classList.remove(`sidenav-${n}`);
            }), v.addClass(this._element, `sidenav-${s}`);
        }
        _setContentOffsets(t, e, s) {
            this._content.forEach((n, o)=>{
                const r = this._getOffsetValue(t, {
                    index: o,
                    property: "padding",
                    offsets: e
                }), a = this._getOffsetValue(t, {
                    index: o,
                    property: "margin",
                    offsets: e
                }), l = {};
                if (s || (l.transition = `all ${this.transitionDuration} linear`), l[e.padding.property] = `${r}px`, l[e.margin.property] = `${a}px`, v.style(n, l), !!t) {
                    if (s) {
                        v.style(n, {
                            transition: this._initialContentStyle[o].transition
                        });
                        return;
                    }
                    b.on(n, "transitionend", ()=>{
                        v.style(n, {
                            transition: this._initialContentStyle[o].transition
                        });
                    });
                }
            });
        }
        _setMode(t) {
            this.options.sidenavMode !== t && (this._options.sidenavMode = t, this._update(this.isVisible));
        }
        _setSlim(t) {
            const e = t ? [
                "collapse",
                "collapsed"
            ] : [
                "expand",
                "expanded"
            ];
            this._triggerEvents(...e), t && this._collapseItems(), this._slimCollapsed = t, this._toggleSlimDisplay(t), v.style(this._element, {
                width: `${this.width}px`
            }), this._updateOffsets(this.isVisible);
        }
        _setTabindex(t) {
            this.links.forEach((e)=>{
                e.tabIndex = t ? 0 : -1;
            });
        }
        _emitEvents(t) {
            const e = t ? [
                "show",
                "shown"
            ] : [
                "hide",
                "hidden"
            ];
            this._triggerEvents(...e);
        }
        _rotateArrow(t, e) {
            const [s] = g.children(t, `[${xy}]`);
            s && (e ? v.removeClass(s, "rotate-180") : v.addClass(s, "rotate-180"));
        }
        _toggleCategory(t, e) {
            t.preventDefault(), e.toggle(), this._slimCollapsed && this.options.sidenavExpandable && (this._tempSlim = !0, this._setSlim(!1));
        }
        _toggleSlimDisplay(t) {
            const e = g.find(Cy, this._element), s = g.find(Ty, this._element), n = ()=>{
                e.forEach((o)=>{
                    v.style(o, {
                        display: this._slimCollapsed ? "unset" : "none"
                    });
                }), s.forEach((o)=>{
                    v.style(o, {
                        display: this._slimCollapsed ? "none" : "unset"
                    });
                });
            };
            t ? setTimeout(()=>n(), this.options.sidenavTransitionDuration) : n();
        }
        async _triggerEvents(t, e) {
            b.trigger(this._element, `${t}.te.sidenav`), e && await setTimeout(()=>{
                b.trigger(this._element, `${e}.te.sidenav`);
            }, this.options.sidenavTransitionDuration + 5);
        }
        _update(t) {
            this.toggler && this._updateTogglerAria(t), this._updateDisplay(t), this.options.sidenavBackdrop && this._updateBackdrop(t), this._updateOffsets(t), t && this.options.sidenavCloseOnEsc && this.options.sidenavMode !== "side" && b.on(window, "keydown", this.escHandler), this.options.sidenavFocusTrap && this._updateFocus(t);
        }
        _updateDisplay(t) {
            const e = t ? 0 : this.translation;
            v.style(this._element, {
                transform: `translateX(${e}%)`
            });
        }
        _updateFocus(t) {
            if (this._setTabindex(t), this.options.sidenavMode === "over" && this.options.sidenavFocusTrap) {
                if (t) {
                    this._focusTrap.trap();
                    return;
                }
                this._focusTrap.disable();
            }
            this._focusTrap.disable();
        }
        _updateOffsets(t, e = !1) {
            const [s, n] = this.options.sidenavRight ? [
                "right",
                "left"
            ] : [
                "left",
                "right"
            ], o = {
                property: this._getProperty("padding", s),
                value: this.options.sidenavMode === "over" ? 0 : this.width
            }, r = {
                property: this._getProperty("margin", n),
                value: this.options.sidenavMode === "push" ? -1 * this.width : 0
            };
            b.trigger(this._element, "update.te.sidenav", {
                margin: r,
                padding: o
            }), this._content && (this._content.className = "", this._setContentOffsets(t, {
                padding: o,
                margin: r
            }, e));
        }
        _updateTogglerAria(t) {
            this.toggler.setAttribute("aria-expanded", t);
        }
        static toggleSidenav() {
            return function(t) {
                const e = g.closest(t.target, wa), s = v.getDataAttributes(e).target;
                g.find(s).forEach((n)=>{
                    (bi.getInstance(n) || new bi(n)).toggle();
                });
            };
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                let s = P.getData(this, ko);
                const n = typeof t == "object" && t;
                if (!(!s && /dispose/.test(t)) && (s || (s = new bi(this, n)), typeof t == "string")) {
                    if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
                    s[t](e);
                }
            });
        }
        static getInstance(t) {
            return P.getData(t, ko);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    }
    const ka = "stepper", So = "te.stepper", Oo = `.${So}`, Vs = `data-te-${ka}`, Ws = "horizontal", _e = "vertical", Dy = {
        stepperType: "string",
        stepperLinear: "boolean",
        stepperNoEditable: "boolean",
        stepperActive: "string",
        stepperCompleted: "string",
        stepperInvalid: "string",
        stepperDisabled: "string",
        stepperVerticalBreakpoint: "number",
        stepperMobileBreakpoint: "number",
        stepperMobileBarBreakpoint: "number"
    }, My = {
        stepperType: Ws,
        stepperLinear: !1,
        stepperNoEditable: !1,
        stepperActive: "",
        stepperCompleted: "",
        stepperInvalid: "",
        stepperDisabled: "",
        stepperVerticalBreakpoint: 0,
        stepperMobileBreakpoint: 0,
        stepperMobileBarBreakpoint: 4
    }, _d = `mousedown${Oo}`, gd = `keydown${Oo}`, Iy = `keyup${Oo}`, md = `resize${Oo}`, ze = `[${Vs}-step-ref]`, yt = `[${Vs}-head-ref]`, bd = `[${Vs}-head-text-ref]`, Do = `[${Vs}-head-icon-ref]`, wt = `[${Vs}-content-ref]`;
    class vd {
        constructor(t, e){
            this._element = t, this._options = this._getConfig(e), this._elementHeight = 0, this._steps = g.find(`${ze}`, this._element), this._currentView = "", this._activeStepIndex = 0, this._verticalStepperStyles = [], this._element && (P.setData(t, So, this), this._init());
        }
        static get NAME() {
            return ka;
        }
        get activeStep() {
            return this._steps[this._activeStepIndex];
        }
        get activeStepIndex() {
            return this._activeStepIndex;
        }
        dispose() {
            this._steps.forEach((t)=>{
                b.off(t, _d), b.off(t, gd);
            }), b.off(window, md), P.removeData(this._element, So), this._element = null;
        }
        changeStep(t) {
            this._toggleStep(t);
        }
        nextStep() {
            this._toggleStep(this._activeStepIndex + 1);
        }
        previousStep() {
            this._toggleStep(this._activeStepIndex - 1);
        }
        _init() {
            const t = g.find(`${ze}`, this._element)[this._activeStepIndex].setAttribute("data-te", "active-step"), e = g.find(`${bd}`, this._element), s = g.find(`${Do}`, this._element);
            switch(t ? (this._activeStepIndex = this._steps.indexOf(t), this._toggleStepClass(this._activeStepIndex, "add", this._options.stepperActive), e[this._activeStepIndex].classList.add("font-medium"), s[this._activeStepIndex].classList.add("!bg-primary-100"), s[this._activeStepIndex].classList.add("!text-primary-700")) : (e[this._activeStepIndex].classList.add("font-medium"), s[this._activeStepIndex].classList.add("!bg-primary-100"), s[this._activeStepIndex].classList.add("!text-primary-700"), this._toggleStepClass(this._activeStepIndex, "add", this._options.stepperActive)), this._bindMouseDown(), this._bindKeysNavigation(), this._options.stepperType){
                case _e:
                    this._toggleVertical();
                    break;
                default:
                    this._toggleHorizontal();
                    break;
            }
            (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView(), this._bindResize();
        }
        _getConfig(t) {
            const e = v.getDataAttributes(this._element);
            return t = {
                ...My,
                ...e,
                ...t
            }, W(ka, t, Dy), t;
        }
        _bindMouseDown() {
            this._steps.forEach((t)=>{
                const e = g.findOne(`${yt}`, t);
                b.on(e, _d, (s)=>{
                    const n = g.parents(s.target, `${ze}`)[0], o = this._steps.indexOf(n);
                    s.preventDefault(), this._toggleStep(o);
                });
            });
        }
        _bindResize() {
            b.on(window, md, ()=>{
                this._currentView === _e && this._setSingleStepHeight(this.activeStep), this._currentView === Ws && this._setHeight(this.activeStep), (this._options.stepperVerticalBreakpoint || this._options.stepperMobileBreakpoint) && this._toggleStepperView();
            });
        }
        _toggleStepperView() {
            const t = this._options.stepperVerticalBreakpoint < window.innerWidth, e = this._options.stepperVerticalBreakpoint > window.innerWidth, s = this._options.stepperMobileBreakpoint > window.innerWidth;
            t && this._currentView !== Ws && this._toggleHorizontal(), e && !s && this._currentView !== _e && (this._steps.forEach((n)=>{
                const o = g.findOne(`${wt}`, n);
                this._resetStepperHeight(), this._showElement(o);
            }), this._toggleVertical());
        }
        _toggleStep(t) {
            this._activeStepIndex !== t && (this._options.stepperNoEditable && this._toggleDisabled(), this._showElement(g.findOne(`${wt}`, this._steps[t])), this._toggleActive(t), t > this._activeStepIndex && this._toggleCompleted(this._activeStepIndex), this._currentView === Ws ? this._animateHorizontalStep(t) : (this._animateVerticalStep(t), this._setSingleStepHeight(this._steps[t])), this._toggleStepTabIndex(g.findOne(`${yt}`, this.activeStep), g.findOne(`${yt}`, this._steps[t])), this._activeStepIndex = t, this._steps[this._activeStepIndex].setAttribute("data-te", "active-step"), this._steps.forEach((e, s)=>{
                e[this._activeStepIndex] !== s && e.removeAttribute("data-te");
            }));
        }
        _resetStepperHeight() {
            this._element.style.height = "";
        }
        _setStepsHeight() {
            this._steps.forEach((t)=>{
                const e = g.findOne(`${wt}`, t), s = window.getComputedStyle(e);
                this._verticalStepperStyles.push({
                    paddingTop: parseFloat(s.paddingTop),
                    paddingBottom: parseFloat(s.paddingBottom)
                });
                const n = e.scrollHeight;
                e.style.height = `${n}px`;
            });
        }
        _setSingleStepHeight(t) {
            const e = g.findOne(`${wt}`, t), s = this.activeStep === t, n = this._steps.indexOf(t);
            let o;
            s ? (e.style.height = "", o = e.scrollHeight) : o = e.scrollHeight + this._verticalStepperStyles[n].paddingTop + this._verticalStepperStyles[n].paddingBottom, e.style.height = `${o}px`;
        }
        _toggleVertical() {
            this._currentView = _e, this._setStepsHeight(), this._hideInactiveSteps();
        }
        _toggleHorizontal() {
            this._currentView = Ws, this._setHeight(this.activeStep), this._hideInactiveSteps();
        }
        _toggleStepperClass() {
            g.findOne("[data-te-stepper-type]", this._element) !== null && this._steps.forEach((e)=>{
                g.findOne(`${wt}`, e).classList.remove("!my-0"), g.findOne(`${wt}`, e).classList.remove("!py-0"), g.findOne(`${wt}`, e).classList.remove("!h-0");
            });
        }
        _toggleStepClass(t, e, s) {
            s && this._steps[t].classList[e](s);
        }
        _bindKeysNavigation() {
            this._toggleStepTabIndex(!1, g.findOne(`${yt}`, this.activeStep)), this._steps.forEach((t)=>{
                const e = g.findOne(`${yt}`, t);
                b.on(e, gd, (s)=>{
                    const n = g.parents(s.currentTarget, `${ze}`)[0], o = g.next(n, `${ze}`)[0], r = g.prev(n, `${ze}`)[0], a = g.findOne(`${yt}`, n), l = g.findOne(`${yt}`, this.activeStep);
                    let c = null, h = null;
                    if (o && (c = g.findOne(`${yt}`, o)), r && (h = g.findOne(`${yt}`, r)), s.keyCode === Zi && this._currentView !== _e && (h ? (this._toggleStepTabIndex(a, h), this._toggleOutlineStyles(a, h), h.focus()) : c && (this._toggleStepTabIndex(a, c), this._toggleOutlineStyles(a, c), c.focus())), s.keyCode === Qi && this._currentView !== _e && (c ? (this._toggleStepTabIndex(a, c), this._toggleOutlineStyles(a, c), c.focus()) : h && (this._toggleStepTabIndex(a, h), this._toggleOutlineStyles(a, h), h.focus())), s.keyCode === ut && this._currentView === _e && (s.preventDefault(), c && (this._toggleStepTabIndex(a, c), this._toggleOutlineStyles(a, c), c.focus())), s.keyCode === Tt && this._currentView === _e && (s.preventDefault(), h && (this._toggleStepTabIndex(a, h), this._toggleOutlineStyles(a, h), h.focus())), s.keyCode === Ji) {
                        const d = g.findOne(`${yt}`, this._steps[0]);
                        this._toggleStepTabIndex(a, d), this._toggleOutlineStyles(a, d), d.focus();
                    }
                    if (s.keyCode === ts) {
                        const d = this._steps[this._steps.length - 1], u = g.findOne(`${yt}`, d);
                        this._toggleStepTabIndex(a, u), this._toggleOutlineStyles(a, u), u.focus();
                    }
                    (s.keyCode === Pt || s.keyCode === oo) && (s.preventDefault(), this.changeStep(this._steps.indexOf(n))), s.keyCode === Rs && (this._toggleStepTabIndex(a, l), this._toggleOutlineStyles(a, !1), l.focus());
                }), b.on(e, Iy, (s)=>{
                    const n = g.parents(s.currentTarget, `${ze}`)[0], o = g.findOne(`${yt}`, n), r = g.findOne(`${yt}`, this.activeStep);
                    s.keyCode === Rs && (this._toggleStepTabIndex(o, r), this._toggleOutlineStyles(!1, r), r.focus());
                });
            });
        }
        _toggleStepTabIndex(t, e) {
            t && t.setAttribute("tabIndex", -1), e && e.setAttribute("tabIndex", 0);
        }
        _toggleOutlineStyles(t, e) {
            t && (t.style.outline = ""), e && (e.style.outline = "revert");
        }
        _toggleDisabled() {
            const t = g.find(`${yt}`, this._element), e = g.find(`${Do}`, this._element);
            t[this._activeStepIndex].classList.add("color-[#858585]"), t[this._activeStepIndex].classList.add("cursor-default"), e[this._activeStepIndex].classList.add("!bg-[#858585]"), this._toggleStepClass(this._activeStepIndex, "add", this._options.stepperDisabled);
        }
        _toggleActive(t) {
            const e = g.find(`${bd}`, this._element), s = g.find(`${Do}`, this._element);
            e[t].classList.add("font-medium"), s[t].classList.add("!bg-primary-100"), s[t].classList.add("!text-primary-700"), s[t].classList.remove("!bg-success-100"), s[t].classList.remove("!text-success-700"), e[this._activeStepIndex].classList.remove("font-medium"), s[this._activeStepIndex].classList.remove("!bg-primary-100"), s[this._activeStepIndex].classList.remove("!text-primary-700"), this._toggleStepClass(t, "add", this._options.stepperActive), this._toggleStepClass(this._activeStepIndex, "remove", this._options.stepperActive);
        }
        _toggleCompleted(t) {
            const e = g.find(`${Do}`, this._element);
            e[t].classList.add("!bg-success-100"), e[t].classList.add("!text-success-700"), e[t].classList.remove("!bg-danger-100"), e[t].classList.remove("!text-danger-700"), this._toggleStepClass(t, "add", this._options.stepperCompleted), this._toggleStepClass(t, "remove", this._options.stepperInvalid);
        }
        _hideInactiveSteps() {
            this._steps.forEach((t)=>{
                t.getAttribute("data-te") || this._hideElement(g.findOne(`${wt}`, t));
            });
        }
        _setHeight(t) {
            const e = g.findOne(`${wt}`, t), s = getComputedStyle(e), n = g.findOne(`${yt}`, t), o = getComputedStyle(n), r = e.offsetHeight + parseFloat(s.marginTop) + parseFloat(s.marginBottom), a = n.offsetHeight + parseFloat(o.marginTop) + parseFloat(o.marginBottom);
            this._element.style.height = `${a + r}px`;
        }
        _hideElement(t) {
            !g.parents(t, `${ze}`)[0].getAttribute("data-te") && this._currentView !== _e || (t.classList.add("!my-0"), t.classList.add("!py-0"), t.classList.add("!h-0"));
        }
        _showElement(t) {
            this._currentView === _e ? (t.classList.remove("!my-0"), t.classList.remove("!py-0"), t.classList.remove("!h-0")) : t.style.display = "block";
        }
        _animateHorizontalStep(t) {
            const e = t > this._activeStepIndex, s = g.findOne(`${wt}`, this._steps[t]), n = g.findOne(`${wt}`, this.activeStep);
            let o, r;
            this._steps.forEach((h, d)=>{
                const u = g.findOne(`${wt}`, h);
                d !== t && d !== this._activeStepIndex && this._hideElement(u);
            });
            const a = "translate-x-[150%]", l = "-translate-x-[150%]", c = "translate-0";
            e ? (r = l, o = c, s.classList.remove("translate-x-[150%]"), s.classList.remove("-translate-x-[150%]")) : (r = a, o = c, s.classList.remove("-translate-x-[150%]"), s.classList.remove("translate-x-[150%]")), n.classList.add(r), s.classList.add(o), this._setHeight(this._steps[t]);
        }
        _animateVerticalStep(t) {
            const e = g.findOne(`${wt}`, this._steps[t]), s = g.findOne(`${wt}`, this.activeStep);
            this._hideElement(s), this._showElement(e);
        }
        static getInstance(t) {
            return P.getData(t, So);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    }
    const yd = "data-te-input-state-active", Mo = "data-te-input-selected", xd = "data-te-input-multiple-active", Ed = "[data-te-form-check-input]";
    class Cd {
        constructor(t, e, s, n, o, r, a, l, c, h, d){
            this.id = t, this.nativeOption = e, this.multiple = s, this.value = n, this.label = o, this.selected = r, this.disabled = a, this.hidden = l, this.secondaryText = c, this.groupId = h, this.icon = d, this.node = null, this.active = !1;
        }
        select() {
            this.multiple ? this._selectMultiple() : this._selectSingle();
        }
        _selectSingle() {
            this.selected || (this.node.setAttribute(Mo, ""), this.node.setAttribute("aria-selected", !0), this.selected = !0, this.nativeOption && (this.nativeOption.selected = !0));
        }
        _selectMultiple() {
            if (!this.selected) {
                const t = g.findOne(Ed, this.node);
                t.checked = !0, this.node.setAttribute(Mo, ""), this.node.setAttribute("aria-selected", !0), this.selected = !0, this.nativeOption && (this.nativeOption.selected = !0);
            }
        }
        deselect() {
            this.multiple ? this._deselectMultiple() : this._deselectSingle();
        }
        _deselectSingle() {
            this.selected && (this.node.removeAttribute(Mo), this.node.setAttribute("aria-selected", !1), this.selected = !1, this.nativeOption && (this.nativeOption.selected = !1));
        }
        _deselectMultiple() {
            if (this.selected) {
                const t = g.findOne(Ed, this.node);
                t.checked = !1, this.node.removeAttribute(Mo), this.node.setAttribute("aria-selected", !1), this.selected = !1, this.nativeOption && (this.nativeOption.selected = !1);
            }
        }
        setNode(t) {
            this.node = t;
        }
        setActiveStyles() {
            if (!this.active) {
                if (this.multiple) {
                    this.node.setAttribute(xd, "");
                    return;
                }
                this.active = !0, this.node.setAttribute(yd, "");
            }
        }
        removeActiveStyles() {
            this.active && (this.active = !1, this.node.removeAttribute(yd)), this.multiple && this.node.removeAttribute(xd);
        }
    }
    class Ly {
        constructor(t = !1){
            this._multiple = t, this._selections = [];
        }
        select(t) {
            this._multiple ? this._selections.push(t) : this._selections = [
                t
            ];
        }
        deselect(t) {
            if (this._multiple) {
                const e = this._selections.findIndex((s)=>t === s);
                this._selections.splice(e, 1);
            } else this._selections = [];
        }
        clear() {
            this._selections = [];
        }
        get selection() {
            return this._selections[0];
        }
        get selections() {
            return this._selections;
        }
        get label() {
            return this._selections[0] && this.selection.label;
        }
        get labels() {
            return this._selections.map((t)=>t.label).join(", ");
        }
        get value() {
            return this.selections[0] && this.selection.value;
        }
        get values() {
            return this._selections.map((t)=>t.value);
        }
    }
    function Sa(i) {
        return i.filter((t)=>!t.disabled).every((t)=>t.selected);
    }
    const Py = "data-te-select-form-outline-ref", Ry = "data-te-select-wrapper-ref", Ny = "data-te-select-input-ref", $y = "data-te-select-clear-btn-ref", By = "data-te-select-dropdown-container-ref", Hy = "data-te-select-dropdown-ref", Fy = "data-te-select-options-wrapper-ref", Vy = "data-te-select-options-list-ref", Wy = "data-te-select-input-filter-ref", Td = "data-te-select-option-ref", zy = "data-te-select-option-all-ref", jy = "data-te-select-option-text-ref", Yy = "data-te-form-check-input", Ky = "data-te-select-option-group-ref", Uy = "data-te-select-option-group-label-ref", Ad = "data-te-select-selected", Xy = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`, Gy = (i)=>{
        i.code === "Tab" || i.code === "Esc" || i.preventDefault();
    };
    function Io(i, t, e, s, n) {
        t.selectSize === "default" && v.addClass(i, e), t.selectSize === "sm" && v.addClass(i, s), t.selectSize === "lg" && v.addClass(i, n);
    }
    function qy(i, t, e, s) {
        const n = document.createElement("div");
        n.setAttribute("id", i), n.setAttribute(Ry, "");
        const o = z("div");
        o.setAttribute(Py, ""), v.addClass(o, s.formOutline);
        const r = z("input"), a = t.selectFilter ? "combobox" : "listbox", l = t.multiple ? "true" : "false", c = t.disabled ? "true" : "false";
        r.setAttribute(Ny, ""), v.addClass(r, s.selectInput), Io(r, t, s.selectInputSizeDefault, s.selectInputSizeSm, s.selectInputSizeLg), t.selectFormWhite && v.addClass(r, s.selectInputWhite), r.setAttribute("type", "text"), r.setAttribute("role", a), r.setAttribute("aria-multiselectable", l), r.setAttribute("aria-disabled", c), r.setAttribute("aria-haspopup", "true"), r.setAttribute("aria-expanded", !1), t.tabIndex && r.setAttribute("tabIndex", t.tabIndex), t.disabled && r.setAttribute("disabled", ""), t.selectPlaceholder !== "" && r.setAttribute("placeholder", t.selectPlaceholder), t.selectValidation ? (v.addStyle(r, {
            "pointer-events": "none",
            "caret-color": "transparent"
        }), v.addStyle(o, {
            cursor: "pointer"
        })) : r.setAttribute("readonly", "true"), t.selectValidation && (r.setAttribute("required", "true"), r.setAttribute("aria-required", "true"), r.addEventListener("keydown", Gy));
        const h = z("div");
        v.addClass(h, s.selectValidationValid);
        const d = document.createTextNode(`${t.selectValidFeedback}`);
        h.appendChild(d);
        const u = z("div");
        v.addClass(u, s.selectValidationInvalid);
        const f = document.createTextNode(`${t.selectInvalidFeedback}`);
        u.appendChild(f);
        const p = z("span");
        p.setAttribute($y, ""), v.addClass(p, s.selectClearBtn), Io(p, t, s.selectClearBtnDefault, s.selectClearBtnSm, s.selectClearBtnLg), t.selectFormWhite && v.addClass(p, s.selectClearBtnWhite);
        const _ = document.createTextNode("✕");
        p.appendChild(_), p.setAttribute("tabindex", "0");
        const m = z("span");
        return v.addClass(m, s.selectArrow), Io(m, t, s.selectArrowDefault, s.selectArrowSm, s.selectArrowLg), t.selectFormWhite && v.addClass(m, s.selectArrowWhite), m.innerHTML = Xy, o.appendChild(r), e && (v.addClass(e, s.selectLabel), Io(e, t, s.selectLabelSizeDefault, s.selectLabelSizeSm, s.selectLabelSizeLg), t.selectFormWhite && v.addClass(e, s.selectLabelWhite), o.appendChild(e)), t.selectValidation && (o.appendChild(h), o.appendChild(u)), t.selectClearButton && o.appendChild(p), o.appendChild(m), n.appendChild(o), n;
    }
    function wd(i, t, e, s, n, o, r, a) {
        const l = document.createElement("div");
        l.setAttribute(By, ""), v.addClass(l, a.selectDropdownContainer), l.setAttribute("id", `${i}`), l.style.width = `${e}px`;
        const c = document.createElement("div");
        c.setAttribute("tabindex", 0), c.setAttribute(Hy, ""), v.addClass(c, a.dropdown);
        const h = z("div");
        h.setAttribute(Fy, ""), v.addClass(h, a.optionsWrapper), v.addClass(h, a.optionsWrapperScrollbar), h.style.maxHeight = `${s}px`;
        const d = kd(o, n, t, a);
        return h.appendChild(d), t.selectFilter && c.appendChild(Zy(t.selectSearchPlaceholder, a)), c.appendChild(h), r && c.appendChild(r), l.appendChild(c), l;
    }
    function kd(i, t, e, s) {
        const n = z("div");
        n.setAttribute(Vy, ""), v.addClass(n, s.optionsList);
        let o;
        return e.multiple ? o = Jy(i, t, e, s) : o = Qy(i, e, s), o.forEach((r)=>{
            n.appendChild(r);
        }), n;
    }
    function Zy(i, t) {
        const e = z("div");
        v.addClass(e, t.inputGroup);
        const s = z("input");
        return s.setAttribute(Wy, ""), v.addClass(s, t.selectFilterInput), s.placeholder = i, s.setAttribute("role", "searchbox"), s.setAttribute("type", "text"), e.appendChild(s), e;
    }
    function Qy(i, t, e) {
        return Sd(i, t, e);
    }
    function Jy(i, t, e, s) {
        let n = null;
        e.selectAll && (n = tx(t, i, e, s));
        const o = Sd(i, e, s);
        return n ? [
            n,
            ...o
        ] : o;
    }
    function Sd(i, t, e) {
        const s = [];
        return i.forEach((n)=>{
            if (Object.prototype.hasOwnProperty.call(n, "options")) {
                const r = nx(n, t, e);
                s.push(r);
            } else s.push(Od(n, t, e));
        }), s;
    }
    function tx(i, t, e, s) {
        const n = Sa(t), o = z("div");
        return o.setAttribute(Td, ""), v.addClass(o, s.selectOption), o.setAttribute(zy, ""), v.addStyle(o, {
            height: `${e.selectOptionHeight}px`
        }), o.setAttribute("role", "option"), o.setAttribute("aria-selected", n), n && o.setAttribute(Ad, ""), o.appendChild(Dd(i, e, s)), i.setNode(o), o;
    }
    function Od(i, t, e) {
        if (i.node) return i.node;
        const s = z("div");
        return s.setAttribute(Td, ""), v.addClass(s, e.selectOption), v.addStyle(s, {
            height: `${t.selectOptionHeight}px`
        }), v.setDataAttribute(s, "id", i.id), s.setAttribute("role", "option"), s.setAttribute("aria-selected", i.selected), s.setAttribute("aria-disabled", i.disabled), i.selected && s.setAttribute(Ad, ""), i.disabled && s.setAttribute("data-te-select-option-disabled", !0), i.hidden && v.addClass(s, "hidden"), s.appendChild(Dd(i, t, e)), i.icon && s.appendChild(sx(i, e)), i.setNode(s), s;
    }
    function Dd(i, t, e) {
        const s = z("span");
        s.setAttribute(jy, ""), v.addClass(s, e.selectOptionText);
        const n = document.createTextNode(i.label);
        return t.multiple && s.appendChild(ix(i, e)), s.appendChild(n), (i.secondaryText || typeof i.secondaryText == "number") && s.appendChild(ex(i.secondaryText, e)), s;
    }
    function ex(i, t) {
        const e = z("span");
        v.addClass(e, t.selectOptionSecondaryText);
        const s = document.createTextNode(i);
        return e.appendChild(s), e;
    }
    function ix(i, t) {
        const e = z("input");
        e.setAttribute("type", "checkbox"), v.addClass(e, t.formCheckInput), e.setAttribute(Yy, "");
        const s = z("label");
        return i.selected && e.setAttribute("checked", !0), i.disabled && e.setAttribute("disabled", !0), e.appendChild(s), e;
    }
    function sx(i, t) {
        const e = z("span"), s = z("img");
        return v.addClass(s, t.selectOptionIcon), s.src = i.icon, e.appendChild(s), e;
    }
    function nx(i, t, e) {
        const s = z("div");
        s.setAttribute(Ky, ""), v.addClass(s, e.selectOptionGroup), s.setAttribute("role", "group"), s.setAttribute("id", i.id), i.hidden && v.addClass(s, "hidden");
        const n = z("label");
        return n.setAttribute(Uy, ""), v.addClass(n, e.selectOptionGroupLabel), v.addStyle(n, {
            height: `${t.selectOptionHeight}px`
        }), n.setAttribute("for", i.id), n.textContent = i.label, s.appendChild(n), i.options.forEach((o)=>{
            s.appendChild(Od(o, t, e));
        }), s;
    }
    function ox(i, t) {
        const e = z("div");
        return e.innerHTML = i, v.addClass(e, t.selectLabel), v.addClass(e, t.selectFakeValue), e;
    }
    const Oa = "select", zs = "te.select", js = `.${zs}`, rx = `close${js}`, ax = `open${js}`, Md = `optionSelect${js}`, Id = `optionDeselect${js}`, lx = `valueChange${js}`, cx = "change", Ld = "data-te-select-init", Pd = "data-te-select-no-results-ref", Rd = "data-te-select-open", xt = "data-te-input-state-active", je = "data-te-input-focused", Da = "data-te-input-disabled", hx = "data-te-select-option-group-label-ref", dx = "data-te-select-option-all-ref", Ys = "data-te-select-selected", ux = "[data-te-select-label-ref]", Nd = "[data-te-select-input-ref]", fx = "[data-te-select-input-filter-ref]", px = "[data-te-select-dropdown-ref]", _x = "[data-te-select-options-wrapper-ref]", $d = "[data-te-select-options-list-ref]", gx = "[data-te-select-option-ref]", mx = "[data-te-select-clear-btn-ref]", bx = "[data-te-select-custom-content-ref]", vx = `[${Pd}]`, Bd = "[data-te-select-form-outline-ref]", yx = "[data-te-select-toggle]", Ma = "[data-te-input-notch-ref]", xx = 200, Ex = {
        selectAutoSelect: !1,
        selectContainer: "body",
        selectClearButton: !1,
        disabled: !1,
        selectDisplayedLabels: 5,
        selectFormWhite: !1,
        multiple: !1,
        selectOptionsSelectedLabel: "options selected",
        selectOptionHeight: 38,
        selectAll: !0,
        selectAllLabel: "Select all",
        selectSearchPlaceholder: "Search...",
        selectSize: "default",
        selectVisibleOptions: 5,
        selectFilter: !1,
        selectFilterDebounce: 300,
        selectNoResultText: "No results",
        selectValidation: !1,
        selectValidFeedback: "Valid",
        selectInvalidFeedback: "Invalid",
        selectPlaceholder: ""
    }, Cx = {
        selectAutoSelect: "boolean",
        selectContainer: "string",
        selectClearButton: "boolean",
        disabled: "boolean",
        selectDisplayedLabels: "number",
        selectFormWhite: "boolean",
        multiple: "boolean",
        selectOptionsSelectedLabel: "string",
        selectOptionHeight: "number",
        selectAll: "boolean",
        selectAllLabel: "string",
        selectSearchPlaceholder: "string",
        selectSize: "string",
        selectVisibleOptions: "number",
        selectFilter: "boolean",
        selectFilterDebounce: "number",
        selectNoResultText: "string",
        selectValidation: "boolean",
        selectValidFeedback: "string",
        selectInvalidFeedback: "string",
        selectPlaceholder: "string"
    }, Tx = {
        dropdown: "relative outline-none min-w-[100px] m-0 scale-[0.8] opacity-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none data-[te-select-open]:scale-100 data-[te-select-open]:opacity-100 dark:bg-zinc-700",
        formCheckInput: "relative float-left mt-[0.15rem] mr-[8px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent",
        formOutline: "relative",
        initialized: "hidden",
        inputGroup: "flex items-center whitespace-nowrap p-2.5 text-center text-base font-normal leading-[1.6] text-gray-700 dark:bg-zinc-800 dark:text-gray-200 dark:placeholder:text-gray-200",
        noResult: "flex items-center px-4",
        optionsList: "list-none m-0 p-0",
        optionsWrapper: "overflow-y-auto",
        optionsWrapperScrollbar: "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-l [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded",
        selectArrow: "absolute right-3 text-[0.8rem] cursor-pointer peer-focus:text-primary peer-data-[te-input-focused]:text-primary group-data-[te-was-validated]/validation:peer-valid:text-green-600 group-data-[te-was-validated]/validation:peer-invalid:text-[rgb(220,76,100)] w-5 h-5",
        selectArrowWhite: "text-gray-50 peer-focus:!text-white peer-data-[te-input-focused]:!text-white",
        selectArrowDefault: "top-2",
        selectArrowLg: "top-[13px]",
        selectArrowSm: "top-1",
        selectClearBtn: "absolute top-2 right-9 text-black cursor-pointer focus:text-primary outline-none dark:text-gray-200",
        selectClearBtnWhite: "!text-gray-50",
        selectClearBtnDefault: "top-2 text-base",
        selectClearBtnLg: "top-[11px] text-base",
        selectClearBtnSm: "top-1 text-[0.8rem]",
        selectDropdownContainer: "z-[1070]",
        selectFakeValue: "transform-none hidden data-[te-input-state-active]:block",
        selectFilterInput: "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out motion-reduce:transition-none focus:border-primary focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-200",
        selectInput: "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 cursor-pointer data-[te-input-disabled]:bg-[#e9ecef] data-[te-input-disabled]:cursor-default group-data-[te-was-validated]/validation:mb-4 dark:data-[te-input-disabled]:bg-zinc-600",
        selectInputWhite: "!text-gray-50",
        selectInputSizeDefault: "py-[0.32rem] px-3 leading-[1.6]",
        selectInputSizeLg: "py-[0.32rem] px-3 leading-[2.15]",
        selectInputSizeSm: "py-[0.33rem] px-3 text-xs leading-[1.5]",
        selectLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate text-gray-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200 data-[te-input-state-active]:scale-[0.8] dark:peer-focus:text-primary",
        selectLabelWhite: "!text-gray-50",
        selectLabelSizeDefault: "pt-[0.37rem] leading-[1.6] peer-focus:-translate-y-[0.9rem] peer-data-[te-input-state-active]:-translate-y-[0.9rem] data-[te-input-state-active]:-translate-y-[0.9rem]",
        selectLabelSizeLg: "pt-[0.37rem] leading-[2.15] peer-focus:-translate-y-[1.15rem] peer-data-[te-input-state-active]:-translate-y-[1.15rem] data-[te-input-state-active]:-translate-y-[1.15rem]",
        selectLabelSizeSm: "pt-[0.37rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem] peer-data-[te-input-state-active]:-translate-y-[0.75rem] data-[te-input-state-active]:-translate-y-[0.75rem]",
        selectOption: "flex flex-row items-center justify-between w-full px-4 truncate text-gray-700 bg-transparent select-none cursor-pointer data-[te-input-multiple-active]:bg-black/5 hover:[&:not([data-te-select-option-disabled])]:bg-black/5 data-[te-input-state-active]:bg-black/5 data-[te-select-option-selected]:data-[te-input-state-active]:bg-black/5 data-[te-select-selected]:data-[te-select-option-disabled]:cursor-default data-[te-select-selected]:data-[te-select-option-disabled]:text-gray-400 data-[te-select-selected]:data-[te-select-option-disabled]:bg-transparent data-[te-select-option-selected]:bg-black/[0.02] data-[te-select-option-disabled]:text-gray-400 data-[te-select-option-disabled]:cursor-default group-data-[te-select-option-group-ref]/opt:pl-7 dark:text-gray-200 dark:hover:[&:not([data-te-select-option-disabled])]:bg-white/30 dark:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-selected]:data-[te-input-state-active]:bg-white/30 dark:data-[te-select-option-disabled]:text-gray-400 dark:data-[te-input-multiple-active]:bg-white/30",
        selectOptionGroup: "group/opt",
        selectOptionGroupLabel: "flex flex-row items-center w-full px-4 truncate bg-transparent text-black/50 select-none dark:text-gray-300",
        selectOptionIcon: "w-7 h-7 rounded-full",
        selectOptionSecondaryText: "block text-[0.8rem] text-gray-500 dark:text-gray-300",
        selectOptionText: "group",
        selectValidationValid: "hidden absolute -mt-3 w-auto text-sm text-green-600 cursor-pointer group-data-[te-was-validated]/validation:peer-valid:block",
        selectValidationInvalid: "hidden absolute -mt-3 w-auto text-sm text-[rgb(220,76,100)] cursor-pointer group-data-[te-was-validated]/validation:peer-invalid:block"
    }, Ax = {
        dropdown: "string",
        formCheckInput: "string",
        formOutline: "string",
        initialized: "string",
        inputGroup: "string",
        noResult: "string",
        optionsList: "string",
        optionsWrapper: "string",
        optionsWrapperScrollbar: "string",
        selectArrow: "string",
        selectArrowDefault: "string",
        selectArrowLg: "string",
        selectArrowSm: "string",
        selectClearBtn: "string",
        selectClearBtnDefault: "string",
        selectClearBtnLg: "string",
        selectClearBtnSm: "string",
        selectDropdownContainer: "string",
        selectFakeValue: "string",
        selectFilterInput: "string",
        selectInput: "string",
        selectInputSizeDefault: "string",
        selectInputSizeLg: "string",
        selectInputSizeSm: "string",
        selectLabel: "string",
        selectLabelSizeDefault: "string",
        selectLabelSizeLg: "string",
        selectLabelSizeSm: "string",
        selectOption: "string",
        selectOptionGroup: "string",
        selectOptionGroupLabel: "string",
        selectOptionIcon: "string",
        selectOptionSecondaryText: "string",
        selectOptionText: "string"
    };
    class Lo {
        constructor(t, e, s){
            this._element = t, this._config = this._getConfig(e), this._classes = this._getClasses(s), this._optionsToRender = this._getOptionsToRender(t), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._filteredOptionsList = null, this._selectionModel = new Ly(this.multiple), this._activeOptionIndex = -1, this._activeOption = null, this._wrapperId = se("select-wrapper-"), this._dropdownContainerId = se("select-dropdown-container-"), this._selectAllId = se("select-all-"), this._debounceTimeoutId = null, this._dropdownHeight = this._config.selectOptionHeight * this._config.selectVisibleOptions, this._popper = null, this._input = null, this._label = g.next(this._element, ux)[0], this._notch = null, this._fakeValue = null, this._isFakeValueActive = !1, this._customContent = g.next(t, bx)[0], this._toggleButton = null, this._elementToggle = null, this._wrapper = null, this._inputEl = null, this._dropdownContainer = null, this._container = null, this._selectAllOption = null, this._init(), this._mutationObserver = null, this._isOpen = !1, this._addMutationObserver(), this._element && P.setData(t, zs, this);
        }
        static get NAME() {
            return Oa;
        }
        get filterInput() {
            return g.findOne(fx, this._dropdownContainer);
        }
        get dropdown() {
            return g.findOne(px, this._dropdownContainer);
        }
        get optionsList() {
            return g.findOne($d, this._dropdownContainer);
        }
        get optionsWrapper() {
            return g.findOne(_x, this._dropdownContainer);
        }
        get clearButton() {
            return g.findOne(mx, this._wrapper);
        }
        get options() {
            return this._filteredOptionsList ? this._filteredOptionsList : this._plainOptions;
        }
        get value() {
            return this.multiple ? this._selectionModel.values : this._selectionModel.value;
        }
        get multiple() {
            return this._config.multiple;
        }
        get hasSelectAll() {
            return this.multiple && this._config.selectAll;
        }
        get hasSelection() {
            return this._selectionModel.selection || this._selectionModel.selections.length > 0;
        }
        _getConfig(t) {
            const e = v.getDataAttributes(this._element);
            return t = {
                ...Ex,
                ...e,
                ...t
            }, this._element.hasAttribute("multiple") && (t.multiple = !0), this._element.hasAttribute("disabled") && (t.disabled = !0), this._element.tabIndex && (t.tabIndex = this._element.getAttribute("tabIndex")), W(Oa, t, Cx), t;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...Tx,
                ...e,
                ...t
            }, W(Oa, t, Ax), t;
        }
        _getOptionsToRender(t) {
            const e = [];
            return t.childNodes.forEach((n)=>{
                if (n.nodeName === "OPTGROUP") {
                    const o = {
                        id: se("group-"),
                        label: n.label,
                        disabled: n.hasAttribute("disabled"),
                        hidden: n.hasAttribute("hidden"),
                        options: []
                    };
                    n.childNodes.forEach((a)=>{
                        a.nodeName === "OPTION" && o.options.push(this._createOptionObject(a, o));
                    }), e.push(o);
                } else n.nodeName === "OPTION" && e.push(this._createOptionObject(n));
            }), e;
        }
        _getPlainOptions(t) {
            if (!g.findOne("optgroup", this._element)) return t;
            const s = [];
            return t.forEach((n)=>{
                Object.prototype.hasOwnProperty.call(n, "options") ? n.options.forEach((r)=>{
                    s.push(r);
                }) : s.push(n);
            }), s;
        }
        _createOptionObject(t, e = {}) {
            const s = se("option-"), n = e.id ? e.id : null, o = e.disabled ? e.disabled : !1, r = t.selected || t.hasAttribute(Ys), a = t.hasAttribute("disabled") || o, l = t.hasAttribute("hidden") || e && e.hidden, c = this.multiple, h = t.value, d = t.label, u = v.getDataAttribute(t, "selectSecondaryText"), f = v.getDataAttribute(t, "select-icon");
            return new Cd(s, t, c, h, d, r, a, l, u, n, f);
        }
        _getNavigationOptions() {
            const t = this.options.filter((e)=>!e.hidden);
            return this.hasSelectAll ? [
                this._selectAllOption,
                ...t
            ] : t;
        }
        _init() {
            this._renderMaterialWrapper(), this._wrapper = g.findOne(`#${this._wrapperId}`), this._input = g.findOne(Nd, this._wrapper), this._config.disabled && this._input.setAttribute(Da, "");
            const t = this._config.selectContainer;
            t === "body" ? this._container = document.body : this._container = g.findOne(t), this._initOutlineInput(), this._setDefaultSelections(), this._updateInputValue(), this._appendFakeValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._bindComponentEvents(), this.hasSelectAll && (this._selectAllOption = this._createSelectAllOption()), this._dropdownContainer = wd(this._dropdownContainerId, this._config, this._input.offsetWidth, this._dropdownHeight, this._selectAllOption, this._optionsToRender, this._customContent, this._classes), this._setFirstActiveOption(), this._listenToFocusChange();
        }
        _renderMaterialWrapper() {
            const t = qy(this._wrapperId, this._config, this._label, this._classes);
            this._element.parentNode.insertBefore(t, this._element), v.addClass(this._element, this._classes.initialized), t.appendChild(this._element);
        }
        _initOutlineInput() {
            const t = g.findOne(Bd, this._wrapper);
            new Z(t, {
                inputFormWhite: this._config.selectFormWhite
            }).init(), this._notch = g.findOne(Ma, this._wrapper);
        }
        _bindComponentEvents() {
            this._listenToComponentKeydown(), this._listenToWrapperClick(), this._listenToClearBtnClick(), this._listenToClearBtnKeydown();
        }
        _setDefaultSelections() {
            this.options.forEach((t)=>{
                t.selected && this._selectionModel.select(t);
            });
        }
        _listenToComponentKeydown() {
            b.on(this._wrapper, "keydown", this._handleKeydown.bind(this));
        }
        _handleKeydown(t) {
            this._isOpen && !this._config.selectFilter ? this._handleOpenKeydown(t) : this._handleClosedKeydown(t);
        }
        _handleOpenKeydown(t) {
            const e = t.keyCode, s = e === ro || e === Tt && t.altKey || e === Rs;
            if (e === Rs && this._config.selectAutoSelect && !this.multiple && this._handleAutoSelection(this._activeOption), s) {
                this.close(), this._input.focus();
                return;
            }
            switch(e){
                case ut:
                    this._setNextOptionActive(), this._scrollToOption(this._activeOption);
                    break;
                case Tt:
                    this._setPreviousOptionActive(), this._scrollToOption(this._activeOption);
                    break;
                case Ji:
                    this._setFirstOptionActive(), this._scrollToOption(this._activeOption);
                    break;
                case ts:
                    this._setLastOptionActive(), this._scrollToOption(this._activeOption);
                    break;
                case Pt:
                    t.preventDefault(), this._activeOption && (this.hasSelectAll && this._activeOptionIndex === 0 ? this._handleSelectAll() : this._handleSelection(this._activeOption));
                    return;
                default:
                    return;
            }
            t.preventDefault();
        }
        _handleClosedKeydown(t) {
            const e = t.keyCode;
            if (e === Pt && t.preventDefault(), (e === Pt || e === ut && t.altKey || e === ut && this.multiple) && this.open(), this.multiple) switch(e){
                case ut:
                    this.open();
                    break;
                case Tt:
                    this.open();
                    break;
                default:
                    return;
            }
            else switch(e){
                case ut:
                    this._setNextOptionActive(), this._handleSelection(this._activeOption);
                    break;
                case Tt:
                    this._setPreviousOptionActive(), this._handleSelection(this._activeOption);
                    break;
                case Ji:
                    this._setFirstOptionActive(), this._handleSelection(this._activeOption);
                    break;
                case ts:
                    this._setLastOptionActive(), this._handleSelection(this._activeOption);
                    break;
                default:
                    return;
            }
            t.preventDefault();
        }
        _scrollToOption(t) {
            if (!t) return;
            let e;
            const s = this.options.filter((h)=>!h.hidden);
            this.hasSelectAll ? e = s.indexOf(t) + 1 : e = s.indexOf(t);
            const n = this._getNumberOfGroupsBeforeOption(e), o = e + n, r = this.optionsWrapper, a = r.offsetHeight, l = this._config.selectOptionHeight, c = r.scrollTop;
            if (e > -1) {
                const h = o * l, d = h + l > c + a;
                h < c ? r.scrollTop = h : d ? r.scrollTop = h - a + l : r.scrollTop = c;
            }
        }
        _getNumberOfGroupsBeforeOption(t) {
            const e = this.options.filter((r)=>!r.hidden), s = this._optionsToRender.filter((r)=>!r.hidden), n = this.hasSelectAll ? t - 1 : t;
            let o = 0;
            for(let r = 0; r <= n; r++)e[r].groupId && s[o] && s[o].id && e[r].groupId === s[o].id && o++;
            return o;
        }
        _setNextOptionActive() {
            let t = this._activeOptionIndex + 1;
            const e = this._getNavigationOptions();
            if (e[t]) {
                for(; e[t].disabled;)if (t += 1, !e[t]) return;
                this._updateActiveOption(e[t], t);
            }
        }
        _setPreviousOptionActive() {
            let t = this._activeOptionIndex - 1;
            const e = this._getNavigationOptions();
            if (e[t]) {
                for(; e[t].disabled;)if (t -= 1, !e[t]) return;
                this._updateActiveOption(e[t], t);
            }
        }
        _setFirstOptionActive() {
            const e = this._getNavigationOptions();
            this._updateActiveOption(e[0], 0);
        }
        _setLastOptionActive() {
            const t = this._getNavigationOptions(), e = t.length - 1;
            this._updateActiveOption(t[e], e);
        }
        _updateActiveOption(t, e) {
            const s = this._activeOption;
            s && s.removeActiveStyles(), t.setActiveStyles(), this._activeOptionIndex = e, this._activeOption = t;
        }
        _listenToWrapperClick() {
            b.on(this._wrapper, "click", ()=>{
                this.toggle();
            });
        }
        _listenToClearBtnClick() {
            b.on(this.clearButton, "click", (t)=>{
                t.preventDefault(), t.stopPropagation(), this._handleClear();
            });
        }
        _listenToClearBtnKeydown() {
            b.on(this.clearButton, "keydown", (t)=>{
                t.keyCode === Pt && (this._handleClear(), t.preventDefault(), t.stopPropagation());
            });
        }
        _handleClear() {
            if (this.multiple) this._selectionModel.clear(), this._deselectAllOptions(this.options), this.hasSelectAll && this._updateSelectAllState();
            else {
                const t = this._selectionModel.selection;
                this._selectionModel.clear(), t.deselect();
            }
            this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(null), this._emitNativeChangeEvent();
        }
        _listenToOptionsClick() {
            b.on(this.optionsWrapper, "click", (t)=>{
                if (t.target.hasAttribute(hx)) return;
                const s = t.target.nodeName === "DIV" ? t.target : g.closest(t.target, gx);
                if (s.hasAttribute(dx)) {
                    this._handleSelectAll();
                    return;
                }
                const o = s.dataset.teId, r = this.options.find((a)=>a.id === o);
                r && !r.disabled && this._handleSelection(r);
            });
        }
        _handleSelectAll() {
            this._selectAllOption.selected ? (this._deselectAllOptions(this.options), this._selectAllOption.deselect()) : (this._selectAllOptions(this.options), this._selectAllOption.select()), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
        }
        _selectAllOptions(t) {
            t.forEach((e)=>{
                !e.selected && !e.disabled && (this._selectionModel.select(e), e.select());
            });
        }
        _deselectAllOptions(t) {
            t.forEach((e)=>{
                e.selected && !e.disabled && (this._selectionModel.deselect(e), e.deselect());
            });
        }
        _handleSelection(t) {
            this.multiple ? (this._handleMultiSelection(t), this.hasSelectAll && this._updateSelectAllState()) : this._handleSingleSelection(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
        }
        _handleAutoSelection(t) {
            this._singleOptionSelect(t), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility();
        }
        _handleSingleSelection(t) {
            this._singleOptionSelect(t), this.close(), this._input.focus();
        }
        _singleOptionSelect(t) {
            const e = this._selectionModel.selections[0];
            e && e !== t && (this._selectionModel.deselect(e), e.deselect(), e.node.setAttribute(Ys, !1), b.trigger(this._element, Id, {
                value: e.value
            })), (!e || e && t !== e) && (this._selectionModel.select(t), t.select(), t.node.setAttribute(Ys, !0), b.trigger(this._element, Md, {
                value: t.value
            }), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent());
        }
        _handleMultiSelection(t) {
            t.selected ? (this._selectionModel.deselect(t), t.deselect(), t.node.setAttribute(Ys, !1), b.trigger(this._element, Id, {
                value: t.value
            })) : (this._selectionModel.select(t), t.select(), t.node.setAttribute(Ys, !0), b.trigger(this._element, Md, {
                value: t.value
            })), this._emitValueChangeEvent(this.value), this._emitNativeChangeEvent();
        }
        _emitValueChangeEvent(t) {
            b.trigger(this._element, lx, {
                value: t
            });
        }
        _emitNativeChangeEvent() {
            b.trigger(this._element, cx);
        }
        _updateInputValue() {
            const t = this.multiple ? this._selectionModel.labels : this._selectionModel.label;
            let e;
            this.multiple && this._config.selectDisplayedLabels !== -1 && this._selectionModel.selections.length > this._config.selectDisplayedLabels ? e = `${this._selectionModel.selections.length} ${this._config.selectOptionsSelectedLabel}` : e = t, !this.multiple && !this._isSelectionValid(this._selectionModel.selection) ? this._input.value = "" : this._isLabelEmpty(this._selectionModel.selection) ? this._input.value = " " : e ? this._input.value = e : this.multiple || !this._optionsToRender[0] ? this._input.value = "" : this._input.value = this._optionsToRender[0].label;
        }
        _isSelectionValid(t) {
            return !(t && (t.disabled || t.value === ""));
        }
        _isLabelEmpty(t) {
            return !!(t && t.label === "");
        }
        _appendFakeValue() {
            if (!this._selectionModel.selection || this._selectionModel._multiple) return;
            const t = this._selectionModel.selection.label;
            this._fakeValue = ox(t, this._classes), g.findOne(Bd, this._wrapper).appendChild(this._fakeValue);
        }
        _updateLabelPosition() {
            const t = this._element.hasAttribute(Ld), e = this._input.value !== "";
            this._label && (t && (e || this._isOpen || this._isFakeValueActive) ? (this._label.setAttribute(xt, ""), this._notch.setAttribute(xt, "")) : (this._label.removeAttribute(xt), this._notch.removeAttribute(xt, "")));
        }
        _updateLabelPositionWhileClosing() {
            this._label && (this._input.value !== "" || this._isFakeValueActive ? (this._label.setAttribute(xt, ""), this._notch.setAttribute(xt, "")) : (this._label.removeAttribute(xt), this._notch.removeAttribute(xt)));
        }
        _updateFakeLabelPosition() {
            this._fakeValue && (this._input.value === "" && this._fakeValue.innerHTML !== "" ? (this._isFakeValueActive = !0, this._fakeValue.setAttribute(xt, "")) : (this._isFakeValueActive = !1, this._fakeValue.removeAttribute(xt)));
        }
        _updateClearButtonVisibility() {
            if (!this.clearButton) return;
            this._selectionModel.selection || this._selectionModel.selections.length > 0 ? v.addStyle(this.clearButton, {
                display: "block"
            }) : v.addStyle(this.clearButton, {
                display: "none"
            });
        }
        _updateSelectAllState() {
            const t = this._selectAllOption.selected, e = Sa(this.options);
            !e && t ? this._selectAllOption.deselect() : e && !t && this._selectAllOption.select();
        }
        toggle() {
            this._isOpen ? this.close() : this.open();
        }
        open() {
            const t = this._config.disabled, e = b.trigger(this._element, ax);
            this._isOpen || t || e.defaultPrevented || (this._openDropdown(), this._updateDropdownWidth(), this._setFirstActiveOption(), this._scrollToOption(this._activeOption), this._config.selectFilter && (setTimeout(()=>{
                this.filterInput.focus();
            }, 0), this._listenToSelectSearch(), this._listenToDropdownKeydown()), this._listenToOptionsClick(), this._listenToOutsideClick(), this._listenToWindowResize(), this._isOpen = !0, this._updateLabelPosition(), this._setInputActiveStyles());
        }
        _openDropdown() {
            this._popper = Fi(this._input, this._dropdownContainer, {
                placement: "bottom-start",
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [
                                0,
                                1
                            ]
                        }
                    }
                ]
            }), this._container.appendChild(this._dropdownContainer), setTimeout(()=>{
                this.dropdown.setAttribute(Rd, "");
            }, 0);
        }
        _updateDropdownWidth() {
            const t = this._input.offsetWidth;
            v.addStyle(this._dropdownContainer, {
                width: `${t}px`
            });
        }
        _setFirstActiveOption() {
            const t = this._getNavigationOptions(), e = this._activeOption;
            e && e.removeActiveStyles();
            const s = this.multiple ? this._selectionModel.selections[0] : this._selectionModel.selection;
            s ? (this._activeOption = s, s.setActiveStyles(), this._activeOptionIndex = t.findIndex((n)=>n === s)) : (this._activeOption = null, this._activeOptionIndex = -1);
        }
        _setInputActiveStyles() {
            this._input.setAttribute(je, ""), g.findOne(Ma, this._wrapper).setAttribute(je, "");
        }
        _listenToWindowResize() {
            b.on(window, "resize", this._handleWindowResize.bind(this));
        }
        _handleWindowResize() {
            this._dropdownContainer && this._updateDropdownWidth();
        }
        _listenToSelectSearch() {
            this.filterInput.addEventListener("input", (t)=>{
                const e = t.target.value, s = this._config.selectFilterDebounce;
                this._debounceFilter(e, s);
            });
        }
        _debounceFilter(t, e) {
            this._debounceTimeoutId && clearTimeout(this._debounceTimeoutId), this._debounceTimeoutId = setTimeout(()=>{
                this._filterOptions(t);
            }, e);
        }
        _filterOptions(t) {
            const e = [];
            this._optionsToRender.forEach((o)=>{
                const r = Object.prototype.hasOwnProperty.call(o, "options"), a = !r && o.label.toLowerCase().includes(t.toLowerCase()), l = {};
                r && (l.label = o.label, l.options = this._filter(t, o.options), l.options.length > 0 && e.push(l)), a && e.push(o);
            });
            const s = this._config.selectNoResultText !== "", n = e.length !== 0;
            if (n) this._updateOptionsListTemplate(e), this._popper.forceUpdate(), this._filteredOptionsList = this._getPlainOptions(e), this.hasSelectAll && this._updateSelectAllState(), this._setFirstActiveOption();
            else if (!n && s) {
                const o = this._getNoResultTemplate();
                this.optionsWrapper.innerHTML = o;
            }
        }
        _updateOptionsListTemplate(t) {
            const e = g.findOne($d, this._dropdownContainer) || g.findOne(vx, this._dropdownContainer), s = kd(t, this._selectAllOption, this._config, this._classes);
            this.optionsWrapper.removeChild(e), this.optionsWrapper.appendChild(s);
        }
        _getNoResultTemplate() {
            return `<div class="${this._classes.noResult}" ${Pd} style="height: ${this._config.selectOptionHeight}px">${this._config.selectNoResultText}</div>`;
        }
        _filter(t, e) {
            const s = t.toLowerCase();
            return e.filter((n)=>n.label.toLowerCase().includes(s));
        }
        _listenToDropdownKeydown() {
            b.on(this.dropdown, "keydown", this._handleOpenKeydown.bind(this));
        }
        _listenToOutsideClick() {
            this._outsideClick = this._handleOutSideClick.bind(this), b.on(document, "click", this._outsideClick);
        }
        _listenToFocusChange(t = !0) {
            if (t === !1) {
                b.remove(this._input, "focus", ()=>this._notch.setAttribute(je, "")), b.remove(this._input, "blur", ()=>this._notch.removeAttribute(je));
                return;
            }
            b.on(this._input, "focus", ()=>this._notch.setAttribute(je, "")), b.on(this._input, "blur", ()=>this._notch.removeAttribute(je));
        }
        _handleOutSideClick(t) {
            const e = this._wrapper && this._wrapper.contains(t.target), s = t.target === this._dropdownContainer, n = this._dropdownContainer && this._dropdownContainer.contains(t.target);
            let o;
            this._toggleButton || (this._elementToggle = g.find(yx)), this._elementToggle && this._elementToggle.forEach((r)=>{
                const a = v.getDataAttribute(r, "select-toggle");
                (a === this._element.id || this._element.classList.contains(a)) && (this._toggleButton = r, o = this._toggleButton.contains(t.target));
            }), !e && !s && !n && !o && this.close();
        }
        close() {
            const t = b.trigger(this._element, rx);
            !this._isOpen || t.defaultPrevented || (this._config.selectFilter && this.hasSelectAll && (this._resetFilterState(), this._updateOptionsListTemplate(this._optionsToRender), this._config.multiple && this._updateSelectAllState()), this._removeDropdownEvents(), this.dropdown.removeAttribute(Rd), setTimeout(()=>{
                this._input.removeAttribute(je), this._input.blur(), g.findOne(Ma, this._wrapper).removeAttribute(je), this._label && !this.hasSelection && (this._label.removeAttribute(xt), this._notch.setAttribute(xt, ""), this._input.removeAttribute(xt), this._notch.removeAttribute(xt)), this._updateLabelPositionWhileClosing();
            }, 0), setTimeout(()=>{
                this._container && this._dropdownContainer.parentNode === this._container && this._container.removeChild(this._dropdownContainer), this._popper.destroy(), this._isOpen = !1, b.off(this.dropdown, "transitionend");
            }, xx));
        }
        _resetFilterState() {
            this.filterInput.value = "", this._filteredOptionsList = null;
        }
        _removeDropdownEvents() {
            b.off(document, "click", this._outsideClick), this._config.selectFilter && b.off(this.dropdown, "keydown"), b.off(this.optionsWrapper, "click");
        }
        _addMutationObserver() {
            this._mutationObserver = new MutationObserver(()=>{
                this._wrapper && (this._updateSelections(), this._updateDisabledState());
            }), this._observeMutationObserver();
        }
        _updateSelections() {
            this._optionsToRender = this._getOptionsToRender(this._element), this._plainOptions = this._getPlainOptions(this._optionsToRender), this._selectionModel.clear(), this._setDefaultSelections(), this._updateInputValue(), this._updateFakeLabelPosition(), this._updateLabelPosition(), this._updateClearButtonVisibility(), this.hasSelectAll && this._updateSelectAllState();
            const t = this._config.filter && this.filterInput && this.filterInput.value;
            this._isOpen && !t ? (this._updateOptionsListTemplate(this._optionsToRender), this._setFirstActiveOption()) : this._isOpen && t ? (this._filterOptions(this.filterInput.value), this._setFirstActiveOption()) : this._dropdownContainer = wd(this._dropdownContainerId, this._config, this._input.offsetWidth, this._dropdownHeight, this._selectAllOption, this._optionsToRender, this._customContent, this._classes);
        }
        _updateDisabledState() {
            const t = g.findOne(Nd, this._wrapper);
            this._element.hasAttribute("disabled") ? (this._config.disabled = !0, t.setAttribute("disabled", ""), t.setAttribute(Da, "")) : (this._config.disabled = !1, t.removeAttribute("disabled"), t.removeAttribute(Da));
        }
        _observeMutationObserver() {
            this._mutationObserver && this._mutationObserver.observe(this._element, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            });
        }
        _disconnectMutationObserver() {
            this.mutationObserver && (this._mutationObserver.disconnect(), this._mutationObserver = null);
        }
        _createSelectAllOption() {
            const t = this._selectAllId, e = null, s = !0, n = "select-all", o = this._config.selectAllLabel, r = Sa(this.options), a = !1, l = !1, c = null, h = null, d = null;
            return new Cd(t, e, s, n, o, r, a, l, c, h, d);
        }
        dispose() {
            this._removeComponentEvents(), this._destroyMaterialSelect(), this._listenToFocusChange(!1), P.removeData(this._element, zs);
        }
        _removeComponentEvents() {
            b.off(this.input, "click"), b.off(this.wrapper, this._handleKeydown.bind(this)), b.off(this.clearButton, "click"), b.off(this.clearButton, "keydown"), b.off(window, "resize", this._handleWindowResize.bind(this));
        }
        _destroyMaterialSelect() {
            this._isOpen && this.close(), this._destroyMaterialTemplate();
        }
        _destroyMaterialTemplate() {
            const t = this._wrapper.parentNode, e = g.find("label", this._wrapper);
            t.appendChild(this._element), e.forEach((s)=>{
                t.appendChild(s);
            }), e.forEach((s)=>{
                s.removeAttribute(xt);
            }), v.removeClass(this._element, this._classes.initialized), this._element.removeActiveStyles(Ld), t.removeChild(this._wrapper);
        }
        setValue(t) {
            this.options.filter((s)=>s.selected).forEach((s)=>s.nativeOption.selected = !1), Array.isArray(t) ? t.forEach((s)=>{
                this._selectByValue(s);
            }) : this._selectByValue(t), this._updateSelections();
        }
        _selectByValue(t) {
            const e = this.options.find((s)=>s.value === t);
            return e ? (e.nativeOption.selected = !0, !0) : !1;
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                let s = P.getData(this, zs);
                const n = typeof t == "object" && t;
                if (!(!s && /dispose/.test(t)) && (s || (s = new Lo(this, n)), typeof t == "string")) {
                    if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
                    s[t](e);
                }
            });
        }
        static getInstance(t) {
            return P.getData(t, zs);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    }
    const wx = (i)=>{
        Nl(()=>{
            const t = Rl();
            if (t) {
                const e = i.NAME, s = t.fn[e];
                t.fn[e] = i.jQueryInterface, t.fn[e].Constructor = i, t.fn[e].noConflict = ()=>(t.fn[e] = s, i.jQueryInterface);
            }
        });
    }, kx = (i, t)=>{
        b.on(document, `click.te.${i.NAME}`, t, function(e) {
            e.preventDefault(), i.getOrCreateInstance(this).toggle();
        });
    }, Sx = (i, t)=>{
        b.on(document, `click.te.${i.NAME}.data-api`, t, function(e) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && e.preventDefault(), ei(this)) return;
            i.getOrCreateInstance(this).show();
        });
    }, Ox = (i, t)=>{
        b.on(document, `click.te.${i.NAME}.data-api`, t, function(e) {
            const s = Ie(this);
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && e.preventDefault(), ei(this)) return;
            b.one(s, i.EVENT_HIDDEN, ()=>{
                ne(this) && this.focus();
            });
            const n = g.findOne(i.OPEN_SELECTOR);
            n && n !== s && i.getInstance(n).hide(), i.getOrCreateInstance(s).toggle(this);
        });
    }, Dx = (i, t)=>{
        b.on(document, `click.te.${i.NAME}`, t, (e)=>{
            e.preventDefault();
            const s = e.target.closest(t);
            i.getOrCreateInstance(s).toggle();
        });
    }, Mx = (i, t)=>{
        b.on(document, `click.te.${i.NAME}`, t, function(e) {
            const s = Ie(this);
            [
                "A",
                "AREA"
            ].includes(this.tagName) && e.preventDefault(), b.one(s, i.EVENT_SHOW, (r)=>{
                r.defaultPrevented || b.one(s, i.EVENT_HIDDEN, ()=>{
                    ne(this) && this.focus();
                });
            });
            const n = g.findOne(`[${i.OPEN_SELECTOR}="true"]`);
            n && i.getInstance(n).hide(), i.getOrCreateInstance(s).toggle(this);
        });
    }, Ix = (i, t)=>{
        b.one(document, "mousedown", t, i.autoInitial(new i));
    }, Lx = (i, t)=>{
        b.on(document, `click.te.${i.NAME}.data-api`, t, function(e) {
            (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
            const s = yr(this);
            g.find(s).forEach((o)=>{
                i.getOrCreateInstance(o, {
                    toggle: !1
                }).toggle();
            });
        });
    }, Ye = {
        plugins: {
            legend: {
                labels: {
                    color: "rgb(102,102,102)"
                }
            }
        }
    }, Po = {
        line: {
            options: {
                ...Ye,
                elements: {
                    line: {
                        backgroundColor: "rgba(59, 112, 202, 0.0)",
                        borderColor: "rgb(59, 112, 202)",
                        borderWidth: 2,
                        tension: 0
                    },
                    point: {
                        borderColor: "rgb(59, 112, 202)",
                        backgroundColor: "rgb(59, 112, 202)"
                    }
                },
                responsive: !0,
                legend: {
                    display: !0
                },
                tooltips: {
                    intersect: !1,
                    mode: "index"
                },
                datasets: {
                    borderColor: "red"
                },
                scales: {
                    x: {
                        stacked: !0,
                        grid: {
                            display: !1
                        },
                        ticks: {
                            fontColor: "rgba(0,0,0, 0.5)"
                        }
                    },
                    y: {
                        stacked: !1,
                        grid: {
                            borderDash: [
                                2
                            ],
                            drawBorder: !1,
                            zeroLineColor: "rgba(0,0,0,0)",
                            zeroLineBorderDash: [
                                2
                            ],
                            zeroLineBorderDashOffset: [
                                2
                            ]
                        },
                        ticks: {
                            fontColor: "rgba(0,0,0, 0.5)"
                        }
                    }
                }
            }
        },
        bar: {
            options: {
                ...Ye,
                backgroundColor: "rgb(59, 112, 202)",
                borderWidth: 0,
                responsive: !0,
                legend: {
                    display: !0
                },
                tooltips: {
                    intersect: !1,
                    mode: "index"
                },
                scales: {
                    x: {
                        stacked: !0,
                        grid: {
                            display: !1
                        },
                        ticks: {
                            fontColor: "rgba(0,0,0, 0.5)"
                        }
                    },
                    y: {
                        stacked: !0,
                        grid: {
                            borderDash: [
                                2
                            ],
                            drawBorder: !1,
                            zeroLineColor: "rgba(0,0,0,0)",
                            zeroLineBorderDash: [
                                2
                            ],
                            zeroLineBorderDashOffset: [
                                2
                            ]
                        },
                        ticks: {
                            fontColor: "rgba(0,0,0, 0.5)"
                        }
                    }
                }
            }
        },
        pie: {
            options: {
                ...Ye,
                elements: {
                    arc: {
                        backgroundColor: "rgb(59, 112, 202)"
                    }
                },
                responsive: !0,
                legend: {
                    display: !0
                }
            }
        },
        doughnut: {
            options: {
                ...Ye,
                elements: {
                    arc: {
                        backgroundColor: "rgb(59, 112, 202)"
                    }
                },
                responsive: !0,
                legend: {
                    display: !0
                }
            }
        },
        polarArea: {
            options: {
                ...Ye,
                elements: {
                    arc: {
                        backgroundColor: "rgba(59, 112, 202, 0.5)"
                    }
                },
                responsive: !0,
                legend: {
                    display: !0
                }
            }
        },
        radar: {
            options: {
                ...Ye,
                elements: {
                    line: {
                        backgroundColor: "rgba(59, 112, 202, 0.5)",
                        borderColor: "rgb(59, 112, 202)",
                        borderWidth: 2
                    },
                    point: {
                        borderColor: "rgb(59, 112, 202)",
                        backgroundColor: "rgb(59, 112, 202)"
                    }
                },
                responsive: !0,
                legend: {
                    display: !0
                }
            }
        },
        scatter: {
            options: {
                ...Ye,
                elements: {
                    line: {
                        backgroundColor: "rgba(59, 112, 202, 0.5)",
                        borderColor: "rgb(59, 112, 202)",
                        borderWidth: 2,
                        tension: 0
                    },
                    point: {
                        borderColor: "rgb(59, 112, 202)",
                        backgroundColor: "rgba(59, 112, 202, 0.5)"
                    }
                },
                responsive: !0,
                legend: {
                    display: !0
                },
                tooltips: {
                    intersect: !1,
                    mode: "index"
                },
                datasets: {
                    borderColor: "red"
                },
                scales: {
                    x: {
                        stacked: !0,
                        grid: {
                            display: !1
                        },
                        ticks: {
                            fontColor: "rgba(0,0,0, 0.5)"
                        }
                    },
                    y: {
                        stacked: !1,
                        grid: {
                            borderDash: [
                                2
                            ],
                            drawBorder: !1,
                            zeroLineColor: "rgba(0,0,0,0)",
                            zeroLineBorderDash: [
                                2
                            ],
                            zeroLineBorderDashOffset: [
                                2
                            ]
                        },
                        ticks: {
                            fontColor: "rgba(0,0,0, 0.5)"
                        }
                    }
                }
            }
        },
        bubble: {
            options: {
                ...Ye,
                elements: {
                    point: {
                        borderColor: "rgb(59, 112, 202)",
                        backgroundColor: "rgba(59, 112, 202, 0.5)"
                    }
                },
                responsive: !0,
                legend: {
                    display: !0
                },
                scales: {
                    x: {
                        grid: {
                            display: !1
                        },
                        ticks: {
                            fontColor: "rgba(0,0,0, 0.5)"
                        }
                    },
                    y: {
                        grid: {
                            borderDash: [
                                2
                            ],
                            drawBorder: !1,
                            zeroLineColor: "rgba(0,0,0,0)",
                            zeroLineBorderDash: [
                                2
                            ],
                            zeroLineBorderDashOffset: [
                                2
                            ]
                        },
                        ticks: {
                            fontColor: "rgba(0,0,0, 0.5)"
                        }
                    }
                }
            }
        }
    }, Ks = {
        alert: {
            name: "Alert",
            selector: "[data-te-alert-init]",
            isToggler: !1
        },
        animation: {
            name: "Animate",
            selector: "[data-te-animation-init]",
            isToggler: !1
        },
        carousel: {
            name: "Carousel",
            selector: "[data-te-carousel-init]",
            isToggler: !1
        },
        chips: {
            name: "ChipsInput",
            selector: "[data-te-chips-init]",
            isToggler: !1
        },
        chip: {
            name: "Chip",
            selector: "[data-te-chip-init]",
            isToggler: !1
        },
        datepicker: {
            name: "Datepicker",
            selector: "[data-te-datepicker-init]",
            isToggler: !1
        },
        input: {
            name: "Input",
            selector: "[data-te-input-wrapper-init]",
            isToggler: !1
        },
        scrollspy: {
            name: "ScrollSpy",
            selector: "[data-te-spy='scroll']",
            isToggler: !1
        },
        select: {
            name: "Select",
            selector: "[data-te-select-init]",
            isToggler: !1
        },
        sidenav: {
            name: "Sidenav",
            selector: "[data-te-sidenav-init]",
            isToggler: !1
        },
        stepper: {
            name: "Stepper",
            selector: "[data-te-stepper-init]",
            isToggler: !1
        },
        timepicker: {
            name: "Timepicker",
            selector: "[data-te-timepicker-init]",
            isToggler: !1
        },
        toast: {
            name: "Toast",
            selector: "[data-te-toast-init]",
            isToggler: !1
        },
        chart: {
            name: "Chart",
            selector: "[data-te-chart]",
            isToggler: !1,
            advanced: (i, t)=>{
                const e = (o)=>o[0] === "{" && o[o.length - 1] === "}" || o[0] === "[" && o[o.length - 1] === "]", s = (o)=>typeof o != "string" ? o : e(o) ? JSON.parse(o.replace(/'/g, '"')) : o, n = (o)=>{
                    const r = {};
                    return Object.keys(o).forEach((a)=>{
                        if (a.match(/dataset.*/)) {
                            const l = a.slice(7, 8).toLowerCase().concat(a.slice(8));
                            r[l] = s(o[a]);
                        }
                    }), r;
                };
                g.find(t).forEach((o)=>{
                    if (v.getDataAttribute(o, "chart") !== "bubble" && v.getDataAttribute(o, "chart") !== "scatter") {
                        const r = v.getDataAttributes(o), a = {
                            data: {
                                datasets: [
                                    n(r)
                                ]
                            }
                        };
                        return r.chart && (a.type = r.chart), r.labels && (a.data.labels = JSON.parse(r.labels.replace(/'/g, '"'))), new i(o, {
                            ...a,
                            ...Po[a.type]
                        });
                    }
                    return null;
                });
            }
        },
        button: {
            name: "Button",
            selector: "[data-te-toggle='button']",
            isToggler: !0,
            callback: Dx
        },
        collapse: {
            name: "Collapse",
            selector: "[data-te-collapse-init]",
            isToggler: !0,
            callback: Lx
        },
        dropdown: {
            name: "Dropdown",
            selector: "[data-te-dropdown-toggle-ref]",
            isToggler: !0,
            callback: kx
        },
        modal: {
            name: "Modal",
            selector: "[data-te-toggle='modal']",
            isToggler: !0,
            callback: Mx
        },
        ripple: {
            name: "Ripple",
            selector: "[data-te-ripple-init]",
            isToggler: !0,
            callback: Ix
        },
        offcanvas: {
            name: "Offcanvas",
            selector: "[data-te-offcanvas-toggle]",
            isToggler: !0,
            callback: Ox
        },
        tab: {
            name: "Tab",
            selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
            isToggler: !0,
            callback: Sx
        }
    }, Px = (i)=>Ks[i.NAME] || null, Rx = (i)=>{
        if (!i || [].includes(i.NAME)) return;
        [].push(i.NAME);
        const t = Px(i), e = (t == null ? void 0 : t.isToggler) || !1;
        if (wx(i), t != null && t.advanced) {
            t == null || t.advanced(i, t == null ? void 0 : t.selector);
            return;
        }
        if (e) {
            t == null || t.callback(i, t == null ? void 0 : t.selector);
            return;
        }
        g.find(t == null ? void 0 : t.selector).forEach((s)=>{
            let n = i.getInstance(s);
            n || (n = new i(s));
        });
    }, Nx = (i)=>{
        i.forEach((t)=>Rx(t));
    }, Ia = (i, t = !1)=>{
        const e = Object.keys(Ks).map((s)=>{
            if (!!document.body.querySelector(Ks[s].selector)) {
                const o = i[Ks[s].name];
                return !o && ![].includes(s) && t && console.warn(`Please import ${Ks[s].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`), o;
            }
        });
        Nx(e);
    }, $x = ({ inputID: i, labelText: t }, e)=>(Ia({
            Input: Z
        }, !1), `<div data-te-chips-input-wrapper data-te-input-wrapper-init class="${e.chipsInputWrapper}">
      <input
          type="text"
          class="${e.chipsInput}"
          id="${i}"
          placeholder="Example label" />
        <label
          for="${i}"
          class="${e.chipsLabel}"
          >${t}
        </label>

        <div data-te-input-notch-ref class="${e.chipsNotchesWrapper}">
        <div class="${e.chipsNotchesLeading}" data-te-input-notch-leading-ref style="width: 9px;"></div>
        <div class="${e.chipsNotchesMiddle}" data-te-input-notch-middle-ref style="width: 87.2px;"></div>
        <div class="${e.chipsNotchesTrailing}" data-te-input-notch-trailing-ref></div>
      </div>
    </div>`), Bx = ({ text: i, iconSVG: t }, e)=>`<div data-te-chip-init data-te-ripple-init class="${e.chipElement}">
    <span data-te-chip-text>${i}</span> 
      <span data-te-chip-close class="${e.chipCloseIcon}">
        ${t}
      </span>
  </div>`, Ro = "chip", Hx = `te.${Ro}`, Hd = "data-te-chip-close", La = `[${Hd}]`, Fx = "delete.te.chips", Vx = "select.te.chip", Wx = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>', zx = {
        text: "string",
        closeIcon: "boolean",
        img: "object",
        iconSVG: "string"
    }, jx = {
        text: "",
        closeIcon: !1,
        img: {
            path: "",
            alt: ""
        },
        iconSVG: Wx
    }, Yx = {
        icon: "float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:text-[#8b8b8b] transition-all duration-200 ease-in-out",
        chipElement: "flex justify-between items-center h-[32px] leading-loose py-[5px] px-[12px] mr-4 my-[5px] text-[13px] font-normal text-[#4f4f4f] cursor-pointer bg-[#eceff1] dark:text-white dark:bg-neutral-600 rounded-[16px] transition-[opacity] duration-300 ease-linear [word-wrap: break-word] shadow-none normal-case hover:!shadow-none active:bg-[#cacfd1] inline-block font-medium leading-normal text-[#4f4f4f] text-center no-underline align-middle cursor-pointer select-none border-[.125rem] border-solid border-transparent py-1.5 px-3 text-xs rounded",
        chipCloseIcon: "w-4 float-right pl-[8px] text-[16px] opacity-[.53] cursor-pointer fill-[#afafaf] hover:fill-[#8b8b8b] dark:fill-gray-400 dark:hover:fill-gray-100 transition-all duration-200 ease-in-out"
    }, Kx = {
        icon: "string",
        chipElement: "string",
        chipCloseIcon: "string"
    };
    class vi {
        constructor(t, e = {}, s){
            this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(s);
        }
        static get NAME() {
            return Ro;
        }
        init() {
            this._appendCloseIcon(), this._handleDelete(), this._handleTextChip(), this._handleClickOnChip();
        }
        dispose() {
            this._element = null, this._options = null, b.off(this._element, "click");
        }
        appendChip() {
            const { text: t, closeIcon: e, iconSVG: s } = this._options;
            return Bx({
                text: t,
                closeIcon: e,
                iconSVG: s
            }, this._classes);
        }
        _appendCloseIcon(t = this._element) {
            if (!(g.find(La, this._element).length > 0) && this._options.closeIcon) {
                const e = z("span");
                e.classList = this._classes.icon, e.setAttribute(Hd), e.innerHTML = this._options.iconSVG, t.insertAdjacentElement("beforeend", e);
            }
        }
        _handleClickOnChip() {
            b.on(this._element, "click", (t)=>{
                const { textContent: e } = t.target, s = {};
                s.tag = e.trim(), b.trigger(Vx, {
                    event: t,
                    obj: s
                });
            });
        }
        _handleDelete() {
            g.find(La, this._element).length !== 0 && b.on(this._element, "click", La, ()=>{
                b.trigger(this._element, Fx), this._element.remove();
            });
        }
        _handleTextChip() {
            this._element.innerText === "" && (this._element.innerText = this._options.text);
        }
        _getConfig(t) {
            const e = {
                ...jx,
                ...v.getDataAttributes(this._element),
                ...t
            };
            return W(Ro, e, zx), e;
        }
        _getClasses(t) {
            const e = v.getDataClassAttributes(this._element);
            return t = {
                ...Yx,
                ...e,
                ...t
            }, W(Ro, t, Kx), t;
        }
        static getInstance(t) {
            return P.getData(t, Hx);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    }
    const Us = "chips", Xs = `data-te-${Us}`, Fd = `te.${Us}`, Ux = `${Xs}-init`, Bt = `${Xs}-active`, Vd = `${Xs}-initial`, Wd = `${Xs}-placeholder`, Xx = `${Xs}-input-wrapper`, Pa = "data-te-chip-init", zd = "data-te-chip-close", jd = "data-te-chip-text", Gx = `[${Bt}]`, Ra = `[${Pa}]`, qx = `${Ra}${Gx}`, Na = `[${zd}]`, Zx = `[${Xx}]`, Qx = `[${jd}]`, Jx = `[${Wd}]`, tE = "data-te-input-notch-leading-ref", eE = "data-te-input-notch-middle-ref", iE = `[${tE}]`, sE = `[${eE}]`, os = "data-te-input-state-active", $a = "[data-te-input-notch-ref]", nE = "add.te.chips", oE = "arrowDown.te.chips", rE = "arrowLeft.te.chips", aE = "arrowRight.te.chips", lE = "arrowUp.te.chips", Yd = "delete.te.chips", Kd = "select.te.chips", cE = {
        inputID: "string",
        parentSelector: "string",
        initialValues: "array",
        editable: "boolean",
        labelText: "string"
    }, hE = {
        inputID: se("chips-input-"),
        parentSelector: "",
        initialValues: [
            {
                tag: "init1"
            },
            {
                tag: "init2"
            }
        ],
        editable: !1,
        labelText: "Example label"
    }, dE = {
        opacity: "opacity-0",
        inputWrapperPadding: "p-[5px]",
        transition: "transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        contentEditable: "outline-none !border-[3px] !border-solid !border-[#b2b3b4]",
        chipsInputWrapper: "relative flex items-center flex-wrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        chipsInput: "peer block min-h-[auto] w-[150px] rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-200 dark:placeholder:text-gray-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0",
        chipsLabel: "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-200 dark:peer-focus:text-gray-200",
        chipsNotchesWrapper: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
        chipsNotchesLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0 border-gray-300 dark:border-gray-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
        chipsNotchesMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0 group-data-[te-input-focused]:border-t group-data-[te-input-state-active]:border-t group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-focused]:border-t-transparent group-data-[te-input-state-active]:border-t-transparent border-gray-300 dark:border-gray-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary",
        chipsNotchesTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0 border-gray-300 dark:border-gray-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary"
    }, uE = {
        opacity: "string",
        inputWrapperPadding: "string",
        transition: "string",
        contentEditable: "string",
        chipsInputWrapper: "string",
        chipsInput: "string",
        chipsLabel: "string",
        chipsNotchesWrapper: "string",
        chipsNotchesLeading: "string",
        chipsNotchesMiddle: "string",
        chipsNotchesTrailing: "string"
    };
    class Ud extends vi {
        constructor(e, s = {}, n){
            super(e, s);
            Ee(this, "_handleBlurInput", ({ target: e })=>{
                e.value.length > 0 && this._handleCreateChip(e, e.value), this.allChips.length > 0 ? (e.setAttribute(Bt, ""), this.input.setAttribute(os, ""), g.findOne($a, this.input.parentNode).setAttribute(os, ""), this.chipsInputWrapper.classList.add(...this._classes.inputWrapperPadding.split(" "))) : (e.removeAttribute(Bt), this.input.removeAttribute(os), g.findOne($a, this.input.parentNode).removeAttribute(os), this.chipsInputWrapper.classList.remove(...this._classes.inputWrapperPadding.split(" "))), this.allChips.forEach((s)=>s.removeAttribute(Bt));
            });
            this._element = e, this._label = null, this._labelWidth = 0, this._labelMarginLeft = 0, this._notchLeading = null, this._notchMiddle = null, this._element && P.setData(e, Fd, this), this._options = this._getConfig(s), this._classes = this._getClasses(n), this.numberClicks = 0, this.init();
        }
        static get NAME() {
            return Us;
        }
        get activeChip() {
            return g.findOne(qx, this._element);
        }
        get input() {
            return g.findOne("input", this._element);
        }
        get allChips() {
            return g.find(Ra, this._element);
        }
        get chipsInputWrapper() {
            return g.findOne(Zx, this._element);
        }
        init() {
            this._setChipsClass(), this._appendInputToElement(Wd), this._handleInitialValue(), this._handleInputText(), this._handleKeyboard(), this._handleChipsOnSelect(), this._handleEditable(), this._handleChipsFocus(), this._handleClicksOnChips(), this._getLabelData(), this._getLabelWidth(), this._getNotchData(), this._applyNotch();
        }
        dispose() {
            this._element = null, this._options = null;
        }
        _getNotchData() {
            this._notchMiddle = g.findOne(sE, this._element), this._notchLeading = g.findOne(iE, this._element);
        }
        _getLabelData() {
            this._label = g.findOne("label", this._element);
        }
        _getLabelWidth() {
            this._labelWidth = this._label.clientWidth * .8 + 8;
        }
        _applyNotch() {
            this._notchMiddle.style.width = `${this._labelWidth}px`, this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`, this._label !== null && (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
        }
        _setChipsClass() {
            this._element.setAttribute(Ux, "");
        }
        _handleDeleteEvents(e) {
            const [s] = this.allChips.slice(-1);
            if (this.activeChip === null) s.remove(), this._handleEvents(e, Yd);
            else {
                const n = this.allChips.findIndex((a)=>a === this.activeChip), o = this._handleActiveChipAfterRemove(n), r = [];
                if (this.activeChip === null) return;
                this.activeChip.remove(), this._handleEvents(e, Yd), this.numberClicks = n, o.setAttribute(Bt, ""), this.allChips.forEach((a)=>{
                    a.hasAttribute(Bt) && (r.push(a), r.length > 1 && this.allChips.forEach((l)=>l.remove()));
                });
            }
        }
        _handleUpEvents(e) {
            this.numberClicks += 1, this.numberClicks === this.allChips.length + 1 && (this.numberClicks = 0), this._handleRightKeyboardArrow(this.numberClicks), this._handleEvents(e, aE), this._handleEvents(e, lE);
        }
        _handleDownEvents(e) {
            this.numberClicks -= 1, this.numberClicks <= 0 && (this.numberClicks = this.allChips.length), this._handleLeftKeyboardArrow(this.numberClicks), this._handleEvents(e, rE), this._handleEvents(e, oE);
        }
        _keyboardEvents(e) {
            const { target: s, keyCode: n, ctrlKey: o } = e;
            s.value.length > 0 || this.allChips.length === 0 || (n === Lv || n === Pv ? this._handleDeleteEvents(e) : n === Qi || n === Tt ? this._handleUpEvents(e) : n === Zi || n === ut ? this._handleDownEvents(e) : n === 65 && o && this._handleAddActiveClass());
        }
        _handleKeyboard() {
            b.on(this.input, "keydown", (e)=>this._keyboardEvents(e));
        }
        _handleEditable() {
            const { editable: e } = this._options;
            e && this.allChips.forEach((s)=>{
                b.on(s, "dblclick", (n)=>{
                    const o = g.findOne(Na, s);
                    s.classList.add(...this._classes.contentEditable.split(" ")), s.contentEditable = !0, s.focus(), setTimeout(()=>{
                        v.addStyle(o, {
                            display: "none"
                        });
                    }, 200), o.classList.add(...this._classes.opacity.split(" ")), n.target.textContent, b.trigger(s, Kd, {
                        event: n,
                        allChips: this.allChips
                    });
                }), b.on(document, "click", ({ target: n })=>{
                    const o = g.findOne(Na, s), r = g.findOne(Qx, s), a = n === s, l = s && s.contains(n);
                    !a && !l && (s.contentEditable = !1, s.classList.remove(...this._classes.contentEditable.split(" ")), r.textContent !== "" && setTimeout(()=>{
                        v.addStyle(o, {
                            display: "block"
                        }), o.classList.remove(...this._classes.opacity.split(" "));
                    }, 160)), r.textContent === "" && (setTimeout(()=>{
                        s.classList.add(...this._classes.opacity.split(" "));
                    }, 200), setTimeout(()=>{
                        s.remove();
                    }, 300));
                });
            });
        }
        _handleRemoveActiveClass() {
            this.allChips.forEach((e)=>e.removeAttribute(Bt));
        }
        _handleAddActiveClass() {
            this.allChips.forEach((e)=>e.setAttribute(Bt, ""));
        }
        _handleRightKeyboardArrow(e) {
            this._handleRemoveActiveClass(), e === 0 && (e = 1), this._handleAddActiveClassWithKebyboard(e);
        }
        _handleLeftKeyboardArrow(e) {
            this._handleRemoveActiveClass(), this._handleAddActiveClassWithKebyboard(e);
        }
        _handleActiveChipAfterRemove(e) {
            const s = e === 0 ? 1 : e - 1;
            return this.allChips[s];
        }
        _handleClicksOnChips() {
            b.on(this._element, "click", ()=>{
                this.allChips.length === 0 && (this.chipsInputWrapper.classList.remove(...this._classes.inputWrapperPadding.split(" ")), this.input.removeAttribute(Bt));
            });
        }
        _handleTextContent() {
            const e = [];
            return this.allChips.forEach((s)=>e.push({
                    tag: s.textContent.trim()
                })), e;
        }
        _handleEvents(e, s) {
            const n = this._handleTextContent(), o = this.allChips.filter((r)=>r.hasAttribute(Bt) && r);
            b.trigger(this._element, s, {
                event: e,
                allChips: this.allChips,
                arrOfObjects: n,
                active: o,
                activeObj: {
                    tag: o.length <= 0 ? "" : o[0].textContent.trim()
                }
            });
        }
        _handleChipsFocus() {
            b.on(this._element, "click", ({ target: { attributes: e } })=>{
                const s = [
                    ...e
                ];
                s.includes(Pa) || s.includes(zd) || s.includes(jd) || this.input.focus();
            });
        }
        _handleInitialValue() {
            if (this._appendInputToElement(Vd), this._element.hasAttribute(Vd)) {
                const { initialValues: e } = this._options;
                e.forEach(({ tag: s })=>this._handleCreateChip(this.input, s)), g.findOne($a, this.input.parentNode).setAttribute(os, ""), this.input.setAttribute(Bt, ""), this.input.setAttribute(os, "");
            }
            this.allChips.length > 0 && (this.chipsInputWrapper.classList.add(...this._classes.inputWrapperPadding.split(" ")), this.chipsInputWrapper.classList.add(...this._classes.transition.split(" ")));
        }
        _handleKeysInputToElement(e) {
            const { keyCode: s, target: n } = e;
            if (n.hasAttribute(Pa)) {
                const o = g.findOne(Na, n);
                s === Pt && (n.contentEditable = !1, n.classList.remove(...this._classes.contentEditable.split(" ")), n.textContent !== "" ? setTimeout(()=>{
                    v.addStyle(o, {
                        display: "block"
                    }), o.classList.remove(...this._classes.opacity.split(" "));
                }, 160) : n.textContent === "" && (setTimeout(()=>{
                    n.classList.add(...this._classes.opacity.split(" "));
                }, 200), setTimeout(()=>{
                    n.remove();
                }, 300)));
                return;
            }
            if (s === Pt) {
                if (n.value === "") return;
                this._handleCreateChip(n, n.value), this._handleRemoveActiveClass(), this.numberClicks = this.allChips.length + 1, this._handleEvents(e, nE);
            }
            this.allChips.length > 0 ? (this.chipsInputWrapper.classList.add(...this._classes.inputWrapperPadding.split(" ")), this.chipsInputWrapper.classList.add(...this._classes.transition.split(" "))) : this.chipsInputWrapper.classList.remove(...this._classes.inputWrapperPadding.split(" "));
        }
        _handleInputText() {
            const e = g.findOne(Jx, this._element);
            b.on(this._element, "keyup", e, (s)=>this._handleKeysInputToElement(s)), b.on(this.input, "blur", (s)=>this._handleBlurInput(s));
        }
        _appendInputToElement(e) {
            if (!this._element.hasAttribute(e)) return;
            const s = $x(this._options, this._classes);
            this._element.insertAdjacentHTML("beforeend", s);
        }
        _handleCreateChip(e, s) {
            const n = z("div"), o = vi.getInstance(n), r = new vi(o, {
                text: s
            }, this._classes);
            this._options.parentSelector !== "" ? document.querySelector(this._options.parentSelector).insertAdjacentHTML("beforeend", r.appendChip()) : e.insertAdjacentHTML("beforebegin", r.appendChip()), e.value = "", g.find(Ra).forEach((a)=>{
                let l = vi.getInstance(a);
                return l || (l = new vi(a, {}, this._classes)), l.init();
            }), this._handleEditable();
        }
        _handleChipsOnSelect() {
            this.allChips.forEach((e)=>{
                b.on(this._element, "click", (s)=>{
                    b.trigger(e, Kd, {
                        event: s,
                        allChips: this.allChips
                    });
                });
            });
        }
        _handleAddActiveClassWithKebyboard(e) {
            let s;
            this.allChips[e - 1] === void 0 ? s = this.allChips[e - 2] : s = this.allChips[e - 1], s.setAttribute(Bt);
        }
        _getConfig(e) {
            const s = {
                ...hE,
                ...v.getDataAttributes(this._element),
                ...e
            };
            return W(Us, s, cE), s;
        }
        _getClasses(e) {
            const s = v.getDataClassAttributes(this._element);
            return e = {
                ...dE,
                ...s,
                ...e
            }, W(Us, e, uE), e;
        }
        static getInstance(e) {
            return P.getData(e, Fd);
        }
        static getOrCreateInstance(e, s = {}) {
            return this.getInstance(e) || new this(e, typeof s == "object" ? s : null);
        }
    }
    var fE = function(t) {
        return pE(t) && !_E(t);
    };
    function pE(i) {
        return !!i && typeof i == "object";
    }
    function _E(i) {
        var t = Object.prototype.toString.call(i);
        return t === "[object RegExp]" || t === "[object Date]" || bE(i);
    }
    var gE = typeof Symbol == "function" && Symbol.for, mE = gE ? Symbol.for("react.element") : 60103;
    function bE(i) {
        return i.$$typeof === mE;
    }
    function vE(i) {
        return Array.isArray(i) ? [] : {};
    }
    function Gs(i, t) {
        return t.clone !== !1 && t.isMergeableObject(i) ? rs(vE(i), i, t) : i;
    }
    function yE(i, t, e) {
        return i.concat(t).map(function(s) {
            return Gs(s, e);
        });
    }
    function xE(i, t) {
        if (!t.customMerge) return rs;
        var e = t.customMerge(i);
        return typeof e == "function" ? e : rs;
    }
    function EE(i) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.propertyIsEnumerable.call(i, t);
        }) : [];
    }
    function Xd(i) {
        return Object.keys(i).concat(EE(i));
    }
    function Gd(i, t) {
        try {
            return t in i;
        } catch  {
            return !1;
        }
    }
    function CE(i, t) {
        return Gd(i, t) && !(Object.hasOwnProperty.call(i, t) && Object.propertyIsEnumerable.call(i, t));
    }
    function TE(i, t, e) {
        var s = {};
        return e.isMergeableObject(i) && Xd(i).forEach(function(n) {
            s[n] = Gs(i[n], e);
        }), Xd(t).forEach(function(n) {
            CE(i, n) || (Gd(i, n) && e.isMergeableObject(t[n]) ? s[n] = xE(n, e)(i[n], t[n], e) : s[n] = Gs(t[n], e));
        }), s;
    }
    function rs(i, t, e) {
        e = e || {}, e.arrayMerge = e.arrayMerge || yE, e.isMergeableObject = e.isMergeableObject || fE, e.cloneUnlessOtherwiseSpecified = Gs;
        var s = Array.isArray(t), n = Array.isArray(i), o = s === n;
        return o ? s ? e.arrayMerge(i, t, e) : TE(i, t, e) : Gs(t, e);
    }
    rs.all = function(t, e) {
        if (!Array.isArray(t)) throw new Error("first argument should be an array");
        return t.reduce(function(s, n) {
            return rs(s, n, e);
        }, {});
    };
    var AE = rs, Ba = AE;
    const qd = "chart", No = "te.chart", wE = "chart", Zd = (i, t, e)=>{
        const s = (n, o, r)=>{
            const a = n.slice();
            return o.forEach((l, c)=>{
                typeof a[c] > "u" ? a[c] = r.cloneUnlessOtherwiseSpecified(l, r) : r.isMergeableObject(l) ? a[c] = Ba(n[c], l, r) : n.indexOf(l) === -1 && a.push(l);
            }), a;
        };
        return Ba(e[t], i, {
            arrayMerge: s
        });
    }, kE = {
        darkTicksColor: "#fff",
        darkLabelColor: "#fff",
        darkGridLinesColor: "#555",
        darkmodeOff: "undefined",
        darkBgColor: "#262626",
        options: null
    }, SE = {
        darkTicksColor: "string",
        darkLabelColor: "string",
        darkGridLinesColor: "string",
        darkmodeOff: "(string|null)",
        darkBgColor: "string",
        options: "(object|null)"
    };
    let Qd = class Yp {
        constructor(t, e, s = {}, n = {}){
            this._waitForCharts(t, e, s, n);
        }
        async _getChartjs() {
            const { Chart: t, ArcElement: e, LineElement: s, BarElement: n, PointElement: o, BarController: r, BubbleController: a, DoughnutController: l, LineController: c, PieController: h, PolarAreaController: d, RadarController: u, ScatterController: f, CategoryScale: p, LinearScale: _, LogarithmicScale: m, RadialLinearScale: y, TimeScale: x, TimeSeriesScale: E, Decimation: C, Filler: T, Legend: A, Title: w, Tooltip: S, SubTitle: k } = await Promise.resolve().then(()=>tk);
            return t.register(e, s, n, o, r, a, l, c, h, d, u, f, p, _, m, y, x, E, C, T, A, w, S, k), t;
        }
        async _getChartDataLabels() {
            const { ChartDataLabels: t } = await Promise.resolve().then(()=>Ck);
            return t;
        }
        async _waitForCharts(t, e, s = {}, n = {}) {
            this._Chartjs = await this._getChartjs(), this._ChartDataLabels = await this._getChartDataLabels(), this._element = t, this._data = e, this._options = s, this._type = e.type, this._canvas = null, this._chart = null, this._darkOptions = this._getDarkConfig(n), this._darkModeClassContainer = document.querySelector("html"), this._prevConfig = null, this._observer = null, this._element && (P.setData(t, No, this), v.addClass(this._element, wE), this._chartConstructor()), this._darkOptions.darkmodeOff !== null && (this._handleMode(this.systemColorMode), this._observer = new MutationObserver(this._observerCallback.bind(this)), this._observer.observe(this._darkModeClassContainer, {
                attributes: !0
            }));
        }
        static get NAME() {
            return qd;
        }
        get systemColorMode() {
            return localStorage.theme || (this._darkModeClassContainer.classList.contains("dark") ? "dark" : "light");
        }
        dispose() {
            this._observer.disconnect(), P.removeData(this._element, No), this._element = null;
        }
        update(t, e) {
            t && (this._data = {
                ...this._data,
                ...t
            }, this._chart.data = this._data), this._prevConfig = this._chart.options, this._options = {
                ...this._options,
                ...e
            }, this._chart.options = Ba(this._chart.options, this._options), this._chart.update();
        }
        _getDarkConfig(t) {
            let e = {};
            const s = v.getDataAttributes(this._element);
            Object.keys(s).forEach((c)=>c.startsWith("dark") && (e[c] = s[c])), e = {
                ...kE,
                ...e
            };
            const n = {
                y: {
                    ticks: {
                        color: e.darkTicksColor
                    },
                    grid: {
                        color: e.darkGridLinesColor
                    }
                },
                x: {
                    ticks: {
                        color: e.darkTicksColor
                    },
                    grid: {
                        color: e.darkGridLinesColor
                    }
                }
            }, o = {
                r: {
                    ticks: {
                        color: e.darkTicksColor,
                        backdropColor: e.darkBgColor
                    },
                    grid: {
                        color: e.darkGridLinesColor
                    },
                    pointLabels: {
                        color: e.darkTicksColor
                    }
                }
            }, l = {
                scales: [
                    "pie",
                    "doughnut",
                    "polarArea",
                    "radar"
                ].includes(this._type) ? [
                    "polarArea",
                    "radar"
                ].includes(this._type) ? o : {} : n,
                plugins: {
                    legend: {
                        labels: {
                            color: e.darkLabelColor
                        }
                    }
                }
            };
            return t = {
                ...e,
                options: {
                    ...l
                },
                ...t
            }, W(qd, t, SE), t;
        }
        _chartConstructor() {
            if (this._data) {
                this._createCanvas();
                const t = Zd(this._options, this._type, Po), e = [];
                t.dataLabelsPlugin && e.push(this._ChartDataLabels), this._chart = new this._Chartjs(this._canvas, {
                    ...this._data,
                    ...t,
                    plugins: e
                });
            }
        }
        _createCanvas() {
            this._canvas || (this._element.nodeName === "CANVAS" ? this._canvas = this._element : (this._canvas = z("canvas"), this._element.appendChild(this._canvas)));
        }
        _handleMode(t) {
            t === "dark" ? (this._changeDatasetBorderColor(), this.update(null, this._darkOptions.options)) : (this._changeDatasetBorderColor(!1), this._prevConfig && this.update(null, this._prevConfig));
        }
        _observerCallback(t) {
            for (const e of t)e.type === "attributes" && this._handleMode(this.systemColorMode);
        }
        _changeDatasetBorderColor(t = !0) {
            [
                ...this._data.data.datasets
            ].forEach((e)=>[
                    "pie",
                    "doughnut",
                    "polarArea"
                ].includes(this._type) && (e.borderColor = t ? this._darkOptions.darkBgColor : "#fff"));
        }
        static jQueryInterface(t, e, s) {
            return this.each(function() {
                let n = P.getData(this, No);
                if (!(!n && /dispose/.test(t))) {
                    if (!n) {
                        const o = e ? Zd(e, s, Po) : Po[s];
                        n = new Yp(this, {
                            ...t,
                            ...o
                        });
                    }
                    if (typeof t == "string") {
                        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
                        n[t](e, s);
                    }
                }
            });
        }
        static getInstance(t) {
            return P.getData(t, No);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
        }
    };
    Ia({
        Animate: qn,
        Alert: As,
        Button: On,
        ChipsInput: Ud,
        Chip: vi,
        Dropdown: $t,
        Carousel: ae,
        Collapse: re,
        Offcanvas: zi,
        Modal: Ss,
        Popover: zn,
        ScrollSpy: Is,
        Select: Lo,
        Tab: Un,
        Toast: Ls,
        Tooltip: Ms,
        Ripple: Ui,
        Datepicker: Ph,
        Timepicker: od,
        Sidenav: bi,
        Stepper: vd,
        Input: Z,
        Chart: Qd
    }); /*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ 
    function Te() {}
    const OE = function() {
        let i = 0;
        return function() {
            return i++;
        };
    }();
    function N(i) {
        return i === null || typeof i > "u";
    }
    function Q(i) {
        if (Array.isArray && Array.isArray(i)) return !0;
        const t = Object.prototype.toString.call(i);
        return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
    }
    function $(i) {
        return i !== null && Object.prototype.toString.call(i) === "[object Object]";
    }
    const rt = (i)=>(typeof i == "number" || i instanceof Number) && isFinite(+i);
    function Ht(i, t) {
        return rt(i) ? i : t;
    }
    function R(i, t) {
        return typeof i > "u" ? t : i;
    }
    const DE = (i, t)=>typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : i / t, Jd = (i, t)=>typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
    function G(i, t, e) {
        if (i && typeof i.call == "function") return i.apply(e, t);
    }
    function U(i, t, e, s) {
        let n, o, r;
        if (Q(i)) {
            if (o = i.length, s) for(n = o - 1; n >= 0; n--)t.call(e, i[n], n);
            else for(n = 0; n < o; n++)t.call(e, i[n], n);
        } else if ($(i)) for(r = Object.keys(i), o = r.length, n = 0; n < o; n++)t.call(e, i[r[n]], r[n]);
    }
    function $o(i, t) {
        let e, s, n, o;
        if (!i || !t || i.length !== t.length) return !1;
        for(e = 0, s = i.length; e < s; ++e)if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
        return !0;
    }
    function Bo(i) {
        if (Q(i)) return i.map(Bo);
        if ($(i)) {
            const t = Object.create(null), e = Object.keys(i), s = e.length;
            let n = 0;
            for(; n < s; ++n)t[e[n]] = Bo(i[e[n]]);
            return t;
        }
        return i;
    }
    function tu(i) {
        return [
            "__proto__",
            "prototype",
            "constructor"
        ].indexOf(i) === -1;
    }
    function ME(i, t, e, s) {
        if (!tu(i)) return;
        const n = t[i], o = e[i];
        $(n) && $(o) ? ge(n, o, s) : t[i] = Bo(o);
    }
    function ge(i, t, e) {
        const s = Q(t) ? t : [
            t
        ], n = s.length;
        if (!$(i)) return i;
        e = e || {};
        const o = e.merger || ME;
        for(let r = 0; r < n; ++r){
            if (t = s[r], !$(t)) continue;
            const a = Object.keys(t);
            for(let l = 0, c = a.length; l < c; ++l)o(a[l], i, t, e);
        }
        return i;
    }
    function qs(i, t) {
        return ge(i, t, {
            merger: IE
        });
    }
    function IE(i, t, e) {
        if (!tu(i)) return;
        const s = t[i], n = e[i];
        $(s) && $(n) ? qs(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Bo(n));
    }
    const eu = {
        "": (i)=>i,
        x: (i)=>i.x,
        y: (i)=>i.y
    };
    function Ke(i, t) {
        return (eu[t] || (eu[t] = LE(t)))(i);
    }
    function LE(i) {
        const t = PE(i);
        return (e)=>{
            for (const s of t){
                if (s === "") break;
                e = e && e[s];
            }
            return e;
        };
    }
    function PE(i) {
        const t = i.split("."), e = [];
        let s = "";
        for (const n of t)s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
        return e;
    }
    function Ha(i) {
        return i.charAt(0).toUpperCase() + i.slice(1);
    }
    const Ft = (i)=>typeof i < "u", Ue = (i)=>typeof i == "function", iu = (i, t)=>{
        if (i.size !== t.size) return !1;
        for (const e of i)if (!t.has(e)) return !1;
        return !0;
    };
    function RE(i) {
        return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
    }
    const et = Math.PI, q = 2 * et, NE = q + et, Ho = Number.POSITIVE_INFINITY, $E = et / 180, nt = et / 2, Zs = et / 4, su = et * 2 / 3, Vt = Math.log10, me = Math.sign;
    function nu(i) {
        const t = Math.round(i);
        i = Qs(i, t, i / 1e3) ? t : i;
        const e = Math.pow(10, Math.floor(Vt(i))), s = i / e;
        return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
    }
    function BE(i) {
        const t = [], e = Math.sqrt(i);
        let s;
        for(s = 1; s < e; s++)i % s === 0 && (t.push(s), t.push(i / s));
        return e === (e | 0) && t.push(e), t.sort((n, o)=>n - o).pop(), t;
    }
    function as(i) {
        return !isNaN(parseFloat(i)) && isFinite(i);
    }
    function Qs(i, t, e) {
        return Math.abs(i - t) < e;
    }
    function HE(i, t) {
        const e = Math.round(i);
        return e - t <= i && e + t >= i;
    }
    function ou(i, t, e) {
        let s, n, o;
        for(s = 0, n = i.length; s < n; s++)o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
    }
    function Jt(i) {
        return i * (et / 180);
    }
    function Fa(i) {
        return i * (180 / et);
    }
    function ru(i) {
        if (!rt(i)) return;
        let t = 1, e = 0;
        for(; Math.round(i * t) / t !== i;)t *= 10, e++;
        return e;
    }
    function au(i, t) {
        const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
        let o = Math.atan2(s, e);
        return o < -0.5 * et && (o += q), {
            angle: o,
            distance: n
        };
    }
    function Va(i, t) {
        return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
    }
    function FE(i, t) {
        return (i - t + NE) % q - et;
    }
    function Nt(i) {
        return (i % q + q) % q;
    }
    function Js(i, t, e, s) {
        const n = Nt(i), o = Nt(t), r = Nt(e), a = Nt(o - n), l = Nt(r - n), c = Nt(n - o), h = Nt(n - r);
        return n === o || n === r || s && o === r || a > l && c < h;
    }
    function ct(i, t, e) {
        return Math.max(t, Math.min(e, i));
    }
    function VE(i) {
        return ct(i, -32768, 32767);
    }
    function Ae(i, t, e, s = 1e-6) {
        return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
    }
    function Wa(i, t, e) {
        e = e || ((r)=>i[r] < t);
        let s = i.length - 1, n = 0, o;
        for(; s - n > 1;)o = n + s >> 1, e(o) ? n = o : s = o;
        return {
            lo: n,
            hi: s
        };
    }
    const we = (i, t, e, s)=>Wa(i, e, s ? (n)=>i[n][t] <= e : (n)=>i[n][t] < e), WE = (i, t, e)=>Wa(i, e, (s)=>i[s][t] >= e);
    function zE(i, t, e) {
        let s = 0, n = i.length;
        for(; s < n && i[s] < t;)s++;
        for(; n > s && i[n - 1] > e;)n--;
        return s > 0 || n < i.length ? i.slice(s, n) : i;
    }
    const lu = [
        "push",
        "pop",
        "shift",
        "splice",
        "unshift"
    ];
    function jE(i, t) {
        if (i._chartjs) {
            i._chartjs.listeners.push(t);
            return;
        }
        Object.defineProperty(i, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [
                    t
                ]
            }
        }), lu.forEach((e)=>{
            const s = "_onData" + Ha(e), n = i[e];
            Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !1,
                value (...o) {
                    const r = n.apply(this, o);
                    return i._chartjs.listeners.forEach((a)=>{
                        typeof a[s] == "function" && a[s](...o);
                    }), r;
                }
            });
        });
    }
    function cu(i, t) {
        const e = i._chartjs;
        if (!e) return;
        const s = e.listeners, n = s.indexOf(t);
        n !== -1 && s.splice(n, 1), !(s.length > 0) && (lu.forEach((o)=>{
            delete i[o];
        }), delete i._chartjs);
    }
    function hu(i) {
        const t = new Set;
        let e, s;
        for(e = 0, s = i.length; e < s; ++e)t.add(i[e]);
        return t.size === s ? i : Array.from(t);
    }
    const du = function() {
        return typeof window > "u" ? function(i) {
            return i();
        } : window.requestAnimationFrame;
    }();
    function uu(i, t, e) {
        const s = e || ((r)=>Array.prototype.slice.call(r));
        let n = !1, o = [];
        return function(...r) {
            o = s(r), n || (n = !0, du.call(window, ()=>{
                n = !1, i.apply(t, o);
            }));
        };
    }
    function YE(i, t) {
        let e;
        return function(...s) {
            return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
        };
    }
    const za = (i)=>i === "start" ? "left" : i === "end" ? "right" : "center", pt = (i, t, e)=>i === "start" ? t : i === "end" ? e : (t + e) / 2, KE = (i, t, e, s)=>i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
    function fu(i, t, e) {
        const s = t.length;
        let n = 0, o = s;
        if (i._sorted) {
            const { iScale: r, _parsed: a } = i, l = r.axis, { min: c, max: h, minDefined: d, maxDefined: u } = r.getUserBounds();
            d && (n = ct(Math.min(we(a, r.axis, c).lo, e ? s : we(t, l, r.getPixelForValue(c)).lo), 0, s - 1)), u ? o = ct(Math.max(we(a, r.axis, h, !0).hi + 1, e ? 0 : we(t, l, r.getPixelForValue(h), !0).hi + 1), n, s) - n : o = s - n;
        }
        return {
            start: n,
            count: o
        };
    }
    function pu(i) {
        const { xScale: t, yScale: e, _scaleRanges: s } = i, n = {
            xmin: t.min,
            xmax: t.max,
            ymin: e.min,
            ymax: e.max
        };
        if (!s) return i._scaleRanges = n, !0;
        const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
        return Object.assign(s, n), o;
    }
    const Fo = (i)=>i === 0 || i === 1, _u = (i, t, e)=>-(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * q / e)), gu = (i, t, e)=>Math.pow(2, -10 * i) * Math.sin((i - t) * q / e) + 1, tn = {
        linear: (i)=>i,
        easeInQuad: (i)=>i * i,
        easeOutQuad: (i)=>-i * (i - 2),
        easeInOutQuad: (i)=>(i /= .5) < 1 ? .5 * i * i : -0.5 * (--i * (i - 2) - 1),
        easeInCubic: (i)=>i * i * i,
        easeOutCubic: (i)=>(i -= 1) * i * i + 1,
        easeInOutCubic: (i)=>(i /= .5) < 1 ? .5 * i * i * i : .5 * ((i -= 2) * i * i + 2),
        easeInQuart: (i)=>i * i * i * i,
        easeOutQuart: (i)=>-((i -= 1) * i * i * i - 1),
        easeInOutQuart: (i)=>(i /= .5) < 1 ? .5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
        easeInQuint: (i)=>i * i * i * i * i,
        easeOutQuint: (i)=>(i -= 1) * i * i * i * i + 1,
        easeInOutQuint: (i)=>(i /= .5) < 1 ? .5 * i * i * i * i * i : .5 * ((i -= 2) * i * i * i * i + 2),
        easeInSine: (i)=>-Math.cos(i * nt) + 1,
        easeOutSine: (i)=>Math.sin(i * nt),
        easeInOutSine: (i)=>-0.5 * (Math.cos(et * i) - 1),
        easeInExpo: (i)=>i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
        easeOutExpo: (i)=>i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
        easeInOutExpo: (i)=>Fo(i) ? i : i < .5 ? .5 * Math.pow(2, 10 * (i * 2 - 1)) : .5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
        easeInCirc: (i)=>i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
        easeOutCirc: (i)=>Math.sqrt(1 - (i -= 1) * i),
        easeInOutCirc: (i)=>(i /= .5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : .5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
        easeInElastic: (i)=>Fo(i) ? i : _u(i, .075, .3),
        easeOutElastic: (i)=>Fo(i) ? i : gu(i, .075, .3),
        easeInOutElastic (i) {
            return Fo(i) ? i : i < .5 ? .5 * _u(i * 2, .1125, .45) : .5 + .5 * gu(i * 2 - 1, .1125, .45);
        },
        easeInBack (i) {
            return i * i * (2.70158 * i - 1.70158);
        },
        easeOutBack (i) {
            return (i -= 1) * i * (2.70158 * i + 1.70158) + 1;
        },
        easeInOutBack (i) {
            let t = 1.70158;
            return (i /= .5) < 1 ? .5 * (i * i * (((t *= 1.525) + 1) * i - t)) : .5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
        },
        easeInBounce: (i)=>1 - tn.easeOutBounce(1 - i),
        easeOutBounce (i) {
            return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + .75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + .9375 : 7.5625 * (i -= 2.625 / 2.75) * i + .984375;
        },
        easeInOutBounce: (i)=>i < .5 ? tn.easeInBounce(i * 2) * .5 : tn.easeOutBounce(i * 2 - 1) * .5 + .5
    }; /*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ 
    function en(i) {
        return i + .5 | 0;
    }
    const Xe = (i, t, e)=>Math.max(Math.min(i, e), t);
    function sn(i) {
        return Xe(en(i * 2.55), 0, 255);
    }
    function Ge(i) {
        return Xe(en(i * 255), 0, 255);
    }
    function ke(i) {
        return Xe(en(i / 2.55) / 100, 0, 1);
    }
    function mu(i) {
        return Xe(en(i * 100), 0, 100);
    }
    const Wt = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    }, ja = [
        ..."0123456789ABCDEF"
    ], UE = (i)=>ja[i & 15], XE = (i)=>ja[(i & 240) >> 4] + ja[i & 15], Vo = (i)=>(i & 240) >> 4 === (i & 15), GE = (i)=>Vo(i.r) && Vo(i.g) && Vo(i.b) && Vo(i.a);
    function qE(i) {
        var t = i.length, e;
        return i[0] === "#" && (t === 4 || t === 5 ? e = {
            r: 255 & Wt[i[1]] * 17,
            g: 255 & Wt[i[2]] * 17,
            b: 255 & Wt[i[3]] * 17,
            a: t === 5 ? Wt[i[4]] * 17 : 255
        } : (t === 7 || t === 9) && (e = {
            r: Wt[i[1]] << 4 | Wt[i[2]],
            g: Wt[i[3]] << 4 | Wt[i[4]],
            b: Wt[i[5]] << 4 | Wt[i[6]],
            a: t === 9 ? Wt[i[7]] << 4 | Wt[i[8]] : 255
        })), e;
    }
    const ZE = (i, t)=>i < 255 ? t(i) : "";
    function QE(i) {
        var t = GE(i) ? UE : XE;
        return i ? "#" + t(i.r) + t(i.g) + t(i.b) + ZE(i.a, t) : void 0;
    }
    const JE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
    function bu(i, t, e) {
        const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12)=>e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
        return [
            n(0),
            n(8),
            n(4)
        ];
    }
    function tC(i, t, e) {
        const s = (n, o = (n + i / 60) % 6)=>e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
        return [
            s(5),
            s(3),
            s(1)
        ];
    }
    function eC(i, t, e) {
        const s = bu(i, 1, .5);
        let n;
        for(t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)s[n] *= 1 - t - e, s[n] += t;
        return s;
    }
    function iC(i, t, e, s, n) {
        return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
    }
    function Ya(i) {
        const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
        let l, c, h;
        return o !== r && (h = o - r, c = a > .5 ? h / (2 - o - r) : h / (o + r), l = iC(e, s, n, h, o), l = l * 60 + .5), [
            l | 0,
            c || 0,
            a
        ];
    }
    function Ka(i, t, e, s) {
        return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Ge);
    }
    function Ua(i, t, e) {
        return Ka(bu, i, t, e);
    }
    function sC(i, t, e) {
        return Ka(eC, i, t, e);
    }
    function nC(i, t, e) {
        return Ka(tC, i, t, e);
    }
    function vu(i) {
        return (i % 360 + 360) % 360;
    }
    function oC(i) {
        const t = JE.exec(i);
        let e = 255, s;
        if (!t) return;
        t[5] !== s && (e = t[6] ? sn(+t[5]) : Ge(+t[5]));
        const n = vu(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
        return t[1] === "hwb" ? s = sC(n, o, r) : t[1] === "hsv" ? s = nC(n, o, r) : s = Ua(n, o, r), {
            r: s[0],
            g: s[1],
            b: s[2],
            a: e
        };
    }
    function rC(i, t) {
        var e = Ya(i);
        e[0] = vu(e[0] + t), e = Ua(e), i.r = e[0], i.g = e[1], i.b = e[2];
    }
    function aC(i) {
        if (!i) return;
        const t = Ya(i), e = t[0], s = mu(t[1]), n = mu(t[2]);
        return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${ke(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
    }
    const yu = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh"
    }, xu = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32"
    };
    function lC() {
        const i = {}, t = Object.keys(xu), e = Object.keys(yu);
        let s, n, o, r, a;
        for(s = 0; s < t.length; s++){
            for(r = a = t[s], n = 0; n < e.length; n++)o = e[n], a = a.replace(o, yu[o]);
            o = parseInt(xu[r], 16), i[a] = [
                o >> 16 & 255,
                o >> 8 & 255,
                o & 255
            ];
        }
        return i;
    }
    let Wo;
    function cC(i) {
        Wo || (Wo = lC(), Wo.transparent = [
            0,
            0,
            0,
            0
        ]);
        const t = Wo[i.toLowerCase()];
        return t && {
            r: t[0],
            g: t[1],
            b: t[2],
            a: t.length === 4 ? t[3] : 255
        };
    }
    const hC = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    function dC(i) {
        const t = hC.exec(i);
        let e = 255, s, n, o;
        if (t) {
            if (t[7] !== s) {
                const r = +t[7];
                e = t[8] ? sn(r) : Xe(r * 255, 0, 255);
            }
            return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? sn(s) : Xe(s, 0, 255)), n = 255 & (t[4] ? sn(n) : Xe(n, 0, 255)), o = 255 & (t[6] ? sn(o) : Xe(o, 0, 255)), {
                r: s,
                g: n,
                b: o,
                a: e
            };
        }
    }
    function uC(i) {
        return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${ke(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
    }
    const Xa = (i)=>i <= .0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - .055, ls = (i)=>i <= .04045 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
    function fC(i, t, e) {
        const s = ls(ke(i.r)), n = ls(ke(i.g)), o = ls(ke(i.b));
        return {
            r: Ge(Xa(s + e * (ls(ke(t.r)) - s))),
            g: Ge(Xa(n + e * (ls(ke(t.g)) - n))),
            b: Ge(Xa(o + e * (ls(ke(t.b)) - o))),
            a: i.a + e * (t.a - i.a)
        };
    }
    function zo(i, t, e) {
        if (i) {
            let s = Ya(i);
            s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Ua(s), i.r = s[0], i.g = s[1], i.b = s[2];
        }
    }
    function Eu(i, t) {
        return i && Object.assign(t || {}, i);
    }
    function Cu(i) {
        var t = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray(i) ? i.length >= 3 && (t = {
            r: i[0],
            g: i[1],
            b: i[2],
            a: 255
        }, i.length > 3 && (t.a = Ge(i[3]))) : (t = Eu(i, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        }), t.a = Ge(t.a)), t;
    }
    function pC(i) {
        return i.charAt(0) === "r" ? dC(i) : oC(i);
    }
    class jo {
        constructor(t){
            if (t instanceof jo) return t;
            const e = typeof t;
            let s;
            e === "object" ? s = Cu(t) : e === "string" && (s = qE(t) || cC(t) || pC(t)), this._rgb = s, this._valid = !!s;
        }
        get valid() {
            return this._valid;
        }
        get rgb() {
            var t = Eu(this._rgb);
            return t && (t.a = ke(t.a)), t;
        }
        set rgb(t) {
            this._rgb = Cu(t);
        }
        rgbString() {
            return this._valid ? uC(this._rgb) : void 0;
        }
        hexString() {
            return this._valid ? QE(this._rgb) : void 0;
        }
        hslString() {
            return this._valid ? aC(this._rgb) : void 0;
        }
        mix(t, e) {
            if (t) {
                const s = this.rgb, n = t.rgb;
                let o;
                const r = e === o ? .5 : e, a = 2 * r - 1, l = s.a - n.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
                o = 1 - c, s.r = 255 & c * s.r + o * n.r + .5, s.g = 255 & c * s.g + o * n.g + .5, s.b = 255 & c * s.b + o * n.b + .5, s.a = r * s.a + (1 - r) * n.a, this.rgb = s;
            }
            return this;
        }
        interpolate(t, e) {
            return t && (this._rgb = fC(this._rgb, t._rgb, e)), this;
        }
        clone() {
            return new jo(this.rgb);
        }
        alpha(t) {
            return this._rgb.a = Ge(t), this;
        }
        clearer(t) {
            const e = this._rgb;
            return e.a *= 1 - t, this;
        }
        greyscale() {
            const t = this._rgb, e = en(t.r * .3 + t.g * .59 + t.b * .11);
            return t.r = t.g = t.b = e, this;
        }
        opaquer(t) {
            const e = this._rgb;
            return e.a *= 1 + t, this;
        }
        negate() {
            const t = this._rgb;
            return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
        }
        lighten(t) {
            return zo(this._rgb, 2, t), this;
        }
        darken(t) {
            return zo(this._rgb, 2, -t), this;
        }
        saturate(t) {
            return zo(this._rgb, 1, t), this;
        }
        desaturate(t) {
            return zo(this._rgb, 1, -t), this;
        }
        rotate(t) {
            return rC(this._rgb, t), this;
        }
    }
    function Tu(i) {
        return new jo(i);
    }
    function Au(i) {
        if (i && typeof i == "object") {
            const t = i.toString();
            return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
        }
        return !1;
    }
    function wu(i) {
        return Au(i) ? i : Tu(i);
    }
    function Ga(i) {
        return Au(i) ? i : Tu(i).saturate(.5).darken(.1).hexString();
    }
    const yi = Object.create(null), qa = Object.create(null);
    function nn(i, t) {
        if (!t) return i;
        const e = t.split(".");
        for(let s = 0, n = e.length; s < n; ++s){
            const o = e[s];
            i = i[o] || (i[o] = Object.create(null));
        }
        return i;
    }
    function Za(i, t, e) {
        return typeof t == "string" ? ge(nn(i, t), e) : ge(nn(i, ""), t);
    }
    class _C {
        constructor(t){
            this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (e)=>e.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
                "mousemove",
                "mouseout",
                "click",
                "touchstart",
                "touchmove"
            ], this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null
            }, this.hover = {}, this.hoverBackgroundColor = (e, s)=>Ga(s.backgroundColor), this.hoverBorderColor = (e, s)=>Ga(s.borderColor), this.hoverColor = (e, s)=>Ga(s.color), this.indexAxis = "x", this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t);
        }
        set(t, e) {
            return Za(this, t, e);
        }
        get(t) {
            return nn(this, t);
        }
        describe(t, e) {
            return Za(qa, t, e);
        }
        override(t, e) {
            return Za(yi, t, e);
        }
        route(t, e, s, n) {
            const o = nn(this, t), r = nn(this, s), a = "_" + e;
            Object.defineProperties(o, {
                [a]: {
                    value: o[e],
                    writable: !0
                },
                [e]: {
                    enumerable: !0,
                    get () {
                        const l = this[a], c = r[n];
                        return $(l) ? Object.assign({}, c, l) : R(l, c);
                    },
                    set (l) {
                        this[a] = l;
                    }
                }
            });
        }
    }
    var B = new _C({
        _scriptable: (i)=>!i.startsWith("on"),
        _indexable: (i)=>i !== "events",
        hover: {
            _fallback: "interaction"
        },
        interaction: {
            _scriptable: !1,
            _indexable: !1
        }
    });
    function gC(i) {
        return !i || N(i.size) || N(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
    }
    function Yo(i, t, e, s, n) {
        let o = t[n];
        return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
    }
    function mC(i, t, e, s) {
        s = s || {};
        let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
        s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
        let r = 0;
        const a = e.length;
        let l, c, h, d, u;
        for(l = 0; l < a; l++)if (d = e[l], d != null && Q(d) !== !0) r = Yo(i, n, o, r, d);
        else if (Q(d)) for(c = 0, h = d.length; c < h; c++)u = d[c], u != null && !Q(u) && (r = Yo(i, n, o, r, u));
        i.restore();
        const f = o.length / 2;
        if (f > e.length) {
            for(l = 0; l < f; l++)delete n[o[l]];
            o.splice(0, f);
        }
        return r;
    }
    function xi(i, t, e) {
        const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, .5) : 0;
        return Math.round((t - n) * s) / s + n;
    }
    function ku(i, t) {
        t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore();
    }
    function Qa(i, t, e, s) {
        Su(i, t, e, s, null);
    }
    function Su(i, t, e, s, n) {
        let o, r, a, l, c, h;
        const d = t.pointStyle, u = t.rotation, f = t.radius;
        let p = (u || 0) * $E;
        if (d && typeof d == "object" && (o = d.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
            i.save(), i.translate(e, s), i.rotate(p), i.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), i.restore();
            return;
        }
        if (!(isNaN(f) || f <= 0)) {
            switch(i.beginPath(), d){
                default:
                    n ? i.ellipse(e, s, n / 2, f, 0, 0, q) : i.arc(e, s, f, 0, q), i.closePath();
                    break;
                case "triangle":
                    i.moveTo(e + Math.sin(p) * f, s - Math.cos(p) * f), p += su, i.lineTo(e + Math.sin(p) * f, s - Math.cos(p) * f), p += su, i.lineTo(e + Math.sin(p) * f, s - Math.cos(p) * f), i.closePath();
                    break;
                case "rectRounded":
                    c = f * .516, l = f - c, r = Math.cos(p + Zs) * l, a = Math.sin(p + Zs) * l, i.arc(e - r, s - a, c, p - et, p - nt), i.arc(e + a, s - r, c, p - nt, p), i.arc(e + r, s + a, c, p, p + nt), i.arc(e - a, s + r, c, p + nt, p + et), i.closePath();
                    break;
                case "rect":
                    if (!u) {
                        l = Math.SQRT1_2 * f, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
                        break;
                    }
                    p += Zs;
                case "rectRot":
                    r = Math.cos(p) * f, a = Math.sin(p) * f, i.moveTo(e - r, s - a), i.lineTo(e + a, s - r), i.lineTo(e + r, s + a), i.lineTo(e - a, s + r), i.closePath();
                    break;
                case "crossRot":
                    p += Zs;
                case "cross":
                    r = Math.cos(p) * f, a = Math.sin(p) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a), i.moveTo(e + a, s - r), i.lineTo(e - a, s + r);
                    break;
                case "star":
                    r = Math.cos(p) * f, a = Math.sin(p) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a), i.moveTo(e + a, s - r), i.lineTo(e - a, s + r), p += Zs, r = Math.cos(p) * f, a = Math.sin(p) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a), i.moveTo(e + a, s - r), i.lineTo(e - a, s + r);
                    break;
                case "line":
                    r = n ? n / 2 : Math.cos(p) * f, a = Math.sin(p) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
                    break;
                case "dash":
                    i.moveTo(e, s), i.lineTo(e + Math.cos(p) * f, s + Math.sin(p) * f);
                    break;
            }
            i.fill(), t.borderWidth > 0 && i.stroke();
        }
    }
    function on(i, t, e) {
        return e = e || .5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
    }
    function Ko(i, t) {
        i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
    }
    function Uo(i) {
        i.restore();
    }
    function bC(i, t, e, s, n) {
        if (!t) return i.lineTo(e.x, e.y);
        if (n === "middle") {
            const o = (t.x + e.x) / 2;
            i.lineTo(o, t.y), i.lineTo(o, e.y);
        } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
        i.lineTo(e.x, e.y);
    }
    function vC(i, t, e, s) {
        if (!t) return i.lineTo(e.x, e.y);
        i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
    }
    function Ei(i, t, e, s, n, o = {}) {
        const r = Q(t) ? t : [
            t
        ], a = o.strokeWidth > 0 && o.strokeColor !== "";
        let l, c;
        for(i.save(), i.font = n.string, yC(i, o), l = 0; l < r.length; ++l)c = r[l], a && (o.strokeColor && (i.strokeStyle = o.strokeColor), N(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), xC(i, e, s, c, o), s += n.lineHeight;
        i.restore();
    }
    function yC(i, t) {
        t.translation && i.translate(t.translation[0], t.translation[1]), N(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
    }
    function xC(i, t, e, s, n) {
        if (n.strikethrough || n.underline) {
            const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
            i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
        }
    }
    function rn(i, t) {
        const { x: e, y: s, w: n, h: o, radius: r } = t;
        i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, -nt, et, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, et, nt, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, nt, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -nt, !0), i.lineTo(e + r.topLeft, s);
    }
    const EC = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/), CC = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
    function TC(i, t) {
        const e = ("" + i).match(EC);
        if (!e || e[1] === "normal") return t * 1.2;
        switch(i = +e[2], e[3]){
            case "px":
                return i;
            case "%":
                i /= 100;
                break;
        }
        return t * i;
    }
    const AC = (i)=>+i || 0;
    function Ja(i, t) {
        const e = {}, s = $(t), n = s ? Object.keys(t) : t, o = $(i) ? s ? (r)=>R(i[r], i[t[r]]) : (r)=>i[r] : ()=>i;
        for (const r of n)e[r] = AC(o(r));
        return e;
    }
    function Ou(i) {
        return Ja(i, {
            top: "y",
            right: "x",
            bottom: "y",
            left: "x"
        });
    }
    function Ci(i) {
        return Ja(i, [
            "topLeft",
            "topRight",
            "bottomLeft",
            "bottomRight"
        ]);
    }
    function ht(i) {
        const t = Ou(i);
        return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
    }
    function lt(i, t) {
        i = i || {}, t = t || B.font;
        let e = R(i.size, t.size);
        typeof e == "string" && (e = parseInt(e, 10));
        let s = R(i.style, t.style);
        s && !("" + s).match(CC) && (console.warn('Invalid font style specified: "' + s + '"'), s = "");
        const n = {
            family: R(i.family, t.family),
            lineHeight: TC(R(i.lineHeight, t.lineHeight), e),
            size: e,
            style: s,
            weight: R(i.weight, t.weight),
            string: ""
        };
        return n.string = gC(n), n;
    }
    function tt(i, t, e, s) {
        let n = !0, o, r, a;
        for(o = 0, r = i.length; o < r; ++o)if (a = i[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), n = !1), e !== void 0 && Q(a) && (a = a[e % a.length], n = !1), a !== void 0)) return s && !n && (s.cacheable = !1), a;
    }
    function wC(i, t, e) {
        const { min: s, max: n } = i, o = Jd(t, (n - s) / 2), r = (a, l)=>e && a === 0 ? 0 : a + l;
        return {
            min: r(s, -Math.abs(o)),
            max: r(n, o)
        };
    }
    function qe(i, t) {
        return Object.assign(Object.create(i), t);
    }
    function tl(i, t = [
        ""
    ], e = i, s, n = ()=>i[0]) {
        Ft(s) || (s = Pu("_fallback", i));
        const o = {
            [Symbol.toStringTag]: "Object",
            _cacheable: !0,
            _scopes: i,
            _rootScopes: e,
            _fallback: s,
            _getTarget: n,
            override: (r)=>tl([
                    r,
                    ...i
                ], t, e, s)
        };
        return new Proxy(o, {
            deleteProperty (r, a) {
                return delete r[a], delete r._keys, delete i[0][a], !0;
            },
            get (r, a) {
                return Mu(r, a, ()=>PC(a, t, i, r));
            },
            getOwnPropertyDescriptor (r, a) {
                return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
            },
            getPrototypeOf () {
                return Reflect.getPrototypeOf(i[0]);
            },
            has (r, a) {
                return Ru(r).includes(a);
            },
            ownKeys (r) {
                return Ru(r);
            },
            set (r, a, l) {
                const c = r._storage || (r._storage = n());
                return r[a] = c[a] = l, delete r._keys, !0;
            }
        });
    }
    function cs(i, t, e, s) {
        const n = {
            _cacheable: !1,
            _proxy: i,
            _context: t,
            _subProxy: e,
            _stack: new Set,
            _descriptors: Du(i, s),
            setContext: (o)=>cs(i, o, e, s),
            override: (o)=>cs(i.override(o), t, e, s)
        };
        return new Proxy(n, {
            deleteProperty (o, r) {
                return delete o[r], delete i[r], !0;
            },
            get (o, r, a) {
                return Mu(o, r, ()=>SC(o, r, a));
            },
            getOwnPropertyDescriptor (o, r) {
                return o._descriptors.allKeys ? Reflect.has(i, r) ? {
                    enumerable: !0,
                    configurable: !0
                } : void 0 : Reflect.getOwnPropertyDescriptor(i, r);
            },
            getPrototypeOf () {
                return Reflect.getPrototypeOf(i);
            },
            has (o, r) {
                return Reflect.has(i, r);
            },
            ownKeys () {
                return Reflect.ownKeys(i);
            },
            set (o, r, a) {
                return i[r] = a, delete o[r], !0;
            }
        });
    }
    function Du(i, t = {
        scriptable: !0,
        indexable: !0
    }) {
        const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
        return {
            allKeys: n,
            scriptable: e,
            indexable: s,
            isScriptable: Ue(e) ? e : ()=>e,
            isIndexable: Ue(s) ? s : ()=>s
        };
    }
    const kC = (i, t)=>i ? i + Ha(t) : t, el = (i, t)=>$(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
    function Mu(i, t, e) {
        if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
        const s = e();
        return i[t] = s, s;
    }
    function SC(i, t, e) {
        const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
        let a = s[t];
        return Ue(a) && r.isScriptable(t) && (a = OC(t, a, i, e)), Q(a) && a.length && (a = DC(t, a, i, r.isIndexable)), el(t, a) && (a = cs(a, n, o && o[t], r)), a;
    }
    function OC(i, t, e, s) {
        const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
        if (a.has(i)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
        return a.add(i), t = t(o, r || s), a.delete(i), el(i, t) && (t = il(n._scopes, n, i, t)), t;
    }
    function DC(i, t, e, s) {
        const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
        if (Ft(o.index) && s(i)) t = t[o.index % t.length];
        else if ($(t[0])) {
            const l = t, c = n._scopes.filter((h)=>h !== l);
            t = [];
            for (const h of l){
                const d = il(c, n, i, h);
                t.push(cs(d, o, r && r[i], a));
            }
        }
        return t;
    }
    function Iu(i, t, e) {
        return Ue(i) ? i(t, e) : i;
    }
    const MC = (i, t)=>i === !0 ? t : typeof i == "string" ? Ke(t, i) : void 0;
    function IC(i, t, e, s, n) {
        for (const o of t){
            const r = MC(e, o);
            if (r) {
                i.add(r);
                const a = Iu(r._fallback, e, n);
                if (Ft(a) && a !== e && a !== s) return a;
            } else if (r === !1 && Ft(s) && e !== s) return null;
        }
        return !1;
    }
    function il(i, t, e, s) {
        const n = t._rootScopes, o = Iu(t._fallback, e, s), r = [
            ...i,
            ...n
        ], a = new Set;
        a.add(s);
        let l = Lu(a, r, e, o || e, s);
        return l === null || Ft(o) && o !== e && (l = Lu(a, r, o, l, s), l === null) ? !1 : tl(Array.from(a), [
            ""
        ], n, o, ()=>LC(t, e, s));
    }
    function Lu(i, t, e, s, n) {
        for(; e;)e = IC(i, t, e, s, n);
        return e;
    }
    function LC(i, t, e) {
        const s = i._getTarget();
        t in s || (s[t] = {});
        const n = s[t];
        return Q(n) && $(e) ? e : n;
    }
    function PC(i, t, e, s) {
        let n;
        for (const o of t)if (n = Pu(kC(o, i), e), Ft(n)) return el(i, n) ? il(e, s, i, n) : n;
    }
    function Pu(i, t) {
        for (const e of t){
            if (!e) continue;
            const s = e[i];
            if (Ft(s)) return s;
        }
    }
    function Ru(i) {
        let t = i._keys;
        return t || (t = i._keys = RC(i._scopes)), t;
    }
    function RC(i) {
        const t = new Set;
        for (const e of i)for (const s of Object.keys(e).filter((n)=>!n.startsWith("_")))t.add(s);
        return Array.from(t);
    }
    function Nu(i, t, e, s) {
        const { iScale: n } = i, { key: o = "r" } = this._parsing, r = new Array(s);
        let a, l, c, h;
        for(a = 0, l = s; a < l; ++a)c = a + e, h = t[c], r[a] = {
            r: n.parse(Ke(h, o), c)
        };
        return r;
    }
    const NC = Number.EPSILON || 1e-14, hs = (i, t)=>t < i.length && !i[t].skip && i[t], $u = (i)=>i === "x" ? "y" : "x";
    function $C(i, t, e, s) {
        const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = Va(o, n), l = Va(r, o);
        let c = a / (a + l), h = l / (a + l);
        c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
        const d = s * c, u = s * h;
        return {
            previous: {
                x: o.x - d * (r.x - n.x),
                y: o.y - d * (r.y - n.y)
            },
            next: {
                x: o.x + u * (r.x - n.x),
                y: o.y + u * (r.y - n.y)
            }
        };
    }
    function BC(i, t, e) {
        const s = i.length;
        let n, o, r, a, l, c = hs(i, 0);
        for(let h = 0; h < s - 1; ++h)if (l = c, c = hs(i, h + 1), !(!l || !c)) {
            if (Qs(t[h], 0, NC)) {
                e[h] = e[h + 1] = 0;
                continue;
            }
            n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
        }
    }
    function HC(i, t, e = "x") {
        const s = $u(e), n = i.length;
        let o, r, a, l = hs(i, 0);
        for(let c = 0; c < n; ++c){
            if (r = a, a = l, l = hs(i, c + 1), !a) continue;
            const h = a[e], d = a[s];
            r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
        }
    }
    function FC(i, t = "x") {
        const e = $u(t), s = i.length, n = Array(s).fill(0), o = Array(s);
        let r, a, l, c = hs(i, 0);
        for(r = 0; r < s; ++r)if (a = l, l = c, c = hs(i, r + 1), !!l) {
            if (c) {
                const h = c[t] - l[t];
                n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
            }
            o[r] = a ? c ? me(n[r - 1]) !== me(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
        }
        BC(i, n, o), HC(i, o, t);
    }
    function Xo(i, t, e) {
        return Math.max(Math.min(i, e), t);
    }
    function VC(i, t) {
        let e, s, n, o, r, a = on(i[0], t);
        for(e = 0, s = i.length; e < s; ++e)r = o, o = a, a = e < s - 1 && on(i[e + 1], t), o && (n = i[e], r && (n.cp1x = Xo(n.cp1x, t.left, t.right), n.cp1y = Xo(n.cp1y, t.top, t.bottom)), a && (n.cp2x = Xo(n.cp2x, t.left, t.right), n.cp2y = Xo(n.cp2y, t.top, t.bottom)));
    }
    function WC(i, t, e, s, n) {
        let o, r, a, l;
        if (t.spanGaps && (i = i.filter((c)=>!c.skip)), t.cubicInterpolationMode === "monotone") FC(i, n);
        else {
            let c = s ? i[i.length - 1] : i[0];
            for(o = 0, r = i.length; o < r; ++o)a = i[o], l = $C(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
        }
        t.capBezierPoints && VC(i, e);
    }
    function Bu() {
        return typeof window < "u" && typeof document < "u";
    }
    function sl(i) {
        let t = i.parentNode;
        return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
    }
    function Go(i, t, e) {
        let s;
        return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
    }
    const qo = (i)=>window.getComputedStyle(i, null);
    function zC(i, t) {
        return qo(i).getPropertyValue(t);
    }
    const jC = [
        "top",
        "right",
        "bottom",
        "left"
    ];
    function Ti(i, t, e) {
        const s = {};
        e = e ? "-" + e : "";
        for(let n = 0; n < 4; n++){
            const o = jC[n];
            s[o] = parseFloat(i[t + "-" + o + e]) || 0;
        }
        return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
    }
    const YC = (i, t, e)=>(i > 0 || t > 0) && (!e || !e.shadowRoot);
    function KC(i, t) {
        const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
        let r = !1, a, l;
        if (YC(n, o, i.target)) a = n, l = o;
        else {
            const c = t.getBoundingClientRect();
            a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
        }
        return {
            x: a,
            y: l,
            box: r
        };
    }
    function Ai(i, t) {
        if ("native" in i) return i;
        const { canvas: e, currentDevicePixelRatio: s } = t, n = qo(e), o = n.boxSizing === "border-box", r = Ti(n, "padding"), a = Ti(n, "border", "width"), { x: l, y: c, box: h } = KC(i, e), d = r.left + (h && a.left), u = r.top + (h && a.top);
        let { width: f, height: p } = t;
        return o && (f -= r.width + a.width, p -= r.height + a.height), {
            x: Math.round((l - d) / f * e.width / s),
            y: Math.round((c - u) / p * e.height / s)
        };
    }
    function UC(i, t, e) {
        let s, n;
        if (t === void 0 || e === void 0) {
            const o = sl(i);
            if (!o) t = i.clientWidth, e = i.clientHeight;
            else {
                const r = o.getBoundingClientRect(), a = qo(o), l = Ti(a, "border", "width"), c = Ti(a, "padding");
                t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Go(a.maxWidth, o, "clientWidth"), n = Go(a.maxHeight, o, "clientHeight");
            }
        }
        return {
            width: t,
            height: e,
            maxWidth: s || Ho,
            maxHeight: n || Ho
        };
    }
    const nl = (i)=>Math.round(i * 10) / 10;
    function XC(i, t, e, s) {
        const n = qo(i), o = Ti(n, "margin"), r = Go(n.maxWidth, i, "clientWidth") || Ho, a = Go(n.maxHeight, i, "clientHeight") || Ho, l = UC(i, t, e);
        let { width: c, height: h } = l;
        if (n.boxSizing === "content-box") {
            const d = Ti(n, "border", "width"), u = Ti(n, "padding");
            c -= u.width + d.width, h -= u.height + d.height;
        }
        return c = Math.max(0, c - o.width), h = Math.max(0, s ? Math.floor(c / s) : h - o.height), c = nl(Math.min(c, r, l.maxWidth)), h = nl(Math.min(h, a, l.maxHeight)), c && !h && (h = nl(c / 2)), {
            width: c,
            height: h
        };
    }
    function Hu(i, t, e) {
        const s = t || 1, n = Math.floor(i.height * s), o = Math.floor(i.width * s);
        i.height = n / s, i.width = o / s;
        const r = i.canvas;
        return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
    }
    const GC = function() {
        let i = !1;
        try {
            const t = {
                get passive () {
                    return i = !0, !1;
                }
            };
            window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
        } catch  {}
        return i;
    }();
    function Fu(i, t) {
        const e = zC(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
        return s ? +s[1] : void 0;
    }
    function wi(i, t, e, s) {
        return {
            x: i.x + e * (t.x - i.x),
            y: i.y + e * (t.y - i.y)
        };
    }
    function qC(i, t, e, s) {
        return {
            x: i.x + e * (t.x - i.x),
            y: s === "middle" ? e < .5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
        };
    }
    function ZC(i, t, e, s) {
        const n = {
            x: i.cp2x,
            y: i.cp2y
        }, o = {
            x: t.cp1x,
            y: t.cp1y
        }, r = wi(i, n, e), a = wi(n, o, e), l = wi(o, t, e), c = wi(r, a, e), h = wi(a, l, e);
        return wi(c, h, e);
    }
    const Vu = new Map;
    function QC(i, t) {
        t = t || {};
        const e = i + JSON.stringify(t);
        let s = Vu.get(e);
        return s || (s = new Intl.NumberFormat(i, t), Vu.set(e, s)), s;
    }
    function an(i, t, e) {
        return QC(t, e).format(i);
    }
    const JC = function(i, t) {
        return {
            x (e) {
                return i + i + t - e;
            },
            setWidth (e) {
                t = e;
            },
            textAlign (e) {
                return e === "center" ? e : e === "right" ? "left" : "right";
            },
            xPlus (e, s) {
                return e - s;
            },
            leftForLtr (e, s) {
                return e - s;
            }
        };
    }, tT = function() {
        return {
            x (i) {
                return i;
            },
            setWidth (i) {},
            textAlign (i) {
                return i;
            },
            xPlus (i, t) {
                return i + t;
            },
            leftForLtr (i, t) {
                return i;
            }
        };
    };
    function ds(i, t, e) {
        return i ? JC(t, e) : tT();
    }
    function Wu(i, t) {
        let e, s;
        (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
            e.getPropertyValue("direction"),
            e.getPropertyPriority("direction")
        ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
    }
    function zu(i, t) {
        t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
    }
    function ju(i) {
        return i === "angle" ? {
            between: Js,
            compare: FE,
            normalize: Nt
        } : {
            between: Ae,
            compare: (t, e)=>t - e,
            normalize: (t)=>t
        };
    }
    function Yu({ start: i, end: t, count: e, loop: s, style: n }) {
        return {
            start: i % e,
            end: t % e,
            loop: s && (t - i + 1) % e === 0,
            style: n
        };
    }
    function eT(i, t, e) {
        const { property: s, start: n, end: o } = e, { between: r, normalize: a } = ju(s), l = t.length;
        let { start: c, end: h, loop: d } = i, u, f;
        if (d) {
            for(c += l, h += l, u = 0, f = l; u < f && r(a(t[c % l][s]), n, o); ++u)c--, h--;
            c %= l, h %= l;
        }
        return h < c && (h += l), {
            start: c,
            end: h,
            loop: d,
            style: i.style
        };
    }
    function Ku(i, t, e) {
        if (!e) return [
            i
        ];
        const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = ju(s), { start: h, end: d, loop: u, style: f } = eT(i, t, e), p = [];
        let _ = !1, m = null, y, x, E;
        const C = ()=>l(n, E, y) && a(n, E) !== 0, T = ()=>a(o, y) === 0 || l(o, E, y), A = ()=>_ || C(), w = ()=>!_ || T();
        for(let S = h, k = h; S <= d; ++S)x = t[S % r], !x.skip && (y = c(x[s]), y !== E && (_ = l(y, n, o), m === null && A() && (m = a(y, n) === 0 ? S : k), m !== null && w() && (p.push(Yu({
            start: m,
            end: S,
            loop: u,
            count: r,
            style: f
        })), m = null), k = S, E = y));
        return m !== null && p.push(Yu({
            start: m,
            end: d,
            loop: u,
            count: r,
            style: f
        })), p;
    }
    function Uu(i, t) {
        const e = [], s = i.segments;
        for(let n = 0; n < s.length; n++){
            const o = Ku(s[n], i.points, t);
            o.length && e.push(...o);
        }
        return e;
    }
    function iT(i, t, e, s) {
        let n = 0, o = t - 1;
        if (e && !s) for(; n < t && !i[n].skip;)n++;
        for(; n < t && i[n].skip;)n++;
        for(n %= t, e && (o += n); o > n && i[o % t].skip;)o--;
        return o %= t, {
            start: n,
            end: o
        };
    }
    function sT(i, t, e, s) {
        const n = i.length, o = [];
        let r = t, a = i[t], l;
        for(l = t + 1; l <= e; ++l){
            const c = i[l % n];
            c.skip || c.stop ? a.skip || (s = !1, o.push({
                start: t % n,
                end: (l - 1) % n,
                loop: s
            }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
        }
        return r !== null && o.push({
            start: t % n,
            end: r % n,
            loop: s
        }), o;
    }
    function nT(i, t) {
        const e = i.points, s = i.options.spanGaps, n = e.length;
        if (!n) return [];
        const o = !!i._loop, { start: r, end: a } = iT(e, n, o, s);
        if (s === !0) return Xu(i, [
            {
                start: r,
                end: a,
                loop: o
            }
        ], e, t);
        const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
        return Xu(i, sT(e, r, l, c), e, t);
    }
    function Xu(i, t, e, s) {
        return !s || !s.setContext || !e ? t : oT(i, t, e, s);
    }
    function oT(i, t, e, s) {
        const n = i._chart.getContext(), o = Gu(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
        let h = o, d = t[0].start, u = d;
        function f(p, _, m, y) {
            const x = a ? -1 : 1;
            if (p !== _) {
                for(p += l; e[p % l].skip;)p -= x;
                for(; e[_ % l].skip;)_ += x;
                p % l !== _ % l && (c.push({
                    start: p % l,
                    end: _ % l,
                    loop: m,
                    style: y
                }), h = y, d = _ % l);
            }
        }
        for (const p of t){
            d = a ? d : p.start;
            let _ = e[d % l], m;
            for(u = d + 1; u <= p.end; u++){
                const y = e[u % l];
                m = Gu(s.setContext(qe(n, {
                    type: "segment",
                    p0: _,
                    p1: y,
                    p0DataIndex: (u - 1) % l,
                    p1DataIndex: u % l,
                    datasetIndex: r
                }))), rT(m, h) && f(d, u - 1, p.loop, h), _ = y, h = m;
            }
            d < u - 1 && f(d, u - 1, p.loop, h);
        }
        return c;
    }
    function Gu(i) {
        return {
            backgroundColor: i.backgroundColor,
            borderCapStyle: i.borderCapStyle,
            borderDash: i.borderDash,
            borderDashOffset: i.borderDashOffset,
            borderJoinStyle: i.borderJoinStyle,
            borderWidth: i.borderWidth,
            borderColor: i.borderColor
        };
    }
    function rT(i, t) {
        return t && JSON.stringify(i) !== JSON.stringify(t);
    } /*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ 
    class aT {
        constructor(){
            this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0;
        }
        _notify(t, e, s, n) {
            const o = e.listeners[n], r = e.duration;
            o.forEach((a)=>a({
                    chart: t,
                    initial: e.initial,
                    numSteps: r,
                    currentStep: Math.min(s - e.start, r)
                }));
        }
        _refresh() {
            this._request || (this._running = !0, this._request = du.call(window, ()=>{
                this._update(), this._request = null, this._running && this._refresh();
            }));
        }
        _update(t = Date.now()) {
            let e = 0;
            this._charts.forEach((s, n)=>{
                if (!s.running || !s.items.length) return;
                const o = s.items;
                let r = o.length - 1, a = !1, l;
                for(; r >= 0; --r)l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
                a && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
            }), this._lastDate = t, e === 0 && (this._running = !1);
        }
        _getAnims(t) {
            const e = this._charts;
            let s = e.get(t);
            return s || (s = {
                running: !1,
                initial: !0,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            }, e.set(t, s)), s;
        }
        listen(t, e, s) {
            this._getAnims(t).listeners[e].push(s);
        }
        add(t, e) {
            !e || !e.length || this._getAnims(t).items.push(...e);
        }
        has(t) {
            return this._getAnims(t).items.length > 0;
        }
        start(t) {
            const e = this._charts.get(t);
            e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n)=>Math.max(s, n._duration), 0), this._refresh());
        }
        running(t) {
            if (!this._running) return !1;
            const e = this._charts.get(t);
            return !(!e || !e.running || !e.items.length);
        }
        stop(t) {
            const e = this._charts.get(t);
            if (!e || !e.items.length) return;
            const s = e.items;
            let n = s.length - 1;
            for(; n >= 0; --n)s[n].cancel();
            e.items = [], this._notify(t, e, Date.now(), "complete");
        }
        remove(t) {
            return this._charts.delete(t);
        }
    }
    var be = new aT;
    const qu = "transparent", lT = {
        boolean (i, t, e) {
            return e > .5 ? t : i;
        },
        color (i, t, e) {
            const s = wu(i || qu), n = s.valid && wu(t || qu);
            return n && n.valid ? n.mix(s, e).hexString() : t;
        },
        number (i, t, e) {
            return i + (t - i) * e;
        }
    };
    class Zu {
        constructor(t, e, s, n){
            const o = e[s];
            n = tt([
                t.to,
                n,
                o,
                t.from
            ]);
            const r = tt([
                t.from,
                o,
                n
            ]);
            this._active = !0, this._fn = t.fn || lT[t.type || typeof r], this._easing = tn[t.easing] || tn.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
        }
        active() {
            return this._active;
        }
        update(t, e, s) {
            if (this._active) {
                this._notify(!1);
                const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
                this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = tt([
                    t.to,
                    e,
                    n,
                    t.from
                ]), this._from = tt([
                    t.from,
                    n,
                    e
                ]);
            }
        }
        cancel() {
            this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
        }
        tick(t) {
            const e = t - this._start, s = this._duration, n = this._prop, o = this._from, r = this._loop, a = this._to;
            let l;
            if (this._active = o !== a && (r || e < s), !this._active) {
                this._target[n] = a, this._notify(!0);
                return;
            }
            if (e < 0) {
                this._target[n] = o;
                return;
            }
            l = e / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, a, l);
        }
        wait() {
            const t = this._promises || (this._promises = []);
            return new Promise((e, s)=>{
                t.push({
                    res: e,
                    rej: s
                });
            });
        }
        _notify(t) {
            const e = t ? "res" : "rej", s = this._promises || [];
            for(let n = 0; n < s.length; n++)s[n][e]();
        }
    }
    const cT = [
        "x",
        "y",
        "borderWidth",
        "radius",
        "tension"
    ], hT = [
        "color",
        "borderColor",
        "backgroundColor"
    ];
    B.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    });
    const dT = Object.keys(B.animation);
    B.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: (i)=>i !== "onProgress" && i !== "onComplete" && i !== "fn"
    }), B.set("animations", {
        colors: {
            type: "color",
            properties: hT
        },
        numbers: {
            type: "number",
            properties: cT
        }
    }), B.describe("animations", {
        _fallback: "animation"
    }), B.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: (i)=>i | 0
                }
            }
        }
    });
    class ol {
        constructor(t, e){
            this._chart = t, this._properties = new Map, this.configure(e);
        }
        configure(t) {
            if (!$(t)) return;
            const e = this._properties;
            Object.getOwnPropertyNames(t).forEach((s)=>{
                const n = t[s];
                if (!$(n)) return;
                const o = {};
                for (const r of dT)o[r] = n[r];
                (Q(n.properties) && n.properties || [
                    s
                ]).forEach((r)=>{
                    (r === s || !e.has(r)) && e.set(r, o);
                });
            });
        }
        _animateOptions(t, e) {
            const s = e.options, n = fT(t, s);
            if (!n) return [];
            const o = this._createAnimations(n, s);
            return s.$shared && uT(t.options.$animations, s).then(()=>{
                t.options = s;
            }, ()=>{}), o;
        }
        _createAnimations(t, e) {
            const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
            let l;
            for(l = r.length - 1; l >= 0; --l){
                const c = r[l];
                if (c.charAt(0) === "$") continue;
                if (c === "options") {
                    n.push(...this._animateOptions(t, e));
                    continue;
                }
                const h = e[c];
                let d = o[c];
                const u = s.get(c);
                if (d) {
                    if (u && d.active()) {
                        d.update(u, h, a);
                        continue;
                    } else d.cancel();
                }
                if (!u || !u.duration) {
                    t[c] = h;
                    continue;
                }
                o[c] = d = new Zu(u, t, c, h), n.push(d);
            }
            return n;
        }
        update(t, e) {
            if (this._properties.size === 0) {
                Object.assign(t, e);
                return;
            }
            const s = this._createAnimations(t, e);
            if (s.length) return be.add(this._chart, s), !0;
        }
    }
    function uT(i, t) {
        const e = [], s = Object.keys(t);
        for(let n = 0; n < s.length; n++){
            const o = i[s[n]];
            o && o.active() && e.push(o.wait());
        }
        return Promise.all(e);
    }
    function fT(i, t) {
        if (!t) return;
        let e = i.options;
        if (!e) {
            i.options = t;
            return;
        }
        return e.$shared && (i.options = e = Object.assign({}, e, {
            $shared: !1,
            $animations: {}
        })), e;
    }
    function Qu(i, t) {
        const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
        return {
            start: s ? o : n,
            end: s ? n : o
        };
    }
    function pT(i, t, e) {
        if (e === !1) return !1;
        const s = Qu(i, e), n = Qu(t, e);
        return {
            top: n.end,
            right: s.end,
            bottom: n.start,
            left: s.start
        };
    }
    function _T(i) {
        let t, e, s, n;
        return $(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
            top: t,
            right: e,
            bottom: s,
            left: n,
            disabled: i === !1
        };
    }
    function Ju(i, t) {
        const e = [], s = i._getSortedDatasetMetas(t);
        let n, o;
        for(n = 0, o = s.length; n < o; ++n)e.push(s[n].index);
        return e;
    }
    function tf(i, t, e, s = {}) {
        const n = i.keys, o = s.mode === "single";
        let r, a, l, c;
        if (t !== null) {
            for(r = 0, a = n.length; r < a; ++r){
                if (l = +n[r], l === e) {
                    if (s.all) continue;
                    break;
                }
                c = i.values[l], rt(c) && (o || t === 0 || me(t) === me(c)) && (t += c);
            }
            return t;
        }
    }
    function gT(i) {
        const t = Object.keys(i), e = new Array(t.length);
        let s, n, o;
        for(s = 0, n = t.length; s < n; ++s)o = t[s], e[s] = {
            x: o,
            y: i[o]
        };
        return e;
    }
    function ef(i, t) {
        const e = i && i.options.stacked;
        return e || e === void 0 && t.stack !== void 0;
    }
    function mT(i, t, e) {
        return `${i.id}.${t.id}.${e.stack || e.type}`;
    }
    function bT(i) {
        const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
        return {
            min: s ? t : Number.NEGATIVE_INFINITY,
            max: n ? e : Number.POSITIVE_INFINITY
        };
    }
    function vT(i, t, e) {
        const s = i[t] || (i[t] = {});
        return s[e] || (s[e] = {});
    }
    function sf(i, t, e, s) {
        for (const n of t.getMatchingVisibleMetas(s).reverse()){
            const o = i[n.index];
            if (e && o > 0 || !e && o < 0) return n.index;
        }
        return null;
    }
    function nf(i, t) {
        const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = mT(o, r, s), d = t.length;
        let u;
        for(let f = 0; f < d; ++f){
            const p = t[f], { [l]: _, [c]: m } = p, y = p._stacks || (p._stacks = {});
            u = y[c] = vT(n, h, _), u[a] = m, u._top = sf(u, r, !0, s.type), u._bottom = sf(u, r, !1, s.type);
        }
    }
    function rl(i, t) {
        const e = i.scales;
        return Object.keys(e).filter((s)=>e[s].axis === t).shift();
    }
    function yT(i, t) {
        return qe(i, {
            active: !1,
            dataset: void 0,
            datasetIndex: t,
            index: t,
            mode: "default",
            type: "dataset"
        });
    }
    function xT(i, t, e) {
        return qe(i, {
            active: !1,
            dataIndex: t,
            parsed: void 0,
            raw: void 0,
            element: e,
            index: t,
            mode: "default",
            type: "data"
        });
    }
    function ln(i, t) {
        const e = i.controller.index, s = i.vScale && i.vScale.axis;
        if (s) {
            t = t || i._parsed;
            for (const n of t){
                const o = n._stacks;
                if (!o || o[s] === void 0 || o[s][e] === void 0) return;
                delete o[s][e];
            }
        }
    }
    const al = (i)=>i === "reset" || i === "none", of = (i, t)=>t ? i : Object.assign({}, i), ET = (i, t, e)=>i && !t.hidden && t._stacked && {
            keys: Ju(e, !0),
            values: null
        };
    class zt {
        constructor(t, e){
            this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.initialize();
        }
        initialize() {
            const t = this._cachedMeta;
            this.configure(), this.linkScales(), t._stacked = ef(t.vScale, t), this.addElements();
        }
        updateIndex(t) {
            this.index !== t && ln(this._cachedMeta), this.index = t;
        }
        linkScales() {
            const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, p)=>d === "x" ? u : d === "r" ? p : f, o = e.xAxisID = R(s.xAxisID, rl(t, "x")), r = e.yAxisID = R(s.yAxisID, rl(t, "y")), a = e.rAxisID = R(s.rAxisID, rl(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
            e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
        }
        getDataset() {
            return this.chart.data.datasets[this.index];
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
            return this.chart.scales[t];
        }
        _getOtherScale(t) {
            const e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
            this._update("reset");
        }
        _destroy() {
            const t = this._cachedMeta;
            this._data && cu(this._data, this), t._stacked && ln(t);
        }
        _dataCheck() {
            const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
            if ($(e)) this._data = gT(e);
            else if (s !== e) {
                if (s) {
                    cu(s, this);
                    const n = this._cachedMeta;
                    ln(n), n._parsed = [];
                }
                e && Object.isExtensible(e) && jE(e, this), this._syncList = [], this._data = e;
            }
        }
        addElements() {
            const t = this._cachedMeta;
            this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType);
        }
        buildOrUpdateElements(t) {
            const e = this._cachedMeta, s = this.getDataset();
            let n = !1;
            this._dataCheck();
            const o = e._stacked;
            e._stacked = ef(e.vScale, e), e.stack !== s.stack && (n = !0, ln(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && nf(this, e._parsed);
        }
        configure() {
            const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
            this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
        }
        parse(t, e) {
            const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
            let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
            if (this._parsing === !1) s._parsed = n, s._sorted = !0, u = n;
            else {
                Q(n[t]) ? u = this.parseArrayData(s, n, t, e) : $(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
                const f = ()=>d[a] === null || c && d[a] < c[a];
                for(h = 0; h < e; ++h)s._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
                s._sorted = l;
            }
            r && nf(this, u);
        }
        parsePrimitiveData(t, e, s, n) {
            const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(n);
            let u, f, p;
            for(u = 0, f = n; u < f; ++u)p = u + s, d[u] = {
                [a]: h || o.parse(c[p], p),
                [l]: r.parse(e[p], p)
            };
            return d;
        }
        parseArrayData(t, e, s, n) {
            const { xScale: o, yScale: r } = t, a = new Array(n);
            let l, c, h, d;
            for(l = 0, c = n; l < c; ++l)h = l + s, d = e[h], a[l] = {
                x: o.parse(d[0], h),
                y: r.parse(d[1], h)
            };
            return a;
        }
        parseObjectData(t, e, s, n) {
            const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
            let h, d, u, f;
            for(h = 0, d = n; h < d; ++h)u = h + s, f = e[u], c[h] = {
                x: o.parse(Ke(f, a), u),
                y: r.parse(Ke(f, l), u)
            };
            return c;
        }
        getParsed(t) {
            return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
            return this._cachedMeta.data[t];
        }
        applyStack(t, e, s) {
            const n = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
                keys: Ju(n, !0),
                values: e._stacks[t.axis]
            };
            return tf(a, r, o.index, {
                mode: s
            });
        }
        updateRangeFromParsed(t, e, s, n) {
            const o = s[e.axis];
            let r = o === null ? NaN : o;
            const a = n && s._stacks[e.axis];
            n && a && (n.values = a, r = tf(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
        }
        getMinMax(t, e) {
            const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = ET(e, s, this.chart), c = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            }, { min: h, max: d } = bT(a);
            let u, f;
            function p() {
                f = n[u];
                const _ = f[a.axis];
                return !rt(f[t.axis]) || h > _ || d < _;
            }
            for(u = 0; u < r && !(!p() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u);
            if (o) {
                for(u = r - 1; u >= 0; --u)if (!p()) {
                    this.updateRangeFromParsed(c, t, f, l);
                    break;
                }
            }
            return c;
        }
        getAllParsedValues(t) {
            const e = this._cachedMeta._parsed, s = [];
            let n, o, r;
            for(n = 0, o = e.length; n < o; ++n)r = e[n][t.axis], rt(r) && s.push(r);
            return s;
        }
        getMaxOverflow() {
            return !1;
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
            return {
                label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
                value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
            };
        }
        _update(t) {
            const e = this._cachedMeta;
            this.update(t || "default"), e._clip = _T(R(this.options.clip, pT(e.xScale, e.yScale, this.getMaxOverflow())));
        }
        update(t) {}
        draw() {
            const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
            let h;
            for(s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h){
                const d = n[h];
                d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
            }
            for(h = 0; h < r.length; ++h)r[h].draw(t, o);
        }
        getStyle(t, e) {
            const s = e ? "active" : "default";
            return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
        }
        getContext(t, e, s) {
            const n = this.getDataset();
            let o;
            if (t >= 0 && t < this._cachedMeta.data.length) {
                const r = this._cachedMeta.data[t];
                o = r.$context || (r.$context = xT(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
            } else o = this.$context || (this.$context = yT(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
            return o.active = !!e, o.mode = s, o;
        }
        resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = "default", s) {
            const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Ft(s);
            if (a) return of(a, l);
            const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
                `${t}Hover`,
                "hover",
                t,
                ""
            ] : [
                t,
                ""
            ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(B.elements[t]), p = ()=>this.getContext(s, n), _ = c.resolveNamedOptions(u, f, p, d);
            return _.$shared && (_.$shared = l, o[r] = Object.freeze(of(_, l))), _;
        }
        _resolveAnimations(t, e, s) {
            const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
            if (a) return a;
            let l;
            if (n.options.animation !== !1) {
                const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), u = h.getOptionScopes(this.getDataset(), d);
                l = h.createResolver(u, this.getContext(t, s, e));
            }
            const c = new ol(n, l && l.animations);
            return l && l._cacheable && (o[r] = Object.freeze(c)), c;
        }
        getSharedOptions(t) {
            if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
        }
        includeOptions(t, e) {
            return !e || al(t) || this.chart._animationsDisabled;
        }
        _getSharedOptions(t, e) {
            const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
            return this.updateSharedOptions(o, e, s), {
                sharedOptions: o,
                includeOptions: r
            };
        }
        updateElement(t, e, s, n) {
            al(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
        }
        updateSharedOptions(t, e, s) {
            t && !al(e) && this._resolveAnimations(void 0, e).update(t, s);
        }
        _setStyle(t, e, s, n) {
            t.active = n;
            const o = this.getStyle(e, n);
            this._resolveAnimations(e, s, n).update(t, {
                options: !n && this.getSharedOptions(o) || o
            });
        }
        removeHoverStyle(t, e, s) {
            this._setStyle(t, s, "active", !1);
        }
        setHoverStyle(t, e, s) {
            this._setStyle(t, s, "active", !0);
        }
        _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1);
        }
        _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0);
        }
        _resyncElements(t) {
            const e = this._data, s = this._cachedMeta.data;
            for (const [a, l, c] of this._syncList)this[a](l, c);
            this._syncList = [];
            const n = s.length, o = e.length, r = Math.min(o, n);
            r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
        }
        _insertElements(t, e, s = !0) {
            const n = this._cachedMeta, o = n.data, r = t + e;
            let a;
            const l = (c)=>{
                for(c.length += e, a = c.length - 1; a >= r; a--)c[a] = c[a - e];
            };
            for(l(o), a = t; a < r; ++a)o[a] = new this.dataElementType;
            this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
        }
        updateElements(t, e, s, n) {}
        _removeElements(t, e) {
            const s = this._cachedMeta;
            if (this._parsing) {
                const n = s._parsed.splice(t, e);
                s._stacked && ln(s, n);
            }
            s.data.splice(t, e);
        }
        _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
                const [e, s, n] = t;
                this[e](s, n);
            }
            this.chart._dataChanges.push([
                this.index,
                ...t
            ]);
        }
        _onDataPush() {
            const t = arguments.length;
            this._sync([
                "_insertElements",
                this.getDataset().data.length - t,
                t
            ]);
        }
        _onDataPop() {
            this._sync([
                "_removeElements",
                this._cachedMeta.data.length - 1,
                1
            ]);
        }
        _onDataShift() {
            this._sync([
                "_removeElements",
                0,
                1
            ]);
        }
        _onDataSplice(t, e) {
            e && this._sync([
                "_removeElements",
                t,
                e
            ]);
            const s = arguments.length - 2;
            s && this._sync([
                "_insertElements",
                t,
                s
            ]);
        }
        _onDataUnshift() {
            this._sync([
                "_insertElements",
                0,
                arguments.length
            ]);
        }
    }
    zt.defaults = {}, zt.prototype.datasetElementType = null, zt.prototype.dataElementType = null;
    function CT(i, t) {
        if (!i._cache.$bar) {
            const e = i.getMatchingVisibleMetas(t);
            let s = [];
            for(let n = 0, o = e.length; n < o; n++)s = s.concat(e[n].controller.getAllParsedValues(i));
            i._cache.$bar = hu(s.sort((n, o)=>n - o));
        }
        return i._cache.$bar;
    }
    function TT(i) {
        const t = i.iScale, e = CT(t, i.type);
        let s = t._length, n, o, r, a;
        const l = ()=>{
            r === 32767 || r === -32768 || (Ft(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
        };
        for(n = 0, o = e.length; n < o; ++n)r = t.getPixelForValue(e[n]), l();
        for(a = void 0, n = 0, o = t.ticks.length; n < o; ++n)r = t.getPixelForTick(n), l();
        return s;
    }
    function AT(i, t, e, s) {
        const n = e.barThickness;
        let o, r;
        return N(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
            chunk: o / s,
            ratio: r,
            start: t.pixels[i] - o / 2
        };
    }
    function wT(i, t, e, s) {
        const n = t.pixels, o = n[i];
        let r = i > 0 ? n[i - 1] : null, a = i < n.length - 1 ? n[i + 1] : null;
        const l = e.categoryPercentage;
        r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
        const c = o - (o - Math.min(r, a)) / 2 * l;
        return {
            chunk: Math.abs(a - r) / 2 * l / s,
            ratio: e.barPercentage,
            start: c
        };
    }
    function kT(i, t, e, s) {
        const n = e.parse(i[0], s), o = e.parse(i[1], s), r = Math.min(n, o), a = Math.max(n, o);
        let l = r, c = a;
        Math.abs(r) > Math.abs(a) && (l = a, c = r), t[e.axis] = c, t._custom = {
            barStart: l,
            barEnd: c,
            start: n,
            end: o,
            min: r,
            max: a
        };
    }
    function rf(i, t, e, s) {
        return Q(i) ? kT(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
    }
    function af(i, t, e, s) {
        const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
        let c, h, d, u;
        for(c = e, h = e + s; c < h; ++c)u = t[c], d = {}, d[n.axis] = a || n.parse(r[c], c), l.push(rf(u, d, o, c));
        return l;
    }
    function ll(i) {
        return i && i.barStart !== void 0 && i.barEnd !== void 0;
    }
    function ST(i, t, e) {
        return i !== 0 ? me(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
    }
    function OT(i) {
        let t, e, s, n, o;
        return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
            start: e,
            end: s,
            reverse: t,
            top: n,
            bottom: o
        };
    }
    function DT(i, t, e, s) {
        let n = t.borderSkipped;
        const o = {};
        if (!n) {
            i.borderSkipped = o;
            return;
        }
        if (n === !0) {
            i.borderSkipped = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0
            };
            return;
        }
        const { start: r, end: a, reverse: l, top: c, bottom: h } = OT(i);
        n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[lf(h, r, a, l)] = !0, n = c)), o[lf(n, r, a, l)] = !0, i.borderSkipped = o;
    }
    function lf(i, t, e, s) {
        return s ? (i = MT(i, t, e), i = cf(i, e, t)) : i = cf(i, t, e), i;
    }
    function MT(i, t, e) {
        return i === t ? e : i === e ? t : i;
    }
    function cf(i, t, e) {
        return i === "start" ? t : i === "end" ? e : i;
    }
    function IT(i, { inflateAmount: t }, e) {
        i.inflateAmount = t === "auto" ? e === 1 ? .33 : 0 : t;
    }
    class cn extends zt {
        parsePrimitiveData(t, e, s, n) {
            return af(t, e, s, n);
        }
        parseArrayData(t, e, s, n) {
            return af(t, e, s, n);
        }
        parseObjectData(t, e, s, n) {
            const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, h = r.axis === "x" ? a : l, d = [];
            let u, f, p, _;
            for(u = s, f = s + n; u < f; ++u)_ = e[u], p = {}, p[o.axis] = o.parse(Ke(_, c), u), d.push(rf(Ke(_, h), p, r, u));
            return d;
        }
        updateRangeFromParsed(t, e, s, n) {
            super.updateRangeFromParsed(t, e, s, n);
            const o = s._custom;
            o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
        }
        getMaxOverflow() {
            return 0;
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), r = o._custom, a = ll(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(o[n.axis]);
            return {
                label: "" + s.getLabelForValue(o[s.axis]),
                value: a
            };
        }
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
            const t = this._cachedMeta;
            t.stack = this.getDataset().stack;
        }
        update(t) {
            const e = this._cachedMeta;
            this.updateElements(e.data, 0, e.data.length, t);
        }
        updateElements(t, e, s, n) {
            const o = n === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), h = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n);
            for(let f = e; f < e + s; f++){
                const p = this.getParsed(f), _ = o || N(p[a.axis]) ? {
                    base: l,
                    head: l
                } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, h), y = (p._stacks || {})[a.axis], x = {
                    horizontal: c,
                    base: _.base,
                    enableBorderRadius: !y || ll(p._custom) || r === y._top || r === y._bottom,
                    x: c ? _.head : m.center,
                    y: c ? m.center : _.head,
                    height: c ? m.size : Math.abs(_.size),
                    width: c ? Math.abs(_.size) : m.size
                };
                u && (x.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
                const E = x.options || t[f].options;
                DT(x, E, y, r), IT(x, E, h.ratio), this.updateElement(t[f], f, x, n);
            }
        }
        _getStacks(t, e) {
            const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((l)=>l.controller.options.grouped), o = s.options.stacked, r = [], a = (l)=>{
                const c = l.controller.getParsed(e), h = c && c[l.vScale.axis];
                if (N(h) || isNaN(h)) return !0;
            };
            for (const l of n)if (!(e !== void 0 && a(l)) && ((o === !1 || r.indexOf(l.stack) === -1 || o === void 0 && l.stack === void 0) && r.push(l.stack), l.index === t)) break;
            return r.length || r.push(void 0), r;
        }
        _getStackCount(t) {
            return this._getStacks(void 0, t).length;
        }
        _getStackIndex(t, e, s) {
            const n = this._getStacks(t, s), o = e !== void 0 ? n.indexOf(e) : -1;
            return o === -1 ? n.length - 1 : o;
        }
        _getRuler() {
            const t = this.options, e = this._cachedMeta, s = e.iScale, n = [];
            let o, r;
            for(o = 0, r = e.data.length; o < r; ++o)n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
            const a = t.barThickness;
            return {
                min: a || TT(e),
                pixels: n,
                start: s._startPixel,
                end: s._endPixel,
                stackCount: this._getStackCount(),
                scale: s,
                grouped: t.grouped,
                ratio: a ? 1 : t.categoryPercentage * t.barPercentage
            };
        }
        _calculateBarValuePixels(t) {
            const { _cachedMeta: { vScale: e, _stacked: s }, options: { base: n, minBarLength: o } } = this, r = n || 0, a = this.getParsed(t), l = a._custom, c = ll(l);
            let h = a[e.axis], d = 0, u = s ? this.applyStack(e, a, s) : h, f, p;
            u !== h && (d = u - h, u = h), c && (h = l.barStart, u = l.barEnd - l.barStart, h !== 0 && me(h) !== me(l.barEnd) && (d = 0), d += h);
            const _ = !N(n) && !c ? n : d;
            let m = e.getPixelForValue(_);
            if (this.chart.getDataVisibility(t) ? f = e.getPixelForValue(d + u) : f = m, p = f - m, Math.abs(p) < o) {
                p = ST(p, e, r) * o, h === r && (m -= p / 2);
                const y = e.getPixelForDecimal(0), x = e.getPixelForDecimal(1), E = Math.min(y, x), C = Math.max(y, x);
                m = Math.max(Math.min(m, C), E), f = m + p;
            }
            if (m === e.getPixelForValue(r)) {
                const y = me(p) * e.getLineWidthForValue(r) / 2;
                m += y, p -= y;
            }
            return {
                size: p,
                base: m,
                head: f,
                center: f + p / 2
            };
        }
        _calculateBarIndexPixels(t, e) {
            const s = e.scale, n = this.options, o = n.skipNull, r = R(n.maxBarThickness, 1 / 0);
            let a, l;
            if (e.grouped) {
                const c = o ? this._getStackCount(t) : e.stackCount, h = n.barThickness === "flex" ? wT(t, e, n, c) : AT(t, e, n, c), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
                a = h.start + h.chunk * d + h.chunk / 2, l = Math.min(r, h.chunk * h.ratio);
            } else a = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(r, e.min * e.ratio);
            return {
                base: a - l / 2,
                head: a + l / 2,
                center: a,
                size: l
            };
        }
        draw() {
            const t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length;
            let o = 0;
            for(; o < n; ++o)this.getParsed(o)[e.axis] !== null && s[o].draw(this._ctx);
        }
    }
    cn.id = "bar", cn.defaults = {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: .8,
        barPercentage: .9,
        grouped: !0,
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "base",
                    "width",
                    "height"
                ]
            }
        }
    }, cn.overrides = {
        scales: {
            _index_: {
                type: "category",
                offset: !0,
                grid: {
                    offset: !0
                }
            },
            _value_: {
                type: "linear",
                beginAtZero: !0
            }
        }
    };
    class hn extends zt {
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
        }
        parsePrimitiveData(t, e, s, n) {
            const o = super.parsePrimitiveData(t, e, s, n);
            for(let r = 0; r < o.length; r++)o[r]._custom = this.resolveDataElementOptions(r + s).radius;
            return o;
        }
        parseArrayData(t, e, s, n) {
            const o = super.parseArrayData(t, e, s, n);
            for(let r = 0; r < o.length; r++){
                const a = e[s + r];
                o[r]._custom = R(a[2], this.resolveDataElementOptions(r + s).radius);
            }
            return o;
        }
        parseObjectData(t, e, s, n) {
            const o = super.parseObjectData(t, e, s, n);
            for(let r = 0; r < o.length; r++){
                const a = e[s + r];
                o[r]._custom = R(a && a.r && +a.r, this.resolveDataElementOptions(r + s).radius);
            }
            return o;
        }
        getMaxOverflow() {
            const t = this._cachedMeta.data;
            let e = 0;
            for(let s = t.length - 1; s >= 0; --s)e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
            return e > 0 && e;
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta, { xScale: s, yScale: n } = e, o = this.getParsed(t), r = s.getLabelForValue(o.x), a = n.getLabelForValue(o.y), l = o._custom;
            return {
                label: e.label,
                value: "(" + r + ", " + a + (l ? ", " + l : "") + ")"
            };
        }
        update(t) {
            const e = this._cachedMeta.data;
            this.updateElements(e, 0, e.length, t);
        }
        updateElements(t, e, s, n) {
            const o = n === "reset", { iScale: r, vScale: a } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, n), h = r.axis, d = a.axis;
            for(let u = e; u < e + s; u++){
                const f = t[u], p = !o && this.getParsed(u), _ = {}, m = _[h] = o ? r.getPixelForDecimal(.5) : r.getPixelForValue(p[h]), y = _[d] = o ? a.getBasePixel() : a.getPixelForValue(p[d]);
                _.skip = isNaN(m) || isNaN(y), c && (_.options = l || this.resolveDataElementOptions(u, f.active ? "active" : n), o && (_.options.radius = 0)), this.updateElement(f, u, _, n);
            }
        }
        resolveDataElementOptions(t, e) {
            const s = this.getParsed(t);
            let n = super.resolveDataElementOptions(t, e);
            n.$shared && (n = Object.assign({}, n, {
                $shared: !1
            }));
            const o = n.radius;
            return e !== "active" && (n.radius = 0), n.radius += R(s && s._custom, o), n;
        }
    }
    hn.id = "bubble", hn.defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "borderWidth",
                    "radius"
                ]
            }
        }
    }, hn.overrides = {
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title () {
                        return "";
                    }
                }
            }
        }
    };
    function LT(i, t, e) {
        let s = 1, n = 1, o = 0, r = 0;
        if (t < q) {
            const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), u = Math.sin(l), f = (E, C, T)=>Js(E, a, l, !0) ? 1 : Math.max(C, C * e, T, T * e), p = (E, C, T)=>Js(E, a, l, !0) ? -1 : Math.min(C, C * e, T, T * e), _ = f(0, c, d), m = f(nt, h, u), y = p(et, c, d), x = p(et + nt, h, u);
            s = (_ - y) / 2, n = (m - x) / 2, o = -(_ + y) / 2, r = -(m + x) / 2;
        }
        return {
            ratioX: s,
            ratioY: n,
            offsetX: o,
            offsetY: r
        };
    }
    class ki extends zt {
        constructor(t, e){
            super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
        }
        linkScales() {}
        parse(t, e) {
            const s = this.getDataset().data, n = this._cachedMeta;
            if (this._parsing === !1) n._parsed = s;
            else {
                let o = (l)=>+s[l];
                if ($(s[t])) {
                    const { key: l = "value" } = this._parsing;
                    o = (c)=>+Ke(s[c], l);
                }
                let r, a;
                for(r = t, a = t + e; r < a; ++r)n._parsed[r] = o(r);
            }
        }
        _getRotation() {
            return Jt(this.options.rotation - 90);
        }
        _getCircumference() {
            return Jt(this.options.circumference);
        }
        _getRotationExtents() {
            let t = q, e = -q;
            for(let s = 0; s < this.chart.data.datasets.length; ++s)if (this.chart.isDatasetVisible(s)) {
                const n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), r = n._getCircumference();
                t = Math.min(t, o), e = Math.max(e, o + r);
            }
            return {
                rotation: t,
                circumference: e - t
            };
        }
        update(t) {
            const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(DE(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: p, offsetY: _ } = LT(d, h, l), m = (s.width - r) / u, y = (s.height - r) / f, x = Math.max(Math.min(m, y) / 2, 0), E = Jd(this.options.radius, x), C = Math.max(E * l, 0), T = (E - C) / this._getVisibleDatasetWeightTotal();
            this.offsetX = p * E, this.offsetY = _ * E, n.total = this.calculateTotal(), this.outerRadius = E - T * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - T * c, 0), this.updateElements(o, 0, o.length, t);
        }
        _circumference(t, e) {
            const s = this.options, n = this._cachedMeta, o = this._getCircumference();
            return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / q);
        }
        updateElements(t, e, s, n) {
            const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, p = u ? 0 : this.outerRadius, { sharedOptions: _, includeOptions: m } = this._getSharedOptions(e, n);
            let y = this._getRotation(), x;
            for(x = 0; x < e; ++x)y += this._circumference(x, o);
            for(x = e; x < e + s; ++x){
                const E = this._circumference(x, o), C = t[x], T = {
                    x: h + this.offsetX,
                    y: d + this.offsetY,
                    startAngle: y,
                    endAngle: y + E,
                    circumference: E,
                    outerRadius: p,
                    innerRadius: f
                };
                m && (T.options = _ || this.resolveDataElementOptions(x, C.active ? "active" : n)), y += E, this.updateElement(C, x, T, n);
            }
        }
        calculateTotal() {
            const t = this._cachedMeta, e = t.data;
            let s = 0, n;
            for(n = 0; n < e.length; n++){
                const o = t._parsed[n];
                o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o));
            }
            return s;
        }
        calculateCircumference(t) {
            const e = this._cachedMeta.total;
            return e > 0 && !isNaN(t) ? q * (Math.abs(t) / e) : 0;
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = an(e._parsed[t], s.options.locale);
            return {
                label: n[t] || "",
                value: o
            };
        }
        getMaxBorderWidth(t) {
            let e = 0;
            const s = this.chart;
            let n, o, r, a, l;
            if (!t) {
                for(n = 0, o = s.data.datasets.length; n < o; ++n)if (s.isDatasetVisible(n)) {
                    r = s.getDatasetMeta(n), t = r.data, a = r.controller;
                    break;
                }
            }
            if (!t) return 0;
            for(n = 0, o = t.length; n < o; ++n)l = a.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
            return e;
        }
        getMaxOffset(t) {
            let e = 0;
            for(let s = 0, n = t.length; s < n; ++s){
                const o = this.resolveDataElementOptions(s);
                e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
            }
            return e;
        }
        _getRingWeightOffset(t) {
            let e = 0;
            for(let s = 0; s < t; ++s)this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
            return e;
        }
        _getRingWeight(t) {
            return Math.max(R(this.chart.data.datasets[t].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
    }
    ki.id = "doughnut", ki.defaults = {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "circumference",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                    "startAngle",
                    "x",
                    "y",
                    "offset",
                    "borderWidth",
                    "spacing"
                ]
            }
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r"
    }, ki.descriptors = {
        _scriptable: (i)=>i !== "spacing",
        _indexable: (i)=>i !== "spacing"
    }, ki.overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (i) {
                        const t = i.data;
                        if (t.labels.length && t.datasets.length) {
                            const { labels: { pointStyle: e } } = i.legend.options;
                            return t.labels.map((s, n)=>{
                                const r = i.getDatasetMeta(0).controller.getStyle(n);
                                return {
                                    text: s,
                                    fillStyle: r.backgroundColor,
                                    strokeStyle: r.borderColor,
                                    lineWidth: r.borderWidth,
                                    pointStyle: e,
                                    hidden: !i.getDataVisibility(n),
                                    index: n
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (i, t, e) {
                    e.chart.toggleDataVisibility(t.index), e.chart.update();
                }
            },
            tooltip: {
                callbacks: {
                    title () {
                        return "";
                    },
                    label (i) {
                        let t = i.label;
                        const e = ": " + i.formattedValue;
                        return Q(t) ? (t = t.slice(), t[0] += e) : t += e, t;
                    }
                }
            }
        }
    };
    class dn extends zt {
        initialize() {
            this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
        }
        update(t) {
            const e = this._cachedMeta, { dataset: s, data: n = [], _dataset: o } = e, r = this.chart._animationsDisabled;
            let { start: a, count: l } = fu(e, n, r);
            this._drawStart = a, this._drawCount = l, pu(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
            const c = this.resolveDatasetElementOptions(t);
            this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
                animated: !r,
                options: c
            }, t), this.updateElements(n, a, l, t);
        }
        updateElements(t, e, s, n) {
            const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), u = r.axis, f = a.axis, { spanGaps: p, segment: _ } = this.options, m = as(p) ? p : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || n === "none";
            let x = e > 0 && this.getParsed(e - 1);
            for(let E = e; E < e + s; ++E){
                const C = t[E], T = this.getParsed(E), A = y ? C : {}, w = N(T[f]), S = A[u] = r.getPixelForValue(T[u], E), k = A[f] = o || w ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, T, l) : T[f], E);
                A.skip = isNaN(S) || isNaN(k) || w, A.stop = E > 0 && Math.abs(T[u] - x[u]) > m, _ && (A.parsed = T, A.raw = c.data[E]), d && (A.options = h || this.resolveDataElementOptions(E, C.active ? "active" : n)), y || this.updateElement(C, E, A, n), x = T;
            }
        }
        getMaxOverflow() {
            const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
            if (!n.length) return s;
            const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
            return Math.max(s, o, r) / 2;
        }
        draw() {
            const t = this._cachedMeta;
            t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
        }
    }
    dn.id = "line", dn.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1
    }, dn.overrides = {
        scales: {
            _index_: {
                type: "category"
            },
            _value_: {
                type: "linear"
            }
        }
    };
    class un extends zt {
        constructor(t, e){
            super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = an(e._parsed[t].r, s.options.locale);
            return {
                label: n[t] || "",
                value: o
            };
        }
        parseObjectData(t, e, s, n) {
            return Nu.bind(this)(t, e, s, n);
        }
        update(t) {
            const e = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e, 0, e.length, t);
        }
        getMinMax() {
            const t = this._cachedMeta, e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            };
            return t.data.forEach((s, n)=>{
                const o = this.getParsed(n).r;
                !isNaN(o) && this.chart.getDataVisibility(n) && (o < e.min && (e.min = o), o > e.max && (e.max = o));
            }), e;
        }
        _updateRadius() {
            const t = this.chart, e = t.chartArea, s = t.options, n = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(n / 2, 0), r = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0), a = (o - r) / t.getVisibleDatasetCount();
            this.outerRadius = o - a * this.index, this.innerRadius = this.outerRadius - a;
        }
        updateElements(t, e, s, n) {
            const o = n === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, h = c.xCenter, d = c.yCenter, u = c.getIndexAngle(0) - .5 * et;
            let f = u, p;
            const _ = 360 / this.countVisibleElements();
            for(p = 0; p < e; ++p)f += this._computeAngle(p, n, _);
            for(p = e; p < e + s; p++){
                const m = t[p];
                let y = f, x = f + this._computeAngle(p, n, _), E = r.getDataVisibility(p) ? c.getDistanceFromCenterForValue(this.getParsed(p).r) : 0;
                f = x, o && (l.animateScale && (E = 0), l.animateRotate && (y = x = u));
                const C = {
                    x: h,
                    y: d,
                    innerRadius: 0,
                    outerRadius: E,
                    startAngle: y,
                    endAngle: x,
                    options: this.resolveDataElementOptions(p, m.active ? "active" : n)
                };
                this.updateElement(m, p, C, n);
            }
        }
        countVisibleElements() {
            const t = this._cachedMeta;
            let e = 0;
            return t.data.forEach((s, n)=>{
                !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
            }), e;
        }
        _computeAngle(t, e, s) {
            return this.chart.getDataVisibility(t) ? Jt(this.resolveDataElementOptions(t, e).angle || s) : 0;
        }
    }
    un.id = "polarArea", un.defaults = {
        dataElementType: "arc",
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius"
                ]
            }
        },
        indexAxis: "r",
        startAngle: 0
    }, un.overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (i) {
                        const t = i.data;
                        if (t.labels.length && t.datasets.length) {
                            const { labels: { pointStyle: e } } = i.legend.options;
                            return t.labels.map((s, n)=>{
                                const r = i.getDatasetMeta(0).controller.getStyle(n);
                                return {
                                    text: s,
                                    fillStyle: r.backgroundColor,
                                    strokeStyle: r.borderColor,
                                    lineWidth: r.borderWidth,
                                    pointStyle: e,
                                    hidden: !i.getDataVisibility(n),
                                    index: n
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (i, t, e) {
                    e.chart.toggleDataVisibility(t.index), e.chart.update();
                }
            },
            tooltip: {
                callbacks: {
                    title () {
                        return "";
                    },
                    label (i) {
                        return i.chart.data.labels[i.dataIndex] + ": " + i.formattedValue;
                    }
                }
            }
        },
        scales: {
            r: {
                type: "radialLinear",
                angleLines: {
                    display: !1
                },
                beginAtZero: !0,
                grid: {
                    circular: !0
                },
                pointLabels: {
                    display: !1
                },
                startAngle: 0
            }
        }
    };
    class Zo extends ki {
    }
    Zo.id = "pie", Zo.defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%"
    };
    class fn extends zt {
        getLabelAndValue(t) {
            const e = this._cachedMeta.vScale, s = this.getParsed(t);
            return {
                label: e.getLabels()[t],
                value: "" + e.getLabelForValue(s[e.axis])
            };
        }
        parseObjectData(t, e, s, n) {
            return Nu.bind(this)(t, e, s, n);
        }
        update(t) {
            const e = this._cachedMeta, s = e.dataset, n = e.data || [], o = e.iScale.getLabels();
            if (s.points = n, t !== "resize") {
                const r = this.resolveDatasetElementOptions(t);
                this.options.showLine || (r.borderWidth = 0);
                const a = {
                    _loop: !0,
                    _fullLoop: o.length === n.length,
                    options: r
                };
                this.updateElement(s, void 0, a, t);
            }
            this.updateElements(n, 0, n.length, t);
        }
        updateElements(t, e, s, n) {
            const o = this._cachedMeta.rScale, r = n === "reset";
            for(let a = e; a < e + s; a++){
                const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : n), h = o.getPointPositionForValue(a, this.getParsed(a).r), d = r ? o.xCenter : h.x, u = r ? o.yCenter : h.y, f = {
                    x: d,
                    y: u,
                    angle: h.angle,
                    skip: isNaN(d) || isNaN(u),
                    options: c
                };
                this.updateElement(l, a, f, n);
            }
        }
    }
    fn.id = "radar", fn.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: {
            line: {
                fill: "start"
            }
        }
    }, fn.overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: "radialLinear"
            }
        }
    };
    let jt = class {
        constructor(){
            this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0;
        }
        tooltipPosition(t) {
            const { x: e, y: s } = this.getProps([
                "x",
                "y"
            ], t);
            return {
                x: e,
                y: s
            };
        }
        hasValue() {
            return as(this.x) && as(this.y);
        }
        getProps(t, e) {
            const s = this.$animations;
            if (!e || !s) return this;
            const n = {};
            return t.forEach((o)=>{
                n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
            }), n;
        }
    };
    jt.defaults = {}, jt.defaultRoutes = void 0;
    const hf = {
        values (i) {
            return Q(i) ? i : "" + i;
        },
        numeric (i, t, e) {
            if (i === 0) return "0";
            const s = this.chart.options.locale;
            let n, o = i;
            if (e.length > 1) {
                const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
                (c < 1e-4 || c > 1e15) && (n = "scientific"), o = PT(i, e);
            }
            const r = Vt(Math.abs(o)), a = Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
                notation: n,
                minimumFractionDigits: a,
                maximumFractionDigits: a
            };
            return Object.assign(l, this.options.ticks.format), an(i, s, l);
        },
        logarithmic (i, t, e) {
            if (i === 0) return "0";
            const s = i / Math.pow(10, Math.floor(Vt(i)));
            return s === 1 || s === 2 || s === 5 ? hf.numeric.call(this, i, t, e) : "";
        }
    };
    function PT(i, t) {
        let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
        return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
    }
    var pn = {
        formatters: hf
    };
    B.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (i, t)=>t.lineWidth,
            tickColor: (i, t)=>t.color,
            offset: !1,
            borderDash: [],
            borderDashOffset: 0,
            borderWidth: 1
        },
        title: {
            display: !1,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: pn.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    }), B.route("scale.ticks", "color", "", "color"), B.route("scale.grid", "color", "", "borderColor"), B.route("scale.grid", "borderColor", "", "borderColor"), B.route("scale.title", "color", "", "color"), B.describe("scale", {
        _fallback: !1,
        _scriptable: (i)=>!i.startsWith("before") && !i.startsWith("after") && i !== "callback" && i !== "parser",
        _indexable: (i)=>i !== "borderDash" && i !== "tickBorderDash"
    }), B.describe("scales", {
        _fallback: "scale"
    }), B.describe("scale.ticks", {
        _scriptable: (i)=>i !== "backdropPadding" && i !== "callback",
        _indexable: (i)=>i !== "backdropPadding"
    });
    function RT(i, t) {
        const e = i.options.ticks, s = e.maxTicksLimit || NT(i), n = e.major.enabled ? BT(t) : [], o = n.length, r = n[0], a = n[o - 1], l = [];
        if (o > s) return HT(t, l, n, o / s), l;
        const c = $T(n, t, s);
        if (o > 0) {
            let h, d;
            const u = o > 1 ? Math.round((a - r) / (o - 1)) : null;
            for(Qo(t, l, c, N(u) ? 0 : r - u, r), h = 0, d = o - 1; h < d; h++)Qo(t, l, c, n[h], n[h + 1]);
            return Qo(t, l, c, a, N(u) ? t.length : a + u), l;
        }
        return Qo(t, l, c), l;
    }
    function NT(i) {
        const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
        return Math.floor(Math.min(s, n));
    }
    function $T(i, t, e) {
        const s = FT(i), n = t.length / e;
        if (!s) return Math.max(n, 1);
        const o = BE(s);
        for(let r = 0, a = o.length - 1; r < a; r++){
            const l = o[r];
            if (l > n) return l;
        }
        return Math.max(n, 1);
    }
    function BT(i) {
        const t = [];
        let e, s;
        for(e = 0, s = i.length; e < s; e++)i[e].major && t.push(e);
        return t;
    }
    function HT(i, t, e, s) {
        let n = 0, o = e[0], r;
        for(s = Math.ceil(s), r = 0; r < i.length; r++)r === o && (t.push(i[r]), n++, o = e[n * s]);
    }
    function Qo(i, t, e, s, n) {
        const o = R(s, 0), r = Math.min(R(n, i.length), i.length);
        let a = 0, l, c, h;
        for(e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0;)a++, h = Math.round(o + a * e);
        for(c = Math.max(o, 0); c < r; c++)c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
    }
    function FT(i) {
        const t = i.length;
        let e, s;
        if (t < 2) return !1;
        for(s = i[0], e = 1; e < t; ++e)if (i[e] - i[e - 1] !== s) return !1;
        return s;
    }
    const VT = (i)=>i === "left" ? "right" : i === "right" ? "left" : i, df = (i, t, e)=>t === "top" || t === "left" ? i[t] + e : i[t] - e;
    function uf(i, t) {
        const e = [], s = i.length / t, n = i.length;
        let o = 0;
        for(; o < n; o += s)e.push(i[Math.floor(o)]);
        return e;
    }
    function WT(i, t, e) {
        const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
        let l = i.getPixelForTick(n), c;
        if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a))) return l;
    }
    function zT(i, t) {
        U(i, (e)=>{
            const s = e.gc, n = s.length / 2;
            let o;
            if (n > t) {
                for(o = 0; o < n; ++o)delete e.data[s[o]];
                s.splice(0, n);
            }
        });
    }
    function _n(i) {
        return i.drawTicks ? i.tickLength : 0;
    }
    function ff(i, t) {
        if (!i.display) return 0;
        const e = lt(i.font, t), s = ht(i.padding);
        return (Q(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
    }
    function jT(i, t) {
        return qe(i, {
            scale: t,
            type: "scale"
        });
    }
    function YT(i, t, e) {
        return qe(i, {
            tick: e,
            index: t,
            type: "tick"
        });
    }
    function KT(i, t, e) {
        let s = za(i);
        return (e && t !== "right" || !e && t === "right") && (s = VT(s)), s;
    }
    function UT(i, t, e, s) {
        const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
        let d = 0, u, f, p;
        const _ = r - n, m = a - o;
        if (i.isHorizontal()) {
            if (f = pt(s, o, a), $(e)) {
                const y = Object.keys(e)[0], x = e[y];
                p = h[y].getPixelForValue(x) + _ - t;
            } else e === "center" ? p = (c.bottom + c.top) / 2 + _ - t : p = df(i, e, t);
            u = a - o;
        } else {
            if ($(e)) {
                const y = Object.keys(e)[0], x = e[y];
                f = h[y].getPixelForValue(x) - m + t;
            } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = df(i, e, t);
            p = pt(s, r, n), d = e === "left" ? -nt : nt;
        }
        return {
            titleX: f,
            titleY: p,
            maxWidth: u,
            rotation: d
        };
    }
    class Ze extends jt {
        constructor(t){
            super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
        }
        init(t) {
            this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
        }
        parse(t, e) {
            return t;
        }
        getUserBounds() {
            let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
            return t = Ht(t, Number.POSITIVE_INFINITY), e = Ht(e, Number.NEGATIVE_INFINITY), s = Ht(s, Number.POSITIVE_INFINITY), n = Ht(n, Number.NEGATIVE_INFINITY), {
                min: Ht(t, s),
                max: Ht(e, n),
                minDefined: rt(t),
                maxDefined: rt(e)
            };
        }
        getMinMax(t) {
            let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), r;
            if (n && o) return {
                min: e,
                max: s
            };
            const a = this.getMatchingVisibleMetas();
            for(let l = 0, c = a.length; l < c; ++l)r = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (s = Math.max(s, r.max));
            return e = o && e > s ? s : e, s = n && e > s ? e : s, {
                min: Ht(e, Ht(s, e)),
                max: Ht(s, Ht(e, s))
            };
        }
        getPadding() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            };
        }
        getTicks() {
            return this.ticks;
        }
        getLabels() {
            const t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
        }
        beforeLayout() {
            this._cache = {}, this._dataLimitsCached = !1;
        }
        beforeUpdate() {
            G(this.options.beforeUpdate, [
                this
            ]);
        }
        update(t, e, s) {
            const { beginAtZero: n, grace: o, ticks: r } = this.options, a = r.sampleSize;
            this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = wC(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
            const l = a < this.ticks.length;
            this._convertTicksToLabels(l ? uf(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = RT(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
        }
        configure() {
            let t = this.options.reverse, e, s;
            this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
        }
        afterUpdate() {
            G(this.options.afterUpdate, [
                this
            ]);
        }
        beforeSetDimensions() {
            G(this.options.beforeSetDimensions, [
                this
            ]);
        }
        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
        }
        afterSetDimensions() {
            G(this.options.afterSetDimensions, [
                this
            ]);
        }
        _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()), G(this.options[t], [
                this
            ]);
        }
        beforeDataLimits() {
            this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {}
        afterDataLimits() {
            this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
            this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
            return [];
        }
        afterBuildTicks() {
            this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
            G(this.options.beforeTickToLabelConversion, [
                this
            ]);
        }
        generateTickLabels(t) {
            const e = this.options.ticks;
            let s, n, o;
            for(s = 0, n = t.length; s < n; s++)o = t[s], o.label = G(e.callback, [
                o.value,
                s,
                t
            ], this);
        }
        afterTickToLabelConversion() {
            G(this.options.afterTickToLabelConversion, [
                this
            ]);
        }
        beforeCalculateLabelRotation() {
            G(this.options.beforeCalculateLabelRotation, [
                this
            ]);
        }
        calculateLabelRotation() {
            const t = this.options, e = t.ticks, s = this.ticks.length, n = e.minRotation || 0, o = e.maxRotation;
            let r = n, a, l, c;
            if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
                this.labelRotation = n;
                return;
            }
            const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = ct(this.chart.width - d, 0, this.maxWidth);
            a = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > a && (a = f / (s - (t.offset ? .5 : 1)), l = this.maxHeight - _n(t.grid) - e.padding - ff(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = Fa(Math.min(Math.asin(ct((h.highest.height + 6) / a, -1, 1)), Math.asin(ct(l / c, -1, 1)) - Math.asin(ct(u / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
        }
        afterCalculateLabelRotation() {
            G(this.options.afterCalculateLabelRotation, [
                this
            ]);
        }
        afterAutoSkip() {}
        beforeFit() {
            G(this.options.beforeFit, [
                this
            ]);
        }
        fit() {
            const t = {
                width: 0,
                height: 0
            }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
            if (r) {
                const l = ff(n, e.options.font);
                if (a ? (t.width = this.maxWidth, t.height = _n(o) + l) : (t.height = this.maxHeight, t.width = _n(o) + l), s.display && this.ticks.length) {
                    const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, p = Jt(this.labelRotation), _ = Math.cos(p), m = Math.sin(p);
                    if (a) {
                        const y = s.mirror ? 0 : m * d.width + _ * u.height;
                        t.height = Math.min(this.maxHeight, t.height + y + f);
                    } else {
                        const y = s.mirror ? 0 : _ * d.width + m * u.height;
                        t.width = Math.min(this.maxWidth, t.width + y + f);
                    }
                    this._calculatePadding(c, h, m, _);
                }
            }
            this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
        }
        _calculatePadding(t, e, s, n) {
            const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
            if (this.isHorizontal()) {
                const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
                let u = 0, f = 0;
                l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + r) * this.width / (this.width - d), 0);
            } else {
                let h = e.height / 2, d = t.height / 2;
                o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
            }
        }
        _handleMargins() {
            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
        }
        afterFit() {
            G(this.options.afterFit, [
                this
            ]);
        }
        isHorizontal() {
            const { axis: t, position: e } = this.options;
            return e === "top" || e === "bottom" || t === "x";
        }
        isFullSize() {
            return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
            this.beforeTickToLabelConversion(), this.generateTickLabels(t);
            let e, s;
            for(e = 0, s = t.length; e < s; e++)N(t[e].label) && (t.splice(e, 1), s--, e--);
            this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
            let t = this._labelSizes;
            if (!t) {
                const e = this.options.ticks.sampleSize;
                let s = this.ticks;
                e < s.length && (s = uf(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length);
            }
            return t;
        }
        _computeLabelSizes(t, e) {
            const { ctx: s, _longestTextCache: n } = this, o = [], r = [];
            let a = 0, l = 0, c, h, d, u, f, p, _, m, y, x, E;
            for(c = 0; c < e; ++c){
                if (u = t[c].label, f = this._resolveTickFontOptions(c), s.font = p = f.string, _ = n[p] = n[p] || {
                    data: {},
                    gc: []
                }, m = f.lineHeight, y = x = 0, !N(u) && !Q(u)) y = Yo(s, _.data, _.gc, y, u), x = m;
                else if (Q(u)) for(h = 0, d = u.length; h < d; ++h)E = u[h], !N(E) && !Q(E) && (y = Yo(s, _.data, _.gc, y, E), x += m);
                o.push(y), r.push(x), a = Math.max(y, a), l = Math.max(x, l);
            }
            zT(n, e);
            const C = o.indexOf(a), T = r.indexOf(l), A = (w)=>({
                    width: o[w] || 0,
                    height: r[w] || 0
                });
            return {
                first: A(0),
                last: A(e - 1),
                widest: A(C),
                highest: A(T),
                widths: o,
                heights: r
            };
        }
        getLabelForValue(t) {
            return t;
        }
        getPixelForValue(t, e) {
            return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t);
            const e = this._startPixel + t * this._length;
            return VE(this._alignToPixels ? xi(this.chart, e, 0) : e);
        }
        getDecimalForPixel(t) {
            const e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
            const { min: t, max: e } = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
            const e = this.ticks || [];
            if (t >= 0 && t < e.length) {
                const s = e[t];
                return s.$context || (s.$context = YT(this.getContext(), t, s));
            }
            return this.$context || (this.$context = jT(this.chart.getContext(), this));
        }
        _tickSize() {
            const t = this.options.ticks, e = Jt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
            return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
        }
        _isVisible() {
            const t = this.options.display;
            return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
            const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r } = n, a = o.offset, l = this.isHorizontal(), h = this.ticks.length + (a ? 1 : 0), d = _n(o), u = [], f = o.setContext(this.getContext()), p = f.drawBorder ? f.borderWidth : 0, _ = p / 2, m = function(I) {
                return xi(s, I, p);
            };
            let y, x, E, C, T, A, w, S, k, D, O, M;
            if (r === "top") y = m(this.bottom), A = this.bottom - d, S = y - _, D = m(t.top) + _, M = t.bottom;
            else if (r === "bottom") y = m(this.top), D = t.top, M = m(t.bottom) - _, A = y + _, S = this.top + d;
            else if (r === "left") y = m(this.right), T = this.right - d, w = y - _, k = m(t.left) + _, O = t.right;
            else if (r === "right") y = m(this.left), k = t.left, O = m(t.right) - _, T = y + _, w = this.left + d;
            else if (e === "x") {
                if (r === "center") y = m((t.top + t.bottom) / 2 + .5);
                else if ($(r)) {
                    const I = Object.keys(r)[0], F = r[I];
                    y = m(this.chart.scales[I].getPixelForValue(F));
                }
                D = t.top, M = t.bottom, A = y + _, S = A + d;
            } else if (e === "y") {
                if (r === "center") y = m((t.left + t.right) / 2);
                else if ($(r)) {
                    const I = Object.keys(r)[0], F = r[I];
                    y = m(this.chart.scales[I].getPixelForValue(F));
                }
                T = y - _, w = T - d, k = t.left, O = t.right;
            }
            const L = R(n.ticks.maxTicksLimit, h), X = Math.max(1, Math.ceil(h / L));
            for(x = 0; x < h; x += X){
                const I = o.setContext(this.getContext(x)), F = I.lineWidth, Y = I.color, Yt = I.borderDash || [], ee = I.borderDashOffset, ie = I.tickWidth, ti = I.tickColor, Kt = I.tickBorderDash || [], ye = I.tickBorderDashOffset;
                E = WT(this, x, a), E !== void 0 && (C = xi(s, E, F), l ? T = w = k = O = C : A = S = D = M = C, u.push({
                    tx1: T,
                    ty1: A,
                    tx2: w,
                    ty2: S,
                    x1: k,
                    y1: D,
                    x2: O,
                    y2: M,
                    width: F,
                    color: Y,
                    borderDash: Yt,
                    borderDashOffset: ee,
                    tickWidth: ie,
                    tickColor: ti,
                    tickBorderDash: Kt,
                    tickBorderDashOffset: ye
                }));
            }
            return this._ticksLength = h, this._borderValue = y, u;
        }
        _computeLabelItems(t) {
            const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = _n(s.grid), f = u + h, p = d ? -h : f, _ = -Jt(this.labelRotation), m = [];
            let y, x, E, C, T, A, w, S, k, D, O, M, L = "middle";
            if (n === "top") A = this.bottom - p, w = this._getXAxisLabelAlignment();
            else if (n === "bottom") A = this.top + p, w = this._getXAxisLabelAlignment();
            else if (n === "left") {
                const I = this._getYAxisLabelAlignment(u);
                w = I.textAlign, T = I.x;
            } else if (n === "right") {
                const I = this._getYAxisLabelAlignment(u);
                w = I.textAlign, T = I.x;
            } else if (e === "x") {
                if (n === "center") A = (t.top + t.bottom) / 2 + f;
                else if ($(n)) {
                    const I = Object.keys(n)[0], F = n[I];
                    A = this.chart.scales[I].getPixelForValue(F) + f;
                }
                w = this._getXAxisLabelAlignment();
            } else if (e === "y") {
                if (n === "center") T = (t.left + t.right) / 2 - f;
                else if ($(n)) {
                    const I = Object.keys(n)[0], F = n[I];
                    T = this.chart.scales[I].getPixelForValue(F);
                }
                w = this._getYAxisLabelAlignment(u).textAlign;
            }
            e === "y" && (l === "start" ? L = "top" : l === "end" && (L = "bottom"));
            const X = this._getLabelSizes();
            for(y = 0, x = a.length; y < x; ++y){
                E = a[y], C = E.label;
                const I = o.setContext(this.getContext(y));
                S = this.getPixelForTick(y) + o.labelOffset, k = this._resolveTickFontOptions(y), D = k.lineHeight, O = Q(C) ? C.length : 1;
                const F = O / 2, Y = I.color, Yt = I.textStrokeColor, ee = I.textStrokeWidth;
                let ie = w;
                r ? (T = S, w === "inner" && (y === x - 1 ? ie = this.options.reverse ? "left" : "right" : y === 0 ? ie = this.options.reverse ? "right" : "left" : ie = "center"), n === "top" ? c === "near" || _ !== 0 ? M = -O * D + D / 2 : c === "center" ? M = -X.highest.height / 2 - F * D + D : M = -X.highest.height + D / 2 : c === "near" || _ !== 0 ? M = D / 2 : c === "center" ? M = X.highest.height / 2 - F * D : M = X.highest.height - O * D, d && (M *= -1)) : (A = S, M = (1 - O) * D / 2);
                let ti;
                if (I.showLabelBackdrop) {
                    const Kt = ht(I.backdropPadding), ye = X.heights[y], xe = X.widths[y];
                    let Ut = A + M - Kt.top, Me = T - Kt.left;
                    switch(L){
                        case "middle":
                            Ut -= ye / 2;
                            break;
                        case "bottom":
                            Ut -= ye;
                            break;
                    }
                    switch(w){
                        case "center":
                            Me -= xe / 2;
                            break;
                        case "right":
                            Me -= xe;
                            break;
                    }
                    ti = {
                        left: Me,
                        top: Ut,
                        width: xe + Kt.width,
                        height: ye + Kt.height,
                        color: I.backdropColor
                    };
                }
                m.push({
                    rotation: _,
                    label: C,
                    font: k,
                    color: Y,
                    strokeColor: Yt,
                    strokeWidth: ee,
                    textOffset: M,
                    textAlign: ie,
                    textBaseline: L,
                    translation: [
                        T,
                        A
                    ],
                    backdrop: ti
                });
            }
            return m;
        }
        _getXAxisLabelAlignment() {
            const { position: t, ticks: e } = this.options;
            if (-Jt(this.labelRotation)) return t === "top" ? "left" : "right";
            let n = "center";
            return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
        }
        _getYAxisLabelAlignment(t) {
            const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
            let c, h;
            return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
                textAlign: c,
                x: h
            };
        }
        _computeLabelArea() {
            if (this.options.ticks.mirror) return;
            const t = this.chart, e = this.options.position;
            if (e === "left" || e === "right") return {
                top: 0,
                left: this.left,
                bottom: t.height,
                right: this.right
            };
            if (e === "top" || e === "bottom") return {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: t.width
            };
        }
        drawBackground() {
            const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: r } = this;
            e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, r), t.restore());
        }
        getLineWidthForValue(t) {
            const e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            const n = this.ticks.findIndex((o)=>o.value === t);
            return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
        }
        drawGrid(t) {
            const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
            let o, r;
            const a = (l, c, h)=>{
                !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
            };
            if (e.display) for(o = 0, r = n.length; o < r; ++o){
                const l = n[o];
                e.drawOnChartArea && a({
                    x: l.x1,
                    y: l.y1
                }, {
                    x: l.x2,
                    y: l.y2
                }, l), e.drawTicks && a({
                    x: l.tx1,
                    y: l.ty1
                }, {
                    x: l.tx2,
                    y: l.ty2
                }, {
                    color: l.tickColor,
                    width: l.tickWidth,
                    borderDash: l.tickBorderDash,
                    borderDashOffset: l.tickBorderDashOffset
                });
            }
        }
        drawBorder() {
            const { chart: t, ctx: e, options: { grid: s } } = this, n = s.setContext(this.getContext()), o = s.drawBorder ? n.borderWidth : 0;
            if (!o) return;
            const r = s.setContext(this.getContext(0)).lineWidth, a = this._borderValue;
            let l, c, h, d;
            this.isHorizontal() ? (l = xi(t, this.left, o) - o / 2, c = xi(t, this.right, r) + r / 2, h = d = a) : (h = xi(t, this.top, o) - o / 2, d = xi(t, this.bottom, r) + r / 2, l = c = a), e.save(), e.lineWidth = n.borderWidth, e.strokeStyle = n.borderColor, e.beginPath(), e.moveTo(l, h), e.lineTo(c, d), e.stroke(), e.restore();
        }
        drawLabels(t) {
            if (!this.options.ticks.display) return;
            const s = this.ctx, n = this._computeLabelArea();
            n && Ko(s, n);
            const o = this._labelItems || (this._labelItems = this._computeLabelItems(t));
            let r, a;
            for(r = 0, a = o.length; r < a; ++r){
                const l = o[r], c = l.font, h = l.label;
                l.backdrop && (s.fillStyle = l.backdrop.color, s.fillRect(l.backdrop.left, l.backdrop.top, l.backdrop.width, l.backdrop.height));
                let d = l.textOffset;
                Ei(s, h, 0, d, c, l);
            }
            n && Uo(s);
        }
        drawTitle() {
            const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
            if (!s.display) return;
            const o = lt(s.font), r = ht(s.padding), a = s.align;
            let l = o.lineHeight / 2;
            e === "bottom" || e === "center" || $(e) ? (l += r.bottom, Q(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
            const { titleX: c, titleY: h, maxWidth: d, rotation: u } = UT(this, l, e, a);
            Ei(t, s.text, 0, 0, o, {
                color: s.color,
                maxWidth: d,
                rotation: u,
                textAlign: KT(a, e, n),
                textBaseline: "middle",
                translation: [
                    c,
                    h
                ]
            });
        }
        draw(t) {
            this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
        }
        _layers() {
            const t = this.options, e = t.ticks && t.ticks.z || 0, s = R(t.grid && t.grid.z, -1);
            return !this._isVisible() || this.draw !== Ze.prototype.draw ? [
                {
                    z: e,
                    draw: (n)=>{
                        this.draw(n);
                    }
                }
            ] : [
                {
                    z: s,
                    draw: (n)=>{
                        this.drawBackground(), this.drawGrid(n), this.drawTitle();
                    }
                },
                {
                    z: s + 1,
                    draw: ()=>{
                        this.drawBorder();
                    }
                },
                {
                    z: e,
                    draw: (n)=>{
                        this.drawLabels(n);
                    }
                }
            ];
        }
        getMatchingVisibleMetas(t) {
            const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
            let o, r;
            for(o = 0, r = e.length; o < r; ++o){
                const a = e[o];
                a[s] === this.id && (!t || a.type === t) && n.push(a);
            }
            return n;
        }
        _resolveTickFontOptions(t) {
            const e = this.options.ticks.setContext(this.getContext(t));
            return lt(e.font);
        }
        _maxDigits() {
            const t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t;
        }
    }
    class Jo {
        constructor(t, e, s){
            this.type = t, this.scope = e, this.override = s, this.items = Object.create(null);
        }
        isForType(t) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
        }
        register(t) {
            const e = Object.getPrototypeOf(t);
            let s;
            qT(e) && (s = this.register(e));
            const n = this.items, o = t.id, r = this.scope + "." + o;
            if (!o) throw new Error("class does not have id: " + t);
            return o in n || (n[o] = t, XT(t, r, s), this.override && B.override(t.id, t.overrides)), r;
        }
        get(t) {
            return this.items[t];
        }
        unregister(t) {
            const e = this.items, s = t.id, n = this.scope;
            s in e && delete e[s], n && s in B[n] && (delete B[n][s], this.override && delete yi[s]);
        }
    }
    function XT(i, t, e) {
        const s = ge(Object.create(null), [
            e ? B.get(e) : {},
            B.get(t),
            i.defaults
        ]);
        B.set(t, s), i.defaultRoutes && GT(t, i.defaultRoutes), i.descriptors && B.describe(t, i.descriptors);
    }
    function GT(i, t) {
        Object.keys(t).forEach((e)=>{
            const s = e.split("."), n = s.pop(), o = [
                i
            ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
            B.route(o, n, l, a);
        });
    }
    function qT(i) {
        return "id" in i && "defaults" in i;
    }
    class ZT {
        constructor(){
            this.controllers = new Jo(zt, "datasets", !0), this.elements = new Jo(jt, "elements"), this.plugins = new Jo(Object, "plugins"), this.scales = new Jo(Ze, "scales"), this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements
            ];
        }
        add(...t) {
            this._each("register", t);
        }
        remove(...t) {
            this._each("unregister", t);
        }
        addControllers(...t) {
            this._each("register", t, this.controllers);
        }
        addElements(...t) {
            this._each("register", t, this.elements);
        }
        addPlugins(...t) {
            this._each("register", t, this.plugins);
        }
        addScales(...t) {
            this._each("register", t, this.scales);
        }
        getController(t) {
            return this._get(t, this.controllers, "controller");
        }
        getElement(t) {
            return this._get(t, this.elements, "element");
        }
        getPlugin(t) {
            return this._get(t, this.plugins, "plugin");
        }
        getScale(t) {
            return this._get(t, this.scales, "scale");
        }
        removeControllers(...t) {
            this._each("unregister", t, this.controllers);
        }
        removeElements(...t) {
            this._each("unregister", t, this.elements);
        }
        removePlugins(...t) {
            this._each("unregister", t, this.plugins);
        }
        removeScales(...t) {
            this._each("unregister", t, this.scales);
        }
        _each(t, e, s) {
            [
                ...e
            ].forEach((n)=>{
                const o = s || this._getRegistryForType(n);
                s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : U(n, (r)=>{
                    const a = s || this._getRegistryForType(r);
                    this._exec(t, a, r);
                });
            });
        }
        _exec(t, e, s) {
            const n = Ha(t);
            G(s["before" + n], [], s), e[t](s), G(s["after" + n], [], s);
        }
        _getRegistryForType(t) {
            for(let e = 0; e < this._typedRegistries.length; e++){
                const s = this._typedRegistries[e];
                if (s.isForType(t)) return s;
            }
            return this.plugins;
        }
        _get(t, e, s) {
            const n = e.get(t);
            if (n === void 0) throw new Error('"' + t + '" is not a registered ' + s + ".");
            return n;
        }
    }
    var te = new ZT;
    class gn extends zt {
        update(t) {
            const e = this._cachedMeta, { data: s = [] } = e, n = this.chart._animationsDisabled;
            let { start: o, count: r } = fu(e, s, n);
            if (this._drawStart = o, this._drawCount = r, pu(e) && (o = 0, r = s.length), this.options.showLine) {
                const { dataset: a, _dataset: l } = e;
                a._chart = this.chart, a._datasetIndex = this.index, a._decimated = !!l._decimated, a.points = s;
                const c = this.resolveDatasetElementOptions(t);
                c.segment = this.options.segment, this.updateElement(a, void 0, {
                    animated: !n,
                    options: c
                }, t);
            }
            this.updateElements(s, o, r, t);
        }
        addElements() {
            const { showLine: t } = this.options;
            !this.datasetElementType && t && (this.datasetElementType = te.getElement("line")), super.addElements();
        }
        updateElements(t, e, s, n) {
            const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, h = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(h), u = this.includeOptions(n, d), f = r.axis, p = a.axis, { spanGaps: _, segment: m } = this.options, y = as(_) ? _ : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || n === "none";
            let E = e > 0 && this.getParsed(e - 1);
            for(let C = e; C < e + s; ++C){
                const T = t[C], A = this.getParsed(C), w = x ? T : {}, S = N(A[p]), k = w[f] = r.getPixelForValue(A[f], C), D = w[p] = o || S ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, A, l) : A[p], C);
                w.skip = isNaN(k) || isNaN(D) || S, w.stop = C > 0 && Math.abs(A[f] - E[f]) > y, m && (w.parsed = A, w.raw = c.data[C]), u && (w.options = d || this.resolveDataElementOptions(C, T.active ? "active" : n)), x || this.updateElement(T, C, w, n), E = A;
            }
            this.updateSharedOptions(d, n, h);
        }
        getMaxOverflow() {
            const t = this._cachedMeta, e = t.data || [];
            if (!this.options.showLine) {
                let a = 0;
                for(let l = e.length - 1; l >= 0; --l)a = Math.max(a, e[l].size(this.resolveDataElementOptions(l)) / 2);
                return a > 0 && a;
            }
            const s = t.dataset, n = s.options && s.options.borderWidth || 0;
            if (!e.length) return n;
            const o = e[0].size(this.resolveDataElementOptions(0)), r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
            return Math.max(n, o, r) / 2;
        }
    }
    gn.id = "scatter", gn.defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1
    }, gn.overrides = {
        interaction: {
            mode: "point"
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title () {
                        return "";
                    },
                    label (i) {
                        return "(" + i.label + ", " + i.formattedValue + ")";
                    }
                }
            }
        },
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    };
    var pf = Object.freeze({
        __proto__: null,
        BarController: cn,
        BubbleController: hn,
        DoughnutController: ki,
        LineController: dn,
        PolarAreaController: un,
        PieController: Zo,
        RadarController: fn,
        ScatterController: gn
    });
    function Si() {
        throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
    }
    class cl {
        constructor(t){
            this.options = t || {};
        }
        init(t) {}
        formats() {
            return Si();
        }
        parse(t, e) {
            return Si();
        }
        format(t, e) {
            return Si();
        }
        add(t, e, s) {
            return Si();
        }
        diff(t, e, s) {
            return Si();
        }
        startOf(t, e, s) {
            return Si();
        }
        endOf(t, e) {
            return Si();
        }
    }
    cl.override = function(i) {
        Object.assign(cl.prototype, i);
    };
    var _f = {
        _date: cl
    };
    function QT(i, t, e, s) {
        const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale;
        if (a && t === a.axis && t !== "r" && r && o.length) {
            const l = a._reversePixels ? WE : we;
            if (s) {
                if (n._sharedOptions) {
                    const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
                    if (h) {
                        const d = l(o, t, e - h), u = l(o, t, e + h);
                        return {
                            lo: d.lo,
                            hi: u.hi
                        };
                    }
                }
            } else return l(o, t, e);
        }
        return {
            lo: 0,
            hi: o.length - 1
        };
    }
    function mn(i, t, e, s, n) {
        const o = i.getSortedVisibleDatasetMetas(), r = e[t];
        for(let a = 0, l = o.length; a < l; ++a){
            const { index: c, data: h } = o[a], { lo: d, hi: u } = QT(o[a], t, r, n);
            for(let f = d; f <= u; ++f){
                const p = h[f];
                p.skip || s(p, c, f);
            }
        }
    }
    function JT(i) {
        const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
        return function(s, n) {
            const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
            return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
        };
    }
    function hl(i, t, e, s, n) {
        const o = [];
        return !n && !i.isPointInArea(t) || mn(i, e, t, function(a, l, c) {
            !n && !on(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
                element: a,
                datasetIndex: l,
                index: c
            });
        }, !0), o;
    }
    function tA(i, t, e, s) {
        let n = [];
        function o(r, a, l) {
            const { startAngle: c, endAngle: h } = r.getProps([
                "startAngle",
                "endAngle"
            ], s), { angle: d } = au(r, {
                x: t.x,
                y: t.y
            });
            Js(d, c, h) && n.push({
                element: r,
                datasetIndex: a,
                index: l
            });
        }
        return mn(i, e, t, o), n;
    }
    function eA(i, t, e, s, n, o) {
        let r = [];
        const a = JT(e);
        let l = Number.POSITIVE_INFINITY;
        function c(h, d, u) {
            const f = h.inRange(t.x, t.y, n);
            if (s && !f) return;
            const p = h.getCenterPoint(n);
            if (!(!!o || i.isPointInArea(p)) && !f) return;
            const m = a(t, p);
            m < l ? (r = [
                {
                    element: h,
                    datasetIndex: d,
                    index: u
                }
            ], l = m) : m === l && r.push({
                element: h,
                datasetIndex: d,
                index: u
            });
        }
        return mn(i, e, t, c), r;
    }
    function dl(i, t, e, s, n, o) {
        return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? tA(i, t, e, n) : eA(i, t, e, s, n, o);
    }
    function gf(i, t, e, s, n) {
        const o = [], r = e === "x" ? "inXRange" : "inYRange";
        let a = !1;
        return mn(i, e, t, (l, c, h)=>{
            l[r](t[e], n) && (o.push({
                element: l,
                datasetIndex: c,
                index: h
            }), a = a || l.inRange(t.x, t.y, n));
        }), s && !a ? [] : o;
    }
    var mf = {
        evaluateInteractionItems: mn,
        modes: {
            index (i, t, e, s) {
                const n = Ai(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? hl(i, n, o, s, r) : dl(i, n, o, !1, s, r), l = [];
                return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c)=>{
                    const h = a[0].index, d = c.data[h];
                    d && !d.skip && l.push({
                        element: d,
                        datasetIndex: c.index,
                        index: h
                    });
                }), l) : [];
            },
            dataset (i, t, e, s) {
                const n = Ai(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
                let a = e.intersect ? hl(i, n, o, s, r) : dl(i, n, o, !1, s, r);
                if (a.length > 0) {
                    const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
                    a = [];
                    for(let h = 0; h < c.length; ++h)a.push({
                        element: c[h],
                        datasetIndex: l,
                        index: h
                    });
                }
                return a;
            },
            point (i, t, e, s) {
                const n = Ai(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
                return hl(i, n, o, s, r);
            },
            nearest (i, t, e, s) {
                const n = Ai(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
                return dl(i, n, o, e.intersect, s, r);
            },
            x (i, t, e, s) {
                const n = Ai(t, i);
                return gf(i, n, "x", e.intersect, s);
            },
            y (i, t, e, s) {
                const n = Ai(t, i);
                return gf(i, n, "y", e.intersect, s);
            }
        }
    };
    const bf = [
        "left",
        "top",
        "right",
        "bottom"
    ];
    function bn(i, t) {
        return i.filter((e)=>e.pos === t);
    }
    function vf(i, t) {
        return i.filter((e)=>bf.indexOf(e.pos) === -1 && e.box.axis === t);
    }
    function vn(i, t) {
        return i.sort((e, s)=>{
            const n = t ? s : e, o = t ? e : s;
            return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
        });
    }
    function iA(i) {
        const t = [];
        let e, s, n, o, r, a;
        for(e = 0, s = (i || []).length; e < s; ++e)n = i[e], ({ position: o, options: { stack: r, stackWeight: a = 1 } } = n), t.push({
            index: e,
            box: n,
            pos: o,
            horizontal: n.isHorizontal(),
            weight: n.weight,
            stack: r && o + r,
            stackWeight: a
        });
        return t;
    }
    function sA(i) {
        const t = {};
        for (const e of i){
            const { stack: s, pos: n, stackWeight: o } = e;
            if (!s || !bf.includes(n)) continue;
            const r = t[s] || (t[s] = {
                count: 0,
                placed: 0,
                weight: 0,
                size: 0
            });
            r.count++, r.weight += o;
        }
        return t;
    }
    function nA(i, t) {
        const e = sA(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
        let o, r, a;
        for(o = 0, r = i.length; o < r; ++o){
            a = i[o];
            const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
            a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
        }
        return e;
    }
    function oA(i) {
        const t = iA(i), e = vn(t.filter((c)=>c.box.fullSize), !0), s = vn(bn(t, "left"), !0), n = vn(bn(t, "right")), o = vn(bn(t, "top"), !0), r = vn(bn(t, "bottom")), a = vf(t, "x"), l = vf(t, "y");
        return {
            fullSize: e,
            leftAndTop: s.concat(o),
            rightAndBottom: n.concat(l).concat(r).concat(a),
            chartArea: bn(t, "chartArea"),
            vertical: s.concat(n).concat(l),
            horizontal: o.concat(r).concat(a)
        };
    }
    function yf(i, t, e, s) {
        return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
    }
    function xf(i, t) {
        i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
    }
    function rA(i, t, e, s) {
        const { pos: n, box: o } = e, r = i.maxPadding;
        if (!$(n)) {
            e.size && (i[n] -= e.size);
            const d = s[e.stack] || {
                size: 0,
                count: 1
            };
            d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
        }
        o.getPadding && xf(r, o.getPadding());
        const a = Math.max(0, t.outerWidth - yf(r, i, "left", "right")), l = Math.max(0, t.outerHeight - yf(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
        return i.w = a, i.h = l, e.horizontal ? {
            same: c,
            other: h
        } : {
            same: h,
            other: c
        };
    }
    function aA(i) {
        const t = i.maxPadding;
        function e(s) {
            const n = Math.max(t[s] - i[s], 0);
            return i[s] += n, n;
        }
        i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
    }
    function lA(i, t) {
        const e = t.maxPadding;
        function s(n) {
            const o = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return n.forEach((r)=>{
                o[r] = Math.max(t[r], e[r]);
            }), o;
        }
        return s(i ? [
            "left",
            "right"
        ] : [
            "top",
            "bottom"
        ]);
    }
    function yn(i, t, e, s) {
        const n = [];
        let o, r, a, l, c, h;
        for(o = 0, r = i.length, c = 0; o < r; ++o){
            a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, lA(a.horizontal, t));
            const { same: d, other: u } = rA(t, e, a, s);
            c |= d && n.length, h = h || u, l.fullSize || n.push(a);
        }
        return c && yn(n, t, e, s) || h;
    }
    function tr(i, t, e, s, n) {
        i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
    }
    function Ef(i, t, e, s) {
        const n = e.padding;
        let { x: o, y: r } = t;
        for (const a of i){
            const l = a.box, c = s[a.stack] || {
                count: 1,
                placed: 0,
                weight: 1
            }, h = a.stackWeight / c.weight || 1;
            if (a.horizontal) {
                const d = t.w * h, u = c.size || l.height;
                Ft(c.start) && (r = c.start), l.fullSize ? tr(l, n.left, r, e.outerWidth - n.right - n.left, u) : tr(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
            } else {
                const d = t.h * h, u = c.size || l.width;
                Ft(c.start) && (o = c.start), l.fullSize ? tr(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : tr(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
            }
        }
        t.x = o, t.y = r;
    }
    B.set("layout", {
        autoPadding: !0,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
    var dt = {
        addBox (i, t) {
            i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
                return [
                    {
                        z: 0,
                        draw (e) {
                            t.draw(e);
                        }
                    }
                ];
            }, i.boxes.push(t);
        },
        removeBox (i, t) {
            const e = i.boxes ? i.boxes.indexOf(t) : -1;
            e !== -1 && i.boxes.splice(e, 1);
        },
        configure (i, t, e) {
            t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
        },
        update (i, t, e, s) {
            if (!i) return;
            const n = ht(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = oA(i.boxes), l = a.vertical, c = a.horizontal;
            U(i.boxes, (_)=>{
                typeof _.beforeLayout == "function" && _.beforeLayout();
            });
            const h = l.reduce((_, m)=>m.box.options && m.box.options.display === !1 ? _ : _ + 1, 0) || 1, d = Object.freeze({
                outerWidth: t,
                outerHeight: e,
                padding: n,
                availableWidth: o,
                availableHeight: r,
                vBoxMaxWidth: o / 2 / h,
                hBoxMaxHeight: r / 2
            }), u = Object.assign({}, n);
            xf(u, ht(s));
            const f = Object.assign({
                maxPadding: u,
                w: o,
                h: r,
                x: n.left,
                y: n.top
            }, n), p = nA(l.concat(c), d);
            yn(a.fullSize, f, d, p), yn(l, f, d, p), yn(c, f, d, p) && yn(l, f, d, p), aA(f), Ef(a.leftAndTop, f, d, p), f.x += f.w, f.y += f.h, Ef(a.rightAndBottom, f, d, p), i.chartArea = {
                left: f.left,
                top: f.top,
                right: f.left + f.w,
                bottom: f.top + f.h,
                height: f.h,
                width: f.w
            }, U(a.chartArea, (_)=>{
                const m = _.box;
                Object.assign(m, i.chartArea), m.update(f.w, f.h, {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                });
            });
        }
    };
    class ul {
        acquireContext(t, e) {}
        releaseContext(t) {
            return !1;
        }
        addEventListener(t, e, s) {}
        removeEventListener(t, e, s) {}
        getDevicePixelRatio() {
            return 1;
        }
        getMaximumSize(t, e, s, n) {
            return e = Math.max(0, e || t.width), s = s || t.height, {
                width: e,
                height: Math.max(0, n ? Math.floor(e / n) : s)
            };
        }
        isAttached(t) {
            return !0;
        }
        updateConfig(t) {}
    }
    class Cf extends ul {
        acquireContext(t) {
            return t && t.getContext && t.getContext("2d") || null;
        }
        updateConfig(t) {
            t.options.animation = !1;
        }
    }
    const er = "$chartjs", cA = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
    }, Tf = (i)=>i === null || i === "";
    function hA(i, t) {
        const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
        if (i[er] = {
            initial: {
                height: s,
                width: n,
                style: {
                    display: e.display,
                    height: e.height,
                    width: e.width
                }
            }
        }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Tf(n)) {
            const o = Fu(i, "width");
            o !== void 0 && (i.width = o);
        }
        if (Tf(s)) {
            if (i.style.height === "") i.height = i.width / (t || 2);
            else {
                const o = Fu(i, "height");
                o !== void 0 && (i.height = o);
            }
        }
        return i;
    }
    const Af = GC ? {
        passive: !0
    } : !1;
    function dA(i, t, e) {
        i.addEventListener(t, e, Af);
    }
    function uA(i, t, e) {
        i.canvas.removeEventListener(t, e, Af);
    }
    function fA(i, t) {
        const e = cA[i.type] || i.type, { x: s, y: n } = Ai(i, t);
        return {
            type: e,
            chart: t,
            native: i,
            x: s !== void 0 ? s : null,
            y: n !== void 0 ? n : null
        };
    }
    function ir(i, t) {
        for (const e of i)if (e === t || e.contains(t)) return !0;
    }
    function pA(i, t, e) {
        const s = i.canvas, n = new MutationObserver((o)=>{
            let r = !1;
            for (const a of o)r = r || ir(a.addedNodes, s), r = r && !ir(a.removedNodes, s);
            r && e();
        });
        return n.observe(document, {
            childList: !0,
            subtree: !0
        }), n;
    }
    function _A(i, t, e) {
        const s = i.canvas, n = new MutationObserver((o)=>{
            let r = !1;
            for (const a of o)r = r || ir(a.removedNodes, s), r = r && !ir(a.addedNodes, s);
            r && e();
        });
        return n.observe(document, {
            childList: !0,
            subtree: !0
        }), n;
    }
    const xn = new Map;
    let wf = 0;
    function kf() {
        const i = window.devicePixelRatio;
        i !== wf && (wf = i, xn.forEach((t, e)=>{
            e.currentDevicePixelRatio !== i && t();
        }));
    }
    function gA(i, t) {
        xn.size || window.addEventListener("resize", kf), xn.set(i, t);
    }
    function mA(i) {
        xn.delete(i), xn.size || window.removeEventListener("resize", kf);
    }
    function bA(i, t, e) {
        const s = i.canvas, n = s && sl(s);
        if (!n) return;
        const o = uu((a, l)=>{
            const c = n.clientWidth;
            e(a, l), c < n.clientWidth && e();
        }, window), r = new ResizeObserver((a)=>{
            const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
            c === 0 && h === 0 || o(c, h);
        });
        return r.observe(n), gA(i, o), r;
    }
    function fl(i, t, e) {
        e && e.disconnect(), t === "resize" && mA(i);
    }
    function vA(i, t, e) {
        const s = i.canvas, n = uu((o)=>{
            i.ctx !== null && e(fA(o, i));
        }, i, (o)=>{
            const r = o[0];
            return [
                r,
                r.offsetX,
                r.offsetY
            ];
        });
        return dA(s, t, n), n;
    }
    class Sf extends ul {
        acquireContext(t, e) {
            const s = t && t.getContext && t.getContext("2d");
            return s && s.canvas === t ? (hA(t, e), s) : null;
        }
        releaseContext(t) {
            const e = t.canvas;
            if (!e[er]) return !1;
            const s = e[er].initial;
            [
                "height",
                "width"
            ].forEach((o)=>{
                const r = s[o];
                N(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
            });
            const n = s.style || {};
            return Object.keys(n).forEach((o)=>{
                e.style[o] = n[o];
            }), e.width = e.width, delete e[er], !0;
        }
        addEventListener(t, e, s) {
            this.removeEventListener(t, e);
            const n = t.$proxies || (t.$proxies = {}), r = {
                attach: pA,
                detach: _A,
                resize: bA
            }[e] || vA;
            n[e] = r(t, e, s);
        }
        removeEventListener(t, e) {
            const s = t.$proxies || (t.$proxies = {}), n = s[e];
            if (!n) return;
            (({
                attach: fl,
                detach: fl,
                resize: fl
            })[e] || uA)(t, e, n), s[e] = void 0;
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio;
        }
        getMaximumSize(t, e, s, n) {
            return XC(t, e, s, n);
        }
        isAttached(t) {
            const e = sl(t);
            return !!(e && e.isConnected);
        }
    }
    function Of(i) {
        return !Bu() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Cf : Sf;
    }
    class yA {
        constructor(){
            this._init = [];
        }
        notify(t, e, s, n) {
            e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
            const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), r = this._notify(o, t, e, s);
            return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
        }
        _notify(t, e, s, n) {
            n = n || {};
            for (const o of t){
                const r = o.plugin, a = r[s], l = [
                    e,
                    n,
                    o.options
                ];
                if (G(a, l, r) === !1 && n.cancelable) return !1;
            }
            return !0;
        }
        invalidate() {
            N(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
        }
        _descriptors(t) {
            if (this._cache) return this._cache;
            const e = this._cache = this._createDescriptors(t);
            return this._notifyStateChanges(t), e;
        }
        _createDescriptors(t, e) {
            const s = t && t.config, n = R(s.options && s.options.plugins, {}), o = xA(s);
            return n === !1 && !e ? [] : CA(t, o, n, e);
        }
        _notifyStateChanges(t) {
            const e = this._oldCache || [], s = this._cache, n = (o, r)=>o.filter((a)=>!r.some((l)=>a.plugin.id === l.plugin.id));
            this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
        }
    }
    function xA(i) {
        const t = {}, e = [], s = Object.keys(te.plugins.items);
        for(let o = 0; o < s.length; o++)e.push(te.getPlugin(s[o]));
        const n = i.plugins || [];
        for(let o = 0; o < n.length; o++){
            const r = n[o];
            e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
        }
        return {
            plugins: e,
            localIds: t
        };
    }
    function EA(i, t) {
        return !t && i === !1 ? null : i === !0 ? {} : i;
    }
    function CA(i, { plugins: t, localIds: e }, s, n) {
        const o = [], r = i.getContext();
        for (const a of t){
            const l = a.id, c = EA(s[l], n);
            c !== null && o.push({
                plugin: a,
                options: TA(i.config, {
                    plugin: a,
                    local: e[l]
                }, c, r)
            });
        }
        return o;
    }
    function TA(i, { plugin: t, local: e }, s, n) {
        const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
        return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
            ""
        ], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        });
    }
    function pl(i, t) {
        const e = B.datasets[i] || {};
        return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
    }
    function AA(i, t) {
        let e = i;
        return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
    }
    function wA(i, t) {
        return i === t ? "_index_" : "_value_";
    }
    function kA(i) {
        if (i === "top" || i === "bottom") return "x";
        if (i === "left" || i === "right") return "y";
    }
    function _l(i, t) {
        return i === "x" || i === "y" ? i : t.axis || kA(t.position) || i.charAt(0).toLowerCase();
    }
    function SA(i, t) {
        const e = yi[i.type] || {
            scales: {}
        }, s = t.scales || {}, n = pl(i.type, t), o = Object.create(null), r = Object.create(null);
        return Object.keys(s).forEach((a)=>{
            const l = s[a];
            if (!$(l)) return console.error(`Invalid scale configuration for scale: ${a}`);
            if (l._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
            const c = _l(a, l), h = wA(c, n), d = e.scales || {};
            o[c] = o[c] || a, r[a] = qs(Object.create(null), [
                {
                    axis: c
                },
                l,
                d[c],
                d[h]
            ]);
        }), i.data.datasets.forEach((a)=>{
            const l = a.type || i.type, c = a.indexAxis || pl(l, t), d = (yi[l] || {}).scales || {};
            Object.keys(d).forEach((u)=>{
                const f = AA(u, c), p = a[f + "AxisID"] || o[f] || f;
                r[p] = r[p] || Object.create(null), qs(r[p], [
                    {
                        axis: f
                    },
                    s[p],
                    d[u]
                ]);
            });
        }), Object.keys(r).forEach((a)=>{
            const l = r[a];
            qs(l, [
                B.scales[l.type],
                B.scale
            ]);
        }), r;
    }
    function Df(i) {
        const t = i.options || (i.options = {});
        t.plugins = R(t.plugins, {}), t.scales = SA(i, t);
    }
    function Mf(i) {
        return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
    }
    function OA(i) {
        return i = i || {}, i.data = Mf(i.data), Df(i), i;
    }
    const If = new Map, Lf = new Set;
    function sr(i, t) {
        let e = If.get(i);
        return e || (e = t(), If.set(i, e), Lf.add(e)), e;
    }
    const En = (i, t, e)=>{
        const s = Ke(t, e);
        s !== void 0 && i.add(s);
    };
    class DA {
        constructor(t){
            this._config = OA(t), this._scopeCache = new Map, this._resolverCache = new Map;
        }
        get platform() {
            return this._config.platform;
        }
        get type() {
            return this._config.type;
        }
        set type(t) {
            this._config.type = t;
        }
        get data() {
            return this._config.data;
        }
        set data(t) {
            this._config.data = Mf(t);
        }
        get options() {
            return this._config.options;
        }
        set options(t) {
            this._config.options = t;
        }
        get plugins() {
            return this._config.plugins;
        }
        update() {
            const t = this._config;
            this.clearCache(), Df(t);
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
            return sr(t, ()=>[
                    [
                        `datasets.${t}`,
                        ""
                    ]
                ]);
        }
        datasetAnimationScopeKeys(t, e) {
            return sr(`${t}.transition.${e}`, ()=>[
                    [
                        `datasets.${t}.transitions.${e}`,
                        `transitions.${e}`
                    ],
                    [
                        `datasets.${t}`,
                        ""
                    ]
                ]);
        }
        datasetElementScopeKeys(t, e) {
            return sr(`${t}-${e}`, ()=>[
                    [
                        `datasets.${t}.elements.${e}`,
                        `datasets.${t}`,
                        `elements.${e}`,
                        ""
                    ]
                ]);
        }
        pluginScopeKeys(t) {
            const e = t.id, s = this.type;
            return sr(`${s}-plugin-${e}`, ()=>[
                    [
                        `plugins.${e}`,
                        ...t.additionalOptionScopes || []
                    ]
                ]);
        }
        _cachedScopes(t, e) {
            const s = this._scopeCache;
            let n = s.get(t);
            return (!n || e) && (n = new Map, s.set(t, n)), n;
        }
        getOptionScopes(t, e, s) {
            const { options: n, type: o } = this, r = this._cachedScopes(t, s), a = r.get(e);
            if (a) return a;
            const l = new Set;
            e.forEach((h)=>{
                t && (l.add(t), h.forEach((d)=>En(l, t, d))), h.forEach((d)=>En(l, n, d)), h.forEach((d)=>En(l, yi[o] || {}, d)), h.forEach((d)=>En(l, B, d)), h.forEach((d)=>En(l, qa, d));
            });
            const c = Array.from(l);
            return c.length === 0 && c.push(Object.create(null)), Lf.has(e) && r.set(e, c), c;
        }
        chartOptionScopes() {
            const { options: t, type: e } = this;
            return [
                t,
                yi[e] || {},
                B.datasets[e] || {},
                {
                    type: e
                },
                B,
                qa
            ];
        }
        resolveNamedOptions(t, e, s, n = [
            ""
        ]) {
            const o = {
                $shared: !0
            }, { resolver: r, subPrefixes: a } = Pf(this._resolverCache, t, n);
            let l = r;
            if (IA(r, e)) {
                o.$shared = !1, s = Ue(s) ? s() : s;
                const c = this.createResolver(t, s, a);
                l = cs(r, s, c);
            }
            for (const c of e)o[c] = l[c];
            return o;
        }
        createResolver(t, e, s = [
            ""
        ], n) {
            const { resolver: o } = Pf(this._resolverCache, t, s);
            return $(e) ? cs(o, e, void 0, n) : o;
        }
    }
    function Pf(i, t, e) {
        let s = i.get(t);
        s || (s = new Map, i.set(t, s));
        const n = e.join();
        let o = s.get(n);
        return o || (o = {
            resolver: tl(t, e),
            subPrefixes: e.filter((a)=>!a.toLowerCase().includes("hover"))
        }, s.set(n, o)), o;
    }
    const MA = (i)=>$(i) && Object.getOwnPropertyNames(i).reduce((t, e)=>t || Ue(i[e]), !1);
    function IA(i, t) {
        const { isScriptable: e, isIndexable: s } = Du(i);
        for (const n of t){
            const o = e(n), r = s(n), a = (r || o) && i[n];
            if (o && (Ue(a) || MA(a)) || r && Q(a)) return !0;
        }
        return !1;
    }
    var LA = "3.9.1";
    const PA = [
        "top",
        "bottom",
        "left",
        "right",
        "chartArea"
    ];
    function Rf(i, t) {
        return i === "top" || i === "bottom" || PA.indexOf(i) === -1 && t === "x";
    }
    function Nf(i, t) {
        return function(e, s) {
            return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
        };
    }
    function $f(i) {
        const t = i.chart, e = t.options.animation;
        t.notifyPlugins("afterRender"), G(e && e.onComplete, [
            i
        ], t);
    }
    function RA(i) {
        const t = i.chart, e = t.options.animation;
        G(e && e.onProgress, [
            i
        ], t);
    }
    function Bf(i) {
        return Bu() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
    }
    const nr = {}, Hf = (i)=>{
        const t = Bf(i);
        return Object.values(nr).filter((e)=>e.canvas === t).pop();
    };
    function NA(i, t, e) {
        const s = Object.keys(i);
        for (const n of s){
            const o = +n;
            if (o >= t) {
                const r = i[n];
                delete i[n], (e > 0 || o > t) && (i[o + e] = r);
            }
        }
    }
    function $A(i, t, e, s) {
        return !e || i.type === "mouseout" ? null : s ? t : i;
    }
    class gl {
        constructor(t, e){
            const s = this.config = new DA(e), n = Bf(t), o = Hf(n);
            if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
            const r = s.createResolver(s.chartOptionScopes(), this.getContext());
            this.platform = new (s.platform || Of(n)), this.platform.updateConfig(s);
            const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
            if (this.id = OE(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new yA, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = YE((d)=>this.update(d), r.resizeDelay || 0), this._dataChanges = [], nr[this.id] = this, !a || !l) {
                console.error("Failed to create chart: can't acquire context from the given item");
                return;
            }
            be.listen(this, "complete", $f), be.listen(this, "progress", RA), this._initialize(), this.attached && this.update();
        }
        get aspectRatio() {
            const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
            return N(t) ? e && o ? o : n ? s / n : null : t;
        }
        get data() {
            return this.config.data;
        }
        set data(t) {
            this.config.data = t;
        }
        get options() {
            return this._options;
        }
        set options(t) {
            this.config.options = t;
        }
        _initialize() {
            return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Hu(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
        }
        clear() {
            return ku(this.canvas, this.ctx), this;
        }
        stop() {
            return be.stop(this), this;
        }
        resize(t, e) {
            be.running(this) ? this._resizeBeforeDraw = {
                width: t,
                height: e
            } : this._resize(t, e);
        }
        _resize(t, e) {
            const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
            this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Hu(this, a, !0) && (this.notifyPlugins("resize", {
                size: r
            }), G(s.onResize, [
                this,
                r
            ], this), this.attached && this._doResize(l) && this.render());
        }
        ensureScalesHaveIDs() {
            const e = this.options.scales || {};
            U(e, (s, n)=>{
                s.id = n;
            });
        }
        buildOrUpdateScales() {
            const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a)=>(r[a] = !1, r), {});
            let o = [];
            e && (o = o.concat(Object.keys(e).map((r)=>{
                const a = e[r], l = _l(r, a), c = l === "r", h = l === "x";
                return {
                    options: a,
                    dposition: c ? "chartArea" : h ? "bottom" : "left",
                    dtype: c ? "radialLinear" : h ? "category" : "linear"
                };
            }))), U(o, (r)=>{
                const a = r.options, l = a.id, c = _l(l, a), h = R(a.type, r.dtype);
                (a.position === void 0 || Rf(a.position, c) !== Rf(r.dposition)) && (a.position = r.dposition), n[l] = !0;
                let d = null;
                if (l in s && s[l].type === h) d = s[l];
                else {
                    const u = te.getScale(h);
                    d = new u({
                        id: l,
                        type: h,
                        ctx: this.ctx,
                        chart: this
                    }), s[d.id] = d;
                }
                d.init(a, t);
            }), U(n, (r, a)=>{
                r || delete s[a];
            }), U(s, (r)=>{
                dt.configure(this, r, r.options), dt.addBox(this, r);
            });
        }
        _updateMetasets() {
            const t = this._metasets, e = this.data.datasets.length, s = t.length;
            if (t.sort((n, o)=>n.index - o.index), s > e) {
                for(let n = e; n < s; ++n)this._destroyDatasetMeta(n);
                t.splice(e, s - e);
            }
            this._sortedMetasets = t.slice(0).sort(Nf("order", "index"));
        }
        _removeUnreferencedMetasets() {
            const { _metasets: t, data: { datasets: e } } = this;
            t.length > e.length && delete this._stacks, t.forEach((s, n)=>{
                e.filter((o)=>o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
            });
        }
        buildOrUpdateControllers() {
            const t = [], e = this.data.datasets;
            let s, n;
            for(this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++){
                const o = e[s];
                let r = this.getDatasetMeta(s);
                const a = o.type || this.config.type;
                if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || pl(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller) r.controller.updateIndex(s), r.controller.linkScales();
                else {
                    const l = te.getController(a), { datasetElementType: c, dataElementType: h } = B.datasets[a];
                    Object.assign(l.prototype, {
                        dataElementType: te.getElement(h),
                        datasetElementType: c && te.getElement(c)
                    }), r.controller = new l(this, s), t.push(r.controller);
                }
            }
            return this._updateMetasets(), t;
        }
        _resetElements() {
            U(this.data.datasets, (t, e)=>{
                this.getDatasetMeta(e).controller.reset();
            }, this);
        }
        reset() {
            this._resetElements(), this.notifyPlugins("reset");
        }
        update(t) {
            const e = this.config;
            e.update();
            const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
                mode: t,
                cancelable: !0
            }) === !1) return;
            const o = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let r = 0;
            for(let c = 0, h = this.data.datasets.length; c < h; c++){
                const { controller: d } = this.getDatasetMeta(c), u = !n && o.indexOf(d) === -1;
                d.buildOrUpdateElements(u), r = Math.max(+d.getMaxOverflow(), r);
            }
            r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || U(o, (c)=>{
                c.reset();
            }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                mode: t
            }), this._layers.sort(Nf("z", "_idx"));
            const { _active: a, _lastEvent: l } = this;
            l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
        }
        _updateScales() {
            U(this.scales, (t)=>{
                dt.removeBox(this, t);
            }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
        }
        _checkEventBindings() {
            const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
            (!iu(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
            const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
            for (const { method: s, start: n, count: o } of e){
                const r = s === "_removeElements" ? -o : o;
                NA(t, n, r);
            }
        }
        _getUniformDataChanges() {
            const t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            const e = this.data.datasets.length, s = (o)=>new Set(t.filter((r)=>r[0] === o).map((r, a)=>a + "," + r.splice(1).join(","))), n = s(0);
            for(let o = 1; o < e; o++)if (!iu(n, s(o))) return;
            return Array.from(n).map((o)=>o.split(",")).map((o)=>({
                    method: o[1],
                    start: +o[2],
                    count: +o[3]
                }));
        }
        _updateLayout(t) {
            if (this.notifyPlugins("beforeLayout", {
                cancelable: !0
            }) === !1) return;
            dt.update(this, this.width, this.height, t);
            const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
            this._layers = [], U(this.boxes, (n)=>{
                s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
            }, this), this._layers.forEach((n, o)=>{
                n._idx = o;
            }), this.notifyPlugins("afterLayout");
        }
        _updateDatasets(t) {
            if (this.notifyPlugins("beforeDatasetsUpdate", {
                mode: t,
                cancelable: !0
            }) !== !1) {
                for(let e = 0, s = this.data.datasets.length; e < s; ++e)this.getDatasetMeta(e).controller.configure();
                for(let e = 0, s = this.data.datasets.length; e < s; ++e)this._updateDataset(e, Ue(t) ? t({
                    datasetIndex: e
                }) : t);
                this.notifyPlugins("afterDatasetsUpdate", {
                    mode: t
                });
            }
        }
        _updateDataset(t, e) {
            const s = this.getDatasetMeta(t), n = {
                meta: s,
                index: t,
                mode: e,
                cancelable: !0
            };
            this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
        }
        render() {
            this.notifyPlugins("beforeRender", {
                cancelable: !0
            }) !== !1 && (be.has(this) ? this.attached && !be.running(this) && be.start(this) : (this.draw(), $f({
                chart: this
            })));
        }
        draw() {
            let t;
            if (this._resizeBeforeDraw) {
                const { width: s, height: n } = this._resizeBeforeDraw;
                this._resize(s, n), this._resizeBeforeDraw = null;
            }
            if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
                cancelable: !0
            }) === !1) return;
            const e = this._layers;
            for(t = 0; t < e.length && e[t].z <= 0; ++t)e[t].draw(this.chartArea);
            for(this._drawDatasets(); t < e.length; ++t)e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(t) {
            const e = this._sortedMetasets, s = [];
            let n, o;
            for(n = 0, o = e.length; n < o; ++n){
                const r = e[n];
                (!t || r.visible) && s.push(r);
            }
            return s;
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
            if (this.notifyPlugins("beforeDatasetsDraw", {
                cancelable: !0
            }) === !1) return;
            const t = this.getSortedVisibleDatasetMetas();
            for(let e = t.length - 1; e >= 0; --e)this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(t) {
            const e = this.ctx, s = t._clip, n = !s.disabled, o = this.chartArea, r = {
                meta: t,
                index: t.index,
                cancelable: !0
            };
            this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (n && Ko(e, {
                left: s.left === !1 ? 0 : o.left - s.left,
                right: s.right === !1 ? this.width : o.right + s.right,
                top: s.top === !1 ? 0 : o.top - s.top,
                bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
            }), t.controller.draw(), n && Uo(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
        }
        isPointInArea(t) {
            return on(t, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(t, e, s, n) {
            const o = mf.modes[e];
            return typeof o == "function" ? o(this, t, s, n) : [];
        }
        getDatasetMeta(t) {
            const e = this.data.datasets[t], s = this._metasets;
            let n = s.filter((o)=>o && o._dataset === e).pop();
            return n || (n = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e && e.order || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1
            }, s.push(n)), n;
        }
        getContext() {
            return this.$context || (this.$context = qe(null, {
                chart: this,
                type: "chart"
            }));
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
            const e = this.data.datasets[t];
            if (!e) return !1;
            const s = this.getDatasetMeta(t);
            return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
            const s = this.getDatasetMeta(t);
            s.hidden = !e;
        }
        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
            return !this._hiddenIndices[t];
        }
        _updateVisibility(t, e, s) {
            const n = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, n);
            Ft(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
                visible: s
            }), this.update((a)=>a.datasetIndex === t ? n : void 0));
        }
        hide(t, e) {
            this._updateVisibility(t, e, !1);
        }
        show(t, e) {
            this._updateVisibility(t, e, !0);
        }
        _destroyDatasetMeta(t) {
            const e = this._metasets[t];
            e && e.controller && e.controller._destroy(), delete this._metasets[t];
        }
        _stop() {
            let t, e;
            for(this.stop(), be.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)this._destroyDatasetMeta(t);
        }
        destroy() {
            this.notifyPlugins("beforeDestroy");
            const { canvas: t, ctx: e } = this;
            this._stop(), this.config.clearCache(), t && (this.unbindEvents(), ku(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete nr[this.id], this.notifyPlugins("afterDestroy");
        }
        toBase64Image(...t) {
            return this.canvas.toDataURL(...t);
        }
        bindEvents() {
            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
        }
        bindUserEvents() {
            const t = this._listeners, e = this.platform, s = (o, r)=>{
                e.addEventListener(this, o, r), t[o] = r;
            }, n = (o, r, a)=>{
                o.offsetX = r, o.offsetY = a, this._eventHandler(o);
            };
            U(this.options.events, (o)=>s(o, n));
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const t = this._responsiveListeners, e = this.platform, s = (l, c)=>{
                e.addEventListener(this, l, c), t[l] = c;
            }, n = (l, c)=>{
                t[l] && (e.removeEventListener(this, l, c), delete t[l]);
            }, o = (l, c)=>{
                this.canvas && this.resize(l, c);
            };
            let r;
            const a = ()=>{
                n("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
            };
            r = ()=>{
                this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
            }, e.isAttached(this.canvas) ? a() : r();
        }
        unbindEvents() {
            U(this._listeners, (t, e)=>{
                this.platform.removeEventListener(this, e, t);
            }), this._listeners = {}, U(this._responsiveListeners, (t, e)=>{
                this.platform.removeEventListener(this, e, t);
            }), this._responsiveListeners = void 0;
        }
        updateHoverStyle(t, e, s) {
            const n = s ? "set" : "remove";
            let o, r, a, l;
            for(e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a){
                r = t[a];
                const c = r && this.getDatasetMeta(r.datasetIndex).controller;
                c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
            }
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(t) {
            const e = this._active || [], s = t.map(({ datasetIndex: o, index: r })=>{
                const a = this.getDatasetMeta(o);
                if (!a) throw new Error("No dataset found at index " + o);
                return {
                    datasetIndex: o,
                    element: a.data[r],
                    index: r
                };
            });
            !$o(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
        }
        notifyPlugins(t, e, s) {
            return this._plugins.notify(this, t, e, s);
        }
        _updateHoverStyles(t, e, s) {
            const n = this.options.hover, o = (l, c)=>l.filter((h)=>!c.some((d)=>h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = s ? t : o(t, e);
            r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
        }
        _eventHandler(t, e) {
            const s = {
                event: t,
                replay: e,
                cancelable: !0,
                inChartArea: this.isPointInArea(t)
            }, n = (r)=>(r.options.events || this.options.events).includes(t.native.type);
            if (this.notifyPlugins("beforeEvent", s, n) === !1) return;
            const o = this._handleEvent(t, e, s.inChartArea);
            return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
        }
        _handleEvent(t, e, s) {
            const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = RE(t), c = $A(t, this._lastEvent, s, l);
            s && (this._lastEvent = null, G(o.onHover, [
                t,
                a,
                this
            ], this), l && G(o.onClick, [
                t,
                a,
                this
            ], this));
            const h = !$o(a, n);
            return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h;
        }
        _getActiveElements(t, e, s, n) {
            if (t.type === "mouseout") return [];
            if (!s) return e;
            const o = this.options.hover;
            return this.getElementsAtEventForMode(t, o.mode, o, n);
        }
    }
    const Ff = ()=>U(gl.instances, (i)=>i._plugins.invalidate()), Qe = !0;
    Object.defineProperties(gl, {
        defaults: {
            enumerable: Qe,
            value: B
        },
        instances: {
            enumerable: Qe,
            value: nr
        },
        overrides: {
            enumerable: Qe,
            value: yi
        },
        registry: {
            enumerable: Qe,
            value: te
        },
        version: {
            enumerable: Qe,
            value: LA
        },
        getChart: {
            enumerable: Qe,
            value: Hf
        },
        register: {
            enumerable: Qe,
            value: (...i)=>{
                te.add(...i), Ff();
            }
        },
        unregister: {
            enumerable: Qe,
            value: (...i)=>{
                te.remove(...i), Ff();
            }
        }
    });
    function Vf(i, t, e) {
        const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
        let c = n / a;
        i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + nt, s - nt), i.closePath(), i.clip();
    }
    function BA(i) {
        return Ja(i, [
            "outerStart",
            "outerEnd",
            "innerStart",
            "innerEnd"
        ]);
    }
    function HA(i, t, e, s) {
        const n = BA(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l)=>{
            const c = (e - Math.min(o, l)) * s / 2;
            return ct(l, 0, Math.min(o, c));
        };
        return {
            outerStart: a(n.outerStart),
            outerEnd: a(n.outerEnd),
            innerStart: ct(n.innerStart, 0, r),
            innerEnd: ct(n.innerEnd, 0, r)
        };
    }
    function us(i, t, e, s) {
        return {
            x: e + i * Math.cos(t),
            y: s + i * Math.sin(t)
        };
    }
    function ml(i, t, e, s, n, o) {
        const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), u = h > 0 ? h + s + e + c : 0;
        let f = 0;
        const p = n - l;
        if (s) {
            const I = h > 0 ? h - s : 0, F = d > 0 ? d - s : 0, Y = (I + F) / 2, Yt = Y !== 0 ? p * Y / (Y + s) : p;
            f = (p - Yt) / 2;
        }
        const _ = Math.max(.001, p * d - e / et) / d, m = (p - _) / 2, y = l + m + f, x = n - m - f, { outerStart: E, outerEnd: C, innerStart: T, innerEnd: A } = HA(t, u, d, x - y), w = d - E, S = d - C, k = y + E / w, D = x - C / S, O = u + T, M = u + A, L = y + T / O, X = x - A / M;
        if (i.beginPath(), o) {
            if (i.arc(r, a, d, k, D), C > 0) {
                const Y = us(S, D, r, a);
                i.arc(Y.x, Y.y, C, D, x + nt);
            }
            const I = us(M, x, r, a);
            if (i.lineTo(I.x, I.y), A > 0) {
                const Y = us(M, X, r, a);
                i.arc(Y.x, Y.y, A, x + nt, X + Math.PI);
            }
            if (i.arc(r, a, u, x - A / u, y + T / u, !0), T > 0) {
                const Y = us(O, L, r, a);
                i.arc(Y.x, Y.y, T, L + Math.PI, y - nt);
            }
            const F = us(w, y, r, a);
            if (i.lineTo(F.x, F.y), E > 0) {
                const Y = us(w, k, r, a);
                i.arc(Y.x, Y.y, E, y - nt, k);
            }
        } else {
            i.moveTo(r, a);
            const I = Math.cos(k) * d + r, F = Math.sin(k) * d + a;
            i.lineTo(I, F);
            const Y = Math.cos(D) * d + r, Yt = Math.sin(D) * d + a;
            i.lineTo(Y, Yt);
        }
        i.closePath();
    }
    function FA(i, t, e, s, n) {
        const { fullCircles: o, startAngle: r, circumference: a } = t;
        let l = t.endAngle;
        if (o) {
            ml(i, t, e, s, r + q, n);
            for(let c = 0; c < o; ++c)i.fill();
            isNaN(a) || (l = r + a % q, a % q === 0 && (l += q));
        }
        return ml(i, t, e, s, l, n), i.fill(), l;
    }
    function VA(i, t, e) {
        const { x: s, y: n, startAngle: o, pixelMargin: r, fullCircles: a } = t, l = Math.max(t.outerRadius - r, 0), c = t.innerRadius + r;
        let h;
        for(e && Vf(i, t, o + q), i.beginPath(), i.arc(s, n, c, o + q, o, !0), h = 0; h < a; ++h)i.stroke();
        for(i.beginPath(), i.arc(s, n, l, o, o + q), h = 0; h < a; ++h)i.stroke();
    }
    function WA(i, t, e, s, n, o) {
        const { options: r } = t, { borderWidth: a, borderJoinStyle: l } = r, c = r.borderAlign === "inner";
        a && (c ? (i.lineWidth = a * 2, i.lineJoin = l || "round") : (i.lineWidth = a, i.lineJoin = l || "bevel"), t.fullCircles && VA(i, t, c), c && Vf(i, t, n), ml(i, t, e, s, n, o), i.stroke());
    }
    class fs extends jt {
        constructor(t){
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
        }
        inRange(t, e, s) {
            const n = this.getProps([
                "x",
                "y"
            ], s), { angle: o, distance: r } = au(n, {
                x: t,
                y: e
            }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference"
            ], s), u = this.options.spacing / 2, p = R(d, l - a) >= q || Js(o, a, l), _ = Ae(r, c + u, h + u);
            return p && _;
        }
        getCenterPoint(t) {
            const { x: e, y: s, startAngle: n, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference"
            ], t), { offset: l, spacing: c } = this.options, h = (n + o) / 2, d = (r + a + c + l) / 2;
            return {
                x: e + Math.cos(h) * d,
                y: s + Math.sin(h) * d
            };
        }
        tooltipPosition(t) {
            return this.getCenterPoint(t);
        }
        draw(t) {
            const { options: e, circumference: s } = this, n = (e.offset || 0) / 2, o = (e.spacing || 0) / 2, r = e.circular;
            if (this.pixelMargin = e.borderAlign === "inner" ? .33 : 0, this.fullCircles = s > q ? Math.floor(s / q) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
            t.save();
            let a = 0;
            if (n) {
                a = n / 2;
                const c = (this.startAngle + this.endAngle) / 2;
                t.translate(Math.cos(c) * a, Math.sin(c) * a), this.circumference >= et && (a = n);
            }
            t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
            const l = FA(t, this, a, o, r);
            WA(t, this, a, o, l, r), t.restore();
        }
    }
    fs.id = "arc", fs.defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0
    }, fs.defaultRoutes = {
        backgroundColor: "backgroundColor"
    };
    function Wf(i, t, e = t) {
        i.lineCap = R(e.borderCapStyle, t.borderCapStyle), i.setLineDash(R(e.borderDash, t.borderDash)), i.lineDashOffset = R(e.borderDashOffset, t.borderDashOffset), i.lineJoin = R(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = R(e.borderWidth, t.borderWidth), i.strokeStyle = R(e.borderColor, t.borderColor);
    }
    function zA(i, t, e) {
        i.lineTo(e.x, e.y);
    }
    function jA(i) {
        return i.stepped ? bC : i.tension || i.cubicInterpolationMode === "monotone" ? vC : zA;
    }
    function zf(i, t, e = {}) {
        const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
        return {
            count: s,
            start: l,
            loop: t.loop,
            ilen: c < l && !h ? s + c - l : c - l
        };
    }
    function YA(i, t, e, s) {
        const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = zf(n, e, s), h = jA(o);
        let { move: d = !0, reverse: u } = s || {}, f, p, _;
        for(f = 0; f <= c; ++f)p = n[(a + (u ? c - f : f)) % r], !p.skip && (d ? (i.moveTo(p.x, p.y), d = !1) : h(i, _, p, u, o.stepped), _ = p);
        return l && (p = n[(a + (u ? c : 0)) % r], h(i, _, p, u, o.stepped)), !!l;
    }
    function KA(i, t, e, s) {
        const n = t.points, { count: o, start: r, ilen: a } = zf(n, e, s), { move: l = !0, reverse: c } = s || {};
        let h = 0, d = 0, u, f, p, _, m, y;
        const x = (C)=>(r + (c ? a - C : C)) % o, E = ()=>{
            _ !== m && (i.lineTo(h, m), i.lineTo(h, _), i.lineTo(h, y));
        };
        for(l && (f = n[x(0)], i.moveTo(f.x, f.y)), u = 0; u <= a; ++u){
            if (f = n[x(u)], f.skip) continue;
            const C = f.x, T = f.y, A = C | 0;
            A === p ? (T < _ ? _ = T : T > m && (m = T), h = (d * h + C) / ++d) : (E(), i.lineTo(C, T), p = A, d = 0, _ = m = T), y = T;
        }
        E();
    }
    function bl(i) {
        const t = i.options, e = t.borderDash && t.borderDash.length;
        return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? KA : YA;
    }
    function UA(i) {
        return i.stepped ? qC : i.tension || i.cubicInterpolationMode === "monotone" ? ZC : wi;
    }
    function XA(i, t, e, s) {
        let n = t._path;
        n || (n = t._path = new Path2D, t.path(n, e, s) && n.closePath()), Wf(i, t.options), i.stroke(n);
    }
    function GA(i, t, e, s) {
        const { segments: n, options: o } = t, r = bl(t);
        for (const a of n)Wf(i, o, a.style), i.beginPath(), r(i, t, a, {
            start: e,
            end: e + s - 1
        }) && i.closePath(), i.stroke();
    }
    const qA = typeof Path2D == "function";
    function ZA(i, t, e, s) {
        qA && !t.options.segment ? XA(i, t, e, s) : GA(i, t, e, s);
    }
    class Se extends jt {
        constructor(t){
            super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
        }
        updateControlPoints(t, e) {
            const s = this.options;
            if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
                const n = s.spanGaps ? this._loop : this._fullLoop;
                WC(this._points, s, t, n, e), this._pointsUpdated = !0;
            }
        }
        set points(t) {
            this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
        }
        get points() {
            return this._points;
        }
        get segments() {
            return this._segments || (this._segments = nT(this, this.options.segment));
        }
        first() {
            const t = this.segments, e = this.points;
            return t.length && e[t[0].start];
        }
        last() {
            const t = this.segments, e = this.points, s = t.length;
            return s && e[t[s - 1].end];
        }
        interpolate(t, e) {
            const s = this.options, n = t[e], o = this.points, r = Uu(this, {
                property: e,
                start: n,
                end: n
            });
            if (!r.length) return;
            const a = [], l = UA(s);
            let c, h;
            for(c = 0, h = r.length; c < h; ++c){
                const { start: d, end: u } = r[c], f = o[d], p = o[u];
                if (f === p) {
                    a.push(f);
                    continue;
                }
                const _ = Math.abs((n - f[e]) / (p[e] - f[e])), m = l(f, p, _, s.stepped);
                m[e] = t[e], a.push(m);
            }
            return a.length === 1 ? a[0] : a;
        }
        pathSegment(t, e, s) {
            return bl(this)(t, this, e, s);
        }
        path(t, e, s) {
            const n = this.segments, o = bl(this);
            let r = this._loop;
            e = e || 0, s = s || this.points.length - e;
            for (const a of n)r &= o(t, this, a, {
                start: e,
                end: e + s - 1
            });
            return !!r;
        }
        draw(t, e, s, n) {
            const o = this.options || {};
            (this.points || []).length && o.borderWidth && (t.save(), ZA(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
        }
    }
    Se.id = "line", Se.defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0
    }, Se.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    }, Se.descriptors = {
        _scriptable: !0,
        _indexable: (i)=>i !== "borderDash" && i !== "fill"
    };
    function jf(i, t, e, s) {
        const n = i.options, { [e]: o } = i.getProps([
            e
        ], s);
        return Math.abs(t - o) < n.radius + n.hitRadius;
    }
    class ps extends jt {
        constructor(t){
            super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
        }
        inRange(t, e, s) {
            const n = this.options, { x: o, y: r } = this.getProps([
                "x",
                "y"
            ], s);
            return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(n.hitRadius + n.radius, 2);
        }
        inXRange(t, e) {
            return jf(this, t, "x", e);
        }
        inYRange(t, e) {
            return jf(this, t, "y", e);
        }
        getCenterPoint(t) {
            const { x: e, y: s } = this.getProps([
                "x",
                "y"
            ], t);
            return {
                x: e,
                y: s
            };
        }
        size(t) {
            t = t || this.options || {};
            let e = t.radius || 0;
            e = Math.max(e, e && t.hoverRadius || 0);
            const s = e && t.borderWidth || 0;
            return (e + s) * 2;
        }
        draw(t, e) {
            const s = this.options;
            this.skip || s.radius < .1 || !on(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Qa(t, s, this.x, this.y));
        }
        getRange() {
            const t = this.options || {};
            return t.radius + t.hitRadius;
        }
    }
    ps.id = "point", ps.defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
    }, ps.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    function Yf(i, t) {
        const { x: e, y: s, base: n, width: o, height: r } = i.getProps([
            "x",
            "y",
            "base",
            "width",
            "height"
        ], t);
        let a, l, c, h, d;
        return i.horizontal ? (d = r / 2, a = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, a = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), {
            left: a,
            top: c,
            right: l,
            bottom: h
        };
    }
    function Je(i, t, e, s) {
        return i ? 0 : ct(t, e, s);
    }
    function QA(i, t, e) {
        const s = i.options.borderWidth, n = i.borderSkipped, o = Ou(s);
        return {
            t: Je(n.top, o.top, 0, e),
            r: Je(n.right, o.right, 0, t),
            b: Je(n.bottom, o.bottom, 0, e),
            l: Je(n.left, o.left, 0, t)
        };
    }
    function JA(i, t, e) {
        const { enableBorderRadius: s } = i.getProps([
            "enableBorderRadius"
        ]), n = i.options.borderRadius, o = Ci(n), r = Math.min(t, e), a = i.borderSkipped, l = s || $(n);
        return {
            topLeft: Je(!l || a.top || a.left, o.topLeft, 0, r),
            topRight: Je(!l || a.top || a.right, o.topRight, 0, r),
            bottomLeft: Je(!l || a.bottom || a.left, o.bottomLeft, 0, r),
            bottomRight: Je(!l || a.bottom || a.right, o.bottomRight, 0, r)
        };
    }
    function tw(i) {
        const t = Yf(i), e = t.right - t.left, s = t.bottom - t.top, n = QA(i, e / 2, s / 2), o = JA(i, e / 2, s / 2);
        return {
            outer: {
                x: t.left,
                y: t.top,
                w: e,
                h: s,
                radius: o
            },
            inner: {
                x: t.left + n.l,
                y: t.top + n.t,
                w: e - n.l - n.r,
                h: s - n.t - n.b,
                radius: {
                    topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                    topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                    bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
                    bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
                }
            }
        };
    }
    function vl(i, t, e, s) {
        const n = t === null, o = e === null, a = i && !(n && o) && Yf(i, s);
        return a && (n || Ae(t, a.left, a.right)) && (o || Ae(e, a.top, a.bottom));
    }
    function ew(i) {
        return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
    }
    function iw(i, t) {
        i.rect(t.x, t.y, t.w, t.h);
    }
    function yl(i, t, e = {}) {
        const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
        return {
            x: i.x + s,
            y: i.y + n,
            w: i.w + o,
            h: i.h + r,
            radius: i.radius
        };
    }
    class _s extends jt {
        constructor(t){
            super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
        }
        draw(t) {
            const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = tw(this), a = ew(r.radius) ? rn : iw;
            t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, yl(r, e, o)), t.clip(), a(t, yl(o, -e, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, yl(o, e)), t.fillStyle = n, t.fill(), t.restore();
        }
        inRange(t, e, s) {
            return vl(this, t, e, s);
        }
        inXRange(t, e) {
            return vl(this, t, null, e);
        }
        inYRange(t, e) {
            return vl(this, null, t, e);
        }
        getCenterPoint(t) {
            const { x: e, y: s, base: n, horizontal: o } = this.getProps([
                "x",
                "y",
                "base",
                "horizontal"
            ], t);
            return {
                x: o ? (e + n) / 2 : e,
                y: o ? s : (s + n) / 2
            };
        }
        getRange(t) {
            return t === "x" ? this.width / 2 : this.height / 2;
        }
    }
    _s.id = "bar", _s.defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0
    }, _s.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    var Kf = Object.freeze({
        __proto__: null,
        ArcElement: fs,
        LineElement: Se,
        PointElement: ps,
        BarElement: _s
    });
    function sw(i, t, e, s, n) {
        const o = n.samples || s;
        if (o >= e) return i.slice(t, t + e);
        const r = [], a = (e - 2) / (o - 2);
        let l = 0;
        const c = t + e - 1;
        let h = t, d, u, f, p, _;
        for(r[l++] = i[h], d = 0; d < o - 2; d++){
            let m = 0, y = 0, x;
            const E = Math.floor((d + 1) * a) + 1 + t, C = Math.min(Math.floor((d + 2) * a) + 1, e) + t, T = C - E;
            for(x = E; x < C; x++)m += i[x].x, y += i[x].y;
            m /= T, y /= T;
            const A = Math.floor(d * a) + 1 + t, w = Math.min(Math.floor((d + 1) * a) + 1, e) + t, { x: S, y: k } = i[h];
            for(f = p = -1, x = A; x < w; x++)p = .5 * Math.abs((S - m) * (i[x].y - k) - (S - i[x].x) * (y - k)), p > f && (f = p, u = i[x], _ = x);
            r[l++] = u, h = _;
        }
        return r[l++] = i[c], r;
    }
    function nw(i, t, e, s) {
        let n = 0, o = 0, r, a, l, c, h, d, u, f, p, _;
        const m = [], y = t + e - 1, x = i[t].x, C = i[y].x - x;
        for(r = t; r < t + e; ++r){
            a = i[r], l = (a.x - x) / C * s, c = a.y;
            const T = l | 0;
            if (T === h) c < p ? (p = c, d = r) : c > _ && (_ = c, u = r), n = (o * n + a.x) / ++o;
            else {
                const A = r - 1;
                if (!N(d) && !N(u)) {
                    const w = Math.min(d, u), S = Math.max(d, u);
                    w !== f && w !== A && m.push({
                        ...i[w],
                        x: n
                    }), S !== f && S !== A && m.push({
                        ...i[S],
                        x: n
                    });
                }
                r > 0 && A !== f && m.push(i[A]), m.push(a), h = T, o = 0, p = _ = c, d = u = f = r;
            }
        }
        return m;
    }
    function Uf(i) {
        if (i._decimated) {
            const t = i._data;
            delete i._decimated, delete i._data, Object.defineProperty(i, "data", {
                value: t
            });
        }
    }
    function Xf(i) {
        i.data.datasets.forEach((t)=>{
            Uf(t);
        });
    }
    function ow(i, t) {
        const e = t.length;
        let s = 0, n;
        const { iScale: o } = i, { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
        return l && (s = ct(we(t, o.axis, r).lo, 0, e - 1)), c ? n = ct(we(t, o.axis, a).hi + 1, s, e) - s : n = e - s, {
            start: s,
            count: n
        };
    }
    var Gf = {
        id: "decimation",
        defaults: {
            algorithm: "min-max",
            enabled: !1
        },
        beforeElementsUpdate: (i, t, e)=>{
            if (!e.enabled) {
                Xf(i);
                return;
            }
            const s = i.width;
            i.data.datasets.forEach((n, o)=>{
                const { _data: r, indexAxis: a } = n, l = i.getDatasetMeta(o), c = r || n.data;
                if (tt([
                    a,
                    i.options.indexAxis
                ]) === "y" || !l.controller.supportsDecimation) return;
                const h = i.scales[l.xAxisID];
                if (h.type !== "linear" && h.type !== "time" || i.options.parsing) return;
                let { start: d, count: u } = ow(l, c);
                const f = e.threshold || 4 * s;
                if (u <= f) {
                    Uf(n);
                    return;
                }
                N(r) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(_) {
                        this._data = _;
                    }
                }));
                let p;
                switch(e.algorithm){
                    case "lttb":
                        p = sw(c, d, u, s, e);
                        break;
                    case "min-max":
                        p = nw(c, d, u, s);
                        break;
                    default:
                        throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
                }
                n._decimated = p;
            });
        },
        destroy (i) {
            Xf(i);
        }
    };
    function rw(i, t, e) {
        const s = i.segments, n = i.points, o = t.points, r = [];
        for (const a of s){
            let { start: l, end: c } = a;
            c = El(l, c, n);
            const h = xl(e, n[l], n[c], a.loop);
            if (!t.segments) {
                r.push({
                    source: a,
                    target: h,
                    start: n[l],
                    end: n[c]
                });
                continue;
            }
            const d = Uu(t, h);
            for (const u of d){
                const f = xl(e, o[u.start], o[u.end], u.loop), p = Ku(a, n, f);
                for (const _ of p)r.push({
                    source: _,
                    target: u,
                    start: {
                        [e]: qf(h, f, "start", Math.max)
                    },
                    end: {
                        [e]: qf(h, f, "end", Math.min)
                    }
                });
            }
        }
        return r;
    }
    function xl(i, t, e, s) {
        if (s) return;
        let n = t[i], o = e[i];
        return i === "angle" && (n = Nt(n), o = Nt(o)), {
            property: i,
            start: n,
            end: o
        };
    }
    function aw(i, t) {
        const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
        return t.segments.forEach(({ start: r, end: a })=>{
            a = El(r, a, n);
            const l = n[r], c = n[a];
            s !== null ? (o.push({
                x: l.x,
                y: s
            }), o.push({
                x: c.x,
                y: s
            })) : e !== null && (o.push({
                x: e,
                y: l.y
            }), o.push({
                x: e,
                y: c.y
            }));
        }), o;
    }
    function El(i, t, e) {
        for(; t > i; t--){
            const s = e[t];
            if (!isNaN(s.x) && !isNaN(s.y)) break;
        }
        return t;
    }
    function qf(i, t, e, s) {
        return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
    }
    function Zf(i, t) {
        let e = [], s = !1;
        return Q(i) ? (s = !0, e = i) : e = aw(i, t), e.length ? new Se({
            points: e,
            options: {
                tension: 0
            },
            _loop: s,
            _fullLoop: s
        }) : null;
    }
    function Qf(i) {
        return i && i.fill !== !1;
    }
    function lw(i, t, e) {
        let n = i[t].fill;
        const o = [
            t
        ];
        let r;
        if (!e) return n;
        for(; n !== !1 && o.indexOf(n) === -1;){
            if (!rt(n)) return n;
            if (r = i[n], !r) return !1;
            if (r.visible) return n;
            o.push(n), n = r.fill;
        }
        return !1;
    }
    function cw(i, t, e) {
        const s = fw(i);
        if ($(s)) return isNaN(s.value) ? !1 : s;
        let n = parseFloat(s);
        return rt(n) && Math.floor(n) === n ? hw(s[0], t, n, e) : [
            "origin",
            "start",
            "end",
            "stack",
            "shape"
        ].indexOf(s) >= 0 && s;
    }
    function hw(i, t, e, s) {
        return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
    }
    function dw(i, t) {
        let e = null;
        return i === "start" ? e = t.bottom : i === "end" ? e = t.top : $(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
    }
    function uw(i, t, e) {
        let s;
        return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : $(i) ? s = i.value : s = t.getBaseValue(), s;
    }
    function fw(i) {
        const t = i.options, e = t.fill;
        let s = R(e && e.target, e);
        return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
    }
    function pw(i) {
        const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = _w(t, e);
        a.push(Zf({
            x: null,
            y: t.bottom
        }, s));
        for(let l = 0; l < o.length; l++){
            const c = o[l];
            for(let h = c.start; h <= c.end; h++)gw(n, r[h], a);
        }
        return new Se({
            points: n,
            options: {}
        });
    }
    function _w(i, t) {
        const e = [], s = i.getMatchingVisibleMetas("line");
        for(let n = 0; n < s.length; n++){
            const o = s[n];
            if (o.index === t) break;
            o.hidden || e.unshift(o.dataset);
        }
        return e;
    }
    function gw(i, t, e) {
        const s = [];
        for(let n = 0; n < e.length; n++){
            const o = e[n], { first: r, last: a, point: l } = mw(o, t, "x");
            if (!(!l || r && a)) {
                if (r) s.unshift(l);
                else if (i.push(l), !a) break;
            }
        }
        i.push(...s);
    }
    function mw(i, t, e) {
        const s = i.interpolate(t, e);
        if (!s) return {};
        const n = s[e], o = i.segments, r = i.points;
        let a = !1, l = !1;
        for(let c = 0; c < o.length; c++){
            const h = o[c], d = r[h.start][e], u = r[h.end][e];
            if (Ae(n, d, u)) {
                a = n === d, l = n === u;
                break;
            }
        }
        return {
            first: a,
            last: l,
            point: s
        };
    }
    class Jf {
        constructor(t){
            this.x = t.x, this.y = t.y, this.radius = t.radius;
        }
        pathSegment(t, e, s) {
            const { x: n, y: o, radius: r } = this;
            return e = e || {
                start: 0,
                end: q
            }, t.arc(n, o, r, e.end, e.start, !0), !s.bounds;
        }
        interpolate(t) {
            const { x: e, y: s, radius: n } = this, o = t.angle;
            return {
                x: e + Math.cos(o) * n,
                y: s + Math.sin(o) * n,
                angle: o
            };
        }
    }
    function bw(i) {
        const { chart: t, fill: e, line: s } = i;
        if (rt(e)) return vw(t, e);
        if (e === "stack") return pw(i);
        if (e === "shape") return !0;
        const n = yw(i);
        return n instanceof Jf ? n : Zf(n, s);
    }
    function vw(i, t) {
        const e = i.getDatasetMeta(t);
        return e && i.isDatasetVisible(t) ? e.dataset : null;
    }
    function yw(i) {
        return (i.scale || {}).getPointPositionForValue ? Ew(i) : xw(i);
    }
    function xw(i) {
        const { scale: t = {}, fill: e } = i, s = dw(e, t);
        if (rt(s)) {
            const n = t.isHorizontal();
            return {
                x: n ? s : null,
                y: n ? null : s
            };
        }
        return null;
    }
    function Ew(i) {
        const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = uw(e, t, o), a = [];
        if (s.grid.circular) {
            const l = t.getPointPositionForValue(0, o);
            return new Jf({
                x: l.x,
                y: l.y,
                radius: t.getDistanceFromCenterForValue(r)
            });
        }
        for(let l = 0; l < n; ++l)a.push(t.getPointPositionForValue(l, r));
        return a;
    }
    function Cl(i, t, e) {
        const s = bw(t), { line: n, scale: o, axis: r } = t, a = n.options, l = a.fill, c = a.backgroundColor, { above: h = c, below: d = c } = l || {};
        s && n.points.length && (Ko(i, e), Cw(i, {
            line: n,
            target: s,
            above: h,
            below: d,
            area: e,
            scale: o,
            axis: r
        }), Uo(i));
    }
    function Cw(i, t) {
        const { line: e, target: s, above: n, below: o, area: r, scale: a } = t, l = e._loop ? "angle" : t.axis;
        i.save(), l === "x" && o !== n && (tp(i, s, r.top), ep(i, {
            line: e,
            target: s,
            color: n,
            scale: a,
            property: l
        }), i.restore(), i.save(), tp(i, s, r.bottom)), ep(i, {
            line: e,
            target: s,
            color: o,
            scale: a,
            property: l
        }), i.restore();
    }
    function tp(i, t, e) {
        const { segments: s, points: n } = t;
        let o = !0, r = !1;
        i.beginPath();
        for (const a of s){
            const { start: l, end: c } = a, h = n[l], d = n[El(l, c, n)];
            o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
                move: r
            }), r ? i.closePath() : i.lineTo(d.x, e);
        }
        i.lineTo(t.first().x, e), i.closePath(), i.clip();
    }
    function ep(i, t) {
        const { line: e, target: s, property: n, color: o, scale: r } = t, a = rw(e, s, n);
        for (const { source: l, target: c, start: h, end: d } of a){
            const { style: { backgroundColor: u = o } = {} } = l, f = s !== !0;
            i.save(), i.fillStyle = u, Tw(i, r, f && xl(n, h, d)), i.beginPath();
            const p = !!e.pathSegment(i, l);
            let _;
            if (f) {
                p ? i.closePath() : ip(i, s, d, n);
                const m = !!s.pathSegment(i, c, {
                    move: p,
                    reverse: !0
                });
                _ = p && m, _ || ip(i, s, h, n);
            }
            i.closePath(), i.fill(_ ? "evenodd" : "nonzero"), i.restore();
        }
    }
    function Tw(i, t, e) {
        const { top: s, bottom: n } = t.chart.chartArea, { property: o, start: r, end: a } = e || {};
        o === "x" && (i.beginPath(), i.rect(r, s, a - r, n - s), i.clip());
    }
    function ip(i, t, e, s) {
        const n = t.interpolate(e, s);
        n && i.lineTo(n.x, n.y);
    }
    var sp = {
        id: "filler",
        afterDatasetsUpdate (i, t, e) {
            const s = (i.data.datasets || []).length, n = [];
            let o, r, a, l;
            for(r = 0; r < s; ++r)o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Se && (l = {
                visible: i.isDatasetVisible(r),
                index: r,
                fill: cw(a, r, s),
                chart: i,
                axis: o.controller.options.indexAxis,
                scale: o.vScale,
                line: a
            }), o.$filler = l, n.push(l);
            for(r = 0; r < s; ++r)l = n[r], !(!l || l.fill === !1) && (l.fill = lw(n, r, e.propagate));
        },
        beforeDraw (i, t, e) {
            const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
            for(let r = n.length - 1; r >= 0; --r){
                const a = n[r].$filler;
                a && (a.line.updateControlPoints(o, a.axis), s && a.fill && Cl(i.ctx, a, o));
            }
        },
        beforeDatasetsDraw (i, t, e) {
            if (e.drawTime !== "beforeDatasetsDraw") return;
            const s = i.getSortedVisibleDatasetMetas();
            for(let n = s.length - 1; n >= 0; --n){
                const o = s[n].$filler;
                Qf(o) && Cl(i.ctx, o, i.chartArea);
            }
        },
        beforeDatasetDraw (i, t, e) {
            const s = t.meta.$filler;
            !Qf(s) || e.drawTime !== "beforeDatasetDraw" || Cl(i.ctx, s, i.chartArea);
        },
        defaults: {
            propagate: !0,
            drawTime: "beforeDatasetDraw"
        }
    };
    const np = (i, t)=>{
        let { boxHeight: e = t, boxWidth: s = t } = i;
        return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
            boxWidth: s,
            boxHeight: e,
            itemHeight: Math.max(t, e)
        };
    }, Aw = (i, t)=>i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
    class op extends jt {
        constructor(t){
            super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
        }
        update(t, e, s) {
            this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
        }
        setDimensions() {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
        }
        buildLabels() {
            const t = this.options.labels || {};
            let e = G(t.generateLabels, [
                this.chart
            ], this) || [];
            t.filter && (e = e.filter((s)=>t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n)=>t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
        }
        fit() {
            const { options: t, ctx: e } = this;
            if (!t.display) {
                this.width = this.height = 0;
                return;
            }
            const s = t.labels, n = lt(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = np(s, o);
            let c, h;
            e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, o, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
        }
        _fitRows(t, e, s, n) {
            const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
                0
            ], h = n + a;
            let d = t;
            o.textAlign = "left", o.textBaseline = "middle";
            let u = -1, f = -h;
            return this.legendItems.forEach((p, _)=>{
                const m = s + e / 2 + o.measureText(p.text).width;
                (_ === 0 || c[c.length - 1] + m + 2 * a > r) && (d += h, c[c.length - (_ > 0 ? 0 : 1)] = 0, f += h, u++), l[_] = {
                    left: 0,
                    top: f,
                    row: u,
                    width: m,
                    height: n
                }, c[c.length - 1] += m + a;
            }), d;
        }
        _fitCols(t, e, s, n) {
            const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
            let d = a, u = 0, f = 0, p = 0, _ = 0;
            return this.legendItems.forEach((m, y)=>{
                const x = s + e / 2 + o.measureText(m.text).width;
                y > 0 && f + n + 2 * a > h && (d += u + a, c.push({
                    width: u,
                    height: f
                }), p += u + a, _++, u = f = 0), l[y] = {
                    left: p,
                    top: f,
                    col: _,
                    width: x,
                    height: n
                }, u = Math.max(u, x), f += n + a;
            }), d += u, c.push({
                width: u,
                height: f
            }), d;
        }
        adjustHitBoxes() {
            if (!this.options.display) return;
            const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = ds(o, this.left, this.width);
            if (this.isHorizontal()) {
                let a = 0, l = pt(s, this.left + n, this.right - this.lineWidths[a]);
                for (const c of e)a !== c.row && (a = c.row, l = pt(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
            } else {
                let a = 0, l = pt(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
                for (const c of e)c.col !== a && (a = c.col, l = pt(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
            }
        }
        isHorizontal() {
            return this.options.position === "top" || this.options.position === "bottom";
        }
        draw() {
            if (this.options.display) {
                const t = this.ctx;
                Ko(t, this), this._draw(), Uo(t);
            }
        }
        _draw() {
            const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = B.color, l = ds(t.rtl, this.left, this.width), c = lt(r.font), { color: h, padding: d } = r, u = c.size, f = u / 2;
            let p;
            this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = .5, n.font = c.string;
            const { boxWidth: _, boxHeight: m, itemHeight: y } = np(r, u), x = function(w, S, k) {
                if (isNaN(_) || _ <= 0 || isNaN(m) || m < 0) return;
                n.save();
                const D = R(k.lineWidth, 1);
                if (n.fillStyle = R(k.fillStyle, a), n.lineCap = R(k.lineCap, "butt"), n.lineDashOffset = R(k.lineDashOffset, 0), n.lineJoin = R(k.lineJoin, "miter"), n.lineWidth = D, n.strokeStyle = R(k.strokeStyle, a), n.setLineDash(R(k.lineDash, [])), r.usePointStyle) {
                    const O = {
                        radius: m * Math.SQRT2 / 2,
                        pointStyle: k.pointStyle,
                        rotation: k.rotation,
                        borderWidth: D
                    }, M = l.xPlus(w, _ / 2), L = S + f;
                    Su(n, O, M, L, r.pointStyleWidth && _);
                } else {
                    const O = S + Math.max((u - m) / 2, 0), M = l.leftForLtr(w, _), L = Ci(k.borderRadius);
                    n.beginPath(), Object.values(L).some((X)=>X !== 0) ? rn(n, {
                        x: M,
                        y: O,
                        w: _,
                        h: m,
                        radius: L
                    }) : n.rect(M, O, _, m), n.fill(), D !== 0 && n.stroke();
                }
                n.restore();
            }, E = function(w, S, k) {
                Ei(n, k.text, w, S + y / 2, c, {
                    strikethrough: k.hidden,
                    textAlign: l.textAlign(k.textAlign)
                });
            }, C = this.isHorizontal(), T = this._computeTitleHeight();
            C ? p = {
                x: pt(o, this.left + d, this.right - s[0]),
                y: this.top + d + T,
                line: 0
            } : p = {
                x: this.left + d,
                y: pt(o, this.top + T + d, this.bottom - e[0].height),
                line: 0
            }, Wu(this.ctx, t.textDirection);
            const A = y + d;
            this.legendItems.forEach((w, S)=>{
                n.strokeStyle = w.fontColor || h, n.fillStyle = w.fontColor || h;
                const k = n.measureText(w.text).width, D = l.textAlign(w.textAlign || (w.textAlign = r.textAlign)), O = _ + f + k;
                let M = p.x, L = p.y;
                l.setWidth(this.width), C ? S > 0 && M + O + d > this.right && (L = p.y += A, p.line++, M = p.x = pt(o, this.left + d, this.right - s[p.line])) : S > 0 && L + A > this.bottom && (M = p.x = M + e[p.line].width + d, p.line++, L = p.y = pt(o, this.top + T + d, this.bottom - e[p.line].height));
                const X = l.x(M);
                x(X, L, w), M = KE(D, M + _ + f, C ? M + O : this.right, t.rtl), E(l.x(M), L, w), C ? p.x += O + d : p.y += A;
            }), zu(this.ctx, t.textDirection);
        }
        drawTitle() {
            const t = this.options, e = t.title, s = lt(e.font), n = ht(e.padding);
            if (!e.display) return;
            const o = ds(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
            let h, d = this.left, u = this.width;
            if (this.isHorizontal()) u = Math.max(...this.lineWidths), h = this.top + c, d = pt(t.align, d, this.right - u);
            else {
                const p = this.columnSizes.reduce((_, m)=>Math.max(_, m.height), 0);
                h = c + pt(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
            }
            const f = pt(a, d, d + u);
            r.textAlign = o.textAlign(za(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, Ei(r, e.text, f, h, s);
        }
        _computeTitleHeight() {
            const t = this.options.title, e = lt(t.font), s = ht(t.padding);
            return t.display ? e.lineHeight + s.height : 0;
        }
        _getLegendItemAt(t, e) {
            let s, n, o;
            if (Ae(t, this.left, this.right) && Ae(e, this.top, this.bottom)) {
                for(o = this.legendHitBoxes, s = 0; s < o.length; ++s)if (n = o[s], Ae(t, n.left, n.left + n.width) && Ae(e, n.top, n.top + n.height)) return this.legendItems[s];
            }
            return null;
        }
        handleEvent(t) {
            const e = this.options;
            if (!ww(t.type, e)) return;
            const s = this._getLegendItemAt(t.x, t.y);
            if (t.type === "mousemove" || t.type === "mouseout") {
                const n = this._hoveredItem, o = Aw(n, s);
                n && !o && G(e.onLeave, [
                    t,
                    n,
                    this
                ], this), this._hoveredItem = s, s && !o && G(e.onHover, [
                    t,
                    s,
                    this
                ], this);
            } else s && G(e.onClick, [
                t,
                s,
                this
            ], this);
        }
    }
    function ww(i, t) {
        return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
    }
    var rp = {
        id: "legend",
        _element: op,
        start (i, t, e) {
            const s = i.legend = new op({
                ctx: i.ctx,
                options: e,
                chart: i
            });
            dt.configure(i, s, e), dt.addBox(i, s);
        },
        stop (i) {
            dt.removeBox(i, i.legend), delete i.legend;
        },
        beforeUpdate (i, t, e) {
            const s = i.legend;
            dt.configure(i, s, e), s.options = e;
        },
        afterUpdate (i) {
            const t = i.legend;
            t.buildLabels(), t.adjustHitBoxes();
        },
        afterEvent (i, t) {
            t.replay || i.legend.handleEvent(t.event);
        },
        defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick (i, t, e) {
                const s = t.datasetIndex, n = e.chart;
                n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: (i)=>i.chart.options.color,
                boxWidth: 40,
                padding: 10,
                generateLabels (i) {
                    const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o } } = i.legend.options;
                    return i._getSortedDatasetMetas().map((r)=>{
                        const a = r.controller.getStyle(e ? 0 : void 0), l = ht(a.borderWidth);
                        return {
                            text: t[r.index].label,
                            fillStyle: a.backgroundColor,
                            fontColor: o,
                            hidden: !r.visible,
                            lineCap: a.borderCapStyle,
                            lineDash: a.borderDash,
                            lineDashOffset: a.borderDashOffset,
                            lineJoin: a.borderJoinStyle,
                            lineWidth: (l.width + l.height) / 4,
                            strokeStyle: a.borderColor,
                            pointStyle: s || a.pointStyle,
                            rotation: a.rotation,
                            textAlign: n || a.textAlign,
                            borderRadius: 0,
                            datasetIndex: r.index
                        };
                    }, this);
                }
            },
            title: {
                color: (i)=>i.chart.options.color,
                display: !1,
                position: "center",
                text: ""
            }
        },
        descriptors: {
            _scriptable: (i)=>!i.startsWith("on"),
            labels: {
                _scriptable: (i)=>![
                        "generateLabels",
                        "filter",
                        "sort"
                    ].includes(i)
            }
        }
    };
    class Tl extends jt {
        constructor(t){
            super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
        }
        update(t, e) {
            const s = this.options;
            if (this.left = 0, this.top = 0, !s.display) {
                this.width = this.height = this.right = this.bottom = 0;
                return;
            }
            this.width = this.right = t, this.height = this.bottom = e;
            const n = Q(s.text) ? s.text.length : 1;
            this._padding = ht(s.padding);
            const o = n * lt(s.font).lineHeight + this._padding.height;
            this.isHorizontal() ? this.height = o : this.width = o;
        }
        isHorizontal() {
            const t = this.options.position;
            return t === "top" || t === "bottom";
        }
        _drawArgs(t) {
            const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
            let l = 0, c, h, d;
            return this.isHorizontal() ? (h = pt(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = pt(a, n, e), l = et * -0.5) : (h = o - t, d = pt(a, e, n), l = et * .5), c = n - e), {
                titleX: h,
                titleY: d,
                maxWidth: c,
                rotation: l
            };
        }
        draw() {
            const t = this.ctx, e = this.options;
            if (!e.display) return;
            const s = lt(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
            Ei(t, e.text, 0, 0, s, {
                color: e.color,
                maxWidth: l,
                rotation: c,
                textAlign: za(e.align),
                textBaseline: "middle",
                translation: [
                    r,
                    a
                ]
            });
        }
    }
    function kw(i, t) {
        const e = new Tl({
            ctx: i.ctx,
            options: t,
            chart: i
        });
        dt.configure(i, e, t), dt.addBox(i, e), i.titleBlock = e;
    }
    var ap = {
        id: "title",
        _element: Tl,
        start (i, t, e) {
            kw(i, e);
        },
        stop (i) {
            const t = i.titleBlock;
            dt.removeBox(i, t), delete i.titleBlock;
        },
        beforeUpdate (i, t, e) {
            const s = i.titleBlock;
            dt.configure(i, s, e), s.options = e;
        },
        defaults: {
            align: "center",
            display: !1,
            font: {
                weight: "bold"
            },
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        },
        defaultRoutes: {
            color: "color"
        },
        descriptors: {
            _scriptable: !0,
            _indexable: !1
        }
    };
    const or = new WeakMap;
    var lp = {
        id: "subtitle",
        start (i, t, e) {
            const s = new Tl({
                ctx: i.ctx,
                options: e,
                chart: i
            });
            dt.configure(i, s, e), dt.addBox(i, s), or.set(i, s);
        },
        stop (i) {
            dt.removeBox(i, or.get(i)), or.delete(i);
        },
        beforeUpdate (i, t, e) {
            const s = or.get(i);
            dt.configure(i, s, e), s.options = e;
        },
        defaults: {
            align: "center",
            display: !1,
            font: {
                weight: "normal"
            },
            fullSize: !0,
            padding: 0,
            position: "top",
            text: "",
            weight: 1500
        },
        defaultRoutes: {
            color: "color"
        },
        descriptors: {
            _scriptable: !0,
            _indexable: !1
        }
    };
    const Cn = {
        average (i) {
            if (!i.length) return !1;
            let t, e, s = 0, n = 0, o = 0;
            for(t = 0, e = i.length; t < e; ++t){
                const r = i[t].element;
                if (r && r.hasValue()) {
                    const a = r.tooltipPosition();
                    s += a.x, n += a.y, ++o;
                }
            }
            return {
                x: s / o,
                y: n / o
            };
        },
        nearest (i, t) {
            if (!i.length) return !1;
            let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, r, a;
            for(o = 0, r = i.length; o < r; ++o){
                const l = i[o].element;
                if (l && l.hasValue()) {
                    const c = l.getCenterPoint(), h = Va(t, c);
                    h < n && (n = h, a = l);
                }
            }
            if (a) {
                const l = a.tooltipPosition();
                e = l.x, s = l.y;
            }
            return {
                x: e,
                y: s
            };
        }
    };
    function ve(i, t) {
        return t && (Q(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
    }
    function Oe(i) {
        return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
    }
    function Sw(i, t) {
        const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(n);
        return {
            chart: i,
            label: r,
            parsed: o.getParsed(n),
            raw: i.data.datasets[s].data[n],
            formattedValue: a,
            dataset: o.getDataset(),
            dataIndex: n,
            datasetIndex: s,
            element: e
        };
    }
    function cp(i, t) {
        const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = lt(t.bodyFont), c = lt(t.titleFont), h = lt(t.footerFont), d = o.length, u = n.length, f = s.length, p = ht(t.padding);
        let _ = p.height, m = 0, y = s.reduce((C, T)=>C + T.before.length + T.lines.length + T.after.length, 0);
        if (y += i.beforeBody.length + i.afterBody.length, d && (_ += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), y) {
            const C = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
            _ += f * C + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing;
        }
        u && (_ += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
        let x = 0;
        const E = function(C) {
            m = Math.max(m, e.measureText(C).width + x);
        };
        return e.save(), e.font = c.string, U(i.title, E), e.font = l.string, U(i.beforeBody.concat(i.afterBody), E), x = t.displayColors ? r + 2 + t.boxPadding : 0, U(s, (C)=>{
            U(C.before, E), U(C.lines, E), U(C.after, E);
        }), x = 0, e.font = h.string, U(i.footer, E), e.restore(), m += p.width, {
            width: m,
            height: _
        };
    }
    function Ow(i, t) {
        const { y: e, height: s } = t;
        return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
    }
    function Dw(i, t, e, s) {
        const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
        if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0) return !0;
    }
    function Mw(i, t, e, s) {
        const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
        let c = "center";
        return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Dw(c, i, t, e) && (c = "center"), c;
    }
    function hp(i, t, e) {
        const s = e.yAlign || t.yAlign || Ow(i, e);
        return {
            xAlign: e.xAlign || t.xAlign || Mw(i, t, e, s),
            yAlign: s
        };
    }
    function Iw(i, t) {
        let { x: e, width: s } = i;
        return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
    }
    function Lw(i, t, e) {
        let { y: s, height: n } = i;
        return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
    }
    function dp(i, t, e, s) {
        const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = Ci(r);
        let p = Iw(t, a);
        const _ = Lw(t, l, c);
        return l === "center" ? a === "left" ? p += c : a === "right" && (p -= c) : a === "left" ? p -= Math.max(h, u) + n : a === "right" && (p += Math.max(d, f) + n), {
            x: ct(p, 0, s.width - t.width),
            y: ct(_, 0, s.height - t.height)
        };
    }
    function rr(i, t, e) {
        const s = ht(e.padding);
        return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
    }
    function up(i) {
        return ve([], Oe(i));
    }
    function Pw(i, t, e) {
        return qe(i, {
            tooltip: t,
            tooltipItems: e,
            type: "tooltip"
        });
    }
    function fp(i, t) {
        const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
        return e ? i.override(e) : i;
    }
    class Al extends jt {
        constructor(t){
            super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
        }
        initialize(t) {
            this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
        }
        _resolveAnimations() {
            const t = this._cachedAnimations;
            if (t) return t;
            const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new ol(this.chart, n);
            return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
        }
        getContext() {
            return this.$context || (this.$context = Pw(this.chart.getContext(), this, this._tooltipItems));
        }
        getTitle(t, e) {
            const { callbacks: s } = e, n = s.beforeTitle.apply(this, [
                t
            ]), o = s.title.apply(this, [
                t
            ]), r = s.afterTitle.apply(this, [
                t
            ]);
            let a = [];
            return a = ve(a, Oe(n)), a = ve(a, Oe(o)), a = ve(a, Oe(r)), a;
        }
        getBeforeBody(t, e) {
            return up(e.callbacks.beforeBody.apply(this, [
                t
            ]));
        }
        getBody(t, e) {
            const { callbacks: s } = e, n = [];
            return U(t, (o)=>{
                const r = {
                    before: [],
                    lines: [],
                    after: []
                }, a = fp(s, o);
                ve(r.before, Oe(a.beforeLabel.call(this, o))), ve(r.lines, a.label.call(this, o)), ve(r.after, Oe(a.afterLabel.call(this, o))), n.push(r);
            }), n;
        }
        getAfterBody(t, e) {
            return up(e.callbacks.afterBody.apply(this, [
                t
            ]));
        }
        getFooter(t, e) {
            const { callbacks: s } = e, n = s.beforeFooter.apply(this, [
                t
            ]), o = s.footer.apply(this, [
                t
            ]), r = s.afterFooter.apply(this, [
                t
            ]);
            let a = [];
            return a = ve(a, Oe(n)), a = ve(a, Oe(o)), a = ve(a, Oe(r)), a;
        }
        _createItems(t) {
            const e = this._active, s = this.chart.data, n = [], o = [], r = [];
            let a = [], l, c;
            for(l = 0, c = e.length; l < c; ++l)a.push(Sw(this.chart, e[l]));
            return t.filter && (a = a.filter((h, d, u)=>t.filter(h, d, u, s))), t.itemSort && (a = a.sort((h, d)=>t.itemSort(h, d, s))), U(a, (h)=>{
                const d = fp(t.callbacks, h);
                n.push(d.labelColor.call(this, h)), o.push(d.labelPointStyle.call(this, h)), r.push(d.labelTextColor.call(this, h));
            }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
        }
        update(t, e) {
            const s = this.options.setContext(this.getContext()), n = this._active;
            let o, r = [];
            if (!n.length) this.opacity !== 0 && (o = {
                opacity: 0
            });
            else {
                const a = Cn[s.position].call(this, n, this._eventPosition);
                r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
                const l = this._size = cp(this, s), c = Object.assign({}, a, l), h = hp(this.chart, s, c), d = dp(s, c, h, this.chart);
                this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
                    opacity: 1,
                    x: d.x,
                    y: d.y,
                    width: l.width,
                    height: l.height,
                    caretX: a.x,
                    caretY: a.y
                };
            }
            this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: e
            });
        }
        drawCaret(t, e, s, n) {
            const o = this.getCaretPosition(t, s, n);
            e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
        }
        getCaretPosition(t, e, s) {
            const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Ci(a), { x: u, y: f } = t, { width: p, height: _ } = e;
            let m, y, x, E, C, T;
            return o === "center" ? (C = f + _ / 2, n === "left" ? (m = u, y = m - r, E = C + r, T = C - r) : (m = u + p, y = m + r, E = C - r, T = C + r), x = m) : (n === "left" ? y = u + Math.max(l, h) + r : n === "right" ? y = u + p - Math.max(c, d) - r : y = this.caretX, o === "top" ? (E = f, C = E - r, m = y - r, x = y + r) : (E = f + _, C = E + r, m = y + r, x = y - r), T = E), {
                x1: m,
                x2: y,
                x3: x,
                y1: E,
                y2: C,
                y3: T
            };
        }
        drawTitle(t, e, s) {
            const n = this.title, o = n.length;
            let r, a, l;
            if (o) {
                const c = ds(s.rtl, this.x, this.width);
                for(t.x = rr(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = lt(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
            }
        }
        _drawColorBox(t, e, s, n, o) {
            const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c, boxPadding: h } = o, d = lt(o.bodyFont), u = rr(this, "left", o), f = n.x(u), p = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, _ = e.y + p;
            if (o.usePointStyle) {
                const m = {
                    radius: Math.min(c, l) / 2,
                    pointStyle: a.pointStyle,
                    rotation: a.rotation,
                    borderWidth: 1
                }, y = n.leftForLtr(f, c) + c / 2, x = _ + l / 2;
                t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Qa(t, m, y, x), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Qa(t, m, y, x);
            } else {
                t.lineWidth = $(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
                const m = n.leftForLtr(f, c - h), y = n.leftForLtr(n.xPlus(f, 1), c - h - 2), x = Ci(r.borderRadius);
                Object.values(x).some((E)=>E !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, rn(t, {
                    x: m,
                    y: _,
                    w: c,
                    h: l,
                    radius: x
                }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), rn(t, {
                    x: y,
                    y: _ + 1,
                    w: c - 2,
                    h: l - 2,
                    radius: x
                }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, _, c, l), t.strokeRect(m, _, c, l), t.fillStyle = r.backgroundColor, t.fillRect(y, _ + 1, c - 2, l - 2));
            }
            t.fillStyle = this.labelTextColors[s];
        }
        drawBody(t, e, s) {
            const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = lt(s.bodyFont);
            let u = d.lineHeight, f = 0;
            const p = ds(s.rtl, this.x, this.width), _ = function(S) {
                e.fillText(S, p.x(t.x + f), t.y + u / 2), t.y += u + o;
            }, m = p.textAlign(r);
            let y, x, E, C, T, A, w;
            for(e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = rr(this, m, s), e.fillStyle = s.bodyColor, U(this.beforeBody, _), f = a && m !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, C = 0, A = n.length; C < A; ++C){
                for(y = n[C], x = this.labelTextColors[C], e.fillStyle = x, U(y.before, _), E = y.lines, a && E.length && (this._drawColorBox(e, t, C, p, s), u = Math.max(d.lineHeight, l)), T = 0, w = E.length; T < w; ++T)_(E[T]), u = d.lineHeight;
                U(y.after, _);
            }
            f = 0, u = d.lineHeight, U(this.afterBody, _), t.y -= o;
        }
        drawFooter(t, e, s) {
            const n = this.footer, o = n.length;
            let r, a;
            if (o) {
                const l = ds(s.rtl, this.x, this.width);
                for(t.x = rr(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = lt(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
            }
        }
        drawBackground(t, e, s, n) {
            const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: p } = Ci(n.cornerRadius);
            e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - p), e.quadraticCurveTo(a + c, l + h, a + c - p, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
        }
        _updateAnimationTarget(t) {
            const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
            if (n || o) {
                const r = Cn[t.position].call(this, this._active, this._eventPosition);
                if (!r) return;
                const a = this._size = cp(this, t), l = Object.assign({}, r, this._size), c = hp(e, t, l), h = dp(t, l, c, e);
                (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
            }
        }
        _willRender() {
            return !!this.opacity;
        }
        draw(t) {
            const e = this.options.setContext(this.getContext());
            let s = this.opacity;
            if (!s) return;
            this._updateAnimationTarget(e);
            const n = {
                width: this.width,
                height: this.height
            }, o = {
                x: this.x,
                y: this.y
            };
            s = Math.abs(s) < .001 ? 0 : s;
            const r = ht(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Wu(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), zu(t, e.textDirection), t.restore());
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(t, e) {
            const s = this._active, n = t.map(({ datasetIndex: a, index: l })=>{
                const c = this.chart.getDatasetMeta(a);
                if (!c) throw new Error("Cannot find a dataset at index " + a);
                return {
                    datasetIndex: a,
                    element: c.data[l],
                    index: l
                };
            }), o = !$o(s, n), r = this._positionChanged(n, e);
            (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
        }
        handleEvent(t, e, s = !0) {
            if (e && this._ignoreReplayEvents) return !1;
            this._ignoreReplayEvents = !1;
            const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !$o(r, o) || a;
            return l && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
                x: t.x,
                y: t.y
            }, this.update(!0, e))), l;
        }
        _getActiveElements(t, e, s, n) {
            const o = this.options;
            if (t.type === "mouseout") return [];
            if (!n) return e;
            const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
            return o.reverse && r.reverse(), r;
        }
        _positionChanged(t, e) {
            const { caretX: s, caretY: n, options: o } = this, r = Cn[o.position].call(this, t, e);
            return r !== !1 && (s !== r.x || n !== r.y);
        }
    }
    Al.positioners = Cn;
    var pp = {
        id: "tooltip",
        _element: Al,
        positioners: Cn,
        afterInit (i, t, e) {
            e && (i.tooltip = new Al({
                chart: i,
                options: e
            }));
        },
        beforeUpdate (i, t, e) {
            i.tooltip && i.tooltip.initialize(e);
        },
        reset (i, t, e) {
            i.tooltip && i.tooltip.initialize(e);
        },
        afterDraw (i) {
            const t = i.tooltip;
            if (t && t._willRender()) {
                const e = {
                    tooltip: t
                };
                if (i.notifyPlugins("beforeTooltipDraw", e) === !1) return;
                t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
            }
        },
        afterEvent (i, t) {
            if (i.tooltip) {
                const e = t.replay;
                i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: {
                weight: "bold"
            },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: {
                weight: "bold"
            },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (i, t)=>t.bodyFont.size,
            boxWidth: (i, t)=>t.bodyFont.size,
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: {
                duration: 400,
                easing: "easeOutQuart"
            },
            animations: {
                numbers: {
                    type: "number",
                    properties: [
                        "x",
                        "y",
                        "width",
                        "height",
                        "caretX",
                        "caretY"
                    ]
                },
                opacity: {
                    easing: "linear",
                    duration: 200
                }
            },
            callbacks: {
                beforeTitle: Te,
                title (i) {
                    if (i.length > 0) {
                        const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
                        if (this && this.options && this.options.mode === "dataset") return t.dataset.label || "";
                        if (t.label) return t.label;
                        if (s > 0 && t.dataIndex < s) return e[t.dataIndex];
                    }
                    return "";
                },
                afterTitle: Te,
                beforeBody: Te,
                beforeLabel: Te,
                label (i) {
                    if (this && this.options && this.options.mode === "dataset") return i.label + ": " + i.formattedValue || i.formattedValue;
                    let t = i.dataset.label || "";
                    t && (t += ": ");
                    const e = i.formattedValue;
                    return N(e) || (t += e), t;
                },
                labelColor (i) {
                    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
                    return {
                        borderColor: e.borderColor,
                        backgroundColor: e.backgroundColor,
                        borderWidth: e.borderWidth,
                        borderDash: e.borderDash,
                        borderDashOffset: e.borderDashOffset,
                        borderRadius: 0
                    };
                },
                labelTextColor () {
                    return this.options.bodyColor;
                },
                labelPointStyle (i) {
                    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
                    return {
                        pointStyle: e.pointStyle,
                        rotation: e.rotation
                    };
                },
                afterLabel: Te,
                afterBody: Te,
                beforeFooter: Te,
                footer: Te,
                afterFooter: Te
            }
        },
        defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font"
        },
        descriptors: {
            _scriptable: (i)=>i !== "filter" && i !== "itemSort" && i !== "external",
            _indexable: !1,
            callbacks: {
                _scriptable: !1,
                _indexable: !1
            },
            animation: {
                _fallback: !1
            },
            animations: {
                _fallback: "animation"
            }
        },
        additionalOptionScopes: [
            "interaction"
        ]
    }, _p = Object.freeze({
        __proto__: null,
        Decimation: Gf,
        Filler: sp,
        Legend: rp,
        SubTitle: lp,
        Title: ap,
        Tooltip: pp
    });
    const Rw = (i, t, e, s)=>(typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
            index: e,
            label: t
        })) : isNaN(t) && (e = null), e);
    function Nw(i, t, e, s) {
        const n = i.indexOf(t);
        if (n === -1) return Rw(i, t, e, s);
        const o = i.lastIndexOf(t);
        return n !== o ? e : n;
    }
    const $w = (i, t)=>i === null ? null : ct(Math.round(i), 0, t);
    class Tn extends Ze {
        constructor(t){
            super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
        }
        init(t) {
            const e = this._addedLabels;
            if (e.length) {
                const s = this.getLabels();
                for (const { index: n, label: o } of e)s[n] === o && s.splice(n, 1);
                this._addedLabels = [];
            }
            super.init(t);
        }
        parse(t, e) {
            if (N(t)) return null;
            const s = this.getLabels();
            return e = isFinite(e) && s[e] === t ? e : Nw(s, t, R(e, t), this._addedLabels), $w(e, s.length - 1);
        }
        determineDataLimits() {
            const { minDefined: t, maxDefined: e } = this.getUserBounds();
            let { min: s, max: n } = this.getMinMax(!0);
            this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
        }
        buildTicks() {
            const t = this.min, e = this.max, s = this.options.offset, n = [];
            let o = this.getLabels();
            o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? .5 : 0);
            for(let r = t; r <= e; r++)n.push({
                value: r
            });
            return n;
        }
        getLabelForValue(t) {
            const e = this.getLabels();
            return t >= 0 && t < e.length ? e[t] : t;
        }
        configure() {
            super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(t) {
            return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
        }
        getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
        }
        getValueForPixel(t) {
            return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
        }
        getBasePixel() {
            return this.bottom;
        }
    }
    Tn.id = "category", Tn.defaults = {
        ticks: {
            callback: Tn.prototype.getLabelForValue
        }
    };
    function Bw(i, t) {
        const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = i, f = o || 1, p = h - 1, { min: _, max: m } = t, y = !N(r), x = !N(a), E = !N(c), C = (m - _) / (d + 1);
        let T = nu((m - _) / p / f) * f, A, w, S, k;
        if (T < 1e-14 && !y && !x) return [
            {
                value: _
            },
            {
                value: m
            }
        ];
        k = Math.ceil(m / T) - Math.floor(_ / T), k > p && (T = nu(k * T / p / f) * f), N(l) || (A = Math.pow(10, l), T = Math.ceil(T * A) / A), n === "ticks" ? (w = Math.floor(_ / T) * T, S = Math.ceil(m / T) * T) : (w = _, S = m), y && x && o && HE((a - r) / o, T / 1e3) ? (k = Math.round(Math.min((a - r) / T, h)), T = (a - r) / k, w = r, S = a) : E ? (w = y ? r : w, S = x ? a : S, k = c - 1, T = (S - w) / k) : (k = (S - w) / T, Qs(k, Math.round(k), T / 1e3) ? k = Math.round(k) : k = Math.ceil(k));
        const D = Math.max(ru(T), ru(w));
        A = Math.pow(10, N(l) ? D : l), w = Math.round(w * A) / A, S = Math.round(S * A) / A;
        let O = 0;
        for(y && (u && w !== r ? (e.push({
            value: r
        }), w < r && O++, Qs(Math.round((w + O * T) * A) / A, r, gp(r, C, i)) && O++) : w < r && O++); O < k; ++O)e.push({
            value: Math.round((w + O * T) * A) / A
        });
        return x && u && S !== a ? e.length && Qs(e[e.length - 1].value, a, gp(a, C, i)) ? e[e.length - 1].value = a : e.push({
            value: a
        }) : (!x || S === a) && e.push({
            value: S
        }), e;
    }
    function gp(i, t, { horizontal: e, minRotation: s }) {
        const n = Jt(s), o = (e ? Math.sin(n) : Math.cos(n)) || .001, r = .75 * t * ("" + i).length;
        return Math.min(t / o, r);
    }
    class ar extends Ze {
        constructor(t){
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
        }
        parse(t, e) {
            return N(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
        }
        handleTickRangeOptions() {
            const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
            let { min: n, max: o } = this;
            const r = (l)=>n = e ? n : l, a = (l)=>o = s ? o : l;
            if (t) {
                const l = me(n), c = me(o);
                l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
            }
            if (n === o) {
                let l = 1;
                (o >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) && (l = Math.abs(o * .05)), a(o + l), t || r(n - l);
            }
            this.min = n, this.max = o;
        }
        getTickLimit() {
            const t = this.options.ticks;
            let { maxTicksLimit: e, stepSize: s } = t, n;
            return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
            const t = this.options, e = t.ticks;
            let s = this.getTickLimit();
            s = Math.max(2, s);
            const n = {
                maxTicks: s,
                bounds: t.bounds,
                min: t.min,
                max: t.max,
                precision: e.precision,
                step: e.stepSize,
                count: e.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: e.minRotation || 0,
                includeBounds: e.includeBounds !== !1
            }, o = this._range || this, r = Bw(n, o);
            return t.bounds === "ticks" && ou(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
        }
        configure() {
            const t = this.ticks;
            let e = this.min, s = this.max;
            if (super.configure(), this.options.offset && t.length) {
                const n = (s - e) / Math.max(t.length - 1, 1) / 2;
                e -= n, s += n;
            }
            this._startValue = e, this._endValue = s, this._valueRange = s - e;
        }
        getLabelForValue(t) {
            return an(t, this.chart.options.locale, this.options.ticks.format);
        }
    }
    class lr extends ar {
        determineDataLimits() {
            const { min: t, max: e } = this.getMinMax(!0);
            this.min = rt(t) ? t : 0, this.max = rt(e) ? e : 1, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            const t = this.isHorizontal(), e = t ? this.width : this.height, s = Jt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || .001, o = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, o.lineHeight / n));
        }
        getPixelForValue(t) {
            return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
        }
        getValueForPixel(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
        }
    }
    lr.id = "linear", lr.defaults = {
        ticks: {
            callback: pn.formatters.numeric
        }
    };
    function mp(i) {
        return i / Math.pow(10, Math.floor(Vt(i))) === 1;
    }
    function Hw(i, t) {
        const e = Math.floor(Vt(t.max)), s = Math.ceil(t.max / Math.pow(10, e)), n = [];
        let o = Ht(i.min, Math.pow(10, Math.floor(Vt(t.min)))), r = Math.floor(Vt(o)), a = Math.floor(o / Math.pow(10, r)), l = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
        do n.push({
            value: o,
            major: mp(o)
        }), ++a, a === 10 && (a = 1, ++r, l = r >= 0 ? 1 : l), o = Math.round(a * Math.pow(10, r) * l) / l;
        while (r < e || r === e && a < s);
        const c = Ht(i.max, o);
        return n.push({
            value: c,
            major: mp(o)
        }), n;
    }
    class cr extends Ze {
        constructor(t){
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
        }
        parse(t, e) {
            const s = ar.prototype.parse.apply(this, [
                t,
                e
            ]);
            if (s === 0) {
                this._zero = !0;
                return;
            }
            return rt(s) && s > 0 ? s : null;
        }
        determineDataLimits() {
            const { min: t, max: e } = this.getMinMax(!0);
            this.min = rt(t) ? Math.max(0, t) : null, this.max = rt(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
            const { minDefined: t, maxDefined: e } = this.getUserBounds();
            let s = this.min, n = this.max;
            const o = (l)=>s = t ? s : l, r = (l)=>n = e ? n : l, a = (l, c)=>Math.pow(10, Math.floor(Vt(l)) + c);
            s === n && (s <= 0 ? (o(1), r(10)) : (o(a(s, -1)), r(a(n, 1)))), s <= 0 && o(a(n, -1)), n <= 0 && r(a(s, 1)), this._zero && this.min !== this._suggestedMin && s === a(this.min, 0) && o(a(s, -1)), this.min = s, this.max = n;
        }
        buildTicks() {
            const t = this.options, e = {
                min: this._userMin,
                max: this._userMax
            }, s = Hw(e, this);
            return t.bounds === "ticks" && ou(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
        }
        getLabelForValue(t) {
            return t === void 0 ? "0" : an(t, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
            const t = this.min;
            super.configure(), this._startValue = Vt(t), this._valueRange = Vt(this.max) - Vt(t);
        }
        getPixelForValue(t) {
            return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Vt(t) - this._startValue) / this._valueRange);
        }
        getValueForPixel(t) {
            const e = this.getDecimalForPixel(t);
            return Math.pow(10, this._startValue + e * this._valueRange);
        }
    }
    cr.id = "logarithmic", cr.defaults = {
        ticks: {
            callback: pn.formatters.logarithmic,
            major: {
                enabled: !0
            }
        }
    };
    function wl(i) {
        const t = i.ticks;
        if (t.display && i.display) {
            const e = ht(t.backdropPadding);
            return R(t.font && t.font.size, B.font.size) + e.height;
        }
        return 0;
    }
    function Fw(i, t, e) {
        return e = Q(e) ? e : [
            e
        ], {
            w: mC(i, t.string, e),
            h: e.length * t.lineHeight
        };
    }
    function bp(i, t, e, s, n) {
        return i === s || i === n ? {
            start: t - e / 2,
            end: t + e / 2
        } : i < s || i > n ? {
            start: t - e,
            end: t
        } : {
            start: t,
            end: t + e
        };
    }
    function Vw(i) {
        const t = {
            l: i.left + i._padding.left,
            r: i.right - i._padding.right,
            t: i.top + i._padding.top,
            b: i.bottom - i._padding.bottom
        }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? et / o : 0;
        for(let l = 0; l < o; l++){
            const c = r.setContext(i.getPointLabelContext(l));
            n[l] = c.padding;
            const h = i.getPointPosition(l, i.drawingArea + n[l], a), d = lt(c.font), u = Fw(i.ctx, d, i._pointLabels[l]);
            s[l] = u;
            const f = Nt(i.getIndexAngle(l) + a), p = Math.round(Fa(f)), _ = bp(p, h.x, u.w, 0, 180), m = bp(p, h.y, u.h, 90, 270);
            Ww(e, t, f, _, m);
        }
        i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = zw(i, s, n);
    }
    function Ww(i, t, e, s, n) {
        const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
        let a = 0, l = 0;
        s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
    }
    function zw(i, t, e) {
        const s = [], n = i._pointLabels.length, o = i.options, r = wl(o) / 2, a = i.drawingArea, l = o.pointLabels.centerPointLabels ? et / n : 0;
        for(let c = 0; c < n; c++){
            const h = i.getPointPosition(c, a + r + e[c], l), d = Math.round(Fa(Nt(h.angle + nt))), u = t[c], f = Kw(h.y, u.h, d), p = jw(d), _ = Yw(h.x, u.w, p);
            s.push({
                x: h.x,
                y: f,
                textAlign: p,
                left: _,
                top: f,
                right: _ + u.w,
                bottom: f + u.h
            });
        }
        return s;
    }
    function jw(i) {
        return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
    }
    function Yw(i, t, e) {
        return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
    }
    function Kw(i, t, e) {
        return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
    }
    function Uw(i, t) {
        const { ctx: e, options: { pointLabels: s } } = i;
        for(let n = t - 1; n >= 0; n--){
            const o = s.setContext(i.getPointLabelContext(n)), r = lt(o.font), { x: a, y: l, textAlign: c, left: h, top: d, right: u, bottom: f } = i._pointLabelItems[n], { backdropColor: p } = o;
            if (!N(p)) {
                const _ = Ci(o.borderRadius), m = ht(o.backdropPadding);
                e.fillStyle = p;
                const y = h - m.left, x = d - m.top, E = u - h + m.width, C = f - d + m.height;
                Object.values(_).some((T)=>T !== 0) ? (e.beginPath(), rn(e, {
                    x: y,
                    y: x,
                    w: E,
                    h: C,
                    radius: _
                }), e.fill()) : e.fillRect(y, x, E, C);
            }
            Ei(e, i._pointLabels[n], a, l + r.lineHeight / 2, r, {
                color: o.color,
                textAlign: c,
                textBaseline: "middle"
            });
        }
    }
    function vp(i, t, e, s) {
        const { ctx: n } = i;
        if (e) n.arc(i.xCenter, i.yCenter, t, 0, q);
        else {
            let o = i.getPointPosition(0, t);
            n.moveTo(o.x, o.y);
            for(let r = 1; r < s; r++)o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
        }
    }
    function Xw(i, t, e, s) {
        const n = i.ctx, o = t.circular, { color: r, lineWidth: a } = t;
        !o && !s || !r || !a || e < 0 || (n.save(), n.strokeStyle = r, n.lineWidth = a, n.setLineDash(t.borderDash), n.lineDashOffset = t.borderDashOffset, n.beginPath(), vp(i, e, o, s), n.closePath(), n.stroke(), n.restore());
    }
    function Gw(i, t, e) {
        return qe(i, {
            label: e,
            index: t,
            type: "pointLabel"
        });
    }
    class gs extends ar {
        constructor(t){
            super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
        }
        setDimensions() {
            const t = this._padding = ht(wl(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
            this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
        }
        determineDataLimits() {
            const { min: t, max: e } = this.getMinMax(!1);
            this.min = rt(t) && !isNaN(t) ? t : 0, this.max = rt(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
        }
        computeTickLimit() {
            return Math.ceil(this.drawingArea / wl(this.options));
        }
        generateTickLabels(t) {
            ar.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s)=>{
                const n = G(this.options.pointLabels.callback, [
                    e,
                    s
                ], this);
                return n || n === 0 ? n : "";
            }).filter((e, s)=>this.chart.getDataVisibility(s));
        }
        fit() {
            const t = this.options;
            t.display && t.pointLabels.display ? Vw(this) : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(t, e, s, n) {
            this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
        }
        getIndexAngle(t) {
            const e = q / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
            return Nt(t * e + Jt(s));
        }
        getDistanceFromCenterForValue(t) {
            if (N(t)) return NaN;
            const e = this.drawingArea / (this.max - this.min);
            return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
        }
        getValueForDistanceFromCenter(t) {
            if (N(t)) return NaN;
            const e = t / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - e : this.min + e;
        }
        getPointLabelContext(t) {
            const e = this._pointLabels || [];
            if (t >= 0 && t < e.length) {
                const s = e[t];
                return Gw(this.getContext(), t, s);
            }
        }
        getPointPosition(t, e, s = 0) {
            const n = this.getIndexAngle(t) - nt + s;
            return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter,
                angle: n
            };
        }
        getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
        }
        getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
        getPointLabelPosition(t) {
            const { left: e, top: s, right: n, bottom: o } = this._pointLabelItems[t];
            return {
                left: e,
                top: s,
                right: n,
                bottom: o
            };
        }
        drawBackground() {
            const { backgroundColor: t, grid: { circular: e } } = this.options;
            if (t) {
                const s = this.ctx;
                s.save(), s.beginPath(), vp(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
            }
        }
        drawGrid() {
            const t = this.ctx, e = this.options, { angleLines: s, grid: n } = e, o = this._pointLabels.length;
            let r, a, l;
            if (e.pointLabels.display && Uw(this, o), n.display && this.ticks.forEach((c, h)=>{
                if (h !== 0) {
                    a = this.getDistanceFromCenterForValue(c.value);
                    const d = n.setContext(this.getContext(h - 1));
                    Xw(this, d, a, o);
                }
            }), s.display) {
                for(t.save(), r = o - 1; r >= 0; r--){
                    const c = s.setContext(this.getPointLabelContext(r)), { color: h, lineWidth: d } = c;
                    !d || !h || (t.lineWidth = d, t.strokeStyle = h, t.setLineDash(c.borderDash), t.lineDashOffset = c.borderDashOffset, a = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(r, a), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
                }
                t.restore();
            }
        }
        drawBorder() {}
        drawLabels() {
            const t = this.ctx, e = this.options, s = e.ticks;
            if (!s.display) return;
            const n = this.getIndexAngle(0);
            let o, r;
            t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l)=>{
                if (l === 0 && !e.reverse) return;
                const c = s.setContext(this.getContext(l)), h = lt(c.font);
                if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
                    t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
                    const d = ht(c.backdropPadding);
                    t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
                }
                Ei(t, a.label, 0, -o, h, {
                    color: c.color
                });
            }), t.restore();
        }
        drawTitle() {}
    }
    gs.id = "radialLinear", gs.defaults = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0
        },
        grid: {
            circular: !1
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: !0,
            callback: pn.formatters.numeric
        },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: {
                size: 10
            },
            callback (i) {
                return i;
            },
            padding: 5,
            centerPointLabels: !1
        }
    }, gs.defaultRoutes = {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color"
    }, gs.descriptors = {
        angleLines: {
            _fallback: "grid"
        }
    };
    const hr = {
        millisecond: {
            common: !0,
            size: 1,
            steps: 1e3
        },
        second: {
            common: !0,
            size: 1e3,
            steps: 60
        },
        minute: {
            common: !0,
            size: 6e4,
            steps: 60
        },
        hour: {
            common: !0,
            size: 36e5,
            steps: 24
        },
        day: {
            common: !0,
            size: 864e5,
            steps: 30
        },
        week: {
            common: !1,
            size: 6048e5,
            steps: 4
        },
        month: {
            common: !0,
            size: 2628e6,
            steps: 12
        },
        quarter: {
            common: !1,
            size: 7884e6,
            steps: 4
        },
        year: {
            common: !0,
            size: 3154e7
        }
    }, kt = Object.keys(hr);
    function qw(i, t) {
        return i - t;
    }
    function yp(i, t) {
        if (N(t)) return null;
        const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
        let r = t;
        return typeof s == "function" && (r = s(r)), rt(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (as(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
    }
    function xp(i, t, e, s) {
        const n = kt.length;
        for(let o = kt.indexOf(i); o < n - 1; ++o){
            const r = hr[kt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
            if (r.common && Math.ceil((e - t) / (a * r.size)) <= s) return kt[o];
        }
        return kt[n - 1];
    }
    function Zw(i, t, e, s, n) {
        for(let o = kt.length - 1; o >= kt.indexOf(e); o--){
            const r = kt[o];
            if (hr[r].common && i._adapter.diff(n, s, r) >= t - 1) return r;
        }
        return kt[e ? kt.indexOf(e) : 0];
    }
    function Qw(i) {
        for(let t = kt.indexOf(i) + 1, e = kt.length; t < e; ++t)if (hr[kt[t]].common) return kt[t];
    }
    function Ep(i, t, e) {
        if (!e) i[t] = !0;
        else if (e.length) {
            const { lo: s, hi: n } = Wa(e, t), o = e[s] >= t ? e[s] : e[n];
            i[o] = !0;
        }
    }
    function Jw(i, t, e, s) {
        const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
        let a, l;
        for(a = o; a <= r; a = +n.add(a, 1, s))l = e[a], l >= 0 && (t[l].major = !0);
        return t;
    }
    function Cp(i, t, e) {
        const s = [], n = {}, o = t.length;
        let r, a;
        for(r = 0; r < o; ++r)a = t[r], n[a] = r, s.push({
            value: a,
            major: !1
        });
        return o === 0 || !e ? s : Jw(i, s, n, e);
    }
    class ms extends Ze {
        constructor(t){
            super(t), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
        }
        init(t, e) {
            const s = t.time || (t.time = {}), n = this._adapter = new _f._date(t.adapters.date);
            n.init(e), qs(s.displayFormats, n.formats()), this._parseOpts = {
                parser: s.parser,
                round: s.round,
                isoWeekday: s.isoWeekday
            }, super.init(t), this._normalized = e.normalized;
        }
        parse(t, e) {
            return t === void 0 ? null : yp(this, t);
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            };
        }
        determineDataLimits() {
            const t = this.options, e = this._adapter, s = t.time.unit || "day";
            let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
            function l(c) {
                !r && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
            }
            (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = rt(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = rt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
        }
        _getLabelBounds() {
            const t = this.getLabelTimestamps();
            let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
            return t.length && (e = t[0], s = t[t.length - 1]), {
                min: e,
                max: s
            };
        }
        buildTicks() {
            const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
            t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
            const o = this.min, r = this.max, a = zE(n, o, r);
            return this._unit = e.unit || (s.autoSkip ? xp(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Zw(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Qw(this._unit), this.initOffsets(n), t.reverse && a.reverse(), Cp(this, a, this._majorUnit);
        }
        afterAutoSkip() {
            this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t)=>+t.value));
        }
        initOffsets(t) {
            let e = 0, s = 0, n, o;
            this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
            const r = t.length < 3 ? .5 : .25;
            e = ct(e, 0, r), s = ct(s, 0, r), this._offsets = {
                start: e,
                end: s,
                factor: 1 / (e + 1 + s)
            };
        }
        _generate() {
            const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || xp(o.minUnit, e, s, this._getLabelCapacity(e)), a = R(o.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = as(l) || l === !0, h = {};
            let d = e, u, f;
            if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a) throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
            const p = n.ticks.source === "data" && this.getDataTimestamps();
            for(u = d, f = 0; u < s; u = +t.add(u, a, r), f++)Ep(h, u, p);
            return (u === s || n.bounds === "ticks" || f === 1) && Ep(h, u, p), Object.keys(h).sort((_, m)=>_ - m).map((_)=>+_);
        }
        getLabelForValue(t) {
            const e = this._adapter, s = this.options.time;
            return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
        }
        _tickFormatFunction(t, e, s, n) {
            const o = this.options, r = o.time.displayFormats, a = this._unit, l = this._majorUnit, c = a && r[a], h = l && r[l], d = s[e], u = l && h && d && d.major, f = this._adapter.format(t, n || (u ? h : c)), p = o.ticks.callback;
            return p ? G(p, [
                f,
                e,
                s
            ], this) : f;
        }
        generateTickLabels(t) {
            let e, s, n;
            for(e = 0, s = t.length; e < s; ++e)n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
        }
        getDecimalForValue(t) {
            return t === null ? NaN : (t - this.min) / (this.max - this.min);
        }
        getPixelForValue(t) {
            const e = this._offsets, s = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + s) * e.factor);
        }
        getValueForPixel(t) {
            const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
            return this.min + s * (this.max - this.min);
        }
        _getLabelSize(t) {
            const e = this.options.ticks, s = this.ctx.measureText(t).width, n = Jt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
            return {
                w: s * o + a * r,
                h: s * r + a * o
            };
        }
        _getLabelCapacity(t) {
            const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, Cp(this, [
                t
            ], this._majorUnit), n), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
            return a > 0 ? a : 1;
        }
        getDataTimestamps() {
            let t = this._cache.data || [], e, s;
            if (t.length) return t;
            const n = this.getMatchingVisibleMetas();
            if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
            for(e = 0, s = n.length; e < s; ++e)t = t.concat(n[e].controller.getAllParsedValues(this));
            return this._cache.data = this.normalize(t);
        }
        getLabelTimestamps() {
            const t = this._cache.labels || [];
            let e, s;
            if (t.length) return t;
            const n = this.getLabels();
            for(e = 0, s = n.length; e < s; ++e)t.push(yp(this, n[e]));
            return this._cache.labels = this._normalized ? t : this.normalize(t);
        }
        normalize(t) {
            return hu(t.sort(qw));
        }
    }
    ms.id = "time", ms.defaults = {
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            source: "auto",
            major: {
                enabled: !1
            }
        }
    };
    function dr(i, t, e) {
        let s = 0, n = i.length - 1, o, r, a, l;
        e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = we(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = we(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
        const c = r - o;
        return c ? a + (l - a) * (t - o) / c : a;
    }
    class ur extends ms {
        constructor(t){
            super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
        }
        initOffsets() {
            const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
            this._minPos = dr(e, this.min), this._tableRange = dr(e, this.max) - this._minPos, super.initOffsets(t);
        }
        buildLookupTable(t) {
            const { min: e, max: s } = this, n = [], o = [];
            let r, a, l, c, h;
            for(r = 0, a = t.length; r < a; ++r)c = t[r], c >= e && c <= s && n.push(c);
            if (n.length < 2) return [
                {
                    time: e,
                    pos: 0
                },
                {
                    time: s,
                    pos: 1
                }
            ];
            for(r = 0, a = n.length; r < a; ++r)h = n[r + 1], l = n[r - 1], c = n[r], Math.round((h + l) / 2) !== c && o.push({
                time: c,
                pos: r / (a - 1)
            });
            return o;
        }
        _getTimestampsForTable() {
            let t = this._cache.all || [];
            if (t.length) return t;
            const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
            return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
        }
        getDecimalForValue(t) {
            return (dr(this._table, t) - this._minPos) / this._tableRange;
        }
        getValueForPixel(t) {
            const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
            return dr(this._table, s * this._tableRange + this._minPos, !0);
        }
    }
    ur.id = "timeseries", ur.defaults = ms.defaults;
    var Tp = Object.freeze({
        __proto__: null,
        CategoryScale: Tn,
        LinearScale: lr,
        LogarithmicScale: cr,
        RadialLinearScale: gs,
        TimeScale: ms,
        TimeSeriesScale: ur
    });
    const tk = Object.freeze(Object.defineProperty({
        __proto__: null,
        Animation: Zu,
        Animations: ol,
        ArcElement: fs,
        BarController: cn,
        BarElement: _s,
        BasePlatform: ul,
        BasicPlatform: Cf,
        BubbleController: hn,
        CategoryScale: Tn,
        Chart: gl,
        DatasetController: zt,
        Decimation: Gf,
        DomPlatform: Sf,
        DoughnutController: ki,
        Element: jt,
        Filler: sp,
        Interaction: mf,
        Legend: rp,
        LineController: dn,
        LineElement: Se,
        LinearScale: lr,
        LogarithmicScale: cr,
        PieController: Zo,
        PointElement: ps,
        PolarAreaController: un,
        RadarController: fn,
        RadialLinearScale: gs,
        Scale: Ze,
        ScatterController: gn,
        SubTitle: lp,
        Ticks: pn,
        TimeScale: ms,
        TimeSeriesScale: ur,
        Title: ap,
        Tooltip: pp,
        _adapters: _f,
        _detectPlatform: Of,
        animator: be,
        controllers: pf,
        defaults: B,
        elements: Kf,
        layouts: dt,
        plugins: _p,
        registerables: [
            pf,
            Kf,
            _p,
            Tp
        ],
        registry: te,
        scales: Tp
    }, Symbol.toStringTag, {
        value: "Module"
    })); /*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */ 
    var Ap = function() {
        if (typeof window < "u") {
            if (window.devicePixelRatio) return window.devicePixelRatio;
            var i = window.screen;
            if (i) return (i.deviceXDPI || 1) / (i.logicalXDPI || 1);
        }
        return 1;
    }(), An = {
        toTextLines: function(i) {
            var t = [], e;
            for(i = [].concat(i); i.length;)e = i.pop(), typeof e == "string" ? t.unshift.apply(t, e.split(`
`)) : Array.isArray(e) ? i.push.apply(i, e) : N(i) || t.unshift("" + e);
            return t;
        },
        textSize: function(i, t, e) {
            var s = [].concat(t), n = s.length, o = i.font, r = 0, a;
            for(i.font = e.string, a = 0; a < n; ++a)r = Math.max(i.measureText(s[a]).width, r);
            return i.font = o, {
                height: n * e.lineHeight,
                width: r
            };
        },
        bound: function(i, t, e) {
            return Math.max(i, Math.min(t, e));
        },
        arrayDiff: function(i, t) {
            var e = i.slice(), s = [], n, o, r, a;
            for(n = 0, r = t.length; n < r; ++n)a = t[n], o = e.indexOf(a), o === -1 ? s.push([
                a,
                1
            ]) : e.splice(o, 1);
            for(n = 0, r = e.length; n < r; ++n)s.push([
                e[n],
                -1
            ]);
            return s;
        },
        rasterize: function(i) {
            return Math.round(i * Ap) / Ap;
        }
    };
    function kl(i, t) {
        var e = t.x, s = t.y;
        if (e === null) return {
            x: 0,
            y: -1
        };
        if (s === null) return {
            x: 1,
            y: 0
        };
        var n = i.x - e, o = i.y - s, r = Math.sqrt(n * n + o * o);
        return {
            x: r ? n / r : 0,
            y: r ? o / r : -1
        };
    }
    function ek(i, t, e, s, n) {
        switch(n){
            case "center":
                e = s = 0;
                break;
            case "bottom":
                e = 0, s = 1;
                break;
            case "right":
                e = 1, s = 0;
                break;
            case "left":
                e = -1, s = 0;
                break;
            case "top":
                e = 0, s = -1;
                break;
            case "start":
                e = -e, s = -s;
                break;
            case "end":
                break;
            default:
                n *= Math.PI / 180, e = Math.cos(n), s = Math.sin(n);
                break;
        }
        return {
            x: i,
            y: t,
            vx: e,
            vy: s
        };
    }
    var ik = 0, wp = 1, kp = 2, Sp = 4, Op = 8;
    function fr(i, t, e) {
        var s = ik;
        return i < e.left ? s |= wp : i > e.right && (s |= kp), t < e.top ? s |= Op : t > e.bottom && (s |= Sp), s;
    }
    function sk(i, t) {
        for(var e = i.x0, s = i.y0, n = i.x1, o = i.y1, r = fr(e, s, t), a = fr(n, o, t), l, c, h; !(!(r | a) || r & a);)l = r || a, l & Op ? (c = e + (n - e) * (t.top - s) / (o - s), h = t.top) : l & Sp ? (c = e + (n - e) * (t.bottom - s) / (o - s), h = t.bottom) : l & kp ? (h = s + (o - s) * (t.right - e) / (n - e), c = t.right) : l & wp && (h = s + (o - s) * (t.left - e) / (n - e), c = t.left), l === r ? (e = c, s = h, r = fr(e, s, t)) : (n = c, o = h, a = fr(n, o, t));
        return {
            x0: e,
            x1: n,
            y0: s,
            y1: o
        };
    }
    function pr(i, t) {
        var e = t.anchor, s = i, n, o;
        return t.clamp && (s = sk(s, t.area)), e === "start" ? (n = s.x0, o = s.y0) : e === "end" ? (n = s.x1, o = s.y1) : (n = (s.x0 + s.x1) / 2, o = (s.y0 + s.y1) / 2), ek(n, o, i.vx, i.vy, t.align);
    }
    var _r = {
        arc: function(i, t) {
            var e = (i.startAngle + i.endAngle) / 2, s = Math.cos(e), n = Math.sin(e), o = i.innerRadius, r = i.outerRadius;
            return pr({
                x0: i.x + s * o,
                y0: i.y + n * o,
                x1: i.x + s * r,
                y1: i.y + n * r,
                vx: s,
                vy: n
            }, t);
        },
        point: function(i, t) {
            var e = kl(i, t.origin), s = e.x * i.options.radius, n = e.y * i.options.radius;
            return pr({
                x0: i.x - s,
                y0: i.y - n,
                x1: i.x + s,
                y1: i.y + n,
                vx: e.x,
                vy: e.y
            }, t);
        },
        bar: function(i, t) {
            var e = kl(i, t.origin), s = i.x, n = i.y, o = 0, r = 0;
            return i.horizontal ? (s = Math.min(i.x, i.base), o = Math.abs(i.base - i.x)) : (n = Math.min(i.y, i.base), r = Math.abs(i.base - i.y)), pr({
                x0: s,
                y0: n + r,
                x1: s + o,
                y1: n,
                vx: e.x,
                vy: e.y
            }, t);
        },
        fallback: function(i, t) {
            var e = kl(i, t.origin);
            return pr({
                x0: i.x,
                y0: i.y,
                x1: i.x + (i.width || 0),
                y1: i.y + (i.height || 0),
                vx: e.x,
                vy: e.y
            }, t);
        }
    }, De = An.rasterize;
    function nk(i) {
        var t = i.borderWidth || 0, e = i.padding, s = i.size.height, n = i.size.width, o = -n / 2, r = -s / 2;
        return {
            frame: {
                x: o - e.left - t,
                y: r - e.top - t,
                w: n + e.width + t * 2,
                h: s + e.height + t * 2
            },
            text: {
                x: o,
                y: r,
                w: n,
                h: s
            }
        };
    }
    function ok(i, t) {
        var e = t.chart.getDatasetMeta(t.datasetIndex).vScale;
        if (!e) return null;
        if (e.xCenter !== void 0 && e.yCenter !== void 0) return {
            x: e.xCenter,
            y: e.yCenter
        };
        var s = e.getBasePixel();
        return i.horizontal ? {
            x: s,
            y: null
        } : {
            x: null,
            y: s
        };
    }
    function rk(i) {
        return i instanceof fs ? _r.arc : i instanceof ps ? _r.point : i instanceof _s ? _r.bar : _r.fallback;
    }
    function ak(i, t, e, s, n, o) {
        var r = Math.PI / 2;
        if (o) {
            var a = Math.min(o, n / 2, s / 2), l = t + a, c = e + a, h = t + s - a, d = e + n - a;
            i.moveTo(t, c), l < h && c < d ? (i.arc(l, c, a, -Math.PI, -r), i.arc(h, c, a, -r, 0), i.arc(h, d, a, 0, r), i.arc(l, d, a, r, Math.PI)) : l < h ? (i.moveTo(l, e), i.arc(h, c, a, -r, r), i.arc(l, c, a, r, Math.PI + r)) : c < d ? (i.arc(l, c, a, -Math.PI, 0), i.arc(l, d, a, 0, Math.PI)) : i.arc(l, c, a, -Math.PI, Math.PI), i.closePath(), i.moveTo(t, e);
        } else i.rect(t, e, s, n);
    }
    function lk(i, t, e) {
        var s = e.backgroundColor, n = e.borderColor, o = e.borderWidth;
        !s && (!n || !o) || (i.beginPath(), ak(i, De(t.x) + o / 2, De(t.y) + o / 2, De(t.w) - o, De(t.h) - o, e.borderRadius), i.closePath(), s && (i.fillStyle = s, i.fill()), n && o && (i.strokeStyle = n, i.lineWidth = o, i.lineJoin = "miter", i.stroke()));
    }
    function ck(i, t, e) {
        var s = e.lineHeight, n = i.w, o = i.x, r = i.y + s / 2;
        return t === "center" ? o += n / 2 : (t === "end" || t === "right") && (o += n), {
            h: s,
            w: n,
            x: o,
            y: r
        };
    }
    function hk(i, t, e) {
        var s = i.shadowBlur, n = e.stroked, o = De(e.x), r = De(e.y), a = De(e.w);
        n && i.strokeText(t, o, r, a), e.filled && (s && n && (i.shadowBlur = 0), i.fillText(t, o, r, a), s && n && (i.shadowBlur = s));
    }
    function dk(i, t, e, s) {
        var n = s.textAlign, o = s.color, r = !!o, a = s.font, l = t.length, c = s.textStrokeColor, h = s.textStrokeWidth, d = c && h, u;
        if (!(!l || !r && !d)) for(e = ck(e, n, a), i.font = a.string, i.textAlign = n, i.textBaseline = "middle", i.shadowBlur = s.textShadowBlur, i.shadowColor = s.textShadowColor, r && (i.fillStyle = o), d && (i.lineJoin = "round", i.lineWidth = h, i.strokeStyle = c), u = 0, l = t.length; u < l; ++u)hk(i, t[u], {
            stroked: d,
            filled: r,
            w: e.w,
            x: e.x,
            y: e.y + e.h * u
        });
    }
    var Dp = function(i, t, e, s) {
        var n = this;
        n._config = i, n._index = s, n._model = null, n._rects = null, n._ctx = t, n._el = e;
    };
    ge(Dp.prototype, {
        _modelize: function(i, t, e, s) {
            var n = this, o = n._index, r = lt(tt([
                e.font,
                {}
            ], s, o)), a = tt([
                e.color,
                B.color
            ], s, o);
            return {
                align: tt([
                    e.align,
                    "center"
                ], s, o),
                anchor: tt([
                    e.anchor,
                    "center"
                ], s, o),
                area: s.chart.chartArea,
                backgroundColor: tt([
                    e.backgroundColor,
                    null
                ], s, o),
                borderColor: tt([
                    e.borderColor,
                    null
                ], s, o),
                borderRadius: tt([
                    e.borderRadius,
                    0
                ], s, o),
                borderWidth: tt([
                    e.borderWidth,
                    0
                ], s, o),
                clamp: tt([
                    e.clamp,
                    !1
                ], s, o),
                clip: tt([
                    e.clip,
                    !1
                ], s, o),
                color: a,
                display: i,
                font: r,
                lines: t,
                offset: tt([
                    e.offset,
                    4
                ], s, o),
                opacity: tt([
                    e.opacity,
                    1
                ], s, o),
                origin: ok(n._el, s),
                padding: ht(tt([
                    e.padding,
                    4
                ], s, o)),
                positioner: rk(n._el),
                rotation: tt([
                    e.rotation,
                    0
                ], s, o) * (Math.PI / 180),
                size: An.textSize(n._ctx, t, r),
                textAlign: tt([
                    e.textAlign,
                    "start"
                ], s, o),
                textShadowBlur: tt([
                    e.textShadowBlur,
                    0
                ], s, o),
                textShadowColor: tt([
                    e.textShadowColor,
                    a
                ], s, o),
                textStrokeColor: tt([
                    e.textStrokeColor,
                    a
                ], s, o),
                textStrokeWidth: tt([
                    e.textStrokeWidth,
                    0
                ], s, o)
            };
        },
        update: function(i) {
            var t = this, e = null, s = null, n = t._index, o = t._config, r, a, l, c = tt([
                o.display,
                !0
            ], i, n);
            c && (r = i.dataset.data[n], a = R(G(o.formatter, [
                r,
                i
            ]), r), l = N(a) ? [] : An.toTextLines(a), l.length && (e = t._modelize(c, l, o, i), s = nk(e))), t._model = e, t._rects = s;
        },
        geometry: function() {
            return this._rects ? this._rects.frame : {};
        },
        rotation: function() {
            return this._model ? this._model.rotation : 0;
        },
        visible: function() {
            return this._model && this._model.opacity;
        },
        model: function() {
            return this._model;
        },
        draw: function(i, t) {
            var e = this, s = i.ctx, n = e._model, o = e._rects, r;
            this.visible() && (s.save(), n.clip && (r = n.area, s.beginPath(), s.rect(r.left, r.top, r.right - r.left, r.bottom - r.top), s.clip()), s.globalAlpha = An.bound(0, n.opacity, 1), s.translate(De(t.x), De(t.y)), s.rotate(n.rotation), lk(s, o.frame, n), dk(s, n.lines, o.text, n), s.restore());
        }
    });
    var uk = Number.MIN_SAFE_INTEGER || -9007199254740991, fk = Number.MAX_SAFE_INTEGER || 9007199254740991;
    function wn(i, t, e) {
        var s = Math.cos(e), n = Math.sin(e), o = t.x, r = t.y;
        return {
            x: o + s * (i.x - o) - n * (i.y - r),
            y: r + n * (i.x - o) + s * (i.y - r)
        };
    }
    function Mp(i, t) {
        var e = fk, s = uk, n = t.origin, o, r, a, l, c;
        for(o = 0; o < i.length; ++o)r = i[o], a = r.x - n.x, l = r.y - n.y, c = t.vx * a + t.vy * l, e = Math.min(e, c), s = Math.max(s, c);
        return {
            min: e,
            max: s
        };
    }
    function gr(i, t) {
        var e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
        return {
            vx: (t.x - i.x) / n,
            vy: (t.y - i.y) / n,
            origin: i,
            ln: n
        };
    }
    var Ip = function() {
        this._rotation = 0, this._rect = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
    };
    ge(Ip.prototype, {
        center: function() {
            var i = this._rect;
            return {
                x: i.x + i.w / 2,
                y: i.y + i.h / 2
            };
        },
        update: function(i, t, e) {
            this._rotation = e, this._rect = {
                x: t.x + i.x,
                y: t.y + i.y,
                w: t.w,
                h: t.h
            };
        },
        contains: function(i) {
            var t = this, e = 1, s = t._rect;
            return i = wn(i, t.center(), -t._rotation), !(i.x < s.x - e || i.y < s.y - e || i.x > s.x + s.w + e * 2 || i.y > s.y + s.h + e * 2);
        },
        intersects: function(i) {
            var t = this._points(), e = i._points(), s = [
                gr(t[0], t[1]),
                gr(t[0], t[3])
            ], n, o, r;
            for(this._rotation !== i._rotation && s.push(gr(e[0], e[1]), gr(e[0], e[3])), n = 0; n < s.length; ++n)if (o = Mp(t, s[n]), r = Mp(e, s[n]), o.max < r.min || r.max < o.min) return !1;
            return !0;
        },
        _points: function() {
            var i = this, t = i._rect, e = i._rotation, s = i.center();
            return [
                wn({
                    x: t.x,
                    y: t.y
                }, s, e),
                wn({
                    x: t.x + t.w,
                    y: t.y
                }, s, e),
                wn({
                    x: t.x + t.w,
                    y: t.y + t.h
                }, s, e),
                wn({
                    x: t.x,
                    y: t.y + t.h
                }, s, e)
            ];
        }
    });
    function Lp(i, t, e) {
        var s = t.positioner(i, t), n = s.vx, o = s.vy;
        if (!n && !o) return {
            x: s.x,
            y: s.y
        };
        var r = e.w, a = e.h, l = t.rotation, c = Math.abs(r / 2 * Math.cos(l)) + Math.abs(a / 2 * Math.sin(l)), h = Math.abs(r / 2 * Math.sin(l)) + Math.abs(a / 2 * Math.cos(l)), d = 1 / Math.max(Math.abs(n), Math.abs(o));
        return c *= n * d, h *= o * d, c += t.offset * n, h += t.offset * o, {
            x: s.x + c,
            y: s.y + h
        };
    }
    function pk(i, t) {
        var e, s, n, o;
        for(e = i.length - 1; e >= 0; --e)for(n = i[e].$layout, s = e - 1; s >= 0 && n._visible; --s)o = i[s].$layout, o._visible && n._box.intersects(o._box) && t(n, o);
        return i;
    }
    function _k(i) {
        var t, e, s, n, o, r, a;
        for(t = 0, e = i.length; t < e; ++t)s = i[t], n = s.$layout, n._visible && (a = new Proxy(s._el, {
            get: (l, c)=>l.getProps([
                    c
                ], !0)[c]
        }), o = s.geometry(), r = Lp(a, s.model(), o), n._box.update(r, o, s.rotation()));
        return pk(i, function(l, c) {
            var h = l._hidable, d = c._hidable;
            h && d || d ? c._visible = !1 : h && (l._visible = !1);
        });
    }
    var kn = {
        prepare: function(i) {
            var t = [], e, s, n, o, r;
            for(e = 0, n = i.length; e < n; ++e)for(s = 0, o = i[e].length; s < o; ++s)r = i[e][s], t.push(r), r.$layout = {
                _box: new Ip,
                _hidable: !1,
                _visible: !0,
                _set: e,
                _idx: r._index
            };
            return t.sort(function(a, l) {
                var c = a.$layout, h = l.$layout;
                return c._idx === h._idx ? h._set - c._set : h._idx - c._idx;
            }), this.update(t), t;
        },
        update: function(i) {
            var t = !1, e, s, n, o, r;
            for(e = 0, s = i.length; e < s; ++e)n = i[e], o = n.model(), r = n.$layout, r._hidable = o && o.display === "auto", r._visible = n.visible(), t |= r._hidable;
            t && _k(i);
        },
        lookup: function(i, t) {
            var e, s;
            for(e = i.length - 1; e >= 0; --e)if (s = i[e].$layout, s && s._visible && s._box.contains(t)) return i[e];
            return null;
        },
        draw: function(i, t) {
            var e, s, n, o, r, a;
            for(e = 0, s = t.length; e < s; ++e)n = t[e], o = n.$layout, o._visible && (r = n.geometry(), a = Lp(n._el, n.model(), r), o._box.update(a, r, n.rotation()), n.draw(i, a));
        }
    }, gk = function(i) {
        if (N(i)) return null;
        var t = i, e, s, n;
        if ($(i)) {
            if (!N(i.label)) t = i.label;
            else if (!N(i.r)) t = i.r;
            else for(t = "", e = Object.keys(i), n = 0, s = e.length; n < s; ++n)t += (n !== 0 ? ", " : "") + e[n] + ": " + i[e[n]];
        }
        return "" + t;
    }, mk = {
        align: "center",
        anchor: "center",
        backgroundColor: null,
        borderColor: null,
        borderRadius: 0,
        borderWidth: 0,
        clamp: !1,
        clip: !1,
        color: void 0,
        display: !0,
        font: {
            family: void 0,
            lineHeight: 1.2,
            size: void 0,
            style: void 0,
            weight: null
        },
        formatter: gk,
        labels: void 0,
        listeners: {},
        offset: 4,
        opacity: 1,
        padding: {
            top: 4,
            right: 4,
            bottom: 4,
            left: 4
        },
        rotation: 0,
        textAlign: "start",
        textStrokeColor: void 0,
        textStrokeWidth: 0,
        textShadowBlur: 0,
        textShadowColor: void 0
    }, St = "$datalabels", Pp = "$default";
    function bk(i, t) {
        var e = i.datalabels, s = {}, n = [], o, r;
        return e === !1 ? null : (e === !0 && (e = {}), t = ge({}, [
            t,
            e
        ]), o = t.labels || {}, r = Object.keys(o), delete t.labels, r.length ? r.forEach(function(a) {
            o[a] && n.push(ge({}, [
                t,
                o[a],
                {
                    _key: a
                }
            ]));
        }) : n.push(t), s = n.reduce(function(a, l) {
            return U(l.listeners || {}, function(c, h) {
                a[h] = a[h] || {}, a[h][l._key || Pp] = c;
            }), delete l.listeners, a;
        }, {}), {
            labels: n,
            listeners: s
        });
    }
    function Sl(i, t, e, s) {
        if (t) {
            var n = e.$context, o = e.$groups, r;
            t[o._set] && (r = t[o._set][o._key], r && G(r, [
                n,
                s
            ]) === !0 && (i[St]._dirty = !0, e.update(n)));
        }
    }
    function vk(i, t, e, s, n) {
        var o, r;
        !e && !s || (e ? s ? e !== s && (r = o = !0) : r = !0 : o = !0, r && Sl(i, t.leave, e, n), o && Sl(i, t.enter, s, n));
    }
    function yk(i, t) {
        var e = i[St], s = e._listeners, n, o;
        if (!(!s.enter && !s.leave)) {
            if (t.type === "mousemove") o = kn.lookup(e._labels, t);
            else if (t.type !== "mouseout") return;
            n = e._hovered, e._hovered = o, vk(i, s, n, o, t);
        }
    }
    function xk(i, t) {
        var e = i[St], s = e._listeners.click, n = s && kn.lookup(e._labels, t);
        n && Sl(i, s, n, t);
    }
    var Ek = {
        id: "datalabels",
        defaults: mk,
        beforeInit: function(i) {
            i[St] = {
                _actives: []
            };
        },
        beforeUpdate: function(i) {
            var t = i[St];
            t._listened = !1, t._listeners = {}, t._datasets = [], t._labels = [];
        },
        afterDatasetUpdate: function(i, t, e) {
            var s = t.index, n = i[St], o = n._datasets[s] = [], r = i.isDatasetVisible(s), a = i.data.datasets[s], l = bk(a, e), c = t.meta.data || [], h = i.ctx, d, u, f, p, _, m, y, x;
            for(h.save(), d = 0, f = c.length; d < f; ++d)if (y = c[d], y[St] = [], r && y && i.getDataVisibility(d) && !y.skip) for(u = 0, p = l.labels.length; u < p; ++u)_ = l.labels[u], m = _._key, x = new Dp(_, h, y, d), x.$groups = {
                _set: s,
                _key: m || Pp
            }, x.$context = {
                active: !1,
                chart: i,
                dataIndex: d,
                dataset: a,
                datasetIndex: s
            }, x.update(x.$context), y[St].push(x), o.push(x);
            h.restore(), ge(n._listeners, l.listeners, {
                merger: function(E, C, T) {
                    C[E] = C[E] || {}, C[E][t.index] = T[E], n._listened = !0;
                }
            });
        },
        afterUpdate: function(i) {
            i[St]._labels = kn.prepare(i[St]._datasets);
        },
        afterDatasetsDraw: function(i) {
            kn.draw(i, i[St]._labels);
        },
        beforeEvent: function(i, t) {
            if (i[St]._listened) {
                var e = t.event;
                switch(e.type){
                    case "mousemove":
                    case "mouseout":
                        yk(i, e);
                        break;
                    case "click":
                        xk(i, e);
                        break;
                }
            }
        },
        afterEvent: function(i) {
            var t = i[St], e = t._actives, s = t._actives = i.getActiveElements(), n = An.arrayDiff(e, s), o, r, a, l, c, h, d;
            for(o = 0, r = n.length; o < r; ++o)if (c = n[o], c[1]) for(d = c[0].element[St] || [], a = 0, l = d.length; a < l; ++a)h = d[a], h.$context.active = c[1] === 1, h.update(h.$context);
            (t._dirty || n.length) && (kn.update(t._labels), i.render()), delete t._dirty;
        }
    };
    const Ck = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ek
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    V.Alert = As, V.Animate = qn, V.Button = On, V.Carousel = ae, V.Chart = Qd, V.Chip = vi, V.ChipsInput = Ud, V.Collapse = re, V.Datepicker = Ph, V.Dropdown = $t, V.Input = Z, V.Modal = Ss, V.Offcanvas = zi, V.Popover = zn, V.Ripple = Ui, V.ScrollSpy = Is, V.Select = Lo, V.Sidenav = bi, V.Stepper = vd, V.Tab = Un, V.Timepicker = od, V.Toast = Ls, V.Tooltip = Ms, V.initTE = Ia, Object.defineProperty(V, Symbol.toStringTag, {
        value: "Module"
    });
});

//# sourceMappingURL=index.10ae3129.js.map
