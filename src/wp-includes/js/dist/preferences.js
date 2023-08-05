/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (check);


/***/ }),

/***/ "./node_modules/@wordpress/preferences/build-module/components/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/preferences/build-module/components/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferenceToggleMenuItem": function() { return /* reexport safe */ _preference_toggle_menu_item__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _preference_toggle_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preference-toggle-menu-item */ "./node_modules/@wordpress/preferences/build-module/components/preference-toggle-menu-item/index.js");



/***/ }),

/***/ "./node_modules/@wordpress/preferences/build-module/components/preference-toggle-menu-item/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/preferences/build-module/components/preference-toggle-menu-item/index.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreferenceToggleMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/preferences/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function PreferenceToggleMenuItem({
  scope,
  name,
  label,
  info,
  messageActivated,
  messageDeactivated,
  shortcut,
  onToggle = () => null,
  disabled = false
}) {
  const isActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => !!select(_store__WEBPACK_IMPORTED_MODULE_5__.store).get(scope, name), [scope, name]);
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);

  const speakMessage = () => {
    if (isActive) {
      const message = messageDeactivated || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
      /* translators: %s: preference name, e.g. 'Fullscreen mode' */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Preference deactivated - %s'), label);
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__.speak)(message);
    } else {
      const message = messageActivated || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
      /* translators: %s: preference name, e.g. 'Fullscreen mode' */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Preference activated - %s'), label);
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__.speak)(message);
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    icon: isActive && _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    isSelected: isActive,
    onClick: () => {
      onToggle();
      toggle(scope, name);
      speakMessage();
    },
    role: "menuitemcheckbox",
    info: info,
    shortcut: shortcut,
    disabled: disabled
  }, label);
}


/***/ }),

/***/ "./node_modules/@wordpress/preferences/build-module/store/actions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/preferences/build-module/store/actions.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "setDefaults": function() { return /* binding */ setDefaults; },
/* harmony export */   "setPersistenceLayer": function() { return /* binding */ setPersistenceLayer; },
/* harmony export */   "toggle": function() { return /* binding */ toggle; }
/* harmony export */ });
/**
 * Returns an action object used in signalling that a preference should be
 * toggled.
 *
 * @param {string} scope The preference scope (e.g. core/edit-post).
 * @param {string} name  The preference name.
 */
function toggle(scope, name) {
  return function ({
    select,
    dispatch
  }) {
    const currentValue = select.get(scope, name);
    dispatch.set(scope, name, !currentValue);
  };
}
/**
 * Returns an action object used in signalling that a preference should be set
 * to a value
 *
 * @param {string} scope The preference scope (e.g. core/edit-post).
 * @param {string} name  The preference name.
 * @param {*}      value The value to set.
 *
 * @return {Object} Action object.
 */

function set(scope, name, value) {
  return {
    type: 'SET_PREFERENCE_VALUE',
    scope,
    name,
    value
  };
}
/**
 * Returns an action object used in signalling that preference defaults should
 * be set.
 *
 * @param {string}            scope    The preference scope (e.g. core/edit-post).
 * @param {Object<string, *>} defaults A key/value map of preference names to values.
 *
 * @return {Object} Action object.
 */

function setDefaults(scope, defaults) {
  return {
    type: 'SET_PREFERENCE_DEFAULTS',
    scope,
    defaults
  };
}
/** @typedef {() => Promise<Object>} WPPreferencesPersistenceLayerGet */

/** @typedef {(Object) => void} WPPreferencesPersistenceLayerSet */

/**
 * @typedef WPPreferencesPersistenceLayer
 *
 * @property {WPPreferencesPersistenceLayerGet} get An async function that gets data from the persistence layer.
 * @property {WPPreferencesPersistenceLayerSet} set A function that sets data in the persistence layer.
 */

/**
 * Sets the persistence layer.
 *
 * When a persistence layer is set, the preferences store will:
 * - call `get` immediately and update the store state to the value returned.
 * - call `set` with all preferences whenever a preference changes value.
 *
 * `setPersistenceLayer` should ideally be dispatched at the start of an
 * application's lifecycle, before any other actions have been dispatched to
 * the preferences store.
 *
 * @param {WPPreferencesPersistenceLayer} persistenceLayer The persistence layer.
 *
 * @return {Object} Action object.
 */

async function setPersistenceLayer(persistenceLayer) {
  const persistedData = await persistenceLayer.get();
  return {
    type: 'SET_PERSISTENCE_LAYER',
    persistenceLayer,
    persistedData
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/preferences/build-module/store/constants.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/preferences/build-module/store/constants.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
/* harmony export */ });
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const STORE_NAME = 'core/preferences';


/***/ }),

/***/ "./node_modules/@wordpress/preferences/build-module/store/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/preferences/build-module/store/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/preferences/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/preferences/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/preferences/build-module/store/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/preferences/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Store definition for the interface namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/preferences/build-module/store/reducer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/preferences/build-module/store/reducer.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaults": function() { return /* binding */ defaults; },
/* harmony export */   "preferences": function() { return /* binding */ preferences; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Reducer returning the defaults for user preferences.
 *
 * This is kept intentionally separate from the preferences
 * themselves so that defaults are not persisted.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function defaults(state = {}, action) {
  if (action.type === 'SET_PREFERENCE_DEFAULTS') {
    const {
      scope,
      defaults: values
    } = action;
    return { ...state,
      [scope]: { ...state[scope],
        ...values
      }
    };
  }

  return state;
}
/**
 * Higher order reducer that does the following:
 * - Merges any data from the persistence layer into the state when the
 *   `SET_PERSISTENCE_LAYER` action is received.
 * - Passes any preferences changes to the persistence layer.
 *
 * @param {Function} reducer The preferences reducer.
 *
 * @return {Function} The enhanced reducer.
 */

function withPersistenceLayer(reducer) {
  let persistenceLayer;
  return (state, action) => {
    // Setup the persistence layer, and return the persisted data
    // as the state.
    if (action.type === 'SET_PERSISTENCE_LAYER') {
      const {
        persistenceLayer: persistence,
        persistedData
      } = action;
      persistenceLayer = persistence;
      return persistedData;
    }

    const nextState = reducer(state, action);

    if (action.type === 'SET_PREFERENCE_VALUE') {
      persistenceLayer?.set(nextState);
    }

    return nextState;
  };
}
/**
 * Reducer returning the user preferences.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */


const preferences = withPersistenceLayer((state = {}, action) => {
  if (action.type === 'SET_PREFERENCE_VALUE') {
    const {
      scope,
      name,
      value
    } = action;
    return { ...state,
      [scope]: { ...state[scope],
        [name]: value
      }
    };
  }

  return state;
});
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  defaults,
  preferences
}));


/***/ }),

/***/ "./node_modules/@wordpress/preferences/build-module/store/selectors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/preferences/build-module/store/selectors.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; }
/* harmony export */ });
/**
 * Returns a boolean indicating whether a prefer is active for a particular
 * scope.
 *
 * @param {Object} state The store state.
 * @param {string} scope The scope of the feature (e.g. core/edit-post).
 * @param {string} name  The name of the feature.
 *
 * @return {*} Is the feature enabled?
 */
function get(state, scope, name) {
  const value = state.preferences[scope]?.[name];
  return value !== undefined ? value : state.defaults[scope]?.[name];
}


/***/ }),

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["a11y"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

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
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/preferences/build-module/index.js ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferenceToggleMenuItem": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PreferenceToggleMenuItem; },
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.store; }
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/@wordpress/preferences/build-module/components/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/preferences/build-module/store/index.js");



}();
(window.wp = window.wp || {}).preferences = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=preferences.js.map