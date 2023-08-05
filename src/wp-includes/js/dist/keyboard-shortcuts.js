/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/keyboard-shortcuts/build-module/components/shortcut-provider.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/keyboard-shortcuts/build-module/components/shortcut-provider.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortcutProvider": function() { return /* binding */ ShortcutProvider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/context.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


const {
  Provider
} = _context__WEBPACK_IMPORTED_MODULE_1__.context;
/**
 * Handles callbacks added to context by `useShortcut`.
 *
 * @param {Object} props Props to pass to `div`.
 *
 * @return {import('@wordpress/element').WPElement} Component.
 */

function ShortcutProvider(props) {
  const keyboardShortcuts = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());

  function onKeyDown(event) {
    if (props.onKeyDown) props.onKeyDown(event);

    for (const keyboardShortcut of keyboardShortcuts.current) {
      keyboardShortcut(event);
    }
  }
  /* eslint-disable jsx-a11y/no-static-element-interactions */


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Provider, {
    value: keyboardShortcuts
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ...props,
    onKeyDown: onKeyDown
  }));
  /* eslint-enable jsx-a11y/no-static-element-interactions */
}


/***/ }),

/***/ "./node_modules/@wordpress/keyboard-shortcuts/build-module/context.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/keyboard-shortcuts/build-module/context.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "context": function() { return /* binding */ context; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();


/***/ }),

/***/ "./node_modules/@wordpress/keyboard-shortcuts/build-module/hooks/use-shortcut-event-match.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/keyboard-shortcuts/build-module/hooks/use-shortcut-event-match.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useShortcutEventMatch; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/store/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Returns a function to check if a keyboard event matches a shortcut name.
 *
 * @return {Function} A function to check if a keyboard event matches a
 *                    predefined shortcut combination.
 */

function useShortcutEventMatch() {
  const {
    getAllShortcutKeyCombinations
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_2__.store);
  /**
   * A function to check if a keyboard event matches a predefined shortcut
   * combination.
   *
   * @param {string}        name  Shortcut name.
   * @param {KeyboardEvent} event Event to check.
   *
   * @return {boolean} True if the event matches any shortcuts, false if not.
   */

  function isMatch(name, event) {
    return getAllShortcutKeyCombinations(name).some(({
      modifier,
      character
    }) => {
      return _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.isKeyboardEvent[modifier](event, character);
    });
  }

  return isMatch;
}


/***/ }),

/***/ "./node_modules/@wordpress/keyboard-shortcuts/build-module/hooks/use-shortcut.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/keyboard-shortcuts/build-module/hooks/use-shortcut.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useShortcut; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_shortcut_event_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-shortcut-event-match */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/hooks/use-shortcut-event-match.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/context.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Attach a keyboard shortcut handler.
 *
 * @param {string}   name               Shortcut name.
 * @param {Function} callback           Shortcut callback.
 * @param {Object}   options            Shortcut options.
 * @param {boolean}  options.isDisabled Whether to disable to shortut.
 */

function useShortcut(name, callback, {
  isDisabled
} = {}) {
  const shortcuts = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.context);
  const isMatch = (0,_use_shortcut_event_match__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const callbackRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  callbackRef.current = callback;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isDisabled) {
      return;
    }

    function _callback(event) {
      if (isMatch(name, event)) {
        callbackRef.current(event);
      }
    }

    shortcuts.current.add(_callback);
    return () => {
      shortcuts.current.delete(_callback);
    };
  }, [name, isDisabled]);
}


/***/ }),

/***/ "./node_modules/@wordpress/keyboard-shortcuts/build-module/store/actions.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/keyboard-shortcuts/build-module/store/actions.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerShortcut": function() { return /* binding */ registerShortcut; },
/* harmony export */   "unregisterShortcut": function() { return /* binding */ unregisterShortcut; }
/* harmony export */ });
/** @typedef {import('@wordpress/keycodes').WPKeycodeModifier} WPKeycodeModifier */

/**
 * Keyboard key combination.
 *
 * @typedef {Object} WPShortcutKeyCombination
 *
 * @property {string}                      character Character.
 * @property {WPKeycodeModifier|undefined} modifier  Modifier.
 */

