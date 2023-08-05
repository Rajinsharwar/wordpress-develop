/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/index.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WidgetAreaEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inner_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inner-blocks */ "./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/inner-blocks.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/* harmony import */ var _use_is_dragging_within__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-is-dragging-within */ "./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/use-is-dragging-within.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




/** @typedef {import('@wordpress/element').RefObject} RefObject */

function WidgetAreaEdit({
  clientId,
  className,
  attributes: {
    id,
    name
  }
}) {
  const isOpen = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getIsWidgetAreaOpen(clientId), [clientId]);
  const {
    setIsWidgetAreaOpen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  const wrapper = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const setOpen = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(openState => setIsWidgetAreaOpen(clientId, openState), [clientId]);
  const isDragging = useIsDragging(wrapper);
  const isDraggingWithin = (0,_use_is_dragging_within__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapper);
  const [openedWhileDragging, setOpenedWhileDragging] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isDragging) {
      setOpenedWhileDragging(false);
      return;
    }

    if (isDraggingWithin && !isOpen) {
      setOpen(true);
      setOpenedWhileDragging(true);
    } else if (!isDraggingWithin && isOpen && openedWhileDragging) {
      setOpen(false);
    }
  }, [isOpen, isDragging, isDraggingWithin, openedWhileDragging]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    className: className,
    ref: wrapper
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: name,
    opened: isOpen,
    onToggle: () => {
      setIsWidgetAreaOpen(clientId, !isOpen);
    },
    scrollAfterOpen: !isDragging
  }, ({
    opened
  }) => // This is required to ensure LegacyWidget blocks are not
  // unmounted when the panel is collapsed. Unmounting legacy
  // widgets may have unintended consequences (e.g.  TinyMCE
  // not being properly reinitialized)
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableDisclosureContent, {
    className: "wp-block-widget-area__panel-body-content",
    visible: opened
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.EntityProvider, {
    kind: "root",
    type: "postType",
    id: `widget-area-${id}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inner_blocks__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id
  })))));
}
/**
 * A React hook to determine if dragging is active.
 *
 * @param {RefObject<HTMLElement>} elementRef The target elementRef object.
 *
 * @return {boolean} Is dragging within the entire document.
 */

const useIsDragging = elementRef => {
  const [isDragging, setIsDragging] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      ownerDocument
    } = elementRef.current;

    function handleDragStart() {
      setIsDragging(true);
    }

    function handleDragEnd() {
      setIsDragging(false);
    }

    ownerDocument.addEventListener('dragstart', handleDragStart);
    ownerDocument.addEventListener('dragend', handleDragEnd);
    return () => {
      ownerDocument.removeEventListener('dragstart', handleDragStart);
      ownerDocument.removeEventListener('dragend', handleDragEnd);
    };
  }, []);
  return isDragging;
};


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/inner-blocks.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/inner-blocks.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WidgetAreaInnerBlocks; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_is_dragging_within__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-is-dragging-within */ "./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/use-is-dragging-within.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function WidgetAreaInnerBlocks({
  id
}) {
  const [blocks, onInput, onChange] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityBlockEditor)('root', 'postType');
  const innerBlocksRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isDraggingWithinInnerBlocks = (0,_use_is_dragging_within__WEBPACK_IMPORTED_MODULE_4__["default"])(innerBlocksRef);
  const shouldHighlightDropZone = isDraggingWithinInnerBlocks; // Using the experimental hook so that we can control the className of the element.

  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps)({
    ref: innerBlocksRef
  }, {
    value: blocks,
    onInput,
    onChange,
    templateLock: false,
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.ButtonBlockAppender
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-widget-area-id": id,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-widget-area__inner-blocks block-editor-inner-blocks editor-styles-wrapper', {
      'wp-block-widget-area__highlight-drop-zone': shouldHighlightDropZone
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ...innerBlocksProps
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/use-is-dragging-within.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/use-is-dragging-within.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {import('@wordpress/element').RefObject} RefObject */

/**
 * A React hook to determine if it's dragging within the target element.
 *
 * @param {RefObject<HTMLElement>} elementRef The target elementRef object.
 *
 * @return {boolean} Is dragging within the target element.
 */

const useIsDraggingWithin = elementRef => {
  const [isDraggingWithin, setIsDraggingWithin] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      ownerDocument
    } = elementRef.current;

    function handleDragStart(event) {
      // Check the first time when the dragging starts.
      handleDragEnter(event);
    } // Set to false whenever the user cancel the drag event by either releasing the mouse or press Escape.


    function handleDragEnd() {
      setIsDraggingWithin(false);
    }

    function handleDragEnter(event) {
      // Check if the current target is inside the item element.
      if (elementRef.current.contains(event.target)) {
        setIsDraggingWithin(true);
      } else {
        setIsDraggingWithin(false);
      }
    } // Bind these events to the document to catch all drag events.
    // Ideally, we can also use `event.relatedTarget`, but sadly that doesn't work in Safari.


    ownerDocument.addEventListener('dragstart', handleDragStart);
    ownerDocument.addEventListener('dragend', handleDragEnd);
    ownerDocument.addEventListener('dragenter', handleDragEnter);
    return () => {
      ownerDocument.removeEventListener('dragstart', handleDragStart);
      ownerDocument.removeEventListener('dragend', handleDragEnd);
      ownerDocument.removeEventListener('dragenter', handleDragEnter);
    };
  }, []);
  return isDraggingWithin;
};

/* harmony default export */ __webpack_exports__["default"] = (useIsDraggingWithin);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

const metadata = {
  name: "core/widget-area",
  category: "widgets",
  attributes: {
    id: {
      type: "string"
    },
    name: {
      type: "string"
    }
  },
  supports: {
    html: false,
    inserter: false,
    customClassName: false,
    reusable: false,
    __experimentalToolbar: false,
    __experimentalParentSelector: false,
    __experimentalDisableBlockOverlay: true
  },
  editorStyle: "wp-block-widget-area-editor",
  style: "wp-block-widget-area"
};

const {
  name
} = metadata;

const settings = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Widget Area'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A widget area container.'),
  __experimentalLabel: ({
    name: label
  }) => label,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
};


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/error-boundary/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/error-boundary/index.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorBoundary; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */







function CopyButton({
  text,
  children
}) {
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useCopyToClipboard)(text);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    ref: ref
  }, children);
}

function ErrorBoundaryWarning({
  message,
  error
}) {
  const actions = [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CopyButton, {
    key: "copy-error",
    text: error.stack
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Error'))];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Warning, {
    className: "edit-widgets-error-boundary",
    actions: actions
  }, message);
}

class ErrorBoundary extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.doAction)('editor.ErrorBoundary.errorLogged', error);
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorBoundaryWarning, {
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The editor has encountered an unexpected error.'),
      error: this.state.error
    });
  }

}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/header/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/header/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/list-view.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _save_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../save-button */ "./node_modules/@wordpress/edit-widgets/build-module/components/save-button/index.js");
/* harmony import */ var _undo_redo_undo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./undo-redo/undo */ "./node_modules/@wordpress/edit-widgets/build-module/components/header/undo-redo/undo.js");
/* harmony import */ var _undo_redo_redo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./undo-redo/redo */ "./node_modules/@wordpress/edit-widgets/build-module/components/header/undo-redo/redo.js");
/* harmony import */ var _more_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../more-menu */ "./node_modules/@wordpress/edit-widgets/build-module/components/more-menu/index.js");
/* harmony import */ var _hooks_use_last_selected_widget_area__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-last-selected-widget-area */ "./node_modules/@wordpress/edit-widgets/build-module/hooks/use-last-selected-widget-area.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-widgets/build-module/lock-unlock.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */








const {
  useShouldContextualToolbarShow
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_13__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.privateApis);

function Header() {
  const isMediumViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useViewportMatch)('medium');
  const inserterButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const widgetAreaClientId = (0,_hooks_use_last_selected_widget_area__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const isLastSelectedWidgetAreaOpen = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_12__.store).getIsWidgetAreaOpen(widgetAreaClientId), [widgetAreaClientId]);
  const {
    isInserterOpen,
    isListViewOpen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      isInserterOpened,
      isListViewOpened
    } = select(_store__WEBPACK_IMPORTED_MODULE_12__.store);
    return {
      isInserterOpen: isInserterOpened(),
      isListViewOpen: isListViewOpened()
    };
  }, []);
  const {
    setIsWidgetAreaOpen,
    setIsInserterOpened,
    setIsListViewOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_12__.store);
  const {
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);

  const handleClick = () => {
    if (isInserterOpen) {
      // Focusing the inserter button closes the inserter popover.
      setIsInserterOpened(false);
    } else {
      if (!isLastSelectedWidgetAreaOpen) {
        // Select the last selected block if hasn't already.
        selectBlock(widgetAreaClientId); // Open the last selected widget area when opening the inserter.

        setIsWidgetAreaOpen(widgetAreaClientId, true);
      } // The DOM updates resulting from selectBlock() and setIsInserterOpened() calls are applied the
      // same tick and pretty much in a random order. The inserter is closed if any other part of the
      // app receives focus. If selectBlock() happens to take effect after setIsInserterOpened() then
      // the inserter is visible for a brief moment and then gets auto-closed due to focus moving to
      // the selected block.


      window.requestAnimationFrame(() => setIsInserterOpened(true));
    }
  };

  const toggleListView = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setIsListViewOpened(!isListViewOpen), [setIsListViewOpened, isListViewOpen]);
  const {
    shouldShowContextualToolbar,
    canFocusHiddenToolbar,
    fixedToolbarCanBeFocused
  } = useShouldContextualToolbarShow(); // If there's a block toolbar to be focused, disable the focus shortcut for the document toolbar.
  // There's a fixed block toolbar when the fixed toolbar option is enabled or when the browser width is less than the large viewport.

  const blockToolbarCanBeFocused = shouldShowContextualToolbar || canFocusHiddenToolbar || fixedToolbarCanBeFocused;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-widgets-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-widgets-header__navigable-toolbar-wrapper"
  }, isMediumViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-widgets-header__title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Widgets')), !isMediumViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.VisuallyHidden, {
    as: "h1",
    className: "edit-widgets-header__title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Widgets')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.NavigableToolbar, {
    className: "edit-widgets-header-toolbar",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Document tools'),
    shouldUseKeyboardFocusShortcut: !blockToolbarCanBeFocused
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, {
    ref: inserterButton,
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
    className: "edit-widgets-header-toolbar__inserter-toggle",
    variant: "primary",
    isPressed: isInserterOpen,
    onMouseDown: event => {
      event.preventDefault();
    },
    onClick: handleClick,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"]
    /* translators: button label text should, if possible, be under 16
    characters. */
    ,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Toggle block inserter', 'Generic label for block inserter button')
  }), isMediumViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_undo_redo_undo__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_undo_redo_redo__WEBPACK_IMPORTED_MODULE_9__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, {
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button,
    className: "edit-widgets-header-toolbar__list-view-toggle",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__["default"],
    isPressed: isListViewOpen
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('List View'),
    onClick: toggleListView
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-widgets-header__actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_save_button__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.PinnedItems.Slot, {
    scope: "core/edit-widgets"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_more_menu__WEBPACK_IMPORTED_MODULE_10__["default"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/header/undo-redo/redo.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/header/undo-redo/redo.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RedoButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function RedoButton() {
  const shortcut = (0,_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.isAppleOS)() ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.primaryShift('z') : _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.primary('y');
  const hasRedo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).hasRedo(), []);
  const {
    redo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Redo'),
    shortcut: shortcut // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/header/undo-redo/undo.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/header/undo-redo/undo.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UndoButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function UndoButton() {
  const hasUndo = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).hasUndo(), []);
  const {
    undo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Undo'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/config.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/config.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textFormattingShortcuts": function() { return /* binding */ textFormattingShortcuts; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const textFormattingShortcuts = [{
  keyCombination: {
    modifier: 'primary',
    character: 'b'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make the selected text bold.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'i'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make the selected text italic.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'k'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Convert the selected text into a link.')
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'k'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove a link.')
}, {
  keyCombination: {
    character: '[['
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insert a link to a post or page.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'u'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Underline the selected text.')
}, {
  keyCombination: {
    modifier: 'access',
    character: 'd'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Strikethrough the selected text.')
}, {
  keyCombination: {
    modifier: 'access',
    character: 'x'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make the selected text inline code.')
}, {
  keyCombination: {
    modifier: 'access',
    character: '0'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Convert the current heading to a paragraph.')
}, {
  keyCombination: {
    modifier: 'access',
    character: '1-6'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Convert the current paragraph or heading to a heading of level 1 to 6.')
}];


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function DynamicShortcut({
  name
}) {
  const {
    keyCombination,
    description,
    aliases
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getShortcutKeyCombination,
      getShortcutDescription,
      getShortcutAliases
    } = select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.store);
    return {
      keyCombination: getShortcutKeyCombination(name),
      aliases: getShortcutAliases(name),
      description: getShortcutDescription(name)
    };
  }, [name]);

  if (!keyCombination) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_shortcut__WEBPACK_IMPORTED_MODULE_3__["default"], {
    keyCombination: keyCombination,
    description: description,
    aliases: aliases
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DynamicShortcut);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/index.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KeyboardShortcutHelpModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/config.js");
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js");
/* harmony import */ var _dynamic_shortcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-shortcut */ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





const ShortcutList = ({
  shortcuts
}) =>
/*
 * Disable reason: The `list` ARIA role is redundant but
 * Safari+VoiceOver won't announce the list otherwise.
 */

/* eslint-disable jsx-a11y/no-redundant-roles */
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
  className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-list",
  role: "list"
}, shortcuts.map((shortcut, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  className: "edit-widgets-keyboard-shortcut-help-modal__shortcut",
  key: index
}, typeof shortcut === 'string' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dynamic_shortcut__WEBPACK_IMPORTED_MODULE_8__["default"], {
  name: shortcut
}) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_shortcut__WEBPACK_IMPORTED_MODULE_7__["default"], { ...shortcut
}))))
/* eslint-enable jsx-a11y/no-redundant-roles */
;

const ShortcutSection = ({
  title,
  shortcuts,
  className
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-widgets-keyboard-shortcut-help-modal__section', className)
}, !!title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
  className: "edit-widgets-keyboard-shortcut-help-modal__section-title"
}, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutList, {
  shortcuts: shortcuts
}));

const ShortcutCategorySection = ({
  title,
  categoryName,
  additionalShortcuts = []
}) => {
  const categoryShortcuts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.store).getCategoryShortcuts(categoryName);
  }, [categoryName]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutSection, {
    title: title,
    shortcuts: categoryShortcuts.concat(additionalShortcuts)
  });
};

function KeyboardShortcutHelpModal({
  isModalActive,
  toggleModal
}) {
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.useShortcut)('core/edit-widgets/keyboard-shortcuts', toggleModal, {
    bindGlobal: true
  });

  if (!isModalActive) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: "edit-widgets-keyboard-shortcut-help-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Keyboard shortcuts'),
    onRequestClose: toggleModal
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutSection, {
    className: "edit-widgets-keyboard-shortcut-help-modal__main-shortcuts",
    shortcuts: ['core/edit-widgets/keyboard-shortcuts']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutCategorySection, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Global shortcuts'),
    categoryName: "global"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutCategorySection, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Selection shortcuts'),
    categoryName: "selection"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutCategorySection, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Block shortcuts'),
    categoryName: "block",
    additionalShortcuts: [{
      keyCombination: {
        character: '/'
      },
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Change the block type after adding a new paragraph.'),

      /* translators: The forward-slash character. e.g. '/'. */
      ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Forward-slash')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutSection, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text formatting'),
    shortcuts: _config__WEBPACK_IMPORTED_MODULE_6__.textFormattingShortcuts
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */



function KeyCombination({
  keyCombination,
  forceAriaLabel
}) {
  const shortcut = keyCombination.modifier ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.displayShortcutList[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const ariaLabel = keyCombination.modifier ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.shortcutAriaLabel[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const shortcuts = Array.isArray(shortcut) ? shortcut : [shortcut];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("kbd", {
    className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel
  }, shortcuts.map((character, index) => {
    if (character === '+') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: index
      }, character);
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("kbd", {
      key: index,
      className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-key"
    }, character);
  }));
}

function Shortcut({
  description,
  keyCombination,
  aliases = [],
  ariaLabel
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-description"
  }, description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-term"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(KeyCombination, {
    keyCombination: keyCombination,
    forceAriaLabel: ariaLabel
  }), aliases.map((alias, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(KeyCombination, {
    keyCombination: alias,
    forceAriaLabel: ariaLabel,
    key: index
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Shortcut);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcuts/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcuts/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



function KeyboardShortcuts() {
  const {
    redo,
    undo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    saveEditedWidgetAreas
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  const {
    replaceBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    getBlockName,
    getSelectedBlockClientId,
    getBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);

  const handleTextLevelShortcut = (event, level) => {
    event.preventDefault();
    const destinationBlockName = level === 0 ? 'core/paragraph' : 'core/heading';
    const currentClientId = getSelectedBlockClientId();

    if (currentClientId === null) {
      return;
    }

    const blockName = getBlockName(currentClientId);

    if (blockName !== 'core/paragraph' && blockName !== 'core/heading') {
      return;
    }

    const attributes = getBlockAttributes(currentClientId);
    const textAlign = blockName === 'core/paragraph' ? 'align' : 'textAlign';
    const destinationTextAlign = destinationBlockName === 'core/paragraph' ? 'align' : 'textAlign';
    replaceBlocks(currentClientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.createBlock)(destinationBlockName, {
      level,
      content: attributes.content,
      ...{
        [destinationTextAlign]: attributes[textAlign]
      }
    }));
  };

  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-widgets/undo', event => {
    undo();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-widgets/redo', event => {
    redo();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-widgets/save', event => {
    event.preventDefault();
    saveEditedWidgetAreas();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/edit-widgets/transform-heading-to-paragraph', event => handleTextLevelShortcut(event, 0));
  [1, 2, 3, 4, 5, 6].forEach(level => {
    //the loop is based off on a constant therefore
    //the hook will execute the same way every time
    //eslint-disable-next-line react-hooks/rules-of-hooks
    (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)(`core/edit-widgets/transform-paragraph-to-heading-${level}`, event => handleTextLevelShortcut(event, level));
  });
  return null;
}

function KeyboardShortcutsRegister() {
  // Registering the shortcuts.
  const {
    registerShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    registerShortcut({
      name: 'core/edit-widgets/undo',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/redo',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      },
      // Disable on Apple OS because it conflicts with the browser's
      // history shortcut. It's a fine alias for both Windows and Linux.
      // Since there's no conflict for Ctrl+Shift+Z on both Windows and
      // Linux, we keep it as the default for consistency.
      aliases: (0,_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.isAppleOS)() ? [] : [{
        modifier: 'primary',
        character: 'y'
      }]
    });
    registerShortcut({
      name: 'core/edit-widgets/save',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/keyboard-shortcuts',
      category: 'main',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Display these keyboard shortcuts.'),
      keyCombination: {
        modifier: 'access',
        character: 'h'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/next-region',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Navigate to the next part of the editor.'),
      keyCombination: {
        modifier: 'ctrl',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'n'
      }]
    });
    registerShortcut({
      name: 'core/edit-widgets/previous-region',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Navigate to the previous part of the editor.'),
      keyCombination: {
        modifier: 'ctrlShift',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'p'
      }, {
        modifier: 'ctrlShift',
        character: '~'
      }]
    });
    registerShortcut({
      name: 'core/edit-widgets/transform-heading-to-paragraph',
      category: 'block-library',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Transform heading to paragraph.'),
      keyCombination: {
        modifier: 'access',
        character: `0`
      }
    });
    [1, 2, 3, 4, 5, 6].forEach(level => {
      registerShortcut({
        name: `core/edit-widgets/transform-paragraph-to-heading-${level}`,
        category: 'block-library',
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Transform paragraph to heading.'),
        keyCombination: {
          modifier: 'access',
          character: `${level}`
        }
      });
    });
  }, [registerShortcut]);
  return null;
}

KeyboardShortcuts.Register = KeyboardShortcutsRegister;
/* harmony default export */ __webpack_exports__["default"] = (KeyboardShortcuts);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/layout/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/layout/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error-boundary */ "./node_modules/@wordpress/edit-widgets/build-module/components/error-boundary/index.js");
/* harmony import */ var _widget_areas_block_editor_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widget-areas-block-editor-provider */ "./node_modules/@wordpress/edit-widgets/build-module/components/widget-areas-block-editor-provider/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidebar */ "./node_modules/@wordpress/edit-widgets/build-module/components/sidebar/index.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interface */ "./node_modules/@wordpress/edit-widgets/build-module/components/layout/interface.js");
/* harmony import */ var _unsaved_changes_warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unsaved-changes-warning */ "./node_modules/@wordpress/edit-widgets/build-module/components/layout/unsaved-changes-warning.js");
/* harmony import */ var _welcome_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../welcome-guide */ "./node_modules/@wordpress/edit-widgets/build-module/components/welcome-guide/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */








function Layout({
  blockEditorSettings
}) {
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);

  function onPluginAreaError(name) {
    createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: %s: plugin name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The "%s" plugin has encountered an error and cannot be rendered.'), name));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_boundary__WEBPACK_IMPORTED_MODULE_6__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_widget_areas_block_editor_provider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    blockEditorSettings: blockEditorSettings
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_interface__WEBPACK_IMPORTED_MODULE_9__["default"], {
    blockEditorSettings: blockEditorSettings
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover.Slot, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__.PluginArea, {
    onError: onPluginAreaError
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_unsaved_changes_warning__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_welcome_guide__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/layout/interface.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/layout/interface.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header */ "./node_modules/@wordpress/edit-widgets/build-module/components/header/index.js");
/* harmony import */ var _widget_areas_block_editor_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widget-areas-block-editor-content */ "./node_modules/@wordpress/edit-widgets/build-module/components/widget-areas-block-editor-content/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/* harmony import */ var _secondary_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../secondary-sidebar */ "./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/index.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





const interfaceLabels = {
  /* translators: accessibility text for the widgets screen top bar landmark region. */
  header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Widgets top bar'),

  /* translators: accessibility text for the widgets screen content landmark region. */
  body: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Widgets and blocks'),

  /* translators: accessibility text for the widgets screen settings landmark region. */
  sidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Widgets settings'),

  /* translators: accessibility text for the widgets screen footer landmark region. */
  footer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Widgets footer')
};

function Interface({
  blockEditorSettings
}) {
  const isMobileViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useViewportMatch)('medium', '<');
  const isHugeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useViewportMatch)('huge', '>=');
  const {
    setIsInserterOpened,
    setIsListViewOpened,
    closeGeneralSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_10__.store);
  const {
    hasBlockBreadCrumbsEnabled,
    hasSidebarEnabled,
    isInserterOpened,
    isListViewOpened,
    previousShortcut,
    nextShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    hasSidebarEnabled: !!select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.store).getActiveComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_10__.store.name),
    isInserterOpened: !!select(_store__WEBPACK_IMPORTED_MODULE_10__.store).isInserterOpened(),
    isListViewOpened: !!select(_store__WEBPACK_IMPORTED_MODULE_10__.store).isListViewOpened(),
    hasBlockBreadCrumbsEnabled: !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__.store).get('core/edit-widgets', 'showBlockBreadcrumbs'),
    previousShortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__.store).getAllShortcutKeyCombinations('core/edit-widgets/previous-region'),
    nextShortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__.store).getAllShortcutKeyCombinations('core/edit-widgets/next-region')
  }), []); // Inserter and Sidebars are mutually exclusive

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (hasSidebarEnabled && !isHugeViewport) {
      setIsInserterOpened(false);
      setIsListViewOpened(false);
    }
  }, [hasSidebarEnabled, isHugeViewport]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((isInserterOpened || isListViewOpened) && !isHugeViewport) {
      closeGeneralSidebar();
    }
  }, [isInserterOpened, isListViewOpened, isHugeViewport]);
  const secondarySidebarLabel = isListViewOpened ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('List View') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Block Library');
  const hasSecondarySidebar = isListViewOpened || isInserterOpened;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.InterfaceSkeleton, {
    labels: { ...interfaceLabels,
      secondarySidebar: secondarySidebarLabel
    },
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    secondarySidebar: hasSecondarySidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_secondary_sidebar__WEBPACK_IMPORTED_MODULE_11__["default"], null),
    sidebar: hasSidebarEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.ComplementaryArea.Slot, {
      scope: "core/edit-widgets"
    }),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_widget_areas_block_editor_content__WEBPACK_IMPORTED_MODULE_9__["default"], {
      blockEditorSettings: blockEditorSettings
    })),
    footer: hasBlockBreadCrumbsEnabled && !isMobileViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-widgets-layout__footer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockBreadcrumb, {
      rootLabelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Widgets')
    })),
    shortcuts: {
      previous: previousShortcut,
      next: nextShortcut
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Interface);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/layout/unsaved-changes-warning.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/layout/unsaved-changes-warning.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UnsavedChangesWarning; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Warns the user if there are unsaved changes before leaving the editor.
 *
 * This is a duplicate of the component implemented in the editor package.
 * Duplicated here as edit-widgets doesn't depend on editor.
 *
 * @return {WPComponent} The component.
 */

function UnsavedChangesWarning() {
  const isDirty = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getEditedWidgetAreas
    } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
    const editedWidgetAreas = getEditedWidgetAreas();
    return editedWidgetAreas?.length > 0;
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    /**
     * Warns the user if there are unsaved changes before leaving the editor.
     *
     * @param {Event} event `beforeunload` event.
     *
     * @return {string | undefined} Warning prompt message, if unsaved changes exist.
     */
    const warnIfUnsavedChanges = event => {
      if (isDirty) {
        event.returnValue = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You have unsaved changes. If you proceed, they will be lost.');
        return event.returnValue;
      }
    };

    window.addEventListener('beforeunload', warnIfUnsavedChanges);
    return () => {
      window.removeEventListener('beforeunload', warnIfUnsavedChanges);
    };
  }, [isDirty]);
  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/more-menu/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/more-menu/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MoreMenu; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../keyboard-shortcut-help-modal */ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/index.js");
/* harmony import */ var _tools_more_menu_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools-more-menu-group */ "./node_modules/@wordpress/edit-widgets/build-module/components/more-menu/tools-more-menu-group.js");


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



function MoreMenu() {
  const [isKeyboardShortcutsModalActive, setIsKeyboardShortcutsModalVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleKeyboardShortcutsModal = () => setIsKeyboardShortcutsModalVisible(!isKeyboardShortcutsModalActive);

  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__.useShortcut)('core/edit-widgets/keyboard-shortcuts', toggleKeyboardShortcutsModal);
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.useViewportMatch)('medium');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.MoreMenuDropdown, null, onClose => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isLargeViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('View', 'noun')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.PreferenceToggleMenuItem, {
    scope: "core/edit-widgets",
    name: "fixedToolbar",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top toolbar'),
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Access all block and document tools in a single place'),
    messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top toolbar activated'),
    messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top toolbar deactivated')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tools')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    onClick: () => {
      setIsKeyboardShortcutsModalVisible(true);
    },
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.displayShortcut.access('h')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Keyboard shortcuts')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.PreferenceToggleMenuItem, {
    scope: "core/edit-widgets",
    name: "welcomeGuide",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Welcome Guide')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    role: "menuitem",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('https://wordpress.org/documentation/article/block-based-widgets-editor/'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Help'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
    as: "span"
  },
  /* translators: accessibility text */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('(opens in a new tab)'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tools_more_menu_group__WEBPACK_IMPORTED_MODULE_9__["default"].Slot, {
    fillProps: {
      onClose
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preferences')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.PreferenceToggleMenuItem, {
    scope: "core/edit-widgets",
    name: "keepCaretInsideBlock",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block'),
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Aids screen readers by stopping text caret from leaving blocks.'),
    messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block activated'),
    messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block deactivated')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.PreferenceToggleMenuItem, {
    scope: "core/edit-widgets",
    name: "themeStyles",
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Make the editor look like your theme.'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use theme styles')
  }), isLargeViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.PreferenceToggleMenuItem, {
    scope: "core/edit-widgets",
    name: "showBlockBreadcrumbs",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display block breadcrumbs'),
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Shows block breadcrumbs at the bottom of the editor.'),
    messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display block breadcrumbs activated'),
    messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display block breadcrumbs deactivated')
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isModalActive: isKeyboardShortcutsModalActive,
    toggleModal: toggleKeyboardShortcutsModal
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/more-menu/tools-more-menu-group.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/more-menu/tools-more-menu-group.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const {
  Fill: ToolsMoreMenuGroup,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('EditWidgetsToolsMoreMenuGroup');

ToolsMoreMenuGroup.Slot = ({
  fillProps
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Slot, {
  fillProps: fillProps
}, fills => fills.length > 0 && fills);

/* harmony default export */ __webpack_exports__["default"] = (ToolsMoreMenuGroup);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/notices/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/notices/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




function Notices() {
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    notices
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      notices: select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store).getNotices()
    };
  }, []);
  const dismissibleNotices = notices.filter(({
    isDismissible,
    type
  }) => isDismissible && type === 'default');
  const nonDismissibleNotices = notices.filter(({
    isDismissible,
    type
  }) => !isDismissible && type === 'default');
  const snackbarNotices = notices.filter(({
    type
  }) => type === 'snackbar');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.NoticeList, {
    notices: nonDismissibleNotices,
    className: "edit-widgets-notices__pinned"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.NoticeList, {
    notices: dismissibleNotices,
    className: "edit-widgets-notices__dismissible",
    onRemove: removeNotice
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SnackbarList, {
    notices: snackbarNotices,
    className: "edit-widgets-notices__snackbar",
    onRemove: removeNotice
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Notices);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/save-button/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/save-button/index.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function SaveButton() {
  const {
    hasEditedWidgetAreaIds,
    isSaving
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getEditedWidgetAreas,
      isSavingWidgetAreas
    } = select(_store__WEBPACK_IMPORTED_MODULE_4__.store);
    return {
      hasEditedWidgetAreaIds: getEditedWidgetAreas()?.length > 0,
      isSaving: isSavingWidgetAreas()
    };
  }, []);
  const {
    saveEditedWidgetAreas
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_4__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    isBusy: isSaving,
    "aria-disabled": isSaving,
    onClick: isSaving ? undefined : saveEditedWidgetAreas,
    disabled: !hasEditedWidgetAreaIds
  }, isSaving ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Saving…') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Update'));
}

/* harmony default export */ __webpack_exports__["default"] = (SaveButton);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/index.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SecondarySidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/* harmony import */ var _inserter_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inserter-sidebar */ "./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/inserter-sidebar.js");
/* harmony import */ var _list_view_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-view-sidebar */ "./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/list-view-sidebar.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Internal dependencies
 */



function SecondarySidebar() {
  const {
    isInserterOpen,
    isListViewOpen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      isInserterOpened,
      isListViewOpened
    } = select(_store__WEBPACK_IMPORTED_MODULE_2__.store);
    return {
      isInserterOpen: isInserterOpened(),
      isListViewOpen: isListViewOpened()
    };
  }, []);

  if (isInserterOpen) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inserter_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

  if (isListViewOpen) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_list_view_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/inserter-sidebar.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/inserter-sidebar.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InserterSidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_use_widget_library_insertion_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-widget-library-insertion-point */ "./node_modules/@wordpress/edit-widgets/build-module/hooks/use-widget-library-insertion-point.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function InserterSidebar() {
  const isMobileViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useViewportMatch)('medium', '<');
  const {
    rootClientId,
    insertionIndex
  } = (0,_hooks_use_widget_library_insertion_point__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const closeInserter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return setIsInserterOpened(false);
  }, [setIsInserterOpened]);
  const TagName = !isMobileViewport ? _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden : 'div';
  const [inserterDialogRef, inserterDialogProps] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseDialog)({
    onClose: closeInserter,
    focusOnMount: null
  });
  const libraryRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    libraryRef.current.focusSearch();
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: inserterDialogRef,
    ...inserterDialogProps,
    className: "edit-widgets-layout__inserter-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
    className: "edit-widgets-layout__inserter-panel-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
    onClick: closeInserter,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close block inserter')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-widgets-layout__inserter-panel-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLibrary, {
    showInserterHelpPanel: true,
    shouldFocusBlock: isMobileViewport,
    rootClientId: rootClientId,
    __experimentalInsertionIndex: insertionIndex,
    ref: libraryRef
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/list-view-sidebar.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/list-view-sidebar.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ListViewSidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


function ListViewSidebar() {
  const {
    setIsListViewOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store); // Use internal state instead of a ref to make sure that the component
  // re-renders when the dropZoneElement updates.

  const [dropZoneElement, setDropZoneElement] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const focusOnMountRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusOnMount)('firstElement');
  const headerFocusReturnRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusReturn)();
  const contentFocusReturnRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusReturn)();

  function closeOnEscape(event) {
    if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.ESCAPE && !event.defaultPrevented) {
      event.preventDefault();
      setIsListViewOpened(false);
    }
  }

  return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-widgets-editor__list-view-panel",
      onKeyDown: closeOnEscape
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-widgets-editor__list-view-panel-header",
      ref: headerFocusReturnRef
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('List View')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close'),
      onClick: () => setIsListViewOpened(false)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-widgets-editor__list-view-panel-content",
      ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)([contentFocusReturnRef, focusOnMountRef, setDropZoneElement])
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalListView, {
      dropZoneElement: dropZoneElement
    })))
  );
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/sidebar/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/sidebar/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/drawer-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/drawer-right.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _widget_areas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget-areas */ "./node_modules/@wordpress/edit-widgets/build-module/components/sidebar/widget-areas.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








const SIDEBAR_ACTIVE_BY_DEFAULT = _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Platform.select({
  web: true,
  native: false
});
const BLOCK_INSPECTOR_IDENTIFIER = 'edit-widgets/block-inspector'; // Widget areas were one called block areas, so use 'edit-widgets/block-areas'
// for backwards compatibility.

const WIDGET_AREAS_IDENTIFIER = 'edit-widgets/block-areas';
/**
 * Internal dependencies
 */




function ComplementaryAreaTab({
  identifier,
  label,
  isActive
}) {
  const {
    enableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    onClick: () => enableComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_8__.store.name, identifier),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-widgets-sidebar__panel-tab', {
      'is-active': isActive
    }),
    "aria-label": isActive ? // translators: %s: sidebar label e.g: "Widget Areas".
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%s (selected)'), label) : label,
    "data-label": label
  }, label);
}

function Sidebar() {
  const {
    enableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    currentArea,
    hasSelectedNonAreaBlock,
    isGeneralSidebarOpen,
    selectedWidgetAreaBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const {
      getSelectedBlock,
      getBlock,
      getBlockParentsByBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      getActiveComplementaryArea
    } = select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.store);
    const selectedBlock = getSelectedBlock();
    const activeArea = getActiveComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_8__.store.name);
    let currentSelection = activeArea;

    if (!currentSelection) {
      if (selectedBlock) {
        currentSelection = BLOCK_INSPECTOR_IDENTIFIER;
      } else {
        currentSelection = WIDGET_AREAS_IDENTIFIER;
      }
    }

    let widgetAreaBlock;

    if (selectedBlock) {
      if (selectedBlock.name === 'core/widget-area') {
        widgetAreaBlock = selectedBlock;
      } else {
        widgetAreaBlock = getBlock(getBlockParentsByBlockName(selectedBlock.clientId, 'core/widget-area')[0]);
      }
    }

    return {
      currentArea: currentSelection,
      hasSelectedNonAreaBlock: !!(selectedBlock && selectedBlock.name !== 'core/widget-area'),
      isGeneralSidebarOpen: !!activeArea,
      selectedWidgetAreaBlock: widgetAreaBlock
    };
  }, []); // currentArea, and isGeneralSidebarOpen are intentionally left out from the dependencies,
  // because we want to run the effect when a block is selected/unselected and not when the sidebar state changes.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (hasSelectedNonAreaBlock && currentArea === WIDGET_AREAS_IDENTIFIER && isGeneralSidebarOpen) {
      enableComplementaryArea('core/edit-widgets', BLOCK_INSPECTOR_IDENTIFIER);
    }

    if (!hasSelectedNonAreaBlock && currentArea === BLOCK_INSPECTOR_IDENTIFIER && isGeneralSidebarOpen) {
      enableComplementaryArea('core/edit-widgets', WIDGET_AREAS_IDENTIFIER);
    }
  }, [hasSelectedNonAreaBlock, enableComplementaryArea]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.ComplementaryArea, {
    className: "edit-widgets-sidebar",
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ComplementaryAreaTab, {
      identifier: WIDGET_AREAS_IDENTIFIER,
      label: selectedWidgetAreaBlock ? selectedWidgetAreaBlock.attributes.name : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Widget Areas'),
      isActive: currentArea === WIDGET_AREAS_IDENTIFIER
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ComplementaryAreaTab, {
      identifier: BLOCK_INSPECTOR_IDENTIFIER,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block'),
      isActive: currentArea === BLOCK_INSPECTOR_IDENTIFIER
    }))),
    headerClassName: "edit-widgets-sidebar__panel-tabs"
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Settings'),
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Close Settings'),
    scope: "core/edit-widgets",
    identifier: currentArea,
    icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    isActiveByDefault: SIDEBAR_ACTIVE_BY_DEFAULT
  }, currentArea === WIDGET_AREAS_IDENTIFIER && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_widget_areas__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedWidgetAreaId: selectedWidgetAreaBlock?.attributes.id
  }), currentArea === BLOCK_INSPECTOR_IDENTIFIER && (hasSelectedNonAreaBlock ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockInspector, null) : // Pretend that Widget Areas are part of the UI by not
  // showing the Block Inspector when one is selected.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-editor-block-inspector__no-blocks"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No block selected.'))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/sidebar/widget-areas.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/sidebar/widget-areas.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WidgetAreas; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/block-default.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/dom */ "@wordpress/dom");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


function WidgetAreas({
  selectedWidgetAreaId
}) {
  const widgetAreas = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getWidgetAreas(), []);
  const selectedWidgetArea = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => selectedWidgetAreaId && widgetAreas?.find(widgetArea => widgetArea.id === selectedWidgetAreaId), [selectedWidgetAreaId, widgetAreas]);
  let description;

  if (!selectedWidgetArea) {
    description = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Widget Areas are global parts in your site’s layout that can accept blocks. These vary by theme, but are typically parts like your Sidebar or Footer.');
  } else if (selectedWidgetAreaId === 'wp_inactive_widgets') {
    description = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Blocks in this Widget Area will not be displayed in your site.');
  } else {
    description = selectedWidgetArea.description;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-widgets-widget-areas"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-widgets-widget-areas__top-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockIcon, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    // Use `dangerouslySetInnerHTML` to keep backwards
    // compatibility. Basic markup in the description is an
    // established feature of WordPress.
    // @see https://github.com/WordPress/gutenberg/issues/33106
    dangerouslySetInnerHTML: {
      __html: (0,_wordpress_dom__WEBPACK_IMPORTED_MODULE_6__.safeHTML)(description)
    }
  }), widgetAreas?.length === 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Your theme does not contain any Widget Areas.')), !selectedWidgetArea && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    href: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)('customize.php', {
      'autofocus[panel]': 'widgets',
      return: window.location.pathname
    }),
    variant: "tertiary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Manage with live preview')))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/welcome-guide/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/welcome-guide/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuide; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function WelcomeGuide() {
  var _widgetAreas$filter$l;

  const isActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.store).get('core/edit-widgets', 'welcomeGuide'), []);
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.store);
  const widgetAreas = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getWidgetAreas({
    per_page: -1
  }), []);

  if (!isActive) {
    return null;
  }

  const isEntirelyBlockWidgets = widgetAreas?.every(widgetArea => widgetArea.id === 'wp_inactive_widgets' || widgetArea.widgets.every(widgetId => widgetId.startsWith('block-')));
  const numWidgetAreas = (_widgetAreas$filter$l = widgetAreas?.filter(widgetArea => widgetArea.id !== 'wp_inactive_widgets').length) !== null && _widgetAreas$filter$l !== void 0 ? _widgetAreas$filter$l : 0;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Guide, {
    className: "edit-widgets-welcome-guide",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to block Widgets'),
    finishButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Get started'),
    onFinish: () => toggle('core/edit-widgets', 'welcomeGuide'),
    pages: [{
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to block Widgets')), isEntirelyBlockWidgets ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( // Translators: %s: Number of block areas in the current theme.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._n)('Your theme provides %s “block” area for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.', 'Your theme provides %s different “block” areas for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.', numWidgetAreas), numWidgetAreas))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You can now add any block to your site’s widget areas. Don’t worry, all of your favorite widgets still work flawlessly.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Want to stick with the old widgets?')), ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
        href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('https://wordpress.org/plugins/classic-widgets/')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Get the Classic Widgets plugin.')))))
    }, {
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-editor.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-editor.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Make each block your own')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Each block comes with its own set of controls for changing things like color, width, and alignment. These will show and hide automatically when you have a block selected.')))
    }, {
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-library.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-library.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Get to know the block library')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('All of the blocks available to you live in the block library. You’ll find it wherever you see the <InserterIconImage /> icon.'), {
        InserterIconImage: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: "edit-widgets-welcome-guide__inserter-icon",
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('inserter'),
          src: "data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='18' height='18' rx='2' fill='%231E1E1E'/%3E%3Cpath d='M9.22727 4V14M4 8.77273H14' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E%0A"
        })
      })))
    }, {
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Learn how to use the block editor')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('New to the block editor? Want to learn more about using it? '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
        href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('https://wordpress.org/documentation/article/wordpress-block-editor/')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Here's a detailed guide."))))
    }]
  });
}

function WelcomeGuideImage({
  nonAnimatedSrc,
  animatedSrc
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "edit-widgets-welcome-guide__image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    srcSet: nonAnimatedSrc,
    media: "(prefers-reduced-motion: reduce)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: animatedSrc,
    width: "312",
    height: "240",
    alt: ""
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/widget-areas-block-editor-content/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/widget-areas-block-editor-content/index.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WidgetAreasBlockEditorContent; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notices */ "./node_modules/@wordpress/edit-widgets/build-module/components/notices/index.js");
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../keyboard-shortcuts */ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcuts/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function WidgetAreasBlockEditorContent({
  blockEditorSettings
}) {
  const hasThemeStyles = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-widgets', 'themeStyles'), []);
  const styles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return hasThemeStyles ? blockEditorSettings.styles : [];
  }, [blockEditorSettings, hasThemeStyles]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-widgets-block-editor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_notices__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockTools, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__unstableEditorStyles, {
    styles: styles
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockSelectionClearer, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.WritingFlow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ObserveTyping, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockList, {
    className: "edit-widgets-main-block-list"
  }))))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/components/widget-areas-block-editor-provider/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/components/widget-areas-block-editor-provider/index.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WidgetAreasBlockEditorProvider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/reusable-blocks */ "@wordpress/reusable-blocks");
/* harmony import */ var _wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../keyboard-shortcuts */ "./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcuts/index.js");
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/utils */ "./node_modules/@wordpress/edit-widgets/build-module/store/utils.js");
/* harmony import */ var _hooks_use_last_selected_widget_area__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-last-selected-widget-area */ "./node_modules/@wordpress/edit-widgets/build-module/hooks/use-last-selected-widget-area.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./node_modules/@wordpress/edit-widgets/build-module/constants.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-widgets/build-module/lock-unlock.js");


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */







const {
  ExperimentalBlockEditorProvider
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_14__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.privateApis);
function WidgetAreasBlockEditorProvider({
  blockEditorSettings,
  children,
  ...props
}) {
  const mediaPermissions = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useResourcePermissions)('media');
  const {
    reusableBlocks,
    isFixedToolbarActive,
    keepCaretInsideBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    widgetAreas: select(_store__WEBPACK_IMPORTED_MODULE_12__.store).getWidgetAreas(),
    widgets: select(_store__WEBPACK_IMPORTED_MODULE_12__.store).getWidgets(),
    reusableBlocks: _constants__WEBPACK_IMPORTED_MODULE_13__.ALLOW_REUSABLE_BLOCKS ? select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords('postType', 'wp_block') : [],
    isFixedToolbarActive: !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__.store).get('core/edit-widgets', 'fixedToolbar'),
    keepCaretInsideBlock: !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__.store).get('core/edit-widgets', 'keepCaretInsideBlock')
  }), []);
  const {
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_12__.store);
  const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let mediaUploadBlockEditor;

    if (mediaPermissions.canCreate) {
      mediaUploadBlockEditor = ({
        onError,
        ...argumentsObject
      }) => {
        (0,_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__.uploadMedia)({
          wpAllowedMimeTypes: blockEditorSettings.allowedMimeTypes,
          onError: ({
            message
          }) => onError(message),
          ...argumentsObject
        });
      };
    }

    return { ...blockEditorSettings,
      __experimentalReusableBlocks: reusableBlocks,
      hasFixedToolbar: isFixedToolbarActive,
      keepCaretInsideBlock,
      mediaUpload: mediaUploadBlockEditor,
      templateLock: 'all',
      __experimentalSetIsInserterOpened: setIsInserterOpened
    };
  }, [blockEditorSettings, isFixedToolbarActive, keepCaretInsideBlock, mediaPermissions.canCreate, reusableBlocks, setIsInserterOpened]);
  const widgetAreaId = (0,_hooks_use_last_selected_widget_area__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [blocks, onInput, onChange] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityBlockEditor)(_store_utils__WEBPACK_IMPORTED_MODULE_10__.KIND, _store_utils__WEBPACK_IMPORTED_MODULE_10__.POST_TYPE, {
    id: (0,_store_utils__WEBPACK_IMPORTED_MODULE_10__.buildWidgetAreasPostId)()
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__.ShortcutProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockEditorKeyboardShortcuts.Register, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_9__["default"].Register, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SlotFillProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExperimentalBlockEditorProvider, {
    value: blocks,
    onInput: onInput,
    onChange: onChange,
    settings: settings,
    useSubRegistry: false,
    ...props
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.CopyHandler, null, children), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_reusable_blocks__WEBPACK_IMPORTED_MODULE_6__.ReusableBlocksMenuItems, {
    rootClientId: widgetAreaId
  }))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/constants.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/constants.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOW_REUSABLE_BLOCKS": function() { return /* binding */ ALLOW_REUSABLE_BLOCKS; },
/* harmony export */   "ENABLE_EXPERIMENTAL_FSE_BLOCKS": function() { return /* binding */ ENABLE_EXPERIMENTAL_FSE_BLOCKS; }
/* harmony export */ });
const ALLOW_REUSABLE_BLOCKS = false;
const ENABLE_EXPERIMENTAL_FSE_BLOCKS = false;


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/filters/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/filters/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _move_to_widget_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move-to-widget-area */ "./node_modules/@wordpress/edit-widgets/build-module/filters/move-to-widget-area.js");
/* harmony import */ var _replace_media_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replace-media-upload */ "./node_modules/@wordpress/edit-widgets/build-module/filters/replace-media-upload.js");
/**
 * Internal dependencies
 */




/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/filters/move-to-widget-area.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/filters/move-to-widget-area.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const withMoveToWidgetAreaToolbarItem = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => props => {
  const {
    clientId,
    name: blockName
  } = props;
  const {
    widgetAreas,
    currentWidgetAreaId,
    canInsertBlockInWidgetArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    // Component won't display for a widget area, so don't run selectors.
    if (blockName === 'core/widget-area') {
      return {};
    }

    const selectors = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);
    const widgetAreaBlock = selectors.getParentWidgetAreaBlock(clientId);
    return {
      widgetAreas: selectors.getWidgetAreas(),
      currentWidgetAreaId: widgetAreaBlock?.attributes?.id,
      canInsertBlockInWidgetArea: selectors.canInsertBlockInWidgetArea(blockName)
    };
  }, [clientId, blockName]);
  const {
    moveBlockToWidgetArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const hasMultipleWidgetAreas = widgetAreas?.length > 1;
  const isMoveToWidgetAreaVisible = blockName !== 'core/widget-area' && hasMultipleWidgetAreas && canInsertBlockInWidgetArea;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, { ...props
  }), isMoveToWidgetAreaVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_5__.MoveToWidgetArea, {
    widgetAreas: widgetAreas,
    currentWidgetAreaId: currentWidgetAreaId,
    onSelect: widgetAreaId => {
      moveBlockToWidgetArea(props.clientId, widgetAreaId);
    }
  })));
}, 'withMoveToWidgetAreaToolbarItem');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'core/edit-widgets/block-edit', withMoveToWidgetAreaToolbarItem);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/filters/replace-media-upload.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/filters/replace-media-upload.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



const replaceMediaUpload = () => _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__.MediaUpload;

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.MediaUpload', 'core/edit-widgets/replace-media-upload', replaceMediaUpload);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/hooks/use-last-selected-widget-area.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/hooks/use-last-selected-widget-area.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/utils */ "./node_modules/@wordpress/edit-widgets/build-module/store/utils.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * A react hook that returns the client id of the last widget area to have
 * been selected, or to have a selected block within it.
 *
 * @return {string} clientId of the widget area last selected.
 */

const useLastSelectedWidgetArea = () => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
  const {
    getBlockSelectionEnd,
    getBlockName
  } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  const selectionEndClientId = getBlockSelectionEnd(); // If the selected block is a widget area, return its clientId.

  if (getBlockName(selectionEndClientId) === 'core/widget-area') {
    return selectionEndClientId;
  }

  const {
    getParentWidgetAreaBlock
  } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  const widgetAreaBlock = getParentWidgetAreaBlock(selectionEndClientId);
  const widgetAreaBlockClientId = widgetAreaBlock?.clientId;

  if (widgetAreaBlockClientId) {
    return widgetAreaBlockClientId;
  } // If no widget area has been selected, return the clientId of the first
  // area.


  const {
    getEntityRecord
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  const widgetAreasPost = getEntityRecord(_store_utils__WEBPACK_IMPORTED_MODULE_4__.KIND, _store_utils__WEBPACK_IMPORTED_MODULE_4__.POST_TYPE, (0,_store_utils__WEBPACK_IMPORTED_MODULE_4__.buildWidgetAreasPostId)());
  return widgetAreasPost?.blocks[0]?.clientId;
}, []);

/* harmony default export */ __webpack_exports__["default"] = (useLastSelectedWidgetArea);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/hooks/use-widget-library-insertion-point.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/hooks/use-widget-library-insertion-point.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/utils */ "./node_modules/@wordpress/edit-widgets/build-module/store/utils.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const useWidgetLibraryInsertionPoint = () => {
  const firstRootId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    // Default to the first widget area
    const {
      getEntityRecord
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const widgetAreasPost = getEntityRecord(_store_utils__WEBPACK_IMPORTED_MODULE_4__.KIND, _store_utils__WEBPACK_IMPORTED_MODULE_4__.POST_TYPE, (0,_store_utils__WEBPACK_IMPORTED_MODULE_4__.buildWidgetAreasPostId)());
    return widgetAreasPost?.blocks[0]?.clientId;
  }, []);
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getBlockRootClientId,
      getBlockSelectionEnd,
      getBlockOrder,
      getBlockIndex
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);

    const insertionPoint = select(_store__WEBPACK_IMPORTED_MODULE_3__.store).__experimentalGetInsertionPoint(); // "Browse all" in the quick inserter will set the rootClientId to the current block.
    // Otherwise, it will just be undefined, and we'll have to handle it differently below.


    if (insertionPoint.rootClientId) {
      return insertionPoint;
    }

    const clientId = getBlockSelectionEnd() || firstRootId;
    const rootClientId = getBlockRootClientId(clientId); // If the selected block is at the root level, it's a widget area and
    // blocks can't be inserted here. Return this block as the root and the
    // last child clientId indicating insertion at the end.

    if (clientId && rootClientId === '') {
      return {
        rootClientId: clientId,
        insertionIndex: getBlockOrder(clientId).length
      };
    }

    return {
      rootClientId,
      insertionIndex: getBlockIndex(clientId) + 1
    };
  }, [firstRootId]);
};

/* harmony default export */ __webpack_exports__["default"] = (useWidgetLibraryInsertionPoint);


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/lock-unlock.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/lock-unlock.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lock": function() { return /* binding */ lock; },
/* harmony export */   "unlock": function() { return /* binding */ unlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/private-apis */ "@wordpress/private-apis");
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/edit-widgets');


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/store/actions.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/store/actions.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeGeneralSidebar": function() { return /* binding */ closeGeneralSidebar; },
/* harmony export */   "moveBlockToWidgetArea": function() { return /* binding */ moveBlockToWidgetArea; },
/* harmony export */   "persistStubPost": function() { return /* binding */ persistStubPost; },
/* harmony export */   "saveEditedWidgetAreas": function() { return /* binding */ saveEditedWidgetAreas; },
/* harmony export */   "saveWidgetArea": function() { return /* binding */ saveWidgetArea; },
/* harmony export */   "saveWidgetAreas": function() { return /* binding */ saveWidgetAreas; },
/* harmony export */   "setIsInserterOpened": function() { return /* binding */ setIsInserterOpened; },
/* harmony export */   "setIsListViewOpened": function() { return /* binding */ setIsListViewOpened; },
/* harmony export */   "setIsWidgetAreaOpen": function() { return /* binding */ setIsWidgetAreaOpen; },
/* harmony export */   "setWidgetAreasOpenState": function() { return /* binding */ setWidgetAreasOpenState; },
/* harmony export */   "setWidgetIdForClientId": function() { return /* binding */ setWidgetIdForClientId; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformers */ "./node_modules/@wordpress/edit-widgets/build-module/store/transformers.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/edit-widgets/build-module/store/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-widgets/build-module/store/constants.js");
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




/**
 * Persists a stub post with given ID to core data store. The post is meant to be in-memory only and
 * shouldn't be saved via the API.
 *
 * @param {string} id     Post ID.
 * @param {Array}  blocks Blocks the post should consist of.
 * @return {Object} The post object.
 */

const persistStubPost = (id, blocks) => ({
  registry
}) => {
  const stubPost = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.createStubPost)(id, blocks);
  registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).receiveEntityRecords(_utils__WEBPACK_IMPORTED_MODULE_7__.KIND, _utils__WEBPACK_IMPORTED_MODULE_7__.POST_TYPE, stubPost, {
    id: stubPost.id
  }, false);
  return stubPost;
};
/**
 * Converts all the blocks from edited widget areas into widgets,
 * and submits a batch request to save everything at once.
 *
 * Creates a snackbar notice on either success or error.
 *
 * @return {Function} An action creator.
 */

const saveEditedWidgetAreas = () => async ({
  select,
  dispatch,
  registry
}) => {
  const editedWidgetAreas = select.getEditedWidgetAreas();

  if (!editedWidgetAreas?.length) {
    return;
  }

  try {
    await dispatch.saveWidgetAreas(editedWidgetAreas);
    registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store).createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Widgets saved.'), {
      type: 'snackbar'
    });
  } catch (e) {
    registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store).createErrorNotice(
    /* translators: %s: The error message. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('There was an error. %s'), e.message), {
      type: 'snackbar'
    });
  }
};
/**
 * Converts all the blocks from specified widget areas into widgets,
 * and submits a batch request to save everything at once.
 *
 * @param {Object[]} widgetAreas Widget areas to save.
 * @return {Function} An action creator.
 */

const saveWidgetAreas = widgetAreas => async ({
  dispatch,
  registry
}) => {
  try {
    for (const widgetArea of widgetAreas) {
      await dispatch.saveWidgetArea(widgetArea.id);
    }
  } finally {
    // saveEditedEntityRecord resets the resolution status, let's fix it manually.
    await registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).finishResolution('getEntityRecord', _utils__WEBPACK_IMPORTED_MODULE_7__.KIND, _utils__WEBPACK_IMPORTED_MODULE_7__.WIDGET_AREA_ENTITY_TYPE, (0,_utils__WEBPACK_IMPORTED_MODULE_7__.buildWidgetAreasQuery)());
  }
};
/**
 * Converts all the blocks from a widget area specified by ID into widgets,
 * and submits a batch request to save everything at once.
 *
 * @param {string} widgetAreaId ID of the widget area to process.
 * @return {Function} An action creator.
 */

const saveWidgetArea = widgetAreaId => async ({
  dispatch,
  select,
  registry
}) => {
  const widgets = select.getWidgets();
  const post = registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEditedEntityRecord(_utils__WEBPACK_IMPORTED_MODULE_7__.KIND, _utils__WEBPACK_IMPORTED_MODULE_7__.POST_TYPE, (0,_utils__WEBPACK_IMPORTED_MODULE_7__.buildWidgetAreaPostId)(widgetAreaId)); // Get all widgets from this area

  const areaWidgets = Object.values(widgets).filter(({
    sidebar
  }) => sidebar === widgetAreaId); // Remove all duplicate reference widget instances for legacy widgets.
  // Why? We filter out the widgets with duplicate IDs to prevent adding more than one instance of a widget
  // implemented using a function. WordPress doesn't support having more than one instance of these, if you try to
  // save multiple instances of these in different sidebars you will run into undefined behaviors.

  const usedReferenceWidgets = [];
  const widgetsBlocks = post.blocks.filter(block => {
    const {
      id
    } = block.attributes;

    if (block.name === 'core/legacy-widget' && id) {
      if (usedReferenceWidgets.includes(id)) {
        return false;
      }

      usedReferenceWidgets.push(id);
    }

    return true;
  }); // Determine which widgets have been deleted. We can tell if a widget is
  // deleted and not just moved to a different area by looking to see if
  // getWidgetAreaForWidgetId() finds something.

  const deletedWidgets = [];

  for (const widget of areaWidgets) {
    const widgetsNewArea = select.getWidgetAreaForWidgetId(widget.id);

    if (!widgetsNewArea) {
      deletedWidgets.push(widget);
    }
  }

  const batchMeta = [];
  const batchTasks = [];
  const sidebarWidgetsIds = [];

  for (let i = 0; i < widgetsBlocks.length; i++) {
    const block = widgetsBlocks[i];
    const widgetId = (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.getWidgetIdFromBlock)(block);
    const oldWidget = widgets[widgetId];
    const widget = (0,_transformers__WEBPACK_IMPORTED_MODULE_6__.transformBlockToWidget)(block, oldWidget); // We'll replace the null widgetId after save, but we track it here
    // since order is important.

    sidebarWidgetsIds.push(widgetId); // Check oldWidget as widgetId might refer to an ID which has been
    // deleted, e.g. if a deleted block is restored via undo after saving.

    if (oldWidget) {
      // Update an existing widget.
      registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).editEntityRecord('root', 'widget', widgetId, { ...widget,
        sidebar: widgetAreaId
      }, {
        undoIgnore: true
      });
      const hasEdits = registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).hasEditsForEntityRecord('root', 'widget', widgetId);

      if (!hasEdits) {
        continue;
      }

      batchTasks.push(({
        saveEditedEntityRecord
      }) => saveEditedEntityRecord('root', 'widget', widgetId));
    } else {
      // Create a new widget.
      batchTasks.push(({
        saveEntityRecord
      }) => saveEntityRecord('root', 'widget', { ...widget,
        sidebar: widgetAreaId
      }));
    }

    batchMeta.push({
      block,
      position: i,
      clientId: block.clientId
    });
  }

  for (const widget of deletedWidgets) {
    batchTasks.push(({
      deleteEntityRecord
    }) => deleteEntityRecord('root', 'widget', widget.id, {
      force: true
    }));
  }

  const records = await registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).__experimentalBatch(batchTasks);
  const preservedRecords = records.filter(record => !record.hasOwnProperty('deleted'));
  const failedWidgetNames = [];

  for (let i = 0; i < preservedRecords.length; i++) {
    const widget = preservedRecords[i];
    const {
      block,
      position
    } = batchMeta[i]; // Set __internalWidgetId on the block. This will be persisted to the
    // store when we dispatch receiveEntityRecords( post ) below.

    post.blocks[position].attributes.__internalWidgetId = widget.id;
    const error = registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getLastEntitySaveError('root', 'widget', widget.id);

    if (error) {
      failedWidgetNames.push(block.attributes?.name || block?.name);
    }

    if (!sidebarWidgetsIds[position]) {
      sidebarWidgetsIds[position] = widget.id;
    }
  }

  if (failedWidgetNames.length) {
    throw new Error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(
    /* translators: %s: List of widget names */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Could not save the following widgets: %s.'), failedWidgetNames.join(', ')));
  }

  registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).editEntityRecord(_utils__WEBPACK_IMPORTED_MODULE_7__.KIND, _utils__WEBPACK_IMPORTED_MODULE_7__.WIDGET_AREA_ENTITY_TYPE, widgetAreaId, {
    widgets: sidebarWidgetsIds
  }, {
    undoIgnore: true
  });
  dispatch(trySaveWidgetArea(widgetAreaId));
  registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).receiveEntityRecords(_utils__WEBPACK_IMPORTED_MODULE_7__.KIND, _utils__WEBPACK_IMPORTED_MODULE_7__.POST_TYPE, post, undefined);
};

const trySaveWidgetArea = widgetAreaId => ({
  registry
}) => {
  registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).saveEditedEntityRecord(_utils__WEBPACK_IMPORTED_MODULE_7__.KIND, _utils__WEBPACK_IMPORTED_MODULE_7__.WIDGET_AREA_ENTITY_TYPE, widgetAreaId, {
    throwOnError: true
  });
};
/**
 * Sets the clientId stored for a particular widgetId.
 *
 * @param {number} clientId Client id.
 * @param {number} widgetId Widget id.
 *
 * @return {Object} Action.
 */


function setWidgetIdForClientId(clientId, widgetId) {
  return {
    type: 'SET_WIDGET_ID_FOR_CLIENT_ID',
    clientId,
    widgetId
  };
}
/**
 * Sets the open state of all the widget areas.
 *
 * @param {Object} widgetAreasOpenState The open states of all the widget areas.
 *
 * @return {Object} Action.
 */

function setWidgetAreasOpenState(widgetAreasOpenState) {
  return {
    type: 'SET_WIDGET_AREAS_OPEN_STATE',
    widgetAreasOpenState
  };
}
/**
 * Sets the open state of the widget area.
 *
 * @param {string}  clientId The clientId of the widget area.
 * @param {boolean} isOpen   Whether the widget area should be opened.
 *
 * @return {Object} Action.
 */

function setIsWidgetAreaOpen(clientId, isOpen) {
  return {
    type: 'SET_IS_WIDGET_AREA_OPEN',
    clientId,
    isOpen
  };
}
/**
 * Returns an action object used to open/close the inserter.
 *
 * @param {boolean|Object} value                Whether the inserter should be
 *                                              opened (true) or closed (false).
 *                                              To specify an insertion point,
 *                                              use an object.
 * @param {string}         value.rootClientId   The root client ID to insert at.
 * @param {number}         value.insertionIndex The index to insert at.
 *
 * @return {Object} Action object.
 */

function setIsInserterOpened(value) {
  return {
    type: 'SET_IS_INSERTER_OPENED',
    value
  };
}
/**
 * Returns an action object used to open/close the list view.
 *
 * @param {boolean} isOpen A boolean representing whether the list view should be opened or closed.
 * @return {Object} Action object.
 */

function setIsListViewOpened(isOpen) {
  return {
    type: 'SET_IS_LIST_VIEW_OPENED',
    isOpen
  };
}
/**
 * Returns an action object signalling that the user closed the sidebar.
 *
 * @return {Object} Action creator.
 */

const closeGeneralSidebar = () => ({
  registry
}) => {
  registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).disableComplementaryArea(_constants__WEBPACK_IMPORTED_MODULE_8__.STORE_NAME);
};
/**
 * Action that handles moving a block between widget areas
 *
 * @param {string} clientId     The clientId of the block to move.
 * @param {string} widgetAreaId The id of the widget area to move the block to.
 */

const moveBlockToWidgetArea = (clientId, widgetAreaId) => async ({
  dispatch,
  select,
  registry
}) => {
  const sourceRootClientId = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).getBlockRootClientId(clientId); // Search the top level blocks (widget areas) for the one with the matching
  // id attribute. Makes the assumption that all top-level blocks are widget
  // areas.

  const widgetAreas = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).getBlocks();
  const destinationWidgetAreaBlock = widgetAreas.find(({
    attributes
  }) => attributes.id === widgetAreaId);
  const destinationRootClientId = destinationWidgetAreaBlock.clientId; // Get the index for moving to the end of the destination widget area.

  const destinationInnerBlocksClientIds = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).getBlockOrder(destinationRootClientId);
  const destinationIndex = destinationInnerBlocksClientIds.length; // Reveal the widget area, if it's not open.

  const isDestinationWidgetAreaOpen = select.getIsWidgetAreaOpen(destinationRootClientId);

  if (!isDestinationWidgetAreaOpen) {
    dispatch.setIsWidgetAreaOpen(destinationRootClientId, true);
  } // Move the block.


  registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).moveBlocksToPosition([clientId], sourceRootClientId, destinationRootClientId, destinationIndex);
};


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/store/constants.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/store/constants.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
/* harmony export */ });
/**
 * Module Constants
 */
const STORE_NAME = 'core/edit-widgets';


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/store/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/edit-widgets/build-module/store/reducer.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./node_modules/@wordpress/edit-widgets/build-module/store/resolvers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/edit-widgets/build-module/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/edit-widgets/build-module/store/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-widgets/build-module/store/constants.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#register
 *
 * @type {Object}
 */

const storeConfig = {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_3__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_5__
};
/**
 * Store definition for the edit widgets namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_6__.STORE_NAME, storeConfig);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.register)(store); // This package uses a few in-memory post types as wrappers for convenience.
// This middleware prevents any network requests related to these types as they are
// bound to fail anyway.

_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default().use(function (options, next) {
  if (options.path?.indexOf('/wp/v2/types/widget-area') === 0) {
    return Promise.resolve({});
  }

  return next(options);
});


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/store/reducer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/store/reducer.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockInserterPanel": function() { return /* binding */ blockInserterPanel; },
/* harmony export */   "listViewPanel": function() { return /* binding */ listViewPanel; },
/* harmony export */   "widgetAreasOpenState": function() { return /* binding */ widgetAreasOpenState; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Controls the open state of the widget areas.
 *
 * @param {Object} state  Redux state.
 * @param {Object} action Redux action.
 *
 * @return {Array} Updated state.
 */

function widgetAreasOpenState(state = {}, action) {
  const {
    type
  } = action;

  switch (type) {
    case 'SET_WIDGET_AREAS_OPEN_STATE':
      {
        return action.widgetAreasOpenState;
      }

    case 'SET_IS_WIDGET_AREA_OPEN':
      {
        const {
          clientId,
          isOpen
        } = action;
        return { ...state,
          [clientId]: isOpen
        };
      }

    default:
      {
        return state;
      }
  }
}
/**
 * Reducer to set the block inserter panel open or closed.
 *
 * Note: this reducer interacts with the list view panel reducer
 * to make sure that only one of the two panels is open at the same time.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 */

function blockInserterPanel(state = false, action) {
  switch (action.type) {
    case 'SET_IS_LIST_VIEW_OPENED':
      return action.isOpen ? false : state;

    case 'SET_IS_INSERTER_OPENED':
      return action.value;
  }

  return state;
}
/**
 * Reducer to set the list view panel open or closed.
 *
 * Note: this reducer interacts with the inserter panel reducer
 * to make sure that only one of the two panels is open at the same time.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 */

function listViewPanel(state = false, action) {
  switch (action.type) {
    case 'SET_IS_INSERTER_OPENED':
      return action.value ? false : state;

    case 'SET_IS_LIST_VIEW_OPENED':
      return action.isOpen;
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  blockInserterPanel,
  listViewPanel,
  widgetAreasOpenState
}));


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/store/resolvers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/store/resolvers.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWidgetAreas": function() { return /* binding */ getWidgetAreas; },
/* harmony export */   "getWidgets": function() { return /* binding */ getWidgets; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/edit-widgets/build-module/store/actions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/edit-widgets/build-module/store/utils.js");
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transformers */ "./node_modules/@wordpress/edit-widgets/build-module/store/transformers.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Creates a "stub" widgets post reflecting all available widget areas. The
 * post is meant as a convenient to only exists in runtime and should never be saved. It
 * enables a convenient way of editing the widgets by using a regular post editor.
 *
 * Fetches all widgets from all widgets aras, converts them into blocks, and hydrates a new post with them.
 *
 * @return {Function} An action creator.
 */

const getWidgetAreas = () => async ({
  dispatch,
  registry
}) => {
  const query = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.buildWidgetAreasQuery)();
  const widgetAreas = await registry.resolveSelect(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecords(_utils__WEBPACK_IMPORTED_MODULE_3__.KIND, _utils__WEBPACK_IMPORTED_MODULE_3__.WIDGET_AREA_ENTITY_TYPE, query);
  const widgetAreaBlocks = [];
  const sortedWidgetAreas = widgetAreas.sort((a, b) => {
    if (a.id === 'wp_inactive_widgets') {
      return 1;
    }

    if (b.id === 'wp_inactive_widgets') {
      return -1;
    }

    return 0;
  });

  for (const widgetArea of sortedWidgetAreas) {
    widgetAreaBlocks.push((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/widget-area', {
      id: widgetArea.id,
      name: widgetArea.name
    }));

    if (!widgetArea.widgets.length) {
      // If this widget area has no widgets, it won't get a post setup by
      // the getWidgets resolver.
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.persistStubPost)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.buildWidgetAreaPostId)(widgetArea.id), []));
    }
  }

  const widgetAreasOpenState = {};
  widgetAreaBlocks.forEach((widgetAreaBlock, index) => {
    // Defaults to open the first widget area.
    widgetAreasOpenState[widgetAreaBlock.clientId] = index === 0;
  });
  dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.setWidgetAreasOpenState)(widgetAreasOpenState));
  dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.persistStubPost)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.buildWidgetAreasPostId)(), widgetAreaBlocks));
};
/**
 * Fetches all widgets from all widgets ares, and groups them by widget area Id.
 *
 * @return {Function} An action creator.
 */

const getWidgets = () => async ({
  dispatch,
  registry
}) => {
  const query = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.buildWidgetsQuery)();
  const widgets = await registry.resolveSelect(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getEntityRecords('root', 'widget', query);
  const groupedBySidebar = {};

  for (const widget of widgets) {
    const block = (0,_transformers__WEBPACK_IMPORTED_MODULE_4__.transformWidgetToBlock)(widget);
    groupedBySidebar[widget.sidebar] = groupedBySidebar[widget.sidebar] || [];
    groupedBySidebar[widget.sidebar].push(block);
  }

  for (const sidebarId in groupedBySidebar) {
    if (groupedBySidebar.hasOwnProperty(sidebarId)) {
      // Persist the actual post containing the widget block
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_2__.persistStubPost)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.buildWidgetAreaPostId)(sidebarId), groupedBySidebar[sidebarId]));
    }
  }
};


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/store/selectors.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/store/selectors.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalGetInsertionPoint": function() { return /* binding */ __experimentalGetInsertionPoint; },
/* harmony export */   "canInsertBlockInWidgetArea": function() { return /* binding */ canInsertBlockInWidgetArea; },
/* harmony export */   "getEditedWidgetAreas": function() { return /* binding */ getEditedWidgetAreas; },
/* harmony export */   "getIsWidgetAreaOpen": function() { return /* binding */ getIsWidgetAreaOpen; },
/* harmony export */   "getParentWidgetAreaBlock": function() { return /* binding */ getParentWidgetAreaBlock; },
/* harmony export */   "getReferenceWidgetBlocks": function() { return /* binding */ getReferenceWidgetBlocks; },
/* harmony export */   "getWidget": function() { return /* binding */ getWidget; },
/* harmony export */   "getWidgetAreaForWidgetId": function() { return /* binding */ getWidgetAreaForWidgetId; },
/* harmony export */   "getWidgetAreas": function() { return /* binding */ getWidgetAreas; },
/* harmony export */   "getWidgets": function() { return /* binding */ getWidgets; },
/* harmony export */   "isInserterOpened": function() { return /* binding */ isInserterOpened; },
/* harmony export */   "isListViewOpened": function() { return /* binding */ isListViewOpened; },
/* harmony export */   "isSavingWidgetAreas": function() { return /* binding */ isSavingWidgetAreas; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/edit-widgets/build-module/store/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-widgets/build-module/store/constants.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * Returns all API widgets.
 *
 * @return {Object[]} API List of widgets.
 */

const getWidgets = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  const widgets = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecords('root', 'widget', (0,_utils__WEBPACK_IMPORTED_MODULE_4__.buildWidgetsQuery)());
  return (// Key widgets by their ID.
    widgets?.reduce((allWidgets, widget) => ({ ...allWidgets,
      [widget.id]: widget
    }), {}) || {}
  );
});
/**
 * Returns API widget data for a particular widget ID.
 *
 * @param {number} id Widget ID.
 *
 * @return {Object} API widget data for a particular widget ID.
 */

const getWidget = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, id) => {
  const widgets = select(_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).getWidgets();
  return widgets[id];
});
/**
 * Returns all API widget areas.
 *
 * @return {Object[]} API List of widget areas.
 */

const getWidgetAreas = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  const query = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.buildWidgetAreasQuery)();
  return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecords(_utils__WEBPACK_IMPORTED_MODULE_4__.KIND, _utils__WEBPACK_IMPORTED_MODULE_4__.WIDGET_AREA_ENTITY_TYPE, query);
});
/**
 * Returns widgetArea containing a block identify by given widgetId
 *
 * @param {string} widgetId The ID of the widget.
 * @return {Object} Containing widget area.
 */

const getWidgetAreaForWidgetId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, widgetId) => {
  const widgetAreas = select(_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).getWidgetAreas();
  return widgetAreas.find(widgetArea => {
    const post = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEditedEntityRecord(_utils__WEBPACK_IMPORTED_MODULE_4__.KIND, _utils__WEBPACK_IMPORTED_MODULE_4__.POST_TYPE, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.buildWidgetAreaPostId)(widgetArea.id));
    const blockWidgetIds = post.blocks.map(block => (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__.getWidgetIdFromBlock)(block));
    return blockWidgetIds.includes(widgetId);
  });
});
/**
 * Given a child client id, returns the parent widget area block.
 *
 * @param {string} clientId The client id of a block in a widget area.
 *
 * @return {WPBlock} The widget area block.
 */

const getParentWidgetAreaBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, clientId) => {
  const {
    getBlock,
    getBlockName,
    getBlockParents
  } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const blockParents = getBlockParents(clientId);
  const widgetAreaClientId = blockParents.find(parentClientId => getBlockName(parentClientId) === 'core/widget-area');
  return getBlock(widgetAreaClientId);
});
/**
 * Returns all edited widget area entity records.
 *
 * @return {Object[]} List of edited widget area entity records.
 */

const getEditedWidgetAreas = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, ids) => {
  let widgetAreas = select(_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).getWidgetAreas();

  if (!widgetAreas) {
    return [];
  }

  if (ids) {
    widgetAreas = widgetAreas.filter(({
      id
    }) => ids.includes(id));
  }

  return widgetAreas.filter(({
    id
  }) => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).hasEditsForEntityRecord(_utils__WEBPACK_IMPORTED_MODULE_4__.KIND, _utils__WEBPACK_IMPORTED_MODULE_4__.POST_TYPE, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.buildWidgetAreaPostId)(id))).map(({
    id
  }) => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEditedEntityRecord(_utils__WEBPACK_IMPORTED_MODULE_4__.KIND, _utils__WEBPACK_IMPORTED_MODULE_4__.WIDGET_AREA_ENTITY_TYPE, id));
});
/**
 * Returns all blocks representing reference widgets.
 *
 * @param {string} referenceWidgetName Optional. If given, only reference widgets with this name will be returned.
 * @return {Array}  List of all blocks representing reference widgets
 */

const getReferenceWidgetBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, referenceWidgetName = null) => {
  const results = [];
  const widgetAreas = select(_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).getWidgetAreas();

  for (const _widgetArea of widgetAreas) {
    const post = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEditedEntityRecord(_utils__WEBPACK_IMPORTED_MODULE_4__.KIND, _utils__WEBPACK_IMPORTED_MODULE_4__.POST_TYPE, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.buildWidgetAreaPostId)(_widgetArea.id));

    for (const block of post.blocks) {
      if (block.name === 'core/legacy-widget' && (!referenceWidgetName || block.attributes?.referenceWidgetName === referenceWidgetName)) {
        results.push(block);
      }
    }
  }

  return results;
});
/**
 * Returns true if any widget area is currently being saved.
 *
 * @return {boolean} True if any widget area is currently being saved. False otherwise.
 */

const isSavingWidgetAreas = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  const widgetAreasIds = select(_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).getWidgetAreas()?.map(({
    id
  }) => id);

  if (!widgetAreasIds) {
    return false;
  }

  for (const id of widgetAreasIds) {
    const isSaving = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).isSavingEntityRecord(_utils__WEBPACK_IMPORTED_MODULE_4__.KIND, _utils__WEBPACK_IMPORTED_MODULE_4__.WIDGET_AREA_ENTITY_TYPE, id);

    if (isSaving) {
      return true;
    }
  }

  const widgetIds = [...Object.keys(select(_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).getWidgets()), undefined // account for new widgets without an ID
  ];

  for (const id of widgetIds) {
    const isSaving = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).isSavingEntityRecord('root', 'widget', id);

    if (isSaving) {
      return true;
    }
  }

  return false;
});
/**
 * Gets whether the widget area is opened.
 *
 * @param {Array}  state    The open state of the widget areas.
 * @param {string} clientId The clientId of the widget area.
 *
 * @return {boolean} True if the widget area is open.
 */

const getIsWidgetAreaOpen = (state, clientId) => {
  const {
    widgetAreasOpenState
  } = state;
  return !!widgetAreasOpenState[clientId];
};
/**
 * Returns true if the inserter is opened.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the inserter is opened.
 */

function isInserterOpened(state) {
  return !!state.blockInserterPanel;
}
/**
 * Get the insertion point for the inserter.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The root client ID and index to insert at.
 */

function __experimentalGetInsertionPoint(state) {
  const {
    rootClientId,
    insertionIndex
  } = state.blockInserterPanel;
  return {
    rootClientId,
    insertionIndex
  };
}
/**
 * Returns true if a block can be inserted into a widget area.
 *
 * @param {Array}  state     The open state of the widget areas.
 * @param {string} blockName The name of the block being inserted.
 *
 * @return {boolean} True if the block can be inserted in a widget area.
 */

const canInsertBlockInWidgetArea = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, blockName) => {
  // Widget areas are always top-level blocks, which getBlocks will return.
  const widgetAreas = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).getBlocks(); // Makes an assumption that a block that can be inserted into one
  // widget area can be inserted into any widget area. Uses the first
  // widget area for testing whether the block can be inserted.

  const [firstWidgetArea] = widgetAreas;
  return select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).canInsertBlockType(blockName, firstWidgetArea.clientId);
});
/**
 * Returns true if the list view is opened.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the list view is opened.
 */

function isListViewOpened(state) {
  return state.listViewPanel;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/store/transformers.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/store/transformers.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformBlockToWidget": function() { return /* binding */ transformBlockToWidget; },
/* harmony export */   "transformWidgetToBlock": function() { return /* binding */ transformWidgetToBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


/**
 * Converts a widget entity record into a block.
 *
 * @param {Object} widget The widget entity record.
 * @return {Object} a block (converted from the entity record).
 */

function transformWidgetToBlock(widget) {
  if (widget.id_base === 'block') {
    const parsedBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.parse)(widget.instance.raw.content, {
      __unstableSkipAutop: true
    });

    if (!parsedBlocks.length) {
      return (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__.addWidgetIdToBlock)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {}, []), widget.id);
    }

    return (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__.addWidgetIdToBlock)(parsedBlocks[0], widget.id);
  }

  let attributes;

  if (widget._embedded.about[0].is_multi) {
    attributes = {
      idBase: widget.id_base,
      instance: widget.instance
    };
  } else {
    attributes = {
      id: widget.id
    };
  }

  return (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__.addWidgetIdToBlock)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/legacy-widget', attributes, []), widget.id);
}
/**
 * Converts a block to a widget entity record.
 *
 * @param {Object}  block         The block.
 * @param {Object?} relatedWidget A related widget entity record from the API (optional).
 * @return {Object} the widget object (converted from block).
 */

function transformBlockToWidget(block, relatedWidget = {}) {
  let widget;
  const isValidLegacyWidgetBlock = block.name === 'core/legacy-widget' && (block.attributes.id || block.attributes.instance);

  if (isValidLegacyWidgetBlock) {
    var _block$attributes$id, _block$attributes$idB, _block$attributes$ins;

    widget = { ...relatedWidget,
      id: (_block$attributes$id = block.attributes.id) !== null && _block$attributes$id !== void 0 ? _block$attributes$id : relatedWidget.id,
      id_base: (_block$attributes$idB = block.attributes.idBase) !== null && _block$attributes$idB !== void 0 ? _block$attributes$idB : relatedWidget.id_base,
      instance: (_block$attributes$ins = block.attributes.instance) !== null && _block$attributes$ins !== void 0 ? _block$attributes$ins : relatedWidget.instance
    };
  } else {
    widget = { ...relatedWidget,
      id_base: 'block',
      instance: {
        raw: {
          content: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.serialize)(block)
        }
      }
    };
  } // Delete read-only properties.


  delete widget.rendered;
  delete widget.rendered_form;
  return widget;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-widgets/build-module/store/utils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/store/utils.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KIND": function() { return /* binding */ KIND; },
/* harmony export */   "POST_TYPE": function() { return /* binding */ POST_TYPE; },
/* harmony export */   "WIDGET_AREA_ENTITY_TYPE": function() { return /* binding */ WIDGET_AREA_ENTITY_TYPE; },
/* harmony export */   "buildWidgetAreaPostId": function() { return /* binding */ buildWidgetAreaPostId; },
/* harmony export */   "buildWidgetAreasPostId": function() { return /* binding */ buildWidgetAreasPostId; },
/* harmony export */   "buildWidgetAreasQuery": function() { return /* binding */ buildWidgetAreasQuery; },
/* harmony export */   "buildWidgetsQuery": function() { return /* binding */ buildWidgetsQuery; },
/* harmony export */   "createStubPost": function() { return /* binding */ createStubPost; }
/* harmony export */ });
/**
 * "Kind" of the navigation post.
 *
 * @type {string}
 */
const KIND = 'root';
/**
 * "post type" of the navigation post.
 *
 * @type {string}
 */

const WIDGET_AREA_ENTITY_TYPE = 'sidebar';
/**
 * "post type" of the widget area post.
 *
 * @type {string}
 */

const POST_TYPE = 'postType';
/**
 * Builds an ID for a new widget area post.
 *
 * @param {number} widgetAreaId Widget area id.
 * @return {string} An ID.
 */

const buildWidgetAreaPostId = widgetAreaId => `widget-area-${widgetAreaId}`;
/**
 * Builds an ID for a global widget areas post.
 *
 * @return {string} An ID.
 */

const buildWidgetAreasPostId = () => `widget-areas`;
/**
 * Builds a query to resolve sidebars.
 *
 * @return {Object} Query.
 */

function buildWidgetAreasQuery() {
  return {
    per_page: -1
  };
}
/**
 * Builds a query to resolve widgets.
 *
 * @return {Object} Query.
 */

function buildWidgetsQuery() {
  return {
    per_page: -1,
    _embed: 'about'
  };
}
/**
 * Creates a stub post with given id and set of blocks. Used as a governing entity records
 * for all widget areas.
 *
 * @param {string} id     Post ID.
 * @param {Array}  blocks The list of blocks.
 * @return {Object} A stub post object formatted in compliance with the data layer.
 */

const createStubPost = (id, blocks) => ({
  id,
  slug: id,
  status: 'draft',
  type: 'page',
  blocks,
  meta: {
    widgetAreaId: id
  }
});


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon({
  icon,
  size = 24,
  ...props
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/block-default.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/block-default.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const blockDefault = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (blockDefault);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-left.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronLeft);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-right.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronRight);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close-small.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (closeSmall);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const close = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (close);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/drawer-left.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/drawer-left.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const drawerLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.5 18.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h2.5v13zm10-.5c0 .3-.2.5-.5.5h-8v-13h8c.3 0 .5.2.5.5v12z"
}));
/* harmony default export */ __webpack_exports__["default"] = (drawerLeft);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/drawer-right.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/drawer-right.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const drawerRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4 14.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h8v13zm4.5-.5c0 .3-.2.5-.5.5h-2.5v-13H18c.3 0 .5.2.5.5v12z"
}));
/* harmony default export */ __webpack_exports__["default"] = (drawerRight);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/external.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const external = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (external);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/list-view.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/list-view.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const listView = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3 6h11v1.5H3V6Zm3.5 5.5h11V13h-11v-1.5ZM21 17H10v1.5h11V17Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (listView);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-vertical.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moreVertical = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moreVertical);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plus);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/redo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/redo.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const redo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (redo);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/star-empty.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-empty.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starEmpty = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (starEmpty);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/star-filled.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-filled.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["default"] = (starFilled);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/undo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/undo.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const undo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (undo);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/action-item/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/action-item/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */



const noop = () => {};

function ActionItemSlot({
  name,
  as: Component = _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup,
  fillProps = {},
  bubblesVirtually,
  ...props
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Slot, {
    name: name,
    bubblesVirtually: bubblesVirtually,
    fillProps: fillProps
  }, fills => {
    if (!_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(fills).length) {
      return null;
    } // Special handling exists for backward compatibility.
    // It ensures that menu items created by plugin authors aren't
    // duplicated with automatically injected menu items coming
    // from pinnable plugin sidebars.
    // @see https://github.com/WordPress/gutenberg/issues/14457


    const initializedByPlugins = [];
    _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(fills, ({
      props: {
        __unstableExplicitMenuItem,
        __unstableTarget
      }
    }) => {
      if (__unstableTarget && __unstableExplicitMenuItem) {
        initializedByPlugins.push(__unstableTarget);
      }
    });
    const children = _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.map(fills, child => {
      if (!child.props.__unstableExplicitMenuItem && initializedByPlugins.includes(child.props.__unstableTarget)) {
        return null;
      }

      return child;
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, { ...props
    }, children);
  });
}

function ActionItem({
  name,
  as: Component = _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
  onClick,
  ...props
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Fill, {
    name: name
  }, ({
    onClick: fpOnClick
  }) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
      onClick: onClick || fpOnClick ? (...args) => {
        (onClick || noop)(...args);
        (fpOnClick || noop)(...args);
      } : undefined,
      ...props
    });
  });
}

ActionItem.Slot = ActionItemSlot;
/* harmony default export */ __webpack_exports__["default"] = (ActionItem);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.withPluginContext)((context, ownProps) => {
  return {
    icon: ownProps.icon || context.icon,
    identifier: ownProps.identifier || `${context.name}/${ownProps.name}`
  };
}));


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _complementary_area_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../complementary-area-toggle */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const ComplementaryAreaHeader = ({
  smallScreenTitle,
  children,
  className,
  toggleButtonProps
}) => {
  const toggleButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_complementary_area_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
    ...toggleButtonProps
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-panel__header interface-complementary-area-header__small"
  }, smallScreenTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "interface-complementary-area-header__small-title"
  }, smallScreenTitle), toggleButton), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-panel__header', 'interface-complementary-area-header', className),
    tabIndex: -1
  }, children, toggleButton));
};

/* harmony default export */ __webpack_exports__["default"] = (ComplementaryAreaHeader);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ComplementaryAreaMoreMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _complementary_area_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../complementary-area-toggle */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js");
/* harmony import */ var _action_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-item */ "./node_modules/@wordpress/interface/build-module/components/action-item/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const PluginsMenuItem = ({
  // Menu item is marked with unstable prop for backward compatibility.
  // They are removed so they don't leak to DOM elements.
  // @see https://github.com/WordPress/gutenberg/issues/14457
  __unstableExplicitMenuItem,
  __unstableTarget,
  ...restProps
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, { ...restProps
});

function ComplementaryAreaMoreMenuItem({
  scope,
  target,
  __unstableExplicitMenuItem,
  ...props
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_complementary_area_toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: toggleProps => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_action_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __unstableExplicitMenuItem: __unstableExplicitMenuItem,
        __unstableTarget: `${scope}/${target}`,
        as: PluginsMenuItem,
        name: `${scope}/plugin-more-menu`,
        ...toggleProps
      });
    },
    role: "menuitemcheckbox",
    selectedIcon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    name: target,
    scope: scope,
    ...props
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/interface/build-module/store/index.js");
/* harmony import */ var _complementary_area_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../complementary-area-context */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function ComplementaryAreaToggle({
  as = _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
  scope,
  identifier,
  icon,
  selectedIcon,
  name,
  ...props
}) {
  const ComponentToUse = as;
  const isSelected = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_3__.store).getActiveComplementaryArea(scope) === identifier, [identifier]);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ComponentToUse, {
    icon: selectedIcon && isSelected ? selectedIcon : icon,
    onClick: () => {
      if (isSelected) {
        disableComplementaryArea(scope);
      } else {
        enableComplementaryArea(scope, identifier);
      }
    },
    ...props
  });
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_complementary_area_context__WEBPACK_IMPORTED_MODULE_4__["default"])(ComplementaryAreaToggle));


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/star-filled.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/star-empty.js");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _complementary_area_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../complementary-area-header */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js");
/* harmony import */ var _complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../complementary-area-more-menu-item */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js");
/* harmony import */ var _complementary_area_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../complementary-area-toggle */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js");
/* harmony import */ var _complementary_area_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../complementary-area-context */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js");
/* harmony import */ var _pinned_items__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pinned-items */ "./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/interface/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */








function ComplementaryAreaSlot({
  scope,
  ...props
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Slot, {
    name: `ComplementaryArea/${scope}`,
    ...props
  });
}

function ComplementaryAreaFill({
  scope,
  children,
  className
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Fill, {
    name: `ComplementaryArea/${scope}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, children));
}

function useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall) {
  const previousIsSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const shouldOpenWhenNotSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // If the complementary area is active and the editor is switching from
    // a big to a small window size.
    if (isActive && isSmall && !previousIsSmall.current) {
      disableComplementaryArea(scope); // Flag the complementary area to be reopened when the window size
      // goes from small to big.

      shouldOpenWhenNotSmall.current = true;
    } else if ( // If there is a flag indicating the complementary area should be
    // enabled when we go from small to big window size and we are going
    // from a small to big window size.
    shouldOpenWhenNotSmall.current && !isSmall && previousIsSmall.current) {
      // Remove the flag indicating the complementary area should be
      // enabled.
      shouldOpenWhenNotSmall.current = false;
      enableComplementaryArea(scope, identifier);
    } else if ( // If the flag is indicating the current complementary should be
    // reopened but another complementary area becomes active, remove
    // the flag.
    shouldOpenWhenNotSmall.current && activeArea && activeArea !== identifier) {
      shouldOpenWhenNotSmall.current = false;
    }

    if (isSmall !== previousIsSmall.current) {
      previousIsSmall.current = isSmall;
    }
  }, [isActive, isSmall, scope, identifier, activeArea]);
}

function ComplementaryArea({
  children,
  className,
  closeLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Close plugin'),
  identifier,
  header,
  headerClassName,
  icon,
  isPinnable = true,
  panelClassName,
  scope,
  name,
  smallScreenTitle,
  title,
  toggleShortcut,
  isActiveByDefault,
  showIconLabels = false
}) {
  const {
    isLoading,
    isActive,
    isPinned,
    activeArea,
    isSmall,
    isLarge
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getActiveComplementaryArea,
      isComplementaryAreaLoading,
      isItemPinned
    } = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);

    const _activeArea = getActiveComplementaryArea(scope);

    return {
      isLoading: isComplementaryAreaLoading(scope),
      isActive: _activeArea === identifier,
      isPinned: isItemPinned(scope, identifier),
      activeArea: _activeArea,
      isSmall: select(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__.store).isViewportMatch('< medium'),
      isLarge: select(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_5__.store).isViewportMatch('large')
    };
  }, [identifier, scope]);
  useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall);
  const {
    enableComplementaryArea,
    disableComplementaryArea,
    pinItem,
    unpinItem
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Set initial visibility: For large screens, enable if it's active by
    // default. For small screens, always initially disable.
    if (isActiveByDefault && activeArea === undefined && !isSmall) {
      enableComplementaryArea(scope, identifier);
    } else if (activeArea === undefined && isSmall) {
      disableComplementaryArea(scope, identifier);
    }
  }, [activeArea, isActiveByDefault, scope, identifier, isSmall]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isPinnable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pinned_items__WEBPACK_IMPORTED_MODULE_7__["default"], {
    scope: scope
  }, isPinned && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_complementary_area_toggle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scope: scope,
    identifier: identifier,
    isPressed: isActive && (!showIconLabels || isLarge),
    "aria-expanded": isActive,
    "aria-disabled": isLoading,
    label: title,
    icon: showIconLabels ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"] : icon,
    showTooltip: !showIconLabels,
    variant: showIconLabels ? 'tertiary' : undefined
  })), name && isPinnable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
    target: name,
    scope: scope,
    icon: icon
  }, title), isActive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ComplementaryAreaFill, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('interface-complementary-area', className),
    scope: scope
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_complementary_area_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: headerClassName,
    closeLabel: closeLabel,
    onClose: () => disableComplementaryArea(scope),
    smallScreenTitle: smallScreenTitle,
    toggleButtonProps: {
      label: closeLabel,
      shortcut: toggleShortcut,
      scope,
      identifier
    }
  }, header || (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, title), isPinnable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "interface-complementary-area__pin-unpin-item",
    icon: isPinned ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
    label: isPinned ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Unpin from toolbar') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Pin to toolbar'),
    onClick: () => (isPinned ? unpinItem : pinItem)(scope, identifier),
    isPressed: isPinned,
    "aria-expanded": isPinned
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, {
    className: panelClassName
  }, children)));
}

