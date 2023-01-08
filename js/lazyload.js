/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lazyload.js":
/*!****************************!*\
  !*** ./src/js/lazyload.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var loading_attribute_polyfill_dist_loading_attribute_polyfill_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loading-attribute-polyfill/dist/loading-attribute-polyfill.module */ \"./node_modules/loading-attribute-polyfill/dist/loading-attribute-polyfill.module.js\");\n\n\nvar checkLazyImages = function checkLazyImages() {\n  var lazyLoadAreas = document.querySelectorAll('noscript.loading-lazy');\n  lazyLoadAreas.forEach(function (element) {\n    return loading_attribute_polyfill_dist_loading_attribute_polyfill_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prepareElement(element);\n  });\n\n  var removeShimmer = function removeShimmer(img) {\n    // eslint-disable-next-line no-param-reassign\n    img.onload = null;\n    var parent = img.closest('.bg-shimmer');\n    parent.classList.add('bg-shimmer--loaded');\n    setTimeout(function () {\n      parent.classList.remove('bg-shimmer', 'bg-shimmer--loaded');\n    }, 400);\n  };\n\n  document.querySelectorAll('.bg-shimmer img').forEach(function (img) {\n    if (img.complete) {\n      removeShimmer(img);\n    } else {\n      // eslint-disable-next-line no-param-reassign\n      img.onload = function () {\n        removeShimmer(img);\n      };\n    }\n  });\n};\n\ncheckLazyImages();\nwindow.checkLazyImages = checkLazyImages;\n\n//# sourceURL=webpack://folc-styleguide/./src/js/lazyload.js?");

/***/ }),

/***/ "./node_modules/loading-attribute-polyfill/dist/loading-attribute-polyfill.module.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/loading-attribute-polyfill/dist/loading-attribute-polyfill.module.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar e,t=\"loading\"in HTMLImageElement.prototype,r=\"loading\"in HTMLIFrameElement.prototype,a=\"onscroll\"in window;function o(e){var t,r,a=[];\"picture\"===e.parentNode.tagName.toLowerCase()&&((r=(t=e.parentNode).querySelector(\"source[data-lazy-remove]\"))&&t.removeChild(r),a=Array.prototype.slice.call(e.parentNode.querySelectorAll(\"source\"))),a.push(e),a.forEach(function(e){e.hasAttribute(\"data-lazy-srcset\")&&(e.setAttribute(\"srcset\",e.getAttribute(\"data-lazy-srcset\")),e.removeAttribute(\"data-lazy-srcset\"))}),e.setAttribute(\"src\",e.getAttribute(\"data-lazy-src\")),e.removeAttribute(\"data-lazy-src\")}function n(o){var n=document.createElement(\"div\");for(n.innerHTML=function(o){var n=o.textContent||o.innerHTML,i=\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 \"+((n.match(/width=['\"](\\d+)['\"]/)||!1)[1]||1)+\" \"+((n.match(/height=['\"](\\d+)['\"]/)||!1)[1]||1)+\"%27%3E%3C/svg%3E\";return(/<img/gim.test(n)&&!t||/<iframe/gim.test(n)&&!r)&&a&&(n=void 0===e?n.replace(/(?:\\r\\n|\\r|\\n|\\t| )src=/g,' lazyload=\"1\" src='):(n=n.replace(\"<source\",'<source srcset=\"'+i+'\" data-lazy-remove=\"true\"></source>\\n<source')).replace(/(?:\\r\\n|\\r|\\n|\\t| )srcset=/g,\" data-lazy-srcset=\").replace(/(?:\\r\\n|\\r|\\n|\\t| )src=/g,' src=\"'+i+'\" data-lazy-src=')),n}(o);n.firstChild;){var i=n.firstChild;if(a&&void 0!==e&&i.tagName&&((\"img\"===i.tagName.toLowerCase()||\"picture\"===i.tagName.toLowerCase())&&!t||\"iframe\"===i.tagName.toLowerCase()&&!r)){var c=\"picture\"===i.tagName.toLowerCase()?n.querySelector(\"img\"):i;e.observe(c)}o.parentNode.insertBefore(i,o)}o.parentNode.removeChild(o)}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),\"IntersectionObserver\"in window&&(e=new IntersectionObserver(function(e,t){e.forEach(function(e){if(0!==e.intersectionRatio){var r=e.target;t.unobserve(r),o(r)}})},{rootMargin:\"0px 0px 256px 0px\",threshold:.01}));var i=function(){document.querySelectorAll(\"noscript.loading-lazy\").forEach(function(e){return n(e)}),void 0!==window.matchMedia&&window.matchMedia(\"print\").addListener(function(e){e.matches&&document.querySelectorAll('img[loading=\"lazy\"][data-lazy-src],iframe[loading=\"lazy\"][data-lazy-src]').forEach(function(e){o(e)})})};/comp|inter/.test(document.readyState)?i():\"addEventListener\"in document?document.addEventListener(\"DOMContentLoaded\",function(){i()}):document.attachEvent(\"onreadystatechange\",function(){\"complete\"===document.readyState&&i()});var c={prepareElement:n};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);\n//# sourceMappingURL=loading-attribute-polyfill.module.js.map\n\n\n//# sourceURL=webpack://folc-styleguide/./node_modules/loading-attribute-polyfill/dist/loading-attribute-polyfill.module.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/lazyload.js");
/******/ 	
/******/ })()
;