/**
 * Configuration of a registered keyboard shortcut.
 *
 * @typedef {Object} WPShortcutConfig
 *
 * @property {string}                     name           Shortcut name.
 * @property {string}                     category       Shortcut category.
 * @property {string}                     description    Shortcut description.
 * @property {WPShortcutKeyCombination}   keyCombination Shortcut key combination.
 * @property {WPShortcutKeyCombination[]} [aliases]      Shortcut aliases.
 */

/**
 * Returns an action object used to register a new keyboard shortcut.
 *
 * @param {WPShortcutConfig} config Shortcut config.
 *
 * @return {Object} action.
 */
function registerShortcut({
  name,
  category,
  description,
  keyCombination,
  aliases
}) {
  return {
    type: 'REGISTER_SHORTCUT',
    name,
    category,
    keyCombination,
    aliases,
    description
  };
}
/**
 * Returns an action object used to unregister a keyboard shortcut.
 *
 * @param {string} name Shortcut name.
 *
 * @return {Object} action.
 */

function unregisterShortcut(name) {
  return {
    type: 'UNREGISTER_SHORTCUT',
    name
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/keyboard-shortcuts/build-module/store/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/keyboard-shortcuts/build-module/store/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/store/selectors.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const STORE_NAME = 'core/keyboard-shortcuts';
/**
 * Store definition for the keyboard shortcuts namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/keyboard-shortcuts/build-module/store/reducer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/keyboard-shortcuts/build-module/store/reducer.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * Reducer returning the registered shortcuts
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function reducer(state = {}, action) {
  switch (action.type) {
    case 'REGISTER_SHORTCUT':
      return { ...state,
        [action.name]: {
          category: action.category,
          keyCombination: action.keyCombination,
          aliases: action.aliases,
          description: action.description
        }
      };

    case 'UNREGISTER_SHORTCUT':
      const {
        [action.name]: actionName,
        ...remainingState
      } = state;
      return remainingState;
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);


/***/ }),

/***/ "./node_modules/@wordpress/keyboard-shortcuts/build-module/store/selectors.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/keyboard-shortcuts/build-module/store/selectors.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllShortcutKeyCombinations": function() { return /* binding */ getAllShortcutKeyCombinations; },
/* harmony export */   "getAllShortcutRawKeyCombinations": function() { return /* binding */ getAllShortcutRawKeyCombinations; },
/* harmony export */   "getCategoryShortcuts": function() { return /* binding */ getCategoryShortcuts; },
/* harmony export */   "getShortcutAliases": function() { return /* binding */ getShortcutAliases; },
/* harmony export */   "getShortcutDescription": function() { return /* binding */ getShortcutDescription; },
/* harmony export */   "getShortcutKeyCombination": function() { return /* binding */ getShortcutKeyCombination; },
/* harmony export */   "getShortcutRepresentation": function() { return /* binding */ getShortcutRepresentation; }
/* harmony export */ });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/rememo.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/** @typedef {import('./actions').WPShortcutKeyCombination} WPShortcutKeyCombination */

/** @typedef {import('@wordpress/keycodes').WPKeycodeHandlerByModifier} WPKeycodeHandlerByModifier */

/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation.
 *
 * @type {Array<any>}
 */

const EMPTY_ARRAY = [];
/**
 * Shortcut formatting methods.
 *
 * @property {WPKeycodeHandlerByModifier} display     Display formatting.
 * @property {WPKeycodeHandlerByModifier} rawShortcut Raw shortcut formatting.
 * @property {WPKeycodeHandlerByModifier} ariaLabel   ARIA label formatting.
 */

const FORMATTING_METHODS = {
  display: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.displayShortcut,
  raw: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.rawShortcut,
  ariaLabel: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.shortcutAriaLabel
};
/**
 * Returns a string representing the key combination.
 *
 * @param {?WPShortcutKeyCombination} shortcut       Key combination.
 * @param {keyof FORMATTING_METHODS}  representation Type of representation
 *                                                   (display, raw, ariaLabel).
 *
 * @return {string?} Shortcut representation.
 */

