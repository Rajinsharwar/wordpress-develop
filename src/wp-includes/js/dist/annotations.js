/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/annotations/build-module/block/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/build-module/block/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/constants */ "./node_modules/@wordpress/annotations/build-module/store/constants.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Adds annotation className to the block-list-block component.
 *
 * @param {Object} OriginalComponent The original BlockListBlock component.
 * @return {Object} The enhanced component.
 */

const addAnnotationClassName = OriginalComponent => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)((select, {
    clientId,
    className
  }) => {
    const annotations = select(_store_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME).__experimentalGetAnnotationsForBlock(clientId);

    return {
      className: annotations.map(annotation => {
        return 'is-annotated-by-' + annotation.source;
      }).concat(className).filter(Boolean).join(' ')
    };
  })(OriginalComponent);
};

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockListBlock', 'core/annotations', addAnnotationClassName);


/***/ }),

/***/ "./node_modules/@wordpress/annotations/build-module/format/annotation.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/build-module/format/annotation.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "annotation": function() { return /* binding */ annotation; },
/* harmony export */   "applyAnnotations": function() { return /* binding */ applyAnnotations; },
/* harmony export */   "removeAnnotations": function() { return /* binding */ removeAnnotations; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/constants */ "./node_modules/@wordpress/annotations/build-module/store/constants.js");
/**
 * WordPress dependencies
 */


const FORMAT_NAME = 'core/annotation';
const ANNOTATION_ATTRIBUTE_PREFIX = 'annotation-text-';
/**
 * Internal dependencies
 */


/**
 * Applies given annotations to the given record.
 *
 * @param {Object} record      The record to apply annotations to.
 * @param {Array}  annotations The annotation to apply.
 * @return {Object} A record with the annotations applied.
 */

function applyAnnotations(record, annotations = []) {
  annotations.forEach(annotation => {
    let {
      start,
      end
    } = annotation;

    if (start > record.text.length) {
      start = record.text.length;
    }

    if (end > record.text.length) {
      end = record.text.length;
    }

    const className = ANNOTATION_ATTRIBUTE_PREFIX + annotation.source;
    const id = ANNOTATION_ATTRIBUTE_PREFIX + annotation.id;
    record = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.applyFormat)(record, {
      type: FORMAT_NAME,
      attributes: {
        className,
        id
      }
    }, start, end);
  });
  return record;
}
/**
 * Removes annotations from the given record.
 *
 * @param {Object} record Record to remove annotations from.
 * @return {Object} The cleaned record.
 */

function removeAnnotations(record) {
  return (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_1__.removeFormat)(record, 'core/annotation', 0, record.text.length);
}
/**
 * Retrieves the positions of annotations inside an array of formats.
 *
 * @param {Array} formats Formats with annotations in there.
 * @return {Object} ID keyed positions of annotations.
 */

function retrieveAnnotationPositions(formats) {
  const positions = {};
  formats.forEach((characterFormats, i) => {
    characterFormats = characterFormats || [];
    characterFormats = characterFormats.filter(format => format.type === FORMAT_NAME);
    characterFormats.forEach(format => {
      let {
        id
      } = format.attributes;
      id = id.replace(ANNOTATION_ATTRIBUTE_PREFIX, '');

      if (!positions.hasOwnProperty(id)) {
        positions[id] = {
          start: i
        };
      } // Annotations refer to positions between characters.
      // Formats refer to the character themselves.
      // So we need to adjust for that here.


      positions[id].end = i + 1;
    });
  });
  return positions;
}
/**
 * Updates annotations in the state based on positions retrieved from RichText.
 *
 * @param {Array}    annotations                   The annotations that are currently applied.
 * @param {Array}    positions                     The current positions of the given annotations.
 * @param {Object}   actions
 * @param {Function} actions.removeAnnotation      Function to remove an annotation from the state.
 * @param {Function} actions.updateAnnotationRange Function to update an annotation range in the state.
 */


function updateAnnotationsWithPositions(annotations, positions, {
  removeAnnotation,
  updateAnnotationRange
}) {
  annotations.forEach(currentAnnotation => {
    const position = positions[currentAnnotation.id]; // If we cannot find an annotation, delete it.

    if (!position) {
      // Apparently the annotation has been removed, so remove it from the state:
      // Remove...
      removeAnnotation(currentAnnotation.id);
      return;
    }

    const {
      start,
      end
    } = currentAnnotation;

    if (start !== position.start || end !== position.end) {
      updateAnnotationRange(currentAnnotation.id, position.start, position.end);
    }
  });
}

