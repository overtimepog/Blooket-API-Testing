function(G, r, t) {
    "use strict";
    t.d(r, "a", function() {
        return l
    });
    var s = t(222),
        h = t(17),
        v = "7",
        l = function() {
            function O(m) {
                this.dsn = m, this._dsnObject = new s.a(m)
            }
            return O.prototype.getDsn = function() {
                return this._dsnObject
            }, O.prototype.getBaseApiEndpoint = function() {
                var m = this._dsnObject,
                    S = m.protocol ? m.protocol + ":" : "",
                    y = m.port ? ":" + m.port : "";
                return S + "//" + m.host + y + (m.path ? "/" + m.path : "") + "/api/"
            }, O.prototype.getStoreEndpoint = function() {
                return this._getIngestEndpoint("store")
            }, O.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                return this.getStoreEndpoint() + "?" + this._encodedAuth()
            }, O.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
            }, O.prototype.getStoreEndpointPath = function() {
                var m = this._dsnObject;
                return (m.path ? "/" + m.path : "") + "/api/" + m.projectId + "/store/"
            }, O.prototype.getRequestHeaders = function(m, S) {
                var y = this._dsnObject,
                    R = ["Sentry sentry_version=" + v];
                return R.push("sentry_client=" + m + "/" + S), R.push("sentry_key=" + y.user), y.pass && R.push("sentry_secret=" + y.pass), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": R.join(", ")
                }
            }, O.prototype.getReportDialogEndpoint = function(m) {
                m === void 0 && (m = {});
                var S = this._dsnObject,
                    y = this.getBaseApiEndpoint() + "embed/error-page/",
                    R = [];
                R.push("dsn=" + S.toString());
                for (var C in m)
                    if (C !== "dsn")
                        if (C === "user") {
                            if (!m.user) continue;
                            m.user.name && R.push("name=" + encodeURIComponent(m.user.name)), m.user.email && R.push("email=" + encodeURIComponent(m.user.email))
                        } else R.push(encodeURIComponent(C) + "=" + encodeURIComponent(m[C]));
                return R.length ? y + "?" + R.join("&") : y
            }, O.prototype._getEnvelopeEndpoint = function() {
                return this._getIngestEndpoint("envelope")
            }, O.prototype._getIngestEndpoint = function(m) {
                var S = this.getBaseApiEndpoint(),
                    y = this._dsnObject;
                return "" + S + y.projectId + "/" + m + "/"
            }, O.prototype._encodedAuth = function() {
                var m = this._dsnObject,
                    S = {
                        sentry_key: m.user,
                        sentry_version: v
                    };
                return Object(h.f)(S)
            }, O
        }()
},
function(G, r, t) {
    "use strict";
    t.r(r), t.d(r, "GlobalHandlers", function() {
        return C
    }), t.d(r, "TryCatch", function() {
        return I
    }), t.d(r, "Breadcrumbs", function() {
        return N.a
    }), t.d(r, "LinkedErrors", function() {
        return F
    }), t.d(r, "UserAgent", function() {
        return ne
    });
    var s = t(1),
        h = t(41),
        v = t(82),
        l = t(28),
        O = t(62),
        m = t(10),
        S = t(12),
        y = t(55),
        R = t(27),
        C = function() {
            function A(re) {
                this.name = A.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = Object(s.__assign)({
                    onerror: !0,
                    onunhandledrejection: !0
                }, re)
            }
            return A.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50, this._options.onerror && (l.a.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (l.a.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
            }, A.prototype._installGlobalOnErrorHandler = function() {
                var re = this;
                this._onErrorHandlerInstalled || (Object(O.a)({
                    callback: function(k) {
                        var K = k.error,
                            H = Object(h.b)(),
                            B = H.getIntegration(A),
                            _ = K && K.__sentry_own_request__ === !0;
                        if (!(!B || Object(R.b)() || _)) {
                            var W = H.getClient(),
                                Z = Object(m.i)(K) ? re._eventFromIncompleteOnError(k.msg, k.url, k.line, k.column) : re._enhanceEventWithInitialFrame(Object(y.c)(K, void 0, {
                                    attachStacktrace: W && W.getOptions().attachStacktrace,
                                    rejection: !1
                                }), k.url, k.line, k.column);
                            Object(S.a)(Z, {
                                handled: !1,
                                type: "onerror"
                            }), H.captureEvent(Z, {
                                originalException: K
                            })
                        }
                    },
                    type: "error"
                }), this._onErrorHandlerInstalled = !0)
            }, A.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                var re = this;
                this._onUnhandledRejectionHandlerInstalled || (Object(O.a)({
                    callback: function(k) {
                        var K = k;
                        try {
                            "reason" in k ? K = k.reason : "detail" in k && "reason" in k.detail && (K = k.detail.reason)
                        } catch (te) {}
                        var H = Object(h.b)(),
                            B = H.getIntegration(A),
                            _ = K && K.__sentry_own_request__ === !0;
                        if (!B || Object(R.b)() || _) return !0;
                        var W = H.getClient(),
                            Z = Object(m.i)(K) ? re._eventFromRejectionWithPrimitive(K) : Object(y.c)(K, void 0, {
                                attachStacktrace: W && W.getOptions().attachStacktrace,
                                rejection: !0
                            });
                        Z.level = v.a.Error, Object(S.a)(Z, {
                            handled: !1,
                            type: "onunhandledrejection"
                        }), H.captureEvent(Z, {
                            originalException: K
                        })
                    },
                    type: "unhandledrejection"
                }), this._onUnhandledRejectionHandlerInstalled = !0)
            }, A.prototype._eventFromIncompleteOnError = function(re, k, K, H) {
                var B = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
                    _ = Object(m.e)(re) ? re.message : re,
                    W;
                if (Object(m.k)(_)) {
                    var Z = _.match(B);
                    Z && (W = Z[1], _ = Z[2])
                }
                var te = {
                    exception: {
                        values: [{
                            type: W || "Error",
                            value: _
                        }]
                    }
                };
                return this._enhanceEventWithInitialFrame(te, k, K, H)
            }, A.prototype._eventFromRejectionWithPrimitive = function(re) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + String(re)
                        }]
                    }
                }
            }, A.prototype._enhanceEventWithInitialFrame = function(re, k, K, H) {
                re.exception = re.exception || {}, re.exception.values = re.exception.values || [], re.exception.values[0] = re.exception.values[0] || {}, re.exception.values[0].stacktrace = re.exception.values[0].stacktrace || {}, re.exception.values[0].stacktrace.frames = re.exception.values[0].stacktrace.frames || [];
                var B = isNaN(parseInt(H, 10)) ? void 0 : H,
                    _ = isNaN(parseInt(K, 10)) ? void 0 : K,
                    W = Object(m.k)(k) && k.length > 0 ? k : Object(S.f)();
                return re.exception.values[0].stacktrace.frames.length === 0 && re.exception.values[0].stacktrace.frames.push({
                    colno: B,
                    filename: W,
                    function: "?",
                    in_app: !0,
                    lineno: _
                }), re
            }, A.id = "GlobalHandlers", A
        }(),
        x = t(17),
        T = t(80),
        M = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        I = function() {
            function A(re) {
                this.name = A.id, this._options = Object(s.__assign)({
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0
                }, re)
            }
            return A.prototype.setupOnce = function() {
                var re = Object(S.e)();
                if (this._options.setTimeout && Object(x.c)(re, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && Object(x.c)(re, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && Object(x.c)(re, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in re && Object(x.c)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget) {
                    var k = Array.isArray(this._options.eventTarget) ? this._options.eventTarget : M;
                    k.forEach(this._wrapEventTarget.bind(this))
                }
            }, A.prototype._wrapTimeFunction = function(re) {
                return function() {
                    for (var k = [], K = 0; K < arguments.length; K++) k[K] = arguments[K];
                    var H = k[0];
                    return k[0] = Object(R.c)(H, {
                        mechanism: {
                            data: {
                                function: Object(T.a)(re)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), re.apply(this, k)
                }
            }, A.prototype._wrapRAF = function(re) {
                return function(k) {
                    return re.call(this, Object(R.c)(k, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: Object(T.a)(re)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, A.prototype._wrapEventTarget = function(re) {
                var k = Object(S.e)(),
                    K = k[re] && k[re].prototype;
                !K || !K.hasOwnProperty || !K.hasOwnProperty("addEventListener") || (Object(x.c)(K, "addEventListener", function(H) {
                    return function(B, _, W) {
                        try {
                            typeof _.handleEvent == "function" && (_.handleEvent = Object(R.c)(_.handleEvent.bind(_), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: Object(T.a)(_),
                                        target: re
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (Z) {}
                        return H.call(this, B, Object(R.c)(_, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: Object(T.a)(_),
                                    target: re
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), W)
                    }
                }), Object(x.c)(K, "removeEventListener", function(H) {
                    return function(B, _, W) {
                        var Z, te = _;
                        try {
                            var d = (Z = te) === null || Z === void 0 ? void 0 : Z.__sentry_wrapped__;
                            d && H.call(this, B, d, W)
                        } catch (b) {}
                        return H.call(this, B, te, W)
                    }
                }))
            }, A.prototype._wrapXHR = function(re) {
                return function() {
                    for (var k = [], K = 0; K < arguments.length; K++) k[K] = arguments[K];
                    var H = this,
                        B = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    return B.forEach(function(_) {
                        _ in H && typeof H[_] == "function" && Object(x.c)(H, _, function(W) {
                            var Z = {
                                mechanism: {
                                    data: {
                                        function: _,
                                        handler: Object(T.a)(W)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            };
                            return W.__sentry_original__ && (Z.mechanism.data.handler = Object(T.a)(W.__sentry_original__)), Object(R.c)(W, Z)
                        })
                    }), re.apply(this, k)
                }
            }, A.id = "TryCatch", A
        }(),
        N = t(141),
        U = t(81),
        Y = t(50),
        ee = t(40),
        D = "cause",
        z = 5,
        F = function() {
            function A(re) {
                re === void 0 && (re = {}), this.name = A.id, this._key = re.key || D, this._limit = re.limit || z
            }
            return A.prototype.setupOnce = function() {
                Object(U.b)(function(re, k) {
                    var K = Object(h.b)().getIntegration(A);
                    return K ? K._handler(re, k) : re
                })
            }, A.prototype._handler = function(re, k) {
                if (!re.exception || !re.exception.values || !k || !Object(m.g)(k.originalException, Error)) return re;
                var K = this._walkErrorTree(k.originalException, this._key);
                return re.exception.values = Object(s.__spread)(K, re.exception.values), re
            }, A.prototype._walkErrorTree = function(re, k, K) {
                if (K === void 0 && (K = []), !Object(m.g)(re[k], Error) || K.length + 1 >= this._limit) return K;
                var H = Object(ee.a)(re[k]),
                    B = Object(Y.c)(H);
                return this._walkErrorTree(re[k], k, Object(s.__spread)([B], K))
            }, A.id = "LinkedErrors", A
        }(),
        $ = Object(S.e)(),
        ne = function() {
            function A() {
                this.name = A.id
            }
            return A.prototype.setupOnce = function() {
                Object(U.b)(function(re) {
                    var k, K, H;
                    if (Object(h.b)().getIntegration(A)) {
                        if (!$.navigator && !$.location && !$.document) return re;
                        var B = ((k = re.request) === null || k === void 0 ? void 0 : k.url) || ((K = $.location) === null || K === void 0 ? void 0 : K.href),
                            _ = ($.document || {}).referrer,
                            W = ($.navigator || {}).userAgent,
                            Z = Object(s.__assign)(Object(s.__assign)(Object(s.__assign)({}, (H = re.request) === null || H === void 0 ? void 0 : H.headers), _ && {
                                Referer: _
                            }), W && {
                                "User-Agent": W
                            }),
                            te = Object(s.__assign)(Object(s.__assign)({}, B && {
                                url: B
                            }), {
                                headers: Z
                            });
                        return Object(s.__assign)(Object(s.__assign)({}, re), {
                            request: te
                        })
                    }
                    return re
                })
            }, A.id = "UserAgent", A
        }()
},
function(G, r, t) {
    "use strict";
    t.d(r, "a", function() {
        return m
    }), t.d(r, "c", function() {
        return y
    }), t.d(r, "d", function() {
        return C
    }), t.d(r, "b", function() {
        return x
    });
    var s = t(28),
        h = t(12);

    function v() {
        try {
            return new ErrorEvent(""), !0
        } catch (T) {
            return !1
        }
    }

    function l() {
        try {
            return new DOMError(""), !0
        } catch (T) {
            return !1
        }
    }

    function O() {
        try {
            return new DOMException(""), !0
        } catch (T) {
            return !1
        }
    }

    function m() {
        if (!("fetch" in Object(h.e)())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch (T) {
            return !1
        }
    }

    function S(T) {
        return T && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(T.toString())
    }

    function y() {
        if (!m()) return !1;
        var T = Object(h.e)();
        if (S(T.fetch)) return !0;
        var M = !1,
            I = T.document;
        if (I && typeof I.createElement == "function") try {
            var N = I.createElement("iframe");
            N.hidden = !0, I.head.appendChild(N), N.contentWindow && N.contentWindow.fetch && (M = S(N.contentWindow.fetch)), I.head.removeChild(N)
        } catch (U) {
            s.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", U)
        }
        return M
    }

    function R() {
        return "ReportingObserver" in Object(h.e)()
    }

    function C() {
        if (!m()) return !1;
        try {
            return new Request("_", {
                referrerPolicy: "origin"
            }), !0
        } catch (T) {
            return !1
        }
    }

    function x() {
        var T = Object(h.e)(),
            M = T.chrome,
            I = M && M.app && M.app.runtime,
            N = "history" in T && !!T.history.pushState && !!T.history.replaceState;
        return !I && N
    }
},
function(G, r, t) {
    "use strict";
    t.d(r, "a", function() {
        return m
    });

    function s(y, R) {
        return y === R
    }

    function h(y, R, C) {
        if (R === null || C === null || R.length !== C.length) return !1;
        for (var x = R.length, T = 0; T < x; T++)
            if (!y(R[T], C[T])) return !1;
        return !0
    }

    function v(y) {
        var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s,
            C = null,
            x = null;
        return function() {
            return h(R, C, arguments) || (x = y.apply(null, arguments)), C = arguments, x
        }
    }

    function l(y) {
        var R = Array.isArray(y[0]) ? y[0] : y;
        if (!R.every(function(x) {
                return typeof x == "function"
            })) {
            var C = R.map(function(x) {
                return typeof x
            }).join(", ");
            throw new Error("Selector creators expect all input-selectors to be functions, " + ("instead received the following types: [" + C + "]"))
        }
        return R
    }

    function O(y) {
        for (var R = arguments.length, C = Array(R > 1 ? R - 1 : 0), x = 1; x < R; x++) C[x - 1] = arguments[x];
        return function() {
            for (var T = arguments.length, M = Array(T), I = 0; I < T; I++) M[I] = arguments[I];
            var N = 0,
                U = M.pop(),
                Y = l(M),
                ee = y.apply(void 0, [function() {
                    return N++, U.apply(null, arguments)
                }].concat(C)),
                D = y(function() {
                    for (var z = [], F = Y.length, $ = 0; $ < F; $++) z.push(Y[$].apply(null, arguments));
                    return ee.apply(null, z)
                });
            return D.resultFunc = U, D.dependencies = Y, D.recomputations = function() {
                return N
            }, D.resetRecomputations = function() {
                return N = 0
            }, D
        }
    }
    var m = O(v);

    function S(y) {
        var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m;
        if (typeof y != "object") throw new Error("createStructuredSelector expects first argument to be an object " + ("where each property is a selector, instead received a " + typeof y));
        var C = Object.keys(y);
        return R(C.map(function(x) {
            return y[x]
        }), function() {
            for (var x = arguments.length, T = Array(x), M = 0; M < x; M++) T[M] = arguments[M];
            return T.reduce(function(I, N, U) {
                return I[C[U]] = N, I
            }, {})
        })
    }
},
function(G, r, t) {
    "use strict";
    t.d(r, "c", function() {
        return l
    }), t.d(r, "b", function() {
        return O
    }), t.d(r, "d", function() {
        return m
    }), t.d(r, "a", function() {
        return S
    });
    var s = t(29),
        h = t(24),
        v = t(11);
    const l = y => Object(s.a)(`${v.k}/api/users/recorder-settings`, {
            method: "POST",
            headers: {
                Accept: h.b,
                "Content-Type": h.b
            },
            body: window.JSON.stringify(y)
        }),
        O = y => Object(s.a)(`${v.k}/api/users/integration_settings`, {
            method: "POST",
            headers: {
                Accept: h.b,
                "Content-Type": h.b
            },
            body: window.JSON.stringify(y)
        }),
        m = y => Object(s.a)(`${v.k}/api/users/tours`, {
            method: "POST",
            headers: {
                Accept: h.b,
                "Content-Type": h.b
            },
            body: window.JSON.stringify(y)
        }),
        S = y => y.first_name ? y.last_name ? y.first_name + " " + y.last_name : y.first_name : y.email
},
function(G, r, t) {
    "use strict";
    t.d(r, "d", function() {
        return s
    }), t.d(r, "f", function() {
        return h
    }), t.d(r, "b", function() {
        return l
    }), t.d(r, "a", function() {
        return O
    }), t.d(r, "c", function() {
        return m
    }), t.d(r, "g", function() {
        return S
    }), t.d(r, "e", function() {
        return y
    });
    const s = "notifications-tab",
        h = "pre-recording-tab",
        v = "os-permissions-tour-tab",
        l = "audio-glow-on",
        O = "audio-glow-off",
        m = "audio-glow-paused",
        S = "workspace-tooltip-limit-dismissed",
        y = "The os permissions were wrong, chrome is not allowed to record the computers screen"
},
function(G, r, t) {
    "use strict";
    var s = t(58),
        h = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        v = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        l = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        O = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        m = {};
    m[s.ForwardRef] = l, m[s.Memo] = O;

    function S(N) {
        return s.isMemo(N) ? O : m[N.$$typeof] || h
    }
    var y = Object.defineProperty,
        R = Object.getOwnPropertyNames,
        C = Object.getOwnPropertySymbols,
        x = Object.getOwnPropertyDescriptor,
        T = Object.getPrototypeOf,
        M = Object.prototype;

    function I(N, U, Y) {
        if (typeof U != "string") {
            if (M) {
                var ee = T(U);
                ee && ee !== M && I(N, ee, Y)
            }
            var D = R(U);
            C && (D = D.concat(C(U)));
            for (var z = S(N), F = S(U), $ = 0; $ < D.length; ++$) {
                var ne = D[$];
                if (!v[ne] && !(Y && Y[ne]) && !(F && F[ne]) && !(z && z[ne])) {
                    var A = x(U, ne);
                    try {
                        y(N, ne, A)
                    } catch (re) {}
                }
            }
        }
        return N
    }
    G.exports = I
},
function(G, r, t) {
    "use strict";
    t.d(r, "b", function() {
        return O
    }), t.d(r, "a", function() {
        return S
    });
    var s = t(169),
        h = t(107),
        v = t(11),
        l = (y, R, C) => new Promise((x, T) => {
            var M = U => {
                    try {
                        N(C.next(U))
                    } catch (Y) {
                        T(Y)
                    }
                },
                I = U => {
                    try {
                        N(C.throw(U))
                    } catch (Y) {
                        T(Y)
                    }
                },
                N = U => U.done ? x(U.value) : Promise.resolve(U.value).then(M, I);
            N((C = C.apply(y, R)).next())
        });
    const O = y => {
            const R = y.reduce((x, T) => T.status === h.b || T.status === h.a ? x + 1 : x, 0),
                C = R > 0 ? R > 9 ? "9+" : String(R) : "";
            window.chrome.browserAction.setBadgeBackgroundColor({
                color: s.b
            }), window.chrome.browserAction.setBadgeText({
                text: C
            })
        },
        m = () => l(void 0, null, function*() {
            return yield new Promise(y => {
                window.chrome.tabs.query({
                    url: `${v.k}/*`
                }, R => y(R.length > 0))
            })
        }),
        S = () => {
            chrome.browserAction.setBadgeBackgroundColor({
                color: [0, 0, 0, 0]
            }), chrome.browserAction.setBadgeText({
                text: ""
            })
        }
},
function(G, r, t) {
    var s = t(38),
        h = t(253),
        v = t(247),
        l = "Expected a function",
        O = Math.max,
        m = Math.min;

    function S(y, R, C) {
        var x, T, M, I, N, U, Y = 0,
            ee = !1,
            D = !1,
            z = !0;
        if (typeof y != "function") throw new TypeError(l);
        R = v(R) || 0, s(C) && (ee = !!C.leading, D = "maxWait" in C, M = D ? O(v(C.maxWait) || 0, R) : M, z = "trailing" in C ? !!C.trailing : z);

        function F(_) {
            var W = x,
                Z = T;
            return x = T = void 0, Y = _, I = y.apply(Z, W), I
        }

        function $(_) {
            return Y = _, N = setTimeout(re, R), ee ? F(_) : I
        }

        function ne(_) {
            var W = _ - U,
                Z = _ - Y,
                te = R - W;
            return D ? m(te, M - Z) : te
        }

        function A(_) {
            var W = _ - U,
                Z = _ - Y;
            return U === void 0 || W >= R || W < 0 || D && Z >= M
        }

        function re() {
            var _ = h();
            if (A(_)) return k(_);
            N = setTimeout(re, ne(_))
        }

        function k(_) {
            return N = void 0, z && x ? F(_) : (x = T = void 0, I)
        }

        function K() {
            N !== void 0 && clearTimeout(N), Y = 0, x = U = T = N = void 0
        }

        function H() {
            return N === void 0 ? I : k(h())
        }

        function B() {
            var _ = h(),
                W = A(_);
            if (x = arguments, T = this, U = _, W) {
                if (N === void 0) return $(U);
                if (D) return clearTimeout(N), N = setTimeout(re, R), F(U)
            }
            return N === void 0 && (N = setTimeout(re, R)), I
        }
        return B.cancel = K, B.flush = H, B
    }
    G.exports = S
},
function(G, r, t) {