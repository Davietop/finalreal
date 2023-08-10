// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dDqpj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "68b55fd0b41228fe";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ddEpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Me);
var _chartEsJs = require("./chart.es.js");
/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */ var D = function() {
    if (typeof window < "u") {
        if (window.devicePixelRatio) return window.devicePixelRatio;
        var e = window.screen;
        if (e) return (e.deviceXDPI || 1) / (e.logicalXDPI || 1);
    }
    return 1;
}(), m = {
    // @todo move this in Chart.helpers.toTextLines
    toTextLines: function(e) {
        var t = [], r;
        for(e = [].concat(e); e.length;)r = e.pop(), typeof r == "string" ? t.unshift.apply(t, r.split(`
`)) : Array.isArray(r) ? e.push.apply(e, r) : (0, _chartEsJs.i)(e) || t.unshift("" + r);
        return t;
    },
    // @todo move this in Chart.helpers.canvas.textSize
    // @todo cache calls of measureText if font doesn't change?!
    textSize: function(e, t, r) {
        var a = [].concat(t), i = a.length, n = e.font, o = 0, s;
        for(e.font = r.string, s = 0; s < i; ++s)o = Math.max(e.measureText(a[s]).width, o);
        return e.font = n, {
            height: i * r.lineHeight,
            width: o
        };
    },
    /**
   * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
   * @todo move this method in Chart.helpers.bound
   * https://doc.qt.io/qt-5/qtglobal.html#qBound
   */ bound: function(e, t, r) {
        return Math.max(e, Math.min(t, r));
    },
    /**
   * Returns an array of pair [value, state] where state is:
   * * -1: value is only in a0 (removed)
   * *  1: value is only in a1 (added)
   */ arrayDiff: function(e, t) {
        var r = e.slice(), a = [], i, n, o, s;
        for(i = 0, o = t.length; i < o; ++i)s = t[i], n = r.indexOf(s), n === -1 ? a.push([
            s,
            1
        ]) : r.splice(n, 1);
        for(i = 0, o = r.length; i < o; ++i)a.push([
            r[i],
            -1
        ]);
        return a;
    },
    /**
   * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
   */ rasterize: function(e) {
        return Math.round(e * D) / D;
    }
};
function A(e, t) {
    var r = t.x, a = t.y;
    if (r === null) return {
        x: 0,
        y: -1
    };
    if (a === null) return {
        x: 1,
        y: 0
    };
    var i = e.x - r, n = e.y - a, o = Math.sqrt(i * i + n * n);
    return {
        x: o ? i / o : 0,
        y: o ? n / o : -1
    };
}
function ae(e, t, r, a, i) {
    switch(i){
        case "center":
            r = a = 0;
            break;
        case "bottom":
            r = 0, a = 1;
            break;
        case "right":
            r = 1, a = 0;
            break;
        case "left":
            r = -1, a = 0;
            break;
        case "top":
            r = 0, a = -1;
            break;
        case "start":
            r = -r, a = -a;
            break;
        case "end":
            break;
        default:
            i *= Math.PI / 180, r = Math.cos(i), a = Math.sin(i);
            break;
    }
    return {
        x: e,
        y: t,
        vx: r,
        vy: a
    };
}
var te = 0, j = 1, N = 2, O = 4, F = 8;
function M(e, t, r) {
    var a = te;
    return e < r.left ? a |= j : e > r.right && (a |= N), t < r.top ? a |= F : t > r.bottom && (a |= O), a;
}
function ie(e, t) {
    for(var r = e.x0, a = e.y0, i = e.x1, n = e.y1, o = M(r, a, t), s = M(i, n, t), l, u, v; !(!(o | s) || o & s);)l = o || s, l & F ? (u = r + (i - r) * (t.top - a) / (n - a), v = t.top) : l & O ? (u = r + (i - r) * (t.bottom - a) / (n - a), v = t.bottom) : l & N ? (v = a + (n - a) * (t.right - r) / (i - r), u = t.right) : l & j && (v = a + (n - a) * (t.left - r) / (i - r), u = t.left), l === o ? (r = u, a = v, o = M(r, a, t)) : (i = u, n = v, s = M(i, n, t));
    return {
        x0: r,
        x1: i,
        y0: a,
        y1: n
    };
}
function P(e, t) {
    var r = t.anchor, a = e, i, n;
    return t.clamp && (a = ie(a, t.area)), r === "start" ? (i = a.x0, n = a.y0) : r === "end" ? (i = a.x1, n = a.y1) : (i = (a.x0 + a.x1) / 2, n = (a.y0 + a.y1) / 2), ae(i, n, e.vx, e.vy, t.align);
}
var E = {
    arc: function(e, t) {
        var r = (e.startAngle + e.endAngle) / 2, a = Math.cos(r), i = Math.sin(r), n = e.innerRadius, o = e.outerRadius;
        return P({
            x0: e.x + a * n,
            y0: e.y + i * n,
            x1: e.x + a * o,
            y1: e.y + i * o,
            vx: a,
            vy: i
        }, t);
    },
    point: function(e, t) {
        var r = A(e, t.origin), a = r.x * e.options.radius, i = r.y * e.options.radius;
        return P({
            x0: e.x - a,
            y0: e.y - i,
            x1: e.x + a,
            y1: e.y + i,
            vx: r.x,
            vy: r.y
        }, t);
    },
    bar: function(e, t) {
        var r = A(e, t.origin), a = e.x, i = e.y, n = 0, o = 0;
        return e.horizontal ? (a = Math.min(e.x, e.base), n = Math.abs(e.base - e.x)) : (i = Math.min(e.y, e.base), o = Math.abs(e.base - e.y)), P({
            x0: a,
            y0: i + o,
            x1: a + n,
            y1: i,
            vx: r.x,
            vy: r.y
        }, t);
    },
    fallback: function(e, t) {
        var r = A(e, t.origin);
        return P({
            x0: e.x,
            y0: e.y,
            x1: e.x + (e.width || 0),
            y1: e.y + (e.height || 0),
            vx: r.x,
            vy: r.y
        }, t);
    }
}, x = m.rasterize;
function ne(e) {
    var t = e.borderWidth || 0, r = e.padding, a = e.size.height, i = e.size.width, n = -i / 2, o = -a / 2;
    return {
        frame: {
            x: n - r.left - t,
            y: o - r.top - t,
            w: i + r.width + t * 2,
            h: a + r.height + t * 2
        },
        text: {
            x: n,
            y: o,
            w: i,
            h: a
        }
    };
}
function oe(e, t) {
    var r = t.chart.getDatasetMeta(t.datasetIndex).vScale;
    if (!r) return null;
    if (r.xCenter !== void 0 && r.yCenter !== void 0) return {
        x: r.xCenter,
        y: r.yCenter
    };
    var a = r.getBasePixel();
    return e.horizontal ? {
        x: a,
        y: null
    } : {
        x: null,
        y: a
    };
}
function se(e) {
    return e instanceof (0, _chartEsJs.A) ? E.arc : e instanceof (0, _chartEsJs.P) ? E.point : e instanceof (0, _chartEsJs.B) ? E.bar : E.fallback;
}
function le(e, t, r, a, i, n) {
    var o = Math.PI / 2;
    if (n) {
        var s = Math.min(n, i / 2, a / 2), l = t + s, u = r + s, v = t + a - s, d = r + i - s;
        e.moveTo(t, u), l < v && u < d ? (e.arc(l, u, s, -Math.PI, -o), e.arc(v, u, s, -o, 0), e.arc(v, d, s, 0, o), e.arc(l, d, s, o, Math.PI)) : l < v ? (e.moveTo(l, r), e.arc(v, u, s, -o, o), e.arc(l, u, s, o, Math.PI + o)) : u < d ? (e.arc(l, u, s, -Math.PI, 0), e.arc(l, d, s, 0, Math.PI)) : e.arc(l, u, s, -Math.PI, Math.PI), e.closePath(), e.moveTo(t, r);
    } else e.rect(t, r, a, i);
}
function ue(e, t, r) {
    var a = r.backgroundColor, i = r.borderColor, n = r.borderWidth;
    !a && (!i || !n) || (e.beginPath(), le(e, x(t.x) + n / 2, x(t.y) + n / 2, x(t.w) - n, x(t.h) - n, r.borderRadius), e.closePath(), a && (e.fillStyle = a, e.fill()), i && n && (e.strokeStyle = i, e.lineWidth = n, e.lineJoin = "miter", e.stroke()));
}
function ve(e, t, r) {
    var a = r.lineHeight, i = e.w, n = e.x, o = e.y + a / 2;
    return t === "center" ? n += i / 2 : (t === "end" || t === "right") && (n += i), {
        h: a,
        w: i,
        x: n,
        y: o
    };
}
function de(e, t, r) {
    var a = e.shadowBlur, i = r.stroked, n = x(r.x), o = x(r.y), s = x(r.w);
    i && e.strokeText(t, n, o, s), r.filled && (a && i && (e.shadowBlur = 0), e.fillText(t, n, o, s), a && i && (e.shadowBlur = a));
}
function fe(e, t, r, a) {
    var i = a.textAlign, n = a.color, o = !!n, s = a.font, l = t.length, u = a.textStrokeColor, v = a.textStrokeWidth, d = u && v, y;
    if (!(!l || !o && !d)) for(r = ve(r, i, s), e.font = s.string, e.textAlign = i, e.textBaseline = "middle", e.shadowBlur = a.textShadowBlur, e.shadowColor = a.textShadowColor, o && (e.fillStyle = n), d && (e.lineJoin = "round", e.lineWidth = v, e.strokeStyle = u), y = 0, l = t.length; y < l; ++y)de(e, t[y], {
        stroked: d,
        filled: o,
        w: r.w,
        x: r.x,
        y: r.y + r.h * y
    });
}
var L = function(e, t, r, a) {
    var i = this;
    i._config = e, i._index = a, i._model = null, i._rects = null, i._ctx = t, i._el = r;
};
(0, _chartEsJs.m)(L.prototype, {
    /**
   * @private
   */ _modelize: function(e, t, r, a) {
        var i = this, n = i._index, o = (0, _chartEsJs.t)((0, _chartEsJs.r)([
            r.font,
            {}
        ], a, n)), s = (0, _chartEsJs.r)([
            r.color,
            (0, _chartEsJs.d).color
        ], a, n);
        return {
            align: (0, _chartEsJs.r)([
                r.align,
                "center"
            ], a, n),
            anchor: (0, _chartEsJs.r)([
                r.anchor,
                "center"
            ], a, n),
            area: a.chart.chartArea,
            backgroundColor: (0, _chartEsJs.r)([
                r.backgroundColor,
                null
            ], a, n),
            borderColor: (0, _chartEsJs.r)([
                r.borderColor,
                null
            ], a, n),
            borderRadius: (0, _chartEsJs.r)([
                r.borderRadius,
                0
            ], a, n),
            borderWidth: (0, _chartEsJs.r)([
                r.borderWidth,
                0
            ], a, n),
            clamp: (0, _chartEsJs.r)([
                r.clamp,
                !1
            ], a, n),
            clip: (0, _chartEsJs.r)([
                r.clip,
                !1
            ], a, n),
            color: s,
            display: e,
            font: o,
            lines: t,
            offset: (0, _chartEsJs.r)([
                r.offset,
                4
            ], a, n),
            opacity: (0, _chartEsJs.r)([
                r.opacity,
                1
            ], a, n),
            origin: oe(i._el, a),
            padding: (0, _chartEsJs.a)((0, _chartEsJs.r)([
                r.padding,
                4
            ], a, n)),
            positioner: se(i._el),
            rotation: (0, _chartEsJs.r)([
                r.rotation,
                0
            ], a, n) * (Math.PI / 180),
            size: m.textSize(i._ctx, t, o),
            textAlign: (0, _chartEsJs.r)([
                r.textAlign,
                "start"
            ], a, n),
            textShadowBlur: (0, _chartEsJs.r)([
                r.textShadowBlur,
                0
            ], a, n),
            textShadowColor: (0, _chartEsJs.r)([
                r.textShadowColor,
                s
            ], a, n),
            textStrokeColor: (0, _chartEsJs.r)([
                r.textStrokeColor,
                s
            ], a, n),
            textStrokeWidth: (0, _chartEsJs.r)([
                r.textStrokeWidth,
                0
            ], a, n)
        };
    },
    update: function(e) {
        var t = this, r = null, a = null, i = t._index, n = t._config, o, s, l, u = (0, _chartEsJs.r)([
            n.display,
            !0
        ], e, i);
        u && (o = e.dataset.data[i], s = (0, _chartEsJs.v)((0, _chartEsJs.c)(n.formatter, [
            o,
            e
        ]), o), l = (0, _chartEsJs.i)(s) ? [] : m.toTextLines(s), l.length && (r = t._modelize(u, l, n, e), a = ne(r))), t._model = r, t._rects = a;
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
    draw: function(e, t) {
        var r = this, a = e.ctx, i = r._model, n = r._rects, o;
        this.visible() && (a.save(), i.clip && (o = i.area, a.beginPath(), a.rect(o.left, o.top, o.right - o.left, o.bottom - o.top), a.clip()), a.globalAlpha = m.bound(0, i.opacity, 1), a.translate(x(t.x), x(t.y)), a.rotate(i.rotation), ue(a, n.frame, i), fe(a, i.lines, n.text, i), a.restore());
    }
});
var he = Number.MIN_SAFE_INTEGER || -9007199254740991, ye = Number.MAX_SAFE_INTEGER || 9007199254740991;
function b(e, t, r) {
    var a = Math.cos(r), i = Math.sin(r), n = t.x, o = t.y;
    return {
        x: n + a * (e.x - n) - i * (e.y - o),
        y: o + i * (e.x - n) + a * (e.y - o)
    };
}
function W(e, t) {
    var r = ye, a = he, i = t.origin, n, o, s, l, u;
    for(n = 0; n < e.length; ++n)o = e[n], s = o.x - i.x, l = o.y - i.y, u = t.vx * s + t.vy * l, r = Math.min(r, u), a = Math.max(a, u);
    return {
        min: r,
        max: a
    };
}
function I(e, t) {
    var r = t.x - e.x, a = t.y - e.y, i = Math.sqrt(r * r + a * a);
    return {
        vx: (t.x - e.x) / i,
        vy: (t.y - e.y) / i,
        origin: e,
        ln: i
    };
}
var G = function() {
    this._rotation = 0, this._rect = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };
};
(0, _chartEsJs.m)(G.prototype, {
    center: function() {
        var e = this._rect;
        return {
            x: e.x + e.w / 2,
            y: e.y + e.h / 2
        };
    },
    update: function(e, t, r) {
        this._rotation = r, this._rect = {
            x: t.x + e.x,
            y: t.y + e.y,
            w: t.w,
            h: t.h
        };
    },
    contains: function(e) {
        var t = this, r = 1, a = t._rect;
        return e = b(e, t.center(), -t._rotation), !(e.x < a.x - r || e.y < a.y - r || e.x > a.x + a.w + r * 2 || e.y > a.y + a.h + r * 2);
    },
    // Separating Axis Theorem
    // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
    intersects: function(e) {
        var t = this._points(), r = e._points(), a = [
            I(t[0], t[1]),
            I(t[0], t[3])
        ], i, n, o;
        for(this._rotation !== e._rotation && a.push(I(r[0], r[1]), I(r[0], r[3])), i = 0; i < a.length; ++i)if (n = W(t, a[i]), o = W(r, a[i]), n.max < o.min || o.max < n.min) return !1;
        return !0;
    },
    /**
   * @private
   */ _points: function() {
        var e = this, t = e._rect, r = e._rotation, a = e.center();
        return [
            b({
                x: t.x,
                y: t.y
            }, a, r),
            b({
                x: t.x + t.w,
                y: t.y
            }, a, r),
            b({
                x: t.x + t.w,
                y: t.y + t.h
            }, a, r),
            b({
                x: t.x,
                y: t.y + t.h
            }, a, r)
        ];
    }
});
function H(e, t, r) {
    var a = t.positioner(e, t), i = a.vx, n = a.vy;
    if (!i && !n) return {
        x: a.x,
        y: a.y
    };
    var o = r.w, s = r.h, l = t.rotation, u = Math.abs(o / 2 * Math.cos(l)) + Math.abs(s / 2 * Math.sin(l)), v = Math.abs(o / 2 * Math.sin(l)) + Math.abs(s / 2 * Math.cos(l)), d = 1 / Math.max(Math.abs(i), Math.abs(n));
    return u *= i * d, v *= n * d, u += t.offset * i, v += t.offset * n, {
        x: a.x + u,
        y: a.y + v
    };
}
function xe(e, t) {
    var r, a, i, n;
    for(r = e.length - 1; r >= 0; --r)for(i = e[r].$layout, a = r - 1; a >= 0 && i._visible; --a)n = e[a].$layout, n._visible && i._box.intersects(n._box) && t(i, n);
    return e;
}
function _e(e) {
    var t, r, a, i, n, o, s;
    for(t = 0, r = e.length; t < r; ++t)a = e[t], i = a.$layout, i._visible && (s = new Proxy(a._el, {
        get: (l, u)=>l.getProps([
                u
            ], !0)[u]
    }), n = a.geometry(), o = H(s, a.model(), n), i._box.update(o, n, a.rotation()));
    return xe(e, function(l, u) {
        var v = l._hidable, d = u._hidable;
        v && d || d ? u._visible = !1 : v && (l._visible = !1);
    });
}
var w = {
    prepare: function(e) {
        var t = [], r, a, i, n, o;
        for(r = 0, i = e.length; r < i; ++r)for(a = 0, n = e[r].length; a < n; ++a)o = e[r][a], t.push(o), o.$layout = {
            _box: new G(),
            _hidable: !1,
            _visible: !0,
            _set: r,
            _idx: o._index
        };
        return t.sort(function(s, l) {
            var u = s.$layout, v = l.$layout;
            return u._idx === v._idx ? v._set - u._set : v._idx - u._idx;
        }), this.update(t), t;
    },
    update: function(e) {
        var t = !1, r, a, i, n, o;
        for(r = 0, a = e.length; r < a; ++r)i = e[r], n = i.model(), o = i.$layout, o._hidable = n && n.display === "auto", o._visible = i.visible(), t |= o._hidable;
        t && _e(e);
    },
    lookup: function(e, t) {
        var r, a;
        for(r = e.length - 1; r >= 0; --r)if (a = e[r].$layout, a && a._visible && a._box.contains(t)) return e[r];
        return null;
    },
    draw: function(e, t) {
        var r, a, i, n, o, s;
        for(r = 0, a = t.length; r < a; ++r)i = t[r], n = i.$layout, n._visible && (o = i.geometry(), s = H(i._el, i.model(), o), n._box.update(s, o, i.rotation()), i.draw(e, s));
    }
}, ce = function(e) {
    if ((0, _chartEsJs.i)(e)) return null;
    var t = e, r, a, i;
    if ((0, _chartEsJs.b)(e)) {
        if (!(0, _chartEsJs.i)(e.label)) t = e.label;
        else if (!(0, _chartEsJs.i)(e.r)) t = e.r;
        else for(t = "", r = Object.keys(e), i = 0, a = r.length; i < a; ++i)t += (i !== 0 ? ", " : "") + r[i] + ": " + e[r[i]];
    }
    return "" + t;
}, be = {
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
    formatter: ce,
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
}, h = "$datalabels", U = "$default";
function pe(e, t) {
    var r = e.datalabels, a = {}, i = [], n, o;
    return r === !1 ? null : (r === !0 && (r = {}), t = (0, _chartEsJs.m)({}, [
        t,
        r
    ]), n = t.labels || {}, o = Object.keys(n), delete t.labels, o.length ? o.forEach(function(s) {
        n[s] && i.push((0, _chartEsJs.m)({}, [
            t,
            n[s],
            {
                _key: s
            }
        ]));
    }) : i.push(t), a = i.reduce(function(s, l) {
        return (0, _chartEsJs.e)(l.listeners || {}, function(u, v) {
            s[v] = s[v] || {}, s[v][l._key || U] = u;
        }), delete l.listeners, s;
    }, {}), {
        labels: i,
        listeners: a
    });
}
function R(e, t, r, a) {
    if (t) {
        var i = r.$context, n = r.$groups, o;
        t[n._set] && (o = t[n._set][n._key], o && (0, _chartEsJs.c)(o, [
            i,
            a
        ]) === !0 && (e[h]._dirty = !0, r.update(i)));
    }
}
function me(e, t, r, a, i) {
    var n, o;
    !r && !a || (r ? a ? r !== a && (o = n = !0) : o = !0 : n = !0, o && R(e, t.leave, r, i), n && R(e, t.enter, a, i));
}
function we(e, t) {
    var r = e[h], a = r._listeners, i, n;
    if (!(!a.enter && !a.leave)) {
        if (t.type === "mousemove") n = w.lookup(r._labels, t);
        else if (t.type !== "mouseout") return;
        i = r._hovered, r._hovered = n, me(e, a, i, n, t);
    }
}
function ge(e, t) {
    var r = e[h], a = r._listeners.click, i = a && w.lookup(r._labels, t);
    i && R(e, a, i, t);
}
var Me = {
    id: "datalabels",
    defaults: be,
    beforeInit: function(e) {
        e[h] = {
            _actives: []
        };
    },
    beforeUpdate: function(e) {
        var t = e[h];
        t._listened = !1, t._listeners = {}, t._datasets = [], t._labels = [];
    },
    afterDatasetUpdate: function(e, t, r) {
        var a = t.index, i = e[h], n = i._datasets[a] = [], o = e.isDatasetVisible(a), s = e.data.datasets[a], l = pe(s, r), u = t.meta.data || [], v = e.ctx, d, y, $, T, S, B, c, _;
        for(v.save(), d = 0, $ = u.length; d < $; ++d)if (c = u[d], c[h] = [], o && c && e.getDataVisibility(d) && !c.skip) for(y = 0, T = l.labels.length; y < T; ++y)S = l.labels[y], B = S._key, _ = new L(S, v, c, d), _.$groups = {
            _set: a,
            _key: B || U
        }, _.$context = {
            active: !1,
            chart: e,
            dataIndex: d,
            dataset: s,
            datasetIndex: a
        }, _.update(_.$context), c[h].push(_), n.push(_);
        v.restore(), (0, _chartEsJs.m)(i._listeners, l.listeners, {
            merger: function(k, C, X) {
                C[k] = C[k] || {}, C[k][t.index] = X[k], i._listened = !0;
            }
        });
    },
    afterUpdate: function(e) {
        e[h]._labels = w.prepare(e[h]._datasets);
    },
    // Draw labels on top of all dataset elements
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
    afterDatasetsDraw: function(e) {
        w.draw(e, e[h]._labels);
    },
    beforeEvent: function(e, t) {
        if (e[h]._listened) {
            var r = t.event;
            switch(r.type){
                case "mousemove":
                case "mouseout":
                    we(e, r);
                    break;
                case "click":
                    ge(e, r);
                    break;
            }
        }
    },
    afterEvent: function(e) {
        var t = e[h], r = t._actives, a = t._actives = e.getActiveElements(), i = m.arrayDiff(r, a), n, o, s, l, u, v, d;
        for(n = 0, o = i.length; n < o; ++n)if (u = i[n], u[1]) for(d = u[0].element[h] || [], s = 0, l = d.length; s < l; ++s)v = d[s], v.$context.active = u[1] === 1, v.update(v.$context);
        (t._dirty || i.length) && (w.update(t._labels), e.render()), delete t._dirty;
    }
};

},{"./chart.es.js":"cMtA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dDqpj"], null, "parcelRequire5ccb")

//# sourceMappingURL=chartjs-plugin-datalabels.es.b41228fe.js.map