const annotation = {
  name: FORMAT_NAME,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Annotation'),
  tagName: 'mark',
  className: 'annotation-text',
  attributes: {
    className: 'class',
    id: 'id'
  },

  edit() {
    return null;
  },

  __experimentalGetPropsForEditableTreePreparation(select, {
    richTextIdentifier,
    blockClientId
  }) {
    return {
      annotations: select(_store_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME).__experimentalGetAnnotationsForRichText(blockClientId, richTextIdentifier)
    };
  },

  __experimentalCreatePrepareEditableTree({
    annotations
  }) {
    return (formats, text) => {
      if (annotations.length === 0) {
        return formats;
      }

      let record = {
        formats,
        text
      };
      record = applyAnnotations(record, annotations);
      return record.formats;
    };
  },

  __experimentalGetPropsForEditableTreeChangeHandler(dispatch) {
    return {
      removeAnnotation: dispatch(_store_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME).__experimentalRemoveAnnotation,
      updateAnnotationRange: dispatch(_store_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME).__experimentalUpdateAnnotationRange
    };
  },

  __experimentalCreateOnChangeEditableValue(props) {
    return formats => {
      const positions = retrieveAnnotationPositions(formats);
      const {
        removeAnnotation,
        updateAnnotationRange,
        annotations
      } = props;
      updateAnnotationsWithPositions(annotations, positions, {
        removeAnnotation,
        updateAnnotationRange
      });
    };
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/annotations/build-module/format/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/build-module/format/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annotation */ "./node_modules/@wordpress/annotations/build-module/format/annotation.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


const {
  name,
  ...settings
} = _annotation__WEBPACK_IMPORTED_MODULE_1__.annotation;
(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(name, settings);


/***/ }),

/***/ "./node_modules/@wordpress/annotations/build-module/store/actions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/build-module/store/actions.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalAddAnnotation": function() { return /* binding */ __experimentalAddAnnotation; },
/* harmony export */   "__experimentalRemoveAnnotation": function() { return /* binding */ __experimentalRemoveAnnotation; },
/* harmony export */   "__experimentalRemoveAnnotationsBySource": function() { return /* binding */ __experimentalRemoveAnnotationsBySource; },
/* harmony export */   "__experimentalUpdateAnnotationRange": function() { return /* binding */ __experimentalUpdateAnnotationRange; }
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/v4.js");
/**
 * External dependencies
 */

/**
 * @typedef WPAnnotationRange
 *
 * @property {number} start The offset where the annotation should start.
 * @property {number} end   The offset where the annotation should end.
 */

/**
 * Adds an annotation to a block.
 *
 * The `block` attribute refers to a block ID that needs to be annotated.
 * `isBlockAnnotation` controls whether or not the annotation is a block
 * annotation. The `source` is the source of the annotation, this will be used
 * to identity groups of annotations.
 *
 * The `range` property is only relevant if the selector is 'range'.
 *
 * @param {Object}            annotation                    The annotation to add.
 * @param {string}            annotation.blockClientId      The blockClientId to add the annotation to.
 * @param {string}            annotation.richTextIdentifier Identifier for the RichText instance the annotation applies to.
 * @param {WPAnnotationRange} annotation.range              The range at which to apply this annotation.
 * @param {string}            [annotation.selector="range"] The way to apply this annotation.
 * @param {string}            [annotation.source="default"] The source that added the annotation.
 * @param {string}            [annotation.id]               The ID the annotation should have. Generates a UUID by default.
 *
 * @return {Object} Action object.
 */

function __experimentalAddAnnotation({
  blockClientId,
  richTextIdentifier = null,
  range = null,
  selector = 'range',
  source = 'default',
  id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
}) {
  const action = {
    type: 'ANNOTATION_ADD',
    id,
    blockClientId,
    richTextIdentifier,
    source,
    selector
  };

  if (selector === 'range') {
    action.range = range;
  }

  return action;
}
/**
 * Removes an annotation with a specific ID.
 *
 * @param {string} annotationId The annotation to remove.
 *
 * @return {Object} Action object.
 */

function __experimentalRemoveAnnotation(annotationId) {
  return {
    type: 'ANNOTATION_REMOVE',
    annotationId
  };
}
/**
 * Updates the range of an annotation.
 *
 * @param {string} annotationId ID of the annotation to update.
 * @param {number} start        The start of the new range.
 * @param {number} end          The end of the new range.
 *
 * @return {Object} Action object.
 */

function __experimentalUpdateAnnotationRange(annotationId, start, end) {
  return {
    type: 'ANNOTATION_UPDATE_RANGE',
    annotationId,
    start,
    end
  };
}
/**
 * Removes all annotations of a specific source.
 *
 * @param {string} source The source to remove.
 *
 * @return {Object} Action object.
 */

function __experimentalRemoveAnnotationsBySource(source) {
  return {
    type: 'ANNOTATION_REMOVE_SOURCE',
    source
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/annotations/build-module/store/constants.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/build-module/store/constants.js ***!
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
const STORE_NAME = 'core/annotations';


/***/ }),

/***/ "./node_modules/@wordpress/annotations/build-module/store/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/build-module/store/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/annotations/build-module/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/annotations/build-module/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/annotations/build-module/store/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/annotations/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




/**
 * Module Constants
 */


/**
 * Store definition for the annotations namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/annotations/build-module/store/reducer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/build-module/store/reducer.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "annotations": function() { return /* binding */ annotations; }
