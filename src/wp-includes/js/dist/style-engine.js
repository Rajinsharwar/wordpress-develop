/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/border/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/border/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

/**
 * Creates a function for generating CSS rules when the style path is the same as the camelCase CSS property used in React.
 *
 * @param path An array of strings representing the path to the style value in the style object.
 *
 * @return A function that generates CSS rules.
 */

function createBorderGenerateFunction(path) {
  return (style, options) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.camelCaseJoin)(path));
}
/**
 * Creates a function for generating border-{top,bottom,left,right}-{color,style,width} CSS rules.
 *
 * @param edge The edge to create CSS rules for.
 *
 * @return A function that generates CSS rules.
 */


function createBorderEdgeGenerateFunction(edge) {
  return (style, options) => {
    return ['color', 'style', 'width'].flatMap(key => {
      const path = ['border', edge, key];
      return createBorderGenerateFunction(path)(style, options);
    });
  };
}

const color = {
  name: 'color',
  generate: createBorderGenerateFunction(['border', 'color'])
};
const radius = {
  name: 'radius',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateBoxRules)(style, options, ['border', 'radius'], {
      default: 'borderRadius',
      individual: 'border%sRadius'
    }, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  }
};
const borderStyle = {
  name: 'style',
  generate: createBorderGenerateFunction(['border', 'style'])
};
const width = {
  name: 'width',
  generate: createBorderGenerateFunction(['border', 'width'])
};
const borderTop = {
  name: 'borderTop',
  generate: createBorderEdgeGenerateFunction('top')
};
const borderRight = {
  name: 'borderRight',
  generate: createBorderEdgeGenerateFunction('right')
};
const borderBottom = {
  name: 'borderBottom',
  generate: createBorderEdgeGenerateFunction('bottom')
};
const borderLeft = {
  name: 'borderLeft',
  generate: createBorderEdgeGenerateFunction('left')
};
/* harmony default export */ __webpack_exports__["default"] = ([color, borderStyle, width, radius, borderTop, borderRight, borderBottom, borderLeft]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/color/background.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/color/background.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const background = {
  name: 'background',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['color', 'background'], 'backgroundColor');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (background);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/color/gradient.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/color/gradient.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const gradient = {
  name: 'gradient',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['color', 'gradient'], 'background');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (gradient);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/color/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/color/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ "./node_modules/@wordpress/style-engine/build-module/styles/color/background.js");
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gradient */ "./node_modules/@wordpress/style-engine/build-module/styles/color/gradient.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./node_modules/@wordpress/style-engine/build-module/styles/color/text.js");
/**
 * Internal dependencies
 */



/* harmony default export */ __webpack_exports__["default"] = ([_text__WEBPACK_IMPORTED_MODULE_0__["default"], _gradient__WEBPACK_IMPORTED_MODULE_1__["default"], _background__WEBPACK_IMPORTED_MODULE_2__["default"]]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/color/text.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/color/text.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const text = {
  name: 'text',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['color', 'text'], 'color');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (text);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/constants.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/constants.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE": function() { return /* binding */ VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE; },
/* harmony export */   "VARIABLE_PATH_SEPARATOR_TOKEN_STYLE": function() { return /* binding */ VARIABLE_PATH_SEPARATOR_TOKEN_STYLE; },
/* harmony export */   "VARIABLE_REFERENCE_PREFIX": function() { return /* binding */ VARIABLE_REFERENCE_PREFIX; }
/* harmony export */ });
const VARIABLE_REFERENCE_PREFIX = 'var:';
const VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE = '|';
const VARIABLE_PATH_SEPARATOR_TOKEN_STYLE = '--';


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/dimensions/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/dimensions/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const minHeight = {
  name: 'minHeight',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['dimensions', 'minHeight'], 'minHeight');
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([minHeight]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleDefinitions": function() { return /* binding */ styleDefinitions; }
/* harmony export */ });
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./border */ "./node_modules/@wordpress/style-engine/build-module/styles/border/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/@wordpress/style-engine/build-module/styles/color/index.js");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensions */ "./node_modules/@wordpress/style-engine/build-module/styles/dimensions/index.js");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shadow */ "./node_modules/@wordpress/style-engine/build-module/styles/shadow/index.js");
/* harmony import */ var _outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outline */ "./node_modules/@wordpress/style-engine/build-module/styles/outline/index.js");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spacing */ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/index.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typography */ "./node_modules/@wordpress/style-engine/build-module/styles/typography/index.js");
/**
 * Internal dependencies
 */







