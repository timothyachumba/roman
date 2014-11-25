(function() {
    if (!window.console) {
        window.console = {}
    }
    window.console.log = window.console.log || function() {};
    window.console.warn = window.console.warn || function() {};
    window.console.error = window.console.error || function() {};
    window.console.info = window.console.info || function() {};
    window.SLDoku = {};
    SLDoku.ui = {};
    SLDoku.app = {}
}());
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
;
!function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.1", m = function(a, b) {
        return new m.fn.init(a, b)
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function(a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length, c =+ a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j=!1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (e = arguments[h])) {
                for (d in e) {
                    a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b=!1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c))
                }
            }
        }
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor&&!j.call(a, "constructor")&&!j.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (c) {
                return !1
            }
            if (k.ownLast) {
                for (b in a) {
                    return j.call(a, b)
                }
            }
            for (b in a) {}
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d===!1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.apply(a[e], c), d===!1) {
                            break
                        }
                    }
                }
            } else {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.call(a[e], e, a[e]), d===!1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.call(a[e], e, a[e]), d===!1) {
                            break
                        }
                    }
                }
            }
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) {
                    return g.call(b, a, c)
                }
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                    if (c in b && b[c] === a) {
                        return c
                    }
                }
            }
            return - 1
        },
        merge: function(a, b) {
            var c =+ b.length, d = 0, e = a.length;
            while (c > d) {
                a[e++] = b[d++]
            }
            if (c !== c) {
                while (void 0 !== b[d]) {
                    a[e++] = b[d++]
                }
            }
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h=!c; g > f; f++) {
                d=!b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h) {
                for (; g > f; f++) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            } else {
                for (f in a) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            }
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return + new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = a.length, c = m.type(a);
        return "function" === c || m.isWindow(a)?!1 : 1 === a.nodeType && b?!0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" +- new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l=!0), 0
        }, C = "undefined", D = 1<<31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) {
                if (this[b] === a) {
                    return b
                }
            }
            return - 1
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d>>10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                }
                : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) {
                return d
            }
            if (1 !== (k = b.nodeType) && 9 !== k) {
                return []
            }
            if (p&&!e) {
                if (f = _.exec(a)) {
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h ||!h.parentNode) {
                                return d
                            }
                            if (h.id === j) {
                                return d.push(h), d
                            }
                        } else {
                            if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                                return d.push(h), d
                            }
                        }
                    } else {
                        if (f[2]) {
                            return I.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            return I.apply(d, b.getElementsByClassName(j)), d
                        }
                    }
                }
                if (c.qsa && (!q ||!q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) {
                            o[l] = s + qb(o[l])
                        }
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) {
                        try {
                            return I.apply(d, w.querySelectorAll(x)), d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u]=!0, a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function jb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }
        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return - 1
                    }
                }
            }
            return a ? 1 : - 1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b =+ b, hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e]=!(d[e] = c[e]))
                    }
                })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {}, f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a: v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p=!f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })), c.attributes = ib(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function(a) {
                return o.appendChild(a).id = u, !e.getElementsByName ||!e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a, d = b && b.parentNode;
                return a === d ||!(!d || 1 !== d.nodeType ||!(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = b ? function(a, b) {
                if (a === b) {
                    return l=!0, 0
                }
                var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d ||!c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a)?-1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d?-1 : 1)
            } : function(a, b) {
                if (a === b) {
                    return l=!0, 0
                }
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f ||!g) {
                    return a === e?-1 : b === e ? 1 : f?-1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0
                }
                if (f === g) {
                    return kb(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    i.unshift(c)
                }
                while (h[d] === i[d]) {
                    d++
                }
                return d ? kb(h[d], i[d]) : h[d] === v?-1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector ||!p || r && r.test(b) || q && q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p): void 0;
            return void 0 !== f ? f : c.attributes ||!p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l=!c.detectDuplicates, k=!c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] =+ (a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] =+ (a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c=!a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c)>-1 : "$=" === b ? c && e.slice( - c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c)>-1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice( - 4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s=!i&&!h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a&&!o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l=++n && l && l[p] || (m = n = 0) || o.pop()
                                    ) {
                                    if (1 === l.nodeType&&++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                                }
                            } else {
                                if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) {
                                    m = j[1]
                                } else {
                                    while (l=++n && l && l[p] || (m = n = 0) || o.pop()
                                        ) {
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)&&++m && (s && ((l[u] || (l[u] = {})
                                            )[a] = [w, m]), l === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return m -= e, m === d || m%d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) {
                            d = K.call(a, f[g]), a[d]=!(c[d] = f[g])
                        }
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h]=!(b[h] = f))
                        }
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a)>-1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function(b) {
                        var c;
                        do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                            }
                        }
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus())&&!!(a.type || a.href||~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled===!1
                },
                disabled: function(a) {
                    return a.disabled===!0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b&&!!a.checked || "option" === b&&!!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected===!0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            d.pseudos[b] = lb(b)
        }
        for (b in {
            submit: !0,
            reset: !0
        }) {
            d.pseudos[b] = mb(b)
        }
        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c=!1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = X[g].exec(h)) || j[g]&&!(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }
        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                return j[2] = h[2]
                            }
                            if (i[d] = j, j[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                fb(a, b[d], c)
            }
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d&&!d[u] && (d = vb(d)), e&&!e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q=!a ||!f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]]=!(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k])>-1 && (f[j]=!(g[j] = l))
                        }
                    }
                } else {
                    r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
                }
            })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return K.call(b, a)>-1
            }, h, !0), m = [function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ]; f > i; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [rb(sb(m), c)]
                } else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e=++i; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*": ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1: Math.random() || 0.1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) {
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        }
                        k && (w = v)
                    }
                    c && ((l=!o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) {
                        o(r, s, g, h)
                    }
                    if (f) {
                        if (p > 0) {
                            while (q--) {
                                r[q] || s[q] || (s[q] = G.call(i))
                            }
                        }
                        s = ub(s)
                    }
                    I.apply(i, s), k&&!f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) {
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f)
                }
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o=!f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) {
                        return e
                    }
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) {
                        break
                    }
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) {
                            return I.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates=!!l, m(), c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b]===!0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b)) {
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return m.grep(a, function(a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (v.test(b)) {
                return m.filter(b, a, c)
            }
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) {
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++) {
                        if (m.contains(d[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; e > b; b++) {
                m.find(a, d[b], c)
            }
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a) {
            return this
        }
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c ||!c[1] && b) {
                return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a)
            }
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) {
                    for (c in b) {
                        m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                    }
                }
                return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) {
                    return x.find(a)
                }
                this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType ||!m(e).is(c))
                ) {
                1 === e.nodeType && d.push(e), e = e[b]
            }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) {
                    if (m.contains(this, c[b])) {
                        return !0
                    }
                }
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c)>-1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do {
            a = a[b]
        }
        while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c]=!0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i=!a.once && [], j = function(l) {
            for (c = a.memory && l, d=!0, f = g || 0, g = 0, e = h.length, b=!0; h && e > f; f++) {
                if (h[f].apply(l[0], l[1])===!1 && a.stopOnFalse) {
                    c=!1;
                    break
                }
            }
            b=!1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                }
                return this
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d))>-1) {
                        h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }
                }), this
            },
            has: function(a) {
                return a ? m.inArray(a, h)>-1 : !(!h ||!h.length)
            },
            empty: function() {
                return h = [], e = 0, this
            },
            disable: function() {
                return h = i = c = void 0, this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0, c || k.disable(), this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, c) {
                return !h || d&&!i || (c = c || [], c = [a, c.slice ? c.slice(): c], b ? i.push(c) : j(c)), this
            },
            fire: function() {
                return k.fireWith(this, arguments), this
            },
            fired: function() {
                return !!d
            }
        };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? m.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1^a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e: 0, g = 1 === f ? a: m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1) {
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a===!0?!--m.readyWait : !m.isReady) {
                if (!y.body) {
                    return setTimeout(m.ready)
                }
                m.isReady=!0, a!==!0&&--m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H) {
            if (H = m.Deferred(), "complete" === y.readyState) {
                setTimeout(m.ready)
            } else {
                if (y.addEventListener) {
                    y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1)
                } else {
                    y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                    var c=!1;
                    try {
                        c = null == a.frameElement && y.documentElement
                    } catch (d) {}
                    c && c.doScroll&&!function e() {
                        if (!m.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(e, 50)
                            }
                            I(), m.ready()
                        }
                    }()
                }
            }
        }
        return H.promise(b)
    };
    var K = "undefined", L;
    for (L in m(k)) {
        break
    }
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout=!1, m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }), function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando=!0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando=!1
            }
        }
        a = null
    }(), m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c =+ a.nodeType || 1;
        return 1 !== c && 9 !== c?!1 : !b || b!==!0 && a.getAttribute("classid") === b
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c?!0 : "false" === c?!1 : "null" === c ? null : + c + "" === c?+c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }
    function P(a) {
        var b;
        for (b in a) {
            if (("data" !== b ||!m.isEmptyObject(a[b])) && "toJSON" !== b) {
                return !1
            }
        }
        return !0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache: a, k = i ? a[h]: a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
            }
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache: a, h = f ? a[m.expando]: m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) {
                        delete d[b[e]]
                    }
                    if (c?!P(d) : !m.isEmptyObject(d)
                        ) {
                        return
                    }
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a&&!P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType&&!m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])))
                    }
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function() {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) {
                c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
            }
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function(a, b) {
        return a = b || a, "none" === m.css(a, "display") ||!m.contains(a.ownerDocument, a)
    }, V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e=!0;
            for (h in c) {
                m.access(a, b, h, c[h], !0, f, g)
            }
        } else {
            if (void 0 !== d && (e=!0, m.isFunction(d) || (g=!0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(m(a), c)
            })), b)) {
                for (; i > h; h++) {
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                }
            }
        }
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody=!b.getElementsByTagName("tbody").length, k.htmlSerialize=!!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked=!0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent=!0, b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent=!1
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando=!0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando=!1
            }
        }
    }(), function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando===!1)
        }
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
    function ab() {
        return !0
    }
    function bb() {
        return !1
    }
    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) {
                    f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k)!==!1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o]=!0)
                }
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) {
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) {
                            g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h&&!h.test(g.namespace) || d && d !== g.selector && ("**" !== d ||!g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g))
                        }
                        i&&!n.length && (l.teardown && l.teardown.call(a, p, r.handle)!==!1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else {
                        for (o in k) {
                            m.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type: b, q = j.call(b, "namespace") ? b.namespace.split("."): [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType&&!$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e ||!k.trigger || k.trigger.apply(d, c)!==!1)
                ) {
                if (!e&&!k.noBubble&&!m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), l = h
                    }
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++])&&!b.isPropagationStopped()) {
                    b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result===!1 && b.preventDefault())
                }
                if (b.type = p, !e&&!b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c)===!1) && m.acceptData(d) && g && d[p]&&!m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a)!==!1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++])&&!a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++])&&!a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c)===!1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) {
                for (; i != this; i = i.parentNode || this) {
                    if (1 === i.nodeType && (i.disabled!==!0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) {
                            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d)
                        }
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) {
                return a
            }
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) {
                c = d[b], a[c] = f[c]
            }
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey=!!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (a) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue===!1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando]=!0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue=!1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble=!0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d&&!m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form")?!1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form: void 0;
                c&&!m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble=!0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode&&!a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form")?!1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed=!0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed&&!a.isTrigger && (this._just_changed=!1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName)&&!m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) {
                    this.on(f, b, c, a[f], e)
                }
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d===!1) {
                d = bb
            } else {
                if (!d) {
                    return this
                }
            }
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b===!1 || "function" == typeof b) && (c = b, b = void 0), c===!1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function db(a) {
        var b = eb.split("|"), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
    }, sb = db(y), tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*"): typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*"): void 0;
        if (!f) {
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b))
            }
        }
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }
    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }
    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }
    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
        }
    }
    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) {
                    for (d = 0, e = h[c].length; e > d; d++) {
                        m.event.add(b, c, h[c][d])
                    }
                }
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }
    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) {
                    m.removeEvent(b, d, e.handle)
                }
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML&&!m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) ||!gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) {
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
                    d[g] && Bb(e, d[g])
                }
            }
            if (b) {
                if (c) {
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
                        Ab(e, d[g])
                    }
                } else {
                    Ab(a, f)
                }
            }
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
                if (f = a[q], f || 0 === f) {
                    if ("object" === m.type(f)) {
                        m.merge(p, f.nodeType ? [f] : f)
                    } else {
                        if (lb.test(f)) {
                            h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                            while (e--) {
                                h = h.lastChild
                            }
                            if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                                f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                                while (e--) {
                                    m.nodeName(j = f.childNodes[e], "tbody")&&!j.childNodes.length && f.removeChild(j)
                                }
                            }
                            m.merge(p, h.childNodes), h.textContent = "";
                            while (h.firstChild) {
                                h.removeChild(h.firstChild)
                            }
                            h = o.lastChild
                        } else {
                            p.push(b.createTextNode(f))
                        }
                    }
                }
            }
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++]) {
                if ((!d||-1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) {
                        ob.test(f.type || "") && c.push(f)
                    }
                }
            }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) {
                        for (e in g.events) {
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle)
                        }
                    }
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
            }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c))
            }
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a?!1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) {
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0
                }
                if (!("string" != typeof a || mb.test(a) ||!k.htmlSerialize && gb.test(a) ||!k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p&&!k.checkClone && nb.test(p)) {
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                })
            }
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
                    d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j)
                }
                if (f) {
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
                        d = g[j], ob.test(d.type || "")&&!m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")))
                    }
                }
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
                c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get())
            }
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};
    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display: m.css(e[0], "display");
        return e.detach(), f
    }
    function Fb(a) {
        var b = y, c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) {
                return a
            }
            a=!1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g)&&!Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) {
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat=!!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f=!1, h=!0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h=!parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f]
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f]
        }
        return e
    };
    var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Sb = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Tb = ["Webkit", "O", "Moz", "ms"];
    function Ub(a, b) {
        if (b in a) {
            return b
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
        while (e--) {
            if (b = Tb[e] + c, b in a) {
                return b
            }
        }
        return d
    }
    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c ||!e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }
    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)))
        }
        return g
    }
    function Yb(a, b, c) {
        var d=!0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) {
                return e
            }
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
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
            "float": k.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) {
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
                }
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))
                    )) {
                    try {
                        i[b] = c
                    } catch (j) {}
                }
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c===!0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d&&!d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) {
                        f[b[g]] = m.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ic], ec = {
        "*": [function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f&&+d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g =+ d || 1;
                do {
                    h = h || ".5", g/=h, m.style(c.elem, a, g + f)
                }
                while (h !== (h = c.cur() / d) && 1 !== h&&--i)
                }
            return e && (g = c.start =+ g||+d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : + e[2]), c
        }
        ]
    };
    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }
    function gc(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1: 0;
        4 > e;
        e += 2 - b) {
            c = T[e],
            d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
    }
    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }
    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e ||!r || void 0 === r[d]) {
                        continue
                    }
                    q=!0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else {
                j = void 0
            }
        }
        if (m.isEmptyObject(o)) {
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j)
        } else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden=!q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) {
                    m.style(a, b, o[b])
                }
            });
            for (d in o) {
                g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }
    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }
    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e) {
                return !1
            }
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f)
            }
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length: 0;
                if (e) {
                    return this
                }
                for (e=!0; d > c; c++) {
                    j.tweens[c].run(1)
                }
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (jc(k, j.opts.specialEasing);
        g > f;
        f++) {
            if (d = dc[f].call(j, a, k, j.opts)) {
                return d
            }
        }
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            }
        },
        prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }), m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a): {
            complete: c ||!c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b&&!m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue===!0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        }, d
    }, m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function() {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue===!1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a!==!1 && this.queue(a || "fx", []), this.each(function() {
                var b=!0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e) {
                    g[e] && g[e].stop && d(g[e])
                } else {
                    for (e in g) {
                        g[e] && g[e].stop && cc.test(e) && d(g[e])
                    }
                }
                for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b=!1, f.splice(e, 1))
                }(b ||!c) && m.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a!==!1 && (a = a || "fx"), this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length: 0;
                for (c.finish=!0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                }
                for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this)
                }
                delete c.finish
            })
        }
    }), m.each(["toggle", "show", "hide"], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }), m.each({
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers = [], m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++) {
            a = b[c], a() || b[c] !== a || b.splice(c--, 1)
        }
        b.length || m.fx.stop(), $b = void 0
    }, m.fx.timer = function(a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
    }, m.fx.interval = 13, m.fx.start = function() {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }, m.fx.stop = function() {
        clearInterval(_b), _b = null
    }, m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }, function() {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn=!!a.value, k.optSelected = e.selected, k.enctype=!!y.createElement("form").enctype, c.disabled=!0, k.optDisabled=!e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--) {
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) {
                            try {
                                d.selected = c=!0
                            } catch (h) {
                                d.scrollHeight
                            }
                        } else {
                            d.selected=!1
                        }
                    }
                    return c || (a.selectedIndex =- 1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc ||!pc.test(c) ? a[d]=!1 : a[m.camelCase("default-" + c)] = a[d]=!1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function(a, b, c) {
            return b===!1 ? m.removeAttr(a, c) : rc && qc ||!pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c]=!0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc ||!pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b?!1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                return f = 1 !== g ||!m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : - 1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a)) {
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(E) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) {
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                        }
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) {
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(E) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++]) {
                            while (d.indexOf(" " + e + " ") >= 0) {
                                d = d.replace(" " + e + " ", " ")
                            }
                        }
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a===!1 ? "" : m._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) {
                    return !0
                }
            }
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) {
            return a.JSON.parse(b + "")
        }
        var c, d = null, e = m.trim(b + "");
        return e&&!m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d+=!f-!e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) {
            return null
        }
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement&&!c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }
    function Mc(a, b, c, d) {
        var e = {}, f = a === Ic;
        function g(h) {
            var i;
            return e[h]=!0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f?!(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) ||!e["*"] && g("*")
    }
    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) {
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
        }
        return c && m.extend(!0, a, c), a
    }
    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (e) {
            for (g in h) {
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g===!0 ? g = j[e] : j[e]!==!0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g!==!0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l: "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l): m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cc.exec(f)) {
                                j[b[1].toLowerCase()] = b[2]
                            }
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function(a) {
                    var b;
                    if (a) {
                        if (2 > t) {
                            for (b in a) {
                                q[b] = [q[b], a[b]]
                            }
                        } else {
                            v.always(a[v.status])
                        }
                    }
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain=!(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) {
                return v
            }
            h = k.global, h && 0 === m.active++&&m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent=!Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache===!1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType!==!1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) {
                v.setRequestHeader(d, k.headers[d])
            }
            if (k.beforeSend && (k.beforeSend.call(l, v, k)===!1 || 2 === t)) {
                return v.abort()
            }
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                v[d](k[d])
            }
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) {
                        throw w
                    }
                    x( - 1, w)
                }
            } else {
                x( - 1, "No Transport")
            }
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j=!s)) : (s = x, (a ||!x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r: s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) {
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 ||!k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i;
    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) {
            m.each(b, function(b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== m.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    Vc(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery&&!m.isPlainObject(a)
            ) {
            m.each(a, function() {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                Vc(c, a[c], b, e)
            }
        }
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name&&!m(this).is(":disabled") && Uc.test(this.nodeName)&&!Tc.test(a) && (this.checked ||!W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc) {
            Xc[a](void 0, !0)
        }
    }), k.cors=!!Yc && "withCredentials" in Yc, Yc = k.ajax=!!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g=++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                        for (e in a.xhrFields) {
                            f[e] = a.xhrFields[e]
                        }
                    }
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) {
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "")
                    }
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) {
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) {
                                4 !== f.readyState && f.abort()
                            } else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h ||!a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache=!1), a.crossDomain && (a.type = "GET", a.global=!1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async=!0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c ||!b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a]=!0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp!==!1 && (ad.test(b.url) ? "url" : "string" == typeof b.data&&!(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp!==!1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b=!1), b = b || y;
        var d = u.exec(a), e=!c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) {
            return bd.apply(this, arguments)
        }
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;
    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i])>-1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f) {
                return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a&&!m.nodeName(a, "html") && "static" === m.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d===!0 || e===!0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery, fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
;
if ("undefined" == typeof jQuery) {
    throw new Error("Bootstrap's JavaScript requires jQuery")
}
+ function(d) {
    function c() {
        var f = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var g in e) {
            if (void 0 !== f.style[g]) {
                return {
                    end: e[g]
                }
            }
        }
        return !1
    }
    d.fn.emulateTransitionEnd = function(a) {
        var h=!1, g = this;
        d(this).one("bsTransitionEnd", function() {
            h=!0
        });
        var f = function() {
            h || d(g).trigger(d.support.transition.end)
        };
        return setTimeout(f, a), this
    }, d(function() {
        d.support.transition = c(), d.support.transition && (d.event.special.bsTransitionEnd = {
            bindType: d.support.transition.end,
            delegateType: d.support.transition.end,
            handle: function(a) {
                return d(a.target).is(this) ? a.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var d = g(this), b = d.data("bs.alert");
            b || d.data("bs.alert", b = new i(this)), "string" == typeof a && b[a].call(d)
        })
    }
    var j = '[data-dismiss="alert"]', i = function(a) {
        g(a).on("click", j, this.close)
    };
    i.VERSION = "3.2.0", i.prototype.close = function(a) {
        function n() {
            k.detach().trigger("closed.bs.alert").remove()
        }
        var m = g(this), l = m.attr("data-target");
        l || (l = m.attr("href"), l = l && l.replace(/.*(?=#[^\s]*$)/, ""));
        var k = g(l);
        a && a.preventDefault(), k.length || (k = m.hasClass("alert") ? m : m.parent()), k.trigger(a = g.Event("close.bs.alert")), a.isDefaultPrevented() || (k.removeClass("in"), g.support.transition && k.hasClass("fade") ? k.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var h = g.fn.alert;
    g.fn.alert = f, g.fn.alert.Constructor = i, g.fn.alert.noConflict = function() {
        return g.fn.alert = h, this
    }, g(document).on("click.bs.alert.data-api", j, i.prototype.close)
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this), c = i.data("bs.button"), b = "object" == typeof a && a;
            c || i.data("bs.button", c = new h(this, b)), "toggle" == a ? c.toggle() : a && c.setState(a)
        })
    }
    var h = function(a, c) {
        this.$element = f(a), this.options = f.extend({}, h.DEFAULTS, c), this.isLoading=!1
    };
    h.VERSION = "3.2.0", h.DEFAULTS = {
        loadingText: "loading..."
    }, h.prototype.setState = function(a) {
        var l = "disabled", k = this.$element, j = k.is("input") ? "val": "html", i = k.data();
        a += "Text", null == i.resetText && k.data("resetText", k[j]()), k[j](null == i[a] ? this.options[a] : i[a]), setTimeout(f.proxy(function() {
            "loadingText" == a ? (this.isLoading=!0, k.addClass(l).attr(l, l)) : this.isLoading && (this.isLoading=!1, k.removeClass(l).removeAttr(l))
        }, this), 0)
    }, h.prototype.toggle = function() {
        var i=!0, d = this.$element.closest('[data-toggle="buttons"]');
        if (d.length) {
            var j = this.$element.find("input");
            "radio" == j.prop("type") && (j.prop("checked") && this.$element.hasClass("active") ? i=!1 : d.find(".active").removeClass("active")), i && j.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        i && this.$element.toggleClass("active")
    };
    var g = f.fn.button;
    f.fn.button = e, f.fn.button.Constructor = h, f.fn.button.noConflict = function() {
        return f.fn.button = g, this
    }, f(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        var a = f(b.target);
        a.hasClass("btn") || (a = a.closest(".btn")), e.call(a, "toggle"), b.preventDefault()
    })
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var j = f(this), i = j.data("bs.carousel"), c = f.extend({}, h.DEFAULTS, j.data(), "object" == typeof a && a), b = "string" == typeof a ? a: c.slide;
            i || j.data("bs.carousel", i = new h(this, c)), "number" == typeof a ? i.to(a) : b ? i[b]() : c.interval && i.pause().cycle()
        })
    }
    var h = function(a, d) {
        this.$element = f(a).on("keydown.bs.carousel", f.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = d, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", f.proxy(this.pause, this)).on("mouseleave.bs.carousel", f.proxy(this.cycle, this))
    };
    h.VERSION = "3.2.0", h.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: !0
    }, h.prototype.keydown = function(b) {
        switch (b.which) {
        case 37:
            this.prev();
            break;
        case 39:
            this.next();
            break;
        default:
            return
        }
        b.preventDefault()
    }, h.prototype.cycle = function(a) {
        return a || (this.paused=!1), this.interval && clearInterval(this.interval), this.options.interval&&!this.paused && (this.interval = setInterval(f.proxy(this.next, this), this.options.interval)), this
    }, h.prototype.getItemIndex = function(b) {
        return this.$items = b.parent().children(".item"), this.$items.index(b || this.$active)
    }, h.prototype.to = function(a) {
        var j = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            j.to(a)
        }) : i == a ? this.pause().cycle() : this.slide(a > i ? "next" : "prev", f(this.$items[a]))
    }, h.prototype.pause = function(a) {
        return a || (this.paused=!0), this.$element.find(".next, .prev").length && f.support.transition && (this.$element.trigger(f.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, h.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, h.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, h.prototype.slide = function(x, w) {
        var v = this.$element.find(".item.active"), u = w || v[x](), t = this.interval, s = "next" == x ? "left": "right", r = "next" == x ? "first": "last", q = this;
        if (!u.length) {
            if (!this.options.wrap) {
                return
            }
            u = this.$element.find(".item")[r]()
        }
        if (u.hasClass("active")) {
            return this.sliding=!1
        }
        var p = u[0], o = f.Event("slide.bs.carousel", {
            relatedTarget: p,
            direction: s
        });
        if (this.$element.trigger(o), !o.isDefaultPrevented()) {
            if (this.sliding=!0, t && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var n = f(this.$indicators.children()[this.getItemIndex(u)]);
                n && n.addClass("active")
            }
            var a = f.Event("slid.bs.carousel", {
                relatedTarget: p,
                direction: s
            });
            return f.support.transition && this.$element.hasClass("slide") ? (u.addClass(x), u[0].offsetWidth, v.addClass(s), u.addClass(s), v.one("bsTransitionEnd", function() {
                u.removeClass([x, s].join(" ")).addClass("active"), v.removeClass(["active", s].join(" ")), q.sliding=!1, setTimeout(function() {
                    q.$element.trigger(a)
                }, 0)
            }).emulateTransitionEnd(1000 * v.css("transition-duration").slice(0, - 1))) : (v.removeClass("active"), u.addClass("active"), this.sliding=!1, this.$element.trigger(a)), t && this.cycle(), this
        }
    };
    var g = f.fn.carousel;
    f.fn.carousel = e, f.fn.carousel.Constructor = h, f.fn.carousel.noConflict = function() {
        return f.fn.carousel = g, this
    }, f(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(l) {
        var k, j = f(this), i = f(j.attr("data-target") || (k = j.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, ""));
        if (i.hasClass("carousel")) {
            var b = f.extend({}, i.data(), j.data()), a = j.attr("data-slide-to");
            a && (b.interval=!1), e.call(i, b), a && i.data("bs.carousel").to(a), l.preventDefault()
        }
    }), f(window).on("load", function() {
        f('[data-ride="carousel"]').each(function() {
            var a = f(this);
            e.call(a, a.data())
        })
    })
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this), c = i.data("bs.collapse"), b = f.extend({}, h.DEFAULTS, i.data(), "object" == typeof a && a);
            !c && b.toggle && "show" == a && (a=!a), c || i.data("bs.collapse", c = new h(this, b)), "string" == typeof a && c[a]()
        })
    }
    var h = function(a, c) {
        this.$element = f(a), this.options = f.extend({}, h.DEFAULTS, c), this.transitioning = null, this.options.parent && (this.$parent = f(this.options.parent)), this.options.toggle && this.toggle()
    };
    h.VERSION = "3.2.0", h.DEFAULTS = {
        toggle: !0
    }, h.prototype.dimension = function() {
        var b = this.$element.hasClass("width");
        return b ? "width" : "height"
    }, h.prototype.show = function() {
        if (!this.transitioning&&!this.$element.hasClass("in")) {
            var l = f.Event("show.bs.collapse");
            if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                var k = this.$parent && this.$parent.find("> .panel > .in");
                if (k && k.length) {
                    var j = k.data("bs.collapse");
                    if (j && j.transitioning) {
                        return
                    }
                    e.call(k, "hide"), j || k.data("bs.collapse", null)
                }
                var i = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
                var b = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!f.support.transition) {
                    return b.call(this)
                }
                var a = f.camelCase(["scroll", i].join("-"));
                this.$element.one("bsTransitionEnd", f.proxy(b, this)).emulateTransitionEnd(350)[i](this.$element[0][a])
            }
        }
    }, h.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var a = f.Event("hide.bs.collapse");
            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                var j = this.dimension();
                this.$element[j](this.$element[j]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return f.support.transition ? void this.$element[j](0).one("bsTransitionEnd", f.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, h.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    };
    var g = f.fn.collapse;
    f.fn.collapse = e, f.fn.collapse.Constructor = h, f.fn.collapse.noConflict = function() {
        return f.fn.collapse = g, this
    }, f(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) {
        var q, p = f(this), o = p.attr("data-target") || r.preventDefault() || (q = p.attr("href")) && q.replace(/.*(?=#[^\s]+$)/, ""), n = f(o), m = n.data("bs.collapse"), l = m ? "toggle": p.data(), b = p.attr("data-parent"), a = b && f(b);
        m && m.transitioning || (a && a.find('[data-toggle="collapse"][data-parent="' + b + '"]').not(p).addClass("collapsed"), p[n.hasClass("in") ? "addClass": "removeClass"]("collapsed")), e.call(n, l)
    })
}(jQuery), + function(j) {
    function i(a) {
        a && 3 === a.which || (j(n).remove(), j(m).each(function() {
            var c = p(j(this)), b = {
                relatedTarget: this
            };
            c.hasClass("open") && (c.trigger(a = j.Event("hide.bs.dropdown", b)), a.isDefaultPrevented() || c.removeClass("open").trigger("hidden.bs.dropdown", b))
        }))
    }
    function p(a) {
        var f = a.attr("data-target");
        f || (f = a.attr("href"), f = f && /#[A-Za-z]/.test(f) && f.replace(/.*(?=#[^\s]*$)/, ""));
        var e = f && j(f);
        return e && e.length ? e : a.parent()
    }
    function o(a) {
        return this.each(function() {
            var e = j(this), b = e.data("bs.dropdown");
            b || e.data("bs.dropdown", b = new l(this)), "string" == typeof a && b[a].call(e)
        })
    }
    var n = ".dropdown-backdrop", m = '[data-toggle="dropdown"]', l = function(a) {
        j(a).on("click.bs.dropdown", this.toggle)
    };
    l.VERSION = "3.2.0", l.prototype.toggle = function(r) {
        var q = j(this);
        if (!q.is(".disabled, :disabled")) {
            var c = p(q), b = c.hasClass("open");
            if (i(), !b) {
                "ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length && j('<div class="dropdown-backdrop"/>').insertAfter(j(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (c.trigger(r = j.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) {
                    return
                }
                q.trigger("focus"), c.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, l.prototype.keydown = function(a) {
        if (/(38|40|27)/.test(a.keyCode)) {
            var t = j(this);
            if (a.preventDefault(), a.stopPropagation(), !t.is(".disabled, :disabled")) {
                var s = p(t), r = s.hasClass("open");
                if (!r || r && 27 == a.keyCode) {
                    return 27 == a.which && s.find(m).trigger("focus"), t.trigger("click")
                }
                var q = " li:not(.divider):visible a", f = s.find('[role="menu"]' + q + ', [role="listbox"]' + q);
                if (f.length) {
                    var c = f.index(f.filter(":focus"));
                    38 == a.keyCode && c > 0 && c--, 40 == a.keyCode && c < f.length - 1 && c++, ~c || (c = 0), f.eq(c).trigger("focus")
                }
            }
        }
    };
    var k = j.fn.dropdown;
    j.fn.dropdown = o, j.fn.dropdown.Constructor = l, j.fn.dropdown.noConflict = function() {
        return j.fn.dropdown = k, this
    }, j(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(b) {
        b.stopPropagation()
    }).on("click.bs.dropdown.data-api", m, l.prototype.toggle).on("keydown.bs.dropdown.data-api", m + ', [role="menu"], [role="listbox"]', l.prototype.keydown)
}(jQuery), + function(f) {
    function e(a, c) {
        return this.each(function() {
            var i = f(this), d = i.data("bs.modal"), b = f.extend({}, h.DEFAULTS, i.data(), "object" == typeof a && a);
            d || i.data("bs.modal", d = new h(this, b)), "string" == typeof a ? d[a](c) : b.show && d.show(c)
        })
    }
    var h = function(a, d) {
        this.options = d, this.$body = f(document.body), this.$element = f(a), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, f.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    h.VERSION = "3.2.0", h.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, h.prototype.toggle = function(b) {
        return this.isShown ? this.hide() : this.show(b)
    }, h.prototype.show = function(a) {
        var j = this, i = f.Event("show.bs.modal", {
            relatedTarget: a
        });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown=!0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', f.proxy(this.hide, this)), this.backdrop(function() {
            var c = f.support.transition && j.$element.hasClass("fade");
            j.$element.parent().length || j.$element.appendTo(j.$body), j.$element.show().scrollTop(0), c && j.$element[0].offsetWidth, j.$element.addClass("in").attr("aria-hidden", !1), j.enforceFocus();
            var b = f.Event("shown.bs.modal", {
                relatedTarget: a
            });
            c ? j.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                j.$element.trigger("focus").trigger(b)
            }).emulateTransitionEnd(300) : j.$element.trigger("focus").trigger(b)
        }))
    }, h.prototype.hide = function(a) {
        a && a.preventDefault(), a = f.Event("hide.bs.modal"), this.$element.trigger(a), this.isShown&&!a.isDefaultPrevented() && (this.isShown=!1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), f(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), f.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", f.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, h.prototype.enforceFocus = function() {
        f(document).off("focusin.bs.modal").on("focusin.bs.modal", f.proxy(function(b) {
            this.$element[0] === b.target || this.$element.has(b.target).length || this.$element.trigger("focus")
        }, this))
    }, h.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", f.proxy(function(b) {
            27 == b.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, h.prototype.hideModal = function() {
        var b = this;
        this.$element.hide(), this.backdrop(function() {
            b.$element.trigger("hidden.bs.modal")
        })
    }, h.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, h.prototype.backdrop = function(a) {
        var l = this, k = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var j = f.support.transition && k;
            if (this.$backdrop = f('<div class="modal-backdrop ' + k + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", f.proxy(function(b) {
                b.target === b.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), j && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !a) {
                return
            }
            j ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(150) : a()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var i = function() {
                    l.removeBackdrop(), a && a()
                };
                f.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i()
            } else {
                a && a()
            }
        }
    }, h.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, h.prototype.setScrollbar = function() {
        var b = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", b + this.scrollbarWidth)
    }, h.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, h.prototype.measureScrollbar = function() {
        var d = document.createElement("div");
        d.className = "modal-scrollbar-measure", this.$body.append(d);
        var c = d.offsetWidth - d.clientWidth;
        return this.$body[0].removeChild(d), c
    };
    var g = f.fn.modal;
    f.fn.modal = e, f.fn.modal.Constructor = h, f.fn.modal.noConflict = function() {
        return f.fn.modal = g, this
    }, f(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(k) {
        var j = f(this), i = j.attr("href"), b = f(j.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")), a = b.data("bs.modal") ? "toggle": f.extend({
            remote: !/#/.test(i) && i
        }, b.data(), j.data());
        j.is("a") && k.preventDefault(), b.one("show.bs.modal", function(c) {
            c.isDefaultPrevented() || b.one("hidden.bs.modal", function() {
                j.is(":visible") && j.trigger("focus")
            })
        }), e.call(b, a, this)
    })
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this), c = i.data("bs.tooltip"), b = "object" == typeof a && a;
            (c || "destroy" != a) && (c || i.data("bs.tooltip", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }
    var h = function(d, c) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", d, c)
    };
    h.VERSION = "3.2.0", h.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, h.prototype.init = function(a, p, o) {
        this.enabled=!0, this.type = a, this.$element = f(p), this.options = this.getOptions(o), this.$viewport = this.options.viewport && f(this.options.viewport.selector || this.options.viewport);
        for (var n = this.options.trigger.split(" "), m = n.length; m--;) {
            var l = n[m];
            if ("click" == l) {
                this.$element.on("click." + this.type, this.options.selector, f.proxy(this.toggle, this))
            } else {
                if ("manual" != l) {
                    var k = "hover" == l ? "mouseenter": "focusin", j = "hover" == l ? "mouseleave": "focusout";
                    this.$element.on(k + "." + this.type, this.options.selector, f.proxy(this.enter, this)), this.$element.on(j + "." + this.type, this.options.selector, f.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? this._options = f.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.getOptions = function(a) {
        return a = f.extend({}, this.getDefaults(), this.$element.data(), a), a.delay && "number" == typeof a.delay && (a.delay = {
            show: a.delay,
            hide: a.delay
        }), a
    }, h.prototype.getDelegateOptions = function() {
        var a = {}, d = this.getDefaults();
        return this._options && f.each(this._options, function(b, c) {
            d[b] != c && (a[b] = c)
        }), a
    }, h.prototype.enter = function(a) {
        var d = a instanceof this.constructor ? a: f(a.currentTarget).data("bs." + this.type);
        return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), clearTimeout(d.timeout), d.hoverState = "in", d.options.delay && d.options.delay.show ? void (d.timeout = setTimeout(function() {
            "in" == d.hoverState && d.show()
        }, d.options.delay.show)) : d.show()
    }, h.prototype.leave = function(a) {
        var d = a instanceof this.constructor ? a: f(a.currentTarget).data("bs." + this.type);
        return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), clearTimeout(d.timeout), d.hoverState = "out", d.options.delay && d.options.delay.hide ? void (d.timeout = setTimeout(function() {
            "out" == d.hoverState && d.hide()
        }, d.options.delay.hide)) : d.hide()
    }, h.prototype.show = function() {
        var F = f.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(F);
            var E = f.contains(document.documentElement, this.$element[0]);
            if (F.isDefaultPrevented() ||!E) {
                return
            }
            var D = this, C = this.tip(), B = this.getUID(this.type);
            this.setContent(), C.attr("id", B), this.$element.attr("aria-describedby", B), this.options.animation && C.addClass("fade");
            var A = "function" == typeof this.options.placement ? this.options.placement.call(this, C[0], this.$element[0]): this.options.placement, z = /\s?auto?\s?/i, y = z.test(A);
            y && (A = A.replace(z, "") || "top"), C.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(A).data("bs." + this.type, this), this.options.container ? C.appendTo(this.options.container) : C.insertAfter(this.$element);
            var x = this.getPosition(), w = C[0].offsetWidth, v = C[0].offsetHeight;
            if (y) {
                var u = A, t = this.$element.parent(), s = this.getPosition(t);
                A = "bottom" == A && x.top + x.height + v - s.scroll > s.height ? "top" : "top" == A && x.top - s.scroll - v < 0 ? "bottom" : "right" == A && x.right + w > s.width ? "left" : "left" == A && x.left - w < s.left ? "right" : A, C.removeClass(u).addClass(A)
            }
            var r = this.getCalculatedOffset(A, x, w, v);
            this.applyPlacement(r, A);
            var a = function() {
                D.$element.trigger("shown.bs." + D.type), D.hoverState = null
            };
            f.support.transition && this.$tip.hasClass("fade") ? C.one("bsTransitionEnd", a).emulateTransitionEnd(150) : a()
        }
    }, h.prototype.applyPlacement = function(z, y) {
        var x = this.tip(), w = x[0].offsetWidth, v = x[0].offsetHeight, u = parseInt(x.css("margin-top"), 10), t = parseInt(x.css("margin-left"), 10);
        isNaN(u) && (u = 0), isNaN(t) && (t = 0), z.top = z.top + u, z.left = z.left + t, f.offset.setOffset(x[0], f.extend({
            using: function(b) {
                x.css({
                    top: Math.round(b.top),
                    left: Math.round(b.left)
                })
            }
        }, z), 0), x.addClass("in");
        var s = x[0].offsetWidth, r = x[0].offsetHeight;
        "top" == y && r != v && (z.top = z.top + v - r);
        var q = this.getViewportAdjustedDelta(y, z, s, r);
        q.left ? z.left += q.left : z.top += q.top;
        var p = q.left ? 2 * q.left - w + s: 2 * q.top - v + r, o = q.left ? "left": "top", a = q.left ? "offsetWidth": "offsetHeight";
        x.offset(z), this.replaceArrow(p, x[0][a], o)
    }, h.prototype.replaceArrow = function(i, d, j) {
        this.arrow().css(j, i ? 50 * (1 - i / d) + "%" : "")
    }, h.prototype.setContent = function() {
        var d = this.tip(), c = this.getTitle();
        d.find(".tooltip-inner")[this.options.html ? "html": "text"](c), d.removeClass("fade in top bottom left right")
    }, h.prototype.hide = function() {
        function a() {
            "in" != k.hoverState && j.detach(), k.$element.trigger("hidden.bs." + k.type)
        }
        var k = this, j = this.tip(), i = f.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (j.removeClass("in"), f.support.transition && this.$tip.hasClass("fade") ? j.one("bsTransitionEnd", a).emulateTransitionEnd(150) : a(), this.hoverState = null, this)
    }, h.prototype.fixTitle = function() {
        var b = this.$element;
        (b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b.attr("title") || "").attr("title", "")
    }, h.prototype.hasContent = function() {
        return this.getTitle()
    }, h.prototype.getPosition = function(a) {
        a = a || this.$element;
        var j = a[0], i = "BODY" == j.tagName;
        return f.extend({}, "function" == typeof j.getBoundingClientRect ? j.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop: a.scrollTop(),
            width: i ? f(window).width(): a.outerWidth(),
            height: i ? f(window).height(): a.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : a.offset())
    }, h.prototype.getCalculatedOffset = function(j, i, l, k) {
        return "bottom" == j ? {
            top: i.top + i.height,
            left: i.left + i.width / 2 - l / 2
        } : "top" == j ? {
            top: i.top - k,
            left: i.left + i.width / 2 - l / 2
        } : "left" == j ? {
            top: i.top + i.height / 2 - k / 2,
            left: i.left - l
        } : {
            top: i.top + i.height / 2 - k / 2,
            left: i.left + i.width
        }
    }, h.prototype.getViewportAdjustedDelta = function(v, u, t, s) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) {
            return r
        }
        var q = this.options.viewport && this.options.viewport.padding || 0, p = this.getPosition(this.$viewport);
        if (/right|left/.test(v)) {
            var o = u.top - q - p.scroll, n = u.top + q - p.scroll + s;
            o < p.top ? r.top = p.top - o : n > p.top + p.height && (r.top = p.top + p.height - n)
        } else {
            var m = u.left - q, l = u.left + q + t;
            m < p.left ? r.left = p.left - m : l > p.width && (r.left = p.left + p.width - l)
        }
        return r
    }, h.prototype.getTitle = function() {
        var i, d = this.$element, j = this.options;
        return i = d.attr("data-original-title") || ("function" == typeof j.title ? j.title.call(d[0]) : j.title)
    }, h.prototype.getUID = function(b) {
        do {
            b+=~~(1000000 * Math.random())
        }
        while (document.getElementById(b));
        return b
    }, h.prototype.tip = function() {
        return this.$tip = this.$tip || f(this.options.template)
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, h.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, h.prototype.enable = function() {
        this.enabled=!0
    }, h.prototype.disable = function() {
        this.enabled=!1
    }, h.prototype.toggleEnabled = function() {
        this.enabled=!this.enabled
    }, h.prototype.toggle = function(a) {
        var d = this;
        a && (d = f(a.currentTarget).data("bs." + this.type), d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d))), d.tip().hasClass("in") ? d.leave(d) : d.enter(d)
    }, h.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var g = f.fn.tooltip;
    f.fn.tooltip = e, f.fn.tooltip.Constructor = h, f.fn.tooltip.noConflict = function() {
        return f.fn.tooltip = g, this
    }
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this), c = i.data("bs.popover"), b = "object" == typeof a && a;
            (c || "destroy" != a) && (c || i.data("bs.popover", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }
    var h = function(d, c) {
        this.init("popover", d, c)
    };
    if (!f.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    h.VERSION = "3.2.0", h.DEFAULTS = f.extend({}, f.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), h.prototype = f.extend({}, f.fn.tooltip.Constructor.prototype), h.prototype.constructor = h, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.setContent = function() {
        var i = this.tip(), d = this.getTitle(), j = this.getContent();
        i.find(".popover-title")[this.options.html ? "html": "text"](d), i.find(".popover-content").empty()[this.options.html ? "string" == typeof j ? "html": "append": "text"](j), i.removeClass("fade top bottom left right in"), i.find(".popover-title").html() || i.find(".popover-title").hide()
    }, h.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, h.prototype.getContent = function() {
        var d = this.$element, c = this.options;
        return d.attr("data-content") || ("function" == typeof c.content ? c.content.call(d[0]) : c.content)
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, h.prototype.tip = function() {
        return this.$tip || (this.$tip = f(this.options.template)), this.$tip
    };
    var g = f.fn.popover;
    f.fn.popover = e, f.fn.popover.Constructor = h, f.fn.popover.noConflict = function() {
        return f.fn.popover = g, this
    }
}(jQuery), + function(f) {
    function e(i, b) {
        var a = f.proxy(this.process, this);
        this.$body = f("body"), this.$scrollElement = f(f(i).is("body") ? window : i), this.options = f.extend({}, e.DEFAULTS, b), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a), this.refresh(), this.process()
    }
    function h(a) {
        return this.each(function() {
            var i = f(this), c = i.data("bs.scrollspy"), b = "object" == typeof a && a;
            c || i.data("bs.scrollspy", c = new e(this, b)), "string" == typeof a && c[a]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var a = "offset", j = 0;
        f.isWindow(this.$scrollElement[0]) || (a = "position", j = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var k = f(this), c = k.data("target") || k.attr("href"), b = /^#./.test(c) && f(c);
            return b && b.length && b.is(":visible") && [[b[a]().top + j, c]] || null
        }).sort(function(d, c) {
            return d[0] - c[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var j, i = this.$scrollElement.scrollTop() + this.options.offset, o = this.getScrollHeight(), n = this.options.offset + o - this.$scrollElement.height(), m = this.offsets, l = this.targets, k = this.activeTarget;
        if (this.scrollHeight != o && this.refresh(), i >= n) {
            return k != (j = l[l.length - 1]) && this.activate(j)
        }
        if (k && i <= m[0]) {
            return k != (j = l[0]) && this.activate(j)
        }
        for (j = m.length; j--;) {
            k != l[j] && i >= m[j] && (!m[j + 1] || i <= m[j + 1]) && this.activate(l[j])
        }
    }, e.prototype.activate = function(a) {
        this.activeTarget = a, f(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var j = this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]', i = f(j).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var g = f.fn.scrollspy;
    f.fn.scrollspy = h, f.fn.scrollspy.Constructor = e, f.fn.scrollspy.noConflict = function() {
        return f.fn.scrollspy = g, this
    }, f(window).on("load.bs.scrollspy.data-api", function() {
        f('[data-spy="scroll"]').each(function() {
            var a = f(this);
            h.call(a, a.data())
        })
    })
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var c = f(this), b = c.data("bs.tab");
            b || c.data("bs.tab", b = new h(this)), "string" == typeof a && b[a]()
        })
    }
    var h = function(a) {
        this.element = f(a)
    };
    h.VERSION = "3.2.0", h.prototype.show = function() {
        var a = this.element, m = a.closest("ul:not(.dropdown-menu)"), l = a.data("target");
        if (l || (l = a.attr("href"), l = l && l.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
            var k = m.find(".active:last a")[0], j = f.Event("show.bs.tab", {
                relatedTarget: k
            });
            if (a.trigger(j), !j.isDefaultPrevented()) {
                var i = f(l);
                this.activate(a.closest("li"), m), this.activate(i, i.parent(), function() {
                    a.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: k
                    })
                })
            }
        }
    }, h.prototype.activate = function(a, m, l) {
        function k() {
            j.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), a.addClass("active"), i ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu") && a.closest("li.dropdown").addClass("active"), l && l()
        }
        var j = m.find("> .active"), i = l && f.support.transition && j.hasClass("fade");
        i ? j.one("bsTransitionEnd", k).emulateTransitionEnd(150) : k(), j.removeClass("in")
    };
    var g = f.fn.tab;
    f.fn.tab = e, f.fn.tab.Constructor = h, f.fn.tab.noConflict = function() {
        return f.fn.tab = g, this
    }, f(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(a) {
        a.preventDefault(), e.call(f(this), "show")
    })
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this), c = i.data("bs.affix"), b = "object" == typeof a && a;
            c || i.data("bs.affix", c = new h(this, b)), "string" == typeof a && c[a]()
        })
    }
    var h = function(a, c) {
        this.options = f.extend({}, h.DEFAULTS, c), this.$target = f(this.options.target).on("scroll.bs.affix.data-api", f.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", f.proxy(this.checkPositionWithEventLoop, this)), this.$element = f(a), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    h.VERSION = "3.2.0", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
        offset: 0,
        target: window
    }, h.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) {
            return this.pinnedOffset
        }
        this.$element.removeClass(h.RESET).addClass("affix");
        var d = this.$target.scrollTop(), c = this.$element.offset();
        return this.pinnedOffset = c.top - d
    }, h.prototype.checkPositionWithEventLoop = function() {
        setTimeout(f.proxy(this.checkPosition, this), 1)
    }, h.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var r = f(document).height(), q = this.$target.scrollTop(), p = this.$element.offset(), o = this.options.offset, n = o.top, m = o.bottom;
            "object" != typeof o && (m = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof m && (m = o.bottom(this.$element));
            var l = null != this.unpin && q + this.unpin <= p.top?!1 : null != m && p.top + this.$element.height() >= r - m ? "bottom" : null != n && n >= q ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var c = "affix" + (l ? "-" + l : ""), a = f.Event(c + ".bs.affix");
                this.$element.trigger(a), a.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(c).trigger(f.Event(c.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: r - this.$element.height() - m
                }))
            }
        }
    };
    var g = f.fn.affix;
    f.fn.affix = e, f.fn.affix.Constructor = h, f.fn.affix.noConflict = function() {
        return f.fn.affix = g, this
    }, f(window).on("load", function() {
        f('[data-spy="affix"]').each(function() {
            var b = f(this), a = b.data();
            a.offset = a.offset || {}, a.offsetBottom && (a.offset.bottom = a.offsetBottom), a.offsetTop && (a.offset.top = a.offsetTop), e.call(b, a)
        })
    })
}(jQuery);
/*! jQuery plugin for Hammer.JS - v1.1.3 - 2014-05-20
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
;
!function(T, S) {
    function R() {
        P.READY || (A.determineEventTypes(), B.each(P.gestures, function(b) {
            y.register(b)
        }), A.onTouch(P.DOCUMENT, F, y.detect), A.onTouch(P.DOCUMENT, E, y.detect), P.READY=!0)
    }
    function Q(b, d) {
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }), b.utils.each(["on", "off"], function(a) {
            b.utils[a] = function(c, h, g) {
                d(c)[a](h, function(e) {
                    var f = d.extend({}, e.originalEvent, e);
                    f.button === S && (f.button = e.which - 1), g.call(this, f)
                })
            }
        }), b.Instance.prototype.trigger = function(e, c) {
            var f = d(this.element);
            return f.has(c.target).length && (f = d(c.target)), f.trigger({
                type: e,
                gesture: c
            })
        }, d.fn.hammer = function(a) {
            return this.each(function() {
                var f = d(this), c = f.data("hammer");
                c ? c && a && b.utils.extend(c.options, a) : f.data("hammer", new b(this, a || {}))
            })
        }
    }
    var P = function x(d, c) {
        return new x.Instance(d, c || {})
    };
    P.VERSION = "1.1.3", P.defaults = {
        behavior: {
            userSelect: "none",
            touchAction: "pan-y",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, P.DOCUMENT = document, P.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, P.HAS_TOUCHEVENTS = "ontouchstart" in T, P.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent), P.NO_MOUSEEVENTS = P.HAS_TOUCHEVENTS && P.IS_MOBILE || P.HAS_POINTEREVENTS, P.CALCULATE_INTERVAL = 25;
    var O = {}, N = P.DIRECTION_DOWN = "down", M = P.DIRECTION_LEFT = "left", L = P.DIRECTION_UP = "up", K = P.DIRECTION_RIGHT = "right", J = P.POINTER_MOUSE = "mouse", I = P.POINTER_TOUCH = "touch", H = P.POINTER_PEN = "pen", G = P.EVENT_START = "start", F = P.EVENT_MOVE = "move", E = P.EVENT_END = "end", D = P.EVENT_RELEASE = "release", C = P.EVENT_TOUCH = "touch";
    P.READY=!1, P.plugins = P.plugins || {}, P.gestures = P.gestures || {};
    var B = P.utils = {
        extend: function(b, h, g) {
            for (var f in h) {
                !h.hasOwnProperty(f) || b[f] !== S && g || (b[f] = h[f])
            }
            return b
        },
        on: function(e, d, f) {
            e.addEventListener(d, f, !1)
        },
        off: function(e, d, f) {
            e.removeEventListener(d, f, !1)
        },
        each: function(b, j, i) {
            var h, g;
            if ("forEach" in b) {
                b.forEach(j, i)
            } else {
                if (b.length !== S) {
                    for (h = 0, g = b.length; g > h; h++) {
                        if (j.call(i, b[h], h, b)===!1) {
                            return
                        }
                    }
                } else {
                    for (h in b) {
                        if (b.hasOwnProperty(h) && j.call(i, b[h], h, b)===!1) {
                            return
                        }
                    }
                }
            }
        },
        inStr: function(d, c) {
            return d.indexOf(c)>-1
        },
        inArray: function(g, f) {
            if (g.indexOf) {
                var j = g.indexOf(f);
                return - 1 === j?!1 : j
            }
            for (var i = 0, h = g.length; h > i; i++) {
                if (g[i] === f) {
                    return i
                }
            }
            return !1
        },
        toArray: function(b) {
            return Array.prototype.slice.call(b, 0)
        },
        hasParent: function(d, c) {
            for (; d;) {
                if (d == c) {
                    return !0
                }
                d = d.parentNode
            }
            return !1
        },
        getCenter: function(i) {
            var h = [], n = [], m = [], l = [], k = Math.min, j = Math.max;
            return 1 === i.length ? {
                pageX: i[0].pageX,
                pageY: i[0].pageY,
                clientX: i[0].clientX,
                clientY: i[0].clientY
            } : (B.each(i, function(b) {
                h.push(b.pageX), n.push(b.pageY), m.push(b.clientX), l.push(b.clientY)
            }), {
                pageX: (k.apply(Math, h) + j.apply(Math, h)) / 2,
                pageY: (k.apply(Math, n) + j.apply(Math, n)) / 2,
                clientX: (k.apply(Math, m) + j.apply(Math, m)) / 2,
                clientY: (k.apply(Math, l) + j.apply(Math, l)) / 2
            })
        },
        getVelocity: function(e, d, f) {
            return {
                x: Math.abs(d / e) || 0,
                y: Math.abs(f / e) || 0
            }
        },
        getAngle: function(f, e) {
            var h = e.clientX - f.clientX, g = e.clientY - f.clientY;
            return 180 * Math.atan2(g, h) / Math.PI
        },
        getDirection: function(f, e) {
            var h = Math.abs(f.clientX - e.clientX), g = Math.abs(f.clientY - e.clientY);
            return h >= g ? f.clientX - e.clientX > 0 ? M : K : f.clientY - e.clientY > 0 ? L : N
        },
        getDistance: function(f, e) {
            var h = e.clientX - f.clientX, g = e.clientY - f.clientY;
            return Math.sqrt(h * h + g * g)
        },
        getScale: function(d, c) {
            return d.length >= 2 && c.length >= 2 ? this.getDistance(c[0], c[1]) / this.getDistance(d[0], d[1]) : 1
        },
        getRotation: function(d, c) {
            return d.length >= 2 && c.length >= 2 ? this.getAngle(c[1], c[0]) - this.getAngle(d[1], d[0]) : 0
        },
        isVertical: function(b) {
            return b == L || b == N
        },
        setPrefixedCss: function(i, h, n, m) {
            var l = ["", "Webkit", "Moz", "O", "ms"];
            h = B.toCamelCase(h);
            for (var k = 0; k < l.length; k++) {
                var j = h;
                if (l[k] && (j = l[k] + j.slice(0, 1).toUpperCase() + j.slice(1)), j in i.style) {
                    i.style[j] = (null == m || m) && n || "";
                    break
                }
            }
        },
        toggleBehavior: function(f, e, h) {
            if (e && f && f.style) {
                B.each(e, function(a, c) {
                    B.setPrefixedCss(f, c, a, h)
                });
                var g = h && function() {
                    return !1
                };
                "none" == e.userSelect && (f.onselectstart = g), "none" == e.userDrag && (f.ondragstart = g)
            }
        },
        toCamelCase: function(b) {
            return b.replace(/[_-]([a-z])/g, function(c) {
                return c[1].toUpperCase()
            })
        }
    };
    P.Instance = function(e, c) {
        var f = this;
        R(), this.element = e, this.enabled=!0, B.each(c, function(b, d) {
            delete c[d], c[B.toCamelCase(d)] = b
        }), this.options = B.extend(B.extend({}, P.defaults), c || {}), this.options.behavior && B.toggleBehavior(this.element, this.options.behavior, !0), this.eventStartHandler = A.onTouch(e, G, function(b) {
            f.enabled && b.eventType == G ? y.startDetect(f, b) : b.eventType == C && y.detect(b)
        }), this.eventHandlers = []
    }, P.Instance.prototype = {
        on: function(e, d) {
            var f = this;
            return A.on(f.element, e, d, function(b) {
                f.eventHandlers.push({
                    gesture: b,
                    handler: d
                })
            }), f
        },
        off: function(e, d) {
            var f = this;
            return A.off(f.element, e, d, function(b) {
                var c = B.inArray({
                    gesture: b,
                    handler: d
                });
                c!==!1 && f.eventHandlers.splice(c, 1)
            }), f
        },
        trigger: function(f, e) {
            e || (e = {});
            var h = P.DOCUMENT.createEvent("Event");
            h.initEvent(f, !0, !0), h.gesture = e;
            var g = this.element;
            return B.hasParent(e.target, g) && (g = e.target), g.dispatchEvent(h), this
        },
        enable: function(b) {
            return this.enabled = b, this
        },
        dispose: function() {
            var d, c;
            for (B.toggleBehavior(this.element, this.options.behavior, !1), d =- 1; c = this.eventHandlers[++d];) {
                B.off(this.element, c.gesture, c.handler)
            }
            return this.eventHandlers = [], A.off(this.element, O[G], this.eventStartHandler), null
        }
    };
    var A = P.event = {
        preventMouseEvents: !1,
        started: !1,
        shouldDetect: !1,
        on: function(g, f, j, i) {
            var h = f.split(" ");
            B.each(h, function(a) {
                B.on(g, a, j), i && i(a)
            })
        },
        off: function(g, f, j, i) {
            var h = f.split(" ");
            B.each(h, function(a) {
                B.off(g, a, j), i && i(a)
            })
        },
        onTouch: function(f, e, j) {
            var i = this, h = function(k) {
                var d, c = k.type.toLowerCase(), b = P.HAS_POINTEREVENTS, a = B.inStr(c, "mouse");
                a && i.preventMouseEvents || (a && e == G && 0 === k.button ? (i.preventMouseEvents=!1, i.shouldDetect=!0) : b && e == G ? i.shouldDetect = 1 === k.buttons || z.matchType(I, k) : a || e != G || (i.preventMouseEvents=!0, i.shouldDetect=!0), b && e != E && z.updatePointer(e, k), i.shouldDetect && (d = i.doDetect.call(i, k, e, f, j)), d == E && (i.preventMouseEvents=!1, i.shouldDetect=!1, z.reset()), b && e == E && z.updatePointer(e, k))
            };
            return this.on(f, O[e], h), h
        },
        doDetect: function(t, s, r, q) {
            var p = this.getTouchList(t, s), o = p.length, n = s, m = p.trigger, l = o;
            s == G ? m = C : s == E && (m = D, l = p.length - (t.changedTouches ? t.changedTouches.length : 1)), l > 0 && this.started && (n = F), this.started=!0;
            var k = this.collectEventData(r, n, p, t);
            return s != E && q.call(y, k), m && (k.changedLength = l, k.eventType = m, q.call(y, k), k.eventType = n, delete k.changedLength), n == E && (q.call(y, k), this.started=!1), n
        },
        determineEventTypes: function() {
            var a;
            return a = P.HAS_POINTEREVENTS ? T.PointerEvent ? ["pointerdown", "pointermove", "pointerup pointercancel lostpointercapture"] : ["MSPointerDown", "MSPointerMove", "MSPointerUp MSPointerCancel MSLostPointerCapture"] : P.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], O[G] = a[0], O[F] = a[1], O[E] = a[2], O
        },
        getTouchList: function(g, e) {
            if (P.HAS_POINTEREVENTS) {
                return z.getTouchList()
            }
            if (g.touches) {
                if (e == F) {
                    return g.touches
                }
                var j = [], i = [].concat(B.toArray(g.touches), B.toArray(g.changedTouches)), h = [];
                return B.each(i, function(b) {
                    B.inArray(j, b.identifier)===!1 && h.push(b), j.push(b.identifier)
                }), h
            }
            return g.identifier = 1, [g]
        },
        collectEventData: function(g, f, j, i) {
            var h = I;
            return B.inStr(i.type, "mouse") || z.matchType(J, i) ? h = J : z.matchType(H, i) && (h = H), {
                center: B.getCenter(j),
                timeStamp: Date.now(),
                target: i.target,
                touches: j,
                eventType: f,
                pointerType: h,
                srcEvent: i,
                preventDefault: function() {
                    var b = this.srcEvent;
                    b.preventManipulation && b.preventManipulation(), b.preventDefault && b.preventDefault()
                },
                stopPropagation: function() {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function() {
                    return y.stopDetect()
                }
            }
        }
    }, z = P.PointerEvent = {
        pointers: {},
        getTouchList: function() {
            var b = [];
            return B.each(this.pointers, function(a) {
                b.push(a)
            }), b
        },
        updatePointer: function(d, c) {
            d == E || d != E && 1 !== c.buttons ? delete this.pointers[c.pointerId] : (c.identifier = c.pointerId, this.pointers[c.pointerId] = c)
        },
        matchType: function(f, e) {
            if (!e.pointerType) {
                return !1
            }
            var h = e.pointerType, g = {};
            return g[J] = h === (e.MSPOINTER_TYPE_MOUSE || J), g[I] = h === (e.MSPOINTER_TYPE_TOUCH || I), g[H] = h === (e.MSPOINTER_TYPE_PEN || H), g[f]
        },
        reset: function() {
            this.pointers = {}
        }
    }, y = P.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function(d, c) {
            this.current || (this.stopped=!1, this.current = {
                inst: d,
                startEvent: B.extend({}, c),
                lastEvent: !1,
                lastCalcEvent: !1,
                futureCalcEvent: !1,
                lastCalcData: {},
                name: ""
            }, this.detect(c))
        },
        detect: function(e) {
            if (this.current&&!this.stopped) {
                e = this.extendEventData(e);
                var d = this.current.inst, f = d.options;
                return B.each(this.gestures, function(a) {
                    !this.stopped && d.enabled && f[a.name] && a.handler.call(a, e, d)
                }, this), this.current && (this.current.lastEvent = e), e.eventType == E && this.stopDetect(), e
            }
        },
        stopDetect: function() {
            this.previous = B.extend({}, this.current), this.current = null, this.stopped=!0
        },
        getCalculatedData: function(r, q, p, o, n) {
            var m = this.current, l=!1, k = m.lastCalcEvent, e = m.lastCalcData;
            k && r.timeStamp - k.timeStamp > P.CALCULATE_INTERVAL && (q = k.center, p = r.timeStamp - k.timeStamp, o = r.center.clientX - k.center.clientX, n = r.center.clientY - k.center.clientY, l=!0), (r.eventType == C || r.eventType == D) && (m.futureCalcEvent = r), (!m.lastCalcEvent || l) && (e.velocity = B.getVelocity(p, o, n), e.angle = B.getAngle(q, r.center), e.direction = B.getDirection(q, r.center), m.lastCalcEvent = m.futureCalcEvent || r, m.futureCalcEvent = r), r.velocityX = e.velocity.x, r.velocityY = e.velocity.y, r.interimAngle = e.angle, r.interimDirection = e.direction
        },
        extendEventData: function(i) {
            var h = this.current, n = h.startEvent, m = h.lastEvent || n;
            (i.eventType == C || i.eventType == D) && (n.touches = [], B.each(i.touches, function(b) {
                n.touches.push({
                    clientX: b.clientX,
                    clientY: b.clientY
                })
            }));
            var l = i.timeStamp - n.timeStamp, k = i.center.clientX - n.center.clientX, j = i.center.clientY - n.center.clientY;
            return this.getCalculatedData(i, m.center, l, k, j), B.extend(i, {
                startEvent: n,
                deltaTime: l,
                deltaX: k,
                deltaY: j,
                distance: B.getDistance(n.center, i.center),
                angle: B.getAngle(n.center, i.center),
                direction: B.getDirection(n.center, i.center),
                scale: B.getScale(n.touches, i.touches),
                rotation: B.getRotation(n.touches, i.touches)
            }), i
        },
        register: function(b) {
            var d = b.defaults || {};
            return d[b.name] === S && (d[b.name]=!0), B.extend(P.defaults, d, !0), b.index = b.index || 1000, this.gestures.push(b), this.gestures.sort(function(e, c) {
                return e.index < c.index?-1 : e.index > c.index ? 1 : 0
            }), this.gestures
        }
    };
    !function(e) {
        function d(c, n) {
            var j = y.current;
            if (!(n.options.dragMaxTouches > 0 && c.touches.length > n.options.dragMaxTouches)) {
                switch (c.eventType) {
                case G:
                    f=!1;
                    break;
                case F:
                    if (c.distance < n.options.dragMinDistance && j.name != e) {
                        return
                    }
                    var i = j.startEvent.center;
                    if (j.name != e && (j.name = e, n.options.dragDistanceCorrection && c.distance > 0)) {
                        var h = Math.abs(n.options.dragMinDistance / c.distance);
                        i.pageX += c.deltaX * h, i.pageY += c.deltaY * h, i.clientX += c.deltaX * h, i.clientY += c.deltaY * h, c = y.extendEventData(c)
                    }(j.lastEvent.dragLockToAxis || n.options.dragLockToAxis && n.options.dragLockMinDistance <= c.distance) && (c.dragLockToAxis=!0);
                    var g = j.lastEvent.direction;
                    c.dragLockToAxis && g !== c.direction && (c.direction = B.isVertical(g) ? c.deltaY < 0 ? L : N : c.deltaX < 0 ? M : K), f || (n.trigger(e + "start", c), f=!0), n.trigger(e, c), n.trigger(e + c.direction, c);
                    var a = B.isVertical(c.direction);
                    (n.options.dragBlockVertical && a || n.options.dragBlockHorizontal&&!a) && c.preventDefault();
                    break;
                case D:
                    f && c.changedLength <= n.options.dragMaxTouches && (n.trigger(e + "end", c), f=!1);
                    break;
                case E:
                    f=!1
                }
            }
        }
        var f=!1;
        P.gestures.Drag = {
            name: e,
            index: 50,
            handler: d,
            defaults: {
                dragMinDistance: 10,
                dragDistanceCorrection: !0,
                dragMaxTouches: 1,
                dragBlockHorizontal: !1,
                dragBlockVertical: !1,
                dragLockToAxis: !1,
                dragLockMinDistance: 25
            }
        }
    }("drag"), P.gestures.Gesture = {
        name: "gesture",
        index: 1337,
        handler: function(d, c) {
            c.trigger(this.name, d)
        }
    }, function(e) {
        function d(a, h) {
            var g = h.options, c = y.current;
            switch (a.eventType) {
            case G:
                clearTimeout(f), c.name = e, f = setTimeout(function() {
                    c && c.name == e && h.trigger(e, a)
                }, g.holdTimeout);
                break;
            case F:
                a.distance > g.holdThreshold && clearTimeout(f);
                break;
            case D:
                clearTimeout(f)
            }
        }
        var f;
        P.gestures.Hold = {
            name: e,
            index: 10,
            defaults: {
                holdTimeout: 500,
                holdThreshold: 2
            },
            handler: d
        }
    }("hold"), P.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function(d, c) {
            d.eventType == D && c.trigger(this.name, d)
        }
    }, P.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipeMinTouches: 1,
            swipeMaxTouches: 1,
            swipeVelocityX: 0.6,
            swipeVelocityY: 0.6
        },
        handler: function(f, e) {
            if (f.eventType == D) {
                var h = f.touches.length, g = e.options;
                if (h < g.swipeMinTouches || h > g.swipeMaxTouches) {
                    return
                }(f.velocityX > g.swipeVelocityX || f.velocityY > g.swipeVelocityY) && (e.trigger(this.name, f), e.trigger(this.name + f.direction, f))
            }
        }
    }, function(e) {
        function d(a, n) {
            var m, l, k = n.options, j = y.current, c = y.previous;
            switch (a.eventType) {
            case G:
                f=!1;
                break;
            case F:
                f = f || a.distance > k.tapMaxDistance;
                break;
            case E:
                !B.inStr(a.srcEvent.type, "cancel") && a.deltaTime < k.tapMaxTime&&!f && (m = c && c.lastEvent && a.timeStamp - c.lastEvent.timeStamp, l=!1, c && c.name == e && m && m < k.doubleTapInterval && a.distance < k.doubleTapDistance && (n.trigger("doubletap", a), l=!0), (!l || k.tapAlways) && (j.name = e, n.trigger(j.name, a)))
            }
        }
        var f=!1;
        P.gestures.Tap = {
            name: e,
            index: 100,
            handler: d,
            defaults: {
                tapMaxTime: 250,
                tapMaxDistance: 10,
                tapAlways: !0,
                doubleTapDistance: 20,
                doubleTapInterval: 300
            }
        }
    }("tap"), P.gestures.Touch = {
        name: "touch",
        index: - 1 / 0,
        defaults: {
            preventDefault: !1,
            preventMouse: !1
        },
        handler: function(d, c) {
            return c.options.preventMouse && d.pointerType == J ? void d.stopDetect() : (c.options.preventDefault && d.preventDefault(), void (d.eventType == C && c.trigger("touch", d)))
        }
    }, function(e) {
        function d(a, h) {
            switch (a.eventType) {
            case G:
                f=!1;
                break;
            case F:
                if (a.touches.length < 2) {
                    return
                }
                var g = Math.abs(1 - a.scale), c = Math.abs(a.rotation);
                if (g < h.options.transformMinScale && c < h.options.transformMinRotation) {
                    return
                }
                y.current.name = e, f || (h.trigger(e + "start", a), f=!0), h.trigger(e, a), c > h.options.transformMinRotation && h.trigger("rotate", a), g > h.options.transformMinScale && (h.trigger("pinch", a), h.trigger("pinch" + (a.scale < 1 ? "in" : "out"), a));
                break;
            case D:
                f && a.changedLength < 2 && (h.trigger(e + "end", a), f=!1)
            }
        }
        var f=!1;
        P.gestures.Transform = {
            name: e,
            index: 45,
            defaults: {
                transformMinScale: 0.01,
                transformMinRotation: 1
            },
            handler: d
        }
    }("transform"), T.Hammer = P, "undefined" != typeof module && module.exports && (module.exports = P), "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return Q(T.Hammer, a)
    }) : Q(T.Hammer, T.jQuery || T.Zepto)
}(window);
/*!
 * Masonry PACKAGED v3.1.5
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
;
!function(f) {
    function e() {}
    function h(b) {
        function j(a) {
            a.prototype.option || (a.prototype.option = function(c) {
                b.isPlainObject(c) && (this.options = b.extend(!0, this.options, c))
            })
        }
        function i(a, k) {
            b.fn[a] = function(r) {
                if ("string" == typeof r) {
                    for (var q = g.call(arguments, 1), p = 0, o = this.length; o > p; p++) {
                        var n = this[p], m = b.data(n, a);
                        if (m) {
                            if (b.isFunction(m[r]) && "_" !== r.charAt(0)) {
                                var c = m[r].apply(m, q);
                                if (void 0 !== c) {
                                    return c
                                }
                            } else {
                                d("no such method '" + r + "' for " + a + " instance")
                            }
                        } else {
                            d("cannot call methods on " + a + " prior to initialization; attempted to call '" + r + "'")
                        }
                    }
                    return this
                }
                return this.each(function() {
                    var l = b.data(this, a);
                    l ? (l.option(r), l._init()) : (l = new k(this, r), b.data(this, a, l))
                })
            }
        }
        if (b) {
            var d = "undefined" == typeof console ? e: function(c) {
                console.error(c)
            };
            return b.bridget = function(k, c) {
                j(c), i(k, c)
            }, b.bridget
        }
    }
    var g = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], h) : h(f.jQuery)
}(window), function(h) {
    function g(a) {
        var d = h.event;
        return d.target = d.target || d.srcElement || a, d
    }
    var l = document.documentElement, k = function() {};
    l.addEventListener ? k = function(e, d, f) {
        e.addEventListener(d, f, !1)
    } : l.attachEvent && (k = function(b, f, e) {
        b[f + e] = e.handleEvent ? function() {
            var a = g(b);
            e.handleEvent.call(e, a)
        } : function() {
            var a = g(b);
            e.call(b, a)
        }, b.attachEvent("on" + f, b[f + e])
    });
    var j = function() {};
    l.removeEventListener ? j = function(e, d, f) {
        e.removeEventListener(d, f, !1)
    } : l.detachEvent && (j = function(f, e, n) {
        f.detachEvent("on" + e, f[e + n]);
        try {
            delete f[e + n]
        } catch (m) {
            f[e + n] = void 0
        }
    });
    var i = {
        bind: k,
        unbind: j
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", i) : "object" == typeof exports ? module.exports = i : h.eventie = i
}(this), function(h) {
    function g(b) {
        "function" == typeof b && (g.isReady ? b() : i.push(b))
    }
    function l(b) {
        var n = "readystatechange" === b.type && "complete" !== j.readyState;
        if (!g.isReady&&!n) {
            g.isReady=!0;
            for (var m = 0, f = i.length; f > m; m++) {
                var e = i[m];
                e()
            }
        }
    }
    function k(a) {
        return a.bind(j, "DOMContentLoaded", l), a.bind(j, "readystatechange", l), a.bind(h, "load", l), g
    }
    var j = h.document, i = [];
    g.isReady=!1, "function" == typeof define && define.amd ? (g.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], k)) : h.docReady = k(h.eventie)
}(this), function() {
    function h() {}
    function g(e, d) {
        for (var f = e.length; f--;) {
            if (e[f].listener === d) {
                return f
            }
        }
        return - 1
    }
    function l(b) {
        return function() {
            return this[b].apply(this, arguments)
        }
    }
    var k = h.prototype, j = this, i = j.EventEmitter;
    k.getListeners = function(f) {
        var e, n, m = this._getEvents();
        if (f instanceof RegExp) {
            e = {};
            for (n in m) {
                m.hasOwnProperty(n) && f.test(n) && (e[n] = m[n])
            }
        } else {
            e = m[f] || (m[f] = [])
        }
        return e
    }, k.flattenListeners = function(e) {
        var d, f = [];
        for (d = 0; d < e.length; d += 1) {
            f.push(e[d].listener)
        }
        return f
    }, k.getListenersAsObject = function(e) {
        var d, f = this.getListeners(e);
        return f instanceof Array && (d = {}, d[e] = f), d || f
    }, k.addListener = function(b, p) {
        var o, n = this.getListenersAsObject(b), m = "object" == typeof p;
        for (o in n) {
            n.hasOwnProperty(o)&&-1 === g(n[o], p) && n[o].push(m ? p : {
                listener: p,
                once: !1
            })
        }
        return this
    }, k.on = l("addListener"), k.addOnceListener = function(d, c) {
        return this.addListener(d, {
            listener: c,
            once: !0
        })
    }, k.once = l("addOnceListener"), k.defineEvent = function(b) {
        return this.getListeners(b), this
    }, k.defineEvents = function(d) {
        for (var c = 0; c < d.length; c += 1) {
            this.defineEvent(d[c])
        }
        return this
    }, k.removeListener = function(b, p) {
        var o, n, m = this.getListenersAsObject(b);
        for (n in m) {
            m.hasOwnProperty(n) && (o = g(m[n], p), - 1 !== o && m[n].splice(o, 1))
        }
        return this
    }, k.off = l("removeListener"), k.addListeners = function(d, c) {
        return this.manipulateListeners(!1, d, c)
    }, k.removeListeners = function(d, c) {
        return this.manipulateListeners(!0, d, c)
    }, k.manipulateListeners = function(n, m, s) {
        var r, q, p = n ? this.removeListener: this.addListener, o = n ? this.removeListeners: this.addListeners;
        if ("object" != typeof m || m instanceof RegExp) {
            for (r = s.length; r--;) {
                p.call(this, m, s[r])
            }
        } else {
            for (r in m) {
                m.hasOwnProperty(r) && (q = m[r]) && ("function" == typeof q ? p.call(this, r, q) : o.call(this, r, q))
            }
        }
        return this
    }, k.removeEvent = function(f) {
        var e, n = typeof f, m = this._getEvents();
        if ("string" === n) {
            delete m[f]
        } else {
            if (f instanceof RegExp) {
                for (e in m) {
                    m.hasOwnProperty(e) && f.test(e) && delete m[e]
                }
            } else {
                delete this._events
            }
        }
        return this
    }, k.removeAllListeners = l("removeEvent"), k.emitEvent = function(n, m) {
        var s, r, q, p, o = this.getListenersAsObject(n);
        for (q in o) {
            if (o.hasOwnProperty(q)) {
                for (r = o[q].length; r--;) {
                    s = o[q][r], s.once===!0 && this.removeListener(n, s.listener), p = s.listener.apply(this, m || []), p === this._getOnceReturnValue() && this.removeListener(n, s.listener)
                }
            }
        }
        return this
    }, k.trigger = l("emitEvent"), k.emit = function(d) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(d, c)
    }, k.setOnceReturnValue = function(b) {
        return this._onceReturnValue = b, this
    }, k._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, k._getEvents = function() {
        return this._events || (this._events = {})
    }, h.noConflict = function() {
        return j.EventEmitter = i, h
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return h
    }) : "object" == typeof module && module.exports ? module.exports = h : this.EventEmitter = h
}.call(this), function(f) {
    function e(d) {
        if (d) {
            if ("string" == typeof g[d]) {
                return d
            }
            d = d.charAt(0).toUpperCase() + d.slice(1);
            for (var c, j = 0, i = h.length; i > j; j++) {
                if (c = h[j] + d, "string" == typeof g[c]) {
                    return c
                }
            }
        }
    }
    var h = "Webkit Moz ms Ms O".split(" "), g = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : f.getStyleProperty = e
}(window), function(i) {
    function h(e) {
        var d = parseFloat(e), f =- 1 === e.indexOf("%")&&!isNaN(d);
        return f && d
    }
    function n() {
        for (var f = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, o = j.length; o > e; e++) {
            var g = j[e];
            f[g] = 0
        }
        return f
    }
    function m(b) {
        function g(Q) {
            if ("string" == typeof Q && (Q = document.querySelector(Q)), Q && "object" == typeof Q && Q.nodeType) {
                var P = k(Q);
                if ("none" === P.display) {
                    return n()
                }
                var O = {};
                O.width = Q.offsetWidth, O.height = Q.offsetHeight;
                for (var N = O.isBorderBox=!(!c ||!P[c] || "border-box" !== P[c]), M = 0, L = j.length; L > M; M++) {
                    var K = j[M], J = P[K];
                    J = f(Q, J);
                    var I = parseFloat(J);
                    O[K] = isNaN(I) ? 0 : I
                }
                var H = O.paddingLeft + O.paddingRight, G = O.paddingTop + O.paddingBottom, F = O.marginLeft + O.marginRight, E = O.marginTop + O.marginBottom, D = O.borderLeftWidth + O.borderRightWidth, C = O.borderTopWidth + O.borderBottomWidth, B = N && e, A = h(P.width);
                A!==!1 && (O.width = A + (B ? 0 : H + D));
                var z = h(P.height);
                return z!==!1 && (O.height = z + (B ? 0 : G + C)), O.innerWidth = O.width - (H + D), O.innerHeight = O.height - (G + C), O.outerWidth = O.width + F, O.outerHeight = O.height + E, O
            }
        }
        function f(p, o) {
            if (l||-1 === o.indexOf("%")) {
                return o
            }
            var t = p.style, s = t.left, r = p.runtimeStyle, q = r && r.left;
            return q && (r.left = p.currentStyle.left), t.left = o, o = t.pixelLeft, t.left = s, q && (r.left = q), o
        }
        var e, c = b("boxSizing");
        return function() {
            if (c) {
                var o = document.createElement("div");
                o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[c] = "border-box";
                var q = document.body || document.documentElement;
                q.appendChild(o);
                var p = k(o);
                e = 200 === h(p.width), q.removeChild(o)
            }
        }(), g
    }
    var l = i.getComputedStyle, k = l ? function(b) {
        return l(b, null)
    }
    : function(b) {
        return b.currentStyle
    }, j = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], m) : "object" == typeof exports ? module.exports = m(require("get-style-property")) : i.getSize = m(i.getStyleProperty)
}(window), function(t, s) {
    function r(d, c) {
        return d[m](c)
    }
    function q(d) {
        if (!d.parentNode) {
            var c = document.createDocumentFragment();
            c.appendChild(d)
        }
    }
    function p(g, d) {
        q(g);
        for (var j = g.parentNode.querySelectorAll(d), i = 0, h = j.length; h > i; i++) {
            if (j[i] === g) {
                return !0
            }
        }
        return !1
    }
    function o(d, c) {
        return q(d), r(d, c)
    }
    var n, m = function() {
        if (s.matchesSelector) {
            return "matchesSelector"
        }
        for (var b = ["webkit", "moz", "ms", "o"], j = 0, i = b.length; i > j; j++) {
            var h = b[j], g = h + "MatchesSelector";
            if (s[g]) {
                return g
            }
        }
    }();
    if (m) {
        var l = document.createElement("div"), k = r(l, "div");
        n = k ? r : o
    } else {
        n = p
    }
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return n
    }) : window.matchesSelector = n
}(this, Element.prototype), function(i) {
    function h(e, d) {
        for (var f in d) {
            e[f] = d[f]
        }
        return e
    }
    function n(d) {
        for (var c in d) {
            return !1
        }
        return c = null, !0
    }
    function m(b) {
        return b.replace(/([A-Z])/g, function(c) {
            return "-" + c.toLowerCase()
        })
    }
    function l(C, B, A) {
        function z(f, e) {
            f && (this.element = f, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var y = A("transition"), x = A("transform"), w = y && x, v=!!A("perspective"), u = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }
        [y], t = ["transform", "transition", "transitionDuration", "transitionProperty"], g = function() {
            for (var o = {}, f = 0, r = t.length; r > f; f++) {
                var q = t[f], p = A(q);
                p && p !== q && (o[q] = p)
            }
            return o
        }();
        h(z.prototype, C.prototype), z.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, z.prototype.handleEvent = function(f) {
            var e = "on" + f.type;
            this[e] && this[e](f)
        }, z.prototype.getSize = function() {
            this.size = B(this.element)
        }, z.prototype.css = function(f) {
            var e = this.element.style;
            for (var p in f) {
                var o = g[p] || p;
                e[o] = f[p]
            }
        }, z.prototype.getPosition = function() {
            var p = j(this.element), o = this.layout.options, F = o.isOriginLeft, E = o.isOriginTop, s = parseInt(p[F ? "left": "right"], 10), r = parseInt(p[E ? "top": "bottom"], 10);
            s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r;
            var q = this.layout.size;
            s -= F ? q.paddingLeft : q.paddingRight, r -= E ? q.paddingTop : q.paddingBottom, this.position.x = s, this.position.y = r
        }, z.prototype.layoutPosition = function() {
            var f = this.layout.size, e = this.layout.options, o = {};
            e.isOriginLeft ? (o.left = this.position.x + f.paddingLeft + "px", o.right = "") : (o.right = this.position.x + f.paddingRight + "px", o.left = ""), e.isOriginTop ? (o.top = this.position.y + f.paddingTop + "px", o.bottom = "") : (o.bottom = this.position.y + f.paddingBottom + "px", o.top = ""), this.css(o), this.emitEvent("layout", [this])
        };
        var d = v ? function(f, e) {
            return "translate3d(" + f + "px, " + e + "px, 0)"
        }
        : function(f, e) {
            return "translate(" + f + "px, " + e + "px)"
        };
        z.prototype._transitionTo = function(J, I) {
            this.getPosition();
            var H = this.position.x, G = this.position.y, F = parseInt(J, 10), E = parseInt(I, 10), s = F === this.position.x && E === this.position.y;
            if (this.setPosition(J, I), s&&!this.isTransitioning) {
                return void this.layoutPosition()
            }
            var r = J - H, q = I - G, p = {}, o = this.layout.options;
            r = o.isOriginLeft ? r : - r, q = o.isOriginTop ? q : - q, p.transform = d(r, q), this.transition({
                to: p,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, z.prototype.goTo = function(f, e) {
            this.setPosition(f, e), this.layoutPosition()
        }, z.prototype.moveTo = w ? z.prototype._transitionTo : z.prototype.goTo, z.prototype.setPosition = function(f, e) {
            this.position.x = parseInt(f, 10), this.position.y = parseInt(e, 10)
        }, z.prototype._nonTransition = function(f) {
            this.css(f.to), f.isCleaning && this._removeStyles(f.to);
            for (var e in f.onTransitionEnd) {
                f.onTransitionEnd[e].call(this)
            }
        }, z.prototype._transition = function(f) {
            if (!parseFloat(this.layout.options.transitionDuration)) {
                return void this._nonTransition(f)
            }
            var e = this._transn;
            for (var p in f.onTransitionEnd) {
                e.onEnd[p] = f.onTransitionEnd[p]
            }
            for (p in f.to) {
                e.ingProperties[p]=!0, f.isCleaning && (e.clean[p]=!0)
            }
            if (f.from) {
                this.css(f.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(f.to), this.css(f.to), this.isTransitioning=!0
        };
        var c = x && m(x) + ",opacity";
        z.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: c,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(u, this, !1))
        }, z.prototype.transition = z.prototype[y ? "_transition": "_nonTransition"], z.prototype.onwebkitTransitionEnd = function(e) {
            this.ontransitionend(e)
        }, z.prototype.onotransitionend = function(e) {
            this.ontransitionend(e)
        };
        var b = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        z.prototype.ontransitionend = function(o) {
            if (o.target === this.element) {
                var f = this._transn, q = b[o.propertyName] || o.propertyName;
                if (delete f.ingProperties[q], n(f.ingProperties) && this.disableTransition(), q in f.clean && (this.element.style[o.propertyName] = "", delete f.clean[q]), q in f.onEnd) {
                    var p = f.onEnd[q];
                    p.call(this), delete f.onEnd[q]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, z.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning=!1
        }, z.prototype._removeStyles = function(f) {
            var e = {};
            for (var o in f) {
                e[o] = ""
            }
            this.css(e)
        };
        var D = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return z.prototype.removeTransitionStyles = function() {
            this.css(D)
        }, z.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, z.prototype.remove = function() {
            if (!y ||!parseFloat(this.layout.options.transitionDuration)) {
                return void this.removeElem()
            }
            var e = this;
            this.on("transitionEnd", function() {
                return e.removeElem(), !0
            }), this.hide()
        }, z.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var e = this.layout.options;
            this.transition({
                from: e.hiddenStyle,
                to: e.visibleStyle,
                isCleaning: !0
            })
        }, z.prototype.hide = function() {
            this.isHidden=!0, this.css({
                display: ""
            });
            var e = this.layout.options;
            this.transition({
                from: e.visibleStyle,
                to: e.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function() {
                        this.isHidden && this.css({
                            display: "none"
                        })
                    }
                }
            })
        }, z.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, z
    }
    var k = i.getComputedStyle, j = k ? function(b) {
        return k(b, null)
    }
    : function(b) {
        return b.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], l) : (i.Outlayer = {}, i.Outlayer.Item = l(i.EventEmitter, i.getSize, i.getStyleProperty))
}(window), function(B) {
    function A(e, d) {
        for (var f in d) {
            e[f] = d[f]
        }
        return e
    }
    function z(b) {
        return "[object Array]" === q.call(b)
    }
    function y(f) {
        var c = [];
        if (z(f)) {
            c = f
        } else {
            if (f && "number" == typeof f.length) {
                for (var h = 0, g = f.length; g > h; h++) {
                    c.push(f[h])
                }
            } else {
                c.push(f)
            }
        }
        return c
    }
    function x(e, d) {
        var f = o(d, e);
        - 1 !== f && d.splice(f, 1)
    }
    function w(b) {
        return b.replace(/(.)([A-Z])/g, function(e, d, f) {
            return d + "-" + f
        }).toLowerCase()
    }
    function v(j, i, h, f, e, d) {
        function b(g, m) {
            if ("string" == typeof g && (g = u.querySelector(g)), !g ||!p(g)) {
                return void (t && t.error("Bad " + this.constructor.namespace + " element: " + g))
            }
            this.element = g, this.options = A({}, this.constructor.defaults), this.option(m);
            var l=++a;
            this.element.outlayerGUID = l, k[l] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = 0, k = {};
        return b.namespace = "outlayer", b.Item = d, b.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, A(b.prototype, h.prototype), b.prototype.option = function(c) {
            A(this.options, c)
        }, b.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), A(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, b.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, b.prototype._itemize = function(m) {
            for (var l = this._filterFindItemElements(m), G = this.constructor.Item, F = [], E = 0, D = l.length; D > E; E++) {
                var C = l[E], n = new G(C, this);
                F.push(n)
            }
            return F
        }, b.prototype._filterFindItemElements = function(H) {
            H = y(H);
            for (var G = this.options.itemSelector, F = [], E = 0, D = H.length; D > E; E++) {
                var C = H[E];
                if (p(C)) {
                    if (G) {
                        e(C, G) && F.push(C);
                        for (var n = C.querySelectorAll(G), m = 0, l = n.length; l > m; m++) {
                            F.push(n[m])
                        }
                    } else {
                        F.push(C)
                    }
                }
            }
            return F
        }, b.prototype.getItemElements = function() {
            for (var l = [], g = 0, m = this.items.length; m > g; g++) {
                l.push(this.items[g].element)
            }
            return l
        }, b.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var c = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, c), this._isLayoutInited=!0
        }, b.prototype._init = b.prototype.layout, b.prototype._resetLayout = function() {
            this.getSize()
        }, b.prototype.getSize = function() {
            this.size = f(this.element)
        }, b.prototype._getMeasurement = function(l, g) {
            var n, m = this.options[l];
            m ? ("string" == typeof m ? n = this.element.querySelector(m) : p(m) && (n = m), this[l] = n ? f(n)[g] : m) : this[l] = 0
        }, b.prototype.layoutItems = function(g, c) {
            g = this._getItemsForLayout(g), this._layoutItems(g, c), this._postLayout()
        }, b.prototype._getItemsForLayout = function(l) {
            for (var g = [], C = 0, n = l.length; n > C; C++) {
                var m = l[C];
                m.isIgnored || g.push(m)
            }
            return g
        }, b.prototype._layoutItems = function(H, G) {
            function F() {
                E.emitEvent("layoutComplete", [E, H])
            }
            var E = this;
            if (!H ||!H.length) {
                return void F()
            }
            this._itemsOn(H, "layout", F);
            for (var D = [], C = 0, n = H.length; n > C; C++) {
                var m = H[C], l = this._getItemLayoutPosition(m);
                l.item = m, l.isInstant = G || m.isLayoutInstant, D.push(l)
            }
            this._processLayoutQueue(D)
        }, b.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, b.prototype._processLayoutQueue = function(l) {
            for (var g = 0, n = l.length; n > g; g++) {
                var m = l[g];
                this._positionItem(m.item, m.x, m.y, m.isInstant)
            }
        }, b.prototype._positionItem = function(l, g, n, m) {
            m ? l.goTo(g, n) : l.moveTo(g, n)
        }, b.prototype._postLayout = function() {
            this.resizeContainer()
        }, b.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var c = this._getContainerSize();
                c && (this._setContainerMeasure(c.width, !0), this._setContainerMeasure(c.height, !1))
            }
        }, b.prototype._getContainerSize = r, b.prototype._setContainerMeasure = function(l, g) {
            if (void 0 !== l) {
                var m = this.size;
                m.isBorderBox && (l += g ? m.paddingLeft + m.paddingRight + m.borderLeftWidth + m.borderRightWidth : m.paddingBottom + m.paddingTop + m.borderTopWidth + m.borderBottomWidth), l = Math.max(l, 0), this.element.style[g ? "width": "height"] = l + "px"
            }
        }, b.prototype._itemsOn = function(I, H, G) {
            function F() {
                return E++, E === D && G.call(C), !0
            }
            for (var E = 0, D = I.length, C = this, n = 0, m = I.length; m > n; n++) {
                var l = I[n];
                l.on(H, F)
            }
        }, b.prototype.ignore = function(g) {
            var c = this.getItem(g);
            c && (c.isIgnored=!0)
        }, b.prototype.unignore = function(g) {
            var c = this.getItem(g);
            c && delete c.isIgnored
        }, b.prototype.stamp = function(l) {
            if (l = this._find(l)) {
                this.stamps = this.stamps.concat(l);
                for (var g = 0, n = l.length; n > g; g++) {
                    var m = l[g];
                    this.ignore(m)
                }
            }
        }, b.prototype.unstamp = function(l) {
            if (l = this._find(l)) {
                for (var g = 0, n = l.length; n > g; g++) {
                    var m = l[g];
                    x(m, this.stamps), this.unignore(m)
                }
            }
        }, b.prototype._find = function(c) {
            return c ? ("string" == typeof c && (c = this.element.querySelectorAll(c)), c = y(c)) : void 0
        }, b.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var l = 0, g = this.stamps.length; g > l; l++) {
                    var m = this.stamps[l];
                    this._manageStamp(m)
                }
            }
        }, b.prototype._getBoundingRect = function() {
            var g = this.element.getBoundingClientRect(), c = this.size;
            this._boundingRect = {
                left: g.left + c.paddingLeft + c.borderLeftWidth,
                top: g.top + c.paddingTop + c.borderTopWidth,
                right: g.right - (c.paddingRight + c.borderRightWidth),
                bottom: g.bottom - (c.paddingBottom + c.borderBottomWidth)
            }
        }, b.prototype._manageStamp = r, b.prototype._getElementOffset = function(l) {
            var g = l.getBoundingClientRect(), C = this._boundingRect, n = f(l), m = {
                left: g.left - C.left - n.marginLeft,
                top: g.top - C.top - n.marginTop,
                right: C.right - g.right - n.marginRight,
                bottom: C.bottom - g.bottom - n.marginBottom
            };
            return m
        }, b.prototype.handleEvent = function(g) {
            var c = "on" + g.type;
            this[c] && this[c](g)
        }, b.prototype.bindResize = function() {
            this.isResizeBound || (j.bind(B, "resize", this), this.isResizeBound=!0)
        }, b.prototype.unbindResize = function() {
            this.isResizeBound && j.unbind(B, "resize", this), this.isResizeBound=!1
        }, b.prototype.onresize = function() {
            function g() {
                c.resize(), delete c.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var c = this;
            this.resizeTimeout = setTimeout(g, 100)
        }, b.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, b.prototype.needsResizeLayout = function() {
            var g = f(this.element), c = this.size && g;
            return c && g.innerWidth !== this.size.innerWidth
        }, b.prototype.addItems = function(g) {
            var c = this._itemize(g);
            return c.length && (this.items = this.items.concat(c)), c
        }, b.prototype.appended = function(g) {
            var c = this.addItems(g);
            c.length && (this.layoutItems(c, !0), this.reveal(c))
        }, b.prototype.prepended = function(l) {
            var g = this._itemize(l);
            if (g.length) {
                var m = this.items.slice(0);
                this.items = g.concat(m), this._resetLayout(), this._manageStamps(), this.layoutItems(g, !0), this.reveal(g), this.layoutItems(m)
            }
        }, b.prototype.reveal = function(l) {
            var g = l && l.length;
            if (g) {
                for (var n = 0; g > n; n++) {
                    var m = l[n];
                    m.reveal()
                }
            }
        }, b.prototype.hide = function(l) {
            var g = l && l.length;
            if (g) {
                for (var n = 0; g > n; n++) {
                    var m = l[n];
                    m.hide()
                }
            }
        }, b.prototype.getItem = function(l) {
            for (var g = 0, n = this.items.length; n > g; g++) {
                var m = this.items[g];
                if (m.element === l) {
                    return m
                }
            }
        }, b.prototype.getItems = function(l) {
            if (l && l.length) {
                for (var g = [], D = 0, C = l.length; C > D; D++) {
                    var n = l[D], m = this.getItem(n);
                    m && g.push(m)
                }
                return g
            }
        }, b.prototype.remove = function(m) {
            m = y(m);
            var l = this.getItems(m);
            if (l && l.length) {
                this._itemsOn(l, "remove", function() {
                    this.emitEvent("removeComplete", [this, l])
                });
                for (var D = 0, C = l.length; C > D; D++) {
                    var n = l[D];
                    n.remove(), x(n, this.items)
                }
            }
        }, b.prototype.destroy = function() {
            var l = this.element.style;
            l.height = "", l.position = "", l.width = "";
            for (var g = 0, n = this.items.length; n > g; g++) {
                var m = this.items[g];
                m.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, s && s.removeData(this.element, this.constructor.namespace)
        }, b.data = function(g) {
            var c = g && g.outlayerGUID;
            return c && k[c]
        }, b.create = function(g, m) {
            function l() {
                b.apply(this, arguments)
            }
            return Object.create ? l.prototype = Object.create(b.prototype) : A(l.prototype, b.prototype), l.prototype.constructor = l, l.defaults = A({}, b.defaults), A(l.defaults, m), l.prototype.settings = {}, l.namespace = g, l.data = b.data, l.Item = function() {
                d.apply(this, arguments)
            }, l.Item.prototype = new d, i(function() {
                for (var L = w(g), K = u.querySelectorAll(".js-" + L), J = "data-" + L + "-options", I = 0, H = K.length; H > I; I++) {
                    var G, F = K[I], E = F.getAttribute(J);
                    try {
                        G = E && JSON.parse(E)
                    } catch (D) {
                        t && t.error("Error parsing " + J + " on " + F.nodeName.toLowerCase() + (F.id ? "#" + F.id : "") + ": " + D);
                        continue
                    }
                    var C = new l(F, G);
                    s && s.data(F, g, C)
                }
            }), s && s.bridget && s.bridget(g, l), l
        }, b.Item = d, b
    }
    var u = B.document, t = B.console, s = B.jQuery, r = function() {}, q = Object.prototype.toString, p = "object" == typeof HTMLElement ? function(b) {
        return b instanceof HTMLElement
    }
    : function(b) {
        return b && "object" == typeof b && 1 === b.nodeType && "string" == typeof b.nodeName
    }, o = Array.prototype.indexOf ? function(d, c) {
        return d.indexOf(c)
    }
    : function(f, e) {
        for (var h = 0, g = f.length; g > h; h++) {
            if (f[h] === e) {
                return h
            }
        }
        return - 1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], v) : B.Outlayer = v(B.eventie, B.docReady, B.EventEmitter, B.getSize, B.matchesSelector, B.Outlayer.Item)
}(window), function(e) {
    function d(g, c) {
        var h = g.create("masonry");
        return h.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var b = this.cols;
            for (this.colYs = []; b--;) {
                this.colYs.push(0)
            }
            this.maxY = 0
        }, h.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var b = this.items[0], i = b && b.element;
                this.columnWidth = i && c(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, h.prototype.getContainerWidth = function() {
            var b = this.options.isFitWidth ? this.element.parentNode: this.element, i = c(b);
            this.containerWidth = i && i.innerWidth
        }, h.prototype._getItemLayoutPosition = function(w) {
            w.getSize();
            var v = w.size.outerWidth%this.columnWidth, u = v && 1 > v ? "round": "ceil", t = Math[u](w.size.outerWidth / this.columnWidth);
            t = Math.min(t, this.cols);
            for (var s = this._getColGroup(t), r = Math.min.apply(Math, s), q = f(s, r), p = {
                x: this.columnWidth * q,
                y: r
            }, o = r + w.size.outerHeight, n = this.cols + 1 - s.length, m = 0; n > m; m++) {
                this.colYs[q + m] = o
            }
            return p
        }, h.prototype._getColGroup = function(j) {
            if (2 > j) {
                return this.colYs
            }
            for (var i = [], m = this.cols + 1 - j, l = 0; m > l; l++) {
                var k = this.colYs.slice(l, l + j);
                i[l] = Math.max.apply(Math, k)
            }
            return i
        }, h.prototype._manageStamp = function(r) {
            var q = c(r), p = this._getElementOffset(r), o = this.options.isOriginLeft ? p.left: p.right, n = o + q.outerWidth, m = Math.floor(o / this.columnWidth);
            m = Math.max(0, m);
            var l = Math.floor(n / this.columnWidth);
            l -= n%this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var k = (this.options.isOriginTop ? p.top : p.bottom) + q.outerHeight, b = m; l >= b; b++) {
                this.colYs[b] = Math.max(k, this.colYs[b])
            }
        }, h.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var b = {
                height: this.maxY
            };
            return this.options.isFitWidth && (b.width = this._getContainerFitWidth()), b
        }, h.prototype._getContainerFitWidth = function() {
            for (var j = 0, i = this.cols; --i && 0 === this.colYs[i];) {
                j++
            }
            return (this.cols - j) * this.columnWidth - this.gutter
        }, h.prototype.needsResizeLayout = function() {
            var b = this.containerWidth;
            return this.getContainerWidth(), b !== this.containerWidth
        }, h
    }
    var f = Array.prototype.indexOf ? function(g, c) {
        return g.indexOf(c)
    }
    : function(h, g) {
        for (var k = 0, j = h.length; j > k; k++) {
            var i = h[k];
            if (i === g) {
                return k
            }
        }
        return - 1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], d) : e.Masonry = d(e.Outlayer, e.getSize)
}(window);
(function(a) {
    a(["jquery"], function(d) {
        var b = d.scrollTo = function(f, e, g) {
            return d(window).scrollTo(f, e, g)
        };
        b.defaults = {
            axis: "xy",
            duration: parseFloat(d.fn.jquery) >= 1.3 ? 0: 1,
            limit: !0
        };
        b.window = function(e) {
            return d(window)._scrollable()
        };
        d.fn._scrollable = function() {
            return this.map(function() {
                var f = this, g=!f.nodeName || d.inArray(f.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])!=-1;
                if (!g) {
                    return f
                }
                var e = (f.contentWindow || f).document || f.ownerDocument || f;
                return /webkit/i.test(navigator.userAgent) || e.compatMode == "BackCompat" ? e.body : e.documentElement
            })
        };
        d.fn.scrollTo = function(j, i, e) {
            if (typeof i == "object") {
                e = i;
                i = 0
            }
            if (typeof e == "function") {
                e = {
                    onAfter: e
                }
            }
            if (j == "max") {
                j = 9000000000
            }
            e = d.extend({}, b.defaults, e);
            i = i || e.duration;
            e.queue = e.queue && e.axis.length > 1;
            if (e.queue) {
                i/=2
            }
            e.offset = c(e.offset);
            e.over = c(e.over);
            return this._scrollable().each(function() {
                if (j == null) {
                    return
                }
                var o = this, k = d(o), l = j, h, f = {}, n = k.is("html,body");
                switch (typeof l) {
                case"number":
                case"string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(l)) {
                        l = c(l);
                        break
                    }
                    l = n ? d(l) : d(l, this);
                    if (!l.length) {
                        return
                    }
                case"object":
                    if (l.is || l.style) {
                        h = (l = d(l)).offset()
                    }
                }
                var m = d.isFunction(e.offset) && e.offset(o, l) || e.offset;
                d.each(e.axis.split(""), function(u, s) {
                    var q = s == "x" ? "Left": "Top", w = q.toLowerCase(), t = "scroll" + q, r = o[t], p = b.max(o, s);
                    if (h) {
                        f[t] = h[w] + (n ? 0 : r - k.offset()[w]);
                        if (e.margin) {
                            f[t] -= parseInt(l.css("margin" + q)) || 0;
                            f[t] -= parseInt(l.css("border" + q + "Width")) || 0
                        }
                        f[t] += m[w] || 0;
                        if (e.over[w]) {
                            f[t] += l[s == "x" ? "width": "height"]() * e.over[w]
                        }
                    } else {
                        var v = l[w];
                        f[t] = v.slice && v.slice( - 1) == "%" ? parseFloat(v) / 100 * p : v
                    }
                    if (e.limit && /^\d+$/.test(f[t])) {
                        f[t] = f[t] <= 0 ? 0 : Math.min(f[t], p)
                    }
                    if (!u && e.queue) {
                        if (r != f[t]) {
                            g(e.onAfterFirst)
                        }
                        delete f[t]
                    }
                });
                g(e.onAfter);
                function g(p) {
                    k.animate(f, i, e.easing, p && function() {
                        p.call(this, l, e)
                    })
                }
            }).end()
        };
        b.max = function(h, g) {
            var k = g == "x" ? "Width": "Height", f = "scroll" + k;
            if (!d(h).is("html,body")) {
                return h[f] - d(h)[k.toLowerCase()]()
            }
            var j = "client" + k, i = h.ownerDocument.documentElement, e = h.ownerDocument.body;
            return Math.max(i[f], e[f]) - Math.min(i[j], e[j])
        };
        function c(e) {
            return d.isFunction(e) || typeof e == "object" ? e : {
                top: e,
                left: e
            }
        }
        return b
    })
}(typeof define === "function" && define.amd ? define : function(d, c) {
    if (typeof module !== "undefined" && module.exports) {
        module.exports = c(require("jquery"))
    } else {
        c(jQuery)
    }
}));
(function() {
    var d, a, i, c, h, k, n, q, p, g, l, r, e, t, j, o, s, v, f, u, m = [].slice, b = [].indexOf || function(y) {
        for (var x = 0, w = this.length; x < w; x++) {
            if (x in this && this[x] === y) {
                return x
            }
        }
        return - 1
    };
    d = jQuery;
    d.payment = {};
    d.payment.fn = {};
    d.fn.payment = function() {
        var w, x;
        x = arguments[0], w = 2 <= arguments.length ? m.call(arguments, 1) : [];
        return d.payment.fn[x].apply(this, w)
    };
    h = /(\d{1,4})/g;
    c = [{
        type: "visaelectron",
        pattern: /^4(026|17500|405|508|844|91[37])/,
        format: h,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: "maestro",
        pattern: /^(5(018|0[23]|[68])|6(39|7))/,
        format: h,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: true
    }, {
        type: "forbrugsforeningen",
        pattern: /^600/,
        format: h,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: "dankort",
        pattern: /^5019/,
        format: h,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: "visa",
        pattern: /^4/,
        format: h,
        length: [13, 16],
        cvcLength: [3],
        luhn: true
    }, {
        type: "mastercard",
        pattern: /^5[0-5]/,
        format: h,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: "amex",
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvcLength: [3, 4],
        luhn: true
    }, {
        type: "dinersclub",
        pattern: /^3[0689]/,
        format: h,
        length: [14],
        cvcLength: [3],
        luhn: true
    }, {
        type: "discover",
        pattern: /^6([045]|22)/,
        format: h,
        length: [16],
        cvcLength: [3],
        luhn: true
    }, {
        type: "unionpay",
        pattern: /^(62|88)/,
        format: h,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: false
    }, {
        type: "jcb",
        pattern: /^35/,
        format: h,
        length: [16],
        cvcLength: [3],
        luhn: true
    }
    ];
    a = function(y) {
        var x, z, w;
        y = (y + "").replace(/\D/g, "");
        for (z = 0, w = c.length; z < w; z++) {
            x = c[z];
            if (x.pattern.test(y)) {
                return x
            }
        }
    };
    i = function(y) {
        var x, z, w;
        for (z = 0, w = c.length; z < w; z++) {
            x = c[z];
            if (x.type === y) {
                return x
            }
        }
    };
    e = function(x) {
        var C, B, A, y, z, w;
        A = true;
        y = 0;
        B = (x + "").split("").reverse();
        for (z = 0, w = B.length; z < w; z++) {
            C = B[z];
            C = parseInt(C, 10);
            if ((A=!A)) {
                C*=2
            }
            if (C > 9) {
                C -= 9
            }
            y += C
        }
        return y%10 === 0
    };
    r = function(w) {
        var x;
        if ((w.prop("selectionStart") != null) && w.prop("selectionStart") !== w.prop("selectionEnd")) {
            return true
        }
        if (typeof document !== "undefined" && document !== null ? (x = document.selection) != null ? typeof x.createRange === "function" ? x.createRange().text : void 0 : void 0 : void 0) {
            return true
        }
        return false
    };
    t = function(w) {
        return setTimeout(function() {
            var x, y;
            x = d(w.currentTarget);
            y = x.val();
            y = d.payment.formatCardNumber(y);
            return x.val(y)
        })
    };
    q = function(B) {
        var w, x, D, z, y, C, A;
        D = String.fromCharCode(B.which);
        if (!/^\d+$/.test(D)) {
            return
        }
        w = d(B.currentTarget);
        A = w.val();
        x = a(A + D);
        z = (A.replace(/\D/g, "") + D).length;
        C = 16;
        if (x) {
            C = x.length[x.length.length - 1]
        }
        if (z >= C) {
            return
        }
        if ((w.prop("selectionStart") != null) && w.prop("selectionStart") !== A.length) {
            return
        }
        if (x && x.type === "amex") {
            y = /^(\d{4}|\d{4}\s\d{6})$/
        } else {
            y = /(?:^|\s)(\d{4})$/
        }
        if (y.test(A)) {
            B.preventDefault();
            return setTimeout(function() {
                return w.val(A + " " + D)
            })
        } else {
            if (y.test(A + D)) {
                B.preventDefault();
                return setTimeout(function() {
                    return w.val(A + D + " ")
                })
            }
        }
    };
    k = function(y) {
        var w, x;
        w = d(y.currentTarget);
        x = w.val();
        if (y.which !== 8) {
            return
        }
        if ((w.prop("selectionStart") != null) && w.prop("selectionStart") !== x.length) {
            return
        }
        if (/\d\s$/.test(x)) {
            y.preventDefault();
            return setTimeout(function() {
                return w.val(x.replace(/\d\s$/, ""))
            })
        } else {
            if (/\s\d?$/.test(x)) {
                y.preventDefault();
                return setTimeout(function() {
                    return w.val(x.replace(/\s\d?$/, ""))
                })
            }
        }
    };
    j = function(w) {
        return setTimeout(function() {
            var x, y;
            x = d(w.currentTarget);
            y = x.val();
            y = d.payment.formatExpiry(y);
            return x.val(y)
        })
    };
    p = function(x) {
        var w, z, y;
        z = String.fromCharCode(x.which);
        if (!/^\d+$/.test(z)) {
            return
        }
        w = d(x.currentTarget);
        y = w.val() + z;
        if (/^\d$/.test(y) && (y !== "0" && y !== "1")) {
            x.preventDefault();
            return setTimeout(function() {
                return w.val("0" + y + " / ")
            })
        } else {
            if (/^\d\d$/.test(y)) {
                x.preventDefault();
                return setTimeout(function() {
                    return w.val("" + y + " / ")
                })
            }
        }
    };
    g = function(x) {
        var w, z, y;
        z = String.fromCharCode(x.which);
        if (!/^\d+$/.test(z)) {
            return
        }
        w = d(x.currentTarget);
        y = w.val();
        if (/^\d\d$/.test(y)) {
            return w.val("" + y + " / ")
        }
    };
    l = function(x) {
        var w, z, y;
        y = String.fromCharCode(x.which);
        if (!(y === "/" || y === " ")) {
            return
        }
        w = d(x.currentTarget);
        z = w.val();
        if (/^\d$/.test(z) && z !== "0") {
            return w.val("0" + z + " / ")
        }
    };
    n = function(y) {
        var w, x;
        w = d(y.currentTarget);
        x = w.val();
        if (y.which !== 8) {
            return
        }
        if ((w.prop("selectionStart") != null) && w.prop("selectionStart") !== x.length) {
            return
        }
        if (/\s\/\s\d?$/.test(x)) {
            y.preventDefault();
            return setTimeout(function() {
                return w.val(x.replace(/\s\/\s\d?$/, ""))
            })
        }
    };
    f = function(x) {
        var w;
        if (x.metaKey || x.ctrlKey) {
            return true
        }
        if (x.which === 32) {
            return false
        }
        if (x.which === 0) {
            return true
        }
        if (x.which < 33) {
            return true
        }
        w = String.fromCharCode(x.which);
        return !!/[\d\s]/.test(w)
    };
    s = function(z) {
        var w, x, A, y;
        w = d(z.currentTarget);
        A = String.fromCharCode(z.which);
        if (!/^\d+$/.test(A)) {
            return
        }
        if (r(w)) {
            return
        }
        y = (w.val() + A).replace(/\D/g, "");
        x = a(y);
        if (x) {
            return y.length <= x.length[x.length.length - 1]
        } else {
            return y.length <= 16
        }
    };
    v = function(y) {
        var w, z, x;
        w = d(y.currentTarget);
        z = String.fromCharCode(y.which);
        if (!/^\d+$/.test(z)) {
            return
        }
        if (r(w)) {
            return
        }
        x = w.val() + z;
        x = x.replace(/\D/g, "");
        if (x.length > 6) {
            return false
        }
    };
    o = function(x) {
        var w, z, y;
        w = d(x.currentTarget);
        z = String.fromCharCode(x.which);
        if (!/^\d+$/.test(z)) {
            return
        }
        if (r(w)) {
            return
        }
        y = w.val() + z;
        return y.length <= 4
    };
    u = function(A) {
        var x, z, y, w, B;
        x = d(A.currentTarget);
        B = x.val();
        w = d.payment.cardType(B) || "unknown";
        if (!x.hasClass(w)) {
            z = (function() {
                var E, D, C;
                C = [];
                for (E = 0, D = c.length; E < D; E++) {
                    y = c[E];
                    C.push(y.type)
                }
                return C
            })();
            x.removeClass("unknown");
            x.removeClass(z.join(" "));
            x.addClass(w);
            x.toggleClass("identified", w !== "unknown");
            return x.trigger("payment.cardType", w)
        }
    };
    d.payment.fn.formatCardCVC = function() {
        this.payment("restrictNumeric");
        this.on("keypress", o);
        return this
    };
    d.payment.fn.formatCardExpiry = function() {
        this.payment("restrictNumeric");
        this.on("keypress", v);
        this.on("keypress", p);
        this.on("keypress", l);
        this.on("keypress", g);
        this.on("keydown", n);
        this.on("change", j);
        this.on("input", j);
        return this
    };
    d.payment.fn.formatCardNumber = function() {
        this.payment("restrictNumeric");
        this.on("keypress", s);
        this.on("keypress", q);
        this.on("keydown", k);
        this.on("keyup", u);
        this.on("paste", t);
        this.on("change", t);
        this.on("input", t);
        this.on("input", u);
        return this
    };
    d.payment.fn.restrictNumeric = function() {
        this.on("keypress", f);
        return this
    };
    d.payment.fn.cardExpiryVal = function() {
        return d.payment.cardExpiryVal(d(this).val())
    };
    d.payment.cardExpiryVal = function(z) {
        var A, y, w, x;
        z = z.replace(/\s/g, "");
        x = z.split("/", 2), A = x[0], w = x[1];
        if ((w != null ? w.length : void 0) === 2 && /^\d+$/.test(w)) {
            y = (new Date).getFullYear();
            y = y.toString().slice(0, 2);
            w = y + w
        }
        A = parseInt(A, 10);
        w = parseInt(w, 10);
        return {
            month: A,
            year: w
        }
    };
    d.payment.validateCardNumber = function(x) {
        var w, y;
        x = (x + "").replace(/\s+|-/g, "");
        if (!/^\d+$/.test(x)) {
            return false
        }
        w = a(x);
        if (!w) {
            return false
        }
        return (y = x.length, b.call(w.length, y) >= 0) && (w.luhn === false || e(x))
    };
    d.payment.validateCardExpiry = function(A, x) {
        var y, w, z;
        if (typeof A === "object" && "month" in A) {
            z = A, A = z.month, x = z.year
        }
        if (!(A && x)) {
            return false
        }
        A = d.trim(A);
        x = d.trim(x);
        if (!/^\d+$/.test(A)) {
            return false
        }
        if (!/^\d+$/.test(x)) {
            return false
        }
        if (!((1 <= A && A <= 12))) {
            return false
        }
        if (x.length === 2) {
            if (x < 70) {
                x = "20" + x
            } else {
                x = "19" + x
            }
        }
        if (x.length !== 4) {
            return false
        }
        w = new Date(x, A);
        y = new Date;
        w.setMonth(w.getMonth() - 1);
        w.setMonth(w.getMonth() + 1, 1);
        return w > y
    };
    d.payment.validateCardCVC = function(x, y) {
        var w, z;
        x = d.trim(x);
        if (!/^\d+$/.test(x)) {
            return false
        }
        w = i(y);
        if (w != null) {
            return z = x.length, b.call(w.cvcLength, z) >= 0
        } else {
            return x.length >= 3 && x.length <= 4
        }
    };
    d.payment.cardType = function(w) {
        var x;
        if (!w) {
            return null
        }
        return ((x = a(w)) != null ? x.type : void 0) || null
    };
    d.payment.formatCardNumber = function(y) {
        var x, w, A, z;
        x = a(y);
        if (!x) {
            return y
        }
        A = x.length[x.length.length - 1];
        y = y.replace(/\D/g, "");
        y = y.slice(0, A);
        if (x.format.global) {
            return (z = y.match(x.format)) != null ? z.join(" ") : void 0
        } else {
            w = x.format.exec(y);
            if (w == null) {
                return
            }
            w.shift();
            w = d.grep(w, function(B) {
                return B
            });
            return w.join(" ")
        }
    };
    d.payment.formatExpiry = function(x) {
        var z, A, w, y;
        A = x.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/);
        if (!A) {
            return ""
        }
        z = A[1] || "";
        w = A[2] || "";
        y = A[3] || "";
        if (y.length > 0 || (w.length > 0&&!(/\ \/?\ ?/.test(w)))) {
            w = " / "
        }
        if (z.length === 1 && (z !== "0" && z !== "1")) {
            z = "0" + z;
            w = " / "
        }
        return z + w + y
    }
}).call(this);
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
;
!function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
}(function(e) {
    e.extend(e.fn, {
        validate: function(a) {
            if (!this.length) {
                return void (a && a.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."))
            }
            var g = e.data(this[0], "validator");
            return g ? g : (this.attr("novalidate", "novalidate"), g = new e.validator(a, this[0]), e.data(this[0], "validator", g), g.settings.onsubmit && (this.validateDelegate(":submit", "click", function(c) {
                g.settings.submitHandler && (g.submitButton = c.target), e(c.target).hasClass("cancel") && (g.cancelSubmit=!0), void 0 !== e(c.target).attr("formnovalidate") && (g.cancelSubmit=!0)
            }), this.submit(function(c) {
                function h() {
                    var i, b;
                    return g.settings.submitHandler ? (g.submitButton && (i = e("<input type='hidden'/>").attr("name", g.submitButton.name).val(e(g.submitButton).val()).appendTo(g.currentForm)), b = g.settings.submitHandler.call(g, g.currentForm, c), g.submitButton && i.remove(), void 0 !== b ? b : !1) : !0
                }
                return g.settings.debug && c.preventDefault(), g.cancelSubmit ? (g.cancelSubmit=!1, h()) : g.form() ? g.pendingRequest ? (g.formSubmitted=!0, !1) : h() : (g.focusInvalid(), !1)
            })), g)
        },
        valid: function() {
            var a, g;
            return e(this[0]).is("form") ? a = this.validate().form() : (a=!0, g = e(this[0].form).validate(), this.each(function() {
                a = g.element(this) && a
            })), a
        },
        removeAttrs: function(a) {
            var h = {}, g = this;
            return e.each(a.split(/\s/), function(i, c) {
                h[c] = g.attr(c), g.removeAttr(c)
            }), h
        },
        rules: function(r, q) {
            var p, o, n, m, l, k, a = this[0];
            if (r) {
                switch (p = e.data(a.form, "validator").settings, o = p.rules, n = e.validator.staticRules(a), r) {
                case"add":
                    e.extend(n, e.validator.normalizeRule(q)), delete n.messages, o[a.name] = n, q.messages && (p.messages[a.name] = e.extend(p.messages[a.name], q.messages));
                    break;
                case"remove":
                    return q ? (k = {}, e.each(q.split(/\s/), function(g, h) {
                        k[h] = n[h], delete n[h], "required" === h && e(a).removeAttr("aria-required")
                    }), k) : (delete o[a.name], n)
                }
            }
            return m = e.validator.normalizeRules(e.extend({}, e.validator.classRules(a), e.validator.attributeRules(a), e.validator.dataRules(a), e.validator.staticRules(a)), a), m.required && (l = m.required, delete m.required, m = e.extend({
                required: l
            }, m), e(a).attr("aria-required", "true")), m.remote && (l = m.remote, delete m.remote, m = e.extend(m, {
                remote: l
            })), m
        }
    }), e.extend(e.expr[":"], {
        blank: function(a) {
            return !e.trim("" + e(a).val())
        },
        filled: function(a) {
            return !!e.trim("" + e(a).val())
        },
        unchecked: function(a) {
            return !e(a).prop("checked")
        }
    }), e.validator = function(a, g) {
        this.settings = e.extend(!0, {}, e.validator.defaults, a), this.currentForm = g, this.init()
    }, e.validator.format = function(a, g) {
        return 1 === arguments.length ? function() {
            var b = e.makeArray(arguments);
            return b.unshift(a), e.validator.format.apply(this, b)
        } : (arguments.length > 2 && g.constructor !== Array && (g = e.makeArray(arguments).slice(1)), g.constructor !== Array && (g = [g]), e.each(g, function(b, h) {
            a = a.replace(new RegExp("\\{" + b + "\\}", "g"), function() {
                return h
            })
        }), a)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(b) {
                this.lastActive = b, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, b, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(b)))
            },
            onfocusout: function(b) {
                this.checkable(b) ||!(b.name in this.submitted) && this.optional(b) || this.element(b)
            },
            onkeyup: function(g, c) {
                (9 !== c.which || "" !== this.elementValue(g)) && (g.name in this.submitted || g === this.lastElement) && this.element(g)
            },
            onclick: function(b) {
                b.name in this.submitted ? this.element(b) : b.parentNode.name in this.submitted && this.element(b.parentNode)
            },
            highlight: function(a, h, g) {
                "radio" === a.type ? this.findByName(a.name).addClass(h).removeClass(g) : e(a).addClass(h).removeClass(g)
            },
            unhighlight: function(a, h, g) {
                "radio" === a.type ? this.findByName(a.name).removeClass(h).addClass(g) : e(a).removeClass(h).addClass(g)
            }
        },
        setDefaults: function(a) {
            e.extend(e.validator.defaults, a)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function a(i) {
                    var l = e.data(this[0].form, "validator"), k = "on" + i.type.replace(/^validate/, ""), j = l.settings;
                    j[k]&&!this.is(j.ignore) && j[k].call(l, this[0], i)
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var h, g = this.groups = {};
                e.each(this.settings.groups, function(i, j) {
                    "string" == typeof j && (j = j.split(/\s/)), e.each(j, function(b, k) {
                        g[k] = i
                    })
                }), h = this.settings.rules, e.each(h, function(c, i) {
                    h[c] = e.validator.normalizeRule(i)
                }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", a).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", a), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var g = 0, c = this.currentElements = this.elements(); c[g]; g++) {
                    this.check(c[g])
                }
                return this.valid()
            },
            element: function(a) {
                var i = this.clean(a), h = this.validationTargetFor(i), g=!0;
                return this.lastElement = h, void 0 === h ? delete this.invalid[i.name] : (this.prepareElement(h), this.currentElements = e(h), g = this.check(h)!==!1, g ? delete this.invalid[h.name] : this.invalid[h.name]=!0), e(a).attr("aria-invalid", !g), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), g
            },
            showErrors: function(a) {
                if (a) {
                    e.extend(this.errorMap, a), this.errorList = [];
                    for (var g in a) {
                        this.errorList.push({
                            message: a[g],
                            element: this.findByName(g)[0]
                        })
                    }
                    this.successList = e.grep(this.successList, function(b) {
                        return !(b.name in a)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(h) {
                var g, i = 0;
                for (g in h) {
                    i++
                }
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(b) {
                b.not(this.containers).text(""), this.addWrapper(b).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (a) {}
                }
            },
            findLastActive: function() {
                var a = this.lastActive;
                return a && 1 === e.grep(this.errorList, function(b) {
                    return b.element.name === a.name
                }).length && a
            },
            elements: function() {
                var a = this, g = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                    return !this.name && a.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in g ||!a.objectLength(e(this).rules())?!1 : (g[this.name]=!0, !0)
                })
            },
            clean: function(a) {
                return e(a)[0]
            },
            errors: function() {
                var a = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + a, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(b) {
                this.reset(), this.toHide = this.errorsFor(b)
            },
            elementValue: function(a) {
                var i, h = e(a), g = a.type;
                return "radio" === g || "checkbox" === g ? e("input[name='" + a.name + "']:checked").val() : "number" === g && "undefined" != typeof a.validity ? a.validity.badInput?!1 : h.val() : (i = h.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(r) {
                r = this.validationTargetFor(this.clean(r));
                var q, p, o, n = e(r).rules(), m = e.map(n, function(g, c) {
                    return c
                }).length, l=!1, k = this.elementValue(r);
                for (p in n) {
                    o = {
                        method: p,
                        parameters: n[p]
                    };
                    try {
                        if (q = e.validator.methods[p].call(this, k, r, o.parameters), "dependency-mismatch" === q && 1 === m) {
                            l=!0;
                            continue
                        }
                        if (l=!1, "pending" === q) {
                            return void (this.toHide = this.toHide.not(this.errorsFor(r)))
                        }
                        if (!q) {
                            return this.formatAndAdd(r, o), !1
                        }
                    } catch (a) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + r.id + ", check the '" + o.method + "' method.", a), a
                    }
                }
                if (!l) {
                    return this.objectLength(n) && this.successList.push(r), !0
                }
            },
            customDataMessage: function(a, g) {
                return e(a).data("msg" + g.charAt(0).toUpperCase() + g.substring(1).toLowerCase()) || e(a).data("msg")
            },
            customMessage: function(h, g) {
                var i = this.settings.messages[h];
                return i && (i.constructor === String ? i : i[g])
            },
            findDefined: function() {
                for (var b = 0; b < arguments.length; b++) {
                    if (void 0 !== arguments[b]) {
                        return arguments[b]
                    }
                }
                return void 0
            },
            defaultMessage: function(a, g) {
                return this.findDefined(this.customMessage(a.name, g), this.customDataMessage(a, g), !this.settings.ignoreTitle && a.title || void 0, e.validator.messages[g], "<strong>Warning: No message defined for " + a.name + "</strong>")
            },
            formatAndAdd: function(a, i) {
                var h = this.defaultMessage(a, i.method), g = /\$?\{(\d+)\}/g;
                "function" == typeof h ? h = h.call(this, i.parameters, a) : g.test(h) && (h = e.validator.format(h.replace(g, "{$1}"), i.parameters)), this.errorList.push({
                    message: h,
                    element: a,
                    method: i.method
                }), this.errorMap[a.name] = h, this.submitted[a.name] = h
            },
            addWrapper: function(b) {
                return this.settings.wrapper && (b = b.add(b.parent(this.settings.wrapper))), b
            },
            defaultShowErrors: function() {
                var h, g, i;
                for (h = 0; this.errorList[h]; h++) {
                    i = this.errorList[h], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) {
                    for (h = 0; this.successList[h]; h++) {
                        this.showLabel(this.successList[h])
                    }
                }
                if (this.settings.unhighlight) {
                    for (h = 0, g = this.validElements(); g[h]; h++) {
                        this.settings.unhighlight.call(this, g[h], this.settings.errorClass, this.settings.validClass)
                    }
                }
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(a, p) {
                var o, n, m, l = this.errorsFor(a), k = this.idOrName(a), j = e(a).attr("aria-describedby");
                l.length ? (l.removeClass(this.settings.validClass).addClass(this.settings.errorClass), l.html(p)) : (l = e("<" + this.settings.errorElement + ">").attr("id", k + "-error").addClass(this.settings.errorClass).html(p || ""), o = l, this.settings.wrapper && (o = l.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(o) : this.settings.errorPlacement ? this.settings.errorPlacement(o, e(a)) : o.insertAfter(a), l.is("label") ? l.attr("for", k) : 0 === l.parents("label[for='" + k + "']").length && (m = l.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), j ? j.match(new RegExp("\\b" + m + "\\b")) || (j += " " + m) : j = m, e(a).attr("aria-describedby", j), n = this.groups[a.name], n && e.each(this.groups, function(g, h) {
                    h === n && e("[name='" + g + "']", this.currentForm).attr("aria-describedby", l.attr("id"))
                }))), !p && this.settings.success && (l.text(""), "string" == typeof this.settings.success ? l.addClass(this.settings.success) : this.settings.success(l, a)), this.toShow = this.toShow.add(l)
            },
            errorsFor: function(a) {
                var i = this.idOrName(a), h = e(a).attr("aria-describedby"), g = "label[for='" + i + "'], label[for='" + i + "'] *";
                return h && (g = g + ", #" + h.replace(/\s+/g, ", #")), this.errors().filter(g)
            },
            idOrName: function(b) {
                return this.groups[b.name] || (this.checkable(b) ? b.name : b.id || b.name)
            },
            validationTargetFor: function(a) {
                return this.checkable(a) && (a = this.findByName(a.name)), e(a).not(this.settings.ignore)[0]
            },
            checkable: function(b) {
                return /radio|checkbox/i.test(b.type)
            },
            findByName: function(a) {
                return e(this.currentForm).find("[name='" + a + "']")
            },
            getLength: function(a, g) {
                switch (g.nodeName.toLowerCase()) {
                case"select":
                    return e("option:selected", g).length;
                case"input":
                    if (this.checkable(g)) {
                        return this.findByName(g.name).filter(":checked").length
                    }
                }
                return a.length
            },
            depend: function(g, c) {
                return this.dependTypes[typeof g] ? this.dependTypes[typeof g](g, c) : !0
            },
            dependTypes: {
                "boolean": function(b) {
                    return b
                },
                string: function(a, g) {
                    return !!e(a, g.form).length
                },
                "function": function(g, c) {
                    return g(c)
                }
            },
            optional: function(a) {
                var g = this.elementValue(a);
                return !e.validator.methods.required.call(this, g, a) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++, this.pending[b.name]=!0)
            },
            stopRequest: function(a, g) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[a.name], g && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted=!1) : !g && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted=!1)
            },
            previousValue: function(a) {
                return e.data(a, "previousValue") || e.data(a, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(a, "remote")
                })
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
        addClassRules: function(a, g) {
            a.constructor === String ? this.classRuleSettings[a] = g : e.extend(this.classRuleSettings, a)
        },
        classRules: function(a) {
            var h = {}, g = e(a).attr("class");
            return g && e.each(g.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(h, e.validator.classRuleSettings[this])
            }), h
        },
        attributeRules: function(a) {
            var l, k, j = {}, i = e(a), h = a.getAttribute("type");
            for (l in e.validator.methods) {
                "required" === l ? (k = a.getAttribute(l), "" === k && (k=!0), k=!!k) : k = i.attr(l), /min|max/.test(l) && (null === h || /number|range|text/.test(h)) && (k = Number(k)), k || 0 === k ? j[l] = k : h === l && "range" !== h && (j[l]=!0)
            }
            return j.maxlength && /-1|2147483647|524288/.test(j.maxlength) && delete j.maxlength, j
        },
        dataRules: function(a) {
            var j, i, h = {}, g = e(a);
            for (j in e.validator.methods) {
                i = g.data("rule" + j.charAt(0).toUpperCase() + j.substring(1).toLowerCase()), void 0 !== i && (h[j] = i)
            }
            return h
        },
        staticRules: function(a) {
            var h = {}, g = e.data(a.form, "validator");
            return g.settings.rules && (h = e.validator.normalizeRule(g.settings.rules[a.name]) || {}), h
        },
        normalizeRules: function(a, g) {
            return e.each(a, function(h, c) {
                if (c===!1) {
                    return void delete a[h]
                }
                if (c.param || c.depends) {
                    var b=!0;
                    switch (typeof c.depends) {
                    case"string":
                        b=!!e(c.depends, g.form).length;
                        break;
                    case"function":
                        b = c.depends.call(g, g)
                    }
                    b ? a[h] = void 0 !== c.param ? c.param : !0 : delete a[h]
                }
            }), e.each(a, function(c, b) {
                a[c] = e.isFunction(b) ? b(g) : b
            }), e.each(["minlength", "maxlength"], function() {
                a[this] && (a[this] = Number(a[this]))
            }), e.each(["rangelength", "range"], function() {
                var b;
                a[this] && (e.isArray(a[this]) ? a[this] = [Number(a[this][0]), Number(a[this][1])] : "string" == typeof a[this] && (b = a[this].replace(/[\[\]]/g, "").split(/[\s,]+/), a[this] = [Number(b[0]), Number(b[1])]))
            }), e.validator.autoCreateRanges && (null != a.min && null != a.max && (a.range = [a.min, a.max], delete a.min, delete a.max), null != a.minlength && null != a.maxlength && (a.rangelength = [a.minlength, a.maxlength], delete a.minlength, delete a.maxlength)), a
        },
        normalizeRule: function(a) {
            if ("string" == typeof a) {
                var g = {};
                e.each(a.split(/\s/), function() {
                    g[this]=!0
                }), a = g
            }
            return a
        },
        addMethod: function(a, h, g) {
            e.validator.methods[a] = h, e.validator.messages[a] = void 0 !== g ? g : e.validator.messages[a], h.length < 3 && e.validator.addClassRules(a, e.validator.normalizeRule(a))
        },
        methods: {
            required: function(a, i, h) {
                if (!this.depend(h, i)) {
                    return "dependency-mismatch"
                }
                if ("select" === i.nodeName.toLowerCase()) {
                    var g = e(i).val();
                    return g && g.length > 0
                }
                return this.checkable(i) ? this.getLength(a, i) > 0 : e.trim(a).length > 0
            },
            email: function(g, c) {
                return this.optional(c) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(g)
            },
            url: function(g, c) {
                return this.optional(c) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(g)
            },
            date: function(g, c) {
                return this.optional(c) ||!/Invalid|NaN/.test(new Date(g).toString())
            },
            dateISO: function(g, c) {
                return this.optional(c) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(g)
            },
            number: function(g, c) {
                return this.optional(c) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(g)
            },
            digits: function(g, c) {
                return this.optional(c) || /^\d+$/.test(g)
            },
            creditcard: function(i, h) {
                if (this.optional(h)) {
                    return "dependency-mismatch"
                }
                if (/[^0-9 \-]+/.test(i)) {
                    return !1
                }
                var n, m, l = 0, k = 0, j=!1;
                if (i = i.replace(/\D/g, ""), i.length < 13 || i.length > 19) {
                    return !1
                }
                for (n = i.length - 1; n >= 0; n--) {
                    m = i.charAt(n), k = parseInt(m, 10), j && (k*=2) > 9 && (k -= 9), l += k, j=!j
                }
                return l%10 === 0
            },
            minlength: function(a, i, h) {
                var g = e.isArray(a) ? a.length: this.getLength(a, i);
                return this.optional(i) || g >= h
            },
            maxlength: function(a, i, h) {
                var g = e.isArray(a) ? a.length: this.getLength(a, i);
                return this.optional(i) || h >= g
            },
            rangelength: function(a, i, h) {
                var g = e.isArray(a) ? a.length: this.getLength(a, i);
                return this.optional(i) || g >= h[0] && g <= h[1]
            },
            min: function(h, g, i) {
                return this.optional(g) || h >= i
            },
            max: function(h, g, i) {
                return this.optional(g) || i >= h
            },
            range: function(h, g, i) {
                return this.optional(g) || h >= i[0] && h <= i[1]
            },
            equalTo: function(a, i, h) {
                var g = e(h);
                return this.settings.onfocusout && g.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    e(i).valid()
                }), a === g.val()
            },
            remote: function(a, l, k) {
                if (this.optional(l)) {
                    return "dependency-mismatch"
                }
                var j, i, h = this.previousValue(l);
                return this.settings.messages[l.name] || (this.settings.messages[l.name] = {}), h.originalMessage = this.settings.messages[l.name].remote, this.settings.messages[l.name].remote = h.message, k = "string" == typeof k && {
                    url: k
                }
                || k, h.old === a ? h.valid : (h.old = a, j = this, this.startRequest(l), i = {}, i[l.name] = a, e.ajax(e.extend(!0, {
                    url: k,
                    mode: "abort",
                    port: "validate" + l.name,
                    dataType: "json",
                    data: i,
                    context: j.currentForm,
                    success: function(n) {
                        var m, g, c, b = n===!0 || "true" === n;
                        j.settings.messages[l.name].remote = h.originalMessage, b ? (c = j.formSubmitted, j.prepareElement(l), j.formSubmitted = c, j.successList.push(l), delete j.invalid[l.name], j.showErrors()) : (m = {}, g = n || j.defaultMessage(l, "remote"), m[l.name] = h.message = e.isFunction(g) ? g(a) : g, j.invalid[l.name]=!0, j.showErrors(m)), h.valid = b, j.stopRequest(l, b)
                    }
                }, k)), "pending")
            }
        }
    }), e.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var d, f = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function(g, c, i) {
        var h = g.port;
        "abort" === g.mode && (f[h] && f[h].abort(), f[h] = i)
    }) : (d = e.ajax, e.ajax = function(c) {
        var b = ("mode" in c ? c : e.ajaxSettings).mode, a = ("port" in c ? c : e.ajaxSettings).port;
        return "abort" === b ? (f[a] && f[a].abort(), f[a] = d.apply(this, arguments), f[a]) : d.apply(this, arguments)
    }), e.extend(e.fn, {
        validateDelegate: function(a, h, g) {
            return this.bind(h, function(i) {
                var b = e(i.target);
                return b.is(a) ? g.apply(b, arguments) : void 0
            })
        }
    })
});
(function() {
    SLDoku.ui.Tracking = {
        $links: null,
        init: function() {
            this.$links = $(".tracking");
            this.$links.on("click.tracking", this.runTracker)
        },
        runTracker: function() {
            var b = $(this), c = b.data("category"), d = b.data("action"), a = b.data("label");
            if (b && c && d && a) {
                if (typeof window.ga !== "undefined") {
                    window.ga("send", "event", c, d, a)
                } else {
                    console.log("Analytics Event --> [" + c + "][" + d + ']["' + a + '"]')
                }
            }
        }
    }
}());
(function() {
    SLDoku.ui.Topnavi = {
        winWidth: 0,
        openNaviPerc: 0.7,
        $body: null,
        $mobileNavi: null,
        $mobileNaviLink: null,
        $container: null,
        $sideNavi: null,
        $header: null,
        $shareFacebook: null,
        $shareTwitter: null,
        threshold: 50,
        socialText: "A%20jQuery%20plugin%20for%20building%20aesthetically%20minimalistic,%20responsive%20picture%20lightboxes.%20https%3A%2F%2Fscalable-lightbox.com%20%23scalablelightbox",
        socialTextLink: "https%3A%2F%2Fscalable-lightbox.com",
        state: "closed",
        init: function() {
            this.$body = $("body");
            this.$mobileNavi = $("#mobile-navi");
            this.$mobileNaviLink = $("#mobile-navi-link");
            this.$container = $("#container");
            this.$sideNavi = $("#sidenavi");
            this.$header = $("#header");
            this.$shareFacebook = $("#share-facebook");
            this.$shareTwitter = $("#share-twitter");
            this.bindings();
            this.scrollListener();
            this.socialSharing()
        },
        bindings: function() {
            var a = this;
            this.$mobileNaviLink.bind("click", function(c) {
                var b = a.winWidth * a.openNaviPerc;
                c.stopPropagation();
                c.preventDefault();
                if (a.state === "closed") {
                    a.$container.animate({
                        left: - b
                    }, 250);
                    a.$header.animate({
                        left: - b
                    }, 250);
                    a.$sideNavi.hide();
                    a.$mobileNavi.show().animate({
                        right: 0
                    }, 250, function() {
                        a.state = "opened"
                    })
                } else {
                    a.$container.animate({
                        left: 0
                    }, 250);
                    a.$header.animate({
                        left: 0
                    }, 250);
                    a.$mobileNavi.animate({
                        right: - b
                    }, 250, function() {
                        $(this).hide();
                        a.$sideNavi.show();
                        a.state = "closed"
                    })
                }
            });
            this.$body.bind("click", function() {
                if (a.state === "opened") {
                    a.$mobileNaviLink.trigger("click")
                }
            })
        },
        scrollListener: function() {
            var a = this;
            $(window).bind("scroll", function() {
                var b = $(window).scrollTop();
                a.$header.toggleClass("active", b >= a.threshold)
            })
        },
        socialSharing: function() {
            var a = this;
            this.$shareFacebook.click(function(b) {
                b.preventDefault();
                var c = window.open("https://www.facebook.com/sharer.php?app_id=826933254018243&sdk=joey&u=https%3A%2F%2Fwww.scalable-lightbox.com%2F&display=popup&ref=plugin", "facebook_popup", "height=550,width=450");
                if (window.focus) {
                    c.focus()
                }
            });
            this.$shareTwitter.click(function(b) {
                b.preventDefault();
                var c = window.open("http://twitter.com/intent/tweet?text=" + a.socialText, "twitter_popup", "height=360,width=450");
                if (window.focus) {
                    c.focus()
                }
            })
        },
        resize: function(a) {
            var b = a * this.openNaviPerc;
            this.winWidth = a;
            if (a < 901) {
                this.$sideNavi.hide();
                if (this.state === "closed") {
                    this.$container.css({
                        left: 0
                    });
                    this.$header.css({
                        left: 0
                    });
                    this.$mobileNavi.css({
                        right: - b
                    })
                } else {
                    this.$container.css({
                        left: - b
                    });
                    this.$header.css({
                        left: - b
                    });
                    this.$mobileNavi.show()
                }
            } else {
                this.$container.css({
                    left: 0
                });
                this.$header.css({
                    left: 0
                });
                this.$sideNavi.show();
                this.$mobileNavi.hide()
            }
        }
    }
}());
(function() {
    SLDoku.ui.Sidenavi = {
        target: "",
        $body: null,
        $scrollElement: null,
        $selector: null,
        options: {
            offset: 100
        },
        offsets: [],
        targets: [],
        activeTarget: null,
        scrollHeight: 0,
        fadeInNavi: false,
        init: function() {
            var a = this;
            if ($("#sidenavi").length > 0) {
                this.target = "#sidenavi";
                this.$selector = $(this.target + " li a");
                this.fadeInNavi = false
            } else {
                if ($("#sidenavi-api").length > 0) {
                    this.target = "#sidenavi-api";
                    this.$selector = $(this.target + " .nav li > a");
                    this.fadeInNavi = true
                }
            }
            if (this.$selector) {
                this.$body = $("body");
                this.$scrollElement = $(window);
                this.offsets = [];
                this.targets = [];
                this.activeTarget = null;
                this.scrollHeight = 0;
                this.$scrollElement.on("scroll.sidenavi", $.proxy(this.process, this));
                this.$selector.on("click.scroller", this.scroller);
                setTimeout(function() {
                    a.refresh();
                    a.process()
                }, 400)
            }
        },
        getScrollHeight: function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        },
        scroller: function(c) {
            var b = $(this), a = b.attr("href");
            c.preventDefault();
            if ($(a).length > 0) {
                $.scrollTo($(a), 500, {
                    onAfter: function() {
                        window.location.hash = a
                    }
                })
            }
        },
        refresh: function() {
            var a = this;
            this.offsets = [];
            this.targets = [];
            this.scrollHeight = this.getScrollHeight();
            this.$selector.map(function() {
                var c = $(this), b = c.attr("href"), d = /^#./.test(b) && $(b);
                return (d && d.length && d.is(":visible") && [[d.offset().top, b]]) || null
            }).sort(function(d, c) {
                return d[0] - c[0]
            }).each(function() {
                a.offsets.push(this[0]);
                a.targets.push(this[1])
            })
        },
        process: function() {
            var f = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), e = this.options.offset + c - this.$scrollElement.height(), d = this.offsets, a = this.targets, g = this.activeTarget, b;
            if (this.scrollHeight != c) {
                this.refresh()
            }
            if (this.fadeInNavi && typeof this.offsets[0] !== "undefined") {
                if (f >= (this.offsets[0] + 70)) {
                    $(this.target).show()
                } else {
                    $(this.target).hide()
                }
            }
            if (f >= e) {
                return g != (b = a[a.length - 1]) && this.activate(b)
            }
            if (g && f <= d[0]) {
                return g != (b = a[0]) && this.activate(b)
            }
            for (b = d.length; b--;) {
                g != a[b] && f >= d[b] && (!d[b + 1] || f <= d[b + 1]) && this.activate(a[b])
            }
        },
        activate: function(c) {
            var a, b;
            this.activeTarget = c;
            this.$selector.parentsUntil(this.target, ".active").removeClass("active");
            a = this.target + ' [href="' + c + '"]';
            b = $(a).parents("li").addClass("active");
            if (b.parent(".dropdown-menu").length) {
                b = b.closest("li.dropdown").addClass("active")
            }
        }
    }
}());
(function() {
    SLDoku.ui.Section = {
        $fullscreens: null,
        init: function() {
            this.$fullscreens = $(".section.fullscreen")
        },
        resize: function(b, a) {
            this.$fullscreens.each(function() {
                var e = $(this), c = 0, d = 0;
                e.css("height", "");
                c = e.find(".container").outerHeight();
                if (c > a) {
                    d = c
                } else {
                    d = a
                }
                e.css({
                    height: d
                })
            })
        }
    }
}());
(function() {
    SLDoku.ui.Wild = {
        $grid: null,
        $items: null,
        ratio: 345 / 460,
        init: function() {
            this.$grid = $("#wild-grid");
            this.$items = this.$grid.find(".wild-item");
            this.$items.each(function(a) {
                if ((a + 1)%2 === 0) {
                    $(this).addClass("even")
                }
            })
        },
        resize: function(a) {
            var b = this, c = 0;
            if (a > 1200) {
                c = (940 - 20) / 2
            } else {
                if (a > 768) {
                    c = (720 - 20) / 2
                } else {
                    if (a < 700) {
                        c = a - 50
                    } else {
                        c = ((a - 50) - 20) / 2
                    }
                }
            }
            this.$items.each(function() {
                $(this).css({
                    width: c,
                    height: c * b.ratio
                })
            })
        }
    }
}());
(function() {
    SLDoku.ui.Store = {
        $body: null,
        $overlay: null,
        $popup: null,
        $closePopup: null,
        $buyBtns: null,
        $formContainer: null,
        $successContainer: null,
        $errorContainer: null,
        successMsg: "Thank you for ordering a <b>%license%</b> of the ScalableLightbox plugin for <b>%price%</b>.<br /><br />You should receive an invoice via <b>%email%</b> in the next few minutes.",
        errorMsg: "Unfortunately we could not process your transaction.<br /><br />%error%",
        $payTitle: null,
        $payForm: null,
        $payBtn: null,
        formSent: false,
        licenses: {
            single: {
                name: "Single Domain",
                amount: 900
            },
            five: {
                name: "Five<br />Domains",
                amount: 1900
            },
            unlimited: {
                name: "Unlimited Domains",
                amount: 8900
            }
        },
        pubKey: "pk_live_pV5ZbzKIkB10YJCRohfXIAna",
        init: function() {
            var a = this;
            this.$body = $("body");
            this.$overlay = $("#payment-popup-overlay");
            this.$popup = $("#payment-popup");
            this.$closePopup = this.$popup.find("#close-popup");
            this.$formContainer = this.$popup.find("#payment-form-container");
            this.$successContainer = this.$popup.find("#payment-success-container");
            this.$errorContainer = this.$popup.find("#payment-error-container");
            this.$payTitle = this.$formContainer.find("#payment-title h3");
            this.$payForm = this.$formContainer.find("#payment-form");
            this.$payBtn = this.$payForm.find("#payment-submit");
            this.$buyBtns = $(".btn.buy");
            this.$buyBtns.on("click.triggerPopup", $.proxy(this.triggerPopup, this));
            this.$closePopup.on("click.closePopup", $.proxy(this.closePopup, this));
            this.$overlay.on("click.closePopup", $.proxy(this.closePopup, this));
            Stripe.setPublishableKey(this.pubKey);
            this.$payForm.find('input[data-stripe="number"]').payment("formatCardNumber");
            this.$payForm.find('input[data-stripe="cvc"]').payment("formatCardCVC");
            this.$payForm.find("input.card-expiry").payment("formatCardExpiry");
            $.validator.addMethod("customEmail", function(c) {
                var b = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return b.test(c)
            }, "Please provide a valid email address.");
            $.validator.addMethod("cardNumber", Stripe.validateCardNumber, "Please enter a valid card number.");
            $.validator.addMethod("cardCVC", Stripe.validateCVC, "Please enter a valid security code.");
            $.validator.addMethod("cardExpiry", function() {
                var b = a.$payForm.find("input.card-expiry").payment("cardExpiryVal");
                return Stripe.validateExpiry(b.month, b.year)
            }, "Please enter a valid expiration.");
            this.$payForm.validate({
                rules: {
                    name: "required",
                    "card-number": {
                        cardNumber: true,
                        required: true
                    },
                    "card-cvc": {
                        cardCVC: true,
                        required: true
                    },
                    "card-expiry": "cardExpiry",
                    email: "customEmail",
                    address: "required",
                    zip: "required",
                    city: "required",
                    country: "required"
                },
                submitHandler: function() {
                    a.payFormSubmit()
                }
            });
            this.addInputNames()
        },
        addInputNames: function() {
            this.$payForm.find(".card-number").attr("name", "card-number");
            this.$payForm.find(".card-cvc").attr("name", "card-cvc");
            this.$payForm.find(".card-expiry").attr("name", "card-expiry")
        },
        removeInputNames: function() {
            this.$payForm.find(".card-number").removeAttr("name");
            this.$payForm.find(".card-cvc").removeAttr("name");
            this.$payForm.find(".card-expiry").removeAttr("name")
        },
        triggerPopup: function(d) {
            var a = this, b = $(d.currentTarget), c = b.attr("id").substring(4);
            d.preventDefault();
            this.bindEscKey();
            this.$payTitle.html("Buy " + this.licenses[c].name + " License");
            this.$payBtn.html("PAY $ " + this.licenses[c].amount / 100 + ".00");
            this.$payForm.find("#license").val(c);
            this.$overlay.fadeIn(500, function() {
                a.$body.addClass("overflow-hidden");
                a.$popup.fadeIn(250, function() {
                    a.$payForm.find("input").first().focus()
                })
            })
        },
        closePopup: function(b) {
            var a = this;
            b.preventDefault();
            $(window.document).unbind("keydown.closePopup");
            this.$popup.fadeOut(250, function() {
                a.$overlay.fadeOut(500, function() {
                    a.$body.removeClass("overflow-hidden");
                    if (a.formSent) {
                        a.resetForm()
                    }
                })
            })
        },
        bindEscKey: function() {
            var a = this;
            $(window.document).bind("keydown.closePopup", function(b) {
                switch (b.keyCode) {
                case 27:
                    a.closePopup(b);
                    break
                }
            })
        },
        payFormSubmit: function() {
            var a = this.$payForm.find("input.card-expiry").payment("cardExpiryVal");
            this.removeInputNames();
            this.$payForm.find('input[data-stripe="exp_month"]').val(a.month);
            this.$payForm.find('input[data-stripe="exp_year"]').val(a.year);
            this.$payBtn.prop("disabled", true);
            Stripe.card.createToken(this.$payForm, $.proxy(this.stripeResponseHandler, this))
        },
        stripeResponseHandler: function(a, c) {
            var b = this;
            if (c.error) {
                this.$payForm.find(".payment-errors").text(c.error.message);
                this.$payBtn.prop("disabled", false)
            } else {
                var d = c.id;
                this.$payForm.append($('<input type="hidden" name="stripeToken" />').val(d));
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    data: this.$payForm.serialize(),
                    url: this.$payForm.attr("action"),
                    success: function(f) {
                        var e = b.$successContainer.find("h3");
                        if (f.license && f.price && f.email) {
                            e.html(b.successMsg.replace(/%license%/g, f.license).replace(/%price%/g, f.price).replace(/%email%/g, f.email))
                        } else {
                            e.html(b.successMsg.replace(/%license%/g, "license").replace(/%price%/g, "some dollars").replace(/%email%/g, "the provided email"))
                        }
                        b.formSent = true;
                        b.showSuccess()
                    },
                    error: function(g) {
                        var e = b.$errorContainer.find("h3"), f = $.parseJSON(g.responseText);
                        if (f.message) {
                            e.html(b.errorMsg.replace(/%error%/g, f.message + "."))
                        } else {
                            e.html(b.errorMsg.replace(/%error%/g, ""))
                        }
                        b.formSent = true;
                        b.showError()
                    }
                })
            }
        },
        showSuccess: function() {
            var a = this;
            this.$formContainer.fadeOut(150, function() {
                a.$popup.addClass("notify");
                a.$successContainer.show()
            })
        },
        showError: function() {
            var a = this;
            this.$formContainer.fadeOut(150, function() {
                a.$popup.addClass("notify");
                a.$errorContainer.show()
            })
        },
        resetForm: function() {
            this.$payForm.find('input[name="stripeToken"]').remove();
            this.$payForm.find(":input").each(function() {
                $(this).val("")
            });
            this.$payBtn.prop("disabled", false);
            this.$successContainer.find("h3").html("&nbsp;");
            this.$errorContainer.find("h3").html("&nbsp;");
            this.$formContainer.show();
            this.$successContainer.hide();
            this.$errorContainer.hide();
            this.$popup.removeClass("notify");
            this.formSent = false
        }
    }
}());
(function() {
    SLDoku.app = {
        bodyKlass: null,
        init: function() {
            this.bodyKlass = $("body").attr("class");
            SLDoku.ui.Tracking.init();
            SLDoku.ui.Topnavi.init();
            SLDoku.ui.Sidenavi.init();
            SLDoku.ui.Section.init();
            if (this.bodyKlass == "home-page") {
                SLDoku.ui.Store.init();
                SLDoku.ui.Wild.init()
            } else {
                if (this.bodyKlass == "license-page") {
                    SLDoku.ui.Store.init()
                }
            }
        },
        resize: function(b, a) {
            SLDoku.ui.Topnavi.resize(b);
            SLDoku.ui.Section.resize(b, a);
            if (this.bodyKlass == "home-page") {
                SLDoku.ui.Wild.resize(b)
            }
        },
        debouncedResize: function(b, a) {}
    }
}());
(function() {
    $(function() {
        window.resizeTimeout = null;
        SLDoku.app.init();
        $(window).bind("resize", function() {
            var b = $(window).width(), a = $(window).height();
            SLDoku.app.resize(b, a);
            if (window.resizeTimeout) {
                clearTimeout(window.resizeTimeout)
            }
            window.resizeTimeout = setTimeout(function() {
                SLDoku.app.debouncedResize(b, a)
            }, 200)
        });
        $(window).trigger("resize")
    })
}());