/* harmony export */ });
/**
 * Filters an array based on the predicate, but keeps the reference the same if
 * the array hasn't changed.
 *
 * @param {Array}    collection The collection to filter.
 * @param {Function} predicate  Function that determines if the item should stay
 *                              in the array.
 * @return {Array} Filtered array.
 */
function filterWithReference(collection, predicate) {
  const filteredCollection = collection.filter(predicate);
  return collection.length === filteredCollection.length ? collection : filteredCollection;
}
/**
 * Creates a new object with the same keys, but with `callback()` called as
 * a transformer function on each of the values.
 *
 * @param {Object}   obj      The object to transform.
 * @param {Function} callback The function to transform each object value.
 * @return {Array} Transformed object.
 */


const mapValues = (obj, callback) => Object.entries(obj).reduce((acc, [key, value]) => ({ ...acc,
  [key]: callback(value)
}), {});
/**
 * Verifies whether the given annotations is a valid annotation.
 *
 * @param {Object} annotation The annotation to verify.
 * @return {boolean} Whether the given annotation is valid.
 */


function isValidAnnotationRange(annotation) {
  return typeof annotation.start === 'number' && typeof annotation.end === 'number' && annotation.start <= annotation.end;
}
/**
 * Reducer managing annotations.
 *
 * @param {Object} state  The annotations currently shown in the editor.
 * @param {Object} action Dispatched action.
 *
 * @return {Array} Updated state.
 */


function annotations(state = {}, action) {
  var _state$blockClientId;

  switch (action.type) {
    case 'ANNOTATION_ADD':
      const blockClientId = action.blockClientId;
      const newAnnotation = {
        id: action.id,
        blockClientId,
        richTextIdentifier: action.richTextIdentifier,
        source: action.source,
        selector: action.selector,
        range: action.range
      };

      if (newAnnotation.selector === 'range' && !isValidAnnotationRange(newAnnotation.range)) {
        return state;
      }

      const previousAnnotationsForBlock = (_state$blockClientId = state?.[blockClientId]) !== null && _state$blockClientId !== void 0 ? _state$blockClientId : [];
      return { ...state,
        [blockClientId]: [...previousAnnotationsForBlock, newAnnotation]
      };

    case 'ANNOTATION_REMOVE':
      return mapValues(state, annotationsForBlock => {
        return filterWithReference(annotationsForBlock, annotation => {
          return annotation.id !== action.annotationId;
        });
      });

    case 'ANNOTATION_UPDATE_RANGE':
      return mapValues(state, annotationsForBlock => {
        let hasChangedRange = false;
        const newAnnotations = annotationsForBlock.map(annotation => {
          if (annotation.id === action.annotationId) {
            hasChangedRange = true;
            return { ...annotation,
              range: {
                start: action.start,
                end: action.end
              }
            };
          }

          return annotation;
        });
        return hasChangedRange ? newAnnotations : annotationsForBlock;
      });

    case 'ANNOTATION_REMOVE_SOURCE':
      return mapValues(state, annotationsForBlock => {
        return filterWithReference(annotationsForBlock, annotation => {
          return annotation.source !== action.source;
        });
      });
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = (annotations);


/***/ }),

