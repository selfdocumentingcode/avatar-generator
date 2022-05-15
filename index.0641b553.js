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
})({"jKwHT":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var _avatarGenerator = require("./avatarGenerator");
var _utils = require("./utils");
var _config = require("./config");
let componentContainerEl;
let imgRendererEl;
let svgEditorEl;
let canvasEl;
let btnDownloadAvatarEl;
let btnRandomInputEl;
let aDownloaderEl;
let imgAvatarPreviewEl;
let inputTextEl;
let hashEl;
let hash;
let canvasCtx;
const componentElements = {};
function updatePreview() {
    const image = canvasEl.toDataURL('image/png');
    imgAvatarPreviewEl.src = image;
}
function downloadAvatar() {
    const image = canvasEl.toDataURL('image/png');
    aDownloaderEl.href = image;
    aDownloaderEl.click();
    aDownloaderEl.href = null;
}
function generateNewHash(newValue) {
    hash = _utils.getHash(newValue);
    hashEl.value = hash;
    generateAvatar();
}
function randomizeInput() {
    const randomInput = crypto.randomUUID();
    inputTextEl.value = randomInput;
    generateNewHash(randomInput);
}
function handleInputChange(event) {
    const inputValue = event?.currentTarget?.value ?? '';
    generateNewHash(inputValue);
}
function queryElements() {
    componentContainerEl = document.querySelector('#componentContainer');
    imgRendererEl = document.querySelector('#imgRenderer');
    svgEditorEl = document.querySelector('#svgEditor');
    btnDownloadAvatarEl = document.querySelector('#btnDownloadAvatar');
    btnRandomInputEl = document.querySelector('#btnRandomInput');
    aDownloaderEl = document.querySelector('#downloader');
    imgAvatarPreviewEl = document.querySelector('#avatarPreview');
    inputTextEl = document.querySelector('#inputText');
    hashEl = document.querySelector('#hash');
    canvasEl = document.querySelector('#canvas');
}
function initializeStuff() {
    inputTextEl.value = _config.defaultInput;
    hash = _utils.getHash(inputTextEl.value);
    hashEl.value = hash;
    canvasEl.width = _config.canvasSize;
    canvasEl.height = _config.canvasSize;
    canvasCtx = canvasEl.getContext('2d');
    btnDownloadAvatarEl.addEventListener('click', downloadAvatar);
    btnRandomInputEl.addEventListener('click', randomizeInput);
    inputTextEl.addEventListener('change', handleInputChange);
}
async function loadComponentImages() {
    for(let z = 0; z < Object.keys(_config.componentFiles).length; z++){
        var key = Object.keys(_config.componentFiles)[z];
        var count = _config.componentFiles[key];
        for(let i = 0; i < count; i++){
            const imagePath = `/${_config.componentDir}/${key}_${i}.svg`;
            const res = await fetch(imagePath);
            const text = await res.text();
            const svg = new DOMParser().parseFromString(text, 'text/xml').firstChild;
            const svgId = `svg-${key}-${i}`;
            svg.id = svgId;
            componentContainerEl.appendChild(svg);
            componentElements[svgId] = svg;
        }
    }
}
async function renderNosemouth(generator) {
    const nousemouthConfig = generator.getNosemouthConfig();
    initSvgEditor(`nosemouth-${nousemouthConfig.variant}`);
    const newSize = applySvgTransforms({
        color: nousemouthConfig.color,
        scale: nousemouthConfig.scale
    });
    const nousemouthX = canvasEl.width / 2 - newSize.width / 2;
    const nousemouthY = canvasEl.height / 2 - newSize.height / 2 + 8;
    await renderEditedSvgToCanvas(nousemouthX, nousemouthY);
}
async function renderEyes(generator) {
    const eyesConfig = generator.getEyesConfig();
    const translateY = -24;
    // Left eye
    initSvgEditor(`eye-${eyesConfig.variant}`);
    const newLeftEyeSize = applySvgTransforms({
        color: eyesConfig.color,
        scale: eyesConfig.scale
    });
    const leftEyePositionX = canvasEl.width / 2 - newLeftEyeSize.width / 2 - eyesConfig.distance;
    const leftEyePositionY = canvasEl.height / 2 - newLeftEyeSize.height / 2 + translateY;
    await renderEditedSvgToCanvas(leftEyePositionX, leftEyePositionY);
    // Right eye
    initSvgEditor(`eye-${eyesConfig.variant}`);
    const newRightEyeSize = applySvgTransforms({
        color: eyesConfig.color,
        scale: eyesConfig.scale
    });
    const rightEyePositionX = canvasEl.width / 2 - newRightEyeSize.width / 2 + eyesConfig.distance;
    const rightEyePositionY = canvasEl.height / 2 - newRightEyeSize.height / 2 + translateY;
    await renderEditedSvgToCanvas(rightEyePositionX, rightEyePositionY);
}
async function renderEars(generator) {
    const earsConfig = generator.getEarsConfig();
    const translateY = -84;
    // Left ear
    initSvgEditor(`ear-${earsConfig.variant}`);
    const newLeftEarSize = applySvgTransforms({
        color: earsConfig.color,
        scale: earsConfig.scale,
        rotation: -earsConfig.rotation
    });
    const leftEarPositionX = canvasEl.width / 2 - newLeftEarSize.width / 2 - earsConfig.distance;
    const leftEarPositionY = canvasEl.height / 2 - newLeftEarSize.height / 2 + translateY;
    await renderEditedSvgToCanvas(leftEarPositionX, leftEarPositionY);
    // Right ear
    initSvgEditor(`ear-${earsConfig.variant}`);
    const newRightEearSize = applySvgTransforms({
        color: earsConfig.color,
        scale: earsConfig.scale,
        rotation: earsConfig.rotation
    });
    const rightEarPositionX = canvasEl.width / 2 - newRightEearSize.width / 2 + earsConfig.distance;
    const rightEarPositionY = canvasEl.height / 2 - newRightEearSize.height / 2 + translateY;
    await renderEditedSvgToCanvas(rightEarPositionX, rightEarPositionY);
}
async function renderBody(generator) {
    const bodyConfig = generator.getBodyConfig();
    initSvgEditor('body-0');
    const newBodySize = applySvgTransforms({
        color: bodyConfig.color,
        scale: bodyConfig.scale
    });
    const bodyPositionX = canvasEl.width / 2 - newBodySize.width / 2;
    const bodyPositionY = canvasEl.height / 2 - newBodySize.height / 2;
    await renderEditedSvgToCanvas(bodyPositionX, bodyPositionY);
}
async function renderSvgToImage(svgString) {
    imgRendererEl.src = null;
    var svg64 = btoa(svgString);
    var b64Start = 'data:image/svg+xml;base64,';
    var image64 = b64Start + svg64;
    const imgLoadPromise = new Promise((resolve)=>imgRendererEl.onload = resolve
    );
    imgRendererEl.src = image64;
    return imgLoadPromise;
}
async function renderEditedSvgToCanvas(x, y) {
    const component = svgEditorEl.children[0];
    const svgString = new XMLSerializer().serializeToString(component);
    await renderSvgToImage(svgString);
    canvasCtx.drawImage(imgRendererEl, x, y);
    updatePreview();
}
function initSvgEditor(svgId) {
    svgEditorEl.innerHTML = '';
    const component = componentElements[`svg-${svgId}`];
    const svgElement = component.cloneNode(true);
    svgElement.id = 'svg-clone';
    svgEditorEl.appendChild(svgElement);
}
function applySvgTransforms(params) {
    const color = params.color;
    const scale = params.scale;
    const rotation = params.rotation;
    const svgEl = document.querySelector('#svg-clone');
    const fillableEl = svgEl.querySelector('[fill]');
    fillableEl.setAttributeNS(null, 'fill', color);
    fillableEl.setAttributeNS(null, 'stroke', color);
    const groupEl = svgEl.querySelector('g');
    let gTransform = groupEl.getAttributeNS(null, 'transform') ?? '';
    gTransform += ` scale(${scale})`;
    if (rotation) {
        const svgCenterX = svgEl.clientWidth / 2;
        const svgCenterY = svgEl.clientHeight / 2;
        gTransform += ` rotate(${rotation} ${svgCenterX} ${svgCenterY})`;
    }
    groupEl.setAttributeNS(null, 'transform', gTransform);
    // const groupElWidth = groupEl.getBBox().width;
    // const groupElHeight = groupEl.getBBox().height;
    // const newWidth = svgEl.clientWidth * scale;
    // const newHeight = svgEl.clientHeight * scale;
    const newWidth = svgEl.clientWidth * scale;
    const newHeight = svgEl.clientHeight * scale;
    svgEl.setAttributeNS(null, 'width', newWidth);
    svgEl.setAttributeNS(null, 'height', newHeight);
    return {
        width: newWidth,
        height: newHeight
    };
}
function setCanvasBackground(generator) {
    const bgColor = generator.getBackgroundColor();
    canvasCtx.fillStyle = bgColor;
    canvasCtx.fillRect(0, 0, canvasEl.width, canvasEl.height);
}
async function generateAvatar() {
    const generator = new _avatarGenerator.AvatarGenerator(hash);
    setCanvasBackground(generator);
    await renderBody(generator);
    await renderEyes(generator);
    await renderNosemouth(generator);
    await renderEars(generator);
}
async function app() {
    queryElements();
    initializeStuff();
    await loadComponentImages();
    generateAvatar();
}
window.onload = app;

},{"./utils":"en4he","./avatarGenerator":"37XCI","./config":"jtCLN"}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHash", ()=>getHash
);
function getHash(inputString) {
    var hash = 0;
    if (inputString.length == 0) return hash;
    for(i = 0; i < inputString.length; i++){
        char = inputString.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"37XCI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AvatarGenerator", ()=>AvatarGenerator
);
var _config = require("./config");
class AvatarGenerator {
    #hash;
    #generatedBgColor;
    #generatedBodyColor;
    static bodyScaleRange = [
        -0.1,
        0.1
    ];
    static eyesScaleRange = [
        -0.4,
        -0.2
    ];
    static eyesDistanceRange = [
        24,
        48
    ];
    static nousemouthScaleRange = [
        -0.2,
        0.2
    ];
    static earsScaleRange = [
        -0.4,
        -0.2
    ];
    static earsDistanceRange = [
        48,
        64
    ];
    static earsRotation = [
        15,
        45
    ];
    constructor(hash){
        this.#hash = hash;
    }
    getBackgroundColor() {
        this.#generatedBgColor = this.#getColor();
        return this.#generatedBgColor;
    }
    getBodyConfig() {
        const salt = 3;
        const color = this.#getColor(salt, [
            this.#generatedBgColor,
            '#030504'
        ]);
        this.#generatedBodyColor = color;
        const scale = this.#getValueInRangeFloat(AvatarGenerator.bodyScaleRange, salt) + 1;
        const bodyConfig = {
            color,
            scale
        };
        return bodyConfig;
    }
    getEyesConfig() {
        const salt = 5;
        const color = this.#getColor(salt, [
            this.#generatedBodyColor
        ]);
        const variant = this.#getVariant('eye', salt);
        const scale = this.#getValueInRangeFloat(AvatarGenerator.eyesScaleRange, salt) + 1;
        const distance = this.#getValueInRangeInt(AvatarGenerator.eyesDistanceRange, salt);
        const eyesConfig = {
            color,
            scale,
            distance,
            variant
        };
        return eyesConfig;
    }
    getNosemouthConfig() {
        const salt = 7;
        const color = this.#getColor(salt, [
            this.#generatedBodyColor
        ]);
        const variant = this.#getVariant('nosemouth', salt);
        const scale = this.#getValueInRangeFloat(AvatarGenerator.nousemouthScaleRange, salt) + 1;
        const nosemouthConfig = {
            color,
            scale,
            variant
        };
        return nosemouthConfig;
    }
    getEarsConfig() {
        const salt = 11;
        const color = this.#getColor(salt, [
            this.#generatedBodyColor,
            this.#generatedBgColor
        ]);
        const variant = this.#getVariant('ear', salt);
        const scale = this.#getValueInRangeFloat(AvatarGenerator.earsScaleRange, salt) + 1;
        const distance = this.#getValueInRangeInt(AvatarGenerator.earsDistanceRange, salt);
        const rotation = this.#getValueInRangeInt(AvatarGenerator.earsRotation, salt);
        const earsConfig = {
            color,
            scale,
            distance,
            variant,
            rotation
        };
        return earsConfig;
    }
     #getColor(salt = 1, excludeColors) {
        const colors = excludeColors ? _config.colorPalette.filter((c)=>!excludeColors.includes(c)
        ) : _config.colorPalette;
        return colors[this.#getSaltyHash(salt) % colors.length];
    }
     #getVariant(componentName, salt1 = 1) {
        const variant = this.#getSaltyHash(salt1) % _config.componentFiles[componentName];
        return variant;
    }
     #getValueInRangeFloat(range, salt2 = 1) {
        const min = range[0] * 100;
        const max = range[1] * 100;
        const value = min + this.#getSaltyHash(salt2) % (max - min);
        return value / 100;
    }
     #getValueInRangeInt(range1, salt3 = 1) {
        const min = range1[0];
        const max = range1[1];
        const value = min + this.#getSaltyHash(salt3) % (max - min);
        return value;
    }
     #getSaltyHash(salt4) {
        const roundingFn = salt4 % 2 === 0 ? Math.ceil : Math.floor;
        const saltyHash = Math.abs(roundingFn(this.#hash / salt4));
        return saltyHash;
    }
}

},{"./config":"jtCLN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtCLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colorPalette", ()=>colorPalette
);
parcelHelpers.export(exports, "componentFiles", ()=>componentFiles
);
parcelHelpers.export(exports, "componentDir", ()=>componentDir
);
parcelHelpers.export(exports, "canvasSize", ()=>canvasSize
);
parcelHelpers.export(exports, "defaultInput", ()=>defaultInput
);
const colorPalette = [
    '#11133c',
    '#f9ead4',
    '#030504',
    '#ffffff',
    '#79fe9d',
    '#f9a86f',
    '#f71e4d',
    '#060fbf',
    '#1d43c6',
    '#eef5f9',
    '#c3d5e1',
    '#f2f2f2',
    '#fcf8f3', 
];
const componentFiles = {
    body: 1,
    eye: 2,
    nosemouth: 2,
    ear: 2
};
const componentDir = 'components';
const canvasSize = 256;
const defaultInput = '7e4ef0cc-cce3-4c61-be83-7091185d75d2';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jKwHT","bNKaB"], "bNKaB", "parcelRequire9645")

//# sourceMappingURL=index.0641b553.js.map
