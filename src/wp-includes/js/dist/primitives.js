/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/primitives/build-module/block-quotation/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/primitives/build-module/block-quotation/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockQuotation": function() { return /* binding */ BlockQuotation; }
/* harmony export */ });
const BlockQuotation = 'blockquote';


/***/ }),

/***/ "./node_modules/@wordpress/primitives/build-module/horizontal-rule/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/primitives/build-module/horizontal-rule/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalRule": function() { return /* binding */ HorizontalRule; }
/* harmony export */ });
const HorizontalRule = 'hr';


/***/ }),

/***/ "./node_modules/@wordpress/primitives/build-module/svg/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/primitives/build-module/svg/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": function() { return /* binding */ Circle; },
/* harmony export */   "Defs": function() { return /* binding */ Defs; },
/* harmony export */   "G": function() { return /* binding */ G; },
/* harmony export */   "Line": function() { return /* binding */ Line; },
/* harmony export */   "LinearGradient": function() { return /* binding */ LinearGradient; },
/* harmony export */   "Path": function() { return /* binding */ Path; },
/* harmony export */   "Polygon": function() { return /* binding */ Polygon; },
/* harmony export */   "RadialGradient": function() { return /* binding */ RadialGradient; },
/* harmony export */   "Rect": function() { return /* binding */ Rect; },
/* harmony export */   "SVG": function() { return /* binding */ SVG; },
/* harmony export */   "Stop": function() { return /* binding */ Stop; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/** @typedef {{isPressed?: boolean} & import('react').ComponentPropsWithoutRef<'svg'>} SVGProps */

/**
 * @param {import('react').ComponentPropsWithoutRef<'circle'>} props
 *
 * @return {JSX.Element} Circle component
 */

const Circle = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('circle', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'g'>} props
 *
 * @return {JSX.Element} G component
 */

const G = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('g', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'line'>} props
 *
 * @return {JSX.Element} Path component
 */

const Line = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('line', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'path'>} props
 *
 * @return {JSX.Element} Path component
 */

const Path = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('path', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'polygon'>} props
 *
 * @return {JSX.Element} Polygon component
 */

const Polygon = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('polygon', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'rect'>} props
 *
 * @return {JSX.Element} Rect component
 */

const Rect = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('rect', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'defs'>} props
 *
 * @return {JSX.Element} Defs component
 */

const Defs = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('defs', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'radialGradient'>} props
 *
 * @return {JSX.Element} RadialGradient component
 */

const RadialGradient = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('radialGradient', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'linearGradient'>} props
 *
 * @return {JSX.Element} LinearGradient component
 */

const LinearGradient = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('linearGradient', props);
/**
 * @param {import('react').ComponentPropsWithoutRef<'stop'>} props
 *
 * @return {JSX.Element} Stop component
 */

const Stop = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('stop', props);
/**
 *
 * @param {SVGProps} props isPressed indicates whether the SVG should appear as pressed.
 *                         Other props will be passed through to svg component.
 *
 * @return {JSX.Element} Stop component
 */

const SVG = ({
  className,
  isPressed,
  ...props
}) => {
  const appliedProps = { ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
      'is-pressed': isPressed
    }) || undefined,
    'aria-hidden': true,
    focusable: false
  }; // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", { ...appliedProps
  });
};


/***/ }),

/***/ "./node_modules/@wordpress/primitives/build-module/view/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/primitives/build-module/view/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": function() { return /* binding */ View; }
/* harmony export */ });
const View = 'div';


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/primitives/build-module/index.js ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockQuotation": function() { return /* reexport safe */ _block_quotation__WEBPACK_IMPORTED_MODULE_2__.BlockQuotation; },
/* harmony export */   "Circle": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.Circle; },
/* harmony export */   "Defs": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.Defs; },
/* harmony export */   "G": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.G; },
/* harmony export */   "HorizontalRule": function() { return /* reexport safe */ _horizontal_rule__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule; },
/* harmony export */   "Line": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.Line; },
/* harmony export */   "LinearGradient": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.LinearGradient; },
/* harmony export */   "Path": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.Path; },
/* harmony export */   "Polygon": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.Polygon; },
/* harmony export */   "RadialGradient": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.RadialGradient; },
/* harmony export */   "Rect": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.Rect; },
/* harmony export */   "SVG": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.SVG; },
/* harmony export */   "Stop": function() { return /* reexport safe */ _svg__WEBPACK_IMPORTED_MODULE_0__.Stop; },
/* harmony export */   "View": function() { return /* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_3__.View; }
/* harmony export */ });
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg */ "./node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var _horizontal_rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-rule */ "./node_modules/@wordpress/primitives/build-module/horizontal-rule/index.js");
/* harmony import */ var _block_quotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-quotation */ "./node_modules/@wordpress/primitives/build-module/block-quotation/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./node_modules/@wordpress/primitives/build-module/view/index.js");





}();
(window.wp = window.wp || {}).primitives = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=primitives.js.map