import {
  require_react
} from "./chunk-ZOIWZPCO.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/react-yandex-map/dist/production/react-yandex-maps.esm.js
var import_react = __toESM(require_react());
function e(t2, e2) {
  return t2(e2 = { exports: {} }, e2.exports), e2.exports;
}
var n = "function" == typeof Symbol && Symbol.for;
var o = n ? Symbol.for("react.element") : 60103;
var r = n ? Symbol.for("react.portal") : 60106;
var s = n ? Symbol.for("react.fragment") : 60107;
var i = n ? Symbol.for("react.strict_mode") : 60108;
var a = n ? Symbol.for("react.profiler") : 60114;
var c = n ? Symbol.for("react.provider") : 60109;
var u = n ? Symbol.for("react.context") : 60110;
var p = n ? Symbol.for("react.async_mode") : 60111;
var f = n ? Symbol.for("react.concurrent_mode") : 60111;
var l = n ? Symbol.for("react.forward_ref") : 60112;
var m = n ? Symbol.for("react.suspense") : 60113;
var d = n ? Symbol.for("react.suspense_list") : 60120;
var y = n ? Symbol.for("react.memo") : 60115;
var h = n ? Symbol.for("react.lazy") : 60116;
var b = n ? Symbol.for("react.block") : 60121;
var v = n ? Symbol.for("react.fundamental") : 60117;
var O = n ? Symbol.for("react.responder") : 60118;
var j = n ? Symbol.for("react.scope") : 60119;
function g(t2) {
  if ("object" == typeof t2 && null !== t2) {
    var e2 = t2.$$typeof;
    switch (e2) {
      case o:
        switch (t2 = t2.type) {
          case p:
          case f:
          case s:
          case a:
          case i:
          case m:
            return t2;
          default:
            switch (t2 = t2 && t2.$$typeof) {
              case u:
              case l:
              case h:
              case y:
              case c:
                return t2;
              default:
                return e2;
            }
        }
      case r:
        return e2;
    }
  }
}
function _(t2) {
  return g(t2) === f;
}
var E = { AsyncMode: p, ConcurrentMode: f, ContextConsumer: u, ContextProvider: c, Element: o, ForwardRef: l, Fragment: s, Lazy: h, Memo: y, Portal: r, Profiler: a, StrictMode: i, Suspense: m, isAsyncMode: function(t2) {
  return _(t2) || g(t2) === p;
}, isConcurrentMode: _, isContextConsumer: function(t2) {
  return g(t2) === u;
}, isContextProvider: function(t2) {
  return g(t2) === c;
}, isElement: function(t2) {
  return "object" == typeof t2 && null !== t2 && t2.$$typeof === o;
}, isForwardRef: function(t2) {
  return g(t2) === l;
}, isFragment: function(t2) {
  return g(t2) === s;
}, isLazy: function(t2) {
  return g(t2) === h;
}, isMemo: function(t2) {
  return g(t2) === y;
}, isPortal: function(t2) {
  return g(t2) === r;
}, isProfiler: function(t2) {
  return g(t2) === a;
}, isStrictMode: function(t2) {
  return g(t2) === i;
}, isSuspense: function(t2) {
  return g(t2) === m;
}, isValidElementType: function(t2) {
  return "string" == typeof t2 || "function" == typeof t2 || t2 === s || t2 === f || t2 === a || t2 === i || t2 === m || t2 === d || "object" == typeof t2 && null !== t2 && (t2.$$typeof === h || t2.$$typeof === y || t2.$$typeof === c || t2.$$typeof === u || t2.$$typeof === l || t2.$$typeof === v || t2.$$typeof === O || t2.$$typeof === j || t2.$$typeof === b);
}, typeOf: g };
e(function(t2, e2) {
}), e(function(t2) {
  t2.exports = E;
}), Object, Object, Object, function() {
  try {
    if (!Object.assign)
      return false;
    var t2 = new String("abc");
    if (t2[5] = "de", "5" === Object.getOwnPropertyNames(t2)[0])
      return false;
    for (var e2 = {}, n2 = 0; n2 < 10; n2++)
      e2["_" + String.fromCharCode(n2)] = n2;
    if ("0123456789" !== Object.getOwnPropertyNames(e2).map(function(t3) {
      return e2[t3];
    }).join(""))
      return false;
    var o2 = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(t3) {
      o2[t3] = t3;
    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o2)).join("");
  } catch (t3) {
    return false;
  }
}() && Object;
var C = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
function w() {
}
function P() {
}
Function.call.bind(Object.prototype.hasOwnProperty), P.resetWarningCache = w, e(function(t2) {
  t2.exports = function() {
    function t3(t4, e3, n3, o2, r2, s2) {
      if (s2 !== C) {
        var i2 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw i2.name = "Invariant Violation", i2;
      }
    }
    function e2() {
      return t3;
    }
    t3.isRequired = t3;
    var n2 = { array: t3, bigint: t3, bool: t3, func: t3, number: t3, object: t3, string: t3, symbol: t3, any: t3, arrayOf: e2, element: t3, elementType: t3, instanceOf: e2, node: t3, objectOf: e2, oneOf: e2, oneOfType: e2, shape: e2, exact: e2, checkPropTypes: P, resetWarningCache: w };
    return n2.PropTypes = n2, n2;
  }();
});
var R = function(t2) {
  return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
}(e(function(t2, e2) {
  Object.defineProperty(e2, "__esModule", { value: true }), e2.default = function(t3) {
    return t3.displayName || t3.name || ("string" == typeof t3 && t3.length > 0 ? t3 : "Unknown");
  };
}));
var S = function(t2, e2) {
  var n2 = {};
  for (var o2 in t2)
    -1 === e2.indexOf(o2) && (n2[o2] = t2[o2]);
  return n2;
};
var M = import_react.default.createContext(null);
var k = function(e2) {
  var n2 = R(e2);
  return function(o2) {
    return import_react.default.createElement(M.Consumer, null, function(r2) {
      if (null === r2)
        throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that <" + n2 + " /> is inside <YMaps /> provider");
      return import_react.default.createElement(e2, Object.assign({}, { ymaps: r2 }, o2));
    });
  };
};
var x = import_react.default.createContext(null);
var $ = function(e2) {
  return function(n2) {
    return import_react.default.createElement(x.Consumer, null, function(o2) {
      return import_react.default.createElement(e2, Object.assign({}, { parent: o2 }, n2));
    });
  };
};
function T(e2, n2, o2) {
  void 0 === n2 && (n2 = false), void 0 === o2 && (o2 = []);
  var r2 = function(r3) {
    function s2() {
      r3.call(this), this.state = { loading: true }, this._isMounted = false;
    }
    return r3 && (s2.__proto__ = r3), (s2.prototype = Object.create(r3 && r3.prototype)).constructor = s2, s2.prototype.componentDidMount = function() {
      var t2 = this;
      this._isMounted = true, this.props.ymaps.load().then(function(e3) {
        return Promise.all(o2.concat(t2.props.modules).map(e3.loadModule)).then(function() {
          true === t2._isMounted && t2.setState({ loading: false }, function() {
            t2.props.onLoad(e3);
          });
        });
      }).catch(function(e3) {
        true === t2._isMounted && t2.props.onError(e3);
      });
    }, s2.prototype.componentWillUnmount = function() {
      this._isMounted = false;
    }, s2.prototype.render = function() {
      var o3 = this.props.ymaps, r4 = false === n2 || false === this.state.loading, s3 = S(this.props, ["onLoad", "onError", "modules", "ymaps"]);
      return r4 && import_react.default.createElement(e2, Object.assign({}, { ymaps: o3.getApi() }, s3));
    }, s2;
  }(import_react.default.Component);
  return r2.defaultProps = { onLoad: Function.prototype, onError: Function.prototype, modules: [] }, k(r2);
}
var A = { lang: "ru_RU", load: "", ns: "", mode: "release" };
var U = {};
var D = function(t2) {
  var e2 = Date.now().toString(32);
  this.options = t2, this.namespace = t2.query.ns || A.ns, this.onload = "__yandex-maps-api-onload__$$" + e2, this.onerror = "__yandex-maps-api-onerror__$$" + e2;
};
D.prototype.getApi = function() {
  return "undefined" != typeof window && this.namespace ? window[this.namespace] : this.api;
}, D.prototype.setApi = function(t2) {
  return this.api = t2;
}, D.prototype.getPromise = function() {
  return this.namespace ? U[this.namespace] : this.promise;
}, D.prototype.setPromise = function(t2) {
  return this.namespace ? U[this.namespace] = this.promise = t2 : this.promise = t2;
}, D.prototype.load = function() {
  var t2 = this;
  if (this.getApi())
    return Promise.resolve(this.setApi(this.getApi()));
  if (this.getPromise())
    return this.setPromise(this.getPromise());
  var e2 = Object.assign({ onload: this.onload, onerror: this.onerror }, A, this.options.query), n2 = Object.keys(e2).map(function(t3) {
    return t3 + "=" + e2[t3];
  }).join("&"), o2 = ["https://" + (this.options.enterprise ? "enterprise." : "") + "api-maps.yandex.ru", this.options.version, "?" + n2].join("/"), r2 = new Promise(function(e3, n3) {
    window[t2.onload] = function(n4) {
      delete window[t2.onload], n4.loadModule = t2.loadModule.bind(t2), n4.ready(function() {
        return e3(t2.setApi(n4));
      });
    }, window[t2.onerror] = function(e4) {
      delete window[t2.onerror], n3(e4);
    }, t2.fetchScript(o2).catch(window[t2.onerror]);
  });
  return this.setPromise(r2);
}, D.prototype.fetchScript = function(t2) {
  var e2 = this;
  return new Promise(function(n2, o2) {
    e2.script = document.createElement("script"), e2.script.type = "text/javascript", e2.script.onload = n2, e2.script.onerror = o2, e2.script.src = t2, e2.script.async = "async", document.head.appendChild(e2.script);
  });
}, D.prototype.loadModule = function(t2) {
  var e2 = this;
  return new Promise(function(n2, o2) {
    e2.getApi().modules.require(t2, function(o3) {
      !function(t3, e3, n3, o4) {
        void 0 === o4 && (o4 = false), e3 = "string" == typeof e3 ? e3.split(".") : e3.slice();
        for (var r2, s2 = t3; e3.length > 1; )
          s2[r2 = e3.shift()] || (s2[r2] = {}), s2 = s2[r2];
        s2[e3[0]] = true === o4 && s2[e3[0]] || n3;
      }(e2.api, t2, o3, true), n2(o3);
    }, o2, e2.getApi());
  });
}, D._name = "__react-yandex-maps__";
var B = function(e2) {
  function n2(t2) {
    e2.call(this, t2), this.ymaps = new D(t2);
  }
  return e2 && (n2.__proto__ = e2), (n2.prototype = Object.create(e2 && e2.prototype)).constructor = n2, n2.prototype.componentDidMount = function() {
    true === this.props.preload && this.ymaps.load();
  }, n2.prototype.render = function() {
    return import_react.default.createElement(M.Provider, { value: this.ymaps }, this.props.children);
  }, n2;
}(import_react.default.Component);
B.defaultProps = { version: "2.1", enterprise: false, query: { lang: "ru_RU", load: "", ns: "" }, preload: false };
var L = /^on(?=[A-Z])/;
function F(t2) {
  return Object.keys(t2).reduce(function(e2, n2) {
    if (L.test(n2)) {
      var o2 = n2.replace(L, "").toLowerCase();
      e2._events[o2] = t2[n2];
    } else
      e2[n2] = t2[n2];
    return e2;
  }, { _events: {} });
}
function N(t2, e2, n2) {
  "function" == typeof n2 && t2.events.add(e2, n2);
}
function W(t2, e2, n2) {
  "function" == typeof n2 && t2.events.remove(e2, n2);
}
function z(t2, e2, n2) {
  Object.keys(Object.assign({}, e2, n2)).forEach(function(o2) {
    e2[o2] !== n2[o2] && (W(t2, o2, e2[o2]), N(t2, o2, n2[o2]));
  });
}
var I = function(t2) {
  return "default" + t2.charAt(0).toUpperCase() + t2.slice(1);
};
function q(t2, e2) {
  return void 0 !== t2[e2] || void 0 === t2[I(e2)];
}
function Z(t2, e2, n2) {
  return (q(t2, e2) ? t2[e2] : t2[I(e2)]) || n2;
}
function G(t2, e2, n2) {
  if (void 0 === n2 && (n2 = null), t2 !== e2) {
    if (t2 && (t2.hasOwnProperty("current") ? t2.current = null : "function" == typeof t2 && t2(null)), !e2)
      return;
    e2.hasOwnProperty("current") ? e2.current = n2 : "function" == typeof e2 && e2(n2);
  }
}
function Y(t2) {
  var e2 = t2.width, n2 = t2.height, o2 = t2.style, r2 = t2.className;
  return void 0 !== o2 || void 0 !== r2 ? Object.assign({}, o2 && { style: o2 }, r2 && { className: r2 }) : { style: { width: e2, height: n2 } };
}
var V = function(e2) {
  function n2() {
    var t2 = this;
    e2.call(this), this.state = { instance: null }, this._parentElement = null, this._getRef = function(e3) {
      t2._parentElement = e3;
    };
  }
  return e2 && (n2.__proto__ = e2), (n2.prototype = Object.create(e2 && e2.prototype)).constructor = n2, n2.prototype.componentDidMount = function() {
    var t2 = n2.mountObject(this._parentElement, this.props.ymaps.Map, this.props);
    this.setState({ instance: t2 });
  }, n2.prototype.componentDidUpdate = function(t2) {
    null !== this.state.instance && n2.updateObject(this.state.instance, t2, this.props);
  }, n2.prototype.componentWillUnmount = function() {
    n2.unmountObject(this.state.instance, this.props);
  }, n2.prototype.render = function() {
    var e3 = Y(this.props), n3 = F(this.props), o2 = S(n3, ["_events", "state", "defaultState", "options", "defaultOptions", "instanceRef", "ymaps", "children", "width", "height", "style", "className"]);
    return import_react.default.createElement(x.Provider, { value: this.state.instance }, import_react.default.createElement("div", Object.assign({}, { ref: this._getRef }, e3, o2), this.props.children));
  }, n2.mountObject = function(t2, e3, n3) {
    var o2 = F(n3), r2 = o2.instanceRef, s2 = o2._events, i2 = new e3(t2, Z(n3, "state"), Z(n3, "options"));
    return Object.keys(s2).forEach(function(t3) {
      return N(i2, t3, s2[t3]);
    }), G(null, r2, i2), i2;
  }, n2.updateObject = function(t2, e3, n3) {
    var o2 = F(n3), r2 = o2._events, s2 = o2.instanceRef, i2 = F(e3), a2 = i2._events, c2 = i2.instanceRef;
    if (q(n3, "state")) {
      var u2 = Z(e3, "state", {}), p2 = Z(n3, "state", {});
      u2.type !== p2.type && t2.setType(p2.type), u2.behaviors !== p2.behaviors && (u2.behaviors && t2.behaviors.disable(u2.behaviors), p2.behaviors && t2.behaviors.enable(p2.behaviors)), p2.zoom && u2.zoom !== p2.zoom && t2.setZoom(p2.zoom), p2.center && u2.center !== p2.center && t2.setCenter(p2.center), p2.bounds && u2.bounds !== p2.bounds && t2.setBounds(p2.bounds);
    }
    if (q(n3, "options")) {
      var f2 = Z(e3, "options"), l2 = Z(n3, "options", {});
      f2 !== l2 && t2.options.set(l2);
    }
    Z(e3, "width") === Z(n3, "width") && Z(e3, "height") === Z(n3, "height") || t2.container.fitToViewport(), z(t2, a2, r2), G(c2, s2, t2);
  }, n2.unmountObject = function(t2, e3) {
    var n3 = F(e3), o2 = n3.instanceRef, r2 = n3._events;
    null !== t2 && (Object.keys(r2).forEach(function(e4) {
      return W(t2, e4, r2[e4]);
    }), t2.destroy(), G(o2));
  }, n2;
}(import_react.default.Component);
V.defaultProps = { width: 320, height: 240 };
var H = T(V, true, ["Map"]);
var J = function(e2) {
  function n2() {
    var t2 = this;
    e2.call(this), this.state = { instance: null }, this._parentElement = null, this._getRef = function(e3) {
      t2._parentElement = e3;
    };
  }
  return e2 && (n2.__proto__ = e2), (n2.prototype = Object.create(e2 && e2.prototype)).constructor = n2, n2.prototype.componentDidMount = function() {
    var t2 = this;
    this._mounted = true, this.props.ymaps.panorama.isSupported() && n2.mountObject(this._parentElement, this.props.ymaps.panorama, this.props).then(function(e3) {
      return t2._mounted && t2.setState({ instance: e3 });
    });
  }, n2.prototype.componentDidUpdate = function(t2) {
    null !== this.state.instance && n2.updateObject(this.state.instance, t2, this.props);
  }, n2.prototype.componentWillUnmount = function() {
    this._mounted = false, n2.unmountObject(this.state.instance, this.props);
  }, n2.prototype.render = function() {
    var e3 = Y(this.props);
    return import_react.default.createElement("div", Object.assign({}, { ref: this._getRef }, e3));
  }, n2.mountObject = function(t2, e3, n3) {
    var o2 = F(n3), r2 = o2.instanceRef, s2 = o2._events, i2 = Z(n3, "point"), a2 = Z(n3, "locateOptions"), c2 = Z(n3, "options");
    return new Promise(function(n4, o3) {
      e3.locate(i2, a2).done(function(o4) {
        if (o4.length > 0) {
          var i3 = new e3.Player(t2, o4[0], c2);
          G(null, r2, i3), Object.keys(s2).forEach(function(t3) {
            return N(i3, t3, s2[t3]);
          }), n4(i3);
        }
      }, o3);
    });
  }, n2.updateObject = function(t2, e3, n3) {
    var o2 = F(n3), r2 = o2._events, s2 = o2.instanceRef, i2 = F(e3), a2 = i2._events, c2 = i2.instanceRef;
    if (q(n3, "options")) {
      var u2 = Z(e3, "options"), p2 = Z(n3, "options");
      u2 !== p2 && t2.options.set(p2);
    }
    if (q(n3, "point")) {
      var f2 = Z(n3, "point"), l2 = Z(e3, "point"), m2 = Z(n3, "locateOptions");
      f2 !== l2 && t2.moveTo(f2, m2);
    }
    z(t2, a2, r2), G(c2, s2, t2);
  }, n2.unmountObject = function(t2, e3) {
    var n3 = F(e3), o2 = n3.instanceRef, r2 = n3._events;
    null !== t2 && (Object.keys(r2).forEach(function(e4) {
      return W(t2, e4, r2[e4]);
    }), G(o2));
  }, n2;
}(import_react.default.Component);
J.defaultProps = { width: 320, height: 240 };
var K = T(J, true, ["panorama.isSupported", "panorama.locate", "panorama.createPlayer", "panorama.Player"]);
var Q = function(e2) {
  function n2() {
    e2.call(this), this.state = { instance: null };
  }
  return e2 && (n2.__proto__ = e2), (n2.prototype = Object.create(e2 && e2.prototype)).constructor = n2, n2.prototype.componentDidMount = function() {
    var t2 = n2.mountControl(this.props.ymaps.control[this.props.name], this.props);
    this.setState({ instance: t2 });
  }, n2.prototype.componentDidUpdate = function(t2) {
    null !== this.state.instance && n2.updateControl(this.state.instance, t2, this.props);
  }, n2.prototype.componentWillUnmount = function() {
    n2.unmountControl(this.state.instance, this.props);
  }, n2.prototype.render = function() {
    return import_react.default.createElement(x.Provider, { value: this.state.instance }, this.props.children);
  }, n2.mountControl = function(t2, e3) {
    var n3 = F(e3), o2 = n3.instanceRef, r2 = n3.parent, s2 = n3.lazy, i2 = n3._events, a2 = new t2({ data: Z(e3, "data"), options: Z(e3, "options"), state: Z(e3, "state"), mapTypes: Z(e3, "mapTypes"), lazy: s2 });
    if (Object.keys(i2).forEach(function(t3) {
      return N(a2, t3, i2[t3]);
    }), r2 && r2.controls && "function" == typeof r2.controls.add)
      r2.controls.add(a2);
    else {
      if (!r2 || !r2.add || "function" != typeof r2.add)
        throw new Error("No parent found to mount " + e3.name);
      r2.add(a2);
    }
    return G(null, o2, a2), a2;
  }, n2.updateControl = function(t2, e3, n3) {
    var o2 = F(n3), r2 = o2._events, s2 = o2.instanceRef, i2 = F(e3), a2 = i2._events, c2 = i2.instanceRef;
    if (q(n3, "options")) {
      var u2 = Z(e3, "options"), p2 = Z(n3, "options");
      u2 !== p2 && t2.options.set(p2);
    }
    if (q(n3, "data")) {
      var f2 = Z(e3, "data"), l2 = Z(n3, "data");
      f2 !== l2 && t2.data.set(l2);
    }
    if (q(n3, "state")) {
      var m2 = Z(e3, "state"), d2 = Z(n3, "state");
      m2 !== d2 && t2.state.set(d2);
    }
    if (q(n3, "mapTypes")) {
      var y2 = Z(e3, "mapTypes"), h2 = Z(n3, "mapTypes");
      y2 !== h2 && (t2.removeAllMapTypes(), h2.forEach(function(e4) {
        return t2.addMapType(e4);
      }));
    }
    z(t2, a2, r2), G(c2, s2, t2);
  }, n2.unmountControl = function(t2, e3) {
    var n3 = F(e3), o2 = n3.instanceRef, r2 = n3.parent, s2 = n3._events;
    null !== t2 && (Object.keys(s2).forEach(function(e4) {
      return W(t2, e4, s2[e4]);
    }), r2.controls && "function" == typeof r2.controls.remove ? r2.controls.remove(t2) : r2.remove && "function" == typeof r2.remove && r2.remove(t2), G(o2));
  }, n2;
}(import_react.default.Component);
var X = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "Button" }));
}, true, ["control.Button"]));
var tt = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "FullscreenControl" }));
}, true, ["control.FullscreenControl"]));
var et = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "GeolocationControl" }));
}, true, ["control.GeolocationControl"]));
var nt = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "ListBox" }));
}, true, ["control.ListBox"]));
var ot = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "ListBoxItem" }));
}, true, ["control.ListBoxItem"]));
var rt = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "RouteButton" }));
}, true, ["control.RouteButton"]));
var st = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "RouteEditor" }));
}, true, ["control.RouteEditor"]));
var it = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "RoutePanel" }));
}, true, ["control.RoutePanel"]));
var at = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "RulerControl" }));
}, true, ["control.RulerControl"]));
var ct = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "SearchControl" }));
}, true, ["control.SearchControl"]));
var ut = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "TrafficControl" }));
}, true, ["control.TrafficControl"]));
var pt = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "TypeSelector" }));
}, true, ["control.TypeSelector"]));
var ft = $(T(function(e2) {
  return import_react.default.createElement(Q, Object.assign({}, e2, { name: "ZoomControl" }));
}, true, ["control.ZoomControl"]));
var lt = $(T(function(e2) {
  function n2() {
    e2.call(this), this.state = { instance: null };
  }
  return e2 && (n2.__proto__ = e2), (n2.prototype = Object.create(e2 && e2.prototype)).constructor = n2, n2.prototype.componentDidMount = function() {
    var t2 = n2.mountObject(this.props.ymaps.Clusterer, this.props);
    this.setState({ instance: t2 });
  }, n2.prototype.componentDidUpdate = function(t2) {
    null !== this.state.instance && n2.updateObject(this.state.instance, t2, this.props);
  }, n2.prototype.componentWillUnmount = function() {
    n2.unmountObject(this.state.instance, this.props);
  }, n2.prototype.render = function() {
    return import_react.default.createElement(x.Provider, { value: this.state.instance }, this.props.children);
  }, n2.mountObject = function(t2, e3) {
    var n3 = F(e3), o2 = n3.instanceRef, r2 = n3.parent, s2 = n3._events, i2 = new t2(Z(e3, "options"));
    if (Object.keys(s2).forEach(function(t3) {
      return N(i2, t3, s2[t3]);
    }), r2.geoObjects && "function" == typeof r2.geoObjects.add)
      r2.geoObjects.add(i2);
    else {
      if (!r2.add || "function" != typeof r2.add)
        throw new Error("No parent found to mount Clusterer");
      r2.add(i2);
    }
    return G(null, o2, i2), i2;
  }, n2.updateObject = function(t2, e3, n3) {
    var o2 = F(n3), r2 = o2._events, s2 = o2.instanceRef, i2 = F(e3), a2 = i2._events, c2 = i2.instanceRef;
    if (q(n3, "options")) {
      var u2 = Z(e3, "options"), p2 = Z(n3, "options");
      u2 !== p2 && t2.options.set(p2);
    }
    z(t2, a2, r2), G(c2, s2, t2);
  }, n2.unmountObject = function(t2, e3) {
    var n3 = F(e3), o2 = n3.instanceRef, r2 = n3.parent, s2 = n3._events;
    null !== t2 && (Object.keys(s2).forEach(function(e4) {
      return W(t2, e4, s2[e4]);
    }), r2.geoObjects && "function" == typeof r2.geoObjects.remove ? r2.geoObjects.remove(t2) : r2.remove && "function" == typeof r2.remove && r2.remove(t2), G(o2));
  }, n2;
}(import_react.default.Component), true, ["Clusterer"]));
var mt = $(T(function(t2) {
  function e2() {
    t2.call(this), this.state = { instance: null };
  }
  return t2 && (e2.__proto__ = t2), (e2.prototype = Object.create(t2 && t2.prototype)).constructor = e2, e2.prototype.componentDidMount = function() {
    var t3 = e2.mountObject(this.props.ymaps.ObjectManager, this.props);
    this.setState({ instance: t3 });
  }, e2.prototype.componentDidUpdate = function(t3) {
    null !== this.state.instance && e2.updateObject(this.state.instance, t3, this.props);
  }, e2.prototype.componentWillUnmount = function() {
    e2.unmountObject(this.state.instance, this.props);
  }, e2.prototype.render = function() {
    return null;
  }, e2.mountObject = function(t3, e3) {
    var n2 = F(e3), o2 = n2.instanceRef, r2 = n2.parent, s2 = n2._events, i2 = Z(e3, "options", {}), a2 = Z(e3, "features", {}), c2 = Z(e3, "filter", null), u2 = Z(e3, "objects", {}), p2 = Z(e3, "clusters", {}), f2 = new t3(i2);
    if (f2.add(a2 || []), f2.setFilter(c2), f2.objects.options.set(u2), f2.clusters.options.set(p2), Object.keys(s2).forEach(function(t4) {
      return N(f2, t4, s2[t4]);
    }), r2.geoObjects && "function" == typeof r2.geoObjects.add)
      r2.geoObjects.add(f2);
    else {
      if (!r2.add || "function" != typeof r2.add)
        throw new Error("No parent found to mount ObjectManager");
      r2.add(f2);
    }
    return G(null, o2, f2), f2;
  }, e2.updateObject = function(t3, e3, n2) {
    var o2 = F(n2), r2 = o2._events, s2 = o2.instanceRef, i2 = F(e3), a2 = i2._events, c2 = i2.instanceRef;
    if (q(n2, "options")) {
      var u2 = Z(e3, "options"), p2 = Z(n2, "options");
      u2 !== p2 && t3.options.set(p2);
    }
    if (q(n2, "objects")) {
      var f2 = Z(e3, "objects"), l2 = Z(n2, "objects");
      f2 !== l2 && t3.objects.options.set(l2);
    }
    if (q(n2, "clusters")) {
      var m2 = Z(e3, "clusters"), d2 = Z(n2, "clusters");
      m2 !== d2 && t3.clusters.options.set(d2);
    }
    if (q(n2, "filter")) {
      var y2 = Z(e3, "filter"), h2 = Z(n2, "filter");
      y2 !== h2 && t3.setFilter(h2);
    }
    if (q(n2, "features")) {
      var b2 = Z(e3, "features"), v2 = Z(n2, "features");
      b2 !== v2 && (t3.remove(b2), t3.add(v2));
    }
    z(t3, a2, r2), G(c2, s2, t3);
  }, e2.unmountObject = function(t3, e3) {
    var n2 = F(e3), o2 = n2.instanceRef, r2 = n2.parent, s2 = n2._events;
    null !== t3 && (Object.keys(s2).forEach(function(e4) {
      return W(t3, e4, s2[e4]);
    }), r2.geoObjects && "function" == typeof r2.geoObjects.remove ? r2.geoObjects.remove(t3) : r2.remove && "function" == typeof r2.remove && r2.remove(t3), G(o2));
  }, e2;
}(import_react.default.Component), true, ["ObjectManager"]));
var dt = function(t2) {
  function e2() {
    t2.call(this), this.state = { instance: null };
  }
  return t2 && (e2.__proto__ = t2), (e2.prototype = Object.create(t2 && t2.prototype)).constructor = e2, e2.prototype.componentDidMount = function() {
    var t3 = this.props, n2 = t3.name, o2 = t3.ymaps, r2 = t3.dangerZone, s2 = e2.mountObject(r2 && "function" == typeof r2.modifyConstructor ? r2.modifyConstructor(o2[n2]) : o2[n2], this.props);
    this.setState({ instance: s2 });
  }, e2.prototype.componentDidUpdate = function(t3) {
    null !== this.state.instance && e2.updateObject(this.state.instance, t3, this.props);
  }, e2.prototype.componentWillUnmount = function() {
    e2.unmountObject(this.state.instance, this.props);
  }, e2.prototype.render = function() {
    return null;
  }, e2.mountObject = function(t3, e3) {
    var n2 = F(e3), o2 = n2.instanceRef, r2 = n2.parent, s2 = n2._events, i2 = new t3(Z(e3, "geometry"), Z(e3, "properties"), Z(e3, "options"));
    if (Object.keys(s2).forEach(function(t4) {
      return N(i2, t4, s2[t4]);
    }), r2 && r2.geoObjects && "function" == typeof r2.geoObjects.add)
      r2.geoObjects.add(i2);
    else {
      if (!r2 || !r2.add || "function" != typeof r2.add)
        throw new Error("No parent found to mount " + e3.name);
      r2.add(i2);
    }
    return G(null, o2, i2), i2;
  }, e2.updateObject = function(t3, e3, n2) {
    var o2 = F(n2), r2 = o2._events, s2 = o2.instanceRef, i2 = F(e3), a2 = i2._events, c2 = i2.instanceRef;
    if (q(n2, "geometry")) {
      var u2 = Z(e3, "geometry", {}), p2 = Z(n2, "geometry", {});
      Array.isArray(p2) && p2 !== u2 ? Array.isArray(p2[0]) && "number" == typeof p2[1] ? (t3.geometry.setCoordinates(p2[0]), t3.geometry.setRadius(p2[1])) : t3.geometry.setCoordinates(p2) : "object" == typeof p2 && (p2.coordinates !== u2.coordinates && t3.geometry.setCoordinates(p2.coordinates), p2.radius !== u2.radius && t3.geometry.setRadius(p2.radius));
    }
    if (q(n2, "properties")) {
      var f2 = Z(e3, "properties"), l2 = Z(n2, "properties");
      f2 !== l2 && t3.properties.set(l2);
    }
    if (q(n2, "options")) {
      var m2 = Z(e3, "options"), d2 = Z(n2, "options");
      m2 !== d2 && t3.options.set(d2);
    }
    z(t3, a2, r2), G(c2, s2, t3);
  }, e2.unmountObject = function(t3, e3) {
    var n2 = F(e3), o2 = n2.instanceRef, r2 = n2.parent, s2 = n2._events;
    null !== t3 && (Object.keys(s2).forEach(function(e4) {
      return W(t3, e4, s2[e4]);
    }), r2.geoObjects && "function" == typeof r2.geoObjects.remove ? r2.geoObjects.remove(t3) : r2.remove && "function" == typeof r2.remove && r2.remove(t3), G(o2));
  }, e2;
}(import_react.default.Component);
var yt = { modifyConstructor: function(t2) {
  function e2(e3, n2, o2) {
    t2.call(this, { geometry: e3, properties: n2 }, o2);
  }
  return e2.prototype = t2.prototype, e2;
} };
var ht = $(T(function(e2) {
  return import_react.default.createElement(dt, Object.assign({}, e2, { name: "GeoObject", dangerZone: yt }));
}, true, ["GeoObject"]));
var bt = $(T(function(e2) {
  return import_react.default.createElement(dt, Object.assign({}, e2, { name: "Circle" }));
}, true, ["Circle"]));
var vt = $(T(function(e2) {
  return import_react.default.createElement(dt, Object.assign({}, e2, { name: "Placemark" }));
}, true, ["Placemark"]));
var Ot = $(T(function(e2) {
  return import_react.default.createElement(dt, Object.assign({}, e2, { name: "Polygon" }));
}, true, ["Polygon"]));
var jt = $(T(function(e2) {
  return import_react.default.createElement(dt, Object.assign({}, e2, { name: "Polyline" }));
}, true, ["Polyline"]));
var gt = $(T(function(e2) {
  return import_react.default.createElement(dt, Object.assign({}, e2, { name: "Rectangle" }));
}, true, ["Rectangle"]));
export {
  X as Button,
  bt as Circle,
  lt as Clusterer,
  tt as FullscreenControl,
  ht as GeoObject,
  et as GeolocationControl,
  nt as ListBox,
  ot as ListBoxItem,
  H as Map,
  mt as ObjectManager,
  K as Panorama,
  vt as Placemark,
  Ot as Polygon,
  jt as Polyline,
  gt as Rectangle,
  rt as RouteButton,
  st as RouteEditor,
  it as RoutePanel,
  at as RulerControl,
  ct as SearchControl,
  ut as TrafficControl,
  pt as TypeSelector,
  B as YMaps,
  ft as ZoomControl,
  T as withYMaps
};
//# sourceMappingURL=react-yandex-map.js.map
