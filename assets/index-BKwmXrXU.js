function V9(t14, e) {
  for (var i = 0; i < e.length; i++) {
    const a = e[i];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const u in a) if (u !== "default" && !(u in t14)) {
        const o = Object.getOwnPropertyDescriptor(a, u);
        o && Object.defineProperty(t14, u, o.get ? o : { enumerable: true, get: () => a[u] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(t14, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const o of u) if (o.type === "childList") for (const f of o.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
  }).observe(document, { childList: true, subtree: true });
  function i(u) {
    const o = {};
    return u.integrity && (o.integrity = u.integrity), u.referrerPolicy && (o.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? o.credentials = "include" : u.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function a(u) {
    if (u.ep) return;
    u.ep = true;
    const o = i(u);
    fetch(u.href, o);
  }
})();
function j9(t14) {
  return t14 && t14.__esModule && Object.prototype.hasOwnProperty.call(t14, "default") ? t14.default : t14;
}
var V0 = { exports: {} }, Bl = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Py;
function B9() {
  if (Py) return Bl;
  Py = 1;
  var t14 = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function i(a, u, o) {
    var f = null;
    if (o !== void 0 && (f = "" + o), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      o = {};
      for (var s in u) s !== "key" && (o[s] = u[s]);
    } else o = u;
    return u = o.ref, { $$typeof: t14, type: a, key: f, ref: u !== void 0 ? u : null, props: o };
  }
  return Bl.Fragment = e, Bl.jsx = i, Bl.jsxs = i, Bl;
}
var Iy;
function q9() {
  return Iy || (Iy = 1, V0.exports = B9()), V0.exports;
}
var F = q9(), j0 = { exports: {} }, At = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Wy;
function k9() {
  if (Wy) return At;
  Wy = 1;
  var t14 = Symbol.for("react.transitional.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), f = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.iterator;
  function v(C) {
    return C === null || typeof C != "object" ? null : (C = b && C[b] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var y = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, w = Object.assign, S = {};
  function x(C, B, Q) {
    this.props = C, this.context = B, this.refs = S, this.updater = Q || y;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(C, B) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, B, "setState");
  }, x.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function T() {
  }
  T.prototype = x.prototype;
  function E(C, B, Q) {
    this.props = C, this.context = B, this.refs = S, this.updater = Q || y;
  }
  var D = E.prototype = new T();
  D.constructor = E, w(D, x.prototype), D.isPureReactComponent = true;
  var O = Array.isArray, A = { H: null, A: null, T: null, S: null }, $ = Object.prototype.hasOwnProperty;
  function N(C, B, Q, K, tt, ht) {
    return Q = ht.ref, { $$typeof: t14, type: C, key: B, ref: Q !== void 0 ? Q : null, props: ht };
  }
  function H(C, B) {
    return N(C.type, B, void 0, void 0, void 0, C.props);
  }
  function z(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t14;
  }
  function G(C) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(Q) {
      return B[Q];
    });
  }
  var V = /\/+/g;
  function lt(C, B) {
    return typeof C == "object" && C !== null && C.key != null ? G("" + C.key) : B.toString(36);
  }
  function ft() {
  }
  function ct(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(ft, ft) : (C.status = "pending", C.then(function(B) {
          C.status === "pending" && (C.status = "fulfilled", C.value = B);
        }, function(B) {
          C.status === "pending" && (C.status = "rejected", C.reason = B);
        })), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function Y(C, B, Q, K, tt) {
    var ht = typeof C;
    (ht === "undefined" || ht === "boolean") && (C = null);
    var dt = false;
    if (C === null) dt = true;
    else switch (ht) {
      case "bigint":
      case "string":
      case "number":
        dt = true;
        break;
      case "object":
        switch (C.$$typeof) {
          case t14:
          case e:
            dt = true;
            break;
          case m:
            return dt = C._init, Y(dt(C._payload), B, Q, K, tt);
        }
    }
    if (dt) return tt = tt(C), dt = K === "" ? "." + lt(C, 0) : K, O(tt) ? (Q = "", dt != null && (Q = dt.replace(V, "$&/") + "/"), Y(tt, B, Q, "", function(W) {
      return W;
    })) : tt != null && (z(tt) && (tt = H(tt, Q + (tt.key == null || C && C.key === tt.key ? "" : ("" + tt.key).replace(V, "$&/") + "/") + dt)), B.push(tt)), 1;
    dt = 0;
    var st = K === "" ? "." : K + ":";
    if (O(C)) for (var pt = 0; pt < C.length; pt++) K = C[pt], ht = st + lt(K, pt), dt += Y(K, B, Q, ht, tt);
    else if (pt = v(C), typeof pt == "function") for (C = pt.call(C), pt = 0; !(K = C.next()).done; ) K = K.value, ht = st + lt(K, pt++), dt += Y(K, B, Q, ht, tt);
    else if (ht === "object") {
      if (typeof C.then == "function") return Y(ct(C), B, Q, K, tt);
      throw B = String(C), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    }
    return dt;
  }
  function q(C, B, Q) {
    if (C == null) return C;
    var K = [], tt = 0;
    return Y(C, K, "", "", function(ht) {
      return B.call(Q, ht, tt++);
    }), K;
  }
  function ut(C) {
    if (C._status === -1) {
      var B = C._result;
      B = B(), B.then(function(Q) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = Q);
      }, function(Q) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = Q);
      }), C._status === -1 && (C._status = 0, C._result = B);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var nt = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C), error: C });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function P() {
  }
  return At.Children = { map: q, forEach: function(C, B, Q) {
    q(C, function() {
      B.apply(this, arguments);
    }, Q);
  }, count: function(C) {
    var B = 0;
    return q(C, function() {
      B++;
    }), B;
  }, toArray: function(C) {
    return q(C, function(B) {
      return B;
    }) || [];
  }, only: function(C) {
    if (!z(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, At.Component = x, At.Fragment = i, At.Profiler = u, At.PureComponent = E, At.StrictMode = a, At.Suspense = d, At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A, At.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, At.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, At.cloneElement = function(C, B, Q) {
    if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
    var K = w({}, C.props), tt = C.key, ht = void 0;
    if (B != null) for (dt in B.ref !== void 0 && (ht = void 0), B.key !== void 0 && (tt = "" + B.key), B) !$.call(B, dt) || dt === "key" || dt === "__self" || dt === "__source" || dt === "ref" && B.ref === void 0 || (K[dt] = B[dt]);
    var dt = arguments.length - 2;
    if (dt === 1) K.children = Q;
    else if (1 < dt) {
      for (var st = Array(dt), pt = 0; pt < dt; pt++) st[pt] = arguments[pt + 2];
      K.children = st;
    }
    return N(C.type, tt, void 0, void 0, ht, K);
  }, At.createContext = function(C) {
    return C = { $$typeof: f, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null }, C.Provider = C, C.Consumer = { $$typeof: o, _context: C }, C;
  }, At.createElement = function(C, B, Q) {
    var K, tt = {}, ht = null;
    if (B != null) for (K in B.key !== void 0 && (ht = "" + B.key), B) $.call(B, K) && K !== "key" && K !== "__self" && K !== "__source" && (tt[K] = B[K]);
    var dt = arguments.length - 2;
    if (dt === 1) tt.children = Q;
    else if (1 < dt) {
      for (var st = Array(dt), pt = 0; pt < dt; pt++) st[pt] = arguments[pt + 2];
      tt.children = st;
    }
    if (C && C.defaultProps) for (K in dt = C.defaultProps, dt) tt[K] === void 0 && (tt[K] = dt[K]);
    return N(C, ht, void 0, void 0, null, tt);
  }, At.createRef = function() {
    return { current: null };
  }, At.forwardRef = function(C) {
    return { $$typeof: s, render: C };
  }, At.isValidElement = z, At.lazy = function(C) {
    return { $$typeof: m, _payload: { _status: -1, _result: C }, _init: ut };
  }, At.memo = function(C, B) {
    return { $$typeof: p, type: C, compare: B === void 0 ? null : B };
  }, At.startTransition = function(C) {
    var B = A.T, Q = {};
    A.T = Q;
    try {
      var K = C(), tt = A.S;
      tt !== null && tt(Q, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(P, nt);
    } catch (ht) {
      nt(ht);
    } finally {
      A.T = B;
    }
  }, At.unstable_useCacheRefresh = function() {
    return A.H.useCacheRefresh();
  }, At.use = function(C) {
    return A.H.use(C);
  }, At.useActionState = function(C, B, Q) {
    return A.H.useActionState(C, B, Q);
  }, At.useCallback = function(C, B) {
    return A.H.useCallback(C, B);
  }, At.useContext = function(C) {
    return A.H.useContext(C);
  }, At.useDebugValue = function() {
  }, At.useDeferredValue = function(C, B) {
    return A.H.useDeferredValue(C, B);
  }, At.useEffect = function(C, B) {
    return A.H.useEffect(C, B);
  }, At.useId = function() {
    return A.H.useId();
  }, At.useImperativeHandle = function(C, B, Q) {
    return A.H.useImperativeHandle(C, B, Q);
  }, At.useInsertionEffect = function(C, B) {
    return A.H.useInsertionEffect(C, B);
  }, At.useLayoutEffect = function(C, B) {
    return A.H.useLayoutEffect(C, B);
  }, At.useMemo = function(C, B) {
    return A.H.useMemo(C, B);
  }, At.useOptimistic = function(C, B) {
    return A.H.useOptimistic(C, B);
  }, At.useReducer = function(C, B, Q) {
    return A.H.useReducer(C, B, Q);
  }, At.useRef = function(C) {
    return A.H.useRef(C);
  }, At.useState = function(C) {
    return A.H.useState(C);
  }, At.useSyncExternalStore = function(C, B, Q) {
    return A.H.useSyncExternalStore(C, B, Q);
  }, At.useTransition = function() {
    return A.H.useTransition();
  }, At.version = "19.0.0", At;
}
var Jy;
function Zm() {
  return Jy || (Jy = 1, j0.exports = k9()), j0.exports;
}
var Z = Zm();
const Y9 = j9(Z), t2 = V9({ __proto__: null, default: Y9 }, [Z]);
var B0 = { exports: {} }, ql = {}, q0 = { exports: {} }, k0 = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var e2;
function G9() {
  return e2 || (e2 = 1, function(t14) {
    function e(q, ut) {
      var nt = q.length;
      q.push(ut);
      t: for (; 0 < nt; ) {
        var P = nt - 1 >>> 1, C = q[P];
        if (0 < u(C, ut)) q[P] = ut, q[nt] = C, nt = P;
        else break t;
      }
    }
    function i(q) {
      return q.length === 0 ? null : q[0];
    }
    function a(q) {
      if (q.length === 0) return null;
      var ut = q[0], nt = q.pop();
      if (nt !== ut) {
        q[0] = nt;
        t: for (var P = 0, C = q.length, B = C >>> 1; P < B; ) {
          var Q = 2 * (P + 1) - 1, K = q[Q], tt = Q + 1, ht = q[tt];
          if (0 > u(K, nt)) tt < C && 0 > u(ht, K) ? (q[P] = ht, q[tt] = nt, P = tt) : (q[P] = K, q[Q] = nt, P = Q);
          else if (tt < C && 0 > u(ht, nt)) q[P] = ht, q[tt] = nt, P = tt;
          else break t;
        }
      }
      return ut;
    }
    function u(q, ut) {
      var nt = q.sortIndex - ut.sortIndex;
      return nt !== 0 ? nt : q.id - ut.id;
    }
    if (t14.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      t14.unstable_now = function() {
        return o.now();
      };
    } else {
      var f = Date, s = f.now();
      t14.unstable_now = function() {
        return f.now() - s;
      };
    }
    var d = [], p = [], m = 1, b = null, v = 3, y = false, w = false, S = false, x = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, E = typeof setImmediate < "u" ? setImmediate : null;
    function D(q) {
      for (var ut = i(p); ut !== null; ) {
        if (ut.callback === null) a(p);
        else if (ut.startTime <= q) a(p), ut.sortIndex = ut.expirationTime, e(d, ut);
        else break;
        ut = i(p);
      }
    }
    function O(q) {
      if (S = false, D(q), !w) if (i(d) !== null) w = true, ct();
      else {
        var ut = i(p);
        ut !== null && Y(O, ut.startTime - q);
      }
    }
    var A = false, $ = -1, N = 5, H = -1;
    function z() {
      return !(t14.unstable_now() - H < N);
    }
    function G() {
      if (A) {
        var q = t14.unstable_now();
        H = q;
        var ut = true;
        try {
          t: {
            w = false, S && (S = false, T($), $ = -1), y = true;
            var nt = v;
            try {
              e: {
                for (D(q), b = i(d); b !== null && !(b.expirationTime > q && z()); ) {
                  var P = b.callback;
                  if (typeof P == "function") {
                    b.callback = null, v = b.priorityLevel;
                    var C = P(b.expirationTime <= q);
                    if (q = t14.unstable_now(), typeof C == "function") {
                      b.callback = C, D(q), ut = true;
                      break e;
                    }
                    b === i(d) && a(d), D(q);
                  } else a(d);
                  b = i(d);
                }
                if (b !== null) ut = true;
                else {
                  var B = i(p);
                  B !== null && Y(O, B.startTime - q), ut = false;
                }
              }
              break t;
            } finally {
              b = null, v = nt, y = false;
            }
            ut = void 0;
          }
        } finally {
          ut ? V() : A = false;
        }
      }
    }
    var V;
    if (typeof E == "function") V = function() {
      E(G);
    };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), ft = lt.port2;
      lt.port1.onmessage = G, V = function() {
        ft.postMessage(null);
      };
    } else V = function() {
      x(G, 0);
    };
    function ct() {
      A || (A = true, V());
    }
    function Y(q, ut) {
      $ = x(function() {
        q(t14.unstable_now());
      }, ut);
    }
    t14.unstable_IdlePriority = 5, t14.unstable_ImmediatePriority = 1, t14.unstable_LowPriority = 4, t14.unstable_NormalPriority = 3, t14.unstable_Profiling = null, t14.unstable_UserBlockingPriority = 2, t14.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, t14.unstable_continueExecution = function() {
      w || y || (w = true, ct());
    }, t14.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < q ? Math.floor(1e3 / q) : 5;
    }, t14.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, t14.unstable_getFirstCallbackNode = function() {
      return i(d);
    }, t14.unstable_next = function(q) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var ut = 3;
          break;
        default:
          ut = v;
      }
      var nt = v;
      v = ut;
      try {
        return q();
      } finally {
        v = nt;
      }
    }, t14.unstable_pauseExecution = function() {
    }, t14.unstable_requestPaint = function() {
    }, t14.unstable_runWithPriority = function(q, ut) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var nt = v;
      v = q;
      try {
        return ut();
      } finally {
        v = nt;
      }
    }, t14.unstable_scheduleCallback = function(q, ut, nt) {
      var P = t14.unstable_now();
      switch (typeof nt == "object" && nt !== null ? (nt = nt.delay, nt = typeof nt == "number" && 0 < nt ? P + nt : P) : nt = P, q) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = nt + C, q = { id: m++, callback: ut, priorityLevel: q, startTime: nt, expirationTime: C, sortIndex: -1 }, nt > P ? (q.sortIndex = nt, e(p, q), i(d) === null && q === i(p) && (S ? (T($), $ = -1) : S = true, Y(O, nt - P))) : (q.sortIndex = C, e(d, q), w || y || (w = true, ct())), q;
    }, t14.unstable_shouldYield = z, t14.unstable_wrapCallback = function(q) {
      var ut = v;
      return function() {
        var nt = v;
        v = ut;
        try {
          return q.apply(this, arguments);
        } finally {
          v = nt;
        }
      };
    };
  }(k0)), k0;
}
var n2;
function X9() {
  return n2 || (n2 = 1, q0.exports = G9()), q0.exports;
}
var Y0 = { exports: {} }, $e = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var i2;
function F9() {
  if (i2) return $e;
  i2 = 1;
  var t14 = Zm();
  function e(d) {
    var p = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++) p += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return "Minified React error #" + d + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var a = { d: { f: i, r: function() {
    throw Error(e(522));
  }, D: i, C: i, L: i, m: i, X: i, S: i, M: i }, p: 0, findDOMNode: null }, u = Symbol.for("react.portal");
  function o(d, p, m) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: u, key: b == null ? null : "" + b, children: d, containerInfo: p, implementation: m };
  }
  var f = t14.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s(d, p) {
    if (d === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, $e.createPortal = function(d, p) {
    var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(e(299));
    return o(d, p, null, m);
  }, $e.flushSync = function(d) {
    var p = f.T, m = a.p;
    try {
      if (f.T = null, a.p = 2, d) return d();
    } finally {
      f.T = p, a.p = m, a.d.f();
    }
  }, $e.preconnect = function(d, p) {
    typeof d == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, a.d.C(d, p));
  }, $e.prefetchDNS = function(d) {
    typeof d == "string" && a.d.D(d);
  }, $e.preinit = function(d, p) {
    if (typeof d == "string" && p && typeof p.as == "string") {
      var m = p.as, b = s(m, p.crossOrigin), v = typeof p.integrity == "string" ? p.integrity : void 0, y = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      m === "style" ? a.d.S(d, typeof p.precedence == "string" ? p.precedence : void 0, { crossOrigin: b, integrity: v, fetchPriority: y }) : m === "script" && a.d.X(d, { crossOrigin: b, integrity: v, fetchPriority: y, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
    }
  }, $e.preinitModule = function(d, p) {
    if (typeof d == "string") if (typeof p == "object" && p !== null) {
      if (p.as == null || p.as === "script") {
        var m = s(p.as, p.crossOrigin);
        a.d.M(d, { crossOrigin: m, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0 });
      }
    } else p == null && a.d.M(d);
  }, $e.preload = function(d, p) {
    if (typeof d == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var m = p.as, b = s(m, p.crossOrigin);
      a.d.L(d, m, { crossOrigin: b, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0, type: typeof p.type == "string" ? p.type : void 0, fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0, referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0, imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0, imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0, media: typeof p.media == "string" ? p.media : void 0 });
    }
  }, $e.preloadModule = function(d, p) {
    if (typeof d == "string") if (p) {
      var m = s(p.as, p.crossOrigin);
      a.d.m(d, { as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0, crossOrigin: m, integrity: typeof p.integrity == "string" ? p.integrity : void 0 });
    } else a.d.m(d);
  }, $e.requestFormReset = function(d) {
    a.d.r(d);
  }, $e.unstable_batchedUpdates = function(d, p) {
    return d(p);
  }, $e.useFormState = function(d, p, m) {
    return f.H.useFormState(d, p, m);
  }, $e.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, $e.version = "19.0.0", $e;
}
var r2;
function X6() {
  if (r2) return Y0.exports;
  r2 = 1;
  function t14() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t14);
    } catch (e) {
      console.error(e);
    }
  }
  return t14(), Y0.exports = F9(), Y0.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var a2;
function Z9() {
  if (a2) return ql;
  a2 = 1;
  var t14 = X9(), e = Zm(), i = X6();
  function a(n) {
    var r = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  var o = Symbol.for("react.element"), f = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), v = Symbol.for("react.consumer"), y = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), O = Symbol.for("react.memo_cache_sentinel"), A = Symbol.iterator;
  function $(n) {
    return n === null || typeof n != "object" ? null : (n = A && n[A] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var N = Symbol.for("react.client.reference");
  function H(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.$$typeof === N ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case d:
        return "Fragment";
      case s:
        return "Portal";
      case m:
        return "Profiler";
      case p:
        return "StrictMode";
      case S:
        return "Suspense";
      case x:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case y:
        return (n.displayName || "Context") + ".Provider";
      case v:
        return (n._context.displayName || "Context") + ".Consumer";
      case w:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case T:
        return r = n.displayName || null, r !== null ? r : H(n.type) || "Memo";
      case E:
        r = n._payload, n = n._init;
        try {
          return H(n(r));
        } catch {
        }
    }
    return null;
  }
  var z = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.assign, V, lt;
  function ft(n) {
    if (V === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      V = r && r[1] || "", lt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + V + n + lt;
  }
  var ct = false;
  function Y(n, r) {
    if (!n || ct) return "";
    ct = true;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = { DetermineComponentFrameRoot: function() {
        try {
          if (r) {
            var at = function() {
              throw Error();
            };
            if (Object.defineProperty(at.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(at, []);
              } catch (I) {
                var X = I;
              }
              Reflect.construct(n, [], at);
            } else {
              try {
                at.call();
              } catch (I) {
                X = I;
              }
              n.call(at.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (I) {
              X = I;
            }
            (at = n()) && typeof at.catch == "function" && at.catch(function() {
            });
          }
        } catch (I) {
          if (I && X && typeof I.stack == "string") return [I.stack, X.stack];
        }
        return [null, null];
      } };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var h = Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot, "name");
      h && h.configurable && Object.defineProperty(c.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var g = c.DetermineComponentFrameRoot(), _ = g[0], M = g[1];
      if (_ && M) {
        var R = _.split(`
`), L = M.split(`
`);
        for (h = c = 0; c < R.length && !R[c].includes("DetermineComponentFrameRoot"); ) c++;
        for (; h < L.length && !L[h].includes("DetermineComponentFrameRoot"); ) h++;
        if (c === R.length || h === L.length) for (c = R.length - 1, h = L.length - 1; 1 <= c && 0 <= h && R[c] !== L[h]; ) h--;
        for (; 1 <= c && 0 <= h; c--, h--) if (R[c] !== L[h]) {
          if (c !== 1 || h !== 1) do
            if (c--, h--, 0 > h || R[c] !== L[h]) {
              var J = `
` + R[c].replace(" at new ", " at ");
              return n.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", n.displayName)), J;
            }
          while (1 <= c && 0 <= h);
          break;
        }
      }
    } finally {
      ct = false, Error.prepareStackTrace = l;
    }
    return (l = n ? n.displayName || n.name : "") ? ft(l) : "";
  }
  function q(n) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return ft(n.type);
      case 16:
        return ft("Lazy");
      case 13:
        return ft("Suspense");
      case 19:
        return ft("SuspenseList");
      case 0:
      case 15:
        return n = Y(n.type, false), n;
      case 11:
        return n = Y(n.type.render, false), n;
      case 1:
        return n = Y(n.type, true), n;
      default:
        return "";
    }
  }
  function ut(n) {
    try {
      var r = "";
      do
        r += q(n), n = n.return;
      while (n);
      return r;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function nt(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function P(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function C(n) {
    if (nt(n) !== n) throw Error(a(188));
  }
  function B(n) {
    var r = n.alternate;
    if (!r) {
      if (r = nt(n), r === null) throw Error(a(188));
      return r !== n ? null : n;
    }
    for (var l = n, c = r; ; ) {
      var h = l.return;
      if (h === null) break;
      var g = h.alternate;
      if (g === null) {
        if (c = h.return, c !== null) {
          l = c;
          continue;
        }
        break;
      }
      if (h.child === g.child) {
        for (g = h.child; g; ) {
          if (g === l) return C(h), n;
          if (g === c) return C(h), r;
          g = g.sibling;
        }
        throw Error(a(188));
      }
      if (l.return !== c.return) l = h, c = g;
      else {
        for (var _ = false, M = h.child; M; ) {
          if (M === l) {
            _ = true, l = h, c = g;
            break;
          }
          if (M === c) {
            _ = true, c = h, l = g;
            break;
          }
          M = M.sibling;
        }
        if (!_) {
          for (M = g.child; M; ) {
            if (M === l) {
              _ = true, l = g, c = h;
              break;
            }
            if (M === c) {
              _ = true, c = g, l = h;
              break;
            }
            M = M.sibling;
          }
          if (!_) throw Error(a(189));
        }
      }
      if (l.alternate !== c) throw Error(a(190));
    }
    if (l.tag !== 3) throw Error(a(188));
    return l.stateNode.current === l ? n : r;
  }
  function Q(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n;
    for (n = n.child; n !== null; ) {
      if (r = Q(n), r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var K = Array.isArray, tt = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ht = { pending: false, data: null, method: null, action: null }, dt = [], st = -1;
  function pt(n) {
    return { current: n };
  }
  function W(n) {
    0 > st || (n.current = dt[st], dt[st] = null, st--);
  }
  function ot(n, r) {
    st++, dt[st] = n.current, n.current = r;
  }
  var mt = pt(null), et = pt(null), Nt = pt(null), wt = pt(null);
  function Vt(n, r) {
    switch (ot(Nt, r), ot(et, n), ot(mt, null), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) && (r = r.namespaceURI) ? Ty(r) : 0;
        break;
      default:
        if (n = n === 8 ? r.parentNode : r, r = n.tagName, n = n.namespaceURI) n = Ty(n), r = Ey(n, r);
        else switch (r) {
          case "svg":
            r = 1;
            break;
          case "math":
            r = 2;
            break;
          default:
            r = 0;
        }
    }
    W(mt), ot(mt, r);
  }
  function Ft() {
    W(mt), W(et), W(Nt);
  }
  function Te(n) {
    n.memoizedState !== null && ot(wt, n);
    var r = mt.current, l = Ey(r, n.type);
    r !== l && (ot(et, n), ot(mt, l));
  }
  function Rn(n) {
    et.current === n && (W(mt), W(et)), wt.current === n && (W(wt), Ul._currentValue = ht);
  }
  var di = Object.prototype.hasOwnProperty, Rd = t14.unstable_scheduleCallback, Nd = t14.unstable_cancelCallback, g7 = t14.unstable_shouldYield, b7 = t14.unstable_requestPaint, Gn = t14.unstable_now, v7 = t14.unstable_getCurrentPriorityLevel, p1 = t14.unstable_ImmediatePriority, m1 = t14.unstable_UserBlockingPriority, ec = t14.unstable_NormalPriority, y7 = t14.unstable_LowPriority, g1 = t14.unstable_IdlePriority, _7 = t14.log, w7 = t14.unstable_setDisableYieldValue, Gu = null, We = null;
  function S7(n) {
    if (We && typeof We.onCommitFiberRoot == "function") try {
      We.onCommitFiberRoot(Gu, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  function Pi(n) {
    if (typeof _7 == "function" && w7(n), We && typeof We.setStrictMode == "function") try {
      We.setStrictMode(Gu, n);
    } catch {
    }
  }
  var Je = Math.clz32 ? Math.clz32 : T7, x7 = Math.log, M7 = Math.LN2;
  function T7(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (x7(n) / M7 | 0) | 0;
  }
  var nc = 128, ic = 4194304;
  function zr(n) {
    var r = n & 42;
    if (r !== 0) return r;
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return n;
    }
  }
  function rc(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var c = 0, h = n.suspendedLanes, g = n.pingedLanes, _ = n.warmLanes;
    n = n.finishedLanes !== 0;
    var M = l & 134217727;
    return M !== 0 ? (l = M & ~h, l !== 0 ? c = zr(l) : (g &= M, g !== 0 ? c = zr(g) : n || (_ = M & ~_, _ !== 0 && (c = zr(_))))) : (M = l & ~h, M !== 0 ? c = zr(M) : g !== 0 ? c = zr(g) : n || (_ = l & ~_, _ !== 0 && (c = zr(_)))), c === 0 ? 0 : r !== 0 && r !== c && (r & h) === 0 && (h = c & -c, _ = r & -r, h >= _ || h === 32 && (_ & 4194176) !== 0) ? r : c;
  }
  function Xu(n, r) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & r) === 0;
  }
  function E7(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
        return r + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function b1() {
    var n = nc;
    return nc <<= 1, (nc & 4194176) === 0 && (nc = 128), n;
  }
  function v1() {
    var n = ic;
    return ic <<= 1, (ic & 62914560) === 0 && (ic = 4194304), n;
  }
  function $d(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Fu(n, r) {
    n.pendingLanes |= r, r !== 268435456 && (n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0);
  }
  function A7(n, r, l, c, h, g) {
    var _ = n.pendingLanes;
    n.pendingLanes = l, n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0, n.expiredLanes &= l, n.entangledLanes &= l, n.errorRecoveryDisabledLanes &= l, n.shellSuspendCounter = 0;
    var M = n.entanglements, R = n.expirationTimes, L = n.hiddenUpdates;
    for (l = _ & ~l; 0 < l; ) {
      var J = 31 - Je(l), at = 1 << J;
      M[J] = 0, R[J] = -1;
      var X = L[J];
      if (X !== null) for (L[J] = null, J = 0; J < X.length; J++) {
        var I = X[J];
        I !== null && (I.lane &= -536870913);
      }
      l &= ~at;
    }
    c !== 0 && y1(n, c, 0), g !== 0 && h === 0 && n.tag !== 0 && (n.suspendedLanes |= g & ~(_ & ~r));
  }
  function y1(n, r, l) {
    n.pendingLanes |= r, n.suspendedLanes &= ~r;
    var c = 31 - Je(r);
    n.entangledLanes |= r, n.entanglements[c] = n.entanglements[c] | 1073741824 | l & 4194218;
  }
  function _1(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var c = 31 - Je(l), h = 1 << c;
      h & r | n[c] & r && (n[c] |= r), l &= ~h;
    }
  }
  function w1(n) {
    return n &= -n, 2 < n ? 8 < n ? (n & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function S1() {
    var n = tt.p;
    return n !== 0 ? n : (n = window.event, n === void 0 ? 32 : Gy(n.type));
  }
  function O7(n, r) {
    var l = tt.p;
    try {
      return tt.p = n, r();
    } finally {
      tt.p = l;
    }
  }
  var Ii = Math.random().toString(36).slice(2), Re = "__reactFiber$" + Ii, Fe = "__reactProps$" + Ii, Ra = "__reactContainer$" + Ii, zd = "__reactEvents$" + Ii, C7 = "__reactListeners$" + Ii, D7 = "__reactHandles$" + Ii, x1 = "__reactResources$" + Ii, Zu = "__reactMarker$" + Ii;
  function Ud(n) {
    delete n[Re], delete n[Fe], delete n[zd], delete n[C7], delete n[D7];
  }
  function Ur(n) {
    var r = n[Re];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ra] || l[Re]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Cy(n); n !== null; ) {
          if (l = n[Re]) return l;
          n = Cy(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Na(n) {
    if (n = n[Re] || n[Ra]) {
      var r = n.tag;
      if (r === 5 || r === 6 || r === 13 || r === 26 || r === 27 || r === 3) return n;
    }
    return null;
  }
  function Qu(n) {
    var r = n.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return n.stateNode;
    throw Error(a(33));
  }
  function $a(n) {
    var r = n[x1];
    return r || (r = n[x1] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), r;
  }
  function ve(n) {
    n[Zu] = true;
  }
  var M1 = /* @__PURE__ */ new Set(), T1 = {};
  function Lr(n, r) {
    za(n, r), za(n + "Capture", r);
  }
  function za(n, r) {
    for (T1[n] = r, n = 0; n < r.length; n++) M1.add(r[n]);
  }
  var hi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R7 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), E1 = {}, A1 = {};
  function N7(n) {
    return di.call(A1, n) ? true : di.call(E1, n) ? false : R7.test(n) ? A1[n] = true : (E1[n] = true, false);
  }
  function ac(n, r, l) {
    if (N7(r)) if (l === null) n.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
          n.removeAttribute(r);
          return;
        case "boolean":
          var c = r.toLowerCase().slice(0, 5);
          if (c !== "data-" && c !== "aria-") {
            n.removeAttribute(r);
            return;
          }
      }
      n.setAttribute(r, "" + l);
    }
  }
  function uc(n, r, l) {
    if (l === null) n.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(r);
          return;
      }
      n.setAttribute(r, "" + l);
    }
  }
  function pi(n, r, l, c) {
    if (c === null) n.removeAttribute(l);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(l);
          return;
      }
      n.setAttributeNS(r, l, "" + c);
    }
  }
  function sn(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function O1(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function $7(n) {
    var r = O1(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var h = l.get, g = l.set;
      return Object.defineProperty(n, r, { configurable: true, get: function() {
        return h.call(this);
      }, set: function(_) {
        c = "" + _, g.call(this, _);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(_) {
        c = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function lc(n) {
    n._valueTracker || (n._valueTracker = $7(n));
  }
  function C1(n) {
    if (!n) return false;
    var r = n._valueTracker;
    if (!r) return true;
    var l = r.getValue(), c = "";
    return n && (c = O1(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== l ? (r.setValue(n), true) : false;
  }
  function oc(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var z7 = /[\n"\\]/g;
  function dn(n) {
    return n.replace(z7, function(r) {
      return "\\" + r.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ld(n, r, l, c, h, g, _, M) {
    n.name = "", _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? n.type = _ : n.removeAttribute("type"), r != null ? _ === "number" ? (r === 0 && n.value === "" || n.value != r) && (n.value = "" + sn(r)) : n.value !== "" + sn(r) && (n.value = "" + sn(r)) : _ !== "submit" && _ !== "reset" || n.removeAttribute("value"), r != null ? Hd(n, _, sn(r)) : l != null ? Hd(n, _, sn(l)) : c != null && n.removeAttribute("value"), h == null && g != null && (n.defaultChecked = !!g), h != null && (n.checked = h && typeof h != "function" && typeof h != "symbol"), M != null && typeof M != "function" && typeof M != "symbol" && typeof M != "boolean" ? n.name = "" + sn(M) : n.removeAttribute("name");
  }
  function D1(n, r, l, c, h, g, _, M) {
    if (g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (n.type = g), r != null || l != null) {
      if (!(g !== "submit" && g !== "reset" || r != null)) return;
      l = l != null ? "" + sn(l) : "", r = r != null ? "" + sn(r) : l, M || r === n.value || (n.value = r), n.defaultValue = r;
    }
    c = c ?? h, c = typeof c != "function" && typeof c != "symbol" && !!c, n.checked = M ? n.checked : !!c, n.defaultChecked = !!c, _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (n.name = _);
  }
  function Hd(n, r, l) {
    r === "number" && oc(n.ownerDocument) === n || n.defaultValue === "" + l || (n.defaultValue = "" + l);
  }
  function Ua(n, r, l, c) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < l.length; h++) r["$" + l[h]] = true;
      for (l = 0; l < n.length; l++) h = r.hasOwnProperty("$" + n[l].value), n[l].selected !== h && (n[l].selected = h), h && c && (n[l].defaultSelected = true);
    } else {
      for (l = "" + sn(l), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === l) {
          n[h].selected = true, c && (n[h].defaultSelected = true);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = true);
    }
  }
  function R1(n, r, l) {
    if (r != null && (r = "" + sn(r), r !== n.value && (n.value = r), l == null)) {
      n.defaultValue !== r && (n.defaultValue = r);
      return;
    }
    n.defaultValue = l != null ? "" + sn(l) : "";
  }
  function N1(n, r, l, c) {
    if (r == null) {
      if (c != null) {
        if (l != null) throw Error(a(92));
        if (K(c)) {
          if (1 < c.length) throw Error(a(93));
          c = c[0];
        }
        l = c;
      }
      l == null && (l = ""), r = l;
    }
    l = sn(r), n.defaultValue = l, c = n.textContent, c === l && c !== "" && c !== null && (n.value = c);
  }
  function La(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var U7 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function $1(n, r, l) {
    var c = r.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? c ? n.setProperty(r, "") : r === "float" ? n.cssFloat = "" : n[r] = "" : c ? n.setProperty(r, l) : typeof l != "number" || l === 0 || U7.has(r) ? r === "float" ? n.cssFloat = l : n[r] = ("" + l).trim() : n[r] = l + "px";
  }
  function z1(n, r, l) {
    if (r != null && typeof r != "object") throw Error(a(62));
    if (n = n.style, l != null) {
      for (var c in l) !l.hasOwnProperty(c) || r != null && r.hasOwnProperty(c) || (c.indexOf("--") === 0 ? n.setProperty(c, "") : c === "float" ? n.cssFloat = "" : n[c] = "");
      for (var h in r) c = r[h], r.hasOwnProperty(h) && l[h] !== c && $1(n, h, c);
    } else for (var g in r) r.hasOwnProperty(g) && $1(n, g, r[g]);
  }
  function Vd(n) {
    if (n.indexOf("-") === -1) return false;
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var L7 = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), H7 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function cc(n) {
    return H7.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
  }
  var jd = null;
  function Bd(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ha = null, Va = null;
  function U1(n) {
    var r = Na(n);
    if (r && (n = r.stateNode)) {
      var l = n[Fe] || null;
      t: switch (n = r.stateNode, r.type) {
        case "input":
          if (Ld(n, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), r = l.name, l.type === "radio" && r != null) {
            for (l = n; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + dn("" + r) + '"][type="radio"]'), r = 0; r < l.length; r++) {
              var c = l[r];
              if (c !== n && c.form === n.form) {
                var h = c[Fe] || null;
                if (!h) throw Error(a(90));
                Ld(c, h.value, h.defaultValue, h.defaultValue, h.checked, h.defaultChecked, h.type, h.name);
              }
            }
            for (r = 0; r < l.length; r++) c = l[r], c.form === n.form && C1(c);
          }
          break t;
        case "textarea":
          R1(n, l.value, l.defaultValue);
          break t;
        case "select":
          r = l.value, r != null && Ua(n, !!l.multiple, r, false);
      }
    }
  }
  var qd = false;
  function L1(n, r, l) {
    if (qd) return n(r, l);
    qd = true;
    try {
      var c = n(r);
      return c;
    } finally {
      if (qd = false, (Ha !== null || Va !== null) && (Fc(), Ha && (r = Ha, n = Va, Va = Ha = null, U1(r), n))) for (r = 0; r < n.length; r++) U1(n[r]);
    }
  }
  function Ku(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var c = l[Fe] || null;
    if (c === null) return null;
    l = c[r];
    t: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
        break t;
      default:
        n = false;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(a(231, r, typeof l));
    return l;
  }
  var kd = false;
  if (hi) try {
    var Pu = {};
    Object.defineProperty(Pu, "passive", { get: function() {
      kd = true;
    } }), window.addEventListener("test", Pu, Pu), window.removeEventListener("test", Pu, Pu);
  } catch {
    kd = false;
  }
  var Wi = null, Yd = null, fc = null;
  function H1() {
    if (fc) return fc;
    var n, r = Yd, l = r.length, c, h = "value" in Wi ? Wi.value : Wi.textContent, g = h.length;
    for (n = 0; n < l && r[n] === h[n]; n++) ;
    var _ = l - n;
    for (c = 1; c <= _ && r[l - c] === h[g - c]; c++) ;
    return fc = h.slice(n, 1 < c ? 1 - c : void 0);
  }
  function sc(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function dc() {
    return true;
  }
  function V1() {
    return false;
  }
  function Ze(n) {
    function r(l, c, h, g, _) {
      this._reactName = l, this._targetInst = h, this.type = c, this.nativeEvent = g, this.target = _, this.currentTarget = null;
      for (var M in n) n.hasOwnProperty(M) && (l = n[M], this[M] = l ? l(g) : g[M]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === false) ? dc : V1, this.isPropagationStopped = V1, this;
    }
    return G(r.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = dc);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = dc);
    }, persist: function() {
    }, isPersistent: dc }), r;
  }
  var Hr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, hc = Ze(Hr), Iu = G({}, Hr, { view: 0, detail: 0 }), V7 = Ze(Iu), Gd, Xd, Wu, pc = G({}, Iu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wu && (Wu && n.type === "mousemove" ? (Gd = n.screenX - Wu.screenX, Xd = n.screenY - Wu.screenY) : Xd = Gd = 0, Wu = n), Gd);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Xd;
  } }), j1 = Ze(pc), j7 = G({}, pc, { dataTransfer: 0 }), B7 = Ze(j7), q7 = G({}, Iu, { relatedTarget: 0 }), Fd = Ze(q7), k7 = G({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Y7 = Ze(k7), G7 = G({}, Hr, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), X7 = Ze(G7), F7 = G({}, Hr, { data: 0 }), B1 = Ze(F7), Z7 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Q7 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, K7 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function P7(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = K7[n]) ? !!r[n] : false;
  }
  function Zd() {
    return P7;
  }
  var I7 = G({}, Iu, { key: function(n) {
    if (n.key) {
      var r = Z7[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = sc(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Q7[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zd, charCode: function(n) {
    return n.type === "keypress" ? sc(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? sc(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), W7 = Ze(I7), J7 = G({}, pc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), q1 = Ze(J7), tx = G({}, Iu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zd }), ex = Ze(tx), nx = G({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ix = Ze(nx), rx = G({}, pc, { deltaX: function(n) {
    return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
  }, deltaY: function(n) {
    return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), ax = Ze(rx), ux = G({}, Hr, { newState: 0, oldState: 0 }), lx = Ze(ux), ox = [9, 13, 27, 32], Qd = hi && "CompositionEvent" in window, Ju = null;
  hi && "documentMode" in document && (Ju = document.documentMode);
  var cx = hi && "TextEvent" in window && !Ju, k1 = hi && (!Qd || Ju && 8 < Ju && 11 >= Ju), Y1 = " ", G1 = false;
  function X1(n, r) {
    switch (n) {
      case "keyup":
        return ox.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function F1(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ja = false;
  function fx(n, r) {
    switch (n) {
      case "compositionend":
        return F1(r);
      case "keypress":
        return r.which !== 32 ? null : (G1 = true, Y1);
      case "textInput":
        return n = r.data, n === Y1 && G1 ? null : n;
      default:
        return null;
    }
  }
  function sx(n, r) {
    if (ja) return n === "compositionend" || !Qd && X1(n, r) ? (n = H1(), fc = Yd = Wi = null, ja = false, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return k1 && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var dx = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Z1(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!dx[n.type] : r === "textarea";
  }
  function Q1(n, r, l, c) {
    Ha ? Va ? Va.push(c) : Va = [c] : Ha = c, r = Ic(r, "onChange"), 0 < r.length && (l = new hc("onChange", "change", null, l, c), n.push({ event: l, listeners: r }));
  }
  var tl = null, el = null;
  function hx(n) {
    _y(n, 0);
  }
  function mc(n) {
    var r = Qu(n);
    if (C1(r)) return n;
  }
  function K1(n, r) {
    if (n === "change") return r;
  }
  var P1 = false;
  if (hi) {
    var Kd;
    if (hi) {
      var Pd = "oninput" in document;
      if (!Pd) {
        var I1 = document.createElement("div");
        I1.setAttribute("oninput", "return;"), Pd = typeof I1.oninput == "function";
      }
      Kd = Pd;
    } else Kd = false;
    P1 = Kd && (!document.documentMode || 9 < document.documentMode);
  }
  function W1() {
    tl && (tl.detachEvent("onpropertychange", J1), el = tl = null);
  }
  function J1(n) {
    if (n.propertyName === "value" && mc(el)) {
      var r = [];
      Q1(r, el, n, Bd(n)), L1(hx, r);
    }
  }
  function px(n, r, l) {
    n === "focusin" ? (W1(), tl = r, el = l, tl.attachEvent("onpropertychange", J1)) : n === "focusout" && W1();
  }
  function mx(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return mc(el);
  }
  function gx(n, r) {
    if (n === "click") return mc(r);
  }
  function bx(n, r) {
    if (n === "input" || n === "change") return mc(r);
  }
  function vx(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var tn = typeof Object.is == "function" ? Object.is : vx;
  function nl(n, r) {
    if (tn(n, r)) return true;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return false;
    var l = Object.keys(n), c = Object.keys(r);
    if (l.length !== c.length) return false;
    for (c = 0; c < l.length; c++) {
      var h = l[c];
      if (!di.call(r, h) || !tn(n[h], r[h])) return false;
    }
    return true;
  }
  function tb(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function eb(n, r) {
    var l = tb(n);
    n = 0;
    for (var c; l; ) {
      if (l.nodeType === 3) {
        if (c = n + l.textContent.length, n <= r && c >= r) return { node: l, offset: r - n };
        n = c;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = tb(l);
    }
  }
  function nb(n, r) {
    return n && r ? n === r ? true : n && n.nodeType === 3 ? false : r && r.nodeType === 3 ? nb(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : false : false;
  }
  function ib(n) {
    n = n != null && n.ownerDocument != null && n.ownerDocument.defaultView != null ? n.ownerDocument.defaultView : window;
    for (var r = oc(n.document); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = false;
      }
      if (l) n = r.contentWindow;
      else break;
      r = oc(n.document);
    }
    return r;
  }
  function Id(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function yx(n, r) {
    var l = ib(r);
    r = n.focusedElem;
    var c = n.selectionRange;
    if (l !== r && r && r.ownerDocument && nb(r.ownerDocument.documentElement, r)) {
      if (c !== null && Id(r)) {
        if (n = c.start, l = c.end, l === void 0 && (l = n), "selectionStart" in r) r.selectionStart = n, r.selectionEnd = Math.min(l, r.value.length);
        else if (l = (n = r.ownerDocument || document) && n.defaultView || window, l.getSelection) {
          l = l.getSelection();
          var h = r.textContent.length, g = Math.min(c.start, h);
          c = c.end === void 0 ? g : Math.min(c.end, h), !l.extend && g > c && (h = c, c = g, g = h), h = eb(r, g);
          var _ = eb(r, c);
          h && _ && (l.rangeCount !== 1 || l.anchorNode !== h.node || l.anchorOffset !== h.offset || l.focusNode !== _.node || l.focusOffset !== _.offset) && (n = n.createRange(), n.setStart(h.node, h.offset), l.removeAllRanges(), g > c ? (l.addRange(n), l.extend(_.node, _.offset)) : (n.setEnd(_.node, _.offset), l.addRange(n)));
        }
      }
      for (n = [], l = r; l = l.parentNode; ) l.nodeType === 1 && n.push({ element: l, left: l.scrollLeft, top: l.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < n.length; r++) l = n[r], l.element.scrollLeft = l.left, l.element.scrollTop = l.top;
    }
  }
  var _x = hi && "documentMode" in document && 11 >= document.documentMode, Ba = null, Wd = null, il = null, Jd = false;
  function rb(n, r, l) {
    var c = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Jd || Ba == null || Ba !== oc(c) || (c = Ba, "selectionStart" in c && Id(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), il && nl(il, c) || (il = c, c = Ic(Wd, "onSelect"), 0 < c.length && (r = new hc("onSelect", "select", null, r, l), n.push({ event: r, listeners: c }), r.target = Ba)));
  }
  function Vr(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var qa = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionrun: Vr("Transition", "TransitionRun"), transitionstart: Vr("Transition", "TransitionStart"), transitioncancel: Vr("Transition", "TransitionCancel"), transitionend: Vr("Transition", "TransitionEnd") }, th = {}, ab = {};
  hi && (ab = document.createElement("div").style, "AnimationEvent" in window || (delete qa.animationend.animation, delete qa.animationiteration.animation, delete qa.animationstart.animation), "TransitionEvent" in window || delete qa.transitionend.transition);
  function jr(n) {
    if (th[n]) return th[n];
    if (!qa[n]) return n;
    var r = qa[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in ab) return th[n] = r[l];
    return n;
  }
  var ub = jr("animationend"), lb = jr("animationiteration"), ob = jr("animationstart"), wx = jr("transitionrun"), Sx = jr("transitionstart"), xx = jr("transitioncancel"), cb = jr("transitionend"), fb = /* @__PURE__ */ new Map(), sb = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
  function Nn(n, r) {
    fb.set(n, r), Lr(r, [n]);
  }
  var hn = [], ka = 0, eh = 0;
  function gc() {
    for (var n = ka, r = eh = ka = 0; r < n; ) {
      var l = hn[r];
      hn[r++] = null;
      var c = hn[r];
      hn[r++] = null;
      var h = hn[r];
      hn[r++] = null;
      var g = hn[r];
      if (hn[r++] = null, c !== null && h !== null) {
        var _ = c.pending;
        _ === null ? h.next = h : (h.next = _.next, _.next = h), c.pending = h;
      }
      g !== 0 && db(l, h, g);
    }
  }
  function bc(n, r, l, c) {
    hn[ka++] = n, hn[ka++] = r, hn[ka++] = l, hn[ka++] = c, eh |= c, n.lanes |= c, n = n.alternate, n !== null && (n.lanes |= c);
  }
  function nh(n, r, l, c) {
    return bc(n, r, l, c), vc(n);
  }
  function Ji(n, r) {
    return bc(n, null, null, r), vc(n);
  }
  function db(n, r, l) {
    n.lanes |= l;
    var c = n.alternate;
    c !== null && (c.lanes |= l);
    for (var h = false, g = n.return; g !== null; ) g.childLanes |= l, c = g.alternate, c !== null && (c.childLanes |= l), g.tag === 22 && (n = g.stateNode, n === null || n._visibility & 1 || (h = true)), n = g, g = g.return;
    h && r !== null && n.tag === 3 && (g = n.stateNode, h = 31 - Je(l), g = g.hiddenUpdates, n = g[h], n === null ? g[h] = [r] : n.push(r), r.lane = l | 536870912);
  }
  function vc(n) {
    if (50 < Ol) throw Ol = 0, o0 = null, Error(a(185));
    for (var r = n.return; r !== null; ) n = r, r = n.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ya = {}, hb = /* @__PURE__ */ new WeakMap();
  function pn(n, r) {
    if (typeof n == "object" && n !== null) {
      var l = hb.get(n);
      return l !== void 0 ? l : (r = { value: n, source: r, stack: ut(r) }, hb.set(n, r), r);
    }
    return { value: n, source: r, stack: ut(r) };
  }
  var Ga = [], Xa = 0, yc = null, _c = 0, mn = [], gn = 0, Br = null, mi = 1, gi = "";
  function qr(n, r) {
    Ga[Xa++] = _c, Ga[Xa++] = yc, yc = n, _c = r;
  }
  function pb(n, r, l) {
    mn[gn++] = mi, mn[gn++] = gi, mn[gn++] = Br, Br = n;
    var c = mi;
    n = gi;
    var h = 32 - Je(c) - 1;
    c &= ~(1 << h), l += 1;
    var g = 32 - Je(r) + h;
    if (30 < g) {
      var _ = h - h % 5;
      g = (c & (1 << _) - 1).toString(32), c >>= _, h -= _, mi = 1 << 32 - Je(r) + h | l << h | c, gi = g + n;
    } else mi = 1 << g | l << h | c, gi = n;
  }
  function ih(n) {
    n.return !== null && (qr(n, 1), pb(n, 1, 0));
  }
  function rh(n) {
    for (; n === yc; ) yc = Ga[--Xa], Ga[Xa] = null, _c = Ga[--Xa], Ga[Xa] = null;
    for (; n === Br; ) Br = mn[--gn], mn[gn] = null, gi = mn[--gn], mn[gn] = null, mi = mn[--gn], mn[gn] = null;
  }
  var qe = null, Ee = null, jt = false, $n = null, Xn = false, ah = Error(a(519));
  function kr(n) {
    var r = Error(a(418, ""));
    throw ul(pn(r, n)), ah;
  }
  function mb(n) {
    var r = n.stateNode, l = n.type, c = n.memoizedProps;
    switch (r[Re] = n, r[Fe] = c, l) {
      case "dialog":
        Lt("cancel", r), Lt("close", r);
        break;
      case "iframe":
      case "object":
      case "embed":
        Lt("load", r);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Dl.length; l++) Lt(Dl[l], r);
        break;
      case "source":
        Lt("error", r);
        break;
      case "img":
      case "image":
      case "link":
        Lt("error", r), Lt("load", r);
        break;
      case "details":
        Lt("toggle", r);
        break;
      case "input":
        Lt("invalid", r), D1(r, c.value, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name, true), lc(r);
        break;
      case "select":
        Lt("invalid", r);
        break;
      case "textarea":
        Lt("invalid", r), N1(r, c.value, c.defaultValue, c.children), lc(r);
    }
    l = c.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || r.textContent === "" + l || c.suppressHydrationWarning === true || My(r.textContent, l) ? (c.popover != null && (Lt("beforetoggle", r), Lt("toggle", r)), c.onScroll != null && Lt("scroll", r), c.onScrollEnd != null && Lt("scrollend", r), c.onClick != null && (r.onclick = Wc), r = true) : r = false, r || kr(n);
  }
  function gb(n) {
    for (qe = n.return; qe; ) switch (qe.tag) {
      case 3:
      case 27:
        Xn = true;
        return;
      case 5:
      case 13:
        Xn = false;
        return;
      default:
        qe = qe.return;
    }
  }
  function rl(n) {
    if (n !== qe) return false;
    if (!jt) return gb(n), jt = true, false;
    var r = false, l;
    if ((l = n.tag !== 3 && n.tag !== 27) && ((l = n.tag === 5) && (l = n.type, l = !(l !== "form" && l !== "button") || T0(n.type, n.memoizedProps)), l = !l), l && (r = true), r && Ee && kr(n), gb(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(a(317));
      t: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) if (l = n.data, l === "/$") {
            if (r === 0) {
              Ee = Un(n.nextSibling);
              break t;
            }
            r--;
          } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          n = n.nextSibling;
        }
        Ee = null;
      }
    } else Ee = qe ? Un(n.stateNode.nextSibling) : null;
    return true;
  }
  function al() {
    Ee = qe = null, jt = false;
  }
  function ul(n) {
    $n === null ? $n = [n] : $n.push(n);
  }
  var ll = Error(a(460)), bb = Error(a(474)), uh = { then: function() {
  } };
  function vb(n) {
    return n = n.status, n === "fulfilled" || n === "rejected";
  }
  function wc() {
  }
  function yb(n, r, l) {
    switch (l = n[l], l === void 0 ? n.push(r) : l !== r && (r.then(wc, wc), r = l), r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw n = r.reason, n === ll ? Error(a(483)) : n;
      default:
        if (typeof r.status == "string") r.then(wc, wc);
        else {
          if (n = It, n !== null && 100 < n.shellSuspendCounter) throw Error(a(482));
          n = r, n.status = "pending", n.then(function(c) {
            if (r.status === "pending") {
              var h = r;
              h.status = "fulfilled", h.value = c;
            }
          }, function(c) {
            if (r.status === "pending") {
              var h = r;
              h.status = "rejected", h.reason = c;
            }
          });
        }
        switch (r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw n = r.reason, n === ll ? Error(a(483)) : n;
        }
        throw ol = r, ll;
    }
  }
  var ol = null;
  function _b() {
    if (ol === null) throw Error(a(459));
    var n = ol;
    return ol = null, n;
  }
  var Fa = null, cl = 0;
  function Sc(n) {
    var r = cl;
    return cl += 1, Fa === null && (Fa = []), yb(Fa, n, r);
  }
  function fl(n, r) {
    r = r.props.ref, n.ref = r !== void 0 ? r : null;
  }
  function xc(n, r) {
    throw r.$$typeof === o ? Error(a(525)) : (n = Object.prototype.toString.call(r), Error(a(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n)));
  }
  function wb(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Sb(n) {
    function r(j, U) {
      if (n) {
        var k = j.deletions;
        k === null ? (j.deletions = [U], j.flags |= 16) : k.push(U);
      }
    }
    function l(j, U) {
      if (!n) return null;
      for (; U !== null; ) r(j, U), U = U.sibling;
      return null;
    }
    function c(j) {
      for (var U = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? U.set(j.key, j) : U.set(j.index, j), j = j.sibling;
      return U;
    }
    function h(j, U) {
      return j = sr(j, U), j.index = 0, j.sibling = null, j;
    }
    function g(j, U, k) {
      return j.index = k, n ? (k = j.alternate, k !== null ? (k = k.index, k < U ? (j.flags |= 33554434, U) : k) : (j.flags |= 33554434, U)) : (j.flags |= 1048576, U);
    }
    function _(j) {
      return n && j.alternate === null && (j.flags |= 33554434), j;
    }
    function M(j, U, k, rt) {
      return U === null || U.tag !== 6 ? (U = t0(k, j.mode, rt), U.return = j, U) : (U = h(U, k), U.return = j, U);
    }
    function R(j, U, k, rt) {
      var gt = k.type;
      return gt === d ? J(j, U, k.props.children, rt, k.key) : U !== null && (U.elementType === gt || typeof gt == "object" && gt !== null && gt.$$typeof === E && wb(gt) === U.type) ? (U = h(U, k.props), fl(U, k), U.return = j, U) : (U = qc(k.type, k.key, k.props, null, j.mode, rt), fl(U, k), U.return = j, U);
    }
    function L(j, U, k, rt) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== k.containerInfo || U.stateNode.implementation !== k.implementation ? (U = e0(k, j.mode, rt), U.return = j, U) : (U = h(U, k.children || []), U.return = j, U);
    }
    function J(j, U, k, rt, gt) {
      return U === null || U.tag !== 7 ? (U = Wr(k, j.mode, rt, gt), U.return = j, U) : (U = h(U, k), U.return = j, U);
    }
    function at(j, U, k) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return U = t0("" + U, j.mode, k), U.return = j, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case f:
            return k = qc(U.type, U.key, U.props, null, j.mode, k), fl(k, U), k.return = j, k;
          case s:
            return U = e0(U, j.mode, k), U.return = j, U;
          case E:
            var rt = U._init;
            return U = rt(U._payload), at(j, U, k);
        }
        if (K(U) || $(U)) return U = Wr(U, j.mode, k, null), U.return = j, U;
        if (typeof U.then == "function") return at(j, Sc(U), k);
        if (U.$$typeof === y) return at(j, Vc(j, U), k);
        xc(j, U);
      }
      return null;
    }
    function X(j, U, k, rt) {
      var gt = U !== null ? U.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return gt !== null ? null : M(j, U, "" + k, rt);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case f:
            return k.key === gt ? R(j, U, k, rt) : null;
          case s:
            return k.key === gt ? L(j, U, k, rt) : null;
          case E:
            return gt = k._init, k = gt(k._payload), X(j, U, k, rt);
        }
        if (K(k) || $(k)) return gt !== null ? null : J(j, U, k, rt, null);
        if (typeof k.then == "function") return X(j, U, Sc(k), rt);
        if (k.$$typeof === y) return X(j, U, Vc(j, k), rt);
        xc(j, k);
      }
      return null;
    }
    function I(j, U, k, rt, gt) {
      if (typeof rt == "string" && rt !== "" || typeof rt == "number" || typeof rt == "bigint") return j = j.get(k) || null, M(U, j, "" + rt, gt);
      if (typeof rt == "object" && rt !== null) {
        switch (rt.$$typeof) {
          case f:
            return j = j.get(rt.key === null ? k : rt.key) || null, R(U, j, rt, gt);
          case s:
            return j = j.get(rt.key === null ? k : rt.key) || null, L(U, j, rt, gt);
          case E:
            var $t = rt._init;
            return rt = $t(rt._payload), I(j, U, k, rt, gt);
        }
        if (K(rt) || $(rt)) return j = j.get(k) || null, J(U, j, rt, gt, null);
        if (typeof rt.then == "function") return I(j, U, k, Sc(rt), gt);
        if (rt.$$typeof === y) return I(j, U, k, Vc(U, rt), gt);
        xc(U, rt);
      }
      return null;
    }
    function bt(j, U, k, rt) {
      for (var gt = null, $t = null, vt = U, St = U = 0, we = null; vt !== null && St < k.length; St++) {
        vt.index > St ? (we = vt, vt = null) : we = vt.sibling;
        var Bt = X(j, vt, k[St], rt);
        if (Bt === null) {
          vt === null && (vt = we);
          break;
        }
        n && vt && Bt.alternate === null && r(j, vt), U = g(Bt, U, St), $t === null ? gt = Bt : $t.sibling = Bt, $t = Bt, vt = we;
      }
      if (St === k.length) return l(j, vt), jt && qr(j, St), gt;
      if (vt === null) {
        for (; St < k.length; St++) vt = at(j, k[St], rt), vt !== null && (U = g(vt, U, St), $t === null ? gt = vt : $t.sibling = vt, $t = vt);
        return jt && qr(j, St), gt;
      }
      for (vt = c(vt); St < k.length; St++) we = I(vt, j, St, k[St], rt), we !== null && (n && we.alternate !== null && vt.delete(we.key === null ? St : we.key), U = g(we, U, St), $t === null ? gt = we : $t.sibling = we, $t = we);
      return n && vt.forEach(function(vr) {
        return r(j, vr);
      }), jt && qr(j, St), gt;
    }
    function Mt(j, U, k, rt) {
      if (k == null) throw Error(a(151));
      for (var gt = null, $t = null, vt = U, St = U = 0, we = null, Bt = k.next(); vt !== null && !Bt.done; St++, Bt = k.next()) {
        vt.index > St ? (we = vt, vt = null) : we = vt.sibling;
        var vr = X(j, vt, Bt.value, rt);
        if (vr === null) {
          vt === null && (vt = we);
          break;
        }
        n && vt && vr.alternate === null && r(j, vt), U = g(vr, U, St), $t === null ? gt = vr : $t.sibling = vr, $t = vr, vt = we;
      }
      if (Bt.done) return l(j, vt), jt && qr(j, St), gt;
      if (vt === null) {
        for (; !Bt.done; St++, Bt = k.next()) Bt = at(j, Bt.value, rt), Bt !== null && (U = g(Bt, U, St), $t === null ? gt = Bt : $t.sibling = Bt, $t = Bt);
        return jt && qr(j, St), gt;
      }
      for (vt = c(vt); !Bt.done; St++, Bt = k.next()) Bt = I(vt, j, St, Bt.value, rt), Bt !== null && (n && Bt.alternate !== null && vt.delete(Bt.key === null ? St : Bt.key), U = g(Bt, U, St), $t === null ? gt = Bt : $t.sibling = Bt, $t = Bt);
      return n && vt.forEach(function(H9) {
        return r(j, H9);
      }), jt && qr(j, St), gt;
    }
    function ie(j, U, k, rt) {
      if (typeof k == "object" && k !== null && k.type === d && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case f:
            t: {
              for (var gt = k.key; U !== null; ) {
                if (U.key === gt) {
                  if (gt = k.type, gt === d) {
                    if (U.tag === 7) {
                      l(j, U.sibling), rt = h(U, k.props.children), rt.return = j, j = rt;
                      break t;
                    }
                  } else if (U.elementType === gt || typeof gt == "object" && gt !== null && gt.$$typeof === E && wb(gt) === U.type) {
                    l(j, U.sibling), rt = h(U, k.props), fl(rt, k), rt.return = j, j = rt;
                    break t;
                  }
                  l(j, U);
                  break;
                } else r(j, U);
                U = U.sibling;
              }
              k.type === d ? (rt = Wr(k.props.children, j.mode, rt, k.key), rt.return = j, j = rt) : (rt = qc(k.type, k.key, k.props, null, j.mode, rt), fl(rt, k), rt.return = j, j = rt);
            }
            return _(j);
          case s:
            t: {
              for (gt = k.key; U !== null; ) {
                if (U.key === gt) if (U.tag === 4 && U.stateNode.containerInfo === k.containerInfo && U.stateNode.implementation === k.implementation) {
                  l(j, U.sibling), rt = h(U, k.children || []), rt.return = j, j = rt;
                  break t;
                } else {
                  l(j, U);
                  break;
                }
                else r(j, U);
                U = U.sibling;
              }
              rt = e0(k, j.mode, rt), rt.return = j, j = rt;
            }
            return _(j);
          case E:
            return gt = k._init, k = gt(k._payload), ie(j, U, k, rt);
        }
        if (K(k)) return bt(j, U, k, rt);
        if ($(k)) {
          if (gt = $(k), typeof gt != "function") throw Error(a(150));
          return k = gt.call(k), Mt(j, U, k, rt);
        }
        if (typeof k.then == "function") return ie(j, U, Sc(k), rt);
        if (k.$$typeof === y) return ie(j, U, Vc(j, k), rt);
        xc(j, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, U !== null && U.tag === 6 ? (l(j, U.sibling), rt = h(U, k), rt.return = j, j = rt) : (l(j, U), rt = t0(k, j.mode, rt), rt.return = j, j = rt), _(j)) : l(j, U);
    }
    return function(j, U, k, rt) {
      try {
        cl = 0;
        var gt = ie(j, U, k, rt);
        return Fa = null, gt;
      } catch (vt) {
        if (vt === ll) throw vt;
        var $t = _n(29, vt, null, j.mode);
        return $t.lanes = rt, $t.return = j, $t;
      } finally {
      }
    };
  }
  var Yr = Sb(true), xb = Sb(false), Za = pt(null), Mc = pt(0);
  function Mb(n, r) {
    n = Ai, ot(Mc, n), ot(Za, r), Ai = n | r.baseLanes;
  }
  function lh() {
    ot(Mc, Ai), ot(Za, Za.current);
  }
  function oh() {
    Ai = Mc.current, W(Za), W(Mc);
  }
  var bn = pt(null), Fn = null;
  function tr(n) {
    var r = n.alternate;
    ot(pe, pe.current & 1), ot(bn, n), Fn === null && (r === null || Za.current !== null || r.memoizedState !== null) && (Fn = n);
  }
  function Tb(n) {
    if (n.tag === 22) {
      if (ot(pe, pe.current), ot(bn, n), Fn === null) {
        var r = n.alternate;
        r !== null && r.memoizedState !== null && (Fn = n);
      }
    } else er();
  }
  function er() {
    ot(pe, pe.current), ot(bn, bn.current);
  }
  function bi(n) {
    W(bn), Fn === n && (Fn = null), W(pe);
  }
  var pe = pt(0);
  function Tc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Mx = typeof AbortController < "u" ? AbortController : function() {
    var n = [], r = this.signal = { aborted: false, addEventListener: function(l, c) {
      n.push(c);
    } };
    this.abort = function() {
      r.aborted = true, n.forEach(function(l) {
        return l();
      });
    };
  }, Tx = t14.unstable_scheduleCallback, Ex = t14.unstable_NormalPriority, me = { $$typeof: y, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function ch() {
    return { controller: new Mx(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function sl(n) {
    n.refCount--, n.refCount === 0 && Tx(Ex, function() {
      n.controller.abort();
    });
  }
  var dl = null, fh = 0, Qa = 0, Ka = null;
  function Ax(n, r) {
    if (dl === null) {
      var l = dl = [];
      fh = 0, Qa = g0(), Ka = { status: "pending", value: void 0, then: function(c) {
        l.push(c);
      } };
    }
    return fh++, r.then(Eb, Eb), r;
  }
  function Eb() {
    if (--fh === 0 && dl !== null) {
      Ka !== null && (Ka.status = "fulfilled");
      var n = dl;
      dl = null, Qa = 0, Ka = null;
      for (var r = 0; r < n.length; r++) (0, n[r])();
    }
  }
  function Ox(n, r) {
    var l = [], c = { status: "pending", value: null, reason: null, then: function(h) {
      l.push(h);
    } };
    return n.then(function() {
      c.status = "fulfilled", c.value = r;
      for (var h = 0; h < l.length; h++) (0, l[h])(r);
    }, function(h) {
      for (c.status = "rejected", c.reason = h, h = 0; h < l.length; h++) (0, l[h])(void 0);
    }), c;
  }
  var Ab = z.S;
  z.S = function(n, r) {
    typeof r == "object" && r !== null && typeof r.then == "function" && Ax(n, r), Ab !== null && Ab(n, r);
  };
  var Gr = pt(null);
  function sh() {
    var n = Gr.current;
    return n !== null ? n : It.pooledCache;
  }
  function Ec(n, r) {
    r === null ? ot(Gr, Gr.current) : ot(Gr, r.pool);
  }
  function Ob() {
    var n = sh();
    return n === null ? null : { parent: me._currentValue, pool: n };
  }
  var nr = 0, Dt = null, Zt = null, fe = null, Ac = false, Pa = false, Xr = false, Oc = 0, hl = 0, Ia = null, Cx = 0;
  function ce() {
    throw Error(a(321));
  }
  function dh(n, r) {
    if (r === null) return false;
    for (var l = 0; l < r.length && l < n.length; l++) if (!tn(n[l], r[l])) return false;
    return true;
  }
  function hh(n, r, l, c, h, g) {
    return nr = g, Dt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, z.H = n === null || n.memoizedState === null ? Fr : ir, Xr = false, g = l(c, h), Xr = false, Pa && (g = Db(r, l, c, h)), Cb(n), g;
  }
  function Cb(n) {
    z.H = Zn;
    var r = Zt !== null && Zt.next !== null;
    if (nr = 0, fe = Zt = Dt = null, Ac = false, hl = 0, Ia = null, r) throw Error(a(300));
    n === null || ye || (n = n.dependencies, n !== null && Hc(n) && (ye = true));
  }
  function Db(n, r, l, c) {
    Dt = n;
    var h = 0;
    do {
      if (Pa && (Ia = null), hl = 0, Pa = false, 25 <= h) throw Error(a(301));
      if (h += 1, fe = Zt = null, n.updateQueue != null) {
        var g = n.updateQueue;
        g.lastEffect = null, g.events = null, g.stores = null, g.memoCache != null && (g.memoCache.index = 0);
      }
      z.H = Zr, g = r(l, c);
    } while (Pa);
    return g;
  }
  function Dx() {
    var n = z.H, r = n.useState()[0];
    return r = typeof r.then == "function" ? pl(r) : r, n = n.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== n && (Dt.flags |= 1024), r;
  }
  function ph() {
    var n = Oc !== 0;
    return Oc = 0, n;
  }
  function mh(n, r, l) {
    r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~l;
  }
  function gh(n) {
    if (Ac) {
      for (n = n.memoizedState; n !== null; ) {
        var r = n.queue;
        r !== null && (r.pending = null), n = n.next;
      }
      Ac = false;
    }
    nr = 0, fe = Zt = Dt = null, Pa = false, hl = Oc = 0, Ia = null;
  }
  function Qe() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return fe === null ? Dt.memoizedState = fe = n : fe = fe.next = n, fe;
  }
  function se() {
    if (Zt === null) {
      var n = Dt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Zt.next;
    var r = fe === null ? Dt.memoizedState : fe.next;
    if (r !== null) fe = r, Zt = n;
    else {
      if (n === null) throw Dt.alternate === null ? Error(a(467)) : Error(a(310));
      Zt = n, n = { memoizedState: Zt.memoizedState, baseState: Zt.baseState, baseQueue: Zt.baseQueue, queue: Zt.queue, next: null }, fe === null ? Dt.memoizedState = fe = n : fe = fe.next = n;
    }
    return fe;
  }
  var Cc;
  Cc = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function pl(n) {
    var r = hl;
    return hl += 1, Ia === null && (Ia = []), n = yb(Ia, n, r), r = Dt, (fe === null ? r.memoizedState : fe.next) === null && (r = r.alternate, z.H = r === null || r.memoizedState === null ? Fr : ir), n;
  }
  function Dc(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return pl(n);
      if (n.$$typeof === y) return Ne(n);
    }
    throw Error(a(438, String(n)));
  }
  function bh(n) {
    var r = null, l = Dt.updateQueue;
    if (l !== null && (r = l.memoCache), r == null) {
      var c = Dt.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (r = { data: c.data.map(function(h) {
        return h.slice();
      }), index: 0 })));
    }
    if (r == null && (r = { data: [], index: 0 }), l === null && (l = Cc(), Dt.updateQueue = l), l.memoCache = r, l = r.data[r.index], l === void 0) for (l = r.data[r.index] = Array(n), c = 0; c < n; c++) l[c] = O;
    return r.index++, l;
  }
  function vi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Rc(n) {
    var r = se();
    return vh(r, Zt, n);
  }
  function vh(n, r, l) {
    var c = n.queue;
    if (c === null) throw Error(a(311));
    c.lastRenderedReducer = l;
    var h = n.baseQueue, g = c.pending;
    if (g !== null) {
      if (h !== null) {
        var _ = h.next;
        h.next = g.next, g.next = _;
      }
      r.baseQueue = h = g, c.pending = null;
    }
    if (g = n.baseState, h === null) n.memoizedState = g;
    else {
      r = h.next;
      var M = _ = null, R = null, L = r, J = false;
      do {
        var at = L.lane & -536870913;
        if (at !== L.lane ? (Ht & at) === at : (nr & at) === at) {
          var X = L.revertLane;
          if (X === 0) R !== null && (R = R.next = { lane: 0, revertLane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), at === Qa && (J = true);
          else if ((nr & X) === X) {
            L = L.next, X === Qa && (J = true);
            continue;
          } else at = { lane: 0, revertLane: L.revertLane, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }, R === null ? (M = R = at, _ = g) : R = R.next = at, Dt.lanes |= X, dr |= X;
          at = L.action, Xr && l(g, at), g = L.hasEagerState ? L.eagerState : l(g, at);
        } else X = { lane: at, revertLane: L.revertLane, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }, R === null ? (M = R = X, _ = g) : R = R.next = X, Dt.lanes |= at, dr |= at;
        L = L.next;
      } while (L !== null && L !== r);
      if (R === null ? _ = g : R.next = M, !tn(g, n.memoizedState) && (ye = true, J && (l = Ka, l !== null))) throw l;
      n.memoizedState = g, n.baseState = _, n.baseQueue = R, c.lastRenderedState = g;
    }
    return h === null && (c.lanes = 0), [n.memoizedState, c.dispatch];
  }
  function yh(n) {
    var r = se(), l = r.queue;
    if (l === null) throw Error(a(311));
    l.lastRenderedReducer = n;
    var c = l.dispatch, h = l.pending, g = r.memoizedState;
    if (h !== null) {
      l.pending = null;
      var _ = h = h.next;
      do
        g = n(g, _.action), _ = _.next;
      while (_ !== h);
      tn(g, r.memoizedState) || (ye = true), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), l.lastRenderedState = g;
    }
    return [g, c];
  }
  function Rb(n, r, l) {
    var c = Dt, h = se(), g = jt;
    if (g) {
      if (l === void 0) throw Error(a(407));
      l = l();
    } else l = r();
    var _ = !tn((Zt || h).memoizedState, l);
    if (_ && (h.memoizedState = l, ye = true), h = h.queue, Sh(zb.bind(null, c, h, n), [n]), h.getSnapshot !== r || _ || fe !== null && fe.memoizedState.tag & 1) {
      if (c.flags |= 2048, Wa(9, $b.bind(null, c, h, l, r), { destroy: void 0 }, null), It === null) throw Error(a(349));
      g || (nr & 60) !== 0 || Nb(c, r, l);
    }
    return l;
  }
  function Nb(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Dt.updateQueue, r === null ? (r = Cc(), Dt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function $b(n, r, l, c) {
    r.value = l, r.getSnapshot = c, Ub(r) && Lb(n);
  }
  function zb(n, r, l) {
    return l(function() {
      Ub(r) && Lb(n);
    });
  }
  function Ub(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !tn(n, l);
    } catch {
      return true;
    }
  }
  function Lb(n) {
    var r = Ji(n, 2);
    r !== null && ke(r, n, 2);
  }
  function _h(n) {
    var r = Qe();
    if (typeof n == "function") {
      var l = n;
      if (n = l(), Xr) {
        Pi(true);
        try {
          l();
        } finally {
          Pi(false);
        }
      }
    }
    return r.memoizedState = r.baseState = n, r.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vi, lastRenderedState: n }, r;
  }
  function Hb(n, r, l, c) {
    return n.baseState = l, vh(n, Zt, typeof c == "function" ? c : vi);
  }
  function Rx(n, r, l, c, h) {
    if (zc(n)) throw Error(a(485));
    if (n = r.action, n !== null) {
      var g = { payload: h, action: n, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(_) {
        g.listeners.push(_);
      } };
      z.T !== null ? l(true) : g.isTransition = false, c(g), l = r.pending, l === null ? (g.next = r.pending = g, Vb(r, g)) : (g.next = l.next, r.pending = l.next = g);
    }
  }
  function Vb(n, r) {
    var l = r.action, c = r.payload, h = n.state;
    if (r.isTransition) {
      var g = z.T, _ = {};
      z.T = _;
      try {
        var M = l(h, c), R = z.S;
        R !== null && R(_, M), jb(n, r, M);
      } catch (L) {
        wh(n, r, L);
      } finally {
        z.T = g;
      }
    } else try {
      g = l(h, c), jb(n, r, g);
    } catch (L) {
      wh(n, r, L);
    }
  }
  function jb(n, r, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(c) {
      Bb(n, r, c);
    }, function(c) {
      return wh(n, r, c);
    }) : Bb(n, r, l);
  }
  function Bb(n, r, l) {
    r.status = "fulfilled", r.value = l, qb(r), n.state = l, r = n.pending, r !== null && (l = r.next, l === r ? n.pending = null : (l = l.next, r.next = l, Vb(n, l)));
  }
  function wh(n, r, l) {
    var c = n.pending;
    if (n.pending = null, c !== null) {
      c = c.next;
      do
        r.status = "rejected", r.reason = l, qb(r), r = r.next;
      while (r !== c);
    }
    n.action = null;
  }
  function qb(n) {
    n = n.listeners;
    for (var r = 0; r < n.length; r++) (0, n[r])();
  }
  function kb(n, r) {
    return r;
  }
  function Yb(n, r) {
    if (jt) {
      var l = It.formState;
      if (l !== null) {
        t: {
          var c = Dt;
          if (jt) {
            if (Ee) {
              e: {
                for (var h = Ee, g = Xn; h.nodeType !== 8; ) {
                  if (!g) {
                    h = null;
                    break e;
                  }
                  if (h = Un(h.nextSibling), h === null) {
                    h = null;
                    break e;
                  }
                }
                g = h.data, h = g === "F!" || g === "F" ? h : null;
              }
              if (h) {
                Ee = Un(h.nextSibling), c = h.data === "F!";
                break t;
              }
            }
            kr(c);
          }
          c = false;
        }
        c && (r = l[0]);
      }
    }
    return l = Qe(), l.memoizedState = l.baseState = r, c = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kb, lastRenderedState: r }, l.queue = c, l = lv.bind(null, Dt, c), c.dispatch = l, c = _h(false), g = Ah.bind(null, Dt, false, c.queue), c = Qe(), h = { state: r, dispatch: null, action: n, pending: null }, c.queue = h, l = Rx.bind(null, Dt, h, g, l), h.dispatch = l, c.memoizedState = n, [r, l, false];
  }
  function Gb(n) {
    var r = se();
    return Xb(r, Zt, n);
  }
  function Xb(n, r, l) {
    r = vh(n, r, kb)[0], n = Rc(vi)[0], r = typeof r == "object" && r !== null && typeof r.then == "function" ? pl(r) : r;
    var c = se(), h = c.queue, g = h.dispatch;
    return l !== c.memoizedState && (Dt.flags |= 2048, Wa(9, Nx.bind(null, h, l), { destroy: void 0 }, null)), [r, g, n];
  }
  function Nx(n, r) {
    n.action = r;
  }
  function Fb(n) {
    var r = se(), l = Zt;
    if (l !== null) return Xb(r, l, n);
    se(), r = r.memoizedState, l = se();
    var c = l.queue.dispatch;
    return l.memoizedState = n, [r, c, false];
  }
  function Wa(n, r, l, c) {
    return n = { tag: n, create: r, inst: l, deps: c, next: null }, r = Dt.updateQueue, r === null && (r = Cc(), Dt.updateQueue = r), l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (c = l.next, l.next = n, n.next = c, r.lastEffect = n), n;
  }
  function Zb() {
    return se().memoizedState;
  }
  function Nc(n, r, l, c) {
    var h = Qe();
    Dt.flags |= n, h.memoizedState = Wa(1 | r, l, { destroy: void 0 }, c === void 0 ? null : c);
  }
  function $c(n, r, l, c) {
    var h = se();
    c = c === void 0 ? null : c;
    var g = h.memoizedState.inst;
    Zt !== null && c !== null && dh(c, Zt.memoizedState.deps) ? h.memoizedState = Wa(r, l, g, c) : (Dt.flags |= n, h.memoizedState = Wa(1 | r, l, g, c));
  }
  function Qb(n, r) {
    Nc(8390656, 8, n, r);
  }
  function Sh(n, r) {
    $c(2048, 8, n, r);
  }
  function Kb(n, r) {
    return $c(4, 2, n, r);
  }
  function Pb(n, r) {
    return $c(4, 4, n, r);
  }
  function Ib(n, r) {
    if (typeof r == "function") {
      n = n();
      var l = r(n);
      return function() {
        typeof l == "function" ? l() : r(null);
      };
    }
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Wb(n, r, l) {
    l = l != null ? l.concat([n]) : null, $c(4, 4, Ib.bind(null, r, n), l);
  }
  function xh() {
  }
  function Jb(n, r) {
    var l = se();
    r = r === void 0 ? null : r;
    var c = l.memoizedState;
    return r !== null && dh(r, c[1]) ? c[0] : (l.memoizedState = [n, r], n);
  }
  function tv(n, r) {
    var l = se();
    r = r === void 0 ? null : r;
    var c = l.memoizedState;
    if (r !== null && dh(r, c[1])) return c[0];
    if (c = n(), Xr) {
      Pi(true);
      try {
        n();
      } finally {
        Pi(false);
      }
    }
    return l.memoizedState = [c, r], c;
  }
  function Mh(n, r, l) {
    return l === void 0 || (nr & 1073741824) !== 0 ? n.memoizedState = r : (n.memoizedState = l, n = ny(), Dt.lanes |= n, dr |= n, l);
  }
  function ev(n, r, l, c) {
    return tn(l, r) ? l : Za.current !== null ? (n = Mh(n, l, c), tn(n, r) || (ye = true), n) : (nr & 42) === 0 ? (ye = true, n.memoizedState = l) : (n = ny(), Dt.lanes |= n, dr |= n, r);
  }
  function nv(n, r, l, c, h) {
    var g = tt.p;
    tt.p = g !== 0 && 8 > g ? g : 8;
    var _ = z.T, M = {};
    z.T = M, Ah(n, false, r, l);
    try {
      var R = h(), L = z.S;
      if (L !== null && L(M, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var J = Ox(R, c);
        ml(n, r, J, an(n));
      } else ml(n, r, c, an(n));
    } catch (at) {
      ml(n, r, { then: function() {
      }, status: "rejected", reason: at }, an());
    } finally {
      tt.p = g, z.T = _;
    }
  }
  function $x() {
  }
  function Th(n, r, l, c) {
    if (n.tag !== 5) throw Error(a(476));
    var h = iv(n).queue;
    nv(n, h, r, ht, l === null ? $x : function() {
      return rv(n), l(c);
    });
  }
  function iv(n) {
    var r = n.memoizedState;
    if (r !== null) return r;
    r = { memoizedState: ht, baseState: ht, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vi, lastRenderedState: ht }, next: null };
    var l = {};
    return r.next = { memoizedState: l, baseState: l, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vi, lastRenderedState: l }, next: null }, n.memoizedState = r, n = n.alternate, n !== null && (n.memoizedState = r), r;
  }
  function rv(n) {
    var r = iv(n).next.queue;
    ml(n, r, {}, an());
  }
  function Eh() {
    return Ne(Ul);
  }
  function av() {
    return se().memoizedState;
  }
  function uv() {
    return se().memoizedState;
  }
  function zx(n) {
    for (var r = n.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var l = an();
          n = ur(l);
          var c = lr(r, n, l);
          c !== null && (ke(c, r, l), vl(c, r, l)), r = { cache: ch() }, n.payload = r;
          return;
      }
      r = r.return;
    }
  }
  function Ux(n, r, l) {
    var c = an();
    l = { lane: c, revertLane: 0, action: l, hasEagerState: false, eagerState: null, next: null }, zc(n) ? ov(r, l) : (l = nh(n, r, l, c), l !== null && (ke(l, n, c), cv(l, r, c)));
  }
  function lv(n, r, l) {
    var c = an();
    ml(n, r, l, c);
  }
  function ml(n, r, l, c) {
    var h = { lane: c, revertLane: 0, action: l, hasEagerState: false, eagerState: null, next: null };
    if (zc(n)) ov(r, h);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null)) try {
        var _ = r.lastRenderedState, M = g(_, l);
        if (h.hasEagerState = true, h.eagerState = M, tn(M, _)) return bc(n, r, h, 0), It === null && gc(), false;
      } catch {
      } finally {
      }
      if (l = nh(n, r, h, c), l !== null) return ke(l, n, c), cv(l, r, c), true;
    }
    return false;
  }
  function Ah(n, r, l, c) {
    if (c = { lane: 2, revertLane: g0(), action: c, hasEagerState: false, eagerState: null, next: null }, zc(n)) {
      if (r) throw Error(a(479));
    } else r = nh(n, l, c, 2), r !== null && ke(r, n, 2);
  }
  function zc(n) {
    var r = n.alternate;
    return n === Dt || r !== null && r === Dt;
  }
  function ov(n, r) {
    Pa = Ac = true;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function cv(n, r, l) {
    if ((l & 4194176) !== 0) {
      var c = r.lanes;
      c &= n.pendingLanes, l |= c, r.lanes = l, _1(n, l);
    }
  }
  var Zn = { readContext: Ne, use: Dc, useCallback: ce, useContext: ce, useEffect: ce, useImperativeHandle: ce, useLayoutEffect: ce, useInsertionEffect: ce, useMemo: ce, useReducer: ce, useRef: ce, useState: ce, useDebugValue: ce, useDeferredValue: ce, useTransition: ce, useSyncExternalStore: ce, useId: ce };
  Zn.useCacheRefresh = ce, Zn.useMemoCache = ce, Zn.useHostTransitionStatus = ce, Zn.useFormState = ce, Zn.useActionState = ce, Zn.useOptimistic = ce;
  var Fr = { readContext: Ne, use: Dc, useCallback: function(n, r) {
    return Qe().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ne, useEffect: Qb, useImperativeHandle: function(n, r, l) {
    l = l != null ? l.concat([n]) : null, Nc(4194308, 4, Ib.bind(null, r, n), l);
  }, useLayoutEffect: function(n, r) {
    return Nc(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    Nc(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Qe();
    r = r === void 0 ? null : r;
    var c = n();
    if (Xr) {
      Pi(true);
      try {
        n();
      } finally {
        Pi(false);
      }
    }
    return l.memoizedState = [c, r], c;
  }, useReducer: function(n, r, l) {
    var c = Qe();
    if (l !== void 0) {
      var h = l(r);
      if (Xr) {
        Pi(true);
        try {
          l(r);
        } finally {
          Pi(false);
        }
      }
    } else h = r;
    return c.memoizedState = c.baseState = h, n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: h }, c.queue = n, n = n.dispatch = Ux.bind(null, Dt, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = Qe();
    return n = { current: n }, r.memoizedState = n;
  }, useState: function(n) {
    n = _h(n);
    var r = n.queue, l = lv.bind(null, Dt, r);
    return r.dispatch = l, [n.memoizedState, l];
  }, useDebugValue: xh, useDeferredValue: function(n, r) {
    var l = Qe();
    return Mh(l, n, r);
  }, useTransition: function() {
    var n = _h(false);
    return n = nv.bind(null, Dt, n.queue, true, false), Qe().memoizedState = n, [false, n];
  }, useSyncExternalStore: function(n, r, l) {
    var c = Dt, h = Qe();
    if (jt) {
      if (l === void 0) throw Error(a(407));
      l = l();
    } else {
      if (l = r(), It === null) throw Error(a(349));
      (Ht & 60) !== 0 || Nb(c, r, l);
    }
    h.memoizedState = l;
    var g = { value: l, getSnapshot: r };
    return h.queue = g, Qb(zb.bind(null, c, g, n), [n]), c.flags |= 2048, Wa(9, $b.bind(null, c, g, l, r), { destroy: void 0 }, null), l;
  }, useId: function() {
    var n = Qe(), r = It.identifierPrefix;
    if (jt) {
      var l = gi, c = mi;
      l = (c & ~(1 << 32 - Je(c) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Oc++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Cx++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, useCacheRefresh: function() {
    return Qe().memoizedState = zx.bind(null, Dt);
  } };
  Fr.useMemoCache = bh, Fr.useHostTransitionStatus = Eh, Fr.useFormState = Yb, Fr.useActionState = Yb, Fr.useOptimistic = function(n) {
    var r = Qe();
    r.memoizedState = r.baseState = n;
    var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return r.queue = l, r = Ah.bind(null, Dt, true, l), l.dispatch = r, [n, r];
  };
  var ir = { readContext: Ne, use: Dc, useCallback: Jb, useContext: Ne, useEffect: Sh, useImperativeHandle: Wb, useInsertionEffect: Kb, useLayoutEffect: Pb, useMemo: tv, useReducer: Rc, useRef: Zb, useState: function() {
    return Rc(vi);
  }, useDebugValue: xh, useDeferredValue: function(n, r) {
    var l = se();
    return ev(l, Zt.memoizedState, n, r);
  }, useTransition: function() {
    var n = Rc(vi)[0], r = se().memoizedState;
    return [typeof n == "boolean" ? n : pl(n), r];
  }, useSyncExternalStore: Rb, useId: av };
  ir.useCacheRefresh = uv, ir.useMemoCache = bh, ir.useHostTransitionStatus = Eh, ir.useFormState = Gb, ir.useActionState = Gb, ir.useOptimistic = function(n, r) {
    var l = se();
    return Hb(l, Zt, n, r);
  };
  var Zr = { readContext: Ne, use: Dc, useCallback: Jb, useContext: Ne, useEffect: Sh, useImperativeHandle: Wb, useInsertionEffect: Kb, useLayoutEffect: Pb, useMemo: tv, useReducer: yh, useRef: Zb, useState: function() {
    return yh(vi);
  }, useDebugValue: xh, useDeferredValue: function(n, r) {
    var l = se();
    return Zt === null ? Mh(l, n, r) : ev(l, Zt.memoizedState, n, r);
  }, useTransition: function() {
    var n = yh(vi)[0], r = se().memoizedState;
    return [typeof n == "boolean" ? n : pl(n), r];
  }, useSyncExternalStore: Rb, useId: av };
  Zr.useCacheRefresh = uv, Zr.useMemoCache = bh, Zr.useHostTransitionStatus = Eh, Zr.useFormState = Fb, Zr.useActionState = Fb, Zr.useOptimistic = function(n, r) {
    var l = se();
    return Zt !== null ? Hb(l, Zt, n, r) : (l.baseState = n, [n, l.queue.dispatch]);
  };
  function Oh(n, r, l, c) {
    r = n.memoizedState, l = l(c, r), l = l == null ? r : G({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ch = { isMounted: function(n) {
    return (n = n._reactInternals) ? nt(n) === n : false;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var c = an(), h = ur(c);
    h.payload = r, l != null && (h.callback = l), r = lr(n, h, c), r !== null && (ke(r, n, c), vl(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var c = an(), h = ur(c);
    h.tag = 1, h.payload = r, l != null && (h.callback = l), r = lr(n, h, c), r !== null && (ke(r, n, c), vl(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = an(), c = ur(l);
    c.tag = 2, r != null && (c.callback = r), r = lr(n, c, l), r !== null && (ke(r, n, l), vl(r, n, l));
  } };
  function fv(n, r, l, c, h, g, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, g, _) : r.prototype && r.prototype.isPureReactComponent ? !nl(l, c) || !nl(h, g) : true;
  }
  function sv(n, r, l, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, c), r.state !== n && Ch.enqueueReplaceState(r, r.state, null);
  }
  function Qr(n, r) {
    var l = r;
    if ("ref" in r) {
      l = {};
      for (var c in r) c !== "ref" && (l[c] = r[c]);
    }
    if (n = n.defaultProps) {
      l === r && (l = G({}, l));
      for (var h in n) l[h] === void 0 && (l[h] = n[h]);
    }
    return l;
  }
  var Uc = typeof reportError == "function" ? reportError : function(n) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var r = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof n == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n), error: n });
      if (!window.dispatchEvent(r)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", n);
      return;
    }
    console.error(n);
  };
  function dv(n) {
    Uc(n);
  }
  function hv(n) {
    console.error(n);
  }
  function pv(n) {
    Uc(n);
  }
  function Lc(n, r) {
    try {
      var l = n.onUncaughtError;
      l(r.value, { componentStack: r.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function mv(n, r, l) {
    try {
      var c = n.onCaughtError;
      c(l.value, { componentStack: l.stack, errorBoundary: r.tag === 1 ? r.stateNode : null });
    } catch (h) {
      setTimeout(function() {
        throw h;
      });
    }
  }
  function Dh(n, r, l) {
    return l = ur(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Lc(n, r);
    }, l;
  }
  function gv(n) {
    return n = ur(n), n.tag = 3, n;
  }
  function bv(n, r, l, c) {
    var h = l.type.getDerivedStateFromError;
    if (typeof h == "function") {
      var g = c.value;
      n.payload = function() {
        return h(g);
      }, n.callback = function() {
        mv(r, l, c);
      };
    }
    var _ = l.stateNode;
    _ !== null && typeof _.componentDidCatch == "function" && (n.callback = function() {
      mv(r, l, c), typeof h != "function" && (hr === null ? hr = /* @__PURE__ */ new Set([this]) : hr.add(this));
      var M = c.stack;
      this.componentDidCatch(c.value, { componentStack: M !== null ? M : "" });
    });
  }
  function Lx(n, r, l, c, h) {
    if (l.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (r = l.alternate, r !== null && bl(r, l, h, true), l = bn.current, l !== null) {
        switch (l.tag) {
          case 13:
            return Fn === null ? s0() : l.alternate === null && ne === 0 && (ne = 3), l.flags &= -257, l.flags |= 65536, l.lanes = h, c === uh ? l.flags |= 16384 : (r = l.updateQueue, r === null ? l.updateQueue = /* @__PURE__ */ new Set([c]) : r.add(c), h0(n, c, h)), false;
          case 22:
            return l.flags |= 65536, c === uh ? l.flags |= 16384 : (r = l.updateQueue, r === null ? (r = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([c]) }, l.updateQueue = r) : (l = r.retryQueue, l === null ? r.retryQueue = /* @__PURE__ */ new Set([c]) : l.add(c)), h0(n, c, h)), false;
        }
        throw Error(a(435, l.tag));
      }
      return h0(n, c, h), s0(), false;
    }
    if (jt) return r = bn.current, r !== null ? ((r.flags & 65536) === 0 && (r.flags |= 256), r.flags |= 65536, r.lanes = h, c !== ah && (n = Error(a(422), { cause: c }), ul(pn(n, l)))) : (c !== ah && (r = Error(a(423), { cause: c }), ul(pn(r, l))), n = n.current.alternate, n.flags |= 65536, h &= -h, n.lanes |= h, c = pn(c, l), h = Dh(n.stateNode, c, h), Xh(n, h), ne !== 4 && (ne = 2)), false;
    var g = Error(a(520), { cause: c });
    if (g = pn(g, l), El === null ? El = [g] : El.push(g), ne !== 4 && (ne = 2), r === null) return true;
    c = pn(c, l), l = r;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, n = h & -h, l.lanes |= n, n = Dh(l.stateNode, c, n), Xh(l, n), false;
        case 1:
          if (r = l.type, g = l.stateNode, (l.flags & 128) === 0 && (typeof r.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (hr === null || !hr.has(g)))) return l.flags |= 65536, h &= -h, l.lanes |= h, h = gv(h), bv(h, n, l, c), Xh(l, h), false;
      }
      l = l.return;
    } while (l !== null);
    return false;
  }
  var vv = Error(a(461)), ye = false;
  function Ae(n, r, l, c) {
    r.child = n === null ? xb(r, null, l, c) : Yr(r, n.child, l, c);
  }
  function yv(n, r, l, c, h) {
    l = l.render;
    var g = r.ref;
    if ("ref" in c) {
      var _ = {};
      for (var M in c) M !== "ref" && (_[M] = c[M]);
    } else _ = c;
    return Pr(r), c = hh(n, r, l, _, g, h), M = ph(), n !== null && !ye ? (mh(n, r, h), yi(n, r, h)) : (jt && M && ih(r), r.flags |= 1, Ae(n, r, c, h), r.child);
  }
  function _v(n, r, l, c, h) {
    if (n === null) {
      var g = l.type;
      return typeof g == "function" && !Jh(g) && g.defaultProps === void 0 && l.compare === null ? (r.tag = 15, r.type = g, wv(n, r, g, c, h)) : (n = qc(l.type, null, c, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !jh(n, h)) {
      var _ = g.memoizedProps;
      if (l = l.compare, l = l !== null ? l : nl, l(_, c) && n.ref === r.ref) return yi(n, r, h);
    }
    return r.flags |= 1, n = sr(g, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function wv(n, r, l, c, h) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (nl(g, c) && n.ref === r.ref) if (ye = false, r.pendingProps = c = g, jh(n, h)) (n.flags & 131072) !== 0 && (ye = true);
      else return r.lanes = n.lanes, yi(n, r, h);
    }
    return Rh(n, r, l, c, h);
  }
  function Sv(n, r, l) {
    var c = r.pendingProps, h = c.children, g = (r.stateNode._pendingVisibility & 2) !== 0, _ = n !== null ? n.memoizedState : null;
    if (gl(n, r), c.mode === "hidden" || g) {
      if ((r.flags & 128) !== 0) {
        if (c = _ !== null ? _.baseLanes | l : l, n !== null) {
          for (h = r.child = n.child, g = 0; h !== null; ) g = g | h.lanes | h.childLanes, h = h.sibling;
          r.childLanes = g & ~c;
        } else r.childLanes = 0, r.child = null;
        return xv(n, r, c, l);
      }
      if ((l & 536870912) !== 0) r.memoizedState = { baseLanes: 0, cachePool: null }, n !== null && Ec(r, _ !== null ? _.cachePool : null), _ !== null ? Mb(r, _) : lh(), Tb(r);
      else return r.lanes = r.childLanes = 536870912, xv(n, r, _ !== null ? _.baseLanes | l : l, l);
    } else _ !== null ? (Ec(r, _.cachePool), Mb(r, _), er(), r.memoizedState = null) : (n !== null && Ec(r, null), lh(), er());
    return Ae(n, r, h, l), r.child;
  }
  function xv(n, r, l, c) {
    var h = sh();
    return h = h === null ? null : { parent: me._currentValue, pool: h }, r.memoizedState = { baseLanes: l, cachePool: h }, n !== null && Ec(r, null), lh(), Tb(r), n !== null && bl(n, r, c, true), null;
  }
  function gl(n, r) {
    var l = r.ref;
    if (l === null) n !== null && n.ref !== null && (r.flags |= 2097664);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(a(284));
      (n === null || n.ref !== l) && (r.flags |= 2097664);
    }
  }
  function Rh(n, r, l, c, h) {
    return Pr(r), l = hh(n, r, l, c, void 0, h), c = ph(), n !== null && !ye ? (mh(n, r, h), yi(n, r, h)) : (jt && c && ih(r), r.flags |= 1, Ae(n, r, l, h), r.child);
  }
  function Mv(n, r, l, c, h, g) {
    return Pr(r), r.updateQueue = null, l = Db(r, c, l, h), Cb(n), c = ph(), n !== null && !ye ? (mh(n, r, g), yi(n, r, g)) : (jt && c && ih(r), r.flags |= 1, Ae(n, r, l, g), r.child);
  }
  function Tv(n, r, l, c, h) {
    if (Pr(r), r.stateNode === null) {
      var g = Ya, _ = l.contextType;
      typeof _ == "object" && _ !== null && (g = Ne(_)), g = new l(c, g), r.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, g.updater = Ch, r.stateNode = g, g._reactInternals = r, g = r.stateNode, g.props = c, g.state = r.memoizedState, g.refs = {}, Yh(r), _ = l.contextType, g.context = typeof _ == "object" && _ !== null ? Ne(_) : Ya, g.state = r.memoizedState, _ = l.getDerivedStateFromProps, typeof _ == "function" && (Oh(r, l, _, c), g.state = r.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (_ = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), _ !== g.state && Ch.enqueueReplaceState(g, g.state, null), _l(r, c, g, h), yl(), g.state = r.memoizedState), typeof g.componentDidMount == "function" && (r.flags |= 4194308), c = true;
    } else if (n === null) {
      g = r.stateNode;
      var M = r.memoizedProps, R = Qr(l, M);
      g.props = R;
      var L = g.context, J = l.contextType;
      _ = Ya, typeof J == "object" && J !== null && (_ = Ne(J));
      var at = l.getDerivedStateFromProps;
      J = typeof at == "function" || typeof g.getSnapshotBeforeUpdate == "function", M = r.pendingProps !== M, J || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (M || L !== _) && sv(r, g, c, _), ar = false;
      var X = r.memoizedState;
      g.state = X, _l(r, c, g, h), yl(), L = r.memoizedState, M || X !== L || ar ? (typeof at == "function" && (Oh(r, l, at, c), L = r.memoizedState), (R = ar || fv(r, l, R, c, X, L, _)) ? (J || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = L), g.props = c, g.state = L, g.context = _, c = R) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), c = false);
    } else {
      g = r.stateNode, Gh(n, r), _ = r.memoizedProps, J = Qr(l, _), g.props = J, at = r.pendingProps, X = g.context, L = l.contextType, R = Ya, typeof L == "object" && L !== null && (R = Ne(L)), M = l.getDerivedStateFromProps, (L = typeof M == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (_ !== at || X !== R) && sv(r, g, c, R), ar = false, X = r.memoizedState, g.state = X, _l(r, c, g, h), yl();
      var I = r.memoizedState;
      _ !== at || X !== I || ar || n !== null && n.dependencies !== null && Hc(n.dependencies) ? (typeof M == "function" && (Oh(r, l, M, c), I = r.memoizedState), (J = ar || fv(r, l, J, c, X, I, R) || n !== null && n.dependencies !== null && Hc(n.dependencies)) ? (L || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(c, I, R), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(c, I, R)), typeof g.componentDidUpdate == "function" && (r.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || _ === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = I), g.props = c, g.state = I, g.context = R, c = J) : (typeof g.componentDidUpdate != "function" || _ === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), c = false);
    }
    return g = c, gl(n, r), c = (r.flags & 128) !== 0, g || c ? (g = r.stateNode, l = c && typeof l.getDerivedStateFromError != "function" ? null : g.render(), r.flags |= 1, n !== null && c ? (r.child = Yr(r, n.child, null, h), r.child = Yr(r, null, l, h)) : Ae(n, r, l, h), r.memoizedState = g.state, n = r.child) : n = yi(n, r, h), n;
  }
  function Ev(n, r, l, c) {
    return al(), r.flags |= 256, Ae(n, r, l, c), r.child;
  }
  var Nh = { dehydrated: null, treeContext: null, retryLane: 0 };
  function $h(n) {
    return { baseLanes: n, cachePool: Ob() };
  }
  function zh(n, r, l) {
    return n = n !== null ? n.childLanes & ~l : 0, r && (n |= wn), n;
  }
  function Av(n, r, l) {
    var c = r.pendingProps, h = false, g = (r.flags & 128) !== 0, _;
    if ((_ = g) || (_ = n !== null && n.memoizedState === null ? false : (pe.current & 2) !== 0), _ && (h = true, r.flags &= -129), _ = (r.flags & 32) !== 0, r.flags &= -33, n === null) {
      if (jt) {
        if (h ? tr(r) : er(), jt) {
          var M = Ee, R;
          if (R = M) {
            t: {
              for (R = M, M = Xn; R.nodeType !== 8; ) {
                if (!M) {
                  M = null;
                  break t;
                }
                if (R = Un(R.nextSibling), R === null) {
                  M = null;
                  break t;
                }
              }
              M = R;
            }
            M !== null ? (r.memoizedState = { dehydrated: M, treeContext: Br !== null ? { id: mi, overflow: gi } : null, retryLane: 536870912 }, R = _n(18, null, null, 0), R.stateNode = M, R.return = r, r.child = R, qe = r, Ee = null, R = true) : R = false;
          }
          R || kr(r);
        }
        if (M = r.memoizedState, M !== null && (M = M.dehydrated, M !== null)) return M.data === "$!" ? r.lanes = 16 : r.lanes = 536870912, null;
        bi(r);
      }
      return M = c.children, c = c.fallback, h ? (er(), h = r.mode, M = Lh({ mode: "hidden", children: M }, h), c = Wr(c, h, l, null), M.return = r, c.return = r, M.sibling = c, r.child = M, h = r.child, h.memoizedState = $h(l), h.childLanes = zh(n, _, l), r.memoizedState = Nh, c) : (tr(r), Uh(r, M));
    }
    if (R = n.memoizedState, R !== null && (M = R.dehydrated, M !== null)) {
      if (g) r.flags & 256 ? (tr(r), r.flags &= -257, r = Hh(n, r, l)) : r.memoizedState !== null ? (er(), r.child = n.child, r.flags |= 128, r = null) : (er(), h = c.fallback, M = r.mode, c = Lh({ mode: "visible", children: c.children }, M), h = Wr(h, M, l, null), h.flags |= 2, c.return = r, h.return = r, c.sibling = h, r.child = c, Yr(r, n.child, null, l), c = r.child, c.memoizedState = $h(l), c.childLanes = zh(n, _, l), r.memoizedState = Nh, r = h);
      else if (tr(r), M.data === "$!") {
        if (_ = M.nextSibling && M.nextSibling.dataset, _) var L = _.dgst;
        _ = L, c = Error(a(419)), c.stack = "", c.digest = _, ul({ value: c, source: null, stack: null }), r = Hh(n, r, l);
      } else if (ye || bl(n, r, l, false), _ = (l & n.childLanes) !== 0, ye || _) {
        if (_ = It, _ !== null) {
          if (c = l & -l, (c & 42) !== 0) c = 1;
          else switch (c) {
            case 2:
              c = 1;
              break;
            case 8:
              c = 4;
              break;
            case 32:
              c = 16;
              break;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              c = 64;
              break;
            case 268435456:
              c = 134217728;
              break;
            default:
              c = 0;
          }
          if (c = (c & (_.suspendedLanes | l)) !== 0 ? 0 : c, c !== 0 && c !== R.retryLane) throw R.retryLane = c, Ji(n, c), ke(_, n, c), vv;
        }
        M.data === "$?" || s0(), r = Hh(n, r, l);
      } else M.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ix.bind(null, n), M._reactRetry = r, r = null) : (n = R.treeContext, Ee = Un(M.nextSibling), qe = r, jt = true, $n = null, Xn = false, n !== null && (mn[gn++] = mi, mn[gn++] = gi, mn[gn++] = Br, mi = n.id, gi = n.overflow, Br = r), r = Uh(r, c.children), r.flags |= 4096);
      return r;
    }
    return h ? (er(), h = c.fallback, M = r.mode, R = n.child, L = R.sibling, c = sr(R, { mode: "hidden", children: c.children }), c.subtreeFlags = R.subtreeFlags & 31457280, L !== null ? h = sr(L, h) : (h = Wr(h, M, l, null), h.flags |= 2), h.return = r, c.return = r, c.sibling = h, r.child = c, c = h, h = r.child, M = n.child.memoizedState, M === null ? M = $h(l) : (R = M.cachePool, R !== null ? (L = me._currentValue, R = R.parent !== L ? { parent: L, pool: L } : R) : R = Ob(), M = { baseLanes: M.baseLanes | l, cachePool: R }), h.memoizedState = M, h.childLanes = zh(n, _, l), r.memoizedState = Nh, c) : (tr(r), l = n.child, n = l.sibling, l = sr(l, { mode: "visible", children: c.children }), l.return = r, l.sibling = null, n !== null && (_ = r.deletions, _ === null ? (r.deletions = [n], r.flags |= 16) : _.push(n)), r.child = l, r.memoizedState = null, l);
  }
  function Uh(n, r) {
    return r = Lh({ mode: "visible", children: r }, n.mode), r.return = n, n.child = r;
  }
  function Lh(n, r) {
    return Jv(n, r, 0, null);
  }
  function Hh(n, r, l) {
    return Yr(r, n.child, null, l), n = Uh(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Ov(n, r, l) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), qh(n.return, r, l);
  }
  function Vh(n, r, l, c, h) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: l, tailMode: h } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = c, g.tail = l, g.tailMode = h);
  }
  function Cv(n, r, l) {
    var c = r.pendingProps, h = c.revealOrder, g = c.tail;
    if (Ae(n, r, c.children, l), c = pe.current, (c & 2) !== 0) c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) t: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ov(n, l, r);
        else if (n.tag === 19) Ov(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break t;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break t;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      c &= 1;
    }
    switch (ot(pe, c), h) {
      case "forwards":
        for (l = r.child, h = null; l !== null; ) n = l.alternate, n !== null && Tc(n) === null && (h = l), l = l.sibling;
        l = h, l === null ? (h = r.child, r.child = null) : (h = l.sibling, l.sibling = null), Vh(r, false, h, l, g);
        break;
      case "backwards":
        for (l = null, h = r.child, r.child = null; h !== null; ) {
          if (n = h.alternate, n !== null && Tc(n) === null) {
            r.child = h;
            break;
          }
          n = h.sibling, h.sibling = l, l = h, h = n;
        }
        Vh(r, true, l, null, g);
        break;
      case "together":
        Vh(r, false, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function yi(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), dr |= r.lanes, (l & r.childLanes) === 0) if (n !== null) {
      if (bl(n, r, l, false), (l & r.childLanes) === 0) return null;
    } else return null;
    if (n !== null && r.child !== n.child) throw Error(a(153));
    if (r.child !== null) {
      for (n = r.child, l = sr(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = sr(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function jh(n, r) {
    return (n.lanes & r) !== 0 ? true : (n = n.dependencies, !!(n !== null && Hc(n)));
  }
  function Hx(n, r, l) {
    switch (r.tag) {
      case 3:
        Vt(r, r.stateNode.containerInfo), rr(r, me, n.memoizedState.cache), al();
        break;
      case 27:
      case 5:
        Te(r);
        break;
      case 4:
        Vt(r, r.stateNode.containerInfo);
        break;
      case 10:
        rr(r, r.type, r.memoizedProps.value);
        break;
      case 13:
        var c = r.memoizedState;
        if (c !== null) return c.dehydrated !== null ? (tr(r), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? Av(n, r, l) : (tr(r), n = yi(n, r, l), n !== null ? n.sibling : null);
        tr(r);
        break;
      case 19:
        var h = (n.flags & 128) !== 0;
        if (c = (l & r.childLanes) !== 0, c || (bl(n, r, l, false), c = (l & r.childLanes) !== 0), h) {
          if (c) return Cv(n, r, l);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), ot(pe, pe.current), c) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Sv(n, r, l);
      case 24:
        rr(r, me, n.memoizedState.cache);
    }
    return yi(n, r, l);
  }
  function Dv(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps) ye = true;
    else {
      if (!jh(n, l) && (r.flags & 128) === 0) return ye = false, Hx(n, r, l);
      ye = (n.flags & 131072) !== 0;
    }
    else ye = false, jt && (r.flags & 1048576) !== 0 && pb(r, _c, r.index);
    switch (r.lanes = 0, r.tag) {
      case 16:
        t: {
          n = r.pendingProps;
          var c = r.elementType, h = c._init;
          if (c = h(c._payload), r.type = c, typeof c == "function") Jh(c) ? (n = Qr(c, n), r.tag = 1, r = Tv(null, r, c, n, l)) : (r.tag = 0, r = Rh(null, r, c, n, l));
          else {
            if (c != null) {
              if (h = c.$$typeof, h === w) {
                r.tag = 11, r = yv(null, r, c, n, l);
                break t;
              } else if (h === T) {
                r.tag = 14, r = _v(null, r, c, n, l);
                break t;
              }
            }
            throw r = H(c) || c, Error(a(306, r, ""));
          }
        }
        return r;
      case 0:
        return Rh(n, r, r.type, r.pendingProps, l);
      case 1:
        return c = r.type, h = Qr(c, r.pendingProps), Tv(n, r, c, h, l);
      case 3:
        t: {
          if (Vt(r, r.stateNode.containerInfo), n === null) throw Error(a(387));
          var g = r.pendingProps;
          h = r.memoizedState, c = h.element, Gh(n, r), _l(r, g, null, l);
          var _ = r.memoizedState;
          if (g = _.cache, rr(r, me, g), g !== h.cache && kh(r, [me], l, true), yl(), g = _.element, h.isDehydrated) if (h = { element: g, isDehydrated: false, cache: _.cache }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
            r = Ev(n, r, g, l);
            break t;
          } else if (g !== c) {
            c = pn(Error(a(424)), r), ul(c), r = Ev(n, r, g, l);
            break t;
          } else for (Ee = Un(r.stateNode.containerInfo.firstChild), qe = r, jt = true, $n = null, Xn = true, l = xb(r, null, g, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (al(), g === c) {
              r = yi(n, r, l);
              break t;
            }
            Ae(n, r, g, l);
          }
          r = r.child;
        }
        return r;
      case 26:
        return gl(n, r), n === null ? (l = $y(r.type, null, r.pendingProps, null)) ? r.memoizedState = l : jt || (l = r.type, n = r.pendingProps, c = Jc(Nt.current).createElement(l), c[Re] = r, c[Fe] = n, Oe(c, l, n), ve(c), r.stateNode = c) : r.memoizedState = $y(r.type, n.memoizedProps, r.pendingProps, n.memoizedState), null;
      case 27:
        return Te(r), n === null && jt && (c = r.stateNode = Dy(r.type, r.pendingProps, Nt.current), qe = r, Xn = true, Ee = Un(c.firstChild)), c = r.pendingProps.children, n !== null || jt ? Ae(n, r, c, l) : r.child = Yr(r, null, c, l), gl(n, r), r.child;
      case 5:
        return n === null && jt && ((h = c = Ee) && (c = h9(c, r.type, r.pendingProps, Xn), c !== null ? (r.stateNode = c, qe = r, Ee = Un(c.firstChild), Xn = false, h = true) : h = false), h || kr(r)), Te(r), h = r.type, g = r.pendingProps, _ = n !== null ? n.memoizedProps : null, c = g.children, T0(h, g) ? c = null : _ !== null && T0(h, _) && (r.flags |= 32), r.memoizedState !== null && (h = hh(n, r, Dx, null, null, l), Ul._currentValue = h), gl(n, r), Ae(n, r, c, l), r.child;
      case 6:
        return n === null && jt && ((n = l = Ee) && (l = p9(l, r.pendingProps, Xn), l !== null ? (r.stateNode = l, qe = r, Ee = null, n = true) : n = false), n || kr(r)), null;
      case 13:
        return Av(n, r, l);
      case 4:
        return Vt(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = Yr(r, null, c, l) : Ae(n, r, c, l), r.child;
      case 11:
        return yv(n, r, r.type, r.pendingProps, l);
      case 7:
        return Ae(n, r, r.pendingProps, l), r.child;
      case 8:
        return Ae(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Ae(n, r, r.pendingProps.children, l), r.child;
      case 10:
        return c = r.pendingProps, rr(r, r.type, c.value), Ae(n, r, c.children, l), r.child;
      case 9:
        return h = r.type._context, c = r.pendingProps.children, Pr(r), h = Ne(h), c = c(h), r.flags |= 1, Ae(n, r, c, l), r.child;
      case 14:
        return _v(n, r, r.type, r.pendingProps, l);
      case 15:
        return wv(n, r, r.type, r.pendingProps, l);
      case 19:
        return Cv(n, r, l);
      case 22:
        return Sv(n, r, l);
      case 24:
        return Pr(r), c = Ne(me), n === null ? (h = sh(), h === null && (h = It, g = ch(), h.pooledCache = g, g.refCount++, g !== null && (h.pooledCacheLanes |= l), h = g), r.memoizedState = { parent: c, cache: h }, Yh(r), rr(r, me, h)) : ((n.lanes & l) !== 0 && (Gh(n, r), _l(r, null, null, l), yl()), h = n.memoizedState, g = r.memoizedState, h.parent !== c ? (h = { parent: c, cache: c }, r.memoizedState = h, r.lanes === 0 && (r.memoizedState = r.updateQueue.baseState = h), rr(r, me, c)) : (c = g.cache, rr(r, me, c), c !== h.cache && kh(r, [me], l, true))), Ae(n, r, r.pendingProps.children, l), r.child;
      case 29:
        throw r.pendingProps;
    }
    throw Error(a(156, r.tag));
  }
  var Bh = pt(null), Kr = null, _i = null;
  function rr(n, r, l) {
    ot(Bh, r._currentValue), r._currentValue = l;
  }
  function wi(n) {
    n._currentValue = Bh.current, W(Bh);
  }
  function qh(n, r, l) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function kh(n, r, l, c) {
    var h = n.child;
    for (h !== null && (h.return = n); h !== null; ) {
      var g = h.dependencies;
      if (g !== null) {
        var _ = h.child;
        g = g.firstContext;
        t: for (; g !== null; ) {
          var M = g;
          g = h;
          for (var R = 0; R < r.length; R++) if (M.context === r[R]) {
            g.lanes |= l, M = g.alternate, M !== null && (M.lanes |= l), qh(g.return, l, n), c || (_ = null);
            break t;
          }
          g = M.next;
        }
      } else if (h.tag === 18) {
        if (_ = h.return, _ === null) throw Error(a(341));
        _.lanes |= l, g = _.alternate, g !== null && (g.lanes |= l), qh(_, l, n), _ = null;
      } else _ = h.child;
      if (_ !== null) _.return = h;
      else for (_ = h; _ !== null; ) {
        if (_ === n) {
          _ = null;
          break;
        }
        if (h = _.sibling, h !== null) {
          h.return = _.return, _ = h;
          break;
        }
        _ = _.return;
      }
      h = _;
    }
  }
  function bl(n, r, l, c) {
    n = null;
    for (var h = r, g = false; h !== null; ) {
      if (!g) {
        if ((h.flags & 524288) !== 0) g = true;
        else if ((h.flags & 262144) !== 0) break;
      }
      if (h.tag === 10) {
        var _ = h.alternate;
        if (_ === null) throw Error(a(387));
        if (_ = _.memoizedProps, _ !== null) {
          var M = h.type;
          tn(h.pendingProps.value, _.value) || (n !== null ? n.push(M) : n = [M]);
        }
      } else if (h === wt.current) {
        if (_ = h.alternate, _ === null) throw Error(a(387));
        _.memoizedState.memoizedState !== h.memoizedState.memoizedState && (n !== null ? n.push(Ul) : n = [Ul]);
      }
      h = h.return;
    }
    n !== null && kh(r, n, l, c), r.flags |= 262144;
  }
  function Hc(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!tn(n.context._currentValue, n.memoizedValue)) return true;
      n = n.next;
    }
    return false;
  }
  function Pr(n) {
    Kr = n, _i = null, n = n.dependencies, n !== null && (n.firstContext = null);
  }
  function Ne(n) {
    return Rv(Kr, n);
  }
  function Vc(n, r) {
    return Kr === null && Pr(n), Rv(n, r);
  }
  function Rv(n, r) {
    var l = r._currentValue;
    if (r = { context: r, memoizedValue: l, next: null }, _i === null) {
      if (n === null) throw Error(a(308));
      _i = r, n.dependencies = { lanes: 0, firstContext: r }, n.flags |= 524288;
    } else _i = _i.next = r;
    return l;
  }
  var ar = false;
  function Yh(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Gh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, callbacks: null });
  }
  function ur(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function lr(n, r, l) {
    var c = n.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (te & 2) !== 0) {
      var h = c.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), c.pending = r, r = vc(n), db(n, null, l), r;
    }
    return bc(n, c, r, l), vc(n);
  }
  function vl(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194176) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, l |= c, r.lanes = l, _1(n, l);
    }
  }
  function Xh(n, r) {
    var l = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, l === c)) {
      var h = null, g = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var _ = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          g === null ? h = g = _ : g = g.next = _, l = l.next;
        } while (l !== null);
        g === null ? h = g = r : g = g.next = r;
      } else h = g = r;
      l = { baseState: c.baseState, firstBaseUpdate: h, lastBaseUpdate: g, shared: c.shared, callbacks: c.callbacks }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  var Fh = false;
  function yl() {
    if (Fh) {
      var n = Ka;
      if (n !== null) throw n;
    }
  }
  function _l(n, r, l, c) {
    Fh = false;
    var h = n.updateQueue;
    ar = false;
    var g = h.firstBaseUpdate, _ = h.lastBaseUpdate, M = h.shared.pending;
    if (M !== null) {
      h.shared.pending = null;
      var R = M, L = R.next;
      R.next = null, _ === null ? g = L : _.next = L, _ = R;
      var J = n.alternate;
      J !== null && (J = J.updateQueue, M = J.lastBaseUpdate, M !== _ && (M === null ? J.firstBaseUpdate = L : M.next = L, J.lastBaseUpdate = R));
    }
    if (g !== null) {
      var at = h.baseState;
      _ = 0, J = L = R = null, M = g;
      do {
        var X = M.lane & -536870913, I = X !== M.lane;
        if (I ? (Ht & X) === X : (c & X) === X) {
          X !== 0 && X === Qa && (Fh = true), J !== null && (J = J.next = { lane: 0, tag: M.tag, payload: M.payload, callback: null, next: null });
          t: {
            var bt = n, Mt = M;
            X = r;
            var ie = l;
            switch (Mt.tag) {
              case 1:
                if (bt = Mt.payload, typeof bt == "function") {
                  at = bt.call(ie, at, X);
                  break t;
                }
                at = bt;
                break t;
              case 3:
                bt.flags = bt.flags & -65537 | 128;
              case 0:
                if (bt = Mt.payload, X = typeof bt == "function" ? bt.call(ie, at, X) : bt, X == null) break t;
                at = G({}, at, X);
                break t;
              case 2:
                ar = true;
            }
          }
          X = M.callback, X !== null && (n.flags |= 64, I && (n.flags |= 8192), I = h.callbacks, I === null ? h.callbacks = [X] : I.push(X));
        } else I = { lane: X, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, J === null ? (L = J = I, R = at) : J = J.next = I, _ |= X;
        if (M = M.next, M === null) {
          if (M = h.shared.pending, M === null) break;
          I = M, M = I.next, I.next = null, h.lastBaseUpdate = I, h.shared.pending = null;
        }
      } while (true);
      J === null && (R = at), h.baseState = R, h.firstBaseUpdate = L, h.lastBaseUpdate = J, g === null && (h.shared.lanes = 0), dr |= _, n.lanes = _, n.memoizedState = at;
    }
  }
  function Nv(n, r) {
    if (typeof n != "function") throw Error(a(191, n));
    n.call(r);
  }
  function $v(n, r) {
    var l = n.callbacks;
    if (l !== null) for (n.callbacks = null, n = 0; n < l.length; n++) Nv(l[n], r);
  }
  function wl(n, r) {
    try {
      var l = r.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var h = c.next;
        l = h;
        do {
          if ((l.tag & n) === n) {
            c = void 0;
            var g = l.create, _ = l.inst;
            c = g(), _.destroy = c;
          }
          l = l.next;
        } while (l !== h);
      }
    } catch (M) {
      Kt(r, r.return, M);
    }
  }
  function or(n, r, l) {
    try {
      var c = r.updateQueue, h = c !== null ? c.lastEffect : null;
      if (h !== null) {
        var g = h.next;
        c = g;
        do {
          if ((c.tag & n) === n) {
            var _ = c.inst, M = _.destroy;
            if (M !== void 0) {
              _.destroy = void 0, h = r;
              var R = l;
              try {
                M();
              } catch (L) {
                Kt(h, R, L);
              }
            }
          }
          c = c.next;
        } while (c !== g);
      }
    } catch (L) {
      Kt(r, r.return, L);
    }
  }
  function zv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      var l = n.stateNode;
      try {
        $v(r, l);
      } catch (c) {
        Kt(n, n.return, c);
      }
    }
  }
  function Uv(n, r, l) {
    l.props = Qr(n.type, n.memoizedProps), l.state = n.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (c) {
      Kt(n, r, c);
    }
  }
  function Ir(n, r) {
    try {
      var l = n.ref;
      if (l !== null) {
        var c = n.stateNode;
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var h = c;
            break;
          default:
            h = c;
        }
        typeof l == "function" ? n.refCleanup = l(h) : l.current = h;
      }
    } catch (g) {
      Kt(n, r, g);
    }
  }
  function en(n, r) {
    var l = n.ref, c = n.refCleanup;
    if (l !== null) if (typeof c == "function") try {
      c();
    } catch (h) {
      Kt(n, r, h);
    } finally {
      n.refCleanup = null, n = n.alternate, n != null && (n.refCleanup = null);
    }
    else if (typeof l == "function") try {
      l(null);
    } catch (h) {
      Kt(n, r, h);
    }
    else l.current = null;
  }
  function Lv(n) {
    var r = n.type, l = n.memoizedProps, c = n.stateNode;
    try {
      t: switch (r) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && c.focus();
          break t;
        case "img":
          l.src ? c.src = l.src : l.srcSet && (c.srcset = l.srcSet);
      }
    } catch (h) {
      Kt(n, n.return, h);
    }
  }
  function Hv(n, r, l) {
    try {
      var c = n.stateNode;
      o9(c, n.type, l, r), c[Fe] = r;
    } catch (h) {
      Kt(n, n.return, h);
    }
  }
  function Vv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 26 || n.tag === 27 || n.tag === 4;
  }
  function Zh(n) {
    t: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Vv(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 27 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Qh(n, r, l) {
    var c = n.tag;
    if (c === 5 || c === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Wc));
    else if (c !== 4 && c !== 27 && (n = n.child, n !== null)) for (Qh(n, r, l), n = n.sibling; n !== null; ) Qh(n, r, l), n = n.sibling;
  }
  function jc(n, r, l) {
    var c = n.tag;
    if (c === 5 || c === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (c !== 4 && c !== 27 && (n = n.child, n !== null)) for (jc(n, r, l), n = n.sibling; n !== null; ) jc(n, r, l), n = n.sibling;
  }
  var Si = false, ee = false, Kh = false, jv = typeof WeakSet == "function" ? WeakSet : Set, _e = null, Bv = false;
  function Vx(n, r) {
    if (n = n.containerInfo, x0 = uf, n = ib(n), Id(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else t: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var c = l.getSelection && l.getSelection();
        if (c && c.rangeCount !== 0) {
          l = c.anchorNode;
          var h = c.anchorOffset, g = c.focusNode;
          c = c.focusOffset;
          try {
            l.nodeType, g.nodeType;
          } catch {
            l = null;
            break t;
          }
          var _ = 0, M = -1, R = -1, L = 0, J = 0, at = n, X = null;
          e: for (; ; ) {
            for (var I; at !== l || h !== 0 && at.nodeType !== 3 || (M = _ + h), at !== g || c !== 0 && at.nodeType !== 3 || (R = _ + c), at.nodeType === 3 && (_ += at.nodeValue.length), (I = at.firstChild) !== null; ) X = at, at = I;
            for (; ; ) {
              if (at === n) break e;
              if (X === l && ++L === h && (M = _), X === g && ++J === c && (R = _), (I = at.nextSibling) !== null) break;
              at = X, X = at.parentNode;
            }
            at = I;
          }
          l = M === -1 || R === -1 ? null : { start: M, end: R };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (M0 = { focusedElem: n, selectionRange: l }, uf = false, _e = r; _e !== null; ) if (r = _e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, _e = n;
    else for (; _e !== null; ) {
      switch (r = _e, g = r.alternate, n = r.flags, r.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && g !== null) {
            n = void 0, l = r, h = g.memoizedProps, g = g.memoizedState, c = l.stateNode;
            try {
              var bt = Qr(l.type, h, l.elementType === l.type);
              n = c.getSnapshotBeforeUpdate(bt, g), c.__reactInternalSnapshotBeforeUpdate = n;
            } catch (Mt) {
              Kt(l, l.return, Mt);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (n = r.stateNode.containerInfo, l = n.nodeType, l === 9) O0(n);
            else if (l === 1) switch (n.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                O0(n);
                break;
              default:
                n.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((n & 1024) !== 0) throw Error(a(163));
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, _e = n;
        break;
      }
      _e = r.return;
    }
    return bt = Bv, Bv = false, bt;
  }
  function qv(n, r, l) {
    var c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Mi(n, l), c & 4 && wl(5, l);
        break;
      case 1:
        if (Mi(n, l), c & 4) if (n = l.stateNode, r === null) try {
          n.componentDidMount();
        } catch (M) {
          Kt(l, l.return, M);
        }
        else {
          var h = Qr(l.type, r.memoizedProps);
          r = r.memoizedState;
          try {
            n.componentDidUpdate(h, r, n.__reactInternalSnapshotBeforeUpdate);
          } catch (M) {
            Kt(l, l.return, M);
          }
        }
        c & 64 && zv(l), c & 512 && Ir(l, l.return);
        break;
      case 3:
        if (Mi(n, l), c & 64 && (c = l.updateQueue, c !== null)) {
          if (n = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              n = l.child.stateNode;
              break;
            case 1:
              n = l.child.stateNode;
          }
          try {
            $v(c, n);
          } catch (M) {
            Kt(l, l.return, M);
          }
        }
        break;
      case 26:
        Mi(n, l), c & 512 && Ir(l, l.return);
        break;
      case 27:
      case 5:
        Mi(n, l), r === null && c & 4 && Lv(l), c & 512 && Ir(l, l.return);
        break;
      case 12:
        Mi(n, l);
        break;
      case 13:
        Mi(n, l), c & 4 && Gv(n, l);
        break;
      case 22:
        if (h = l.memoizedState !== null || Si, !h) {
          r = r !== null && r.memoizedState !== null || ee;
          var g = Si, _ = ee;
          Si = h, (ee = r) && !_ ? cr(n, l, (l.subtreeFlags & 8772) !== 0) : Mi(n, l), Si = g, ee = _;
        }
        c & 512 && (l.memoizedProps.mode === "manual" ? Ir(l, l.return) : en(l, l.return));
        break;
      default:
        Mi(n, l);
    }
  }
  function kv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, kv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && Ud(r)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  var de = null, nn = false;
  function xi(n, r, l) {
    for (l = l.child; l !== null; ) Yv(n, r, l), l = l.sibling;
  }
  function Yv(n, r, l) {
    if (We && typeof We.onCommitFiberUnmount == "function") try {
      We.onCommitFiberUnmount(Gu, l);
    } catch {
    }
    switch (l.tag) {
      case 26:
        ee || en(l, r), xi(n, r, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        ee || en(l, r);
        var c = de, h = nn;
        for (de = l.stateNode, xi(n, r, l), l = l.stateNode, r = l.attributes; r.length; ) l.removeAttributeNode(r[0]);
        Ud(l), de = c, nn = h;
        break;
      case 5:
        ee || en(l, r);
      case 6:
        h = de;
        var g = nn;
        if (de = null, xi(n, r, l), de = h, nn = g, de !== null) if (nn) try {
          n = de, c = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(c) : n.removeChild(c);
        } catch (_) {
          Kt(l, r, _);
        }
        else try {
          de.removeChild(l.stateNode);
        } catch (_) {
          Kt(l, r, _);
        }
        break;
      case 18:
        de !== null && (nn ? (r = de, l = l.stateNode, r.nodeType === 8 ? A0(r.parentNode, l) : r.nodeType === 1 && A0(r, l), jl(r)) : A0(de, l.stateNode));
        break;
      case 4:
        c = de, h = nn, de = l.stateNode.containerInfo, nn = true, xi(n, r, l), de = c, nn = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ee || or(2, l, r), ee || or(4, l, r), xi(n, r, l);
        break;
      case 1:
        ee || (en(l, r), c = l.stateNode, typeof c.componentWillUnmount == "function" && Uv(l, r, c)), xi(n, r, l);
        break;
      case 21:
        xi(n, r, l);
        break;
      case 22:
        ee || en(l, r), ee = (c = ee) || l.memoizedState !== null, xi(n, r, l), ee = c;
        break;
      default:
        xi(n, r, l);
    }
  }
  function Gv(n, r) {
    if (r.memoizedState === null && (n = r.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null)))) try {
      jl(n);
    } catch (l) {
      Kt(r, r.return, l);
    }
  }
  function jx(n) {
    switch (n.tag) {
      case 13:
      case 19:
        var r = n.stateNode;
        return r === null && (r = n.stateNode = new jv()), r;
      case 22:
        return n = n.stateNode, r = n._retryCache, r === null && (r = n._retryCache = new jv()), r;
      default:
        throw Error(a(435, n.tag));
    }
  }
  function Ph(n, r) {
    var l = jx(n);
    r.forEach(function(c) {
      var h = Wx.bind(null, n, c);
      l.has(c) || (l.add(c), c.then(h, h));
    });
  }
  function vn(n, r) {
    var l = r.deletions;
    if (l !== null) for (var c = 0; c < l.length; c++) {
      var h = l[c], g = n, _ = r, M = _;
      t: for (; M !== null; ) {
        switch (M.tag) {
          case 27:
          case 5:
            de = M.stateNode, nn = false;
            break t;
          case 3:
            de = M.stateNode.containerInfo, nn = true;
            break t;
          case 4:
            de = M.stateNode.containerInfo, nn = true;
            break t;
        }
        M = M.return;
      }
      if (de === null) throw Error(a(160));
      Yv(g, _, h), de = null, nn = false, g = h.alternate, g !== null && (g.return = null), h.return = null;
    }
    if (r.subtreeFlags & 13878) for (r = r.child; r !== null; ) Xv(r, n), r = r.sibling;
  }
  var zn = null;
  function Xv(n, r) {
    var l = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vn(r, n), yn(n), c & 4 && (or(3, n, n.return), wl(3, n), or(5, n, n.return));
        break;
      case 1:
        vn(r, n), yn(n), c & 512 && (ee || l === null || en(l, l.return)), c & 64 && Si && (n = n.updateQueue, n !== null && (c = n.callbacks, c !== null && (l = n.shared.hiddenCallbacks, n.shared.hiddenCallbacks = l === null ? c : l.concat(c))));
        break;
      case 26:
        var h = zn;
        if (vn(r, n), yn(n), c & 512 && (ee || l === null || en(l, l.return)), c & 4) {
          var g = l !== null ? l.memoizedState : null;
          if (c = n.memoizedState, l === null) if (c === null) if (n.stateNode === null) {
            t: {
              c = n.type, l = n.memoizedProps, h = h.ownerDocument || h;
              e: switch (c) {
                case "title":
                  g = h.getElementsByTagName("title")[0], (!g || g[Zu] || g[Re] || g.namespaceURI === "http://www.w3.org/2000/svg" || g.hasAttribute("itemprop")) && (g = h.createElement(c), h.head.insertBefore(g, h.querySelector("head > title"))), Oe(g, c, l), g[Re] = n, ve(g), c = g;
                  break t;
                case "link":
                  var _ = Ly("link", "href", h).get(c + (l.href || ""));
                  if (_) {
                    for (var M = 0; M < _.length; M++) if (g = _[M], g.getAttribute("href") === (l.href == null ? null : l.href) && g.getAttribute("rel") === (l.rel == null ? null : l.rel) && g.getAttribute("title") === (l.title == null ? null : l.title) && g.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                      _.splice(M, 1);
                      break e;
                    }
                  }
                  g = h.createElement(c), Oe(g, c, l), h.head.appendChild(g);
                  break;
                case "meta":
                  if (_ = Ly("meta", "content", h).get(c + (l.content || ""))) {
                    for (M = 0; M < _.length; M++) if (g = _[M], g.getAttribute("content") === (l.content == null ? null : "" + l.content) && g.getAttribute("name") === (l.name == null ? null : l.name) && g.getAttribute("property") === (l.property == null ? null : l.property) && g.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && g.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                      _.splice(M, 1);
                      break e;
                    }
                  }
                  g = h.createElement(c), Oe(g, c, l), h.head.appendChild(g);
                  break;
                default:
                  throw Error(a(468, c));
              }
              g[Re] = n, ve(g), c = g;
            }
            n.stateNode = c;
          } else Hy(h, n.type, n.stateNode);
          else n.stateNode = Uy(h, c, n.memoizedProps);
          else g !== c ? (g === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : g.count--, c === null ? Hy(h, n.type, n.stateNode) : Uy(h, c, n.memoizedProps)) : c === null && n.stateNode !== null && Hv(n, n.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        if (c & 4 && n.alternate === null) {
          h = n.stateNode, g = n.memoizedProps;
          try {
            for (var R = h.firstChild; R; ) {
              var L = R.nextSibling, J = R.nodeName;
              R[Zu] || J === "HEAD" || J === "BODY" || J === "SCRIPT" || J === "STYLE" || J === "LINK" && R.rel.toLowerCase() === "stylesheet" || h.removeChild(R), R = L;
            }
            for (var at = n.type, X = h.attributes; X.length; ) h.removeAttributeNode(X[0]);
            Oe(h, at, g), h[Re] = n, h[Fe] = g;
          } catch (bt) {
            Kt(n, n.return, bt);
          }
        }
      case 5:
        if (vn(r, n), yn(n), c & 512 && (ee || l === null || en(l, l.return)), n.flags & 32) {
          h = n.stateNode;
          try {
            La(h, "");
          } catch (bt) {
            Kt(n, n.return, bt);
          }
        }
        c & 4 && n.stateNode != null && (h = n.memoizedProps, Hv(n, h, l !== null ? l.memoizedProps : h)), c & 1024 && (Kh = true);
        break;
      case 6:
        if (vn(r, n), yn(n), c & 4) {
          if (n.stateNode === null) throw Error(a(162));
          c = n.memoizedProps, l = n.stateNode;
          try {
            l.nodeValue = c;
          } catch (bt) {
            Kt(n, n.return, bt);
          }
        }
        break;
      case 3:
        if (nf = null, h = zn, zn = tf(r.containerInfo), vn(r, n), zn = h, yn(n), c & 4 && l !== null && l.memoizedState.isDehydrated) try {
          jl(r.containerInfo);
        } catch (bt) {
          Kt(n, n.return, bt);
        }
        Kh && (Kh = false, Fv(n));
        break;
      case 4:
        c = zn, zn = tf(n.stateNode.containerInfo), vn(r, n), yn(n), zn = c;
        break;
      case 12:
        vn(r, n), yn(n);
        break;
      case 13:
        vn(r, n), yn(n), n.child.flags & 8192 && n.memoizedState !== null != (l !== null && l.memoizedState !== null) && (a0 = Gn()), c & 4 && (c = n.updateQueue, c !== null && (n.updateQueue = null, Ph(n, c)));
        break;
      case 22:
        if (c & 512 && (ee || l === null || en(l, l.return)), R = n.memoizedState !== null, L = l !== null && l.memoizedState !== null, J = Si, at = ee, Si = J || R, ee = at || L, vn(r, n), ee = at, Si = J, yn(n), r = n.stateNode, r._current = n, r._visibility &= -3, r._visibility |= r._pendingVisibility & 2, c & 8192 && (r._visibility = R ? r._visibility & -2 : r._visibility | 1, R && (r = Si || ee, l === null || L || r || Ja(n)), n.memoizedProps === null || n.memoizedProps.mode !== "manual")) t: for (l = null, r = n; ; ) {
          if (r.tag === 5 || r.tag === 26 || r.tag === 27) {
            if (l === null) {
              L = l = r;
              try {
                if (h = L.stateNode, R) g = h.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                else {
                  _ = L.stateNode, M = L.memoizedProps.style;
                  var I = M != null && M.hasOwnProperty("display") ? M.display : null;
                  _.style.display = I == null || typeof I == "boolean" ? "" : ("" + I).trim();
                }
              } catch (bt) {
                Kt(L, L.return, bt);
              }
            }
          } else if (r.tag === 6) {
            if (l === null) {
              L = r;
              try {
                L.stateNode.nodeValue = R ? "" : L.memoizedProps;
              } catch (bt) {
                Kt(L, L.return, bt);
              }
            }
          } else if ((r.tag !== 22 && r.tag !== 23 || r.memoizedState === null || r === n) && r.child !== null) {
            r.child.return = r, r = r.child;
            continue;
          }
          if (r === n) break t;
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === n) break t;
            l === r && (l = null), r = r.return;
          }
          l === r && (l = null), r.sibling.return = r.return, r = r.sibling;
        }
        c & 4 && (c = n.updateQueue, c !== null && (l = c.retryQueue, l !== null && (c.retryQueue = null, Ph(n, l))));
        break;
      case 19:
        vn(r, n), yn(n), c & 4 && (c = n.updateQueue, c !== null && (n.updateQueue = null, Ph(n, c)));
        break;
      case 21:
        break;
      default:
        vn(r, n), yn(n);
    }
  }
  function yn(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        if (n.tag !== 27) {
          t: {
            for (var l = n.return; l !== null; ) {
              if (Vv(l)) {
                var c = l;
                break t;
              }
              l = l.return;
            }
            throw Error(a(160));
          }
          switch (c.tag) {
            case 27:
              var h = c.stateNode, g = Zh(n);
              jc(n, g, h);
              break;
            case 5:
              var _ = c.stateNode;
              c.flags & 32 && (La(_, ""), c.flags &= -33);
              var M = Zh(n);
              jc(n, M, _);
              break;
            case 3:
            case 4:
              var R = c.stateNode.containerInfo, L = Zh(n);
              Qh(n, L, R);
              break;
            default:
              throw Error(a(161));
          }
        }
      } catch (J) {
        Kt(n, n.return, J);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Fv(n) {
    if (n.subtreeFlags & 1024) for (n = n.child; n !== null; ) {
      var r = n;
      Fv(r), r.tag === 5 && r.flags & 1024 && r.stateNode.reset(), n = n.sibling;
    }
  }
  function Mi(n, r) {
    if (r.subtreeFlags & 8772) for (r = r.child; r !== null; ) qv(n, r.alternate, r), r = r.sibling;
  }
  function Ja(n) {
    for (n = n.child; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          or(4, r, r.return), Ja(r);
          break;
        case 1:
          en(r, r.return);
          var l = r.stateNode;
          typeof l.componentWillUnmount == "function" && Uv(r, r.return, l), Ja(r);
          break;
        case 26:
        case 27:
        case 5:
          en(r, r.return), Ja(r);
          break;
        case 22:
          en(r, r.return), r.memoizedState === null && Ja(r);
          break;
        default:
          Ja(r);
      }
      n = n.sibling;
    }
  }
  function cr(n, r, l) {
    for (l = l && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var c = r.alternate, h = n, g = r, _ = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          cr(h, g, l), wl(4, g);
          break;
        case 1:
          if (cr(h, g, l), c = g, h = c.stateNode, typeof h.componentDidMount == "function") try {
            h.componentDidMount();
          } catch (L) {
            Kt(c, c.return, L);
          }
          if (c = g, h = c.updateQueue, h !== null) {
            var M = c.stateNode;
            try {
              var R = h.shared.hiddenCallbacks;
              if (R !== null) for (h.shared.hiddenCallbacks = null, h = 0; h < R.length; h++) Nv(R[h], M);
            } catch (L) {
              Kt(c, c.return, L);
            }
          }
          l && _ & 64 && zv(g), Ir(g, g.return);
          break;
        case 26:
        case 27:
        case 5:
          cr(h, g, l), l && c === null && _ & 4 && Lv(g), Ir(g, g.return);
          break;
        case 12:
          cr(h, g, l);
          break;
        case 13:
          cr(h, g, l), l && _ & 4 && Gv(h, g);
          break;
        case 22:
          g.memoizedState === null && cr(h, g, l), Ir(g, g.return);
          break;
        default:
          cr(h, g, l);
      }
      r = r.sibling;
    }
  }
  function Ih(n, r) {
    var l = null;
    n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), n = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (n = r.memoizedState.cachePool.pool), n !== l && (n != null && n.refCount++, l != null && sl(l));
  }
  function Wh(n, r) {
    n = null, r.alternate !== null && (n = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== n && (r.refCount++, n != null && sl(n));
  }
  function fr(n, r, l, c) {
    if (r.subtreeFlags & 10256) for (r = r.child; r !== null; ) Zv(n, r, l, c), r = r.sibling;
  }
  function Zv(n, r, l, c) {
    var h = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        fr(n, r, l, c), h & 2048 && wl(9, r);
        break;
      case 3:
        fr(n, r, l, c), h & 2048 && (n = null, r.alternate !== null && (n = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== n && (r.refCount++, n != null && sl(n)));
        break;
      case 12:
        if (h & 2048) {
          fr(n, r, l, c), n = r.stateNode;
          try {
            var g = r.memoizedProps, _ = g.id, M = g.onPostCommit;
            typeof M == "function" && M(_, r.alternate === null ? "mount" : "update", n.passiveEffectDuration, -0);
          } catch (R) {
            Kt(r, r.return, R);
          }
        } else fr(n, r, l, c);
        break;
      case 23:
        break;
      case 22:
        g = r.stateNode, r.memoizedState !== null ? g._visibility & 4 ? fr(n, r, l, c) : Sl(n, r) : g._visibility & 4 ? fr(n, r, l, c) : (g._visibility |= 4, tu(n, r, l, c, (r.subtreeFlags & 10256) !== 0)), h & 2048 && Ih(r.alternate, r);
        break;
      case 24:
        fr(n, r, l, c), h & 2048 && Wh(r.alternate, r);
        break;
      default:
        fr(n, r, l, c);
    }
  }
  function tu(n, r, l, c, h) {
    for (h = h && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
      var g = n, _ = r, M = l, R = c, L = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          tu(g, _, M, R, h), wl(8, _);
          break;
        case 23:
          break;
        case 22:
          var J = _.stateNode;
          _.memoizedState !== null ? J._visibility & 4 ? tu(g, _, M, R, h) : Sl(g, _) : (J._visibility |= 4, tu(g, _, M, R, h)), h && L & 2048 && Ih(_.alternate, _);
          break;
        case 24:
          tu(g, _, M, R, h), h && L & 2048 && Wh(_.alternate, _);
          break;
        default:
          tu(g, _, M, R, h);
      }
      r = r.sibling;
    }
  }
  function Sl(n, r) {
    if (r.subtreeFlags & 10256) for (r = r.child; r !== null; ) {
      var l = n, c = r, h = c.flags;
      switch (c.tag) {
        case 22:
          Sl(l, c), h & 2048 && Ih(c.alternate, c);
          break;
        case 24:
          Sl(l, c), h & 2048 && Wh(c.alternate, c);
          break;
        default:
          Sl(l, c);
      }
      r = r.sibling;
    }
  }
  var xl = 8192;
  function eu(n) {
    if (n.subtreeFlags & xl) for (n = n.child; n !== null; ) Qv(n), n = n.sibling;
  }
  function Qv(n) {
    switch (n.tag) {
      case 26:
        eu(n), n.flags & xl && n.memoizedState !== null && A9(zn, n.memoizedState, n.memoizedProps);
        break;
      case 5:
        eu(n);
        break;
      case 3:
      case 4:
        var r = zn;
        zn = tf(n.stateNode.containerInfo), eu(n), zn = r;
        break;
      case 22:
        n.memoizedState === null && (r = n.alternate, r !== null && r.memoizedState !== null ? (r = xl, xl = 16777216, eu(n), xl = r) : eu(n));
        break;
      default:
        eu(n);
    }
  }
  function Kv(n) {
    var r = n.alternate;
    if (r !== null && (n = r.child, n !== null)) {
      r.child = null;
      do
        r = n.sibling, n.sibling = null, n = r;
      while (n !== null);
    }
  }
  function Ml(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null) for (var l = 0; l < r.length; l++) {
        var c = r[l];
        _e = c, Iv(c, n);
      }
      Kv(n);
    }
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) Pv(n), n = n.sibling;
  }
  function Pv(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ml(n), n.flags & 2048 && or(9, n, n.return);
        break;
      case 3:
        Ml(n);
        break;
      case 12:
        Ml(n);
        break;
      case 22:
        var r = n.stateNode;
        n.memoizedState !== null && r._visibility & 4 && (n.return === null || n.return.tag !== 13) ? (r._visibility &= -5, Bc(n)) : Ml(n);
        break;
      default:
        Ml(n);
    }
  }
  function Bc(n) {
    var r = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (r !== null) for (var l = 0; l < r.length; l++) {
        var c = r[l];
        _e = c, Iv(c, n);
      }
      Kv(n);
    }
    for (n = n.child; n !== null; ) {
      switch (r = n, r.tag) {
        case 0:
        case 11:
        case 15:
          or(8, r, r.return), Bc(r);
          break;
        case 22:
          l = r.stateNode, l._visibility & 4 && (l._visibility &= -5, Bc(r));
          break;
        default:
          Bc(r);
      }
      n = n.sibling;
    }
  }
  function Iv(n, r) {
    for (; _e !== null; ) {
      var l = _e;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          or(8, l, r);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var c = l.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          sl(l.memoizedState.cache);
      }
      if (c = l.child, c !== null) c.return = l, _e = c;
      else t: for (l = n; _e !== null; ) {
        c = _e;
        var h = c.sibling, g = c.return;
        if (kv(c), c === l) {
          _e = null;
          break t;
        }
        if (h !== null) {
          h.return = g, _e = h;
          break t;
        }
        _e = g;
      }
    }
  }
  function Bx(n, r, l, c) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _n(n, r, l, c) {
    return new Bx(n, r, l, c);
  }
  function Jh(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function sr(n, r) {
    var l = n.alternate;
    return l === null ? (l = _n(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 31457280, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l.refCleanup = n.refCleanup, l;
  }
  function Wv(n, r) {
    n.flags &= 31457282;
    var l = n.alternate;
    return l === null ? (n.childLanes = 0, n.lanes = r, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = l.childLanes, n.lanes = l.lanes, n.child = l.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = l.memoizedProps, n.memoizedState = l.memoizedState, n.updateQueue = l.updateQueue, n.type = l.type, r = l.dependencies, n.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }), n;
  }
  function qc(n, r, l, c, h, g) {
    var _ = 0;
    if (c = n, typeof n == "function") Jh(n) && (_ = 1);
    else if (typeof n == "string") _ = T9(n, l, mt.current) ? 26 : n === "html" || n === "head" || n === "body" ? 27 : 5;
    else t: switch (n) {
      case d:
        return Wr(l.children, h, g, r);
      case p:
        _ = 8, h |= 24;
        break;
      case m:
        return n = _n(12, l, r, h | 2), n.elementType = m, n.lanes = g, n;
      case S:
        return n = _n(13, l, r, h), n.elementType = S, n.lanes = g, n;
      case x:
        return n = _n(19, l, r, h), n.elementType = x, n.lanes = g, n;
      case D:
        return Jv(l, h, g, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case b:
          case y:
            _ = 10;
            break t;
          case v:
            _ = 9;
            break t;
          case w:
            _ = 11;
            break t;
          case T:
            _ = 14;
            break t;
          case E:
            _ = 16, c = null;
            break t;
        }
        _ = 29, l = Error(a(130, n === null ? "null" : typeof n, "")), c = null;
    }
    return r = _n(_, l, r, h), r.elementType = n, r.type = c, r.lanes = g, r;
  }
  function Wr(n, r, l, c) {
    return n = _n(7, n, c, r), n.lanes = l, n;
  }
  function Jv(n, r, l, c) {
    n = _n(22, n, c, r), n.elementType = D, n.lanes = l;
    var h = { _visibility: 1, _pendingVisibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null, _current: null, detach: function() {
      var g = h._current;
      if (g === null) throw Error(a(456));
      if ((h._pendingVisibility & 2) === 0) {
        var _ = Ji(g, 2);
        _ !== null && (h._pendingVisibility |= 2, ke(_, g, 2));
      }
    }, attach: function() {
      var g = h._current;
      if (g === null) throw Error(a(456));
      if ((h._pendingVisibility & 2) !== 0) {
        var _ = Ji(g, 2);
        _ !== null && (h._pendingVisibility &= -3, ke(_, g, 2));
      }
    } };
    return n.stateNode = h, n;
  }
  function t0(n, r, l) {
    return n = _n(6, n, null, r), n.lanes = l, n;
  }
  function e0(n, r, l) {
    return r = _n(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ti(n) {
    n.flags |= 4;
  }
  function ty(n, r) {
    if (r.type !== "stylesheet" || (r.state.loading & 4) !== 0) n.flags &= -16777217;
    else if (n.flags |= 16777216, !Vy(r)) {
      if (r = bn.current, r !== null && ((Ht & 4194176) === Ht ? Fn !== null : (Ht & 62914560) !== Ht && (Ht & 536870912) === 0 || r !== Fn)) throw ol = uh, bb;
      n.flags |= 8192;
    }
  }
  function kc(n, r) {
    r !== null && (n.flags |= 4), n.flags & 16384 && (r = n.tag !== 22 ? v1() : 536870912, n.lanes |= r, iu |= r);
  }
  function Tl(n, r) {
    if (!jt) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var c = null; l !== null; ) l.alternate !== null && (c = l), l = l.sibling;
        c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
    }
  }
  function Jt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, c = 0;
    if (r) for (var h = n.child; h !== null; ) l |= h.lanes | h.childLanes, c |= h.subtreeFlags & 31457280, c |= h.flags & 31457280, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) l |= h.lanes | h.childLanes, c |= h.subtreeFlags, c |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= c, n.childLanes = l, r;
  }
  function qx(n, r, l) {
    var c = r.pendingProps;
    switch (rh(r), r.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Jt(r), null;
      case 1:
        return Jt(r), null;
      case 3:
        return l = r.stateNode, c = null, n !== null && (c = n.memoizedState.cache), r.memoizedState.cache !== c && (r.flags |= 2048), wi(me), Ft(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (n === null || n.child === null) && (rl(r) ? Ti(r) : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, $n !== null && (c0($n), $n = null))), Jt(r), null;
      case 26:
        return l = r.memoizedState, n === null ? (Ti(r), l !== null ? (Jt(r), ty(r, l)) : (Jt(r), r.flags &= -16777217)) : l ? l !== n.memoizedState ? (Ti(r), Jt(r), ty(r, l)) : (Jt(r), r.flags &= -16777217) : (n.memoizedProps !== c && Ti(r), Jt(r), r.flags &= -16777217), null;
      case 27:
        Rn(r), l = Nt.current;
        var h = r.type;
        if (n !== null && r.stateNode != null) n.memoizedProps !== c && Ti(r);
        else {
          if (!c) {
            if (r.stateNode === null) throw Error(a(166));
            return Jt(r), null;
          }
          n = mt.current, rl(r) ? mb(r) : (n = Dy(h, c, l), r.stateNode = n, Ti(r));
        }
        return Jt(r), null;
      case 5:
        if (Rn(r), l = r.type, n !== null && r.stateNode != null) n.memoizedProps !== c && Ti(r);
        else {
          if (!c) {
            if (r.stateNode === null) throw Error(a(166));
            return Jt(r), null;
          }
          if (n = mt.current, rl(r)) mb(r);
          else {
            switch (h = Jc(Nt.current), n) {
              case 1:
                n = h.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                n = h.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    n = h.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    n = h.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                    break;
                  case "script":
                    n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof c.is == "string" ? h.createElement("select", { is: c.is }) : h.createElement("select"), c.multiple ? n.multiple = true : c.size && (n.size = c.size);
                    break;
                  default:
                    n = typeof c.is == "string" ? h.createElement(l, { is: c.is }) : h.createElement(l);
                }
            }
            n[Re] = r, n[Fe] = c;
            t: for (h = r.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6) n.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
              if (h === r) break t;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === r) break t;
                h = h.return;
              }
              h.sibling.return = h.return, h = h.sibling;
            }
            r.stateNode = n;
            t: switch (Oe(n, l, c), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!c.autoFocus;
                break t;
              case "img":
                n = true;
                break t;
              default:
                n = false;
            }
            n && Ti(r);
          }
        }
        return Jt(r), r.flags &= -16777217, null;
      case 6:
        if (n && r.stateNode != null) n.memoizedProps !== c && Ti(r);
        else {
          if (typeof c != "string" && r.stateNode === null) throw Error(a(166));
          if (n = Nt.current, rl(r)) {
            if (n = r.stateNode, l = r.memoizedProps, c = null, h = qe, h !== null) switch (h.tag) {
              case 27:
              case 5:
                c = h.memoizedProps;
            }
            n[Re] = r, n = !!(n.nodeValue === l || c !== null && c.suppressHydrationWarning === true || My(n.nodeValue, l)), n || kr(r);
          } else n = Jc(n).createTextNode(c), n[Re] = r, r.stateNode = n;
        }
        return Jt(r), null;
      case 13:
        if (c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (h = rl(r), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!h) throw Error(a(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(a(317));
              h[Re] = r;
            } else al(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Jt(r), h = false;
          } else $n !== null && (c0($n), $n = null), h = true;
          if (!h) return r.flags & 256 ? (bi(r), r) : (bi(r), null);
        }
        if (bi(r), (r.flags & 128) !== 0) return r.lanes = l, r;
        if (l = c !== null, n = n !== null && n.memoizedState !== null, l) {
          c = r.child, h = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (h = c.alternate.memoizedState.cachePool.pool);
          var g = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (g = c.memoizedState.cachePool.pool), g !== h && (c.flags |= 2048);
        }
        return l !== n && l && (r.child.flags |= 8192), kc(r, r.updateQueue), Jt(r), null;
      case 4:
        return Ft(), n === null && _0(r.stateNode.containerInfo), Jt(r), null;
      case 10:
        return wi(r.type), Jt(r), null;
      case 19:
        if (W(pe), h = r.memoizedState, h === null) return Jt(r), null;
        if (c = (r.flags & 128) !== 0, g = h.rendering, g === null) if (c) Tl(h, false);
        else {
          if (ne !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (g = Tc(n), g !== null) {
              for (r.flags |= 128, Tl(h, false), n = g.updateQueue, r.updateQueue = n, kc(r, n), r.subtreeFlags = 0, n = l, l = r.child; l !== null; ) Wv(l, n), l = l.sibling;
              return ot(pe, pe.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          h.tail !== null && Gn() > Yc && (r.flags |= 128, c = true, Tl(h, false), r.lanes = 4194304);
        }
        else {
          if (!c) if (n = Tc(g), n !== null) {
            if (r.flags |= 128, c = true, n = n.updateQueue, r.updateQueue = n, kc(r, n), Tl(h, true), h.tail === null && h.tailMode === "hidden" && !g.alternate && !jt) return Jt(r), null;
          } else 2 * Gn() - h.renderingStartTime > Yc && l !== 536870912 && (r.flags |= 128, c = true, Tl(h, false), r.lanes = 4194304);
          h.isBackwards ? (g.sibling = r.child, r.child = g) : (n = h.last, n !== null ? n.sibling = g : r.child = g, h.last = g);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = Gn(), r.sibling = null, n = pe.current, ot(pe, c ? n & 1 | 2 : n & 1), r) : (Jt(r), null);
      case 22:
      case 23:
        return bi(r), oh(), c = r.memoizedState !== null, n !== null ? n.memoizedState !== null !== c && (r.flags |= 8192) : c && (r.flags |= 8192), c ? (l & 536870912) !== 0 && (r.flags & 128) === 0 && (Jt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Jt(r), l = r.updateQueue, l !== null && kc(r, l.retryQueue), l = null, n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), c = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool), c !== l && (r.flags |= 2048), n !== null && W(Gr), null;
      case 24:
        return l = null, n !== null && (l = n.memoizedState.cache), r.memoizedState.cache !== l && (r.flags |= 2048), wi(me), Jt(r), null;
      case 25:
        return null;
    }
    throw Error(a(156, r.tag));
  }
  function kx(n, r) {
    switch (rh(r), r.tag) {
      case 1:
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wi(me), Ft(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 26:
      case 27:
      case 5:
        return Rn(r), null;
      case 13:
        if (bi(r), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(a(340));
          al();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return W(pe), null;
      case 4:
        return Ft(), null;
      case 10:
        return wi(r.type), null;
      case 22:
      case 23:
        return bi(r), oh(), n !== null && W(Gr), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 24:
        return wi(me), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ey(n, r) {
    switch (rh(r), r.tag) {
      case 3:
        wi(me), Ft();
        break;
      case 26:
      case 27:
      case 5:
        Rn(r);
        break;
      case 4:
        Ft();
        break;
      case 13:
        bi(r);
        break;
      case 19:
        W(pe);
        break;
      case 10:
        wi(r.type);
        break;
      case 22:
      case 23:
        bi(r), oh(), n !== null && W(Gr);
        break;
      case 24:
        wi(me);
    }
  }
  var Yx = { getCacheForType: function(n) {
    var r = Ne(me), l = r.data.get(n);
    return l === void 0 && (l = n(), r.data.set(n, l)), l;
  } }, Gx = typeof WeakMap == "function" ? WeakMap : Map, te = 0, It = null, Ut = null, Ht = 0, Wt = 0, rn = null, Ei = false, nu = false, n0 = false, Ai = 0, ne = 0, dr = 0, Jr = 0, i0 = 0, wn = 0, iu = 0, El = null, Qn = null, r0 = false, a0 = 0, Yc = 1 / 0, Gc = null, hr = null, Xc = false, ta = null, Al = 0, u0 = 0, l0 = null, Ol = 0, o0 = null;
  function an() {
    if ((te & 2) !== 0 && Ht !== 0) return Ht & -Ht;
    if (z.T !== null) {
      var n = Qa;
      return n !== 0 ? n : g0();
    }
    return S1();
  }
  function ny() {
    wn === 0 && (wn = (Ht & 536870912) === 0 || jt ? b1() : 536870912);
    var n = bn.current;
    return n !== null && (n.flags |= 32), wn;
  }
  function ke(n, r, l) {
    (n === It && Wt === 2 || n.cancelPendingCommit !== null) && (ru(n, 0), Oi(n, Ht, wn, false)), Fu(n, l), ((te & 2) === 0 || n !== It) && (n === It && ((te & 2) === 0 && (Jr |= l), ne === 4 && Oi(n, Ht, wn, false)), Kn(n));
  }
  function iy(n, r, l) {
    if ((te & 6) !== 0) throw Error(a(327));
    var c = !l && (r & 60) === 0 && (r & n.expiredLanes) === 0 || Xu(n, r), h = c ? Zx(n, r) : d0(n, r, true), g = c;
    do {
      if (h === 0) {
        nu && !c && Oi(n, r, 0, false);
        break;
      } else if (h === 6) Oi(n, r, 0, !Ei);
      else {
        if (l = n.current.alternate, g && !Xx(l)) {
          h = d0(n, r, false), g = false;
          continue;
        }
        if (h === 2) {
          if (g = r, n.errorRecoveryDisabledLanes & g) var _ = 0;
          else _ = n.pendingLanes & -536870913, _ = _ !== 0 ? _ : _ & 536870912 ? 536870912 : 0;
          if (_ !== 0) {
            r = _;
            t: {
              var M = n;
              h = El;
              var R = M.current.memoizedState.isDehydrated;
              if (R && (ru(M, _).flags |= 256), _ = d0(M, _, false), _ !== 2) {
                if (n0 && !R) {
                  M.errorRecoveryDisabledLanes |= g, Jr |= g, h = 4;
                  break t;
                }
                g = Qn, Qn = h, g !== null && c0(g);
              }
              h = _;
            }
            if (g = false, h !== 2) continue;
          }
        }
        if (h === 1) {
          ru(n, 0), Oi(n, r, 0, true);
          break;
        }
        t: {
          switch (c = n, h) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((r & 4194176) === r) {
                Oi(c, r, wn, !Ei);
                break t;
              }
              break;
            case 2:
              Qn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if (c.finishedWork = l, c.finishedLanes = r, (r & 62914560) === r && (g = a0 + 300 - Gn(), 10 < g)) {
            if (Oi(c, r, wn, !Ei), rc(c, 0) !== 0) break t;
            c.timeoutHandle = Ay(ry.bind(null, c, l, Qn, Gc, r0, r, wn, Jr, iu, Ei, 2, -0, 0), g);
            break t;
          }
          ry(c, l, Qn, Gc, r0, r, wn, Jr, iu, Ei, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Kn(n);
  }
  function c0(n) {
    Qn === null ? Qn = n : Qn.push.apply(Qn, n);
  }
  function ry(n, r, l, c, h, g, _, M, R, L, J, at, X) {
    var I = r.subtreeFlags;
    if ((I & 8192 || (I & 16785408) === 16785408) && (zl = { stylesheets: null, count: 0, unsuspend: E9 }, Qv(r), r = O9(), r !== null)) {
      n.cancelPendingCommit = r(sy.bind(null, n, l, c, h, _, M, R, 1, at, X)), Oi(n, g, _, !L);
      return;
    }
    sy(n, l, c, h, _, M, R, J, at, X);
  }
  function Xx(n) {
    for (var r = n; ; ) {
      var l = r.tag;
      if ((l === 0 || l === 11 || l === 15) && r.flags & 16384 && (l = r.updateQueue, l !== null && (l = l.stores, l !== null))) for (var c = 0; c < l.length; c++) {
        var h = l[c], g = h.getSnapshot;
        h = h.value;
        try {
          if (!tn(g(), h)) return false;
        } catch {
          return false;
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return true;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return true;
  }
  function Oi(n, r, l, c) {
    r &= ~i0, r &= ~Jr, n.suspendedLanes |= r, n.pingedLanes &= ~r, c && (n.warmLanes |= r), c = n.expirationTimes;
    for (var h = r; 0 < h; ) {
      var g = 31 - Je(h), _ = 1 << g;
      c[g] = -1, h &= ~_;
    }
    l !== 0 && y1(n, l, r);
  }
  function Fc() {
    return (te & 6) === 0 ? (Cl(0), false) : true;
  }
  function f0() {
    if (Ut !== null) {
      if (Wt === 0) var n = Ut.return;
      else n = Ut, _i = Kr = null, gh(n), Fa = null, cl = 0, n = Ut;
      for (; n !== null; ) ey(n.alternate, n), n = n.return;
      Ut = null;
    }
  }
  function ru(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    l !== -1 && (n.timeoutHandle = -1, f9(l)), l = n.cancelPendingCommit, l !== null && (n.cancelPendingCommit = null, l()), f0(), It = n, Ut = l = sr(n.current, null), Ht = r, Wt = 0, rn = null, Ei = false, nu = Xu(n, r), n0 = false, iu = wn = i0 = Jr = dr = ne = 0, Qn = El = null, r0 = false, (r & 8) !== 0 && (r |= r & 32);
    var c = n.entangledLanes;
    if (c !== 0) for (n = n.entanglements, c &= r; 0 < c; ) {
      var h = 31 - Je(c), g = 1 << h;
      r |= n[h], c &= ~g;
    }
    return Ai = r, gc(), l;
  }
  function ay(n, r) {
    Dt = null, z.H = Zn, r === ll ? (r = _b(), Wt = 3) : r === bb ? (r = _b(), Wt = 4) : Wt = r === vv ? 8 : r !== null && typeof r == "object" && typeof r.then == "function" ? 6 : 1, rn = r, Ut === null && (ne = 1, Lc(n, pn(r, n.current)));
  }
  function uy() {
    var n = z.H;
    return z.H = Zn, n === null ? Zn : n;
  }
  function ly() {
    var n = z.A;
    return z.A = Yx, n;
  }
  function s0() {
    ne = 4, Ei || (Ht & 4194176) !== Ht && bn.current !== null || (nu = true), (dr & 134217727) === 0 && (Jr & 134217727) === 0 || It === null || Oi(It, Ht, wn, false);
  }
  function d0(n, r, l) {
    var c = te;
    te |= 2;
    var h = uy(), g = ly();
    (It !== n || Ht !== r) && (Gc = null, ru(n, r)), r = false;
    var _ = ne;
    t: do
      try {
        if (Wt !== 0 && Ut !== null) {
          var M = Ut, R = rn;
          switch (Wt) {
            case 8:
              f0(), _ = 6;
              break t;
            case 3:
            case 2:
            case 6:
              bn.current === null && (r = true);
              var L = Wt;
              if (Wt = 0, rn = null, au(n, M, R, L), l && nu) {
                _ = 0;
                break t;
              }
              break;
            default:
              L = Wt, Wt = 0, rn = null, au(n, M, R, L);
          }
        }
        Fx(), _ = ne;
        break;
      } catch (J) {
        ay(n, J);
      }
    while (true);
    return r && n.shellSuspendCounter++, _i = Kr = null, te = c, z.H = h, z.A = g, Ut === null && (It = null, Ht = 0, gc()), _;
  }
  function Fx() {
    for (; Ut !== null; ) oy(Ut);
  }
  function Zx(n, r) {
    var l = te;
    te |= 2;
    var c = uy(), h = ly();
    It !== n || Ht !== r ? (Gc = null, Yc = Gn() + 500, ru(n, r)) : nu = Xu(n, r);
    t: do
      try {
        if (Wt !== 0 && Ut !== null) {
          r = Ut;
          var g = rn;
          e: switch (Wt) {
            case 1:
              Wt = 0, rn = null, au(n, r, g, 1);
              break;
            case 2:
              if (vb(g)) {
                Wt = 0, rn = null, cy(r);
                break;
              }
              r = function() {
                Wt === 2 && It === n && (Wt = 7), Kn(n);
              }, g.then(r, r);
              break t;
            case 3:
              Wt = 7;
              break t;
            case 4:
              Wt = 5;
              break t;
            case 7:
              vb(g) ? (Wt = 0, rn = null, cy(r)) : (Wt = 0, rn = null, au(n, r, g, 7));
              break;
            case 5:
              var _ = null;
              switch (Ut.tag) {
                case 26:
                  _ = Ut.memoizedState;
                case 5:
                case 27:
                  var M = Ut;
                  if (!_ || Vy(_)) {
                    Wt = 0, rn = null;
                    var R = M.sibling;
                    if (R !== null) Ut = R;
                    else {
                      var L = M.return;
                      L !== null ? (Ut = L, Zc(L)) : Ut = null;
                    }
                    break e;
                  }
              }
              Wt = 0, rn = null, au(n, r, g, 5);
              break;
            case 6:
              Wt = 0, rn = null, au(n, r, g, 6);
              break;
            case 8:
              f0(), ne = 6;
              break t;
            default:
              throw Error(a(462));
          }
        }
        Qx();
        break;
      } catch (J) {
        ay(n, J);
      }
    while (true);
    return _i = Kr = null, z.H = c, z.A = h, te = l, Ut !== null ? 0 : (It = null, Ht = 0, gc(), ne);
  }
  function Qx() {
    for (; Ut !== null && !g7(); ) oy(Ut);
  }
  function oy(n) {
    var r = Dv(n.alternate, n, Ai);
    n.memoizedProps = n.pendingProps, r === null ? Zc(n) : Ut = r;
  }
  function cy(n) {
    var r = n, l = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = Mv(l, r, r.pendingProps, r.type, void 0, Ht);
        break;
      case 11:
        r = Mv(l, r, r.pendingProps, r.type.render, r.ref, Ht);
        break;
      case 5:
        gh(r);
      default:
        ey(l, r), r = Ut = Wv(r, Ai), r = Dv(l, r, Ai);
    }
    n.memoizedProps = n.pendingProps, r === null ? Zc(n) : Ut = r;
  }
  function au(n, r, l, c) {
    _i = Kr = null, gh(r), Fa = null, cl = 0;
    var h = r.return;
    try {
      if (Lx(n, h, r, l, Ht)) {
        ne = 1, Lc(n, pn(l, n.current)), Ut = null;
        return;
      }
    } catch (g) {
      if (h !== null) throw Ut = h, g;
      ne = 1, Lc(n, pn(l, n.current)), Ut = null;
      return;
    }
    r.flags & 32768 ? (jt || c === 1 ? n = true : nu || (Ht & 536870912) !== 0 ? n = false : (Ei = n = true, (c === 2 || c === 3 || c === 6) && (c = bn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), fy(r, n)) : Zc(r);
  }
  function Zc(n) {
    var r = n;
    do {
      if ((r.flags & 32768) !== 0) {
        fy(r, Ei);
        return;
      }
      n = r.return;
      var l = qx(r.alternate, r, Ai);
      if (l !== null) {
        Ut = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Ut = r;
        return;
      }
      Ut = r = n;
    } while (r !== null);
    ne === 0 && (ne = 5);
  }
  function fy(n, r) {
    do {
      var l = kx(n.alternate, n);
      if (l !== null) {
        l.flags &= 32767, Ut = l;
        return;
      }
      if (l = n.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !r && (n = n.sibling, n !== null)) {
        Ut = n;
        return;
      }
      Ut = n = l;
    } while (n !== null);
    ne = 6, Ut = null;
  }
  function sy(n, r, l, c, h, g, _, M, R, L) {
    var J = z.T, at = tt.p;
    try {
      tt.p = 2, z.T = null, Kx(n, r, l, c, at, h, g, _, M, R, L);
    } finally {
      z.T = J, tt.p = at;
    }
  }
  function Kx(n, r, l, c, h, g, _, M) {
    do
      uu();
    while (ta !== null);
    if ((te & 6) !== 0) throw Error(a(327));
    var R = n.finishedWork;
    if (c = n.finishedLanes, R === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, R === n.current) throw Error(a(177));
    n.callbackNode = null, n.callbackPriority = 0, n.cancelPendingCommit = null;
    var L = R.lanes | R.childLanes;
    if (L |= eh, A7(n, c, L, g, _, M), n === It && (Ut = It = null, Ht = 0), (R.subtreeFlags & 10256) === 0 && (R.flags & 10256) === 0 || Xc || (Xc = true, u0 = L, l0 = l, Jx(ec, function() {
      return uu(), null;
    })), l = (R.flags & 15990) !== 0, (R.subtreeFlags & 15990) !== 0 || l ? (l = z.T, z.T = null, g = tt.p, tt.p = 2, _ = te, te |= 4, Vx(n, R), Xv(R, n), yx(M0, n.containerInfo), uf = !!x0, M0 = x0 = null, n.current = R, qv(n, R.alternate, R), b7(), te = _, tt.p = g, z.T = l) : n.current = R, Xc ? (Xc = false, ta = n, Al = c) : dy(n, L), L = n.pendingLanes, L === 0 && (hr = null), S7(R.stateNode), Kn(n), r !== null) for (h = n.onRecoverableError, R = 0; R < r.length; R++) L = r[R], h(L.value, { componentStack: L.stack });
    return (Al & 3) !== 0 && uu(), L = n.pendingLanes, (c & 4194218) !== 0 && (L & 42) !== 0 ? n === o0 ? Ol++ : (Ol = 0, o0 = n) : Ol = 0, Cl(0), null;
  }
  function dy(n, r) {
    (n.pooledCacheLanes &= r) === 0 && (r = n.pooledCache, r != null && (n.pooledCache = null, sl(r)));
  }
  function uu() {
    if (ta !== null) {
      var n = ta, r = u0;
      u0 = 0;
      var l = w1(Al), c = z.T, h = tt.p;
      try {
        if (tt.p = 32 > l ? 32 : l, z.T = null, ta === null) var g = false;
        else {
          l = l0, l0 = null;
          var _ = ta, M = Al;
          if (ta = null, Al = 0, (te & 6) !== 0) throw Error(a(331));
          var R = te;
          if (te |= 4, Pv(_.current), Zv(_, _.current, M, l), te = R, Cl(0, false), We && typeof We.onPostCommitFiberRoot == "function") try {
            We.onPostCommitFiberRoot(Gu, _);
          } catch {
          }
          g = true;
        }
        return g;
      } finally {
        tt.p = h, z.T = c, dy(n, r);
      }
    }
    return false;
  }
  function hy(n, r, l) {
    r = pn(l, r), r = Dh(n.stateNode, r, 2), n = lr(n, r, 2), n !== null && (Fu(n, 2), Kn(n));
  }
  function Kt(n, r, l) {
    if (n.tag === 3) hy(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        hy(r, n, l);
        break;
      } else if (r.tag === 1) {
        var c = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (hr === null || !hr.has(c))) {
          n = pn(l, n), l = gv(2), c = lr(r, l, 2), c !== null && (bv(l, c, r, n), Fu(c, 2), Kn(c));
          break;
        }
      }
      r = r.return;
    }
  }
  function h0(n, r, l) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new Gx();
      var h = /* @__PURE__ */ new Set();
      c.set(r, h);
    } else h = c.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), c.set(r, h));
    h.has(l) || (n0 = true, h.add(l), n = Px.bind(null, n, r, l), r.then(n, n));
  }
  function Px(n, r, l) {
    var c = n.pingCache;
    c !== null && c.delete(r), n.pingedLanes |= n.suspendedLanes & l, n.warmLanes &= ~l, It === n && (Ht & l) === l && (ne === 4 || ne === 3 && (Ht & 62914560) === Ht && 300 > Gn() - a0 ? (te & 2) === 0 && ru(n, 0) : i0 |= l, iu === Ht && (iu = 0)), Kn(n);
  }
  function py(n, r) {
    r === 0 && (r = v1()), n = Ji(n, r), n !== null && (Fu(n, r), Kn(n));
  }
  function Ix(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), py(n, l);
  }
  function Wx(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, h = n.memoizedState;
        h !== null && (l = h.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      case 22:
        c = n.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    c !== null && c.delete(r), py(n, l);
  }
  function Jx(n, r) {
    return Rd(n, r);
  }
  var Qc = null, lu = null, p0 = false, Kc = false, m0 = false, ea = 0;
  function Kn(n) {
    n !== lu && n.next === null && (lu === null ? Qc = lu = n : lu = lu.next = n), Kc = true, p0 || (p0 = true, e9(t92));
  }
  function Cl(n, r) {
    if (!m0 && Kc) {
      m0 = true;
      do
        for (var l = false, c = Qc; c !== null; ) {
          if (n !== 0) {
            var h = c.pendingLanes;
            if (h === 0) var g = 0;
            else {
              var _ = c.suspendedLanes, M = c.pingedLanes;
              g = (1 << 31 - Je(42 | n) + 1) - 1, g &= h & ~(_ & ~M), g = g & 201326677 ? g & 201326677 | 1 : g ? g | 2 : 0;
            }
            g !== 0 && (l = true, by(c, g));
          } else g = Ht, g = rc(c, c === It ? g : 0), (g & 3) === 0 || Xu(c, g) || (l = true, by(c, g));
          c = c.next;
        }
      while (l);
      m0 = false;
    }
  }
  function t92() {
    Kc = p0 = false;
    var n = 0;
    ea !== 0 && (c9() && (n = ea), ea = 0);
    for (var r = Gn(), l = null, c = Qc; c !== null; ) {
      var h = c.next, g = my(c, r);
      g === 0 ? (c.next = null, l === null ? Qc = h : l.next = h, h === null && (lu = l)) : (l = c, (n !== 0 || (g & 3) !== 0) && (Kc = true)), c = h;
    }
    Cl(n);
  }
  function my(n, r) {
    for (var l = n.suspendedLanes, c = n.pingedLanes, h = n.expirationTimes, g = n.pendingLanes & -62914561; 0 < g; ) {
      var _ = 31 - Je(g), M = 1 << _, R = h[_];
      R === -1 ? ((M & l) === 0 || (M & c) !== 0) && (h[_] = E7(M, r)) : R <= r && (n.expiredLanes |= M), g &= ~M;
    }
    if (r = It, l = Ht, l = rc(n, n === r ? l : 0), c = n.callbackNode, l === 0 || n === r && Wt === 2 || n.cancelPendingCommit !== null) return c !== null && c !== null && Nd(c), n.callbackNode = null, n.callbackPriority = 0;
    if ((l & 3) === 0 || Xu(n, l)) {
      if (r = l & -l, r === n.callbackPriority) return r;
      switch (c !== null && Nd(c), w1(l)) {
        case 2:
        case 8:
          l = m1;
          break;
        case 32:
          l = ec;
          break;
        case 268435456:
          l = g1;
          break;
        default:
          l = ec;
      }
      return c = gy.bind(null, n), l = Rd(l, c), n.callbackPriority = r, n.callbackNode = l, r;
    }
    return c !== null && c !== null && Nd(c), n.callbackPriority = 2, n.callbackNode = null, 2;
  }
  function gy(n, r) {
    var l = n.callbackNode;
    if (uu() && n.callbackNode !== l) return null;
    var c = Ht;
    return c = rc(n, n === It ? c : 0), c === 0 ? null : (iy(n, c, r), my(n, Gn()), n.callbackNode != null && n.callbackNode === l ? gy.bind(null, n) : null);
  }
  function by(n, r) {
    if (uu()) return null;
    iy(n, r, true);
  }
  function e9(n) {
    s9(function() {
      (te & 6) !== 0 ? Rd(p1, n) : n();
    });
  }
  function g0() {
    return ea === 0 && (ea = b1()), ea;
  }
  function vy(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean" ? null : typeof n == "function" ? n : cc("" + n);
  }
  function yy(n, r) {
    var l = r.ownerDocument.createElement("input");
    return l.name = r.name, l.value = r.value, n.id && l.setAttribute("form", n.id), r.parentNode.insertBefore(l, r), n = new FormData(n), l.parentNode.removeChild(l), n;
  }
  function n9(n, r, l, c, h) {
    if (r === "submit" && l && l.stateNode === h) {
      var g = vy((h[Fe] || null).action), _ = c.submitter;
      _ && (r = (r = _[Fe] || null) ? vy(r.formAction) : _.getAttribute("formAction"), r !== null && (g = r, _ = null));
      var M = new hc("action", "action", null, c, h);
      n.push({ event: M, listeners: [{ instance: null, listener: function() {
        if (c.defaultPrevented) {
          if (ea !== 0) {
            var R = _ ? yy(h, _) : new FormData(h);
            Th(l, { pending: true, data: R, method: h.method, action: g }, null, R);
          }
        } else typeof g == "function" && (M.preventDefault(), R = _ ? yy(h, _) : new FormData(h), Th(l, { pending: true, data: R, method: h.method, action: g }, g, R));
      }, currentTarget: h }] });
    }
  }
  for (var b0 = 0; b0 < sb.length; b0++) {
    var v0 = sb[b0], i9 = v0.toLowerCase(), r9 = v0[0].toUpperCase() + v0.slice(1);
    Nn(i9, "on" + r9);
  }
  Nn(ub, "onAnimationEnd"), Nn(lb, "onAnimationIteration"), Nn(ob, "onAnimationStart"), Nn("dblclick", "onDoubleClick"), Nn("focusin", "onFocus"), Nn("focusout", "onBlur"), Nn(wx, "onTransitionRun"), Nn(Sx, "onTransitionStart"), Nn(xx, "onTransitionCancel"), Nn(cb, "onTransitionEnd"), za("onMouseEnter", ["mouseout", "mouseover"]), za("onMouseLeave", ["mouseout", "mouseover"]), za("onPointerEnter", ["pointerout", "pointerover"]), za("onPointerLeave", ["pointerout", "pointerover"]), Lr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Lr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Lr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Lr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Lr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Dl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), a9 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));
  function _y(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var c = n[l], h = c.event;
      c = c.listeners;
      t: {
        var g = void 0;
        if (r) for (var _ = c.length - 1; 0 <= _; _--) {
          var M = c[_], R = M.instance, L = M.currentTarget;
          if (M = M.listener, R !== g && h.isPropagationStopped()) break t;
          g = M, h.currentTarget = L;
          try {
            g(h);
          } catch (J) {
            Uc(J);
          }
          h.currentTarget = null, g = R;
        }
        else for (_ = 0; _ < c.length; _++) {
          if (M = c[_], R = M.instance, L = M.currentTarget, M = M.listener, R !== g && h.isPropagationStopped()) break t;
          g = M, h.currentTarget = L;
          try {
            g(h);
          } catch (J) {
            Uc(J);
          }
          h.currentTarget = null, g = R;
        }
      }
    }
  }
  function Lt(n, r) {
    var l = r[zd];
    l === void 0 && (l = r[zd] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    l.has(c) || (wy(r, n, 2, false), l.add(c));
  }
  function y0(n, r, l) {
    var c = 0;
    r && (c |= 4), wy(l, n, c, r);
  }
  var Pc = "_reactListening" + Math.random().toString(36).slice(2);
  function _0(n) {
    if (!n[Pc]) {
      n[Pc] = true, M1.forEach(function(l) {
        l !== "selectionchange" && (a9.has(l) || y0(l, false, n), y0(l, true, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Pc] || (r[Pc] = true, y0("selectionchange", false, r));
    }
  }
  function wy(n, r, l, c) {
    switch (Gy(r)) {
      case 2:
        var h = R9;
        break;
      case 8:
        h = N9;
        break;
      default:
        h = $0;
    }
    l = h.bind(null, r, l, n), h = void 0, !kd || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = true), c ? h !== void 0 ? n.addEventListener(r, l, { capture: true, passive: h }) : n.addEventListener(r, l, true) : h !== void 0 ? n.addEventListener(r, l, { passive: h }) : n.addEventListener(r, l, false);
  }
  function w0(n, r, l, c, h) {
    var g = c;
    if ((r & 1) === 0 && (r & 2) === 0 && c !== null) t: for (; ; ) {
      if (c === null) return;
      var _ = c.tag;
      if (_ === 3 || _ === 4) {
        var M = c.stateNode.containerInfo;
        if (M === h || M.nodeType === 8 && M.parentNode === h) break;
        if (_ === 4) for (_ = c.return; _ !== null; ) {
          var R = _.tag;
          if ((R === 3 || R === 4) && (R = _.stateNode.containerInfo, R === h || R.nodeType === 8 && R.parentNode === h)) return;
          _ = _.return;
        }
        for (; M !== null; ) {
          if (_ = Ur(M), _ === null) return;
          if (R = _.tag, R === 5 || R === 6 || R === 26 || R === 27) {
            c = g = _;
            continue t;
          }
          M = M.parentNode;
        }
      }
      c = c.return;
    }
    L1(function() {
      var L = g, J = Bd(l), at = [];
      t: {
        var X = fb.get(n);
        if (X !== void 0) {
          var I = hc, bt = n;
          switch (n) {
            case "keypress":
              if (sc(l) === 0) break t;
            case "keydown":
            case "keyup":
              I = W7;
              break;
            case "focusin":
              bt = "focus", I = Fd;
              break;
            case "focusout":
              bt = "blur", I = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              I = Fd;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              I = j1;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = B7;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = ex;
              break;
            case ub:
            case lb:
            case ob:
              I = Y7;
              break;
            case cb:
              I = ix;
              break;
            case "scroll":
            case "scrollend":
              I = V7;
              break;
            case "wheel":
              I = ax;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = X7;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = q1;
              break;
            case "toggle":
            case "beforetoggle":
              I = lx;
          }
          var Mt = (r & 4) !== 0, ie = !Mt && (n === "scroll" || n === "scrollend"), j = Mt ? X !== null ? X + "Capture" : null : X;
          Mt = [];
          for (var U = L, k; U !== null; ) {
            var rt = U;
            if (k = rt.stateNode, rt = rt.tag, rt !== 5 && rt !== 26 && rt !== 27 || k === null || j === null || (rt = Ku(U, j), rt != null && Mt.push(Rl(U, rt, k))), ie) break;
            U = U.return;
          }
          0 < Mt.length && (X = new I(X, bt, null, l, J), at.push({ event: X, listeners: Mt }));
        }
      }
      if ((r & 7) === 0) {
        t: {
          if (X = n === "mouseover" || n === "pointerover", I = n === "mouseout" || n === "pointerout", X && l !== jd && (bt = l.relatedTarget || l.fromElement) && (Ur(bt) || bt[Ra])) break t;
          if ((I || X) && (X = J.window === J ? J : (X = J.ownerDocument) ? X.defaultView || X.parentWindow : window, I ? (bt = l.relatedTarget || l.toElement, I = L, bt = bt ? Ur(bt) : null, bt !== null && (ie = nt(bt), Mt = bt.tag, bt !== ie || Mt !== 5 && Mt !== 27 && Mt !== 6) && (bt = null)) : (I = null, bt = L), I !== bt)) {
            if (Mt = j1, rt = "onMouseLeave", j = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Mt = q1, rt = "onPointerLeave", j = "onPointerEnter", U = "pointer"), ie = I == null ? X : Qu(I), k = bt == null ? X : Qu(bt), X = new Mt(rt, U + "leave", I, l, J), X.target = ie, X.relatedTarget = k, rt = null, Ur(J) === L && (Mt = new Mt(j, U + "enter", bt, l, J), Mt.target = k, Mt.relatedTarget = ie, rt = Mt), ie = rt, I && bt) e: {
              for (Mt = I, j = bt, U = 0, k = Mt; k; k = ou(k)) U++;
              for (k = 0, rt = j; rt; rt = ou(rt)) k++;
              for (; 0 < U - k; ) Mt = ou(Mt), U--;
              for (; 0 < k - U; ) j = ou(j), k--;
              for (; U--; ) {
                if (Mt === j || j !== null && Mt === j.alternate) break e;
                Mt = ou(Mt), j = ou(j);
              }
              Mt = null;
            }
            else Mt = null;
            I !== null && Sy(at, X, I, Mt, false), bt !== null && ie !== null && Sy(at, ie, bt, Mt, true);
          }
        }
        t: {
          if (X = L ? Qu(L) : window, I = X.nodeName && X.nodeName.toLowerCase(), I === "select" || I === "input" && X.type === "file") var gt = K1;
          else if (Z1(X)) if (P1) gt = bx;
          else {
            gt = mx;
            var $t = px;
          }
          else I = X.nodeName, !I || I.toLowerCase() !== "input" || X.type !== "checkbox" && X.type !== "radio" ? L && Vd(L.elementType) && (gt = K1) : gt = gx;
          if (gt && (gt = gt(n, L))) {
            Q1(at, gt, l, J);
            break t;
          }
          $t && $t(n, X, L), n === "focusout" && L && X.type === "number" && L.memoizedProps.value != null && Hd(X, "number", X.value);
        }
        switch ($t = L ? Qu(L) : window, n) {
          case "focusin":
            (Z1($t) || $t.contentEditable === "true") && (Ba = $t, Wd = L, il = null);
            break;
          case "focusout":
            il = Wd = Ba = null;
            break;
          case "mousedown":
            Jd = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jd = false, rb(at, l, J);
            break;
          case "selectionchange":
            if (_x) break;
          case "keydown":
          case "keyup":
            rb(at, l, J);
        }
        var vt;
        if (Qd) t: {
          switch (n) {
            case "compositionstart":
              var St = "onCompositionStart";
              break t;
            case "compositionend":
              St = "onCompositionEnd";
              break t;
            case "compositionupdate":
              St = "onCompositionUpdate";
              break t;
          }
          St = void 0;
        }
        else ja ? X1(n, l) && (St = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (St = "onCompositionStart");
        St && (k1 && l.locale !== "ko" && (ja || St !== "onCompositionStart" ? St === "onCompositionEnd" && ja && (vt = H1()) : (Wi = J, Yd = "value" in Wi ? Wi.value : Wi.textContent, ja = true)), $t = Ic(L, St), 0 < $t.length && (St = new B1(St, n, null, l, J), at.push({ event: St, listeners: $t }), vt ? St.data = vt : (vt = F1(l), vt !== null && (St.data = vt)))), (vt = cx ? fx(n, l) : sx(n, l)) && (St = Ic(L, "onBeforeInput"), 0 < St.length && ($t = new B1("onBeforeInput", "beforeinput", null, l, J), at.push({ event: $t, listeners: St }), $t.data = vt)), n9(at, n, L, l, J);
      }
      _y(at, r);
    });
  }
  function Rl(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Ic(n, r) {
    for (var l = r + "Capture", c = []; n !== null; ) {
      var h = n, g = h.stateNode;
      h = h.tag, h !== 5 && h !== 26 && h !== 27 || g === null || (h = Ku(n, l), h != null && c.unshift(Rl(n, h, g)), h = Ku(n, r), h != null && c.push(Rl(n, h, g))), n = n.return;
    }
    return c;
  }
  function ou(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function Sy(n, r, l, c, h) {
    for (var g = r._reactName, _ = []; l !== null && l !== c; ) {
      var M = l, R = M.alternate, L = M.stateNode;
      if (M = M.tag, R !== null && R === c) break;
      M !== 5 && M !== 26 && M !== 27 || L === null || (R = L, h ? (L = Ku(l, g), L != null && _.unshift(Rl(l, L, R))) : h || (L = Ku(l, g), L != null && _.push(Rl(l, L, R)))), l = l.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var u9 = /\r\n?/g, l9 = /\u0000|\uFFFD/g;
  function xy(n) {
    return (typeof n == "string" ? n : "" + n).replace(u9, `
`).replace(l9, "");
  }
  function My(n, r) {
    return r = xy(r), xy(n) === r;
  }
  function Wc() {
  }
  function Qt(n, r, l, c, h, g) {
    switch (l) {
      case "children":
        typeof c == "string" ? r === "body" || r === "textarea" && c === "" || La(n, c) : (typeof c == "number" || typeof c == "bigint") && r !== "body" && La(n, "" + c);
        break;
      case "className":
        uc(n, "class", c);
        break;
      case "tabIndex":
        uc(n, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        uc(n, l, c);
        break;
      case "style":
        z1(n, c, g);
        break;
      case "data":
        if (r !== "object") {
          uc(n, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (r !== "a" || l !== "href")) {
          n.removeAttribute(l);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          n.removeAttribute(l);
          break;
        }
        c = cc("" + c), n.setAttribute(l, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          n.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof g == "function" && (l === "formAction" ? (r !== "input" && Qt(n, r, "name", h.name, h, null), Qt(n, r, "formEncType", h.formEncType, h, null), Qt(n, r, "formMethod", h.formMethod, h, null), Qt(n, r, "formTarget", h.formTarget, h, null)) : (Qt(n, r, "encType", h.encType, h, null), Qt(n, r, "method", h.method, h, null), Qt(n, r, "target", h.target, h, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          n.removeAttribute(l);
          break;
        }
        c = cc("" + c), n.setAttribute(l, c);
        break;
      case "onClick":
        c != null && (n.onclick = Wc);
        break;
      case "onScroll":
        c != null && Lt("scroll", n);
        break;
      case "onScrollEnd":
        c != null && Lt("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c)) throw Error(a(61));
          if (l = c.__html, l != null) {
            if (h.children != null) throw Error(a(60));
            n.innerHTML = l;
          }
        }
        break;
      case "multiple":
        n.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        n.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          n.removeAttribute("xlink:href");
          break;
        }
        l = cc("" + c), n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? n.setAttribute(l, "" + c) : n.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? n.setAttribute(l, "") : n.removeAttribute(l);
        break;
      case "capture":
      case "download":
        c === true ? n.setAttribute(l, "") : c !== false && c != null && typeof c != "function" && typeof c != "symbol" ? n.setAttribute(l, c) : n.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? n.setAttribute(l, c) : n.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? n.removeAttribute(l) : n.setAttribute(l, c);
        break;
      case "popover":
        Lt("beforetoggle", n), Lt("toggle", n), ac(n, "popover", c);
        break;
      case "xlinkActuate":
        pi(n, "http://www.w3.org/1999/xlink", "xlink:actuate", c);
        break;
      case "xlinkArcrole":
        pi(n, "http://www.w3.org/1999/xlink", "xlink:arcrole", c);
        break;
      case "xlinkRole":
        pi(n, "http://www.w3.org/1999/xlink", "xlink:role", c);
        break;
      case "xlinkShow":
        pi(n, "http://www.w3.org/1999/xlink", "xlink:show", c);
        break;
      case "xlinkTitle":
        pi(n, "http://www.w3.org/1999/xlink", "xlink:title", c);
        break;
      case "xlinkType":
        pi(n, "http://www.w3.org/1999/xlink", "xlink:type", c);
        break;
      case "xmlBase":
        pi(n, "http://www.w3.org/XML/1998/namespace", "xml:base", c);
        break;
      case "xmlLang":
        pi(n, "http://www.w3.org/XML/1998/namespace", "xml:lang", c);
        break;
      case "xmlSpace":
        pi(n, "http://www.w3.org/XML/1998/namespace", "xml:space", c);
        break;
      case "is":
        ac(n, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = L7.get(l) || l, ac(n, l, c));
    }
  }
  function S0(n, r, l, c, h, g) {
    switch (l) {
      case "style":
        z1(n, c, g);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c)) throw Error(a(61));
          if (l = c.__html, l != null) {
            if (h.children != null) throw Error(a(60));
            n.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof c == "string" ? La(n, c) : (typeof c == "number" || typeof c == "bigint") && La(n, "" + c);
        break;
      case "onScroll":
        c != null && Lt("scroll", n);
        break;
      case "onScrollEnd":
        c != null && Lt("scrollend", n);
        break;
      case "onClick":
        c != null && (n.onclick = Wc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!T1.hasOwnProperty(l)) t: {
          if (l[0] === "o" && l[1] === "n" && (h = l.endsWith("Capture"), r = l.slice(2, h ? l.length - 7 : void 0), g = n[Fe] || null, g = g != null ? g[l] : null, typeof g == "function" && n.removeEventListener(r, g, h), typeof c == "function")) {
            typeof g != "function" && g !== null && (l in n ? n[l] = null : n.hasAttribute(l) && n.removeAttribute(l)), n.addEventListener(r, c, h);
            break t;
          }
          l in n ? n[l] = c : c === true ? n.setAttribute(l, "") : ac(n, l, c);
        }
    }
  }
  function Oe(n, r, l) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Lt("error", n), Lt("load", n);
        var c = false, h = false, g;
        for (g in l) if (l.hasOwnProperty(g)) {
          var _ = l[g];
          if (_ != null) switch (g) {
            case "src":
              c = true;
              break;
            case "srcSet":
              h = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(a(137, r));
            default:
              Qt(n, r, g, _, l, null);
          }
        }
        h && Qt(n, r, "srcSet", l.srcSet, l, null), c && Qt(n, r, "src", l.src, l, null);
        return;
      case "input":
        Lt("invalid", n);
        var M = g = _ = h = null, R = null, L = null;
        for (c in l) if (l.hasOwnProperty(c)) {
          var J = l[c];
          if (J != null) switch (c) {
            case "name":
              h = J;
              break;
            case "type":
              _ = J;
              break;
            case "checked":
              R = J;
              break;
            case "defaultChecked":
              L = J;
              break;
            case "value":
              g = J;
              break;
            case "defaultValue":
              M = J;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (J != null) throw Error(a(137, r));
              break;
            default:
              Qt(n, r, c, J, l, null);
          }
        }
        D1(n, g, M, R, L, _, h, false), lc(n);
        return;
      case "select":
        Lt("invalid", n), c = _ = g = null;
        for (h in l) if (l.hasOwnProperty(h) && (M = l[h], M != null)) switch (h) {
          case "value":
            g = M;
            break;
          case "defaultValue":
            _ = M;
            break;
          case "multiple":
            c = M;
          default:
            Qt(n, r, h, M, l, null);
        }
        r = g, l = _, n.multiple = !!c, r != null ? Ua(n, !!c, r, false) : l != null && Ua(n, !!c, l, true);
        return;
      case "textarea":
        Lt("invalid", n), g = h = c = null;
        for (_ in l) if (l.hasOwnProperty(_) && (M = l[_], M != null)) switch (_) {
          case "value":
            c = M;
            break;
          case "defaultValue":
            h = M;
            break;
          case "children":
            g = M;
            break;
          case "dangerouslySetInnerHTML":
            if (M != null) throw Error(a(91));
            break;
          default:
            Qt(n, r, _, M, l, null);
        }
        N1(n, c, h, g), lc(n);
        return;
      case "option":
        for (R in l) if (l.hasOwnProperty(R) && (c = l[R], c != null)) switch (R) {
          case "selected":
            n.selected = c && typeof c != "function" && typeof c != "symbol";
            break;
          default:
            Qt(n, r, R, c, l, null);
        }
        return;
      case "dialog":
        Lt("cancel", n), Lt("close", n);
        break;
      case "iframe":
      case "object":
        Lt("load", n);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Dl.length; c++) Lt(Dl[c], n);
        break;
      case "image":
        Lt("error", n), Lt("load", n);
        break;
      case "details":
        Lt("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        Lt("error", n), Lt("load", n);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (L in l) if (l.hasOwnProperty(L) && (c = l[L], c != null)) switch (L) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(a(137, r));
          default:
            Qt(n, r, L, c, l, null);
        }
        return;
      default:
        if (Vd(r)) {
          for (J in l) l.hasOwnProperty(J) && (c = l[J], c !== void 0 && S0(n, r, J, c, l, void 0));
          return;
        }
    }
    for (M in l) l.hasOwnProperty(M) && (c = l[M], c != null && Qt(n, r, M, c, l, null));
  }
  function o9(n, r, l, c) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var h = null, g = null, _ = null, M = null, R = null, L = null, J = null;
        for (I in l) {
          var at = l[I];
          if (l.hasOwnProperty(I) && at != null) switch (I) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              R = at;
            default:
              c.hasOwnProperty(I) || Qt(n, r, I, null, c, at);
          }
        }
        for (var X in c) {
          var I = c[X];
          if (at = l[X], c.hasOwnProperty(X) && (I != null || at != null)) switch (X) {
            case "type":
              g = I;
              break;
            case "name":
              h = I;
              break;
            case "checked":
              L = I;
              break;
            case "defaultChecked":
              J = I;
              break;
            case "value":
              _ = I;
              break;
            case "defaultValue":
              M = I;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (I != null) throw Error(a(137, r));
              break;
            default:
              I !== at && Qt(n, r, X, I, c, at);
          }
        }
        Ld(n, _, M, R, L, J, g, h);
        return;
      case "select":
        I = _ = M = X = null;
        for (g in l) if (R = l[g], l.hasOwnProperty(g) && R != null) switch (g) {
          case "value":
            break;
          case "multiple":
            I = R;
          default:
            c.hasOwnProperty(g) || Qt(n, r, g, null, c, R);
        }
        for (h in c) if (g = c[h], R = l[h], c.hasOwnProperty(h) && (g != null || R != null)) switch (h) {
          case "value":
            X = g;
            break;
          case "defaultValue":
            M = g;
            break;
          case "multiple":
            _ = g;
          default:
            g !== R && Qt(n, r, h, g, c, R);
        }
        r = M, l = _, c = I, X != null ? Ua(n, !!l, X, false) : !!c != !!l && (r != null ? Ua(n, !!l, r, true) : Ua(n, !!l, l ? [] : "", false));
        return;
      case "textarea":
        I = X = null;
        for (M in l) if (h = l[M], l.hasOwnProperty(M) && h != null && !c.hasOwnProperty(M)) switch (M) {
          case "value":
            break;
          case "children":
            break;
          default:
            Qt(n, r, M, null, c, h);
        }
        for (_ in c) if (h = c[_], g = l[_], c.hasOwnProperty(_) && (h != null || g != null)) switch (_) {
          case "value":
            X = h;
            break;
          case "defaultValue":
            I = h;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (h != null) throw Error(a(91));
            break;
          default:
            h !== g && Qt(n, r, _, h, c, g);
        }
        R1(n, X, I);
        return;
      case "option":
        for (var bt in l) if (X = l[bt], l.hasOwnProperty(bt) && X != null && !c.hasOwnProperty(bt)) switch (bt) {
          case "selected":
            n.selected = false;
            break;
          default:
            Qt(n, r, bt, null, c, X);
        }
        for (R in c) if (X = c[R], I = l[R], c.hasOwnProperty(R) && X !== I && (X != null || I != null)) switch (R) {
          case "selected":
            n.selected = X && typeof X != "function" && typeof X != "symbol";
            break;
          default:
            Qt(n, r, R, X, c, I);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Mt in l) X = l[Mt], l.hasOwnProperty(Mt) && X != null && !c.hasOwnProperty(Mt) && Qt(n, r, Mt, null, c, X);
        for (L in c) if (X = c[L], I = l[L], c.hasOwnProperty(L) && X !== I && (X != null || I != null)) switch (L) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (X != null) throw Error(a(137, r));
            break;
          default:
            Qt(n, r, L, X, c, I);
        }
        return;
      default:
        if (Vd(r)) {
          for (var ie in l) X = l[ie], l.hasOwnProperty(ie) && X !== void 0 && !c.hasOwnProperty(ie) && S0(n, r, ie, void 0, c, X);
          for (J in c) X = c[J], I = l[J], !c.hasOwnProperty(J) || X === I || X === void 0 && I === void 0 || S0(n, r, J, X, c, I);
          return;
        }
    }
    for (var j in l) X = l[j], l.hasOwnProperty(j) && X != null && !c.hasOwnProperty(j) && Qt(n, r, j, null, c, X);
    for (at in c) X = c[at], I = l[at], !c.hasOwnProperty(at) || X === I || X == null && I == null || Qt(n, r, at, X, c, I);
  }
  var x0 = null, M0 = null;
  function Jc(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function Ty(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ey(n, r) {
    if (n === 0) switch (r) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return n === 1 && r === "foreignObject" ? 0 : n;
  }
  function T0(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.children == "bigint" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var E0 = null;
  function c9() {
    var n = window.event;
    return n && n.type === "popstate" ? n === E0 ? false : (E0 = n, true) : (E0 = null, false);
  }
  var Ay = typeof setTimeout == "function" ? setTimeout : void 0, f9 = typeof clearTimeout == "function" ? clearTimeout : void 0, Oy = typeof Promise == "function" ? Promise : void 0, s9 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Oy < "u" ? function(n) {
    return Oy.resolve(null).then(n).catch(d9);
  } : Ay;
  function d9(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function A0(n, r) {
    var l = r, c = 0;
    do {
      var h = l.nextSibling;
      if (n.removeChild(l), h && h.nodeType === 8) if (l = h.data, l === "/$") {
        if (c === 0) {
          n.removeChild(h), jl(r);
          return;
        }
        c--;
      } else l !== "$" && l !== "$?" && l !== "$!" || c++;
      l = h;
    } while (l);
    jl(r);
  }
  function O0(n) {
    var r = n.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var l = r;
      switch (r = r.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          O0(l), Ud(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(l);
    }
  }
  function h9(n, r, l, c) {
    for (; n.nodeType === 1; ) {
      var h = l;
      if (n.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!c && (n.nodeName !== "INPUT" || n.type !== "hidden")) break;
      } else if (c) {
        if (!n[Zu]) switch (r) {
          case "meta":
            if (!n.hasAttribute("itemprop")) break;
            return n;
          case "link":
            if (g = n.getAttribute("rel"), g === "stylesheet" && n.hasAttribute("data-precedence")) break;
            if (g !== h.rel || n.getAttribute("href") !== (h.href == null ? null : h.href) || n.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin) || n.getAttribute("title") !== (h.title == null ? null : h.title)) break;
            return n;
          case "style":
            if (n.hasAttribute("data-precedence")) break;
            return n;
          case "script":
            if (g = n.getAttribute("src"), (g !== (h.src == null ? null : h.src) || n.getAttribute("type") !== (h.type == null ? null : h.type) || n.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin)) && g && n.hasAttribute("async") && !n.hasAttribute("itemprop")) break;
            return n;
          default:
            return n;
        }
      } else if (r === "input" && n.type === "hidden") {
        var g = h.name == null ? null : "" + h.name;
        if (h.type === "hidden" && n.getAttribute("name") === g) return n;
      } else return n;
      if (n = Un(n.nextSibling), n === null) break;
    }
    return null;
  }
  function p9(n, r, l) {
    if (r === "") return null;
    for (; n.nodeType !== 3; ) if ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") && !l || (n = Un(n.nextSibling), n === null)) return null;
    return n;
  }
  function Un(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?" || r === "F!" || r === "F") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Cy(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function Dy(n, r, l) {
    switch (r = Jc(l), n) {
      case "html":
        if (n = r.documentElement, !n) throw Error(a(452));
        return n;
      case "head":
        if (n = r.head, !n) throw Error(a(453));
        return n;
      case "body":
        if (n = r.body, !n) throw Error(a(454));
        return n;
      default:
        throw Error(a(451));
    }
  }
  var Sn = /* @__PURE__ */ new Map(), Ry = /* @__PURE__ */ new Set();
  function tf(n) {
    return typeof n.getRootNode == "function" ? n.getRootNode() : n.ownerDocument;
  }
  var Ci = tt.d;
  tt.d = { f: m9, r: g9, D: b9, C: v9, L: y9, m: _9, X: S9, S: w9, M: x9 };
  function m9() {
    var n = Ci.f(), r = Fc();
    return n || r;
  }
  function g9(n) {
    var r = Na(n);
    r !== null && r.tag === 5 && r.type === "form" ? rv(r) : Ci.r(n);
  }
  var cu = typeof document > "u" ? null : document;
  function Ny(n, r, l) {
    var c = cu;
    if (c && typeof r == "string" && r) {
      var h = dn(r);
      h = 'link[rel="' + n + '"][href="' + h + '"]', typeof l == "string" && (h += '[crossorigin="' + l + '"]'), Ry.has(h) || (Ry.add(h), n = { rel: n, crossOrigin: l, href: r }, c.querySelector(h) === null && (r = c.createElement("link"), Oe(r, "link", n), ve(r), c.head.appendChild(r)));
    }
  }
  function b9(n) {
    Ci.D(n), Ny("dns-prefetch", n, null);
  }
  function v9(n, r) {
    Ci.C(n, r), Ny("preconnect", n, r);
  }
  function y9(n, r, l) {
    Ci.L(n, r, l);
    var c = cu;
    if (c && n && r) {
      var h = 'link[rel="preload"][as="' + dn(r) + '"]';
      r === "image" && l && l.imageSrcSet ? (h += '[imagesrcset="' + dn(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (h += '[imagesizes="' + dn(l.imageSizes) + '"]')) : h += '[href="' + dn(n) + '"]';
      var g = h;
      switch (r) {
        case "style":
          g = fu(n);
          break;
        case "script":
          g = su(n);
      }
      Sn.has(g) || (n = G({ rel: "preload", href: r === "image" && l && l.imageSrcSet ? void 0 : n, as: r }, l), Sn.set(g, n), c.querySelector(h) !== null || r === "style" && c.querySelector(Nl(g)) || r === "script" && c.querySelector($l(g)) || (r = c.createElement("link"), Oe(r, "link", n), ve(r), c.head.appendChild(r)));
    }
  }
  function _9(n, r) {
    Ci.m(n, r);
    var l = cu;
    if (l && n) {
      var c = r && typeof r.as == "string" ? r.as : "script", h = 'link[rel="modulepreload"][as="' + dn(c) + '"][href="' + dn(n) + '"]', g = h;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = su(n);
      }
      if (!Sn.has(g) && (n = G({ rel: "modulepreload", href: n }, r), Sn.set(g, n), l.querySelector(h) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector($l(g))) return;
        }
        c = l.createElement("link"), Oe(c, "link", n), ve(c), l.head.appendChild(c);
      }
    }
  }
  function w9(n, r, l) {
    Ci.S(n, r, l);
    var c = cu;
    if (c && n) {
      var h = $a(c).hoistableStyles, g = fu(n);
      r = r || "default";
      var _ = h.get(g);
      if (!_) {
        var M = { loading: 0, preload: null };
        if (_ = c.querySelector(Nl(g))) M.loading = 5;
        else {
          n = G({ rel: "stylesheet", href: n, "data-precedence": r }, l), (l = Sn.get(g)) && C0(n, l);
          var R = _ = c.createElement("link");
          ve(R), Oe(R, "link", n), R._p = new Promise(function(L, J) {
            R.onload = L, R.onerror = J;
          }), R.addEventListener("load", function() {
            M.loading |= 1;
          }), R.addEventListener("error", function() {
            M.loading |= 2;
          }), M.loading |= 4, ef(_, r, c);
        }
        _ = { type: "stylesheet", instance: _, count: 1, state: M }, h.set(g, _);
      }
    }
  }
  function S9(n, r) {
    Ci.X(n, r);
    var l = cu;
    if (l && n) {
      var c = $a(l).hoistableScripts, h = su(n), g = c.get(h);
      g || (g = l.querySelector($l(h)), g || (n = G({ src: n, async: true }, r), (r = Sn.get(h)) && D0(n, r), g = l.createElement("script"), ve(g), Oe(g, "link", n), l.head.appendChild(g)), g = { type: "script", instance: g, count: 1, state: null }, c.set(h, g));
    }
  }
  function x9(n, r) {
    Ci.M(n, r);
    var l = cu;
    if (l && n) {
      var c = $a(l).hoistableScripts, h = su(n), g = c.get(h);
      g || (g = l.querySelector($l(h)), g || (n = G({ src: n, async: true, type: "module" }, r), (r = Sn.get(h)) && D0(n, r), g = l.createElement("script"), ve(g), Oe(g, "link", n), l.head.appendChild(g)), g = { type: "script", instance: g, count: 1, state: null }, c.set(h, g));
    }
  }
  function $y(n, r, l, c) {
    var h = (h = Nt.current) ? tf(h) : null;
    if (!h) throw Error(a(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (r = fu(l.href), l = $a(h).hoistableStyles, c = l.get(r), c || (c = { type: "style", instance: null, count: 0, state: null }, l.set(r, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          n = fu(l.href);
          var g = $a(h).hoistableStyles, _ = g.get(n);
          if (_ || (h = h.ownerDocument || h, _ = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, g.set(n, _), (g = h.querySelector(Nl(n))) && !g._p && (_.instance = g, _.state.loading = 5), Sn.has(n) || (l = { rel: "preload", as: "style", href: l.href, crossOrigin: l.crossOrigin, integrity: l.integrity, media: l.media, hrefLang: l.hrefLang, referrerPolicy: l.referrerPolicy }, Sn.set(n, l), g || M9(h, n, l, _.state))), r && c === null) throw Error(a(528, ""));
          return _;
        }
        if (r && c !== null) throw Error(a(529, ""));
        return null;
      case "script":
        return r = l.async, l = l.src, typeof l == "string" && r && typeof r != "function" && typeof r != "symbol" ? (r = su(l), l = $a(h).hoistableScripts, c = l.get(r), c || (c = { type: "script", instance: null, count: 0, state: null }, l.set(r, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(a(444, n));
    }
  }
  function fu(n) {
    return 'href="' + dn(n) + '"';
  }
  function Nl(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function zy(n) {
    return G({}, n, { "data-precedence": n.precedence, precedence: null });
  }
  function M9(n, r, l, c) {
    n.querySelector('link[rel="preload"][as="style"][' + r + "]") ? c.loading = 1 : (r = n.createElement("link"), c.preload = r, r.addEventListener("load", function() {
      return c.loading |= 1;
    }), r.addEventListener("error", function() {
      return c.loading |= 2;
    }), Oe(r, "link", l), ve(r), n.head.appendChild(r));
  }
  function su(n) {
    return '[src="' + dn(n) + '"]';
  }
  function $l(n) {
    return "script[async]" + n;
  }
  function Uy(n, r, l) {
    if (r.count++, r.instance === null) switch (r.type) {
      case "style":
        var c = n.querySelector('style[data-href~="' + dn(l.href) + '"]');
        if (c) return r.instance = c, ve(c), c;
        var h = G({}, l, { "data-href": l.href, "data-precedence": l.precedence, href: null, precedence: null });
        return c = (n.ownerDocument || n).createElement("style"), ve(c), Oe(c, "style", h), ef(c, l.precedence, n), r.instance = c;
      case "stylesheet":
        h = fu(l.href);
        var g = n.querySelector(Nl(h));
        if (g) return r.state.loading |= 4, r.instance = g, ve(g), g;
        c = zy(l), (h = Sn.get(h)) && C0(c, h), g = (n.ownerDocument || n).createElement("link"), ve(g);
        var _ = g;
        return _._p = new Promise(function(M, R) {
          _.onload = M, _.onerror = R;
        }), Oe(g, "link", c), r.state.loading |= 4, ef(g, l.precedence, n), r.instance = g;
      case "script":
        return g = su(l.src), (h = n.querySelector($l(g))) ? (r.instance = h, ve(h), h) : (c = l, (h = Sn.get(g)) && (c = G({}, l), D0(c, h)), n = n.ownerDocument || n, h = n.createElement("script"), ve(h), Oe(h, "link", c), n.head.appendChild(h), r.instance = h);
      case "void":
        return null;
      default:
        throw Error(a(443, r.type));
    }
    else r.type === "stylesheet" && (r.state.loading & 4) === 0 && (c = r.instance, r.state.loading |= 4, ef(c, l.precedence, n));
    return r.instance;
  }
  function ef(n, r, l) {
    for (var c = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), h = c.length ? c[c.length - 1] : null, g = h, _ = 0; _ < c.length; _++) {
      var M = c[_];
      if (M.dataset.precedence === r) g = M;
      else if (g !== h) break;
    }
    g ? g.parentNode.insertBefore(n, g.nextSibling) : (r = l.nodeType === 9 ? l.head : l, r.insertBefore(n, r.firstChild));
  }
  function C0(n, r) {
    n.crossOrigin == null && (n.crossOrigin = r.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy), n.title == null && (n.title = r.title);
  }
  function D0(n, r) {
    n.crossOrigin == null && (n.crossOrigin = r.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = r.referrerPolicy), n.integrity == null && (n.integrity = r.integrity);
  }
  var nf = null;
  function Ly(n, r, l) {
    if (nf === null) {
      var c = /* @__PURE__ */ new Map(), h = nf = /* @__PURE__ */ new Map();
      h.set(l, c);
    } else h = nf, c = h.get(l), c || (c = /* @__PURE__ */ new Map(), h.set(l, c));
    if (c.has(n)) return c;
    for (c.set(n, null), l = l.getElementsByTagName(n), h = 0; h < l.length; h++) {
      var g = l[h];
      if (!(g[Zu] || g[Re] || n === "link" && g.getAttribute("rel") === "stylesheet") && g.namespaceURI !== "http://www.w3.org/2000/svg") {
        var _ = g.getAttribute(r) || "";
        _ = n + _;
        var M = c.get(_);
        M ? M.push(g) : c.set(_, [g]);
      }
    }
    return c;
  }
  function Hy(n, r, l) {
    n = n.ownerDocument || n, n.head.insertBefore(l, r === "title" ? n.querySelector("head > title") : null);
  }
  function T9(n, r, l) {
    if (l === 1 || r.itemProp != null) return false;
    switch (n) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof r.precedence != "string" || typeof r.href != "string" || r.href === "") break;
        return true;
      case "link":
        if (typeof r.rel != "string" || typeof r.href != "string" || r.href === "" || r.onLoad || r.onError) break;
        switch (r.rel) {
          case "stylesheet":
            return n = r.disabled, typeof r.precedence == "string" && n == null;
          default:
            return true;
        }
      case "script":
        if (r.async && typeof r.async != "function" && typeof r.async != "symbol" && !r.onLoad && !r.onError && r.src && typeof r.src == "string") return true;
    }
    return false;
  }
  function Vy(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  var zl = null;
  function E9() {
  }
  function A9(n, r, l) {
    if (zl === null) throw Error(a(475));
    var c = zl;
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== false) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var h = fu(l.href), g = n.querySelector(Nl(h));
        if (g) {
          n = g._p, n !== null && typeof n == "object" && typeof n.then == "function" && (c.count++, c = rf.bind(c), n.then(c, c)), r.state.loading |= 4, r.instance = g, ve(g);
          return;
        }
        g = n.ownerDocument || n, l = zy(l), (h = Sn.get(h)) && C0(l, h), g = g.createElement("link"), ve(g);
        var _ = g;
        _._p = new Promise(function(M, R) {
          _.onload = M, _.onerror = R;
        }), Oe(g, "link", l), r.instance = g;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (c.count++, r = rf.bind(c), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  function O9() {
    if (zl === null) throw Error(a(475));
    var n = zl;
    return n.stylesheets && n.count === 0 && R0(n, n.stylesheets), 0 < n.count ? function(r) {
      var l = setTimeout(function() {
        if (n.stylesheets && R0(n, n.stylesheets), n.unsuspend) {
          var c = n.unsuspend;
          n.unsuspend = null, c();
        }
      }, 6e4);
      return n.unsuspend = r, function() {
        n.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function rf() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) R0(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        this.unsuspend = null, n();
      }
    }
  }
  var af = null;
  function R0(n, r) {
    n.stylesheets = null, n.unsuspend !== null && (n.count++, af = /* @__PURE__ */ new Map(), r.forEach(C9, n), af = null, rf.call(n));
  }
  function C9(n, r) {
    if (!(r.state.loading & 4)) {
      var l = af.get(n);
      if (l) var c = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), af.set(n, l);
        for (var h = n.querySelectorAll("link[data-precedence],style[data-precedence]"), g = 0; g < h.length; g++) {
          var _ = h[g];
          (_.nodeName === "LINK" || _.getAttribute("media") !== "not all") && (l.set(_.dataset.precedence, _), c = _);
        }
        c && l.set(null, c);
      }
      h = r.instance, _ = h.getAttribute("data-precedence"), g = l.get(_) || c, g === c && l.set(null, h), l.set(_, h), this.count++, c = rf.bind(this), h.addEventListener("load", c), h.addEventListener("error", c), g ? g.parentNode.insertBefore(h, g.nextSibling) : (n = n.nodeType === 9 ? n.head : n, n.insertBefore(h, n.firstChild)), r.state.loading |= 4;
    }
  }
  var Ul = { $$typeof: y, Provider: null, Consumer: null, _currentValue: ht, _currentValue2: ht, _threadCount: 0 };
  function D9(n, r, l, c, h, g, _, M) {
    this.tag = 1, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $d(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $d(0), this.hiddenUpdates = $d(null), this.identifierPrefix = c, this.onUncaughtError = h, this.onCaughtError = g, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = M, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jy(n, r, l, c, h, g, _, M, R, L, J, at) {
    return n = new D9(n, r, l, _, M, R, L, at), r = 1, g === true && (r |= 24), g = _n(3, null, null, r), n.current = g, g.stateNode = n, r = ch(), r.refCount++, n.pooledCache = r, r.refCount++, g.memoizedState = { element: c, isDehydrated: l, cache: r }, Yh(g), n;
  }
  function By(n) {
    return n ? (n = Ya, n) : Ya;
  }
  function qy(n, r, l, c, h, g) {
    h = By(h), c.context === null ? c.context = h : c.pendingContext = h, c = ur(r), c.payload = { element: l }, g = g === void 0 ? null : g, g !== null && (c.callback = g), l = lr(n, c, r), l !== null && (ke(l, n, r), vl(l, n, r));
  }
  function ky(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function N0(n, r) {
    ky(n, r), (n = n.alternate) && ky(n, r);
  }
  function Yy(n) {
    if (n.tag === 13) {
      var r = Ji(n, 67108864);
      r !== null && ke(r, n, 67108864), N0(n, 67108864);
    }
  }
  var uf = true;
  function R9(n, r, l, c) {
    var h = z.T;
    z.T = null;
    var g = tt.p;
    try {
      tt.p = 2, $0(n, r, l, c);
    } finally {
      tt.p = g, z.T = h;
    }
  }
  function N9(n, r, l, c) {
    var h = z.T;
    z.T = null;
    var g = tt.p;
    try {
      tt.p = 8, $0(n, r, l, c);
    } finally {
      tt.p = g, z.T = h;
    }
  }
  function $0(n, r, l, c) {
    if (uf) {
      var h = z0(c);
      if (h === null) w0(n, r, c, lf, l), Xy(n, c);
      else if (z9(h, n, r, l, c)) c.stopPropagation();
      else if (Xy(n, c), r & 4 && -1 < $9.indexOf(n)) {
        for (; h !== null; ) {
          var g = Na(h);
          if (g !== null) switch (g.tag) {
            case 3:
              if (g = g.stateNode, g.current.memoizedState.isDehydrated) {
                var _ = zr(g.pendingLanes);
                if (_ !== 0) {
                  var M = g;
                  for (M.pendingLanes |= 2, M.entangledLanes |= 2; _; ) {
                    var R = 1 << 31 - Je(_);
                    M.entanglements[1] |= R, _ &= ~R;
                  }
                  Kn(g), (te & 6) === 0 && (Yc = Gn() + 500, Cl(0));
                }
              }
              break;
            case 13:
              M = Ji(g, 2), M !== null && ke(M, g, 2), Fc(), N0(g, 2);
          }
          if (g = z0(c), g === null && w0(n, r, c, lf, l), g === h) break;
          h = g;
        }
        h !== null && c.stopPropagation();
      } else w0(n, r, c, null, l);
    }
  }
  function z0(n) {
    return n = Bd(n), U0(n);
  }
  var lf = null;
  function U0(n) {
    if (lf = null, n = Ur(n), n !== null) {
      var r = nt(n);
      if (r === null) n = null;
      else {
        var l = r.tag;
        if (l === 13) {
          if (n = P(r), n !== null) return n;
          n = null;
        } else if (l === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
          n = null;
        } else r !== n && (n = null);
      }
    }
    return lf = n, null;
  }
  function Gy(n) {
    switch (n) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (v7()) {
          case p1:
            return 2;
          case m1:
            return 8;
          case ec:
          case y7:
            return 32;
          case g1:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var L0 = false, pr = null, mr = null, gr = null, Ll = /* @__PURE__ */ new Map(), Hl = /* @__PURE__ */ new Map(), br = [], $9 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Xy(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        pr = null;
        break;
      case "dragenter":
      case "dragleave":
        mr = null;
        break;
      case "mouseover":
      case "mouseout":
        gr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ll.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hl.delete(r.pointerId);
    }
  }
  function Vl(n, r, l, c, h, g) {
    return n === null || n.nativeEvent !== g ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: c, nativeEvent: g, targetContainers: [h] }, r !== null && (r = Na(r), r !== null && Yy(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function z9(n, r, l, c, h) {
    switch (r) {
      case "focusin":
        return pr = Vl(pr, n, r, l, c, h), true;
      case "dragenter":
        return mr = Vl(mr, n, r, l, c, h), true;
      case "mouseover":
        return gr = Vl(gr, n, r, l, c, h), true;
      case "pointerover":
        var g = h.pointerId;
        return Ll.set(g, Vl(Ll.get(g) || null, n, r, l, c, h)), true;
      case "gotpointercapture":
        return g = h.pointerId, Hl.set(g, Vl(Hl.get(g) || null, n, r, l, c, h)), true;
    }
    return false;
  }
  function Fy(n) {
    var r = Ur(n.target);
    if (r !== null) {
      var l = nt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = P(l), r !== null) {
            n.blockedOn = r, O7(n.priority, function() {
              if (l.tag === 13) {
                var c = an(), h = Ji(l, c);
                h !== null && ke(h, l, c), N0(l, c);
              }
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function of(n) {
    if (n.blockedOn !== null) return false;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = z0(n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var c = new l.constructor(l.type, l);
        jd = c, l.target.dispatchEvent(c), jd = null;
      } else return r = Na(l), r !== null && Yy(r), n.blockedOn = l, false;
      r.shift();
    }
    return true;
  }
  function Zy(n, r, l) {
    of(n) && l.delete(r);
  }
  function U9() {
    L0 = false, pr !== null && of(pr) && (pr = null), mr !== null && of(mr) && (mr = null), gr !== null && of(gr) && (gr = null), Ll.forEach(Zy), Hl.forEach(Zy);
  }
  function cf(n, r) {
    n.blockedOn === r && (n.blockedOn = null, L0 || (L0 = true, t14.unstable_scheduleCallback(t14.unstable_NormalPriority, U9)));
  }
  var ff = null;
  function Qy(n) {
    ff !== n && (ff = n, t14.unstable_scheduleCallback(t14.unstable_NormalPriority, function() {
      ff === n && (ff = null);
      for (var r = 0; r < n.length; r += 3) {
        var l = n[r], c = n[r + 1], h = n[r + 2];
        if (typeof c != "function") {
          if (U0(c || l) === null) continue;
          break;
        }
        var g = Na(l);
        g !== null && (n.splice(r, 3), r -= 3, Th(g, { pending: true, data: h, method: l.method, action: c }, c, h));
      }
    }));
  }
  function jl(n) {
    function r(R) {
      return cf(R, n);
    }
    pr !== null && cf(pr, n), mr !== null && cf(mr, n), gr !== null && cf(gr, n), Ll.forEach(r), Hl.forEach(r);
    for (var l = 0; l < br.length; l++) {
      var c = br[l];
      c.blockedOn === n && (c.blockedOn = null);
    }
    for (; 0 < br.length && (l = br[0], l.blockedOn === null); ) Fy(l), l.blockedOn === null && br.shift();
    if (l = (n.ownerDocument || n).$$reactFormReplay, l != null) for (c = 0; c < l.length; c += 3) {
      var h = l[c], g = l[c + 1], _ = h[Fe] || null;
      if (typeof g == "function") _ || Qy(l);
      else if (_) {
        var M = null;
        if (g && g.hasAttribute("formAction")) {
          if (h = g, _ = g[Fe] || null) M = _.formAction;
          else if (U0(h) !== null) continue;
        } else M = _.action;
        typeof M == "function" ? l[c + 1] = M : (l.splice(c, 3), c -= 3), Qy(l);
      }
    }
  }
  function H0(n) {
    this._internalRoot = n;
  }
  sf.prototype.render = H0.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(a(409));
    var l = r.current, c = an();
    qy(l, c, n, r, null, null);
  }, sf.prototype.unmount = H0.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      n.tag === 0 && uu(), qy(n.current, 2, null, n, null, null), Fc(), r[Ra] = null;
    }
  };
  function sf(n) {
    this._internalRoot = n;
  }
  sf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = S1();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < br.length && r !== 0 && r < br[l].priority; l++) ;
      br.splice(l, 0, n), l === 0 && Fy(n);
    }
  };
  var Ky = e.version;
  if (Ky !== "19.0.0") throw Error(a(527, Ky, "19.0.0"));
  tt.findDOMNode = function(n) {
    var r = n._reactInternals;
    if (r === void 0) throw typeof n.render == "function" ? Error(a(188)) : (n = Object.keys(n).join(","), Error(a(268, n)));
    return n = B(r), n = n !== null ? Q(n) : null, n = n === null ? null : n.stateNode, n;
  };
  var L9 = { bundleType: 0, version: "19.0.0", rendererPackageName: "react-dom", currentDispatcherRef: z, findFiberByHostInstance: Ur, reconcilerVersion: "19.0.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var df = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!df.isDisabled && df.supportsFiber) try {
      Gu = df.inject(L9), We = df;
    } catch {
    }
  }
  return ql.createRoot = function(n, r) {
    if (!u(n)) throw Error(a(299));
    var l = false, c = "", h = dv, g = hv, _ = pv, M = null;
    return r != null && (r.unstable_strictMode === true && (l = true), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onUncaughtError !== void 0 && (h = r.onUncaughtError), r.onCaughtError !== void 0 && (g = r.onCaughtError), r.onRecoverableError !== void 0 && (_ = r.onRecoverableError), r.unstable_transitionCallbacks !== void 0 && (M = r.unstable_transitionCallbacks)), r = jy(n, 1, false, null, null, l, c, h, g, _, M, null), n[Ra] = r.current, _0(n.nodeType === 8 ? n.parentNode : n), new H0(r);
  }, ql.hydrateRoot = function(n, r, l) {
    if (!u(n)) throw Error(a(299));
    var c = false, h = "", g = dv, _ = hv, M = pv, R = null, L = null;
    return l != null && (l.unstable_strictMode === true && (c = true), l.identifierPrefix !== void 0 && (h = l.identifierPrefix), l.onUncaughtError !== void 0 && (g = l.onUncaughtError), l.onCaughtError !== void 0 && (_ = l.onCaughtError), l.onRecoverableError !== void 0 && (M = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (R = l.unstable_transitionCallbacks), l.formState !== void 0 && (L = l.formState)), r = jy(n, 1, true, r, l ?? null, c, h, g, _, M, R, L), r.context = By(null), l = r.current, c = an(), h = ur(c), h.callback = null, lr(l, h, c), r.current.lanes = c, Fu(r, c), Kn(r), n[Ra] = r.current, _0(n), new sf(r);
  }, ql.version = "19.0.0", ql;
}
var u2;
function Q9() {
  if (u2) return B0.exports;
  u2 = 1;
  function t14() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t14);
    } catch (e) {
      console.error(e);
    }
  }
  return t14(), B0.exports = Z9(), B0.exports;
}
var K9 = Q9();
function P9(t14, e) {
  if (!/^[\d\s.,]+$/.test(t14)) return new Error("Invalid characters in input.");
  let i = t14.replace(/\s+/g, "").replace(/,/g, "");
  if (e == "int" && i.includes(".")) return new Error("Integers should not contain a decimal point.");
  let a = e === "int" ? parseInt(i, 10) : parseFloat(i);
  return isNaN(a) ? new Error("Invalid number format.") : a;
}
function l2(t14, e) {
  return e === "float" ? t14.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 20 }) : t14.toLocaleString("en-US");
}
const Ge = ({ value: t14, onValue: e, range: i, min: a, max: u, step: o, numberType: f = "float", ...s }) => {
  const [d, p] = Z.useState(null), [m, b] = Z.useState(""), [v, y] = Z.useState(""), w = Z.useRef(null), S = Z.useRef(null);
  Z.useEffect(() => {
    t14 !== d && (p(t14), b(l2(t14, f)));
  }, [t14, f]), Z.useEffect(() => {
    S.current && S.current.setCustomValidity(v);
  }, [v]);
  const x = (O) => {
    let A = P9(O, f);
    A instanceof Error ? (p(null), b(O), y(A.message)) : (t14 !== A && e(A), p(A), b(l2(A, f)), y(""));
  }, T = (O) => {
    b(O.target.value), w.current && clearTimeout(w.current), w.current = setTimeout(() => x(O.target.value), 2e3);
  }, E = (O) => {
    w.current && clearTimeout(w.current), x(O.target.value);
  };
  let D = null;
  return i && (a === void 0 || u === void 0 ? console.error("Range input requires min and max props.") : D = { value: t14, onValue: e, min: a, max: u, step: o }), F.jsx("div", { className: "number-input-wrapper", children: D ? F.jsx(I9, { ref: S, ...D }) : F.jsxs(F.Fragment, { children: [F.jsx("input", { ref: S, value: m, onChange: T, onBlur: E, ...s }), F.jsx("div", { className: "number-input-save", children: F.jsx("button", { onClick: (O) => O.preventDefault(), children: "Save" }) }), F.jsx("span", { className: "input-error", children: v })] }) });
}, hf = 33;
function o2(t14) {
  return t14 >= 1e6 ? `${(t14 / 1e6).toLocaleString("en-US")}M` : t14 >= 1e4 ? `${(t14 / 1e3).toLocaleString("en-US")}k` : t14.toLocaleString("en-US");
}
const I9 = ({ ref: t14, value: e, min: i, max: a, step: u, onValue: o, ...f }) => {
  let s = (e - i) / (a - i) * 100, d;
  return s < hf ? d = "-7px" : s > 100 - hf ? d = "calc(-100% + 7px)" : d = "-50%", F.jsxs("div", { className: "range-input", children: [F.jsxs("div", { className: "range-input-label", children: [F.jsx("span", { style: { display: s < hf ? "none" : "" }, className: "min", children: o2(i) }), F.jsx("div", { className: "current-wrapper", children: F.jsx("span", { style: { left: `${s}%`, transform: `translateX(${d})` }, className: "current", children: e.toLocaleString("en-US") }) }), F.jsx("span", { style: { display: s > 100 - hf ? "none" : "" }, className: "max", children: o2(a) })] }), F.jsx("input", { ref: t14, type: "range", value: e, min: i, max: a, step: u, onChange: (p) => o(parseFloat(p.target.value)), ...f })] });
};
function Ue({ children: t14 }) {
  return F.jsx("div", { className: "form-group", children: t14 });
}
function fa(t14) {
  "@babel/helpers - typeof";
  return fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fa(t14);
}
function W9(t14, e) {
  if (fa(t14) != "object" || !t14) return t14;
  var i = t14[Symbol.toPrimitive];
  if (i !== void 0) {
    var a = i.call(t14, e);
    if (fa(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t14);
}
function F6(t14) {
  var e = W9(t14, "string");
  return fa(e) == "symbol" ? e : e + "";
}
function Wl(t14, e, i) {
  return (e = F6(e)) in t14 ? Object.defineProperty(t14, e, { value: i, enumerable: true, configurable: true, writable: true }) : t14[e] = i, t14;
}
function c2(t14, e) {
  var i = Object.keys(t14);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t14);
    e && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(t14, u).enumerable;
    })), i.push.apply(i, a);
  }
  return i;
}
function _t(t14) {
  for (var e = 1; e < arguments.length; e++) {
    var i = arguments[e] != null ? arguments[e] : {};
    e % 2 ? c2(Object(i), true).forEach(function(a) {
      Wl(t14, a, i[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t14, Object.getOwnPropertyDescriptors(i)) : c2(Object(i)).forEach(function(a) {
      Object.defineProperty(t14, a, Object.getOwnPropertyDescriptor(i, a));
    });
  }
  return t14;
}
function J9(t14) {
  if (Array.isArray(t14)) return t14;
}
function tM(t14, e) {
  var i = t14 == null ? null : typeof Symbol < "u" && t14[Symbol.iterator] || t14["@@iterator"];
  if (i != null) {
    var a, u, o, f, s = [], d = true, p = false;
    try {
      if (o = (i = i.call(t14)).next, e === 0) {
        if (Object(i) !== i) return;
        d = false;
      } else for (; !(d = (a = o.call(i)).done) && (s.push(a.value), s.length !== e); d = true) ;
    } catch (m) {
      p = true, u = m;
    } finally {
      try {
        if (!d && i.return != null && (f = i.return(), Object(f) !== f)) return;
      } finally {
        if (p) throw u;
      }
    }
    return s;
  }
}
function Lp(t14, e) {
  (e == null || e > t14.length) && (e = t14.length);
  for (var i = 0, a = Array(e); i < e; i++) a[i] = t14[i];
  return a;
}
function Z6(t14, e) {
  if (t14) {
    if (typeof t14 == "string") return Lp(t14, e);
    var i = {}.toString.call(t14).slice(8, -1);
    return i === "Object" && t14.constructor && (i = t14.constructor.name), i === "Map" || i === "Set" ? Array.from(t14) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Lp(t14, e) : void 0;
  }
}
function eM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ki(t14, e) {
  return J9(t14) || tM(t14, e) || Z6(t14, e) || eM();
}
function nM(t14, e) {
  if (t14 == null) return {};
  var i = {};
  for (var a in t14) if ({}.hasOwnProperty.call(t14, a)) {
    if (e.indexOf(a) !== -1) continue;
    i[a] = t14[a];
  }
  return i;
}
function Zi(t14, e) {
  if (t14 == null) return {};
  var i, a, u = nM(t14, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t14);
    for (a = 0; a < o.length; a++) i = o[a], e.indexOf(i) === -1 && {}.propertyIsEnumerable.call(t14, i) && (u[i] = t14[i]);
  }
  return u;
}
var iM = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function rM(t14) {
  var e = t14.defaultInputValue, i = e === void 0 ? "" : e, a = t14.defaultMenuIsOpen, u = a === void 0 ? false : a, o = t14.defaultValue, f = o === void 0 ? null : o, s = t14.inputValue, d = t14.menuIsOpen, p = t14.onChange, m = t14.onInputChange, b = t14.onMenuClose, v = t14.onMenuOpen, y = t14.value, w = Zi(t14, iM), S = Z.useState(s !== void 0 ? s : i), x = ki(S, 2), T = x[0], E = x[1], D = Z.useState(d !== void 0 ? d : u), O = ki(D, 2), A = O[0], $ = O[1], N = Z.useState(y !== void 0 ? y : f), H = ki(N, 2), z = H[0], G = H[1], V = Z.useCallback(function(nt, P) {
    typeof p == "function" && p(nt, P), G(nt);
  }, [p]), lt = Z.useCallback(function(nt, P) {
    var C;
    typeof m == "function" && (C = m(nt, P)), E(C !== void 0 ? C : nt);
  }, [m]), ft = Z.useCallback(function() {
    typeof v == "function" && v(), $(true);
  }, [v]), ct = Z.useCallback(function() {
    typeof b == "function" && b(), $(false);
  }, [b]), Y = s !== void 0 ? s : T, q = d !== void 0 ? d : A, ut = y !== void 0 ? y : z;
  return _t(_t({}, w), {}, { inputValue: Y, menuIsOpen: q, onChange: V, onInputChange: lt, onMenuClose: ct, onMenuOpen: ft, value: ut });
}
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(t14) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var a in i) ({}).hasOwnProperty.call(i, a) && (t14[a] = i[a]);
    }
    return t14;
  }, xt.apply(null, arguments);
}
function aM(t14, e) {
  if (!(t14 instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function f2(t14, e) {
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(t14, F6(a.key), a);
  }
}
function uM(t14, e, i) {
  return e && f2(t14.prototype, e), i && f2(t14, i), Object.defineProperty(t14, "prototype", { writable: false }), t14;
}
function Hp(t14, e) {
  return Hp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
    return i.__proto__ = a, i;
  }, Hp(t14, e);
}
function lM(t14, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t14.prototype = Object.create(e && e.prototype, { constructor: { value: t14, writable: true, configurable: true } }), Object.defineProperty(t14, "prototype", { writable: false }), e && Hp(t14, e);
}
function Jf(t14) {
  return Jf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, Jf(t14);
}
function Q6() {
  try {
    var t14 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Q6 = function() {
    return !!t14;
  })();
}
function oM(t14) {
  if (t14 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t14;
}
function cM(t14, e) {
  if (e && (fa(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return oM(t14);
}
function fM(t14) {
  var e = Q6();
  return function() {
    var i, a = Jf(t14);
    if (e) {
      var u = Jf(this).constructor;
      i = Reflect.construct(a, arguments, u);
    } else i = a.apply(this, arguments);
    return cM(this, i);
  };
}
function sM(t14) {
  if (Array.isArray(t14)) return Lp(t14);
}
function dM(t14) {
  if (typeof Symbol < "u" && t14[Symbol.iterator] != null || t14["@@iterator"] != null) return Array.from(t14);
}
function hM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qm(t14) {
  return sM(t14) || dM(t14) || Z6(t14) || hM();
}
function pM(t14) {
  if (t14.sheet) return t14.sheet;
  for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === t14) return document.styleSheets[e];
}
function mM(t14) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t14.key), t14.nonce !== void 0 && e.setAttribute("nonce", t14.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var gM = function() {
  function t14(i) {
    var a = this;
    this._insertTag = function(u) {
      var o;
      a.tags.length === 0 ? a.insertionPoint ? o = a.insertionPoint.nextSibling : a.prepend ? o = a.container.firstChild : o = a.before : o = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(u, o), a.tags.push(u);
    }, this.isSpeedy = i.speedy === void 0 ? true : i.speedy, this.tags = [], this.ctr = 0, this.nonce = i.nonce, this.key = i.key, this.container = i.container, this.prepend = i.prepend, this.insertionPoint = i.insertionPoint, this.before = null;
  }
  var e = t14.prototype;
  return e.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, e.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(mM(this));
    var u = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = pM(u);
      try {
        o.insertRule(a, o.cssRules.length);
      } catch {
      }
    } else u.appendChild(document.createTextNode(a));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(a) {
      var u;
      return (u = a.parentNode) == null ? void 0 : u.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, t14;
}(), ze = "-ms-", ts = "-moz-", kt = "-webkit-", K6 = "comm", Km = "rule", Pm = "decl", bM = "@import", P6 = "@keyframes", vM = "@layer", yM = Math.abs, Zs = String.fromCharCode, _M = Object.assign;
function wM(t14, e) {
  return De(t14, 0) ^ 45 ? (((e << 2 ^ De(t14, 0)) << 2 ^ De(t14, 1)) << 2 ^ De(t14, 2)) << 2 ^ De(t14, 3) : 0;
}
function I6(t14) {
  return t14.trim();
}
function SM(t14, e) {
  return (t14 = e.exec(t14)) ? t14[0] : t14;
}
function Yt(t14, e, i) {
  return t14.replace(e, i);
}
function Vp(t14, e) {
  return t14.indexOf(e);
}
function De(t14, e) {
  return t14.charCodeAt(e) | 0;
}
function ho(t14, e, i) {
  return t14.slice(e, i);
}
function In(t14) {
  return t14.length;
}
function Im(t14) {
  return t14.length;
}
function pf(t14, e) {
  return e.push(t14), t14;
}
function xM(t14, e) {
  return t14.map(e).join("");
}
var Qs = 1, xu = 1, W6 = 0, Pe = 0, he = 0, Vu = "";
function Ks(t14, e, i, a, u, o, f) {
  return { value: t14, root: e, parent: i, type: a, props: u, children: o, line: Qs, column: xu, length: f, return: "" };
}
function kl(t14, e) {
  return _M(Ks("", null, null, "", null, null, 0), t14, { length: -t14.length }, e);
}
function MM() {
  return he;
}
function TM() {
  return he = Pe > 0 ? De(Vu, --Pe) : 0, xu--, he === 10 && (xu = 1, Qs--), he;
}
function on() {
  return he = Pe < W6 ? De(Vu, Pe++) : 0, xu++, he === 10 && (xu = 1, Qs++), he;
}
function ni() {
  return De(Vu, Pe);
}
function qf() {
  return Pe;
}
function Do(t14, e) {
  return ho(Vu, t14, e);
}
function po(t14) {
  switch (t14) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function J6(t14) {
  return Qs = xu = 1, W6 = In(Vu = t14), Pe = 0, [];
}
function t3(t14) {
  return Vu = "", t14;
}
function kf(t14) {
  return I6(Do(Pe - 1, jp(t14 === 91 ? t14 + 2 : t14 === 40 ? t14 + 1 : t14)));
}
function EM(t14) {
  for (; (he = ni()) && he < 33; ) on();
  return po(t14) > 2 || po(he) > 3 ? "" : " ";
}
function AM(t14, e) {
  for (; --e && on() && !(he < 48 || he > 102 || he > 57 && he < 65 || he > 70 && he < 97); ) ;
  return Do(t14, qf() + (e < 6 && ni() == 32 && on() == 32));
}
function jp(t14) {
  for (; on(); ) switch (he) {
    case t14:
      return Pe;
    case 34:
    case 39:
      t14 !== 34 && t14 !== 39 && jp(he);
      break;
    case 40:
      t14 === 41 && jp(t14);
      break;
    case 92:
      on();
      break;
  }
  return Pe;
}
function OM(t14, e) {
  for (; on() && t14 + he !== 57; ) if (t14 + he === 84 && ni() === 47) break;
  return "/*" + Do(e, Pe - 1) + "*" + Zs(t14 === 47 ? t14 : on());
}
function CM(t14) {
  for (; !po(ni()); ) on();
  return Do(t14, Pe);
}
function DM(t14) {
  return t3(Yf("", null, null, null, [""], t14 = J6(t14), 0, [0], t14));
}
function Yf(t14, e, i, a, u, o, f, s, d) {
  for (var p = 0, m = 0, b = f, v = 0, y = 0, w = 0, S = 1, x = 1, T = 1, E = 0, D = "", O = u, A = o, $ = a, N = D; x; ) switch (w = E, E = on()) {
    case 40:
      if (w != 108 && De(N, b - 1) == 58) {
        Vp(N += Yt(kf(E), "&", "&\f"), "&\f") != -1 && (T = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      N += kf(E);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      N += EM(w);
      break;
    case 92:
      N += AM(qf() - 1, 7);
      continue;
    case 47:
      switch (ni()) {
        case 42:
        case 47:
          pf(RM(OM(on(), qf()), e, i), d);
          break;
        default:
          N += "/";
      }
      break;
    case 123 * S:
      s[p++] = In(N) * T;
    case 125 * S:
    case 59:
    case 0:
      switch (E) {
        case 0:
        case 125:
          x = 0;
        case 59 + m:
          T == -1 && (N = Yt(N, /\f/g, "")), y > 0 && In(N) - b && pf(y > 32 ? d2(N + ";", a, i, b - 1) : d2(Yt(N, " ", "") + ";", a, i, b - 2), d);
          break;
        case 59:
          N += ";";
        default:
          if (pf($ = s2(N, e, i, p, m, u, s, D, O = [], A = [], b), o), E === 123) if (m === 0) Yf(N, e, $, $, O, o, b, s, A);
          else switch (v === 99 && De(N, 3) === 110 ? 100 : v) {
            case 100:
            case 108:
            case 109:
            case 115:
              Yf(t14, $, $, a && pf(s2(t14, $, $, 0, 0, u, s, D, u, O = [], b), A), u, A, b, s, a ? O : A);
              break;
            default:
              Yf(N, $, $, $, [""], A, 0, s, A);
          }
      }
      p = m = y = 0, S = T = 1, D = N = "", b = f;
      break;
    case 58:
      b = 1 + In(N), y = w;
    default:
      if (S < 1) {
        if (E == 123) --S;
        else if (E == 125 && S++ == 0 && TM() == 125) continue;
      }
      switch (N += Zs(E), E * S) {
        case 38:
          T = m > 0 ? 1 : (N += "\f", -1);
          break;
        case 44:
          s[p++] = (In(N) - 1) * T, T = 1;
          break;
        case 64:
          ni() === 45 && (N += kf(on())), v = ni(), m = b = In(D = N += CM(qf())), E++;
          break;
        case 45:
          w === 45 && In(N) == 2 && (S = 0);
      }
  }
  return o;
}
function s2(t14, e, i, a, u, o, f, s, d, p, m) {
  for (var b = u - 1, v = u === 0 ? o : [""], y = Im(v), w = 0, S = 0, x = 0; w < a; ++w) for (var T = 0, E = ho(t14, b + 1, b = yM(S = f[w])), D = t14; T < y; ++T) (D = I6(S > 0 ? v[T] + " " + E : Yt(E, /&\f/g, v[T]))) && (d[x++] = D);
  return Ks(t14, e, i, u === 0 ? Km : s, d, p, m);
}
function RM(t14, e, i) {
  return Ks(t14, e, i, K6, Zs(MM()), ho(t14, 2, -2), 0);
}
function d2(t14, e, i, a) {
  return Ks(t14, e, i, Pm, ho(t14, 0, a), ho(t14, a + 1, -1), a);
}
function yu(t14, e) {
  for (var i = "", a = Im(t14), u = 0; u < a; u++) i += e(t14[u], u, t14, e) || "";
  return i;
}
function NM(t14, e, i, a) {
  switch (t14.type) {
    case vM:
      if (t14.children.length) break;
    case bM:
    case Pm:
      return t14.return = t14.return || t14.value;
    case K6:
      return "";
    case P6:
      return t14.return = t14.value + "{" + yu(t14.children, a) + "}";
    case Km:
      t14.value = t14.props.join(",");
  }
  return In(i = yu(t14.children, a)) ? t14.return = t14.value + "{" + i + "}" : "";
}
function $M(t14) {
  var e = Im(t14);
  return function(i, a, u, o) {
    for (var f = "", s = 0; s < e; s++) f += t14[s](i, a, u, o) || "";
    return f;
  };
}
function zM(t14) {
  return function(e) {
    e.root || (e = e.return) && t14(e);
  };
}
function UM(t14) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return e[i] === void 0 && (e[i] = t14(i)), e[i];
  };
}
var LM = function(e, i, a) {
  for (var u = 0, o = 0; u = o, o = ni(), u === 38 && o === 12 && (i[a] = 1), !po(o); ) on();
  return Do(e, Pe);
}, HM = function(e, i) {
  var a = -1, u = 44;
  do
    switch (po(u)) {
      case 0:
        u === 38 && ni() === 12 && (i[a] = 1), e[a] += LM(Pe - 1, i, a);
        break;
      case 2:
        e[a] += kf(u);
        break;
      case 4:
        if (u === 44) {
          e[++a] = ni() === 58 ? "&\f" : "", i[a] = e[a].length;
          break;
        }
      default:
        e[a] += Zs(u);
    }
  while (u = on());
  return e;
}, VM = function(e, i) {
  return t3(HM(J6(e), i));
}, h2 = /* @__PURE__ */ new WeakMap(), jM = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var i = e.value, a = e.parent, u = e.column === a.column && e.line === a.line; a.type !== "rule"; ) if (a = a.parent, !a) return;
    if (!(e.props.length === 1 && i.charCodeAt(0) !== 58 && !h2.get(a)) && !u) {
      h2.set(e, true);
      for (var o = [], f = VM(i, o), s = a.props, d = 0, p = 0; d < f.length; d++) for (var m = 0; m < s.length; m++, p++) e.props[p] = o[d] ? f[d].replace(/&\f/g, s[m]) : s[m] + " " + f[d];
    }
  }
}, BM = function(e) {
  if (e.type === "decl") {
    var i = e.value;
    i.charCodeAt(0) === 108 && i.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function e3(t14, e) {
  switch (wM(t14, e)) {
    case 5103:
      return kt + "print-" + t14 + t14;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return kt + t14 + t14;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return kt + t14 + ts + t14 + ze + t14 + t14;
    case 6828:
    case 4268:
      return kt + t14 + ze + t14 + t14;
    case 6165:
      return kt + t14 + ze + "flex-" + t14 + t14;
    case 5187:
      return kt + t14 + Yt(t14, /(\w+).+(:[^]+)/, kt + "box-$1$2" + ze + "flex-$1$2") + t14;
    case 5443:
      return kt + t14 + ze + "flex-item-" + Yt(t14, /flex-|-self/, "") + t14;
    case 4675:
      return kt + t14 + ze + "flex-line-pack" + Yt(t14, /align-content|flex-|-self/, "") + t14;
    case 5548:
      return kt + t14 + ze + Yt(t14, "shrink", "negative") + t14;
    case 5292:
      return kt + t14 + ze + Yt(t14, "basis", "preferred-size") + t14;
    case 6060:
      return kt + "box-" + Yt(t14, "-grow", "") + kt + t14 + ze + Yt(t14, "grow", "positive") + t14;
    case 4554:
      return kt + Yt(t14, /([^-])(transform)/g, "$1" + kt + "$2") + t14;
    case 6187:
      return Yt(Yt(Yt(t14, /(zoom-|grab)/, kt + "$1"), /(image-set)/, kt + "$1"), t14, "") + t14;
    case 5495:
    case 3959:
      return Yt(t14, /(image-set\([^]*)/, kt + "$1$`$1");
    case 4968:
      return Yt(Yt(t14, /(.+:)(flex-)?(.*)/, kt + "box-pack:$3" + ze + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + kt + t14 + t14;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Yt(t14, /(.+)-inline(.+)/, kt + "$1$2") + t14;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (In(t14) - 1 - e > 6) switch (De(t14, e + 1)) {
        case 109:
          if (De(t14, e + 4) !== 45) break;
        case 102:
          return Yt(t14, /(.+:)(.+)-([^]+)/, "$1" + kt + "$2-$3$1" + ts + (De(t14, e + 3) == 108 ? "$3" : "$2-$3")) + t14;
        case 115:
          return ~Vp(t14, "stretch") ? e3(Yt(t14, "stretch", "fill-available"), e) + t14 : t14;
      }
      break;
    case 4949:
      if (De(t14, e + 1) !== 115) break;
    case 6444:
      switch (De(t14, In(t14) - 3 - (~Vp(t14, "!important") && 10))) {
        case 107:
          return Yt(t14, ":", ":" + kt) + t14;
        case 101:
          return Yt(t14, /(.+:)([^;!]+)(;|!.+)?/, "$1" + kt + (De(t14, 14) === 45 ? "inline-" : "") + "box$3$1" + kt + "$2$3$1" + ze + "$2box$3") + t14;
      }
      break;
    case 5936:
      switch (De(t14, e + 11)) {
        case 114:
          return kt + t14 + ze + Yt(t14, /[svh]\w+-[tblr]{2}/, "tb") + t14;
        case 108:
          return kt + t14 + ze + Yt(t14, /[svh]\w+-[tblr]{2}/, "tb-rl") + t14;
        case 45:
          return kt + t14 + ze + Yt(t14, /[svh]\w+-[tblr]{2}/, "lr") + t14;
      }
      return kt + t14 + ze + t14 + t14;
  }
  return t14;
}
var qM = function(e, i, a, u) {
  if (e.length > -1 && !e.return) switch (e.type) {
    case Pm:
      e.return = e3(e.value, e.length);
      break;
    case P6:
      return yu([kl(e, { value: Yt(e.value, "@", "@" + kt) })], u);
    case Km:
      if (e.length) return xM(e.props, function(o) {
        switch (SM(o, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return yu([kl(e, { props: [Yt(o, /:(read-\w+)/, ":" + ts + "$1")] })], u);
          case "::placeholder":
            return yu([kl(e, { props: [Yt(o, /:(plac\w+)/, ":" + kt + "input-$1")] }), kl(e, { props: [Yt(o, /:(plac\w+)/, ":" + ts + "$1")] }), kl(e, { props: [Yt(o, /:(plac\w+)/, ze + "input-$1")] })], u);
        }
        return "";
      });
  }
}, kM = [qM], YM = function(e) {
  var i = e.key;
  if (i === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(S) {
      var x = S.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var u = e.stylisPlugins || kM, o = {}, f, s = [];
  f = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + i + ' "]'), function(S) {
    for (var x = S.getAttribute("data-emotion").split(" "), T = 1; T < x.length; T++) o[x[T]] = true;
    s.push(S);
  });
  var d, p = [jM, BM];
  {
    var m, b = [NM, zM(function(S) {
      m.insert(S);
    })], v = $M(p.concat(u, b)), y = function(x) {
      return yu(DM(x), v);
    };
    d = function(x, T, E, D) {
      m = E, y(x ? x + "{" + T.styles + "}" : T.styles), D && (w.inserted[T.name] = true);
    };
  }
  var w = { key: i, sheet: new gM({ key: i, container: f, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: o, registered: {}, insert: d };
  return w.sheet.hydrate(s), w;
}, G0 = { exports: {} }, Gt = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var p2;
function GM() {
  if (p2) return Gt;
  p2 = 1;
  var t14 = typeof Symbol == "function" && Symbol.for, e = t14 ? Symbol.for("react.element") : 60103, i = t14 ? Symbol.for("react.portal") : 60106, a = t14 ? Symbol.for("react.fragment") : 60107, u = t14 ? Symbol.for("react.strict_mode") : 60108, o = t14 ? Symbol.for("react.profiler") : 60114, f = t14 ? Symbol.for("react.provider") : 60109, s = t14 ? Symbol.for("react.context") : 60110, d = t14 ? Symbol.for("react.async_mode") : 60111, p = t14 ? Symbol.for("react.concurrent_mode") : 60111, m = t14 ? Symbol.for("react.forward_ref") : 60112, b = t14 ? Symbol.for("react.suspense") : 60113, v = t14 ? Symbol.for("react.suspense_list") : 60120, y = t14 ? Symbol.for("react.memo") : 60115, w = t14 ? Symbol.for("react.lazy") : 60116, S = t14 ? Symbol.for("react.block") : 60121, x = t14 ? Symbol.for("react.fundamental") : 60117, T = t14 ? Symbol.for("react.responder") : 60118, E = t14 ? Symbol.for("react.scope") : 60119;
  function D(A) {
    if (typeof A == "object" && A !== null) {
      var $ = A.$$typeof;
      switch ($) {
        case e:
          switch (A = A.type, A) {
            case d:
            case p:
            case a:
            case o:
            case u:
            case b:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case s:
                case m:
                case w:
                case y:
                case f:
                  return A;
                default:
                  return $;
              }
          }
        case i:
          return $;
      }
    }
  }
  function O(A) {
    return D(A) === p;
  }
  return Gt.AsyncMode = d, Gt.ConcurrentMode = p, Gt.ContextConsumer = s, Gt.ContextProvider = f, Gt.Element = e, Gt.ForwardRef = m, Gt.Fragment = a, Gt.Lazy = w, Gt.Memo = y, Gt.Portal = i, Gt.Profiler = o, Gt.StrictMode = u, Gt.Suspense = b, Gt.isAsyncMode = function(A) {
    return O(A) || D(A) === d;
  }, Gt.isConcurrentMode = O, Gt.isContextConsumer = function(A) {
    return D(A) === s;
  }, Gt.isContextProvider = function(A) {
    return D(A) === f;
  }, Gt.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === e;
  }, Gt.isForwardRef = function(A) {
    return D(A) === m;
  }, Gt.isFragment = function(A) {
    return D(A) === a;
  }, Gt.isLazy = function(A) {
    return D(A) === w;
  }, Gt.isMemo = function(A) {
    return D(A) === y;
  }, Gt.isPortal = function(A) {
    return D(A) === i;
  }, Gt.isProfiler = function(A) {
    return D(A) === o;
  }, Gt.isStrictMode = function(A) {
    return D(A) === u;
  }, Gt.isSuspense = function(A) {
    return D(A) === b;
  }, Gt.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === a || A === p || A === o || A === u || A === b || A === v || typeof A == "object" && A !== null && (A.$$typeof === w || A.$$typeof === y || A.$$typeof === f || A.$$typeof === s || A.$$typeof === m || A.$$typeof === x || A.$$typeof === T || A.$$typeof === E || A.$$typeof === S);
  }, Gt.typeOf = D, Gt;
}
var m2;
function XM() {
  return m2 || (m2 = 1, G0.exports = GM()), G0.exports;
}
var X0, g2;
function FM() {
  if (g2) return X0;
  g2 = 1;
  var t14 = XM(), e = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, i = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, a = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, u = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, o = {};
  o[t14.ForwardRef] = a, o[t14.Memo] = u;
  function f(w) {
    return t14.isMemo(w) ? u : o[w.$$typeof] || e;
  }
  var s = Object.defineProperty, d = Object.getOwnPropertyNames, p = Object.getOwnPropertySymbols, m = Object.getOwnPropertyDescriptor, b = Object.getPrototypeOf, v = Object.prototype;
  function y(w, S, x) {
    if (typeof S != "string") {
      if (v) {
        var T = b(S);
        T && T !== v && y(w, T, x);
      }
      var E = d(S);
      p && (E = E.concat(p(S)));
      for (var D = f(w), O = f(S), A = 0; A < E.length; ++A) {
        var $ = E[A];
        if (!i[$] && !(x && x[$]) && !(O && O[$]) && !(D && D[$])) {
          var N = m(S, $);
          try {
            s(w, $, N);
          } catch {
          }
        }
      }
    }
    return w;
  }
  return X0 = y, X0;
}
FM();
var ZM = true;
function QM(t14, e, i) {
  var a = "";
  return i.split(" ").forEach(function(u) {
    t14[u] !== void 0 ? e.push(t14[u] + ";") : u && (a += u + " ");
  }), a;
}
var n3 = function(e, i, a) {
  var u = e.key + "-" + i.name;
  (a === false || ZM === false) && e.registered[u] === void 0 && (e.registered[u] = i.styles);
}, KM = function(e, i, a) {
  n3(e, i, a);
  var u = e.key + "-" + i.name;
  if (e.inserted[i.name] === void 0) {
    var o = i;
    do
      e.insert(i === o ? "." + u : "", o, e.sheet, true), o = o.next;
    while (o !== void 0);
  }
};
function PM(t14) {
  for (var e = 0, i, a = 0, u = t14.length; u >= 4; ++a, u -= 4) i = t14.charCodeAt(a) & 255 | (t14.charCodeAt(++a) & 255) << 8 | (t14.charCodeAt(++a) & 255) << 16 | (t14.charCodeAt(++a) & 255) << 24, i = (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), i ^= i >>> 24, e = (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (u) {
    case 3:
      e ^= (t14.charCodeAt(a + 2) & 255) << 16;
    case 2:
      e ^= (t14.charCodeAt(a + 1) & 255) << 8;
    case 1:
      e ^= t14.charCodeAt(a) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var IM = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, WM = /[A-Z]|^ms/g, JM = /_EMO_([^_]+?)_([^]*?)_EMO_/g, i3 = function(e) {
  return e.charCodeAt(1) === 45;
}, b2 = function(e) {
  return e != null && typeof e != "boolean";
}, F0 = UM(function(t14) {
  return i3(t14) ? t14 : t14.replace(WM, "-$&").toLowerCase();
}), v2 = function(e, i) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof i == "string") return i.replace(JM, function(a, u, o) {
        return Wn = { name: u, styles: o, next: Wn }, u;
      });
  }
  return IM[e] !== 1 && !i3(e) && typeof i == "number" && i !== 0 ? i + "px" : i;
};
function mo(t14, e, i) {
  if (i == null) return "";
  var a = i;
  if (a.__emotion_styles !== void 0) return a;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var u = i;
      if (u.anim === 1) return Wn = { name: u.name, styles: u.styles, next: Wn }, u.name;
      var o = i;
      if (o.styles !== void 0) {
        var f = o.next;
        if (f !== void 0) for (; f !== void 0; ) Wn = { name: f.name, styles: f.styles, next: Wn }, f = f.next;
        var s = o.styles + ";";
        return s;
      }
      return tT(t14, e, i);
    }
    case "function": {
      if (t14 !== void 0) {
        var d = Wn, p = i(t14);
        return Wn = d, mo(t14, e, p);
      }
      break;
    }
  }
  var m = i;
  return m;
}
function tT(t14, e, i) {
  var a = "";
  if (Array.isArray(i)) for (var u = 0; u < i.length; u++) a += mo(t14, e, i[u]) + ";";
  else for (var o in i) {
    var f = i[o];
    if (typeof f != "object") {
      var s = f;
      b2(s) && (a += F0(o) + ":" + v2(o, s) + ";");
    } else if (Array.isArray(f) && typeof f[0] == "string" && e == null) for (var d = 0; d < f.length; d++) b2(f[d]) && (a += F0(o) + ":" + v2(o, f[d]) + ";");
    else {
      var p = mo(t14, e, f);
      switch (o) {
        case "animation":
        case "animationName": {
          a += F0(o) + ":" + p + ";";
          break;
        }
        default:
          a += o + "{" + p + "}";
      }
    }
  }
  return a;
}
var y2 = /label:\s*([^\s;{]+)\s*(;|$)/g, Wn;
function r3(t14, e, i) {
  if (t14.length === 1 && typeof t14[0] == "object" && t14[0] !== null && t14[0].styles !== void 0) return t14[0];
  var a = true, u = "";
  Wn = void 0;
  var o = t14[0];
  if (o == null || o.raw === void 0) a = false, u += mo(i, e, o);
  else {
    var f = o;
    u += f[0];
  }
  for (var s = 1; s < t14.length; s++) if (u += mo(i, e, t14[s]), a) {
    var d = o;
    u += d[s];
  }
  y2.lastIndex = 0;
  for (var p = "", m; (m = y2.exec(u)) !== null; ) p += "-" + m[1];
  var b = PM(u) + p;
  return { name: b, styles: u, next: Wn };
}
var eT = function(e) {
  return e();
}, nT = t2.useInsertionEffect ? t2.useInsertionEffect : false, iT = nT || eT, a3 = Z.createContext(typeof HTMLElement < "u" ? YM({ key: "css" }) : null);
a3.Provider;
var rT = function(e) {
  return Z.forwardRef(function(i, a) {
    var u = Z.useContext(a3);
    return e(i, u, a);
  });
}, aT = Z.createContext({}), Wm = {}.hasOwnProperty, Bp = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", uT = function(e, i) {
  var a = {};
  for (var u in i) Wm.call(i, u) && (a[u] = i[u]);
  return a[Bp] = e, a;
}, lT = function(e) {
  var i = e.cache, a = e.serialized, u = e.isStringTag;
  return n3(i, a, u), iT(function() {
    return KM(i, a, u);
  }), null;
}, oT = rT(function(t14, e, i) {
  var a = t14.css;
  typeof a == "string" && e.registered[a] !== void 0 && (a = e.registered[a]);
  var u = t14[Bp], o = [a], f = "";
  typeof t14.className == "string" ? f = QM(e.registered, o, t14.className) : t14.className != null && (f = t14.className + " ");
  var s = r3(o, void 0, Z.useContext(aT));
  f += e.key + "-" + s.name;
  var d = {};
  for (var p in t14) Wm.call(t14, p) && p !== "css" && p !== Bp && (d[p] = t14[p]);
  return d.className = f, i && (d.ref = i), Z.createElement(Z.Fragment, null, Z.createElement(lT, { cache: e, serialized: s, isStringTag: typeof u == "string" }), Z.createElement(u, d));
}), cT = oT, yt = function(e, i) {
  var a = arguments;
  if (i == null || !Wm.call(i, "css")) return Z.createElement.apply(void 0, a);
  var u = a.length, o = new Array(u);
  o[0] = cT, o[1] = uT(e, i);
  for (var f = 2; f < u; f++) o[f] = a[f];
  return Z.createElement.apply(null, o);
};
(function(t14) {
  var e;
  e || (e = t14.JSX || (t14.JSX = {}));
})(yt || (yt = {}));
function Jm() {
  for (var t14 = arguments.length, e = new Array(t14), i = 0; i < t14; i++) e[i] = arguments[i];
  return r3(e);
}
function fT() {
  var t14 = Jm.apply(void 0, arguments), e = "animation-" + t14.name;
  return { name: e, styles: "@keyframes " + e + "{" + t14.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
function sT(t14, e) {
  return e || (e = t14.slice(0)), Object.freeze(Object.defineProperties(t14, { raw: { value: Object.freeze(e) } }));
}
var dT = X6();
const hT = Math.min, pT = Math.max, es = Math.round, mf = Math.floor, ns = (t14) => ({ x: t14, y: t14 });
function mT(t14) {
  const { x: e, y: i, width: a, height: u } = t14;
  return { width: a, height: u, top: i, left: e, right: e + a, bottom: i + u, x: e, y: i };
}
function Ps() {
  return typeof window < "u";
}
function u3(t14) {
  return o3(t14) ? (t14.nodeName || "").toLowerCase() : "#document";
}
function Yi(t14) {
  var e;
  return (t14 == null || (e = t14.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function l3(t14) {
  var e;
  return (e = (o3(t14) ? t14.ownerDocument : t14.document) || window.document) == null ? void 0 : e.documentElement;
}
function o3(t14) {
  return Ps() ? t14 instanceof Node || t14 instanceof Yi(t14).Node : false;
}
function gT(t14) {
  return Ps() ? t14 instanceof Element || t14 instanceof Yi(t14).Element : false;
}
function tg(t14) {
  return Ps() ? t14 instanceof HTMLElement || t14 instanceof Yi(t14).HTMLElement : false;
}
function _2(t14) {
  return !Ps() || typeof ShadowRoot > "u" ? false : t14 instanceof ShadowRoot || t14 instanceof Yi(t14).ShadowRoot;
}
function c3(t14) {
  const { overflow: e, overflowX: i, overflowY: a, display: u } = eg(t14);
  return /auto|scroll|overlay|hidden|clip/.test(e + a + i) && !["inline", "contents"].includes(u);
}
function bT() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function vT(t14) {
  return ["html", "body", "#document"].includes(u3(t14));
}
function eg(t14) {
  return Yi(t14).getComputedStyle(t14);
}
function yT(t14) {
  if (u3(t14) === "html") return t14;
  const e = t14.assignedSlot || t14.parentNode || _2(t14) && t14.host || l3(t14);
  return _2(e) ? e.host : e;
}
function f3(t14) {
  const e = yT(t14);
  return vT(e) ? t14.ownerDocument ? t14.ownerDocument.body : t14.body : tg(e) && c3(e) ? e : f3(e);
}
function is(t14, e, i) {
  var a;
  e === void 0 && (e = []), i === void 0 && (i = true);
  const u = f3(t14), o = u === ((a = t14.ownerDocument) == null ? void 0 : a.body), f = Yi(u);
  if (o) {
    const s = qp(f);
    return e.concat(f, f.visualViewport || [], c3(u) ? u : [], s && i ? is(s) : []);
  }
  return e.concat(u, is(u, [], i));
}
function qp(t14) {
  return t14.parent && Object.getPrototypeOf(t14.parent) ? t14.frameElement : null;
}
function _T(t14) {
  const e = eg(t14);
  let i = parseFloat(e.width) || 0, a = parseFloat(e.height) || 0;
  const u = tg(t14), o = u ? t14.offsetWidth : i, f = u ? t14.offsetHeight : a, s = es(i) !== o || es(a) !== f;
  return s && (i = o, a = f), { width: i, height: a, $: s };
}
function ng(t14) {
  return gT(t14) ? t14 : t14.contextElement;
}
function w2(t14) {
  const e = ng(t14);
  if (!tg(e)) return ns(1);
  const i = e.getBoundingClientRect(), { width: a, height: u, $: o } = _T(e);
  let f = (o ? es(i.width) : i.width) / a, s = (o ? es(i.height) : i.height) / u;
  return (!f || !Number.isFinite(f)) && (f = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: f, y: s };
}
const wT = ns(0);
function ST(t14) {
  const e = Yi(t14);
  return !bT() || !e.visualViewport ? wT : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function xT(t14, e, i) {
  return false;
}
function S2(t14, e, i, a) {
  e === void 0 && (e = false);
  const u = t14.getBoundingClientRect(), o = ng(t14);
  let f = ns(1);
  e && (f = w2(t14));
  const s = xT() ? ST(o) : ns(0);
  let d = (u.left + s.x) / f.x, p = (u.top + s.y) / f.y, m = u.width / f.x, b = u.height / f.y;
  if (o) {
    const v = Yi(o), y = a;
    let w = v, S = qp(w);
    for (; S && a && y !== w; ) {
      const x = w2(S), T = S.getBoundingClientRect(), E = eg(S), D = T.left + (S.clientLeft + parseFloat(E.paddingLeft)) * x.x, O = T.top + (S.clientTop + parseFloat(E.paddingTop)) * x.y;
      d *= x.x, p *= x.y, m *= x.x, b *= x.y, d += D, p += O, w = Yi(S), S = qp(w);
    }
  }
  return mT({ width: m, height: b, x: d, y: p });
}
function s3(t14, e) {
  return t14.x === e.x && t14.y === e.y && t14.width === e.width && t14.height === e.height;
}
function MT(t14, e) {
  let i = null, a;
  const u = l3(t14);
  function o() {
    var s;
    clearTimeout(a), (s = i) == null || s.disconnect(), i = null;
  }
  function f(s, d) {
    s === void 0 && (s = false), d === void 0 && (d = 1), o();
    const p = t14.getBoundingClientRect(), { left: m, top: b, width: v, height: y } = p;
    if (s || e(), !v || !y) return;
    const w = mf(b), S = mf(u.clientWidth - (m + v)), x = mf(u.clientHeight - (b + y)), T = mf(m), D = { rootMargin: -w + "px " + -S + "px " + -x + "px " + -T + "px", threshold: pT(0, hT(1, d)) || 1 };
    let O = true;
    function A($) {
      const N = $[0].intersectionRatio;
      if (N !== d) {
        if (!O) return f();
        N ? f(false, N) : a = setTimeout(() => {
          f(false, 1e-7);
        }, 1e3);
      }
      N === 1 && !s3(p, t14.getBoundingClientRect()) && f(), O = false;
    }
    try {
      i = new IntersectionObserver(A, { ...D, root: u.ownerDocument });
    } catch {
      i = new IntersectionObserver(A, D);
    }
    i.observe(t14);
  }
  return f(true), o;
}
function TT(t14, e, i, a) {
  a === void 0 && (a = {});
  const { ancestorScroll: u = true, ancestorResize: o = true, elementResize: f = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: d = false } = a, p = ng(t14), m = u || o ? [...p ? is(p) : [], ...is(e)] : [];
  m.forEach((T) => {
    u && T.addEventListener("scroll", i, { passive: true }), o && T.addEventListener("resize", i);
  });
  const b = p && s ? MT(p, i) : null;
  let v = -1, y = null;
  f && (y = new ResizeObserver((T) => {
    let [E] = T;
    E && E.target === p && y && (y.unobserve(e), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var D;
      (D = y) == null || D.observe(e);
    })), i();
  }), p && !d && y.observe(p), y.observe(e));
  let w, S = d ? S2(t14) : null;
  d && x();
  function x() {
    const T = S2(t14);
    S && !s3(S, T) && i(), S = T, w = requestAnimationFrame(x);
  }
  return i(), () => {
    var T;
    m.forEach((E) => {
      u && E.removeEventListener("scroll", i), o && E.removeEventListener("resize", i);
    }), b == null ? void 0 : b(), (T = y) == null || T.disconnect(), y = null, d && cancelAnimationFrame(w);
  };
}
var kp = Z.useLayoutEffect, ET = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], rs = function() {
};
function AT(t14, e) {
  return e ? e[0] === "-" ? t14 + e : t14 + "__" + e : t14;
}
function OT(t14, e) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++) a[u - 2] = arguments[u];
  var o = [].concat(a);
  if (e && t14) for (var f in e) e.hasOwnProperty(f) && e[f] && o.push("".concat(AT(t14, f)));
  return o.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var x2 = function(e) {
  return HT(e) ? e.filter(Boolean) : fa(e) === "object" && e !== null ? [e] : [];
}, d3 = function(e) {
  e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme;
  var i = Zi(e, ET);
  return _t({}, i);
}, oe = function(e, i, a) {
  var u = e.cx, o = e.getStyles, f = e.getClassNames, s = e.className;
  return { css: o(i, e), className: u(a ?? {}, f(i, e), s) };
};
function Is(t14) {
  return [document.documentElement, document.body, window].indexOf(t14) > -1;
}
function CT(t14) {
  return Is(t14) ? window.innerHeight : t14.clientHeight;
}
function h3(t14) {
  return Is(t14) ? window.pageYOffset : t14.scrollTop;
}
function as(t14, e) {
  if (Is(t14)) {
    window.scrollTo(0, e);
    return;
  }
  t14.scrollTop = e;
}
function DT(t14) {
  var e = getComputedStyle(t14), i = e.position === "absolute", a = /(auto|scroll)/;
  if (e.position === "fixed") return document.documentElement;
  for (var u = t14; u = u.parentElement; ) if (e = getComputedStyle(u), !(i && e.position === "static") && a.test(e.overflow + e.overflowY + e.overflowX)) return u;
  return document.documentElement;
}
function RT(t14, e, i, a) {
  return i * ((t14 = t14 / a - 1) * t14 * t14 + 1) + e;
}
function gf(t14, e) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : rs, u = h3(t14), o = e - u, f = 10, s = 0;
  function d() {
    s += f;
    var p = RT(s, u, o, i);
    as(t14, p), s < i ? window.requestAnimationFrame(d) : a(t14);
  }
  d();
}
function M2(t14, e) {
  var i = t14.getBoundingClientRect(), a = e.getBoundingClientRect(), u = e.offsetHeight / 3;
  a.bottom + u > i.bottom ? as(t14, Math.min(e.offsetTop + e.clientHeight - t14.offsetHeight + u, t14.scrollHeight)) : a.top - u < i.top && as(t14, Math.max(e.offsetTop - u, 0));
}
function NT(t14) {
  var e = t14.getBoundingClientRect();
  return { bottom: e.bottom, height: e.height, left: e.left, right: e.right, top: e.top, width: e.width };
}
function T2() {
  try {
    return document.createEvent("TouchEvent"), true;
  } catch {
    return false;
  }
}
function $T() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return false;
  }
}
var p3 = false, zT = { get passive() {
  return p3 = true;
} }, bf = typeof window < "u" ? window : {};
bf.addEventListener && bf.removeEventListener && (bf.addEventListener("p", rs, zT), bf.removeEventListener("p", rs, false));
var UT = p3;
function LT(t14) {
  return t14 != null;
}
function HT(t14) {
  return Array.isArray(t14);
}
function vf(t14, e, i) {
  return t14 ? e : i;
}
var VT = function(e) {
  for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) a[u - 1] = arguments[u];
  var o = Object.entries(e).filter(function(f) {
    var s = ki(f, 1), d = s[0];
    return !a.includes(d);
  });
  return o.reduce(function(f, s) {
    var d = ki(s, 2), p = d[0], m = d[1];
    return f[p] = m, f;
  }, {});
}, jT = ["children", "innerProps"], BT = ["children", "innerProps"];
function qT(t14) {
  var e = t14.maxHeight, i = t14.menuEl, a = t14.minHeight, u = t14.placement, o = t14.shouldScroll, f = t14.isFixedPosition, s = t14.controlHeight, d = DT(i), p = { placement: "bottom", maxHeight: e };
  if (!i || !i.offsetParent) return p;
  var m = d.getBoundingClientRect(), b = m.height, v = i.getBoundingClientRect(), y = v.bottom, w = v.height, S = v.top, x = i.offsetParent.getBoundingClientRect(), T = x.top, E = f ? window.innerHeight : CT(d), D = h3(d), O = parseInt(getComputedStyle(i).marginBottom, 10), A = parseInt(getComputedStyle(i).marginTop, 10), $ = T - A, N = E - S, H = $ + D, z = b - D - S, G = y - E + D + O, V = D + S - A, lt = 160;
  switch (u) {
    case "auto":
    case "bottom":
      if (N >= w) return { placement: "bottom", maxHeight: e };
      if (z >= w && !f) return o && gf(d, G, lt), { placement: "bottom", maxHeight: e };
      if (!f && z >= a || f && N >= a) {
        o && gf(d, G, lt);
        var ft = f ? N - O : z - O;
        return { placement: "bottom", maxHeight: ft };
      }
      if (u === "auto" || f) {
        var ct = e, Y = f ? $ : H;
        return Y >= a && (ct = Math.min(Y - O - s, e)), { placement: "top", maxHeight: ct };
      }
      if (u === "bottom") return o && as(d, G), { placement: "bottom", maxHeight: e };
      break;
    case "top":
      if ($ >= w) return { placement: "top", maxHeight: e };
      if (H >= w && !f) return o && gf(d, V, lt), { placement: "top", maxHeight: e };
      if (!f && H >= a || f && $ >= a) {
        var q = e;
        return (!f && H >= a || f && $ >= a) && (q = f ? $ - A : H - A), o && gf(d, V, lt), { placement: "top", maxHeight: q };
      }
      return { placement: "bottom", maxHeight: e };
    default:
      throw new Error('Invalid placement provided "'.concat(u, '".'));
  }
  return p;
}
function kT(t14) {
  var e = { bottom: "top", top: "bottom" };
  return t14 ? e[t14] : "bottom";
}
var m3 = function(e) {
  return e === "auto" ? "bottom" : e;
}, YT = function(e, i) {
  var a, u = e.placement, o = e.theme, f = o.borderRadius, s = o.spacing, d = o.colors;
  return _t((a = { label: "menu" }, Wl(a, kT(u), "100%"), Wl(a, "position", "absolute"), Wl(a, "width", "100%"), Wl(a, "zIndex", 1), a), i ? {} : { backgroundColor: d.neutral0, borderRadius: f, boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)", marginBottom: s.menuGutter, marginTop: s.menuGutter });
}, g3 = Z.createContext(null), GT = function(e) {
  var i = e.children, a = e.minMenuHeight, u = e.maxMenuHeight, o = e.menuPlacement, f = e.menuPosition, s = e.menuShouldScrollIntoView, d = e.theme, p = Z.useContext(g3) || {}, m = p.setPortalPlacement, b = Z.useRef(null), v = Z.useState(u), y = ki(v, 2), w = y[0], S = y[1], x = Z.useState(null), T = ki(x, 2), E = T[0], D = T[1], O = d.spacing.controlHeight;
  return kp(function() {
    var A = b.current;
    if (A) {
      var $ = f === "fixed", N = s && !$, H = qT({ maxHeight: u, menuEl: A, minHeight: a, placement: o, shouldScroll: N, isFixedPosition: $, controlHeight: O });
      S(H.maxHeight), D(H.placement), m == null ? void 0 : m(H.placement);
    }
  }, [u, o, f, s, a, m, O]), i({ ref: b, placerProps: _t(_t({}, e), {}, { placement: E || m3(o), maxHeight: w }) });
}, XT = function(e) {
  var i = e.children, a = e.innerRef, u = e.innerProps;
  return yt("div", xt({}, oe(e, "menu", { menu: true }), { ref: a }, u), i);
}, FT = XT, ZT = function(e, i) {
  var a = e.maxHeight, u = e.theme.spacing.baseUnit;
  return _t({ maxHeight: a, overflowY: "auto", position: "relative", WebkitOverflowScrolling: "touch" }, i ? {} : { paddingBottom: u, paddingTop: u });
}, QT = function(e) {
  var i = e.children, a = e.innerProps, u = e.innerRef, o = e.isMulti;
  return yt("div", xt({}, oe(e, "menuList", { "menu-list": true, "menu-list--is-multi": o }), { ref: u }, a), i);
}, b3 = function(e, i) {
  var a = e.theme, u = a.spacing.baseUnit, o = a.colors;
  return _t({ textAlign: "center" }, i ? {} : { color: o.neutral40, padding: "".concat(u * 2, "px ").concat(u * 3, "px") });
}, KT = b3, PT = b3, IT = function(e) {
  var i = e.children, a = i === void 0 ? "No options" : i, u = e.innerProps, o = Zi(e, jT);
  return yt("div", xt({}, oe(_t(_t({}, o), {}, { children: a, innerProps: u }), "noOptionsMessage", { "menu-notice": true, "menu-notice--no-options": true }), u), a);
}, WT = function(e) {
  var i = e.children, a = i === void 0 ? "Loading..." : i, u = e.innerProps, o = Zi(e, BT);
  return yt("div", xt({}, oe(_t(_t({}, o), {}, { children: a, innerProps: u }), "loadingMessage", { "menu-notice": true, "menu-notice--loading": true }), u), a);
}, JT = function(e) {
  var i = e.rect, a = e.offset, u = e.position;
  return { left: i.left, position: u, top: a, width: i.width, zIndex: 1 };
}, tE = function(e) {
  var i = e.appendTo, a = e.children, u = e.controlElement, o = e.innerProps, f = e.menuPlacement, s = e.menuPosition, d = Z.useRef(null), p = Z.useRef(null), m = Z.useState(m3(f)), b = ki(m, 2), v = b[0], y = b[1], w = Z.useMemo(function() {
    return { setPortalPlacement: y };
  }, []), S = Z.useState(null), x = ki(S, 2), T = x[0], E = x[1], D = Z.useCallback(function() {
    if (u) {
      var N = NT(u), H = s === "fixed" ? 0 : window.pageYOffset, z = N[v] + H;
      (z !== (T == null ? void 0 : T.offset) || N.left !== (T == null ? void 0 : T.rect.left) || N.width !== (T == null ? void 0 : T.rect.width)) && E({ offset: z, rect: N });
    }
  }, [u, s, v, T == null ? void 0 : T.offset, T == null ? void 0 : T.rect.left, T == null ? void 0 : T.rect.width]);
  kp(function() {
    D();
  }, [D]);
  var O = Z.useCallback(function() {
    typeof p.current == "function" && (p.current(), p.current = null), u && d.current && (p.current = TT(u, d.current, D, { elementResize: "ResizeObserver" in window }));
  }, [u, D]);
  kp(function() {
    O();
  }, [O]);
  var A = Z.useCallback(function(N) {
    d.current = N, O();
  }, [O]);
  if (!i && s !== "fixed" || !T) return null;
  var $ = yt("div", xt({ ref: A }, oe(_t(_t({}, e), {}, { offset: T.offset, position: s, rect: T.rect }), "menuPortal", { "menu-portal": true }), o), a);
  return yt(g3.Provider, { value: w }, i ? dT.createPortal($, i) : $);
}, eE = function(e) {
  var i = e.isDisabled, a = e.isRtl;
  return { label: "container", direction: a ? "rtl" : void 0, pointerEvents: i ? "none" : void 0, position: "relative" };
}, nE = function(e) {
  var i = e.children, a = e.innerProps, u = e.isDisabled, o = e.isRtl;
  return yt("div", xt({}, oe(e, "container", { "--is-disabled": u, "--is-rtl": o }), a), i);
}, iE = function(e, i) {
  var a = e.theme.spacing, u = e.isMulti, o = e.hasValue, f = e.selectProps.controlShouldRenderValue;
  return _t({ alignItems: "center", display: u && o && f ? "flex" : "grid", flex: 1, flexWrap: "wrap", WebkitOverflowScrolling: "touch", position: "relative", overflow: "hidden" }, i ? {} : { padding: "".concat(a.baseUnit / 2, "px ").concat(a.baseUnit * 2, "px") });
}, rE = function(e) {
  var i = e.children, a = e.innerProps, u = e.isMulti, o = e.hasValue;
  return yt("div", xt({}, oe(e, "valueContainer", { "value-container": true, "value-container--is-multi": u, "value-container--has-value": o }), a), i);
}, aE = function() {
  return { alignItems: "center", alignSelf: "stretch", display: "flex", flexShrink: 0 };
}, uE = function(e) {
  var i = e.children, a = e.innerProps;
  return yt("div", xt({}, oe(e, "indicatorsContainer", { indicators: true }), a), i);
}, E2, lE = ["size"], oE = ["innerProps", "isRtl", "size"], cE = { name: "8mmkcg", styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0" }, v3 = function(e) {
  var i = e.size, a = Zi(e, lE);
  return yt("svg", xt({ height: i, width: i, viewBox: "0 0 20 20", "aria-hidden": "true", focusable: "false", css: cE }, a));
}, ig = function(e) {
  return yt(v3, xt({ size: 20 }, e), yt("path", { d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z" }));
}, y3 = function(e) {
  return yt(v3, xt({ size: 20 }, e), yt("path", { d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" }));
}, _3 = function(e, i) {
  var a = e.isFocused, u = e.theme, o = u.spacing.baseUnit, f = u.colors;
  return _t({ label: "indicatorContainer", display: "flex", transition: "color 150ms" }, i ? {} : { color: a ? f.neutral60 : f.neutral20, padding: o * 2, ":hover": { color: a ? f.neutral80 : f.neutral40 } });
}, fE = _3, sE = function(e) {
  var i = e.children, a = e.innerProps;
  return yt("div", xt({}, oe(e, "dropdownIndicator", { indicator: true, "dropdown-indicator": true }), a), i || yt(y3, null));
}, dE = _3, hE = function(e) {
  var i = e.children, a = e.innerProps;
  return yt("div", xt({}, oe(e, "clearIndicator", { indicator: true, "clear-indicator": true }), a), i || yt(ig, null));
}, pE = function(e, i) {
  var a = e.isDisabled, u = e.theme, o = u.spacing.baseUnit, f = u.colors;
  return _t({ label: "indicatorSeparator", alignSelf: "stretch", width: 1 }, i ? {} : { backgroundColor: a ? f.neutral10 : f.neutral20, marginBottom: o * 2, marginTop: o * 2 });
}, mE = function(e) {
  var i = e.innerProps;
  return yt("span", xt({}, i, oe(e, "indicatorSeparator", { "indicator-separator": true })));
}, gE = fT(E2 || (E2 = sT([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), bE = function(e, i) {
  var a = e.isFocused, u = e.size, o = e.theme, f = o.colors, s = o.spacing.baseUnit;
  return _t({ label: "loadingIndicator", display: "flex", transition: "color 150ms", alignSelf: "center", fontSize: u, lineHeight: 1, marginRight: u, textAlign: "center", verticalAlign: "middle" }, i ? {} : { color: a ? f.neutral60 : f.neutral20, padding: s * 2 });
}, Z0 = function(e) {
  var i = e.delay, a = e.offset;
  return yt("span", { css: Jm({ animation: "".concat(gE, " 1s ease-in-out ").concat(i, "ms infinite;"), backgroundColor: "currentColor", borderRadius: "1em", display: "inline-block", marginLeft: a ? "1em" : void 0, height: "1em", verticalAlign: "top", width: "1em" }, "", "") });
}, vE = function(e) {
  var i = e.innerProps, a = e.isRtl, u = e.size, o = u === void 0 ? 4 : u, f = Zi(e, oE);
  return yt("div", xt({}, oe(_t(_t({}, f), {}, { innerProps: i, isRtl: a, size: o }), "loadingIndicator", { indicator: true, "loading-indicator": true }), i), yt(Z0, { delay: 0, offset: a }), yt(Z0, { delay: 160, offset: true }), yt(Z0, { delay: 320, offset: !a }));
}, yE = function(e, i) {
  var a = e.isDisabled, u = e.isFocused, o = e.theme, f = o.colors, s = o.borderRadius, d = o.spacing;
  return _t({ label: "control", alignItems: "center", cursor: "default", display: "flex", flexWrap: "wrap", justifyContent: "space-between", minHeight: d.controlHeight, outline: "0 !important", position: "relative", transition: "all 100ms" }, i ? {} : { backgroundColor: a ? f.neutral5 : f.neutral0, borderColor: a ? f.neutral10 : u ? f.primary : f.neutral20, borderRadius: s, borderStyle: "solid", borderWidth: 1, boxShadow: u ? "0 0 0 1px ".concat(f.primary) : void 0, "&:hover": { borderColor: u ? f.primary : f.neutral30 } });
}, _E = function(e) {
  var i = e.children, a = e.isDisabled, u = e.isFocused, o = e.innerRef, f = e.innerProps, s = e.menuIsOpen;
  return yt("div", xt({ ref: o }, oe(e, "control", { control: true, "control--is-disabled": a, "control--is-focused": u, "control--menu-is-open": s }), f, { "aria-disabled": a || void 0 }), i);
}, wE = _E, SE = ["data"], xE = function(e, i) {
  var a = e.theme.spacing;
  return i ? {} : { paddingBottom: a.baseUnit * 2, paddingTop: a.baseUnit * 2 };
}, ME = function(e) {
  var i = e.children, a = e.cx, u = e.getStyles, o = e.getClassNames, f = e.Heading, s = e.headingProps, d = e.innerProps, p = e.label, m = e.theme, b = e.selectProps;
  return yt("div", xt({}, oe(e, "group", { group: true }), d), yt(f, xt({}, s, { selectProps: b, theme: m, getStyles: u, getClassNames: o, cx: a }), p), yt("div", null, i));
}, TE = function(e, i) {
  var a = e.theme, u = a.colors, o = a.spacing;
  return _t({ label: "group", cursor: "default", display: "block" }, i ? {} : { color: u.neutral40, fontSize: "75%", fontWeight: 500, marginBottom: "0.25em", paddingLeft: o.baseUnit * 3, paddingRight: o.baseUnit * 3, textTransform: "uppercase" });
}, EE = function(e) {
  var i = d3(e);
  i.data;
  var a = Zi(i, SE);
  return yt("div", xt({}, oe(e, "groupHeading", { "group-heading": true }), a));
}, AE = ME, OE = ["innerRef", "isDisabled", "isHidden", "inputClassName"], CE = function(e, i) {
  var a = e.isDisabled, u = e.value, o = e.theme, f = o.spacing, s = o.colors;
  return _t(_t({ visibility: a ? "hidden" : "visible", transform: u ? "translateZ(0)" : "" }, DE), i ? {} : { margin: f.baseUnit / 2, paddingBottom: f.baseUnit / 2, paddingTop: f.baseUnit / 2, color: s.neutral80 });
}, w3 = { gridArea: "1 / 2", font: "inherit", minWidth: "2px", border: 0, margin: 0, outline: 0, padding: 0 }, DE = { flex: "1 1 auto", display: "inline-grid", gridArea: "1 / 1 / 2 / 3", gridTemplateColumns: "0 min-content", "&:after": _t({ content: 'attr(data-value) " "', visibility: "hidden", whiteSpace: "pre" }, w3) }, RE = function(e) {
  return _t({ label: "input", color: "inherit", background: 0, opacity: e ? 0 : 1, width: "100%" }, w3);
}, NE = function(e) {
  var i = e.cx, a = e.value, u = d3(e), o = u.innerRef, f = u.isDisabled, s = u.isHidden, d = u.inputClassName, p = Zi(u, OE);
  return yt("div", xt({}, oe(e, "input", { "input-container": true }), { "data-value": a || "" }), yt("input", xt({ className: i({ input: true }, d), ref: o, style: RE(s), disabled: f }, p)));
}, $E = NE, zE = function(e, i) {
  var a = e.theme, u = a.spacing, o = a.borderRadius, f = a.colors;
  return _t({ label: "multiValue", display: "flex", minWidth: 0 }, i ? {} : { backgroundColor: f.neutral10, borderRadius: o / 2, margin: u.baseUnit / 2 });
}, UE = function(e, i) {
  var a = e.theme, u = a.borderRadius, o = a.colors, f = e.cropWithEllipsis;
  return _t({ overflow: "hidden", textOverflow: f || f === void 0 ? "ellipsis" : void 0, whiteSpace: "nowrap" }, i ? {} : { borderRadius: u / 2, color: o.neutral80, fontSize: "85%", padding: 3, paddingLeft: 6 });
}, LE = function(e, i) {
  var a = e.theme, u = a.spacing, o = a.borderRadius, f = a.colors, s = e.isFocused;
  return _t({ alignItems: "center", display: "flex" }, i ? {} : { borderRadius: o / 2, backgroundColor: s ? f.dangerLight : void 0, paddingLeft: u.baseUnit, paddingRight: u.baseUnit, ":hover": { backgroundColor: f.dangerLight, color: f.danger } });
}, S3 = function(e) {
  var i = e.children, a = e.innerProps;
  return yt("div", a, i);
}, HE = S3, VE = S3;
function jE(t14) {
  var e = t14.children, i = t14.innerProps;
  return yt("div", xt({ role: "button" }, i), e || yt(ig, { size: 14 }));
}
var BE = function(e) {
  var i = e.children, a = e.components, u = e.data, o = e.innerProps, f = e.isDisabled, s = e.removeProps, d = e.selectProps, p = a.Container, m = a.Label, b = a.Remove;
  return yt(p, { data: u, innerProps: _t(_t({}, oe(e, "multiValue", { "multi-value": true, "multi-value--is-disabled": f })), o), selectProps: d }, yt(m, { data: u, innerProps: _t({}, oe(e, "multiValueLabel", { "multi-value__label": true })), selectProps: d }, i), yt(b, { data: u, innerProps: _t(_t({}, oe(e, "multiValueRemove", { "multi-value__remove": true })), {}, { "aria-label": "Remove ".concat(i || "option") }, s), selectProps: d }));
}, qE = BE, kE = function(e, i) {
  var a = e.isDisabled, u = e.isFocused, o = e.isSelected, f = e.theme, s = f.spacing, d = f.colors;
  return _t({ label: "option", cursor: "default", display: "block", fontSize: "inherit", width: "100%", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }, i ? {} : { backgroundColor: o ? d.primary : u ? d.primary25 : "transparent", color: a ? d.neutral20 : o ? d.neutral0 : "inherit", padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"), ":active": { backgroundColor: a ? void 0 : o ? d.primary : d.primary50 } });
}, YE = function(e) {
  var i = e.children, a = e.isDisabled, u = e.isFocused, o = e.isSelected, f = e.innerRef, s = e.innerProps;
  return yt("div", xt({}, oe(e, "option", { option: true, "option--is-disabled": a, "option--is-focused": u, "option--is-selected": o }), { ref: f, "aria-disabled": a }, s), i);
}, GE = YE, XE = function(e, i) {
  var a = e.theme, u = a.spacing, o = a.colors;
  return _t({ label: "placeholder", gridArea: "1 / 1 / 2 / 3" }, i ? {} : { color: o.neutral50, marginLeft: u.baseUnit / 2, marginRight: u.baseUnit / 2 });
}, FE = function(e) {
  var i = e.children, a = e.innerProps;
  return yt("div", xt({}, oe(e, "placeholder", { placeholder: true }), a), i);
}, ZE = FE, QE = function(e, i) {
  var a = e.isDisabled, u = e.theme, o = u.spacing, f = u.colors;
  return _t({ label: "singleValue", gridArea: "1 / 1 / 2 / 3", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, i ? {} : { color: a ? f.neutral40 : f.neutral80, marginLeft: o.baseUnit / 2, marginRight: o.baseUnit / 2 });
}, KE = function(e) {
  var i = e.children, a = e.isDisabled, u = e.innerProps;
  return yt("div", xt({}, oe(e, "singleValue", { "single-value": true, "single-value--is-disabled": a }), u), i);
}, PE = KE, x3 = { ClearIndicator: hE, Control: wE, DropdownIndicator: sE, DownChevron: y3, CrossIcon: ig, Group: AE, GroupHeading: EE, IndicatorsContainer: uE, IndicatorSeparator: mE, Input: $E, LoadingIndicator: vE, Menu: FT, MenuList: QT, MenuPortal: tE, LoadingMessage: WT, NoOptionsMessage: IT, MultiValue: qE, MultiValueContainer: HE, MultiValueLabel: VE, MultiValueRemove: jE, Option: GE, Placeholder: ZE, SelectContainer: nE, SingleValue: PE, ValueContainer: rE }, IE = function(e) {
  return _t(_t({}, x3), e.components);
}, A2 = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function WE(t14, e) {
  return !!(t14 === e || A2(t14) && A2(e));
}
function JE(t14, e) {
  if (t14.length !== e.length) return false;
  for (var i = 0; i < t14.length; i++) if (!WE(t14[i], e[i])) return false;
  return true;
}
function tA(t14, e) {
  e === void 0 && (e = JE);
  var i = null;
  function a() {
    for (var u = [], o = 0; o < arguments.length; o++) u[o] = arguments[o];
    if (i && i.lastThis === this && e(u, i.lastArgs)) return i.lastResult;
    var f = t14.apply(this, u);
    return i = { lastResult: f, lastArgs: u, lastThis: this }, f;
  }
  return a.clear = function() {
    i = null;
  }, a;
}
var eA = { name: "7pg0cj-a11yText", styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap" }, nA = function(e) {
  return yt("span", xt({ css: eA }, e));
}, O2 = nA, iA = { guidance: function(e) {
  var i = e.isSearchable, a = e.isMulti, u = e.tabSelectsValue, o = e.context, f = e.isInitialFocus;
  switch (o) {
    case "menu":
      return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(u ? ", press Tab to select the option and exit the menu" : "", ".");
    case "input":
      return f ? "".concat(e["aria-label"] || "Select", " is focused ").concat(i ? ",type to refine list" : "", ", press Down to open the menu, ").concat(a ? " press left to focus selected values" : "") : "";
    case "value":
      return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
    default:
      return "";
  }
}, onChange: function(e) {
  var i = e.action, a = e.label, u = a === void 0 ? "" : a, o = e.labels, f = e.isDisabled;
  switch (i) {
    case "deselect-option":
    case "pop-value":
    case "remove-value":
      return "option ".concat(u, ", deselected.");
    case "clear":
      return "All selected options have been cleared.";
    case "initial-input-focus":
      return "option".concat(o.length > 1 ? "s" : "", " ").concat(o.join(","), ", selected.");
    case "select-option":
      return f ? "option ".concat(u, " is disabled. Select another option.") : "option ".concat(u, ", selected.");
    default:
      return "";
  }
}, onFocus: function(e) {
  var i = e.context, a = e.focused, u = e.options, o = e.label, f = o === void 0 ? "" : o, s = e.selectValue, d = e.isDisabled, p = e.isSelected, m = e.isAppleDevice, b = function(S, x) {
    return S && S.length ? "".concat(S.indexOf(x) + 1, " of ").concat(S.length) : "";
  };
  if (i === "value" && s) return "value ".concat(f, " focused, ").concat(b(s, a), ".");
  if (i === "menu" && m) {
    var v = d ? " disabled" : "", y = "".concat(p ? " selected" : "").concat(v);
    return "".concat(f).concat(y, ", ").concat(b(u, a), ".");
  }
  return "";
}, onFilter: function(e) {
  var i = e.inputValue, a = e.resultsMessage;
  return "".concat(a).concat(i ? " for search term " + i : "", ".");
} }, rA = function(e) {
  var i = e.ariaSelection, a = e.focusedOption, u = e.focusedValue, o = e.focusableOptions, f = e.isFocused, s = e.selectValue, d = e.selectProps, p = e.id, m = e.isAppleDevice, b = d.ariaLiveMessages, v = d.getOptionLabel, y = d.inputValue, w = d.isMulti, S = d.isOptionDisabled, x = d.isSearchable, T = d.menuIsOpen, E = d.options, D = d.screenReaderStatus, O = d.tabSelectsValue, A = d.isLoading, $ = d["aria-label"], N = d["aria-live"], H = Z.useMemo(function() {
    return _t(_t({}, iA), b || {});
  }, [b]), z = Z.useMemo(function() {
    var Y = "";
    if (i && H.onChange) {
      var q = i.option, ut = i.options, nt = i.removedValue, P = i.removedValues, C = i.value, B = function(pt) {
        return Array.isArray(pt) ? null : pt;
      }, Q = nt || q || B(C), K = Q ? v(Q) : "", tt = ut || P || void 0, ht = tt ? tt.map(v) : [], dt = _t({ isDisabled: Q && S(Q, s), label: K, labels: ht }, i);
      Y = H.onChange(dt);
    }
    return Y;
  }, [i, H, S, s, v]), G = Z.useMemo(function() {
    var Y = "", q = a || u, ut = !!(a && s && s.includes(a));
    if (q && H.onFocus) {
      var nt = { focused: q, label: v(q), isDisabled: S(q, s), isSelected: ut, options: o, context: q === a ? "menu" : "value", selectValue: s, isAppleDevice: m };
      Y = H.onFocus(nt);
    }
    return Y;
  }, [a, u, v, S, H, o, s, m]), V = Z.useMemo(function() {
    var Y = "";
    if (T && E.length && !A && H.onFilter) {
      var q = D({ count: o.length });
      Y = H.onFilter({ inputValue: y, resultsMessage: q });
    }
    return Y;
  }, [o, y, T, H, E, D, A]), lt = (i == null ? void 0 : i.action) === "initial-input-focus", ft = Z.useMemo(function() {
    var Y = "";
    if (H.guidance) {
      var q = u ? "value" : T ? "menu" : "input";
      Y = H.guidance({ "aria-label": $, context: q, isDisabled: a && S(a, s), isMulti: w, isSearchable: x, tabSelectsValue: O, isInitialFocus: lt });
    }
    return Y;
  }, [$, a, u, w, S, x, T, H, s, O, lt]), ct = yt(Z.Fragment, null, yt("span", { id: "aria-selection" }, z), yt("span", { id: "aria-focused" }, G), yt("span", { id: "aria-results" }, V), yt("span", { id: "aria-guidance" }, ft));
  return yt(Z.Fragment, null, yt(O2, { id: p }, lt && ct), yt(O2, { "aria-live": N, "aria-atomic": "false", "aria-relevant": "additions text", role: "log" }, f && !lt && ct));
}, aA = rA, Yp = [{ base: "A", letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F" }, { base: "AA", letters: "\uA732" }, { base: "AE", letters: "\xC6\u01FC\u01E2" }, { base: "AO", letters: "\uA734" }, { base: "AU", letters: "\uA736" }, { base: "AV", letters: "\uA738\uA73A" }, { base: "AY", letters: "\uA73C" }, { base: "B", letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181" }, { base: "C", letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E" }, { base: "D", letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779" }, { base: "DZ", letters: "\u01F1\u01C4" }, { base: "Dz", letters: "\u01F2\u01C5" }, { base: "E", letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E" }, { base: "F", letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B" }, { base: "G", letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E" }, { base: "H", letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D" }, { base: "I", letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197" }, { base: "J", letters: "J\u24BF\uFF2A\u0134\u0248" }, { base: "K", letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2" }, { base: "L", letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780" }, { base: "LJ", letters: "\u01C7" }, { base: "Lj", letters: "\u01C8" }, { base: "M", letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C" }, { base: "N", letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4" }, { base: "NJ", letters: "\u01CA" }, { base: "Nj", letters: "\u01CB" }, { base: "O", letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C" }, { base: "OI", letters: "\u01A2" }, { base: "OO", letters: "\uA74E" }, { base: "OU", letters: "\u0222" }, { base: "P", letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754" }, { base: "Q", letters: "Q\u24C6\uFF31\uA756\uA758\u024A" }, { base: "R", letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782" }, { base: "S", letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784" }, { base: "T", letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786" }, { base: "TZ", letters: "\uA728" }, { base: "U", letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244" }, { base: "V", letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245" }, { base: "VY", letters: "\uA760" }, { base: "W", letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72" }, { base: "X", letters: "X\u24CD\uFF38\u1E8A\u1E8C" }, { base: "Y", letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE" }, { base: "Z", letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762" }, { base: "a", letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250" }, { base: "aa", letters: "\uA733" }, { base: "ae", letters: "\xE6\u01FD\u01E3" }, { base: "ao", letters: "\uA735" }, { base: "au", letters: "\uA737" }, { base: "av", letters: "\uA739\uA73B" }, { base: "ay", letters: "\uA73D" }, { base: "b", letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253" }, { base: "c", letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184" }, { base: "d", letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A" }, { base: "dz", letters: "\u01F3\u01C6" }, { base: "e", letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD" }, { base: "f", letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C" }, { base: "g", letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F" }, { base: "h", letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265" }, { base: "hv", letters: "\u0195" }, { base: "i", letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131" }, { base: "j", letters: "j\u24D9\uFF4A\u0135\u01F0\u0249" }, { base: "k", letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3" }, { base: "l", letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747" }, { base: "lj", letters: "\u01C9" }, { base: "m", letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F" }, { base: "n", letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5" }, { base: "nj", letters: "\u01CC" }, { base: "o", letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275" }, { base: "oi", letters: "\u01A3" }, { base: "ou", letters: "\u0223" }, { base: "oo", letters: "\uA74F" }, { base: "p", letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755" }, { base: "q", letters: "q\u24E0\uFF51\u024B\uA757\uA759" }, { base: "r", letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783" }, { base: "s", letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B" }, { base: "t", letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787" }, { base: "tz", letters: "\uA729" }, { base: "u", letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289" }, { base: "v", letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C" }, { base: "vy", letters: "\uA761" }, { base: "w", letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73" }, { base: "x", letters: "x\u24E7\uFF58\u1E8B\u1E8D" }, { base: "y", letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF" }, { base: "z", letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763" }], uA = new RegExp("[" + Yp.map(function(t14) {
  return t14.letters;
}).join("") + "]", "g"), M3 = {};
for (var Q0 = 0; Q0 < Yp.length; Q0++) for (var K0 = Yp[Q0], P0 = 0; P0 < K0.letters.length; P0++) M3[K0.letters[P0]] = K0.base;
var T3 = function(e) {
  return e.replace(uA, function(i) {
    return M3[i];
  });
}, lA = tA(T3), C2 = function(e) {
  return e.replace(/^\s+|\s+$/g, "");
}, oA = function(e) {
  return "".concat(e.label, " ").concat(e.value);
}, cA = function(e) {
  return function(i, a) {
    if (i.data.__isNew__) return true;
    var u = _t({ ignoreCase: true, ignoreAccents: true, stringify: oA, trim: true, matchFrom: "any" }, e), o = u.ignoreCase, f = u.ignoreAccents, s = u.stringify, d = u.trim, p = u.matchFrom, m = d ? C2(a) : a, b = d ? C2(s(i)) : s(i);
    return o && (m = m.toLowerCase(), b = b.toLowerCase()), f && (m = lA(m), b = T3(b)), p === "start" ? b.substr(0, m.length) === m : b.indexOf(m) > -1;
  };
}, fA = ["innerRef"];
function sA(t14) {
  var e = t14.innerRef, i = Zi(t14, fA), a = VT(i, "onExited", "in", "enter", "exit", "appear");
  return yt("input", xt({ ref: e }, a, { css: Jm({ label: "dummyInput", background: 0, border: 0, caretColor: "transparent", fontSize: "inherit", gridArea: "1 / 1 / 2 / 3", outline: 0, padding: 0, width: 1, color: "transparent", left: -100, opacity: 0, position: "relative", transform: "scale(.01)" }, "", "") }));
}
var dA = function(e) {
  e.cancelable && e.preventDefault(), e.stopPropagation();
};
function hA(t14) {
  var e = t14.isEnabled, i = t14.onBottomArrive, a = t14.onBottomLeave, u = t14.onTopArrive, o = t14.onTopLeave, f = Z.useRef(false), s = Z.useRef(false), d = Z.useRef(0), p = Z.useRef(null), m = Z.useCallback(function(x, T) {
    if (p.current !== null) {
      var E = p.current, D = E.scrollTop, O = E.scrollHeight, A = E.clientHeight, $ = p.current, N = T > 0, H = O - A - D, z = false;
      H > T && f.current && (a && a(x), f.current = false), N && s.current && (o && o(x), s.current = false), N && T > H ? (i && !f.current && i(x), $.scrollTop = O, z = true, f.current = true) : !N && -T > D && (u && !s.current && u(x), $.scrollTop = 0, z = true, s.current = true), z && dA(x);
    }
  }, [i, a, u, o]), b = Z.useCallback(function(x) {
    m(x, x.deltaY);
  }, [m]), v = Z.useCallback(function(x) {
    d.current = x.changedTouches[0].clientY;
  }, []), y = Z.useCallback(function(x) {
    var T = d.current - x.changedTouches[0].clientY;
    m(x, T);
  }, [m]), w = Z.useCallback(function(x) {
    if (x) {
      var T = UT ? { passive: false } : false;
      x.addEventListener("wheel", b, T), x.addEventListener("touchstart", v, T), x.addEventListener("touchmove", y, T);
    }
  }, [y, v, b]), S = Z.useCallback(function(x) {
    x && (x.removeEventListener("wheel", b, false), x.removeEventListener("touchstart", v, false), x.removeEventListener("touchmove", y, false));
  }, [y, v, b]);
  return Z.useEffect(function() {
    if (e) {
      var x = p.current;
      return w(x), function() {
        S(x);
      };
    }
  }, [e, w, S]), function(x) {
    p.current = x;
  };
}
var D2 = ["boxSizing", "height", "overflow", "paddingRight", "position"], R2 = { boxSizing: "border-box", overflow: "hidden", position: "relative", height: "100%" };
function N2(t14) {
  t14.cancelable && t14.preventDefault();
}
function $2(t14) {
  t14.stopPropagation();
}
function z2() {
  var t14 = this.scrollTop, e = this.scrollHeight, i = t14 + this.offsetHeight;
  t14 === 0 ? this.scrollTop = 1 : i === e && (this.scrollTop = t14 - 1);
}
function U2() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var L2 = !!(typeof window < "u" && window.document && window.document.createElement), Yl = 0, du = { capture: false, passive: false };
function pA(t14) {
  var e = t14.isEnabled, i = t14.accountForScrollbars, a = i === void 0 ? true : i, u = Z.useRef({}), o = Z.useRef(null), f = Z.useCallback(function(d) {
    if (L2) {
      var p = document.body, m = p && p.style;
      if (a && D2.forEach(function(w) {
        var S = m && m[w];
        u.current[w] = S;
      }), a && Yl < 1) {
        var b = parseInt(u.current.paddingRight, 10) || 0, v = document.body ? document.body.clientWidth : 0, y = window.innerWidth - v + b || 0;
        Object.keys(R2).forEach(function(w) {
          var S = R2[w];
          m && (m[w] = S);
        }), m && (m.paddingRight = "".concat(y, "px"));
      }
      p && U2() && (p.addEventListener("touchmove", N2, du), d && (d.addEventListener("touchstart", z2, du), d.addEventListener("touchmove", $2, du))), Yl += 1;
    }
  }, [a]), s = Z.useCallback(function(d) {
    if (L2) {
      var p = document.body, m = p && p.style;
      Yl = Math.max(Yl - 1, 0), a && Yl < 1 && D2.forEach(function(b) {
        var v = u.current[b];
        m && (m[b] = v);
      }), p && U2() && (p.removeEventListener("touchmove", N2, du), d && (d.removeEventListener("touchstart", z2, du), d.removeEventListener("touchmove", $2, du)));
    }
  }, [a]);
  return Z.useEffect(function() {
    if (e) {
      var d = o.current;
      return f(d), function() {
        s(d);
      };
    }
  }, [e, f, s]), function(d) {
    o.current = d;
  };
}
var mA = function(e) {
  var i = e.target;
  return i.ownerDocument.activeElement && i.ownerDocument.activeElement.blur();
}, gA = { name: "1kfdb0e", styles: "position:fixed;left:0;bottom:0;right:0;top:0" };
function bA(t14) {
  var e = t14.children, i = t14.lockEnabled, a = t14.captureEnabled, u = a === void 0 ? true : a, o = t14.onBottomArrive, f = t14.onBottomLeave, s = t14.onTopArrive, d = t14.onTopLeave, p = hA({ isEnabled: u, onBottomArrive: o, onBottomLeave: f, onTopArrive: s, onTopLeave: d }), m = pA({ isEnabled: i }), b = function(y) {
    p(y), m(y);
  };
  return yt(Z.Fragment, null, i && yt("div", { onClick: mA, css: gA }), e(b));
}
var vA = { name: "1a0ro4n-requiredInput", styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%" }, yA = function(e) {
  var i = e.name, a = e.onFocus;
  return yt("input", { required: true, name: i, tabIndex: -1, "aria-hidden": "true", onFocus: a, css: vA, value: "", onChange: function() {
  } });
}, _A = yA;
function rg(t14) {
  var e;
  return typeof window < "u" && window.navigator != null ? t14.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform) : false;
}
function wA() {
  return rg(/^iPhone/i);
}
function E3() {
  return rg(/^Mac/i);
}
function SA() {
  return rg(/^iPad/i) || E3() && navigator.maxTouchPoints > 1;
}
function xA() {
  return wA() || SA();
}
function MA() {
  return E3() || xA();
}
var TA = function(e) {
  return e.label;
}, EA = function(e) {
  return e.label;
}, AA = function(e) {
  return e.value;
}, OA = function(e) {
  return !!e.isDisabled;
}, CA = { clearIndicator: dE, container: eE, control: yE, dropdownIndicator: fE, group: xE, groupHeading: TE, indicatorsContainer: aE, indicatorSeparator: pE, input: CE, loadingIndicator: bE, loadingMessage: PT, menu: YT, menuList: ZT, menuPortal: JT, multiValue: zE, multiValueLabel: UE, multiValueRemove: LE, noOptionsMessage: KT, option: kE, placeholder: XE, singleValue: QE, valueContainer: iE }, DA = { primary: "#2684FF", primary75: "#4C9AFF", primary50: "#B2D4FF", primary25: "#DEEBFF", danger: "#DE350B", dangerLight: "#FFBDAD", neutral0: "hsl(0, 0%, 100%)", neutral5: "hsl(0, 0%, 95%)", neutral10: "hsl(0, 0%, 90%)", neutral20: "hsl(0, 0%, 80%)", neutral30: "hsl(0, 0%, 70%)", neutral40: "hsl(0, 0%, 60%)", neutral50: "hsl(0, 0%, 50%)", neutral60: "hsl(0, 0%, 40%)", neutral70: "hsl(0, 0%, 30%)", neutral80: "hsl(0, 0%, 20%)", neutral90: "hsl(0, 0%, 10%)" }, RA = 4, A3 = 4, NA = 38, $A = A3 * 2, zA = { baseUnit: A3, controlHeight: NA, menuGutter: $A }, I0 = { borderRadius: RA, colors: DA, spacing: zA }, UA = { "aria-live": "polite", backspaceRemovesValue: true, blurInputOnSelect: T2(), captureMenuScroll: !T2(), classNames: {}, closeMenuOnSelect: true, closeMenuOnScroll: false, components: {}, controlShouldRenderValue: true, escapeClearsValue: false, filterOption: cA(), formatGroupLabel: TA, getOptionLabel: EA, getOptionValue: AA, isDisabled: false, isLoading: false, isMulti: false, isRtl: false, isSearchable: true, isOptionDisabled: OA, loadingMessage: function() {
  return "Loading...";
}, maxMenuHeight: 300, minMenuHeight: 140, menuIsOpen: false, menuPlacement: "bottom", menuPosition: "absolute", menuShouldBlockScroll: false, menuShouldScrollIntoView: !$T(), noOptionsMessage: function() {
  return "No options";
}, openMenuOnFocus: false, openMenuOnClick: true, options: [], pageSize: 5, placeholder: "Select...", screenReaderStatus: function(e) {
  var i = e.count;
  return "".concat(i, " result").concat(i !== 1 ? "s" : "", " available");
}, styles: {}, tabIndex: 0, tabSelectsValue: true, unstyled: false };
function H2(t14, e, i, a) {
  var u = D3(t14, e, i), o = R3(t14, e, i), f = C3(t14, e), s = us(t14, e);
  return { type: "option", data: e, isDisabled: u, isSelected: o, label: f, value: s, index: a };
}
function Gf(t14, e) {
  return t14.options.map(function(i, a) {
    if ("options" in i) {
      var u = i.options.map(function(f, s) {
        return H2(t14, f, e, s);
      }).filter(function(f) {
        return j2(t14, f);
      });
      return u.length > 0 ? { type: "group", data: i, options: u, index: a } : void 0;
    }
    var o = H2(t14, i, e, a);
    return j2(t14, o) ? o : void 0;
  }).filter(LT);
}
function O3(t14) {
  return t14.reduce(function(e, i) {
    return i.type === "group" ? e.push.apply(e, Qm(i.options.map(function(a) {
      return a.data;
    }))) : e.push(i.data), e;
  }, []);
}
function V2(t14, e) {
  return t14.reduce(function(i, a) {
    return a.type === "group" ? i.push.apply(i, Qm(a.options.map(function(u) {
      return { data: u.data, id: "".concat(e, "-").concat(a.index, "-").concat(u.index) };
    }))) : i.push({ data: a.data, id: "".concat(e, "-").concat(a.index) }), i;
  }, []);
}
function LA(t14, e) {
  return O3(Gf(t14, e));
}
function j2(t14, e) {
  var i = t14.inputValue, a = i === void 0 ? "" : i, u = e.data, o = e.isSelected, f = e.label, s = e.value;
  return (!$3(t14) || !o) && N3(t14, { label: f, value: s, data: u }, a);
}
function HA(t14, e) {
  var i = t14.focusedValue, a = t14.selectValue, u = a.indexOf(i);
  if (u > -1) {
    var o = e.indexOf(i);
    if (o > -1) return i;
    if (u < e.length) return e[u];
  }
  return null;
}
function VA(t14, e) {
  var i = t14.focusedOption;
  return i && e.indexOf(i) > -1 ? i : e[0];
}
var W0 = function(e, i) {
  var a, u = (a = e.find(function(o) {
    return o.data === i;
  })) === null || a === void 0 ? void 0 : a.id;
  return u || null;
}, C3 = function(e, i) {
  return e.getOptionLabel(i);
}, us = function(e, i) {
  return e.getOptionValue(i);
};
function D3(t14, e, i) {
  return typeof t14.isOptionDisabled == "function" ? t14.isOptionDisabled(e, i) : false;
}
function R3(t14, e, i) {
  if (i.indexOf(e) > -1) return true;
  if (typeof t14.isOptionSelected == "function") return t14.isOptionSelected(e, i);
  var a = us(t14, e);
  return i.some(function(u) {
    return us(t14, u) === a;
  });
}
function N3(t14, e, i) {
  return t14.filterOption ? t14.filterOption(e, i) : true;
}
var $3 = function(e) {
  var i = e.hideSelectedOptions, a = e.isMulti;
  return i === void 0 ? a : i;
}, jA = 1, z3 = function(t14) {
  lM(i, t14);
  var e = fM(i);
  function i(a) {
    var u;
    if (aM(this, i), u = e.call(this, a), u.state = { ariaSelection: null, focusedOption: null, focusedOptionId: null, focusableOptionsWithIds: [], focusedValue: null, inputIsHidden: false, isFocused: false, selectValue: [], clearFocusValueOnUpdate: false, prevWasFocused: false, inputIsHiddenAfterUpdate: void 0, prevProps: void 0, instancePrefix: "" }, u.blockOptionHover = false, u.isComposing = false, u.commonProps = void 0, u.initialTouchX = 0, u.initialTouchY = 0, u.openAfterFocus = false, u.scrollToFocusedOptionOnUpdate = false, u.userIsDragging = void 0, u.isAppleDevice = MA(), u.controlRef = null, u.getControlRef = function(d) {
      u.controlRef = d;
    }, u.focusedOptionRef = null, u.getFocusedOptionRef = function(d) {
      u.focusedOptionRef = d;
    }, u.menuListRef = null, u.getMenuListRef = function(d) {
      u.menuListRef = d;
    }, u.inputRef = null, u.getInputRef = function(d) {
      u.inputRef = d;
    }, u.focus = u.focusInput, u.blur = u.blurInput, u.onChange = function(d, p) {
      var m = u.props, b = m.onChange, v = m.name;
      p.name = v, u.ariaOnChange(d, p), b(d, p);
    }, u.setValue = function(d, p, m) {
      var b = u.props, v = b.closeMenuOnSelect, y = b.isMulti, w = b.inputValue;
      u.onInputChange("", { action: "set-value", prevInputValue: w }), v && (u.setState({ inputIsHiddenAfterUpdate: !y }), u.onMenuClose()), u.setState({ clearFocusValueOnUpdate: true }), u.onChange(d, { action: p, option: m });
    }, u.selectOption = function(d) {
      var p = u.props, m = p.blurInputOnSelect, b = p.isMulti, v = p.name, y = u.state.selectValue, w = b && u.isOptionSelected(d, y), S = u.isOptionDisabled(d, y);
      if (w) {
        var x = u.getOptionValue(d);
        u.setValue(y.filter(function(T) {
          return u.getOptionValue(T) !== x;
        }), "deselect-option", d);
      } else if (!S) b ? u.setValue([].concat(Qm(y), [d]), "select-option", d) : u.setValue(d, "select-option");
      else {
        u.ariaOnChange(d, { action: "select-option", option: d, name: v });
        return;
      }
      m && u.blurInput();
    }, u.removeValue = function(d) {
      var p = u.props.isMulti, m = u.state.selectValue, b = u.getOptionValue(d), v = m.filter(function(w) {
        return u.getOptionValue(w) !== b;
      }), y = vf(p, v, v[0] || null);
      u.onChange(y, { action: "remove-value", removedValue: d }), u.focusInput();
    }, u.clearValue = function() {
      var d = u.state.selectValue;
      u.onChange(vf(u.props.isMulti, [], null), { action: "clear", removedValues: d });
    }, u.popValue = function() {
      var d = u.props.isMulti, p = u.state.selectValue, m = p[p.length - 1], b = p.slice(0, p.length - 1), v = vf(d, b, b[0] || null);
      m && u.onChange(v, { action: "pop-value", removedValue: m });
    }, u.getFocusedOptionId = function(d) {
      return W0(u.state.focusableOptionsWithIds, d);
    }, u.getFocusableOptionsWithIds = function() {
      return V2(Gf(u.props, u.state.selectValue), u.getElementId("option"));
    }, u.getValue = function() {
      return u.state.selectValue;
    }, u.cx = function() {
      for (var d = arguments.length, p = new Array(d), m = 0; m < d; m++) p[m] = arguments[m];
      return OT.apply(void 0, [u.props.classNamePrefix].concat(p));
    }, u.getOptionLabel = function(d) {
      return C3(u.props, d);
    }, u.getOptionValue = function(d) {
      return us(u.props, d);
    }, u.getStyles = function(d, p) {
      var m = u.props.unstyled, b = CA[d](p, m);
      b.boxSizing = "border-box";
      var v = u.props.styles[d];
      return v ? v(b, p) : b;
    }, u.getClassNames = function(d, p) {
      var m, b;
      return (m = (b = u.props.classNames)[d]) === null || m === void 0 ? void 0 : m.call(b, p);
    }, u.getElementId = function(d) {
      return "".concat(u.state.instancePrefix, "-").concat(d);
    }, u.getComponents = function() {
      return IE(u.props);
    }, u.buildCategorizedOptions = function() {
      return Gf(u.props, u.state.selectValue);
    }, u.getCategorizedOptions = function() {
      return u.props.menuIsOpen ? u.buildCategorizedOptions() : [];
    }, u.buildFocusableOptions = function() {
      return O3(u.buildCategorizedOptions());
    }, u.getFocusableOptions = function() {
      return u.props.menuIsOpen ? u.buildFocusableOptions() : [];
    }, u.ariaOnChange = function(d, p) {
      u.setState({ ariaSelection: _t({ value: d }, p) });
    }, u.onMenuMouseDown = function(d) {
      d.button === 0 && (d.stopPropagation(), d.preventDefault(), u.focusInput());
    }, u.onMenuMouseMove = function(d) {
      u.blockOptionHover = false;
    }, u.onControlMouseDown = function(d) {
      if (!d.defaultPrevented) {
        var p = u.props.openMenuOnClick;
        u.state.isFocused ? u.props.menuIsOpen ? d.target.tagName !== "INPUT" && d.target.tagName !== "TEXTAREA" && u.onMenuClose() : p && u.openMenu("first") : (p && (u.openAfterFocus = true), u.focusInput()), d.target.tagName !== "INPUT" && d.target.tagName !== "TEXTAREA" && d.preventDefault();
      }
    }, u.onDropdownIndicatorMouseDown = function(d) {
      if (!(d && d.type === "mousedown" && d.button !== 0) && !u.props.isDisabled) {
        var p = u.props, m = p.isMulti, b = p.menuIsOpen;
        u.focusInput(), b ? (u.setState({ inputIsHiddenAfterUpdate: !m }), u.onMenuClose()) : u.openMenu("first"), d.preventDefault();
      }
    }, u.onClearIndicatorMouseDown = function(d) {
      d && d.type === "mousedown" && d.button !== 0 || (u.clearValue(), d.preventDefault(), u.openAfterFocus = false, d.type === "touchend" ? u.focusInput() : setTimeout(function() {
        return u.focusInput();
      }));
    }, u.onScroll = function(d) {
      typeof u.props.closeMenuOnScroll == "boolean" ? d.target instanceof HTMLElement && Is(d.target) && u.props.onMenuClose() : typeof u.props.closeMenuOnScroll == "function" && u.props.closeMenuOnScroll(d) && u.props.onMenuClose();
    }, u.onCompositionStart = function() {
      u.isComposing = true;
    }, u.onCompositionEnd = function() {
      u.isComposing = false;
    }, u.onTouchStart = function(d) {
      var p = d.touches, m = p && p.item(0);
      m && (u.initialTouchX = m.clientX, u.initialTouchY = m.clientY, u.userIsDragging = false);
    }, u.onTouchMove = function(d) {
      var p = d.touches, m = p && p.item(0);
      if (m) {
        var b = Math.abs(m.clientX - u.initialTouchX), v = Math.abs(m.clientY - u.initialTouchY), y = 5;
        u.userIsDragging = b > y || v > y;
      }
    }, u.onTouchEnd = function(d) {
      u.userIsDragging || (u.controlRef && !u.controlRef.contains(d.target) && u.menuListRef && !u.menuListRef.contains(d.target) && u.blurInput(), u.initialTouchX = 0, u.initialTouchY = 0);
    }, u.onControlTouchEnd = function(d) {
      u.userIsDragging || u.onControlMouseDown(d);
    }, u.onClearIndicatorTouchEnd = function(d) {
      u.userIsDragging || u.onClearIndicatorMouseDown(d);
    }, u.onDropdownIndicatorTouchEnd = function(d) {
      u.userIsDragging || u.onDropdownIndicatorMouseDown(d);
    }, u.handleInputChange = function(d) {
      var p = u.props.inputValue, m = d.currentTarget.value;
      u.setState({ inputIsHiddenAfterUpdate: false }), u.onInputChange(m, { action: "input-change", prevInputValue: p }), u.props.menuIsOpen || u.onMenuOpen();
    }, u.onInputFocus = function(d) {
      u.props.onFocus && u.props.onFocus(d), u.setState({ inputIsHiddenAfterUpdate: false, isFocused: true }), (u.openAfterFocus || u.props.openMenuOnFocus) && u.openMenu("first"), u.openAfterFocus = false;
    }, u.onInputBlur = function(d) {
      var p = u.props.inputValue;
      if (u.menuListRef && u.menuListRef.contains(document.activeElement)) {
        u.inputRef.focus();
        return;
      }
      u.props.onBlur && u.props.onBlur(d), u.onInputChange("", { action: "input-blur", prevInputValue: p }), u.onMenuClose(), u.setState({ focusedValue: null, isFocused: false });
    }, u.onOptionHover = function(d) {
      if (!(u.blockOptionHover || u.state.focusedOption === d)) {
        var p = u.getFocusableOptions(), m = p.indexOf(d);
        u.setState({ focusedOption: d, focusedOptionId: m > -1 ? u.getFocusedOptionId(d) : null });
      }
    }, u.shouldHideSelectedOptions = function() {
      return $3(u.props);
    }, u.onValueInputFocus = function(d) {
      d.preventDefault(), d.stopPropagation(), u.focus();
    }, u.onKeyDown = function(d) {
      var p = u.props, m = p.isMulti, b = p.backspaceRemovesValue, v = p.escapeClearsValue, y = p.inputValue, w = p.isClearable, S = p.isDisabled, x = p.menuIsOpen, T = p.onKeyDown, E = p.tabSelectsValue, D = p.openMenuOnFocus, O = u.state, A = O.focusedOption, $ = O.focusedValue, N = O.selectValue;
      if (!S && !(typeof T == "function" && (T(d), d.defaultPrevented))) {
        switch (u.blockOptionHover = true, d.key) {
          case "ArrowLeft":
            if (!m || y) return;
            u.focusValue("previous");
            break;
          case "ArrowRight":
            if (!m || y) return;
            u.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (y) return;
            if ($) u.removeValue($);
            else {
              if (!b) return;
              m ? u.popValue() : w && u.clearValue();
            }
            break;
          case "Tab":
            if (u.isComposing || d.shiftKey || !x || !E || !A || D && u.isOptionSelected(A, N)) return;
            u.selectOption(A);
            break;
          case "Enter":
            if (d.keyCode === 229) break;
            if (x) {
              if (!A || u.isComposing) return;
              u.selectOption(A);
              break;
            }
            return;
          case "Escape":
            x ? (u.setState({ inputIsHiddenAfterUpdate: false }), u.onInputChange("", { action: "menu-close", prevInputValue: y }), u.onMenuClose()) : w && v && u.clearValue();
            break;
          case " ":
            if (y) return;
            if (!x) {
              u.openMenu("first");
              break;
            }
            if (!A) return;
            u.selectOption(A);
            break;
          case "ArrowUp":
            x ? u.focusOption("up") : u.openMenu("last");
            break;
          case "ArrowDown":
            x ? u.focusOption("down") : u.openMenu("first");
            break;
          case "PageUp":
            if (!x) return;
            u.focusOption("pageup");
            break;
          case "PageDown":
            if (!x) return;
            u.focusOption("pagedown");
            break;
          case "Home":
            if (!x) return;
            u.focusOption("first");
            break;
          case "End":
            if (!x) return;
            u.focusOption("last");
            break;
          default:
            return;
        }
        d.preventDefault();
      }
    }, u.state.instancePrefix = "react-select-" + (u.props.instanceId || ++jA), u.state.selectValue = x2(a.value), a.menuIsOpen && u.state.selectValue.length) {
      var o = u.getFocusableOptionsWithIds(), f = u.buildFocusableOptions(), s = f.indexOf(u.state.selectValue[0]);
      u.state.focusableOptionsWithIds = o, u.state.focusedOption = f[s], u.state.focusedOptionId = W0(o, f[s]);
    }
    return u;
  }
  return uM(i, [{ key: "componentDidMount", value: function() {
    this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, true), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && M2(this.menuListRef, this.focusedOptionRef);
  } }, { key: "componentDidUpdate", value: function(u) {
    var o = this.props, f = o.isDisabled, s = o.menuIsOpen, d = this.state.isFocused;
    (d && !f && u.isDisabled || d && s && !u.menuIsOpen) && this.focusInput(), d && f && !u.isDisabled ? this.setState({ isFocused: false }, this.onMenuClose) : !d && !f && u.isDisabled && this.inputRef === document.activeElement && this.setState({ isFocused: true }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (M2(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = false);
  } }, { key: "componentWillUnmount", value: function() {
    this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, true);
  } }, { key: "onMenuOpen", value: function() {
    this.props.onMenuOpen();
  } }, { key: "onMenuClose", value: function() {
    this.onInputChange("", { action: "menu-close", prevInputValue: this.props.inputValue }), this.props.onMenuClose();
  } }, { key: "onInputChange", value: function(u, o) {
    this.props.onInputChange(u, o);
  } }, { key: "focusInput", value: function() {
    this.inputRef && this.inputRef.focus();
  } }, { key: "blurInput", value: function() {
    this.inputRef && this.inputRef.blur();
  } }, { key: "openMenu", value: function(u) {
    var o = this, f = this.state, s = f.selectValue, d = f.isFocused, p = this.buildFocusableOptions(), m = u === "first" ? 0 : p.length - 1;
    if (!this.props.isMulti) {
      var b = p.indexOf(s[0]);
      b > -1 && (m = b);
    }
    this.scrollToFocusedOptionOnUpdate = !(d && this.menuListRef), this.setState({ inputIsHiddenAfterUpdate: false, focusedValue: null, focusedOption: p[m], focusedOptionId: this.getFocusedOptionId(p[m]) }, function() {
      return o.onMenuOpen();
    });
  } }, { key: "focusValue", value: function(u) {
    var o = this.state, f = o.selectValue, s = o.focusedValue;
    if (this.props.isMulti) {
      this.setState({ focusedOption: null });
      var d = f.indexOf(s);
      s || (d = -1);
      var p = f.length - 1, m = -1;
      if (f.length) {
        switch (u) {
          case "previous":
            d === 0 ? m = 0 : d === -1 ? m = p : m = d - 1;
            break;
          case "next":
            d > -1 && d < p && (m = d + 1);
            break;
        }
        this.setState({ inputIsHidden: m !== -1, focusedValue: f[m] });
      }
    }
  } }, { key: "focusOption", value: function() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", o = this.props.pageSize, f = this.state.focusedOption, s = this.getFocusableOptions();
    if (s.length) {
      var d = 0, p = s.indexOf(f);
      f || (p = -1), u === "up" ? d = p > 0 ? p - 1 : s.length - 1 : u === "down" ? d = (p + 1) % s.length : u === "pageup" ? (d = p - o, d < 0 && (d = 0)) : u === "pagedown" ? (d = p + o, d > s.length - 1 && (d = s.length - 1)) : u === "last" && (d = s.length - 1), this.scrollToFocusedOptionOnUpdate = true, this.setState({ focusedOption: s[d], focusedValue: null, focusedOptionId: this.getFocusedOptionId(s[d]) });
    }
  } }, { key: "getTheme", value: function() {
    return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(I0) : _t(_t({}, I0), this.props.theme) : I0;
  } }, { key: "getCommonProps", value: function() {
    var u = this.clearValue, o = this.cx, f = this.getStyles, s = this.getClassNames, d = this.getValue, p = this.selectOption, m = this.setValue, b = this.props, v = b.isMulti, y = b.isRtl, w = b.options, S = this.hasValue();
    return { clearValue: u, cx: o, getStyles: f, getClassNames: s, getValue: d, hasValue: S, isMulti: v, isRtl: y, options: w, selectOption: p, selectProps: b, setValue: m, theme: this.getTheme() };
  } }, { key: "hasValue", value: function() {
    var u = this.state.selectValue;
    return u.length > 0;
  } }, { key: "hasOptions", value: function() {
    return !!this.getFocusableOptions().length;
  } }, { key: "isClearable", value: function() {
    var u = this.props, o = u.isClearable, f = u.isMulti;
    return o === void 0 ? f : o;
  } }, { key: "isOptionDisabled", value: function(u, o) {
    return D3(this.props, u, o);
  } }, { key: "isOptionSelected", value: function(u, o) {
    return R3(this.props, u, o);
  } }, { key: "filterOption", value: function(u, o) {
    return N3(this.props, u, o);
  } }, { key: "formatOptionLabel", value: function(u, o) {
    if (typeof this.props.formatOptionLabel == "function") {
      var f = this.props.inputValue, s = this.state.selectValue;
      return this.props.formatOptionLabel(u, { context: o, inputValue: f, selectValue: s });
    } else return this.getOptionLabel(u);
  } }, { key: "formatGroupLabel", value: function(u) {
    return this.props.formatGroupLabel(u);
  } }, { key: "startListeningComposition", value: function() {
    document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, false), document.addEventListener("compositionend", this.onCompositionEnd, false));
  } }, { key: "stopListeningComposition", value: function() {
    document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
  } }, { key: "startListeningToTouch", value: function() {
    document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, false), document.addEventListener("touchmove", this.onTouchMove, false), document.addEventListener("touchend", this.onTouchEnd, false));
  } }, { key: "stopListeningToTouch", value: function() {
    document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
  } }, { key: "renderInput", value: function() {
    var u = this.props, o = u.isDisabled, f = u.isSearchable, s = u.inputId, d = u.inputValue, p = u.tabIndex, m = u.form, b = u.menuIsOpen, v = u.required, y = this.getComponents(), w = y.Input, S = this.state, x = S.inputIsHidden, T = S.ariaSelection, E = this.commonProps, D = s || this.getElementId("input"), O = _t(_t(_t({ "aria-autocomplete": "list", "aria-expanded": b, "aria-haspopup": true, "aria-errormessage": this.props["aria-errormessage"], "aria-invalid": this.props["aria-invalid"], "aria-label": this.props["aria-label"], "aria-labelledby": this.props["aria-labelledby"], "aria-required": v, role: "combobox", "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || "" }, b && { "aria-controls": this.getElementId("listbox") }), !f && { "aria-readonly": true }), this.hasValue() ? (T == null ? void 0 : T.action) === "initial-input-focus" && { "aria-describedby": this.getElementId("live-region") } : { "aria-describedby": this.getElementId("placeholder") });
    return f ? Z.createElement(w, xt({}, E, { autoCapitalize: "none", autoComplete: "off", autoCorrect: "off", id: D, innerRef: this.getInputRef, isDisabled: o, isHidden: x, onBlur: this.onInputBlur, onChange: this.handleInputChange, onFocus: this.onInputFocus, spellCheck: "false", tabIndex: p, form: m, type: "text", value: d }, O)) : Z.createElement(sA, xt({ id: D, innerRef: this.getInputRef, onBlur: this.onInputBlur, onChange: rs, onFocus: this.onInputFocus, disabled: o, tabIndex: p, inputMode: "none", form: m, value: "" }, O));
  } }, { key: "renderPlaceholderOrValue", value: function() {
    var u = this, o = this.getComponents(), f = o.MultiValue, s = o.MultiValueContainer, d = o.MultiValueLabel, p = o.MultiValueRemove, m = o.SingleValue, b = o.Placeholder, v = this.commonProps, y = this.props, w = y.controlShouldRenderValue, S = y.isDisabled, x = y.isMulti, T = y.inputValue, E = y.placeholder, D = this.state, O = D.selectValue, A = D.focusedValue, $ = D.isFocused;
    if (!this.hasValue() || !w) return T ? null : Z.createElement(b, xt({}, v, { key: "placeholder", isDisabled: S, isFocused: $, innerProps: { id: this.getElementId("placeholder") } }), E);
    if (x) return O.map(function(H, z) {
      var G = H === A, V = "".concat(u.getOptionLabel(H), "-").concat(u.getOptionValue(H));
      return Z.createElement(f, xt({}, v, { components: { Container: s, Label: d, Remove: p }, isFocused: G, isDisabled: S, key: V, index: z, removeProps: { onClick: function() {
        return u.removeValue(H);
      }, onTouchEnd: function() {
        return u.removeValue(H);
      }, onMouseDown: function(ft) {
        ft.preventDefault();
      } }, data: H }), u.formatOptionLabel(H, "value"));
    });
    if (T) return null;
    var N = O[0];
    return Z.createElement(m, xt({}, v, { data: N, isDisabled: S }), this.formatOptionLabel(N, "value"));
  } }, { key: "renderClearIndicator", value: function() {
    var u = this.getComponents(), o = u.ClearIndicator, f = this.commonProps, s = this.props, d = s.isDisabled, p = s.isLoading, m = this.state.isFocused;
    if (!this.isClearable() || !o || d || !this.hasValue() || p) return null;
    var b = { onMouseDown: this.onClearIndicatorMouseDown, onTouchEnd: this.onClearIndicatorTouchEnd, "aria-hidden": "true" };
    return Z.createElement(o, xt({}, f, { innerProps: b, isFocused: m }));
  } }, { key: "renderLoadingIndicator", value: function() {
    var u = this.getComponents(), o = u.LoadingIndicator, f = this.commonProps, s = this.props, d = s.isDisabled, p = s.isLoading, m = this.state.isFocused;
    if (!o || !p) return null;
    var b = { "aria-hidden": "true" };
    return Z.createElement(o, xt({}, f, { innerProps: b, isDisabled: d, isFocused: m }));
  } }, { key: "renderIndicatorSeparator", value: function() {
    var u = this.getComponents(), o = u.DropdownIndicator, f = u.IndicatorSeparator;
    if (!o || !f) return null;
    var s = this.commonProps, d = this.props.isDisabled, p = this.state.isFocused;
    return Z.createElement(f, xt({}, s, { isDisabled: d, isFocused: p }));
  } }, { key: "renderDropdownIndicator", value: function() {
    var u = this.getComponents(), o = u.DropdownIndicator;
    if (!o) return null;
    var f = this.commonProps, s = this.props.isDisabled, d = this.state.isFocused, p = { onMouseDown: this.onDropdownIndicatorMouseDown, onTouchEnd: this.onDropdownIndicatorTouchEnd, "aria-hidden": "true" };
    return Z.createElement(o, xt({}, f, { innerProps: p, isDisabled: s, isFocused: d }));
  } }, { key: "renderMenu", value: function() {
    var u = this, o = this.getComponents(), f = o.Group, s = o.GroupHeading, d = o.Menu, p = o.MenuList, m = o.MenuPortal, b = o.LoadingMessage, v = o.NoOptionsMessage, y = o.Option, w = this.commonProps, S = this.state.focusedOption, x = this.props, T = x.captureMenuScroll, E = x.inputValue, D = x.isLoading, O = x.loadingMessage, A = x.minMenuHeight, $ = x.maxMenuHeight, N = x.menuIsOpen, H = x.menuPlacement, z = x.menuPosition, G = x.menuPortalTarget, V = x.menuShouldBlockScroll, lt = x.menuShouldScrollIntoView, ft = x.noOptionsMessage, ct = x.onMenuScrollToTop, Y = x.onMenuScrollToBottom;
    if (!N) return null;
    var q = function(K, tt) {
      var ht = K.type, dt = K.data, st = K.isDisabled, pt = K.isSelected, W = K.label, ot = K.value, mt = S === dt, et = st ? void 0 : function() {
        return u.onOptionHover(dt);
      }, Nt = st ? void 0 : function() {
        return u.selectOption(dt);
      }, wt = "".concat(u.getElementId("option"), "-").concat(tt), Vt = { id: wt, onClick: Nt, onMouseMove: et, onMouseOver: et, tabIndex: -1, role: "option", "aria-selected": u.isAppleDevice ? void 0 : pt };
      return Z.createElement(y, xt({}, w, { innerProps: Vt, data: dt, isDisabled: st, isSelected: pt, key: wt, label: W, type: ht, value: ot, isFocused: mt, innerRef: mt ? u.getFocusedOptionRef : void 0 }), u.formatOptionLabel(K.data, "menu"));
    }, ut;
    if (this.hasOptions()) ut = this.getCategorizedOptions().map(function(Q) {
      if (Q.type === "group") {
        var K = Q.data, tt = Q.options, ht = Q.index, dt = "".concat(u.getElementId("group"), "-").concat(ht), st = "".concat(dt, "-heading");
        return Z.createElement(f, xt({}, w, { key: dt, data: K, options: tt, Heading: s, headingProps: { id: st, data: Q.data }, label: u.formatGroupLabel(Q.data) }), Q.options.map(function(pt) {
          return q(pt, "".concat(ht, "-").concat(pt.index));
        }));
      } else if (Q.type === "option") return q(Q, "".concat(Q.index));
    });
    else if (D) {
      var nt = O({ inputValue: E });
      if (nt === null) return null;
      ut = Z.createElement(b, w, nt);
    } else {
      var P = ft({ inputValue: E });
      if (P === null) return null;
      ut = Z.createElement(v, w, P);
    }
    var C = { minMenuHeight: A, maxMenuHeight: $, menuPlacement: H, menuPosition: z, menuShouldScrollIntoView: lt }, B = Z.createElement(GT, xt({}, w, C), function(Q) {
      var K = Q.ref, tt = Q.placerProps, ht = tt.placement, dt = tt.maxHeight;
      return Z.createElement(d, xt({}, w, C, { innerRef: K, innerProps: { onMouseDown: u.onMenuMouseDown, onMouseMove: u.onMenuMouseMove }, isLoading: D, placement: ht }), Z.createElement(bA, { captureEnabled: T, onTopArrive: ct, onBottomArrive: Y, lockEnabled: V }, function(st) {
        return Z.createElement(p, xt({}, w, { innerRef: function(W) {
          u.getMenuListRef(W), st(W);
        }, innerProps: { role: "listbox", "aria-multiselectable": w.isMulti, id: u.getElementId("listbox") }, isLoading: D, maxHeight: dt, focusedOption: S }), ut);
      }));
    });
    return G || z === "fixed" ? Z.createElement(m, xt({}, w, { appendTo: G, controlElement: this.controlRef, menuPlacement: H, menuPosition: z }), B) : B;
  } }, { key: "renderFormField", value: function() {
    var u = this, o = this.props, f = o.delimiter, s = o.isDisabled, d = o.isMulti, p = o.name, m = o.required, b = this.state.selectValue;
    if (m && !this.hasValue() && !s) return Z.createElement(_A, { name: p, onFocus: this.onValueInputFocus });
    if (!(!p || s)) if (d) if (f) {
      var v = b.map(function(S) {
        return u.getOptionValue(S);
      }).join(f);
      return Z.createElement("input", { name: p, type: "hidden", value: v });
    } else {
      var y = b.length > 0 ? b.map(function(S, x) {
        return Z.createElement("input", { key: "i-".concat(x), name: p, type: "hidden", value: u.getOptionValue(S) });
      }) : Z.createElement("input", { name: p, type: "hidden", value: "" });
      return Z.createElement("div", null, y);
    }
    else {
      var w = b[0] ? this.getOptionValue(b[0]) : "";
      return Z.createElement("input", { name: p, type: "hidden", value: w });
    }
  } }, { key: "renderLiveRegion", value: function() {
    var u = this.commonProps, o = this.state, f = o.ariaSelection, s = o.focusedOption, d = o.focusedValue, p = o.isFocused, m = o.selectValue, b = this.getFocusableOptions();
    return Z.createElement(aA, xt({}, u, { id: this.getElementId("live-region"), ariaSelection: f, focusedOption: s, focusedValue: d, isFocused: p, selectValue: m, focusableOptions: b, isAppleDevice: this.isAppleDevice }));
  } }, { key: "render", value: function() {
    var u = this.getComponents(), o = u.Control, f = u.IndicatorsContainer, s = u.SelectContainer, d = u.ValueContainer, p = this.props, m = p.className, b = p.id, v = p.isDisabled, y = p.menuIsOpen, w = this.state.isFocused, S = this.commonProps = this.getCommonProps();
    return Z.createElement(s, xt({}, S, { className: m, innerProps: { id: b, onKeyDown: this.onKeyDown }, isDisabled: v, isFocused: w }), this.renderLiveRegion(), Z.createElement(o, xt({}, S, { innerRef: this.getControlRef, innerProps: { onMouseDown: this.onControlMouseDown, onTouchEnd: this.onControlTouchEnd }, isDisabled: v, isFocused: w, menuIsOpen: y }), Z.createElement(d, xt({}, S, { isDisabled: v }), this.renderPlaceholderOrValue(), this.renderInput()), Z.createElement(f, xt({}, S, { isDisabled: v }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
  } }], [{ key: "getDerivedStateFromProps", value: function(u, o) {
    var f = o.prevProps, s = o.clearFocusValueOnUpdate, d = o.inputIsHiddenAfterUpdate, p = o.ariaSelection, m = o.isFocused, b = o.prevWasFocused, v = o.instancePrefix, y = u.options, w = u.value, S = u.menuIsOpen, x = u.inputValue, T = u.isMulti, E = x2(w), D = {};
    if (f && (w !== f.value || y !== f.options || S !== f.menuIsOpen || x !== f.inputValue)) {
      var O = S ? LA(u, E) : [], A = S ? V2(Gf(u, E), "".concat(v, "-option")) : [], $ = s ? HA(o, E) : null, N = VA(o, O), H = W0(A, N);
      D = { selectValue: E, focusedOption: N, focusedOptionId: H, focusableOptionsWithIds: A, focusedValue: $, clearFocusValueOnUpdate: false };
    }
    var z = d != null && u !== f ? { inputIsHidden: d, inputIsHiddenAfterUpdate: void 0 } : {}, G = p, V = m && b;
    return m && !V && (G = { value: vf(T, E, E[0] || null), options: E, action: "initial-input-focus" }, V = !b), (p == null ? void 0 : p.action) === "initial-input-focus" && (G = null), _t(_t(_t({}, D), z), {}, { prevProps: u, ariaSelection: G, prevWasFocused: V });
  } }]), i;
}(Z.Component);
z3.defaultProps = UA;
var BA = Z.forwardRef(function(t14, e) {
  var i = rM(t14);
  return Z.createElement(z3, xt({ ref: e }, i));
}), qA = BA;
function kA({ valueMap: t14, ...e }) {
  const i = Z.useId(), [a, u] = Z.useState(false);
  if (Z.useEffect(() => u(true), []), e.value && t14) throw new Error("Don't use both valueMap and value");
  const o = { danger: "var(--red)", dangerLight: "var(--lighter-black)", neutral0: "var(--input-bg)", neutral5: "#44475a", neutral10: "rgb(38, 39, 52)", neutral20: "rgba(0, 0, 0, 0.4)", neutral30: "var(--purple)", neutral40: "#ffb86c", neutral50: "#f8f8f2", neutral60: "var(--purple)", neutral70: "var(--purple)", neutral80: "#FFF", neutral90: "#FFF", primary: "var(--purple)", primary25: "var(--purple)", primary50: "var(--purple)", primary75: "#ff79c6" };
  return a && F.jsx(qA, { instanceId: i, ...e, value: e.value, components: x3, theme: (f) => ({ ...f, colors: { ...o } }) });
}
let ae;
function YA(t14) {
  const e = ae.__externref_table_alloc();
  return ae.__wbindgen_export_2.set(e, t14), e;
}
function yf(t14, e) {
  try {
    return t14.apply(this, e);
  } catch (i) {
    const a = YA(i);
    ae.__wbindgen_exn_store(a);
  }
}
const U3 = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && U3.decode();
let Jl = null;
function Xf() {
  return (Jl === null || Jl.byteLength === 0) && (Jl = new Uint8Array(ae.memory.buffer)), Jl;
}
function _f(t14, e) {
  return t14 = t14 >>> 0, U3.decode(Xf().subarray(t14, t14 + e));
}
function Gl(t14) {
  return t14 == null;
}
let na = null;
function yr() {
  return (na === null || na.buffer.detached === true || na.buffer.detached === void 0 && na.buffer !== ae.memory.buffer) && (na = new DataView(ae.memory.buffer)), na;
}
function Gp(t14) {
  const e = typeof t14;
  if (e == "number" || e == "boolean" || t14 == null) return `${t14}`;
  if (e == "string") return `"${t14}"`;
  if (e == "symbol") {
    const u = t14.description;
    return u == null ? "Symbol" : `Symbol(${u})`;
  }
  if (e == "function") {
    const u = t14.name;
    return typeof u == "string" && u.length > 0 ? `Function(${u})` : "Function";
  }
  if (Array.isArray(t14)) {
    const u = t14.length;
    let o = "[";
    u > 0 && (o += Gp(t14[0]));
    for (let f = 1; f < u; f++) o += ", " + Gp(t14[f]);
    return o += "]", o;
  }
  const i = /\[object ([^\]]+)\]/.exec(toString.call(t14));
  let a;
  if (i && i.length > 1) a = i[1];
  else return toString.call(t14);
  if (a == "Object") try {
    return "Object(" + JSON.stringify(t14) + ")";
  } catch {
    return "Object";
  }
  return t14 instanceof Error ? `${t14.name}: ${t14.message}
${t14.stack}` : a;
}
let ls = 0;
const Ff = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, GA = typeof Ff.encodeInto == "function" ? function(t14, e) {
  return Ff.encodeInto(t14, e);
} : function(t14, e) {
  const i = Ff.encode(t14);
  return e.set(i), { read: t14.length, written: i.length };
};
function B2(t14, e, i) {
  if (i === void 0) {
    const s = Ff.encode(t14), d = e(s.length, 1) >>> 0;
    return Xf().subarray(d, d + s.length).set(s), ls = s.length, d;
  }
  let a = t14.length, u = e(a, 1) >>> 0;
  const o = Xf();
  let f = 0;
  for (; f < a; f++) {
    const s = t14.charCodeAt(f);
    if (s > 127) break;
    o[u + f] = s;
  }
  if (f !== a) {
    f !== 0 && (t14 = t14.slice(f)), u = i(u, a, a = f + t14.length * 3, 1) >>> 0;
    const s = Xf().subarray(u + f, u + a), d = GA(t14, s);
    f += d.written, u = i(u, a, f, 1) >>> 0;
  }
  return ls = f, u;
}
function Xp() {
  return ae.get_default_parameters();
}
const q2 = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t14) => ae.__wbg_seirmodelunified_free(t14 >>> 0, 1));
class XA {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, q2.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    ae.__wbg_seirmodelunified_free(e, 0);
  }
  constructor(e) {
    const i = ae.seirmodelunified_new(e);
    return this.__wbg_ptr = i >>> 0, q2.register(this, this.__wbg_ptr, this), this;
  }
  run(e) {
    return ae.seirmodelunified_run(this.__wbg_ptr, e);
  }
}
async function FA(t14, e) {
  if (typeof Response == "function" && t14 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t14, e);
    } catch (a) {
      if (t14.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", a);
      else throw a;
    }
    const i = await t14.arrayBuffer();
    return await WebAssembly.instantiate(i, e);
  } else {
    const i = await WebAssembly.instantiate(t14, e);
    return i instanceof WebAssembly.Instance ? { instance: i, module: t14 } : i;
  }
}
function ZA() {
  const t14 = {};
  return t14.wbg = {}, t14.wbg.__wbg_buffer_609cc3eee51ed158 = function(e) {
    return e.buffer;
  }, t14.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return yf(function(e, i) {
      return e.call(i);
    }, arguments);
  }, t14.wbg.__wbg_done_769e5ede4b31c67b = function(e) {
    return e.done;
  }, t14.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return yf(function(e, i) {
      return Reflect.get(e, i);
    }, arguments);
  }, t14.wbg.__wbg_get_b9b93047fe3cf45b = function(e, i) {
    return e[i >>> 0];
  }, t14.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function(e, i) {
    return e[i];
  }, t14.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function(e) {
    let i;
    try {
      i = e instanceof ArrayBuffer;
    } catch {
      i = false;
    }
    return i;
  }, t14.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function(e) {
    let i;
    try {
      i = e instanceof Uint8Array;
    } catch {
      i = false;
    }
    return i;
  }, t14.wbg.__wbg_isArray_a1eab7e0d067391b = function(e) {
    return Array.isArray(e);
  }, t14.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function(e) {
    return Number.isSafeInteger(e);
  }, t14.wbg.__wbg_iterator_9a24c88df860dc65 = function() {
    return Symbol.iterator;
  }, t14.wbg.__wbg_length_a446193dc22c12f8 = function(e) {
    return e.length;
  }, t14.wbg.__wbg_length_e2d2a49132c1b256 = function(e) {
    return e.length;
  }, t14.wbg.__wbg_new_a12002a7f91c75be = function(e) {
    return new Uint8Array(e);
  }, t14.wbg.__wbg_next_25feadfc0913fea9 = function(e) {
    return e.next;
  }, t14.wbg.__wbg_next_6574e1a8a62d1055 = function() {
    return yf(function(e) {
      return e.next();
    }, arguments);
  }, t14.wbg.__wbg_parse_def2e24ef1252aff = function() {
    return yf(function(e, i) {
      return JSON.parse(_f(e, i));
    }, arguments);
  }, t14.wbg.__wbg_set_65595bdd868b3009 = function(e, i, a) {
    e.set(i, a >>> 0);
  }, t14.wbg.__wbg_value_cd1ffa7b1ab794f1 = function(e) {
    return e.value;
  }, t14.wbg.__wbindgen_as_number = function(e) {
    return +e;
  }, t14.wbg.__wbindgen_bigint_from_u64 = function(e) {
    return BigInt.asUintN(64, e);
  }, t14.wbg.__wbindgen_bigint_get_as_i64 = function(e, i) {
    const a = i, u = typeof a == "bigint" ? a : void 0;
    yr().setBigInt64(e + 8 * 1, Gl(u) ? BigInt(0) : u, true), yr().setInt32(e + 4 * 0, !Gl(u), true);
  }, t14.wbg.__wbindgen_boolean_get = function(e) {
    const i = e;
    return typeof i == "boolean" ? i ? 1 : 0 : 2;
  }, t14.wbg.__wbindgen_debug_string = function(e, i) {
    const a = Gp(i), u = B2(a, ae.__wbindgen_malloc, ae.__wbindgen_realloc), o = ls;
    yr().setInt32(e + 4 * 1, o, true), yr().setInt32(e + 4 * 0, u, true);
  }, t14.wbg.__wbindgen_error_new = function(e, i) {
    return new Error(_f(e, i));
  }, t14.wbg.__wbindgen_in = function(e, i) {
    return e in i;
  }, t14.wbg.__wbindgen_init_externref_table = function() {
    const e = ae.__wbindgen_export_2, i = e.grow(4);
    e.set(0, void 0), e.set(i + 0, void 0), e.set(i + 1, null), e.set(i + 2, true), e.set(i + 3, false);
  }, t14.wbg.__wbindgen_is_bigint = function(e) {
    return typeof e == "bigint";
  }, t14.wbg.__wbindgen_is_function = function(e) {
    return typeof e == "function";
  }, t14.wbg.__wbindgen_is_object = function(e) {
    const i = e;
    return typeof i == "object" && i !== null;
  }, t14.wbg.__wbindgen_is_undefined = function(e) {
    return e === void 0;
  }, t14.wbg.__wbindgen_jsval_eq = function(e, i) {
    return e === i;
  }, t14.wbg.__wbindgen_jsval_loose_eq = function(e, i) {
    return e == i;
  }, t14.wbg.__wbindgen_memory = function() {
    return ae.memory;
  }, t14.wbg.__wbindgen_number_get = function(e, i) {
    const a = i, u = typeof a == "number" ? a : void 0;
    yr().setFloat64(e + 8 * 1, Gl(u) ? 0 : u, true), yr().setInt32(e + 4 * 0, !Gl(u), true);
  }, t14.wbg.__wbindgen_string_get = function(e, i) {
    const a = i, u = typeof a == "string" ? a : void 0;
    var o = Gl(u) ? 0 : B2(u, ae.__wbindgen_malloc, ae.__wbindgen_realloc), f = ls;
    yr().setInt32(e + 4 * 1, f, true), yr().setInt32(e + 4 * 0, o, true);
  }, t14.wbg.__wbindgen_string_new = function(e, i) {
    return _f(e, i);
  }, t14.wbg.__wbindgen_throw = function(e, i) {
    throw new Error(_f(e, i));
  }, t14;
}
function QA(t14, e) {
  return ae = t14.exports, L3.__wbindgen_wasm_module = e, na = null, Jl = null, ae.__wbindgen_start(), ae;
}
async function L3(t14) {
  if (ae !== void 0) return ae;
  typeof t14 < "u" && (Object.getPrototypeOf(t14) === Object.prototype ? { module_or_path: t14 } = t14 : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t14 > "u" && (t14 = new URL("/dynode-web/assets/wasm_dynode_bg-D4uwgCHQ.wasm", import.meta.url));
  const e = ZA();
  (typeof t14 == "string" || typeof Request == "function" && t14 instanceof Request || typeof URL == "function" && t14 instanceof URL) && (t14 = fetch(t14));
  const { instance: i, module: a } = await FA(await t14, e);
  return QA(i, a);
}
const H3 = Z.createContext(void 0), KA = ({ initialParams: t14, children: e }) => {
  const [i, a] = Z.useState(t14);
  let [u, o] = Z.useState(0);
  const f = (S) => a((x) => ({ ...x, ...S })), s = (S) => a((x) => (S(x), S(x))), d = Z.useRef(null);
  let [p, m] = Z.useState(200), [b, v] = Z.useState(null), [y, w] = Z.useState(null);
  return Z.useEffect(() => {
    let S = new XA(i);
    v(S), console.debug("Updating model with new params", i);
  }, [i]), Z.useEffect(() => {
    b && (d.current && clearTimeout(d.current), o(1), d.current = setTimeout(() => {
      console.debug("Running model"), w(b.run(p).output), o(0);
    }, 300));
  }, [b, p]), F.jsx(H3.Provider, { value: { params: i, updateParams: f, replaceParams: s, setParams: a, days: p, setDays: m, model: b, modelResult: y, runningState: u }, children: e });
}, ag = () => {
  const t14 = Z.useContext(H3);
  if (!t14) throw new Error("useParams must be used within a ParamsProvider");
  return t14;
}, _a = () => {
  const { params: t14, updateParams: e, replaceParams: i, setParams: a } = ag();
  return [t14, e, i, a];
}, V3 = () => {
  const { days: t14, setDays: e } = ag();
  return [t14, e];
}, ug = () => {
  const { runningState: t14, modelResult: e } = ag();
  return { runningState: t14, isRunning: t14 === 1, modelResult: e };
}, lg = (t14) => {
  const [e, , i] = _a();
  return [e.mitigations[t14], (a) => {
    i((u) => ({ ...u, mitigations: { ...u.mitigations, [t14]: { ...u.mitigations[t14], ...a } } }));
  }];
};
function PA() {
  let [t14] = _a(), [e, i] = lg("vaccine"), [a] = V3(), u = [{ value: 1, label: "One dose" }, { value: 2, label: "Two doses" }];
  return F.jsxs("div", { children: [F.jsxs(Ue, { children: [F.jsx("label", { children: "Vaccine type" }), F.jsx(kA, { value: u.find((o) => o.value === e.doses), options: u, onChange: (o) => {
    let f = o == null ? void 0 : o.value;
    f && i({ doses: f });
  } })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Vaccination start" }), F.jsx(Ge, { range: true, min: 0, max: a, value: e.start, onValue: (o) => i({ start: o }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Vaccine doses available" }), F.jsx(Ge, { range: true, min: 0, step: 1e6, max: t14.population, value: e.doses_available, onValue: (o) => i({ doses_available: o }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Vaccine administration rate" }), F.jsx(Ge, { range: true, min: 0, max: 3e7, step: 1e6, value: e.administration_rate, onValue: (o) => i({ administration_rate: o }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Vaccine effectiveness against infection" }), F.jsx(Ge, { range: true, min: 0, max: 100, value: e.ve_s * 100, onValue: (o) => i({ ve_s: o / 100 }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Vaccine effectiveness against onward transmission" }), F.jsx(Ge, { range: true, min: 0, max: 100, value: e.ve_i * 100, onValue: (o) => i({ ve_i: o / 100 }) })] })] });
}
function IA() {
  let [t14, e] = lg("community");
  return F.jsxs("div", { children: [F.jsxs(Ue, { children: [F.jsx("label", { children: "Day to begin community mitigation" }), F.jsx(Ge, { value: t14.start, onValue: (i) => e({ start: i }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Duration of community mitigation" }), F.jsx(Ge, { value: t14.duration, onValue: (i) => e({ duration: i }) })] })] });
}
function WA() {
  let [t14, e] = lg("antivirals");
  return F.jsxs("div", { children: [F.jsxs(Ue, { children: [F.jsx("label", { children: "Antiviral Efficacy: AVEi" }), F.jsx("div", { className: "input-details", children: "Prevention of transmission from treated infected" }), F.jsx(Ge, { value: t14.ave_i, onValue: (i) => e({ ave_i: i }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Antiviral Efficacy: AVEp" }), F.jsx("div", { className: "input-details", children: "Prevention of hospitalization/death" }), F.jsx(Ge, { value: t14.ave_p, onValue: (i) => e({ ave_p: i }) })] })] });
}
function JA({ title: t14, titleId: e, ...i }, a) {
  return Z.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon", ref: a, "aria-labelledby": e }, i), t14 ? Z.createElement("title", { id: e }, t14) : null, Z.createElement("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z", clipRule: "evenodd" }));
}
const tO = Z.forwardRef(JA);
function eO({ title: t14, titleId: e, ...i }, a) {
  return Z.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", "data-slot": "icon", ref: a, "aria-labelledby": e }, i), t14 ? Z.createElement("title", { id: e }, t14) : null, Z.createElement("path", { d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" }));
}
const nO = Z.forwardRef(eO);
let iO = { vaccine: PA, antivirals: WA, community: IA };
function rO({ name: t14, enabled: e, onToggle: i, children: a }) {
  return F.jsxs("div", { className: "mitigation mb-2" + (e ? "" : " collapsed"), children: [F.jsxs("div", { className: "mitigation-header", onClick: () => i(!e), children: [F.jsx("h4", { children: t14 }), e ? F.jsx(tO, { className: "status-icon" }) : F.jsx(nO, { className: "status-icon" })] }), F.jsx("div", { className: "mitigation-body", style: { display: e ? "" : "none" }, children: a })] });
}
function aO() {
  let [t14, e] = _a();
  const i = (a, u) => {
    e({ mitigations: { ...t14.mitigations, [a]: { ...t14.mitigations[a], enabled: u } } });
  };
  return F.jsx("div", { children: Object.entries(iO).map(([a, u]) => {
    const { enabled: o, editable: f } = t14.mitigations[a];
    return f && F.jsx(rO, { name: a, enabled: o, onToggle: (s) => i(a, s), children: F.jsx(u, {}) }, a);
  }) });
}
function j3() {
  let [t14, e] = V3(), [i, a] = _a();
  return F.jsxs("div", { className: "p-1", children: [F.jsxs(Ue, { children: [F.jsx("label", { children: "Days" }), F.jsx(Ge, { range: true, min: 1, max: 400, step: 10, value: t14, numberType: "int", onValue: (u) => e(u) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Population size" }), F.jsx(Ge, { value: i.population, numberType: "int", onValue: (u) => a({ population: u }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Initial infections" }), F.jsx(Ge, { value: i.initial_infections, onValue: (u) => a({ initial_infections: u }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "R0" }), F.jsx(Ge, { range: true, min: 0.8, max: 2.2, step: 0.1, value: i.r0, numberType: "float", onValue: (u) => a({ r0: u }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Latent period" }), F.jsx(Ge, { range: true, min: 0.5, max: 2.5, step: 0.1, value: i.latent_period, numberType: "float", onValue: (u) => a({ latent_period: u }) })] }), F.jsxs(Ue, { children: [F.jsx("label", { children: "Infectious period" }), F.jsx(Ge, { range: true, min: 1, max: 4.5, step: 0.1, value: i.infectious_period, numberType: "float", onValue: (u) => a({ infectious_period: u }) })] }), F.jsx(aO, {})] });
}
function xr(t14, e) {
  return t14 == null || e == null ? NaN : t14 < e ? -1 : t14 > e ? 1 : t14 >= e ? 0 : NaN;
}
function Ro(t14, e) {
  return t14 == null || e == null ? NaN : e < t14 ? -1 : e > t14 ? 1 : e >= t14 ? 0 : NaN;
}
function Ws(t14) {
  let e, i, a;
  t14.length !== 2 ? (e = xr, i = (s, d) => xr(t14(s), d), a = (s, d) => t14(s) - d) : (e = t14 === xr || t14 === Ro ? t14 : uO, i = t14, a = t14);
  function u(s, d, p = 0, m = s.length) {
    if (p < m) {
      if (e(d, d) !== 0) return m;
      do {
        const b = p + m >>> 1;
        i(s[b], d) < 0 ? p = b + 1 : m = b;
      } while (p < m);
    }
    return p;
  }
  function o(s, d, p = 0, m = s.length) {
    if (p < m) {
      if (e(d, d) !== 0) return m;
      do {
        const b = p + m >>> 1;
        i(s[b], d) <= 0 ? p = b + 1 : m = b;
      } while (p < m);
    }
    return p;
  }
  function f(s, d, p = 0, m = s.length) {
    const b = u(s, d, p, m - 1);
    return b > p && a(s[b - 1], d) > -a(s[b], d) ? b - 1 : b;
  }
  return { left: u, center: f, right: o };
}
function uO() {
  return 0;
}
function B3(t14) {
  return t14 === null ? NaN : +t14;
}
function* lO(t14, e) {
  if (e === void 0) for (let i of t14) i != null && (i = +i) >= i && (yield i);
  else {
    let i = -1;
    for (let a of t14) (a = e(a, ++i, t14)) != null && (a = +a) >= a && (yield a);
  }
}
const oO = Ws(xr), og = oO.right;
Ws(B3).center;
function cO(t14) {
  return t14.length | 0;
}
function fO(t14) {
  return !(t14 > 0);
}
function sO(t14) {
  return typeof t14 != "object" || "length" in t14 ? t14 : Array.from(t14);
}
function dO(t14) {
  return (e) => t14(...e);
}
function hO(...t14) {
  const e = typeof t14[t14.length - 1] == "function" && dO(t14.pop());
  t14 = t14.map(sO);
  const i = t14.map(cO), a = t14.length - 1, u = new Array(a + 1).fill(0), o = [];
  if (a < 0 || i.some(fO)) return o;
  for (; ; ) {
    o.push(u.map((s, d) => t14[d][s]));
    let f = a;
    for (; ++u[f] === i[f]; ) {
      if (f === 0) return e ? o.map(e) : o;
      u[f--] = 0;
    }
  }
}
function q3(t14, e) {
  let i = 0, a, u = 0, o = 0;
  if (e === void 0) for (let f of t14) f != null && (f = +f) >= f && (a = f - u, u += a / ++i, o += a * (f - u));
  else {
    let f = -1;
    for (let s of t14) (s = e(s, ++f, t14)) != null && (s = +s) >= s && (a = s - u, u += a / ++i, o += a * (s - u));
  }
  if (i > 1) return o / (i - 1);
}
function pO(t14, e) {
  const i = q3(t14, e);
  return i && Math.sqrt(i);
}
function Mr(t14, e) {
  let i, a;
  for (const u of t14) u != null && (i === void 0 ? u >= u && (i = a = u) : (i > u && (i = u), a < u && (a = u)));
  return [i, a];
}
class sa {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(e) {
    const i = this._partials;
    let a = 0;
    for (let u = 0; u < this._n && u < 32; u++) {
      const o = i[u], f = e + o, s = Math.abs(e) < Math.abs(o) ? e - (f - o) : o - (f - e);
      s && (i[a++] = s), e = f;
    }
    return i[a] = e, this._n = a + 1, this;
  }
  valueOf() {
    const e = this._partials;
    let i = this._n, a, u, o, f = 0;
    if (i > 0) {
      for (f = e[--i]; i > 0 && (a = f, u = e[--i], f = a + u, o = u - (f - a), !o); ) ;
      i > 0 && (o < 0 && e[i - 1] < 0 || o > 0 && e[i - 1] > 0) && (u = o * 2, a = f + u, u == a - f && (f = a));
    }
    return f;
  }
}
class go extends Map {
  constructor(e, i = G3) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: i } }), e != null) for (const [a, u] of e) this.set(a, u);
  }
  get(e) {
    return super.get(Fp(this, e));
  }
  has(e) {
    return super.has(Fp(this, e));
  }
  set(e, i) {
    return super.set(k3(this, e), i);
  }
  delete(e) {
    return super.delete(Y3(this, e));
  }
}
class Js extends Set {
  constructor(e, i = G3) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: i } }), e != null) for (const a of e) this.add(a);
  }
  has(e) {
    return super.has(Fp(this, e));
  }
  add(e) {
    return super.add(k3(this, e));
  }
  delete(e) {
    return super.delete(Y3(this, e));
  }
}
function Fp({ _intern: t14, _key: e }, i) {
  const a = e(i);
  return t14.has(a) ? t14.get(a) : i;
}
function k3({ _intern: t14, _key: e }, i) {
  const a = e(i);
  return t14.has(a) ? t14.get(a) : (t14.set(a, i), i);
}
function Y3({ _intern: t14, _key: e }, i) {
  const a = e(i);
  return t14.has(a) && (i = t14.get(a), t14.delete(a)), i;
}
function G3(t14) {
  return t14 !== null && typeof t14 == "object" ? t14.valueOf() : t14;
}
function Zp(t14) {
  return t14;
}
function mO(t14, ...e) {
  return cg(t14, Zp, Zp, e);
}
function J0(t14, e, ...i) {
  return cg(t14, Zp, e, i);
}
function gO(t14, e, ...i) {
  return cg(t14, Array.from, e, i);
}
function cg(t14, e, i, a) {
  return function u(o, f) {
    if (f >= a.length) return i(o);
    const s = new go(), d = a[f++];
    let p = -1;
    for (const m of o) {
      const b = d(m, ++p, o), v = s.get(b);
      v ? v.push(m) : s.set(b, [m]);
    }
    for (const [m, b] of s) s.set(m, u(b, f));
    return e(s);
  }(t14, 0);
}
function bO(t14, e) {
  return Array.from(e, (i) => t14[i]);
}
function vO(t14, ...e) {
  if (typeof t14[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  t14 = Array.from(t14);
  let [i] = e;
  if (i && i.length !== 2 || e.length > 1) {
    const a = Uint32Array.from(t14, (u, o) => o);
    return e.length > 1 ? (e = e.map((u) => t14.map(u)), a.sort((u, o) => {
      for (const f of e) {
        const s = os(f[u], f[o]);
        if (s) return s;
      }
    })) : (i = t14.map(i), a.sort((u, o) => os(i[u], i[o]))), bO(t14, a);
  }
  return t14.sort(X3(i));
}
function X3(t14 = xr) {
  if (t14 === xr) return os;
  if (typeof t14 != "function") throw new TypeError("compare is not a function");
  return (e, i) => {
    const a = t14(e, i);
    return a || a === 0 ? a : (t14(i, i) === 0) - (t14(e, e) === 0);
  };
}
function os(t14, e) {
  return (t14 == null || !(t14 >= t14)) - (e == null || !(e >= e)) || (t14 < e ? -1 : t14 > e ? 1 : 0);
}
const yO = Math.sqrt(50), _O = Math.sqrt(10), wO = Math.sqrt(2);
function cs(t14, e, i) {
  const a = (e - t14) / Math.max(0, i), u = Math.floor(Math.log10(a)), o = a / Math.pow(10, u), f = o >= yO ? 10 : o >= _O ? 5 : o >= wO ? 2 : 1;
  let s, d, p;
  return u < 0 ? (p = Math.pow(10, -u) / f, s = Math.round(t14 * p), d = Math.round(e * p), s / p < t14 && ++s, d / p > e && --d, p = -p) : (p = Math.pow(10, u) * f, s = Math.round(t14 / p), d = Math.round(e / p), s * p < t14 && ++s, d * p > e && --d), d < s && 0.5 <= i && i < 2 ? cs(t14, e, i * 2) : [s, d, p];
}
function fs(t14, e, i) {
  if (e = +e, t14 = +t14, i = +i, !(i > 0)) return [];
  if (t14 === e) return [t14];
  const a = e < t14, [u, o, f] = a ? cs(e, t14, i) : cs(t14, e, i);
  if (!(o >= u)) return [];
  const s = o - u + 1, d = new Array(s);
  if (a) if (f < 0) for (let p = 0; p < s; ++p) d[p] = (o - p) / -f;
  else for (let p = 0; p < s; ++p) d[p] = (o - p) * f;
  else if (f < 0) for (let p = 0; p < s; ++p) d[p] = (u + p) / -f;
  else for (let p = 0; p < s; ++p) d[p] = (u + p) * f;
  return d;
}
function Qp(t14, e, i) {
  return e = +e, t14 = +t14, i = +i, cs(t14, e, i)[2];
}
function Kp(t14, e, i) {
  e = +e, t14 = +t14, i = +i;
  const a = e < t14, u = a ? Qp(e, t14, i) : Qp(t14, e, i);
  return (a ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
function ai(t14, e) {
  let i;
  if (e === void 0) for (const a of t14) a != null && (i < a || i === void 0 && a >= a) && (i = a);
  else {
    let a = -1;
    for (let u of t14) (u = e(u, ++a, t14)) != null && (i < u || i === void 0 && u >= u) && (i = u);
  }
  return i;
}
function SO(t14, e) {
  let i, a = -1, u = -1;
  if (e === void 0) for (const o of t14) ++u, o != null && (i < o || i === void 0 && o >= o) && (i = o, a = u);
  else for (let o of t14) (o = e(o, ++u, t14)) != null && (i < o || i === void 0 && o >= o) && (i = o, a = u);
  return a;
}
function bo(t14, e) {
  let i;
  if (e === void 0) for (const a of t14) a != null && (i > a || i === void 0 && a >= a) && (i = a);
  else {
    let a = -1;
    for (let u of t14) (u = e(u, ++a, t14)) != null && (i > u || i === void 0 && u >= u) && (i = u);
  }
  return i;
}
function xO(t14, e) {
  let i, a = -1, u = -1;
  if (e === void 0) for (const o of t14) ++u, o != null && (i > o || i === void 0 && o >= o) && (i = o, a = u);
  else for (let o of t14) (o = e(o, ++u, t14)) != null && (i > o || i === void 0 && o >= o) && (i = o, a = u);
  return a;
}
function F3(t14, e, i = 0, a = 1 / 0, u) {
  if (e = Math.floor(e), i = Math.floor(Math.max(0, i)), a = Math.floor(Math.min(t14.length - 1, a)), !(i <= e && e <= a)) return t14;
  for (u = u === void 0 ? os : X3(u); a > i; ) {
    if (a - i > 600) {
      const d = a - i + 1, p = e - i + 1, m = Math.log(d), b = 0.5 * Math.exp(2 * m / 3), v = 0.5 * Math.sqrt(m * b * (d - b) / d) * (p - d / 2 < 0 ? -1 : 1), y = Math.max(i, Math.floor(e - p * b / d + v)), w = Math.min(a, Math.floor(e + (d - p) * b / d + v));
      F3(t14, e, y, w, u);
    }
    const o = t14[e];
    let f = i, s = a;
    for (Xl(t14, i, e), u(t14[a], o) > 0 && Xl(t14, i, a); f < s; ) {
      for (Xl(t14, f, s), ++f, --s; u(t14[f], o) < 0; ) ++f;
      for (; u(t14[s], o) > 0; ) --s;
    }
    u(t14[i], o) === 0 ? Xl(t14, i, s) : (++s, Xl(t14, s, a)), s <= e && (i = s + 1), e <= s && (a = s - 1);
  }
  return t14;
}
function Xl(t14, e, i) {
  const a = t14[e];
  t14[e] = t14[i], t14[i] = a;
}
function ss(t14, e, i) {
  if (t14 = Float64Array.from(lO(t14, i)), !(!(a = t14.length) || isNaN(e = +e))) {
    if (e <= 0 || a < 2) return bo(t14);
    if (e >= 1) return ai(t14);
    var a, u = (a - 1) * e, o = Math.floor(u), f = ai(F3(t14, o).subarray(0, o + 1)), s = bo(t14.subarray(o + 1));
    return f + (s - f) * (u - o);
  }
}
function MO(t14, e, i = B3) {
  if (!(!(a = t14.length) || isNaN(e = +e))) {
    if (e <= 0 || a < 2) return +i(t14[0], 0, t14);
    if (e >= 1) return +i(t14[a - 1], a - 1, t14);
    var a, u = (a - 1) * e, o = Math.floor(u), f = +i(t14[o], o, t14), s = +i(t14[o + 1], o + 1, t14);
    return f + (s - f) * (u - o);
  }
}
function TO(t14, e) {
  let i = 0, a = 0;
  if (e === void 0) for (let u of t14) u != null && (u = +u) >= u && (++i, a += u);
  else {
    let u = -1;
    for (let o of t14) (o = e(o, ++u, t14)) != null && (o = +o) >= o && (++i, a += o);
  }
  if (i) return a / i;
}
function Pp(t14, e) {
  return ss(t14, 0.5, e);
}
function* EO(t14) {
  for (const e of t14) yield* e;
}
function Z3(t14) {
  return Array.from(EO(t14));
}
function AO(t14, e) {
  const i = new go();
  if (e === void 0) for (let o of t14) o != null && o >= o && i.set(o, (i.get(o) || 0) + 1);
  else {
    let o = -1;
    for (let f of t14) (f = e(f, ++o, t14)) != null && f >= f && i.set(f, (i.get(f) || 0) + 1);
  }
  let a, u = 0;
  for (const [o, f] of i) f > u && (u = f, a = o);
  return a;
}
function OO(t14, e = CO) {
  const i = [];
  let a, u = false;
  for (const o of t14) u && i.push(e(a, o)), a = o, u = true;
  return i;
}
function CO(t14, e) {
  return [t14, e];
}
function Ip(t14, e, i) {
  t14 = +t14, e = +e, i = (u = arguments.length) < 2 ? (e = t14, t14 = 0, 1) : u < 3 ? 1 : +i;
  for (var a = -1, u = Math.max(0, Math.ceil((e - t14) / i)) | 0, o = new Array(u); ++a < u; ) o[a] = t14 + a * i;
  return o;
}
function fg(t14, e) {
  let i = 0;
  if (e === void 0) for (let a of t14) (a = +a) && (i += a);
  else {
    let a = -1;
    for (let u of t14) (u = +e(u, ++a, t14)) && (i += u);
  }
  return i;
}
function ds(t14) {
  if (typeof t14[Symbol.iterator] != "function") throw new TypeError("values is not iterable");
  return Array.from(t14).reverse();
}
function DO(t14) {
  return t14;
}
var RO = 3, k2 = 1e-6;
function NO(t14) {
  return "translate(" + t14 + ",0)";
}
function $O(t14) {
  return (e) => +t14(e);
}
function zO(t14, e) {
  return e = Math.max(0, t14.bandwidth() - e * 2) / 2, t14.round() && (e = Math.round(e)), (i) => +t14(i) + e;
}
function UO() {
  return !this.__axis;
}
function LO(t14, e) {
  var i = [], a = null, u = null, o = 6, f = 6, s = 3, d = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, p = 1, m = "y", b = NO;
  function v(y) {
    var w = a ?? (e.ticks ? e.ticks.apply(e, i) : e.domain()), S = u ?? (e.tickFormat ? e.tickFormat.apply(e, i) : DO), x = Math.max(o, 0) + s, T = e.range(), E = +T[0] + d, D = +T[T.length - 1] + d, O = (e.bandwidth ? zO : $O)(e.copy(), d), A = y.selection ? y.selection() : y, $ = A.selectAll(".domain").data([null]), N = A.selectAll(".tick").data(w, e).order(), H = N.exit(), z = N.enter().append("g").attr("class", "tick"), G = N.select("line"), V = N.select("text");
    $ = $.merge($.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), N = N.merge(z), G = G.merge(z.append("line").attr("stroke", "currentColor").attr(m + "2", p * o)), V = V.merge(z.append("text").attr("fill", "currentColor").attr(m, p * x).attr("dy", "0.71em")), y !== A && ($ = $.transition(y), N = N.transition(y), G = G.transition(y), V = V.transition(y), H = H.transition(y).attr("opacity", k2).attr("transform", function(lt) {
      return isFinite(lt = O(lt)) ? b(lt + d) : this.getAttribute("transform");
    }), z.attr("opacity", k2).attr("transform", function(lt) {
      var ft = this.parentNode.__axis;
      return b((ft && isFinite(ft = ft(lt)) ? ft : O(lt)) + d);
    })), H.remove(), $.attr("d", f ? "M" + E + "," + p * f + "V" + d + "H" + D + "V" + p * f : "M" + E + "," + d + "H" + D), N.attr("opacity", 1).attr("transform", function(lt) {
      return b(O(lt) + d);
    }), G.attr(m + "2", p * o), V.attr(m, p * x).text(S), A.filter(UO).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", "middle"), A.each(function() {
      this.__axis = O;
    });
  }
  return v.scale = function(y) {
    return arguments.length ? (e = y, v) : e;
  }, v.ticks = function() {
    return i = Array.from(arguments), v;
  }, v.tickArguments = function(y) {
    return arguments.length ? (i = y == null ? [] : Array.from(y), v) : i.slice();
  }, v.tickValues = function(y) {
    return arguments.length ? (a = y == null ? null : Array.from(y), v) : a && a.slice();
  }, v.tickFormat = function(y) {
    return arguments.length ? (u = y, v) : u;
  }, v.tickSize = function(y) {
    return arguments.length ? (o = f = +y, v) : o;
  }, v.tickSizeInner = function(y) {
    return arguments.length ? (o = +y, v) : o;
  }, v.tickSizeOuter = function(y) {
    return arguments.length ? (f = +y, v) : f;
  }, v.tickPadding = function(y) {
    return arguments.length ? (s = +y, v) : s;
  }, v.offset = function(y) {
    return arguments.length ? (d = +y, v) : d;
  }, v;
}
function HO(t14) {
  return LO(RO, t14);
}
var VO = { value: () => {
} };
function Q3() {
  for (var t14 = 0, e = arguments.length, i = {}, a; t14 < e; ++t14) {
    if (!(a = arguments[t14] + "") || a in i || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
    i[a] = [];
  }
  return new Zf(i);
}
function Zf(t14) {
  this._ = t14;
}
function jO(t14, e) {
  return t14.trim().split(/^|\s+/).map(function(i) {
    var a = "", u = i.indexOf(".");
    if (u >= 0 && (a = i.slice(u + 1), i = i.slice(0, u)), i && !e.hasOwnProperty(i)) throw new Error("unknown type: " + i);
    return { type: i, name: a };
  });
}
Zf.prototype = Q3.prototype = { constructor: Zf, on: function(t14, e) {
  var i = this._, a = jO(t14 + "", i), u, o = -1, f = a.length;
  if (arguments.length < 2) {
    for (; ++o < f; ) if ((u = (t14 = a[o]).type) && (u = BO(i[u], t14.name))) return u;
    return;
  }
  if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
  for (; ++o < f; ) if (u = (t14 = a[o]).type) i[u] = Y2(i[u], t14.name, e);
  else if (e == null) for (u in i) i[u] = Y2(i[u], t14.name, null);
  return this;
}, copy: function() {
  var t14 = {}, e = this._;
  for (var i in e) t14[i] = e[i].slice();
  return new Zf(t14);
}, call: function(t14, e) {
  if ((u = arguments.length - 2) > 0) for (var i = new Array(u), a = 0, u, o; a < u; ++a) i[a] = arguments[a + 2];
  if (!this._.hasOwnProperty(t14)) throw new Error("unknown type: " + t14);
  for (o = this._[t14], a = 0, u = o.length; a < u; ++a) o[a].value.apply(e, i);
}, apply: function(t14, e, i) {
  if (!this._.hasOwnProperty(t14)) throw new Error("unknown type: " + t14);
  for (var a = this._[t14], u = 0, o = a.length; u < o; ++u) a[u].value.apply(e, i);
} };
function BO(t14, e) {
  for (var i = 0, a = t14.length, u; i < a; ++i) if ((u = t14[i]).name === e) return u.value;
}
function Y2(t14, e, i) {
  for (var a = 0, u = t14.length; a < u; ++a) if (t14[a].name === e) {
    t14[a] = VO, t14 = t14.slice(0, a).concat(t14.slice(a + 1));
    break;
  }
  return i != null && t14.push({ name: e, value: i }), t14;
}
var Wp = "http://www.w3.org/1999/xhtml";
const Mu = { svg: "http://www.w3.org/2000/svg", xhtml: Wp, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
function td(t14) {
  var e = t14 += "", i = e.indexOf(":");
  return i >= 0 && (e = t14.slice(0, i)) !== "xmlns" && (t14 = t14.slice(i + 1)), Mu.hasOwnProperty(e) ? { space: Mu[e], local: t14 } : t14;
}
function qO(t14) {
  return function() {
    var e = this.ownerDocument, i = this.namespaceURI;
    return i === Wp && e.documentElement.namespaceURI === Wp ? e.createElement(t14) : e.createElementNS(i, t14);
  };
}
function kO(t14) {
  return function() {
    return this.ownerDocument.createElementNS(t14.space, t14.local);
  };
}
function ed(t14) {
  var e = td(t14);
  return (e.local ? kO : qO)(e);
}
function YO() {
}
function sg(t14) {
  return t14 == null ? YO : function() {
    return this.querySelector(t14);
  };
}
function GO(t14) {
  typeof t14 != "function" && (t14 = sg(t14));
  for (var e = this._groups, i = e.length, a = new Array(i), u = 0; u < i; ++u) for (var o = e[u], f = o.length, s = a[u] = new Array(f), d, p, m = 0; m < f; ++m) (d = o[m]) && (p = t14.call(d, d.__data__, m, o)) && ("__data__" in d && (p.__data__ = d.__data__), s[m] = p);
  return new cn(a, this._parents);
}
function XO(t14) {
  return t14 == null ? [] : Array.isArray(t14) ? t14 : Array.from(t14);
}
function FO() {
  return [];
}
function K3(t14) {
  return t14 == null ? FO : function() {
    return this.querySelectorAll(t14);
  };
}
function ZO(t14) {
  return function() {
    return XO(t14.apply(this, arguments));
  };
}
function QO(t14) {
  typeof t14 == "function" ? t14 = ZO(t14) : t14 = K3(t14);
  for (var e = this._groups, i = e.length, a = [], u = [], o = 0; o < i; ++o) for (var f = e[o], s = f.length, d, p = 0; p < s; ++p) (d = f[p]) && (a.push(t14.call(d, d.__data__, p, f)), u.push(d));
  return new cn(a, u);
}
function P3(t14) {
  return function() {
    return this.matches(t14);
  };
}
function I3(t14) {
  return function(e) {
    return e.matches(t14);
  };
}
var KO = Array.prototype.find;
function PO(t14) {
  return function() {
    return KO.call(this.children, t14);
  };
}
function IO() {
  return this.firstElementChild;
}
function WO(t14) {
  return this.select(t14 == null ? IO : PO(typeof t14 == "function" ? t14 : I3(t14)));
}
var JO = Array.prototype.filter;
function tC() {
  return Array.from(this.children);
}
function eC(t14) {
  return function() {
    return JO.call(this.children, t14);
  };
}
function nC(t14) {
  return this.selectAll(t14 == null ? tC : eC(typeof t14 == "function" ? t14 : I3(t14)));
}
function iC(t14) {
  typeof t14 != "function" && (t14 = P3(t14));
  for (var e = this._groups, i = e.length, a = new Array(i), u = 0; u < i; ++u) for (var o = e[u], f = o.length, s = a[u] = [], d, p = 0; p < f; ++p) (d = o[p]) && t14.call(d, d.__data__, p, o) && s.push(d);
  return new cn(a, this._parents);
}
function W3(t14) {
  return new Array(t14.length);
}
function rC() {
  return new cn(this._enter || this._groups.map(W3), this._parents);
}
function hs(t14, e) {
  this.ownerDocument = t14.ownerDocument, this.namespaceURI = t14.namespaceURI, this._next = null, this._parent = t14, this.__data__ = e;
}
hs.prototype = { constructor: hs, appendChild: function(t14) {
  return this._parent.insertBefore(t14, this._next);
}, insertBefore: function(t14, e) {
  return this._parent.insertBefore(t14, e);
}, querySelector: function(t14) {
  return this._parent.querySelector(t14);
}, querySelectorAll: function(t14) {
  return this._parent.querySelectorAll(t14);
} };
function aC(t14) {
  return function() {
    return t14;
  };
}
function uC(t14, e, i, a, u, o) {
  for (var f = 0, s, d = e.length, p = o.length; f < p; ++f) (s = e[f]) ? (s.__data__ = o[f], a[f] = s) : i[f] = new hs(t14, o[f]);
  for (; f < d; ++f) (s = e[f]) && (u[f] = s);
}
function lC(t14, e, i, a, u, o, f) {
  var s, d, p = /* @__PURE__ */ new Map(), m = e.length, b = o.length, v = new Array(m), y;
  for (s = 0; s < m; ++s) (d = e[s]) && (v[s] = y = f.call(d, d.__data__, s, e) + "", p.has(y) ? u[s] = d : p.set(y, d));
  for (s = 0; s < b; ++s) y = f.call(t14, o[s], s, o) + "", (d = p.get(y)) ? (a[s] = d, d.__data__ = o[s], p.delete(y)) : i[s] = new hs(t14, o[s]);
  for (s = 0; s < m; ++s) (d = e[s]) && p.get(v[s]) === d && (u[s] = d);
}
function oC(t14) {
  return t14.__data__;
}
function cC(t14, e) {
  if (!arguments.length) return Array.from(this, oC);
  var i = e ? lC : uC, a = this._parents, u = this._groups;
  typeof t14 != "function" && (t14 = aC(t14));
  for (var o = u.length, f = new Array(o), s = new Array(o), d = new Array(o), p = 0; p < o; ++p) {
    var m = a[p], b = u[p], v = b.length, y = fC(t14.call(m, m && m.__data__, p, a)), w = y.length, S = s[p] = new Array(w), x = f[p] = new Array(w), T = d[p] = new Array(v);
    i(m, b, S, x, T, y, e);
    for (var E = 0, D = 0, O, A; E < w; ++E) if (O = S[E]) {
      for (E >= D && (D = E + 1); !(A = x[D]) && ++D < w; ) ;
      O._next = A || null;
    }
  }
  return f = new cn(f, a), f._enter = s, f._exit = d, f;
}
function fC(t14) {
  return typeof t14 == "object" && "length" in t14 ? t14 : Array.from(t14);
}
function sC() {
  return new cn(this._exit || this._groups.map(W3), this._parents);
}
function dC(t14, e, i) {
  var a = this.enter(), u = this, o = this.exit();
  return typeof t14 == "function" ? (a = t14(a), a && (a = a.selection())) : a = a.append(t14 + ""), e != null && (u = e(u), u && (u = u.selection())), i == null ? o.remove() : i(o), a && u ? a.merge(u).order() : u;
}
function hC(t14) {
  for (var e = t14.selection ? t14.selection() : t14, i = this._groups, a = e._groups, u = i.length, o = a.length, f = Math.min(u, o), s = new Array(u), d = 0; d < f; ++d) for (var p = i[d], m = a[d], b = p.length, v = s[d] = new Array(b), y, w = 0; w < b; ++w) (y = p[w] || m[w]) && (v[w] = y);
  for (; d < u; ++d) s[d] = i[d];
  return new cn(s, this._parents);
}
function pC() {
  for (var t14 = this._groups, e = -1, i = t14.length; ++e < i; ) for (var a = t14[e], u = a.length - 1, o = a[u], f; --u >= 0; ) (f = a[u]) && (o && f.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(f, o), o = f);
  return this;
}
function mC(t14) {
  t14 || (t14 = gC);
  function e(b, v) {
    return b && v ? t14(b.__data__, v.__data__) : !b - !v;
  }
  for (var i = this._groups, a = i.length, u = new Array(a), o = 0; o < a; ++o) {
    for (var f = i[o], s = f.length, d = u[o] = new Array(s), p, m = 0; m < s; ++m) (p = f[m]) && (d[m] = p);
    d.sort(e);
  }
  return new cn(u, this._parents).order();
}
function gC(t14, e) {
  return t14 < e ? -1 : t14 > e ? 1 : t14 >= e ? 0 : NaN;
}
function bC() {
  var t14 = arguments[0];
  return arguments[0] = this, t14.apply(null, arguments), this;
}
function vC() {
  return Array.from(this);
}
function yC() {
  for (var t14 = this._groups, e = 0, i = t14.length; e < i; ++e) for (var a = t14[e], u = 0, o = a.length; u < o; ++u) {
    var f = a[u];
    if (f) return f;
  }
  return null;
}
function _C() {
  let t14 = 0;
  for (const e of this) ++t14;
  return t14;
}
function wC() {
  return !this.node();
}
function SC(t14) {
  for (var e = this._groups, i = 0, a = e.length; i < a; ++i) for (var u = e[i], o = 0, f = u.length, s; o < f; ++o) (s = u[o]) && t14.call(s, s.__data__, o, u);
  return this;
}
function xC(t14) {
  return function() {
    this.removeAttribute(t14);
  };
}
function MC(t14) {
  return function() {
    this.removeAttributeNS(t14.space, t14.local);
  };
}
function TC(t14, e) {
  return function() {
    this.setAttribute(t14, e);
  };
}
function EC(t14, e) {
  return function() {
    this.setAttributeNS(t14.space, t14.local, e);
  };
}
function AC(t14, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttribute(t14) : this.setAttribute(t14, i);
  };
}
function OC(t14, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttributeNS(t14.space, t14.local) : this.setAttributeNS(t14.space, t14.local, i);
  };
}
function CC(t14, e) {
  var i = td(t14);
  if (arguments.length < 2) {
    var a = this.node();
    return i.local ? a.getAttributeNS(i.space, i.local) : a.getAttribute(i);
  }
  return this.each((e == null ? i.local ? MC : xC : typeof e == "function" ? i.local ? OC : AC : i.local ? EC : TC)(i, e));
}
function J3(t14) {
  return t14.ownerDocument && t14.ownerDocument.defaultView || t14.document && t14 || t14.defaultView;
}
function DC(t14) {
  return function() {
    this.style.removeProperty(t14);
  };
}
function RC(t14, e, i) {
  return function() {
    this.style.setProperty(t14, e, i);
  };
}
function NC(t14, e, i) {
  return function() {
    var a = e.apply(this, arguments);
    a == null ? this.style.removeProperty(t14) : this.style.setProperty(t14, a, i);
  };
}
function $C(t14, e, i) {
  return arguments.length > 1 ? this.each((e == null ? DC : typeof e == "function" ? NC : RC)(t14, e, i ?? "")) : Tu(this.node(), t14);
}
function Tu(t14, e) {
  return t14.style.getPropertyValue(e) || J3(t14).getComputedStyle(t14, null).getPropertyValue(e);
}
function zC(t14) {
  return function() {
    delete this[t14];
  };
}
function UC(t14, e) {
  return function() {
    this[t14] = e;
  };
}
function LC(t14, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? delete this[t14] : this[t14] = i;
  };
}
function HC(t14, e) {
  return arguments.length > 1 ? this.each((e == null ? zC : typeof e == "function" ? LC : UC)(t14, e)) : this.node()[t14];
}
function t5(t14) {
  return t14.trim().split(/^|\s+/);
}
function dg(t14) {
  return t14.classList || new e5(t14);
}
function e5(t14) {
  this._node = t14, this._names = t5(t14.getAttribute("class") || "");
}
e5.prototype = { add: function(t14) {
  var e = this._names.indexOf(t14);
  e < 0 && (this._names.push(t14), this._node.setAttribute("class", this._names.join(" ")));
}, remove: function(t14) {
  var e = this._names.indexOf(t14);
  e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
}, contains: function(t14) {
  return this._names.indexOf(t14) >= 0;
} };
function n5(t14, e) {
  for (var i = dg(t14), a = -1, u = e.length; ++a < u; ) i.add(e[a]);
}
function i5(t14, e) {
  for (var i = dg(t14), a = -1, u = e.length; ++a < u; ) i.remove(e[a]);
}
function VC(t14) {
  return function() {
    n5(this, t14);
  };
}
function jC(t14) {
  return function() {
    i5(this, t14);
  };
}
function BC(t14, e) {
  return function() {
    (e.apply(this, arguments) ? n5 : i5)(this, t14);
  };
}
function qC(t14, e) {
  var i = t5(t14 + "");
  if (arguments.length < 2) {
    for (var a = dg(this.node()), u = -1, o = i.length; ++u < o; ) if (!a.contains(i[u])) return false;
    return true;
  }
  return this.each((typeof e == "function" ? BC : e ? VC : jC)(i, e));
}
function kC() {
  this.textContent = "";
}
function YC(t14) {
  return function() {
    this.textContent = t14;
  };
}
function GC(t14) {
  return function() {
    var e = t14.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function XC(t14) {
  return arguments.length ? this.each(t14 == null ? kC : (typeof t14 == "function" ? GC : YC)(t14)) : this.node().textContent;
}
function FC() {
  this.innerHTML = "";
}
function ZC(t14) {
  return function() {
    this.innerHTML = t14;
  };
}
function QC(t14) {
  return function() {
    var e = t14.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function KC(t14) {
  return arguments.length ? this.each(t14 == null ? FC : (typeof t14 == "function" ? QC : ZC)(t14)) : this.node().innerHTML;
}
function PC() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function IC() {
  return this.each(PC);
}
function WC() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function JC() {
  return this.each(WC);
}
function tD(t14) {
  var e = typeof t14 == "function" ? t14 : ed(t14);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function eD() {
  return null;
}
function nD(t14, e) {
  var i = typeof t14 == "function" ? t14 : ed(t14), a = e == null ? eD : typeof e == "function" ? e : sg(e);
  return this.select(function() {
    return this.insertBefore(i.apply(this, arguments), a.apply(this, arguments) || null);
  });
}
function iD() {
  var t14 = this.parentNode;
  t14 && t14.removeChild(this);
}
function rD() {
  return this.each(iD);
}
function aD() {
  var t14 = this.cloneNode(false), e = this.parentNode;
  return e ? e.insertBefore(t14, this.nextSibling) : t14;
}
function uD() {
  var t14 = this.cloneNode(true), e = this.parentNode;
  return e ? e.insertBefore(t14, this.nextSibling) : t14;
}
function lD(t14) {
  return this.select(t14 ? uD : aD);
}
function oD(t14) {
  return arguments.length ? this.property("__data__", t14) : this.node().__data__;
}
function cD(t14) {
  return function(e) {
    t14.call(this, e, this.__data__);
  };
}
function fD(t14) {
  return t14.trim().split(/^|\s+/).map(function(e) {
    var i = "", a = e.indexOf(".");
    return a >= 0 && (i = e.slice(a + 1), e = e.slice(0, a)), { type: e, name: i };
  });
}
function sD(t14) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var i = 0, a = -1, u = e.length, o; i < u; ++i) o = e[i], (!t14.type || o.type === t14.type) && o.name === t14.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++a] = o;
      ++a ? e.length = a : delete this.__on;
    }
  };
}
function dD(t14, e, i) {
  return function() {
    var a = this.__on, u, o = cD(e);
    if (a) {
      for (var f = 0, s = a.length; f < s; ++f) if ((u = a[f]).type === t14.type && u.name === t14.name) {
        this.removeEventListener(u.type, u.listener, u.options), this.addEventListener(u.type, u.listener = o, u.options = i), u.value = e;
        return;
      }
    }
    this.addEventListener(t14.type, o, i), u = { type: t14.type, name: t14.name, value: e, listener: o, options: i }, a ? a.push(u) : this.__on = [u];
  };
}
function hD(t14, e, i) {
  var a = fD(t14 + ""), u, o = a.length, f;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var d = 0, p = s.length, m; d < p; ++d) for (u = 0, m = s[d]; u < o; ++u) if ((f = a[u]).type === m.type && f.name === m.name) return m.value;
    }
    return;
  }
  for (s = e ? dD : sD, u = 0; u < o; ++u) this.each(s(a[u], e, i));
  return this;
}
function r5(t14, e, i) {
  var a = J3(t14), u = a.CustomEvent;
  typeof u == "function" ? u = new u(e, i) : (u = a.document.createEvent("Event"), i ? (u.initEvent(e, i.bubbles, i.cancelable), u.detail = i.detail) : u.initEvent(e, false, false)), t14.dispatchEvent(u);
}
function pD(t14, e) {
  return function() {
    return r5(this, t14, e);
  };
}
function mD(t14, e) {
  return function() {
    return r5(this, t14, e.apply(this, arguments));
  };
}
function gD(t14, e) {
  return this.each((typeof e == "function" ? mD : pD)(t14, e));
}
function* bD() {
  for (var t14 = this._groups, e = 0, i = t14.length; e < i; ++e) for (var a = t14[e], u = 0, o = a.length, f; u < o; ++u) (f = a[u]) && (yield f);
}
var a5 = [null];
function cn(t14, e) {
  this._groups = t14, this._parents = e;
}
function No() {
  return new cn([[document.documentElement]], a5);
}
function vD() {
  return this;
}
cn.prototype = No.prototype = { constructor: cn, select: GO, selectAll: QO, selectChild: WO, selectChildren: nC, filter: iC, data: cC, enter: rC, exit: sC, join: dC, merge: hC, selection: vD, order: pC, sort: mC, call: bC, nodes: vC, node: yC, size: _C, empty: wC, each: SC, attr: CC, style: $C, property: HC, classed: qC, text: XC, html: KC, raise: IC, lower: JC, append: tD, insert: nD, remove: rD, clone: lD, datum: oD, on: hD, dispatch: gD, [Symbol.iterator]: bD };
function ua(t14) {
  return typeof t14 == "string" ? new cn([[document.querySelector(t14)]], [document.documentElement]) : new cn([[t14]], a5);
}
function yD(t14) {
  let e;
  for (; e = t14.sourceEvent; ) t14 = e;
  return t14;
}
function _D(t14, e) {
  if (t14 = yD(t14), e === void 0 && (e = t14.currentTarget), e) {
    var i = e.ownerSVGElement || e;
    if (i.createSVGPoint) {
      var a = i.createSVGPoint();
      return a.x = t14.clientX, a.y = t14.clientY, a = a.matrixTransform(e.getScreenCTM().inverse()), [a.x, a.y];
    }
    if (e.getBoundingClientRect) {
      var u = e.getBoundingClientRect();
      return [t14.clientX - u.left - e.clientLeft, t14.clientY - u.top - e.clientTop];
    }
  }
  return [t14.pageX, t14.pageY];
}
function ju(t14, e, i) {
  t14.prototype = e.prototype = i, i.constructor = t14;
}
function $o(t14, e) {
  var i = Object.create(t14.prototype);
  for (var a in e) i[a] = e[a];
  return i;
}
function Dr() {
}
var da = 0.7, Eu = 1 / da, _u = "\\s*([+-]?\\d+)\\s*", vo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ii = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", wD = /^#([0-9a-f]{3,8})$/, SD = new RegExp(`^rgb\\(${_u},${_u},${_u}\\)$`), xD = new RegExp(`^rgb\\(${ii},${ii},${ii}\\)$`), MD = new RegExp(`^rgba\\(${_u},${_u},${_u},${vo}\\)$`), TD = new RegExp(`^rgba\\(${ii},${ii},${ii},${vo}\\)$`), ED = new RegExp(`^hsl\\(${vo},${ii},${ii}\\)$`), AD = new RegExp(`^hsla\\(${vo},${ii},${ii},${vo}\\)$`), G2 = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
ju(Dr, ha, { copy(t14) {
  return Object.assign(new this.constructor(), this, t14);
}, displayable() {
  return this.rgb().displayable();
}, hex: X2, formatHex: X2, formatHex8: OD, formatHsl: CD, formatRgb: F2, toString: F2 });
function X2() {
  return this.rgb().formatHex();
}
function OD() {
  return this.rgb().formatHex8();
}
function CD() {
  return u5(this).formatHsl();
}
function F2() {
  return this.rgb().formatRgb();
}
function ha(t14) {
  var e, i;
  return t14 = (t14 + "").trim().toLowerCase(), (e = wD.exec(t14)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? Z2(e) : i === 3 ? new xe(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? wf(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? wf(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = SD.exec(t14)) ? new xe(e[1], e[2], e[3], 1) : (e = xD.exec(t14)) ? new xe(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = MD.exec(t14)) ? wf(e[1], e[2], e[3], e[4]) : (e = TD.exec(t14)) ? wf(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ED.exec(t14)) ? P2(e[1], e[2] / 100, e[3] / 100, 1) : (e = AD.exec(t14)) ? P2(e[1], e[2] / 100, e[3] / 100, e[4]) : G2.hasOwnProperty(t14) ? Z2(G2[t14]) : t14 === "transparent" ? new xe(NaN, NaN, NaN, 0) : null;
}
function Z2(t14) {
  return new xe(t14 >> 16 & 255, t14 >> 8 & 255, t14 & 255, 1);
}
function wf(t14, e, i, a) {
  return a <= 0 && (t14 = e = i = NaN), new xe(t14, e, i, a);
}
function hg(t14) {
  return t14 instanceof Dr || (t14 = ha(t14)), t14 ? (t14 = t14.rgb(), new xe(t14.r, t14.g, t14.b, t14.opacity)) : new xe();
}
function Er(t14, e, i, a) {
  return arguments.length === 1 ? hg(t14) : new xe(t14, e, i, a ?? 1);
}
function xe(t14, e, i, a) {
  this.r = +t14, this.g = +e, this.b = +i, this.opacity = +a;
}
ju(xe, Er, $o(Dr, { brighter(t14) {
  return t14 = t14 == null ? Eu : Math.pow(Eu, t14), new xe(this.r * t14, this.g * t14, this.b * t14, this.opacity);
}, darker(t14) {
  return t14 = t14 == null ? da : Math.pow(da, t14), new xe(this.r * t14, this.g * t14, this.b * t14, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new xe(la(this.r), la(this.g), la(this.b), ps(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Q2, formatHex: Q2, formatHex8: DD, formatRgb: K2, toString: K2 }));
function Q2() {
  return `#${aa(this.r)}${aa(this.g)}${aa(this.b)}`;
}
function DD() {
  return `#${aa(this.r)}${aa(this.g)}${aa(this.b)}${aa((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function K2() {
  const t14 = ps(this.opacity);
  return `${t14 === 1 ? "rgb(" : "rgba("}${la(this.r)}, ${la(this.g)}, ${la(this.b)}${t14 === 1 ? ")" : `, ${t14})`}`;
}
function ps(t14) {
  return isNaN(t14) ? 1 : Math.max(0, Math.min(1, t14));
}
function la(t14) {
  return Math.max(0, Math.min(255, Math.round(t14) || 0));
}
function aa(t14) {
  return t14 = la(t14), (t14 < 16 ? "0" : "") + t14.toString(16);
}
function P2(t14, e, i, a) {
  return a <= 0 ? t14 = e = i = NaN : i <= 0 || i >= 1 ? t14 = e = NaN : e <= 0 && (t14 = NaN), new Hn(t14, e, i, a);
}
function u5(t14) {
  if (t14 instanceof Hn) return new Hn(t14.h, t14.s, t14.l, t14.opacity);
  if (t14 instanceof Dr || (t14 = ha(t14)), !t14) return new Hn();
  if (t14 instanceof Hn) return t14;
  t14 = t14.rgb();
  var e = t14.r / 255, i = t14.g / 255, a = t14.b / 255, u = Math.min(e, i, a), o = Math.max(e, i, a), f = NaN, s = o - u, d = (o + u) / 2;
  return s ? (e === o ? f = (i - a) / s + (i < a) * 6 : i === o ? f = (a - e) / s + 2 : f = (e - i) / s + 4, s /= d < 0.5 ? o + u : 2 - o - u, f *= 60) : s = d > 0 && d < 1 ? 0 : f, new Hn(f, s, d, t14.opacity);
}
function Jp(t14, e, i, a) {
  return arguments.length === 1 ? u5(t14) : new Hn(t14, e, i, a ?? 1);
}
function Hn(t14, e, i, a) {
  this.h = +t14, this.s = +e, this.l = +i, this.opacity = +a;
}
ju(Hn, Jp, $o(Dr, { brighter(t14) {
  return t14 = t14 == null ? Eu : Math.pow(Eu, t14), new Hn(this.h, this.s, this.l * t14, this.opacity);
}, darker(t14) {
  return t14 = t14 == null ? da : Math.pow(da, t14), new Hn(this.h, this.s, this.l * t14, this.opacity);
}, rgb() {
  var t14 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t14) || isNaN(this.s) ? 0 : this.s, i = this.l, a = i + (i < 0.5 ? i : 1 - i) * e, u = 2 * i - a;
  return new xe(tp(t14 >= 240 ? t14 - 240 : t14 + 120, u, a), tp(t14, u, a), tp(t14 < 120 ? t14 + 240 : t14 - 120, u, a), this.opacity);
}, clamp() {
  return new Hn(I2(this.h), Sf(this.s), Sf(this.l), ps(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const t14 = ps(this.opacity);
  return `${t14 === 1 ? "hsl(" : "hsla("}${I2(this.h)}, ${Sf(this.s) * 100}%, ${Sf(this.l) * 100}%${t14 === 1 ? ")" : `, ${t14})`}`;
} }));
function I2(t14) {
  return t14 = (t14 || 0) % 360, t14 < 0 ? t14 + 360 : t14;
}
function Sf(t14) {
  return Math.max(0, Math.min(1, t14 || 0));
}
function tp(t14, e, i) {
  return (t14 < 60 ? e + (i - e) * t14 / 60 : t14 < 180 ? i : t14 < 240 ? e + (i - e) * (240 - t14) / 60 : e) * 255;
}
const l5 = Math.PI / 180, o5 = 180 / Math.PI, ms = 18, c5 = 0.96422, f5 = 1, s5 = 0.82521, d5 = 4 / 29, wu = 6 / 29, h5 = 3 * wu * wu, RD = wu * wu * wu;
function p5(t14) {
  if (t14 instanceof ri) return new ri(t14.l, t14.a, t14.b, t14.opacity);
  if (t14 instanceof Hi) return m5(t14);
  t14 instanceof xe || (t14 = hg(t14));
  var e = rp(t14.r), i = rp(t14.g), a = rp(t14.b), u = ep((0.2225045 * e + 0.7168786 * i + 0.0606169 * a) / f5), o, f;
  return e === i && i === a ? o = f = u : (o = ep((0.4360747 * e + 0.3850649 * i + 0.1430804 * a) / c5), f = ep((0.0139322 * e + 0.0971045 * i + 0.7141733 * a) / s5)), new ri(116 * u - 16, 500 * (o - u), 200 * (u - f), t14.opacity);
}
function tm(t14, e, i, a) {
  return arguments.length === 1 ? p5(t14) : new ri(t14, e, i, a ?? 1);
}
function ri(t14, e, i, a) {
  this.l = +t14, this.a = +e, this.b = +i, this.opacity = +a;
}
ju(ri, tm, $o(Dr, { brighter(t14) {
  return new ri(this.l + ms * (t14 ?? 1), this.a, this.b, this.opacity);
}, darker(t14) {
  return new ri(this.l - ms * (t14 ?? 1), this.a, this.b, this.opacity);
}, rgb() {
  var t14 = (this.l + 16) / 116, e = isNaN(this.a) ? t14 : t14 + this.a / 500, i = isNaN(this.b) ? t14 : t14 - this.b / 200;
  return e = c5 * np(e), t14 = f5 * np(t14), i = s5 * np(i), new xe(ip(3.1338561 * e - 1.6168667 * t14 - 0.4906146 * i), ip(-0.9787684 * e + 1.9161415 * t14 + 0.033454 * i), ip(0.0719453 * e - 0.2289914 * t14 + 1.4052427 * i), this.opacity);
} }));
function ep(t14) {
  return t14 > RD ? Math.pow(t14, 1 / 3) : t14 / h5 + d5;
}
function np(t14) {
  return t14 > wu ? t14 * t14 * t14 : h5 * (t14 - d5);
}
function ip(t14) {
  return 255 * (t14 <= 31308e-7 ? 12.92 * t14 : 1.055 * Math.pow(t14, 1 / 2.4) - 0.055);
}
function rp(t14) {
  return (t14 /= 255) <= 0.04045 ? t14 / 12.92 : Math.pow((t14 + 0.055) / 1.055, 2.4);
}
function ND(t14) {
  if (t14 instanceof Hi) return new Hi(t14.h, t14.c, t14.l, t14.opacity);
  if (t14 instanceof ri || (t14 = p5(t14)), t14.a === 0 && t14.b === 0) return new Hi(NaN, 0 < t14.l && t14.l < 100 ? 0 : NaN, t14.l, t14.opacity);
  var e = Math.atan2(t14.b, t14.a) * o5;
  return new Hi(e < 0 ? e + 360 : e, Math.sqrt(t14.a * t14.a + t14.b * t14.b), t14.l, t14.opacity);
}
function em(t14, e, i, a) {
  return arguments.length === 1 ? ND(t14) : new Hi(t14, e, i, a ?? 1);
}
function Hi(t14, e, i, a) {
  this.h = +t14, this.c = +e, this.l = +i, this.opacity = +a;
}
function m5(t14) {
  if (isNaN(t14.h)) return new ri(t14.l, 0, 0, t14.opacity);
  var e = t14.h * l5;
  return new ri(t14.l, Math.cos(e) * t14.c, Math.sin(e) * t14.c, t14.opacity);
}
ju(Hi, em, $o(Dr, { brighter(t14) {
  return new Hi(this.h, this.c, this.l + ms * (t14 ?? 1), this.opacity);
}, darker(t14) {
  return new Hi(this.h, this.c, this.l - ms * (t14 ?? 1), this.opacity);
}, rgb() {
  return m5(this).rgb();
} }));
var g5 = -0.14861, pg = 1.78277, mg = -0.29227, nd = -0.90649, yo = 1.97294, W2 = yo * nd, J2 = yo * pg, t_ = pg * mg - nd * g5;
function $D(t14) {
  if (t14 instanceof oa) return new oa(t14.h, t14.s, t14.l, t14.opacity);
  t14 instanceof xe || (t14 = hg(t14));
  var e = t14.r / 255, i = t14.g / 255, a = t14.b / 255, u = (t_ * a + W2 * e - J2 * i) / (t_ + W2 - J2), o = a - u, f = (yo * (i - u) - mg * o) / nd, s = Math.sqrt(f * f + o * o) / (yo * u * (1 - u)), d = s ? Math.atan2(f, o) * o5 - 120 : NaN;
  return new oa(d < 0 ? d + 360 : d, s, u, t14.opacity);
}
function ui(t14, e, i, a) {
  return arguments.length === 1 ? $D(t14) : new oa(t14, e, i, a ?? 1);
}
function oa(t14, e, i, a) {
  this.h = +t14, this.s = +e, this.l = +i, this.opacity = +a;
}
ju(oa, ui, $o(Dr, { brighter(t14) {
  return t14 = t14 == null ? Eu : Math.pow(Eu, t14), new oa(this.h, this.s, this.l * t14, this.opacity);
}, darker(t14) {
  return t14 = t14 == null ? da : Math.pow(da, t14), new oa(this.h, this.s, this.l * t14, this.opacity);
}, rgb() {
  var t14 = isNaN(this.h) ? 0 : (this.h + 120) * l5, e = +this.l, i = isNaN(this.s) ? 0 : this.s * e * (1 - e), a = Math.cos(t14), u = Math.sin(t14);
  return new xe(255 * (e + i * (g5 * a + pg * u)), 255 * (e + i * (mg * a + nd * u)), 255 * (e + i * (yo * a)), this.opacity);
} }));
function zD(t14, e, i, a, u) {
  var o = t14 * t14, f = o * t14;
  return ((1 - 3 * t14 + 3 * o - f) * e + (4 - 6 * o + 3 * f) * i + (1 + 3 * t14 + 3 * o - 3 * f) * a + f * u) / 6;
}
function UD(t14) {
  var e = t14.length - 1;
  return function(i) {
    var a = i <= 0 ? i = 0 : i >= 1 ? (i = 1, e - 1) : Math.floor(i * e), u = t14[a], o = t14[a + 1], f = a > 0 ? t14[a - 1] : 2 * u - o, s = a < e - 1 ? t14[a + 2] : 2 * o - u;
    return zD((i - a / e) * e, f, u, o, s);
  };
}
const id = (t14) => () => t14;
function b5(t14, e) {
  return function(i) {
    return t14 + i * e;
  };
}
function LD(t14, e, i) {
  return t14 = Math.pow(t14, i), e = Math.pow(e, i) - t14, i = 1 / i, function(a) {
    return Math.pow(t14 + a * e, i);
  };
}
function gg(t14, e) {
  var i = e - t14;
  return i ? b5(t14, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : id(isNaN(t14) ? e : t14);
}
function HD(t14) {
  return (t14 = +t14) == 1 ? Ve : function(e, i) {
    return i - e ? LD(e, i, t14) : id(isNaN(e) ? i : e);
  };
}
function Ve(t14, e) {
  var i = e - t14;
  return i ? b5(t14, i) : id(isNaN(t14) ? e : t14);
}
const pa = function t(e) {
  var i = HD(e);
  function a(u, o) {
    var f = i((u = Er(u)).r, (o = Er(o)).r), s = i(u.g, o.g), d = i(u.b, o.b), p = Ve(u.opacity, o.opacity);
    return function(m) {
      return u.r = f(m), u.g = s(m), u.b = d(m), u.opacity = p(m), u + "";
    };
  }
  return a.gamma = t, a;
}(1);
function VD(t14) {
  return function(e) {
    var i = e.length, a = new Array(i), u = new Array(i), o = new Array(i), f, s;
    for (f = 0; f < i; ++f) s = Er(e[f]), a[f] = s.r || 0, u[f] = s.g || 0, o[f] = s.b || 0;
    return a = t14(a), u = t14(u), o = t14(o), s.opacity = 1, function(d) {
      return s.r = a(d), s.g = u(d), s.b = o(d), s + "";
    };
  };
}
var jD = VD(UD);
function BD(t14, e) {
  e || (e = []);
  var i = t14 ? Math.min(e.length, t14.length) : 0, a = e.slice(), u;
  return function(o) {
    for (u = 0; u < i; ++u) a[u] = t14[u] * (1 - o) + e[u] * o;
    return a;
  };
}
function qD(t14) {
  return ArrayBuffer.isView(t14) && !(t14 instanceof DataView);
}
function kD(t14, e) {
  var i = e ? e.length : 0, a = t14 ? Math.min(i, t14.length) : 0, u = new Array(a), o = new Array(i), f;
  for (f = 0; f < a; ++f) u[f] = zo(t14[f], e[f]);
  for (; f < i; ++f) o[f] = e[f];
  return function(s) {
    for (f = 0; f < a; ++f) o[f] = u[f](s);
    return o;
  };
}
function YD(t14, e) {
  var i = /* @__PURE__ */ new Date();
  return t14 = +t14, e = +e, function(a) {
    return i.setTime(t14 * (1 - a) + e * a), i;
  };
}
function Le(t14, e) {
  return t14 = +t14, e = +e, function(i) {
    return t14 * (1 - i) + e * i;
  };
}
function GD(t14, e) {
  var i = {}, a = {}, u;
  (t14 === null || typeof t14 != "object") && (t14 = {}), (e === null || typeof e != "object") && (e = {});
  for (u in e) u in t14 ? i[u] = zo(t14[u], e[u]) : a[u] = e[u];
  return function(o) {
    for (u in i) a[u] = i[u](o);
    return a;
  };
}
var nm = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ap = new RegExp(nm.source, "g");
function XD(t14) {
  return function() {
    return t14;
  };
}
function FD(t14) {
  return function(e) {
    return t14(e) + "";
  };
}
function v5(t14, e) {
  var i = nm.lastIndex = ap.lastIndex = 0, a, u, o, f = -1, s = [], d = [];
  for (t14 = t14 + "", e = e + ""; (a = nm.exec(t14)) && (u = ap.exec(e)); ) (o = u.index) > i && (o = e.slice(i, o), s[f] ? s[f] += o : s[++f] = o), (a = a[0]) === (u = u[0]) ? s[f] ? s[f] += u : s[++f] = u : (s[++f] = null, d.push({ i: f, x: Le(a, u) })), i = ap.lastIndex;
  return i < e.length && (o = e.slice(i), s[f] ? s[f] += o : s[++f] = o), s.length < 2 ? d[0] ? FD(d[0].x) : XD(e) : (e = d.length, function(p) {
    for (var m = 0, b; m < e; ++m) s[(b = d[m]).i] = b.x(p);
    return s.join("");
  });
}
function zo(t14, e) {
  var i = typeof e, a;
  return e == null || i === "boolean" ? id(e) : (i === "number" ? Le : i === "string" ? (a = ha(e)) ? (e = a, pa) : v5 : e instanceof ha ? pa : e instanceof Date ? YD : qD(e) ? BD : Array.isArray(e) ? kD : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? GD : Le)(t14, e);
}
function bg(t14, e) {
  return t14 = +t14, e = +e, function(i) {
    return Math.round(t14 * (1 - i) + e * i);
  };
}
var e_ = 180 / Math.PI, im = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function y5(t14, e, i, a, u, o) {
  var f, s, d;
  return (f = Math.sqrt(t14 * t14 + e * e)) && (t14 /= f, e /= f), (d = t14 * i + e * a) && (i -= t14 * d, a -= e * d), (s = Math.sqrt(i * i + a * a)) && (i /= s, a /= s, d /= s), t14 * a < e * i && (t14 = -t14, e = -e, d = -d, f = -f), { translateX: u, translateY: o, rotate: Math.atan2(e, t14) * e_, skewX: Math.atan(d) * e_, scaleX: f, scaleY: s };
}
var xf;
function ZD(t14) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t14 + "");
  return e.isIdentity ? im : y5(e.a, e.b, e.c, e.d, e.e, e.f);
}
function QD(t14) {
  return t14 == null || (xf || (xf = document.createElementNS("http://www.w3.org/2000/svg", "g")), xf.setAttribute("transform", t14), !(t14 = xf.transform.baseVal.consolidate())) ? im : (t14 = t14.matrix, y5(t14.a, t14.b, t14.c, t14.d, t14.e, t14.f));
}
function _5(t14, e, i, a) {
  function u(p) {
    return p.length ? p.pop() + " " : "";
  }
  function o(p, m, b, v, y, w) {
    if (p !== b || m !== v) {
      var S = y.push("translate(", null, e, null, i);
      w.push({ i: S - 4, x: Le(p, b) }, { i: S - 2, x: Le(m, v) });
    } else (b || v) && y.push("translate(" + b + e + v + i);
  }
  function f(p, m, b, v) {
    p !== m ? (p - m > 180 ? m += 360 : m - p > 180 && (p += 360), v.push({ i: b.push(u(b) + "rotate(", null, a) - 2, x: Le(p, m) })) : m && b.push(u(b) + "rotate(" + m + a);
  }
  function s(p, m, b, v) {
    p !== m ? v.push({ i: b.push(u(b) + "skewX(", null, a) - 2, x: Le(p, m) }) : m && b.push(u(b) + "skewX(" + m + a);
  }
  function d(p, m, b, v, y, w) {
    if (p !== b || m !== v) {
      var S = y.push(u(y) + "scale(", null, ",", null, ")");
      w.push({ i: S - 4, x: Le(p, b) }, { i: S - 2, x: Le(m, v) });
    } else (b !== 1 || v !== 1) && y.push(u(y) + "scale(" + b + "," + v + ")");
  }
  return function(p, m) {
    var b = [], v = [];
    return p = t14(p), m = t14(m), o(p.translateX, p.translateY, m.translateX, m.translateY, b, v), f(p.rotate, m.rotate, b, v), s(p.skewX, m.skewX, b, v), d(p.scaleX, p.scaleY, m.scaleX, m.scaleY, b, v), p = m = null, function(y) {
      for (var w = -1, S = v.length, x; ++w < S; ) b[(x = v[w]).i] = x.x(y);
      return b.join("");
    };
  };
}
var KD = _5(ZD, "px, ", "px)", "deg)"), PD = _5(QD, ", ", ")", ")");
function ID(t14) {
  return function(e, i) {
    var a = t14((e = Jp(e)).h, (i = Jp(i)).h), u = Ve(e.s, i.s), o = Ve(e.l, i.l), f = Ve(e.opacity, i.opacity);
    return function(s) {
      return e.h = a(s), e.s = u(s), e.l = o(s), e.opacity = f(s), e + "";
    };
  };
}
const WD = ID(gg);
function JD(t14, e) {
  var i = Ve((t14 = tm(t14)).l, (e = tm(e)).l), a = Ve(t14.a, e.a), u = Ve(t14.b, e.b), o = Ve(t14.opacity, e.opacity);
  return function(f) {
    return t14.l = i(f), t14.a = a(f), t14.b = u(f), t14.opacity = o(f), t14 + "";
  };
}
function tR(t14) {
  return function(e, i) {
    var a = t14((e = em(e)).h, (i = em(i)).h), u = Ve(e.c, i.c), o = Ve(e.l, i.l), f = Ve(e.opacity, i.opacity);
    return function(s) {
      return e.h = a(s), e.c = u(s), e.l = o(s), e.opacity = f(s), e + "";
    };
  };
}
const eR = tR(gg);
function w5(t14) {
  return function e(i) {
    i = +i;
    function a(u, o) {
      var f = t14((u = ui(u)).h, (o = ui(o)).h), s = Ve(u.s, o.s), d = Ve(u.l, o.l), p = Ve(u.opacity, o.opacity);
      return function(m) {
        return u.h = f(m), u.s = s(m), u.l = d(Math.pow(m, i)), u.opacity = p(m), u + "";
      };
    }
    return a.gamma = e, a;
  }(1);
}
w5(gg);
var vg = w5(Ve);
function rd(t14, e) {
  e === void 0 && (e = t14, t14 = zo);
  for (var i = 0, a = e.length - 1, u = e[0], o = new Array(a < 0 ? 0 : a); i < a; ) o[i] = t14(u, u = e[++i]);
  return function(f) {
    var s = Math.max(0, Math.min(a - 1, Math.floor(f *= a)));
    return o[s](f - s);
  };
}
function jn(t14, e) {
  for (var i = new Array(e), a = 0; a < e; ++a) i[a] = t14(a / (e - 1));
  return i;
}
var Au = 0, to = 0, Fl = 0, S5 = 1e3, gs, eo, bs = 0, ma = 0, ad = 0, _o = typeof performance == "object" && performance.now ? performance : Date, x5 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t14) {
  setTimeout(t14, 17);
};
function yg() {
  return ma || (x5(nR), ma = _o.now() + ad);
}
function nR() {
  ma = 0;
}
function vs() {
  this._call = this._time = this._next = null;
}
vs.prototype = M5.prototype = { constructor: vs, restart: function(t14, e, i) {
  if (typeof t14 != "function") throw new TypeError("callback is not a function");
  i = (i == null ? yg() : +i) + (e == null ? 0 : +e), !this._next && eo !== this && (eo ? eo._next = this : gs = this, eo = this), this._call = t14, this._time = i, rm();
}, stop: function() {
  this._call && (this._call = null, this._time = 1 / 0, rm());
} };
function M5(t14, e, i) {
  var a = new vs();
  return a.restart(t14, e, i), a;
}
function iR() {
  yg(), ++Au;
  for (var t14 = gs, e; t14; ) (e = ma - t14._time) >= 0 && t14._call.call(void 0, e), t14 = t14._next;
  --Au;
}
function n_() {
  ma = (bs = _o.now()) + ad, Au = to = 0;
  try {
    iR();
  } finally {
    Au = 0, aR(), ma = 0;
  }
}
function rR() {
  var t14 = _o.now(), e = t14 - bs;
  e > S5 && (ad -= e, bs = t14);
}
function aR() {
  for (var t14, e = gs, i, a = 1 / 0; e; ) e._call ? (a > e._time && (a = e._time), t14 = e, e = e._next) : (i = e._next, e._next = null, e = t14 ? t14._next = i : gs = i);
  eo = t14, rm(a);
}
function rm(t14) {
  if (!Au) {
    to && (to = clearTimeout(to));
    var e = t14 - ma;
    e > 24 ? (t14 < 1 / 0 && (to = setTimeout(n_, t14 - _o.now() - ad)), Fl && (Fl = clearInterval(Fl))) : (Fl || (bs = _o.now(), Fl = setInterval(rR, S5)), Au = 1, x5(n_));
  }
}
function i_(t14, e, i) {
  var a = new vs();
  return e = e == null ? 0 : +e, a.restart((u) => {
    a.stop(), t14(u + e);
  }, e, i), a;
}
var uR = Q3("start", "end", "cancel", "interrupt"), lR = [], T5 = 0, r_ = 1, am = 2, Qf = 3, a_ = 4, um = 5, Kf = 6;
function ud(t14, e, i, a, u, o) {
  var f = t14.__transition;
  if (!f) t14.__transition = {};
  else if (i in f) return;
  oR(t14, i, { name: e, index: a, group: u, on: uR, tween: lR, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: T5 });
}
function _g(t14, e) {
  var i = kn(t14, e);
  if (i.state > T5) throw new Error("too late; already scheduled");
  return i;
}
function ci(t14, e) {
  var i = kn(t14, e);
  if (i.state > Qf) throw new Error("too late; already running");
  return i;
}
function kn(t14, e) {
  var i = t14.__transition;
  if (!i || !(i = i[e])) throw new Error("transition not found");
  return i;
}
function oR(t14, e, i) {
  var a = t14.__transition, u;
  a[e] = i, i.timer = M5(o, 0, i.time);
  function o(p) {
    i.state = r_, i.timer.restart(f, i.delay, i.time), i.delay <= p && f(p - i.delay);
  }
  function f(p) {
    var m, b, v, y;
    if (i.state !== r_) return d();
    for (m in a) if (y = a[m], y.name === i.name) {
      if (y.state === Qf) return i_(f);
      y.state === a_ ? (y.state = Kf, y.timer.stop(), y.on.call("interrupt", t14, t14.__data__, y.index, y.group), delete a[m]) : +m < e && (y.state = Kf, y.timer.stop(), y.on.call("cancel", t14, t14.__data__, y.index, y.group), delete a[m]);
    }
    if (i_(function() {
      i.state === Qf && (i.state = a_, i.timer.restart(s, i.delay, i.time), s(p));
    }), i.state = am, i.on.call("start", t14, t14.__data__, i.index, i.group), i.state === am) {
      for (i.state = Qf, u = new Array(v = i.tween.length), m = 0, b = -1; m < v; ++m) (y = i.tween[m].value.call(t14, t14.__data__, i.index, i.group)) && (u[++b] = y);
      u.length = b + 1;
    }
  }
  function s(p) {
    for (var m = p < i.duration ? i.ease.call(null, p / i.duration) : (i.timer.restart(d), i.state = um, 1), b = -1, v = u.length; ++b < v; ) u[b].call(t14, m);
    i.state === um && (i.on.call("end", t14, t14.__data__, i.index, i.group), d());
  }
  function d() {
    i.state = Kf, i.timer.stop(), delete a[e];
    for (var p in a) return;
    delete t14.__transition;
  }
}
function cR(t14, e) {
  var i = t14.__transition, a, u, o = true, f;
  if (i) {
    e = e == null ? null : e + "";
    for (f in i) {
      if ((a = i[f]).name !== e) {
        o = false;
        continue;
      }
      u = a.state > am && a.state < um, a.state = Kf, a.timer.stop(), a.on.call(u ? "interrupt" : "cancel", t14, t14.__data__, a.index, a.group), delete i[f];
    }
    o && delete t14.__transition;
  }
}
function fR(t14) {
  return this.each(function() {
    cR(this, t14);
  });
}
function sR(t14, e) {
  var i, a;
  return function() {
    var u = ci(this, t14), o = u.tween;
    if (o !== i) {
      a = i = o;
      for (var f = 0, s = a.length; f < s; ++f) if (a[f].name === e) {
        a = a.slice(), a.splice(f, 1);
        break;
      }
    }
    u.tween = a;
  };
}
function dR(t14, e, i) {
  var a, u;
  if (typeof i != "function") throw new Error();
  return function() {
    var o = ci(this, t14), f = o.tween;
    if (f !== a) {
      u = (a = f).slice();
      for (var s = { name: e, value: i }, d = 0, p = u.length; d < p; ++d) if (u[d].name === e) {
        u[d] = s;
        break;
      }
      d === p && u.push(s);
    }
    o.tween = u;
  };
}
function hR(t14, e) {
  var i = this._id;
  if (t14 += "", arguments.length < 2) {
    for (var a = kn(this.node(), i).tween, u = 0, o = a.length, f; u < o; ++u) if ((f = a[u]).name === t14) return f.value;
    return null;
  }
  return this.each((e == null ? sR : dR)(i, t14, e));
}
function wg(t14, e, i) {
  var a = t14._id;
  return t14.each(function() {
    var u = ci(this, a);
    (u.value || (u.value = {}))[e] = i.apply(this, arguments);
  }), function(u) {
    return kn(u, a).value[e];
  };
}
function E5(t14, e) {
  var i;
  return (typeof e == "number" ? Le : e instanceof ha ? pa : (i = ha(e)) ? (e = i, pa) : v5)(t14, e);
}
function pR(t14) {
  return function() {
    this.removeAttribute(t14);
  };
}
function mR(t14) {
  return function() {
    this.removeAttributeNS(t14.space, t14.local);
  };
}
function gR(t14, e, i) {
  var a, u = i + "", o;
  return function() {
    var f = this.getAttribute(t14);
    return f === u ? null : f === a ? o : o = e(a = f, i);
  };
}
function bR(t14, e, i) {
  var a, u = i + "", o;
  return function() {
    var f = this.getAttributeNS(t14.space, t14.local);
    return f === u ? null : f === a ? o : o = e(a = f, i);
  };
}
function vR(t14, e, i) {
  var a, u, o;
  return function() {
    var f, s = i(this), d;
    return s == null ? void this.removeAttribute(t14) : (f = this.getAttribute(t14), d = s + "", f === d ? null : f === a && d === u ? o : (u = d, o = e(a = f, s)));
  };
}
function yR(t14, e, i) {
  var a, u, o;
  return function() {
    var f, s = i(this), d;
    return s == null ? void this.removeAttributeNS(t14.space, t14.local) : (f = this.getAttributeNS(t14.space, t14.local), d = s + "", f === d ? null : f === a && d === u ? o : (u = d, o = e(a = f, s)));
  };
}
function _R(t14, e) {
  var i = td(t14), a = i === "transform" ? PD : E5;
  return this.attrTween(t14, typeof e == "function" ? (i.local ? yR : vR)(i, a, wg(this, "attr." + t14, e)) : e == null ? (i.local ? mR : pR)(i) : (i.local ? bR : gR)(i, a, e));
}
function wR(t14, e) {
  return function(i) {
    this.setAttribute(t14, e.call(this, i));
  };
}
function SR(t14, e) {
  return function(i) {
    this.setAttributeNS(t14.space, t14.local, e.call(this, i));
  };
}
function xR(t14, e) {
  var i, a;
  function u() {
    var o = e.apply(this, arguments);
    return o !== a && (i = (a = o) && SR(t14, o)), i;
  }
  return u._value = e, u;
}
function MR(t14, e) {
  var i, a;
  function u() {
    var o = e.apply(this, arguments);
    return o !== a && (i = (a = o) && wR(t14, o)), i;
  }
  return u._value = e, u;
}
function TR(t14, e) {
  var i = "attr." + t14;
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (e == null) return this.tween(i, null);
  if (typeof e != "function") throw new Error();
  var a = td(t14);
  return this.tween(i, (a.local ? xR : MR)(a, e));
}
function ER(t14, e) {
  return function() {
    _g(this, t14).delay = +e.apply(this, arguments);
  };
}
function AR(t14, e) {
  return e = +e, function() {
    _g(this, t14).delay = e;
  };
}
function OR(t14) {
  var e = this._id;
  return arguments.length ? this.each((typeof t14 == "function" ? ER : AR)(e, t14)) : kn(this.node(), e).delay;
}
function CR(t14, e) {
  return function() {
    ci(this, t14).duration = +e.apply(this, arguments);
  };
}
function DR(t14, e) {
  return e = +e, function() {
    ci(this, t14).duration = e;
  };
}
function RR(t14) {
  var e = this._id;
  return arguments.length ? this.each((typeof t14 == "function" ? CR : DR)(e, t14)) : kn(this.node(), e).duration;
}
function NR(t14, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ci(this, t14).ease = e;
  };
}
function $R(t14) {
  var e = this._id;
  return arguments.length ? this.each(NR(e, t14)) : kn(this.node(), e).ease;
}
function zR(t14, e) {
  return function() {
    var i = e.apply(this, arguments);
    if (typeof i != "function") throw new Error();
    ci(this, t14).ease = i;
  };
}
function UR(t14) {
  if (typeof t14 != "function") throw new Error();
  return this.each(zR(this._id, t14));
}
function LR(t14) {
  typeof t14 != "function" && (t14 = P3(t14));
  for (var e = this._groups, i = e.length, a = new Array(i), u = 0; u < i; ++u) for (var o = e[u], f = o.length, s = a[u] = [], d, p = 0; p < f; ++p) (d = o[p]) && t14.call(d, d.__data__, p, o) && s.push(d);
  return new Gi(a, this._parents, this._name, this._id);
}
function HR(t14) {
  if (t14._id !== this._id) throw new Error();
  for (var e = this._groups, i = t14._groups, a = e.length, u = i.length, o = Math.min(a, u), f = new Array(a), s = 0; s < o; ++s) for (var d = e[s], p = i[s], m = d.length, b = f[s] = new Array(m), v, y = 0; y < m; ++y) (v = d[y] || p[y]) && (b[y] = v);
  for (; s < a; ++s) f[s] = e[s];
  return new Gi(f, this._parents, this._name, this._id);
}
function VR(t14) {
  return (t14 + "").trim().split(/^|\s+/).every(function(e) {
    var i = e.indexOf(".");
    return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
  });
}
function jR(t14, e, i) {
  var a, u, o = VR(e) ? _g : ci;
  return function() {
    var f = o(this, t14), s = f.on;
    s !== a && (u = (a = s).copy()).on(e, i), f.on = u;
  };
}
function BR(t14, e) {
  var i = this._id;
  return arguments.length < 2 ? kn(this.node(), i).on.on(t14) : this.each(jR(i, t14, e));
}
function qR(t14) {
  return function() {
    var e = this.parentNode;
    for (var i in this.__transition) if (+i !== t14) return;
    e && e.removeChild(this);
  };
}
function kR() {
  return this.on("end.remove", qR(this._id));
}
function YR(t14) {
  var e = this._name, i = this._id;
  typeof t14 != "function" && (t14 = sg(t14));
  for (var a = this._groups, u = a.length, o = new Array(u), f = 0; f < u; ++f) for (var s = a[f], d = s.length, p = o[f] = new Array(d), m, b, v = 0; v < d; ++v) (m = s[v]) && (b = t14.call(m, m.__data__, v, s)) && ("__data__" in m && (b.__data__ = m.__data__), p[v] = b, ud(p[v], e, i, v, p, kn(m, i)));
  return new Gi(o, this._parents, e, i);
}
function GR(t14) {
  var e = this._name, i = this._id;
  typeof t14 != "function" && (t14 = K3(t14));
  for (var a = this._groups, u = a.length, o = [], f = [], s = 0; s < u; ++s) for (var d = a[s], p = d.length, m, b = 0; b < p; ++b) if (m = d[b]) {
    for (var v = t14.call(m, m.__data__, b, d), y, w = kn(m, i), S = 0, x = v.length; S < x; ++S) (y = v[S]) && ud(y, e, i, S, v, w);
    o.push(v), f.push(m);
  }
  return new Gi(o, f, e, i);
}
var XR = No.prototype.constructor;
function FR() {
  return new XR(this._groups, this._parents);
}
function ZR(t14, e) {
  var i, a, u;
  return function() {
    var o = Tu(this, t14), f = (this.style.removeProperty(t14), Tu(this, t14));
    return o === f ? null : o === i && f === a ? u : u = e(i = o, a = f);
  };
}
function A5(t14) {
  return function() {
    this.style.removeProperty(t14);
  };
}
function QR(t14, e, i) {
  var a, u = i + "", o;
  return function() {
    var f = Tu(this, t14);
    return f === u ? null : f === a ? o : o = e(a = f, i);
  };
}
function KR(t14, e, i) {
  var a, u, o;
  return function() {
    var f = Tu(this, t14), s = i(this), d = s + "";
    return s == null && (d = s = (this.style.removeProperty(t14), Tu(this, t14))), f === d ? null : f === a && d === u ? o : (u = d, o = e(a = f, s));
  };
}
function PR(t14, e) {
  var i, a, u, o = "style." + e, f = "end." + o, s;
  return function() {
    var d = ci(this, t14), p = d.on, m = d.value[o] == null ? s || (s = A5(e)) : void 0;
    (p !== i || u !== m) && (a = (i = p).copy()).on(f, u = m), d.on = a;
  };
}
function IR(t14, e, i) {
  var a = (t14 += "") == "transform" ? KD : E5;
  return e == null ? this.styleTween(t14, ZR(t14, a)).on("end.style." + t14, A5(t14)) : typeof e == "function" ? this.styleTween(t14, KR(t14, a, wg(this, "style." + t14, e))).each(PR(this._id, t14)) : this.styleTween(t14, QR(t14, a, e), i).on("end.style." + t14, null);
}
function WR(t14, e, i) {
  return function(a) {
    this.style.setProperty(t14, e.call(this, a), i);
  };
}
function JR(t14, e, i) {
  var a, u;
  function o() {
    var f = e.apply(this, arguments);
    return f !== u && (a = (u = f) && WR(t14, f, i)), a;
  }
  return o._value = e, o;
}
function tN(t14, e, i) {
  var a = "style." + (t14 += "");
  if (arguments.length < 2) return (a = this.tween(a)) && a._value;
  if (e == null) return this.tween(a, null);
  if (typeof e != "function") throw new Error();
  return this.tween(a, JR(t14, e, i ?? ""));
}
function eN(t14) {
  return function() {
    this.textContent = t14;
  };
}
function nN(t14) {
  return function() {
    var e = t14(this);
    this.textContent = e ?? "";
  };
}
function iN(t14) {
  return this.tween("text", typeof t14 == "function" ? nN(wg(this, "text", t14)) : eN(t14 == null ? "" : t14 + ""));
}
function rN(t14) {
  return function(e) {
    this.textContent = t14.call(this, e);
  };
}
function aN(t14) {
  var e, i;
  function a() {
    var u = t14.apply(this, arguments);
    return u !== i && (e = (i = u) && rN(u)), e;
  }
  return a._value = t14, a;
}
function uN(t14) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t14 == null) return this.tween(e, null);
  if (typeof t14 != "function") throw new Error();
  return this.tween(e, aN(t14));
}
function lN() {
  for (var t14 = this._name, e = this._id, i = O5(), a = this._groups, u = a.length, o = 0; o < u; ++o) for (var f = a[o], s = f.length, d, p = 0; p < s; ++p) if (d = f[p]) {
    var m = kn(d, e);
    ud(d, t14, i, p, f, { time: m.time + m.delay + m.duration, delay: 0, duration: m.duration, ease: m.ease });
  }
  return new Gi(a, this._parents, t14, i);
}
function oN() {
  var t14, e, i = this, a = i._id, u = i.size();
  return new Promise(function(o, f) {
    var s = { value: f }, d = { value: function() {
      --u === 0 && o();
    } };
    i.each(function() {
      var p = ci(this, a), m = p.on;
      m !== t14 && (e = (t14 = m).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(d)), p.on = e;
    }), u === 0 && o();
  });
}
var cN = 0;
function Gi(t14, e, i, a) {
  this._groups = t14, this._parents = e, this._name = i, this._id = a;
}
function O5() {
  return ++cN;
}
var Di = No.prototype;
Gi.prototype = { constructor: Gi, select: YR, selectAll: GR, selectChild: Di.selectChild, selectChildren: Di.selectChildren, filter: LR, merge: HR, selection: FR, transition: lN, call: Di.call, nodes: Di.nodes, node: Di.node, size: Di.size, empty: Di.empty, each: Di.each, on: BR, attr: _R, attrTween: TR, style: IR, styleTween: tN, text: iN, textTween: uN, remove: kR, tween: hR, delay: OR, duration: RR, ease: $R, easeVarying: UR, end: oN, [Symbol.iterator]: Di[Symbol.iterator] };
function fN(t14) {
  return ((t14 *= 2) <= 1 ? t14 * t14 * t14 : (t14 -= 2) * t14 * t14 + 2) / 2;
}
var sN = { time: null, delay: 0, duration: 250, ease: fN };
function dN(t14, e) {
  for (var i; !(i = t14.__transition) || !(i = i[e]); ) if (!(t14 = t14.parentNode)) throw new Error(`transition ${e} not found`);
  return i;
}
function hN(t14) {
  var e, i;
  t14 instanceof Gi ? (e = t14._id, t14 = t14._name) : (e = O5(), (i = sN).time = yg(), t14 = t14 == null ? null : t14 + "");
  for (var a = this._groups, u = a.length, o = 0; o < u; ++o) for (var f = a[o], s = f.length, d, p = 0; p < s; ++p) (d = f[p]) && ud(d, t14, e, p, f, i || dN(d, e));
  return new Gi(a, this._parents, t14, e);
}
No.prototype.interrupt = fR;
No.prototype.transition = hN;
const lm = Math.PI, om = 2 * lm, ia = 1e-6, pN = om - ia;
function C5(t14) {
  this._ += t14[0];
  for (let e = 1, i = t14.length; e < i; ++e) this._ += arguments[e] + t14[e];
}
function mN(t14) {
  let e = Math.floor(t14);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t14}`);
  if (e > 15) return C5;
  const i = 10 ** e;
  return function(a) {
    this._ += a[0];
    for (let u = 1, o = a.length; u < o; ++u) this._ += Math.round(arguments[u] * i) / i + a[u];
  };
}
class D5 {
  constructor(e) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? C5 : mN(e);
  }
  moveTo(e, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +i}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, i) {
    this._append`L${this._x1 = +e},${this._y1 = +i}`;
  }
  quadraticCurveTo(e, i, a, u) {
    this._append`Q${+e},${+i},${this._x1 = +a},${this._y1 = +u}`;
  }
  bezierCurveTo(e, i, a, u, o, f) {
    this._append`C${+e},${+i},${+a},${+u},${this._x1 = +o},${this._y1 = +f}`;
  }
  arcTo(e, i, a, u, o) {
    if (e = +e, i = +i, a = +a, u = +u, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let f = this._x1, s = this._y1, d = a - e, p = u - i, m = f - e, b = s - i, v = m * m + b * b;
    if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = i}`;
    else if (v > ia) if (!(Math.abs(b * d - p * m) > ia) || !o) this._append`L${this._x1 = e},${this._y1 = i}`;
    else {
      let y = a - f, w = u - s, S = d * d + p * p, x = y * y + w * w, T = Math.sqrt(S), E = Math.sqrt(v), D = o * Math.tan((lm - Math.acos((S + v - x) / (2 * T * E))) / 2), O = D / E, A = D / T;
      Math.abs(O - 1) > ia && this._append`L${e + O * m},${i + O * b}`, this._append`A${o},${o},0,0,${+(b * y > m * w)},${this._x1 = e + A * d},${this._y1 = i + A * p}`;
    }
  }
  arc(e, i, a, u, o, f) {
    if (e = +e, i = +i, a = +a, f = !!f, a < 0) throw new Error(`negative radius: ${a}`);
    let s = a * Math.cos(u), d = a * Math.sin(u), p = e + s, m = i + d, b = 1 ^ f, v = f ? u - o : o - u;
    this._x1 === null ? this._append`M${p},${m}` : (Math.abs(this._x1 - p) > ia || Math.abs(this._y1 - m) > ia) && this._append`L${p},${m}`, a && (v < 0 && (v = v % om + om), v > pN ? this._append`A${a},${a},0,1,${b},${e - s},${i - d}A${a},${a},0,1,${b},${this._x1 = p},${this._y1 = m}` : v > ia && this._append`A${a},${a},0,${+(v >= lm)},${b},${this._x1 = e + a * Math.cos(o)},${this._y1 = i + a * Math.sin(o)}`);
  }
  rect(e, i, a, u) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +i}h${a = +a}v${+u}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function cm(t14 = 3) {
  return new D5(+t14);
}
function gN(t14) {
  return Math.abs(t14 = Math.round(t14)) >= 1e21 ? t14.toLocaleString("en").replace(/,/g, "") : t14.toString(10);
}
function ys(t14, e) {
  if ((i = (t14 = e ? t14.toExponential(e - 1) : t14.toExponential()).indexOf("e")) < 0) return null;
  var i, a = t14.slice(0, i);
  return [a.length > 1 ? a[0] + a.slice(2) : a, +t14.slice(i + 1)];
}
function Ou(t14) {
  return t14 = ys(Math.abs(t14)), t14 ? t14[1] : NaN;
}
function bN(t14, e) {
  return function(i, a) {
    for (var u = i.length, o = [], f = 0, s = t14[0], d = 0; u > 0 && s > 0 && (d + s + 1 > a && (s = Math.max(1, a - d)), o.push(i.substring(u -= s, u + s)), !((d += s + 1) > a)); ) s = t14[f = (f + 1) % t14.length];
    return o.reverse().join(e);
  };
}
function vN(t14) {
  return function(e) {
    return e.replace(/[0-9]/g, function(i) {
      return t14[+i];
    });
  };
}
var yN = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wo(t14) {
  if (!(e = yN.exec(t14))) throw new Error("invalid format: " + t14);
  var e;
  return new Sg({ fill: e[1], align: e[2], sign: e[3], symbol: e[4], zero: e[5], width: e[6], comma: e[7], precision: e[8] && e[8].slice(1), trim: e[9], type: e[10] });
}
wo.prototype = Sg.prototype;
function Sg(t14) {
  this.fill = t14.fill === void 0 ? " " : t14.fill + "", this.align = t14.align === void 0 ? ">" : t14.align + "", this.sign = t14.sign === void 0 ? "-" : t14.sign + "", this.symbol = t14.symbol === void 0 ? "" : t14.symbol + "", this.zero = !!t14.zero, this.width = t14.width === void 0 ? void 0 : +t14.width, this.comma = !!t14.comma, this.precision = t14.precision === void 0 ? void 0 : +t14.precision, this.trim = !!t14.trim, this.type = t14.type === void 0 ? "" : t14.type + "";
}
Sg.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function _N(t14) {
  t: for (var e = t14.length, i = 1, a = -1, u; i < e; ++i) switch (t14[i]) {
    case ".":
      a = u = i;
      break;
    case "0":
      a === 0 && (a = i), u = i;
      break;
    default:
      if (!+t14[i]) break t;
      a > 0 && (a = 0);
      break;
  }
  return a > 0 ? t14.slice(0, a) + t14.slice(u + 1) : t14;
}
var R5;
function wN(t14, e) {
  var i = ys(t14, e);
  if (!i) return t14 + "";
  var a = i[0], u = i[1], o = u - (R5 = Math.max(-8, Math.min(8, Math.floor(u / 3))) * 3) + 1, f = a.length;
  return o === f ? a : o > f ? a + new Array(o - f + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + ys(t14, Math.max(0, e + o - 1))[0];
}
function u_(t14, e) {
  var i = ys(t14, e);
  if (!i) return t14 + "";
  var a = i[0], u = i[1];
  return u < 0 ? "0." + new Array(-u).join("0") + a : a.length > u + 1 ? a.slice(0, u + 1) + "." + a.slice(u + 1) : a + new Array(u - a.length + 2).join("0");
}
const l_ = { "%": (t14, e) => (t14 * 100).toFixed(e), b: (t14) => Math.round(t14).toString(2), c: (t14) => t14 + "", d: gN, e: (t14, e) => t14.toExponential(e), f: (t14, e) => t14.toFixed(e), g: (t14, e) => t14.toPrecision(e), o: (t14) => Math.round(t14).toString(8), p: (t14, e) => u_(t14 * 100, e), r: u_, s: wN, X: (t14) => Math.round(t14).toString(16).toUpperCase(), x: (t14) => Math.round(t14).toString(16) };
function o_(t14) {
  return t14;
}
var c_ = Array.prototype.map, f_ = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function SN(t14) {
  var e = t14.grouping === void 0 || t14.thousands === void 0 ? o_ : bN(c_.call(t14.grouping, Number), t14.thousands + ""), i = t14.currency === void 0 ? "" : t14.currency[0] + "", a = t14.currency === void 0 ? "" : t14.currency[1] + "", u = t14.decimal === void 0 ? "." : t14.decimal + "", o = t14.numerals === void 0 ? o_ : vN(c_.call(t14.numerals, String)), f = t14.percent === void 0 ? "%" : t14.percent + "", s = t14.minus === void 0 ? "\u2212" : t14.minus + "", d = t14.nan === void 0 ? "NaN" : t14.nan + "";
  function p(b) {
    b = wo(b);
    var v = b.fill, y = b.align, w = b.sign, S = b.symbol, x = b.zero, T = b.width, E = b.comma, D = b.precision, O = b.trim, A = b.type;
    A === "n" ? (E = true, A = "g") : l_[A] || (D === void 0 && (D = 12), O = true, A = "g"), (x || v === "0" && y === "=") && (x = true, v = "0", y = "=");
    var $ = S === "$" ? i : S === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", N = S === "$" ? a : /[%p]/.test(A) ? f : "", H = l_[A], z = /[defgprs%]/.test(A);
    D = D === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, D)) : Math.max(0, Math.min(20, D));
    function G(V) {
      var lt = $, ft = N, ct, Y, q;
      if (A === "c") ft = H(V) + ft, V = "";
      else {
        V = +V;
        var ut = V < 0 || 1 / V < 0;
        if (V = isNaN(V) ? d : H(Math.abs(V), D), O && (V = _N(V)), ut && +V == 0 && w !== "+" && (ut = false), lt = (ut ? w === "(" ? w : s : w === "-" || w === "(" ? "" : w) + lt, ft = (A === "s" ? f_[8 + R5 / 3] : "") + ft + (ut && w === "(" ? ")" : ""), z) {
          for (ct = -1, Y = V.length; ++ct < Y; ) if (q = V.charCodeAt(ct), 48 > q || q > 57) {
            ft = (q === 46 ? u + V.slice(ct + 1) : V.slice(ct)) + ft, V = V.slice(0, ct);
            break;
          }
        }
      }
      E && !x && (V = e(V, 1 / 0));
      var nt = lt.length + V.length + ft.length, P = nt < T ? new Array(T - nt + 1).join(v) : "";
      switch (E && x && (V = e(P + V, P.length ? T - ft.length : 1 / 0), P = ""), y) {
        case "<":
          V = lt + V + ft + P;
          break;
        case "=":
          V = lt + P + V + ft;
          break;
        case "^":
          V = P.slice(0, nt = P.length >> 1) + lt + V + ft + P.slice(nt);
          break;
        default:
          V = P + lt + V + ft;
          break;
      }
      return o(V);
    }
    return G.toString = function() {
      return b + "";
    }, G;
  }
  function m(b, v) {
    var y = p((b = wo(b), b.type = "f", b)), w = Math.max(-8, Math.min(8, Math.floor(Ou(v) / 3))) * 3, S = Math.pow(10, -w), x = f_[8 + w / 3];
    return function(T) {
      return y(S * T) + x;
    };
  }
  return { format: p, formatPrefix: m };
}
var Mf, Bu, N5;
xN({ thousands: ",", grouping: [3], currency: ["$", ""] });
function xN(t14) {
  return Mf = SN(t14), Bu = Mf.format, N5 = Mf.formatPrefix, Mf;
}
function MN(t14) {
  return Math.max(0, -Ou(Math.abs(t14)));
}
function TN(t14, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ou(e) / 3))) * 3 - Ou(Math.abs(t14)));
}
function EN(t14, e) {
  return t14 = Math.abs(t14), e = Math.abs(e) - t14, Math.max(0, Ou(e) - Ou(t14)) + 1;
}
var Ct = 1e-6, AN = 1e-12, zt = Math.PI, ue = zt / 2, s_ = zt / 4, fn = zt * 2, Ye = 180 / zt, re = zt / 180, Xt = Math.abs, qu = Math.atan, Xi = Math.atan2, Rt = Math.cos, $5 = Math.exp, _s = Math.log, up = Math.pow, Tt = Math.sin, En = Math.sign || function(t14) {
  return t14 > 0 ? 1 : t14 < 0 ? -1 : 0;
}, Ie = Math.sqrt, xg = Math.tan;
function z5(t14) {
  return t14 > 1 ? 0 : t14 < -1 ? zt : Math.acos(t14);
}
function Dn(t14) {
  return t14 > 1 ? ue : t14 < -1 ? -ue : Math.asin(t14);
}
function An() {
}
function ws(t14, e) {
  t14 && h_.hasOwnProperty(t14.type) && h_[t14.type](t14, e);
}
var d_ = { Feature: function(t14, e) {
  ws(t14.geometry, e);
}, FeatureCollection: function(t14, e) {
  for (var i = t14.features, a = -1, u = i.length; ++a < u; ) ws(i[a].geometry, e);
} }, h_ = { Sphere: function(t14, e) {
  e.sphere();
}, Point: function(t14, e) {
  t14 = t14.coordinates, e.point(t14[0], t14[1], t14[2]);
}, MultiPoint: function(t14, e) {
  for (var i = t14.coordinates, a = -1, u = i.length; ++a < u; ) t14 = i[a], e.point(t14[0], t14[1], t14[2]);
}, LineString: function(t14, e) {
  fm(t14.coordinates, e, 0);
}, MultiLineString: function(t14, e) {
  for (var i = t14.coordinates, a = -1, u = i.length; ++a < u; ) fm(i[a], e, 0);
}, Polygon: function(t14, e) {
  p_(t14.coordinates, e);
}, MultiPolygon: function(t14, e) {
  for (var i = t14.coordinates, a = -1, u = i.length; ++a < u; ) p_(i[a], e);
}, GeometryCollection: function(t14, e) {
  for (var i = t14.geometries, a = -1, u = i.length; ++a < u; ) ws(i[a], e);
} };
function fm(t14, e, i) {
  var a = -1, u = t14.length - i, o;
  for (e.lineStart(); ++a < u; ) o = t14[a], e.point(o[0], o[1], o[2]);
  e.lineEnd();
}
function p_(t14, e) {
  var i = -1, a = t14.length;
  for (e.polygonStart(); ++i < a; ) fm(t14[i], e, 1);
  e.polygonEnd();
}
function ra(t14, e) {
  t14 && d_.hasOwnProperty(t14.type) ? d_[t14.type](t14, e) : ws(t14, e);
}
function sm(t14) {
  return [Xi(t14[1], t14[0]), Dn(t14[2])];
}
function Cu(t14) {
  var e = t14[0], i = t14[1], a = Rt(i);
  return [a * Rt(e), a * Tt(e), Tt(i)];
}
function Tf(t14, e) {
  return t14[0] * e[0] + t14[1] * e[1] + t14[2] * e[2];
}
function Ss(t14, e) {
  return [t14[1] * e[2] - t14[2] * e[1], t14[2] * e[0] - t14[0] * e[2], t14[0] * e[1] - t14[1] * e[0]];
}
function lp(t14, e) {
  t14[0] += e[0], t14[1] += e[1], t14[2] += e[2];
}
function Ef(t14, e) {
  return [t14[0] * e, t14[1] * e, t14[2] * e];
}
function dm(t14) {
  var e = Ie(t14[0] * t14[0] + t14[1] * t14[1] + t14[2] * t14[2]);
  t14[0] /= e, t14[1] /= e, t14[2] /= e;
}
function hm(t14, e) {
  function i(a, u) {
    return a = t14(a, u), e(a[0], a[1]);
  }
  return t14.invert && e.invert && (i.invert = function(a, u) {
    return a = e.invert(a, u), a && t14.invert(a[0], a[1]);
  }), i;
}
function pm(t14, e) {
  return Xt(t14) > zt && (t14 -= Math.round(t14 / fn) * fn), [t14, e];
}
pm.invert = pm;
function U5(t14, e, i) {
  return (t14 %= fn) ? e || i ? hm(g_(t14), b_(e, i)) : g_(t14) : e || i ? b_(e, i) : pm;
}
function m_(t14) {
  return function(e, i) {
    return e += t14, Xt(e) > zt && (e -= Math.round(e / fn) * fn), [e, i];
  };
}
function g_(t14) {
  var e = m_(t14);
  return e.invert = m_(-t14), e;
}
function b_(t14, e) {
  var i = Rt(t14), a = Tt(t14), u = Rt(e), o = Tt(e);
  function f(s, d) {
    var p = Rt(d), m = Rt(s) * p, b = Tt(s) * p, v = Tt(d), y = v * i + m * a;
    return [Xi(b * u - y * o, m * i - v * a), Dn(y * u + b * o)];
  }
  return f.invert = function(s, d) {
    var p = Rt(d), m = Rt(s) * p, b = Tt(s) * p, v = Tt(d), y = v * u - b * o;
    return [Xi(b * u + v * o, m * i + y * a), Dn(y * i - m * a)];
  }, f;
}
function ON(t14) {
  t14 = U5(t14[0] * re, t14[1] * re, t14.length > 2 ? t14[2] * re : 0);
  function e(i) {
    return i = t14(i[0] * re, i[1] * re), i[0] *= Ye, i[1] *= Ye, i;
  }
  return e.invert = function(i) {
    return i = t14.invert(i[0] * re, i[1] * re), i[0] *= Ye, i[1] *= Ye, i;
  }, e;
}
function CN(t14, e, i, a, u, o) {
  if (i) {
    var f = Rt(e), s = Tt(e), d = a * i;
    u == null ? (u = e + a * fn, o = e - d / 2) : (u = v_(f, u), o = v_(f, o), (a > 0 ? u < o : u > o) && (u += a * fn));
    for (var p, m = u; a > 0 ? m > o : m < o; m -= d) p = sm([f, -s * Rt(m), -s * Tt(m)]), t14.point(p[0], p[1]);
  }
}
function v_(t14, e) {
  e = Cu(e), e[0] -= t14, dm(e);
  var i = z5(-e[1]);
  return ((-e[2] < 0 ? -i : i) + fn - Ct) % fn;
}
function L5() {
  var t14 = [], e;
  return { point: function(i, a, u) {
    e.push([i, a, u]);
  }, lineStart: function() {
    t14.push(e = []);
  }, lineEnd: An, rejoin: function() {
    t14.length > 1 && t14.push(t14.pop().concat(t14.shift()));
  }, result: function() {
    var i = t14;
    return t14 = [], e = null, i;
  } };
}
function Pf(t14, e) {
  return Xt(t14[0] - e[0]) < Ct && Xt(t14[1] - e[1]) < Ct;
}
function Af(t14, e, i, a) {
  this.x = t14, this.z = e, this.o = i, this.e = a, this.v = false, this.n = this.p = null;
}
function H5(t14, e, i, a, u) {
  var o = [], f = [], s, d;
  if (t14.forEach(function(w) {
    if (!((S = w.length - 1) <= 0)) {
      var S, x = w[0], T = w[S], E;
      if (Pf(x, T)) {
        if (!x[2] && !T[2]) {
          for (u.lineStart(), s = 0; s < S; ++s) u.point((x = w[s])[0], x[1]);
          u.lineEnd();
          return;
        }
        T[0] += 2 * Ct;
      }
      o.push(E = new Af(x, w, null, true)), f.push(E.o = new Af(x, null, E, false)), o.push(E = new Af(T, w, null, false)), f.push(E.o = new Af(T, null, E, true));
    }
  }), !!o.length) {
    for (f.sort(e), y_(o), y_(f), s = 0, d = f.length; s < d; ++s) f[s].e = i = !i;
    for (var p = o[0], m, b; ; ) {
      for (var v = p, y = true; v.v; ) if ((v = v.n) === p) return;
      m = v.z, u.lineStart();
      do {
        if (v.v = v.o.v = true, v.e) {
          if (y) for (s = 0, d = m.length; s < d; ++s) u.point((b = m[s])[0], b[1]);
          else a(v.x, v.n.x, 1, u);
          v = v.n;
        } else {
          if (y) for (m = v.p.z, s = m.length - 1; s >= 0; --s) u.point((b = m[s])[0], b[1]);
          else a(v.x, v.p.x, -1, u);
          v = v.p;
        }
        v = v.o, m = v.z, y = !y;
      } while (!v.v);
      u.lineEnd();
    }
  }
}
function y_(t14) {
  if (e = t14.length) {
    for (var e, i = 0, a = t14[0], u; ++i < e; ) a.n = u = t14[i], u.p = a, a = u;
    a.n = u = t14[0], u.p = a;
  }
}
function op(t14) {
  return Xt(t14[0]) <= zt ? t14[0] : En(t14[0]) * ((Xt(t14[0]) + zt) % fn - zt);
}
function DN(t14, e) {
  var i = op(e), a = e[1], u = Tt(a), o = [Tt(i), -Rt(i), 0], f = 0, s = 0, d = new sa();
  u === 1 ? a = ue + Ct : u === -1 && (a = -ue - Ct);
  for (var p = 0, m = t14.length; p < m; ++p) if (v = (b = t14[p]).length) for (var b, v, y = b[v - 1], w = op(y), S = y[1] / 2 + s_, x = Tt(S), T = Rt(S), E = 0; E < v; ++E, w = O, x = $, T = N, y = D) {
    var D = b[E], O = op(D), A = D[1] / 2 + s_, $ = Tt(A), N = Rt(A), H = O - w, z = H >= 0 ? 1 : -1, G = z * H, V = G > zt, lt = x * $;
    if (d.add(Xi(lt * z * Tt(G), T * N + lt * Rt(G))), f += V ? H + z * fn : H, V ^ w >= i ^ O >= i) {
      var ft = Ss(Cu(y), Cu(D));
      dm(ft);
      var ct = Ss(o, ft);
      dm(ct);
      var Y = (V ^ H >= 0 ? -1 : 1) * Dn(ct[2]);
      (a > Y || a === Y && (ft[0] || ft[1])) && (s += V ^ H >= 0 ? 1 : -1);
    }
  }
  return (f < -1e-6 || f < Ct && d < -1e-12) ^ s & 1;
}
function V5(t14, e, i, a) {
  return function(u) {
    var o = e(u), f = L5(), s = e(f), d = false, p, m, b, v = { point: y, lineStart: S, lineEnd: x, polygonStart: function() {
      v.point = T, v.lineStart = E, v.lineEnd = D, m = [], p = [];
    }, polygonEnd: function() {
      v.point = y, v.lineStart = S, v.lineEnd = x, m = Z3(m);
      var O = DN(p, a);
      m.length ? (d || (u.polygonStart(), d = true), H5(m, NN, O, i, u)) : O && (d || (u.polygonStart(), d = true), u.lineStart(), i(null, null, 1, u), u.lineEnd()), d && (u.polygonEnd(), d = false), m = p = null;
    }, sphere: function() {
      u.polygonStart(), u.lineStart(), i(null, null, 1, u), u.lineEnd(), u.polygonEnd();
    } };
    function y(O, A) {
      t14(O, A) && u.point(O, A);
    }
    function w(O, A) {
      o.point(O, A);
    }
    function S() {
      v.point = w, o.lineStart();
    }
    function x() {
      v.point = y, o.lineEnd();
    }
    function T(O, A) {
      b.push([O, A]), s.point(O, A);
    }
    function E() {
      s.lineStart(), b = [];
    }
    function D() {
      T(b[0][0], b[0][1]), s.lineEnd();
      var O = s.clean(), A = f.result(), $, N = A.length, H, z, G;
      if (b.pop(), p.push(b), b = null, !!N) {
        if (O & 1) {
          if (z = A[0], (H = z.length - 1) > 0) {
            for (d || (u.polygonStart(), d = true), u.lineStart(), $ = 0; $ < H; ++$) u.point((G = z[$])[0], G[1]);
            u.lineEnd();
          }
          return;
        }
        N > 1 && O & 2 && A.push(A.pop().concat(A.shift())), m.push(A.filter(RN));
      }
    }
    return v;
  };
}
function RN(t14) {
  return t14.length > 1;
}
function NN(t14, e) {
  return ((t14 = t14.x)[0] < 0 ? t14[1] - ue - Ct : ue - t14[1]) - ((e = e.x)[0] < 0 ? e[1] - ue - Ct : ue - e[1]);
}
const __ = V5(function() {
  return true;
}, $N, UN, [-zt, -ue]);
function $N(t14) {
  var e = NaN, i = NaN, a = NaN, u;
  return { lineStart: function() {
    t14.lineStart(), u = 1;
  }, point: function(o, f) {
    var s = o > 0 ? zt : -zt, d = Xt(o - e);
    Xt(d - zt) < Ct ? (t14.point(e, i = (i + f) / 2 > 0 ? ue : -ue), t14.point(a, i), t14.lineEnd(), t14.lineStart(), t14.point(s, i), t14.point(o, i), u = 0) : a !== s && d >= zt && (Xt(e - a) < Ct && (e -= a * Ct), Xt(o - s) < Ct && (o -= s * Ct), i = zN(e, i, o, f), t14.point(a, i), t14.lineEnd(), t14.lineStart(), t14.point(s, i), u = 0), t14.point(e = o, i = f), a = s;
  }, lineEnd: function() {
    t14.lineEnd(), e = i = NaN;
  }, clean: function() {
    return 2 - u;
  } };
}
function zN(t14, e, i, a) {
  var u, o, f = Tt(t14 - i);
  return Xt(f) > Ct ? qu((Tt(e) * (o = Rt(a)) * Tt(i) - Tt(a) * (u = Rt(e)) * Tt(t14)) / (u * o * f)) : (e + a) / 2;
}
function UN(t14, e, i, a) {
  var u;
  if (t14 == null) u = i * ue, a.point(-zt, u), a.point(0, u), a.point(zt, u), a.point(zt, 0), a.point(zt, -u), a.point(0, -u), a.point(-zt, -u), a.point(-zt, 0), a.point(-zt, u);
  else if (Xt(t14[0] - e[0]) > Ct) {
    var o = t14[0] < e[0] ? zt : -zt;
    u = i * o / 2, a.point(-o, u), a.point(0, u), a.point(o, u);
  } else a.point(e[0], e[1]);
}
function LN(t14) {
  var e = Rt(t14), i = 2 * re, a = e > 0, u = Xt(e) > Ct;
  function o(m, b, v, y) {
    CN(y, t14, i, v, m, b);
  }
  function f(m, b) {
    return Rt(m) * Rt(b) > e;
  }
  function s(m) {
    var b, v, y, w, S;
    return { lineStart: function() {
      w = y = false, S = 1;
    }, point: function(x, T) {
      var E = [x, T], D, O = f(x, T), A = a ? O ? 0 : p(x, T) : O ? p(x + (x < 0 ? zt : -zt), T) : 0;
      if (!b && (w = y = O) && m.lineStart(), O !== y && (D = d(b, E), (!D || Pf(b, D) || Pf(E, D)) && (E[2] = 1)), O !== y) S = 0, O ? (m.lineStart(), D = d(E, b), m.point(D[0], D[1])) : (D = d(b, E), m.point(D[0], D[1], 2), m.lineEnd()), b = D;
      else if (u && b && a ^ O) {
        var $;
        !(A & v) && ($ = d(E, b, true)) && (S = 0, a ? (m.lineStart(), m.point($[0][0], $[0][1]), m.point($[1][0], $[1][1]), m.lineEnd()) : (m.point($[1][0], $[1][1]), m.lineEnd(), m.lineStart(), m.point($[0][0], $[0][1], 3)));
      }
      O && (!b || !Pf(b, E)) && m.point(E[0], E[1]), b = E, y = O, v = A;
    }, lineEnd: function() {
      y && m.lineEnd(), b = null;
    }, clean: function() {
      return S | (w && y) << 1;
    } };
  }
  function d(m, b, v) {
    var y = Cu(m), w = Cu(b), S = [1, 0, 0], x = Ss(y, w), T = Tf(x, x), E = x[0], D = T - E * E;
    if (!D) return !v && m;
    var O = e * T / D, A = -e * E / D, $ = Ss(S, x), N = Ef(S, O), H = Ef(x, A);
    lp(N, H);
    var z = $, G = Tf(N, z), V = Tf(z, z), lt = G * G - V * (Tf(N, N) - 1);
    if (!(lt < 0)) {
      var ft = Ie(lt), ct = Ef(z, (-G - ft) / V);
      if (lp(ct, N), ct = sm(ct), !v) return ct;
      var Y = m[0], q = b[0], ut = m[1], nt = b[1], P;
      q < Y && (P = Y, Y = q, q = P);
      var C = q - Y, B = Xt(C - zt) < Ct, Q = B || C < Ct;
      if (!B && nt < ut && (P = ut, ut = nt, nt = P), Q ? B ? ut + nt > 0 ^ ct[1] < (Xt(ct[0] - Y) < Ct ? ut : nt) : ut <= ct[1] && ct[1] <= nt : C > zt ^ (Y <= ct[0] && ct[0] <= q)) {
        var K = Ef(z, (-G + ft) / V);
        return lp(K, N), [ct, sm(K)];
      }
    }
  }
  function p(m, b) {
    var v = a ? t14 : zt - t14, y = 0;
    return m < -v ? y |= 1 : m > v && (y |= 2), b < -v ? y |= 4 : b > v && (y |= 8), y;
  }
  return V5(f, s, o, a ? [0, -t14] : [-zt, t14 - zt]);
}
function HN(t14, e, i, a, u, o) {
  var f = t14[0], s = t14[1], d = e[0], p = e[1], m = 0, b = 1, v = d - f, y = p - s, w;
  if (w = i - f, !(!v && w > 0)) {
    if (w /= v, v < 0) {
      if (w < m) return;
      w < b && (b = w);
    } else if (v > 0) {
      if (w > b) return;
      w > m && (m = w);
    }
    if (w = u - f, !(!v && w < 0)) {
      if (w /= v, v < 0) {
        if (w > b) return;
        w > m && (m = w);
      } else if (v > 0) {
        if (w < m) return;
        w < b && (b = w);
      }
      if (w = a - s, !(!y && w > 0)) {
        if (w /= y, y < 0) {
          if (w < m) return;
          w < b && (b = w);
        } else if (y > 0) {
          if (w > b) return;
          w > m && (m = w);
        }
        if (w = o - s, !(!y && w < 0)) {
          if (w /= y, y < 0) {
            if (w > b) return;
            w > m && (m = w);
          } else if (y > 0) {
            if (w < m) return;
            w < b && (b = w);
          }
          return m > 0 && (t14[0] = f + m * v, t14[1] = s + m * y), b < 1 && (e[0] = f + b * v, e[1] = s + b * y), true;
        }
      }
    }
  }
}
var Of = 1e9, Cf = -1e9;
function j5(t14, e, i, a) {
  function u(p, m) {
    return t14 <= p && p <= i && e <= m && m <= a;
  }
  function o(p, m, b, v) {
    var y = 0, w = 0;
    if (p == null || (y = f(p, b)) !== (w = f(m, b)) || d(p, m) < 0 ^ b > 0) do
      v.point(y === 0 || y === 3 ? t14 : i, y > 1 ? a : e);
    while ((y = (y + b + 4) % 4) !== w);
    else v.point(m[0], m[1]);
  }
  function f(p, m) {
    return Xt(p[0] - t14) < Ct ? m > 0 ? 0 : 3 : Xt(p[0] - i) < Ct ? m > 0 ? 2 : 1 : Xt(p[1] - e) < Ct ? m > 0 ? 1 : 0 : m > 0 ? 3 : 2;
  }
  function s(p, m) {
    return d(p.x, m.x);
  }
  function d(p, m) {
    var b = f(p, 1), v = f(m, 1);
    return b !== v ? b - v : b === 0 ? m[1] - p[1] : b === 1 ? p[0] - m[0] : b === 2 ? p[1] - m[1] : m[0] - p[0];
  }
  return function(p) {
    var m = p, b = L5(), v, y, w, S, x, T, E, D, O, A, $, N = { point: H, lineStart: lt, lineEnd: ft, polygonStart: G, polygonEnd: V };
    function H(Y, q) {
      u(Y, q) && m.point(Y, q);
    }
    function z() {
      for (var Y = 0, q = 0, ut = y.length; q < ut; ++q) for (var nt = y[q], P = 1, C = nt.length, B = nt[0], Q, K, tt = B[0], ht = B[1]; P < C; ++P) Q = tt, K = ht, B = nt[P], tt = B[0], ht = B[1], K <= a ? ht > a && (tt - Q) * (a - K) > (ht - K) * (t14 - Q) && ++Y : ht <= a && (tt - Q) * (a - K) < (ht - K) * (t14 - Q) && --Y;
      return Y;
    }
    function G() {
      m = b, v = [], y = [], $ = true;
    }
    function V() {
      var Y = z(), q = $ && Y, ut = (v = Z3(v)).length;
      (q || ut) && (p.polygonStart(), q && (p.lineStart(), o(null, null, 1, p), p.lineEnd()), ut && H5(v, s, Y, o, p), p.polygonEnd()), m = p, v = y = w = null;
    }
    function lt() {
      N.point = ct, y && y.push(w = []), A = true, O = false, E = D = NaN;
    }
    function ft() {
      v && (ct(S, x), T && O && b.rejoin(), v.push(b.result())), N.point = H, O && m.lineEnd();
    }
    function ct(Y, q) {
      var ut = u(Y, q);
      if (y && w.push([Y, q]), A) S = Y, x = q, T = ut, A = false, ut && (m.lineStart(), m.point(Y, q));
      else if (ut && O) m.point(Y, q);
      else {
        var nt = [E = Math.max(Cf, Math.min(Of, E)), D = Math.max(Cf, Math.min(Of, D))], P = [Y = Math.max(Cf, Math.min(Of, Y)), q = Math.max(Cf, Math.min(Of, q))];
        HN(nt, P, t14, e, i, a) ? (O || (m.lineStart(), m.point(nt[0], nt[1])), m.point(P[0], P[1]), ut || m.lineEnd(), $ = false) : ut && (m.lineStart(), m.point(Y, q), $ = false);
      }
      E = Y, D = q, O = ut;
    }
    return N;
  };
}
const mm = (t14) => t14;
var cp = new sa(), gm = new sa(), B5, q5, bm, vm, Li = { point: An, lineStart: An, lineEnd: An, polygonStart: function() {
  Li.lineStart = VN, Li.lineEnd = BN;
}, polygonEnd: function() {
  Li.lineStart = Li.lineEnd = Li.point = An, cp.add(Xt(gm)), gm = new sa();
}, result: function() {
  var t14 = cp / 2;
  return cp = new sa(), t14;
} };
function VN() {
  Li.point = jN;
}
function jN(t14, e) {
  Li.point = k5, B5 = bm = t14, q5 = vm = e;
}
function k5(t14, e) {
  gm.add(vm * t14 - bm * e), bm = t14, vm = e;
}
function BN() {
  k5(B5, q5);
}
var Du = 1 / 0, xs = Du, So = -Du, Ms = So, Ts = { point: qN, lineStart: An, lineEnd: An, polygonStart: An, polygonEnd: An, result: function() {
  var t14 = [[Du, xs], [So, Ms]];
  return So = Ms = -(xs = Du = 1 / 0), t14;
} };
function qN(t14, e) {
  t14 < Du && (Du = t14), t14 > So && (So = t14), e < xs && (xs = e), e > Ms && (Ms = e);
}
var ym = 0, _m = 0, no = 0, Es = 0, As = 0, bu = 0, wm = 0, Sm = 0, io = 0, Y5, G5, Jn, ti, Tn = { point: ga, lineStart: w_, lineEnd: S_, polygonStart: function() {
  Tn.lineStart = GN, Tn.lineEnd = XN;
}, polygonEnd: function() {
  Tn.point = ga, Tn.lineStart = w_, Tn.lineEnd = S_;
}, result: function() {
  var t14 = io ? [wm / io, Sm / io] : bu ? [Es / bu, As / bu] : no ? [ym / no, _m / no] : [NaN, NaN];
  return ym = _m = no = Es = As = bu = wm = Sm = io = 0, t14;
} };
function ga(t14, e) {
  ym += t14, _m += e, ++no;
}
function w_() {
  Tn.point = kN;
}
function kN(t14, e) {
  Tn.point = YN, ga(Jn = t14, ti = e);
}
function YN(t14, e) {
  var i = t14 - Jn, a = e - ti, u = Ie(i * i + a * a);
  Es += u * (Jn + t14) / 2, As += u * (ti + e) / 2, bu += u, ga(Jn = t14, ti = e);
}
function S_() {
  Tn.point = ga;
}
function GN() {
  Tn.point = FN;
}
function XN() {
  X5(Y5, G5);
}
function FN(t14, e) {
  Tn.point = X5, ga(Y5 = Jn = t14, G5 = ti = e);
}
function X5(t14, e) {
  var i = t14 - Jn, a = e - ti, u = Ie(i * i + a * a);
  Es += u * (Jn + t14) / 2, As += u * (ti + e) / 2, bu += u, u = ti * t14 - Jn * e, wm += u * (Jn + t14), Sm += u * (ti + e), io += u * 3, ga(Jn = t14, ti = e);
}
function F5(t14) {
  this._context = t14;
}
F5.prototype = { _radius: 4.5, pointRadius: function(t14) {
  return this._radius = t14, this;
}, polygonStart: function() {
  this._line = 0;
}, polygonEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._line === 0 && this._context.closePath(), this._point = NaN;
}, point: function(t14, e) {
  switch (this._point) {
    case 0: {
      this._context.moveTo(t14, e), this._point = 1;
      break;
    }
    case 1: {
      this._context.lineTo(t14, e);
      break;
    }
    default: {
      this._context.moveTo(t14 + this._radius, e), this._context.arc(t14, e, this._radius, 0, fn);
      break;
    }
  }
}, result: An };
var xm = new sa(), fp, Z5, Q5, ro, ao, xo = { point: An, lineStart: function() {
  xo.point = ZN;
}, lineEnd: function() {
  fp && K5(Z5, Q5), xo.point = An;
}, polygonStart: function() {
  fp = true;
}, polygonEnd: function() {
  fp = null;
}, result: function() {
  var t14 = +xm;
  return xm = new sa(), t14;
} };
function ZN(t14, e) {
  xo.point = K5, Z5 = ro = t14, Q5 = ao = e;
}
function K5(t14, e) {
  ro -= t14, ao -= e, xm.add(Ie(ro * ro + ao * ao)), ro = t14, ao = e;
}
let x_, Os, M_, T_;
class E_ {
  constructor(e) {
    this._append = e == null ? P5 : QN(e), this._radius = 4.5, this._ = "";
  }
  pointRadius(e) {
    return this._radius = +e, this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    this._line === 0 && (this._ += "Z"), this._point = NaN;
  }
  point(e, i) {
    switch (this._point) {
      case 0: {
        this._append`M${e},${i}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${e},${i}`;
        break;
      }
      default: {
        if (this._append`M${e},${i}`, this._radius !== M_ || this._append !== Os) {
          const a = this._radius, u = this._;
          this._ = "", this._append`m0,${a}a${a},${a} 0 1,1 0,${-2 * a}a${a},${a} 0 1,1 0,${2 * a}z`, M_ = a, Os = this._append, T_ = this._, this._ = u;
        }
        this._ += T_;
        break;
      }
    }
  }
  result() {
    const e = this._;
    return this._ = "", e.length ? e : null;
  }
}
function P5(t14) {
  let e = 1;
  this._ += t14[0];
  for (const i = t14.length; e < i; ++e) this._ += arguments[e] + t14[e];
}
function QN(t14) {
  const e = Math.floor(t14);
  if (!(e >= 0)) throw new RangeError(`invalid digits: ${t14}`);
  if (e > 15) return P5;
  if (e !== x_) {
    const i = 10 ** e;
    x_ = e, Os = function(u) {
      let o = 1;
      this._ += u[0];
      for (const f = u.length; o < f; ++o) this._ += Math.round(arguments[o] * i) / i + u[o];
    };
  }
  return Os;
}
function Mg(t14, e) {
  let i = 3, a = 4.5, u, o;
  function f(s) {
    return s && (typeof a == "function" && o.pointRadius(+a.apply(this, arguments)), ra(s, u(o))), o.result();
  }
  return f.area = function(s) {
    return ra(s, u(Li)), Li.result();
  }, f.measure = function(s) {
    return ra(s, u(xo)), xo.result();
  }, f.bounds = function(s) {
    return ra(s, u(Ts)), Ts.result();
  }, f.centroid = function(s) {
    return ra(s, u(Tn)), Tn.result();
  }, f.projection = function(s) {
    return arguments.length ? (u = s == null ? (t14 = null, mm) : (t14 = s).stream, f) : t14;
  }, f.context = function(s) {
    return arguments.length ? (o = s == null ? (e = null, new E_(i)) : new F5(e = s), typeof a != "function" && o.pointRadius(a), f) : e;
  }, f.pointRadius = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : (o.pointRadius(+s), +s), f) : a;
  }, f.digits = function(s) {
    if (!arguments.length) return i;
    if (s == null) i = null;
    else {
      const d = Math.floor(s);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${s}`);
      i = d;
    }
    return e === null && (o = new E_(i)), f;
  }, f.projection(t14).digits(i).context(e);
}
function Cs(t14) {
  return { stream: ld(t14) };
}
function ld(t14) {
  return function(e) {
    var i = new Mm();
    for (var a in t14) i[a] = t14[a];
    return i.stream = e, i;
  };
}
function Mm() {
}
Mm.prototype = { constructor: Mm, point: function(t14, e) {
  this.stream.point(t14, e);
}, sphere: function() {
  this.stream.sphere();
}, lineStart: function() {
  this.stream.lineStart();
}, lineEnd: function() {
  this.stream.lineEnd();
}, polygonStart: function() {
  this.stream.polygonStart();
}, polygonEnd: function() {
  this.stream.polygonEnd();
} };
function Tg(t14, e, i) {
  var a = t14.clipExtent && t14.clipExtent();
  return t14.scale(150).translate([0, 0]), a != null && t14.clipExtent(null), ra(i, t14.stream(Ts)), e(Ts.result()), a != null && t14.clipExtent(a), t14;
}
function Eg(t14, e, i) {
  return Tg(t14, function(a) {
    var u = e[1][0] - e[0][0], o = e[1][1] - e[0][1], f = Math.min(u / (a[1][0] - a[0][0]), o / (a[1][1] - a[0][1])), s = +e[0][0] + (u - f * (a[1][0] + a[0][0])) / 2, d = +e[0][1] + (o - f * (a[1][1] + a[0][1])) / 2;
    t14.scale(150 * f).translate([s, d]);
  }, i);
}
function I5(t14, e, i) {
  return Eg(t14, [[0, 0], e], i);
}
function W5(t14, e, i) {
  return Tg(t14, function(a) {
    var u = +e, o = u / (a[1][0] - a[0][0]), f = (u - o * (a[1][0] + a[0][0])) / 2, s = -o * a[0][1];
    t14.scale(150 * o).translate([f, s]);
  }, i);
}
function J5(t14, e, i) {
  return Tg(t14, function(a) {
    var u = +e, o = u / (a[1][1] - a[0][1]), f = -o * a[0][0], s = (u - o * (a[1][1] + a[0][1])) / 2;
    t14.scale(150 * o).translate([f, s]);
  }, i);
}
var A_ = 16, KN = Rt(30 * re);
function O_(t14, e) {
  return +e ? IN(t14, e) : PN(t14);
}
function PN(t14) {
  return ld({ point: function(e, i) {
    e = t14(e, i), this.stream.point(e[0], e[1]);
  } });
}
function IN(t14, e) {
  function i(a, u, o, f, s, d, p, m, b, v, y, w, S, x) {
    var T = p - a, E = m - u, D = T * T + E * E;
    if (D > 4 * e && S--) {
      var O = f + v, A = s + y, $ = d + w, N = Ie(O * O + A * A + $ * $), H = Dn($ /= N), z = Xt(Xt($) - 1) < Ct || Xt(o - b) < Ct ? (o + b) / 2 : Xi(A, O), G = t14(z, H), V = G[0], lt = G[1], ft = V - a, ct = lt - u, Y = E * ft - T * ct;
      (Y * Y / D > e || Xt((T * ft + E * ct) / D - 0.5) > 0.3 || f * v + s * y + d * w < KN) && (i(a, u, o, f, s, d, V, lt, z, O /= N, A /= N, $, S, x), x.point(V, lt), i(V, lt, z, O, A, $, p, m, b, v, y, w, S, x));
    }
  }
  return function(a) {
    var u, o, f, s, d, p, m, b, v, y, w, S, x = { point: T, lineStart: E, lineEnd: O, polygonStart: function() {
      a.polygonStart(), x.lineStart = A;
    }, polygonEnd: function() {
      a.polygonEnd(), x.lineStart = E;
    } };
    function T(H, z) {
      H = t14(H, z), a.point(H[0], H[1]);
    }
    function E() {
      b = NaN, x.point = D, a.lineStart();
    }
    function D(H, z) {
      var G = Cu([H, z]), V = t14(H, z);
      i(b, v, m, y, w, S, b = V[0], v = V[1], m = H, y = G[0], w = G[1], S = G[2], A_, a), a.point(b, v);
    }
    function O() {
      x.point = T, a.lineEnd();
    }
    function A() {
      E(), x.point = $, x.lineEnd = N;
    }
    function $(H, z) {
      D(u = H, z), o = b, f = v, s = y, d = w, p = S, x.point = D;
    }
    function N() {
      i(b, v, m, y, w, S, o, f, u, s, d, p, A_, a), x.lineEnd = O, O();
    }
    return x;
  };
}
var WN = ld({ point: function(t14, e) {
  this.stream.point(t14 * re, e * re);
} });
function JN(t14) {
  return ld({ point: function(e, i) {
    var a = t14(e, i);
    return this.stream.point(a[0], a[1]);
  } });
}
function t$(t14, e, i, a, u) {
  function o(f, s) {
    return f *= a, s *= u, [e + t14 * f, i - t14 * s];
  }
  return o.invert = function(f, s) {
    return [(f - e) / t14 * a, (i - s) / t14 * u];
  }, o;
}
function C_(t14, e, i, a, u, o) {
  if (!o) return t$(t14, e, i, a, u);
  var f = Rt(o), s = Tt(o), d = f * t14, p = s * t14, m = f / t14, b = s / t14, v = (s * i - f * e) / t14, y = (s * e + f * i) / t14;
  function w(S, x) {
    return S *= a, x *= u, [d * S - p * x + e, i - p * S - d * x];
  }
  return w.invert = function(S, x) {
    return [a * (m * S - b * x + v), u * (y - b * S - m * x)];
  }, w;
}
function Rr(t14) {
  return t4(function() {
    return t14;
  })();
}
function t4(t14) {
  var e, i = 150, a = 480, u = 250, o = 0, f = 0, s = 0, d = 0, p = 0, m, b = 0, v = 1, y = 1, w = null, S = __, x = null, T, E, D, O = mm, A = 0.5, $, N, H, z, G;
  function V(Y) {
    return H(Y[0] * re, Y[1] * re);
  }
  function lt(Y) {
    return Y = H.invert(Y[0], Y[1]), Y && [Y[0] * Ye, Y[1] * Ye];
  }
  V.stream = function(Y) {
    return z && G === Y ? z : z = WN(JN(m)(S($(O(G = Y)))));
  }, V.preclip = function(Y) {
    return arguments.length ? (S = Y, w = void 0, ct()) : S;
  }, V.postclip = function(Y) {
    return arguments.length ? (O = Y, x = T = E = D = null, ct()) : O;
  }, V.clipAngle = function(Y) {
    return arguments.length ? (S = +Y ? LN(w = Y * re) : (w = null, __), ct()) : w * Ye;
  }, V.clipExtent = function(Y) {
    return arguments.length ? (O = Y == null ? (x = T = E = D = null, mm) : j5(x = +Y[0][0], T = +Y[0][1], E = +Y[1][0], D = +Y[1][1]), ct()) : x == null ? null : [[x, T], [E, D]];
  }, V.scale = function(Y) {
    return arguments.length ? (i = +Y, ft()) : i;
  }, V.translate = function(Y) {
    return arguments.length ? (a = +Y[0], u = +Y[1], ft()) : [a, u];
  }, V.center = function(Y) {
    return arguments.length ? (o = Y[0] % 360 * re, f = Y[1] % 360 * re, ft()) : [o * Ye, f * Ye];
  }, V.rotate = function(Y) {
    return arguments.length ? (s = Y[0] % 360 * re, d = Y[1] % 360 * re, p = Y.length > 2 ? Y[2] % 360 * re : 0, ft()) : [s * Ye, d * Ye, p * Ye];
  }, V.angle = function(Y) {
    return arguments.length ? (b = Y % 360 * re, ft()) : b * Ye;
  }, V.reflectX = function(Y) {
    return arguments.length ? (v = Y ? -1 : 1, ft()) : v < 0;
  }, V.reflectY = function(Y) {
    return arguments.length ? (y = Y ? -1 : 1, ft()) : y < 0;
  }, V.precision = function(Y) {
    return arguments.length ? ($ = O_(N, A = Y * Y), ct()) : Ie(A);
  }, V.fitExtent = function(Y, q) {
    return Eg(V, Y, q);
  }, V.fitSize = function(Y, q) {
    return I5(V, Y, q);
  }, V.fitWidth = function(Y, q) {
    return W5(V, Y, q);
  }, V.fitHeight = function(Y, q) {
    return J5(V, Y, q);
  };
  function ft() {
    var Y = C_(i, 0, 0, v, y, b).apply(null, e(o, f)), q = C_(i, a - Y[0], u - Y[1], v, y, b);
    return m = U5(s, d, p), N = hm(e, q), H = hm(m, N), $ = O_(N, A), ct();
  }
  function ct() {
    return z = G = null, V;
  }
  return function() {
    return e = t14.apply(this, arguments), V.invert = e.invert && lt, ft();
  };
}
function Ag(t14) {
  var e = 0, i = zt / 3, a = t4(t14), u = a(e, i);
  return u.parallels = function(o) {
    return arguments.length ? a(e = o[0] * re, i = o[1] * re) : [e * Ye, i * Ye];
  }, u;
}
function e$(t14) {
  var e = Rt(t14);
  function i(a, u) {
    return [a * e, Tt(u) / e];
  }
  return i.invert = function(a, u) {
    return [a / e, Dn(u * e)];
  }, i;
}
function n$(t14, e) {
  var i = Tt(t14), a = (i + Tt(e)) / 2;
  if (Xt(a) < Ct) return e$(t14);
  var u = 1 + i * (2 * a - i), o = Ie(u) / a;
  function f(s, d) {
    var p = Ie(u - 2 * a * Tt(d)) / a;
    return [p * Tt(s *= a), o - p * Rt(s)];
  }
  return f.invert = function(s, d) {
    var p = o - d, m = Xi(s, Xt(p)) * En(p);
    return p * a < 0 && (m -= zt * En(s) * En(p)), [m / a, Dn((u - (s * s + p * p) * a * a) / (2 * a))];
  }, f;
}
function Ds() {
  return Ag(n$).scale(155.424).center([0, 33.6442]);
}
function e4() {
  return Ds().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}
function i$(t14) {
  var e = t14.length;
  return { point: function(i, a) {
    for (var u = -1; ++u < e; ) t14[u].point(i, a);
  }, sphere: function() {
    for (var i = -1; ++i < e; ) t14[i].sphere();
  }, lineStart: function() {
    for (var i = -1; ++i < e; ) t14[i].lineStart();
  }, lineEnd: function() {
    for (var i = -1; ++i < e; ) t14[i].lineEnd();
  }, polygonStart: function() {
    for (var i = -1; ++i < e; ) t14[i].polygonStart();
  }, polygonEnd: function() {
    for (var i = -1; ++i < e; ) t14[i].polygonEnd();
  } };
}
function r$() {
  var t14, e, i = e4(), a, u = Ds().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), o, f = Ds().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), s, d, p = { point: function(v, y) {
    d = [v, y];
  } };
  function m(v) {
    var y = v[0], w = v[1];
    return d = null, a.point(y, w), d || (o.point(y, w), d) || (s.point(y, w), d);
  }
  m.invert = function(v) {
    var y = i.scale(), w = i.translate(), S = (v[0] - w[0]) / y, x = (v[1] - w[1]) / y;
    return (x >= 0.12 && x < 0.234 && S >= -0.425 && S < -0.214 ? u : x >= 0.166 && x < 0.234 && S >= -0.214 && S < -0.115 ? f : i).invert(v);
  }, m.stream = function(v) {
    return t14 && e === v ? t14 : t14 = i$([i.stream(e = v), u.stream(v), f.stream(v)]);
  }, m.precision = function(v) {
    return arguments.length ? (i.precision(v), u.precision(v), f.precision(v), b()) : i.precision();
  }, m.scale = function(v) {
    return arguments.length ? (i.scale(v), u.scale(v * 0.35), f.scale(v), m.translate(i.translate())) : i.scale();
  }, m.translate = function(v) {
    if (!arguments.length) return i.translate();
    var y = i.scale(), w = +v[0], S = +v[1];
    return a = i.translate(v).clipExtent([[w - 0.455 * y, S - 0.238 * y], [w + 0.455 * y, S + 0.238 * y]]).stream(p), o = u.translate([w - 0.307 * y, S + 0.201 * y]).clipExtent([[w - 0.425 * y + Ct, S + 0.12 * y + Ct], [w - 0.214 * y - Ct, S + 0.234 * y - Ct]]).stream(p), s = f.translate([w - 0.205 * y, S + 0.212 * y]).clipExtent([[w - 0.214 * y + Ct, S + 0.166 * y + Ct], [w - 0.115 * y - Ct, S + 0.234 * y - Ct]]).stream(p), b();
  }, m.fitExtent = function(v, y) {
    return Eg(m, v, y);
  }, m.fitSize = function(v, y) {
    return I5(m, v, y);
  }, m.fitWidth = function(v, y) {
    return W5(m, v, y);
  }, m.fitHeight = function(v, y) {
    return J5(m, v, y);
  };
  function b() {
    return t14 = e = null, m;
  }
  return m.scale(1070);
}
function n4(t14) {
  return function(e, i) {
    var a = Rt(e), u = Rt(i), o = t14(a * u);
    return o === 1 / 0 ? [2, 0] : [o * u * Tt(e), o * Tt(i)];
  };
}
function Uo(t14) {
  return function(e, i) {
    var a = Ie(e * e + i * i), u = t14(a), o = Tt(u), f = Rt(u);
    return [Xi(e * o, a * f), Dn(a && i * o / a)];
  };
}
var i4 = n4(function(t14) {
  return Ie(2 / (1 + t14));
});
i4.invert = Uo(function(t14) {
  return 2 * Dn(t14 / 2);
});
function a$() {
  return Rr(i4).scale(124.75).clipAngle(180 - 1e-3);
}
var r4 = n4(function(t14) {
  return (t14 = z5(t14)) && t14 / Tt(t14);
});
r4.invert = Uo(function(t14) {
  return t14;
});
function u$() {
  return Rr(r4).scale(79.4188).clipAngle(180 - 1e-3);
}
function od(t14, e) {
  return [t14, _s(xg((ue + e) / 2))];
}
od.invert = function(t14, e) {
  return [t14, 2 * qu($5(e)) - ue];
};
function l$() {
  return a4(od).scale(961 / fn);
}
function a4(t14) {
  var e = Rr(t14), i = e.center, a = e.scale, u = e.translate, o = e.clipExtent, f = null, s, d, p;
  e.scale = function(b) {
    return arguments.length ? (a(b), m()) : a();
  }, e.translate = function(b) {
    return arguments.length ? (u(b), m()) : u();
  }, e.center = function(b) {
    return arguments.length ? (i(b), m()) : i();
  }, e.clipExtent = function(b) {
    return arguments.length ? (b == null ? f = s = d = p = null : (f = +b[0][0], s = +b[0][1], d = +b[1][0], p = +b[1][1]), m()) : f == null ? null : [[f, s], [d, p]];
  };
  function m() {
    var b = zt * a(), v = e(ON(e.rotate()).invert([0, 0]));
    return o(f == null ? [[v[0] - b, v[1] - b], [v[0] + b, v[1] + b]] : t14 === od ? [[Math.max(v[0] - b, f), s], [Math.min(v[0] + b, d), p]] : [[f, Math.max(v[1] - b, s)], [d, Math.min(v[1] + b, p)]]);
  }
  return m();
}
function Df(t14) {
  return xg((ue + t14) / 2);
}
function o$(t14, e) {
  var i = Rt(t14), a = t14 === e ? Tt(t14) : _s(i / Rt(e)) / _s(Df(e) / Df(t14)), u = i * up(Df(t14), a) / a;
  if (!a) return od;
  function o(f, s) {
    u > 0 ? s < -ue + Ct && (s = -ue + Ct) : s > ue - Ct && (s = ue - Ct);
    var d = u / up(Df(s), a);
    return [d * Tt(a * f), u - d * Rt(a * f)];
  }
  return o.invert = function(f, s) {
    var d = u - s, p = En(a) * Ie(f * f + d * d), m = Xi(f, Xt(d)) * En(d);
    return d * a < 0 && (m -= zt * En(f) * En(d)), [m / a, 2 * qu(up(u / p, 1 / a)) - ue];
  }, o;
}
function c$() {
  return Ag(o$).scale(109.5).parallels([30, 30]);
}
function Rs(t14, e) {
  return [t14, e];
}
Rs.invert = Rs;
function f$() {
  return Rr(Rs).scale(152.63);
}
function s$(t14, e) {
  var i = Rt(t14), a = t14 === e ? Tt(t14) : (i - Rt(e)) / (e - t14), u = i / a + t14;
  if (Xt(a) < Ct) return Rs;
  function o(f, s) {
    var d = u - s, p = a * f;
    return [d * Tt(p), u - d * Rt(p)];
  }
  return o.invert = function(f, s) {
    var d = u - s, p = Xi(f, Xt(d)) * En(d);
    return d * a < 0 && (p -= zt * En(f) * En(d)), [p / a, u - En(a) * Ie(f * f + d * d)];
  }, o;
}
function d$() {
  return Ag(s$).scale(131.154).center([0, 13.9389]);
}
var oo = 1.340264, co = -0.081106, fo = 893e-6, so = 3796e-6, Ns = Ie(3) / 2, h$ = 12;
function u4(t14, e) {
  var i = Dn(Ns * Tt(e)), a = i * i, u = a * a * a;
  return [t14 * Rt(i) / (Ns * (oo + 3 * co * a + u * (7 * fo + 9 * so * a))), i * (oo + co * a + u * (fo + so * a))];
}
u4.invert = function(t14, e) {
  for (var i = e, a = i * i, u = a * a * a, o = 0, f, s, d; o < h$ && (s = i * (oo + co * a + u * (fo + so * a)) - e, d = oo + 3 * co * a + u * (7 * fo + 9 * so * a), i -= f = s / d, a = i * i, u = a * a * a, !(Xt(f) < AN)); ++o) ;
  return [Ns * t14 * (oo + 3 * co * a + u * (7 * fo + 9 * so * a)) / Rt(i), Dn(Tt(i) / Ns)];
};
function p$() {
  return Rr(u4).scale(177.158);
}
function l4(t14, e) {
  var i = Rt(e), a = Rt(t14) * i;
  return [i * Tt(t14) / a, Tt(e) / a];
}
l4.invert = Uo(qu);
function m$() {
  return Rr(l4).scale(144.049).clipAngle(60);
}
function o4(t14, e) {
  return [Rt(e) * Tt(t14), Tt(e)];
}
o4.invert = Uo(Dn);
function g$() {
  return Rr(o4).scale(249.5).clipAngle(90 + Ct);
}
function c4(t14, e) {
  var i = Rt(e), a = 1 + Rt(t14) * i;
  return [i * Tt(t14) / a, Tt(e) / a];
}
c4.invert = Uo(function(t14) {
  return 2 * qu(t14);
});
function b$() {
  return Rr(c4).scale(250).clipAngle(142);
}
function f4(t14, e) {
  return [_s(xg((ue + e) / 2)), -t14];
}
f4.invert = function(t14, e) {
  return [-e, 2 * qu($5(t14)) - ue];
};
function v$() {
  var t14 = a4(f4), e = t14.center, i = t14.rotate;
  return t14.center = function(a) {
    return arguments.length ? e([-a[1], a[0]]) : (a = e(), [a[1], -a[0]]);
  }, t14.rotate = function(a) {
    return arguments.length ? i([a[0], a[1], a.length > 2 ? a[2] + 90 : 90]) : (a = i(), [a[0], a[1], a[2] - 90]);
  }, i([0, 0, 90]).scale(159.155);
}
function fi(t14, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t14);
      break;
    default:
      this.range(e).domain(t14);
      break;
  }
  return this;
}
function cd(t14, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof t14 == "function" ? this.interpolator(t14) : this.range(t14);
      break;
    }
    default: {
      this.domain(t14), typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
  }
  return this;
}
const Tm = Symbol("implicit");
function Og() {
  var t14 = new go(), e = [], i = [], a = Tm;
  function u(o) {
    let f = t14.get(o);
    if (f === void 0) {
      if (a !== Tm) return a;
      t14.set(o, f = e.push(o) - 1);
    }
    return i[f % i.length];
  }
  return u.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [], t14 = new go();
    for (const f of o) t14.has(f) || t14.set(f, e.push(f) - 1);
    return u;
  }, u.range = function(o) {
    return arguments.length ? (i = Array.from(o), u) : i.slice();
  }, u.unknown = function(o) {
    return arguments.length ? (a = o, u) : a;
  }, u.copy = function() {
    return Og(e, i).unknown(a);
  }, fi.apply(u, arguments), u;
}
function fd() {
  var t14 = Og().unknown(void 0), e = t14.domain, i = t14.range, a = 0, u = 1, o, f, s = false, d = 0, p = 0, m = 0.5;
  delete t14.unknown;
  function b() {
    var v = e().length, y = u < a, w = y ? u : a, S = y ? a : u;
    o = (S - w) / Math.max(1, v - d + p * 2), s && (o = Math.floor(o)), w += (S - w - o * (v - d)) * m, f = o * (1 - d), s && (w = Math.round(w), f = Math.round(f));
    var x = Ip(v).map(function(T) {
      return w + o * T;
    });
    return i(y ? x.reverse() : x);
  }
  return t14.domain = function(v) {
    return arguments.length ? (e(v), b()) : e();
  }, t14.range = function(v) {
    return arguments.length ? ([a, u] = v, a = +a, u = +u, b()) : [a, u];
  }, t14.rangeRound = function(v) {
    return [a, u] = v, a = +a, u = +u, s = true, b();
  }, t14.bandwidth = function() {
    return f;
  }, t14.step = function() {
    return o;
  }, t14.round = function(v) {
    return arguments.length ? (s = !!v, b()) : s;
  }, t14.padding = function(v) {
    return arguments.length ? (d = Math.min(1, p = +v), b()) : d;
  }, t14.paddingInner = function(v) {
    return arguments.length ? (d = Math.min(1, v), b()) : d;
  }, t14.paddingOuter = function(v) {
    return arguments.length ? (p = +v, b()) : p;
  }, t14.align = function(v) {
    return arguments.length ? (m = Math.max(0, Math.min(1, v)), b()) : m;
  }, t14.copy = function() {
    return fd(e(), [a, u]).round(s).paddingInner(d).paddingOuter(p).align(m);
  }, fi.apply(b(), arguments);
}
function s4(t14) {
  var e = t14.copy;
  return t14.padding = t14.paddingOuter, delete t14.paddingInner, delete t14.paddingOuter, t14.copy = function() {
    return s4(e());
  }, t14;
}
function y$() {
  return s4(fd.apply(null, arguments).paddingInner(1));
}
function _$(t14) {
  return function() {
    return t14;
  };
}
function Em(t14) {
  return +t14;
}
var D_ = [0, 1];
function On(t14) {
  return t14;
}
function Am(t14, e) {
  return (e -= t14 = +t14) ? function(i) {
    return (i - t14) / e;
  } : _$(isNaN(e) ? NaN : 0.5);
}
function w$(t14, e) {
  var i;
  return t14 > e && (i = t14, t14 = e, e = i), function(a) {
    return Math.max(t14, Math.min(e, a));
  };
}
function S$(t14, e, i) {
  var a = t14[0], u = t14[1], o = e[0], f = e[1];
  return u < a ? (a = Am(u, a), o = i(f, o)) : (a = Am(a, u), o = i(o, f)), function(s) {
    return o(a(s));
  };
}
function x$(t14, e, i) {
  var a = Math.min(t14.length, e.length) - 1, u = new Array(a), o = new Array(a), f = -1;
  for (t14[a] < t14[0] && (t14 = t14.slice().reverse(), e = e.slice().reverse()); ++f < a; ) u[f] = Am(t14[f], t14[f + 1]), o[f] = i(e[f], e[f + 1]);
  return function(s) {
    var d = og(t14, s, 1, a) - 1;
    return o[d](u[d](s));
  };
}
function Lo(t14, e) {
  return e.domain(t14.domain()).range(t14.range()).interpolate(t14.interpolate()).clamp(t14.clamp()).unknown(t14.unknown());
}
function sd() {
  var t14 = D_, e = D_, i = zo, a, u, o, f = On, s, d, p;
  function m() {
    var v = Math.min(t14.length, e.length);
    return f !== On && (f = w$(t14[0], t14[v - 1])), s = v > 2 ? x$ : S$, d = p = null, b;
  }
  function b(v) {
    return v == null || isNaN(v = +v) ? o : (d || (d = s(t14.map(a), e, i)))(a(f(v)));
  }
  return b.invert = function(v) {
    return f(u((p || (p = s(e, t14.map(a), Le)))(v)));
  }, b.domain = function(v) {
    return arguments.length ? (t14 = Array.from(v, Em), m()) : t14.slice();
  }, b.range = function(v) {
    return arguments.length ? (e = Array.from(v), m()) : e.slice();
  }, b.rangeRound = function(v) {
    return e = Array.from(v), i = bg, m();
  }, b.clamp = function(v) {
    return arguments.length ? (f = v ? true : On, m()) : f !== On;
  }, b.interpolate = function(v) {
    return arguments.length ? (i = v, m()) : i;
  }, b.unknown = function(v) {
    return arguments.length ? (o = v, b) : o;
  }, function(v, y) {
    return a = v, u = y, m();
  };
}
function d4() {
  return sd()(On, On);
}
function M$(t14, e, i, a) {
  var u = Kp(t14, e, i), o;
  switch (a = wo(a ?? ",f"), a.type) {
    case "s": {
      var f = Math.max(Math.abs(t14), Math.abs(e));
      return a.precision == null && !isNaN(o = TN(u, f)) && (a.precision = o), N5(a, f);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = EN(u, Math.max(Math.abs(t14), Math.abs(e)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = MN(u)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return Bu(a);
}
function Ho(t14) {
  var e = t14.domain;
  return t14.ticks = function(i) {
    var a = e();
    return fs(a[0], a[a.length - 1], i ?? 10);
  }, t14.tickFormat = function(i, a) {
    var u = e();
    return M$(u[0], u[u.length - 1], i ?? 10, a);
  }, t14.nice = function(i) {
    i == null && (i = 10);
    var a = e(), u = 0, o = a.length - 1, f = a[u], s = a[o], d, p, m = 10;
    for (s < f && (p = f, f = s, s = p, p = u, u = o, o = p); m-- > 0; ) {
      if (p = Qp(f, s, i), p === d) return a[u] = f, a[o] = s, e(a);
      if (p > 0) f = Math.floor(f / p) * p, s = Math.ceil(s / p) * p;
      else if (p < 0) f = Math.ceil(f * p) / p, s = Math.floor(s * p) / p;
      else break;
      d = p;
    }
    return t14;
  }, t14;
}
function Cg() {
  var t14 = d4();
  return t14.copy = function() {
    return Lo(t14, Cg());
  }, fi.apply(t14, arguments), Ho(t14);
}
function h4(t14) {
  var e;
  function i(a) {
    return a == null || isNaN(a = +a) ? e : a;
  }
  return i.invert = i, i.domain = i.range = function(a) {
    return arguments.length ? (t14 = Array.from(a, Em), i) : t14.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (e = a, i) : e;
  }, i.copy = function() {
    return h4(t14).unknown(e);
  }, t14 = arguments.length ? Array.from(t14, Em) : [0, 1], Ho(i);
}
function p4(t14, e) {
  t14 = t14.slice();
  var i = 0, a = t14.length - 1, u = t14[i], o = t14[a], f;
  return o < u && (f = i, i = a, a = f, f = u, u = o, o = f), t14[i] = e.floor(u), t14[a] = e.ceil(o), t14;
}
function R_(t14) {
  return Math.log(t14);
}
function N_(t14) {
  return Math.exp(t14);
}
function T$(t14) {
  return -Math.log(-t14);
}
function E$(t14) {
  return -Math.exp(-t14);
}
function A$(t14) {
  return isFinite(t14) ? +("1e" + t14) : t14 < 0 ? 0 : t14;
}
function O$(t14) {
  return t14 === 10 ? A$ : t14 === Math.E ? Math.exp : (e) => Math.pow(t14, e);
}
function C$(t14) {
  return t14 === Math.E ? Math.log : t14 === 10 && Math.log10 || t14 === 2 && Math.log2 || (t14 = Math.log(t14), (e) => Math.log(e) / t14);
}
function $_(t14) {
  return (e, i) => -t14(-e, i);
}
function m4(t14) {
  const e = t14(R_, N_), i = e.domain;
  let a = 10, u, o;
  function f() {
    return u = C$(a), o = O$(a), i()[0] < 0 ? (u = $_(u), o = $_(o), t14(T$, E$)) : t14(R_, N_), e;
  }
  return e.base = function(s) {
    return arguments.length ? (a = +s, f()) : a;
  }, e.domain = function(s) {
    return arguments.length ? (i(s), f()) : i();
  }, e.ticks = (s) => {
    const d = i();
    let p = d[0], m = d[d.length - 1];
    const b = m < p;
    b && ([p, m] = [m, p]);
    let v = u(p), y = u(m), w, S;
    const x = s == null ? 10 : +s;
    let T = [];
    if (!(a % 1) && y - v < x) {
      if (v = Math.floor(v), y = Math.ceil(y), p > 0) {
        for (; v <= y; ++v) for (w = 1; w < a; ++w) if (S = v < 0 ? w / o(-v) : w * o(v), !(S < p)) {
          if (S > m) break;
          T.push(S);
        }
      } else for (; v <= y; ++v) for (w = a - 1; w >= 1; --w) if (S = v > 0 ? w / o(-v) : w * o(v), !(S < p)) {
        if (S > m) break;
        T.push(S);
      }
      T.length * 2 < x && (T = fs(p, m, x));
    } else T = fs(v, y, Math.min(y - v, x)).map(o);
    return b ? T.reverse() : T;
  }, e.tickFormat = (s, d) => {
    if (s == null && (s = 10), d == null && (d = a === 10 ? "s" : ","), typeof d != "function" && (!(a % 1) && (d = wo(d)).precision == null && (d.trim = true), d = Bu(d)), s === 1 / 0) return d;
    const p = Math.max(1, a * s / e.ticks().length);
    return (m) => {
      let b = m / o(Math.round(u(m)));
      return b * a < a - 0.5 && (b *= a), b <= p ? d(m) : "";
    };
  }, e.nice = () => i(p4(i(), { floor: (s) => o(Math.floor(u(s))), ceil: (s) => o(Math.ceil(u(s))) })), e;
}
function g4() {
  const t14 = m4(sd()).domain([1, 10]);
  return t14.copy = () => Lo(t14, g4()).base(t14.base()), fi.apply(t14, arguments), t14;
}
function z_(t14) {
  return function(e) {
    return Math.sign(e) * Math.log1p(Math.abs(e / t14));
  };
}
function U_(t14) {
  return function(e) {
    return Math.sign(e) * Math.expm1(Math.abs(e)) * t14;
  };
}
function b4(t14) {
  var e = 1, i = t14(z_(e), U_(e));
  return i.constant = function(a) {
    return arguments.length ? t14(z_(e = +a), U_(e)) : e;
  }, Ho(i);
}
function v4() {
  var t14 = b4(sd());
  return t14.copy = function() {
    return Lo(t14, v4()).constant(t14.constant());
  }, fi.apply(t14, arguments);
}
function L_(t14) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t14) : Math.pow(e, t14);
  };
}
function D$(t14) {
  return t14 < 0 ? -Math.sqrt(-t14) : Math.sqrt(t14);
}
function R$(t14) {
  return t14 < 0 ? -t14 * t14 : t14 * t14;
}
function y4(t14) {
  var e = t14(On, On), i = 1;
  function a() {
    return i === 1 ? t14(On, On) : i === 0.5 ? t14(D$, R$) : t14(L_(i), L_(1 / i));
  }
  return e.exponent = function(u) {
    return arguments.length ? (i = +u, a()) : i;
  }, Ho(e);
}
function _4() {
  var t14 = y4(sd());
  return t14.copy = function() {
    return Lo(t14, _4()).exponent(t14.exponent());
  }, fi.apply(t14, arguments), t14;
}
function w4() {
  var t14 = [], e = [], i = [], a;
  function u() {
    var f = 0, s = Math.max(1, e.length);
    for (i = new Array(s - 1); ++f < s; ) i[f - 1] = MO(t14, f / s);
    return o;
  }
  function o(f) {
    return f == null || isNaN(f = +f) ? a : e[og(i, f)];
  }
  return o.invertExtent = function(f) {
    var s = e.indexOf(f);
    return s < 0 ? [NaN, NaN] : [s > 0 ? i[s - 1] : t14[0], s < i.length ? i[s] : t14[t14.length - 1]];
  }, o.domain = function(f) {
    if (!arguments.length) return t14.slice();
    t14 = [];
    for (let s of f) s != null && !isNaN(s = +s) && t14.push(s);
    return t14.sort(xr), u();
  }, o.range = function(f) {
    return arguments.length ? (e = Array.from(f), u()) : e.slice();
  }, o.unknown = function(f) {
    return arguments.length ? (a = f, o) : a;
  }, o.quantiles = function() {
    return i.slice();
  }, o.copy = function() {
    return w4().domain(t14).range(e).unknown(a);
  }, fi.apply(o, arguments);
}
function S4() {
  var t14 = [0.5], e = [0, 1], i, a = 1;
  function u(o) {
    return o != null && o <= o ? e[og(t14, o, 0, a)] : i;
  }
  return u.domain = function(o) {
    return arguments.length ? (t14 = Array.from(o), a = Math.min(t14.length, e.length - 1), u) : t14.slice();
  }, u.range = function(o) {
    return arguments.length ? (e = Array.from(o), a = Math.min(t14.length, e.length - 1), u) : e.slice();
  }, u.invertExtent = function(o) {
    var f = e.indexOf(o);
    return [t14[f - 1], t14[f]];
  }, u.unknown = function(o) {
    return arguments.length ? (i = o, u) : i;
  }, u.copy = function() {
    return S4().domain(t14).range(e).unknown(i);
  }, fi.apply(u, arguments);
}
const sp = /* @__PURE__ */ new Date(), dp = /* @__PURE__ */ new Date();
function ge(t14, e, i, a) {
  function u(o) {
    return t14(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return u.floor = (o) => (t14(o = /* @__PURE__ */ new Date(+o)), o), u.ceil = (o) => (t14(o = new Date(o - 1)), e(o, 1), t14(o), o), u.round = (o) => {
    const f = u(o), s = u.ceil(o);
    return o - f < s - o ? f : s;
  }, u.offset = (o, f) => (e(o = /* @__PURE__ */ new Date(+o), f == null ? 1 : Math.floor(f)), o), u.range = (o, f, s) => {
    const d = [];
    if (o = u.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < f) || !(s > 0)) return d;
    let p;
    do
      d.push(p = /* @__PURE__ */ new Date(+o)), e(o, s), t14(o);
    while (p < o && o < f);
    return d;
  }, u.filter = (o) => ge((f) => {
    if (f >= f) for (; t14(f), !o(f); ) f.setTime(f - 1);
  }, (f, s) => {
    if (f >= f) if (s < 0) for (; ++s <= 0; ) for (; e(f, -1), !o(f); ) ;
    else for (; --s >= 0; ) for (; e(f, 1), !o(f); ) ;
  }), i && (u.count = (o, f) => (sp.setTime(+o), dp.setTime(+f), t14(sp), t14(dp), Math.floor(i(sp, dp))), u.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? u.filter(a ? (f) => a(f) % o === 0 : (f) => u.count(0, f) % o === 0) : u)), u;
}
const $s = ge(() => {
}, (t14, e) => {
  t14.setTime(+t14 + e);
}, (t14, e) => e - t14);
$s.every = (t14) => (t14 = Math.floor(t14), !isFinite(t14) || !(t14 > 0) ? null : t14 > 1 ? ge((e) => {
  e.setTime(Math.floor(e / t14) * t14);
}, (e, i) => {
  e.setTime(+e + i * t14);
}, (e, i) => (i - e) / t14) : $s);
$s.range;
const Vi = 1e3, Cn = Vi * 60, ji = Cn * 60, Fi = ji * 24, Dg = Fi * 7, H_ = Fi * 30, hp = Fi * 365, Vn = ge((t14) => {
  t14.setTime(t14 - t14.getMilliseconds());
}, (t14, e) => {
  t14.setTime(+t14 + e * Vi);
}, (t14, e) => (e - t14) / Vi, (t14) => t14.getUTCSeconds());
Vn.range;
const Vo = ge((t14) => {
  t14.setTime(t14 - t14.getMilliseconds() - t14.getSeconds() * Vi);
}, (t14, e) => {
  t14.setTime(+t14 + e * Cn);
}, (t14, e) => (e - t14) / Cn, (t14) => t14.getMinutes());
Vo.range;
const jo = ge((t14) => {
  t14.setUTCSeconds(0, 0);
}, (t14, e) => {
  t14.setTime(+t14 + e * Cn);
}, (t14, e) => (e - t14) / Cn, (t14) => t14.getUTCMinutes());
jo.range;
const Bo = ge((t14) => {
  t14.setTime(t14 - t14.getMilliseconds() - t14.getSeconds() * Vi - t14.getMinutes() * Cn);
}, (t14, e) => {
  t14.setTime(+t14 + e * ji);
}, (t14, e) => (e - t14) / ji, (t14) => t14.getHours());
Bo.range;
const qo = ge((t14) => {
  t14.setUTCMinutes(0, 0, 0);
}, (t14, e) => {
  t14.setTime(+t14 + e * ji);
}, (t14, e) => (e - t14) / ji, (t14) => t14.getUTCHours());
qo.range;
const wa = ge((t14) => t14.setHours(0, 0, 0, 0), (t14, e) => t14.setDate(t14.getDate() + e), (t14, e) => (e - t14 - (e.getTimezoneOffset() - t14.getTimezoneOffset()) * Cn) / Fi, (t14) => t14.getDate() - 1);
wa.range;
const dd = ge((t14) => {
  t14.setUTCHours(0, 0, 0, 0);
}, (t14, e) => {
  t14.setUTCDate(t14.getUTCDate() + e);
}, (t14, e) => (e - t14) / Fi, (t14) => t14.getUTCDate() - 1);
dd.range;
const hd = ge((t14) => {
  t14.setUTCHours(0, 0, 0, 0);
}, (t14, e) => {
  t14.setUTCDate(t14.getUTCDate() + e);
}, (t14, e) => (e - t14) / Fi, (t14) => Math.floor(t14 / Fi));
hd.range;
function Sa(t14) {
  return ge((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t14) % 7), e.setHours(0, 0, 0, 0);
  }, (e, i) => {
    e.setDate(e.getDate() + i * 7);
  }, (e, i) => (i - e - (i.getTimezoneOffset() - e.getTimezoneOffset()) * Cn) / Dg);
}
const Ru = Sa(0), Mo = Sa(1), x4 = Sa(2), M4 = Sa(3), ba = Sa(4), T4 = Sa(5), E4 = Sa(6);
Ru.range;
Mo.range;
x4.range;
M4.range;
ba.range;
T4.range;
E4.range;
function xa(t14) {
  return ge((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t14) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, i) => {
    e.setUTCDate(e.getUTCDate() + i * 7);
  }, (e, i) => (i - e) / Dg);
}
const Nu = xa(0), To = xa(1), A4 = xa(2), O4 = xa(3), va = xa(4), C4 = xa(5), D4 = xa(6);
Nu.range;
To.range;
A4.range;
O4.range;
va.range;
C4.range;
D4.range;
const ko = ge((t14) => {
  t14.setDate(1), t14.setHours(0, 0, 0, 0);
}, (t14, e) => {
  t14.setMonth(t14.getMonth() + e);
}, (t14, e) => e.getMonth() - t14.getMonth() + (e.getFullYear() - t14.getFullYear()) * 12, (t14) => t14.getMonth());
ko.range;
const Yo = ge((t14) => {
  t14.setUTCDate(1), t14.setUTCHours(0, 0, 0, 0);
}, (t14, e) => {
  t14.setUTCMonth(t14.getUTCMonth() + e);
}, (t14, e) => e.getUTCMonth() - t14.getUTCMonth() + (e.getUTCFullYear() - t14.getUTCFullYear()) * 12, (t14) => t14.getUTCMonth());
Yo.range;
const Bn = ge((t14) => {
  t14.setMonth(0, 1), t14.setHours(0, 0, 0, 0);
}, (t14, e) => {
  t14.setFullYear(t14.getFullYear() + e);
}, (t14, e) => e.getFullYear() - t14.getFullYear(), (t14) => t14.getFullYear());
Bn.every = (t14) => !isFinite(t14 = Math.floor(t14)) || !(t14 > 0) ? null : ge((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t14) * t14), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, i) => {
  e.setFullYear(e.getFullYear() + i * t14);
});
Bn.range;
const qn = ge((t14) => {
  t14.setUTCMonth(0, 1), t14.setUTCHours(0, 0, 0, 0);
}, (t14, e) => {
  t14.setUTCFullYear(t14.getUTCFullYear() + e);
}, (t14, e) => e.getUTCFullYear() - t14.getUTCFullYear(), (t14) => t14.getUTCFullYear());
qn.every = (t14) => !isFinite(t14 = Math.floor(t14)) || !(t14 > 0) ? null : ge((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t14) * t14), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, i) => {
  e.setUTCFullYear(e.getUTCFullYear() + i * t14);
});
qn.range;
function R4(t14, e, i, a, u, o) {
  const f = [[Vn, 1, Vi], [Vn, 5, 5 * Vi], [Vn, 15, 15 * Vi], [Vn, 30, 30 * Vi], [o, 1, Cn], [o, 5, 5 * Cn], [o, 15, 15 * Cn], [o, 30, 30 * Cn], [u, 1, ji], [u, 3, 3 * ji], [u, 6, 6 * ji], [u, 12, 12 * ji], [a, 1, Fi], [a, 2, 2 * Fi], [i, 1, Dg], [e, 1, H_], [e, 3, 3 * H_], [t14, 1, hp]];
  function s(p, m, b) {
    const v = m < p;
    v && ([p, m] = [m, p]);
    const y = b && typeof b.range == "function" ? b : d(p, m, b), w = y ? y.range(p, +m + 1) : [];
    return v ? w.reverse() : w;
  }
  function d(p, m, b) {
    const v = Math.abs(m - p) / b, y = Ws(([, , x]) => x).right(f, v);
    if (y === f.length) return t14.every(Kp(p / hp, m / hp, b));
    if (y === 0) return $s.every(Math.max(Kp(p, m, b), 1));
    const [w, S] = f[v / f[y - 1][2] < f[y][2] / v ? y - 1 : y];
    return w.every(S);
  }
  return [s, d];
}
const [N$, $$] = R4(qn, Yo, Nu, hd, qo, jo), [z$, U$] = R4(Bn, ko, Ru, wa, Bo, Vo);
function pp(t14) {
  if (0 <= t14.y && t14.y < 100) {
    var e = new Date(-1, t14.m, t14.d, t14.H, t14.M, t14.S, t14.L);
    return e.setFullYear(t14.y), e;
  }
  return new Date(t14.y, t14.m, t14.d, t14.H, t14.M, t14.S, t14.L);
}
function mp(t14) {
  if (0 <= t14.y && t14.y < 100) {
    var e = new Date(Date.UTC(-1, t14.m, t14.d, t14.H, t14.M, t14.S, t14.L));
    return e.setUTCFullYear(t14.y), e;
  }
  return new Date(Date.UTC(t14.y, t14.m, t14.d, t14.H, t14.M, t14.S, t14.L));
}
function Zl(t14, e, i) {
  return { y: t14, m: e, d: i, H: 0, M: 0, S: 0, L: 0 };
}
function L$(t14) {
  var e = t14.dateTime, i = t14.date, a = t14.time, u = t14.periods, o = t14.days, f = t14.shortDays, s = t14.months, d = t14.shortMonths, p = Ql(u), m = Kl(u), b = Ql(o), v = Kl(o), y = Ql(f), w = Kl(f), S = Ql(s), x = Kl(s), T = Ql(d), E = Kl(d), D = { a: ut, A: nt, b: P, B: C, c: null, d: Y_, e: Y_, f: az, g: mz, G: bz, H: nz, I: iz, j: rz, L: N4, m: uz, M: lz, p: B, q: Q, Q: F_, s: Z_, S: oz, u: cz, U: fz, V: sz, w: dz, W: hz, x: null, X: null, y: pz, Y: gz, Z: vz, "%": X_ }, O = { a: K, A: tt, b: ht, B: dt, c: null, d: G_, e: G_, f: Sz, g: Nz, G: zz, H: yz, I: _z, j: wz, L: z4, m: xz, M: Mz, p: st, q: pt, Q: F_, s: Z_, S: Tz, u: Ez, U: Az, V: Oz, w: Cz, W: Dz, x: null, X: null, y: Rz, Y: $z, Z: Uz, "%": X_ }, A = { a: G, A: V, b: lt, B: ft, c: ct, d: q_, e: q_, f: W$, g: B_, G: j_, H: k_, I: k_, j: Q$, L: I$, m: Z$, M: K$, p: z, q: F$, Q: tz, s: ez, S: P$, u: q$, U: k$, V: Y$, w: B$, W: G$, x: Y, X: q, y: B_, Y: j_, Z: X$, "%": J$ };
  D.x = $(i, D), D.X = $(a, D), D.c = $(e, D), O.x = $(i, O), O.X = $(a, O), O.c = $(e, O);
  function $(W, ot) {
    return function(mt) {
      var et = [], Nt = -1, wt = 0, Vt = W.length, Ft, Te, Rn;
      for (mt instanceof Date || (mt = /* @__PURE__ */ new Date(+mt)); ++Nt < Vt; ) W.charCodeAt(Nt) === 37 && (et.push(W.slice(wt, Nt)), (Te = V_[Ft = W.charAt(++Nt)]) != null ? Ft = W.charAt(++Nt) : Te = Ft === "e" ? " " : "0", (Rn = ot[Ft]) && (Ft = Rn(mt, Te)), et.push(Ft), wt = Nt + 1);
      return et.push(W.slice(wt, Nt)), et.join("");
    };
  }
  function N(W, ot) {
    return function(mt) {
      var et = Zl(1900, void 0, 1), Nt = H(et, W, mt += "", 0), wt, Vt;
      if (Nt != mt.length) return null;
      if ("Q" in et) return new Date(et.Q);
      if ("s" in et) return new Date(et.s * 1e3 + ("L" in et ? et.L : 0));
      if (ot && !("Z" in et) && (et.Z = 0), "p" in et && (et.H = et.H % 12 + et.p * 12), et.m === void 0 && (et.m = "q" in et ? et.q : 0), "V" in et) {
        if (et.V < 1 || et.V > 53) return null;
        "w" in et || (et.w = 1), "Z" in et ? (wt = mp(Zl(et.y, 0, 1)), Vt = wt.getUTCDay(), wt = Vt > 4 || Vt === 0 ? To.ceil(wt) : To(wt), wt = dd.offset(wt, (et.V - 1) * 7), et.y = wt.getUTCFullYear(), et.m = wt.getUTCMonth(), et.d = wt.getUTCDate() + (et.w + 6) % 7) : (wt = pp(Zl(et.y, 0, 1)), Vt = wt.getDay(), wt = Vt > 4 || Vt === 0 ? Mo.ceil(wt) : Mo(wt), wt = wa.offset(wt, (et.V - 1) * 7), et.y = wt.getFullYear(), et.m = wt.getMonth(), et.d = wt.getDate() + (et.w + 6) % 7);
      } else ("W" in et || "U" in et) && ("w" in et || (et.w = "u" in et ? et.u % 7 : "W" in et ? 1 : 0), Vt = "Z" in et ? mp(Zl(et.y, 0, 1)).getUTCDay() : pp(Zl(et.y, 0, 1)).getDay(), et.m = 0, et.d = "W" in et ? (et.w + 6) % 7 + et.W * 7 - (Vt + 5) % 7 : et.w + et.U * 7 - (Vt + 6) % 7);
      return "Z" in et ? (et.H += et.Z / 100 | 0, et.M += et.Z % 100, mp(et)) : pp(et);
    };
  }
  function H(W, ot, mt, et) {
    for (var Nt = 0, wt = ot.length, Vt = mt.length, Ft, Te; Nt < wt; ) {
      if (et >= Vt) return -1;
      if (Ft = ot.charCodeAt(Nt++), Ft === 37) {
        if (Ft = ot.charAt(Nt++), Te = A[Ft in V_ ? ot.charAt(Nt++) : Ft], !Te || (et = Te(W, mt, et)) < 0) return -1;
      } else if (Ft != mt.charCodeAt(et++)) return -1;
    }
    return et;
  }
  function z(W, ot, mt) {
    var et = p.exec(ot.slice(mt));
    return et ? (W.p = m.get(et[0].toLowerCase()), mt + et[0].length) : -1;
  }
  function G(W, ot, mt) {
    var et = y.exec(ot.slice(mt));
    return et ? (W.w = w.get(et[0].toLowerCase()), mt + et[0].length) : -1;
  }
  function V(W, ot, mt) {
    var et = b.exec(ot.slice(mt));
    return et ? (W.w = v.get(et[0].toLowerCase()), mt + et[0].length) : -1;
  }
  function lt(W, ot, mt) {
    var et = T.exec(ot.slice(mt));
    return et ? (W.m = E.get(et[0].toLowerCase()), mt + et[0].length) : -1;
  }
  function ft(W, ot, mt) {
    var et = S.exec(ot.slice(mt));
    return et ? (W.m = x.get(et[0].toLowerCase()), mt + et[0].length) : -1;
  }
  function ct(W, ot, mt) {
    return H(W, e, ot, mt);
  }
  function Y(W, ot, mt) {
    return H(W, i, ot, mt);
  }
  function q(W, ot, mt) {
    return H(W, a, ot, mt);
  }
  function ut(W) {
    return f[W.getDay()];
  }
  function nt(W) {
    return o[W.getDay()];
  }
  function P(W) {
    return d[W.getMonth()];
  }
  function C(W) {
    return s[W.getMonth()];
  }
  function B(W) {
    return u[+(W.getHours() >= 12)];
  }
  function Q(W) {
    return 1 + ~~(W.getMonth() / 3);
  }
  function K(W) {
    return f[W.getUTCDay()];
  }
  function tt(W) {
    return o[W.getUTCDay()];
  }
  function ht(W) {
    return d[W.getUTCMonth()];
  }
  function dt(W) {
    return s[W.getUTCMonth()];
  }
  function st(W) {
    return u[+(W.getUTCHours() >= 12)];
  }
  function pt(W) {
    return 1 + ~~(W.getUTCMonth() / 3);
  }
  return { format: function(W) {
    var ot = $(W += "", D);
    return ot.toString = function() {
      return W;
    }, ot;
  }, parse: function(W) {
    var ot = N(W += "", false);
    return ot.toString = function() {
      return W;
    }, ot;
  }, utcFormat: function(W) {
    var ot = $(W += "", O);
    return ot.toString = function() {
      return W;
    }, ot;
  }, utcParse: function(W) {
    var ot = N(W += "", true);
    return ot.toString = function() {
      return W;
    }, ot;
  } };
}
var V_ = { "-": "", _: " ", 0: "0" }, Me = /^\s*\d+/, H$ = /^%/, V$ = /[\\^$*+?|[\]().{}]/g;
function qt(t14, e, i) {
  var a = t14 < 0 ? "-" : "", u = (a ? -t14 : t14) + "", o = u.length;
  return a + (o < i ? new Array(i - o + 1).join(e) + u : u);
}
function j$(t14) {
  return t14.replace(V$, "\\$&");
}
function Ql(t14) {
  return new RegExp("^(?:" + t14.map(j$).join("|") + ")", "i");
}
function Kl(t14) {
  return new Map(t14.map((e, i) => [e.toLowerCase(), i]));
}
function B$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 1));
  return a ? (t14.w = +a[0], i + a[0].length) : -1;
}
function q$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 1));
  return a ? (t14.u = +a[0], i + a[0].length) : -1;
}
function k$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 2));
  return a ? (t14.U = +a[0], i + a[0].length) : -1;
}
function Y$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 2));
  return a ? (t14.V = +a[0], i + a[0].length) : -1;
}
function G$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 2));
  return a ? (t14.W = +a[0], i + a[0].length) : -1;
}
function j_(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 4));
  return a ? (t14.y = +a[0], i + a[0].length) : -1;
}
function B_(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 2));
  return a ? (t14.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), i + a[0].length) : -1;
}
function X$(t14, e, i) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(i, i + 6));
  return a ? (t14.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), i + a[0].length) : -1;
}
function F$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 1));
  return a ? (t14.q = a[0] * 3 - 3, i + a[0].length) : -1;
}
function Z$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 2));
  return a ? (t14.m = a[0] - 1, i + a[0].length) : -1;
}
function q_(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 2));
  return a ? (t14.d = +a[0], i + a[0].length) : -1;
}
function Q$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 3));
  return a ? (t14.m = 0, t14.d = +a[0], i + a[0].length) : -1;
}
function k_(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 2));
  return a ? (t14.H = +a[0], i + a[0].length) : -1;
}
function K$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 2));
  return a ? (t14.M = +a[0], i + a[0].length) : -1;
}
function P$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 2));
  return a ? (t14.S = +a[0], i + a[0].length) : -1;
}
function I$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 3));
  return a ? (t14.L = +a[0], i + a[0].length) : -1;
}
function W$(t14, e, i) {
  var a = Me.exec(e.slice(i, i + 6));
  return a ? (t14.L = Math.floor(a[0] / 1e3), i + a[0].length) : -1;
}
function J$(t14, e, i) {
  var a = H$.exec(e.slice(i, i + 1));
  return a ? i + a[0].length : -1;
}
function tz(t14, e, i) {
  var a = Me.exec(e.slice(i));
  return a ? (t14.Q = +a[0], i + a[0].length) : -1;
}
function ez(t14, e, i) {
  var a = Me.exec(e.slice(i));
  return a ? (t14.s = +a[0], i + a[0].length) : -1;
}
function Y_(t14, e) {
  return qt(t14.getDate(), e, 2);
}
function nz(t14, e) {
  return qt(t14.getHours(), e, 2);
}
function iz(t14, e) {
  return qt(t14.getHours() % 12 || 12, e, 2);
}
function rz(t14, e) {
  return qt(1 + wa.count(Bn(t14), t14), e, 3);
}
function N4(t14, e) {
  return qt(t14.getMilliseconds(), e, 3);
}
function az(t14, e) {
  return N4(t14, e) + "000";
}
function uz(t14, e) {
  return qt(t14.getMonth() + 1, e, 2);
}
function lz(t14, e) {
  return qt(t14.getMinutes(), e, 2);
}
function oz(t14, e) {
  return qt(t14.getSeconds(), e, 2);
}
function cz(t14) {
  var e = t14.getDay();
  return e === 0 ? 7 : e;
}
function fz(t14, e) {
  return qt(Ru.count(Bn(t14) - 1, t14), e, 2);
}
function $4(t14) {
  var e = t14.getDay();
  return e >= 4 || e === 0 ? ba(t14) : ba.ceil(t14);
}
function sz(t14, e) {
  return t14 = $4(t14), qt(ba.count(Bn(t14), t14) + (Bn(t14).getDay() === 4), e, 2);
}
function dz(t14) {
  return t14.getDay();
}
function hz(t14, e) {
  return qt(Mo.count(Bn(t14) - 1, t14), e, 2);
}
function pz(t14, e) {
  return qt(t14.getFullYear() % 100, e, 2);
}
function mz(t14, e) {
  return t14 = $4(t14), qt(t14.getFullYear() % 100, e, 2);
}
function gz(t14, e) {
  return qt(t14.getFullYear() % 1e4, e, 4);
}
function bz(t14, e) {
  var i = t14.getDay();
  return t14 = i >= 4 || i === 0 ? ba(t14) : ba.ceil(t14), qt(t14.getFullYear() % 1e4, e, 4);
}
function vz(t14) {
  var e = t14.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + qt(e / 60 | 0, "0", 2) + qt(e % 60, "0", 2);
}
function G_(t14, e) {
  return qt(t14.getUTCDate(), e, 2);
}
function yz(t14, e) {
  return qt(t14.getUTCHours(), e, 2);
}
function _z(t14, e) {
  return qt(t14.getUTCHours() % 12 || 12, e, 2);
}
function wz(t14, e) {
  return qt(1 + dd.count(qn(t14), t14), e, 3);
}
function z4(t14, e) {
  return qt(t14.getUTCMilliseconds(), e, 3);
}
function Sz(t14, e) {
  return z4(t14, e) + "000";
}
function xz(t14, e) {
  return qt(t14.getUTCMonth() + 1, e, 2);
}
function Mz(t14, e) {
  return qt(t14.getUTCMinutes(), e, 2);
}
function Tz(t14, e) {
  return qt(t14.getUTCSeconds(), e, 2);
}
function Ez(t14) {
  var e = t14.getUTCDay();
  return e === 0 ? 7 : e;
}
function Az(t14, e) {
  return qt(Nu.count(qn(t14) - 1, t14), e, 2);
}
function U4(t14) {
  var e = t14.getUTCDay();
  return e >= 4 || e === 0 ? va(t14) : va.ceil(t14);
}
function Oz(t14, e) {
  return t14 = U4(t14), qt(va.count(qn(t14), t14) + (qn(t14).getUTCDay() === 4), e, 2);
}
function Cz(t14) {
  return t14.getUTCDay();
}
function Dz(t14, e) {
  return qt(To.count(qn(t14) - 1, t14), e, 2);
}
function Rz(t14, e) {
  return qt(t14.getUTCFullYear() % 100, e, 2);
}
function Nz(t14, e) {
  return t14 = U4(t14), qt(t14.getUTCFullYear() % 100, e, 2);
}
function $z(t14, e) {
  return qt(t14.getUTCFullYear() % 1e4, e, 4);
}
function zz(t14, e) {
  var i = t14.getUTCDay();
  return t14 = i >= 4 || i === 0 ? va(t14) : va.ceil(t14), qt(t14.getUTCFullYear() % 1e4, e, 4);
}
function Uz() {
  return "+0000";
}
function X_() {
  return "%";
}
function F_(t14) {
  return +t14;
}
function Z_(t14) {
  return Math.floor(+t14 / 1e3);
}
var hu, Rg, Go;
Lz({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function Lz(t14) {
  return hu = L$(t14), Rg = hu.format, hu.parse, Go = hu.utcFormat, hu.utcParse, hu;
}
function Hz(t14) {
  return new Date(t14);
}
function Vz(t14) {
  return t14 instanceof Date ? +t14 : +/* @__PURE__ */ new Date(+t14);
}
function Ng(t14, e, i, a, u, o, f, s, d, p) {
  var m = d4(), b = m.invert, v = m.domain, y = p(".%L"), w = p(":%S"), S = p("%I:%M"), x = p("%I %p"), T = p("%a %d"), E = p("%b %d"), D = p("%B"), O = p("%Y");
  function A($) {
    return (d($) < $ ? y : s($) < $ ? w : f($) < $ ? S : o($) < $ ? x : a($) < $ ? u($) < $ ? T : E : i($) < $ ? D : O)($);
  }
  return m.invert = function($) {
    return new Date(b($));
  }, m.domain = function($) {
    return arguments.length ? v(Array.from($, Vz)) : v().map(Hz);
  }, m.ticks = function($) {
    var N = v();
    return t14(N[0], N[N.length - 1], $ ?? 10);
  }, m.tickFormat = function($, N) {
    return N == null ? A : p(N);
  }, m.nice = function($) {
    var N = v();
    return (!$ || typeof $.range != "function") && ($ = e(N[0], N[N.length - 1], $ ?? 10)), $ ? v(p4(N, $)) : m;
  }, m.copy = function() {
    return Lo(m, Ng(t14, e, i, a, u, o, f, s, d, p));
  }, m;
}
function jz() {
  return fi.apply(Ng(z$, U$, Bn, ko, Ru, wa, Bo, Vo, Vn, Rg).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Bz() {
  return fi.apply(Ng(N$, $$, qn, Yo, Nu, dd, qo, jo, Vn, Go).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function pd(t14, e) {
  return e.domain(t14.domain()).interpolator(t14.interpolator()).clamp(t14.clamp()).unknown(t14.unknown());
}
function md() {
  var t14 = 0, e = 0.5, i = 1, a = 1, u, o, f, s, d, p = On, m, b = false, v;
  function y(S) {
    return isNaN(S = +S) ? v : (S = 0.5 + ((S = +m(S)) - o) * (a * S < a * o ? s : d), p(b ? Math.max(0, Math.min(1, S)) : S));
  }
  y.domain = function(S) {
    return arguments.length ? ([t14, e, i] = S, u = m(t14 = +t14), o = m(e = +e), f = m(i = +i), s = u === o ? 0 : 0.5 / (o - u), d = o === f ? 0 : 0.5 / (f - o), a = o < u ? -1 : 1, y) : [t14, e, i];
  }, y.clamp = function(S) {
    return arguments.length ? (b = !!S, y) : b;
  }, y.interpolator = function(S) {
    return arguments.length ? (p = S, y) : p;
  };
  function w(S) {
    return function(x) {
      var T, E, D;
      return arguments.length ? ([T, E, D] = x, p = rd(S, [T, E, D]), y) : [p(0), p(0.5), p(1)];
    };
  }
  return y.range = w(zo), y.rangeRound = w(bg), y.unknown = function(S) {
    return arguments.length ? (v = S, y) : v;
  }, function(S) {
    return m = S, u = S(t14), o = S(e), f = S(i), s = u === o ? 0 : 0.5 / (o - u), d = o === f ? 0 : 0.5 / (f - o), a = o < u ? -1 : 1, y;
  };
}
function L4() {
  var t14 = Ho(md()(On));
  return t14.copy = function() {
    return pd(t14, L4());
  }, cd.apply(t14, arguments);
}
function H4() {
  var t14 = m4(md()).domain([0.1, 1, 10]);
  return t14.copy = function() {
    return pd(t14, H4()).base(t14.base());
  }, cd.apply(t14, arguments);
}
function V4() {
  var t14 = b4(md());
  return t14.copy = function() {
    return pd(t14, V4()).constant(t14.constant());
  }, cd.apply(t14, arguments);
}
function j4() {
  var t14 = y4(md());
  return t14.copy = function() {
    return pd(t14, j4()).exponent(t14.exponent());
  }, cd.apply(t14, arguments);
}
function Et(t14) {
  for (var e = t14.length / 6 | 0, i = new Array(e), a = 0; a < e; ) i[a] = "#" + t14.slice(a * 6, ++a * 6);
  return i;
}
const qz = Et("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), kz = Et("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Yz = Et("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Gz = Et("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Xz = Et("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Fz = Et("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Zz = Et("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Qz = Et("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Kz = Et("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Pz = Et("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), Iz = Et("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), Pt = (t14) => jD(t14[t14.length - 1]);
var B4 = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Et);
const q4 = Pt(B4);
var k4 = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Et);
const Y4 = Pt(k4);
var G4 = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Et);
const X4 = Pt(G4);
var F4 = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Et);
const Z4 = Pt(F4);
var Om = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Et);
const zs = Pt(Om);
var Q4 = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Et);
const K4 = Pt(Q4);
var Cm = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Et);
const Us = Pt(Cm);
var P4 = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Et);
const I4 = Pt(P4);
var W4 = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Et);
const J4 = Pt(W4);
var tw = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Et);
const ew = Pt(tw);
var nw = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Et);
const iw = Pt(nw);
var rw = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Et);
const aw = Pt(rw);
var uw = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Et);
const lw = Pt(uw);
var ow = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Et);
const cw = Pt(ow);
var fw = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Et);
const sw = Pt(fw);
var dw = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Et);
const hw = Pt(dw);
var pw = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Et);
const mw = Pt(pw);
var gw = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Et);
const bw = Pt(gw);
var vw = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Et);
const yw = Pt(vw);
var _w = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Et);
const ww = Pt(_w);
var Sw = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Et);
const xw = Pt(Sw);
var Mw = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Et);
const Tw = Pt(Mw);
var Ew = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Et);
const Aw = Pt(Ew);
var Ow = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Et);
const Cw = Pt(Ow);
var Dw = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Et);
const Rw = Pt(Dw);
var Nw = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Et);
const $w = Pt(Nw);
var zw = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Et);
const Uw = Pt(zw);
function Lw(t14) {
  return t14 = Math.max(0, Math.min(1, t14)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t14 * (35.34 - t14 * (2381.73 - t14 * (6402.7 - t14 * (7024.72 - t14 * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t14 * (170.73 + t14 * (52.82 - t14 * (131.46 - t14 * (176.58 - t14 * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t14 * (442.36 - t14 * (2482.43 - t14 * (6167.24 - t14 * (6614.94 - t14 * 2475.67))))))) + ")";
}
const Hw = vg(ui(300, 0.5, 0), ui(-240, 0.5, 1));
var Vw = vg(ui(-100, 0.75, 0.35), ui(80, 1.5, 0.8)), jw = vg(ui(260, 0.75, 0.35), ui(80, 1.5, 0.8)), Rf = ui();
function Bw(t14) {
  (t14 < 0 || t14 > 1) && (t14 -= Math.floor(t14));
  var e = Math.abs(t14 - 0.5);
  return Rf.h = 360 * t14 - 100, Rf.s = 1.5 - 1.5 * e, Rf.l = 0.8 - 0.9 * e, Rf + "";
}
var Nf = Er(), Wz = Math.PI / 3, Jz = Math.PI * 2 / 3;
function qw(t14) {
  var e;
  return t14 = (0.5 - t14) * Math.PI, Nf.r = 255 * (e = Math.sin(t14)) * e, Nf.g = 255 * (e = Math.sin(t14 + Wz)) * e, Nf.b = 255 * (e = Math.sin(t14 + Jz)) * e, Nf + "";
}
function kw(t14) {
  return t14 = Math.max(0, Math.min(1, t14)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t14 * (1172.33 - t14 * (10793.56 - t14 * (33300.12 - t14 * (38394.49 - t14 * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t14 * (557.33 + t14 * (1225.33 - t14 * (3574.96 - t14 * (1073.77 + t14 * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t14 * (3211.1 - t14 * (15327.97 - t14 * (27814 - t14 * (22569.18 - t14 * 6838.66))))))) + ")";
}
function gd(t14) {
  var e = t14.length;
  return function(i) {
    return t14[Math.max(0, Math.min(e - 1, Math.floor(i * e)))];
  };
}
const Yw = gd(Et("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var Gw = gd(Et("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Xw = gd(Et("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Fw = gd(Et("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function pu(t14) {
  return function() {
    return t14;
  };
}
const Zw = Math.cos, $g = Math.min, Ls = Math.sin, be = Math.sqrt, Q_ = 1e-12, Hs = Math.PI, bd = 2 * Hs;
function tU(t14) {
  let e = 3;
  return t14.digits = function(i) {
    if (!arguments.length) return e;
    if (i == null) e = null;
    else {
      const a = Math.floor(i);
      if (!(a >= 0)) throw new RangeError(`invalid digits: ${i}`);
      e = a;
    }
    return t14;
  }, () => new D5(e);
}
function eU(t14) {
  return typeof t14 == "object" && "length" in t14 ? t14 : Array.from(t14);
}
function Qw(t14) {
  this._context = t14;
}
Qw.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t14, e) {
  switch (t14 = +t14, e = +e, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t14, e) : this._context.moveTo(t14, e);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(t14, e);
      break;
  }
} };
function vd(t14) {
  return new Qw(t14);
}
function nU(t14) {
  return t14[0];
}
function iU(t14) {
  return t14[1];
}
function rU(t14, e) {
  var i = pu(true), a = null, u = vd, o = null, f = tU(s);
  t14 = typeof t14 == "function" ? t14 : t14 === void 0 ? nU : pu(t14), e = typeof e == "function" ? e : e === void 0 ? iU : pu(e);
  function s(d) {
    var p, m = (d = eU(d)).length, b, v = false, y;
    for (a == null && (o = u(y = f())), p = 0; p <= m; ++p) !(p < m && i(b = d[p], p, d)) === v && ((v = !v) ? o.lineStart() : o.lineEnd()), v && o.point(+t14(b, p, d), +e(b, p, d));
    if (y) return o = null, y + "" || null;
  }
  return s.x = function(d) {
    return arguments.length ? (t14 = typeof d == "function" ? d : pu(+d), s) : t14;
  }, s.y = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : pu(+d), s) : e;
  }, s.defined = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : pu(!!d), s) : i;
  }, s.curve = function(d) {
    return arguments.length ? (u = d, a != null && (o = u(a)), s) : u;
  }, s.context = function(d) {
    return arguments.length ? (d == null ? a = o = null : o = u(a = d), s) : a;
  }, s;
}
class Kw {
  constructor(e, i) {
    this._context = e, this._x = i;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, i) {
    switch (e = +e, i = +i, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
        break;
      }
    }
    this._x0 = e, this._y0 = i;
  }
}
function aU(t14) {
  return new Kw(t14, true);
}
function uU(t14) {
  return new Kw(t14, false);
}
const lU = be(3), Pw = { draw(t14, e) {
  const i = be(e + $g(e / 28, 0.75)) * 0.59436, a = i / 2, u = a * lU;
  t14.moveTo(0, i), t14.lineTo(0, -i), t14.moveTo(-u, -a), t14.lineTo(u, a), t14.moveTo(-u, a), t14.lineTo(u, -a);
} }, zg = { draw(t14, e) {
  const i = be(e / Hs);
  t14.moveTo(i, 0), t14.arc(0, 0, i, 0, bd);
} }, Iw = { draw(t14, e) {
  const i = be(e / 5) / 2;
  t14.moveTo(-3 * i, -i), t14.lineTo(-i, -i), t14.lineTo(-i, -3 * i), t14.lineTo(i, -3 * i), t14.lineTo(i, -i), t14.lineTo(3 * i, -i), t14.lineTo(3 * i, i), t14.lineTo(i, i), t14.lineTo(i, 3 * i), t14.lineTo(-i, 3 * i), t14.lineTo(-i, i), t14.lineTo(-3 * i, i), t14.closePath();
} }, Ww = be(1 / 3), oU = Ww * 2, Jw = { draw(t14, e) {
  const i = be(e / oU), a = i * Ww;
  t14.moveTo(0, -i), t14.lineTo(a, 0), t14.lineTo(0, i), t14.lineTo(-a, 0), t14.closePath();
} }, t8 = { draw(t14, e) {
  const i = be(e) * 0.62625;
  t14.moveTo(0, -i), t14.lineTo(i, 0), t14.lineTo(0, i), t14.lineTo(-i, 0), t14.closePath();
} }, e8 = { draw(t14, e) {
  const i = be(e - $g(e / 7, 2)) * 0.87559;
  t14.moveTo(-i, 0), t14.lineTo(i, 0), t14.moveTo(0, i), t14.lineTo(0, -i);
} }, n8 = { draw(t14, e) {
  const i = be(e), a = -i / 2;
  t14.rect(a, a, i, i);
} }, i8 = { draw(t14, e) {
  const i = be(e) * 0.4431;
  t14.moveTo(i, i), t14.lineTo(i, -i), t14.lineTo(-i, -i), t14.lineTo(-i, i), t14.closePath();
} }, cU = 0.8908130915292852, r8 = Ls(Hs / 10) / Ls(7 * Hs / 10), fU = Ls(bd / 10) * r8, sU = -Zw(bd / 10) * r8, a8 = { draw(t14, e) {
  const i = be(e * cU), a = fU * i, u = sU * i;
  t14.moveTo(0, -i), t14.lineTo(a, u);
  for (let o = 1; o < 5; ++o) {
    const f = bd * o / 5, s = Zw(f), d = Ls(f);
    t14.lineTo(d * i, -s * i), t14.lineTo(s * a - d * u, d * a + s * u);
  }
  t14.closePath();
} }, gp = be(3), u8 = { draw(t14, e) {
  const i = -be(e / (gp * 3));
  t14.moveTo(0, i * 2), t14.lineTo(-gp * i, -i), t14.lineTo(gp * i, -i), t14.closePath();
} }, dU = be(3), l8 = { draw(t14, e) {
  const i = be(e) * 0.6824, a = i / 2, u = i * dU / 2;
  t14.moveTo(0, -i), t14.lineTo(u, a), t14.lineTo(-u, a), t14.closePath();
} }, xn = -0.5, Mn = be(3) / 2, Dm = 1 / be(12), hU = (Dm / 2 + 1) * 3, o8 = { draw(t14, e) {
  const i = be(e / hU), a = i / 2, u = i * Dm, o = a, f = i * Dm + i, s = -o, d = f;
  t14.moveTo(a, u), t14.lineTo(o, f), t14.lineTo(s, d), t14.lineTo(xn * a - Mn * u, Mn * a + xn * u), t14.lineTo(xn * o - Mn * f, Mn * o + xn * f), t14.lineTo(xn * s - Mn * d, Mn * s + xn * d), t14.lineTo(xn * a + Mn * u, xn * u - Mn * a), t14.lineTo(xn * o + Mn * f, xn * f - Mn * o), t14.lineTo(xn * s + Mn * d, xn * d - Mn * s), t14.closePath();
} }, c8 = { draw(t14, e) {
  const i = be(e - $g(e / 6, 1.7)) * 0.6189;
  t14.moveTo(-i, -i), t14.lineTo(i, i), t14.moveTo(-i, i), t14.lineTo(i, -i);
} }, pU = [zg, Iw, Jw, n8, a8, u8, o8], mU = [zg, e8, c8, l8, Pw, i8, t8];
function Ar() {
}
function Vs(t14, e, i) {
  t14._context.bezierCurveTo((2 * t14._x0 + t14._x1) / 3, (2 * t14._y0 + t14._y1) / 3, (t14._x0 + 2 * t14._x1) / 3, (t14._y0 + 2 * t14._y1) / 3, (t14._x0 + 4 * t14._x1 + e) / 6, (t14._y0 + 4 * t14._y1 + i) / 6);
}
function yd(t14) {
  this._context = t14;
}
yd.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      Vs(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t14, e) {
  switch (t14 = +t14, e = +e, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t14, e) : this._context.moveTo(t14, e);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      Vs(this, t14, e);
      break;
  }
  this._x0 = this._x1, this._x1 = t14, this._y0 = this._y1, this._y1 = e;
} };
function gU(t14) {
  return new yd(t14);
}
function f8(t14) {
  this._context = t14;
}
f8.prototype = { areaStart: Ar, areaEnd: Ar, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    }
    case 2: {
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
    }
  }
}, point: function(t14, e) {
  switch (t14 = +t14, e = +e, this._point) {
    case 0:
      this._point = 1, this._x2 = t14, this._y2 = e;
      break;
    case 1:
      this._point = 2, this._x3 = t14, this._y3 = e;
      break;
    case 2:
      this._point = 3, this._x4 = t14, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t14) / 6, (this._y0 + 4 * this._y1 + e) / 6);
      break;
    default:
      Vs(this, t14, e);
      break;
  }
  this._x0 = this._x1, this._x1 = t14, this._y0 = this._y1, this._y1 = e;
} };
function bU(t14) {
  return new f8(t14);
}
function s8(t14) {
  this._context = t14;
}
s8.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t14, e) {
  switch (t14 = +t14, e = +e, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var i = (this._x0 + 4 * this._x1 + t14) / 6, a = (this._y0 + 4 * this._y1 + e) / 6;
      this._line ? this._context.lineTo(i, a) : this._context.moveTo(i, a);
      break;
    case 3:
      this._point = 4;
    default:
      Vs(this, t14, e);
      break;
  }
  this._x0 = this._x1, this._x1 = t14, this._y0 = this._y1, this._y1 = e;
} };
function vU(t14) {
  return new s8(t14);
}
function d8(t14, e) {
  this._basis = new yd(t14), this._beta = e;
}
d8.prototype = { lineStart: function() {
  this._x = [], this._y = [], this._basis.lineStart();
}, lineEnd: function() {
  var t14 = this._x, e = this._y, i = t14.length - 1;
  if (i > 0) for (var a = t14[0], u = e[0], o = t14[i] - a, f = e[i] - u, s = -1, d; ++s <= i; ) d = s / i, this._basis.point(this._beta * t14[s] + (1 - this._beta) * (a + d * o), this._beta * e[s] + (1 - this._beta) * (u + d * f));
  this._x = this._y = null, this._basis.lineEnd();
}, point: function(t14, e) {
  this._x.push(+t14), this._y.push(+e);
} };
const yU = function t6(e) {
  function i(a) {
    return e === 1 ? new yd(a) : new d8(a, e);
  }
  return i.beta = function(a) {
    return t6(+a);
  }, i;
}(0.85);
function js(t14, e, i) {
  t14._context.bezierCurveTo(t14._x1 + t14._k * (t14._x2 - t14._x0), t14._y1 + t14._k * (t14._y2 - t14._y0), t14._x2 + t14._k * (t14._x1 - e), t14._y2 + t14._k * (t14._y1 - i), t14._x2, t14._y2);
}
function Ug(t14, e) {
  this._context = t14, this._k = (1 - e) / 6;
}
Ug.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      js(this, this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t14, e) {
  switch (t14 = +t14, e = +e, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t14, e) : this._context.moveTo(t14, e);
      break;
    case 1:
      this._point = 2, this._x1 = t14, this._y1 = e;
      break;
    case 2:
      this._point = 3;
    default:
      js(this, t14, e);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
} };
const _U = function t7(e) {
  function i(a) {
    return new Ug(a, e);
  }
  return i.tension = function(a) {
    return t7(+a);
  }, i;
}(0);
function Lg(t14, e) {
  this._context = t14, this._k = (1 - e) / 6;
}
Lg.prototype = { areaStart: Ar, areaEnd: Ar, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 2: {
      this._context.lineTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      break;
    }
  }
}, point: function(t14, e) {
  switch (t14 = +t14, e = +e, this._point) {
    case 0:
      this._point = 1, this._x3 = t14, this._y3 = e;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = t14, this._y4 = e);
      break;
    case 2:
      this._point = 3, this._x5 = t14, this._y5 = e;
      break;
    default:
      js(this, t14, e);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
} };
const wU = function t9(e) {
  function i(a) {
    return new Lg(a, e);
  }
  return i.tension = function(a) {
    return t9(+a);
  }, i;
}(0);
function Hg(t14, e) {
  this._context = t14, this._k = (1 - e) / 6;
}
Hg.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t14, e) {
  switch (t14 = +t14, e = +e, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
      break;
    case 3:
      this._point = 4;
    default:
      js(this, t14, e);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
} };
const SU = function t10(e) {
  function i(a) {
    return new Hg(a, e);
  }
  return i.tension = function(a) {
    return t10(+a);
  }, i;
}(0);
function Vg(t14, e, i) {
  var a = t14._x1, u = t14._y1, o = t14._x2, f = t14._y2;
  if (t14._l01_a > Q_) {
    var s = 2 * t14._l01_2a + 3 * t14._l01_a * t14._l12_a + t14._l12_2a, d = 3 * t14._l01_a * (t14._l01_a + t14._l12_a);
    a = (a * s - t14._x0 * t14._l12_2a + t14._x2 * t14._l01_2a) / d, u = (u * s - t14._y0 * t14._l12_2a + t14._y2 * t14._l01_2a) / d;
  }
  if (t14._l23_a > Q_) {
    var p = 2 * t14._l23_2a + 3 * t14._l23_a * t14._l12_a + t14._l12_2a, m = 3 * t14._l23_a * (t14._l23_a + t14._l12_a);
    o = (o * p + t14._x1 * t14._l23_2a - e * t14._l12_2a) / m, f = (f * p + t14._y1 * t14._l23_2a - i * t14._l12_2a) / m;
  }
  t14._context.bezierCurveTo(a, u, o, f, t14._x2, t14._y2);
}
function h8(t14, e) {
  this._context = t14, this._alpha = e;
}
h8.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      this.point(this._x2, this._y2);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t14, e) {
  if (t14 = +t14, e = +e, this._point) {
    var i = this._x2 - t14, a = this._y2 - e;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + a * a, this._alpha));
  }
  switch (this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t14, e) : this._context.moveTo(t14, e);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
    default:
      Vg(this, t14, e);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
} };
const xU = function t11(e) {
  function i(a) {
    return e ? new h8(a, e) : new Ug(a, 0);
  }
  return i.alpha = function(a) {
    return t11(+a);
  }, i;
}(0.5);
function p8(t14, e) {
  this._context = t14, this._alpha = e;
}
p8.prototype = { areaStart: Ar, areaEnd: Ar, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 2: {
      this._context.lineTo(this._x3, this._y3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
      break;
    }
  }
}, point: function(t14, e) {
  if (t14 = +t14, e = +e, this._point) {
    var i = this._x2 - t14, a = this._y2 - e;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + a * a, this._alpha));
  }
  switch (this._point) {
    case 0:
      this._point = 1, this._x3 = t14, this._y3 = e;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = t14, this._y4 = e);
      break;
    case 2:
      this._point = 3, this._x5 = t14, this._y5 = e;
      break;
    default:
      Vg(this, t14, e);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
} };
const MU = function t12(e) {
  function i(a) {
    return e ? new p8(a, e) : new Lg(a, 0);
  }
  return i.alpha = function(a) {
    return t12(+a);
  }, i;
}(0.5);
function m8(t14, e) {
  this._context = t14, this._alpha = e;
}
m8.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t14, e) {
  if (t14 = +t14, e = +e, this._point) {
    var i = this._x2 - t14, a = this._y2 - e;
    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + a * a, this._alpha));
  }
  switch (this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
      break;
    case 3:
      this._point = 4;
    default:
      Vg(this, t14, e);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t14, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
} };
const TU = function t13(e) {
  function i(a) {
    return e ? new m8(a, e) : new Hg(a, 0);
  }
  return i.alpha = function(a) {
    return t13(+a);
  }, i;
}(0.5);
function g8(t14) {
  this._context = t14;
}
g8.prototype = { areaStart: Ar, areaEnd: Ar, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(t14, e) {
  t14 = +t14, e = +e, this._point ? this._context.lineTo(t14, e) : (this._point = 1, this._context.moveTo(t14, e));
} };
function EU(t14) {
  return new g8(t14);
}
function K_(t14) {
  return t14 < 0 ? -1 : 1;
}
function P_(t14, e, i) {
  var a = t14._x1 - t14._x0, u = e - t14._x1, o = (t14._y1 - t14._y0) / (a || u < 0 && -0), f = (i - t14._y1) / (u || a < 0 && -0), s = (o * u + f * a) / (a + u);
  return (K_(o) + K_(f)) * Math.min(Math.abs(o), Math.abs(f), 0.5 * Math.abs(s)) || 0;
}
function I_(t14, e) {
  var i = t14._x1 - t14._x0;
  return i ? (3 * (t14._y1 - t14._y0) / i - e) / 2 : e;
}
function bp(t14, e, i) {
  var a = t14._x0, u = t14._y0, o = t14._x1, f = t14._y1, s = (o - a) / 3;
  t14._context.bezierCurveTo(a + s, u + s * e, o - s, f - s * i, o, f);
}
function Bs(t14) {
  this._context = t14;
}
Bs.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      bp(this, this._t0, I_(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t14, e) {
  var i = NaN;
  if (t14 = +t14, e = +e, !(t14 === this._x1 && e === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t14, e) : this._context.moveTo(t14, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, bp(this, I_(this, i = P_(this, t14, e)), i);
        break;
      default:
        bp(this, this._t0, i = P_(this, t14, e));
        break;
    }
    this._x0 = this._x1, this._x1 = t14, this._y0 = this._y1, this._y1 = e, this._t0 = i;
  }
} };
function b8(t14) {
  this._context = new v8(t14);
}
(b8.prototype = Object.create(Bs.prototype)).point = function(t14, e) {
  Bs.prototype.point.call(this, e, t14);
};
function v8(t14) {
  this._context = t14;
}
v8.prototype = { moveTo: function(t14, e) {
  this._context.moveTo(e, t14);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(t14, e) {
  this._context.lineTo(e, t14);
}, bezierCurveTo: function(t14, e, i, a, u, o) {
  this._context.bezierCurveTo(e, t14, a, i, o, u);
} };
function AU(t14) {
  return new Bs(t14);
}
function OU(t14) {
  return new b8(t14);
}
function y8(t14) {
  this._context = t14;
}
y8.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var t14 = this._x, e = this._y, i = t14.length;
  if (i) if (this._line ? this._context.lineTo(t14[0], e[0]) : this._context.moveTo(t14[0], e[0]), i === 2) this._context.lineTo(t14[1], e[1]);
  else for (var a = W_(t14), u = W_(e), o = 0, f = 1; f < i; ++o, ++f) this._context.bezierCurveTo(a[0][o], u[0][o], a[1][o], u[1][o], t14[f], e[f]);
  (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(t14, e) {
  this._x.push(+t14), this._y.push(+e);
} };
function W_(t14) {
  var e, i = t14.length - 1, a, u = new Array(i), o = new Array(i), f = new Array(i);
  for (u[0] = 0, o[0] = 2, f[0] = t14[0] + 2 * t14[1], e = 1; e < i - 1; ++e) u[e] = 1, o[e] = 4, f[e] = 4 * t14[e] + 2 * t14[e + 1];
  for (u[i - 1] = 2, o[i - 1] = 7, f[i - 1] = 8 * t14[i - 1] + t14[i], e = 1; e < i; ++e) a = u[e] / o[e - 1], o[e] -= a, f[e] -= a * f[e - 1];
  for (u[i - 1] = f[i - 1] / o[i - 1], e = i - 2; e >= 0; --e) u[e] = (f[e] - u[e + 1]) / o[e];
  for (o[i - 1] = (t14[i] + u[i - 1]) / 2, e = 0; e < i - 1; ++e) o[e] = 2 * t14[e + 1] - u[e + 1];
  return [u, o];
}
function CU(t14) {
  return new y8(t14);
}
function _d(t14, e) {
  this._context = t14, this._t = e;
}
_d.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(t14, e) {
  switch (t14 = +t14, e = +e, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t14, e) : this._context.moveTo(t14, e);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t14, e);
      else {
        var i = this._x * (1 - this._t) + t14 * this._t;
        this._context.lineTo(i, this._y), this._context.lineTo(i, e);
      }
      break;
    }
  }
  this._x = t14, this._y = e;
} };
function DU(t14) {
  return new _d(t14, 0.5);
}
function RU(t14) {
  return new _d(t14, 0);
}
function NU(t14) {
  return new _d(t14, 1);
}
function uo(t14, e, i) {
  this.k = t14, this.x = e, this.y = i;
}
uo.prototype = { constructor: uo, scale: function(t14) {
  return t14 === 1 ? this : new uo(this.k * t14, this.x, this.y);
}, translate: function(t14, e) {
  return t14 === 0 & e === 0 ? this : new uo(this.k, this.x + this.k * t14, this.y + this.k * e);
}, apply: function(t14) {
  return [t14[0] * this.k + this.x, t14[1] * this.k + this.y];
}, applyX: function(t14) {
  return t14 * this.k + this.x;
}, applyY: function(t14) {
  return t14 * this.k + this.y;
}, invert: function(t14) {
  return [(t14[0] - this.x) / this.k, (t14[1] - this.y) / this.k];
}, invertX: function(t14) {
  return (t14 - this.x) / this.k;
}, invertY: function(t14) {
  return (t14 - this.y) / this.k;
}, rescaleX: function(t14) {
  return t14.copy().domain(t14.range().map(this.invertX, this).map(t14.invert, t14));
}, rescaleY: function(t14) {
  return t14.copy().domain(t14.range().map(this.invertY, this).map(t14.invert, t14));
}, toString: function() {
  return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
} };
uo.prototype;
function Or(t14) {
  return t14 != null && !Number.isNaN(t14);
}
function $u(t14, e) {
  return +Or(e) - +Or(t14) || xr(t14, e);
}
function Rm(t14, e) {
  return +Or(e) - +Or(t14) || Ro(t14, e);
}
function jg(t14) {
  return t14 != null && `${t14}` != "";
}
function _8(t14) {
  return isFinite(t14) ? t14 : NaN;
}
function Bg(t14) {
  return t14 > 0 && isFinite(t14) ? t14 : NaN;
}
function w8(t14) {
  return t14 < 0 && isFinite(t14) ? t14 : NaN;
}
function $U(t14, e) {
  if (t14 instanceof Date || (t14 = /* @__PURE__ */ new Date(+t14)), isNaN(t14)) return e;
  const i = t14.getUTCHours(), a = t14.getUTCMinutes(), u = t14.getUTCSeconds(), o = t14.getUTCMilliseconds();
  return `${zU(t14.getUTCFullYear())}-${Ui(t14.getUTCMonth() + 1, 2)}-${Ui(t14.getUTCDate(), 2)}${i || a || u || o ? `T${Ui(i, 2)}:${Ui(a, 2)}${u || o ? `:${Ui(u, 2)}${o ? `.${Ui(o, 3)}` : ""}` : ""}Z` : ""}`;
}
function zU(t14) {
  return t14 < 0 ? `-${Ui(-t14, 6)}` : t14 > 9999 ? `+${Ui(t14, 6)}` : Ui(t14, 4);
}
function Ui(t14, e) {
  return `${t14}`.padStart(e, "0");
}
const UU = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function S8(t14, e) {
  return UU.test(t14 += "") ? new Date(t14) : e;
}
function zu(t14) {
  if (t14 == null) return;
  const e = t14[0], i = t14[t14.length - 1];
  return Ro(e, i);
}
const vu = 1e3, wr = vu * 60, Sr = wr * 60, li = Sr * 24, Pn = li * 7, ca = li * 30, _r = li * 365, vp = [["millisecond", 1], ["2 milliseconds", 2], ["5 milliseconds", 5], ["10 milliseconds", 10], ["20 milliseconds", 20], ["50 milliseconds", 50], ["100 milliseconds", 100], ["200 milliseconds", 200], ["500 milliseconds", 500], ["second", vu], ["5 seconds", 5 * vu], ["15 seconds", 15 * vu], ["30 seconds", 30 * vu], ["minute", wr], ["5 minutes", 5 * wr], ["15 minutes", 15 * wr], ["30 minutes", 30 * wr], ["hour", Sr], ["3 hours", 3 * Sr], ["6 hours", 6 * Sr], ["12 hours", 12 * Sr], ["day", li], ["2 days", 2 * li], ["week", Pn], ["2 weeks", 2 * Pn], ["month", ca], ["3 months", 3 * ca], ["6 months", 6 * ca], ["year", _r], ["2 years", 2 * _r], ["5 years", 5 * _r], ["10 years", 10 * _r], ["20 years", 20 * _r], ["50 years", 50 * _r], ["100 years", 100 * _r]], qg = /* @__PURE__ */ new Map([["second", vu], ["minute", wr], ["hour", Sr], ["day", li], ["monday", Pn], ["tuesday", Pn], ["wednesday", Pn], ["thursday", Pn], ["friday", Pn], ["saturday", Pn], ["sunday", Pn], ["week", Pn], ["month", ca], ["year", _r]]), x8 = /* @__PURE__ */ new Map([["second", Vn], ["minute", Vo], ["hour", Bo], ["day", wa], ["monday", Mo], ["tuesday", x4], ["wednesday", M4], ["thursday", ba], ["friday", T4], ["saturday", E4], ["sunday", Ru], ["week", Ru], ["month", ko], ["year", Bn]]), kg = /* @__PURE__ */ new Map([["second", Vn], ["minute", jo], ["hour", qo], ["day", hd], ["monday", To], ["tuesday", A4], ["wednesday", O4], ["thursday", va], ["friday", C4], ["saturday", D4], ["sunday", Nu], ["week", Nu], ["month", Yo], ["year", qn]]), Xo = Symbol("intervalDuration"), wd = Symbol("intervalType");
for (const [t14, e] of x8) e[Xo] = qg.get(t14), e[wd] = "time";
for (const [t14, e] of kg) e[Xo] = qg.get(t14), e[wd] = "utc";
const lo = [["year", qn, "utc"], ["month", Yo, "utc"], ["day", hd, "utc", 6 * ca], ["hour", qo, "utc", 3 * li], ["minute", jo, "utc", 6 * Sr], ["second", Vn, "utc", 30 * wr]], If = [["year", Bn, "time"], ["month", ko, "time"], ["day", wa, "time", 6 * ca], ["hour", Bo, "time", 3 * li], ["minute", Vo, "time", 6 * Sr], ["second", Vn, "time", 30 * wr]], LU = [lo[0], If[0], lo[1], If[1], lo[2], If[2], ...lo.slice(3)];
function M8(t14) {
  let e = `${t14}`.toLowerCase();
  e.endsWith("s") && (e = e.slice(0, -1));
  let i = 1;
  const a = /^(?:(\d+)\s+)/.exec(e);
  switch (a && (e = e.slice(a[0].length), i = +a[1]), e) {
    case "quarter":
      e = "month", i *= 3;
      break;
    case "half":
      e = "month", i *= 6;
      break;
  }
  let u = kg.get(e);
  if (!u) throw new Error(`unknown interval: ${t14}`);
  if (i > 1 && !u.every) throw new Error(`non-periodic interval: ${e}`);
  return [e, i];
}
function T8(t14) {
  return A8(M8(t14), "time");
}
function E8(t14) {
  return A8(M8(t14), "utc");
}
function A8([t14, e], i) {
  let a = (i === "time" ? x8 : kg).get(t14);
  return e > 1 && (a = a.every(e), a[Xo] = qg.get(t14) * e, a[wd] = i), a;
}
function J_(t14, e) {
  if (!(e > 1)) return;
  const i = t14[Xo];
  if (!vp.some(([, u]) => u === i) || i % li === 0 && li < i && i < ca) return;
  const [a] = vp[Ws(([, u]) => Math.log(u)).center(vp, Math.log(i * e))];
  return (t14[wd] === "time" ? T8 : E8)(a);
}
function t62(t14, e, i) {
  const a = e === "time" ? Rg : Go;
  if (i == null) return a(t14 === "year" ? "%Y" : t14 === "month" ? "%Y-%m" : t14 === "day" ? "%Y-%m-%d" : t14 === "hour" || t14 === "minute" ? "%Y-%m-%dT%H:%M" : t14 === "second" ? "%Y-%m-%dT%H:%M:%S" : "%Y-%m-%dT%H:%M:%S.%L");
  const u = HU(i);
  switch (t14) {
    case "millisecond":
      return mu(a(".%L"), a(":%M:%S"), u);
    case "second":
      return mu(a(":%S"), a("%-I:%M"), u);
    case "minute":
      return mu(a("%-I:%M"), a("%p"), u);
    case "hour":
      return mu(a("%-I %p"), a("%b %-d"), u);
    case "day":
      return mu(a("%-d"), a("%b"), u);
    case "month":
      return mu(a("%b"), a("%Y"), u);
    case "year":
      return a("%Y");
  }
  throw new Error("unable to format time ticks");
}
function HU(t14) {
  return t14 === "left" || t14 === "right" ? (e, i) => `
${e}
${i}` : t14 === "top" ? (e, i) => `${i}
${e}` : (e, i) => `${e}
${i}`;
}
function VU(t14) {
  return t14 === "time" ? If : t14 === "utc" ? lo : LU;
}
function jU(t14, e, i) {
  const a = ai(OO(e, (u, o) => Math.abs(o - u)));
  if (a < 1e3) return t62("millisecond", "utc", i);
  for (const [u, o, f, s] of VU(t14)) {
    if (a > s || u === "hour" && !a) break;
    if (e.every((d) => o.floor(d) >= d)) return t62(u, f, i);
  }
}
function mu(t14, e, i) {
  return (a, u, o) => {
    const f = t14(a, u), s = e(a, u), d = u - zu(o);
    return u !== d && o[d] !== void 0 && s === e(o[d], d) ? f : i(f, s);
  };
}
const Yg = Object.getPrototypeOf(Uint8Array), BU = Object.prototype.toString;
function Fo(t14) {
  return t14 instanceof Array || t14 instanceof Yg;
}
function O8(t14) {
  return t14 instanceof Yg && !qU(t14);
}
function C8(t14) {
  return (t14 == null ? void 0 : t14.prototype) instanceof Yg && !kU(t14);
}
function qU(t14) {
  return t14 instanceof BigInt64Array || t14 instanceof BigUint64Array;
}
function kU(t14) {
  return t14 === BigInt64Array || t14 === BigUint64Array;
}
const YU = Symbol("reindex");
function Cr(t14, e, i) {
  const a = typeof e;
  return a === "string" ? H8(t14) ? Gg(t14.getChild(e), i) : e6(t14, XU(e), i) : a === "function" ? e6(t14, e, i) : a === "number" || e instanceof Date || a === "boolean" ? Be(t14, Bi(e), i) : typeof (e == null ? void 0 : e.transform) == "function" ? Nm(e.transform(t14), i) : GU(Nm(e, i), t14 == null ? void 0 : t14[YU]);
}
function GU(t14, e) {
  return t14 != null && e ? Qg(t14, e) : t14;
}
function e6(t14, e, i) {
  return Be(t14, C8(i) ? (a, u) => Xg(e(a, u)) : e, i);
}
function Nm(t14, e) {
  return e === void 0 ? Ma(t14) : V8(t14) ? Gg(t14, e) : t14 instanceof e ? t14 : e.from(t14, C8(e) && !O8(t14) ? Xg : void 0);
}
function Gg(t14, e) {
  return t14 == null ? t14 : (e === void 0 || e === Array) && dL(t14.type) ? R8(n6(t14)) : Nm(n6(t14), e);
}
function n6(t14) {
  return t14.nullCount ? t14.toJSON() : t14.toArray();
}
const Wf = [null], XU = (t14) => (e) => {
  var _a2;
  const i = e[t14];
  return i === void 0 && e.type === "Feature" ? (_a2 = e.properties) == null ? void 0 : _a2[t14] : i;
}, FU = { transform: Zo }, Qi = { transform: (t14) => t14 }, ZU = () => true, He = (t14) => t14 == null ? t14 : `${t14}`, je = (t14) => t14 == null ? t14 : +t14, D8 = (t14) => t14 ? t14[0] : void 0, QU = (t14) => t14 ? t14[1] : void 0, Bi = (t14) => () => t14;
function KU(t14) {
  const e = +`${t14}`.slice(1) / 100;
  return (i, a) => ss(i, e, a);
}
function qs(t14) {
  return O8(t14) ? t14 : Be(t14, Xg, Float64Array);
}
function Xg(t14) {
  return t14 == null ? NaN : Number(t14);
}
function R8(t14) {
  return Be(t14, PU);
}
function PU(t14) {
  return t14 instanceof Date && !isNaN(t14) ? t14 : typeof t14 == "string" ? S8(t14) : t14 == null || isNaN(t14 = Number(t14)) ? void 0 : new Date(t14);
}
function ya(t14, e) {
  return t14 === void 0 && (t14 = e), t14 === null ? [void 0, "none"] : Md(t14) ? [void 0, t14] : [t14, void 0];
}
function un(t14, e) {
  return t14 === void 0 && (t14 = e), t14 === null || typeof t14 == "number" ? [void 0, t14] : [t14, void 0];
}
function N8(t14, e, i) {
  if (t14 != null) return Yn(t14, e, i);
}
function Yn(t14, e, i) {
  const a = `${t14}`.toLowerCase();
  if (!i.includes(a)) throw new Error(`invalid ${e}: ${t14}`);
  return a;
}
function Uu(t14) {
  return H8(t14) ? t14 : Ma(t14);
}
function Ma(t14) {
  if (t14 == null || Fo(t14)) return t14;
  if (V8(t14)) return Gg(t14);
  if ($8(t14)) switch (t14.type) {
    case "FeatureCollection":
      return t14.features;
    case "GeometryCollection":
      return t14.geometries;
    default:
      return [t14];
  }
  return Array.from(t14);
}
function $8(t14) {
  switch (t14 == null ? void 0 : t14.type) {
    case "FeatureCollection":
    case "GeometryCollection":
    case "Feature":
    case "LineString":
    case "MultiLineString":
    case "MultiPoint":
    case "MultiPolygon":
    case "Point":
    case "Polygon":
    case "Sphere":
      return true;
    default:
      return false;
  }
}
function Be(t14, e, i = Array) {
  return t14 == null ? t14 : t14 instanceof i ? t14.map(e) : i.from(t14, e);
}
function $m(t14, e = Array) {
  return t14 instanceof e ? t14.slice() : e.from(t14);
}
function Ta(t14) {
  return (t14 == null ? void 0 : t14.toString) === BU;
}
function zm(t14) {
  return Ta(t14) && (t14.type !== void 0 || t14.domain !== void 0);
}
function Fg(t14) {
  return Ta(t14) && typeof t14.transform != "function";
}
function Eo(t14) {
  return Fg(t14) && t14.value === void 0 && t14.channel === void 0;
}
function Zg(t14, e) {
  return t14 === void 0 && e === void 0 ? [D8, QU] : [t14, e];
}
function IU({ z: t14, fill: e, stroke: i } = {}) {
  return t14 === void 0 && ([t14] = ya(e)), t14 === void 0 && ([t14] = ya(i)), t14;
}
function Um(t14) {
  return Fo(t14) ? t14.length : t14 == null ? void 0 : t14.numRows;
}
function Zo(t14) {
  const e = Um(t14), i = new Uint32Array(e);
  for (let a = 0; a < e; ++a) i[a] = a;
  return i;
}
function Qg(t14, e) {
  return Fo(t14) ? Be(e, (i) => t14[i], t14.constructor) : Be(e, (i) => t14.at(i));
}
function WU(t14, e, i) {
  return t14.subarray ? t14.subarray(e, i) : t14.slice(e, i);
}
function qi(t14) {
  return t14 !== null && typeof t14 == "object" ? t14.valueOf() : t14;
}
function Sd(t14, e) {
  return typeof t14 == "string" ? t14 : t14 && t14.label !== void 0 ? t14.label : e;
}
function JU(t14, e) {
  const i = Kg(t14, e);
  return i && ((a) => Or(a) ? i.floor(a) : a);
}
function Kg(t14, e) {
  if (t14 != null) {
    if (typeof t14 == "number") return tL(t14);
    if (typeof t14 == "string") return (e === "time" ? T8 : E8)(t14);
    if (typeof t14.floor != "function") throw new Error("invalid interval; missing floor method");
    if (typeof t14.offset != "function") throw new Error("invalid interval; missing offset method");
    return t14;
  }
}
function tL(t14) {
  t14 = +t14, 0 < t14 && t14 < 1 && Number.isInteger(1 / t14) && (t14 = -1 / t14);
  const e = Math.abs(t14);
  return t14 < 0 ? { floor: (i) => Math.floor(i * e) / e, offset: (i, a = 1) => (i * e + Math.floor(a)) / e, range: (i, a) => Ip(Math.ceil(i * e), a * e).map((u) => u / e) } : { floor: (i) => Math.floor(i / e) * e, offset: (i, a = 1) => i + e * Math.floor(a), range: (i, a) => Ip(Math.ceil(i / e), a / e).map((u) => u * e) };
}
function Qo(t14, e) {
  if (t14 = Kg(t14, e), t14 && typeof t14.range != "function") throw new Error("invalid interval: missing range method");
  return t14;
}
function eL(t14, e) {
  if (t14 = Qo(t14, e), t14 && typeof t14.ceil != "function") throw new Error("invalid interval: missing ceil method");
  return t14;
}
function nL(t14) {
  return typeof (t14 == null ? void 0 : t14.range) == "function";
}
function xd(t14) {
  return t14 === void 0 || Fg(t14) ? t14 : { value: t14 };
}
function iL(t14) {
  return t14 == null ? null : { transform: (e) => Cr(e, t14, Float64Array), label: Sd(t14) };
}
function Ea(t14) {
  return t14 && typeof t14[Symbol.iterator] == "function";
}
function z8(t14) {
  for (const e of t14) if (e != null) return typeof e != "object" || e instanceof Date;
}
function i6(t14) {
  for (const e of t14) {
    if (e == null) continue;
    const i = typeof e;
    return i === "string" || i === "boolean";
  }
}
function oi(t14) {
  for (const e of t14) if (e != null) return e instanceof Date;
}
function rL(t14) {
  for (const e of t14) if (e != null) return typeof e == "string" && isNaN(e) && S8(e);
}
function aL(t14) {
  for (const e of t14) if (e != null) {
    if (typeof e != "string") return false;
    if (e.trim()) return !isNaN(e);
  }
}
function uL(t14) {
  for (const e of t14) if (e != null) return typeof e == "number";
}
function yp(t14, e) {
  let i;
  for (const a of t14) if (a != null) {
    if (!e(a)) return false;
    i = true;
  }
  return i;
}
const lL = new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(","));
function Md(t14) {
  return typeof t14 != "string" ? false : (t14 = t14.toLowerCase().trim(), /^#[0-9a-f]{3,8}$/.test(t14) || /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(t14) || lL.has(t14));
}
function oL(t14) {
  return typeof t14 == "number" && (0 <= t14 && t14 <= 1 || isNaN(t14));
}
function Ke(t14) {
  return t14 == null || Ao(t14);
}
function Ao(t14) {
  return /^\s*none\s*$/i.test(t14);
}
function cL(t14) {
  return /^\s*round\s*$/i.test(t14);
}
function Lm(t14, e) {
  return N8(t14, e, ["middle", "top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"]);
}
function Pg(t14 = "middle") {
  return Lm(t14, "frameAnchor");
}
function fL(t14 = {}, ...e) {
  let i = t14;
  for (const a of e) for (const u in a) if (i[u] === void 0) {
    const o = a[u];
    i === t14 ? i = { ...i, [u]: o } : i[u] = o;
  }
  return i;
}
function sL(t14) {
  console.warn("named iterables are deprecated; please use an object instead");
  const e = /* @__PURE__ */ new Set();
  return Object.fromEntries(Array.from(t14, (i) => {
    const { name: a } = i;
    if (a == null) throw new Error("missing name");
    const u = `${a}`;
    if (u === "__proto__") throw new Error(`illegal name: ${u}`);
    if (e.has(u)) throw new Error(`duplicate name: ${u}`);
    return e.add(u), [a, i];
  }));
}
function U8(t14) {
  return Ea(t14) ? sL(t14) : t14;
}
function L8(t14) {
  return t14 === true ? t14 = "frame" : t14 === false ? t14 = null : !$8(t14) && t14 != null && (t14 = Yn(t14, "clip", ["frame", "sphere"]), t14 === "sphere" && (t14 = { type: "Sphere" })), t14;
}
function H8(t14) {
  return t14 && typeof t14.getChild == "function" && typeof t14.toArray == "function" && t14.schema && Array.isArray(t14.schema.fields);
}
function V8(t14) {
  return t14 && typeof t14.toArray == "function" && t14.type;
}
function dL(t14) {
  return t14 && (t14.typeId === 8 || t14.typeId === 10) && t14.unit === 1;
}
const ei = Symbol("position"), Ki = Symbol("color"), Ko = Symbol("radius"), Po = Symbol("length"), Io = Symbol("opacity"), Td = Symbol("symbol"), j8 = Symbol("projection"), le = /* @__PURE__ */ new Map([["x", ei], ["y", ei], ["fx", ei], ["fy", ei], ["r", Ko], ["color", Ki], ["opacity", Io], ["symbol", Td], ["length", Po], ["projection", j8]]);
function hL(t14) {
  return t14 === ei || t14 === j8;
}
function pL(t14) {
  return t14 === ei || t14 === Ko || t14 === Po || t14 === Io;
}
const mL = Math.sqrt(3), gL = 2 / mL, bL = { draw(t14, e) {
  const i = Math.sqrt(e / Math.PI), a = i * gL, u = a / 2;
  t14.moveTo(0, a), t14.lineTo(i, u), t14.lineTo(i, -u), t14.lineTo(0, -a), t14.lineTo(-i, -u), t14.lineTo(-i, u), t14.closePath();
} }, B8 = /* @__PURE__ */ new Map([["asterisk", Pw], ["circle", zg], ["cross", Iw], ["diamond", Jw], ["diamond2", t8], ["hexagon", bL], ["plus", e8], ["square", n8], ["square2", i8], ["star", a8], ["times", c8], ["triangle", u8], ["triangle2", l8], ["wye", o8]]);
function q8(t14) {
  return t14 && typeof t14.draw == "function";
}
function vL(t14) {
  return q8(t14) ? true : typeof t14 != "string" ? false : B8.has(t14.toLowerCase());
}
function Ig(t14) {
  if (t14 == null || q8(t14)) return t14;
  const e = B8.get(`${t14}`.toLowerCase());
  if (e) return e;
  throw new Error(`invalid symbol: ${t14}`);
}
function yL({ filter: t14, sort: e, reverse: i, transform: a, initializer: u, ...o } = {}, f) {
  return a === void 0 && (t14 != null && (a = k8(t14)), e != null && !Eo(e) && (a = _p(a, G8(e))), i && (a = _p(a, Y8))), { ...o, ...(e === null || Eo(e)) && { sort: e }, transform: _p(a, f) };
}
function ks({ filter: t14, sort: e, reverse: i, initializer: a, ...u } = {}, o) {
  return a === void 0 && (t14 != null && (a = k8(t14)), e != null && !Eo(e) && (a = wp(a, G8(e))), i && (a = wp(a, Y8))), { ...u, ...(e === null || Eo(e)) && { sort: e }, initializer: wp(a, o) };
}
function _p(t14, e) {
  return t14 == null ? e === null ? void 0 : e : e == null ? t14 === null ? void 0 : t14 : function(i, a, u) {
    return { data: i, facets: a } = t14.call(this, i, a, u), e.call(this, Uu(i), a, u);
  };
}
function wp(t14, e) {
  return t14 == null ? e === null ? void 0 : e : e == null ? t14 === null ? void 0 : t14 : function(i, a, u, ...o) {
    let f, s, d, p, m, b;
    return { data: s = i, facets: d = a, channels: f } = t14.call(this, i, a, u, ...o), { data: m = s, facets: b = d, channels: p } = e.call(this, s, d, { ...u, ...f }, ...o), { data: m, facets: b, channels: { ...f, ...p } };
  };
}
function k8(t14) {
  return (e, i) => {
    const a = Cr(e, t14);
    return { data: e, facets: i.map((u) => u.filter((o) => a[o])) };
  };
}
function Y8(t14, e) {
  return { data: t14, facets: e.map((i) => i.slice().reverse()) };
}
function G8(t14) {
  return (typeof t14 == "function" && t14.length !== 1 ? _L : wL)(t14);
}
function _L(t14) {
  return (e, i) => {
    const a = Fo(e) ? (u, o) => t14(e[u], e[o]) : (u, o) => t14(e.get(u), e.get(o));
    return { data: e, facets: i.map((u) => u.slice().sort(a)) };
  };
}
function wL(t14) {
  let e, i;
  ({ channel: e, value: t14, order: i } = { ...xd(t14) });
  const a = e == null ? void 0 : e.startsWith("-");
  if (a && (e = e.slice(1)), i === void 0 && (i = a ? Rm : $u), typeof i != "function") switch (`${i}`.toLowerCase()) {
    case "ascending":
      i = $u;
      break;
    case "descending":
      i = Rm;
      break;
    default:
      throw new Error(`invalid order: ${i}`);
  }
  return (u, o, f) => {
    let s;
    if (e === void 0) s = Cr(u, t14);
    else {
      if (f === void 0) throw new Error("channel sort requires an initializer");
      if (s = f[e], !s) return {};
      s = s.value;
    }
    const d = (p, m) => i(s[p], s[m]);
    return { data: u, facets: o.map((p) => p.slice().sort(d)) };
  };
}
function SL(t14, e, i = xL) {
  if (t14 == null) return i(t14);
  if (typeof t14.reduceIndex == "function") return t14;
  if (typeof t14.reduce == "function" && Ta(t14)) return ML(t14);
  if (typeof t14 == "function") return TL(t14);
  if (/^p\d{2}$/i.test(t14)) return zi(KU(t14));
  switch (`${t14}`.toLowerCase()) {
    case "first":
      return AL;
    case "last":
      return OL;
    case "identity":
      return EL;
    case "count":
      return a6;
    case "distinct":
      return CL;
    case "sum":
      return e == null ? a6 : DL;
    case "proportion":
      return u6(e, "data");
    case "proportion-facet":
      return u6(e, "facet");
    case "deviation":
      return zi(pO);
    case "min":
      return zi(bo);
    case "min-index":
      return zi(xO);
    case "max":
      return zi(ai);
    case "max-index":
      return zi(SO);
    case "mean":
      return r6(TO);
    case "median":
      return r6(Pp);
    case "variance":
      return zi(q3);
    case "mode":
      return zi(AO);
  }
  return i(t14);
}
function xL(t14) {
  throw new Error(`invalid reduce: ${t14}`);
}
function ML(t14) {
  return console.warn("deprecated reduce interface; implement reduceIndex instead."), { ...t14, reduceIndex: t14.reduce.bind(t14) };
}
function TL(t14) {
  return { reduceIndex(e, i, a) {
    return t14(Qg(i, e), a);
  } };
}
function zi(t14) {
  return { reduceIndex(e, i) {
    return t14(e, (a) => i[a]);
  } };
}
function r6(t14) {
  return { reduceIndex(e, i) {
    const a = t14(e, (u) => i[u]);
    return oi(i) ? new Date(a) : a;
  } };
}
const EL = { reduceIndex(t14, e) {
  return Qg(e, t14);
} }, AL = { reduceIndex(t14, e) {
  return e[t14[0]];
} }, OL = { reduceIndex(t14, e) {
  return e[t14[t14.length - 1]];
} }, a6 = { label: "Frequency", reduceIndex(t14) {
  return t14.length;
} }, CL = { label: "Distinct", reduceIndex(t14, e) {
  const i = new Js();
  for (const a of t14) i.add(e[a]);
  return i.size;
} }, DL = zi(fg);
function u6(t14, e) {
  return t14 == null ? { scope: e, label: "Frequency", reduceIndex: (i, a, u = 1) => i.length / u } : { scope: e, reduceIndex: (i, a, u = 1) => fg(i, (o) => a[o]) / u };
}
function Oo(t14, { scale: e, type: i, value: a, filter: u, hint: o, label: f = Sd(a) }, s) {
  return o === void 0 && typeof (a == null ? void 0 : a.transform) == "function" && (o = a.hint), X8(s, { scale: e, type: i, value: Cr(t14, a), label: f, filter: u, hint: o });
}
function RL(t14, e) {
  return Object.fromEntries(Object.entries(t14).map(([i, a]) => [i, Oo(e, a, i)]));
}
function NL(t14, e) {
  const i = Object.fromEntries(Object.entries(t14).map(([a, { scale: u, value: o }]) => {
    const f = u == null ? null : e[u];
    return [a, f == null ? o : Be(o, f)];
  }));
  return i.channels = t14, i;
}
function X8(t14, e) {
  const { scale: i, value: a } = e;
  if (i === true || i === "auto") switch (t14) {
    case "fill":
    case "stroke":
    case "color":
      e.scale = i !== true && yp(a, Md) ? null : "color", e.defaultScale = "color";
      break;
    case "fillOpacity":
    case "strokeOpacity":
    case "opacity":
      e.scale = i !== true && yp(a, oL) ? null : "opacity", e.defaultScale = "opacity";
      break;
    case "symbol":
      i !== true && yp(a, vL) ? (e.scale = null, e.value = Be(a, Ig)) : e.scale = "symbol", e.defaultScale = "symbol";
      break;
    default:
      e.scale = le.has(t14) ? t14 : null;
      break;
  }
  else if (i === false) e.scale = null;
  else if (i != null && !le.has(i)) throw new Error(`unknown scale: ${i}`);
  return e;
}
function $L(t14, e, i, a, u) {
  const { order: o, reverse: f, reduce: s = true, limit: d } = u;
  for (const p in u) {
    if (!le.has(p)) continue;
    let { value: m, order: b = o, reverse: v = f, reduce: y = s, limit: w = d } = xd(u[p]);
    const S = m == null ? void 0 : m.startsWith("-");
    if (S && (m = m.slice(1)), b = b === void 0 ? S !== (m === "width" || m === "height") ? Z8 : F8 : LL(b), y == null || y === false) continue;
    const x = p === "fx" || p === "fy" ? UL(e, a[p]) : zL(i, p);
    if (!x) throw new Error(`missing channel for scale: ${p}`);
    const T = x.value, [E = 0, D = 1 / 0] = Ea(w) ? w : w < 0 ? [w] : [0, w];
    if (m == null) x.domain = () => {
      let O = Array.from(new Js(T));
      return v && (O = O.reverse()), (E !== 0 || D !== 1 / 0) && (O = O.slice(E, D)), O;
    };
    else {
      const O = m === "data" ? t14 : m === "height" ? l6(i, "y1", "y2") : m === "width" ? l6(i, "x1", "x2") : Hm(i, m, m === "y" ? "y2" : m === "x" ? "x2" : void 0), A = SL(y === true ? "max" : y, O);
      x.domain = () => {
        let $ = gO(Zo(T), (N) => A.reduceIndex(N, O), (N) => T[N]);
        return b && $.sort(b), v && $.reverse(), (E !== 0 || D !== 1 / 0) && ($ = $.slice(E, D)), $.map(D8);
      };
    }
  }
}
function zL(t14, e) {
  for (const i in t14) {
    const a = t14[i];
    if (a.scale === e) return a;
  }
}
function UL(t14, e) {
  const i = t14.original;
  if (i === t14) return e;
  const a = e.value, u = e.value = [];
  for (let o = 0; o < i.length; ++o) {
    const f = a[i[o][0]];
    for (const s of t14[o]) u[s] = f;
  }
  return e;
}
function l6(t14, e, i) {
  const a = Hm(t14, e), u = Hm(t14, i);
  return Be(u, (o, f) => Math.abs(o - a[f]), Float64Array);
}
function Hm(t14, e, i) {
  let a = t14[e];
  if (!a && i !== void 0 && (a = t14[i]), a) return a.value;
  throw new Error(`missing channel: ${e}`);
}
function LL(t14) {
  if (t14 == null || typeof t14 == "function") return t14;
  switch (`${t14}`.toLowerCase()) {
    case "ascending":
      return F8;
    case "descending":
      return Z8;
  }
  throw new Error(`invalid order: ${t14}`);
}
function F8([t14, e], [i, a]) {
  return $u(e, a) || $u(t14, i);
}
function Z8([t14, e], [i, a]) {
  return Rm(e, a) || $u(t14, i);
}
function o6(t14, e) {
  let i = t14[e];
  if (i) {
    for (; i.source; ) i = i.source;
    return i.source === null ? null : i;
  }
}
const Q8 = /* @__PURE__ */ new Map([["accent", kz], ["category10", qz], ["dark2", Yz], ["observable10", Gz], ["paired", Xz], ["pastel1", Fz], ["pastel2", Zz], ["set1", Qz], ["set2", Kz], ["set3", Pz], ["tableau10", Iz]]);
function HL(t14) {
  return t14 != null && Q8.has(`${t14}`.toLowerCase());
}
const c6 = new Map([...Q8, ["brbg", Ri(B4, q4)], ["prgn", Ri(k4, Y4)], ["piyg", Ri(G4, X4)], ["puor", Ri(F4, Z4)], ["rdbu", Ri(Om, zs)], ["rdgy", Ri(Q4, K4)], ["rdylbu", Ri(Cm, Us)], ["rdylgn", Ri(P4, I4)], ["spectral", Ri(W4, J4)], ["burd", f6(Om, zs)], ["buylrd", f6(Cm, Us)], ["blues", Se(Mw, Tw)], ["greens", Se(Ew, Aw)], ["greys", Se(Ow, Cw)], ["oranges", Se(zw, Uw)], ["purples", Se(Dw, Rw)], ["reds", Se(Nw, $w)], ["turbo", Ni(kw)], ["viridis", Ni(Yw)], ["magma", Ni(Gw)], ["inferno", Ni(Xw)], ["plasma", Ni(Fw)], ["cividis", Ni(Lw)], ["cubehelix", Ni(Hw)], ["warm", Ni(Vw)], ["cool", Ni(jw)], ["bugn", Se(tw, ew)], ["bupu", Se(nw, iw)], ["gnbu", Se(rw, aw)], ["orrd", Se(uw, lw)], ["pubu", Se(fw, sw)], ["pubugn", Se(ow, cw)], ["purd", Se(dw, hw)], ["rdpu", Se(pw, mw)], ["ylgn", Se(vw, yw)], ["ylgnbu", Se(gw, bw)], ["ylorbr", Se(_w, ww)], ["ylorrd", Se(Sw, xw)], ["rainbow", s6(Bw)], ["sinebow", s6(qw)]]);
function Se(t14, e) {
  return ({ length: i }) => i === 1 ? [t14[3][1]] : i === 2 ? [t14[3][1], t14[3][2]] : (i = Math.max(3, Math.floor(i)), i > 9 ? jn(e, i) : t14[i]);
}
function Ri(t14, e) {
  return ({ length: i }) => i === 2 ? [t14[3][0], t14[3][2]] : (i = Math.max(3, Math.floor(i)), i > 11 ? jn(e, i) : t14[i]);
}
function f6(t14, e) {
  return ({ length: i }) => i === 2 ? [t14[3][2], t14[3][0]] : (i = Math.max(3, Math.floor(i)), i > 11 ? jn((a) => e(1 - a), i) : t14[i].slice().reverse());
}
function Ni(t14) {
  return ({ length: e }) => jn(t14, Math.max(2, Math.floor(e)));
}
function s6(t14) {
  return ({ length: e }) => jn(t14, Math.floor(e) + 1).slice(0, -1);
}
function K8(t14) {
  const e = `${t14}`.toLowerCase();
  if (!c6.has(e)) throw new Error(`unknown ordinal scheme: ${e}`);
  return c6.get(e);
}
function Ed(t14, e) {
  const i = K8(t14), a = typeof i == "function" ? i({ length: e }) : i;
  return a.length !== e ? a.slice(0, e) : a;
}
function VL(t14, e = "greys") {
  const i = /* @__PURE__ */ new Set(), [a, u] = Ed(e, 2);
  for (const o of t14) if (o != null) if (o === true) i.add(u);
  else if (o === false) i.add(a);
  else return;
  return [...i];
}
const d6 = /* @__PURE__ */ new Map([["brbg", q4], ["prgn", Y4], ["piyg", X4], ["puor", Z4], ["rdbu", zs], ["rdgy", K4], ["rdylbu", Us], ["rdylgn", I4], ["spectral", J4], ["burd", (t14) => zs(1 - t14)], ["buylrd", (t14) => Us(1 - t14)], ["blues", Tw], ["greens", Aw], ["greys", Cw], ["purples", Rw], ["reds", $w], ["oranges", Uw], ["turbo", kw], ["viridis", Yw], ["magma", Gw], ["inferno", Xw], ["plasma", Fw], ["cividis", Lw], ["cubehelix", Hw], ["warm", Vw], ["cool", jw], ["bugn", ew], ["bupu", iw], ["gnbu", aw], ["orrd", lw], ["pubugn", cw], ["pubu", sw], ["purd", hw], ["rdpu", mw], ["ylgnbu", bw], ["ylgn", yw], ["ylorbr", ww], ["ylorrd", xw], ["rainbow", Bw], ["sinebow", qw]]);
function Wg(t14) {
  const e = `${t14}`.toLowerCase();
  if (!d6.has(e)) throw new Error(`unknown quantitative scheme: ${e}`);
  return d6.get(e);
}
const jL = /* @__PURE__ */ new Set(["brbg", "prgn", "piyg", "puor", "rdbu", "rdgy", "rdylbu", "rdylgn", "spectral", "burd", "buylrd"]);
function BL(t14) {
  return t14 != null && jL.has(`${t14}`.toLowerCase());
}
const P8 = (t14) => (e) => t14(1 - e), Sp = [0, 1], h6 = /* @__PURE__ */ new Map([["number", Le], ["rgb", pa], ["hsl", WD], ["hcl", eR], ["lab", JD]]);
function I8(t14) {
  const e = `${t14}`.toLowerCase();
  if (!h6.has(e)) throw new Error(`unknown interpolator: ${e}`);
  return h6.get(e);
}
function Wo(t14, e, i, { type: a, nice: u, clamp: o, zero: f, domain: s = J8(t14, i), unknown: d, round: p, scheme: m, interval: b, range: v = le.get(t14) === Ko ? IL(i, s) : le.get(t14) === Po ? WL(i, s) : le.get(t14) === Io ? Sp : void 0, interpolate: y = le.get(t14) === Ki ? m == null && v !== void 0 ? pa : Wg(m !== void 0 ? m : a === "cyclical" ? "rainbow" : "turbo") : p ? bg : Le, reverse: w }) {
  if (s = p6(s), b = Qo(b, a), (a === "cyclical" || a === "sequential") && (a = "linear"), typeof y != "function" && (y = I8(y)), w = !!w, v !== void 0) {
    const S = s.length, x = (v = p6(v)).length;
    if (S !== x) {
      if (y.length === 1) throw new Error("invalid piecewise interpolator");
      y = rd(y, v), v = void 0;
    }
  }
  if (y.length === 1 ? (w && (y = P8(y), w = false), v === void 0 && (v = Float64Array.from(s, (S, x) => x / (s.length - 1)), v.length === 2 && (v = Sp)), e.interpolate((v === Sp ? Bi : t1)(y))) : e.interpolate(y), f) {
    const [S, x] = Mr(s);
    (S > 0 || x < 0) && (s = $m(s), (zu(s) || 1) === Math.sign(S) ? s[0] = 0 : s[s.length - 1] = 0);
  }
  return w && (s = ds(s)), e.domain(s).unknown(d), u && (e.nice(qL(u, a)), s = e.domain()), v !== void 0 && e.range(v), o && e.clamp(o), { type: a, domain: s, range: v, scale: e, interpolate: y, interval: b };
}
function p6(t14) {
  return t14 = Ma(t14), t14.length >= 2 ? t14 : [t14[0], t14[0]];
}
function qL(t14, e) {
  return t14 === true ? void 0 : typeof t14 == "number" ? t14 : eL(t14, e);
}
function kL(t14, e, i) {
  return Wo(t14, Cg(), e, i);
}
function YL(t14, e, i) {
  return W8(t14, e, { ...i, exponent: 0.5 });
}
function W8(t14, e, { exponent: i = 1, ...a }) {
  return Wo(t14, _4().exponent(i), e, { ...a, type: "pow" });
}
function GL(t14, e, { base: i = 10, domain: a = JL(e), ...u }) {
  return Wo(t14, g4().base(i), e, { ...u, domain: a });
}
function XL(t14, e, { constant: i = 1, ...a }) {
  return Wo(t14, v4().constant(i), e, a);
}
function FL(t14, e, { range: i, quantiles: a = i === void 0 ? 5 : (i = [...i]).length, n: u = a, scheme: o = "rdylbu", domain: f = tH(e), unknown: s, interpolate: d, reverse: p }) {
  return i === void 0 && (i = d !== void 0 ? jn(d, u) : le.get(t14) === Ki ? Ed(o, u) : void 0), f.length > 0 && (f = w4(f, i === void 0 ? { length: u } : i).quantiles()), Jg(t14, e, { domain: f, range: i, reverse: p, unknown: s });
}
function ZL(t14, e, { range: i, n: a = i === void 0 ? 5 : (i = [...i]).length, scheme: u = "rdylbu", domain: o = J8(t14, e), unknown: f, interpolate: s, reverse: d }) {
  const [p, m] = Mr(o);
  let b;
  return i === void 0 ? (b = fs(p, m, a), b[0] <= p && b.splice(0, 1), b[b.length - 1] >= m && b.pop(), a = b.length + 1, i = s !== void 0 ? jn(s, a) : le.get(t14) === Ki ? Ed(u, a) : void 0) : (b = jn(Le(p, m), a + 1).slice(1, -1), p instanceof Date && (b = b.map((v) => new Date(v)))), zu(Ma(o)) < 0 && b.reverse(), Jg(t14, e, { domain: b, range: i, reverse: d, unknown: f });
}
function Jg(t14, e, { domain: i = [0], unknown: a, scheme: u = "rdylbu", interpolate: o, range: f = o !== void 0 ? jn(o, i.length + 1) : le.get(t14) === Ki ? Ed(u, i.length + 1) : void 0, reverse: s }) {
  i = Ma(i);
  const d = zu(i);
  if (!isNaN(d) && !QL(i, d)) throw new Error(`the ${t14} scale has a non-monotonic domain`);
  return s && (f = ds(f)), { type: "threshold", scale: S4(d < 0 ? ds(i) : i, f === void 0 ? [] : f).unknown(a), domain: i, range: f };
}
function QL(t14, e) {
  for (let i = 1, a = t14.length, u = t14[0]; i < a; ++i) {
    const o = Ro(u, u = t14[i]);
    if (o !== 0 && o !== e) return false;
  }
  return true;
}
function KL(t14) {
  return { type: "identity", scale: pL(le.get(t14)) ? h4() : (e) => e };
}
function Co(t14, e = _8) {
  return t14.length ? [bo(t14, ({ value: i }) => i === void 0 ? i : bo(i, e)), ai(t14, ({ value: i }) => i === void 0 ? i : ai(i, e))] : [0, 1];
}
function J8(t14, e) {
  const i = le.get(t14);
  return (i === Ko || i === Io || i === Po ? PL : Co)(e);
}
function PL(t14) {
  return [0, t14.length ? ai(t14, ({ value: e }) => e === void 0 ? e : ai(e, _8)) : 1];
}
function IL(t14, e) {
  const i = t14.find(({ radius: f }) => f !== void 0);
  if (i !== void 0) return [0, i.radius];
  const a = ss(t14, 0.5, ({ value: f }) => f === void 0 ? NaN : ss(f, 0.25, Bg)), u = e.map((f) => 3 * Math.sqrt(f / a)), o = 30 / ai(u);
  return o < 1 ? u.map((f) => f * o) : u;
}
function WL(t14, e) {
  const i = Pp(t14, ({ value: o }) => o === void 0 ? NaN : Pp(o, Math.abs)), a = e.map((o) => 12 * o / i), u = 60 / ai(a);
  return u < 1 ? a.map((o) => o * u) : a;
}
function JL(t14) {
  for (const { value: e } of t14) if (e !== void 0) for (let i of e) {
    if (i > 0) return Co(t14, Bg);
    if (i < 0) return Co(t14, w8);
  }
  return [1, 10];
}
function tH(t14) {
  const e = [];
  for (const { value: i } of t14) if (i !== void 0) for (const a of i) e.push(a);
  return e;
}
function t1(t14) {
  return (e, i) => (a) => t14(e + a * (i - e));
}
let Vm = 0, jm;
function eH() {
  const t14 = Vm;
  return Vm = 0, jm = void 0, t14;
}
function Tr(t14) {
  t14 !== jm && (jm = t14, console.warn(t14), ++Vm);
}
function Ad(t14, e, i, a, { type: u, nice: o, clamp: f, domain: s = Co(a), unknown: d, pivot: p = 0, scheme: m, range: b, symmetric: v = true, interpolate: y = le.get(t14) === Ki ? m == null && b !== void 0 ? pa : Wg(m !== void 0 ? m : "rdbu") : Le, reverse: w }) {
  p = +p, s = Ma(s);
  let [S, x] = s;
  if (s.length > 2 && Tr(`Warning: the diverging ${t14} scale domain contains extra elements.`), Ro(S, x) < 0 && ([S, x] = [x, S], w = !w), S = Math.min(S, p), x = Math.max(x, p), typeof y != "function" && (y = I8(y)), b !== void 0 && (y = y.length === 1 ? t1(y)(...b) : rd(y, b)), w && (y = P8(y)), v) {
    const T = i.apply(p), E = T - i.apply(S), D = i.apply(x) - T;
    E < D ? S = i.invert(T - D) : E > D && (x = i.invert(T + E));
  }
  return e.domain([S, p, x]).unknown(d).interpolator(y), f && e.clamp(f), o && e.nice(o), { type: u, domain: [S, x], pivot: p, interpolate: y, scale: e };
}
function nH(t14, e, i) {
  return Ad(t14, L4(), uH, e, i);
}
function iH(t14, e, i) {
  return tS(t14, e, { ...i, exponent: 0.5 });
}
function tS(t14, e, { exponent: i = 1, ...a }) {
  return Ad(t14, j4().exponent(i = +i), cH(i), e, { ...a, type: "diverging-pow" });
}
function rH(t14, e, { base: i = 10, pivot: a = 1, domain: u = Co(e, a < 0 ? w8 : Bg), ...o }) {
  return Ad(t14, H4().base(i = +i), lH, e, { domain: u, pivot: a, ...o });
}
function aH(t14, e, { constant: i = 1, ...a }) {
  return Ad(t14, V4().constant(i = +i), fH(i), e, a);
}
const uH = { apply(t14) {
  return t14;
}, invert(t14) {
  return t14;
} }, lH = { apply: Math.log, invert: Math.exp }, oH = { apply(t14) {
  return Math.sign(t14) * Math.sqrt(Math.abs(t14));
}, invert(t14) {
  return Math.sign(t14) * (t14 * t14);
} };
function cH(t14) {
  return t14 === 0.5 ? oH : { apply(e) {
    return Math.sign(e) * Math.pow(Math.abs(e), t14);
  }, invert(e) {
    return Math.sign(e) * Math.pow(Math.abs(e), 1 / t14);
  } };
}
function fH(t14) {
  return { apply(e) {
    return Math.sign(e) * Math.log1p(Math.abs(e / t14));
  }, invert(e) {
    return Math.sign(e) * Math.expm1(Math.abs(e)) * t14;
  } };
}
function eS(t14, e, i, a) {
  return Wo(t14, e, i, a);
}
function sH(t14, e, i) {
  return eS(t14, jz(), e, i);
}
function dH(t14, e, i) {
  return eS(t14, Bz(), e, i);
}
const Jo = Symbol("ordinal");
function nS(t14, e, i, { type: a, interval: u, domain: o, range: f, reverse: s, hint: d }) {
  return u = Qo(u, a), o === void 0 && (o = rS(i, u, t14)), (a === "categorical" || a === Jo) && (a = "ordinal"), s && (o = ds(o)), o = e.domain(o).domain(), f !== void 0 && (typeof f == "function" && (f = f(o)), e.range(f)), { type: a, domain: o, range: f, scale: e, hint: d, interval: u };
}
function hH(t14, e, { type: i, interval: a, domain: u, range: o, scheme: f, unknown: s, ...d }) {
  a = Qo(a, i), u === void 0 && (u = rS(e, a, t14));
  let p;
  if (le.get(t14) === Td) p = gH(e), o = o === void 0 ? bH(p) : Be(o, Ig);
  else if (le.get(t14) === Ki && (o === void 0 && (i === "ordinal" || i === Jo) && (o = VL(u, f), o !== void 0 && (f = void 0)), f === void 0 && o === void 0 && (f = i === "ordinal" ? "turbo" : "observable10"), f !== void 0)) if (o !== void 0) {
    const m = Wg(f), b = o[0], v = o[1] - o[0];
    o = ({ length: y }) => jn((w) => m(b + v * w), y);
  } else o = K8(f);
  if (s === Tm) throw new Error(`implicit unknown on ${t14} scale is not supported`);
  return nS(t14, Og().unknown(s), e, { ...d, type: i, domain: u, range: o, hint: p });
}
function pH(t14, e, { align: i = 0.5, padding: a = 0.5, ...u }) {
  return iS(y$().align(i).padding(a), e, u, t14);
}
function mH(t14, e, { align: i = 0.5, padding: a = 0.1, paddingInner: u = a, paddingOuter: o = t14 === "fx" || t14 === "fy" ? 0 : a, ...f }) {
  return iS(fd().align(i).paddingInner(u).paddingOuter(o), e, f, t14);
}
function iS(t14, e, i, a) {
  let { round: u } = i;
  return u !== void 0 && t14.round(u = !!u), t14 = nS(a, t14, e, i), t14.round = u, t14;
}
function rS(t14, e, i) {
  const a = new Js();
  for (const { value: u, domain: o } of t14) {
    if (o !== void 0) return o();
    if (u !== void 0) for (const f of u) a.add(f);
  }
  if (e !== void 0) {
    const [u, o] = Mr(a).map(e.floor, e);
    return e.range(u, e.offset(o));
  }
  if (a.size > 1e4 && le.get(i) === ei) throw new Error(`implicit ordinal domain of ${i} scale has more than 10,000 values`);
  return vO(a, $u);
}
function m6(t14, e) {
  let i;
  for (const { hint: a } of t14) {
    const u = a == null ? void 0 : a[e];
    if (u !== void 0) {
      if (i === void 0) i = u;
      else if (i !== u) return;
    }
  }
  return i;
}
function gH(t14) {
  return { fill: m6(t14, "fill"), stroke: m6(t14, "stroke") };
}
function bH(t14) {
  return Ke(t14.fill) ? mU : pU;
}
function Bm(t14, { label: e, inset: i = 0, insetTop: a = i, insetRight: u = i, insetBottom: o = i, insetLeft: f = i, round: s, nice: d, clamp: p, zero: m, align: b, padding: v, projection: y, facet: { label: w = e } = {}, ...S } = {}) {
  const x = {};
  for (const [T, E] of t14) {
    const D = S[T], O = SH(T, E, { round: le.get(T) === ei ? s : void 0, nice: d, clamp: p, zero: m, align: b, padding: v, projection: y, ...D });
    if (O) {
      let { label: A = T === "fx" || T === "fy" ? w : e, percent: $, transform: N, inset: H, insetTop: z = H !== void 0 ? H : T === "y" ? a : 0, insetRight: G = H !== void 0 ? H : T === "x" ? u : 0, insetBottom: V = H !== void 0 ? H : T === "y" ? o : 0, insetLeft: lt = H !== void 0 ? H : T === "x" ? f : 0 } = D || {};
      if (N == null) N = void 0;
      else if (typeof N != "function") throw new Error("invalid scale transform; not a function");
      O.percent = !!$, O.label = A === void 0 ? yH(E, O) : A, O.transform = N, T === "x" || T === "fx" ? (O.insetLeft = +lt, O.insetRight = +G) : (T === "y" || T === "fy") && (O.insetTop = +z, O.insetBottom = +V), x[T] = O;
    }
  }
  return x;
}
function g6(t14) {
  const e = {}, i = { scales: e };
  for (const [a, u] of Object.entries(t14)) {
    const { scale: o, type: f, interval: s, label: d } = u;
    e[a] = AH(u), i[a] = o, o.type = f, s != null && (o.interval = s), d != null && (o.label = d);
  }
  return i;
}
function vH(t14, e) {
  const { x: i, y: a, fx: u, fy: o } = t14, f = u || o ? e1(e) : e;
  u && b6(u, f), o && v6(o, f);
  const s = u || o ? aS(t14, e) : e;
  i && b6(i, s), a && v6(a, s);
}
function yH(t14 = [], e) {
  let i;
  for (const { label: a } of t14) if (a !== void 0) {
    if (i === void 0) i = a;
    else if (i !== a) return;
  }
  if (i !== void 0) return !Aa(e) && e.percent && (i = `${i} (%)`), { inferred: true, toString: () => i };
}
function _H(t14) {
  return Math.sign(zu(t14.domain())) * Math.sign(zu(t14.range()));
}
function e1(t14) {
  const { marginTop: e, marginRight: i, marginBottom: a, marginLeft: u, width: o, height: f, facet: { marginTop: s, marginRight: d, marginBottom: p, marginLeft: m } } = t14;
  return { marginTop: Math.max(e, s), marginRight: Math.max(i, d), marginBottom: Math.max(a, p), marginLeft: Math.max(u, m), width: o, height: f };
}
function aS({ fx: t14, fy: e }, i) {
  const { marginTop: a, marginRight: u, marginBottom: o, marginLeft: f, width: s, height: d } = e1(i);
  return { marginTop: a, marginRight: u, marginBottom: o, marginLeft: f, width: t14 ? t14.scale.bandwidth() + f + u : s, height: e ? e.scale.bandwidth() + a + o : d, facet: { width: s, height: d } };
}
function b6(t14, e) {
  if (t14.range === void 0) {
    const { insetLeft: i, insetRight: a } = t14, { width: u, marginLeft: o = 0, marginRight: f = 0 } = e, s = o + i, d = u - f - a;
    t14.range = [s, Math.max(s, d)], Aa(t14) || (t14.range = lS(t14)), t14.scale.range(t14.range);
  }
  uS(t14);
}
function v6(t14, e) {
  if (t14.range === void 0) {
    const { insetTop: i, insetBottom: a } = t14, { height: u, marginTop: o = 0, marginBottom: f = 0 } = e, s = o + i, d = u - f - a;
    t14.range = [Math.max(s, d), s], Aa(t14) ? t14.range.reverse() : t14.range = lS(t14), t14.scale.range(t14.range);
  }
  uS(t14);
}
function uS(t14) {
  t14.round === void 0 && MH(t14) && wH(t14) <= 30 && t14.scale.round(true);
}
function wH({ scale: t14 }) {
  const e = t14.domain().length, [i, a] = t14.range(), u = t14.paddingInner ? t14.paddingInner() : 1, o = t14.paddingOuter ? t14.paddingOuter() : t14.padding(), f = e - u, s = Math.abs(a - i) / Math.max(1, f + o * 2);
  return (s - Math.floor(s)) * f;
}
function lS(t14) {
  const e = t14.scale.domain().length + oS(t14);
  if (!(e > 2)) return t14.range;
  const [i, a] = t14.range;
  return Array.from({ length: e }, (u, o) => i + o / (e - 1) * (a - i));
}
function SH(t14, e = [], i = {}) {
  const a = xH(t14, e, i);
  if (i.type === void 0 && i.domain === void 0 && i.range === void 0 && i.interval == null && t14 !== "fx" && t14 !== "fy" && Aa({ type: a })) {
    const u = e.map(({ value: o }) => o).filter((o) => o !== void 0);
    u.some(oi) ? Tr(`Warning: some data associated with the ${t14} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${gu(a)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${t14} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${t14} scale to "${gu(a)}".`) : u.some(rL) ? Tr(`Warning: some data associated with the ${t14} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${gu(a)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${t14} scale to "${gu(a)}".`) : u.some(aL) && Tr(`Warning: some data associated with the ${t14} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${gu(a)}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${t14} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${t14} scale to "${gu(a)}".`);
  }
  switch (i.type = a, a) {
    case "diverging":
    case "diverging-sqrt":
    case "diverging-pow":
    case "diverging-log":
    case "diverging-symlog":
    case "cyclical":
    case "sequential":
    case "linear":
    case "sqrt":
    case "threshold":
    case "quantile":
    case "pow":
    case "log":
    case "symlog":
      i = $f(e, i, qs);
      break;
    case "identity":
      switch (le.get(t14)) {
        case ei:
          i = $f(e, i, qs);
          break;
        case Td:
          i = $f(e, i, TH);
          break;
      }
      break;
    case "utc":
    case "time":
      i = $f(e, i, R8);
      break;
  }
  switch (a) {
    case "diverging":
      return nH(t14, e, i);
    case "diverging-sqrt":
      return iH(t14, e, i);
    case "diverging-pow":
      return tS(t14, e, i);
    case "diverging-log":
      return rH(t14, e, i);
    case "diverging-symlog":
      return aH(t14, e, i);
    case "categorical":
    case "ordinal":
    case Jo:
      return hH(t14, e, i);
    case "cyclical":
    case "sequential":
    case "linear":
      return kL(t14, e, i);
    case "sqrt":
      return YL(t14, e, i);
    case "threshold":
      return Jg(t14, e, i);
    case "quantile":
      return FL(t14, e, i);
    case "quantize":
      return ZL(t14, e, i);
    case "pow":
      return W8(t14, e, i);
    case "log":
      return GL(t14, e, i);
    case "symlog":
      return XL(t14, e, i);
    case "utc":
      return dH(t14, e, i);
    case "time":
      return sH(t14, e, i);
    case "point":
      return pH(t14, e, i);
    case "band":
      return mH(t14, e, i);
    case "identity":
      return KL(t14);
    case void 0:
      return;
    default:
      throw new Error(`unknown scale type: ${a}`);
  }
}
function gu(t14) {
  return typeof t14 == "symbol" ? t14.description : t14;
}
function y6(t14) {
  return typeof t14 == "string" ? `${t14}`.toLowerCase() : t14;
}
const _6 = { toString: () => "projection" };
function xH(t14, e, { type: i, domain: a, range: u, scheme: o, pivot: f, projection: s }) {
  var _a2;
  if (i = y6(i), t14 === "fx" || t14 === "fy") return "band";
  (t14 === "x" || t14 === "y") && s != null && (i = _6);
  for (const m of e) {
    const b = y6(m.type);
    if (b !== void 0) {
      if (i === void 0) i = b;
      else if (i !== b) throw new Error(`scale incompatible with channel: ${i} !== ${b}`);
    }
  }
  if (i === _6) return;
  if (i !== void 0) return i;
  if (a === void 0 && !e.some(({ value: m }) => m !== void 0)) return;
  const d = le.get(t14);
  if (d === Ko) return "sqrt";
  if (d === Io || d === Po) return "linear";
  if (d === Td) return "ordinal";
  const p = (_a2 = a ?? u) == null ? void 0 : _a2.length;
  if (p < 2 || p > 2) return xp(d);
  if (a !== void 0) {
    if (i6(a)) return xp(d);
    if (oi(a)) return "utc";
  } else {
    const m = e.map(({ value: b }) => b).filter((b) => b !== void 0);
    if (m.some(i6)) return xp(d);
    if (m.some(oi)) return "utc";
  }
  if (d === Ki) {
    if (f != null || BL(o)) return "diverging";
    if (HL(o)) return "categorical";
  }
  return "linear";
}
function xp(t14) {
  switch (t14) {
    case ei:
      return "point";
    case Ki:
      return Jo;
    default:
      return "ordinal";
  }
}
function Aa({ type: t14 }) {
  return t14 === "ordinal" || t14 === "point" || t14 === "band" || t14 === Jo;
}
function oS({ type: t14 }) {
  return t14 === "threshold";
}
function MH({ type: t14 }) {
  return t14 === "point" || t14 === "band";
}
function Ys(t14) {
  if (t14 === void 0) return true;
  const e = t14.domain(), i = t14(e[0]);
  for (let a = 1, u = e.length; a < u; ++a) if (t14(e[a]) - i) return false;
  return true;
}
function $f(t14, { domain: e, ...i }, a) {
  var _a2;
  for (const u of t14) u.value !== void 0 && (e === void 0 && (e = (_a2 = u.value) == null ? void 0 : _a2.domain), u.value = a(u.value));
  return { domain: e === void 0 ? e : a(e), ...i };
}
function TH(t14) {
  return Be(t14, Ig);
}
function EH(t14) {
  return (e) => {
    if (!le.has(e = `${e}`)) throw new Error(`unknown scale: ${e}`);
    return t14[e];
  };
}
function AH({ scale: t14, type: e, domain: i, range: a, interpolate: u, interval: o, transform: f, percent: s, pivot: d }) {
  if (e === "identity") return { type: "identity", apply: (m) => m, invert: (m) => m };
  const p = t14.unknown ? t14.unknown() : void 0;
  return { type: e, domain: $m(i), ...a !== void 0 && { range: $m(a) }, ...f !== void 0 && { transform: f }, ...s && { percent: s }, ...p !== void 0 && { unknown: p }, ...o !== void 0 && { interval: o }, ...u !== void 0 && { interpolate: u }, ...t14.clamp && { clamp: t14.clamp() }, ...d !== void 0 && { pivot: d, symmetric: false }, ...t14.base && { base: t14.base() }, ...t14.exponent && { exponent: t14.exponent() }, ...t14.constant && { constant: t14.constant() }, ...t14.align && { align: t14.align(), round: t14.round() }, ...t14.padding && (t14.paddingInner ? { paddingInner: t14.paddingInner(), paddingOuter: t14.paddingOuter() } : { padding: t14.padding() }), ...t14.bandwidth && { bandwidth: t14.bandwidth(), step: t14.step() }, apply: (m) => t14(m), ...t14.invert && { invert: (m) => t14.invert(m) } };
}
function OH(t14, e) {
  const { fx: i, fy: a } = Bm(t14, e), u = i == null ? void 0 : i.scale.domain(), o = a == null ? void 0 : a.scale.domain();
  return u && o ? hO(u, o).map(([f, s], d) => ({ x: f, y: s, i: d })) : u ? u.map((f, s) => ({ x: f, i: s })) : o ? o.map((f, s) => ({ y: f, i: s })) : void 0;
}
function CH(t14, { x: e, y: i }) {
  return e && (e = qm(e)), i && (i = qm(i)), t14.filter(e && i ? (a) => e.has(a.x) && i.has(a.y) : e ? (a) => e.has(a.x) : (a) => i.has(a.y)).sort(e && i ? (a, u) => e.get(a.x) - e.get(u.x) || i.get(a.y) - i.get(u.y) : e ? (a, u) => e.get(a.x) - e.get(u.x) : (a, u) => i.get(a.y) - i.get(u.y));
}
function n1(t14, { fx: e, fy: i }) {
  const a = Zo(t14), u = e == null ? void 0 : e.value, o = i == null ? void 0 : i.value;
  return e && i ? J0(a, (f) => (f.fx = u[f[0]], f.fy = o[f[0]], f), (f) => u[f], (f) => o[f]) : e ? J0(a, (f) => (f.fx = u[f[0]], f), (f) => u[f]) : J0(a, (f) => (f.fy = o[f[0]], f), (f) => o[f]);
}
function DH(t14, e, { marginTop: i, marginLeft: a }) {
  const u = t14 ? ({ x: f }) => t14(f) - a : () => 0, o = e ? ({ y: f }) => e(f) - i : () => 0;
  return function(f) {
    this.tagName === "svg" ? (this.setAttribute("x", u(f)), this.setAttribute("y", o(f))) : this.setAttribute("transform", `translate(${u(f)},${o(f)})`);
  };
}
function RH(t14) {
  const e = [], i = new Uint32Array(fg(t14, (a) => a.length));
  for (const a of t14) {
    let u = 0;
    for (const o of t14) a !== o && (i.set(o, u), u += o.length);
    e.push(i.slice(0, u));
  }
  return e;
}
const NH = /* @__PURE__ */ new Map([["top", Mp], ["right", Ap], ["bottom", Tp], ["left", Ep], ["top-left", zf(Mp, Ep)], ["top-right", zf(Mp, Ap)], ["bottom-left", zf(Tp, Ep)], ["bottom-right", zf(Tp, Ap)], ["top-empty", UH], ["right-empty", VH], ["bottom-empty", LH], ["left-empty", HH], ["empty", jH]]);
function $H(t14) {
  if (t14 == null) return null;
  const e = NH.get(`${t14}`.toLowerCase());
  if (e) return e;
  throw new Error(`invalid facet anchor: ${t14}`);
}
const w6 = /* @__PURE__ */ new WeakMap();
function qm(t14) {
  let e = w6.get(t14);
  return e || w6.set(t14, e = new go(Be(t14, (i, a) => [i, a]))), e;
}
function Nr(t14, e) {
  return qm(t14).get(e);
}
function zH(t14, e, i) {
  return e = qi(e), i = qi(i), t14.find((a) => Object.is(qi(a.x), e) && Object.is(qi(a.y), i));
}
function Od(t14, e, i) {
  var _a2;
  return (_a2 = zH(t14, e, i)) == null ? void 0 : _a2.empty;
}
function Mp(t14, { y: e }, { y: i }) {
  return e ? Nr(e, i) === 0 : true;
}
function Tp(t14, { y: e }, { y: i }) {
  return e ? Nr(e, i) === e.length - 1 : true;
}
function Ep(t14, { x: e }, { x: i }) {
  return e ? Nr(e, i) === 0 : true;
}
function Ap(t14, { x: e }, { x: i }) {
  return e ? Nr(e, i) === e.length - 1 : true;
}
function UH(t14, { y: e }, { x: i, y: a, empty: u }) {
  if (u) return false;
  if (!e) return;
  const o = Nr(e, a);
  if (o > 0) return Od(t14, i, e[o - 1]);
}
function LH(t14, { y: e }, { x: i, y: a, empty: u }) {
  if (u) return false;
  if (!e) return;
  const o = Nr(e, a);
  if (o < e.length - 1) return Od(t14, i, e[o + 1]);
}
function HH(t14, { x: e }, { x: i, y: a, empty: u }) {
  if (u) return false;
  if (!e) return;
  const o = Nr(e, i);
  if (o > 0) return Od(t14, e[o - 1], a);
}
function VH(t14, { x: e }, { x: i, y: a, empty: u }) {
  if (u) return false;
  if (!e) return;
  const o = Nr(e, i);
  if (o < e.length - 1) return Od(t14, e[o + 1], a);
}
function jH(t14, e, { empty: i }) {
  return i;
}
function zf(t14, e) {
  return function() {
    return t14.apply(null, arguments) && e.apply(null, arguments);
  };
}
function Op(t14, { channels: { fx: e, fy: i }, groups: a }) {
  return e && i ? t14.map(({ x: u, y: o }) => {
    var _a2;
    return ((_a2 = a.get(u)) == null ? void 0 : _a2.get(o)) ?? [];
  }) : e ? t14.map(({ x: u }) => a.get(u) ?? []) : t14.map(({ y: u }) => a.get(u) ?? []);
}
const cS = Math.PI, $i = 2 * cS, Cp = 0.618;
function BH({ projection: t14, inset: e = 0, insetTop: i = e, insetRight: a = e, insetBottom: u = e, insetLeft: o = e } = {}, f) {
  if (t14 == null) return;
  if (typeof t14.stream == "function") return t14;
  let s, d, p = "frame";
  if (Ta(t14)) {
    let A;
    if ({ type: t14, domain: d, inset: A, insetTop: i = A !== void 0 ? A : i, insetRight: a = A !== void 0 ? A : a, insetBottom: u = A !== void 0 ? A : u, insetLeft: o = A !== void 0 ? A : o, clip: p = p, ...s } = t14, t14 == null) return;
  }
  typeof t14 != "function" && ({ type: t14 } = km(t14));
  const { width: m, height: b, marginLeft: v, marginRight: y, marginTop: w, marginBottom: S } = f, x = m - v - y - o - a, T = b - w - S - i - u;
  if (t14 = t14 == null ? void 0 : t14({ width: x, height: T, clip: p, ...s }), t14 == null) return;
  p = qH(p, v, w, m - y, b - S);
  let E = v + o, D = w + i, O;
  if (d != null) {
    const [[A, $], [N, H]] = Mg(t14).bounds(d), z = Math.min(x / (N - A), T / (H - $));
    z > 0 ? (E -= (z * (A + N) - x) / 2, D -= (z * ($ + H) - T) / 2, O = Cs({ point(G, V) {
      this.stream.point(G * z + E, V * z + D);
    } })) : Tr("Warning: the projection could not be fit to the specified domain; using the default scale.");
  }
  return O ?? (O = E === 0 && D === 0 ? fS() : Cs({ point(A, $) {
    this.stream.point(A + E, $ + D);
  } })), { stream: (A) => t14.stream(O.stream(p(A))) };
}
function km(t14) {
  switch (`${t14}`.toLowerCase()) {
    case "albers-usa":
      return Ln(r$, 0.7463, 0.4673);
    case "albers":
      return Uf(e4, 0.7463, 0.4673);
    case "azimuthal-equal-area":
      return Ln(a$, 4, 4);
    case "azimuthal-equidistant":
      return Ln(u$, $i, $i);
    case "conic-conformal":
      return Uf(c$, $i, $i);
    case "conic-equal-area":
      return Uf(Ds, 6.1702, 2.9781);
    case "conic-equidistant":
      return Uf(d$, 7.312, 3.6282);
    case "equal-earth":
      return Ln(p$, 5.4133, 2.6347);
    case "equirectangular":
      return Ln(f$, $i, cS);
    case "gnomonic":
      return Ln(m$, 3.4641, 3.4641);
    case "identity":
      return { type: fS };
    case "reflect-y":
      return { type: kH };
    case "mercator":
      return Ln(l$, $i, $i);
    case "orthographic":
      return Ln(g$, 2, 2);
    case "stereographic":
      return Ln(b$, 2, 2);
    case "transverse-mercator":
      return Ln(v$, $i, $i);
    default:
      throw new Error(`unknown projection type: ${t14}`);
  }
}
function qH(t14, e, i, a, u) {
  if (t14 === false || t14 == null || typeof t14 == "number") return (o) => o;
  switch (t14 === true && (t14 = "frame"), `${t14}`.toLowerCase()) {
    case "frame":
      return j5(e, i, a, u);
    default:
      throw new Error(`unknown projection clip type: ${t14}`);
  }
}
function Ln(t14, e, i) {
  return { type: ({ width: a, height: u, rotate: o, precision: f = 0.15, clip: s }) => {
    var _a2, _b, _c;
    const d = t14();
    return f != null && ((_a2 = d.precision) == null ? void 0 : _a2.call(d, f)), o != null && ((_b = d.rotate) == null ? void 0 : _b.call(d, o)), typeof s == "number" && ((_c = d.clipAngle) == null ? void 0 : _c.call(d, s)), a != null && (d.scale(Math.min(a / e, u / i)), d.translate([a / 2, u / 2])), d;
  }, aspectRatio: i / e };
}
function Uf(t14, e, i) {
  const { type: a, aspectRatio: u } = Ln(t14, e, i);
  return { type: (o) => {
    const { parallels: f, domain: s, width: d, height: p } = o, m = a(o);
    return f != null && (m.parallels(f), s === void 0 && d != null && m.fitSize([d, p], { type: "Sphere" })), m;
  }, aspectRatio: u };
}
const fS = Bi({ stream: (t14) => t14 }), kH = Bi(Cs({ point(t14, e) {
  this.stream.point(t14, -e);
} }));
function YH(t14, e, i, a) {
  const u = i[t14], o = i[e], f = u.length, s = i[t14] = new Float64Array(f).fill(NaN), d = i[e] = new Float64Array(f).fill(NaN);
  let p;
  const m = a.stream({ point(b, v) {
    s[p] = b, d[p] = v;
  } });
  for (p = 0; p < f; ++p) m.point(u[p], o[p]);
}
function GH({ projection: t14 } = {}) {
  return t14 == null ? false : typeof t14.stream == "function" ? true : (Ta(t14) && (t14 = t14.type), t14 != null);
}
function XH(t14) {
  if (typeof (t14 == null ? void 0 : t14.stream) == "function") return Cp;
  if (Ta(t14)) {
    let e, i;
    if ({ domain: e, type: t14, ...i } = t14, e != null && t14 != null) {
      const a = typeof t14 == "string" ? km(t14).type : t14, [[u, o], [f, s]] = Mg(a({ ...i, width: 100, height: 100 })).bounds(e), d = (s - o) / (f - u);
      return d && isFinite(d) ? d < 0.2 ? 0.2 : d > 5 ? 5 : d : Cp;
    }
  }
  if (t14 != null) {
    if (typeof t14 != "function") {
      const { aspectRatio: e } = km(t14);
      if (e) return e;
    }
    return Cp;
  }
}
function FH(t14) {
  const e = [], i = [], a = { scale: "x", value: e }, u = { scale: "y", value: i }, o = { point(f, s) {
    e.push(f), i.push(s);
  }, lineStart() {
  }, lineEnd() {
  }, polygonStart() {
  }, polygonEnd() {
  }, sphere() {
  } };
  for (const f of t14.value) ra(f, o);
  return [a, u];
}
function ZH({ x: t14, y: e }) {
  if (t14 || e) return t14 ?? (t14 = (i) => i), e ?? (e = (i) => i), Cs({ point(i, a) {
    this.stream.point(t14(i), e(a));
  } });
}
function i1(t14 = {}) {
  const { document: e = typeof window < "u" ? window.document : void 0, clip: i } = t14;
  return { document: e, clip: L8(i) };
}
function Xe(t14, { document: e }) {
  return ua(ed(t14).call(e.documentElement));
}
const Ym = Symbol("unset");
function r1(t14) {
  return (t14.length === 1 ? QH : KH)(t14);
}
function QH(t14) {
  let e, i = Ym;
  return (a) => (Object.is(i, a) || (i = a, e = t14(a)), e);
}
function KH(t14) {
  let e, i;
  return (...a) => (((i == null ? void 0 : i.length) !== a.length || i.some((u, o) => !Object.is(u, a[o]))) && (i = a, e = t14(...a)), e);
}
const PH = r1((t14) => new Intl.NumberFormat(t14));
r1((t14, e) => new Intl.DateTimeFormat(t14, { timeZone: "UTC", ...e && { month: e } }));
r1((t14, e) => new Intl.DateTimeFormat(t14, { timeZone: "UTC", ...e && { weekday: e } }));
function IH(t14 = "en-US") {
  const e = PH(t14);
  return (i) => i != null && !isNaN(i) ? e.format(i) : void 0;
}
function WH(t14) {
  return $U(t14, "Invalid Date");
}
function JH(t14 = "en-US") {
  const e = IH(t14);
  return (i) => (i instanceof Date ? WH : typeof i == "number" ? e : He)(i);
}
const Lu = JH(), ln = (typeof window < "u" ? window.devicePixelRatio > 1 : typeof it > "u") ? 0 : 0.5;
let tV = 0;
function sS() {
  return `plot-clip-${++tV}`;
}
function eV(t14, { title: e, href: i, ariaLabel: a, ariaDescription: u, ariaHidden: o, target: f, fill: s, fillOpacity: d, stroke: p, strokeWidth: m, strokeOpacity: b, strokeLinejoin: v, strokeLinecap: y, strokeMiterlimit: w, strokeDasharray: S, strokeDashoffset: x, opacity: T, mixBlendMode: E, imageFilter: D, paintOrder: O, pointerEvents: A, shapeRendering: $, channels: N }, { ariaLabel: H, fill: z = "currentColor", fillOpacity: G, stroke: V = "none", strokeOpacity: lt, strokeWidth: ft, strokeLinecap: ct, strokeLinejoin: Y, strokeMiterlimit: q, paintOrder: ut }) {
  z === null && (s = null, d = null), V === null && (p = null, b = null), Ke(z) ? !Ke(V) && (!Ke(s) || (N == null ? void 0 : N.fill)) && (V = "none") : Ke(V) && (!Ke(p) || (N == null ? void 0 : N.stroke)) && (z = "none");
  const [nt, P] = ya(s, z), [C, B] = un(d, G), [Q, K] = ya(p, V), [tt, ht] = un(b, lt), [dt, st] = un(T);
  Ao(K) || (m === void 0 && (m = ft), y === void 0 && (y = ct), v === void 0 && (v = Y), w === void 0 && !cL(v) && (w = q), !Ao(P) && O === void 0 && (O = ut));
  const [pt, W] = un(m);
  return z !== null && (t14.fill = Ce(P, "currentColor"), t14.fillOpacity = Pl(B, 1)), V !== null && (t14.stroke = Ce(K, "none"), t14.strokeWidth = Pl(W, 1), t14.strokeOpacity = Pl(ht, 1), t14.strokeLinejoin = Ce(v, "miter"), t14.strokeLinecap = Ce(y, "butt"), t14.strokeMiterlimit = Pl(w, 4), t14.strokeDasharray = Ce(S, "none"), t14.strokeDashoffset = Ce(x, "0")), t14.target = He(f), t14.ariaLabel = He(H), t14.ariaDescription = He(u), t14.ariaHidden = He(o), t14.opacity = Pl(st, 1), t14.mixBlendMode = Ce(E, "normal"), t14.imageFilter = Ce(D, "none"), t14.paintOrder = Ce(O, "normal"), t14.pointerEvents = Ce(A, "auto"), t14.shapeRendering = Ce($, "auto"), { title: { value: e, optional: true, filter: null }, href: { value: i, optional: true, filter: null }, ariaLabel: { value: a, optional: true, filter: null }, fill: { value: nt, scale: "auto", optional: true }, fillOpacity: { value: C, scale: "auto", optional: true }, stroke: { value: Q, scale: "auto", optional: true }, strokeOpacity: { value: tt, scale: "auto", optional: true }, strokeWidth: { value: pt, optional: true }, opacity: { value: dt, scale: "auto", optional: true } };
}
function nV(t14, e) {
  e && t14.filter((i) => jg(e[i])).append("title").call(rV, e);
}
function iV(t14, e) {
  e && t14.filter(([i]) => jg(e[i])).append("title").call(aV, e);
}
function rV(t14, e) {
  e && t14.text((i) => Lu(e[i]));
}
function aV(t14, e) {
  e && t14.text(([i]) => Lu(e[i]));
}
function tc(t14, { target: e, tip: i }, { ariaLabel: a, title: u, fill: o, fillOpacity: f, stroke: s, strokeOpacity: d, strokeWidth: p, opacity: m, href: b }) {
  a && Ot(t14, "aria-label", (v) => a[v]), o && Ot(t14, "fill", (v) => o[v]), f && Ot(t14, "fill-opacity", (v) => f[v]), s && Ot(t14, "stroke", (v) => s[v]), d && Ot(t14, "stroke-opacity", (v) => d[v]), p && Ot(t14, "stroke-width", (v) => p[v]), m && Ot(t14, "opacity", (v) => m[v]), b && dS(t14, (v) => b[v], e), i || nV(t14, u);
}
function uV(t14, { target: e, tip: i }, { ariaLabel: a, title: u, fill: o, fillOpacity: f, stroke: s, strokeOpacity: d, strokeWidth: p, opacity: m, href: b }) {
  a && Ot(t14, "aria-label", ([v]) => a[v]), o && Ot(t14, "fill", ([v]) => o[v]), f && Ot(t14, "fill-opacity", ([v]) => f[v]), s && Ot(t14, "stroke", ([v]) => s[v]), d && Ot(t14, "stroke-opacity", ([v]) => d[v]), p && Ot(t14, "stroke-width", ([v]) => p[v]), m && Ot(t14, "opacity", ([v]) => m[v]), b && dS(t14, ([v]) => b[v], e), i || iV(t14, u);
}
function lV({ ariaLabel: t14, title: e, fill: i, fillOpacity: a, stroke: u, strokeOpacity: o, strokeWidth: f, opacity: s, href: d }, { tip: p }) {
  return [t14, p ? void 0 : e, i, a, u, o, f, s, d].filter((m) => m !== void 0);
}
function oV(t14, e, i) {
  const a = mO(t14, (u) => e[u]);
  return i === void 0 && a.size > 1 + t14.length >> 1 && Tr("Warning: the implicit z channel has high cardinality. This may occur when the fill or stroke channel is associated with quantitative data rather than ordinal or categorical data. You can suppress this warning by setting the z option explicitly; if this data represents a single series, set z to null."), a.values();
}
function* cV(t14, e, i, a) {
  const { z: u } = i, { z: o } = a, f = lV(a, i), s = [...e, ...f];
  for (const d of o ? oV(t14, o, u) : [t14]) {
    let p, m;
    t: for (const b of d) {
      for (const v of s) if (!Or(v[b])) {
        m && m.push(-1);
        continue t;
      }
      if (p === void 0) {
        m && (yield m), p = f.map((v) => qi(v[b])), m = [b];
        continue;
      }
      m.push(b);
      for (let v = 0; v < f.length; ++v) if (qi(f[v][b]) !== p[v]) {
        yield m, p = f.map((w) => qi(w[b])), m = [b];
        continue t;
      }
    }
    m && (yield m);
  }
}
function fV(t14, e, i, a) {
  let u;
  const { clip: o = a.clip } = e;
  o === "frame" ? (t14 = Xe("svg:g", a).each(function() {
    this.appendChild(t14.node()), t14.node = () => this;
  }), u = dV(a, i)) : o && (u = pV(o, a)), Ot(t14, "aria-label", e.ariaLabel), Ot(t14, "aria-description", e.ariaDescription), Ot(t14, "aria-hidden", e.ariaHidden), Ot(t14, "clip-path", u);
}
function sV(t14) {
  const e = /* @__PURE__ */ new WeakMap();
  return (i, a) => {
    let u = e.get(i);
    if (!u) {
      const o = sS();
      ua(i.ownerSVGElement).append("clipPath").attr("id", o).call(t14, i, a), e.set(i, u = `url(#${o})`);
    }
    return u;
  };
}
const dV = sV((t14, e, i) => {
  const { width: a, height: u, marginLeft: o, marginRight: f, marginTop: s, marginBottom: d } = i;
  t14.append("rect").attr("x", o).attr("y", s).attr("width", a - f - o).attr("height", u - s - d);
}), S6 = /* @__PURE__ */ new WeakMap(), hV = { type: "Sphere" };
function pV(t14, e) {
  let i, a;
  if ((i = S6.get(e)) || S6.set(e, i = /* @__PURE__ */ new WeakMap()), t14.type === "Sphere" && (t14 = hV), !(a = i.get(t14))) {
    const u = sS();
    ua(e.ownerSVGElement).append("clipPath").attr("id", u).append("path").attr("d", e.path()(t14)), i.set(t14, a = `url(#${u})`);
  }
  return a;
}
function Oa(t14, e, i, a) {
  fV(t14, e, i, a), Ot(t14, "class", e.className), Ot(t14, "fill", e.fill), Ot(t14, "fill-opacity", e.fillOpacity), Ot(t14, "stroke", e.stroke), Ot(t14, "stroke-width", e.strokeWidth), Ot(t14, "stroke-opacity", e.strokeOpacity), Ot(t14, "stroke-linejoin", e.strokeLinejoin), Ot(t14, "stroke-linecap", e.strokeLinecap), Ot(t14, "stroke-miterlimit", e.strokeMiterlimit), Ot(t14, "stroke-dasharray", e.strokeDasharray), Ot(t14, "stroke-dashoffset", e.strokeDashoffset), Ot(t14, "shape-rendering", e.shapeRendering), Ot(t14, "filter", e.imageFilter), Ot(t14, "paint-order", e.paintOrder);
  const { pointerEvents: u = a.pointerSticky === false ? "none" : void 0 } = e;
  Ot(t14, "pointer-events", u);
}
function Ca(t14, e) {
  mV(t14, "mix-blend-mode", e.mixBlendMode), Ot(t14, "opacity", e.opacity);
}
function dS(t14, e, i) {
  t14.each(function(a) {
    const u = e(a);
    if (u != null) {
      const o = this.ownerDocument.createElementNS(Mu.svg, "a");
      o.setAttribute("fill", "inherit"), o.setAttributeNS(Mu.xlink, "href", u), i != null && o.setAttribute("target", i), this.parentNode.insertBefore(o, this).appendChild(this);
    }
  });
}
function Ot(t14, e, i) {
  i != null && t14.attr(e, i);
}
function mV(t14, e, i) {
  i != null && t14.style(e, i);
}
function Da(t14, e, { x: i, y: a }, u = ln, o = ln) {
  u += e.dx, o += e.dy, (i == null ? void 0 : i.bandwidth) && (u += i.bandwidth() / 2), (a == null ? void 0 : a.bandwidth) && (o += a.bandwidth() / 2), (u || o) && t14.attr("transform", `translate(${u},${o})`);
}
function Ce(t14, e) {
  if ((t14 = He(t14)) !== e) return t14;
}
function Pl(t14, e) {
  if ((t14 = je(t14)) !== e) return t14;
}
const gV = /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function a1(t14) {
  if (t14 === void 0) return "plot-d6a7b5";
  if (t14 = `${t14}`, !gV.test(t14)) throw new Error(`invalid class name: ${t14}`);
  return t14;
}
function u1(t14, e) {
  if (typeof e == "string") t14.property("style", e);
  else if (e != null) for (const i of t14) Object.assign(i.style, e);
}
function Cd({ frameAnchor: t14 }, { width: e, height: i, marginTop: a, marginRight: u, marginBottom: o, marginLeft: f }) {
  return [/left$/.test(t14) ? f : /right$/.test(t14) ? e - u : (f + e - u) / 2, /^top/.test(t14) ? a : /^bottom/.test(t14) ? i - o : (a + i - o) / 2];
}
class si {
  constructor(e, i = {}, a = {}, u) {
    const { facet: o = "auto", facetAnchor: f, fx: s, fy: d, sort: p, dx: m = 0, dy: b = 0, margin: v = 0, marginTop: y = v, marginRight: w = v, marginBottom: S = v, marginLeft: x = v, className: T, clip: E = u == null ? void 0 : u.clip, channels: D, tip: O, render: A } = a;
    if (this.data = e, this.sort = Eo(p) ? p : null, this.initializer = ks(a).initializer, this.transform = this.initializer ? a.transform : yL(a).transform, o === null || o === false ? this.facet = null : (this.facet = Yn(o === true ? "include" : o, "facet", ["auto", "include", "exclude", "super"]), this.fx = e === Wf && typeof s == "string" ? [s] : s, this.fy = e === Wf && typeof d == "string" ? [d] : d), this.facetAnchor = $H(f), i = U8(i), D !== void 0 && (i = { ...bV(D), ...i }), u !== void 0 && (i = { ...eV(this, a, u), ...i }), this.channels = Object.fromEntries(Object.entries(i).map(([$, N]) => {
      if (Fg(N.value)) {
        const { value: H, label: z = N.label, scale: G = N.scale } = N.value;
        N = { ...N, label: z, scale: G, value: H };
      }
      if (e === Wf && typeof N.value == "string") {
        const { value: H } = N;
        N = { ...N, value: [H] };
      }
      return [$, N];
    }).filter(([$, { value: N, optional: H }]) => {
      if (N != null) return true;
      if (H) return false;
      throw new Error(`missing channel value: ${$}`);
    })), this.dx = +m, this.dy = +b, this.marginTop = +y, this.marginRight = +w, this.marginBottom = +S, this.marginLeft = +x, this.clip = L8(E), this.tip = vV(O), this.className = He(T), this.facet === "super") {
      if (s || d) throw new Error("super-faceting cannot use fx or fy");
      for (const $ in this.channels) {
        const { scale: N } = i[$];
        if (!(N !== "x" && N !== "y")) throw new Error("super-faceting cannot use x or y");
      }
    }
    A != null && (this.render = pS(A, this.render));
  }
  initialize(e, i, a) {
    let u = Uu(this.data);
    e === void 0 && u != null && (e = [Zo(u)]);
    const o = e;
    this.transform != null && ({ facets: e, data: u } = this.transform(u, e, a), u = Uu(u)), e !== void 0 && (e.original = o);
    const f = RL(this.channels, u);
    return this.sort != null && $L(u, e, f, i, this.sort), { data: u, facets: e, channels: f };
  }
  filter(e, i, a) {
    for (const u in i) {
      const { filter: o = Or } = i[u];
      if (o !== null) {
        const f = a[u];
        e = e.filter((s) => o(f[s]));
      }
    }
    return e;
  }
  project(e, i, a) {
    for (const u in e) if (e[u].scale === "x" && /^x|x$/.test(u)) {
      const o = u.replace(/^x|x$/, "y");
      o in e && e[o].scale === "y" && YH(u, o, i, a.projection);
    }
  }
  scale(e, i, a) {
    const u = NL(e, i);
    return a.projection && this.project(e, u, a), u;
  }
}
function hS(...t14) {
  return t14.plot = si.prototype.plot, t14;
}
function pS(t14, e) {
  if (t14 == null) return e === null ? void 0 : e;
  if (e == null) return t14 === null ? void 0 : t14;
  if (typeof t14 != "function") throw new TypeError(`invalid render transform: ${t14}`);
  if (typeof e != "function") throw new TypeError(`invalid render transform: ${e}`);
  return function(i, a, u, o, f, s) {
    return t14.call(this, i, a, u, o, f, (d, p, m, b, v) => e.call(this, d, p, m, b, v, s));
  };
}
function bV(t14) {
  return Object.fromEntries(Object.entries(U8(t14)).map(([e, i]) => (i = typeof i == "string" ? { value: i, label: e } : xd(i), i.filter === void 0 && i.scale == null && (i = { ...i, filter: null }), [e, i])));
}
function vV(t14) {
  return t14 === true ? "xy" : t14 === false || t14 == null ? null : typeof t14 == "string" ? Yn(t14, "tip", ["x", "y", "xy"]) : t14;
}
function mS(t14, e) {
  return (t14 == null ? void 0 : t14.tip) === true ? { ...t14, tip: e } : Ta(t14 == null ? void 0 : t14.tip) && t14.tip.pointer === void 0 ? { ...t14, tip: { ...t14.tip, pointer: e } } : t14;
}
function yV(t14, e, i = {}) {
  let a = 0.5 - ln, u = 0.5 + ln, o = 0.5 + ln, f = 0.5 - ln;
  for (const { marginTop: S, marginRight: x, marginBottom: T, marginLeft: E } of e) S > a && (a = S), x > u && (u = x), T > o && (o = T), E > f && (f = E);
  let { margin: s, marginTop: d = s !== void 0 ? s : a, marginRight: p = s !== void 0 ? s : u, marginBottom: m = s !== void 0 ? s : o, marginLeft: b = s !== void 0 ? s : f } = i;
  d = +d, p = +p, m = +m, b = +b;
  let { width: v = 640, height: y = _V(t14, i, { width: v, marginTopDefault: a, marginRightDefault: u, marginBottomDefault: o, marginLeftDefault: f }) + Math.max(0, d - a + m - o) } = i;
  v = +v, y = +y;
  const w = { width: v, height: y, marginTop: d, marginRight: p, marginBottom: m, marginLeft: b };
  if (t14.fx || t14.fy) {
    let { margin: S, marginTop: x = S !== void 0 ? S : d, marginRight: T = S !== void 0 ? S : p, marginBottom: E = S !== void 0 ? S : m, marginLeft: D = S !== void 0 ? S : b } = i.facet ?? {};
    x = +x, T = +T, E = +E, D = +D, w.facet = { marginTop: x, marginRight: T, marginBottom: E, marginLeft: D };
  }
  return w;
}
function _V({ x: t14, y: e, fy: i, fx: a }, { projection: u, aspectRatio: o }, { width: f, marginTopDefault: s, marginRightDefault: d, marginBottomDefault: p, marginLeftDefault: m }) {
  const b = i && i.scale.domain().length || 1, v = XH(u);
  if (v) {
    const w = a ? a.scale.domain().length : 1, S = (1.1 * b - 0.1) / (1.1 * w - 0.1) * v, x = Math.max(0.1, Math.min(10, S));
    return Math.round((f - m - d) * x + s + p);
  }
  const y = e ? Aa(e) ? e.scale.domain().length || 1 : Math.max(7, 17 / b) : 1;
  if (o != null) {
    if (o = +o, !(isFinite(o) && o > 0)) throw new Error(`invalid aspectRatio: ${o}`);
    const w = x6("y", e) / (x6("x", t14) * o), S = a ? a.scale.bandwidth() : 1, x = i ? i.scale.bandwidth() : 1, T = S * (f - m - d) - t14.insetLeft - t14.insetRight;
    return (w * T + e.insetTop + e.insetBottom) / x + s + p;
  }
  return !!(e || i) * Math.max(1, Math.min(60, y * b)) * 20 + !!a * 30 + 60;
}
function x6(t14, e) {
  if (!e) throw new Error(`aspectRatio requires ${t14} scale`);
  const { type: i, domain: a } = e;
  let u;
  switch (i) {
    case "linear":
    case "utc":
    case "time":
      u = Number;
      break;
    case "pow": {
      const s = e.scale.exponent();
      u = (d) => Math.pow(d, s);
      break;
    }
    case "log":
      u = Math.log;
      break;
    case "point":
    case "band":
      return a.length;
    default:
      throw new Error(`unsupported ${t14} scale for aspectRatio: ${i}`);
  }
  const [o, f] = Mr(a);
  return Math.abs(u(f) - u(o));
}
const M6 = /* @__PURE__ */ new WeakMap();
function l1(t14, e, { x: i, y: a, px: u, py: o, maxRadius: f = 40, channels: s, render: d, ...p } = {}) {
  return f = +f, u != null && (i ?? (i = null), s = { ...s, px: { value: u, scale: "x" } }), o != null && (a ?? (a = null), s = { ...s, py: { value: o, scale: "y" } }), { x: i, y: a, channels: s, ...p, render: pS(function(m, b, v, y, w, S) {
    w = { ...w, pointerSticky: false };
    const x = w.ownerSVGElement, { data: T } = w.getMarkState(this);
    let E = M6.get(x);
    E || M6.set(x, E = { sticky: false, roots: [], renders: [] });
    let D = E.renders.push(K) - 1;
    const { x: O, y: A, fx: $, fy: N } = b;
    let H = $ ? $(m.fx) - y.marginLeft : 0, z = N ? N(m.fy) - y.marginTop : 0;
    (O == null ? void 0 : O.bandwidth) && (H += O.bandwidth() / 2), (A == null ? void 0 : A.bandwidth) && (z += A.bandwidth() / 2);
    const G = m.fi != null;
    let V;
    if (G) {
      let st = E.facetStates;
      st || (E.facetStates = st = /* @__PURE__ */ new Map()), V = st.get(this), V || st.set(this, V = /* @__PURE__ */ new Map());
    }
    const [lt, ft] = Cd(this, y), { px: ct, py: Y } = v, q = ct ? (st) => ct[st] : gS(v, lt), ut = Y ? (st) => Y[st] : bS(v, ft);
    let nt, P, C, B;
    function Q(st, pt) {
      if (G) if (B && (B = cancelAnimationFrame(B)), st == null) V.delete(m.fi);
      else {
        V.set(m.fi, pt), B = requestAnimationFrame(() => {
          B = null;
          for (const [W, ot] of V) if (ot < pt || ot === pt && W < m.fi) {
            st = null;
            break;
          }
          K(st);
        });
        return;
      }
      K(st);
    }
    function K(st) {
      if (nt === st && C === E.sticky) return;
      nt = st, C = w.pointerSticky = E.sticky;
      const pt = nt == null ? [] : [nt];
      G && (pt.fx = m.fx, pt.fy = m.fy, pt.fi = m.fi);
      const W = S(pt, b, v, y, w);
      if (P) {
        if (G) {
          const ot = P.parentNode, mt = P.getAttribute("transform"), et = W.getAttribute("transform");
          mt ? W.setAttribute("transform", mt) : W.removeAttribute("transform"), et ? ot.setAttribute("transform", et) : ot.removeAttribute("transform"), W.removeAttribute("aria-label"), W.removeAttribute("aria-description"), W.removeAttribute("aria-hidden");
        }
        P.replaceWith(W);
      }
      if (E.roots[D] = P = W, !(nt == null && (V == null ? void 0 : V.size) > 1)) {
        const ot = nt == null ? null : Fo(T) ? T[nt] : T.get(nt);
        w.dispatchValue(ot);
      }
      return W;
    }
    function tt(st) {
      if (E.sticky || st.pointerType === "mouse" && st.buttons === 1) return;
      let [pt, W] = _D(st);
      pt -= H, W -= z;
      const ot = pt < y.marginLeft || pt > y.width - y.marginRight ? 1 : t14, mt = W < y.marginTop || W > y.height - y.marginBottom ? 1 : e;
      let et = null, Nt = f * f;
      for (const wt of m) {
        const Vt = ot * (q(wt) - pt), Ft = mt * (ut(wt) - W), Te = Vt * Vt + Ft * Ft;
        Te <= Nt && (et = wt, Nt = Te);
      }
      if (et != null && (t14 !== 1 || e !== 1)) {
        const wt = q(et) - pt, Vt = ut(et) - W;
        Nt = wt * wt + Vt * Vt;
      }
      Q(et, Nt);
    }
    function ht(st) {
      st.pointerType === "mouse" && nt != null && (E.sticky && E.roots.some((pt) => pt == null ? void 0 : pt.contains(st.target)) || (E.sticky ? (E.sticky = false, E.renders.forEach((pt) => pt(null))) : (E.sticky = true, K(nt)), st.stopImmediatePropagation()));
    }
    function dt(st) {
      st.pointerType === "mouse" && (E.sticky || Q(null));
    }
    return x.addEventListener("pointerenter", tt), x.addEventListener("pointermove", tt), x.addEventListener("pointerdown", ht), x.addEventListener("pointerleave", dt), K(null);
  }, d) };
}
function wV(t14) {
  return l1(1, 1, t14);
}
function SV(t14) {
  return l1(1, 0.01, t14);
}
function T6(t14) {
  return l1(0.01, 1, t14);
}
function gS({ x1: t14, x2: e, x: i = t14 }, a) {
  return t14 && e ? (u) => (t14[u] + e[u]) / 2 : i ? (u) => i[u] : () => a;
}
function bS({ y1: t14, y2: e, y: i = t14 }, a) {
  return t14 && e ? (u) => (t14[u] + e[u]) / 2 : i ? (u) => i[u] : () => a;
}
function vS(t14) {
  return Aa(t14) && t14.interval === void 0 ? void 0 : "tabular-nums";
}
function xV(t14, e) {
  let { label: i = t14.label, tickSize: a = 6, width: u = 240, height: o = 44 + a, marginTop: f = 18, marginRight: s = 0, marginBottom: d = 16 + a, marginLeft: p = 0, style: m, ticks: b = (u - p - s) / 64, tickFormat: v, fontVariant: y = vS(t14), round: w = true, opacity: S, className: x } = e;
  const T = i1(e);
  x = a1(x), S = un(S)[1], v === null && (v = () => null);
  const E = Xe("svg", T).attr("class", `${x}-ramp`).attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("width", u).attr("height", o).attr("viewBox", `0 0 ${u} ${o}`).call((lt) => lt.append("style").text(`:where(.${x}-ramp) {
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
:where(.${x}-ramp text) {
  white-space: pre;
}`)).call(u1, m);
  let D = (lt) => lt.selectAll(".tick line").attr("y1", f + d - o), O;
  const A = w ? (lt, ft) => lt.rangeRound(ft) : (lt, ft) => lt.range(ft), { type: $, domain: N, range: H, interpolate: z, scale: G, pivot: V } = t14;
  if (z) {
    const lt = H === void 0 ? z : rd(z.length === 1 ? t1(z) : z, H);
    O = A(G.copy(), jn(Le(p, u - s), Math.min(N.length + (V !== void 0), H === void 0 ? 1 / 0 : H.length)));
    const ft = 256, ct = T.document.createElement("canvas");
    ct.width = ft, ct.height = 1;
    const Y = ct.getContext("2d");
    for (let q = 0, ut = ft - 1; q < ft; ++q) Y.fillStyle = lt(q / ut), Y.fillRect(q, 0, 1, 1);
    E.append("image").attr("opacity", S).attr("x", p).attr("y", f).attr("width", u - p - s).attr("height", o - f - d).attr("preserveAspectRatio", "none").attr("xlink:href", ct.toDataURL());
  } else if ($ === "threshold") {
    const lt = N, ft = v === void 0 ? (ct) => ct : typeof v == "string" ? Bu(v) : v;
    O = A(Cg().domain([-1, H.length - 1]), [p, u - s]), E.append("g").attr("fill-opacity", S).selectAll().data(H).enter().append("rect").attr("x", (ct, Y) => O(Y - 1)).attr("y", f).attr("width", (ct, Y) => O(Y) - O(Y - 1)).attr("height", o - f - d).attr("fill", (ct) => ct), b = Be(lt, (ct, Y) => Y), v = (ct) => ft(lt[ct], ct);
  } else O = A(fd().domain(N), [p, u - s]), E.append("g").attr("fill-opacity", S).selectAll().data(N).enter().append("rect").attr("x", O).attr("y", f).attr("width", Math.max(0, O.bandwidth() - 1)).attr("height", o - f - d).attr("fill", G), D = () => {
  };
  return E.append("g").attr("transform", `translate(0,${o - d})`).call(HO(O).ticks(Array.isArray(b) ? null : b, typeof v == "string" ? v : void 0).tickFormat(typeof v == "function" ? v : void 0).tickSize(a).tickValues(Array.isArray(b) ? b : null)).attr("font-size", null).attr("font-family", null).attr("font-variant", Ce(y, "normal")).call(D).call((lt) => lt.select(".domain").remove()), i !== void 0 && E.append("text").attr("x", p).attr("y", f - 6).attr("fill", "currentColor").attr("font-weight", "bold").text(i), E.node();
}
const yS = Math.PI / 180;
function o1(t14, { marker: e, markerStart: i = e, markerMid: a = e, markerEnd: u = e } = {}) {
  t14.markerStart = Dp(i), t14.markerMid = Dp(a), t14.markerEnd = Dp(u);
}
function Dp(t14) {
  if (t14 == null || t14 === false) return null;
  if (t14 === true) return A6;
  if (typeof t14 == "function") return t14;
  switch (`${t14}`.toLowerCase()) {
    case "none":
      return null;
    case "arrow":
      return E6("auto");
    case "arrow-reverse":
      return E6("auto-start-reverse");
    case "dot":
      return MV;
    case "circle":
    case "circle-fill":
      return A6;
    case "circle-stroke":
      return TV;
    case "tick":
      return Rp("auto");
    case "tick-x":
      return Rp(90);
    case "tick-y":
      return Rp(0);
  }
  throw new Error(`invalid marker: ${t14}`);
}
function E6(t14) {
  return (e, i) => Xe("svg:marker", i).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("orient", t14).attr("fill", "none").attr("stroke", e).attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").call((a) => a.append("path").attr("d", "M-1.5,-3l3,3l-3,3")).node();
}
function MV(t14, e) {
  return Xe("svg:marker", e).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", t14).attr("stroke", "none").call((i) => i.append("circle").attr("r", 2.5)).node();
}
function A6(t14, e) {
  return Xe("svg:marker", e).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", t14).attr("stroke", "var(--plot-background)").attr("stroke-width", 1.5).call((i) => i.append("circle").attr("r", 3)).node();
}
function TV(t14, e) {
  return Xe("svg:marker", e).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "var(--plot-background)").attr("stroke", t14).attr("stroke-width", 1.5).call((i) => i.append("circle").attr("r", 3)).node();
}
function Rp(t14) {
  return (e, i) => Xe("svg:marker", i).attr("viewBox", "-3 -3 6 6").attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", t14).attr("stroke", e).call((a) => a.append("path").attr("d", "M0,-3v6")).node();
}
let EV = 0;
function _S(t14, e, { stroke: i }, a) {
  return SS(t14, e, i && ((u) => i[u]), null, a);
}
function AV(t14, e, { stroke: i, z: a }, u) {
  return SS(t14, e, i && (([o]) => i[o]), a, u);
}
const Gm = 1, wS = 2;
function OV(t14, e) {
  const i = new Uint8Array(e.length), a = t14.data().filter((o) => o.length > 1), u = a.length;
  for (let o = 0, f = Ym; o < u; ++o) {
    const s = a[o];
    if (s.length > 1) {
      const d = s[0];
      f !== (f = qi(e[d])) && (i[d] |= Gm);
    }
  }
  for (let o = u - 1, f = Ym; o >= 0; --o) {
    const s = a[o];
    if (s.length > 1) {
      const d = s[0];
      f !== (f = qi(e[d])) && (i[d] |= wS);
    }
  }
  return ([o]) => i[o];
}
function SS(t14, { markerStart: e, markerMid: i, markerEnd: a, stroke: u }, o = () => u, f, s) {
  if (!e && !i && !a) return;
  const d = /* @__PURE__ */ new Map(), p = f && OV(t14, f);
  function m(b, v, y) {
    return function(w) {
      if (y && !y(w)) return;
      const S = o(w);
      let x = d.get(v);
      x || d.set(v, x = /* @__PURE__ */ new Map());
      let T = x.get(S);
      if (!T) {
        const E = this.parentNode.insertBefore(v(S, s), this), D = `plot-marker-${++EV}`;
        E.setAttribute("id", D), x.set(S, T = `url(#${D})`);
      }
      this.setAttribute(b, T);
    };
  }
  e && t14.each(m("marker-start", e, p && ((b) => p(b) & Gm))), i && p && t14.each(m("marker-start", i, (b) => !(p(b) & Gm))), i && t14.each(m("marker-mid", i)), a && t14.each(m("marker-end", a, p && ((b) => p(b) & wS)));
}
function xS({ inset: t14, insetLeft: e, insetRight: i, ...a } = {}) {
  return [e, i] = TS(t14, e, i), { inset: t14, insetLeft: e, insetRight: i, ...a };
}
function MS({ inset: t14, insetTop: e, insetBottom: i, ...a } = {}) {
  return [e, i] = TS(t14, e, i), { inset: t14, insetTop: e, insetBottom: i, ...a };
}
function TS(t14, e, i) {
  return t14 === void 0 && e === void 0 && i === void 0 ? ln ? [1, 0] : [0.5, 0.5] : [e, i];
}
function ES(t14, { interval: e }) {
  return t14 = { ...xd(t14) }, t14.interval = Kg(t14.interval === void 0 ? e : t14.interval), t14;
}
function AS(t14, e, i, a) {
  const { [t14]: u, [`${t14}1`]: o, [`${t14}2`]: f } = i, { value: s, interval: d } = ES(u, i);
  if (s == null || d == null) return i;
  const p = Sd(u);
  if (d == null) {
    let y;
    const w = { transform: (S) => y || (y = Cr(S, s)), label: p };
    return { ...i, [t14]: void 0, [`${t14}1`]: o === void 0 ? w : o, [`${t14}2`]: f === void 0 && !(o === f && a) ? w : f };
  }
  let m, b;
  function v(y) {
    return b !== void 0 && y === m ? b : b = Be(Cr(m = y, s), (w) => d.floor(w));
  }
  return e({ ...i, [t14]: void 0, [`${t14}1`]: o === void 0 ? { transform: v, label: p } : o, [`${t14}2`]: f === void 0 ? { transform: (y) => v(y).map((w) => d.offset(w)), label: p } : f });
}
function OS(t14, e, i) {
  const { [t14]: a } = i, { value: u, interval: o } = ES(a, i);
  return u == null || o == null ? i : e({ ...i, [t14]: { label: Sd(a), transform: (f) => {
    const s = Be(Cr(f, u), (p) => o.floor(p)), d = s.map((p) => o.offset(p));
    return s.map(oi(s) ? (p, m) => p == null || isNaN(p = +p) || (m = d[m], m == null) || isNaN(m = +m) ? void 0 : new Date((p + m) / 2) : (p, m) => p == null || (m = d[m], m == null) ? NaN : (+p + +m) / 2);
  } } });
}
function CV(t14 = {}) {
  return AS("x", xS, t14);
}
function DV(t14 = {}) {
  return AS("y", MS, t14);
}
function RV(t14 = {}) {
  return OS("x", xS, t14);
}
function NV(t14 = {}) {
  return OS("y", MS, t14);
}
const CS = { ariaLabel: "rule", fill: null, stroke: "currentColor" };
class $V extends si {
  constructor(e, i = {}) {
    const { x: a, y1: u, y2: o, inset: f = 0, insetTop: s = f, insetBottom: d = f } = i;
    super(e, { x: { value: a, scale: "x", optional: true }, y1: { value: u, scale: "y", optional: true }, y2: { value: o, scale: "y", optional: true } }, mS(i, "x"), CS), this.insetTop = je(s), this.insetBottom = je(d), o1(this, i);
  }
  render(e, i, a, u, o) {
    const { x: f, y: s } = i, { x: d, y1: p, y2: m } = a, { width: b, height: v, marginTop: y, marginRight: w, marginLeft: S, marginBottom: x } = u, { insetTop: T, insetBottom: E } = this;
    return Xe("svg:g", o).call(Oa, this, u, o).call(Da, this, { x: d && f }, ln, 0).call((D) => D.selectAll().data(e).enter().append("line").call(Ca, this).attr("x1", d ? (O) => d[O] : (S + b - w) / 2).attr("x2", d ? (O) => d[O] : (S + b - w) / 2).attr("y1", p && !Ys(s) ? (O) => p[O] + T : y + T).attr("y2", m && !Ys(s) ? s.bandwidth ? (O) => m[O] + s.bandwidth() - E : (O) => m[O] - E : v - x - E).call(tc, this, a).call(_S, this, a, o)).node();
  }
}
class zV extends si {
  constructor(e, i = {}) {
    const { x1: a, x2: u, y: o, inset: f = 0, insetRight: s = f, insetLeft: d = f } = i;
    super(e, { y: { value: o, scale: "y", optional: true }, x1: { value: a, scale: "x", optional: true }, x2: { value: u, scale: "x", optional: true } }, mS(i, "y"), CS), this.insetRight = je(s), this.insetLeft = je(d), o1(this, i);
  }
  render(e, i, a, u, o) {
    const { x: f, y: s } = i, { y: d, x1: p, x2: m } = a, { width: b, height: v, marginTop: y, marginRight: w, marginLeft: S, marginBottom: x } = u, { insetLeft: T, insetRight: E } = this;
    return Xe("svg:g", o).call(Oa, this, u, o).call(Da, this, { y: d && s }, 0, ln).call((D) => D.selectAll().data(e).enter().append("line").call(Ca, this).attr("x1", p && !Ys(f) ? (O) => p[O] + T : S + T).attr("x2", m && !Ys(f) ? f.bandwidth ? (O) => m[O] + f.bandwidth() - E : (O) => m[O] - E : b - w - E).attr("y1", d ? (O) => d[O] : (y + v - x) / 2).attr("y2", d ? (O) => d[O] : (y + v - x) / 2).call(tc, this, a).call(_S, this, a, o)).node();
  }
}
function UV(t14, e) {
  let { x: i = Qi, y: a, y1: u, y2: o, ...f } = DV(e);
  return [u, o] = DS(a, u, o), new $V(t14, { ...f, x: i, y1: u, y2: o });
}
function LV(t14, e) {
  let { y: i = Qi, x: a, x1: u, x2: o, ...f } = CV(e);
  return [u, o] = DS(a, u, o), new zV(t14, { ...f, y: i, x1: u, x2: o });
}
function DS(t14, e, i) {
  if (t14 == null) {
    if (e === void 0) {
      if (i !== void 0) return [0, i];
    } else if (i === void 0) return [0, e];
  } else {
    if (e === void 0) return i === void 0 ? [0, t14] : [t14, i];
    if (i === void 0) return [t14, e];
  }
  return [e, i];
}
function RS(t14, ...e) {
  let i = e.length;
  for (let a = 0, u = true; a < i; ++a) typeof e[a] != "function" && (u && (t14 = t14.slice(), u = false), t14.splice(a, 2, t14[a] + e[a] + t14[a + 1]), e.splice(a, 1), --a, --i);
  return (a) => {
    let u = t14[0];
    for (let o = 0; o < i; ++o) u += e[o](a) + t14[o + 1];
    return u;
  };
}
const HV = { ariaLabel: "text", strokeLinejoin: "round", strokeWidth: 3, paintOrder: "stroke" }, NS = "\xAD";
class c1 extends si {
  constructor(e, i = {}) {
    const { x: a, y: u, text: o = Ea(e) && z8(e) ? Qi : FU, frameAnchor: f, textAnchor: s = /right$/i.test(f) ? "end" : /left$/i.test(f) ? "start" : "middle", lineAnchor: d = /^top/i.test(f) ? "top" : /^bottom/i.test(f) ? "bottom" : "middle", lineHeight: p = 1, lineWidth: m = 1 / 0, textOverflow: b, monospace: v, fontFamily: y = v ? "ui-monospace, monospace" : void 0, fontSize: w, fontStyle: S, fontVariant: x, fontWeight: T, rotate: E } = i, [D, O] = un(E, 0), [A, $] = YV(w);
    if (super(e, { x: { value: a, scale: "x", optional: true }, y: { value: u, scale: "y", optional: true }, fontSize: { value: A, optional: true }, rotate: { value: iL(D), optional: true }, text: { value: o, filter: jg, optional: true } }, i, HV), this.rotate = O, this.textAnchor = Ce(s, "middle"), this.lineAnchor = Yn(d, "lineAnchor", ["top", "middle", "bottom"]), this.lineHeight = +p, this.lineWidth = +m, this.textOverflow = $S(b), this.monospace = !!v, this.fontFamily = He(y), this.fontSize = $, this.fontStyle = He(S), this.fontVariant = He(x), this.fontWeight = He(T), this.frameAnchor = Pg(f), !(this.lineWidth >= 0)) throw new Error(`invalid lineWidth: ${m}`);
    this.splitLines = LS(this), this.clipLine = HS(this);
  }
  render(e, i, a, u, o) {
    const { x: f, y: s } = i, { x: d, y: p, rotate: m, text: b, title: v, fontSize: y } = a, { rotate: w } = this, [S, x] = Cd(this, u);
    return Xe("svg:g", o).call(Oa, this, u, o).call(US, this, b, u).call(Da, this, { x: d && f, y: p && s }).call((T) => T.selectAll().data(e).enter().append("text").call(Ca, this).call(VV, this, b, v).attr("transform", RS`translate(${d ? (E) => d[E] : S},${p ? (E) => p[E] : x})${m ? (E) => ` rotate(${m[E]})` : w ? ` rotate(${w})` : ""}`).call(Ot, "font-size", y && ((E) => y[E])).call(tc, this, a)).node();
  }
}
function $S(t14) {
  return t14 == null ? null : Yn(t14, "textOverflow", ["clip", "ellipsis", "clip-start", "clip-end", "ellipsis-start", "ellipsis-middle", "ellipsis-end"]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function VV(t14, e, i, a) {
  if (!i) return;
  const { lineAnchor: u, lineHeight: o, textOverflow: f, splitLines: s, clipLine: d } = e;
  t14.each(function(p) {
    const m = s(Lu(i[p]) ?? "").map(d), b = m.length, v = u === "top" ? 0.71 : u === "bottom" ? 1 - b : (164 - b * 100) / 200;
    if (b > 1) {
      let y = 0;
      for (let w = 0; w < b; ++w) {
        if (++y, !m[w]) continue;
        const S = this.ownerDocument.createElementNS(Mu.svg, "tspan");
        S.setAttribute("x", 0), w === y - 1 ? S.setAttribute("y", `${(v + w) * o}em`) : S.setAttribute("dy", `${y * o}em`), S.textContent = m[w], this.appendChild(S), y = 0;
      }
    } else v && this.setAttribute("y", `${v * o}em`), this.textContent = m[0];
    if (f && !a && m[0] !== i[p]) {
      const y = this.ownerDocument.createElementNS(Mu.svg, "title");
      y.textContent = i[p], this.appendChild(y);
    }
  });
}
function zS(t14, { x: e, y: i, ...a } = {}) {
  return a.frameAnchor === void 0 && ([e, i] = Zg(e, i)), new c1(t14, { ...a, x: e, y: i });
}
function jV(t14, { x: e = Qi, ...i } = {}) {
  return new c1(t14, NV({ ...i, x: e }));
}
function BV(t14, { y: e = Qi, ...i } = {}) {
  return new c1(t14, RV({ ...i, y: e }));
}
function US(t14, e, i) {
  Ot(t14, "text-anchor", e.textAnchor), Ot(t14, "font-family", e.fontFamily), Ot(t14, "font-size", e.fontSize), Ot(t14, "font-style", e.fontStyle), Ot(t14, "font-variant", e.fontVariant === void 0 ? qV(i) : e.fontVariant), Ot(t14, "font-weight", e.fontWeight);
}
function qV(t14) {
  return t14 && (uL(t14) || oi(t14)) ? "tabular-nums" : void 0;
}
const kV = /* @__PURE__ */ new Set(["inherit", "initial", "revert", "unset", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "larger", "smaller"]);
function YV(t14) {
  return t14 == null || typeof t14 == "number" ? [void 0, t14] : typeof t14 != "string" ? [t14, void 0] : (t14 = t14.trim().toLowerCase(), kV.has(t14) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(t14) ? [void 0, t14] : [t14, void 0]);
}
function GV(t14, e, i) {
  const a = [];
  let u, o = 0;
  for (const [f, s, d] of XV(t14)) {
    if (u === void 0 && (u = f), o > u && i(t14, u, s) > e && (a.push(t14.slice(u, o) + (t14[o - 1] === NS ? "-" : "")), u = f), d) {
      a.push(t14.slice(u, s)), u = void 0;
      continue;
    }
    o = s;
  }
  return a;
}
function* XV(t14) {
  let e = 0, i = 0;
  const a = t14.length;
  for (; i < a; ) {
    let u = 1;
    switch (t14[i]) {
      case NS:
      case "-":
        ++i, yield [e, i, false], e = i;
        break;
      case " ":
        for (yield [e, i, false]; t14[++i] === " "; ) ;
        e = i;
        break;
      case "\r":
        t14[i + 1] === `
` && ++u;
      case `
`:
        yield [e, i, true], i += u, e = i;
        break;
      default:
        ++i;
        break;
    }
  }
  yield [e, i, true];
}
const O6 = { a: 56, b: 63, c: 57, d: 63, e: 58, f: 37, g: 62, h: 60, i: 26, j: 26, k: 55, l: 26, m: 88, n: 60, o: 60, p: 62, q: 62, r: 39, s: 54, t: 38, u: 60, v: 55, w: 79, x: 54, y: 55, z: 55, A: 69, B: 67, C: 73, D: 74, E: 61, F: 58, G: 76, H: 75, I: 28, J: 55, K: 67, L: 58, M: 89, N: 75, O: 78, P: 65, Q: 78, R: 67, S: 65, T: 65, U: 75, V: 69, W: 98, X: 69, Y: 67, Z: 67, 0: 64, 1: 48, 2: 62, 3: 64, 4: 66, 5: 63, 6: 65, 7: 58, 8: 65, 9: 65, " ": 29, "!": 32, '"': 49, "'": 31, "(": 39, ")": 39, ",": 31, "-": 48, ".": 31, "/": 32, ":": 31, ";": 31, "?": 52, "\u2018": 31, "\u2019": 31, "\u201C": 47, "\u201D": 47, "\u2026": 82 };
function f1(t14, e = 0, i = t14.length) {
  let a = 0;
  for (let u = e; u < i; u = ku(t14, u)) a += O6[t14[u]] ?? (jS(t14, u) ? 120 : O6.e);
  return a;
}
function s1(t14, e = 0, i = t14.length) {
  let a = 0;
  for (let u = e; u < i; u = ku(t14, u)) a += jS(t14, u) ? 126 : 63;
  return a;
}
function LS({ monospace: t14, lineWidth: e, textOverflow: i }) {
  if (i != null || e == 1 / 0) return (o) => o.split(/\r\n?|\n/g);
  const a = t14 ? s1 : f1, u = e * 100;
  return (o) => GV(o, u, a);
}
function HS({ monospace: t14, lineWidth: e, textOverflow: i }) {
  if (i == null || e == 1 / 0) return (o) => o;
  const a = t14 ? s1 : f1, u = e * 100;
  switch (i) {
    case "clip-start":
      return (o) => D6(o, u, a, "");
    case "clip-end":
      return (o) => C6(o, u, a, "");
    case "ellipsis-start":
      return (o) => D6(o, u, a, Su);
    case "ellipsis-middle":
      return (o) => FV(o, u, a, Su);
    case "ellipsis-end":
      return (o) => C6(o, u, a, Su);
  }
}
const Su = "\u2026";
function Hu(t14, e, i, a) {
  const u = [];
  let o = 0;
  for (let f = 0, s = 0, d = t14.length; f < d; f = s) {
    s = ku(t14, f);
    const p = i(t14, f, s);
    if (o + p > e) {
      for (o += a; o > e && f > 0; ) s = f, f = u.pop(), o -= i(t14, f, s);
      return [f, e - o];
    }
    o += p, u.push(f);
  }
  return [-1, 0];
}
function C6(t14, e, i, a) {
  t14 = t14.trim();
  const u = i(a), [o] = Hu(t14, e, i, u);
  return o < 0 ? t14 : t14.slice(0, o).trimEnd() + a;
}
function FV(t14, e, i, a) {
  t14 = t14.trim();
  const u = i(t14);
  if (u <= e) return t14;
  const o = i(a) / 2, [f, s] = Hu(t14, e / 2, i, o), [d] = Hu(t14, u - e / 2 - s + o, i, -o);
  return d < 0 ? a : t14.slice(0, f).trimEnd() + a + t14.slice(ku(t14, d)).trimStart();
}
function D6(t14, e, i, a) {
  t14 = t14.trim();
  const u = i(t14);
  if (u <= e) return t14;
  const o = i(a), [f] = Hu(t14, u - e + o, i, -o);
  return f < 0 ? a : a + t14.slice(ku(t14, f)).trimStart();
}
const Xm = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy, R6 = new RegExp("\\p{Extended_Pictographic}", "uy");
function ku(t14, e) {
  return e += ZV(t14, e) ? 2 : 1, KV(t14, e) && (e = Xm.lastIndex), QV(t14, e) ? ku(t14, e + 1) : e;
}
function VS(t14, e) {
  return t14.charCodeAt(e) < 128;
}
function ZV(t14, e) {
  const i = t14.charCodeAt(e);
  if (i >= 55296 && i < 56320) {
    const a = t14.charCodeAt(e + 1);
    return a >= 56320 && a < 57344;
  }
  return false;
}
function QV(t14, e) {
  return t14.charCodeAt(e) === 8205;
}
function KV(t14, e) {
  return VS(t14, e) ? false : (Xm.lastIndex = e, Xm.test(t14));
}
function jS(t14, e) {
  return VS(t14, e) ? false : (R6.lastIndex = e, R6.test(t14));
}
const PV = { ariaLabel: "vector", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinejoin: "round", strokeLinecap: "round" }, BS = 3.5, IV = BS * 5, qS = { draw(t14, e, i) {
  const a = e * i / IV;
  t14.moveTo(0, 0), t14.lineTo(0, -e), t14.moveTo(-a, a - e), t14.lineTo(0, -e), t14.lineTo(a, a - e);
} }, WV = { draw(t14, e, i) {
  t14.moveTo(-i, 0), t14.lineTo(0, -e), t14.lineTo(i, 0);
} }, JV = /* @__PURE__ */ new Map([["arrow", qS], ["spike", WV]]);
function tj(t14) {
  return t14 && typeof t14.draw == "function";
}
function ej(t14) {
  if (tj(t14)) return t14;
  const e = JV.get(`${t14}`.toLowerCase());
  if (e) return e;
  throw new Error(`invalid shape: ${t14}`);
}
class kS extends si {
  constructor(e, i = {}) {
    const { x: a, y: u, r: o = BS, length: f, rotate: s, shape: d = qS, anchor: p = "middle", frameAnchor: m } = i, [b, v] = un(f, 12), [y, w] = un(s, 0);
    super(e, { x: { value: a, scale: "x", optional: true }, y: { value: u, scale: "y", optional: true }, length: { value: b, scale: "length", optional: true }, rotate: { value: y, optional: true } }, i, PV), this.r = +o, this.length = v, this.rotate = w, this.shape = ej(d), this.anchor = Yn(p, "anchor", ["start", "middle", "end"]), this.frameAnchor = Pg(m);
  }
  render(e, i, a, u, o) {
    const { x: f, y: s } = i, { x: d, y: p, length: m, rotate: b } = a, { length: v, rotate: y, anchor: w, shape: S, r: x } = this, [T, E] = Cd(this, u);
    return Xe("svg:g", o).call(Oa, this, u, o).call(Da, this, { x: d && f, y: p && s }).call((D) => D.selectAll().data(e).enter().append("path").call(Ca, this).attr("transform", RS`translate(${d ? (O) => d[O] : T},${p ? (O) => p[O] : E})${b ? (O) => ` rotate(${b[O]})` : y ? ` rotate(${y})` : ""}${w === "start" ? "" : w === "end" ? m ? (O) => ` translate(0,${m[O]})` : ` translate(0,${v})` : m ? (O) => ` translate(0,${m[O] / 2})` : ` translate(0,${v / 2})`}`).attr("d", m ? (O) => {
      const A = cm();
      return S.draw(A, m[O], x), A;
    } : (() => {
      const O = cm();
      return S.draw(O, v, x), O;
    })()).call(tc, this, a)).node();
  }
}
function nj(t14, e = {}) {
  const { x: i = Qi, ...a } = e;
  return new kS(t14, { ...a, x: i });
}
function ij(t14, e = {}) {
  const { y: i = Qi, ...a } = e;
  return new kS(t14, { ...a, y: i });
}
function $r(t14, e) {
  return arguments.length < 2 && !Ea(t14) && (e = t14, t14 = null), e === void 0 && (e = {}), [t14, e];
}
function Dd({ anchor: t14 } = {}, e) {
  return t14 === void 0 ? e[0] : Yn(t14, "anchor", e);
}
function YS(t14) {
  return Dd(t14, ["left", "right"]);
}
function GS(t14) {
  return Dd(t14, ["right", "left"]);
}
function XS(t14) {
  return Dd(t14, ["bottom", "top"]);
}
function FS(t14) {
  return Dd(t14, ["top", "bottom"]);
}
function ZS() {
  const [t14, e] = $r(...arguments);
  return KS("y", YS(e), t14, e);
}
function rj() {
  const [t14, e] = $r(...arguments);
  return KS("fy", GS(e), t14, e);
}
function QS() {
  const [t14, e] = $r(...arguments);
  return PS("x", XS(e), t14, e);
}
function aj() {
  const [t14, e] = $r(...arguments);
  return PS("fx", FS(e), t14, e);
}
function KS(t14, e, i, { color: a = "currentColor", opacity: u = 1, stroke: o = a, strokeOpacity: f = u, strokeWidth: s = 1, fill: d = a, fillOpacity: p = u, textAnchor: m, textStroke: b, textStrokeOpacity: v, textStrokeWidth: y, tickSize: w = t14 === "y" ? 6 : 0, tickPadding: S, tickRotate: x, x: T, margin: E, marginTop: D = E === void 0 ? 20 : E, marginRight: O = E === void 0 ? e === "right" ? 40 : 0 : E, marginBottom: A = E === void 0 ? 20 : E, marginLeft: $ = E === void 0 ? e === "left" ? 40 : 0 : E, label: N, labelAnchor: H, labelArrow: z, labelOffset: G, ariaLabel: V = `${t14}-axis`, ...lt }) {
  return w = je(w), S = je(S), x = je(x), H !== void 0 && (H = Yn(H, "labelAnchor", ["center", "top", "bottom"])), z = r7(z), hS(w && !Ke(o) ? uj(t14, e, i, { stroke: o, strokeOpacity: f, strokeWidth: s, tickSize: w, tickPadding: S, tickRotate: x, x: T, ariaLabel: V, ...lt }) : null, Ke(d) ? null : oj(t14, e, i, { fill: d, fillOpacity: p, stroke: b, strokeOpacity: v, strokeWidth: y, textAnchor: m, tickSize: w, tickPadding: S, tickRotate: x, x: T, marginTop: D, marginRight: O, marginBottom: A, marginLeft: $, ariaLabel: V, ...lt }), !Ke(d) && N !== null ? zS([], t72({ fill: d, fillOpacity: p, ...lt }, function(ft, ct, Y, q, ut) {
    const nt = q[t14], { marginTop: P, marginRight: C, marginBottom: B, marginLeft: Q } = t14 === "y" && ut.inset || ut, K = H ?? (nt.bandwidth ? "center" : "top"), tt = G ?? (e === "right" ? C : Q) - 3;
    return K === "center" ? (this.textAnchor = void 0, this.lineAnchor = e === "right" ? "bottom" : "top", this.frameAnchor = e, this.rotate = -90) : (this.textAnchor = e === "right" ? "end" : "start", this.lineAnchor = K, this.frameAnchor = `${K}-${e}`, this.rotate = 0), this.dy = K === "top" ? 3 - P : K === "bottom" ? B - 3 : 0, this.dx = e === "right" ? tt : -tt, this.ariaLabel = `${V} label`, { facets: [[0]], channels: { text: { value: [i7(t14, nt, { anchor: e, label: N, labelAnchor: K, labelArrow: z })] } } };
  })) : null);
}
function PS(t14, e, i, { color: a = "currentColor", opacity: u = 1, stroke: o = a, strokeOpacity: f = u, strokeWidth: s = 1, fill: d = a, fillOpacity: p = u, textAnchor: m, textStroke: b, textStrokeOpacity: v, textStrokeWidth: y, tickSize: w = t14 === "x" ? 6 : 0, tickPadding: S, tickRotate: x, y: T, margin: E, marginTop: D = E === void 0 ? e === "top" ? 30 : 0 : E, marginRight: O = E === void 0 ? 20 : E, marginBottom: A = E === void 0 ? e === "bottom" ? 30 : 0 : E, marginLeft: $ = E === void 0 ? 20 : E, label: N, labelAnchor: H, labelArrow: z, labelOffset: G, ariaLabel: V = `${t14}-axis`, ...lt }) {
  return w = je(w), S = je(S), x = je(x), H !== void 0 && (H = Yn(H, "labelAnchor", ["center", "left", "right"])), z = r7(z), hS(w && !Ke(o) ? lj(t14, e, i, { stroke: o, strokeOpacity: f, strokeWidth: s, tickSize: w, tickPadding: S, tickRotate: x, y: T, ariaLabel: V, ...lt }) : null, Ke(d) ? null : cj(t14, e, i, { fill: d, fillOpacity: p, stroke: b, strokeOpacity: v, strokeWidth: y, textAnchor: m, tickSize: w, tickPadding: S, tickRotate: x, y: T, marginTop: D, marginRight: O, marginBottom: A, marginLeft: $, ariaLabel: V, ...lt }), !Ke(d) && N !== null ? zS([], t72({ fill: d, fillOpacity: p, ...lt }, function(ft, ct, Y, q, ut) {
    const nt = q[t14], { marginTop: P, marginRight: C, marginBottom: B, marginLeft: Q } = t14 === "x" && ut.inset || ut, K = H ?? (nt.bandwidth ? "center" : "right"), tt = G ?? (e === "top" ? P : B) - 3;
    return K === "center" ? (this.frameAnchor = e, this.textAnchor = void 0) : (this.frameAnchor = `${e}-${K}`, this.textAnchor = K === "right" ? "end" : "start"), this.lineAnchor = e, this.dy = e === "top" ? -tt : tt, this.dx = K === "right" ? C - 3 : K === "left" ? 3 - Q : 0, this.ariaLabel = `${V} label`, { facets: [[0]], channels: { text: { value: [i7(t14, nt, { anchor: e, label: N, labelAnchor: K, labelArrow: z })] } } };
  })) : null);
}
function uj(t14, e, i, { strokeWidth: a = 1, strokeLinecap: u = null, strokeLinejoin: o = null, facetAnchor: f = e + (t14 === "y" ? "-empty" : ""), frameAnchor: s = e, tickSize: d, inset: p = 0, insetLeft: m = p, insetRight: b = p, dx: v = 0, y = t14 === "y" ? void 0 : null, ariaLabel: w, ...S }) {
  return Yu(ij, t14, i, { ariaLabel: `${w} tick`, ariaHidden: true }, { strokeWidth: a, strokeLinecap: u, strokeLinejoin: o, facetAnchor: f, frameAnchor: s, y, ...S, dx: e === "left" ? +v - ln + +m : +v + ln - b, anchor: "start", length: d, shape: e === "left" ? bj : vj });
}
function lj(t14, e, i, { strokeWidth: a = 1, strokeLinecap: u = null, strokeLinejoin: o = null, facetAnchor: f = e + (t14 === "x" ? "-empty" : ""), frameAnchor: s = e, tickSize: d, inset: p = 0, insetTop: m = p, insetBottom: b = p, dy: v = 0, x: y = t14 === "x" ? void 0 : null, ariaLabel: w, ...S }) {
  return Yu(nj, t14, i, { ariaLabel: `${w} tick`, ariaHidden: true }, { strokeWidth: a, strokeLinejoin: o, strokeLinecap: u, facetAnchor: f, frameAnchor: s, x: y, ...S, dy: e === "bottom" ? +v - ln - b : +v + ln + +m, anchor: "start", length: d, shape: e === "bottom" ? mj : gj });
}
function oj(t14, e, i, { facetAnchor: a = e + (t14 === "y" ? "-empty" : ""), frameAnchor: u = e, tickSize: o, tickRotate: f = 0, tickPadding: s = Math.max(3, 9 - o) + (Math.abs(f) > 60 ? 4 * Math.cos(f * yS) : 0), text: d, textAnchor: p = Math.abs(f) > 60 ? "middle" : e === "left" ? "end" : "start", lineAnchor: m = f > 60 ? "top" : f < -60 ? "bottom" : "middle", fontVariant: b, inset: v = 0, insetLeft: y = v, insetRight: w = v, dx: S = 0, ariaLabel: x, y: T = t14 === "y" ? void 0 : null, ...E }) {
  return Yu(BV, t14, i, { ariaLabel: `${x} tick label` }, { facetAnchor: a, frameAnchor: u, text: d, textAnchor: p, lineAnchor: m, fontVariant: b, rotate: f, y: T, ...E, dx: e === "left" ? +S - o - s + +y : +S + +o + +s - w }, function(D, O, A, $, N) {
    b === void 0 && (this.fontVariant = n7(D)), d === void 0 && (N.text = e7(D, O, A, $, e));
  });
}
function cj(t14, e, i, { facetAnchor: a = e + (t14 === "x" ? "-empty" : ""), frameAnchor: u = e, tickSize: o, tickRotate: f = 0, tickPadding: s = Math.max(3, 9 - o) + (Math.abs(f) >= 10 ? 4 * Math.cos(f * yS) : 0), text: d, textAnchor: p = Math.abs(f) >= 10 ? f < 0 ^ e === "bottom" ? "start" : "end" : "middle", lineAnchor: m = Math.abs(f) >= 10 ? "middle" : e === "bottom" ? "top" : "bottom", fontVariant: b, inset: v = 0, insetTop: y = v, insetBottom: w = v, dy: S = 0, x = t14 === "x" ? void 0 : null, ariaLabel: T, ...E }) {
  return Yu(jV, t14, i, { ariaLabel: `${T} tick label` }, { facetAnchor: a, frameAnchor: u, text: d === void 0 ? null : d, textAnchor: p, lineAnchor: m, fontVariant: b, rotate: f, x, ...E, dy: e === "bottom" ? +S + +o + +s - w : +S - o - s + +y }, function(D, O, A, $, N) {
    b === void 0 && (this.fontVariant = n7(D)), d === void 0 && (N.text = e7(D, O, A, $, e));
  });
}
function fj() {
  const [t14, e] = $r(...arguments);
  return IS("y", YS(e), t14, e);
}
function sj() {
  const [t14, e] = $r(...arguments);
  return IS("fy", GS(e), t14, e);
}
function dj() {
  const [t14, e] = $r(...arguments);
  return WS("x", XS(e), t14, e);
}
function hj() {
  const [t14, e] = $r(...arguments);
  return WS("fx", FS(e), t14, e);
}
function IS(t14, e, i, { y: a = t14 === "y" ? void 0 : null, x: u = null, x1: o = e === "left" ? u : null, x2: f = e === "right" ? u : null, ariaLabel: s = `${t14}-grid`, ariaHidden: d = true, ...p }) {
  return Yu(LV, t14, i, { ariaLabel: s, ariaHidden: d }, { y: a, x1: o, x2: f, ...JS(p) });
}
function WS(t14, e, i, { x: a = t14 === "x" ? void 0 : null, y: u = null, y1: o = e === "top" ? u : null, y2: f = e === "bottom" ? u : null, ariaLabel: s = `${t14}-grid`, ariaHidden: d = true, ...p }) {
  return Yu(UV, t14, i, { ariaLabel: s, ariaHidden: d }, { x: a, y1: o, y2: f, ...JS(p) });
}
function JS({ color: t14 = "currentColor", opacity: e = 0.1, stroke: i = t14, strokeOpacity: a = e, strokeWidth: u = 1, ...o }) {
  return { stroke: i, strokeOpacity: a, strokeWidth: u, ...o };
}
function t72({ fill: t14, fillOpacity: e, fontFamily: i, fontSize: a, fontStyle: u, fontVariant: o, fontWeight: f, monospace: s, pointerEvents: d, shapeRendering: p, clip: m = false }, b) {
  return [, t14] = ya(t14), [, e] = un(e), { facet: "super", x: null, y: null, fill: t14, fillOpacity: e, fontFamily: i, fontSize: a, fontStyle: u, fontVariant: o, fontWeight: f, monospace: s, pointerEvents: d, shapeRendering: p, clip: m, initializer: b };
}
function Yu(t14, e, i, a, u, o) {
  let f;
  function s(m, b, v, y, w, S) {
    const x = m == null && (e === "fx" || e === "fy"), { [e]: T } = y;
    if (!T) throw new Error(`missing scale: ${e}`);
    const E = T.domain();
    let { interval: D, ticks: O, tickFormat: A, tickSpacing: $ = e === "x" ? 80 : 35 } = u;
    if (typeof O == "string" && a7(T) && (D = O, O = void 0), O === void 0 && (O = Qo(D, T.type) ?? pj(T, $)), m == null) {
      if (Ea(O)) m = Ma(O);
      else if (nL(O)) m = Np(O, ...Mr(E));
      else if (T.interval) {
        let H = T.interval;
        if (T.ticks) {
          const [z, G] = Mr(E), V = (G - z) / H[Xo];
          H = J_(H, V / O) ?? H, m = Np(H, z, G);
        } else {
          m = E;
          const z = m.length;
          H = J_(H, z / O) ?? H, H !== T.interval && (m = Np(H, ...Mr(m)));
        }
        if (H === T.interval) {
          const z = Math.round(m.length / O);
          z > 1 && (m = m.filter((G, V) => V % z === 0));
        }
      } else T.ticks ? m = T.ticks(O) : m = E;
      if (!T.ticks && m.length && m !== E) {
        const H = new Js(E);
        m = m.filter((z) => H.has(z)), m.length || Tr(`Warning: the ${e}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`);
      }
      e === "y" || e === "x" ? b = [Zo(m)] : f[e] = { scale: e, value: Qi };
    }
    o == null ? void 0 : o.call(this, T, m, O, A, f);
    const N = Object.fromEntries(Object.entries(f).map(([H, z]) => [H, { ...z, value: Cr(m, z.value) }]));
    return x && (b = S.filterFacets(m, N)), { data: m, facets: b, channels: N };
  }
  const d = ks(u).initializer, p = t14(i, ks({ ...u, initializer: s }, d));
  return i == null ? (f = p.channels, p.channels = {}) : f = {}, a !== void 0 && Object.assign(p, a), p.clip === void 0 && (p.clip = false), p;
}
function pj(t14, e) {
  const [i, a] = Mr(t14.range());
  return (a - i) / e;
}
function e7(t14, e, i, a, u) {
  return { value: d1(t14, e, i, a, u) };
}
function d1(t14, e, i, a, u) {
  return typeof a == "function" && !(t14.type === "log" && t14.tickFormat) ? a : a === void 0 && e && oi(e) ? jU(t14.type, e, u) ?? Lu : t14.tickFormat ? t14.tickFormat(typeof i == "number" ? i : null, a) : typeof a == "string" && t14.domain().length > 0 ? (oi(t14.domain()) ? Go : Bu)(a) : a === void 0 ? Lu : Bi(a);
}
function Np(t14, e, i) {
  return t14.range(e, t14.offset(t14.floor(i)));
}
const mj = { draw(t14, e) {
  t14.moveTo(0, 0), t14.lineTo(0, e);
} }, gj = { draw(t14, e) {
  t14.moveTo(0, 0), t14.lineTo(0, -e);
} }, bj = { draw(t14, e) {
  t14.moveTo(0, 0), t14.lineTo(-e, 0);
} }, vj = { draw(t14, e) {
  t14.moveTo(0, 0), t14.lineTo(e, 0);
} };
function n7(t14) {
  return t14.bandwidth && !t14.interval ? void 0 : "tabular-nums";
}
function i7(t14, e, { anchor: i, label: a = e.label, labelAnchor: u, labelArrow: o } = {}) {
  if (!(a == null || a.inferred && a7(e) && /^(date|time|year)$/i.test(a))) {
    if (a = String(a), o === "auto" && (o = (!e.bandwidth || e.interval) && !/[↑↓→←]/.test(a)), !o) return a;
    if (o === true) {
      const f = _H(e);
      f && (o = /x$/.test(t14) || u === "center" ? /x$/.test(t14) === f < 0 ? "left" : "right" : f < 0 ? "up" : "down");
    }
    switch (o) {
      case "left":
        return `\u2190 ${a}`;
      case "right":
        return `${a} \u2192`;
      case "up":
        return i === "right" ? `${a} \u2191` : `\u2191 ${a}`;
      case "down":
        return i === "right" ? `${a} \u2193` : `\u2193 ${a}`;
    }
    return a;
  }
}
function r7(t14 = "auto") {
  return Ke(t14) ? false : typeof t14 == "boolean" ? t14 : Yn(t14, "labelArrow", ["auto", "up", "right", "down", "left"]);
}
function a7(t14) {
  return oi(t14.domain());
}
function N6(t14, e) {
  if (e == null) return e;
  const i = t14(e);
  if (!i) throw new Error(`scale not found: ${e}`);
  return i;
}
function yj(t14, { opacity: e, ...i } = {}) {
  if (!Aa(t14) && !oS(t14)) throw new Error(`swatches legend requires ordinal or threshold color scale (not ${t14.type})`);
  return u7(t14, i, (a, u, o, f) => a.append("svg").attr("width", o).attr("height", f).attr("fill", u.scale).attr("fill-opacity", un(e)[1]).append("rect").attr("width", "100%").attr("height", "100%"));
}
function _j(t14, { fill: e = ((_a2) => (_a2 = t14.hint) == null ? void 0 : _a2.fill)() !== void 0 ? t14.hint.fill : "none", fillOpacity: i = 1, stroke: a = ((_b) => (_b = t14.hint) == null ? void 0 : _b.stroke)() !== void 0 ? t14.hint.stroke : Ke(e) ? "currentColor" : "none", strokeOpacity: u = 1, strokeWidth: o = 1.5, r: f = 4.5, ...s } = {}, d) {
  const [p, m] = ya(e), [b, v] = ya(a), y = N6(d, p), w = N6(d, b), S = f * f * Math.PI;
  return i = un(i)[1], u = un(u)[1], o = un(o)[1], u7(t14, s, (x, T, E, D) => x.append("svg").attr("viewBox", "-8 -8 16 16").attr("width", E).attr("height", D).attr("fill", p === "color" ? (O) => y.scale(O) : m).attr("fill-opacity", i).attr("stroke", b === "color" ? (O) => w.scale(O) : v).attr("stroke-opacity", u).attr("stroke-width", o).append("path").attr("d", (O) => {
    const A = cm();
    return t14.scale(O).draw(A, S), A;
  }));
}
function u7(t14, e = {}, i) {
  let { columns: a, tickFormat: u, fontVariant: o = vS(t14), swatchSize: f = 15, swatchWidth: s = f, swatchHeight: d = f, marginLeft: p = 0, className: m, style: b, width: v } = e;
  const y = i1(e);
  m = a1(m), u = d1(t14.scale, t14.domain, void 0, u);
  const w = Xe("div", y).attr("class", `${m}-swatches ${m}-swatches-${a != null ? "columns" : "wrap"}`);
  let S;
  return a != null ? (S = `:where(.${m}-swatches-columns .${m}-swatch) {
  display: flex;
  align-items: center;
  break-inside: avoid;
  padding-bottom: 1px;
}
:where(.${m}-swatches-columns .${m}-swatch::before) {
  flex-shrink: 0;
}
:where(.${m}-swatches-columns .${m}-swatch-label) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`, w.style("columns", a).selectAll().data(t14.domain).enter().append("div").attr("class", `${m}-swatch`).call(i, t14, s, d).call((x) => x.append("div").attr("class", `${m}-swatch-label`).attr("title", u).text(u))) : (S = `:where(.${m}-swatches-wrap) {
  display: flex;
  align-items: center;
  min-height: 33px;
  flex-wrap: wrap;
}
:where(.${m}-swatches-wrap .${m}-swatch) {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}`, w.selectAll().data(t14.domain).enter().append("span").attr("class", `${m}-swatch`).call(i, t14, s, d).append(function() {
    return this.ownerDocument.createTextNode(u.apply(this, arguments));
  })), w.call((x) => x.insert("style", "*").text(`:where(.${m}-swatches) {
  font-family: system-ui, sans-serif;
  font-size: 10px;
  margin-bottom: 0.5em;
}
:where(.${m}-swatch > svg) {
  margin-right: 0.5em;
  overflow: visible;
}
${S}`)).style("margin-left", p ? `${+p}px` : null).style("width", v === void 0 ? null : `${+v}px`).style("font-variant", Ce(o, "normal")).call(u1, b).node();
}
const Fm = /* @__PURE__ */ new Map([["symbol", _j], ["color", o7], ["opacity", Sj]]);
function wj(t14, e, i = {}) {
  return (a, u) => {
    if (!Fm.has(a)) throw new Error(`unknown legend type: ${a}`);
    if (a in t14) return Fm.get(a)(t14[a], l7(e, i[a], u), (o) => t14[o]);
  };
}
function l7({ className: t14, ...e }, { label: i, ticks: a, tickFormat: u } = {}, o) {
  return fL(o, { className: t14, ...e }, { label: i, ticks: a, tickFormat: u });
}
function o7(t14, { legend: e = true, ...i }) {
  if (e === true && (e = t14.type === "ordinal" ? "swatches" : "ramp"), t14.domain !== void 0) switch (`${e}`.toLowerCase()) {
    case "swatches":
      return yj(t14, i);
    case "ramp":
      return xV(t14, i);
    default:
      throw new Error(`unknown legend type: ${e}`);
  }
}
function Sj({ type: t14, interpolate: e, ...i }, { legend: a = true, color: u = Er(0, 0, 0), ...o }) {
  if (!e) throw new Error(`${t14} opacity scales are not supported`);
  if (a === true && (a = "ramp"), `${a}`.toLowerCase() !== "ramp") throw new Error(`${a} opacity legends are not supported`);
  return o7({ type: t14, ...i, interpolate: xj(u) }, { legend: a, ...o });
}
function xj(t14) {
  const { r: e, g: i, b: a } = Er(t14) || Er(0, 0, 0);
  return (u) => `rgba(${e},${i},${a},${u})`;
}
function Mj(t14, e, i) {
  const a = [];
  for (const [u, o] of Fm) {
    const f = i[u];
    if ((f == null ? void 0 : f.legend) && u in t14) {
      const s = o(t14[u], l7(e, t14[u], f), (d) => t14[d]);
      s != null && a.push(s);
    }
  }
  return a;
}
function Tj(t14, { inset: e = 0, insetTop: i = e, insetRight: a = e, insetBottom: u = e, insetLeft: o = e } = {}) {
  t14.insetTop = je(i), t14.insetRight = je(a), t14.insetBottom = je(u), t14.insetLeft = je(o);
}
function Ej(t14, { r: e, rx: i, ry: a, rx1: u = e, ry1: o = e, rx2: f = e, ry2: s = e, rx1y1: d = u !== void 0 ? +u : o !== void 0 ? +o : 0, rx1y2: p = u !== void 0 ? +u : s !== void 0 ? +s : 0, rx2y1: m = f !== void 0 ? +f : o !== void 0 ? +o : 0, rx2y2: b = f !== void 0 ? +f : s !== void 0 ? +s : 0 } = {}) {
  d || p || m || b ? (t14.rx1y1 = d, t14.rx1y2 = p, t14.rx2y1 = m, t14.rx2y2 = b) : (t14.rx = Ce(i, "auto"), t14.ry = Ce(a, "auto"));
}
function Aj(t14, e, i, a, u, o) {
  const { rx1y1: f, rx1y2: s, rx2y1: d, rx2y2: p } = o;
  typeof e != "function" && (e = Bi(e)), typeof i != "function" && (i = Bi(i)), typeof a != "function" && (a = Bi(a)), typeof u != "function" && (u = Bi(u));
  const m = Math.max(Math.abs(f + d), Math.abs(s + p)), b = Math.max(Math.abs(f + s), Math.abs(d + p));
  t14.attr("d", (v) => {
    const y = e(v), w = i(v), S = a(v), x = u(v), T = y > S, E = w > x, D = T ? S : y, O = T ? y : S, A = E ? x : w, $ = E ? w : x, N = Math.min(1, (O - D) / m, ($ - A) / b), H = N * (T ? E ? p : d : E ? s : f), z = N * (T ? E ? s : f : E ? p : d), G = N * (T ? E ? f : s : E ? d : p), V = N * (T ? E ? d : p : E ? f : s);
    return `M${D},${A + Hf(H, V)}A${H},${H} 0 0 ${H < 0 ? 0 : 1} ${D + Lf(H, V)},${A}H${O - Lf(z, G)}A${z},${z} 0 0 ${z < 0 ? 0 : 1} ${O},${A + Hf(z, G)}V${$ - Hf(G, z)}A${G},${G} 0 0 ${G < 0 ? 0 : 1} ${O - Lf(G, z)},${$}H${D + Lf(V, H)}A${V},${V} 0 0 ${V < 0 ? 0 : 1} ${D},${$ - Hf(V, H)}Z`;
  });
}
function Lf(t14, e) {
  return e < 0 ? t14 : Math.abs(t14);
}
function Hf(t14, e) {
  return e < 0 ? Math.abs(t14) : t14;
}
const Oj = { ariaLabel: "frame", fill: "none", stroke: "currentColor", clip: false }, Cj = { ariaLabel: "frame", fill: null, stroke: "currentColor", strokeLinecap: "square", clip: false };
class Dj extends si {
  constructor(e = {}) {
    const { anchor: i = null } = e;
    super(Wf, void 0, e, i == null ? Oj : Cj), this.anchor = N8(i, "anchor", ["top", "right", "bottom", "left"]), Tj(this, e), i || Ej(this, e);
  }
  render(e, i, a, u, o) {
    const { marginTop: f, marginRight: s, marginBottom: d, marginLeft: p, width: m, height: b } = u, { anchor: v, insetTop: y, insetRight: w, insetBottom: S, insetLeft: x } = this, { rx: T, ry: E, rx1y1: D, rx1y2: O, rx2y1: A, rx2y2: $ } = this, N = p + x, H = m - s - w, z = f + y, G = b - d - S;
    return Xe(v ? "svg:line" : D || O || A || $ ? "svg:path" : "svg:rect", o).datum(0).call(Oa, this, u, o).call(Ca, this).call(tc, this, a).call(Da, this, {}).call(v === "left" ? (V) => V.attr("x1", N).attr("x2", N).attr("y1", z).attr("y2", G) : v === "right" ? (V) => V.attr("x1", H).attr("x2", H).attr("y1", z).attr("y2", G) : v === "top" ? (V) => V.attr("x1", N).attr("x2", H).attr("y1", z).attr("y2", z) : v === "bottom" ? (V) => V.attr("x1", N).attr("x2", H).attr("y1", G).attr("y2", G) : D || O || A || $ ? (V) => V.call(Aj, N, z, H, G, this) : (V) => V.attr("x", N).attr("y", z).attr("width", H - N).attr("height", G - z).attr("rx", T).attr("ry", E)).node();
  }
}
function Rj(t14) {
  return new Dj(t14);
}
const $p = { ariaLabel: "tip", fill: "var(--plot-background)", stroke: "currentColor" }, Nj = /* @__PURE__ */ new Set(["geometry", "href", "src", "ariaLabel", "scales"]);
class $j extends si {
  constructor(e, i = {}) {
    i.tip && (i = { ...i, tip: false }), i.title === void 0 && Ea(e) && z8(e) && (i = { ...i, title: Qi });
    const { x: a, y: u, x1: o, x2: f, y1: s, y2: d, anchor: p, preferredAnchor: m = "bottom", monospace: b, fontFamily: v = b ? "ui-monospace, monospace" : void 0, fontSize: y, fontStyle: w, fontVariant: S, fontWeight: x, lineHeight: T = 1, lineWidth: E = 20, frameAnchor: D, format: O, textAnchor: A = "start", textOverflow: $, textPadding: N = 8, title: H, pointerSize: z = 12, pathFilter: G = "drop-shadow(0 3px 4px rgba(0,0,0,0.2))" } = i;
    super(e, { x: { value: o != null && f != null ? null : a, scale: "x", optional: true }, y: { value: s != null && d != null ? null : u, scale: "y", optional: true }, x1: { value: o, scale: "x", optional: f == null }, y1: { value: s, scale: "y", optional: d == null }, x2: { value: f, scale: "x", optional: o == null }, y2: { value: d, scale: "y", optional: s == null }, title: { value: H, optional: true } }, i, $p), this.anchor = Lm(p, "anchor"), this.preferredAnchor = Lm(m, "preferredAnchor"), this.frameAnchor = Pg(D), this.textAnchor = Ce(A, "middle"), this.textPadding = +N, this.pointerSize = +z, this.pathFilter = He(G), this.lineHeight = +T, this.lineWidth = +E, this.textOverflow = $S($), this.monospace = !!b, this.fontFamily = He(v), this.fontSize = je(y), this.fontStyle = He(w), this.fontVariant = He(S), this.fontWeight = He(x);
    for (const V in $p) V in this.channels && (this[V] = $p[V]);
    this.splitLines = LS(this), this.clipLine = HS(this), this.format = typeof O == "string" || typeof O == "function" ? { title: O } : { ...O };
  }
  render(e, i, a, u, o) {
    const f = this, { x: s, y: d, fx: p, fy: m } = i, { ownerSVGElement: b, document: v } = o, { anchor: y, monospace: w, lineHeight: S, lineWidth: x } = this, { textPadding: T, pointerSize: E, pathFilter: D } = this, { marginTop: O, marginLeft: A } = u, { x1: $, y1: N, x2: H, y2: z, x: G = $ ?? H, y: V = N ?? z } = a, lt = p ? p(e.fx) - A : 0, ft = m ? m(e.fy) - O : 0, [ct, Y] = Cd(this, u), q = gS(a, ct), ut = bS(a, Y), nt = w ? s1 : f1, P = nt(Su);
    let C, B;
    "title" in a ? (C = $6.call(this, { title: a.channels.title }, i), B = Vj) : (C = $6.call(this, a.channels, i), B = jj);
    const Q = Xe("svg:g", o).call(Oa, this, u, o).call(US, this).call(Da, this, { x: G && s, y: V && d }).call((ht) => ht.selectAll().data(e).enter().append("g").attr("transform", (dt) => `translate(${Math.round(q(dt))},${Math.round(ut(dt))})`).call(Ca, this).call((dt) => dt.append("path").attr("filter", D)).call((dt) => dt.append("text").each(function(st) {
      const pt = ua(this);
      this.setAttribute("fill", "currentColor"), this.setAttribute("fill-opacity", 1), this.setAttribute("stroke", "none");
      const W = B.call(f, st, e, C, i, a);
      if (typeof W == "string") for (const ot of f.splitLines(W)) K(pt, { value: f.clipLine(ot) });
      else {
        const ot = /* @__PURE__ */ new Set();
        for (const mt of W) {
          const { label: et = "" } = mt;
          et && ot.has(et) || (ot.add(et), K(pt, mt));
        }
      }
    })));
    function K(ht, { label: dt, value: st, color: pt, opacity: W }) {
      dt ?? (dt = ""), st ?? (st = "");
      const ot = pt != null || W != null;
      let mt, et = x * 100;
      const [Nt] = Hu(dt, et, nt, P);
      if (Nt >= 0) dt = dt.slice(0, Nt).trimEnd() + Su, mt = st.trim(), st = "";
      else {
        (dt || !st && !ot) && (st = " " + st);
        const [Vt] = Hu(st, et - nt(dt), nt, P);
        Vt >= 0 && (mt = st.trim(), st = st.slice(0, Vt).trimEnd() + Su);
      }
      const wt = ht.append("tspan").attr("x", 0).attr("dy", `${S}em`).text("\u200B");
      dt && wt.append("tspan").attr("font-weight", "bold").text(dt), st && wt.append(() => v.createTextNode(st)), ot && wt.append("tspan").text(" \u25A0").attr("fill", pt).attr("fill-opacity", W).style("user-select", "none"), mt && wt.append("title").text(mt);
    }
    function tt() {
      const { width: ht, height: dt } = u.facet ?? u;
      Q.selectChildren().each(function(st) {
        let { x: pt, width: W, height: ot } = this.getBBox();
        W = Math.round(W), ot = Math.round(ot);
        let mt = y;
        if (mt === void 0) {
          const wt = q(st) + lt, Vt = ut(st) + ft, Ft = wt + W + E + T * 2 < ht, Te = wt - W - E - T * 2 > 0, Rn = Vt + ot + E + T * 2 < dt, di = Vt - ot - E - T * 2 > 0;
          mt = Ft && Te ? Rn && di ? f.preferredAnchor : di ? "bottom" : "top" : Rn && di ? Ft ? "left" : "right" : (Ft || Te) && (Rn || di) ? `${di ? "bottom" : "top"}-${Ft ? "left" : "right"}` : f.preferredAnchor;
        }
        const et = this.firstChild, Nt = this.lastChild;
        if (et.setAttribute("d", Hj(mt, E, T, W, ot)), pt) for (const wt of Nt.childNodes) wt.setAttribute("x", -pt);
        Nt.setAttribute("y", `${+Uj(mt, Nt.childNodes.length, S).toFixed(6)}em`), Nt.setAttribute("transform", `translate(${Lj(mt, E, T, W, ot)})`);
      }), Q.attr("visibility", null);
    }
    return e.length && (Q.attr("visibility", "hidden"), b.isConnected ? Promise.resolve().then(tt) : typeof requestAnimationFrame < "u" && requestAnimationFrame(tt)), Q.node();
  }
}
function zj(t14, { x: e, y: i, ...a } = {}) {
  return a.frameAnchor === void 0 && ([e, i] = Zg(e, i)), new $j(t14, { ...a, x: e, y: i });
}
function Uj(t14, e, i) {
  return /^top(?:-|$)/.test(t14) ? 0.94 - i : -0.29 - e * i;
}
function Lj(t14, e, i, a, u) {
  switch (t14) {
    case "middle":
      return [-a / 2, u / 2];
    case "top-left":
      return [i, e + i];
    case "top":
      return [-a / 2, e / 2 + i];
    case "top-right":
      return [-a - i, e + i];
    case "right":
      return [-e / 2 - a - i, u / 2];
    case "bottom-left":
      return [i, -e - i];
    case "bottom":
      return [-a / 2, -e / 2 - i];
    case "bottom-right":
      return [-a - i, -e - i];
    case "left":
      return [i + e / 2, u / 2];
  }
}
function Hj(t14, e, i, a, u) {
  const o = a + i * 2, f = u + i * 2;
  switch (t14) {
    case "middle":
      return `M${-o / 2},${-f / 2}h${o}v${f}h${-o}z`;
    case "top-left":
      return `M0,0l${e},${e}h${o - e}v${f}h${-o}z`;
    case "top":
      return `M0,0l${e / 2},${e / 2}h${(o - e) / 2}v${f}h${-o}v${-f}h${(o - e) / 2}z`;
    case "top-right":
      return `M0,0l${-e},${e}h${e - o}v${f}h${o}z`;
    case "right":
      return `M0,0l${-e / 2},${-e / 2}v${e / 2 - f / 2}h${-o}v${f}h${o}v${e / 2 - f / 2}z`;
    case "bottom-left":
      return `M0,0l${e},${-e}h${o - e}v${-f}h${-o}z`;
    case "bottom":
      return `M0,0l${e / 2},${-e / 2}h${(o - e) / 2}v${-f}h${-o}v${f}h${(o - e) / 2}z`;
    case "bottom-right":
      return `M0,0l${-e},${-e}h${e - o}v${-f}h${o}z`;
    case "left":
      return `M0,0l${e / 2},${-e / 2}v${e / 2 - f / 2}h${o}v${f}h${-o}v${e / 2 - f / 2}z`;
  }
}
function $6(t14, e) {
  var _a2, _b;
  const i = {};
  let a = this.format;
  a = z6(a, t14, "x"), a = z6(a, t14, "y"), this.format = a;
  for (const u in a) {
    const o = a[u];
    if (!(o === null || o === false)) if (u === "fx" || u === "fy") i[u] = true;
    else {
      const f = o6(t14, u);
      f && (i[u] = f);
    }
  }
  for (const u in t14) {
    if (u in i || u in a || Nj.has(u) || (u === "x" || u === "y") && t14.geometry) continue;
    const o = o6(t14, u);
    if (o) {
      if (o.scale == null && o.defaultScale === "color") continue;
      i[u] = o;
    }
  }
  this.facet && (e.fx && !("fx" in a) && (i.fx = true), e.fy && !("fy" in a) && (i.fy = true));
  for (const u in i) {
    const o = this.format[u];
    if (typeof o == "string") {
      const f = ((_a2 = i[u]) == null ? void 0 : _a2.value) ?? ((_b = e[u]) == null ? void 0 : _b.domain()) ?? [];
      this.format[u] = (oi(f) ? Go : Bu)(o);
    } else if (o === void 0 || o === true) {
      const f = e[u];
      this.format[u] = (f == null ? void 0 : f.bandwidth) ? d1(f, f.domain()) : Lu;
    }
  }
  return i;
}
function z6(t14, e, i) {
  if (!(i in t14)) return t14;
  const a = `${i}1`, u = `${i}2`;
  if ((a in t14 || !(a in e)) && (u in t14 || !(u in e))) return t14;
  const o = Object.entries(t14), f = t14[i];
  return o.splice(o.findIndex(([s]) => s === i) + 1, 0, [a, f], [u, f]), Object.fromEntries(o);
}
function Vj(t14, e, { title: i }) {
  return this.format.title(i.value[t14], t14);
}
function* jj(t14, e, i, a, u) {
  for (const o in i) {
    if (o === "fx" || o === "fy") {
      yield { label: Gs(a, i, o), value: this.format[o](e[o], t14) };
      continue;
    }
    if (o === "x1" && "x2" in i || o === "y1" && "y2" in i) continue;
    const f = i[o];
    if (o === "x2" && "x1" in i) yield { label: L6(a, i, "x"), value: U6(this.format.x2, i.x1, f, t14) };
    else if (o === "y2" && "y1" in i) yield { label: L6(a, i, "y"), value: U6(this.format.y2, i.y1, f, t14) };
    else {
      const s = f.value[t14], d = f.scale;
      if (!Or(s) && d == null) continue;
      yield { label: Gs(a, i, o), value: this.format[o](s, t14), color: d === "color" ? u[o][t14] : null, opacity: d === "opacity" ? u[o][t14] : null };
    }
  }
}
function U6(t14, e, i, a) {
  var _a2;
  return ((_a2 = i.hint) == null ? void 0 : _a2.length) ? `${t14(i.value[a] - e.value[a], a)}` : `${t14(e.value[a], a)}\u2013${t14(i.value[a], a)}`;
}
function L6(t14, e, i) {
  const a = Gs(t14, e, `${i}1`, i), u = Gs(t14, e, `${i}2`, i);
  return a === u ? a : `${a}\u2013${u}`;
}
function Gs(t14, e, i, a = i) {
  const u = e[i], o = t14[(u == null ? void 0 : u.scale) ?? i];
  return String((o == null ? void 0 : o.label) ?? (u == null ? void 0 : u.label) ?? a);
}
function c7(t14 = {}) {
  var _a2;
  const { facet: e, style: i, title: a, subtitle: u, caption: o, ariaLabel: f, ariaDescription: s } = t14, d = a1(t14.className), p = t14.marks === void 0 ? [] : V6(t14.marks);
  p.push(...Fj(p));
  const m = Gj(e, t14), b = /* @__PURE__ */ new Map();
  for (const P of p) {
    const C = j6(P, m, t14);
    C && b.set(P, C);
  }
  const v = /* @__PURE__ */ new Map();
  m && Il(v, [m], t14), Il(v, b, t14);
  const y = V6(Zj(p, v, t14));
  for (const P of y) {
    const C = j6(P, m, t14);
    C && b.set(P, C);
  }
  p.unshift(...y);
  let w = OH(v, t14);
  if (w !== void 0) {
    const P = m ? Op(w, m) : void 0;
    for (const B of p) {
      if (B.facet === null || B.facet === "super") continue;
      const Q = b.get(B);
      Q !== void 0 && (Q.facetsIndex = B.fx != null || B.fy != null ? Op(w, Q) : P);
    }
    const C = /* @__PURE__ */ new Set();
    for (const { facetsIndex: B } of b.values()) B == null ? void 0 : B.forEach((Q, K) => {
      (Q == null ? void 0 : Q.length) > 0 && C.add(K);
    });
    w.forEach(0 < C.size && C.size < w.length ? (B, Q) => B.empty = !C.has(Q) : (B) => B.empty = false);
    for (const B of p) if (B.facet === "exclude") {
      const Q = b.get(B);
      Q !== void 0 && (Q.facetsIndex = RH(Q.facetsIndex));
    }
  }
  for (const P of le.keys()) zm(t14[P]) && P !== "fx" && P !== "fy" && v.set(P, []);
  const S = /* @__PURE__ */ new Map();
  for (const P of p) {
    if (S.has(P)) throw new Error("duplicate mark; each mark must be unique");
    const { facetsIndex: C, channels: B } = b.get(P) ?? {}, { data: Q, facets: K, channels: tt } = P.initialize(C, B, t14);
    h1(tt, t14), S.set(P, { data: Q, facets: K, channels: tt });
  }
  const x = Bm(Il(v, S, t14), t14), T = yV(x, p, t14);
  vH(x, T);
  const E = g6(x), { fx: D, fy: O } = E, A = D || O ? aS(x, T) : T, $ = D || O ? tB(E, T) : T, N = i1(t14), H = N.document, z = ed("svg").call(H.documentElement);
  let G = z;
  N.ownerSVGElement = z, N.className = d, N.projection = BH(t14, A), N.path = function() {
    return Mg(this.projection ?? ZH(E));
  }, N.filterFacets = (P, C) => Op(w, { channels: C, groups: n1(P, C) }), N.getMarkState = (P) => {
    const C = S.get(P), B = b.get(P);
    return { ...C, channels: { ...C.channels, ...B == null ? void 0 : B.channels } };
  }, N.dispatchValue = (P) => {
    G.value !== P && (G.value = P, G.dispatchEvent(new N.document.defaultView.Event("input", { bubbles: true })));
  };
  const V = /* @__PURE__ */ new Set();
  for (const [P, C] of S) if (P.initializer != null) {
    const B = P.facet === "super" ? $ : A, Q = P.initializer(C.data, C.facets, C.channels, E, B, N);
    if (Q.data !== void 0 && (C.data = Q.data), Q.facets !== void 0 && (C.facets = Q.facets), Q.channels !== void 0) {
      const { fx: K, fy: tt, ...ht } = Q.channels;
      Yj(ht), Object.assign(C.channels, ht);
      for (const dt of Object.values(ht)) {
        const { scale: st } = dt;
        st != null && !hL(le.get(st)) && (f7(dt, t14), V.add(st));
      }
      (K != null || tt != null) && b.set(P, true);
    }
  }
  if (V.size) {
    const P = /* @__PURE__ */ new Map();
    Il(P, S, t14, (K) => V.has(K)), Il(v, S, t14, (K) => V.has(K));
    const C = Jj(Bm(P, t14), x), { scales: B, ...Q } = g6(C);
    Object.assign(x, C), Object.assign(E, Q), Object.assign(E.scales, B);
  }
  let lt, ft;
  w !== void 0 && (lt = { x: D == null ? void 0 : D.domain(), y: O == null ? void 0 : O.domain() }, w = CH(w, lt), ft = DH(D, O, T));
  for (const [P, C] of S) C.values = P.scale(C.channels, E, N);
  const { width: ct, height: Y } = T;
  ua(z).attr("class", d).attr("fill", "currentColor").attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("text-anchor", "middle").attr("width", ct).attr("height", Y).attr("viewBox", `0 0 ${ct} ${Y}`).attr("aria-label", f).attr("aria-description", s).call((P) => P.append("style").text(`:where(.${d}) {
  --plot-background: white;
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
:where(.${d} text),
:where(.${d} tspan) {
  white-space: pre;
}`)).call(u1, i);
  for (const P of p) {
    const { channels: C, values: B, facets: Q } = S.get(P);
    if (w === void 0 || P.facet === "super") {
      let K = null;
      if (Q && (K = Q[0], K = P.filter(K, C, B), K.length === 0)) continue;
      const tt = P.render(K, E, B, $, N);
      if (tt == null) continue;
      z.appendChild(tt);
    } else {
      let K;
      for (const tt of w) {
        if (!(((_a2 = P.facetAnchor) == null ? void 0 : _a2.call(P, w, lt, tt)) ?? !tt.empty)) continue;
        let ht = null;
        if (Q) {
          const st = b.has(P);
          if (ht = Q[st ? tt.i : 0], ht = P.filter(ht, C, B), ht.length === 0) continue;
          !st && ht === Q[0] && (ht = WU(ht)), ht.fx = tt.x, ht.fy = tt.y, ht.fi = tt.i;
        }
        const dt = P.render(ht, E, B, A, N);
        if (dt != null) {
          (K ?? (K = ua(z).append("g"))).append(() => dt).datum(tt);
          for (const st of ["aria-label", "aria-description", "aria-hidden", "transform"]) dt.hasAttribute(st) && (K.attr(st, dt.getAttribute(st)), dt.removeAttribute(st));
        }
      }
      K == null ? void 0 : K.selectChildren().each(ft);
    }
  }
  const q = Mj(x, N, t14), { figure: ut = a != null || u != null || o != null || q.length > 0 } = t14;
  ut && (G = H.createElement("figure"), G.className = `${d}-figure`, G.style.maxWidth = "initial", a != null && G.append(H6(H, a, "h2")), u != null && G.append(H6(H, u, "h3")), G.append(...q, z), o != null && G.append(Bj(H, o)), "value" in z && (G.value = z.value, delete z.value)), G.scale = EH(E.scales), G.legend = wj(x, N, t14);
  const nt = eH();
  return nt > 0 && ua(z).append("text").attr("x", ct).attr("y", 20).attr("dy", "-1em").attr("text-anchor", "end").attr("font-family", "initial").text("\u26A0\uFE0F").append("title").text(`${nt.toLocaleString("en-US")} warning${nt === 1 ? "" : "s"}. Please check the console.`), G;
}
function H6(t14, e, i) {
  if (e.ownerDocument) return e;
  const a = t14.createElement(i);
  return a.append(e), a;
}
function Bj(t14, e) {
  const i = t14.createElement("figcaption");
  return i.append(e), i;
}
function V6(t14) {
  return t14.flat(1 / 0).filter((e) => e != null).map(qj);
}
function qj(t14) {
  return typeof t14.render == "function" ? t14 : new kj(t14);
}
class kj extends si {
  constructor(e) {
    if (typeof e != "function") throw new TypeError("invalid mark; missing render function");
    super(), this.render = e;
  }
  render() {
  }
}
function h1(t14, e) {
  for (const i in t14) f7(t14[i], e);
  return t14;
}
function f7(t14, e) {
  const { scale: i, transform: a = true } = t14;
  if (i == null || !a) return;
  const { type: u, percent: o, interval: f, transform: s = o ? (d) => d == null ? NaN : d * 100 : JU(f, u) } = e[i] ?? {};
  s != null && (t14.value = Be(t14.value, s), t14.transform = false);
}
function Yj(t14) {
  for (const e in t14) X8(e, t14[e]);
}
function Il(t14, e, i, a = ZU) {
  var _a2, _b;
  for (const { channels: u } of e.values()) for (const o in u) {
    const f = u[o], { scale: s } = f;
    if (s != null && a(s)) if (s === "projection") {
      if (!GH(i)) {
        const d = ((_a2 = i.x) == null ? void 0 : _a2.domain) === void 0, p = ((_b = i.y) == null ? void 0 : _b.domain) === void 0;
        if (d || p) {
          const [m, b] = FH(f);
          d && zp(t14, "x", m), p && zp(t14, "y", b);
        }
      }
    } else zp(t14, s, f);
  }
  return t14;
}
function zp(t14, e, i) {
  const a = t14.get(e);
  a !== void 0 ? a.push(i) : t14.set(e, [i]);
}
function Gj(t14, e) {
  if (t14 == null) return;
  const { x: i, y: a } = t14;
  if (i == null && a == null) return;
  const u = Uu(t14.data);
  if (u == null) throw new Error("missing facet data");
  const o = {};
  i != null && (o.fx = Oo(u, { value: i, scale: "fx" })), a != null && (o.fy = Oo(u, { value: a, scale: "fy" })), h1(o, e);
  const f = n1(u, o);
  return { channels: o, groups: f, data: t14.data };
}
function j6(t14, e, i) {
  if (t14.facet === null || t14.facet === "super") return;
  const { fx: a, fy: u } = t14;
  if (a != null || u != null) {
    const d = Uu(t14.data ?? a ?? u);
    if (d === void 0) throw new Error(`missing facet data in ${t14.ariaLabel}`);
    if (d === null) return;
    const p = {};
    return a != null && (p.fx = Oo(d, { value: a, scale: "fx" })), u != null && (p.fy = Oo(d, { value: u, scale: "fy" })), h1(p, i), { channels: p, groups: n1(d, p) };
  }
  if (e === void 0) return;
  const { channels: o, groups: f, data: s } = e;
  if (t14.facet !== "auto" || t14.data === s) return { channels: o, groups: f };
  s.length > 0 && (f.size > 1 || f.size === 1 && o.fx && o.fy && [...f][0][1].size > 1) && Um(Uu(t14.data)) === Um(s) && Tr(`Warning: the ${t14.ariaLabel} mark appears to use faceted data, but isn\u2019t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`);
}
function Xj(t14, e = {}) {
  return ks({ ...e, x: null, y: null }, (i, a, u, o, f, s) => s.getMarkState(t14));
}
function Fj(t14) {
  const e = [];
  for (const i of t14) {
    let a = i.tip;
    if (a) {
      a === true ? a = {} : typeof a == "string" && (a = { pointer: a });
      let { pointer: u, preferredAnchor: o } = a;
      u = /^x$/i.test(u) ? SV : /^y$/i.test(u) ? T6 : wV, a = u(Xj(i, a)), a.title = null, o === void 0 && (a.preferredAnchor = u === T6 ? "left" : "bottom");
      const f = zj(i.data, a);
      f.facet = i.facet, f.facetAnchor = i.facetAnchor, e.push(f);
    }
  }
  return e;
}
function Zj(t14, e, i) {
  let { projection: a, x: u = {}, y: o = {}, fx: f = {}, fy: s = {}, axis: d, grid: p, facet: m = {}, facet: { axis: b = d, grid: v } = m, x: { axis: y = d, grid: w = y === null ? null : p } = u, y: { axis: S = d, grid: x = S === null ? null : p } = o, fx: { axis: T = b, grid: E = T === null ? null : v } = f, fy: { axis: D = b, grid: O = D === null ? null : v } = s } = i;
  (a || !zm(u) && !B6("x", t14)) && (y = w = null), (a || !zm(o) && !B6("y", t14)) && (S = x = null), e.has("fx") || (T = E = null), e.has("fy") || (D = O = null), y === void 0 && (y = !Bf(t14, "x")), S === void 0 && (S = !Bf(t14, "y")), T === void 0 && (T = !Bf(t14, "fx")), D === void 0 && (D = !Bf(t14, "fy")), y === true && (y = "bottom"), S === true && (S = "left"), T === true && (T = y === "top" || y === null ? "bottom" : "top"), D === true && (D = S === "right" || S === null ? "left" : "right");
  const A = [];
  return jf(A, O, sj, s), Vf(A, D, rj, "right", "left", m, s), jf(A, E, hj, f), Vf(A, T, aj, "top", "bottom", m, f), jf(A, x, fj, o), Vf(A, S, ZS, "left", "right", i, o), jf(A, w, dj, u), Vf(A, y, QS, "bottom", "top", i, u), A;
}
function Vf(t14, e, i, a, u, o, f) {
  if (!e) return;
  const s = Qj(e);
  f = Kj(s ? a : e, o, f);
  const { line: d } = f;
  (i === ZS || i === QS) && d && !Ao(d) && t14.push(Rj(Pj(f))), t14.push(i(f)), s && t14.push(i({ ...f, anchor: u, label: null }));
}
function jf(t14, e, i, a) {
  !e || Ao(e) || t14.push(i(Ij(e, a)));
}
function Qj(t14) {
  return /^\s*both\s*$/i.test(t14);
}
function Kj(t14, e, { line: i = e.line, ticks: a, tickSize: u, tickSpacing: o, tickPadding: f, tickFormat: s, tickRotate: d, fontVariant: p, ariaLabel: m, ariaDescription: b, label: v = e.label, labelAnchor: y, labelArrow: w = e.labelArrow, labelOffset: S }) {
  return { anchor: t14, line: i, ticks: a, tickSize: u, tickSpacing: o, tickPadding: f, tickFormat: s, tickRotate: d, fontVariant: p, ariaLabel: m, ariaDescription: b, label: v, labelAnchor: y, labelArrow: w, labelOffset: S };
}
function Pj(t14) {
  const { anchor: e, line: i } = t14;
  return { anchor: e, facetAnchor: e + "-empty", stroke: i === true ? void 0 : i };
}
function Ij(t14, { stroke: e = Md(t14) ? t14 : void 0, ticks: i = Wj(t14) ? t14 : void 0, tickSpacing: a, ariaLabel: u, ariaDescription: o }) {
  return { stroke: e, ticks: i, tickSpacing: a, ariaLabel: u, ariaDescription: o };
}
function Wj(t14) {
  switch (typeof t14) {
    case "number":
      return true;
    case "string":
      return !Md(t14);
  }
  return Ea(t14) || typeof (t14 == null ? void 0 : t14.range) == "function";
}
function Bf(t14, e) {
  const i = `${e}-axis `;
  return t14.some((a) => {
    var _a2;
    return (_a2 = a.ariaLabel) == null ? void 0 : _a2.startsWith(i);
  });
}
function B6(t14, e) {
  for (const i of e) for (const a in i.channels) {
    const { scale: u } = i.channels[a];
    if (u === t14 || u === "projection") return true;
  }
  return false;
}
function Jj(t14, e) {
  for (const i in t14) {
    const a = t14[i], u = e[i];
    a.label === void 0 && u && (a.label = u.label);
  }
  return t14;
}
function tB({ fx: t14, fy: e }, i) {
  const { marginTop: a, marginRight: u, marginBottom: o, marginLeft: f, width: s, height: d } = e1(i), p = t14 && q6(t14), m = e && q6(e);
  return { marginTop: e ? m[0] : a, marginRight: t14 ? s - p[1] : u, marginBottom: e ? d - m[1] : o, marginLeft: t14 ? p[0] : f, inset: { marginTop: i.marginTop, marginRight: i.marginRight, marginBottom: i.marginBottom, marginLeft: i.marginLeft }, width: s, height: d };
}
function q6(t14) {
  const e = t14.domain();
  if (e.length === 0) return [0, t14.bandwidth()];
  let i = t14(e[0]), a = t14(e[e.length - 1]);
  return a < i && ([i, a] = [a, i]), [i, a + t14.bandwidth()];
}
const eB = /* @__PURE__ */ new Map([["basis", gU], ["basis-closed", bU], ["basis-open", vU], ["bundle", yU], ["bump-x", aU], ["bump-y", uU], ["cardinal", _U], ["cardinal-closed", wU], ["cardinal-open", SU], ["catmull-rom", xU], ["catmull-rom-closed", MU], ["catmull-rom-open", TU], ["linear", vd], ["linear-closed", EU], ["monotone-x", AU], ["monotone-y", OU], ["natural", CU], ["step", DU], ["step-after", NU], ["step-before", RU]]);
function nB(t14 = vd, e) {
  if (typeof t14 == "function") return t14;
  const i = eB.get(`${t14}`.toLowerCase());
  if (!i) throw new Error(`unknown curve: ${t14}`);
  if (e !== void 0) {
    if ("beta" in i) return i.beta(e);
    if ("tension" in i) return i.tension(e);
    if ("alpha" in i) return i.alpha(e);
  }
  return i;
}
function iB(t14 = Xs, e) {
  return typeof t14 != "function" && `${t14}`.toLowerCase() === "auto" ? Xs : nB(t14, e);
}
function Xs(t14) {
  return vd(t14);
}
const rB = { ariaLabel: "line", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 1 };
class aB extends si {
  constructor(e, i = {}) {
    const { x: a, y: u, z: o, curve: f, tension: s } = i;
    super(e, { x: { value: a, scale: "x" }, y: { value: u, scale: "y" }, z: { value: IU(i), optional: true } }, i, rB), this.z = o, this.curve = iB(f, s), o1(this, i);
  }
  filter(e) {
    return e;
  }
  project(e, i, a) {
    this.curve !== Xs && super.project(e, i, a);
  }
  render(e, i, a, u, o) {
    const { x: f, y: s } = a, { curve: d } = this;
    return Xe("svg:g", o).call(Oa, this, u, o).call(Da, this, i).call((p) => p.selectAll().data(cV(e, [f, s], this, a)).enter().append("path").call(Ca, this).call(uV, this, a).call(AV, this, a, o).attr("d", d === Xs && o.projection ? uB(o.path(), f, s) : rU().curve(d).defined((m) => m >= 0).x((m) => f[m]).y((m) => s[m]))).node();
  }
}
function uB(t14, e, i) {
  return e = qs(e), i = qs(i), (a) => {
    let u = [];
    const o = [u];
    for (const f of a) f === -1 ? (u = [], o.push(u)) : u.push([e[f], i[f]]);
    return t14({ type: "MultiLineString", coordinates: o });
  };
}
function lB(t14, { x: e, y: i, ...a } = {}) {
  return [e, i] = Zg(e, i), new aB(t14, { ...a, x: e, y: i });
}
si.prototype.plot = function({ marks: t14 = [], ...e } = {}) {
  return c7({ ...e, marks: [...t14, this] });
};
function s7({ yTicks: t14 = 10, results: e, yDomain: i, showLegend: a = true }) {
  const u = Z.useRef(null), [o, f] = Z.useState([800, 500]);
  return Z.useEffect(() => {
    if (!e.length || !u.current) return;
    const [, s] = e.reduce(([y, w], { values: S }) => [Math.max(y, S[S.length - 1].time), Math.max(w, ...S.map((x) => x.value))], [0, 0]);
    let d = e[0].output_type, p = (y) => y.toLocaleString();
    s >= 1e6 ? (d += " (millions)", p = (y) => (y / 1e6).toLocaleString("en-US")) : s >= 1e4 && (d += " (thousands)", p = (y) => (y / 1e3).toLocaleString("en-US"));
    let { marks: m, color: b } = oB(e, ["unmitigated", "var(--default-plot-line-color)"], ["mitigated", "var(--purple)"]);
    const v = c7({ x: { label: "Days" }, y: { label: d, domain: i || [0, s], grid: true, ticks: t14, tickFormat: p }, color: a ? b : void 0, width: o[0], height: Math.max(o[0] * 0.5, 200), marks: m });
    return u.current.innerHTML = "", u.current.appendChild(v), () => v.remove();
  }, [e, o, i, a, t14]), Z.useLayoutEffect(() => {
    if (!u.current) return;
    let s = null;
    const d = new ResizeObserver((p) => {
      for (let m of p) m.contentRect.width && (s && clearTimeout(s), s = setTimeout(() => {
        f([m.contentRect.width, m.contentRect.height]);
      }, 100));
    });
    return d.observe(u.current), () => {
      d.disconnect(), s && clearTimeout(s);
    };
  }, []), F.jsx("div", { ref: u });
}
function oB(t14, ...e) {
  let i = [], a = { legend: true, domain: [], range: [] };
  for (let [u, o] of e) {
    let f = cB(t14, u, o);
    f && (i.push(f), a.domain.push(u), a.range.push(o));
  }
  return { marks: i, color: a };
}
function cB(t14, e, i) {
  let a = t14.find((o) => o.label === e);
  if (!a) return;
  let u = { x: "time", y: "value", stroke: i };
  return lB(a.values, u);
}
function fB({ groups: t14, ...e }) {
  let [i] = _a(), a = i.populaton_fraction_labels;
  const u = t14.map((f) => f.map((s) => s.values.map((d) => d.value))).flat(2), o = [Math.min(...u), Math.max(...u)];
  return F.jsx(F.Fragment, { children: t14.map((f, s) => F.jsxs("div", { children: [F.jsx("h4", { className: "mb-1", children: a[s] }), F.jsx(s7, { results: f, yDomain: o, ...e }, s)] }, s)) });
}
function sB(t14) {
  return t14.values_vec.reduce((e, { value: i }) => (i.forEach((a, u) => {
    e[u] = (e[u] || 0) + a;
  }), e), []);
}
function Up(t14) {
  return Math.round(t14 / 1e3) * 1e3;
}
function dB(t14) {
  return t14.toLocaleString("en-US");
}
function d7() {
  let [t14] = _a(), e = t14.populaton_fraction_labels, { modelResult: i } = ug();
  const { labels: a, tableData: u } = Z.useMemo(() => {
    if (!i) return { labels: [], tableData: [] };
    const o = i.map((p) => ({ label: p.label, values: sB(p) })), f = o.map((p) => p.label);
    let s = f.length === 2 && f[0] === "unmitigated" && f[1] === "mitigated";
    s && f.push("prevented");
    const d = e.map((p, m) => {
      const b = o.map((v) => Up(v.values[m]));
      return s && b.push(Up(b[0]) - Up(b[1])), { group: p, values: b };
    });
    return { labels: f, tableData: d };
  }, [i, e]);
  return F.jsxs("div", { className: "summary-table-container mb-2", children: [F.jsx("h3", { className: "mb-1", children: "Total Infection Incidence" }), F.jsxs("table", { className: "summary-table", children: [F.jsx("thead", { children: F.jsxs("tr", { children: [F.jsx("th", { children: "Age group" }), a.map((o) => F.jsx("th", { children: o }, o)), F.jsx("th", {})] }) }), F.jsx("tbody", { children: u.map(({ group: o, values: f }, s) => F.jsxs("tr", { children: [F.jsx("td", { children: o }), f.map((d, p) => F.jsx("td", { className: a[p], children: dB(d) }, p)), F.jsx("td", {})] }, s)) })] })] });
}
function hB(t14) {
  let e = [];
  return t14.forEach((i, a) => {
    i.values_vec.forEach((u) => {
      u.value.forEach((o, f) => {
        e[f] || (e[f] = []), e[f][a] || (e[f][a] = { label: i.label, output_type: i.output_type, values: [] }), e[f][a].values.push({ time: u.time, value: o });
      });
    });
  }), e;
}
function pB() {
  const { isRunning: t14, modelResult: e } = ug(), i = Z.useMemo(() => e ? hB(e) : null, [e]);
  return F.jsxs(F.Fragment, { children: [F.jsx("h3", { children: "Infection Incidence" }), F.jsx("div", { className: "mb-4", style: { opacity: t14 ? "0.5" : "" }, children: e && F.jsx(s7, { results: e }) }), F.jsx("h3", { className: "mb-1", children: "By Age Group" }), F.jsx("div", { className: "mb-4", style: { opacity: t14 ? "0.5" : "" }, children: F.jsx("div", { className: "row-2", children: i && F.jsx(fB, { groups: i, yTicks: 5, showLegend: false }) }) }), F.jsx(d7, {})] });
}
function Fs() {
  return Fs = Object.assign ? Object.assign.bind() : function(t14) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t14[a] = i[a]);
    }
    return t14;
  }, Fs.apply(this, arguments);
}
var h7 = ["ArrowRight", "Right"], p7 = ["ArrowDown", "Down"], mB = [].concat(["ArrowLeft", "Left"], h7), gB = [].concat(["ArrowUp", "Up"], p7), bB = [].concat(h7, p7), k6 = function(t14) {
  var e = t14.axis, i = t14.disabled, a = i !== void 0 && i, u = t14.initial, o = u === void 0 ? 0 : u, f = t14.min, s = f === void 0 ? 0 : f, d = t14.max, p = d === void 0 ? 1 / 0 : d, m = t14.reverse, b = t14.step, v = b === void 0 ? 10 : b, y = t14.shiftStep, w = y === void 0 ? 50 : y, S = t14.onResizeStart, x = t14.onResizeEnd, T = t14.containerRef, E = Math.min(Math.max(o, s), p), D = Z.useRef(false), O = Z.useState(false), A = O[0], $ = O[1], N = Z.useState(E), H = N[0], z = N[1], G = Z.useRef(E), V = Z.useState(E), lt = V[0], ft = V[1], ct = Z.useMemo(function() {
    return { role: "separator", "aria-valuenow": H, "aria-valuemin": s, "aria-valuemax": p, "aria-orientation": e === "x" ? "vertical" : "horizontal", "aria-disabled": a };
  }, [e, a, p, s, H]), Y = Z.useCallback(function(C) {
    if (D.current && !a) {
      C.stopPropagation(), C.preventDefault();
      var B = function() {
        if (e === "x") {
          if (T != null && T.current) {
            var Q = T.current.getBoundingClientRect(), K = Q.left;
            return m ? K + Q.width - C.clientX : C.clientX - K;
          }
          return m ? document.body.offsetWidth - C.clientX : C.clientX;
        }
        if (T != null && T.current) {
          var tt = T.current.getBoundingClientRect(), ht = tt.top;
          return m ? ht + tt.height - C.clientY : C.clientY - ht;
        }
        return m ? document.body.offsetHeight - C.clientY : C.clientY;
      }();
      B = Math.min(Math.max(B, s), p), z(B), G.current = B;
    }
  }, [e, a, p, s, m, T]), q = Z.useCallback(function(C) {
    a || (C.stopPropagation(), D.current = false, $(false), ft(G.current), document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", q), x && x({ position: G.current }));
  }, [a, Y, x]), ut = Z.useCallback(function(C) {
    a || (C.stopPropagation(), D.current = true, $(true), document.addEventListener("pointermove", Y), document.addEventListener("pointerup", q), S && S({ position: G.current }));
  }, [a, Y, q, S]), nt = Z.useCallback(function(C) {
    if (!a) {
      if (C.key === "Enter") return z(o), void (G.current = o);
      if ((e !== "x" || mB.includes(C.key)) && (e !== "y" || gB.includes(C.key))) {
        S && S({ position: G.current });
        var B = C.shiftKey ? w : v, Q = m ? -1 : 1, K = bB.includes(C.key) ? Q : -1 * Q, tt = H + B * K;
        tt < s ? (z(s), G.current = s) : tt > p ? (z(p), G.current = p) : (z(tt), G.current = tt), x && x({ position: G.current });
      }
    }
  }, [a, e, S, w, v, m, H, s, p, x, o]), P = Z.useCallback(function() {
    a || (z(o), G.current = o);
  }, [a, o]);
  return { position: H, endPosition: lt, isDragging: A, separatorProps: Fs({}, ct, { onPointerDown: ut, onKeyDown: nt, onDoubleClick: P }), setPosition: z, splitterProps: Fs({}, ct, { onPointerDown: ut, onKeyDown: nt, onDoubleClick: P }) };
};
const Y6 = ({ id: t14 = "drag-bar", isDragging: e, ...i }) => F.jsx("div", { id: t14, tabIndex: 0, className: ["drag-bar", e ? "drag-bar--dragging" : ""].join(" "), ...i });
function vB({ tabs: t14 }) {
  const [e, i] = Z.useState(0), [a, u] = Z.useState(Array);
  return Z.useEffect(() => {
    if (!a[e]) {
      console.debug("Rendering tab " + e);
      let o = [...a];
      o[e] = t14[e].content(), u(o);
    }
  }, [e]), F.jsxs(F.Fragment, { children: [F.jsx("div", { className: "tabs", children: t14.map(({ title: o }, f) => F.jsx("div", { className: "tab" + (f === e ? " active" : "") + (t14[f].mobileOnly ? " mobile-only" : ""), onClick: () => i(f), children: F.jsx("h2", { children: o }) }, o)) }), a.map((o, f) => F.jsx("div", { className: `tab-wrapper ${t14[f].isDark ? " dark" : ""} p-3 pt-2`, style: { display: f === e ? "" : "none" }, children: o }, f))] });
}
const G6 = { default: { label: "Default (unmitigated)", getParams() {
  return Xp();
} }, with_vaccines: { label: "With vaccines", getParams() {
  const t14 = Xp();
  return t14.mitigations.vaccine.enabled = true, t14;
} } };
function m7() {
  let [t14, e] = Z.useState(null), [, , i] = _a();
  const a = (u) => {
    i(() => G6[u].getParams()), e(u);
  };
  return F.jsxs("div", { children: [F.jsx("h4", { className: "preset-header", children: "Presets" }), F.jsxs("ul", { className: "preset-list", children: [Object.entries(G6).map(([u, { label: o }]) => {
    let f = u;
    return F.jsx("li", { className: t14 === f ? "selected" : "", onClick: () => a(f), children: o }, f);
  }), F.jsxs("li", { onClick: () => e(null), className: t14 ? "" : "selected", children: ["Custom\u2026", " "] })] }), F.jsx(yB, {})] });
}
function yB() {
  let [t14, e] = Z.useState(0), { isRunning: i, modelResult: a } = ug();
  return Z.useEffect(() => {
    a && e((u) => u + 1);
  }, [a]), F.jsxs("div", { className: "model-run-stats", children: ["Model run: ", i ? ".." : t14] });
}
function _B() {
  return F.jsxs("div", { className: "mobile-editor", children: [F.jsx("div", { className: "mb-3", children: F.jsx(m7, {}) }), F.jsx("h4", { className: "preset-header", children: "Settings" }), F.jsx(j3, {})] });
}
function wB() {
  const t14 = k6({ axis: "x", initial: 250, min: 200 }), e = k6({ axis: "x", initial: 320, min: 200, reverse: true });
  return F.jsxs("div", { className: "app", children: [F.jsx("aside", { style: { width: t14.position }, children: F.jsx(m7, {}) }), F.jsx(Y6, { isDragging: t14.isDragging, ...t14.separatorProps }), F.jsx("main", { children: F.jsx(vB, { tabs: [{ title: "Epi Curve", content: () => F.jsx(pB, {}) }, { title: "Summary", content: () => F.jsx(d7, {}) }, { title: "Editor", isDark: true, mobileOnly: true, content: () => F.jsx(_B, {}) }] }) }), F.jsx(Y6, { isDragging: e.isDragging, ...e.separatorProps }), F.jsx("aside", { style: { width: e.position }, children: F.jsx(j3, {}) })] });
}
L3().then(() => {
  console.log("Wasm initialized");
  let t14 = Xp();
  K9.createRoot(document.getElementById("root")).render(F.jsx(Z.StrictMode, { children: F.jsx(KA, { initialParams: t14, children: F.jsx(wB, {}) }) }));
});
