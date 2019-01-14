function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"], {
  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Prepress.vue?vue&type=script&lang=js&":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Prepress.vue?vue&type=script&lang=js& ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsPrepressVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Nav_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! %/Nav/Nav */
    "./resources/js/components/Nav/Nav.vue");
    /* harmony import */


    var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! %/Footer/Footer */
    "./resources/js/components/Footer/Footer.vue");
    /* harmony import */


    var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! %/Navbar/Navbar */
    "./resources/js/components/Navbar/Navbar.vue"); //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      name: "pre-press",
      components: {
        navbar: _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"],
        "gw-footer": _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
        "gw-nav": _Nav_Nav__WEBPACK_IMPORTED_MODULE_0__["default"]
      },
      data: function data() {
        return {
          pages: [{
            path: "/",
            title: "Home"
          }, {
            path: "/about",
            title: "About"
          }, {
            path: "/products",
            title: "Products"
          }],
          footer: {
            msg: "This is the Footer Component!"
          }
        };
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer/Footer.vue?vue&type=script&lang=js&":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer/Footer.vue?vue&type=script&lang=js& ***!
    \************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsFooterFooterVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      props: {
        msg: {
          type: String,
          required: true
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Nav/Nav.vue?vue&type=script&lang=js&":
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Nav/Nav.vue?vue&type=script&lang=js& ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsNavNavVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      props: {
        items: {
          type: Array,
          required: true
        },
        bg: {
          type: String,
          default: "primary"
        },
        color: {
          type: String,
          default: "light"
        }
      },
      components: {
        "nav-item": function navItem() {
          return __webpack_require__.e(
          /*! import() | nav-item */
          "nav-item").then(__webpack_require__.bind(null,
          /*! %/Nav/NavItem */
          "./resources/js/components/Nav/NavItem.vue"));
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar/Navbar.vue?vue&type=script&lang=js&":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar/Navbar.vue?vue&type=script&lang=js& ***!
    \************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesBabelLoaderLibIndexJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsNavbarNavbarVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); //
    //
    //
    //
    //
    //

    /* harmony default export */


    __webpack_exports__["default"] = {
      props: {
        pages: {
          type: Array,
          required: true
        },
        bg: {
          type: String,
          default: "primary"
        },
        color: {
          type: String,
          default: "light"
        }
      },
      components: {
        "gw-nav": function gwNav() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! %/Nav/Nav */
          "./resources/js/components/Nav/Nav.vue"));
        }
      },
      data: function data() {
        return {};
      },
      methods: {
        classes: function classes() {
          var array = [];
          array.push(this.bg, this.color);
          console.log(array);
          return array;
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true&":
  /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true& ***!
    \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsPrepressVueVueTypeStyleIndex0Id3e8a6e1eLangScssScopedTrue(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js")(false); // Imports

    exports.push([module.i, "@import url(https://use.typekit.net/olo2rze.css);", ""]); // Module

    exports.push([module.i, "main[data-v-3e8a6e1e] {\n  height: 100vh;\n}", ""]);
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer/Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true&":
  /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer/Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true& ***!
    \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsFooterFooterVueVueTypeStyleIndex0Id4cfaf658LangScssScopedTrue(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js")(false); // Imports

    exports.push([module.i, "@import url(https://use.typekit.net/olo2rze.css);", ""]); // Module

    exports.push([module.i, "footer[data-v-4cfaf658] {\n  text-align: center;\n}", ""]);
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Nav/Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true&":
  /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Nav/Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true& ***!
    \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsNavNavVueVueTypeStyleIndex0IdD4699808LangScssScopedTrue(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js")(false); // Imports

    exports.push([module.i, "@import url(https://use.typekit.net/olo2rze.css);", ""]); // Module

    exports.push([module.i, ".scroll[data-v-d4699808] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.scroll[data-v-d4699808]::-webkit-scrollbar {\n  display: none;\n}\na[data-v-d4699808] {\n  flex: 0 0 auto;\n}", ""]);
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar/Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true&":
  /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar/Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true& ***!
    \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsNavbarNavbarVueVueTypeStyleIndex0IdFe35d198LangScssScopedTrue(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(
    /*! ../../../../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js")(false); // Imports

    exports.push([module.i, "@import url(https://use.typekit.net/olo2rze.css);", ""]); // Module

    exports.push([module.i, ".navbar-component[data-v-fe35d198] {\n  display: flex;\n}\n.primary[data-v-fe35d198] {\n  background: #5fc782;\n}\n.dark[data-v-fe35d198] {\n  background: #232831;\n}", ""]);
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return '@media ' + item[2] + '{' + content + '}';
          } else {
            return content;
          }
        }).join('');
      }; // import a list of modules into the list


      list.i = function (modules, mediaQuery) {
        if (typeof modules === 'string') {
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        for (var i = 0; i < this.length; i++) {
          var id = this[i][0];

          if (id != null) {
            alreadyImportedModules[id] = true;
          }
        }

        for (i = 0; i < modules.length; i++) {
          var item = modules[i]; // skip already imported module
          // this implementation is not 100% perfect for weird media query combinations
          // when a module is imported multiple times with different media queries.
          // I hope this will never occur (Hey this way we have smaller bundles)

          if (item[0] == null || !alreadyImportedModules[item[0]]) {
            if (mediaQuery && !item[2]) {
              item[2] = mediaQuery;
            } else if (mediaQuery) {
              item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
            }

            list.push(item);
          }
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || '';
      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
      return '/*# ' + data + ' */';
    }
    /***/

  },

  /***/
  "./node_modules/process/browser.js":
  /*!*****************************************!*\
    !*** ./node_modules/process/browser.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesProcessBrowserJs(module, exports) {
    // shim for using process in browser
    var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
    }

    function defaultClearTimeout() {
      throw new Error('clearTimeout has not been defined');
    }

    (function () {
      try {
        if (typeof setTimeout === 'function') {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }

      try {
        if (typeof clearTimeout === 'function') {
          cachedClearTimeout = clearTimeout;
        } else {
          cachedClearTimeout = defaultClearTimeout;
        }
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();

    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
      } // if setTimeout wasn't available but was latter defined


      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }

      try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }

    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
      } // if clearTimeout wasn't available but was latter defined


      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }

      try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
          // Some versions of I.E. have different rules for clearTimeout vs setTimeout
          return cachedClearTimeout.call(this, marker);
        }
      }
    }

    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
      if (!draining || !currentQueue) {
        return;
      }

      draining = false;

      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        queueIndex = -1;
      }

      if (queue.length) {
        drainQueue();
      }
    }

    function drainQueue() {
      if (draining) {
        return;
      }

      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;

      while (len) {
        currentQueue = queue;
        queue = [];

        while (++queueIndex < len) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }

        queueIndex = -1;
        len = queue.length;
      }

      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);

      if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
      }

      queue.push(new Item(fun, args));

      if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
      }
    }; // v8 likes predictible objects


    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }

    Item.prototype.run = function () {
      this.fun.apply(null, this.array);
    };

    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues

    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;

    process.listeners = function (name) {
      return [];
    };

    process.binding = function (name) {
      throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
      return '/';
    };

    process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
    };

    process.umask = function () {
      return 0;
    };
    /***/

  },

  /***/
  "./node_modules/setimmediate/setImmediate.js":
  /*!***************************************************!*\
    !*** ./node_modules/setimmediate/setImmediate.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSetimmediateSetImmediateJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (global, process) {
      (function (global, undefined) {
        "use strict";

        if (global.setImmediate) {
          return;
        }

        var nextHandle = 1; // Spec says greater than zero

        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global.document;
        var registerImmediate;

        function setImmediate(callback) {
          // Callback can either be a function or a string
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          } // Copy function arguments


          var args = new Array(arguments.length - 1);

          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
          } // Store and register the task


          var task = {
            callback: callback,
            args: args
          };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }

        function clearImmediate(handle) {
          delete tasksByHandle[handle];
        }

        function run(task) {
          var callback = task.callback;
          var args = task.args;

          switch (args.length) {
            case 0:
              callback();
              break;

            case 1:
              callback(args[0]);
              break;

            case 2:
              callback(args[0], args[1]);
              break;

            case 3:
              callback(args[0], args[1], args[2]);
              break;

            default:
              callback.apply(undefined, args);
              break;
          }
        }

        function runIfPresent(handle) {
          // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
          // So if we're currently running a task, we'll need to delay this invocation.
          if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
          } else {
            var task = tasksByHandle[handle];

            if (task) {
              currentlyRunningATask = true;

              try {
                run(task);
              } finally {
                clearImmediate(handle);
                currentlyRunningATask = false;
              }
            }
          }
        }

        function installNextTickImplementation() {
          registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
              runIfPresent(handle);
            });
          };
        }

        function canUsePostMessage() {
          // The test against `importScripts` prevents this implementation from being installed inside a web worker,
          // where `global.postMessage` means something completely different and can't be used for this purpose.
          if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;

            global.onmessage = function () {
              postMessageIsAsynchronous = false;
            };

            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
          }
        }

        function installPostMessageImplementation() {
          // Installs an event handler on `global` for the `message` event: see
          // * https://developer.mozilla.org/en/DOM/window.postMessage
          // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
          var messagePrefix = "setImmediate$" + Math.random() + "$";

          var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
              runIfPresent(+event.data.slice(messagePrefix.length));
            }
          };

          if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
          } else {
            global.attachEvent("onmessage", onGlobalMessage);
          }

          registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
          };
        }

        function installMessageChannelImplementation() {
          var channel = new MessageChannel();

          channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
          };

          registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
          };
        }

        function installReadyStateChangeImplementation() {
          var html = doc.documentElement;

          registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");

            script.onreadystatechange = function () {
              runIfPresent(handle);
              script.onreadystatechange = null;
              html.removeChild(script);
              script = null;
            };

            html.appendChild(script);
          };
        }

        function installSetTimeoutImplementation() {
          registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
          };
        } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

        if ({}.toString.call(global.process) === "[object process]") {
          // For Node.js before 0.9
          installNextTickImplementation();
        } else if (canUsePostMessage()) {
          // For non-IE10 modern browsers
          installPostMessageImplementation();
        } else if (global.MessageChannel) {
          // For web workers, where supported
          installMessageChannelImplementation();
        } else if (doc && "onreadystatechange" in doc.createElement("script")) {
          // For IE 6–8
          installReadyStateChangeImplementation();
        } else {
          // For older browsers
          installSetTimeoutImplementation();
        }

        attachTo.setImmediate = setImmediate;
        attachTo.clearImmediate = clearImmediate;
      })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"), __webpack_require__(
    /*! ./../process/browser.js */
    "./node_modules/process/browser.js"));
    /***/
  },

  /***/
  "./node_modules/sierra-library/lib/index.scss":
  /*!****************************************************!*\
    !*** ./node_modules/sierra-library/lib/index.scss ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSierraLibraryLibIndexScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true&":
  /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true& ***!
    \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsPrepressVueVueTypeStyleIndex0Id3e8a6e1eLangScssScopedTrue(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../node_modules/vue-loader/lib??vue-loader-options!./Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true& */
    "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer/Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true&":
  /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer/Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true& ***!
    \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsFooterFooterVueVueTypeStyleIndex0Id4cfaf658LangScssScopedTrue(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true& */
    "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer/Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Nav/Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true&":
  /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Nav/Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true& ***!
    \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsNavNavVueVueTypeStyleIndex0IdD4699808LangScssScopedTrue(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true& */
    "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Nav/Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar/Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true&":
  /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar/Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true& ***!
    \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderIndexJsNode_modulesCssLoaderDistCjsJsNode_modulesVueLoaderLibLoadersStylePostLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderLibLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsNavbarNavbarVueVueTypeStyleIndex0IdFe35d198LangScssScopedTrue(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true& */
    "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar/Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true&");

    if (typeof content === 'string') content = [[module.i, content, '']];
    var transform;
    var insertInto;
    var options = {
      "hmr": true
    };
    options.transform = transform;
    options.insertInto = undefined;

    var update = __webpack_require__(
    /*! ../../../../node_modules/style-loader/lib/addStyles.js */
    "./node_modules/style-loader/lib/addStyles.js")(content, options);

    if (content.locals) module.exports = content.locals;

    if (false) {}
    /***/

  },

  /***/
  "./node_modules/style-loader/lib/addStyles.js":
  /*!****************************************************!*\
    !*** ./node_modules/style-loader/lib/addStyles.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderLibAddStylesJs(module, exports, __webpack_require__) {
    /*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
    var stylesInDom = {};

    var memoize = function memoize(fn) {
      var memo;
      return function () {
        if (typeof memo === "undefined") memo = fn.apply(this, arguments);
        return memo;
      };
    };

    var isOldIE = memoize(function () {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      return window && document && document.all && !window.atob;
    });

    var getTarget = function getTarget(target, parent) {
      if (parent) {
        return parent.querySelector(target);
      }

      return document.querySelector(target);
    };

    var getElement = function (fn) {
      var memo = {};
      return function (target, parent) {
        // If passing function in options, then use it for resolve "head" element.
        // Useful for Shadow Root style i.e
        // {
        //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
        // }
        if (typeof target === 'function') {
          return target();
        }

        if (typeof memo[target] === "undefined") {
          var styleTarget = getTarget.call(this, target, parent); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var singleton = null;
    var singletonCounter = 0;
    var stylesInsertedAtTop = [];

    var fixUrls = __webpack_require__(
    /*! ./urls */
    "./node_modules/style-loader/lib/urls.js");

    module.exports = function (list, options) {
      if (typeof DEBUG !== "undefined" && DEBUG) {
        if ((typeof document === "undefined" ? "undefined" : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
      }

      options = options || {};
      options.attrs = _typeof(options.attrs) === "object" ? options.attrs : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE(); // By default, add <style> tags to the <head> element

      if (!options.insertInto) options.insertInto = "head"; // By default, add <style> tags to the bottom of the target

      if (!options.insertAt) options.insertAt = "bottom";
      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];
          domStyle.refs--;
          mayRemove.push(domStyle);
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var i = 0; i < mayRemove.length; i++) {
          var domStyle = mayRemove[i];

          if (domStyle.refs === 0) {
            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j]();
            }

            delete stylesInDom[domStyle.id];
          }
        }
      };
    };

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];

        if (domStyle) {
          domStyle.refs++;

          for (var j = 0; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (var j = 0; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };
        if (!newStyles[id]) styles.push(newStyles[id] = {
          id: id,
          parts: [part]
        });else newStyles[id].parts.push(part);
      }

      return styles;
    }

    function insertStyleElement(options, style) {
      var target = getElement(options.insertInto);

      if (!target) {
        throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      }

      var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

      if (options.insertAt === "top") {
        if (!lastStyleElementInsertedAtTop) {
          target.insertBefore(style, target.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
          target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
        } else {
          target.appendChild(style);
        }

        stylesInsertedAtTop.push(style);
      } else if (options.insertAt === "bottom") {
        target.appendChild(style);
      } else if (_typeof(options.insertAt) === "object" && options.insertAt.before) {
        var nextSibling = getElement(options.insertAt.before, target);
        target.insertBefore(style, nextSibling);
      } else {
        throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      }
    }

    function removeStyleElement(style) {
      if (style.parentNode === null) return false;
      style.parentNode.removeChild(style);
      var idx = stylesInsertedAtTop.indexOf(style);

      if (idx >= 0) {
        stylesInsertedAtTop.splice(idx, 1);
      }
    }

    function createStyleElement(options) {
      var style = document.createElement("style");

      if (options.attrs.type === undefined) {
        options.attrs.type = "text/css";
      }

      if (options.attrs.nonce === undefined) {
        var nonce = getNonce();

        if (nonce) {
          options.attrs.nonce = nonce;
        }
      }

      addAttrs(style, options.attrs);
      insertStyleElement(options, style);
      return style;
    }

    function createLinkElement(options) {
      var link = document.createElement("link");

      if (options.attrs.type === undefined) {
        options.attrs.type = "text/css";
      }

      options.attrs.rel = "stylesheet";
      addAttrs(link, options.attrs);
      insertStyleElement(options, link);
      return link;
    }

    function addAttrs(el, attrs) {
      Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
      });
    }

    function getNonce() {
      if (false) {}

      return __webpack_require__.nc;
    }

    function addStyle(obj, options) {
      var style, update, remove, result; // If a transform function was defined, run it on the css

      if (options.transform && obj.css) {
        result = typeof options.transform === 'function' ? options.transform(obj.css) : options.transform.default(obj.css);

        if (result) {
          // If transform returns a value, use that instead of the original css.
          // This allows running runtime transformations on the css.
          obj.css = result;
        } else {
          // If the transform function returns a falsy value, don't add this css.
          // This allows conditional loading of css
          return function () {// noop
          };
        }
      }

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = createStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
        style = createLinkElement(options);
        update = updateLink.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
          if (style.href) URL.revokeObjectURL(style.href);
        };
      } else {
        style = createStyleElement(options);
        update = applyToTag.bind(null, style);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    var replaceText = function () {
      var textStore = [];
      return function (index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? "" : obj.css;

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;
        if (childNodes[index]) style.removeChild(childNodes[index]);

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, obj) {
      var css = obj.css;
      var media = obj.media;

      if (media) {
        style.setAttribute("media", media);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    function updateLink(link, options, obj) {
      var css = obj.css;
      var sourceMap = obj.sourceMap;
      /*
      	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
      	and there is no publicPath defined then lets turn convertToAbsoluteUrls
      	on by default.  Otherwise default to the convertToAbsoluteUrls option
      	directly
      */

      var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

      if (options.convertToAbsoluteUrls || autoFixUrls) {
        css = fixUrls(css);
      }

      if (sourceMap) {
        // http://stackoverflow.com/a/26603875
        css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
      }

      var blob = new Blob([css], {
        type: "text/css"
      });
      var oldSrc = link.href;
      link.href = URL.createObjectURL(blob);
      if (oldSrc) URL.revokeObjectURL(oldSrc);
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/lib/urls.js":
  /*!***********************************************!*\
    !*** ./node_modules/style-loader/lib/urls.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderLibUrlsJs(module, exports) {
    /**
     * When source maps are enabled, `style-loader` uses a link element with a data-uri to
     * embed the css on the page. This breaks all relative urls because now they are relative to a
     * bundle instead of the current page.
     *
     * One solution is to only use full urls, but that may be impossible.
     *
     * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
     *
     * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
     *
     */
    module.exports = function (css) {
      // get current location
      var location = typeof window !== "undefined" && window.location;

      if (!location) {
        throw new Error("fixUrls requires window.location");
      } // blank or null?


      if (!css || typeof css !== "string") {
        return css;
      }

      var baseUrl = location.protocol + "//" + location.host;
      var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

      /*
      This regular expression is just a way to recursively match brackets within
      a string.
      	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
         (  = Start a capturing group
           (?:  = Start a non-capturing group
               [^)(]  = Match anything that isn't a parentheses
               |  = OR
               \(  = Match a start parentheses
                   (?:  = Start another non-capturing groups
                       [^)(]+  = Match anything that isn't a parentheses
                       |  = OR
                       \(  = Match a start parentheses
                           [^)(]*  = Match anything that isn't a parentheses
                       \)  = Match a end parentheses
                   )  = End Group
                   *\) = Match anything and then a close parens
               )  = Close non-capturing group
               *  = Match anything
            )  = Close capturing group
       \)  = Match a close parens
      	 /gi  = Get all matches, not the first.  Be case insensitive.
       */

      var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
        // strip quotes (if they exist)
        var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
          return $1;
        }).replace(/^'(.*)'$/, function (o, $1) {
          return $1;
        }); // already a full url? no change

        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
          return fullMatch;
        } // convert the url to a full url


        var newUrl;

        if (unquotedOrigUrl.indexOf("//") === 0) {
          //TODO: should we add protocol?
          newUrl = unquotedOrigUrl;
        } else if (unquotedOrigUrl.indexOf("/") === 0) {
          // path should be relative to the base url
          newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
        } else {
          // path should be relative to current directory
          newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
        } // send back the fixed url(...)


        return "url(" + JSON.stringify(newUrl) + ")";
      }); // send back the fixed css

      return fixedCss;
    };
    /***/

  },

  /***/
  "./node_modules/timers-browserify/main.js":
  /*!************************************************!*\
    !*** ./node_modules/timers-browserify/main.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesTimersBrowserifyMainJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (global) {
      var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
      var apply = Function.prototype.apply; // DOM APIs, for completeness

      exports.setTimeout = function () {
        return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
      };

      exports.setInterval = function () {
        return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
      };

      exports.clearTimeout = exports.clearInterval = function (timeout) {
        if (timeout) {
          timeout.close();
        }
      };

      function Timeout(id, clearFn) {
        this._id = id;
        this._clearFn = clearFn;
      }

      Timeout.prototype.unref = Timeout.prototype.ref = function () {};

      Timeout.prototype.close = function () {
        this._clearFn.call(scope, this._id);
      }; // Does not start the time, just sets up the members needed.


      exports.enroll = function (item, msecs) {
        clearTimeout(item._idleTimeoutId);
        item._idleTimeout = msecs;
      };

      exports.unenroll = function (item) {
        clearTimeout(item._idleTimeoutId);
        item._idleTimeout = -1;
      };

      exports._unrefActive = exports.active = function (item) {
        clearTimeout(item._idleTimeoutId);
        var msecs = item._idleTimeout;

        if (msecs >= 0) {
          item._idleTimeoutId = setTimeout(function onTimeout() {
            if (item._onTimeout) item._onTimeout();
          }, msecs);
        }
      }; // setimmediate attaches itself to the global object


      __webpack_require__(
      /*! setimmediate */
      "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
      // able to install onto.  Search each possibility in the same order as the
      // `setimmediate` library.


      exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
      exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Prepress.vue?vue&type=template&id=3e8a6e1e&scoped=true&":
  /*!************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Prepress.vue?vue&type=template&id=3e8a6e1e&scoped=true& ***!
    \************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsPrepressVueVueTypeTemplateId3e8a6e1eScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", [_c("navbar", {
        attrs: {
          pages: _vm.pages
        }
      }), _vm._v(" "), _c("main", [_c("router-view")], 1)], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer/Footer.vue?vue&type=template&id=4cfaf658&scoped=true&":
  /*!****************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer/Footer.vue?vue&type=template&id=4cfaf658&scoped=true& ***!
    \****************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsFooterFooterVueVueTypeTemplateId4cfaf658ScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("footer", [_c("p", [_vm._v(_vm._s(_vm.msg))])]);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Nav/Nav.vue?vue&type=template&id=d4699808&scoped=true&":
  /*!**********************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Nav/Nav.vue?vue&type=template&id=d4699808&scoped=true& ***!
    \**********************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsNavNavVueVueTypeTemplateIdD4699808ScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("nav", {
        staticClass: "scroll"
      }, _vm._l(_vm.items, function (item, index) {
        return _c("nav-item", {
          key: index,
          attrs: {
            text: item.title,
            path: item.path,
            color: _vm.color
          }
        });
      }), 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar/Navbar.vue?vue&type=template&id=fe35d198&scoped=true&":
  /*!****************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar/Navbar.vue?vue&type=template&id=fe35d198&scoped=true& ***!
    \****************************************************************************************************************************************************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesVueLoaderLibIndexJsResourcesJsComponentsNavbarNavbarVueVueTypeTemplateIdFe35d198ScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return render;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return staticRenderFns;
    });

    var render = function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c("div", {
        class: _vm.classes()
      }, [_c("gw-nav", {
        attrs: {
          items: _vm.pages,
          "nav-style": "dark",
          color: _vm.color
        }
      })], 1);
    };

    var staticRenderFns = [];
    render._withStripped = true;
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./resources/js/Prepress.vue":
  /*!***********************************!*\
    !*** ./resources/js/Prepress.vue ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function resourcesJsPrepressVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Prepress_vue_vue_type_template_id_3e8a6e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Prepress.vue?vue&type=template&id=3e8a6e1e&scoped=true& */
    "./resources/js/Prepress.vue?vue&type=template&id=3e8a6e1e&scoped=true&");
    /* harmony import */


    var _Prepress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Prepress.vue?vue&type=script&lang=js& */
    "./resources/js/Prepress.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _Prepress_vue_vue_type_style_index_0_id_3e8a6e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true& */
    "./resources/js/Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Prepress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _Prepress_vue_vue_type_template_id_3e8a6e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"], _Prepress_vue_vue_type_template_id_3e8a6e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, "3e8a6e1e", null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/Prepress.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/Prepress.vue?vue&type=script&lang=js&":
  /*!************************************************************!*\
    !*** ./resources/js/Prepress.vue?vue&type=script&lang=js& ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsPrepressVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./Prepress.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Prepress.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true&":
  /*!*********************************************************************************************!*\
    !*** ./resources/js/Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true& ***!
    \*********************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsPrepressVueVueTypeStyleIndex0Id3e8a6e1eLangScssScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_style_index_0_id_3e8a6e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../node_modules/vue-loader/lib??vue-loader-options!./Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Prepress.vue?vue&type=style&index=0&id=3e8a6e1e&lang=scss&scoped=true&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_style_index_0_id_3e8a6e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_style_index_0_id_3e8a6e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_style_index_0_id_3e8a6e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_style_index_0_id_3e8a6e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_style_index_0_id_3e8a6e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/Prepress.vue?vue&type=template&id=3e8a6e1e&scoped=true&":
  /*!******************************************************************************!*\
    !*** ./resources/js/Prepress.vue?vue&type=template&id=3e8a6e1e&scoped=true& ***!
    \******************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsPrepressVueVueTypeTemplateId3e8a6e1eScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_template_id_3e8a6e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Prepress.vue?vue&type=template&id=3e8a6e1e&scoped=true& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Prepress.vue?vue&type=template&id=3e8a6e1e&scoped=true&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_template_id_3e8a6e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prepress_vue_vue_type_template_id_3e8a6e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/app.js":
  /*!*****************************!*\
    !*** ./resources/js/app.js ***!
    \*****************************/

  /*! no exports provided */

  /***/
  function resourcesJsAppJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! vue */
    "./node_modules/vue/dist/vue.common.js");
    /* harmony import */


    var vue__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! #/routes */
    "./resources/js/routes.js");
    /* harmony import */


    var _Prepress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! #/Prepress */
    "./resources/js/Prepress.vue");

    vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.productionTip = false;
    var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
      el: '#app',
      router: _routes__WEBPACK_IMPORTED_MODULE_1__["default"],
      render: function render(h) {
        return h(_Prepress__WEBPACK_IMPORTED_MODULE_2__["default"]);
      }
    });
    /***/
  },

  /***/
  "./resources/js/components/Footer/Footer.vue":
  /*!***************************************************!*\
    !*** ./resources/js/components/Footer/Footer.vue ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsComponentsFooterFooterVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Footer_vue_vue_type_template_id_4cfaf658_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Footer.vue?vue&type=template&id=4cfaf658&scoped=true& */
    "./resources/js/components/Footer/Footer.vue?vue&type=template&id=4cfaf658&scoped=true&");
    /* harmony import */


    var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Footer.vue?vue&type=script&lang=js& */
    "./resources/js/components/Footer/Footer.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _Footer_vue_vue_type_style_index_0_id_4cfaf658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true& */
    "./resources/js/components/Footer/Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _Footer_vue_vue_type_template_id_4cfaf658_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"], _Footer_vue_vue_type_template_id_4cfaf658_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, "4cfaf658", null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/components/Footer/Footer.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/components/Footer/Footer.vue?vue&type=script&lang=js&":
  /*!****************************************************************************!*\
    !*** ./resources/js/components/Footer/Footer.vue?vue&type=script&lang=js& ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsComponentsFooterFooterVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer/Footer.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/components/Footer/Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true&":
  /*!*************************************************************************************************************!*\
    !*** ./resources/js/components/Footer/Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true& ***!
    \*************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsComponentsFooterFooterVueVueTypeStyleIndex0Id4cfaf658LangScssScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4cfaf658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer/Footer.vue?vue&type=style&index=0&id=4cfaf658&lang=scss&scoped=true&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4cfaf658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4cfaf658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4cfaf658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4cfaf658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_4cfaf658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/components/Footer/Footer.vue?vue&type=template&id=4cfaf658&scoped=true&":
  /*!**********************************************************************************************!*\
    !*** ./resources/js/components/Footer/Footer.vue?vue&type=template&id=4cfaf658&scoped=true& ***!
    \**********************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsComponentsFooterFooterVueVueTypeTemplateId4cfaf658ScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_4cfaf658_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=4cfaf658&scoped=true& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer/Footer.vue?vue&type=template&id=4cfaf658&scoped=true&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_4cfaf658_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_4cfaf658_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/components/Nav/Nav.vue":
  /*!*********************************************!*\
    !*** ./resources/js/components/Nav/Nav.vue ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsComponentsNavNavVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Nav_vue_vue_type_template_id_d4699808_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Nav.vue?vue&type=template&id=d4699808&scoped=true& */
    "./resources/js/components/Nav/Nav.vue?vue&type=template&id=d4699808&scoped=true&");
    /* harmony import */


    var _Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Nav.vue?vue&type=script&lang=js& */
    "./resources/js/components/Nav/Nav.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _Nav_vue_vue_type_style_index_0_id_d4699808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true& */
    "./resources/js/components/Nav/Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _Nav_vue_vue_type_template_id_d4699808_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"], _Nav_vue_vue_type_template_id_d4699808_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, "d4699808", null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/components/Nav/Nav.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/components/Nav/Nav.vue?vue&type=script&lang=js&":
  /*!**********************************************************************!*\
    !*** ./resources/js/components/Nav/Nav.vue?vue&type=script&lang=js& ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsComponentsNavNavVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Nav/Nav.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/components/Nav/Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true&":
  /*!*******************************************************************************************************!*\
    !*** ./resources/js/components/Nav/Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true& ***!
    \*******************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsComponentsNavNavVueVueTypeStyleIndex0IdD4699808LangScssScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_d4699808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Nav/Nav.vue?vue&type=style&index=0&id=d4699808&lang=scss&scoped=true&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_d4699808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_d4699808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_d4699808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_d4699808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_d4699808_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/components/Nav/Nav.vue?vue&type=template&id=d4699808&scoped=true&":
  /*!****************************************************************************************!*\
    !*** ./resources/js/components/Nav/Nav.vue?vue&type=template&id=d4699808&scoped=true& ***!
    \****************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsComponentsNavNavVueVueTypeTemplateIdD4699808ScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_d4699808_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=template&id=d4699808&scoped=true& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Nav/Nav.vue?vue&type=template&id=d4699808&scoped=true&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_d4699808_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_d4699808_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/components/Navbar/Navbar.vue":
  /*!***************************************************!*\
    !*** ./resources/js/components/Navbar/Navbar.vue ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsComponentsNavbarNavbarVue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Navbar_vue_vue_type_template_id_fe35d198_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Navbar.vue?vue&type=template&id=fe35d198&scoped=true& */
    "./resources/js/components/Navbar/Navbar.vue?vue&type=template&id=fe35d198&scoped=true&");
    /* harmony import */


    var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Navbar.vue?vue&type=script&lang=js& */
    "./resources/js/components/Navbar/Navbar.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _Navbar_vue_vue_type_style_index_0_id_fe35d198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true& */
    "./resources/js/components/Navbar/Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true&");
    /* harmony import */


    var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */
    "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
    /* normalize component */


    var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"], _Navbar_vue_vue_type_template_id_fe35d198_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"], _Navbar_vue_vue_type_template_id_fe35d198_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"], false, null, "fe35d198", null);
    /* hot reload */

    if (false) {
      var api;
    }

    component.options.__file = "resources/js/components/Navbar/Navbar.vue";
    /* harmony default export */

    __webpack_exports__["default"] = component.exports;
    /***/
  },

  /***/
  "./resources/js/components/Navbar/Navbar.vue?vue&type=script&lang=js&":
  /*!****************************************************************************!*\
    !*** ./resources/js/components/Navbar/Navbar.vue?vue&type=script&lang=js& ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function resourcesJsComponentsNavbarNavbarVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */
    "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar/Navbar.vue?vue&type=script&lang=js&");
    /* empty/unused harmony star reexport */

    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"];
    /***/
  },

  /***/
  "./resources/js/components/Navbar/Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true&":
  /*!*************************************************************************************************************!*\
    !*** ./resources/js/components/Navbar/Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true& ***!
    \*************************************************************************************************************/

  /*! no static exports found */

  /***/
  function resourcesJsComponentsNavbarNavbarVueVueTypeStyleIndex0IdFe35d198LangScssScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_fe35d198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true& */
    "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar/Navbar.vue?vue&type=style&index=0&id=fe35d198&lang=scss&scoped=true&");
    /* harmony import */


    var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_fe35d198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_fe35d198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */


    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_fe35d198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_fe35d198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    }
    /* harmony default export */


    __webpack_exports__["default"] = _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_fe35d198_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a;
    /***/
  },

  /***/
  "./resources/js/components/Navbar/Navbar.vue?vue&type=template&id=fe35d198&scoped=true&":
  /*!**********************************************************************************************!*\
    !*** ./resources/js/components/Navbar/Navbar.vue?vue&type=template&id=fe35d198&scoped=true& ***!
    \**********************************************************************************************/

  /*! exports provided: render, staticRenderFns */

  /***/
  function resourcesJsComponentsNavbarNavbarVueVueTypeTemplateIdFe35d198ScopedTrue(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_fe35d198_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=fe35d198&scoped=true& */
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar/Navbar.vue?vue&type=template&id=fe35d198&scoped=true&");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "render", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_fe35d198_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {
      return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_fe35d198_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
    });
    /***/

  },

  /***/
  "./resources/js/routes.js":
  /*!********************************!*\
    !*** ./resources/js/routes.js ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function resourcesJsRoutesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! vue */
    "./node_modules/vue/dist/vue.common.js");
    /* harmony import */


    var vue__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! vue-router */
    "./node_modules/vue-router/dist/vue-router.esm.js");

    vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /* harmony default export */

    __webpack_exports__["default"] = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
      mode: "history",
      routes: [{
        path: '/',
        component: function component() {
          return __webpack_require__.e(
          /*! import() | home-page */
          "home-page").then(__webpack_require__.bind(null,
          /*! #/views/Home */
          "./resources/js/views/Home.vue"));
        }
      }, {
        path: '/about',
        component: function component() {
          return __webpack_require__.e(
          /*! import() | about-page */
          "about-page").then(__webpack_require__.bind(null,
          /*! #/views/About */
          "./resources/js/views/About.vue"));
        }
      }, {
        path: '/products',
        component: function component() {
          return __webpack_require__.e(
          /*! import() | products-page */
          "products-page").then(__webpack_require__.bind(null,
          /*! #/views/Products */
          "./resources/js/views/Products.vue"));
        }
      }, {
        path: '/product/:sku',
        component: function component() {
          return __webpack_require__.e(
          /*! import() | product-view */
          "product-view").then(__webpack_require__.bind(null,
          /*! #/views/Product */
          "./resources/js/views/Product.vue"));
        }
      }, {
        path: '/product/:sku/:color',
        component: function component() {
          return __webpack_require__.e(
          /*! import() | product-page-color */
          "product-view").then(__webpack_require__.bind(null,
          /*! #/views/Product */
          "./resources/js/views/Product.vue"));
        },
        children: [{
          path: '',
          meta: {
            header: "product-header-full",
            content: "info"
          },
          components: {
            default: function _default() {
              return __webpack_require__.e(
              /*! import() | product-info */
              "product-info").then(__webpack_require__.bind(null,
              /*! %/Product/Info */
              "./resources/js/components/Product/Info.vue"));
            }
          }
        }, {
          path: 'quote',
          meta: {
            header: "product-header-mini",
            content: "form"
          },
          name: "product-form",
          components: {
            default: function _default() {
              return __webpack_require__.e(
              /*! import() | product-form */
              "product-form").then(__webpack_require__.bind(null,
              /*! %/Calculator/Form */
              "./resources/js/components/Calculator/Form.vue"));
            }
          }
        }]
      }]
    });
    /***/
  },

  /***/
  "./resources/sass/app.scss":
  /*!*********************************!*\
    !*** ./resources/sass/app.scss ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function resourcesSassAppScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  0:
  /*!**********************************************************************************************************!*\
    !*** multi ./resources/js/app.js ./node_modules/sierra-library/lib/index.scss ./resources/sass/app.scss ***!
    \**********************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! /Users/gw/Sites/prepress/resources/js/app.js */
    "./resources/js/app.js");

    __webpack_require__(
    /*! /Users/gw/Sites/prepress/node_modules/sierra-library/lib/index.scss */
    "./node_modules/sierra-library/lib/index.scss");

    module.exports = __webpack_require__(
    /*! /Users/gw/Sites/prepress/resources/sass/app.scss */
    "./resources/sass/app.scss");
    /***/
  }
}, [[0, "/js/manifest", "/js/vendor"]]]);