const ComplementaryAreaWrapped = (0,_complementary_area_context__WEBPACK_IMPORTED_MODULE_14__["default"])(ComplementaryArea);
ComplementaryAreaWrapped.Slot = ComplementaryAreaSlot;
/* harmony default export */ __webpack_exports__["default"] = (ComplementaryAreaWrapped);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


const FullscreenMode = ({
  isActive
}) => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let isSticky = false; // `is-fullscreen-mode` is set in PHP as a body class by Gutenberg, and this causes
    // `sticky-menu` to be applied by WordPress and prevents the admin menu being scrolled
    // even if `is-fullscreen-mode` is then removed. Let's remove `sticky-menu` here as
    // a consequence of the FullscreenMode setup.

    if (document.body.classList.contains('sticky-menu')) {
      isSticky = true;
      document.body.classList.remove('sticky-menu');
    }

    return () => {
      if (isSticky) {
        document.body.classList.add('sticky-menu');
      }
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isActive) {
      document.body.classList.add('is-fullscreen-mode');
    } else {
      document.body.classList.remove('is-fullscreen-mode');
    }

    return () => {
      if (isActive) {
        document.body.classList.remove('is-fullscreen-mode');
      }
    };
  }, [isActive]);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (FullscreenMode);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionItem": function() { return /* reexport safe */ _action_item__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "ComplementaryArea": function() { return /* reexport safe */ _complementary_area__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "ComplementaryAreaMoreMenuItem": function() { return /* reexport safe */ _complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "FullscreenMode": function() { return /* reexport safe */ _fullscreen_mode__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "InterfaceSkeleton": function() { return /* reexport safe */ _interface_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "MoreMenuDropdown": function() { return /* reexport safe */ _more_menu_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "MoreMenuFeatureToggle": function() { return /* reexport safe */ _more_menu_feature_toggle__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "NavigableRegion": function() { return /* reexport safe */ _navigable_region__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "PinnedItems": function() { return /* reexport safe */ _pinned_items__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "PreferencesModal": function() { return /* reexport safe */ _preferences_modal__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "PreferencesModalSection": function() { return /* reexport safe */ _preferences_modal_section__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "PreferencesModalTabs": function() { return /* reexport safe */ _preferences_modal_tabs__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "___unstablePreferencesModalBaseOption": function() { return /* reexport safe */ _preferences_modal_base_option__WEBPACK_IMPORTED_MODULE_11__["default"]; }
