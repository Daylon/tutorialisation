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
})({"8fBAf":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4562e06da858aeb9";
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

},{}],"7NFVV":[function(require,module,exports) {
var _popmotion = require("popmotion");
var _steps = require("./steps");
// A tip contains the general tutorial description
class Tip {
    //constructor(rootPrototype:string, targetPage:string, tipTarget:string, tipPitch:string, shouldBeActive:boolean, shouldPlay:boolean) {
    constructor(context, tipTarget, tipPitch, shouldBeActive, shouldPlay){
        this.target = tipTarget;
        this.pitch = tipPitch;
        this.active = shouldBeActive;
        this.isPlaying = shouldPlay;
        this.asMiniplayer = false;
        this.steps = [];
        this.root = document.querySelector(`#${context.root}`);
        this.page = document.querySelector(`#${context.page}`);
        this.pageAnchor = document.querySelector(`#${this.target}`);
        this.scrollSampling = 5;
        this.scrollLastSample = -1;
        this.animationDuration = 320;
        this.animationLock = false;
        this.animationScrollTolerance = 50;
        this.currentStep = -1;
        this.tipElements = {
            dismiss: `<svg class="dismiss" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4025 12L19 17.5975L17.5975 19L12 13.4025L6.40248 19L5.00001 17.5975L10.5975 12L5 6.40253L6.40248 5L12 10.5975L17.5975 5L18.9999 6.40253L13.4025 12Z" fill="white"/>
            </svg>
            `,
            tag: `<svg class="tag" width="146" height="26" viewBox="0 0 146 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="146" height="26" rx="8" fill="#1253A0"/>
            <path d="M13.6451 16.1668C13.6274 16.1255 13.601 16.0885 13.5676 16.0584C12.98 15.5596 12.5598 14.8924 12.3637 14.147C12.1676 13.4016 12.2052 12.614 12.4713 11.8907C12.7373 11.1673 13.2191 10.5431 13.8515 10.1024C14.4838 9.66174 15.2362 9.42587 16.007 9.42669C16.7777 9.42752 17.5296 9.66499 18.161 10.107C18.7924 10.549 19.2729 11.1743 19.5374 11.8982C19.802 12.6221 19.8378 13.4099 19.6401 14.1548C19.4425 14.8998 19.0208 15.5661 18.4322 16.0637C18.4001 16.0935 18.3749 16.1299 18.3583 16.1705C18.3416 16.211 18.334 16.2546 18.3358 16.2984L18.3358 16.4491C18.3349 16.7096 18.2653 16.9653 18.134 17.1902C18.0026 17.4152 17.8142 17.6015 17.5878 17.7304L17.5878 18.1122C17.5868 18.4156 17.4746 18.7082 17.2726 18.9346C17.0705 19.161 16.7925 19.3055 16.4911 19.3408C16.4508 19.4368 16.3833 19.5188 16.2969 19.5767C16.2104 19.6347 16.1089 19.666 16.0049 19.6669C15.9008 19.6677 15.7988 19.638 15.7115 19.5815C15.6241 19.525 15.5553 19.4441 15.5134 19.3488C15.1965 19.332 14.8981 19.1944 14.6794 18.9645C14.4607 18.7345 14.3383 18.4295 14.3375 18.1122L14.3375 17.6864C14.1326 17.5514 13.9644 17.3677 13.8479 17.1518C13.7314 16.9358 13.6704 16.6944 13.6701 16.449L13.6701 16.2977C13.6714 16.2528 13.6628 16.2081 13.6451 16.1668ZM16.752 18.5198C16.8601 18.4117 16.9209 18.2651 16.9211 18.1122L16.9211 17.9267C16.9105 17.9272 16.9002 17.9287 16.8899 17.9301C16.8771 17.9319 16.8643 17.9338 16.8511 17.9338L15.1548 17.9338C15.1044 17.9313 15.0541 17.9262 15.0041 17.9185L15.0041 18.1122C15.0043 18.2651 15.0651 18.4117 15.1733 18.5198C15.2814 18.628 15.428 18.6888 15.5809 18.689L16.3443 18.689C16.4972 18.6888 16.6438 18.628 16.752 18.5198ZM10.8854 8.83378C10.903 8.8742 10.9284 8.91072 10.9602 8.94124L11.9989 9.9595C12.0301 9.99046 12.0671 10.015 12.1078 10.0316C12.1484 10.0482 12.192 10.0566 12.236 10.0563C12.2799 10.056 12.3234 10.047 12.3638 10.0299C12.4043 10.0127 12.441 9.98777 12.4717 9.95639C12.5025 9.92502 12.5268 9.88787 12.5431 9.84708C12.5595 9.80629 12.5676 9.76267 12.5671 9.71872C12.5665 9.67478 12.5573 9.63138 12.5399 9.59102C12.5225 9.55066 12.4973 9.51414 12.4657 9.48356L11.427 8.46533C11.3959 8.43411 11.3589 8.40938 11.3181 8.39256C11.2774 8.37574 11.2337 8.36718 11.1896 8.36736C11.1455 8.36754 11.1019 8.37647 11.0613 8.39362C11.0207 8.41077 10.9839 8.43581 10.953 8.46728C10.9221 8.49875 10.8978 8.53604 10.8814 8.57697C10.8651 8.61791 10.857 8.66169 10.8577 8.70577C10.8583 8.74985 10.8678 8.79336 10.8854 8.83378ZM19.4579 9.8461C19.4743 9.8867 19.4985 9.92367 19.5292 9.95492C19.5598 9.98617 19.5963 10.0111 19.6366 10.0282C19.6769 10.0454 19.7201 10.0544 19.7639 10.0549C19.8077 10.0553 19.8511 10.0471 19.8917 10.0307C19.9323 10.0143 19.9693 9.99015 20.0005 9.9595L21.0389 8.94126C21.1009 8.87911 21.1359 8.79504 21.1362 8.70727C21.1366 8.61951 21.1023 8.53515 21.0409 8.47249C20.9794 8.40983 20.8957 8.37394 20.808 8.37261C20.7202 8.37127 20.6355 8.40459 20.5721 8.46535L19.5337 9.48358C19.5025 9.51423 19.4776 9.55073 19.4604 9.591C19.4433 9.63128 19.4342 9.67453 19.4338 9.7183C19.4334 9.76207 19.4416 9.8055 19.4579 9.8461ZM15.6457 6.66683L15.6457 8.1333C15.6457 8.22171 15.6808 8.30649 15.7433 8.369C15.8059 8.43152 15.8906 8.46664 15.979 8.46664C16.0675 8.46664 16.1522 8.43152 16.2147 8.369C16.2773 8.30649 16.3124 8.22171 16.3124 8.1333L16.3124 6.66683C16.3124 6.57842 16.2773 6.49364 16.2147 6.43113C16.1522 6.36861 16.0675 6.3335 15.979 6.3335C15.8906 6.3335 15.8059 6.36861 15.7433 6.43113C15.6808 6.49364 15.6457 6.57842 15.6457 6.66683ZM17.8889 12.5557C17.8889 12.7398 18.0381 12.8891 18.2222 12.8891C18.4063 12.8891 18.5556 12.7398 18.5556 12.5557C18.5556 11.5047 17.7158 10.4447 16.4445 10.4446C16.2604 10.4446 16.1111 10.5938 16.1111 10.7779C16.1111 10.962 16.2603 11.1113 16.4444 11.1113C17.3052 11.1114 17.8889 11.829 17.8889 12.5557Z" fill="white"/>
            <path d="M37.408 17.234C36.706 17.234 36.0603 17.1127 35.471 16.87C34.8817 16.6187 34.3747 16.2763 33.95 15.843C33.534 15.4097 33.2047 14.8983 32.962 14.309C32.728 13.7197 32.611 13.0827 32.611 12.398C32.611 11.7133 32.728 11.0763 32.962 10.487C33.2047 9.89767 33.534 9.38633 33.95 8.953C34.3747 8.51967 34.8817 8.18167 35.471 7.939C36.0603 7.68767 36.706 7.562 37.408 7.562C38.11 7.562 38.7557 7.68767 39.345 7.939C39.9343 8.18167 40.437 8.51967 40.853 8.953C41.2777 9.38633 41.607 9.89767 41.841 10.487C42.0837 11.0763 42.205 11.7133 42.205 12.398C42.205 13.0827 42.0837 13.7197 41.841 14.309C41.607 14.8983 41.2777 15.4097 40.853 15.843C40.437 16.2763 39.9343 16.6187 39.345 16.87C38.7557 17.1127 38.11 17.234 37.408 17.234ZM37.408 16.064C37.9367 16.064 38.4133 15.9687 38.838 15.778C39.2627 15.5787 39.6267 15.3143 39.93 14.985C40.2333 14.6557 40.4673 14.27 40.632 13.828C40.7967 13.3773 40.879 12.9007 40.879 12.398C40.879 11.8953 40.7967 11.423 40.632 10.981C40.4673 10.5303 40.2333 10.1403 39.93 9.811C39.6267 9.48167 39.2627 9.22167 38.838 9.031C38.4133 8.83167 37.9367 8.732 37.408 8.732C36.8793 8.732 36.4027 8.83167 35.978 9.031C35.5533 9.22167 35.1893 9.48167 34.886 9.811C34.5827 10.1403 34.3487 10.5303 34.184 10.981C34.0193 11.423 33.937 11.8953 33.937 12.398C33.937 12.9007 34.0193 13.3773 34.184 13.828C34.3487 14.27 34.5827 14.6557 34.886 14.985C35.1893 15.3143 35.5533 15.5787 35.978 15.778C36.4027 15.9687 36.8793 16.064 37.408 16.064ZM43.7004 10.838H44.8704V11.787H44.8964C45.0437 11.4577 45.2994 11.1933 45.6634 10.994C46.0274 10.786 46.4477 10.682 46.9244 10.682C47.2191 10.682 47.5007 10.7297 47.7694 10.825C48.0467 10.9117 48.2851 11.0503 48.4844 11.241C48.6924 11.4317 48.8571 11.6787 48.9784 11.982C49.0997 12.2767 49.1604 12.6277 49.1604 13.035V17H47.9904V13.36C47.9904 13.074 47.9514 12.8313 47.8734 12.632C47.7954 12.424 47.6914 12.2593 47.5614 12.138C47.4314 12.008 47.2797 11.917 47.1064 11.865C46.9417 11.8043 46.7684 11.774 46.5864 11.774C46.3437 11.774 46.1184 11.813 45.9104 11.891C45.7024 11.969 45.5204 12.0947 45.3644 12.268C45.2084 12.4327 45.0871 12.645 45.0004 12.905C44.9137 13.165 44.8704 13.4727 44.8704 13.828V17H43.7004V10.838ZM53.8012 10.838H55.1532L56.9992 15.557L58.7672 10.838H60.0152L57.5972 17H56.3102L53.8012 10.838ZM61.9912 13.919C61.9912 14.231 62.0389 14.5213 62.1342 14.79C62.2295 15.05 62.3639 15.2753 62.5372 15.466C62.7105 15.648 62.9229 15.7953 63.1742 15.908C63.4255 16.012 63.7072 16.064 64.0192 16.064C64.3312 16.064 64.6129 16.012 64.8642 15.908C65.1155 15.7953 65.3279 15.648 65.5012 15.466C65.6745 15.2753 65.8089 15.05 65.9042 14.79C65.9995 14.5213 66.0472 14.231 66.0472 13.919C66.0472 13.607 65.9995 13.321 65.9042 13.061C65.8089 12.7923 65.6745 12.567 65.5012 12.385C65.3279 12.1943 65.1155 12.047 64.8642 11.943C64.6129 11.8303 64.3312 11.774 64.0192 11.774C63.7072 11.774 63.4255 11.8303 63.1742 11.943C62.9229 12.047 62.7105 12.1943 62.5372 12.385C62.3639 12.567 62.2295 12.7923 62.1342 13.061C62.0389 13.321 61.9912 13.607 61.9912 13.919ZM60.7432 13.919C60.7432 13.4683 60.8255 13.048 60.9902 12.658C61.1635 12.268 61.3975 11.9257 61.6922 11.631C61.9869 11.3363 62.3335 11.1067 62.7322 10.942C63.1309 10.7687 63.5599 10.682 64.0192 10.682C64.4785 10.682 64.9075 10.7687 65.3062 10.942C65.7049 11.1067 66.0515 11.3363 66.3462 11.631C66.6409 11.9257 66.8705 12.268 67.0352 12.658C67.2085 13.048 67.2952 13.4683 67.2952 13.919C67.2952 14.3697 67.2085 14.7943 67.0352 15.193C66.8705 15.583 66.6409 15.9253 66.3462 16.22C66.0515 16.506 65.7049 16.7357 65.3062 16.909C64.9075 17.0737 64.4785 17.156 64.0192 17.156C63.5599 17.156 63.1309 17.0737 62.7322 16.909C62.3335 16.7357 61.9869 16.506 61.6922 16.22C61.3975 15.9253 61.1635 15.583 60.9902 15.193C60.8255 14.7943 60.7432 14.3697 60.7432 13.919ZM74.221 17H73.051V16.051H73.025C72.8776 16.3803 72.622 16.649 72.258 16.857C71.894 17.0563 71.4736 17.156 70.997 17.156C70.6936 17.156 70.4076 17.1083 70.139 17.013C69.8703 16.9263 69.632 16.7877 69.424 16.597C69.2246 16.4063 69.0643 16.1637 68.943 15.869C68.8216 15.5657 68.761 15.2103 68.761 14.803V10.838H69.931V14.478C69.931 14.764 69.97 15.011 70.048 15.219C70.126 15.4183 70.23 15.583 70.36 15.713C70.49 15.8343 70.6373 15.9253 70.802 15.986C70.9753 16.038 71.153 16.064 71.335 16.064C71.5776 16.064 71.803 16.025 72.011 15.947C72.219 15.869 72.401 15.7477 72.557 15.583C72.713 15.4097 72.8343 15.193 72.921 14.933C73.0076 14.673 73.051 14.3653 73.051 14.01V10.838H74.221V17ZM79.2606 12.385C79.1219 12.2117 78.9486 12.0687 78.7406 11.956C78.5413 11.8347 78.2943 11.774 77.9996 11.774C77.7223 11.774 77.4796 11.8347 77.2716 11.956C77.0723 12.0687 76.9726 12.2377 76.9726 12.463C76.9726 12.645 77.0289 12.7923 77.1416 12.905C77.2629 13.0177 77.4016 13.1087 77.5576 13.178C77.7223 13.2473 77.8956 13.2993 78.0776 13.334C78.2596 13.3687 78.4156 13.399 78.5456 13.425C78.7969 13.4857 79.0309 13.5593 79.2476 13.646C79.4729 13.7327 79.6636 13.8453 79.8196 13.984C79.9843 14.1227 80.1099 14.2917 80.1966 14.491C80.2919 14.6903 80.3396 14.933 80.3396 15.219C80.3396 15.5657 80.2659 15.8647 80.1186 16.116C79.9713 16.3587 79.7806 16.558 79.5466 16.714C79.3126 16.87 79.0439 16.9827 78.7406 17.052C78.4459 17.1213 78.1469 17.156 77.8436 17.156C77.3323 17.156 76.8816 17.078 76.4916 16.922C76.1103 16.766 75.7679 16.48 75.4646 16.064L76.3486 15.336C76.5393 15.5267 76.7516 15.6957 76.9856 15.843C77.2196 15.9903 77.5056 16.064 77.8436 16.064C77.9909 16.064 78.1383 16.051 78.2856 16.025C78.4416 15.9903 78.5759 15.9427 78.6886 15.882C78.8099 15.8127 78.9053 15.7303 78.9746 15.635C79.0526 15.531 79.0916 15.414 79.0916 15.284C79.0916 15.1107 79.0353 14.9677 78.9226 14.855C78.8186 14.7423 78.6886 14.6557 78.5326 14.595C78.3853 14.5257 78.2249 14.4737 78.0516 14.439C77.8869 14.3957 77.7396 14.361 77.6096 14.335C77.3583 14.2743 77.1199 14.205 76.8946 14.127C76.6693 14.049 76.4699 13.945 76.2966 13.815C76.1233 13.685 75.9846 13.5203 75.8806 13.321C75.7766 13.1217 75.7246 12.8747 75.7246 12.58C75.7246 12.2593 75.7896 11.982 75.9196 11.748C76.0583 11.5053 76.2359 11.306 76.4526 11.15C76.6779 10.994 76.9293 10.877 77.2066 10.799C77.4926 10.721 77.7786 10.682 78.0646 10.682C78.4806 10.682 78.8793 10.76 79.2606 10.916C79.6419 11.072 79.9453 11.332 80.1706 11.696L79.2606 12.385ZM85.3791 10.838H86.4711V11.8H86.4971C86.5231 11.7133 86.5881 11.605 86.6921 11.475C86.8048 11.345 86.9435 11.2237 87.1081 11.111C87.2815 10.9897 87.4808 10.89 87.7061 10.812C87.9401 10.7253 88.1958 10.682 88.4731 10.682C88.9325 10.682 89.3181 10.7773 89.6301 10.968C89.9421 11.1587 90.1978 11.4447 90.3971 11.826C90.5965 11.4447 90.8781 11.1587 91.2421 10.968C91.6061 10.7773 91.9745 10.682 92.3471 10.682C92.8238 10.682 93.2138 10.76 93.5171 10.916C93.8205 11.072 94.0588 11.28 94.2321 11.54C94.4055 11.7913 94.5225 12.0817 94.5831 12.411C94.6525 12.7317 94.6871 13.0653 94.6871 13.412V17H93.5171V13.568C93.5171 13.334 93.4998 13.1087 93.4651 12.892C93.4391 12.6753 93.3785 12.4847 93.2831 12.32C93.1878 12.1553 93.0535 12.0253 92.8801 11.93C92.7068 11.826 92.4771 11.774 92.1911 11.774C91.6278 11.774 91.2248 11.9473 90.9821 12.294C90.7395 12.6407 90.6181 13.087 90.6181 13.633V17H89.4481V13.776C89.4481 13.4813 89.4308 13.2127 89.3961 12.97C89.3701 12.7273 89.3095 12.5193 89.2141 12.346C89.1275 12.164 88.9975 12.0253 88.8241 11.93C88.6595 11.826 88.4341 11.774 88.1481 11.774C87.9401 11.774 87.7365 11.8173 87.5371 11.904C87.3465 11.982 87.1775 12.1033 87.0301 12.268C86.8828 12.4327 86.7658 12.645 86.6791 12.905C86.5925 13.1563 86.5491 13.4553 86.5491 13.802V17H85.3791V10.838ZM97.3984 13.919C97.3984 14.231 97.4461 14.5213 97.5414 14.79C97.6368 15.05 97.7711 15.2753 97.9444 15.466C98.1178 15.648 98.3301 15.7953 98.5814 15.908C98.8328 16.012 99.1144 16.064 99.4264 16.064C99.7384 16.064 100.02 16.012 100.271 15.908C100.523 15.7953 100.735 15.648 100.908 15.466C101.082 15.2753 101.216 15.05 101.311 14.79C101.407 14.5213 101.454 14.231 101.454 13.919C101.454 13.607 101.407 13.321 101.311 13.061C101.216 12.7923 101.082 12.567 100.908 12.385C100.735 12.1943 100.523 12.047 100.271 11.943C100.02 11.8303 99.7384 11.774 99.4264 11.774C99.1144 11.774 98.8328 11.8303 98.5814 11.943C98.3301 12.047 98.1178 12.1943 97.9444 12.385C97.7711 12.567 97.6368 12.7923 97.5414 13.061C97.4461 13.321 97.3984 13.607 97.3984 13.919ZM96.1504 13.919C96.1504 13.4683 96.2328 13.048 96.3974 12.658C96.5708 12.268 96.8048 11.9257 97.0994 11.631C97.3941 11.3363 97.7408 11.1067 98.1394 10.942C98.5381 10.7687 98.9671 10.682 99.4264 10.682C99.8858 10.682 100.315 10.7687 100.713 10.942C101.112 11.1067 101.459 11.3363 101.753 11.631C102.048 11.9257 102.278 12.268 102.442 12.658C102.616 13.048 102.702 13.4683 102.702 13.919C102.702 14.3697 102.616 14.7943 102.442 15.193C102.278 15.583 102.048 15.9253 101.753 16.22C101.459 16.506 101.112 16.7357 100.713 16.909C100.315 17.0737 99.8858 17.156 99.4264 17.156C98.9671 17.156 98.5381 17.0737 98.1394 16.909C97.7408 16.7357 97.3941 16.506 97.0994 16.22C96.8048 15.9253 96.5708 15.583 96.3974 15.193C96.2328 14.7943 96.1504 14.3697 96.1504 13.919ZM104.168 10.838H105.338V11.787H105.364C105.512 11.4577 105.767 11.1933 106.131 10.994C106.495 10.786 106.916 10.682 107.392 10.682C107.687 10.682 107.969 10.7297 108.237 10.825C108.515 10.9117 108.753 11.0503 108.952 11.241C109.16 11.4317 109.325 11.6787 109.446 11.982C109.568 12.2767 109.628 12.6277 109.628 13.035V17H108.458V13.36C108.458 13.074 108.419 12.8313 108.341 12.632C108.263 12.424 108.159 12.2593 108.029 12.138C107.899 12.008 107.748 11.917 107.574 11.865C107.41 11.8043 107.236 11.774 107.054 11.774C106.812 11.774 106.586 11.813 106.378 11.891C106.17 11.969 105.988 12.0947 105.832 12.268C105.676 12.4327 105.555 12.645 105.468 12.905C105.382 13.165 105.338 13.4727 105.338 13.828V17H104.168V10.838ZM114.694 11.852H113.017V14.647C113.017 14.8203 113.021 14.9937 113.03 15.167C113.038 15.3317 113.069 15.4833 113.121 15.622C113.181 15.752 113.268 15.8603 113.381 15.947C113.502 16.025 113.675 16.064 113.901 16.064C114.039 16.064 114.182 16.051 114.33 16.025C114.477 15.999 114.611 15.9513 114.733 15.882V16.948C114.594 17.026 114.412 17.078 114.187 17.104C113.97 17.1387 113.801 17.156 113.68 17.156C113.229 17.156 112.878 17.0953 112.627 16.974C112.384 16.844 112.202 16.6793 112.081 16.48C111.968 16.2807 111.899 16.0597 111.873 15.817C111.855 15.5657 111.847 15.3143 111.847 15.063V11.852H110.495V10.838H111.847V9.109H113.017V10.838H114.694V11.852ZM116.203 10.838H117.373V11.787H117.399C117.477 11.6223 117.581 11.475 117.711 11.345C117.841 11.2063 117.984 11.0893 118.14 10.994C118.305 10.8987 118.483 10.825 118.673 10.773C118.864 10.7123 119.055 10.682 119.245 10.682C119.436 10.682 119.609 10.708 119.765 10.76L119.713 12.021C119.618 11.995 119.523 11.9733 119.427 11.956C119.332 11.9387 119.237 11.93 119.141 11.93C118.569 11.93 118.132 12.0903 117.828 12.411C117.525 12.7317 117.373 13.23 117.373 13.906V17H116.203V10.838ZM121.67 14.348C121.67 14.6167 121.727 14.8637 121.839 15.089C121.961 15.3057 122.117 15.492 122.307 15.648C122.498 15.804 122.719 15.9253 122.97 16.012C123.222 16.0987 123.482 16.142 123.75 16.142C124.114 16.142 124.431 16.0597 124.699 15.895C124.968 15.7217 125.215 15.4963 125.44 15.219L126.324 15.895C125.674 16.7357 124.764 17.156 123.594 17.156C123.109 17.156 122.667 17.0737 122.268 16.909C121.878 16.7443 121.545 16.519 121.267 16.233C120.999 15.9383 120.791 15.596 120.643 15.206C120.496 14.8073 120.422 14.3783 120.422 13.919C120.422 13.4597 120.5 13.035 120.656 12.645C120.821 12.2463 121.042 11.904 121.319 11.618C121.605 11.3233 121.943 11.0937 122.333 10.929C122.723 10.7643 123.148 10.682 123.607 10.682C124.153 10.682 124.613 10.7773 124.985 10.968C125.367 11.1587 125.679 11.41 125.921 11.722C126.164 12.0253 126.337 12.372 126.441 12.762C126.554 13.1433 126.61 13.5333 126.61 13.932V14.348H121.67ZM125.362 13.412C125.354 13.152 125.31 12.9137 125.232 12.697C125.163 12.4803 125.055 12.294 124.907 12.138C124.76 11.9733 124.574 11.8477 124.348 11.761C124.132 11.6657 123.876 11.618 123.581 11.618C123.295 11.618 123.031 11.6743 122.788 11.787C122.554 11.891 122.355 12.0297 122.19 12.203C122.026 12.3763 121.896 12.5713 121.8 12.788C121.714 12.996 121.67 13.204 121.67 13.412H125.362ZM133.474 14.426V13.633C133.474 13.399 133.491 13.204 133.526 13.048C133.561 12.892 133.613 12.7533 133.682 12.632C133.751 12.502 133.842 12.3807 133.955 12.268C134.076 12.1467 134.224 12.0037 134.397 11.839C134.536 11.709 134.674 11.579 134.813 11.449C134.952 11.3103 135.077 11.1717 135.19 11.033C135.303 10.8857 135.394 10.734 135.463 10.578C135.541 10.4133 135.58 10.2313 135.58 10.032C135.58 9.83267 135.541 9.65067 135.463 9.486C135.394 9.31267 135.298 9.16533 135.177 9.044C135.056 8.92267 134.908 8.82733 134.735 8.758C134.57 8.68867 134.393 8.654 134.202 8.654C133.777 8.654 133.431 8.78833 133.162 9.057C132.902 9.32567 132.746 9.67667 132.694 10.11L131.368 9.98C131.481 9.226 131.793 8.63667 132.304 8.212C132.824 7.77867 133.465 7.562 134.228 7.562C134.592 7.562 134.93 7.61833 135.242 7.731C135.563 7.835 135.84 7.991 136.074 8.199C136.308 8.39833 136.49 8.64967 136.62 8.953C136.759 9.24767 136.828 9.58567 136.828 9.967C136.828 10.2963 136.78 10.5867 136.685 10.838C136.59 11.0807 136.455 11.3103 136.282 11.527L135.502 12.333L135.372 12.45C135.233 12.58 135.121 12.6927 135.034 12.788C134.956 12.8747 134.891 12.97 134.839 13.074C134.796 13.1693 134.765 13.2777 134.748 13.399C134.731 13.5203 134.722 13.672 134.722 13.854V14.426H133.474ZM133.227 16.22C133.227 15.986 133.309 15.7867 133.474 15.622C133.647 15.4487 133.851 15.362 134.085 15.362C134.319 15.362 134.518 15.4487 134.683 15.622C134.856 15.7867 134.943 15.986 134.943 16.22C134.943 16.454 134.856 16.6577 134.683 16.831C134.518 16.9957 134.319 17.078 134.085 17.078C133.851 17.078 133.647 16.9957 133.474 16.831C133.309 16.6577 133.227 16.454 133.227 16.22Z" fill="white"/>
            </svg>
            `,
            play: `<svg class="play-button as-playing" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="54" height="54" rx="27" fill="#F3F3F4"/>
            <path d="M36 25.7679C37.3333 26.5378 37.3333 28.4623 36 29.2321L23.25 36.5933C21.9167 37.3631 20.25 36.4008 20.25 34.8612L20.25 20.1388C20.25 18.5992 21.9167 17.6369 23.25 18.4067L36 25.7679Z" fill="#1253A0"/>
            </svg>
            `,
            pause: `<svg class="play-button as-paused" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="54" height="54" rx="27" fill="white"/>
            <rect x="16" y="14" width="8" height="26" rx="2" fill="#1468CB"/>
            <rect x="31" y="14" width="8" height="26" rx="2" fill="#1468CB"/>
            </svg>
            `,
            miniplayer: `<svg width="360" height="64" viewBox="0 0 360 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="360" height="64" fill="#1468CB"/>
            <rect x="16" y="16" width="32" height="32" rx="16" fill="#F3F3F4"/>
            <rect x="25.4815" y="24.2964" width="4.74074" height="15.4074" rx="2" fill="#1468CB"/>
            <rect x="34.3704" y="24.2964" width="4.74074" height="15.4074" rx="2" fill="#1468CB"/>
            <path d="M59.264 26.172H66.768V27.996H61.28V30.78H66.48V32.604H61.28V35.676H67.056V37.5H59.264V26.172ZM68.8693 29.82H70.6933V31.052H70.7253C70.9066 30.668 71.1839 30.3373 71.5573 30.06C71.9306 29.772 72.4373 29.628 73.0773 29.628C73.5893 29.628 74.0213 29.7133 74.3733 29.884C74.7359 30.0547 75.0293 30.2787 75.2533 30.556C75.4773 30.8333 75.6373 31.1533 75.7333 31.516C75.8293 31.8787 75.8773 32.2573 75.8773 32.652V37.5H73.9573V33.612C73.9573 33.3987 73.9466 33.164 73.9253 32.908C73.9039 32.6413 73.8453 32.396 73.7493 32.172C73.6639 31.9373 73.5253 31.7453 73.3333 31.596C73.1413 31.436 72.8799 31.356 72.5493 31.356C72.2293 31.356 71.9573 31.4093 71.7333 31.516C71.5199 31.6227 71.3386 31.7667 71.1893 31.948C71.0506 32.1293 70.9493 32.3373 70.8853 32.572C70.8213 32.8067 70.7893 33.052 70.7893 33.308V37.5H68.8693V29.82ZM82.8231 25.404H84.7431V37.5H82.8231V25.404ZM88.4834 34.332C88.5474 34.908 88.7714 35.356 89.1554 35.676C89.5394 35.996 90.0034 36.156 90.5474 36.156C91.0274 36.156 91.4274 36.06 91.7474 35.868C92.078 35.6653 92.366 35.4147 92.6114 35.116L93.9874 36.156C93.5394 36.7107 93.038 37.1053 92.4834 37.34C91.9287 37.5747 91.3474 37.692 90.7394 37.692C90.1634 37.692 89.6194 37.596 89.1074 37.404C88.5954 37.212 88.1527 36.94 87.7794 36.588C87.406 36.236 87.1074 35.8147 86.8834 35.324C86.67 34.8227 86.5634 34.268 86.5634 33.66C86.5634 33.052 86.67 32.5027 86.8834 32.012C87.1074 31.5107 87.406 31.084 87.7794 30.732C88.1527 30.38 88.5954 30.108 89.1074 29.916C89.6194 29.724 90.1634 29.628 90.7394 29.628C91.2727 29.628 91.758 29.724 92.1954 29.916C92.6434 30.0973 93.022 30.364 93.3314 30.716C93.6514 31.068 93.8967 31.5053 94.0674 32.028C94.2487 32.54 94.3394 33.132 94.3394 33.804V34.332H88.4834ZM92.4194 32.892C92.4087 32.3267 92.2327 31.884 91.8914 31.564C91.55 31.2333 91.0754 31.068 90.4674 31.068C89.8914 31.068 89.4327 31.2333 89.0914 31.564C88.7607 31.8947 88.558 32.3373 88.4834 32.892H92.4194ZM101.383 32.124C101.159 31.8893 100.924 31.7027 100.679 31.564C100.434 31.4253 100.183 31.356 99.9269 31.356C99.5749 31.356 99.2602 31.42 98.9829 31.548C98.7055 31.676 98.4655 31.8467 98.2629 32.06C98.0709 32.2733 97.9215 32.5187 97.8149 32.796C97.7189 33.0733 97.6709 33.3613 97.6709 33.66C97.6709 33.9587 97.7189 34.2467 97.8149 34.524C97.9215 34.8013 98.0709 35.0467 98.2629 35.26C98.4655 35.4733 98.7055 35.644 98.9829 35.772C99.2602 35.9 99.5749 35.964 99.9269 35.964C100.226 35.964 100.503 35.9053 100.759 35.788C101.015 35.66 101.234 35.4787 101.415 35.244L102.695 36.62C102.503 36.812 102.279 36.9773 102.023 37.116C101.778 37.2547 101.527 37.3667 101.271 37.452C101.015 37.5373 100.77 37.596 100.535 37.628C100.3 37.6707 100.098 37.692 99.9269 37.692C99.3509 37.692 98.8069 37.596 98.2949 37.404C97.7829 37.212 97.3402 36.94 96.9669 36.588C96.5935 36.236 96.2949 35.8147 96.0709 35.324C95.8575 34.8227 95.7509 34.268 95.7509 33.66C95.7509 33.052 95.8575 32.5027 96.0709 32.012C96.2949 31.5107 96.5935 31.084 96.9669 30.732C97.3402 30.38 97.7829 30.108 98.2949 29.916C98.8069 29.724 99.3509 29.628 99.9269 29.628C100.418 29.628 100.908 29.724 101.399 29.916C101.9 30.0973 102.338 30.3907 102.711 30.796L101.383 32.124ZM102.958 31.452V29.82H104.542V27.596H106.462V29.82H108.574V31.452H106.462V34.812C106.462 35.196 106.531 35.5 106.67 35.724C106.819 35.948 107.107 36.06 107.534 36.06C107.704 36.06 107.891 36.044 108.094 36.012C108.296 35.9693 108.456 35.9053 108.574 35.82V37.436C108.371 37.532 108.12 37.596 107.822 37.628C107.534 37.6707 107.278 37.692 107.054 37.692C106.542 37.692 106.12 37.6333 105.79 37.516C105.47 37.4093 105.214 37.244 105.022 37.02C104.84 36.7853 104.712 36.4973 104.638 36.156C104.574 35.8147 104.542 35.42 104.542 34.972V31.452H102.958ZM117.08 37.5H115.256V36.268H115.224C115.043 36.652 114.766 36.988 114.392 37.276C114.019 37.5533 113.512 37.692 112.872 37.692C112.36 37.692 111.923 37.612 111.56 37.452C111.208 37.2813 110.92 37.0573 110.696 36.78C110.472 36.492 110.312 36.1667 110.216 35.804C110.12 35.4413 110.072 35.0627 110.072 34.668V29.82H111.992V33.708C111.992 33.9213 112.003 34.1613 112.024 34.428C112.046 34.684 112.099 34.9293 112.184 35.164C112.28 35.388 112.419 35.58 112.6 35.74C112.792 35.8893 113.059 35.964 113.4 35.964C113.72 35.964 113.987 35.9107 114.2 35.804C114.424 35.6973 114.606 35.5533 114.744 35.372C114.894 35.1907 115 34.9827 115.064 34.748C115.128 34.5133 115.16 34.268 115.16 34.012V29.82H117.08V37.5ZM119.26 29.82H121.18V31.036H121.212C121.425 30.588 121.729 30.2413 122.124 29.996C122.519 29.7507 122.972 29.628 123.484 29.628C123.601 29.628 123.713 29.6387 123.82 29.66C123.937 29.6813 124.055 29.708 124.172 29.74V31.596C124.012 31.5533 123.852 31.5213 123.692 31.5C123.543 31.468 123.393 31.452 123.244 31.452C122.796 31.452 122.433 31.5373 122.156 31.708C121.889 31.868 121.681 32.0547 121.532 32.268C121.393 32.4813 121.297 32.6947 121.244 32.908C121.201 33.1213 121.18 33.2813 121.18 33.388V37.5H119.26V29.82ZM126.733 34.332C126.797 34.908 127.021 35.356 127.405 35.676C127.789 35.996 128.253 36.156 128.797 36.156C129.277 36.156 129.677 36.06 129.997 35.868C130.328 35.6653 130.616 35.4147 130.861 35.116L132.237 36.156C131.789 36.7107 131.288 37.1053 130.733 37.34C130.179 37.5747 129.597 37.692 128.989 37.692C128.413 37.692 127.869 37.596 127.357 37.404C126.845 37.212 126.403 36.94 126.029 36.588C125.656 36.236 125.357 35.8147 125.133 35.324C124.92 34.8227 124.813 34.268 124.813 33.66C124.813 33.052 124.92 32.5027 125.133 32.012C125.357 31.5107 125.656 31.084 126.029 30.732C126.403 30.38 126.845 30.108 127.357 29.916C127.869 29.724 128.413 29.628 128.989 29.628C129.523 29.628 130.008 29.724 130.445 29.916C130.893 30.0973 131.272 30.364 131.581 30.716C131.901 31.068 132.147 31.5053 132.317 32.028C132.499 32.54 132.589 33.132 132.589 33.804V34.332H126.733ZM130.669 32.892C130.659 32.3267 130.483 31.884 130.141 31.564C129.8 31.2333 129.325 31.068 128.717 31.068C128.141 31.068 127.683 31.2333 127.341 31.564C127.011 31.8947 126.808 32.3373 126.733 32.892H130.669Z" fill="white"/>
            <path d="M337.918 34.5215C337.349 34.5234 336.788 34.6559 336.278 34.9089C335.767 35.1619 335.322 35.5286 334.976 35.9807L329.563 33.2457C329.885 32.4536 329.907 31.571 329.624 30.7641L335.063 28.1259C335.669 28.8336 336.521 29.2849 337.447 29.3886C338.373 29.4923 339.304 29.2408 340.051 28.6848C340.799 28.1288 341.308 27.3098 341.475 26.3933C341.642 25.4767 341.455 24.5309 340.951 23.7469C340.448 22.9629 339.666 22.3992 338.763 22.1696C337.86 21.94 336.904 22.0616 336.087 22.5099C335.27 22.9583 334.654 23.6998 334.363 24.5849C334.072 25.4699 334.128 26.4324 334.519 27.2779L329.203 29.8563C328.767 29.1869 328.129 28.674 327.382 28.3925C326.635 28.1111 325.817 28.0757 325.048 28.2916C324.279 28.5075 323.6 28.9634 323.108 29.5928C322.616 30.2222 322.339 30.9922 322.316 31.7904C322.292 32.5887 322.525 33.3735 322.979 34.0303C323.433 34.6872 324.085 35.1818 324.84 35.4421C325.595 35.7023 326.414 35.7145 327.176 35.4769C327.939 35.2393 328.605 34.7644 329.079 34.1213L334.463 36.8416C334.159 37.583 334.101 38.4024 334.299 39.1789C334.496 39.9555 334.938 40.648 335.558 41.1544C336.179 41.6609 336.947 41.9543 337.747 41.9916C338.547 42.0288 339.338 41.8078 340.004 41.3612C340.669 40.9146 341.173 40.266 341.441 39.5112C341.71 38.7563 341.729 37.9351 341.495 37.1687C341.261 36.4023 340.788 35.7313 340.144 35.2547C339.5 34.7781 338.72 34.521 337.918 34.5215L337.918 34.5215ZM337.918 23C338.388 22.9982 338.85 23.1169 339.26 23.3449C339.67 23.573 340.015 23.9026 340.262 24.3022C340.508 24.7018 340.647 25.158 340.667 25.6271C340.686 26.0961 340.584 26.5622 340.372 26.9807C340.159 27.3992 339.843 27.7561 339.452 28.0171C339.062 28.2781 338.612 28.4344 338.144 28.4712C337.676 28.5079 337.206 28.4237 336.78 28.2268C336.354 28.0299 335.985 27.7268 335.71 27.3465C335.706 27.3193 335.699 27.2926 335.689 27.2666C335.657 27.2018 335.611 27.1447 335.555 27.0996C335.311 26.6877 335.182 26.2186 335.179 25.7403C335.18 25.0139 335.469 24.3175 335.982 23.8038C336.496 23.2901 337.192 23.0011 337.918 23ZM326.082 34.6465C325.6 34.649 325.125 34.5241 324.707 34.2845C324.288 34.045 323.94 33.6991 323.698 33.282C323.456 32.8649 323.329 32.3913 323.328 31.9091C323.328 31.4269 323.455 30.9531 323.697 30.5357C323.938 30.1182 324.285 29.772 324.704 29.5318C325.122 29.2917 325.596 29.1662 326.078 29.168C326.56 29.1698 327.034 29.2989 327.45 29.5422C327.866 29.7856 328.211 30.1345 328.449 30.5537C328.451 30.6231 328.468 30.6914 328.498 30.7539C328.53 30.807 328.572 30.8533 328.621 30.8903C328.79 31.3055 328.853 31.7558 328.807 32.2015C328.76 32.6472 328.604 33.0745 328.353 33.4458C328.103 33.817 327.764 34.1208 327.368 34.3302C326.972 34.5396 326.53 34.6482 326.082 34.6465ZM337.918 41C337.377 41 336.847 40.8394 336.396 40.5384C335.946 40.2374 335.595 39.8096 335.388 39.309C335.18 38.8085 335.126 38.2577 335.232 37.7264C335.337 37.195 335.598 36.7069 335.981 36.3238C336.364 35.9407 336.853 35.6798 337.384 35.5741C337.915 35.4684 338.466 35.5227 338.967 35.73C339.467 35.9374 339.895 36.2884 340.196 36.7389C340.497 37.1894 340.658 37.719 340.658 38.2608C340.657 38.987 340.368 39.6833 339.854 40.1968C339.341 40.7104 338.645 40.9992 337.918 41Z" fill="white"/>
            </svg>            
            `
        };
    }
    // setup
    addStep(entry, index, amount) {
        entry.set(index, amount);
        this.steps.push(entry);
    }
    addSteps(entries) {
        entries.forEach((entry, index)=>this.addStep(entry, index, entries.length));
    }
    // displays
    render() {
        const build = document.createElement(`div`);
        this.miniplayer = document.createElement(`div`);
        // tutorial invite
        build.classList.add("container-element", "is-tip");
        build.innerHTML = this.getTipMarkup();
        this.tipBody = build;
        this.pageAnchor?.parentNode?.insertBefore(build, this.pageAnchor);
        // TODO: listener - check tip visibility in viewport
        // TODO: function - check tip "is playing" status and, then, show or hide miniplayer
        // tutorial miniplayer (shown when tutorial is launched)
        this.miniplayer.classList.add("miniplayer", "miniplayer-active");
        this.miniplayer.innerHTML = this.tipElements.miniplayer;
        this.page?.prepend(this.miniplayer);
        this.playPauseEvent(this.tipBody);
        this.listenScrollEvent(this.miniplayer);
        this.checkBackEvent(this.miniplayer);
    }
    getTipMarkup() {
        return `<div class="tip-header">${this.tipElements?.tag}${this.tipElements?.dismiss}</div>
        <div class="tip-body">${this.getPlayPauseIcon()}<div class="tip-body-label">${this.pitch}</div></div>
        <div class="tip-footer">25 secondes de présentation</div>`;
    }
    getPlayPauseIcon() {
        if (this.isPlaying === false) return this.tipElements?.play;
        return this.tipElements?.pause;
    }
    getAnimationDirection(tipOverMiniplayer) {
        let from = tipOverMiniplayer === true ? 1 : 0, to = tipOverMiniplayer === true ? 0 : 1;
        return {
            from,
            to,
            duration: this.animationDuration,
            ease: (0, _popmotion.easeInOut),
            onUpdate: (latest)=>{
                this.miniplayer.style.opacity = `${latest}`;
                this.miniplayer.style.top = `${latest * 64 - 64}px`;
            },
            onComplete: ()=>{
                this.animationLock = false;
            }
        };
    }
    // active events
    playPauseEvent(tipBody) {
        tipBody.addEventListener("pointerup", (click)=>{
            this.playPause();
            tipBody.innerHTML = this.getTipMarkup();
        });
    }
    checkBackEvent(miniplayer) {
        miniplayer.addEventListener("pointerup", (click)=>{
            this.tipBody?.scrollIntoView({
                block: "start",
                inline: "nearest",
                behavior: "smooth"
            });
        });
    }
    // passive events
    listenScrollEvent(miniplayer) {
        this.root?.addEventListener("scroll", (scroll)=>{
            if (this.isPlaying === false) return false // bail out if not currently playing
            ;
            let tipBox = this.tipBody?.getBoundingClientRect() ?? {
                y: -1,
                height: -1
            }, rootBox = this.root?.getBoundingClientRect() ?? {
                y: -1,
                height: -1
            }, tipOverMiniplayer = false, tipMaxY = tipBox.y + tipBox.height;
            if (Math.abs(this.scrollLastSample - tipBox.y) > this.scrollSampling) {
                // is tip's invite visible from the viewport?
                if (// Y de tip > Y de page/proto
                // Y + height < Y de page + height de proto
                tipMaxY > rootBox.y + this.animationScrollTolerance && tipBox.y < rootBox.y + rootBox.height - this.animationScrollTolerance) // tip is visible, miniplayer should be hidden
                tipOverMiniplayer = true;
                if (this.animationLock === false && tipOverMiniplayer === this.asMiniplayer) {
                    // Animate the transition
                    (0, _popmotion.animate)(this.getAnimationDirection(tipOverMiniplayer));
                    this.scrollLastSample = tipBox.y // keep a record of this sampled value
                    ;
                    this.asMiniplayer = !tipOverMiniplayer // even if it's a future state
                    ;
                    this.animationLock = true;
                }
            }
            return true;
        });
        this.root?.dispatchEvent(new Event("scroll")) // pre-render
        ;
    }
    // control & steps
    next() {
        this.currentStep++;
        this.isPlaying = true // obviously
        ;
        if (this.currentStep === this.steps.length) // we should summon "we're finished here!"
        this.steps[this.currentStep]?.display();
        return this.currentStep;
    }
    sleep() {
    // hide current step
    // deactivate main tip cue
    }
    playPause() {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying === true) this.next();
        else this.sleep();
        return this.isPlaying;
    }
    // rando getters
    getPlayState() {
        return this.isPlaying;
    }
    getCurrentStep() {
        return this.currentStep;
    }
    // red buttons
    reset() {
        this.currentStep = -1 // "next" will increment by default to zero
        ;
        this.isPlaying = false;
    }
}
// START
const context = {
    root: "prototype",
    page: "page-homepage"
};
const tuto = new Tip(context, "hp-infotrafic", "Comment suivre sa ligne pr\xe9f\xe9r\xe9e&nbsp;?", true, false);
const step01 = new (0, _steps.Step)(context, "appuyez sur un bouton");
const step02 = new (0, _steps.Step)(context, "filtrez vos lignes");
tuto.addSteps([
    step01,
    step02
]);
tuto.render();

},{"popmotion":"iemqi","./steps":"3WWxg"}],"iemqi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>(0, _indexMjs.animate));
parcelHelpers.export(exports, "inertia", ()=>(0, _inertiaMjs.inertia));
parcelHelpers.export(exports, "decay", ()=>(0, _decayMjs.decay));
parcelHelpers.export(exports, "spring", ()=>(0, _springMjs.spring));
parcelHelpers.export(exports, "keyframes", ()=>(0, _keyframesMjs.keyframes));
parcelHelpers.export(exports, "angle", ()=>(0, _angleMjs.angle));
parcelHelpers.export(exports, "applyOffset", ()=>(0, _applyOffsetMjs.applyOffset));
parcelHelpers.export(exports, "attract", ()=>(0, _attractMjs.attract));
parcelHelpers.export(exports, "attractExpo", ()=>(0, _attractMjs.attractExpo));
parcelHelpers.export(exports, "createAttractor", ()=>(0, _attractMjs.createAttractor));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampMjs.clamp));
parcelHelpers.export(exports, "degreesToRadians", ()=>(0, _degreesToRadiansMjs.degreesToRadians));
parcelHelpers.export(exports, "distance", ()=>(0, _distanceMjs.distance));
parcelHelpers.export(exports, "interpolate", ()=>(0, _interpolateMjs.interpolate));
parcelHelpers.export(exports, "isPoint3D", ()=>(0, _isPoint3DMjs.isPoint3D));
parcelHelpers.export(exports, "isPoint", ()=>(0, _isPointMjs.isPoint));
parcelHelpers.export(exports, "mixColor", ()=>(0, _mixColorMjs.mixColor));
parcelHelpers.export(exports, "mixComplex", ()=>(0, _mixComplexMjs.mixComplex));
parcelHelpers.export(exports, "mix", ()=>(0, _mixMjs.mix));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeMjs.pipe));
parcelHelpers.export(exports, "pointFromVector", ()=>(0, _pointFromVectorMjs.pointFromVector));
parcelHelpers.export(exports, "progress", ()=>(0, _progressMjs.progress));
parcelHelpers.export(exports, "radiansToDegrees", ()=>(0, _radiansToDegreesMjs.radiansToDegrees));
parcelHelpers.export(exports, "smoothFrame", ()=>(0, _smoothFrameMjs.smoothFrame));
parcelHelpers.export(exports, "smooth", ()=>(0, _smoothMjs.smooth));
parcelHelpers.export(exports, "snap", ()=>(0, _snapMjs.snap));
parcelHelpers.export(exports, "toDecimal", ()=>(0, _toDecimalMjs.toDecimal));
parcelHelpers.export(exports, "velocityPerFrame", ()=>(0, _velocityPerFrameMjs.velocityPerFrame));
parcelHelpers.export(exports, "velocityPerSecond", ()=>(0, _velocityPerSecondMjs.velocityPerSecond));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapMjs.wrap));
parcelHelpers.export(exports, "anticipate", ()=>(0, _indexMjs1.anticipate));
parcelHelpers.export(exports, "backIn", ()=>(0, _indexMjs1.backIn));
parcelHelpers.export(exports, "backInOut", ()=>(0, _indexMjs1.backInOut));
parcelHelpers.export(exports, "backOut", ()=>(0, _indexMjs1.backOut));
parcelHelpers.export(exports, "bounceIn", ()=>(0, _indexMjs1.bounceIn));
parcelHelpers.export(exports, "bounceInOut", ()=>(0, _indexMjs1.bounceInOut));
parcelHelpers.export(exports, "bounceOut", ()=>(0, _indexMjs1.bounceOut));
parcelHelpers.export(exports, "circIn", ()=>(0, _indexMjs1.circIn));
parcelHelpers.export(exports, "circInOut", ()=>(0, _indexMjs1.circInOut));
parcelHelpers.export(exports, "circOut", ()=>(0, _indexMjs1.circOut));
parcelHelpers.export(exports, "easeIn", ()=>(0, _indexMjs1.easeIn));
parcelHelpers.export(exports, "easeInOut", ()=>(0, _indexMjs1.easeInOut));
parcelHelpers.export(exports, "easeOut", ()=>(0, _indexMjs1.easeOut));
parcelHelpers.export(exports, "linear", ()=>(0, _indexMjs1.linear));
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _cubicBezierMjs.cubicBezier));
parcelHelpers.export(exports, "steps", ()=>(0, _stepsMjs.steps));
parcelHelpers.export(exports, "createAnticipate", ()=>(0, _utilsMjs.createAnticipate));
parcelHelpers.export(exports, "createBackIn", ()=>(0, _utilsMjs.createBackIn));
parcelHelpers.export(exports, "createExpoIn", ()=>(0, _utilsMjs.createExpoIn));
parcelHelpers.export(exports, "mirrorEasing", ()=>(0, _utilsMjs.mirrorEasing));
parcelHelpers.export(exports, "reverseEasing", ()=>(0, _utilsMjs.reverseEasing));
var _indexMjs = require("./animations/index.mjs");
var _inertiaMjs = require("./animations/inertia.mjs");
var _decayMjs = require("./animations/generators/decay.mjs");
var _springMjs = require("./animations/generators/spring.mjs");
var _keyframesMjs = require("./animations/generators/keyframes.mjs");
var _angleMjs = require("./utils/angle.mjs");
var _applyOffsetMjs = require("./utils/apply-offset.mjs");
var _attractMjs = require("./utils/attract.mjs");
var _clampMjs = require("./utils/clamp.mjs");
var _degreesToRadiansMjs = require("./utils/degrees-to-radians.mjs");
var _distanceMjs = require("./utils/distance.mjs");
var _interpolateMjs = require("./utils/interpolate.mjs");
var _isPoint3DMjs = require("./utils/is-point-3d.mjs");
var _isPointMjs = require("./utils/is-point.mjs");
var _mixColorMjs = require("./utils/mix-color.mjs");
var _mixComplexMjs = require("./utils/mix-complex.mjs");
var _mixMjs = require("./utils/mix.mjs");
var _pipeMjs = require("./utils/pipe.mjs");
var _pointFromVectorMjs = require("./utils/point-from-vector.mjs");
var _progressMjs = require("./utils/progress.mjs");
var _radiansToDegreesMjs = require("./utils/radians-to-degrees.mjs");
var _smoothFrameMjs = require("./utils/smooth-frame.mjs");
var _smoothMjs = require("./utils/smooth.mjs");
var _snapMjs = require("./utils/snap.mjs");
var _toDecimalMjs = require("./utils/to-decimal.mjs");
var _velocityPerFrameMjs = require("./utils/velocity-per-frame.mjs");
var _velocityPerSecondMjs = require("./utils/velocity-per-second.mjs");
var _wrapMjs = require("./utils/wrap.mjs");
var _indexMjs1 = require("./easing/index.mjs");
var _cubicBezierMjs = require("./easing/cubic-bezier.mjs");
var _stepsMjs = require("./easing/steps.mjs");
var _utilsMjs = require("./easing/utils.mjs");

},{"./animations/index.mjs":"a5fCk","./animations/inertia.mjs":false,"./animations/generators/decay.mjs":false,"./animations/generators/spring.mjs":false,"./animations/generators/keyframes.mjs":false,"./utils/angle.mjs":false,"./utils/apply-offset.mjs":false,"./utils/attract.mjs":false,"./utils/clamp.mjs":false,"./utils/degrees-to-radians.mjs":false,"./utils/distance.mjs":false,"./utils/interpolate.mjs":false,"./utils/is-point-3d.mjs":false,"./utils/is-point.mjs":false,"./utils/mix-color.mjs":false,"./utils/mix-complex.mjs":false,"./utils/mix.mjs":false,"./utils/pipe.mjs":false,"./utils/point-from-vector.mjs":false,"./utils/progress.mjs":false,"./utils/radians-to-degrees.mjs":false,"./utils/smooth-frame.mjs":false,"./utils/smooth.mjs":false,"./utils/snap.mjs":false,"./utils/to-decimal.mjs":false,"./utils/velocity-per-frame.mjs":false,"./utils/velocity-per-second.mjs":false,"./utils/wrap.mjs":false,"./easing/index.mjs":"lSPVQ","./easing/cubic-bezier.mjs":false,"./easing/steps.mjs":false,"./easing/utils.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5fCk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
var _tslib = require("tslib");
var _detectAnimationFromOptionsMjs = require("./utils/detect-animation-from-options.mjs");
var _framesync = require("framesync");
var _framesyncDefault = parcelHelpers.interopDefault(_framesync);
var _interpolateMjs = require("../utils/interpolate.mjs");
var _elapsedMjs = require("./utils/elapsed.mjs");
const framesync = (update)=>{
    const passTimestamp = ({ delta })=>update(delta);
    return {
        start: ()=>(0, _framesyncDefault.default).update(passTimestamp, true),
        stop: ()=>(0, _framesync.cancelSync).update(passTimestamp)
    };
};
function animate(_a) {
    var _b, _c;
    var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = (0, _tslib.__rest)(_a, [
        "from",
        "autoplay",
        "driver",
        "elapsed",
        "repeat",
        "repeatType",
        "repeatDelay",
        "onPlay",
        "onStop",
        "onComplete",
        "onRepeat",
        "onUpdate"
    ]);
    let { to } = options;
    let driverControls;
    let repeatCount = 0;
    let computedDuration = options.duration;
    let latest;
    let isComplete = false;
    let isForwardPlayback = true;
    let interpolateFromNumber;
    const animator = (0, _detectAnimationFromOptionsMjs.detectAnimationFromOptions)(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = (0, _interpolateMjs.interpolate)([
            0,
            100
        ], [
            from,
            to
        ], {
            clamp: false
        });
        from = 0;
        to = 100;
    }
    const animation = animator(Object.assign(Object.assign({}, options), {
        from,
        to
    }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = (0, _elapsedMjs.reverseElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        } else {
            elapsed = (0, _elapsedMjs.loopElapsed)(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror") animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback) delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            const state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber) latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 || onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
            if (repeatCount < repeatMax) (0, _elapsedMjs.hasRepeatDelayElapsed)(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            else complete();
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 || onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        stop: ()=>{
            onStop === null || onStop === void 0 || onStop();
            driverControls.stop();
        }
    };
}

},{"tslib":"lRdW5","./utils/detect-animation-from-options.mjs":"c0lgA","framesync":"lhfBw","../utils/interpolate.mjs":"9axN1","./utils/elapsed.mjs":"bYEeZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c0lgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "detectAnimationFromOptions", ()=>detectAnimationFromOptions);
var _springMjs = require("../generators/spring.mjs");
var _keyframesMjs = require("../generators/keyframes.mjs");
var _decayMjs = require("../generators/decay.mjs");
const types = {
    keyframes: (0, _keyframesMjs.keyframes),
    spring: (0, _springMjs.spring),
    decay: (0, _decayMjs.decay)
};
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) return 0, _keyframesMjs.keyframes;
    else if (types[config.type]) return types[config.type];
    const keys = new Set(Object.keys(config));
    if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) return 0, _keyframesMjs.keyframes;
    else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) return 0, _springMjs.spring;
    return 0, _keyframesMjs.keyframes;
}

},{"../generators/spring.mjs":"oDSOo","../generators/keyframes.mjs":"4AWeA","../generators/decay.mjs":"apvaq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"oDSOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spring", ()=>spring);
var _tslib = require("tslib");
var _findSpringMjs = require("../utils/find-spring.mjs");
const durationKeys = [
    "duration",
    "bounce"
];
const physicsKeys = [
    "stiffness",
    "damping",
    "mass"
];
function isSpringType(options, keys) {
    return keys.some((key)=>options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = Object.assign({
        velocity: 0.0,
        stiffness: 100,
        damping: 10,
        mass: 1.0,
        isResolvedFromDuration: false
    }, options);
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
        const derived = (0, _findSpringMjs.findSpring)(options);
        springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), {
            velocity: 0.0,
            mass: 1.0
        });
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring(_a) {
    var { from = 0.0, to = 1.0, restSpeed = 2, restDelta } = _a, options = (0, _tslib.__rest)(_a, [
        "from",
        "to",
        "restSpeed",
        "restDelta"
    ]);
    const state = {
        done: false,
        value: from
    };
    let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
    let resolveSpring = zero;
    let resolveVelocity = zero;
    function createSpring() {
        const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        const initialDelta = to - from;
        const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        if (restDelta === undefined) restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
        if (dampingRatio < 1) {
            const angularFreq = (0, _findSpringMjs.calcAngularFreq)(undampedAngularFreq, dampingRatio);
            resolveSpring = (t)=>{
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
            };
            resolveVelocity = (t)=>{
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
            };
        } else if (dampingRatio === 1) resolveSpring = (t)=>to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
        else {
            const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = (t)=>{
                const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                const freqForT = Math.min(dampedAngularFreq * t, 300);
                return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
            };
        }
    }
    createSpring();
    return {
        next: (t)=>{
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                const currentVelocity = resolveVelocity(t) * 1000;
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            } else state.done = t >= duration;
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: ()=>{
            velocity = -velocity;
            [from, to] = [
                to,
                from
            ];
            createSpring();
        }
    };
}
spring.needsInterpolation = (a, b)=>typeof a === "string" || typeof b === "string";
const zero = (_t)=>0;

},{"tslib":"lRdW5","../utils/find-spring.mjs":"9Vt1B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Vt1B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcAngularFreq", ()=>calcAngularFreq);
parcelHelpers.export(exports, "findSpring", ()=>findSpring);
parcelHelpers.export(exports, "maxDamping", ()=>maxDamping);
parcelHelpers.export(exports, "maxDuration", ()=>maxDuration);
parcelHelpers.export(exports, "minDamping", ()=>minDamping);
parcelHelpers.export(exports, "minDuration", ()=>minDuration);
var _heyListen = require("hey-listen");
var _clampMjs = require("../../utils/clamp.mjs");
const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
    let envelope;
    let derivative;
    (0, _heyListen.warning)(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    dampingRatio = (0, _clampMjs.clamp)(minDamping, maxDamping, dampingRatio);
    duration = (0, _clampMjs.clamp)(minDuration, maxDuration, duration / 1000);
    if (dampingRatio < 1) {
        envelope = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - a / b * c;
        };
        derivative = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return factor * ((d - e) * f) / g;
        };
    } else {
        envelope = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = duration * 1000;
    if (isNaN(undampedFreq)) return {
        stiffness: 100,
        damping: 10,
        duration
    };
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for(let i = 1; i < rootIterations; i++)result = result - envelope(result) / derivative(result);
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

},{"hey-listen":"8yK8Z","../../utils/clamp.mjs":"Y4sdh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yK8Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var warning = function() {};
var invariant = function() {};
warning = function(check, message) {
    if (!check && typeof console !== "undefined") console.warn(message);
};
invariant = function(check, message) {
    if (!check) throw new Error(message);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4sdh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
const clamp = (min, max, v)=>Math.min(Math.max(v, min), max);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4AWeA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertOffsetToTimes", ()=>convertOffsetToTimes);
parcelHelpers.export(exports, "defaultEasing", ()=>defaultEasing);
parcelHelpers.export(exports, "defaultOffset", ()=>defaultOffset);
parcelHelpers.export(exports, "keyframes", ()=>keyframes);
var _interpolateMjs = require("../../utils/interpolate.mjs");
var _indexMjs = require("../../easing/index.mjs");
function defaultEasing(values, easing) {
    return values.map(()=>easing || (0, _indexMjs.easeInOut)).splice(0, values.length - 1);
}
function defaultOffset(values) {
    const numValues = values.length;
    return values.map((_value, i)=>i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
    return offset.map((o)=>o * duration);
}
function keyframes({ from = 0, to = 1, ease, offset, duration = 300 }) {
    const state = {
        done: false,
        value: from
    };
    const values = Array.isArray(to) ? to : [
        from,
        to
    ];
    const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
    function createInterpolator() {
        return (0, _interpolateMjs.interpolate)(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
        });
    }
    let interpolator = createInterpolator();
    return {
        next: (t)=>{
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: ()=>{
            values.reverse();
            interpolator = createInterpolator();
        }
    };
}

},{"../../utils/interpolate.mjs":"9axN1","../../easing/index.mjs":"lSPVQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9axN1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
var _progressMjs = require("./progress.mjs");
var _mixMjs = require("./mix.mjs");
var _mixColorMjs = require("./mix-color.mjs");
var _mixComplexMjs = require("./mix-complex.mjs");
var _styleValueTypes = require("style-value-types");
var _clampMjs = require("./clamp.mjs");
var _pipeMjs = require("./pipe.mjs");
var _heyListen = require("hey-listen");
const mixNumber = (from, to)=>(p)=>(0, _mixMjs.mix)(from, to, p);
function detectMixerFactory(v) {
    if (typeof v === "number") return mixNumber;
    else if (typeof v === "string") {
        if ((0, _styleValueTypes.color).test(v)) return 0, _mixColorMjs.mixColor;
        else return 0, _mixComplexMjs.mixComplex;
    } else if (Array.isArray(v)) return 0, _mixComplexMjs.mixArray;
    else if (typeof v === "object") return 0, _mixComplexMjs.mixObject;
}
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for(let i = 0; i < numMixers; i++){
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = (0, _pipeMjs.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate([from, to], [mixer]) {
    return (v)=>mixer((0, _progressMjs.progress)(from, to, v));
}
function slowInterpolate(input, mixers) {
    const inputLength = input.length;
    const lastInputIndex = inputLength - 1;
    return (v)=>{
        let mixerIndex = 0;
        let foundMixerIndex = false;
        if (v <= input[0]) foundMixerIndex = true;
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            let i = 1;
            for(; i < inputLength; i++){
                if (input[i] > v || i === lastInputIndex) break;
            }
            mixerIndex = i - 1;
        }
        const progressInRange = (0, _progressMjs.progress)(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0, _heyListen.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
    (0, _heyListen.invariant)(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
    return isClamp ? (v)=>interpolator((0, _clampMjs.clamp)(input[0], input[inputLength - 1], v)) : interpolator;
}

},{"./progress.mjs":"d01Ia","./mix.mjs":"23SEC","./mix-color.mjs":"03T1w","./mix-complex.mjs":"bRXYN","style-value-types":"20BqW","./clamp.mjs":"Y4sdh","./pipe.mjs":"hg0kf","hey-listen":"8yK8Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d01Ia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress", ()=>progress);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"23SEC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix);
const mix = (from, to, progress)=>-progress * from + progress * to + from;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03T1w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixColor", ()=>mixColor);
parcelHelpers.export(exports, "mixLinearColor", ()=>mixLinearColor);
var _mixMjs = require("./mix.mjs");
var _styleValueTypes = require("style-value-types");
var _heyListen = require("hey-listen");
var _hslaToRgbaMjs = require("./hsla-to-rgba.mjs");
const mixLinearColor = (from, to, v)=>{
    const fromExpo = from * from;
    const toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
const colorTypes = [
    (0, _styleValueTypes.hex),
    (0, _styleValueTypes.rgba),
    (0, _styleValueTypes.hsla)
];
const getColorType = (v)=>colorTypes.find((type)=>type.test(v));
const notAnimatable = (color)=>`'${color}' is not an animatable color. Use the equivalent color code instead.`;
const mixColor = (from, to)=>{
    let fromColorType = getColorType(from);
    let toColorType = getColorType(to);
    (0, _heyListen.invariant)(!!fromColorType, notAnimatable(from));
    (0, _heyListen.invariant)(!!toColorType, notAnimatable(to));
    let fromColor = fromColorType.parse(from);
    let toColor = toColorType.parse(to);
    if (fromColorType === (0, _styleValueTypes.hsla)) {
        fromColor = (0, _hslaToRgbaMjs.hslaToRgba)(fromColor);
        fromColorType = (0, _styleValueTypes.rgba);
    }
    if (toColorType === (0, _styleValueTypes.hsla)) {
        toColor = (0, _hslaToRgbaMjs.hslaToRgba)(toColor);
        toColorType = (0, _styleValueTypes.rgba);
    }
    const blended = Object.assign({}, fromColor);
    return (v)=>{
        for(const key in blended)if (key !== "alpha") blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
        blended.alpha = (0, _mixMjs.mix)(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};

},{"./mix.mjs":"23SEC","style-value-types":"20BqW","hey-listen":"8yK8Z","./hsla-to-rgba.mjs":"5OhyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"20BqW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alpha", ()=>(0, _indexMjs.alpha));
parcelHelpers.export(exports, "number", ()=>(0, _indexMjs.number));
parcelHelpers.export(exports, "scale", ()=>(0, _indexMjs.scale));
parcelHelpers.export(exports, "degrees", ()=>(0, _unitsMjs.degrees));
parcelHelpers.export(exports, "percent", ()=>(0, _unitsMjs.percent));
parcelHelpers.export(exports, "progressPercentage", ()=>(0, _unitsMjs.progressPercentage));
parcelHelpers.export(exports, "px", ()=>(0, _unitsMjs.px));
parcelHelpers.export(exports, "vh", ()=>(0, _unitsMjs.vh));
parcelHelpers.export(exports, "vw", ()=>(0, _unitsMjs.vw));
parcelHelpers.export(exports, "hsla", ()=>(0, _hslaMjs.hsla));
parcelHelpers.export(exports, "rgbUnit", ()=>(0, _rgbaMjs.rgbUnit));
parcelHelpers.export(exports, "rgba", ()=>(0, _rgbaMjs.rgba));
parcelHelpers.export(exports, "hex", ()=>(0, _hexMjs.hex));
parcelHelpers.export(exports, "color", ()=>(0, _indexMjs1.color));
parcelHelpers.export(exports, "complex", ()=>(0, _indexMjs2.complex));
parcelHelpers.export(exports, "filter", ()=>(0, _filterMjs.filter));
var _indexMjs = require("./numbers/index.mjs");
var _unitsMjs = require("./numbers/units.mjs");
var _hslaMjs = require("./color/hsla.mjs");
var _rgbaMjs = require("./color/rgba.mjs");
var _hexMjs = require("./color/hex.mjs");
var _indexMjs1 = require("./color/index.mjs");
var _indexMjs2 = require("./complex/index.mjs");
var _filterMjs = require("./complex/filter.mjs");

},{"./numbers/index.mjs":false,"./numbers/units.mjs":false,"./color/hsla.mjs":"bnchv","./color/rgba.mjs":"8PKFL","./color/hex.mjs":"91vvA","./color/index.mjs":"2NVB9","./complex/index.mjs":"1RdRB","./complex/filter.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4k82":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alpha", ()=>alpha);
parcelHelpers.export(exports, "number", ()=>number);
parcelHelpers.export(exports, "scale", ()=>scale);
var _utilsMjs = require("../utils.mjs");
const number = {
    test: (v)=>typeof v === "number",
    parse: parseFloat,
    transform: (v)=>v
};
const alpha = Object.assign(Object.assign({}, number), {
    transform: (0, _utilsMjs.clamp)(0, 1)
});
const scale = Object.assign(Object.assign({}, number), {
    default: 1
});

},{"../utils.mjs":"krEGS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krEGS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "colorRegex", ()=>colorRegex);
parcelHelpers.export(exports, "floatRegex", ()=>floatRegex);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "sanitize", ()=>sanitize);
parcelHelpers.export(exports, "singleColorRegex", ()=>singleColorRegex);
const clamp = (min, max)=>(v)=>Math.max(Math.min(v, max), min);
const sanitize = (v)=>v % 1 ? Number(v.toFixed(5)) : v;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
    return typeof v === "string";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFU8C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "percent", ()=>percent);
parcelHelpers.export(exports, "progressPercentage", ()=>progressPercentage);
parcelHelpers.export(exports, "px", ()=>px);
parcelHelpers.export(exports, "vh", ()=>vh);
parcelHelpers.export(exports, "vw", ()=>vw);
var _utilsMjs = require("../utils.mjs");
const createUnitType = (unit)=>({
        test: (v)=>(0, _utilsMjs.isString)(v) && v.endsWith(unit) && v.split(" ").length === 1,
        parse: parseFloat,
        transform: (v)=>`${v}${unit}`
    });
const degrees = createUnitType("deg");
const percent = createUnitType("%");
const px = createUnitType("px");
const vh = createUnitType("vh");
const vw = createUnitType("vw");
const progressPercentage = Object.assign(Object.assign({}, percent), {
    parse: (v)=>percent.parse(v) / 100,
    transform: (v)=>percent.transform(v * 100)
});

},{"../utils.mjs":"krEGS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnchv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsla", ()=>hsla);
var _indexMjs = require("../numbers/index.mjs");
var _unitsMjs = require("../numbers/units.mjs");
var _utilsMjs = require("../utils.mjs");
var _utilsMjs1 = require("./utils.mjs");
const hsla = {
    test: (0, _utilsMjs1.isColorString)("hsl", "hue"),
    parse: (0, _utilsMjs1.splitColor)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 })=>{
        return "hsla(" + Math.round(hue) + ", " + (0, _unitsMjs.percent).transform((0, _utilsMjs.sanitize)(saturation)) + ", " + (0, _unitsMjs.percent).transform((0, _utilsMjs.sanitize)(lightness)) + ", " + (0, _utilsMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")";
    }
};

},{"../numbers/index.mjs":"f4k82","../numbers/units.mjs":"fFU8C","../utils.mjs":"krEGS","./utils.mjs":"hhRk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhRk9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isColorString", ()=>isColorString);
parcelHelpers.export(exports, "splitColor", ()=>splitColor);
var _utilsMjs = require("../utils.mjs");
const isColorString = (type, testProp)=>(v)=>{
        return Boolean((0, _utilsMjs.isString)(v) && (0, _utilsMjs.singleColorRegex).test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
    };
const splitColor = (aName, bName, cName)=>(v)=>{
        if (!(0, _utilsMjs.isString)(v)) return v;
        const [a, b, c, alpha] = v.match((0, _utilsMjs.floatRegex));
        return {
            [aName]: parseFloat(a),
            [bName]: parseFloat(b),
            [cName]: parseFloat(c),
            alpha: alpha !== undefined ? parseFloat(alpha) : 1
        };
    };

},{"../utils.mjs":"krEGS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8PKFL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbUnit", ()=>rgbUnit);
parcelHelpers.export(exports, "rgba", ()=>rgba);
var _indexMjs = require("../numbers/index.mjs");
var _utilsMjs = require("../utils.mjs");
var _utilsMjs1 = require("./utils.mjs");
const clampRgbUnit = (0, _utilsMjs.clamp)(0, 255);
const rgbUnit = Object.assign(Object.assign({}, (0, _indexMjs.number)), {
    transform: (v)=>Math.round(clampRgbUnit(v))
});
const rgba = {
    test: (0, _utilsMjs1.isColorString)("rgb", "red"),
    parse: (0, _utilsMjs1.splitColor)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 })=>"rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + (0, _utilsMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")"
};

},{"../numbers/index.mjs":"f4k82","../utils.mjs":"krEGS","./utils.mjs":"hhRk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"91vvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hex", ()=>hex);
var _rgbaMjs = require("./rgba.mjs");
var _utilsMjs = require("./utils.mjs");
function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    if (v.length > 5) {
        r = v.substr(1, 2);
        g = v.substr(3, 2);
        b = v.substr(5, 2);
        a = v.substr(7, 2);
    } else {
        r = v.substr(1, 1);
        g = v.substr(2, 1);
        b = v.substr(3, 1);
        a = v.substr(4, 1);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    };
}
const hex = {
    test: (0, _utilsMjs.isColorString)("#"),
    parse: parseHex,
    transform: (0, _rgbaMjs.rgba).transform
};

},{"./rgba.mjs":"8PKFL","./utils.mjs":"hhRk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2NVB9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>color);
var _utilsMjs = require("../utils.mjs");
var _hexMjs = require("./hex.mjs");
var _hslaMjs = require("./hsla.mjs");
var _rgbaMjs = require("./rgba.mjs");
const color = {
    test: (v)=>(0, _rgbaMjs.rgba).test(v) || (0, _hexMjs.hex).test(v) || (0, _hslaMjs.hsla).test(v),
    parse: (v)=>{
        if ((0, _rgbaMjs.rgba).test(v)) return (0, _rgbaMjs.rgba).parse(v);
        else if ((0, _hslaMjs.hsla).test(v)) return (0, _hslaMjs.hsla).parse(v);
        else return (0, _hexMjs.hex).parse(v);
    },
    transform: (v)=>{
        return (0, _utilsMjs.isString)(v) ? v : v.hasOwnProperty("red") ? (0, _rgbaMjs.rgba).transform(v) : (0, _hslaMjs.hsla).transform(v);
    }
};

},{"../utils.mjs":"krEGS","./hex.mjs":"91vvA","./hsla.mjs":"bnchv","./rgba.mjs":"8PKFL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1RdRB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "complex", ()=>complex);
var _indexMjs = require("../color/index.mjs");
var _indexMjs1 = require("../numbers/index.mjs");
var _utilsMjs = require("../utils.mjs");
const colorToken = "${c}";
const numberToken = "${n}";
function test(v) {
    var _a, _b, _c, _d;
    return isNaN(v) && (0, _utilsMjs.isString)(v) && ((_b = (_a = v.match((0, _utilsMjs.floatRegex))) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match((0, _utilsMjs.colorRegex))) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse(v) {
    if (typeof v === "number") v = `${v}`;
    const values = [];
    let numColors = 0;
    const colors = v.match((0, _utilsMjs.colorRegex));
    if (colors) {
        numColors = colors.length;
        v = v.replace((0, _utilsMjs.colorRegex), colorToken);
        values.push(...colors.map((0, _indexMjs.color).parse));
    }
    const numbers = v.match((0, _utilsMjs.floatRegex));
    if (numbers) {
        v = v.replace((0, _utilsMjs.floatRegex), numberToken);
        values.push(...numbers.map((0, _indexMjs1.number).parse));
    }
    return {
        values,
        numColors,
        tokenised: v
    };
}
function parse(v) {
    return analyse(v).values;
}
function createTransformer(v) {
    const { values, numColors, tokenised } = analyse(v);
    const numValues = values.length;
    return (v)=>{
        let output = tokenised;
        for(let i = 0; i < numValues; i++)output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? (0, _indexMjs.color).transform(v[i]) : (0, _utilsMjs.sanitize)(v[i]));
        return output;
    };
}
const convertNumbersToZero = (v)=>typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parse(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse,
    createTransformer,
    getAnimatableNone
};

},{"../color/index.mjs":"2NVB9","../numbers/index.mjs":"f4k82","../utils.mjs":"krEGS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OhyK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hslaToRgba", ()=>hslaToRgba);
function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) red = green = blue = lightness;
    else {
        const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bRXYN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixArray", ()=>mixArray);
parcelHelpers.export(exports, "mixComplex", ()=>mixComplex);
parcelHelpers.export(exports, "mixObject", ()=>mixObject);
var _styleValueTypes = require("style-value-types");
var _mixMjs = require("./mix.mjs");
var _mixColorMjs = require("./mix-color.mjs");
var _incMjs = require("./inc.mjs");
var _pipeMjs = require("./pipe.mjs");
var _heyListen = require("hey-listen");
function getMixer(origin, target) {
    if ((0, _incMjs.isNum)(origin)) return (v)=>(0, _mixMjs.mix)(origin, target, v);
    else if ((0, _styleValueTypes.color).test(origin)) return (0, _mixColorMjs.mixColor)(origin, target);
    else return mixComplex(origin, target);
}
const mixArray = (from, to)=>{
    const output = [
        ...from
    ];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i)=>getMixer(fromThis, to[i]));
    return (v)=>{
        for(let i = 0; i < numValues; i++)output[i] = blendValue[i](v);
        return output;
    };
};
const mixObject = (origin, target)=>{
    const output = Object.assign(Object.assign({}, origin), target);
    const blendValue = {};
    for(const key in output)if (origin[key] !== undefined && target[key] !== undefined) blendValue[key] = getMixer(origin[key], target[key]);
    return (v)=>{
        for(const key in blendValue)output[key] = blendValue[key](v);
        return output;
    };
};
function analyse(value) {
    const parsed = (0, _styleValueTypes.complex).parse(value);
    const numValues = parsed.length;
    let numNumbers = 0;
    let numRGB = 0;
    let numHSL = 0;
    for(let i = 0; i < numValues; i++){
        if (numNumbers || typeof parsed[i] === "number") numNumbers++;
        else if (parsed[i].hue !== undefined) numHSL++;
        else numRGB++;
    }
    return {
        parsed,
        numNumbers,
        numRGB,
        numHSL
    };
}
const mixComplex = (origin, target)=>{
    const template = (0, _styleValueTypes.complex).createTransformer(target);
    const originStats = analyse(origin);
    const targetStats = analyse(target);
    const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) return (0, _pipeMjs.pipe)(mixArray(originStats.parsed, targetStats.parsed), template);
    else {
        (0, _heyListen.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (p)=>`${p > 0 ? target : origin}`;
    }
};

},{"style-value-types":"20BqW","./mix.mjs":"23SEC","./mix-color.mjs":"03T1w","./inc.mjs":"gaeuJ","./pipe.mjs":"hg0kf","hey-listen":"8yK8Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gaeuJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNum", ()=>isNum);
parcelHelpers.export(exports, "zeroPoint", ()=>zeroPoint);
const zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
const isNum = (v)=>typeof v === "number";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hg0kf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSPVQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "anticipate", ()=>anticipate);
parcelHelpers.export(exports, "backIn", ()=>backIn);
parcelHelpers.export(exports, "backInOut", ()=>backInOut);
parcelHelpers.export(exports, "backOut", ()=>backOut);
parcelHelpers.export(exports, "bounceIn", ()=>bounceIn);
parcelHelpers.export(exports, "bounceInOut", ()=>bounceInOut);
parcelHelpers.export(exports, "bounceOut", ()=>bounceOut);
parcelHelpers.export(exports, "circIn", ()=>circIn);
parcelHelpers.export(exports, "circInOut", ()=>circInOut);
parcelHelpers.export(exports, "circOut", ()=>circOut);
parcelHelpers.export(exports, "easeIn", ()=>easeIn);
parcelHelpers.export(exports, "easeInOut", ()=>easeInOut);
parcelHelpers.export(exports, "easeOut", ()=>easeOut);
parcelHelpers.export(exports, "linear", ()=>linear);
var _utilsMjs = require("./utils.mjs");
const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
const BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
const BOUNCE_THIRD_THRESHOLD = 0.9;
const linear = (p)=>p;
const easeIn = (0, _utilsMjs.createExpoIn)(2);
const easeOut = (0, _utilsMjs.reverseEasing)(easeIn);
const easeInOut = (0, _utilsMjs.mirrorEasing)(easeIn);
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, _utilsMjs.reverseEasing)(circIn);
const circInOut = (0, _utilsMjs.mirrorEasing)(circOut);
const backIn = (0, _utilsMjs.createBackIn)(DEFAULT_OVERSHOOT_STRENGTH);
const backOut = (0, _utilsMjs.reverseEasing)(backIn);
const backInOut = (0, _utilsMjs.mirrorEasing)(backIn);
const anticipate = (0, _utilsMjs.createAnticipate)(DEFAULT_OVERSHOOT_STRENGTH);
const ca = 4356.0 / 361.0;
const cb = 35442.0 / 1805.0;
const cc = 16061.0 / 1805.0;
const bounceOut = (p)=>{
    if (p === 1 || p === 0) return p;
    const p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
const bounceIn = (0, _utilsMjs.reverseEasing)(bounceOut);
const bounceInOut = (p)=>p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;

},{"./utils.mjs":"2LkwN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2LkwN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnticipate", ()=>createAnticipate);
parcelHelpers.export(exports, "createBackIn", ()=>createBackIn);
parcelHelpers.export(exports, "createExpoIn", ()=>createExpoIn);
parcelHelpers.export(exports, "mirrorEasing", ()=>mirrorEasing);
parcelHelpers.export(exports, "reverseEasing", ()=>reverseEasing);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
const createExpoIn = (power)=>(p)=>Math.pow(p, power);
const createBackIn = (power)=>(p)=>p * p * ((power + 1) * p - power);
const createAnticipate = (power)=>{
    const backEasing = createBackIn(power);
    return (p)=>(p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apvaq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decay", ()=>decay);
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
    const state = {
        done: false,
        value: from
    };
    let amplitude = power * velocity;
    const ideal = from + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal) amplitude = target - from;
    return {
        next: (t)=>{
            const delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: ()=>{}
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lhfBw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelSync", ()=>cancelSync);
parcelHelpers.export(exports, "flushSync", ()=>flushSync);
parcelHelpers.export(exports, "getFrameData", ()=>getFrameData);
var _onNextFrameMjs = require("./on-next-frame.mjs");
var _createRenderStepMjs = require("./create-render-step.mjs");
const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
    delta: 0,
    timestamp: 0
};
const stepsOrder = [
    "read",
    "update",
    "preRender",
    "render",
    "postRender"
];
const steps = stepsOrder.reduce((acc, key)=>{
    acc[key] = (0, _createRenderStepMjs.createRenderStep)(()=>runNextFrame = true);
    return acc;
}, {});
const sync = stepsOrder.reduce((acc, key)=>{
    const step = steps[key];
    acc[key] = (process, keepAlive = false, immediate = false)=>{
        if (!runNextFrame) startLoop();
        return step.schedule(process, keepAlive, immediate);
    };
    return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key)=>{
    acc[key] = steps[key].cancel;
    return acc;
}, {});
const flushSync = stepsOrder.reduce((acc, key)=>{
    acc[key] = ()=>steps[key].process(frame);
    return acc;
}, {});
const processStep = (stepId)=>steps[stepId].process(frame);
const processFrame = (timestamp)=>{
    runNextFrame = false;
    frame.delta = useDefaultElapsed ? (0, _onNextFrameMjs.defaultTimestep) : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (runNextFrame) {
        useDefaultElapsed = false;
        (0, _onNextFrameMjs.onNextFrame)(processFrame);
    }
};
const startLoop = ()=>{
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing) (0, _onNextFrameMjs.onNextFrame)(processFrame);
};
const getFrameData = ()=>frame;
exports.default = sync;

},{"./on-next-frame.mjs":"7pqDN","./create-render-step.mjs":"ix13w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pqDN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultTimestep", ()=>defaultTimestep);
parcelHelpers.export(exports, "onNextFrame", ()=>onNextFrame);
const defaultTimestep = 1 / 60 * 1000;
const getCurrentTime = typeof performance !== "undefined" ? ()=>performance.now() : ()=>Date.now();
const onNextFrame = typeof window !== "undefined" ? (callback)=>window.requestAnimationFrame(callback) : (callback)=>setTimeout(()=>callback(getCurrentTime()), defaultTimestep);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ix13w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderStep", ()=>createRenderStep);
function createRenderStep(runNextFrame) {
    let toRun = [];
    let toRunNextFrame = [];
    let numToRun = 0;
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = new WeakSet();
    const step = {
        schedule: (callback, keepAlive = false, immediate = false)=>{
            const addToCurrentFrame = immediate && isProcessing;
            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive) toKeepAlive.add(callback);
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentFrame && isProcessing) numToRun = toRun.length;
            }
            return callback;
        },
        cancel: (callback)=>{
            const index = toRunNextFrame.indexOf(callback);
            if (index !== -1) toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        process: (frameData)=>{
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [toRun, toRunNextFrame] = [
                toRunNextFrame,
                toRun
            ];
            toRunNextFrame.length = 0;
            numToRun = toRun.length;
            if (numToRun) for(let i = 0; i < numToRun; i++){
                const callback = toRun[i];
                callback(frameData);
                if (toKeepAlive.has(callback)) {
                    step.schedule(callback);
                    runNextFrame();
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        }
    };
    return step;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYEeZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasRepeatDelayElapsed", ()=>hasRepeatDelayElapsed);
parcelHelpers.export(exports, "loopElapsed", ()=>loopElapsed);
parcelHelpers.export(exports, "reverseElapsed", ()=>reverseElapsed);
function loopElapsed(elapsed, duration, delay = 0) {
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
    return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WWxg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Step", ()=>Step);
// One tip bubble
class Step {
    constructor(context, stepLabel, coords){
        this.root = document.querySelector(`#${context.root}`);
        this.page = document.querySelector(`#${context.page}`);
        this.label = stepLabel;
    }
    getStepMarkup() {
        return `${this.label}`;
    }
    set(newId, totalStepsAmount) {
        if (newId) this.id = newId;
        if (totalStepsAmount) this.amount = totalStepsAmount;
        if (this.isSet === false) {
            this.markup = document.createElement(`div`);
            this.markup.classList.add("step", "as-hidden");
            this.markup.innerHTML = this.getStepMarkup();
            this.page?.append(this.markup);
        }
        this.isSet = true;
    }
    switchClass(forceTo) {
        this.markup.classList[forceTo === true ? "remove" : "add"]("as-hidden");
        this.markup.classList[forceTo === true ? "add" : "remove"]("as-displayed");
        this.isDisplayed = forceTo ?? false;
    }
    // public usage
    add(options) {
        this.set(options.newId, options.totalStepsAmount);
        this.switchClass(options.forceTo ?? false);
    }
    display() {
        this.add({
            forceTo: true
        });
    }
    insert() {
        this.add({
            forceTo: false
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8fBAf","7NFVV"], "7NFVV", "parcelRequire94c2")

//# sourceMappingURL=index.a858aeb9.js.map
