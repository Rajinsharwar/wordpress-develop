/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/server-side-render/build-module/server-side-render.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/server-side-render/build-module/server-side-render.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ServerSideRender; },
/* harmony export */   "removeBlockSupportAttributes": function() { return /* binding */ removeBlockSupportAttributes; },
/* harmony export */   "rendererPath": function() { return /* binding */ rendererPath; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-deep-equal/es6 */ "./node_modules/fast-deep-equal/es6/index.js");
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








const EMPTY_OBJECT = {};
function rendererPath(block, attributes = null, urlQueryArgs = {}) {
  return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)(`/wp/v2/block-renderer/${block}`, {
    context: 'edit',
    ...(null !== attributes ? {
      attributes
    } : {}),
    ...urlQueryArgs
  });
}
function removeBlockSupportAttributes(attributes) {
  const {
    backgroundColor,
    borderColor,
    fontFamily,
    fontSize,
    gradient,
    textColor,
    className,
    ...restAttributes
  } = attributes;
  const {
    border,
    color,
    elements,
    spacing,
    typography,
    ...restStyles
  } = attributes?.style || EMPTY_OBJECT;
  return { ...restAttributes,
    style: restStyles
  };
}

function DefaultEmptyResponsePlaceholder({
  className
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Placeholder, {
    className: className
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Block rendered as empty.'));
}

function DefaultErrorResponsePlaceholder({
  response,
  className
}) {
  const errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( // translators: %s: error message describing the problem
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error loading block: %s'), response.errorMsg);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Placeholder, {
    className: className
  }, errorMessage);
}

function DefaultLoadingResponsePlaceholder({
  children,
  showLoader
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'relative'
    }
  }, showLoader && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-9px',
      marginLeft: '-9px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      opacity: showLoader ? '0.3' : 1
    }
  }, children));
}

function ServerSideRender(props) {
  const {
    attributes,
    block,
    className,
    httpMethod = 'GET',
    urlQueryArgs,
    skipBlockSupportAttributes = false,
    EmptyResponsePlaceholder = DefaultEmptyResponsePlaceholder,
    ErrorResponsePlaceholder = DefaultErrorResponsePlaceholder,
    LoadingResponsePlaceholder = DefaultLoadingResponsePlaceholder
  } = props;
  const isMountedRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const [showLoader, setShowLoader] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const fetchRequestRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [response, setResponse] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const prevProps = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(props);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function fetchData() {
    var _sanitizedAttributes, _sanitizedAttributes2;

    if (!isMountedRef.current) {
      return;
    }

    setIsLoading(true);

    let sanitizedAttributes = attributes && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.__experimentalSanitizeBlockAttributes)(block, attributes);

    if (skipBlockSupportAttributes) {
      sanitizedAttributes = removeBlockSupportAttributes(sanitizedAttributes);
    } // If httpMethod is 'POST', send the attributes in the request body instead of the URL.
    // This allows sending a larger attributes object than in a GET request, where the attributes are in the URL.


    const isPostRequest = 'POST' === httpMethod;
    const urlAttributes = isPostRequest ? null : (_sanitizedAttributes = sanitizedAttributes) !== null && _sanitizedAttributes !== void 0 ? _sanitizedAttributes : null;
    const path = rendererPath(block, urlAttributes, urlQueryArgs);
    const data = isPostRequest ? {
      attributes: (_sanitizedAttributes2 = sanitizedAttributes) !== null && _sanitizedAttributes2 !== void 0 ? _sanitizedAttributes2 : null
    } : null; // Store the latest fetch request so that when we process it, we can
    // check if it is the current request, to avoid race conditions on slow networks.

    const fetchRequest = fetchRequestRef.current = _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path,
      data,
      method: isPostRequest ? 'POST' : 'GET'
    }).then(fetchResponse => {
      if (isMountedRef.current && fetchRequest === fetchRequestRef.current && fetchResponse) {
        setResponse(fetchResponse.rendered);
      }
    }).catch(error => {
      if (isMountedRef.current && fetchRequest === fetchRequestRef.current) {
        setResponse({
          error: true,
          errorMsg: error.message
        });
      }
    }).finally(() => {
      if (isMountedRef.current && fetchRequest === fetchRequestRef.current) {
        setIsLoading(false);
      }
    });
    return fetchRequest;
  }

  const debouncedFetchData = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useDebounce)(fetchData, 500); // When the component unmounts, set isMountedRef to false. This will
  // let the async fetch callbacks know when to stop.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    isMountedRef.current = false;
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Don't debounce the first fetch. This ensures that the first render
    // shows data as soon as possible.
    if (prevProps === undefined) {
      fetchData();
    } else if (!fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(prevProps, props)) {
      debouncedFetchData();
    }
  });
  /**
   * Effect to handle showing the loading placeholder.
   * Show it only if there is no previous response or
   * the request takes more than one second.
   */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isLoading) {
      return;
    }

    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [isLoading]);
  const hasResponse = !!response;
  const hasEmptyResponse = response === '';
  const hasError = response?.error;

  if (isLoading) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadingResponsePlaceholder, { ...props,
      showLoader: showLoader
    }, hasResponse && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
      className: className
    }, response));
  }

  if (hasEmptyResponse || !hasResponse) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EmptyResponsePlaceholder, { ...props
    });
  }

  if (hasError) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorResponsePlaceholder, {
      response: response,
      ...props
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.RawHTML, {
    className: className
  }, response);
}


/***/ }),

/***/ "./node_modules/fast-deep-equal/es6/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-deep-equal/es6/index.js ***!
  \***************************************************/
/***/ (function(module) {



// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

module.exports = window["wp"]["url"];

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
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/server-side-render/build-module/index.js ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_side_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-side-render */ "./node_modules/@wordpress/server-side-render/build-module/server-side-render.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Constants
 */

const EMPTY_OBJECT = {};
const ExportedServerSideRender = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => {
  // FIXME: @wordpress/server-side-render should not depend on @wordpress/editor.
  // It is used by blocks that can be loaded into a *non-post* block editor.
  // eslint-disable-next-line @wordpress/data-no-store-string-literals
  const coreEditorSelect = select('core/editor');

  if (coreEditorSelect) {
    const currentPostId = coreEditorSelect.getCurrentPostId(); // For templates and template parts we use a custom ID format.
    // Since they aren't real posts, we don't want to use their ID
    // for server-side rendering. Since they use a string based ID,
    // we can assume real post IDs are numbers.

    if (currentPostId && typeof currentPostId === 'number') {
      return {
        currentPostId
      };
    }
  }

  return EMPTY_OBJECT;
})(({
  urlQueryArgs = EMPTY_OBJECT,
  currentPostId,
  ...props
}) => {
  const newUrlQueryArgs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!currentPostId) {
      return urlQueryArgs;
    }

    return {
      post_id: currentPostId,
      ...urlQueryArgs
    };
  }, [currentPostId, urlQueryArgs]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_server_side_render__WEBPACK_IMPORTED_MODULE_2__["default"], {
    urlQueryArgs: newUrlQueryArgs,
    ...props
  });
});
/* harmony default export */ __webpack_exports__["default"] = (ExportedServerSideRender);

}();
(window.wp = window.wp || {}).serverSideRender = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=server-side-render.js.map