/* harmony export */ });
/* harmony import */ var _complementary_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complementary-area */ "./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js");
/* harmony import */ var _complementary_area_more_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complementary-area-more-menu-item */ "./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js");
/* harmony import */ var _fullscreen_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullscreen-mode */ "./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js");
/* harmony import */ var _interface_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface-skeleton */ "./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js");
/* harmony import */ var _pinned_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pinned-items */ "./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js");
/* harmony import */ var _more_menu_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-menu-dropdown */ "./node_modules/@wordpress/interface/build-module/components/more-menu-dropdown/index.js");
/* harmony import */ var _more_menu_feature_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-menu-feature-toggle */ "./node_modules/@wordpress/interface/build-module/components/more-menu-feature-toggle/index.js");
/* harmony import */ var _action_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./action-item */ "./node_modules/@wordpress/interface/build-module/components/action-item/index.js");
/* harmony import */ var _preferences_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preferences-modal */ "./node_modules/@wordpress/interface/build-module/components/preferences-modal/index.js");
/* harmony import */ var _preferences_modal_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preferences-modal-tabs */ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-tabs/index.js");
/* harmony import */ var _preferences_modal_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preferences-modal-section */ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-section/index.js");
/* harmony import */ var _preferences_modal_base_option__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preferences-modal-base-option */ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-base-option/index.js");
/* harmony import */ var _navigable_region__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigable-region */ "./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js");