const styleDefinitions = [..._border__WEBPACK_IMPORTED_MODULE_0__["default"], ..._color__WEBPACK_IMPORTED_MODULE_1__["default"], ..._dimensions__WEBPACK_IMPORTED_MODULE_2__["default"], ..._outline__WEBPACK_IMPORTED_MODULE_3__["default"], ..._spacing__WEBPACK_IMPORTED_MODULE_4__["default"], ..._typography__WEBPACK_IMPORTED_MODULE_5__["default"], ..._shadow__WEBPACK_IMPORTED_MODULE_6__["default"]];


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/outline/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/outline/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const color = {
  name: 'color',
  generate: (style, options, path = ['outline', 'color'], ruleKey = 'outlineColor') => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, ruleKey);
  }
};
const offset = {
  name: 'offset',
  generate: (style, options, path = ['outline', 'offset'], ruleKey = 'outlineOffset') => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, ruleKey);
  }
};
const outlineStyle = {
  name: 'style',
  generate: (style, options, path = ['outline', 'style'], ruleKey = 'outlineStyle') => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, ruleKey);
  }
};
const width = {
  name: 'width',
  generate: (style, options, path = ['outline', 'width'], ruleKey = 'outlineWidth') => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, ruleKey);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([color, outlineStyle, offset, width]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/shadow/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/shadow/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const shadow = {
  name: 'shadow',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['shadow'], 'boxShadow');
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([shadow]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/spacing/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./padding */ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/padding.js");
/* harmony import */ var _margin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margin */ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/margin.js");
/**
 * Internal dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = ([_margin__WEBPACK_IMPORTED_MODULE_0__["default"], _padding__WEBPACK_IMPORTED_MODULE_1__["default"]]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/margin.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/spacing/margin.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const margin = {
  name: 'margin',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateBoxRules)(style, options, ['spacing', 'margin'], {
      default: 'margin',
      individual: 'margin%s'
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (margin);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/padding.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/spacing/padding.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const padding = {
  name: 'padding',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateBoxRules)(style, options, ['spacing', 'padding'], {
      default: 'padding',
      individual: 'padding%s'
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (padding);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/typography/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/typography/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */

const fontSize = {
  name: 'fontSize',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'fontSize'], 'fontSize');
  }
};
const fontStyle = {
  name: 'fontStyle',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'fontStyle'], 'fontStyle');
  }
};
const fontWeight = {
  name: 'fontWeight',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'fontWeight'], 'fontWeight');
  }
};
const fontFamily = {
  name: 'fontFamily',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'fontFamily'], 'fontFamily');
  }
};
const letterSpacing = {
  name: 'letterSpacing',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'letterSpacing'], 'letterSpacing');
  }
};
const lineHeight = {
  name: 'lineHeight',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'lineHeight'], 'lineHeight');
  }
};
const textColumns = {
  name: 'textColumns',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'textColumns'], 'columnCount');
  }
};
const textDecoration = {
  name: 'textDecoration',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'textDecoration'], 'textDecoration');
  }
};
const textTransform = {
  name: 'textTransform',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'textTransform'], 'textTransform');
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textColumns, textDecoration, textTransform]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/utils.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelCaseJoin": function() { return /* binding */ camelCaseJoin; },
/* harmony export */   "generateBoxRules": function() { return /* binding */ generateBoxRules; },
/* harmony export */   "generateRule": function() { return /* binding */ generateRule; },
/* harmony export */   "getCSSVarFromStyleValue": function() { return /* binding */ getCSSVarFromStyleValue; },
/* harmony export */   "upperFirst": function() { return /* binding */ upperFirst; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/style-engine/build-module/styles/constants.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Returns a JSON representation of the generated CSS rules.
 *
 * @param style   Style object.
 * @param options Options object with settings to adjust how the styles are generated.
 * @param path    An array of strings representing the path to the style value in the style object.
 * @param ruleKey A CSS property key.
 *
 * @return GeneratedCSSRule[] CSS rules.
 */

function generateRule(style, options, path, ruleKey) {
  const styleValue = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(style, path);
  return styleValue ? [{
    selector: options?.selector,
    key: ruleKey,
    value: getCSSVarFromStyleValue(styleValue)
  }] : [];
}
/**
 * Returns a JSON representation of the generated CSS rules taking into account box model properties, top, right, bottom, left.
 *
 * @param style                Style object.
 * @param options              Options object with settings to adjust how the styles are generated.
 * @param path                 An array of strings representing the path to the style value in the style object.
 * @param ruleKeys             An array of CSS property keys and patterns.
 * @param individualProperties The "sides" or individual properties for which to generate rules.
 *
 * @return GeneratedCSSRule[]  CSS rules.
 */

function generateBoxRules(style, options, path, ruleKeys, individualProperties = ['top', 'right', 'bottom', 'left']) {
  const boxStyle = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(style, path);

  if (!boxStyle) {
    return [];
  }

  const rules = [];

  if (typeof boxStyle === 'string') {
    rules.push({
      selector: options?.selector,
      key: ruleKeys.default,
      value: boxStyle
    });
  } else {
    const sideRules = individualProperties.reduce((acc, side) => {
      const value = getCSSVarFromStyleValue((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(boxStyle, [side]));

      if (value) {
        acc.push({
          selector: options?.selector,
          key: ruleKeys?.individual.replace('%s', upperFirst(side)),
          value
        });
      }

      return acc;
    }, []);
    rules.push(...sideRules);
  }

  return rules;
}
/**
 * Returns a CSS var value from incoming style value following the pattern `var:description|context|slug`.
 *
 * @param styleValue A raw style value.
 *
 * @return string A CSS var value.
 */

function getCSSVarFromStyleValue(styleValue) {
  if (typeof styleValue === 'string' && styleValue.startsWith(_constants__WEBPACK_IMPORTED_MODULE_1__.VARIABLE_REFERENCE_PREFIX)) {
    const variable = styleValue.slice(_constants__WEBPACK_IMPORTED_MODULE_1__.VARIABLE_REFERENCE_PREFIX.length).split(_constants__WEBPACK_IMPORTED_MODULE_1__.VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE).map(presetVariable => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(presetVariable)).join(_constants__WEBPACK_IMPORTED_MODULE_1__.VARIABLE_PATH_SEPARATOR_TOKEN_STYLE);
    return `var(--wp--${variable})`;
  }

  return styleValue;
}
/**
 * Capitalizes the first letter in a string.
 *
 * @param string The string whose first letter the function will capitalize.
 *
 * @return String with the first letter capitalized.
 */

function upperFirst(string) {
  const [firstLetter, ...rest] = string;
  return firstLetter.toUpperCase() + rest.join('');
}
/**
 * Converts an array of strings into a camelCase string.
 *
 * @param strings The strings to join into a camelCase string.
 *
 * @return camelCase string.
 */

function camelCaseJoin(strings) {
  const [firstItem, ...rest] = strings;
  return firstItem.toLowerCase() + rest.map(upperFirst).join('');
}


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/index.js ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compileCSS": function() { return /* binding */ compileCSS; },
/* harmony export */   "getCSSRules": function() { return /* binding */ getCSSRules; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./node_modules/@wordpress/style-engine/build-module/styles/index.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Generates a stylesheet for a given style object and selector.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param style   Style object, for example, the value of a block's attributes.style object or the top level styles in theme.json
 * @param options Options object with settings to adjust how the styles are generated.
 *
 * @return A generated stylesheet or inline style declarations.
 */

function compileCSS(style, options = {}) {
  const rules = getCSSRules(style, options); // If no selector is provided, treat generated rules as inline styles to be returned as a single string.

  if (!options?.selector) {
    const inlineRules = [];
    rules.forEach(rule => {
      inlineRules.push(`${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(rule.key)}: ${rule.value};`);
    });
    return inlineRules.join(' ');
  }

  const groupedRules = rules.reduce((acc, rule) => {
    const {
      selector
    } = rule;

    if (!selector) {
      return acc;
    }

    if (!acc[selector]) {
      acc[selector] = [];
    }

    acc[selector].push(rule);
    return acc;
  }, {});
  const selectorRules = Object.keys(groupedRules).reduce((acc, subSelector) => {
    acc.push(`${subSelector} { ${groupedRules[subSelector].map(rule => `${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(rule.key)}: ${rule.value};`).join(' ')} }`);
    return acc;
  }, []);
  return selectorRules.join('\n');
}
/**
 * Returns a JSON representation of the generated CSS rules.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param style   Style object, for example, the value of a block's attributes.style object or the top level styles in theme.json
 * @param options Options object with settings to adjust how the styles are generated.
 *
 * @return A collection of objects containing the selector, if any, the CSS property key (camelcase) and parsed CSS value.
 */

function getCSSRules(style, options = {}) {
  const rules = [];
  _styles__WEBPACK_IMPORTED_MODULE_1__.styleDefinitions.forEach(definition => {
    if (typeof definition.generate === 'function') {
      rules.push(...definition.generate(style, options));
    }
  });
  return rules;
}

}();
(window.wp = window.wp || {}).styleEngine = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=style-engine.js.map