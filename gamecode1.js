(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        "7gKC": function(e, t, a) {
            var n = a("OuZR");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        "8uai": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___22R-F-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__infoContainer___3Srxr-camelCase{border-radius:5px;background-color:#fff;margin:20px auto;width:90%;padding:15px 25px 26px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);box-sizing:border-box;display:flex;flex-direction:column}@media only screen and (max-width:600px){.styles__infoContainer___3Srxr-camelCase{min-width:290px;padding:15px 15px 26px}}.styles__infoHeader___3ZFmk-camelCase{font-size:26px;font-weight:700}.styles__text___schZv-camelCase{padding-top:2px;padding-bottom:2px}.styles__link___3s2I_-camelCase,.styles__text___schZv-camelCase{font-size:20px}.styles__link___3s2I_-camelCase{color:#0bc2cf;display:inline;text-align:left;text-decoration:underline;font-family:Nunito,sans-serif;outline:none;cursor:pointer}", ""]), t.locals = {
                header: "styles__header___22R-F-camelCase",
                infoContainer: "styles__infoContainer___3Srxr-camelCase",
                infoHeader: "styles__infoHeader___3ZFmk-camelCase",
                text: "styles__text___schZv-camelCase",
                link: "styles__link___3s2I_-camelCase"
            }
        },
        B5MT: function(e, t, a) {
            var n = a("xlKT");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        D4er: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("TSYQ"),
                d = a.n(u),
                m = a("wd/R"),
                f = a.n(m),
                _ = a("cpGi"),
                p = a("JeI0"),
                h = a.n(p),
                y = a("H1WH"),
                g = a("FKJl"),
                x = a("E8Bj"),
                b = a("XTAU"),
                v = a("ca/f"),
                w = a("B5MT"),
                C = a.n(w),
                E = a("Xst1"),
                k = a.n(E),
                N = a("74sb"),
                j = a("qnYv"),
                S = a("i4/Q"),
                O = a("lmLo");

            function B(e) {
                return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, o, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || L(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                I = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    r = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, o) {
                    var r = t && t.prototype instanceof m ? t : m,
                        s = Object.create(r.prototype),
                        i = new k(o || []);
                    return n(s, "_invoke", {
                        value: v(e, a, i)
                    }), s
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var d = {};

                function m() {}

                function f() {}

                function _() {}
                var p = {};
                l(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    y = h && h(h(N([])));
                y && y !== t && a.call(y, r) && (p = y);
                var g = _.prototype = m.prototype = Object.create(p);

                function x(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = u(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                d = c.value;
                                            return d && "object" == B(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(d).then((function(e) {
                                                c.value = e, s(c)
                                            }), (function(e) {
                                                return n("throw", e, s, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(n, r, o, s)
                                }))
                            }
                            return o = o ? o.then(s, s) : s()
                        }
                    })
                }

                function v(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return j()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = w(s, a);
                                if (i) {
                                    if (i === d) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = _, n(g, "constructor", {
                    value: _,
                    configurable: !0
                }), n(_, "constructor", {
                    value: f,
                    configurable: !0
                }), f.displayName = l(_, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, x(b.prototype), l(b.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new b(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, x(g), l(g, i, "Generator"), l(g, r, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                s = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var i = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), E(a), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function F(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(a), !0).forEach((function(t) {
                        D(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : F(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function D(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function z(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || L(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(e, t) {
                if (e) {
                    if ("string" == typeof e) return R(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? R(e, t) : void 0
                }
            }

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function H(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function q(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, o) {
                        var r = e.apply(t, a);

                        function s(e) {
                            H(r, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            H(r, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function M(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function A(e, t) {
                return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Q(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = U(e);
                    if (t) {
                        var o = U(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return G(this, a)
                }
            }

            function G(e, t) {
                if (t && ("object" === B(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Y(e)
            }

            function Y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function U(e) {
                return (U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var W = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && A(e, t)
                }(c, e);
                var t, a, n, r, s, i, l = Q(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = l.call(this, e)).state = {
                        allFavorites: [],
                        favorites: [],
                        unfavoriting: !1,
                        folders: {},
                        loading: !1,
                        noFolder: !1,
                        creatingFolder: !1,
                        editingFolder: !1,
                        folderName: "",
                        oldFolderName: "",
                        folderColor: "#1f77b4",
                        folderError: "",
                        deleteFolder: "",
                        inFolder: !1,
                        searchInput: "",
                        user: null
                    }, t.loading = !1, t.here = !0, t.onUnfavorite = t.onUnfavorite.bind(Y(t)), t.onHost = t.onHost.bind(Y(t)), t.onSolo = t.onSolo.bind(Y(t)), t.getIsPlus = t.getIsPlus.bind(Y(t)), t.setDisplay = t.setDisplay.bind(Y(t)), t.openFolder = t.openFolder.bind(Y(t)), t.newFolder = t.newFolder.bind(Y(t)), t.createFolder = t.createFolder.bind(Y(t)), t.editFolder = t.editFolder.bind(Y(t)), t.addToFolder = t.addToFolder.bind(Y(t)), t.removeFromFolder = t.removeFromFolder.bind(Y(t)), t.deleteFolder = t.deleteFolder.bind(Y(t)), t.shouldShowFolder = t.shouldShowFolder.bind(Y(t)), t
                }
                return t = c, (a = [{
                    key: "componentDidMount",
                    value: (i = q(I().mark((function e() {
                        var t, a = this;
                        return I().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(g.b)("FavoritesPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    this.setState({
                                        user: t
                                    }), j.a.get("/api/users/favoriteGames").then((function(e) {
                                        var t = z(e.data.games).map((function(e) {
                                            return P(P({}, e), {}, {
                                                questions: e.questions || []
                                            })
                                        }));
                                        t.sort((function(e, t) {
                                            return t.playCount - e.playCount
                                        }));
                                        var n = z(t),
                                            o = P({}, e.data.folders),
                                            r = t.map((function(e) {
                                                return e._id
                                            }));
                                        Object.values(o).forEach((function(e) {
                                            e.sets.forEach((function(e) {
                                                var a = r.indexOf(e); - 1 !== a && (t.splice(a, 1), r.splice(a, 1))
                                            }))
                                        })), a.setState({
                                            favorites: t,
                                            allFavorites: n,
                                            folders: o,
                                            ready: !0
                                        })
                                    })).catch((function(e) {
                                        Object(g.b)(e)
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.loading = !0, this.here = !1
                    }
                }, {
                    key: "onUnfavorite",
                    value: function(e) {
                        var t = this;
                        this.loading || (this.loading = !0, this.setState({
                            unfavoriting: !0
                        }), j.a.put("/api/users/updatefavorites", {
                            id: e,
                            isUnfavoriting: !0
                        }).then((function() {
                            if (t.here) {
                                var a = z(t.state.favorites.map((function(e) {
                                        return e._id
                                    }))).indexOf(e),
                                    n = z(t.state.favorites);
                                n.splice(a, 1), t.setState({
                                    favorites: n,
                                    unfavoriting: !1
                                }, (function() {
                                    t.loading = !1
                                }))
                            }
                        })).catch((function(e) {
                            Object(g.b)(e), t.setState({
                                unfavoriting: !1
                            }), t.loading = !1
                        })))
                    }
                }, {
                    key: "onHost",
                    value: function(e) {
                        this.loading || (this.loading = !0, window.open("".concat("https://play.blooket.com", "/host?id=").concat(e), "_blank").focus(), window.location.reload())
                    }
                }, {
                    key: "onSolo",
                    value: function(e) {
                        this.loading || (this.loading = !0, window && (window.open("".concat("https://play.blooket.com", "/solo?id=").concat(e), "_blank").focus(), window.location.reload()))
                    }
                }, {
                    key: "getIsPlus",
                    value: function(e) {
                        var t = this;
                        j.a.get("/api/users/plan").then((function(a) {
                            t.here && (t.gotPlus = !0, t.plus = a.data.hasPlus, e())
                        })).catch((function(a) {
                            t.here && (Object(g.b)(a), t.loading = !1, t.setState({
                                noFolder: !0
                            }, e))
                        }))
                    }
                }, {
                    key: "setDisplay",
                    value: function(e) {
                        var t = P({}, e),
                            a = this.state.allFavorites.map((function(e) {
                                return e._id
                            })),
                            n = z(this.state.allFavorites);
                        Object.values(t).forEach((function(e) {
                            e.sets.forEach((function(e) {
                                var t = a.indexOf(e); - 1 !== t && (n.splice(t, 1), a.splice(t, 1))
                            }))
                        })), this.setState({
                            favorites: n,
                            folders: t,
                            inFolder: !1
                        })
                    }
                }, {
                    key: "openFolder",
                    value: function(e, t) {
                        var a = this,
                            n = t.sets,
                            o = this.state.allFavorites.filter((function(e) {
                                return n.includes(e._id)
                            }));
                        o.sort((function(e, t) {
                            return t.playCount - e.playCount
                        })), setTimeout((function() {
                            a.state.editingFolder || a.state.deleteFolder || a.setState({
                                favorites: o,
                                folderName: e,
                                folderColor: t.color,
                                inFolder: !0,
                                searchInput: e.toLowerCase().includes(a.state.searchInput.toLowerCase()) ? "" : a.state.searchInput
                            })
                        }))
                    }
                }, {
                    key: "newFolder",
                    value: (s = q(I().mark((function e() {
                        var t = this;
                        return I().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.loading) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.loading = !0, this.gotPlus) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6, new Promise((function(e) {
                                        return t.getIsPlus(e)
                                    }));
                                case 6:
                                    this.plus ? this.setState({
                                        creatingFolder: !0,
                                        folderName: "",
                                        folderColor: "#1f77b4"
                                    }) : this.setState({
                                        noFolder: !0
                                    }), this.loading = !1;
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "createFolder",
                    value: function() {
                        var e = this;
                        if (!this.loading) {
                            if (this.loading = !0, !this.state.folderName) return this.loading = !1, void this.setState({
                                folderError: "You need a folder name."
                            });
                            this.setState({
                                loading: !0
                            }), j.a.put("/api/users/favorite-folders/new", {
                                folderName: this.state.folderName,
                                folderColor: this.state.folderColor
                            }).then((function(t) {
                                e.here && (t.data.success ? e.setState({
                                    folders: t.data.user.favoriteFolders,
                                    creatingFolder: !1,
                                    loading: !1
                                }) : e.setState({
                                    folderError: t.data.msg,
                                    loading: !1
                                }), e.loading = !1)
                            })).catch((function(t) {
                                e.here && (Object(g.b)(t), e.loading = !1, e.setState({
                                    creatingFolder: !1,
                                    loading: !1
                                }))
                            }))
                        }
                    }
                }, {
                    key: "editFolder",
                    value: function() {
                        var e = this;
                        if (!this.loading) {
                            if (this.loading = !0, !this.state.folderName) return this.loading = !1, void this.setState({
                                folderError: "You need a folder name."
                            });
                            this.setState({
                                loading: !0
                            }), j.a.put("/api/users/favorite-folders/edit", {
                                oldFolderName: this.state.oldFolderName,
                                folderName: this.state.folderName,
                                folderColor: this.state.folderColor
                            }).then((function(t) {
                                e.here && (t.data.success ? e.setState({
                                    folders: t.data.user.favoriteFolders,
                                    editingFolder: !1,
                                    loading: !1
                                }) : e.setState({
                                    folderError: t.data.msg,
                                    loading: !1
                                }), e.loading = !1)
                            })).catch((function(t) {
                                e.here && (Object(g.b)(t), e.loading = !1, e.setState({
                                    editingFolder: !1,
                                    loading: !1
                                }))
                            }))
                        }
                    }
                }, {
                    key: "addToFolder",
                    value: (r = q(I().mark((function e() {
                        var t = this;
                        return I().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.loading) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.loading = !0, !this.state.inFolder || !this.state.folderName) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6, j.a.put("/api/users/favorite-folders/removeset", {
                                        folderName: this.state.folderName,
                                        setId: this.state.movingFavorite._id
                                    }).then().catch((function(e) {
                                        Object(g.b)(e)
                                    }));
                                case 6:
                                    j.a.put("/api/users/favorite-folders/addsets", {
                                        folderName: this.state.moveLocation,
                                        sets: [this.state.movingFavorite._id]
                                    }).then((function(e) {
                                        if (t.here) {
                                            var a = e.data || t.state.folders;
                                            t.setDisplay(a), t.setState({
                                                movingFavorite: ""
                                            }), t.loading = !1
                                        }
                                    })).catch((function(e) {
                                        t.here && (Object(g.b)(e), t.loading = !1, t.setState({
                                            movingFavorite: ""
                                        }))
                                    }));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "removeFromFolder",
                    value: function(e) {
                        var t = this;
                        this.loading || (this.loading = !0, j.a.put("/api/users/favorite-folders/removeset", {
                            folderName: this.state.folderName,
                            setId: e
                        }).then((function(a) {
                            if (t.here) {
                                var n = a.data || t.state.folders,
                                    o = JSON.parse(JSON.stringify(t.state.favorites)),
                                    r = o.map((function(e) {
                                        return e._id
                                    })).indexOf(e); - 1 !== r && o.splice(r, 1), t.setState({
                                    folders: n,
                                    favorites: o
                                }), t.loading = !1
                            }
                        })).catch((function(e) {
                            t.here && (Object(g.b)(e), t.loading = !1)
                        })))
                    }
                }, {
                    key: "deleteFolder",
                    value: function() {
                        var e = this;
                        this.loading || (this.loading = !0, this.setState({
                            loading: !0
                        }), j.a.put("/api/users/favorite-folders/delete", {
                            folderName: this.state.deleteFolder
                        }).then((function(t) {
                            if (e.here) {
                                var a = t.data || e.state.folders;
                                e.setDisplay(a), e.setState({
                                    deleteFolder: "",
                                    loading: !1
                                }), e.loading = !1
                            }
                        })).catch((function(t) {
                            e.here && (Object(g.b)(t), e.loading = !1, e.setState({
                                deleteFolder: "",
                                loading: !1
                            }))
                        })))
                    }
                }, {
                    key: "shouldShowFolder",
                    value: function(e, t) {
                        if (e.toLowerCase().includes(this.state.searchInput.toLowerCase())) return !0;
                        for (var a = t.sets, n = this.state.allFavorites.filter((function(e) {
                                return a.includes(e._id)
                            })), o = 0; o < n.length; o++)
                            if (n[o].title.toLowerCase().includes(this.state.searchInput.toLowerCase())) return !0;
                        return !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: y.isMobile ? k.a.mBody : k.a.body
                        }, o.a.createElement(b.a, {
                            title: "Favorites | Blooket",
                            desc: "Manage your favorite Blooket sets."
                        }), o.a.createElement(S.a, {
                            user: this.state.user,
                            page: "Favorites",
                            topContent: this.state.ready && (this.state.favorites.length > 0 || Object.keys(this.state.folders).length > 0) ? o.a.createElement(o.a.Fragment, null, this.state.inFolder ? null : o.a.createElement("div", {
                                className: C.a.topFolderButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.newFolder
                            }, o.a.createElement("i", {
                                className: d()("fas fa-folder-plus", C.a.topFolderIcon)
                            })), o.a.createElement("div", {
                                className: C.a.searchBar
                            }, o.a.createElement("i", {
                                className: d()("fas fa-search", C.a.searchIcon)
                            }), o.a.createElement("input", {
                                className: C.a.searchInput,
                                placeholder: "Search your favorites...",
                                onChange: function(t) {
                                    return e.setState({
                                        searchInput: t.target.value
                                    })
                                },
                                value: this.state.searchInput,
                                type: "text"
                            }))) : null
                        }), o.a.createElement("div", {
                            className: k.a.profileBody
                        }, o.a.createElement("div", {
                            className: C.a.header
                        }, "Favorites"), 0 === this.state.allFavorites.length && this.state.ready ? o.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, o.a.createElement("div", {
                            className: C.a.nothingContainer
                        }, o.a.createElement("div", {
                            className: C.a.nothingHeader
                        }, "You don't have any favorites :("), o.a.createElement("div", {
                            className: C.a.nothingButtonsRow
                        }, o.a.createElement(O.a, {
                            color: "#0bc2cf",
                            onClick: function() {
                                return e.props.history.push("/discover")
                            },
                            outsideClass: C.a.nothingButton
                        }, o.a.createElement("div", {
                            className: C.a.nothingButtonInside
                        }, o.a.createElement("i", {
                            className: d()("fas fa-compass", C.a.nothingIcon)
                        }), "Discover Favorites"))))) : null, this.state.allFavorites.length > 0 ? o.a.createElement("div", {
                            className: C.a.folderHolder
                        }, this.state.inFolder ? o.a.createElement(O.a, {
                            outsideClass: C.a.folderButton,
                            color: "#0bc2cf",
                            onClick: function() {
                                return e.setDisplay(e.state.folders)
                            }
                        }, o.a.createElement("div", {
                            className: C.a.folderButtonInside,
                            style: {
                                minWidth: 0
                            }
                        }, o.a.createElement("i", {
                            className: d()("fas fa-reply", C.a.folderButtonIcon)
                        }), "Back")) : Object.entries(this.state.folders).map((function(t) {
                            var a = T(t, 2),
                                n = a[0],
                                r = a[1];
                            return e.shouldShowFolder(n, r) ? o.a.createElement(O.a, {
                                outsideClass: C.a.folderButton,
                                color: r.color,
                                key: n,
                                onClick: function() {
                                    return e.openFolder(n, r)
                                }
                            }, o.a.createElement("div", {
                                className: C.a.folderButtonInside
                            }, o.a.createElement("i", {
                                className: d()("fas fa-folder", C.a.folderButtonIcon)
                            }), n, o.a.createElement("div", {
                                className: C.a.folderButtonDropdown,
                                role: "button",
                                tabIndex: 0
                            }, o.a.createElement("i", {
                                className: d()("fas fa-ellipsis-v", C.a.folderButtonDropdownIcon)
                            }), o.a.createElement("div", {
                                className: C.a.folderButtonDropdownMenu
                            }, o.a.createElement("div", {
                                className: C.a.folderButtonDropdownOption,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        editingFolder: !0,
                                        folderName: n,
                                        folderColor: r.color,
                                        oldFolderName: n
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: d()("fas fa-pencil-alt", C.a.folderButtonDropdownOptionIcon)
                            }), "Edit"), o.a.createElement("div", {
                                className: C.a.folderButtonDropdownOption,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        deleteFolder: n
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: d()("fas fa-trash-alt", C.a.folderButtonDropdownOptionIcon)
                            }), "Delete"))))) : null
                        }))) : null, o.a.createElement("div", {
                            className: C.a.container
                        }, this.state.favorites.filter((function(t) {
                            return t.title.toLowerCase().includes(e.state.searchInput.toLowerCase())
                        })).map((function(t) {
                            return o.a.createElement("div", {
                                key: t._id,
                                className: C.a.setContainer
                            }, t.coverImage ? o.a.createElement("div", {
                                className: C.a.setImageFiller
                            }, o.a.createElement(h.a, {
                                height: 180
                            }, o.a.createElement("img", {
                                src: Object(N.f)(t.coverImage.url),
                                alt: "Cover",
                                className: C.a.coverImage,
                                draggable: !1
                            }))) : o.a.createElement("div", {
                                className: C.a.setFillerContainer
                            }, o.a.createElement("div", {
                                className: C.a.setFillerText
                            }, "Blooket")), e.state.inFolder ? o.a.createElement("div", {
                                "data-tip": "Remove from Folder",
                                className: C.a.removeFromFolder,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.removeFromFolder(t._id)
                                }
                            }, o.a.createElement("i", {
                                className: "fas fa-folder-minus"
                            })) : null, o.a.createElement("div", {
                                className: C.a.setQuestionsContainer
                            }, o.a.createElement("div", {
                                className: C.a.setQuestionsText
                            }, "".concat(Object(N.j)(t.questions.length), " ").concat(1 === t.questions.length ? "Question" : "Questions"))), o.a.createElement("div", {
                                className: C.a.setHeader
                            }, t.title), o.a.createElement("div", {
                                className: C.a.setSpacer
                            }), o.a.createElement("div", {
                                className: C.a.setPlays
                            }, "".concat(Object(N.j)(t.playCount), " ").concat(1 === t.playCount ? "Play" : "Plays")), o.a.createElement("div", {
                                className: C.a.setLastEdit
                            }, "Edited ".concat(f()(t.date).fromNow())), o.a.createElement("div", {
                                className: C.a.setHorizontalDivider
                            }), o.a.createElement("div", {
                                className: C.a.setBottomContainer
                            }, o.a.createElement(_.a, {
                                place: "top",
                                effect: "solid",
                                className: k.a.tooltip
                            }), o.a.createElement("i", {
                                "data-tip": "Unfavorite",
                                className: d()(C.a.starIcon, "fas fa-star"),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onUnfavorite(t._id)
                                }
                            }), o.a.createElement("div", {
                                className: C.a.setVerticalDivider
                            }), o.a.createElement("i", {
                                "data-tip": "View",
                                className: d()(C.a.starIcon, "far fa-eye"),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.props.history.push("/set/".concat(t._id))
                                }
                            }), o.a.createElement("div", {
                                className: C.a.setVerticalDivider
                            }), o.a.createElement("i", {
                                "data-tip": "Move",
                                className: d()(C.a.starIcon, "fas fa-folder"),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        movingFavorite: t,
                                        oldMoveLocation: "",
                                        moveLocation: ""
                                    })
                                }
                            })), o.a.createElement("div", {
                                className: C.a.setHorizontalDivider
                            }), o.a.createElement("div", {
                                className: C.a.setPlayContainer
                            }, o.a.createElement("div", {
                                className: C.a.playButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.onSolo(t._id)
                                }
                            }, o.a.createElement("i", {
                                className: d()(C.a.playIcon, "fas fa-user-astronaut")
                            }), o.a.createElement("div", {
                                className: C.a.setPlayText
                            }, "Solo")), o.a.createElement("div", {
                                className: C.a.setVerticalDivider,
                                style: {
                                    height: 50
                                }
                            }), o.a.createElement(O.a, {
                                outsideClass: C.a.hostButton,
                                color: "#0bc2cf",
                                onClick: function() {
                                    return e.onHost(t._id)
                                }
                            }, o.a.createElement("div", {
                                className: C.a.hostButtonInside
                            }, o.a.createElement("i", {
                                className: d()(C.a.playIcon, "fas fa-play")
                            }), o.a.createElement("div", {
                                className: C.a.setPlayText
                            }, "Host")))))
                        }))), o.a.createElement("div", {
                            style: {
                                height: 30
                            }
                        }), this.state.unfavoriting ? o.a.createElement(v.a, {
                            text: "Removing Favorite...",
                            loading: !0
                        }) : this.state.deleteFolder ? o.a.createElement(v.a, {
                            text: "Do you really want to delete this folder (this will not delete the sets inside)?",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: this.deleteFolder,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        deleteFolder: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.noFolder ? o.a.createElement(v.a, {
                            text: "Get Blooket Plus to Create Folders",
                            buttonOne: {
                                text: "Upgrade",
                                click: function() {
                                    return e.props.history.push("/upgrade")
                                },
                                color: "orange"
                            },
                            buttonTwo: {
                                text: "Not Now",
                                click: function() {
                                    e.setState({
                                        loading: !1,
                                        noFolder: !1
                                    }), e.loading = !1
                                },
                                color: "blue"
                            }
                        }) : this.state.creatingFolder || this.state.editingFolder ? o.a.createElement(v.a, {
                            text: this.state.creatingFolder ? "Enter a folder name and select a color:" : "You can change the folder name and color below:",
                            loading: this.state.loading,
                            stringValue: this.state.folderName,
                            stringChange: function(t) {
                                return e.setState({
                                    folderName: t.target.value
                                })
                            },
                            colorChange: function(t) {
                                return e.setState({
                                    folderColor: t
                                })
                            },
                            colorValue: this.state.folderColor,
                            onSubmit: function(t) {
                                t.preventDefault(), e.state.creatingFolder ? e.createFolder() : e.editFolder()
                            },
                            error: this.state.folderError,
                            buttonOne: {
                                text: this.state.creatingFolder ? "Create" : "Edit",
                                click: this.state.creatingFolder ? this.createFolder : this.editFolder,
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return e.setState({
                                        creatingFolder: !1,
                                        editingFolder: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.movingFavorite ? o.a.createElement(v.a, {
                            loading: this.state.loading,
                            buttonOne: this.state.moveLocation !== this.state.oldMoveLocation ? {
                                text: "Move",
                                click: this.addToFolder,
                                color: "blue"
                            } : null,
                            buttonTwo: {
                                text: "Back",
                                click: function() {
                                    return e.setState({
                                        movingFavorite: !1
                                    })
                                },
                                color: "blue"
                            },
                            content: o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                className: C.a.moveText
                            }, "Choose a location to move the set to:"), o.a.createElement("div", {
                                className: C.a.locationsHolder
                            }, Object.keys(this.state.folders).length > 0 ? Object.entries(this.state.folders).map((function(t) {
                                var a = T(t, 2),
                                    n = a[0],
                                    r = a[1];
                                return o.a.createElement(O.a, {
                                    outsideClass: C.a.locationFolderButton,
                                    color: r.color,
                                    key: n,
                                    onClick: function() {
                                        return e.setState({
                                            moveLocation: n
                                        })
                                    }
                                }, o.a.createElement("div", {
                                    className: C.a.locationFolderButtonInside
                                }, o.a.createElement("i", {
                                    className: d()("fas fa-folder", C.a.locationFolderButtonIcon)
                                }), n))
                            })) : o.a.createElement("div", {
                                className: C.a.noFoldersText
                            }, "No Folders Created")), o.a.createElement("div", {
                                className: C.a.moveLocation
                            }, "Location: ".concat("" === this.state.moveLocation ? "No Folder" : this.state.moveLocation)))
                        }) : null))
                    }
                }]) && M(t.prototype, a), n && M(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            W.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            t.a = Object(x.c)(Object(c.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(W)))
        },
        Dl1H: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__fullContainer___16QkF-camelCase{display:flex;flex-direction:column;align-items:center;width:90%;margin:10px 5%}.styles__setContainer___bhx09-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;justify-content:center;margin:50px auto 0}.styles__setText___1LB3k-camelCase{color:#3a3a3a;line-height:48px;font-size:48px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;margin:20px 30px}.styles__row___2fBbi-camelCase{display:flex;flex-flow:row wrap;justify-content:space-around;width:100%;margin:5px 0}.styles__miniTopContainer___XdgUy-camelCase{min-width:240px;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;justify-content:center;margin:25px auto}.styles__miniTopText___1lEhW-camelCase{color:#3a3a3a;line-height:38px;font-size:38px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:13px 25px}.styles__chartContainer___ET6pn-camelCase{min-width:300px;min-height:300px;width:25vw;height:25vw;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:0;display:flex;flex-direction:column;position:relative}.styles__chartPercentage___2NBxf-camelCase{color:#3a3a3a;line-height:38px;font-size:38px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__column___31mp--camelCase{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;margin:0 20px}.styles__correctContainer___2iQBO-camelCase{min-width:300px;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;justify-content:center;margin:10px auto}.styles__correctText___f8T0v-camelCase{color:#3a3a3a;font-size:40px;padding:15px 25px}.styles__correctText___f8T0v-camelCase,.styles__deleteButton___14H9u-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:center}.styles__deleteButton___14H9u-camelCase{min-width:250px;background-color:#ce1313;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:5px auto;color:#fff;font-size:30px;padding:7px 0 13px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__deleteButton___14H9u-camelCase:hover{transform:scale(.96)}.styles__downloadButton___2nZoe-camelCase{min-width:200px;background-color:#02723b;border-radius:7px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:5px auto;color:#fff;font-size:20px;padding:5px 0 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);font-family:Nunito,sans-serif;font-weight:700;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__downloadButton___2nZoe-camelCase:hover{transform:scale(.96)}.styles__headerContainer___K9ndw-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;justify-content:center;width:100%;margin:30px auto 25px}.styles__headerText___2ywdW-camelCase{color:#3a3a3a;font-size:40px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:15px 25px}.styles__sortedContainer___3amvd-camelCase{margin:0 auto 10px;display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center}.styles__sortedText___33khz-camelCase{font-size:36px;margin:5px 10px}.styles__sortedButton___edFJm-camelCase,.styles__sortedText___33khz-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a;font-weight:700}.styles__sortedButton___edFJm-camelCase{font-size:32px;margin:5px 20px;background-color:#fff;border-radius:7px;display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;padding:5px 15px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);transition:.2s}.styles__sortedButton___edFJm-camelCase:hover{transform:scale(.95)}.styles__qHolder___1Uwty-camelCase{width:100%;display:flex;flex-direction:column}.styles__questionContainer___xmSHH-camelCase{width:90%;min-height:130px;margin:20px 5% 15px;min-width:500px;background-color:#fff;border-radius:7px;padding:0 0 6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;z-index:1}.styles__questionImageContainer___2vpKP-camelCase{width:170px;height:130px;background-color:#3a3a3a;display:flex;flex-direction:row;border-top-left-radius:7px;border-bottom-left-radius:7px;overflow:hidden;margin:auto 0;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;position:relative}.styles__questionImage___2G1qk-camelCase{margin:auto;width:170px;height:130px;-o-object-fit:contain;object-fit:contain}.styles__imageNumber___2JzyD-camelCase{width:170px;height:130px;font-family:Titan One,sans-serif;font-size:50px;text-align:center;line-height:130px;color:#fff;text-shadow:2px 2px 8px grey;position:absolute;top:0;left:0}.styles__questionFunc___143mW-camelCase{margin:10px;width:20%;display:flex;justify-content:center;align-items:center}.styles__qMathField___22Gzp-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a;font-size:20px!important}.styles__questionCenterContainer___2MwM--camelCase{display:flex;flex-direction:column;margin:5px 10px 5px 15px;width:calc(100% - 325px);min-height:120px}.styles__questionWithFunc___3qzh3-camelCase{width:calc(80% - 345px)}.styles__questionStatsContainer___1kxYv-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;width:130px;height:130px;text-align:center;margin:auto 15px auto 0;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative}.styles__questionStats___1KrGK-camelCase{line-height:22px;font-size:22px;width:70%;word-wrap:break-word;font-weight:700;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__questionStats___1KrGK-camelCase,.styles__questionText___21Mf8-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif}.styles__questionText___21Mf8-camelCase{font-size:20px;min-height:85px;line-height:28px;white-space:pre-line}.styles__answerText___1qklY-camelCase{font-size:18px;min-height:35px;display:flex;flex-flow:row wrap;align-items:center}.styles__answerText___1qklY-camelCase,.styles__questionStatText___3_fyq-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__questionStatText___3_fyq-camelCase{font-size:34px;font-weight:700;text-align:center}.styles__standingContainer___1XFAK-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;align-items:center;height:70px;width:90%;margin:10px auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__standingContainer___1XFAK-camelCase:hover{transform:scale(.97)}.styles__playerContainer___2oQRw-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:row;align-items:center;height:70px;width:90%;margin:5px auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transform:scale(.8);transition:.2s}.styles__playerContainer___2oQRw-camelCase:hover{transform:scale(.77)}.styles__accuracyText___2rnJG-camelCase{color:#3a3a3a;font-size:24px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:15px 0 15px 10px;box-sizing:border-box;width:95px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__accuracySmallText___2M5SX-camelCase{font-size:14px;line-height:16px;font-weight:400}.styles__leftEarlyText___39-FM-camelCase{color:#3a3a3a;font-size:18px;font-family:Nunito,sans-serif;text-align:center;padding:15px 10px;box-sizing:border-box;width:95px}.styles__blookImage___1qMsV-camelCase{height:57.5px;width:50px;margin:1.25px 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___1OAIe-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;text-align:left;padding:15px 5px 15px 10px;width:210px;height:40px;display:flex;align-items:center}.styles__barContainer___3SFnW-camelCase{width:300px;height:30px;border-radius:5px;overflow:hidden;margin:auto;background-color:#c43a35;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__barContainer___3SFnW-camelCase,.styles__correctBar___33XXi-camelCase{display:flex;flex-direction:row;align-items:center}.styles__correctBar___33XXi-camelCase{background-color:#4bc22e;height:100px}.styles__barText___28-2i-camelCase{display:flex;justify-content:center;align-content:center;background-color:rgba(0,0,0,.2);border-radius:3px;color:#fff;font-family:Nunito,sans-serif;font-size:16px;margin:auto 10px;box-sizing:border-box;padding:0 5px;min-width:30px}.styles__scoreRow___Sb1m--camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;height:50px;flex-grow:1}.styles__pointsText___2T7KD-camelCase{font-weight:700;font-family:Nunito,sans-serif;text-align:right;margin-right:7.5px}.styles__pointsText___2T7KD-camelCase,.styles__scoreIcon___bRFTA-camelCase{font-size:26px;color:#3a3a3a;line-height:50px}.styles__fossilIcon___GCCmW-camelCase,.styles__scoreIcon___bRFTA-camelCase{margin-right:10px}.styles__fossilIcon___GCCmW-camelCase{font-size:20px;color:#3a3a3a;line-height:50px;transform:rotate(-45deg)}.styles__candyImage___3UwYN-camelCase{height:55%;width:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-right:10px}.styles__standingBlook___1uaBA-camelCase{margin-left:5px;margin-right:15px;width:30px}.styles__cashText___25YlS-camelCase{font-size:26px;font-weight:700;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;margin-right:25px;text-align:right;justify-content:flex-end;flex-grow:1}.styles__cashText___25YlS-camelCase,.styles__standingQuestion___1GYYq-camelCase{display:flex;align-items:center}.styles__standingQuestion___1GYYq-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);flex-direction:row;width:80%;margin:10px auto 7px;z-index:1}.styles__standingQuestionText___f71wv-camelCase{color:#3a3a3a;font-size:24px;font-family:Nunito,sans-serif;text-align:left;flex-grow:1;padding:15px 20px 15px 25px}.styles__standingAnswer___aLWC6-camelCase{flex-direction:row;width:70%;margin:-20px auto 15px;z-index:-1}.styles__plusContainer___3Bte2-camelCase,.styles__standingAnswer___aLWC6-camelCase{background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;align-items:center}.styles__plusContainer___3Bte2-camelCase{flex-direction:column;width:90%;margin:50px auto 20px}.styles__plusModalContainer___29kp2-camelCase{background-color:#fff;border-radius:7px;display:flex;flex-direction:column;align-items:center;width:420px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__plusTimes___3FMVc-camelCase{position:absolute;top:15px;right:17px;font-size:26px;outline:none;cursor:pointer;color:#3a3a3a;transition:.2s}.styles__plusTimes___3FMVc-camelCase:hover{color:#0bc2cf}.styles__plusText___2nv64-camelCase{color:#3a3a3a;font-size:40px;font-weight:700;padding:25px 30px 0}.styles__plusText___2nv64-camelCase,.styles__upgradeButton___n8Djf-camelCase{font-family:Nunito,sans-serif;text-align:center}.styles__upgradeButton___n8Djf-camelCase{width:200px;height:60px;line-height:60px;background-color:#ff7b24;border-radius:7px;margin:30px auto;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2);cursor:pointer;text-decoration:none;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__upgradeButton___n8Djf-camelCase:hover{transform:scale(1.05)}.styles__standingModalContainer___2-rdc-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:650px;min-width:600px;max-height:90%;min-height:400px;background-color:#fff;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px;text-align:center;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.styles__standingModalContainer___2-rdc-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__standingModalContainer___2-rdc-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__standingModalContainer___2-rdc-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__modalRow___2ARMI-camelCase{display:flex;flex-direction:row;width:85%;margin:10px 10% 10px 5%;height:80px}.styles__modalBlook___3h4fN-camelCase{height:80px;width:70px}.styles__modalColumn___3JQDX-camelCase{margin:0 5px 0 15px;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;text-align:left;flex-grow:1;color:#3a3a3a;font-size:"Nunito",sans-serif;font-size:26px;font-weight:700;word-wrap:break-word}.styles__modalDesc___32Y48-camelCase{font-weight:400;font-size:16px}.styles__modalStats___FhZXm-camelCase{position:relative;height:80px;width:80px}.styles__modalQuestionStats___b72NW-camelCase{position:relative;height:70px;width:70px;margin-left:10px}.styles__modalStatsText___3PF8x-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Nunito,sans-serif;color:#3a3a3a;font-size:16px;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__modalQuestionColumn___1AOgk-camelCase{display:flex;flex-direction:column;width:90%;margin:0 5%}.styles__modalQuestionRow___3l8b6-camelCase{display:flex;flex-direction:row;width:100%;font-family:Nunito,sans-serif;font-size:16px;font-weight:700}.styles__modalQuestionText___2zApV-camelCase{font-weight:400;flex-grow:1;margin-left:5px;text-align:left}.styles__modalQuestionImage___1xAOq-camelCase{height:70px;width:80px;-o-object-fit:contain;object-fit:contain}.styles__modalFuncContainer___aazUy-camelCase{height:70px;width:120px;display:flex;justify-content:center;align-items:center}.styles__qModalMathField___3PHpv-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default!important;color:#3a3a3a;border-color:#3a3a3a;font-size:12px!important}.styles__mainDivider___1-sjp-camelCase{width:90%;margin:5px 5% 10px;background-color:rgba(0,0,0,.8)}.styles__divider___3d6us-camelCase,.styles__mainDivider___1-sjp-camelCase{height:1px;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__divider___3d6us-camelCase{width:100%;margin:7px 0;background-color:rgba(0,0,0,.2)}.styles__modalButton___34KCt-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:normal;outline:none}', ""]), t.locals = {
                fullContainer: "styles__fullContainer___16QkF-camelCase",
                setContainer: "styles__setContainer___bhx09-camelCase",
                setText: "styles__setText___1LB3k-camelCase",
                row: "styles__row___2fBbi-camelCase",
                miniTopContainer: "styles__miniTopContainer___XdgUy-camelCase",
                miniTopText: "styles__miniTopText___1lEhW-camelCase",
                chartContainer: "styles__chartContainer___ET6pn-camelCase",
                chartPercentage: "styles__chartPercentage___2NBxf-camelCase",
                column: "styles__column___31mp--camelCase",
                correctContainer: "styles__correctContainer___2iQBO-camelCase",
                correctText: "styles__correctText___f8T0v-camelCase",
                deleteButton: "styles__deleteButton___14H9u-camelCase",
                downloadButton: "styles__downloadButton___2nZoe-camelCase",
                headerContainer: "styles__headerContainer___K9ndw-camelCase",
                headerText: "styles__headerText___2ywdW-camelCase",
                sortedContainer: "styles__sortedContainer___3amvd-camelCase",
                sortedText: "styles__sortedText___33khz-camelCase",
                sortedButton: "styles__sortedButton___edFJm-camelCase",
                qHolder: "styles__qHolder___1Uwty-camelCase",
                questionContainer: "styles__questionContainer___xmSHH-camelCase",
                questionImageContainer: "styles__questionImageContainer___2vpKP-camelCase",
                questionImage: "styles__questionImage___2G1qk-camelCase",
                imageNumber: "styles__imageNumber___2JzyD-camelCase",
                questionFunc: "styles__questionFunc___143mW-camelCase",
                qMathField: "styles__qMathField___22Gzp-camelCase",
                questionCenterContainer: "styles__questionCenterContainer___2MwM--camelCase",
                questionWithFunc: "styles__questionWithFunc___3qzh3-camelCase",
                questionStatsContainer: "styles__questionStatsContainer___1kxYv-camelCase",
                questionStats: "styles__questionStats___1KrGK-camelCase",
                questionText: "styles__questionText___21Mf8-camelCase",
                answerText: "styles__answerText___1qklY-camelCase",
                questionStatText: "styles__questionStatText___3_fyq-camelCase",
                standingContainer: "styles__standingContainer___1XFAK-camelCase",
                playerContainer: "styles__playerContainer___2oQRw-camelCase",
                accuracyText: "styles__accuracyText___2rnJG-camelCase",
                accuracySmallText: "styles__accuracySmallText___2M5SX-camelCase",
                leftEarlyText: "styles__leftEarlyText___39-FM-camelCase",
                blookImage: "styles__blookImage___1qMsV-camelCase",
                nameText: "styles__nameText___1OAIe-camelCase",
                barContainer: "styles__barContainer___3SFnW-camelCase",
                correctBar: "styles__correctBar___33XXi-camelCase",
                barText: "styles__barText___28-2i-camelCase",
                scoreRow: "styles__scoreRow___Sb1m--camelCase",
                pointsText: "styles__pointsText___2T7KD-camelCase",
                scoreIcon: "styles__scoreIcon___bRFTA-camelCase",
                fossilIcon: "styles__fossilIcon___GCCmW-camelCase",
                candyImage: "styles__candyImage___3UwYN-camelCase",
                standingBlook: "styles__standingBlook___1uaBA-camelCase",
                cashText: "styles__cashText___25YlS-camelCase",
                standingQuestion: "styles__standingQuestion___1GYYq-camelCase",
                standingQuestionText: "styles__standingQuestionText___f71wv-camelCase",
                standingAnswer: "styles__standingAnswer___aLWC6-camelCase",
                plusContainer: "styles__plusContainer___3Bte2-camelCase",
                plusModalContainer: "styles__plusModalContainer___29kp2-camelCase",
                plusTimes: "styles__plusTimes___3FMVc-camelCase",
                plusText: "styles__plusText___2nv64-camelCase",
                upgradeButton: "styles__upgradeButton___n8Djf-camelCase",
                standingModalContainer: "styles__standingModalContainer___2-rdc-camelCase",
                modalRow: "styles__modalRow___2ARMI-camelCase",
                modalBlook: "styles__modalBlook___3h4fN-camelCase",
                modalColumn: "styles__modalColumn___3JQDX-camelCase",
                modalDesc: "styles__modalDesc___32Y48-camelCase",
                modalStats: "styles__modalStats___FhZXm-camelCase",
                modalQuestionStats: "styles__modalQuestionStats___b72NW-camelCase",
                modalStatsText: "styles__modalStatsText___3PF8x-camelCase",
                modalQuestionColumn: "styles__modalQuestionColumn___1AOgk-camelCase",
                modalQuestionRow: "styles__modalQuestionRow___3l8b6-camelCase",
                modalQuestionText: "styles__modalQuestionText___2zApV-camelCase",
                modalQuestionImage: "styles__modalQuestionImage___1xAOq-camelCase",
                modalFuncContainer: "styles__modalFuncContainer___aazUy-camelCase",
                qModalMathField: "styles__qModalMathField___3PHpv-camelCase",
                mainDivider: "styles__mainDivider___1-sjp-camelCase",
                divider: "styles__divider___3d6us-camelCase",
                modalButton: "styles__modalButton___34KCt-camelCase"
            }
        },
        GmRr: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("Ty5D"),
                d = a("H1WH"),
                m = a("wd/R"),
                f = a.n(m),
                _ = a("TSYQ"),
                p = a.n(_),
                h = a("FKJl"),
                y = a("E8Bj"),
                g = a("0oXL"),
                x = a("Xst1"),
                b = a.n(x),
                v = a("7gKC"),
                w = a.n(v),
                C = a("XTAU"),
                E = a("ca/f"),
                k = a("qnYv"),
                N = a("i4/Q"),
                j = a("1d8D"),
                S = a("lmLo");

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function B() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                B = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    r = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, o) {
                    var r = t && t.prototype instanceof m ? t : m,
                        s = Object.create(r.prototype),
                        i = new k(o || []);
                    return n(s, "_invoke", {
                        value: v(e, a, i)
                    }), s
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var d = {};

                function m() {}

                function f() {}

                function _() {}
                var p = {};
                l(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    y = h && h(h(N([])));
                y && y !== t && a.call(y, r) && (p = y);
                var g = _.prototype = m.prototype = Object.create(p);

                function x(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = u(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                d = c.value;
                                            return d && "object" == O(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(d).then((function(e) {
                                                c.value = e, s(c)
                                            }), (function(e) {
                                                return n("throw", e, s, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(n, r, o, s)
                                }))
                            }
                            return o = o ? o.then(s, s) : s()
                        }
                    })
                }

                function v(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return j()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = w(s, a);
                                if (i) {
                                    if (i === d) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = _, n(g, "constructor", {
                    value: _,
                    configurable: !0
                }), n(_, "constructor", {
                    value: f,
                    configurable: !0
                }), f.displayName = l(_, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, x(b.prototype), l(b.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new b(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, x(g), l(g, i, "Generator"), l(g, r, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                s = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var i = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), E(a), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function T(e) {
                return function(e) {
                    if (Array.isArray(e)) return I(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return I(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function F(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function P(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function D(e, t) {
                return (D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function z(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = H(e);
                    if (t) {
                        var o = H(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return L(this, a)
                }
            }

            function L(e, t) {
                if (t && ("object" === O(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function H(e) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var q = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && D(e, t)
                }(l, e);
                var t, a, n, r, s, i = z(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = i.call(this, e)).state = {
                        user: null,
                        games: [],
                        numGames: 20,
                        ready: !1,
                        deleteId: "",
                        deleteCheck: !1,
                        loading: !1
                    }, t.here = !0, t.onDeleteConfirm = t.onDeleteConfirm.bind(R(t)), t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (r = B().mark((function e() {
                        var t, a = this;
                        return B().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(h.b)("HistoryPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    this.setState({
                                        user: t
                                    }), k.a.get("/api/users/histories", {
                                        params: {
                                            id: t._id
                                        }
                                    }).then((function(e) {
                                        var t = T(e.data);
                                        t.sort((function(e, t) {
                                            return f.a.utc(t.date).diff(f.a.utc(e.date))
                                        })), a.here && a.setState({
                                            games: t,
                                            ready: !0
                                        })
                                    })).catch((function(e) {
                                        Object(h.b)(e)
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var o = r.apply(e, t);

                            function s(e) {
                                F(o, a, n, s, i, "next", e)
                            }

                            function i(e) {
                                F(o, a, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "onDeleteConfirm",
                    value: function(e) {
                        var t = this;
                        if (!this.state.loading) {
                            if (!e) return this.setState({
                                deleteCheck: !1,
                                deleteId: ""
                            });
                            this.setState({
                                loading: !0
                            }), k.a.delete("/api/history", {
                                params: {
                                    id: this.state.deleteId
                                }
                            }).then((function() {
                                if (t.here) {
                                    var e = T(t.state.games);
                                    e.splice(e.map((function(e) {
                                        return e._id
                                    })).indexOf(t.state.deleteId), 1), t.setState({
                                        loading: !1,
                                        deleteCheck: !1,
                                        deleteId: "",
                                        games: e
                                    })
                                }
                            })).catch((function(e) {
                                t.setState({
                                    deleteCheck: !1,
                                    deleteId: ""
                                }), Object(h.b)(e)
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: d.isMobile ? b.a.mBody : b.a.body
                        }, o.a.createElement(C.a, {
                            title: "History | Blooket",
                            desc: "View your recent games and review how the players performed and what questions were most missed."
                        }), o.a.createElement(N.a, {
                            user: this.state.user,
                            page: "History"
                        }), o.a.createElement("div", {
                            className: b.a.profileBody
                        }, o.a.createElement("div", {
                            className: w.a.header
                        }, "History"), o.a.createElement("div", {
                            className: w.a.gamesContainer
                        }, this.state.games.length > 0 ? this.state.games.slice(0, this.state.numGames).map((function(t) {
                            return o.a.createElement("div", {
                                className: w.a.gameHolder,
                                key: t._id
                            }, o.a.createElement(c.b, {
                                className: w.a.container,
                                to: "/history/game/".concat(t._id)
                            }, o.a.createElement(g.a, {
                                name: t.standings && t.standings.length > 0 ? t.standings[0].blook : "Light Blue",
                                className: w.a.blook
                            }), o.a.createElement("div", {
                                className: w.a.textContainer
                            }, o.a.createElement("div", {
                                className: w.a.setTitle
                            }, t.set), o.a.createElement("div", {
                                className: w.a.infoRow
                            }, o.a.createElement("div", {
                                className: w.a.info
                            }, o.a.createElement("i", {
                                className: "fas fa-gamepad",
                                style: {
                                    marginRight: 7.5
                                }
                            }), j.a[t.settings.type].name), o.a.createElement("div", {
                                className: w.a.info
                            }, o.a.createElement("i", {
                                className: "fas fa-users",
                                style: {
                                    marginRight: 7.5
                                }
                            }), t.standings ? t.standings.length : 0), o.a.createElement("div", {
                                className: w.a.info
                            }, o.a.createElement("i", {
                                className: "far fa-clock",
                                style: {
                                    marginRight: 7.5
                                }
                            }), f()(t.date).format("h:mm a, MM/DD/YY"))))), o.a.createElement("div", {
                                className: w.a.deleteButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        deleteCheck: !0,
                                        deleteId: t._id
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: "fas fa-trash-alt",
                                style: {
                                    fontSize: 28,
                                    paddingBottom: 8,
                                    paddingTop: 10
                                }
                            }), "Delete"))
                        })) : this.state.ready ? o.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, o.a.createElement("div", {
                            className: w.a.nothingContainer
                        }, o.a.createElement("div", {
                            className: w.a.nothingHeader
                        }, "You haven't hosted a game yet :("), o.a.createElement("div", {
                            className: w.a.nothingButtonsRow
                        }, o.a.createElement(S.a, {
                            color: "#0bc2cf",
                            onClick: function() {
                                return e.props.history.push("/discover")
                            },
                            outsideClass: w.a.nothingButton
                        }, o.a.createElement("div", {
                            className: w.a.nothingButtonInside
                        }, o.a.createElement("i", {
                            className: p()("fas fa-compass", w.a.nothingIcon)
                        }), "Discover Sets"))))) : null, this.state.games.length > this.state.numGames ? o.a.createElement(S.a, {
                            outsideClass: w.a.moreButton,
                            color: "#0bc2cf",
                            onClick: function() {
                                return e.setState({
                                    numGames: e.state.numGames + 20
                                })
                            }
                        }, o.a.createElement("div", {
                            className: w.a.moreButtonInside
                        }, "Show More")) : null)), this.state.deleteCheck ? o.a.createElement(E.a, {
                            text: "Do you really want to delete this history?",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: function() {
                                    return e.onDeleteConfirm(!0)
                                },
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.onDeleteConfirm(!1)
                                },
                                color: "blue"
                            }
                        }) : null)
                    }
                }]) && P(t.prototype, a), n && P(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            q.propTypes = {
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(y.c)(Object(u.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(q)))
        },
        Mgwj: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("Ty5D"),
                d = a("TSYQ"),
                m = a.n(d),
                f = a("wd/R"),
                _ = a.n(f),
                p = a("cpGi"),
                h = a("G5je"),
                y = a("H1WH"),
                g = a("FKJl"),
                x = a("E8Bj"),
                b = a("XTAU"),
                v = a("ca/f"),
                w = a("xBVA"),
                C = a.n(w),
                E = a("Xst1"),
                k = a.n(E),
                N = a("qnYv"),
                j = a("i4/Q");

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function O(e) {
                return function(e) {
                    if (Array.isArray(e)) return B(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return B(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return B(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function T() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                T = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    r = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, o) {
                    var r = t && t.prototype instanceof m ? t : m,
                        s = Object.create(r.prototype),
                        i = new k(o || []);
                    return n(s, "_invoke", {
                        value: v(e, a, i)
                    }), s
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var d = {};

                function m() {}

                function f() {}

                function _() {}
                var p = {};
                l(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    y = h && h(h(N([])));
                y && y !== t && a.call(y, r) && (p = y);
                var g = _.prototype = m.prototype = Object.create(p);

                function x(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = u(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                d = c.value;
                                            return d && "object" == S(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(d).then((function(e) {
                                                c.value = e, s(c)
                                            }), (function(e) {
                                                return n("throw", e, s, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(n, r, o, s)
                                }))
                            }
                            return o = o ? o.then(s, s) : s()
                        }
                    })
                }

                function v(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return j()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = w(s, a);
                                if (i) {
                                    if (i === d) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = _, n(g, "constructor", {
                    value: _,
                    configurable: !0
                }), n(_, "constructor", {
                    value: f,
                    configurable: !0
                }), f.displayName = l(_, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, x(b.prototype), l(b.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new b(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, x(g), l(g, i, "Generator"), l(g, r, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                s = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var i = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), E(a), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function I(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function F(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, o) {
                        var r = e.apply(t, a);

                        function s(e) {
                            I(r, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            I(r, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function P(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function D(e, t) {
                return (D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function z(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = H(e);
                    if (t) {
                        var o = H(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return L(this, a)
                }
            }

            function L(e, t) {
                if (t && ("object" === S(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function H(e) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var q = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && D(e, t)
                }(l, e);
                var t, a, n, r, s, i = z(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = i.call(this, e)).state = {
                        members: [],
                        plan: {},
                        lastDate: "",
                        inviteLink: "",
                        justCopied: !1,
                        memberToRemove: "",
                        groupName: "",
                        isDeleting: !1,
                        isPO: !1,
                        loading: !1
                    }, t.here = !0, t.copyToClipboard = t.copyToClipboard.bind(R(t)), t.removeMember = t.removeMember.bind(R(t)), t.deleteGroup = t.deleteGroup.bind(R(t)), t.editStripe = t.editStripe.bind(R(t)), t.dowloadReport = t.dowloadReport.bind(R(t)), t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (s = F(T().mark((function e() {
                        var t, a = this;
                        return T().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(g.b)("GroupPlanPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    this.setState({
                                        user: t
                                    }), N.a.get("/api/groups", {
                                        params: {
                                            id: t.groupId
                                        }
                                    }).then(function() {
                                        var e = F(T().mark((function e(n) {
                                            var o, r, s, i, l;
                                            return T().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (o = n.data.planName, r = null, "Custom" !== o) {
                                                            e.next = 6;
                                                            break
                                                        }
                                                        r = {
                                                            name: "Custom",
                                                            numPlans: n.data.numPlans
                                                        }, e.next = 18;
                                                        break;
                                                    case 6:
                                                        return e.next = 8, N.a.get("/api/subscriptions/group-plans");
                                                    case 8:
                                                        if (200 === (s = e.sent).status) {
                                                            e.next = 11;
                                                            break
                                                        }
                                                        throw new Error("cannot proceed without group plans");
                                                    case 11:
                                                        if ((i = s.data.plans) && 0 !== i.length) {
                                                            e.next = 14;
                                                            break
                                                        }
                                                        throw new Error("cannot proceed without valid group plans");
                                                    case 14:
                                                        if ((l = i.filter((function(e) {
                                                                return e.name === o
                                                            }))) && 0 !== l.length) {
                                                            e.next = 17;
                                                            break
                                                        }
                                                        throw new Error("could not find a name named ".concat(o));
                                                    case 17:
                                                        r = l[0];
                                                    case 18:
                                                        if (a.here) {
                                                            e.next = 20;
                                                            break
                                                        }
                                                        return e.abrupt("return");
                                                    case 20:
                                                        a.setState({
                                                            plan: r,
                                                            groupName: n.data.groupName,
                                                            members: n.data.members,
                                                            lastDate: n.data.lastDate,
                                                            inviteLink: "".concat("https://dashboard.blooket.com", "/group/join/").concat(t.groupId),
                                                            isPO: n.data.isPO
                                                        });
                                                    case 21:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()).catch((function(e) {
                                        Object(g.b)(e)
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "copyToClipboard",
                    value: function() {
                        var e = this,
                            t = document.createElement("textarea");
                        t.value = this.state.inviteLink, t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t);
                        var a = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                        t.select(), document.execCommand("copy"), document.body.removeChild(t), a && (document.getSelection().removeAllRanges(), document.getSelection().addRange(a)), clearTimeout(this.copyTimeout), this.setState({
                            justCopied: !0
                        }, (function() {
                            e.copyTimeout = setTimeout((function() {
                                e.setState({
                                    justCopied: !1
                                })
                            }), 1500)
                        }))
                    }
                }, {
                    key: "removeMember",
                    value: function() {
                        var e = O(this.state.members);
                        e.splice(e.indexOf(this.state.memberToRemove), 1), this.setState({
                            members: e,
                            memberToRemove: ""
                        }), N.a.put("/api/groups/remove-member", {
                            groupId: this.state.user.groupId,
                            member: this.state.memberToRemove
                        }).catch((function(e) {
                            Object(g.b)(e)
                        }))
                    }
                }, {
                    key: "deleteGroup",
                    value: function() {
                        this.state.loading || (this.setState({
                            loading: !0
                        }), N.a.delete("/api/groups", {
                            params: {
                                groupId: this.state.user.groupId
                            }
                        }).then((function() {
                            window.location.reload()
                        })).catch((function(e) {
                            Object(g.b)(e)
                        })))
                    }
                }, {
                    key: "editStripe",
                    value: function() {
                        var e = this;
                        this.setState({
                            loading: !0
                        }), N.a.post("/api/users/stripe/billing").then((function(e) {
                            window.open(e.data.url, "_self")
                        })).catch((function(t) {
                            Object(g.b)(t), e.setState({
                                loading: !1
                            })
                        }))
                    }
                }, {
                    key: "dowloadReport",
                    value: (r = F(T().mark((function e() {
                        var t, a, n, o, r, s = this;
                        return T().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.state.loading) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.setState({
                                        loading: !0
                                    }), a = [{
                                        value: "Email"
                                    }], (t = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]).forEach((function(e) {
                                        a.push({
                                            value: "".concat(e, " Hosts")
                                        })
                                    })), a.push({
                                        value: "Total Year Hosts"
                                    }), a.push({
                                        value: "Question Sets"
                                    }), n = [a], e.next = 11, new Promise((function(e) {
                                        N.a.get("/api/groups/generate-report", {
                                            params: {
                                                groupId: s.state.user.groupId
                                            }
                                        }).then((function(t) {
                                            e(t.data)
                                        })).catch((function() {
                                            e([])
                                        }))
                                    }));
                                case 11:
                                    (o = e.sent).sort((function(e, t) {
                                        return e.email < t.email ? -1 : e.email > t.email ? 1 : 0
                                    })), o.forEach((function(e) {
                                        var a = [{
                                            value: e.email
                                        }];
                                        t.forEach((function(t, n) {
                                            a.push({
                                                value: e.histories[n],
                                                type: "number"
                                            })
                                        })), a.push({
                                            value: e.histories.reduce((function(e, t) {
                                                return e + t
                                            })),
                                            type: "number"
                                        }), a.push({
                                            value: e.numGames,
                                            type: "number"
                                        }), n.push(a)
                                    })), r = {
                                        filename: "".concat(this.state.groupName, " Blooket Usage Report"),
                                        sheet: {
                                            data: n
                                        }
                                    }, Object(h.a)(r), this.setState({
                                        loading: !1
                                    });
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: y.isMobile ? k.a.mBody : k.a.body
                        }, o.a.createElement(b.a, {
                            title: "Group Plan | Blooket",
                            desc: "Manage your Blooket group."
                        }), o.a.createElement(j.a, {
                            user: this.state.user,
                            page: "Group Plan"
                        }), o.a.createElement("div", {
                            className: k.a.profileBody
                        }, o.a.createElement("div", {
                            className: C.a.header
                        }, "Group Plan"), this.state.plan && this.state.plan.name ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: C.a.infoRow
                        }, o.a.createElement("div", {
                            className: C.a.infoContainer
                        }, o.a.createElement("i", {
                            className: m()("fas fa-school", C.a.infoIcon)
                        }), this.state.groupName), o.a.createElement("div", {
                            className: C.a.infoContainer
                        }, o.a.createElement("i", {
                            className: m()("fas fa-users", C.a.infoIcon)
                        }), "".concat(this.state.plan.numPlans - this.state.members.length, " Unused Plans")), o.a.createElement("div", {
                            className: C.a.infoContainer
                        }, o.a.createElement("i", {
                            className: m()("far fa-clock", C.a.infoIcon)
                        }), "Plan End: ".concat(_()(this.state.lastDate).add(1, "year").format("MM/DD/YYYY"))), o.a.createElement(p.a, {
                            place: "left",
                            effect: "solid",
                            className: k.a.tooltip
                        }), this.state.members.length > 0 ? o.a.createElement("div", {
                            className: C.a.reportButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.dowloadReport,
                            "data-tip": "Download Report"
                        }, o.a.createElement("i", {
                            className: m()("fas fa-table", C.a.infoIcon),
                            style: {
                                marginRight: 0
                            }
                        })) : null), o.a.createElement("div", {
                            className: C.a.infoRow
                        }, o.a.createElement("div", {
                            className: C.a.linkButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.copyToClipboard
                        }, "Invite Link:??", o.a.createElement("u", null, this.state.inviteLink), this.state.justCopied ? o.a.createElement("div", {
                            className: C.a.copiedNotification
                        }, "Copied!") : null)), _()(this.state.lastDate).add(1, "year").subtract(9, "months").isBefore() ? o.a.createElement("div", {
                            className: C.a.smallButtonRow
                        }, this.state.isPO ? o.a.createElement(c.b, {
                            className: C.a.smallButton,
                            to: "/group/renew/".concat(this.state.user.groupId)
                        }, o.a.createElement("i", {
                            className: m()("fas fa-sync-alt", C.a.smallButtonIcon)
                        }), "Renew Plan Now") : o.a.createElement("div", {
                            className: C.a.smallButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.editStripe
                        }, o.a.createElement("i", {
                            className: m()("far fa-credit-card", C.a.smallButtonIcon)
                        }), "Edit Renewal"), o.a.createElement("div", {
                            className: C.a.smallButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    isDeleting: !0
                                })
                            },
                            style: {
                                backgroundColor: "#ce1313"
                            }
                        }, o.a.createElement("i", {
                            className: m()("fas fa-trash-alt", C.a.smallButtonIcon)
                        }), "Delete Group")) : null, o.a.createElement("div", {
                            className: C.a.subheaderRow
                        }, o.a.createElement("div", {
                            className: C.a.subheader
                        }, "Members", o.a.createElement("span", {
                            className: C.a.subheaderSmall
                        }, "(Click to Remove)"))), this.state.members.length > 0 ? o.a.createElement("div", {
                            className: C.a.membersHolder
                        }, this.state.members.map((function(t) {
                            return o.a.createElement("div", {
                                key: t,
                                className: C.a.memberContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        memberToRemove: t
                                    })
                                }
                            }, t)
                        }))) : o.a.createElement("div", {
                            className: C.a.nothingText
                        }, "No Members Yet", o.a.createElement("br", null), o.a.createElement("span", {
                            style: {
                                fontSize: 20,
                                fontWeight: "normal"
                            }
                        }, "If you want Plus, you must join this group yourself"))) : null, this.state.memberToRemove ? o.a.createElement(v.a, {
                            text: "Do you really want to remove this member from the group?",
                            buttonOne: {
                                text: "Yes",
                                click: this.removeMember,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        memberToRemove: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.isDeleting ? o.a.createElement(v.a, {
                            text: "Do you really want to delete this group?",
                            loading: this.state.loading,
                            buttonOne: {
                                text: "Yes",
                                click: this.deleteGroup,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        isDeleting: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.loading ? o.a.createElement(v.a, {
                            text: "Loading...",
                            loading: this.state.loading
                        }) : null))
                    }
                }]) && P(t.prototype, a), n && P(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            q.propTypes = {
                user: l.a.object
            };
            t.a = Object(x.c)(Object(u.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(q)))
        },
        OuZR: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___1Amh6-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__nothingContainer___3az8V-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;background-color:rgba(0,0,0,.1);border:2px solid #3a3a3a;border-radius:7px;margin:50px auto;max-width:80%}.styles__nothingHeader___3b-qY-camelCase{font-size:30px;font-weight:700;color:#3a3a3a}.styles__nothingButtonsRow___PrQ6v-camelCase{display:flex;flex-flow:row wrap;justify-content:center;margin:10px 0}.styles__nothingButton___1SCIl-camelCase{margin:10px 20px}.styles__nothingButtonInside___3SbZw-camelCase{height:35px;font-size:26px;padding:0 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__nothingIcon___bO2wA-camelCase{font-size:24px;margin-right:10px}.styles__gamesContainer___3KGOH-camelCase{display:flex;flex-direction:column;align-items:center;width:90%;margin:0 5% 20px}.styles__gameHolder___S1vDm-camelCase{width:100%;margin:10px 0}.styles__container___2WtUL-camelCase,.styles__gameHolder___S1vDm-camelCase{display:flex;flex-direction:row}.styles__container___2WtUL-camelCase{min-height:80px;flex-grow:1;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;text-decoration:none;overflow:hidden;transition:.2s}.styles__container___2WtUL-camelCase:hover{transform:scale(.98)}.styles__blook___2HjCj-camelCase{margin:auto 20px auto 15px;height:70px;width:61px}.styles__textContainer___1TweY-camelCase{display:flex;flex-direction:column;width:calc(100% - 125px)}.styles__setTitle___2SFni-camelCase{width:100%;font-size:30px;line-height:33px;margin-top:7px;font-weight:700;text-align:left;word-wrap:break-word}.styles__infoRow___37zwL-camelCase,.styles__setTitle___2SFni-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif}.styles__infoRow___37zwL-camelCase{margin-top:8px;font-size:17px;display:flex;flex-flow:row wrap}.styles__info___3zsR3-camelCase{display:flex;flex-direction:row;align-items:center;margin:2.5px 10px}.styles__bodyContainer___3OOBM-camelCase,.styles__deleteButton___2vDY2-camelCase{display:flex;flex-direction:column}.styles__deleteButton___2vDY2-camelCase{height:80px;width:70px;background-color:#fff;color:#3a3a3a;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);font-size:15px;margin:auto 0 auto 20px;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__deleteButton___2vDY2-camelCase:hover{transform:scale(.95);color:#ce1313}.styles__moreButton___3IkHn-camelCase{margin:10px auto 20px}.styles__moreButtonInside___1BhaI-camelCase{padding:2px 10px;font-weight:700;font-size:22px;text-shadow:0 1.5px rgba(0,0,0,.2)}", ""]), t.locals = {
                header: "styles__header___1Amh6-camelCase",
                nothingContainer: "styles__nothingContainer___3az8V-camelCase",
                nothingHeader: "styles__nothingHeader___3b-qY-camelCase",
                nothingButtonsRow: "styles__nothingButtonsRow___PrQ6v-camelCase",
                nothingButton: "styles__nothingButton___1SCIl-camelCase",
                nothingButtonInside: "styles__nothingButtonInside___3SbZw-camelCase",
                nothingIcon: "styles__nothingIcon___bO2wA-camelCase",
                gamesContainer: "styles__gamesContainer___3KGOH-camelCase",
                gameHolder: "styles__gameHolder___S1vDm-camelCase",
                container: "styles__container___2WtUL-camelCase",
                blook: "styles__blook___2HjCj-camelCase",
                textContainer: "styles__textContainer___1TweY-camelCase",
                setTitle: "styles__setTitle___2SFni-camelCase",
                infoRow: "styles__infoRow___37zwL-camelCase",
                info: "styles__info___3zsR3-camelCase",
                bodyContainer: "styles__bodyContainer___3OOBM-camelCase",
                deleteButton: "styles__deleteButton___2vDY2-camelCase",
                moreButton: "styles__moreButton___3IkHn-camelCase",
                moreButtonInside: "styles__moreButtonInside___1BhaI-camelCase"
            }
        },
        "Ry/P": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___zZwkx-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__infoRow___HHPF8-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:90%;margin:0 5% 5px}.styles__infoContainer___1bBlb-camelCase{background-color:#fff;border-radius:5px;display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;font-size:20px;font-weight:700;color:#3a3a3a;box-sizing:border-box;padding:10px 15px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:5px;flex:1;max-width:30%}.styles__infoIcon___cxLYs-camelCase{font-size:24px;margin-right:10px}.styles__reportButton___2s4g5-camelCase{background-color:#007337;border-radius:5px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;margin:5px;width:50px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__reportButton___2s4g5-camelCase:hover{transform:scale(.95)}.styles__linkButton___3Zu35-camelCase{width:80%;margin:10px auto;box-sizing:border-box;padding:10px 15px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#0bc2cf;border-radius:5px;display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#fff;font-size:20px;font-weight:700;outline:none;cursor:pointer;position:relative;word-break:break-word;transition:.2s}.styles__linkButton___3Zu35-camelCase:hover{transform:scale(.95)}.styles__endText___2doxT-camelCase{background-color:#fff;border-radius:5px;align-items:center;justify-content:center;font-family:Nunito,sans-serif;font-size:20px;font-weight:700;color:#3a3a3a;box-sizing:border-box;padding:10px 15px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:5px auto;max-width:50%}.styles__endText___2doxT-camelCase,.styles__smallButtonRow___7mET1-camelCase{display:flex;flex-direction:row}.styles__smallButtonRow___7mET1-camelCase{justify-content:space-evenly;width:60%;margin:0 auto}.styles__smallButton___3ISXg-camelCase{width:42.5%;margin:5px auto;box-sizing:border-box;padding:10px 10px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#ff7b24;border-radius:5px;display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#fff;font-size:20px;font-weight:700;outline:none;cursor:pointer;text-decoration:none;transition:.2s}.styles__smallButton___3ISXg-camelCase:hover{transform:scale(.95)}.styles__smallButtonIcon___2wr4M-camelCase{font-size:22px;margin-right:7px}.styles__copiedNotification___37Dn2-camelCase{position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:5px;font-family:Nunito,sans-serif;color:#fff;font-size:18px;padding:5px 10px}.styles__subheaderRow___3pRLb-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a;width:90%;margin:0 auto}.styles__subheader___26-hK-camelCase{font-size:32px;font-weight:700}.styles__subheaderSmall___3vlET-camelCase{font-size:16px;opacity:.6;margin-left:10px}.styles__nothingText___3lTVj-camelCase{margin:55px auto;width:80%;text-align:center;font-family:Nunito,sans-serif;font-size:30px;font-weight:700;color:#3a3a3a}.styles__membersHolder___20Rea-camelCase{width:90%;margin:10px auto 25px;display:flex;flex-flow:row wrap}.styles__memberContainer___3V0Ei-camelCase{font-family:Nunito,sans-serif;background-color:#fff;border-radius:5px;color:#3a3a3a;box-sizing:border-box;padding:5px 10px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);margin:10px;font-size:22px;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__memberContainer___3V0Ei-camelCase:hover{transform:scale(.97);text-decoration:line-through;color:#c43a35}@media only screen and (max-width:865px){.styles__infoContainer___1bBlb-camelCase{max-width:100%}.styles__linkButton___3Zu35-camelCase{width:100%;flex-direction:column}}", ""]), t.locals = {
                header: "styles__header___zZwkx-camelCase",
                infoRow: "styles__infoRow___HHPF8-camelCase",
                infoContainer: "styles__infoContainer___1bBlb-camelCase",
                infoIcon: "styles__infoIcon___cxLYs-camelCase",
                reportButton: "styles__reportButton___2s4g5-camelCase",
                linkButton: "styles__linkButton___3Zu35-camelCase",
                endText: "styles__endText___2doxT-camelCase",
                smallButtonRow: "styles__smallButtonRow___7mET1-camelCase",
                smallButton: "styles__smallButton___3ISXg-camelCase",
                smallButtonIcon: "styles__smallButtonIcon___2wr4M-camelCase",
                copiedNotification: "styles__copiedNotification___37Dn2-camelCase",
                subheaderRow: "styles__subheaderRow___3pRLb-camelCase",
                subheader: "styles__subheader___26-hK-camelCase",
                subheaderSmall: "styles__subheaderSmall___3vlET-camelCase",
                nothingText: "styles__nothingText___3lTVj-camelCase",
                membersHolder: "styles__membersHolder___20Rea-camelCase",
                memberContainer: "styles__memberContainer___3V0Ei-camelCase"
            }
        },
        "SyH+": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("Ty5D"),
                u = a("55Ip"),
                d = a("wd/R"),
                m = a.n(d),
                f = a("JeI0"),
                _ = a.n(f),
                p = a("TSYQ"),
                h = a.n(p),
                y = a("H1WH"),
                g = a("ymym"),
                x = a("3WHO"),
                b = a("G5je"),
                v = a("4HzQ"),
                w = a.n(v),
                C = a("EDFO"),
                E = a("FKJl"),
                k = a("Xst1"),
                N = a.n(k),
                j = a("WssG"),
                S = a.n(j),
                O = a("i4/Q"),
                B = a("XTAU"),
                T = a("ca/f"),
                I = a("0oXL"),
                F = a("E8Bj"),
                P = a("LHn/"),
                D = a("qnYv"),
                z = a("vCpj"),
                L = a("74sb"),
                R = a("8qja");

            function H(e) {
                return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function q() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                q = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    r = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    i = o.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, o) {
                    var r = t && t.prototype instanceof m ? t : m,
                        s = Object.create(r.prototype),
                        i = new k(o || []);
                    return n(s, "_invoke", {
                        value: v(e, a, i)
                    }), s
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var d = {};

                function m() {}

                function f() {}

                function _() {}
                var p = {};
                l(p, r, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    y = h && h(h(N([])));
                y && y !== t && a.call(y, r) && (p = y);
                var g = _.prototype = m.prototype = Object.create(p);

                function x(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var o;
                    n(this, "_invoke", {
                        value: function(n, r) {
                            function s() {
                                return new t((function(o, s) {
                                    ! function n(o, r, s, i) {
                                        var l = u(e[o], e, r);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                d = c.value;
                                            return d && "object" == H(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                                n("next", e, s, i)
                                            }), (function(e) {
                                                n("throw", e, s, i)
                                            })) : t.resolve(d).then((function(e) {
                                                c.value = e, s(c)
                                            }), (function(e) {
                                                return n("throw", e, s, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(n, r, o, s)
                                }))
                            }
                            return o = o ? o.then(s, s) : s()
                        }
                    })
                }

                function v(e, t, a) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === o) throw r;
                            return j()
                        }
                        for (a.method = o, a.arg = r;;) {
                            var s = a.delegate;
                            if (s) {
                                var i = w(s, a);
                                if (i) {
                                    if (i === d) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === n) throw n = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            n = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (n = a.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (n = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = u(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function E(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = _, n(g, "constructor", {
                    value: _,
                    configurable: !0
                }), n(_, "constructor", {
                    value: f,
                    configurable: !0
                }), f.displayName = l(_, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, x(b.prototype), l(b.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new b(c(t, a, n, o), r);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, x(g), l(g, i, "Generator"), l(g, r, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var n in t) a.push(n);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var n = a.pop();
                                if (n in t) return e.value = n, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = N, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                s = r.completion;
                            if ("root" === r.tryLoc) return n("end");
                            if (r.tryLoc <= this.prev) {
                                var i = a.call(r, "catchLoc"),
                                    l = a.call(r, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), E(a), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    E(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function M(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(a), !0).forEach((function(t) {
                        Q(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : M(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function Q(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, o, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Y(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function U(e, t, a, n, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function W(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function K(e, t) {
                return (K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function V(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = Z(e);
                    if (t) {
                        var o = Z(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return X(this, a)
                }
            }

            function X(e, t) {
                if (t && ("object" === H(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return J(e)
            }

            function J(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Z(e) {
                return (Z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            Object(C.addStyles)(), x.d.register(x.a);
            var $ = function(e, t) {
                    return {
                        datasets: [{
                            data: [e, t, e || t ? 0 : 1],
                            backgroundColor: ["#4bc22e", "#c43a35", "#737373"],
                            hoverBackgroundColor: ["#4bc22e", "#c43a35", "#737373"]
                        }]
                    }
                },
                ee = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && K(e, t)
                    }(l, e);
                    var t, a, n, r, s, i = V(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = i.call(this, e)).state = {
                            ready: !1,
                            set: "",
                            date: "",
                            type: "",
                            numPlayers: 0,
                            corrects: 0,
                            incorrects: 0,
                            questions: [],
                            stdQuestions: [],
                            standings: [],
                            plus: !1,
                            deleteCheck: !1,
                            loading: !1,
                            sortedBy: "number",
                            plusModal: !1,
                            standingShown: {},
                            zoomedImage: "",
                            user: null
                        }, t.here = !0, t.loading = !1, t.id = "", t.onDeleteConfirm = t.onDeleteConfirm.bind(J(t)), t.changeSort = t.changeSort.bind(J(t)), t.downloadResult = t.downloadResult.bind(J(t)), t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (r = q().mark((function e() {
                            var t, a = this;
                            return q().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.match.params.id) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.id = this.props.match.params.id, e.next = 5, this.props.user.getData();
                                    case 5:
                                        if (t = e.sent) {
                                            e.next = 10;
                                            break
                                        }
                                        return Object(E.b)("HistoryGamePage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 10:
                                        this.setState({
                                            user: t
                                        }), D.a.get("/api/history/byid", {
                                            params: {
                                                id: this.props.match.params.id
                                            }
                                        }).then((function(e) {
                                            var t = e.data;
                                            if (t && t.date) {
                                                var n = t.settings.type,
                                                    o = 0;
                                                "Teams" === t.settings.mode || t.settings.team ? t.standings.forEach((function(e) {
                                                    o += Object.keys(e.players).length
                                                })) : o = t.standings.length;
                                                for (var r = 0, s = 0, i = {}, l = 0; l < t.questions.length; l++) i[t.questions[l].num] = [0, 0];
                                                var c = [];
                                                t.standings.forEach((function(e) {
                                                    if ("Teams" === t.settings.mode) {
                                                        var a = 0,
                                                            n = 0,
                                                            o = {},
                                                            l = {},
                                                            u = [];
                                                        e.players.forEach((function(t) {
                                                            var c = 0;
                                                            t.corrects && Object.entries(t.corrects).forEach((function(e) {
                                                                var t = G(e, 2),
                                                                    n = t[0],
                                                                    s = t[1];
                                                                r += s, i[n][0] += s, o[n] += s, c += s, a += s
                                                            }));
                                                            var d = 0;
                                                            t.incorrects && Object.entries(t.incorrects).forEach((function(e) {
                                                                var t = G(e, 2),
                                                                    a = t[0],
                                                                    o = t[1];
                                                                s += o, i[a][1] += o, l[a] += o, d += o, n += o
                                                            })), u.push(A(A({}, t), {}, {
                                                                place: e.place,
                                                                numCorrects: c,
                                                                numIncorrects: d
                                                            }))
                                                        })), c.push(A(A({}, e), {}, {
                                                            corrects: o,
                                                            incorrects: l,
                                                            numCorrects: a,
                                                            numIncorrects: n,
                                                            players: u
                                                        }))
                                                    } else {
                                                        var d = 0;
                                                        e.corrects && Object.entries(e.corrects).forEach((function(e) {
                                                            var t = G(e, 2),
                                                                a = t[0],
                                                                n = t[1];
                                                            r += n, i[a][0] += n, d += n
                                                        }));
                                                        var m = 0;
                                                        e.incorrects && Object.entries(e.incorrects).forEach((function(e) {
                                                            var t = G(e, 2),
                                                                a = t[0],
                                                                n = t[1];
                                                            s += n, i[a][1] += n, m += n
                                                        })), c.push(A(A({}, e), {}, {
                                                            numCorrects: d,
                                                            numIncorrects: m
                                                        }))
                                                    }
                                                }));
                                                var u = t.questions.map((function(e) {
                                                    return A(A({}, e), {}, {
                                                        corrects: i[e.num][0],
                                                        incorrects: i[e.num][1]
                                                    })
                                                }));
                                                u.sort((function(e, t) {
                                                    return e.num - t.num
                                                })), a.here && a.setState({
                                                    ready: !0,
                                                    set: t.set,
                                                    date: m()(t.date).format("MM/DD/YY"),
                                                    numPlayers: o,
                                                    corrects: r,
                                                    incorrects: s,
                                                    standings: c,
                                                    questions: u,
                                                    stdQuestions: u,
                                                    type: n
                                                })
                                            } else a.setState({
                                                ready: !0
                                            })
                                        })).catch((function(e) {
                                            a.setState({
                                                ready: !0
                                            }), Object(E.b)(e)
                                        })), D.a.get("/api/users/plan").then((function(e) {
                                            a.here && a.setState({
                                                plus: e.data.hasPlus
                                            })
                                        })).catch((function(e) {
                                            Object(E.b)(e)
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, n) {
                                var o = r.apply(e, t);

                                function s(e) {
                                    U(o, a, n, s, i, "next", e)
                                }

                                function i(e) {
                                    U(o, a, n, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1
                        }
                    }, {
                        key: "onDeleteConfirm",
                        value: function(e) {
                            var t = this;
                            this.loading || (this.loading = !0, e ? (this.setState({
                                loading: !0
                            }), D.a.delete("/api/history", {
                                params: {
                                    id: this.id,
                                    name: this.state.user.name
                                }
                            }).then((function() {
                                t.here && t.props.history.push("/history")
                            })).catch((function(e) {
                                Object(E.b)(e)
                            }))) : (this.loading = !1, this.setState({
                                deleteCheck: !1
                            })))
                        }
                    }, {
                        key: "changeSort",
                        value: function(e) {
                            var t = JSON.parse(JSON.stringify(this.state.questions));
                            "number" === e ? t.sort((function(e, t) {
                                return e.num - t.num
                            })) : "incorrects" === e && t.sort((function(e, t) {
                                var a = e.corrects / Math.max(e.corrects + e.incorrects, 1),
                                    n = t.corrects / Math.max(t.corrects + t.incorrects, 1);
                                return 1 === a && 1 === n ? e.corrects - t.corrects : a === n ? t.incorrects - e.incorrects : a - n
                            })), this.setState({
                                questions: t,
                                sortedBy: e
                            })
                        }
                    }, {
                        key: "downloadResult",
                        value: function() {
                            var e = this,
                                t = [
                                    [{
                                        value: "Name"
                                    }, {
                                        value: "Blook"
                                    }, {
                                        value: "Corrects"
                                    }, {
                                        value: "Incorrects"
                                    }, {
                                        value: "Percentage"
                                    }, {
                                        value: "Racing" === this.state.type ? "Progress" : "Royale" === this.state.type ? "Wins" : "Classic" === this.state.type ? "Points" : "Candy" === this.state.type ? "Candy" : "Gold" === this.state.type ? "Gold" : "Shamrock" === this.state.type ? "Shamrocks" : "Snow" === this.state.type ? "Snow" : "Toy" === this.state.type ? "Toys" : "Defense" === this.state.type ? "Damage" : "Hack" === this.state.type ? "Crypto" : "Fish" === this.state.type ? "Weight" : "Rush" === this.state.type ? "Blooks" : "Dino" === this.state.type ? "Fossils" : "Brawl" === this.state.type ? "XP" : "Cash"
                                    }]
                                ];
                            this.state.standings.forEach((function(a) {
                                t.push([{
                                    value: a.name
                                }, {
                                    value: a.blook
                                }, {
                                    value: a.numCorrects,
                                    type: "number"
                                }, {
                                    value: a.numIncorrects,
                                    type: "number"
                                }, {
                                    value: Math.round(a.numCorrects / (a.numCorrects + a.numIncorrects || 1) * 100),
                                    type: "number"
                                }, {
                                    value: "Racing" === e.state.type ? a.progress : "Royale" === e.state.type ? a.wins : "Classic" === e.state.type ? a.points : "Candy" === e.state.type ? a.candy : "Gold" === e.state.type ? a.gold : "Shamrock" === e.state.type ? a.shamrocks : "Snow" === e.state.type ? a.health : "Toy" === e.state.type ? a.toys : "Defense" === e.state.type ? a.dmg : "Hack" === e.state.type ? a.crypto : "Fish" === e.state.type ? a.weight : "Rush" === e.state.type ? a.numBlooks : "Dino" === e.state.type ? a.fossils : "Brawl" === e.state.type ? a.xp : a.cash,
                                    type: "number"
                                }])
                            }));
                            var a = {
                                filename: this.state.date && this.state.date.includes("/") ? "Blooket Results - ".concat(this.state.date.replaceAll("/", "-")) : "Blooket Results",
                                sheet: {
                                    data: t
                                }
                            };
                            Object(b.a)(a)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (!this.props.match.params.id) return Object(E.b)("HistoryGamePage cannot be rendered without id"), void(window.location.href = "".concat("https://id.blooket.com", "/login"));
                            if (this.state.ready && !this.state.set) return Object(E.b)("HistoryGamePage cannot be rendered without this.state.set"), o.a.createElement(c.a, {
                                to: "/404"
                            });
                            var t = {},
                                a = {};
                            return this.state.standingShown.name && (t = this.state.standingShown.corrects || {}, a = this.state.standingShown.incorrects || {}), o.a.createElement("div", {
                                className: y.isMobile ? N.a.mBody : N.a.body
                            }, o.a.createElement(B.a, {
                                title: "History | Blooket",
                                desc: "View your recent games and review how the players performed and what questions were most missed."
                            }), o.a.createElement(O.a, {
                                user: this.state.user,
                                page: "History"
                            }), o.a.createElement("div", {
                                className: N.a.profileBodyMax
                            }, this.state.ready ? o.a.createElement("div", {
                                className: S.a.fullContainer
                            }, o.a.createElement("div", {
                                className: S.a.setContainer
                            }, o.a.createElement("div", {
                                className: S.a.setText
                            }, this.state.set)), o.a.createElement("div", {
                                className: S.a.row
                            }, o.a.createElement("div", {
                                className: S.a.column
                            }, o.a.createElement("div", {
                                className: S.a.miniTopContainer
                            }, o.a.createElement("div", {
                                className: S.a.miniTopText
                            }, this.state.date)), o.a.createElement("div", {
                                className: S.a.chartContainer
                            }, o.a.createElement(g.a, {
                                data: $(this.state.corrects, this.state.incorrects),
                                options: {
                                    maintainAspectRatio: !1,
                                    responsive: !0,
                                    legend: {
                                        display: !1
                                    },
                                    tooltips: {
                                        enabled: !1
                                    },
                                    animation: {
                                        duration: 1500,
                                        easing: "easeInQuint"
                                    },
                                    layout: {
                                        padding: 15
                                    }
                                }
                            }), o.a.createElement("div", {
                                className: S.a.chartPercentage
                            }, "".concat(Math.round(this.state.corrects / Math.max(this.state.corrects + this.state.incorrects, 1) * 100), "%"), o.a.createElement("div", {
                                style: {
                                    fontSize: 15,
                                    lineHeight: "16px"
                                }
                            }, "Correct")))), o.a.createElement("div", {
                                className: S.a.column
                            }, o.a.createElement("div", {
                                className: S.a.correctContainer
                            }, o.a.createElement("div", {
                                className: S.a.correctText
                            }, "".concat(this.state.numPlayers, " ").concat(1 === this.state.numPlayers ? "Player" : "Players"))), o.a.createElement("div", {
                                className: S.a.correctContainer
                            }, o.a.createElement("div", {
                                className: S.a.correctText,
                                style: {
                                    color: "#4bc22e"
                                }
                            }, "".concat(Object(L.j)(this.state.corrects), " Correct"))), o.a.createElement("div", {
                                className: S.a.correctContainer
                            }, o.a.createElement("div", {
                                className: S.a.correctText,
                                style: {
                                    color: "#c43a35"
                                }
                            }, "".concat(Object(L.j)(this.state.incorrects), " Incorrect"))), o.a.createElement("div", {
                                className: S.a.deleteButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        deleteCheck: !0
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: "fas fa-trash-alt",
                                style: {
                                    marginRight: 15
                                }
                            }), "Delete"), this.state.plus ? o.a.createElement("div", {
                                className: S.a.downloadButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.downloadResult
                            }, o.a.createElement("i", {
                                className: "fas fa-table",
                                style: {
                                    marginRight: 15
                                }
                            }), "Download") : null)), this.state.standings.length > 0 ? o.a.createElement("div", {
                                className: S.a.qHolder
                            }, o.a.createElement("div", {
                                className: S.a.headerContainer
                            }, o.a.createElement("div", {
                                className: S.a.headerText
                            }, "Leaderboard")), this.state.standings.map((function(t) {
                                return o.a.createElement("div", {
                                    className: S.a.qHolder,
                                    key: t.name
                                }, o.a.createElement("div", {
                                    className: S.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            plusModal: !e.state.plus,
                                            standingShown: e.state.plus ? t : {}
                                        })
                                    }
                                }, t.numCorrects || t.numIncorrects ? o.a.createElement("div", {
                                    className: S.a.accuracyText
                                }, "".concat(Math.round(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100), "%"), o.a.createElement("div", {
                                    className: S.a.accuracySmallText
                                }, "Correct")) : o.a.createElement("div", {
                                    className: S.a.leftEarlyText
                                }, "Left", o.a.createElement("br", null), "Early"), o.a.createElement(I.a, {
                                    name: t.blook,
                                    className: S.a.blookImage
                                }), o.a.createElement(w.a, {
                                    className: S.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: 26
                                }, t.name), o.a.createElement("div", {
                                    className: S.a.barContainer
                                }, o.a.createElement("div", {
                                    className: S.a.correctBar,
                                    style: {
                                        width: t.numCorrects || t.numIncorrects ? "".concat(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100, "%") : "100%",
                                        minWidth: t.numCorrects ? 50 : null
                                    }
                                }, t.numCorrects ? o.a.createElement("div", {
                                    className: S.a.barText
                                }, t.numCorrects) : null), t.numIncorrects ? o.a.createElement("div", {
                                    className: S.a.barText
                                }, t.numIncorrects) : null), "Racing" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.cashText
                                }, t.progress) : "Royale" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.cashText
                                }, "".concat(t.wins, " ").concat(1 === t.wins ? "Win" : "Wins")) : "Classic" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.cashText
                                }, "".concat(Object(L.j)(t.points), " ").concat(1 === t.points ? "Point" : "Points")) : "Factory" === e.state.type || "Cafe" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.cashText
                                }, "$".concat(Object(L.j)(t.cash))) : "Hack" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.cashText
                                }, "??? ".concat(Object(L.j)(t.crypto))) : "Fish" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.cashText
                                }, "".concat(Object(L.j)(t.weight), " lbs")) : "Defense" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.scoreRow
                                }, o.a.createElement("div", {
                                    className: S.a.pointsText
                                }, Object(L.j)(t.dmg)), o.a.createElement("i", {
                                    className: h()(S.a.scoreIcon, "fas fa-splotch")
                                })) : "Snow" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.scoreRow
                                }, o.a.createElement("div", {
                                    className: S.a.pointsText
                                }, Object(L.j)(t.health)), o.a.createElement("i", {
                                    className: h()(S.a.scoreIcon, "far fa-snowflake")
                                })) : "Dino" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.scoreRow
                                }, o.a.createElement("div", {
                                    className: S.a.pointsText
                                }, Object(L.j)(t.fossils)), o.a.createElement("i", {
                                    className: h()(S.a.fossilIcon, "fas fa-bone")
                                })) : "Shamrock" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.scoreRow
                                }, o.a.createElement("div", {
                                    className: S.a.pointsText
                                }, Object(L.j)(t.shamrocks)), o.a.createElement("img", {
                                    src: P.a.shamrock.shamrockBlack,
                                    alt: "Shamrock",
                                    className: S.a.candyImage,
                                    draggable: !1
                                })) : "Gold" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.scoreRow
                                }, o.a.createElement("div", {
                                    className: S.a.pointsText
                                }, Object(L.j)(t.gold)), o.a.createElement("img", {
                                    src: R.a ? P.a.basic.candy : P.a.basic.gold,
                                    alt: "Gold",
                                    className: S.a.candyImage,
                                    style: {
                                        height: "40%"
                                    },
                                    draggable: !1
                                })) : "Brawl" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.scoreRow
                                }, o.a.createElement("div", {
                                    className: S.a.pointsText
                                }, Object(L.j)(t.xp)), o.a.createElement("img", {
                                    src: P.a.basic.xp,
                                    alt: "Xp",
                                    className: S.a.candyImage,
                                    style: {
                                        height: "60%"
                                    },
                                    draggable: !1
                                })) : "Toy" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.scoreRow
                                }, o.a.createElement("div", {
                                    className: S.a.pointsText
                                }, Object(L.j)(t.toys)), o.a.createElement("img", {
                                    src: P.a.basic.toy,
                                    alt: "Toy",
                                    className: S.a.candyImage,
                                    style: {
                                        height: "55%"
                                    },
                                    draggable: !1
                                })) : "Rush" === e.state.type ? o.a.createElement("div", {
                                    className: S.a.scoreRow
                                }, o.a.createElement("div", {
                                    className: S.a.pointsText
                                }, Object(L.j)(t.numBlooks)), o.a.createElement(I.a, {
                                    name: t.blook,
                                    className: S.a.standingBlook
                                })) : o.a.createElement("div", {
                                    className: S.a.scoreRow
                                }, o.a.createElement("div", {
                                    className: S.a.pointsText
                                }, Object(L.j)(t.candy)), o.a.createElement("img", {
                                    src: P.a.basic.candyDark,
                                    alt: "Candy",
                                    className: S.a.candyImage,
                                    draggable: !1
                                }))), t.players ? t.players.map((function(t) {
                                    return o.a.createElement("div", {
                                        className: S.a.playerContainer,
                                        role: "button",
                                        tabIndex: 0,
                                        key: t.name,
                                        onClick: function() {
                                            return e.setState({
                                                plusModal: !e.state.plus,
                                                standingShown: e.state.plus ? t : {}
                                            })
                                        }
                                    }, t.numCorrects || t.numIncorrects ? o.a.createElement("div", {
                                        className: S.a.accuracyText
                                    }, "".concat(Math.round(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100), "%"), o.a.createElement("div", {
                                        className: S.a.accuracySmallText
                                    }, "Correct")) : o.a.createElement("div", {
                                        className: S.a.leftEarlyText
                                    }, "Left", o.a.createElement("br", null), "Early"), o.a.createElement(I.a, {
                                        name: t.blook,
                                        className: S.a.blookImage
                                    }), o.a.createElement(w.a, {
                                        className: S.a.nameText,
                                        mode: "single",
                                        forceSingleModeWidth: !1,
                                        min: 1,
                                        max: 26
                                    }, t.name), o.a.createElement("div", {
                                        className: S.a.barContainer
                                    }, o.a.createElement("div", {
                                        className: S.a.correctBar,
                                        style: {
                                            width: t.numCorrects || t.numIncorrects ? "".concat(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100, "%") : "100%",
                                            minWidth: t.numCorrects ? 50 : null
                                        }
                                    }, t.numCorrects ? o.a.createElement("div", {
                                        className: S.a.barText
                                    }, t.numCorrects) : null), t.numIncorrects ? o.a.createElement("div", {
                                        className: S.a.barText
                                    }, t.numIncorrects) : null))
                                })) : null)
                            }))) : null, this.state.plus ? o.a.createElement("div", {
                                className: S.a.qHolder
                            }, o.a.createElement("div", {
                                className: S.a.headerContainer
                            }, o.a.createElement("div", {
                                className: S.a.headerText
                            }, "Questions")), o.a.createElement("div", {
                                className: S.a.sortedContainer
                            }, o.a.createElement("div", {
                                className: S.a.sortedText
                            }, "Sorted By:"), o.a.createElement("div", {
                                className: S.a.sortedButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.changeSort("number")
                                },
                                style: {
                                    color: "number" === this.state.sortedBy ? "#fff" : "#3a3a3a",
                                    backgroundColor: "number" === this.state.sortedBy ? "#0bc2cf" : "#fff"
                                }
                            }, "Question #"), o.a.createElement("div", {
                                className: S.a.sortedButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.changeSort("incorrects")
                                },
                                style: {
                                    color: "incorrects" === this.state.sortedBy ? "#fff" : "#3a3a3a",
                                    backgroundColor: "incorrects" === this.state.sortedBy ? "#0bc2cf" : "#fff"
                                }
                            }, "Incorrect %")), this.state.questions.map((function(t) {
                                return o.a.createElement("div", {
                                    key: t.num,
                                    className: S.a.questionContainer
                                }, o.a.createElement("div", {
                                    className: S.a.questionImageContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: t.image ? function() {
                                        return e.setState({
                                            zoomedImage: t.image
                                        })
                                    } : function() {},
                                    style: {
                                        cursor: t.image ? "cursor" : "default"
                                    }
                                }, t.image ? o.a.createElement(_.a, {
                                    height: 130,
                                    width: 170
                                }, o.a.createElement("img", {
                                    src: Object(L.f)(t.image),
                                    alt: "Question Background",
                                    className: S.a.questionImage
                                })) : o.a.createElement("div", {
                                    className: S.a.imageNumber,
                                    style: {
                                        marginLeft: t.image ? -170 : 0
                                    }
                                }, t.num)), t.audio ? o.a.createElement("div", {
                                    className: S.a.questionFunc
                                }, o.a.createElement(z.a, {
                                    audioUrl: t.audio,
                                    width: "45%"
                                })) : t.text.includes("`*`") ? o.a.createElement("div", {
                                    className: S.a.questionFunc
                                }, o.a.createElement(C.StaticMathField, {
                                    className: S.a.qMathField
                                }, t.text.slice(t.text.indexOf("`*`") + 3, t.text.length - 3))) : null, o.a.createElement("div", {
                                    className: h()(S.a.questionCenterContainer, Q({}, S.a.questionWithFunc, t.text.includes("`*`") || t.audio))
                                }, o.a.createElement("div", {
                                    className: S.a.questionText
                                }, t.text.includes("`*`") ? t.text.slice(0, t.text.indexOf("`*`")) : t.text), o.a.createElement("div", {
                                    className: S.a.answerText
                                }, "Answer: ", Object(L.e)(t.answers))), o.a.createElement("div", {
                                    className: S.a.questionStatsContainer
                                }, o.a.createElement(g.a, {
                                    data: $(t.corrects, t.incorrects),
                                    options: {
                                        cutout: "75%",
                                        maintainAspectRatio: !1,
                                        responsive: !0,
                                        legend: {
                                            display: !1
                                        },
                                        tooltips: {
                                            enabled: !1
                                        },
                                        animation: {
                                            duration: 0
                                        },
                                        layout: {
                                            padding: 2
                                        }
                                    }
                                }), o.a.createElement("div", {
                                    className: S.a.questionStats
                                }, "".concat(t.corrects, "/").concat(t.incorrects + t.corrects), o.a.createElement("div", {
                                    style: {
                                        fontSize: 13,
                                        lineHeight: "14px"
                                    }
                                }, "Correct"))))
                            }))) : o.a.createElement("div", {
                                className: S.a.plusContainer
                            }, o.a.createElement("div", {
                                className: S.a.plusText
                            }, "Get Blooket Plus For Detailed Game Reports!"), o.a.createElement(u.b, {
                                className: S.a.upgradeButton,
                                to: "/upgrade"
                            }, "Upgrade")), o.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            })) : null), this.state.zoomedImage ? o.a.createElement("div", {
                                className: h()(N.a.modal, N.a.modalButton),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        zoomedImage: ""
                                    })
                                }
                            }, o.a.createElement("img", {
                                src: Object(L.f)(this.state.zoomedImage, !0),
                                alt: "Upload",
                                className: N.a.bigImage,
                                draggable: !1
                            })) : null, this.state.deleteCheck ? o.a.createElement(T.a, {
                                text: "Do you really want to delete this history?",
                                loading: this.state.loading,
                                buttonOne: {
                                    text: "Yes",
                                    click: function() {
                                        return e.onDeleteConfirm(!0)
                                    },
                                    color: "red"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return e.onDeleteConfirm(!1)
                                    },
                                    color: "blue"
                                }
                            }) : this.state.plusModal ? o.a.createElement("div", {
                                className: N.a.modal
                            }, o.a.createElement("div", {
                                className: S.a.plusModalContainer
                            }, o.a.createElement("i", {
                                className: h()("fas fa-times", S.a.plusTimes),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        plusModal: !1
                                    })
                                }
                            }), o.a.createElement("div", {
                                className: S.a.plusText,
                                style: {
                                    fontSize: 38
                                }
                            }, "Get Blooket Plus For Detailed Game Reports!"), o.a.createElement(u.b, {
                                className: S.a.upgradeButton,
                                to: "/upgrade"
                            }, "Upgrade"))) : this.state.standingShown.name ? o.a.createElement("div", {
                                className: N.a.modal
                            }, o.a.createElement("div", {
                                className: S.a.modalButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        standingShown: {}
                                    })
                                }
                            }), o.a.createElement("div", {
                                className: S.a.standingModalContainer
                            }, o.a.createElement("i", {
                                className: h()("fas fa-times", S.a.plusTimes),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        standingShown: {}
                                    })
                                }
                            }), o.a.createElement("div", {
                                className: S.a.modalRow
                            }, o.a.createElement(I.a, {
                                name: this.state.standingShown.blook,
                                className: S.a.modalBlook
                            }), o.a.createElement("div", {
                                className: S.a.modalColumn
                            }, this.state.standingShown.name, o.a.createElement("div", {
                                className: S.a.modalDesc
                            }, "".concat(this.state.standingShown.place).concat(Object(L.g)(this.state.standingShown.place), " Place"))), o.a.createElement("div", {
                                className: S.a.modalStats
                            }, o.a.createElement(g.a, {
                                data: $(this.state.standingShown.numCorrects, this.state.standingShown.numIncorrects),
                                options: {
                                    cutout: "75%",
                                    maintainAspectRatio: !1,
                                    responsive: !0,
                                    legend: {
                                        display: !1
                                    },
                                    tooltips: {
                                        enabled: !1
                                    },
                                    animation: {
                                        duration: 0
                                    },
                                    layout: {
                                        padding: 0
                                    }
                                }
                            }), o.a.createElement("div", {
                                className: S.a.modalStatsText
                            }, this.state.standingShown.numCorrects || this.state.standingShown.numIncorrects ? "".concat(Math.round(this.state.standingShown.numCorrects / (this.state.standingShown.numCorrects + this.state.standingShown.numIncorrects) * 100), "%") : "0%", o.a.createElement("div", {
                                style: {
                                    fontSize: 9,
                                    lineHeight: "10px"
                                }
                            }, "Correct")))), o.a.createElement("div", {
                                className: S.a.mainDivider
                            }, "??"), this.state.stdQuestions.map((function(n, r) {
                                return o.a.createElement("div", {
                                    key: n.num,
                                    className: S.a.modalQuestionColumn,
                                    style: {
                                        paddingBottom: r + 1 === e.state.stdQuestions.length ? 10 : 0
                                    }
                                }, o.a.createElement("div", {
                                    className: S.a.modalQuestionRow
                                }, n.audio ? o.a.createElement("div", {
                                    className: S.a.modalFuncContainer
                                }, o.a.createElement(z.a, {
                                    audioUrl: n.audio,
                                    width: "55%"
                                })) : n.image ? o.a.createElement(_.a, {
                                    height: 70,
                                    width: 80
                                }, o.a.createElement("img", {
                                    src: Object(L.f)(n.image),
                                    alt: "Question Background",
                                    className: S.a.modalQuestionImage
                                })) : n.text.includes("`*`") ? o.a.createElement("div", {
                                    className: S.a.modalFuncContainer
                                }, o.a.createElement(C.StaticMathField, {
                                    className: S.a.qModalMathField
                                }, n.text.slice(n.text.indexOf("`*`") + 3, n.text.length - 3))) : null, o.a.createElement("div", {
                                    style: {
                                        paddingLeft: 10,
                                        fontWeight: "bold"
                                    }
                                }, "".concat(n.num, ".")), o.a.createElement("div", {
                                    className: S.a.modalQuestionText
                                }, n.text.includes("`*`") ? n.text.slice(0, n.text.indexOf("`*`")) : n.text), o.a.createElement("div", {
                                    className: S.a.modalQuestionStats
                                }, o.a.createElement(g.a, {
                                    data: $(Object.keys(t).includes(n.num.toString()) ? t[n.num] : 0, Object.keys(a).includes(n.num.toString()) ? ["Royale", "Classic"].includes(e.state.type) ? 1 : a[n.num] : 0),
                                    options: {
                                        cutout: "75%",
                                        maintainAspectRatio: !1,
                                        responsive: !0,
                                        legend: {
                                            display: !1
                                        },
                                        tooltips: {
                                            enabled: !1
                                        },
                                        animation: {
                                            duration: 0
                                        },
                                        layout: {
                                            padding: 0
                                        }
                                    }
                                }), o.a.createElement("div", {
                                    className: S.a.modalStatsText
                                }, "".concat(Object.keys(t).includes(n.num.toString()) ? t[n.num] : 0, "/").concat((Object.keys(t).includes(n.num.toString()) ? t[n.num] : 0) + (Object.keys(a).includes(n.num.toString()) ? ["Royale", "Classic"].includes(e.state.type) ? 1 : a[n.num] : 0))))), r + 1 !== e.state.stdQuestions.length ? o.a.createElement("div", {
                                    className: S.a.divider
                                }, "??") : null)
                            })))) : null)
                        }
                    }]) && W(t.prototype, a), n && W(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(o.a.Component);
            ee.propTypes = {
                match: l.a.object,
                history: l.a.object.isRequired,
                user: l.a.object
            };
            t.a = Object(F.c)(Object(c.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(ee)))
        },
        WssG: function(e, t, a) {
            var n = a("Dl1H");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        YuoD: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                o = a.n(n),
                r = a("ANjH"),
                s = a("/MKj"),
                i = a("55Ip"),
                l = a("Ty5D"),
                c = a("H1WH"),
                u = a("E8Bj"),
                d = a("Xst1"),
                m = a.n(d),
                f = a("cQcy"),
                _ = a.n(f),
                p = a("XTAU"),
                h = a("oQ+7");

            function y(e) {
                return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = w(e);
                    if (t) {
                        var o = w(this).constructor;
                        a = Reflect.construct(n, arguments, o)
                    } else a = n.apply(this, arguments);
                    return v(this, a)
                }
            }

            function v(e, t) {
                if (t && ("object" === y(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function w(e) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var C = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && x(e, t)
                }(s, e);
                var t, a, n, r = b(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = r.call(this, e)).state = {}, t
                }
                return t = s, (a = [{
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: c.isMobile ? m.a.mBody : m.a.body
                        }, o.a.createElement(p.a, {
                            title: "FAQ | Blooket",
                            desc: "Get answers to frequently asked questions including how to assign a homework or share a question set."
                        }), o.a.createElement(h.a, null), o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement("div", {
                            className: _.a.header
                        }, "FAQ"), o.a.createElement("div", {
                            className: _.a.mainContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "How do I assign a question set as homework for students to do on their own?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                First, choose a question set by finding one in the Discover tab or creating one in the Create tab\n                and then view it in your Dashboard. Now, click Host on this question set and select Tower of Doom,\n                Factory, Crazy Kingdom, Tower Defense, or Caf?? mode (these modes currently have homework options). Then, click Assign HW and it\n                will walk you through the process. Finally, it will give you a link that students can click to\n                play the game on their own time. All they have to do is click the link, they don???t need an account.\n                ")), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "How do I share a question set I???ve created with another teacher?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                Navigate to your dashboard and locate the set you would like to share. Then, click/hover over the Gear/Cog icon to the right\n                of the trash can. Once this happens, a few buttons should show up above it. One of them may say Link. If so,\n                click the Link button and it'll copy the link for you to share. If the Link button does not appear, your set is Private and\n                you must click the pencil icon to edit the set, then click Edit Info and change the privacy setting to Public.\n                ")), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "How do I host a game?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                First, choose a question set by finding one in the Discover tab or creating one in the Create tab\n                and then view it in your Dashboard. Now, click Host on this question set and select a game mode.\n                From there, it will walk you through the process of creating a game. Once this is done, you'll\n                get a Game ID that you can share with students so they can join the game!\n                ")), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "How do I change my profile Blook/banner/title on the Stats page?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                Just click on the Blook or banner/title that you want to change and it will open a pop up\n                where you can choose a new option! You can unlock new Blooks, banners, and titles in the Market.\n                ")), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "Do students need an account to play?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                Nope! Only the teacher needs an account. You???ll be able to host a game and any student can use the Game ID to\n                join without logging in. However, students who do create accounts will have the ability to unlock new Blooks\n                and track their stats.\n                ")), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "How can I debug connection issues?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "Before trying anything else, run our debugger at:??", o.a.createElement("a", {
                            className: _.a.link,
                            href: "https://debug.blooket.com/"
                        }, "debug.blooket.com"), o.a.createElement("br", null), "This will make sure all images load and you are not blocking any essential services for the live games.")), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "The images/Blooks aren't showing up?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                This tends to be an issue with school networks and school-issued devices. The way to get the images to show\n                up is to simply get someone who can edit the school network to unblock res.cloudinary.com and images.unsplash.com.\n                These are the two services that deliver our images, so if they are being blocked then the images will not show up!\n                ")), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "I can't login/join a game/host a game?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                These errors can occur for a few reasons. The main one is that a Chrome Extension such as an AdBlocker or other\n                service is blocking part of the site???s functionality. While we don???t run ads, these can still interfere with some\n                parts of the site. Second, if you still can???t join or host a game, you may need to make sure firebaseio.com is\n                unblocked on your device. We use this site for part of our backend, so if there is a firewall blocking it you may\n                not be able to use parts of the site (however, this will not affect your ability to log in).\n                ")), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "Is this thing free?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                Yes! All of our essential features are free! You can create an unlimited number of questions set and host a game\n                with up to 60 people (300 people for Plus members (except Racing and team modes)). If you do want some extra features to enhance\n                your Blooket experience (or just to support us), you can upgrade at\n                ", o.a.createElement(i.b, {
                            className: _.a.link,
                            to: "/upgrade"
                        }, "blooket.com/upgrade"))), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "How do I hide the notification asking students to create accounts?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                After finishing a game, students are asked to create accounts (if they don???t already have them) to track their stats\n                and unlock new Blooks. Creating an account is totally optional, but some may not want their students to see this. If\n                you would like to hide this notification, then before you host a game on the Host Settings page (after you select\n                a game mode) uncheck the option that says ???Allow Student Accounts??? and it won???t show the notification.\n                ")), o.a.createElement("div", {
                            className: _.a.infoContainer
                        }, o.a.createElement("div", {
                            className: _.a.infoHeader
                        }, "I have another question, how can I get help?"), o.a.createElement("div", {
                            className: _.a.text
                        }, "\n                The best way to get in touch is to email us at contact-us@blooket.com.\n                ")), o.a.createElement("div", {
                            style: {
                                height: 20
                            }
                        }))))
                    }
                }]) && g(t.prototype, a), n && g(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(o.a.Component);
            C.propTypes = {};
            t.a = Object(u.c)(Object(l.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(r.b)({}, e)
            }))(C)))
        },
        cQcy: function(e, t, a) {
            var n = a("8uai");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        xBVA: function(e, t, a) {
            var n = a("Ry/P");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        xlKT: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___2UjpZ-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5% 10px;color:#3a3a3a}.styles__topFolderButton___2OaKp-camelCase{height:55px;width:55px;margin:0 10px;background-color:#0bc2cf;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-sizing:border-box;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__topFolderButton___2OaKp-camelCase:hover{filter:brightness(110%)}.styles__topFolderIcon___1Dpyv-camelCase{text-shadow:0 1.5px rgba(0,0,0,.2);font-size:26px;color:#fff}.styles__searchBar___1BqiF-camelCase{height:55px;margin:0 10px;background-color:#fff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-sizing:border-box;padding:0 10px 6px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;justify-content:center;align-items:center}.styles__searchBar___1BqiF-camelCase,.styles__searchIcon___oR83L-camelCase{font-size:20px;color:#3a3a3a}.styles__searchIcon___oR83L-camelCase{width:26px;text-align:center;opacity:.8;margin-right:7px}.styles__searchInput___114hs-camelCase{height:30px;width:calc(100% - 33px);font-size:18px;color:#3a3a3a;font-family:Nunito,sans-serif;border:none;outline:none}.styles__searchInput___114hs-camelCase:focus>.styles__searchIcon___oR83L-camelCase{color:#0bc2cf}.styles__container___1zgv7-camelCase{display:grid;grid-template-columns:repeat(auto-fill,265px);grid-gap:35px;max-width:90%;margin:0 5%}.styles__mergeContainer___3MKS8-camelCase{width:265px;min-height:392px;height:100%;display:flex;flex-direction:column;justify-content:space-between;font-family:Nunito,sans-serif;color:#3a3a3a;overflow:hidden;position:absolute;background-color:#fff}.styles__mergeName___32Vqt-camelCase{font-size:34px;line-height:36px;font-weight:700;margin:10px 5% 0;word-wrap:break-word}.styles__mergeButton___jcOsB-camelCase{width:100%;height:50px;display:flex;flex-direction:row;justify-content:center;align-items:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:23px;font-weight:700;opacity:.85;transition:.15s}.styles__mergeButton___jcOsB-camelCase:focus,.styles__mergeButton___jcOsB-camelCase:hover{opacity:1}.styles__setContainer___1vhA_-camelCase{width:265px;min-height:392px;background-color:#fff;border-radius:7px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__setImageFiller___2sqqV-camelCase{background-color:#333}.styles__coverImage___2SFsw-camelCase,.styles__setImageFiller___2sqqV-camelCase{width:100%;height:180px;border-top-left-radius:7px;border-top-right-radius:7px}.styles__coverImage___2SFsw-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:auto;-o-object-fit:cover;object-fit:cover}.styles__setFillerContainer___2lXXr-camelCase{width:100%;height:180px;background-color:#0bc2cf;border-top-left-radius:7px;border-top-right-radius:7px;display:flex;justify-content:center;align-items:center}.styles__setFillerText___3UUcD-camelCase{font-family:Titan One,sans-serif;font-size:45px;text-align:center;margin:auto;color:#fff;text-shadow:2px 2px 8px grey}.styles__removeFromFolder___2SowU-camelCase,.styles__setFillerText___3UUcD-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__removeFromFolder___2SowU-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);height:35px;width:35px;border-radius:4px;position:absolute;top:5px;left:5px;color:#3a3a3a;outline:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:26px;transition:.15s}.styles__removeFromFolder___2SowU-camelCase:hover{transform:scale(.95)}.styles__viewButton___1bdQ5-camelCase{width:25px;position:absolute;top:147px;left:10px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff;font-size:16px;display:flex;justify-content:center;align-items:center;text-decoration:none}.styles__setQuestionsContainer___1tdgQ-camelCase,.styles__viewButton___1bdQ5-camelCase{background-color:rgba(0,0,0,.6);height:25px;border-radius:4px}.styles__setQuestionsContainer___1tdgQ-camelCase{width:145px;margin:-33px 10px 8px auto}.styles__setQuestionsText___LouFO-camelCase{font-size:18px;line-height:25px;margin:auto;text-align:center;color:#fff}.styles__setHeader___3cQBW-camelCase,.styles__setQuestionsText___LouFO-camelCase{font-family:Nunito,sans-serif}.styles__setHeader___3cQBW-camelCase{font-size:24px;font-weight:700;margin:10px 5% 5px;color:#3a3a3a;line-height:27px;word-wrap:break-word}.styles__setSpacer___22caa-camelCase{width:100%;height:15px;flex-grow:2}.styles__setPlays___1zTiS-camelCase{font-size:18px;font-weight:700;margin:5px 5% 0}.styles__setLastEdit___2QVio-camelCase,.styles__setPlays___1zTiS-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__setLastEdit___2QVio-camelCase{font-size:16px;margin:2px 5% 5px}.styles__setHorizontalDivider___1MX_i-camelCase{width:100%;height:3px;background-color:#e0e0e0}.styles__setVerticalDivider___SXjSn-camelCase{width:3px;height:40px;background-color:#e0e0e0}.styles__setBottomContainer___3m_ys-camelCase{width:100%;display:flex;flex-direction:row}.styles__starIcon___GFtn3-camelCase{font-size:23px;color:#3a3a3a;line-height:40px;height:40px;width:calc(33.33333% - 2px);text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none}.styles__starIcon___GFtn3-camelCase:focus,.styles__starIcon___GFtn3-camelCase:hover{color:#0bc2cf}.styles__setPlayContainer___2MStR-camelCase{width:100%}.styles__playButton___2x7Vv-camelCase,.styles__setPlayContainer___2MStR-camelCase{display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__playButton___2x7Vv-camelCase{width:calc(50% - 1.5px);cursor:pointer;outline:none;color:#3a3a3a}.styles__playButton___2x7Vv-camelCase:focus,.styles__playButton___2x7Vv-camelCase:hover{color:#0bc2cf}.styles__playIcon___2kOO5-camelCase{font-size:20px;width:24px;text-align:center;transition:all .15s linear}.styles__hostButton___3mDra-camelCase{margin:auto}.styles__hostButtonInside___2Vh25-camelCase{width:100px;height:26px;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#fff;text-shadow:0 1.5px rgba(0,0,0,.2)}.styles__setPlayText___5tJr9-camelCase{font-family:Nunito,sans-serif;line-height:51px;font-size:23px;font-weight:700;padding-left:9px;transition:all .15s linear}.styles__addSetButton___13jj6-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;color:#fff;font-size:110px;display:flex;justify-content:center;align-items:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#000;opacity:.25;transition:.15s}.styles__addSetButton___13jj6-camelCase:hover{opacity:.35}.styles__mergeSetButton___iQrsC-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#000;opacity:0;transition:.2s}.styles__mergeSetButton___iQrsC-camelCase:hover{opacity:.15}.styles__nothingContainer___1bY81-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;background-color:rgba(0,0,0,.1);border:2px solid #3a3a3a;border-radius:7px;margin:50px auto;max-width:80%}.styles__nothingHeader___2YDJb-camelCase{font-size:30px;font-weight:700;color:#3a3a3a}.styles__nothingButtonsRow___3ouJS-camelCase{display:flex;flex-flow:row wrap;justify-content:center;margin:10px 0}.styles__nothingButton___3k3Yn-camelCase{margin:10px 20px}.styles__nothingButtonInside___1J9_--camelCase{height:35px;font-size:26px;padding:0 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__nothingIcon___lZYev-camelCase{font-size:24px;margin-right:10px}.styles__modal___2qAPA-camelCase{display:block;position:fixed;z-index:15;left:0;top:55px;width:100%;height:calc(100% - 55px);overflow:auto;background-color:rgba(0,0,0,.6)}.styles__folderHolder___3nOFr-camelCase{display:flex;flex-flow:row wrap;width:calc(90% + 14px);margin:0 auto 15px;position:relative;z-index:4}.styles__folderButton___1M9h--camelCase{margin:7px}.styles__folderButtonInside___1VU0S-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;min-width:150px;padding:0 10px;height:30px;font-size:20px;color:#fff;position:relative;text-shadow:0 1.5px rgba(0,0,0,.2)}.styles__folderButtonIcon___cRPAF-camelCase{margin-right:10px;font-size:22px}.styles__folderButtonDropdown___3mTSK-camelCase{margin-left:auto;width:25px;height:25px;background-color:rgba(0,0,0,.3);border-radius:5px;display:flex;justify-content:center;align-items:center;position:relative;opacity:0;outline:none;transition:.2s}.styles__folderButtonDropdownIcon___1TtVQ-camelCase{font-size:12px;color:#fff}.styles__folderButtonInside___1VU0S-camelCase:hover .styles__folderButtonDropdown___3mTSK-camelCase{opacity:1}.styles__folderButtonDropdownMenu___szpD0-camelCase{position:absolute;min-width:100px;right:0;top:calc(100% - 3px);transition:.2s;transform:rotateX(-90deg);transform-origin:top center;visibility:hidden;opacity:.3;padding:5px 0 8px;background-color:#fff;border-radius:5px;box-shadow:inset 0 -3px rgba(0,0,0,.2),0 2px 4px rgba(0,0,0,.25);display:flex;flex-direction:column;outline:none}.styles__folderButtonDropdown___3mTSK-camelCase:focus>.styles__folderButtonDropdownMenu___szpD0-camelCase,.styles__folderButtonDropdown___3mTSK-camelCase:hover>.styles__folderButtonDropdownMenu___szpD0-camelCase,.styles__folderButtonDropdown___3mTSK-camelCase[focus-within]>.styles__folderButtonDropdownMenu___szpD0-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__folderButtonDropdown___3mTSK-camelCase:focus-within>.styles__folderButtonDropdownMenu___szpD0-camelCase,.styles__folderButtonDropdown___3mTSK-camelCase:focus>.styles__folderButtonDropdownMenu___szpD0-camelCase,.styles__folderButtonDropdown___3mTSK-camelCase:hover>.styles__folderButtonDropdownMenu___szpD0-camelCase{opacity:1;transform:rotateX(0);visibility:visible}.styles__folderButtonDropdownOption___2B44q-camelCase{width:100%;background-color:#fff;font-size:14px;color:#3a3a3a;height:22px;display:flex;flex-direction:row;align-items:center;padding:0 7px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__folderButtonDropdownOption___2B44q-camelCase:hover{background-color:rgba(0,0,0,.2)}.styles__folderButtonDropdownOptionIcon___1mHwa-camelCase{font-size:12px;margin-right:7px;opacity:.8}.styles__moveText___SIQFv-camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px;color:#3a3a3a}.styles__locationsHolder___S7Fs7-camelCase{height:250px;width:100%;padding:10px;border:2px solid #666;box-sizing:border-box;margin:0 auto;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;align-items:center;overflow-y:auto}.styles__locationsHolder___S7Fs7-camelCase::-webkit-scrollbar{width:10px}.styles__locationsHolder___S7Fs7-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__locationsHolder___S7Fs7-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__noFoldersText___1JUyI-camelCase{font-size:20px}.styles__locationFolderButton___3t-Af-camelCase{margin:7px auto;width:90%}.styles__locationFolderButtonInside___Miiry-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:100%;padding:0 10px;height:40px;font-size:24px;color:#fff;position:relative;text-shadow:0 1.5px rgba(0,0,0,.2)}.styles__locationFolderButtonIcon___2uxJh-camelCase{margin-right:10px;font-size:22px}.styles__moveLocation___F8Ilp-camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px;color:#3a3a3a}@media only screen and (max-width:850px){.styles__container___1zgv7-camelCase{justify-content:center}}", ""]), t.locals = {
                header: "styles__header___2UjpZ-camelCase",
                topFolderButton: "styles__topFolderButton___2OaKp-camelCase",
                topFolderIcon: "styles__topFolderIcon___1Dpyv-camelCase",
                searchBar: "styles__searchBar___1BqiF-camelCase",
                searchIcon: "styles__searchIcon___oR83L-camelCase",
                searchInput: "styles__searchInput___114hs-camelCase",
                container: "styles__container___1zgv7-camelCase",
                mergeContainer: "styles__mergeContainer___3MKS8-camelCase",
                mergeName: "styles__mergeName___32Vqt-camelCase",
                mergeButton: "styles__mergeButton___jcOsB-camelCase",
                setContainer: "styles__setContainer___1vhA_-camelCase",
                setImageFiller: "styles__setImageFiller___2sqqV-camelCase",
                coverImage: "styles__coverImage___2SFsw-camelCase",
                setFillerContainer: "styles__setFillerContainer___2lXXr-camelCase",
                setFillerText: "styles__setFillerText___3UUcD-camelCase",
                removeFromFolder: "styles__removeFromFolder___2SowU-camelCase",
                viewButton: "styles__viewButton___1bdQ5-camelCase",
                setQuestionsContainer: "styles__setQuestionsContainer___1tdgQ-camelCase",
                setQuestionsText: "styles__setQuestionsText___LouFO-camelCase",
                setHeader: "styles__setHeader___3cQBW-camelCase",
                setSpacer: "styles__setSpacer___22caa-camelCase",
                setPlays: "styles__setPlays___1zTiS-camelCase",
                setLastEdit: "styles__setLastEdit___2QVio-camelCase",
                setHorizontalDivider: "styles__setHorizontalDivider___1MX_i-camelCase",
                setVerticalDivider: "styles__setVerticalDivider___SXjSn-camelCase",
                setBottomContainer: "styles__setBottomContainer___3m_ys-camelCase",
                starIcon: "styles__starIcon___GFtn3-camelCase",
                setPlayContainer: "styles__setPlayContainer___2MStR-camelCase",
                playButton: "styles__playButton___2x7Vv-camelCase",
                playIcon: "styles__playIcon___2kOO5-camelCase",
                hostButton: "styles__hostButton___3mDra-camelCase",
                hostButtonInside: "styles__hostButtonInside___2Vh25-camelCase",
                setPlayText: "styles__setPlayText___5tJr9-camelCase",
                addSetButton: "styles__addSetButton___13jj6-camelCase",
                mergeSetButton: "styles__mergeSetButton___iQrsC-camelCase",
                nothingContainer: "styles__nothingContainer___1bY81-camelCase",
                nothingHeader: "styles__nothingHeader___2YDJb-camelCase",
                nothingButtonsRow: "styles__nothingButtonsRow___3ouJS-camelCase",
                nothingButton: "styles__nothingButton___3k3Yn-camelCase",
                nothingButtonInside: "styles__nothingButtonInside___1J9_--camelCase",
                nothingIcon: "styles__nothingIcon___lZYev-camelCase",
                modal: "styles__modal___2qAPA-camelCase",
                folderHolder: "styles__folderHolder___3nOFr-camelCase",
                folderButton: "styles__folderButton___1M9h--camelCase",
                folderButtonInside: "styles__folderButtonInside___1VU0S-camelCase",
                folderButtonIcon: "styles__folderButtonIcon___cRPAF-camelCase",
                folderButtonDropdown: "styles__folderButtonDropdown___3mTSK-camelCase",
                folderButtonDropdownIcon: "styles__folderButtonDropdownIcon___1TtVQ-camelCase",
                folderButtonDropdownMenu: "styles__folderButtonDropdownMenu___szpD0-camelCase",
                folderButtonDropdownOption: "styles__folderButtonDropdownOption___2B44q-camelCase",
                folderButtonDropdownOptionIcon: "styles__folderButtonDropdownOptionIcon___1mHwa-camelCase",
                moveText: "styles__moveText___SIQFv-camelCase",
                locationsHolder: "styles__locationsHolder___S7Fs7-camelCase",
                noFoldersText: "styles__noFoldersText___1JUyI-camelCase",
                locationFolderButton: "styles__locationFolderButton___3t-Af-camelCase",
                locationFolderButtonInside: "styles__locationFolderButtonInside___Miiry-camelCase",
                locationFolderButtonIcon: "styles__locationFolderButtonIcon___2uxJh-camelCase",
                moveLocation: "styles__moveLocation___F8Ilp-camelCase"
            }
        }
    }
]);