/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _navigable_region__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigable-region */ "./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function useHTMLClass(className) {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const element = document && document.querySelector(`html:not(.${className})`);

    if (!element) {
      return;
    }

    element.classList.toggle(className);
    return () => {
      element.classList.toggle(className);
    };
  }, [className]);
}

const headerVariants = {
  hidden: {
    opacity: 0
  },
  hover: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.2,
      delayChildren: 0.2
    }
  },
  distractionFreeInactive: {
    opacity: 1,
    transition: {
      delay: 0
    }
  }
};

function InterfaceSkeleton({
  isDistractionFree,
  footer,
  header,
  editorNotices,
  sidebar,
  secondarySidebar,
  notices,
  content,
  actions,
  labels,
  className,
  enableRegionNavigation = true,
  // Todo: does this need to be a prop.
  // Can we use a dependency to keyboard-shortcuts directly?
  shortcuts
}, ref) {
  const navigateRegionsProps = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableUseNavigateRegions)(shortcuts);
  useHTMLClass('interface-interface-skeleton__html-container');
  const defaultLabels = {
    /* translators: accessibility text for the top bar landmark region. */
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Header'),

    /* translators: accessibility text for the content landmark region. */
    body: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Content'),

    /* translators: accessibility text for the secondary sidebar landmark region. */
    secondarySidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Block Library'),

    /* translators: accessibility text for the settings landmark region. */
    sidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings'),

    /* translators: accessibility text for the publish landmark region. */
    actions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Publish'),

    /* translators: accessibility text for the footer landmark region. */
    footer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Footer')
  };
  const mergedLabels = { ...defaultLabels,
    ...labels
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { ...(enableRegionNavigation ? navigateRegionsProps : {}),
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useMergeRefs)([ref, enableRegionNavigation ? navigateRegionsProps.ref : undefined]),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'interface-interface-skeleton', navigateRegionsProps.className, !!footer && 'has-footer')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "interface-interface-skeleton__editor"
  }, !!header && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableMotion.div,
    className: "interface-interface-skeleton__header",
    "aria-label": mergedLabels.header,
    initial: isDistractionFree ? 'hidden' : 'distractionFreeInactive',
    whileHover: isDistractionFree ? 'hover' : 'distractionFreeInactive',
    animate: isDistractionFree ? 'hidden' : 'distractionFreeInactive',
    variants: headerVariants,
    transition: isDistractionFree ? {
      type: 'tween',
      delay: 0.8
    } : undefined
  }, header), isDistractionFree && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "interface-interface-skeleton__header"
  }, editorNotices), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "interface-interface-skeleton__body"
  }, !!secondarySidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "interface-interface-skeleton__secondary-sidebar",
    ariaLabel: mergedLabels.secondarySidebar
  }, secondarySidebar), !!notices && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "interface-interface-skeleton__notices"
  }, notices), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "interface-interface-skeleton__content",
    ariaLabel: mergedLabels.body
  }, content), !!sidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "interface-interface-skeleton__sidebar",
    ariaLabel: mergedLabels.sidebar
  }, sidebar), !!actions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "interface-interface-skeleton__actions",
    ariaLabel: mergedLabels.actions
  }, actions))), !!footer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_navigable_region__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "interface-interface-skeleton__footer",
    ariaLabel: mergedLabels.footer
  }, footer));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(InterfaceSkeleton));


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/more-menu-dropdown/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/more-menu-dropdown/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MoreMenuDropdown; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function MoreMenuDropdown({
  as: DropdownComponent = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu,
  className,

  /* translators: button label text should, if possible, be under 16 characters. */
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Options'),
  popoverProps,
  toggleProps,
  children
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownComponent, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('interface-more-menu-dropdown', className),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    label: label,
    popoverProps: {
      placement: 'bottom-end',
      ...popoverProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('interface-more-menu-dropdown__content', popoverProps?.className)
    },
    toggleProps: {
      tooltipPosition: 'bottom',
      ...toggleProps
    }
  }, onClose => children(onClose));
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/more-menu-feature-toggle/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/more-menu-feature-toggle/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MoreMenuFeatureToggle; }
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/interface/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function MoreMenuFeatureToggle({
  scope,
  label,
  info,
  messageActivated,
  messageDeactivated,
  shortcut,
  feature
}) {
  const isActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_5__.store).isFeatureActive(scope, feature), [feature]);
  const {
    toggleFeature
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);

  const speakMessage = () => {
    if (isActive) {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__.speak)(messageDeactivated || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Feature deactivated'));
    } else {
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__.speak)(messageActivated || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Feature activated'));
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    icon: isActive && _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    isSelected: isActive,
    onClick: () => {
      toggleFeature(scope, feature);
      speakMessage();
    },
    role: "menuitemcheckbox",
    info: info,
    shortcut: shortcut
  }, label);
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavigableRegion; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