/***/ "./node_modules/@wordpress/annotations/build-module/store/selectors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/build-module/store/selectors.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalGetAllAnnotationsForBlock": function() { return /* binding */ __experimentalGetAllAnnotationsForBlock; },
/* harmony export */   "__experimentalGetAnnotations": function() { return /* binding */ __experimentalGetAnnotations; },
/* harmony export */   "__experimentalGetAnnotationsForBlock": function() { return /* binding */ __experimentalGetAnnotationsForBlock; },
/* harmony export */   "__experimentalGetAnnotationsForRichText": function() { return /* binding */ __experimentalGetAnnotationsForRichText; }
/* harmony export */ });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/rememo.js");
/**
 * External dependencies
 */

/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 *
 * @type {Array}
 */

const EMPTY_ARRAY = [];
/**
 * Returns the annotations for a specific client ID.
 *
 * @param {Object} state    Editor state.
 * @param {string} clientId The ID of the block to get the annotations for.
 *
 * @return {Array} The annotations applicable to this block.
 */

const __experimentalGetAnnotationsForBlock = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, blockClientId) => {
  var _state$blockClientId;

  return ((_state$blockClientId = state?.[blockClientId]) !== null && _state$blockClientId !== void 0 ? _state$blockClientId : []).filter(annotation => {
    return annotation.selector === 'block';
  });
}, (state, blockClientId) => {
  var _state$blockClientId2;

  return [(_state$blockClientId2 = state?.[blockClientId]) !== null && _state$blockClientId2 !== void 0 ? _state$blockClientId2 : EMPTY_ARRAY];
});
function __experimentalGetAllAnnotationsForBlock(state, blockClientId) {
  var _state$blockClientId3;

  return (_state$blockClientId3 = state?.[blockClientId]) !== null && _state$blockClientId3 !== void 0 ? _state$blockClientId3 : EMPTY_ARRAY;
}
/**
 * Returns the annotations that apply to the given RichText instance.
 *
 * Both a blockClientId and a richTextIdentifier are required. This is because
 * a block might have multiple `RichText` components. This does mean that every
 * block needs to implement annotations itself.
 *
 * @param {Object} state              Editor state.
 * @param {string} blockClientId      The client ID for the block.
 * @param {string} richTextIdentifier Unique identifier that identifies the given RichText.
 * @return {Array} All the annotations relevant for the `RichText`.
 */

const __experimentalGetAnnotationsForRichText = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])((state, blockClientId, richTextIdentifier) => {
  var _state$blockClientId4;

  return ((_state$blockClientId4 = state?.[blockClientId]) !== null && _state$blockClientId4 !== void 0 ? _state$blockClientId4 : []).filter(annotation => {
    return annotation.selector === 'range' && richTextIdentifier === annotation.richTextIdentifier;
  }).map(annotation => {
    const {
      range,
      ...other
    } = annotation;
    return { ...range,
      ...other
    };
  });
}, (state, blockClientId) => {
  var _state$blockClientId5;

  return [(_state$blockClientId5 = state?.[blockClientId]) !== null && _state$blockClientId5 !== void 0 ? _state$blockClientId5 : EMPTY_ARRAY];
});
/**
 * Returns all annotations in the editor state.
 *
 * @param {Object} state Editor state.
 * @return {Array} All annotations currently applied.
 */

function __experimentalGetAnnotations(state) {
  return Object.values(state).flat();
}


/***/ }),

/***/ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rng; }
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/@wordpress/annotations/node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["richText"];

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
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/annotations/build-module/index.js ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_2__.store; }
/* harmony export */ });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./node_modules/@wordpress/annotations/build-module/format/index.js");
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ "./node_modules/@wordpress/annotations/build-module/block/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/annotations/build-module/store/index.js");
/**
 * Internal dependencies
 */




}();
(window.wp = window.wp || {}).annotations = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=annotations.js.map