function getKeyCombinationRepresentation(shortcut, representation) {
  if (!shortcut) {
    return null;
  }

  return shortcut.modifier ? FORMATTING_METHODS[representation][shortcut.modifier](shortcut.character) : shortcut.character;
}
/**
 * Returns the main key combination for a given shortcut name.
 *
 * @param {Object} state Global state.
 * @param {string} name  Shortcut name.
 *
 * @return {WPShortcutKeyCombination?} Key combination.
 */


function getShortcutKeyCombination(state, name) {
  return state[name] ? state[name].keyCombination : null;
}
/**
 * Returns a string representing the main key combination for a given shortcut name.
 *
 * @param {Object}                   state          Global state.
 * @param {string}                   name           Shortcut name.
 * @param {keyof FORMATTING_METHODS} representation Type of representation
 *                                                  (display, raw, ariaLabel).
 *
 * @return {string?} Shortcut representation.
 */

function getShortcutRepresentation(state, name, representation = 'display') {
  const shortcut = getShortcutKeyCombination(state, name);
  return getKeyCombinationRepresentation(shortcut, representation);
}
/**
 * Returns the shortcut description given its name.
 *
 * @param {Object} state Global state.
 * @param {string} name  Shortcut name.
 *
 * @return {string?} Shortcut description.
 */

function getShortcutDescription(state, name) {
  return state[name] ? state[name].description : null;
}
/**
 * Returns the aliases for a given shortcut name.
 *
 * @param {Object} state Global state.
 * @param {string} name  Shortcut name.
 *
 * @return {WPShortcutKeyCombination[]} Key combinations.
 */

function getShortcutAliases(state, name) {
  return state[name] && state[name].aliases ? state[name].aliases : EMPTY_ARRAY;
}
const getAllShortcutKeyCombinations = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, name) => {
  return [getShortcutKeyCombination(state, name), ...getShortcutAliases(state, name)].filter(Boolean);
}, (state, name) => [state[name]]);
/**
 * Returns the raw representation of all the keyboard combinations of a given shortcut name.
 *
 * @param {Object} state Global state.
 * @param {string} name  Shortcut name.
 *
 * @return {string[]} Shortcuts.
 */

const getAllShortcutRawKeyCombinations = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, name) => {
  return getAllShortcutKeyCombinations(state, name).map(combination => getKeyCombinationRepresentation(combination, 'raw'));
}, (state, name) => [state[name]]);
/**
 * Returns the shortcut names list for a given category name.
 *
 * @param {Object} state Global state.
 * @param {string} name  Category name.
 *
 * @return {string[]} Shortcut names.
 */

const getCategoryShortcuts = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, categoryName) => {
  return Object.entries(state).filter(([, shortcut]) => shortcut.category === categoryName).map(([name]) => name);
}, state => [state]);


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

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "./node_modules/rememo/rememo.js":
/*!***************************************!*\
  !*** ./node_modules/rememo/rememo.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });


/** @typedef {(...args: any[]) => *[]} GetDependants */

/** @typedef {() => void} Clear */

/**
 * @typedef {{
 *   getDependants: GetDependants,
 *   clear: Clear
 * }} EnhancedSelector
 */

/**
 * Internal cache entry.
 *
 * @typedef CacheNode
 *
 * @property {?CacheNode|undefined} [prev] Previous node.
 * @property {?CacheNode|undefined} [next] Next node.
 * @property {*[]} args Function arguments for cache entry.
 * @property {*} val Function result.
 */

/**
 * @typedef Cache
 *
 * @property {Clear} clear Function to clear cache.
 * @property {boolean} [isUniqueByDependants] Whether dependants are valid in
 * considering cache uniqueness. A cache is unique if dependents are all arrays
 * or objects.
 * @property {CacheNode?} [head] Cache head.
 * @property {*[]} [lastDependants] Dependants from previous invocation.
 */

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {{}}
 */
var LEAF_KEY = {};

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @template T
 *
 * @param {T} value Value to return.
 *
 * @return {[T]} Value returned as entry in array.
 */