function NavigableRegion({
  children,
  className,
  ariaLabel,
  as: Tag = 'div',
  ...props
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('interface-navigable-region', className),
    "aria-label": ariaLabel,
    role: "region",
    tabIndex: "-1",
    ...props
  }, children);
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function PinnedItems({
  scope,
  ...props
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Fill, {
    name: `PinnedItems/${scope}`,
    ...props
  });
}

function PinnedItemsSlot({
  scope,
  className,
  ...props
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Slot, {
    name: `PinnedItems/${scope}`,
    ...props
  }, fills => fills?.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'interface-pinned-items')
  }, fills));
}

PinnedItems.Slot = PinnedItemsSlot;
/* harmony default export */ __webpack_exports__["default"] = (PinnedItems);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-base-option/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/preferences-modal-base-option/index.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */


function BaseOption({
  help,
  label,
  isChecked,
  onChange,
  children
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "interface-preferences-modal__option"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    __nextHasNoMarginBottom: true,
    help: help,
    label: label,
    checked: isChecked,
    onChange: onChange
  }), children);
}

/* harmony default export */ __webpack_exports__["default"] = (BaseOption);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-section/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/preferences-modal-section/index.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Section = ({
  description,
  title,
  children
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", {
  className: "interface-preferences-modal__section"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
  className: "interface-preferences-modal__section-legend"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
  className: "interface-preferences-modal__section-title"
}, title), description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
  className: "interface-preferences-modal__section-description"
}, description)), children);

/* harmony default export */ __webpack_exports__["default"] = (Section);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/preferences-modal-tabs/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/preferences-modal-tabs/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreferencesModalTabs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */





const PREFERENCES_MENU = 'preferences-menu';
function PreferencesModalTabs({
  sections
}) {
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useViewportMatch)('medium'); // This is also used to sync the two different rendered components
  // between small and large viewports.

  const [activeMenu, setActiveMenu] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(PREFERENCES_MENU);
  /**
   * Create helper objects from `sections` for easier data handling.
   * `tabs` is used for creating the `TabPanel` and `sectionsContentMap`
   * is used for easier access to active tab's content.
   */

  const {
    tabs,
    sectionsContentMap
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let mappedTabs = {
      tabs: [],
      sectionsContentMap: {}
    };

    if (sections.length) {
      mappedTabs = sections.reduce((accumulator, {
        name,
        tabLabel: title,
        content
      }) => {
        accumulator.tabs.push({
          name,
          title
        });
        accumulator.sectionsContentMap[name] = content;
        return accumulator;
      }, {
        tabs: [],
        sectionsContentMap: {}
      });
    }

    return mappedTabs;
  }, [sections]);
  const getCurrentTab = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(tab => sectionsContentMap[tab.name] || null, [sectionsContentMap]);
  let modalContent; // We render different components based on the viewport size.

  if (isLargeViewport) {
    modalContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: "interface-preferences__tabs",
      tabs: tabs,
      initialTabName: activeMenu !== PREFERENCES_MENU ? activeMenu : undefined,
      onSelect: setActiveMenu,
      orientation: "vertical"
    }, getCurrentTab);
  } else {
    modalContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorProvider, {
      initialPath: "/",
      className: "interface-preferences__provider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorScreen, {
      path: "/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
      isBorderless: true,
      size: "small"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItemGroup, null, tabs.map(tab => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorButton, {
        key: tab.name,
        path: tab.name,
        as: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem,
        isAction: true
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
        justify: "space-between"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalTruncate, null, tab.title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
      }))));
    }))))), sections.length && sections.map(section => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorScreen, {
        key: `${section.name}-menu`,
        path: section.name
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
        isBorderless: true,
        size: "large"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {
        isBorderless: false,
        justify: "left",
        size: "small",
        gap: "6"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorBackButton, {
        icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Navigate to the previous view')
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalText, {
        size: "16"
      }, section.tabLabel)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, section.content)));
    }));
  }

  return modalContent;
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/components/preferences-modal/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/components/preferences-modal/index.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreferencesModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PreferencesModal({
  closeModal,
  children
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    className: "interface-preferences-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preferences'),
    onRequestClose: closeModal
  }, children);
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionItem": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ActionItem; },
/* harmony export */   "ComplementaryArea": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ComplementaryArea; },
/* harmony export */   "ComplementaryAreaMoreMenuItem": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ComplementaryAreaMoreMenuItem; },
/* harmony export */   "FullscreenMode": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FullscreenMode; },
/* harmony export */   "InterfaceSkeleton": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.InterfaceSkeleton; },
/* harmony export */   "MoreMenuDropdown": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.MoreMenuDropdown; },
/* harmony export */   "MoreMenuFeatureToggle": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.MoreMenuFeatureToggle; },
/* harmony export */   "NavigableRegion": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.NavigableRegion; },
/* harmony export */   "PinnedItems": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PinnedItems; },
/* harmony export */   "PreferencesModal": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PreferencesModal; },
/* harmony export */   "PreferencesModalSection": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PreferencesModalSection; },
/* harmony export */   "PreferencesModalTabs": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PreferencesModalTabs; },
/* harmony export */   "___unstablePreferencesModalBaseOption": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.___unstablePreferencesModalBaseOption; },
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.store; }
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/@wordpress/interface/build-module/components/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/interface/build-module/store/index.js");