function arrayOf(value) {
	return [value];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike(value) {
	return !!value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Cache} Cache object.
 */
function createCache() {
	/** @type {Cache} */
	var cache = {
		clear: function () {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {*[]} a First array.
 * @param {*[]} b Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual(a, b, fromIndex) {
	var i;

	if (a.length !== b.length) {
		return false;
	}

	for (i = fromIndex; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @template {(...args: *[]) => *} S
 *
 * @param {S} selector Selector function.
 * @param {GetDependants=} getDependants Dependant getter returning an array of
 * references used in cache bust consideration.
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector, getDependants) {
	/** @type {WeakMap<*,*>} */
	var rootCache;

	/** @type {GetDependants} */
	var normalizedGetDependants = getDependants ? getDependants : arrayOf;

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {*[]} dependants Selector dependants.
	 *
	 * @return {Cache} Cache object.
	 */
	function getCache(dependants) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i,
			dependant,
			map,
			cache;

		for (i = 0; i < dependants.length; i++) {
			dependant = dependants[i];

			// Can only compose WeakMap from object-like key.
			if (!isObjectLike(dependant)) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if (caches.has(dependant)) {
				// Traverse into nested WeakMap.
				caches = caches.get(dependant);
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set(dependant, map);
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if (!caches.has(LEAF_KEY)) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set(LEAF_KEY, cache);
		}

		return caches.get(LEAF_KEY);
	}

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = new WeakMap();
	}

	/* eslint-disable jsdoc/check-param-names */
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {*}    source    Source object for derivation.
	 * @param {...*} extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	/* eslint-enable jsdoc/check-param-names */
	function callSelector(/* source, ...extraArgs */) {
		var len = arguments.length,
			cache,
			node,
			i,
			args,
			dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array(len);
		for (i = 0; i < len; i++) {
			args[i] = arguments[i];
		}

		dependants = normalizedGetDependants.apply(null, args);
		cache = getCache(dependants);

		// If not guaranteed uniqueness by dependants (primitive type), shallow
		// compare against last dependants and, if references have changed,
		// destroy cache to recalculate result.
		if (!cache.isUniqueByDependants) {
			if (
				cache.lastDependants &&
				!isShallowEqual(dependants, cache.lastDependants, 0)
			) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while (node) {
			// Check whether node arguments match arguments
			if (!isShallowEqual(node.args, args, 1)) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if (node !== cache.head) {
				// Adjust siblings to point to each other.
				/** @type {CacheNode} */ (node.prev).next = node.next;
				if (node.next) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				/** @type {CacheNode} */ (cache.head).prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = /** @type {CacheNode} */ ({
			// Generate the result from original function
			val: selector.apply(null, args),
		});

		// Avoid including the source object in the cache.
		args[0] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if (cache.head) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = normalizedGetDependants;
	callSelector.clear = clear;
	clear();

	return /** @type {S & EnhancedSelector} */ (callSelector);
}


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
  !*** ./node_modules/@wordpress/keyboard-shortcuts/build-module/index.js ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortcutProvider": function() { return /* reexport safe */ _components_shortcut_provider__WEBPACK_IMPORTED_MODULE_2__.ShortcutProvider; },
/* harmony export */   "__unstableUseShortcutEventMatch": function() { return /* reexport safe */ _hooks_use_shortcut_event_match__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.store; },
/* harmony export */   "useShortcut": function() { return /* reexport safe */ _hooks_use_shortcut__WEBPACK_IMPORTED_MODULE_1__["default"]; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/store/index.js");
/* harmony import */ var _hooks_use_shortcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/use-shortcut */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/hooks/use-shortcut.js");
/* harmony import */ var _components_shortcut_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shortcut-provider */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/components/shortcut-provider.js");
/* harmony import */ var _hooks_use_shortcut_event_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/use-shortcut-event-match */ "./node_modules/@wordpress/keyboard-shortcuts/build-module/hooks/use-shortcut-event-match.js");





}();
(window.wp = window.wp || {}).keyboardShortcuts = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=keyboard-shortcuts.js.map