/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/store/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/actions.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "disableComplementaryArea": function() { return /* binding */ disableComplementaryArea; },
/* harmony export */   "enableComplementaryArea": function() { return /* binding */ enableComplementaryArea; },
/* harmony export */   "openModal": function() { return /* binding */ openModal; },
/* harmony export */   "pinItem": function() { return /* binding */ pinItem; },
/* harmony export */   "setDefaultComplementaryArea": function() { return /* binding */ setDefaultComplementaryArea; },
/* harmony export */   "setFeatureDefaults": function() { return /* binding */ setFeatureDefaults; },
/* harmony export */   "setFeatureValue": function() { return /* binding */ setFeatureValue; },
/* harmony export */   "toggleFeature": function() { return /* binding */ toggleFeature; },
/* harmony export */   "unpinItem": function() { return /* binding */ unpinItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


/**
 * Set a default complementary area.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 *
 * @return {Object} Action object.
 */

const setDefaultComplementaryArea = (scope, area) => ({
  type: 'SET_DEFAULT_COMPLEMENTARY_AREA',
  scope,
  area
});
/**
 * Enable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 */

const enableComplementaryArea = (scope, area) => ({
  registry,
  dispatch
}) => {
  // Return early if there's no area.
  if (!area) {
    return;
  }

  const isComplementaryAreaVisible = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'isComplementaryAreaVisible');

  if (!isComplementaryAreaVisible) {
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'isComplementaryAreaVisible', true);
  }

  dispatch({
    type: 'ENABLE_COMPLEMENTARY_AREA',
    scope,
    area
  });
};
/**
 * Disable the complementary area.
 *
 * @param {string} scope Complementary area scope.
 */

const disableComplementaryArea = scope => ({
  registry
}) => {
  const isComplementaryAreaVisible = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'isComplementaryAreaVisible');

  if (isComplementaryAreaVisible) {
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'isComplementaryAreaVisible', false);
  }
};
/**
 * Pins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 *
 * @return {Object} Action object.
 */

const pinItem = (scope, item) => ({
  registry
}) => {
  // Return early if there's no item.
  if (!item) {
    return;
  }

  const pinnedItems = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'pinnedItems'); // The item is already pinned, there's nothing to do.

  if (pinnedItems?.[item] === true) {
    return;
  }

  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'pinnedItems', { ...pinnedItems,
    [item]: true
  });
};
/**
 * Unpins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 */

const unpinItem = (scope, item) => ({
  registry
}) => {
  // Return early if there's no item.
  if (!item) {
    return;
  }

  const pinnedItems = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get(scope, 'pinnedItems');
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, 'pinnedItems', { ...pinnedItems,
    [item]: false
  });
};
/**
 * Returns an action object used in signalling that a feature should be toggled.
 *
 * @param {string} scope       The feature scope (e.g. core/edit-post).
 * @param {string} featureName The feature name.
 */

function toggleFeature(scope, featureName) {
  return function ({
    registry
  }) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`dispatch( 'core/interface' ).toggleFeature`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).toggle`
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).toggle(scope, featureName);
  };
}
/**
 * Returns an action object used in signalling that a feature should be set to
 * a true or false value
 *
 * @param {string}  scope       The feature scope (e.g. core/edit-post).
 * @param {string}  featureName The feature name.
 * @param {boolean} value       The value to set.
 *
 * @return {Object} Action object.
 */

function setFeatureValue(scope, featureName, value) {
  return function ({
    registry
  }) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`dispatch( 'core/interface' ).setFeatureValue`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).set`
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).set(scope, featureName, !!value);
  };
}
/**
 * Returns an action object used in signalling that defaults should be set for features.
 *
 * @param {string}                  scope    The feature scope (e.g. core/edit-post).
 * @param {Object<string, boolean>} defaults A key/value map of feature names to values.
 *
 * @return {Object} Action object.
 */

function setFeatureDefaults(scope, defaults) {
  return function ({
    registry
  }) {
    _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()(`dispatch( 'core/interface' ).setFeatureDefaults`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).setDefaults`
    });
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).setDefaults(scope, defaults);
  };
}
/**
 * Returns an action object used in signalling that the user opened a modal.
 *
 * @param {string} name A string that uniquely identifies the modal.
 *
 * @return {Object} Action object.
 */

function openModal(name) {
  return {
    type: 'OPEN_MODAL',
    name
  };
}
/**
 * Returns an action object signalling that the user closed a modal.
 *
 * @return {Object} Action object.
 */

function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/store/constants.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/constants.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
/* harmony export */ });
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const STORE_NAME = 'core/interface';


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/store/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/interface/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/interface/build-module/store/selectors.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/interface/build-module/store/reducer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/interface/build-module/store/constants.js");
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
}); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/store/reducer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/reducer.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeModal": function() { return /* binding */ activeModal; },
/* harmony export */   "complementaryAreas": function() { return /* binding */ complementaryAreas; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function complementaryAreas(state = {}, action) {
  switch (action.type) {
    case 'SET_DEFAULT_COMPLEMENTARY_AREA':
      {
        const {
          scope,
          area
        } = action; // If there's already an area, don't overwrite it.

        if (state[scope]) {
          return state;
        }

        return { ...state,
          [scope]: area
        };
      }

    case 'ENABLE_COMPLEMENTARY_AREA':
      {
        const {
          scope,
          area
        } = action;
        return { ...state,
          [scope]: area
        };
      }
  }

  return state;
}
/**
 * Reducer for storing the name of the open modal, or null if no modal is open.
 *
 * @param {Object} state  Previous state.
 * @param {Object} action Action object containing the `name` of the modal
 *
 * @return {Object} Updated state
 */

function activeModal(state = null, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.name;

    case 'CLOSE_MODAL':
      return null;
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  complementaryAreas,
  activeModal
}));


/***/ }),

/***/ "./node_modules/@wordpress/interface/build-module/store/selectors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/interface/build-module/store/selectors.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActiveComplementaryArea": function() { return /* binding */ getActiveComplementaryArea; },
/* harmony export */   "isComplementaryAreaLoading": function() { return /* binding */ isComplementaryAreaLoading; },
/* harmony export */   "isFeatureActive": function() { return /* binding */ isFeatureActive; },
/* harmony export */   "isItemPinned": function() { return /* binding */ isItemPinned; },
/* harmony export */   "isModalActive": function() { return /* binding */ isModalActive; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Returns the complementary area that is active in a given scope.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Item scope.
 *
 * @return {string | null | undefined} The complementary area that is active in the given scope.
 */

const getActiveComplementaryArea = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope) => {
  const isComplementaryAreaVisible = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, 'isComplementaryAreaVisible'); // Return `undefined` to indicate that the user has never toggled
  // visibility, this is the vanilla default. Other code relies on this
  // nuance in the return value.

  if (isComplementaryAreaVisible === undefined) {
    return undefined;
  } // Return `null` to indicate the user hid the complementary area.


  if (isComplementaryAreaVisible === false) {
    return null;
  }

  return state?.complementaryAreas?.[scope];
});
const isComplementaryAreaLoading = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope) => {
  const isVisible = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, 'isComplementaryAreaVisible');
  const identifier = state?.complementaryAreas?.[scope];
  return isVisible && identifier === undefined;
});
/**
 * Returns a boolean indicating if an item is pinned or not.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Scope.
 * @param {string} item  Item to check.
 *
 * @return {boolean} True if the item is pinned and false otherwise.
 */

const isItemPinned = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope, item) => {
  var _pinnedItems$item;

  const pinnedItems = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, 'pinnedItems');
  return (_pinnedItems$item = pinnedItems?.[item]) !== null && _pinnedItems$item !== void 0 ? _pinnedItems$item : true;
});
/**
 * Returns a boolean indicating whether a feature is active for a particular
 * scope.
 *
 * @param {Object} state       The store state.
 * @param {string} scope       The scope of the feature (e.g. core/edit-post).
 * @param {string} featureName The name of the feature.
 *
 * @return {boolean} Is the feature enabled?
 */

const isFeatureActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, scope, featureName) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()(`select( 'core/interface' ).isFeatureActive( scope, featureName )`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get( scope, featureName )`
  });
  return !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.store).get(scope, featureName);
});
/**
 * Returns true if a modal is active, or false otherwise.
 *
 * @param {Object} state     Global application state.
 * @param {string} modalName A string that uniquely identifies the modal.
 *
 * @return {boolean} Whether the modal is active.
 */

function isModalActive(state, modalName) {
  return state.activeModal === modalName;
}


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

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["a11y"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/block-library":
/*!**************************************!*\
  !*** external ["wp","blockLibrary"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockLibrary"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/deprecated":
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["deprecated"];

/***/ }),

/***/ "@wordpress/dom":
/*!*****************************!*\
  !*** external ["wp","dom"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["dom"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keyboard-shortcuts":
/*!*******************************************!*\
  !*** external ["wp","keyboardShortcuts"] ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["keyboardShortcuts"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/preferences":
/*!*************************************!*\
  !*** external ["wp","preferences"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["preferences"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/private-apis":
/*!*************************************!*\
  !*** external ["wp","privateApis"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["privateApis"];

/***/ }),

/***/ "@wordpress/reusable-blocks":
/*!****************************************!*\
  !*** external ["wp","reusableBlocks"] ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["reusableBlocks"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "@wordpress/viewport":
/*!**********************************!*\
  !*** external ["wp","viewport"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["viewport"];

/***/ }),

/***/ "@wordpress/widgets":
/*!*********************************!*\
  !*** external ["wp","widgets"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["widgets"];

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
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/edit-widgets/build-module/index.js ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": function() { return /* binding */ initialize; },
/* harmony export */   "initializeEditor": function() { return /* binding */ initializeEditor; },
/* harmony export */   "reinitializeEditor": function() { return /* binding */ reinitializeEditor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/edit-widgets/build-module/store/index.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters */ "./node_modules/@wordpress/edit-widgets/build-module/filters/index.js");
/* harmony import */ var _blocks_widget_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/widget-area */ "./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/layout */ "./node_modules/@wordpress/edit-widgets/build-module/components/layout/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-widgets/build-module/constants.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */






const disabledBlocks = ['core/more', 'core/freeform', 'core/template-part', ...(_constants__WEBPACK_IMPORTED_MODULE_12__.ALLOW_REUSABLE_BLOCKS ? [] : ['core/block'])];
/**
 * Initializes the block editor in the widgets screen.
 *
 * @param {string} id       ID of the root element to render the screen in.
 * @param {Object} settings Block editor settings.
 */

function initializeEditor(id, settings) {
  const target = document.getElementById(id);
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(target);

  const coreBlocks = (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_4__.__experimentalGetCoreBlocks)().filter(block => {
    return !(disabledBlocks.includes(block.name) || block.name.startsWith('core/post') || block.name.startsWith('core/query') || block.name.startsWith('core/site') || block.name.startsWith('core/navigation'));
  });

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__.store).setDefaults('core/edit-widgets', {
    fixedToolbar: false,
    welcomeGuide: true,
    showBlockBreadcrumbs: true,
    themeStyles: true
  });

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.store).__experimentalReapplyBlockTypeFilters();

  (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_4__.registerCoreBlocks)(coreBlocks);
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_6__.registerLegacyWidgetBlock)();

  if (false) {}

  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_6__.registerLegacyWidgetVariations)(settings);
  registerBlock(_blocks_widget_area__WEBPACK_IMPORTED_MODULE_10__);
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_6__.registerWidgetGroupBlock)();

  settings.__experimentalFetchLinkSuggestions = (search, searchOptions) => (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.__experimentalFetchLinkSuggestions)(search, searchOptions, settings); // As we are unregistering `core/freeform` to avoid the Classic block, we must
  // replace it with something as the default freeform content handler. Failure to
  // do this will result in errors in the default block parser.
  // see: https://github.com/WordPress/gutenberg/issues/33097


  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.setFreeformContentHandlerName)('core/html');
  root.render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    blockEditorSettings: settings
  }));
  return root;
}
/**
 * Compatibility export under the old `initialize` name.
 */

const initialize = initializeEditor;
function reinitializeEditor() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()('wp.editWidgets.reinitializeEditor', {
    since: '6.2',
    version: '6.3'
  });
}
/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

const registerBlock = block => {
  if (!block) {
    return;
  }

  const {
    metadata,
    settings,
    name
  } = block;

  if (metadata) {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unstable__bootstrapServerSideBlockDefinitions)({
      [name]: metadata
    });
  }

  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(name, settings);
};

}();
(window.wp = window.wp || {}).editWidgets = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=edit-widgets.js.map