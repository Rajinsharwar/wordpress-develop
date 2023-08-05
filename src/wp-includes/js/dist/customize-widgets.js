/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/block-appender/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/block-appender/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlockAppender; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */



function BlockAppender(props) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isBlocksListEmpty = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlockCount() === 0); // Move the focus to the block appender to prevent focus from
  // being lost when emptying the widget area.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isBlocksListEmpty && ref.current) {
      const {
        ownerDocument
      } = ref.current;

      if (!ownerDocument.activeElement || ownerDocument.activeElement === ownerDocument.body) {
        ref.current.focus();
      }
    }
  }, [isBlocksListEmpty]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ButtonBlockAppender, { ...props,
    ref: ref
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/block-inspector-button/index.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/block-inspector-button/index.js ***!
  \***********************************************************************************************************/
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */






function BlockInspectorButton({
  inspector,
  closeMenu,
  ...props
}) {
  const selectedBlockClientId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store).getSelectedBlockClientId(), []);
  const selectedBlock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => document.getElementById(`block-${selectedBlockClientId}`), [selectedBlockClientId]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: () => {
      // Open the inspector.
      inspector.open({
        returnFocusWhenClose: selectedBlock
      }); // Then close the dropdown menu.

      closeMenu();
    },
    ...props
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show more settings'));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockInspectorButton);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/index.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomizeWidgets; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-boundary */ "./node_modules/@wordpress/customize-widgets/build-module/components/error-boundary/index.js");
/* harmony import */ var _sidebar_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar-block-editor */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/index.js");
/* harmony import */ var _focus_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../focus-control */ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js");
/* harmony import */ var _sidebar_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar-controls */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js");
/* harmony import */ var _use_clear_selected_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-clear-selected-block */ "./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/use-clear-selected-block.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






function CustomizeWidgets({
  api,
  sidebarControls,
  blockEditorSettings
}) {
  const [activeSidebarControl, setActiveSidebarControl] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const parentContainer = document.getElementById('customize-theme-controls');
  const popoverRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_use_clear_selected_block__WEBPACK_IMPORTED_MODULE_7__["default"])(activeSidebarControl, popoverRef);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const unsubscribers = sidebarControls.map(sidebarControl => sidebarControl.subscribe(expanded => {
      if (expanded) {
        setActiveSidebarControl(sidebarControl);
      }
    }));
    return () => {
      unsubscribers.forEach(unsubscriber => unsubscriber());
    };
  }, [sidebarControls]);
  const activeSidebar = activeSidebarControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_error_boundary__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_block_editor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: activeSidebarControl.id,
    blockEditorSettings: blockEditorSettings,
    sidebar: activeSidebarControl.sidebarAdapter,
    inserter: activeSidebarControl.inserter,
    inspector: activeSidebarControl.inspector
  })), activeSidebarControl.container[0]); // We have to portal this to the parent of both the editor and the inspector,
  // so that the popovers will appear above both of them.

  const popover = parentContainer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "customize-widgets-popover",
    ref: popoverRef
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover.Slot, null)), parentContainer);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.ShortcutProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SlotFillProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sidebarControls: sidebarControls,
    activeSidebarControl: activeSidebarControl
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_focus_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    api: api,
    sidebarControls: sidebarControls
  }, activeSidebar, popover))));
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/use-clear-selected-block.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/use-clear-selected-block.js ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useClearSelectedBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * We can't just use <BlockSelectionClearer> because the customizer has
 * many root nodes rather than just one in the post editor.
 * We need to listen to the focus events in all those roots, and also in
 * the preview iframe.
 * This hook will clear the selected block when focusing outside the editor,
 * with a few exceptions:
 * 1. Focusing on popovers.
 * 2. Focusing on the inspector.
 * 3. Focusing on any modals/dialogs.
 * These cases are normally triggered by user interactions from the editor,
 * not by explicitly focusing outside the editor, hence no need for clearing.
 *
 * @param {Object} sidebarControl The sidebar control instance.
 * @param {Object} popoverRef     The ref object of the popover node container.
 */

function useClearSelectedBlock(sidebarControl, popoverRef) {
  const {
    hasSelectedBlock,
    hasMultiSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    clearSelectedBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (popoverRef.current && sidebarControl) {
      const inspector = sidebarControl.inspector;
      const container = sidebarControl.container[0];
      const ownerDocument = container.ownerDocument;
      const ownerWindow = ownerDocument.defaultView;

      function handleClearSelectedBlock(element) {
        if ( // 1. Make sure there are blocks being selected.
        (hasSelectedBlock() || hasMultiSelection()) && // 2. The element should exist in the DOM (not deleted).
        element && ownerDocument.contains(element) && // 3. It should also not exist in the container, the popover, nor the dialog.
        !container.contains(element) && !popoverRef.current.contains(element) && !element.closest('[role="dialog"]') && // 4. The inspector should not be opened.
        !inspector.expanded()) {
          clearSelectedBlock();
        }
      } // Handle mouse down in the same document.


      function handleMouseDown(event) {
        handleClearSelectedBlock(event.target);
      } // Handle focusing outside the current document, like to iframes.


      function handleBlur() {
        handleClearSelectedBlock(ownerDocument.activeElement);
      }

      ownerDocument.addEventListener('mousedown', handleMouseDown);
      ownerWindow.addEventListener('blur', handleBlur);
      return () => {
        ownerDocument.removeEventListener('mousedown', handleMouseDown);
        ownerWindow.removeEventListener('blur', handleBlur);
      };
    }
  }, [popoverRef, sidebarControl, hasSelectedBlock, hasMultiSelection, clearSelectedBlock]);
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/error-boundary/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/error-boundary/index.js ***!
  \***************************************************************************************************/
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

class ErrorBoundary extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({
      error
    });
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.doAction)('editor.ErrorBoundary.errorLogged', error);
  }

  render() {
    const {
      error
    } = this.state;

    if (!error) {
      return this.props.children;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Warning, {
      className: "customize-widgets-error-boundary",
      actions: [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CopyButton, {
        key: "copy-error",
        text: error.stack
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Error'))]
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The editor has encountered an unexpected error.'));
  }

}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FocusControl; },
/* harmony export */   "useFocusControl": function() { return /* binding */ useFocusControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./node_modules/@wordpress/customize-widgets/build-module/utils.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


const FocusControlContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function FocusControl({
  api,
  sidebarControls,
  children
}) {
  const [focusedWidgetIdRef, setFocusedWidgetIdRef] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    current: null
  });
  const focusWidget = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(widgetId => {
    for (const sidebarControl of sidebarControls) {
      const widgets = sidebarControl.setting.get();

      if (widgets.includes(widgetId)) {
        sidebarControl.sectionInstance.expand({
          // Schedule it after the complete callback so that
          // it won't be overridden by the "Back" button focus.
          completeCallback() {
            // Create a "ref-like" object every time to ensure
            // the same widget id can also triggers the focus control.
            setFocusedWidgetIdRef({
              current: widgetId
            });
          }

        });
        break;
      }
    }
  }, [sidebarControls]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function handleFocus(settingId) {
      const widgetId = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.settingIdToWidgetId)(settingId);
      focusWidget(widgetId);
    }

    let previewBound = false;

    function handleReady() {
      api.previewer.preview.bind('focus-control-for-setting', handleFocus);
      previewBound = true;
    }

    api.previewer.bind('ready', handleReady);
    return () => {
      api.previewer.unbind('ready', handleReady);

      if (previewBound) {
        api.previewer.preview.unbind('focus-control-for-setting', handleFocus);
      }
    };
  }, [api, focusWidget]);
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [focusedWidgetIdRef, focusWidget], [focusedWidgetIdRef, focusWidget]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(FocusControlContext.Provider, {
    value: context
  }, children);
}
const useFocusControl = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(FocusControlContext);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/use-blocks-focus-control.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/use-blocks-focus-control.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useBlocksFocusControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function useBlocksFocusControl(blocks) {
  const {
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const [focusedWidgetIdRef] = (0,___WEBPACK_IMPORTED_MODULE_4__.useFocusControl)();
  const blocksRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(blocks);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    blocksRef.current = blocks;
  }, [blocks]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (focusedWidgetIdRef.current) {
      const focusedBlock = blocksRef.current.find(block => (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.getWidgetIdFromBlock)(block) === focusedWidgetIdRef.current);

      if (focusedBlock) {
        selectBlock(focusedBlock.clientId); // If the block is already being selected, the DOM node won't
        // get focused again automatically.
        // We select the DOM and focus it manually here.

        const blockNode = document.querySelector(`[data-block="${focusedBlock.clientId}"]`);
        blockNode?.focus();
      }
    }
  }, [focusedWidgetIdRef, selectBlock]);
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/header/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/header/index.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _inserter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inserter */ "./node_modules/@wordpress/customize-widgets/build-module/components/inserter/index.js");
/* harmony import */ var _more_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../more-menu */ "./node_modules/@wordpress/customize-widgets/build-module/components/more-menu/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




function Header({
  sidebar,
  inserter,
  isInserterOpened,
  setIsInserterOpened,
  isFixedToolbarActive
}) {
  const [[hasUndo, hasRedo], setUndoRedo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([sidebar.hasUndo(), sidebar.hasRedo()]);
  const shortcut = (0,_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.isAppleOS)() ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.displayShortcut.primaryShift('z') : _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.displayShortcut.primary('y');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return sidebar.subscribeHistory(() => {
      setUndoRedo([sidebar.hasUndo(), sidebar.hasRedo()]);
    });
  }, [sidebar]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('customize-widgets-header', {
      'is-fixed-toolbar-active': isFixedToolbarActive
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.NavigableToolbar, {
    className: "customize-widgets-header-toolbar",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Document tools')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Undo'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.displayShortcut.primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: sidebar.undo,
    className: "customize-widgets-editor-history-button undo-button"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Redo'),
    shortcut: shortcut // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: sidebar.redo,
    className: "customize-widgets-editor-history-button redo-button"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    className: "customize-widgets-header-toolbar__inserter-toggle",
    isPressed: isInserterOpened,
    variant: "primary",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Add block', 'Generic label for block inserter button'),
    onClick: () => {
      setIsInserterOpened(isOpen => !isOpen);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_more_menu__WEBPACK_IMPORTED_MODULE_7__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inserter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setIsOpened: setIsInserterOpened
  }), inserter.contentContainer[0]));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/inserter/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/inserter/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function Inserter({
  setIsOpened
}) {
  const inserterTitleId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(Inserter, 'customize-widget-layout__inserter-panel-title');
  const insertionPoint = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_6__.store).__experimentalGetInsertionPoint(), []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "customize-widgets-layout__inserter-panel",
    "aria-labelledby": inserterTitleId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "customize-widgets-layout__inserter-panel-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    id: inserterTitleId,
    className: "customize-widgets-layout__inserter-panel-header-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "customize-widgets-layout__inserter-panel-header-close-button",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    onClick: () => setIsOpened(false),
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close inserter')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "customize-widgets-layout__inserter-panel-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLibrary, {
    rootClientId: insertionPoint.rootClientId,
    __experimentalInsertionIndex: insertionPoint.insertionIndex,
    showInserterHelpPanel: true,
    onSelect: () => setIsOpened(false)
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Inserter);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/inserter/use-inserter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/inserter/use-inserter.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useInserter; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function useInserter(inserter) {
  const isInserterOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_2__.store).isInserterOpened(), []);
  const {
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isInserterOpened) {
      inserter.open();
    } else {
      inserter.close();
    }
  }, [inserter, isInserterOpened]);
  return [isInserterOpened, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(updater => {
    let isOpen = updater;

    if (typeof updater === 'function') {
      isOpen = updater((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_store__WEBPACK_IMPORTED_MODULE_2__.store).isInserterOpened());
    }

    setIsInserterOpened(isOpen);
  }, [setIsInserterOpened])];
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/config.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/config.js ***!
  \******************************************************************************************************************/
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

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js");


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

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/index.js ***!
  \*****************************************************************************************************************/
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/config.js");
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js");
/* harmony import */ var _dynamic_shortcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-shortcut */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js");


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
  className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-list",
  role: "list"
}, shortcuts.map((shortcut, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  className: "customize-widgets-keyboard-shortcut-help-modal__shortcut",
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
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('customize-widgets-keyboard-shortcut-help-modal__section', className)
}, !!title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
  className: "customize-widgets-keyboard-shortcut-help-modal__section-title"
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
  const {
    registerShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.store);
  registerShortcut({
    name: 'core/customize-widgets/keyboard-shortcuts',
    category: 'main',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display these keyboard shortcuts.'),
    keyCombination: {
      modifier: 'access',
      character: 'h'
    }
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.useShortcut)('core/customize-widgets/keyboard-shortcuts', toggleModal);

  if (!isModalActive) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: "customize-widgets-keyboard-shortcut-help-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Keyboard shortcuts'),
    onRequestClose: toggleModal
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutSection, {
    className: "customize-widgets-keyboard-shortcut-help-modal__main-shortcuts",
    shortcuts: ['core/customize-widgets/keyboard-shortcuts']
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

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js ***!
  \********************************************************************************************************************/
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("kbd", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel
  }, (Array.isArray(shortcut) ? shortcut : [shortcut]).map((character, index) => {
    if (character === '+') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: index
      }, character);
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("kbd", {
      key: index,
      className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-key"
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
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-description"
  }, description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-term"
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

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcuts/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcuts/index.js ***!
  \*******************************************************************************************************/
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */








function KeyboardShortcuts({
  undo,
  redo,
  save
}) {
  const {
    replaceBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    getBlockName,
    getSelectedBlockClientId,
    getBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);

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
    replaceBlocks(currentClientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.createBlock)(destinationBlockName, {
      level,
      content: attributes.content,
      ...{
        [destinationTextAlign]: attributes[textAlign]
      }
    }));
  };

  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/customize-widgets/undo', event => {
    undo();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/customize-widgets/redo', event => {
    redo();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/customize-widgets/save', event => {
    event.preventDefault();
    save();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/customize-widgets/transform-heading-to-paragraph', event => handleTextLevelShortcut(event, 0));
  [1, 2, 3, 4, 5, 6].forEach(level => {
    //the loop is based off on a constant therefore
    //the hook will execute the same way every time
    //eslint-disable-next-line react-hooks/rules-of-hooks
    (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)(`core/customize-widgets/transform-paragraph-to-heading-${level}`, event => handleTextLevelShortcut(event, level));
  });
  return null;
}

function KeyboardShortcutsRegister() {
  const {
    registerShortcut,
    unregisterShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    registerShortcut({
      name: 'core/customize-widgets/undo',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/customize-widgets/redo',
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
      name: 'core/customize-widgets/save',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/customize-widgets/transform-heading-to-paragraph',
      category: 'block-library',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Transform heading to paragraph.'),
      keyCombination: {
        modifier: 'access',
        character: `0`
      }
    });
    [1, 2, 3, 4, 5, 6].forEach(level => {
      registerShortcut({
        name: `core/customize-widgets/transform-paragraph-to-heading-${level}`,
        category: 'block-library',
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Transform paragraph to heading.'),
        keyCombination: {
          modifier: 'access',
          character: `${level}`
        }
      });
    });
    return () => {
      unregisterShortcut('core/customize-widgets/undo');
      unregisterShortcut('core/customize-widgets/redo');
      unregisterShortcut('core/customize-widgets/save');
    };
  }, [registerShortcut]);
  return null;
}

KeyboardShortcuts.Register = KeyboardShortcutsRegister;
/* harmony default export */ __webpack_exports__["default"] = (KeyboardShortcuts);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/more-menu/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/more-menu/index.js ***!
  \**********************************************************************************************/
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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../keyboard-shortcut-help-modal */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/index.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


function MoreMenu() {
  const [isKeyboardShortcutsModalActive, setIsKeyboardShortcutsModalVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleKeyboardShortcutsModal = () => setIsKeyboardShortcutsModalVisible(!isKeyboardShortcutsModalActive);

  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.useShortcut)('core/customize-widgets/keyboard-shortcuts', toggleKeyboardShortcutsModal);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.MoreMenuDropdown, {
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarDropdownMenu
  }, () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('View', 'noun')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.PreferenceToggleMenuItem, {
    scope: "core/customize-widgets",
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
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__.displayShortcut.access('h')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Keyboard shortcuts')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.PreferenceToggleMenuItem, {
    scope: "core/customize-widgets",
    name: "welcomeGuide",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Welcome Guide')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    role: "menuitem",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
    href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('https://wordpress.org/documentation/article/block-based-widgets-editor/'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Help'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
    as: "span"
  },
  /* translators: accessibility text */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('(opens in a new tab)')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preferences')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.PreferenceToggleMenuItem, {
    scope: "core/customize-widgets",
    name: "keepCaretInsideBlock",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block'),
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Aids screen readers by stopping text caret from leaving blocks.'),
    messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block activated'),
    messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block deactivated')
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isModalActive: isKeyboardShortcutsModalActive,
    toggleModal: toggleKeyboardShortcutsModal
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SidebarBlockEditor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_inspector_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block-inspector-button */ "./node_modules/@wordpress/customize-widgets/build-module/components/block-inspector-button/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header */ "./node_modules/@wordpress/customize-widgets/build-module/components/header/index.js");
/* harmony import */ var _inserter_use_inserter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../inserter/use-inserter */ "./node_modules/@wordpress/customize-widgets/build-module/components/inserter/use-inserter.js");
/* harmony import */ var _sidebar_editor_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar-editor-provider */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-editor-provider.js");
/* harmony import */ var _welcome_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../welcome-guide */ "./node_modules/@wordpress/customize-widgets/build-module/components/welcome-guide/index.js");
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keyboard-shortcuts */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcuts/index.js");
/* harmony import */ var _block_appender__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../block-appender */ "./node_modules/@wordpress/customize-widgets/build-module/components/block-appender/index.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */








function SidebarBlockEditor({
  blockEditorSettings,
  sidebar,
  inserter,
  inspector
}) {
  const [isInserterOpened, setIsInserterOpened] = (0,_inserter_use_inserter__WEBPACK_IMPORTED_MODULE_8__["default"])(inserter);
  const {
    hasUploadPermissions,
    isFixedToolbarActive,
    keepCaretInsideBlock,
    isWelcomeGuideActive
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    var _select$canUser;

    const {
      get
    } = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store);
    return {
      hasUploadPermissions: (_select$canUser = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).canUser('create', 'media')) !== null && _select$canUser !== void 0 ? _select$canUser : true,
      isFixedToolbarActive: !!get('core/customize-widgets', 'fixedToolbar'),
      keepCaretInsideBlock: !!get('core/customize-widgets', 'keepCaretInsideBlock'),
      isWelcomeGuideActive: !!get('core/customize-widgets', 'welcomeGuide')
    };
  }, []);
  const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let mediaUploadBlockEditor;

    if (hasUploadPermissions) {
      mediaUploadBlockEditor = ({
        onError,
        ...argumentsObject
      }) => {
        (0,_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_4__.uploadMedia)({
          wpAllowedMimeTypes: blockEditorSettings.allowedMimeTypes,
          onError: ({
            message
          }) => onError(message),
          ...argumentsObject
        });
      };
    }

    return { ...blockEditorSettings,
      __experimentalSetIsInserterOpened: setIsInserterOpened,
      mediaUpload: mediaUploadBlockEditor,
      hasFixedToolbar: isFixedToolbarActive,
      keepCaretInsideBlock,
      __unstableHasCustomAppender: true
    };
  }, [hasUploadPermissions, blockEditorSettings, isFixedToolbarActive, keepCaretInsideBlock, setIsInserterOpened]);

  if (isWelcomeGuideActive) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_welcome_guide__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sidebar: sidebar
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockEditorKeyboardShortcuts.Register, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_11__["default"].Register, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_editor_provider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sidebar: sidebar,
    settings: settings
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_11__["default"], {
    undo: sidebar.undo,
    redo: sidebar.redo,
    save: sidebar.save
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sidebar: sidebar,
    inserter: inserter,
    isInserterOpened: isInserterOpened,
    setIsInserterOpened: setIsInserterOpened,
    isFixedToolbarActive: isFixedToolbarActive
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.CopyHandler, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockTools, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableEditorStyles, {
    styles: settings.defaultEditorStyles
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockSelectionClearer, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.WritingFlow, {
    className: "editor-styles-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ObserveTyping, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockList, {
    renderAppender: _block_appender__WEBPACK_IMPORTED_MODULE_12__["default"]
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)( // This is a temporary hack to prevent button component inside <BlockInspector>
  // from submitting form when type="button" is not specified.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: event => event.preventDefault()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockInspector, null)), inspector.contentContainer[0])), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableBlockSettingsMenuFirstItem, null, ({
    onClose
  }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_inspector_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    inspector: inspector,
    closeMenu: onClose
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-adapter.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-adapter.js ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SidebarAdapter; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./node_modules/@wordpress/customize-widgets/build-module/utils.js");
/**
 * Internal dependencies
 */

const {
  wp
} = window;

function parseWidgetId(widgetId) {
  const matches = widgetId.match(/^(.+)-(\d+)$/);

  if (matches) {
    return {
      idBase: matches[1],
      number: parseInt(matches[2], 10)
    };
  } // Likely an old single widget.


  return {
    idBase: widgetId
  };
}

function widgetIdToSettingId(widgetId) {
  const {
    idBase,
    number
  } = parseWidgetId(widgetId);

  if (number) {
    return `widget_${idBase}[${number}]`;
  }

  return `widget_${idBase}`;
}
/**
 * This is a custom debounce function to call different callbacks depending on
 * whether it's the _leading_ call or not.
 *
 * @param {Function} leading  The callback that gets called first.
 * @param {Function} callback The callback that gets called after the first time.
 * @param {number}   timeout  The debounced time in milliseconds.
 * @return {Function} The debounced function.
 */


function debounce(leading, callback, timeout) {
  let isLeading = false;
  let timerID;

  function debounced(...args) {
    const result = (isLeading ? callback : leading).apply(this, args);
    isLeading = true;
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      isLeading = false;
    }, timeout);
    return result;
  }

  debounced.cancel = () => {
    isLeading = false;
    clearTimeout(timerID);
  };

  return debounced;
}

class SidebarAdapter {
  constructor(setting, api) {
    this.setting = setting;
    this.api = api;
    this.locked = false;
    this.widgetsCache = new WeakMap();
    this.subscribers = new Set();
    this.history = [this._getWidgetIds().map(widgetId => this.getWidget(widgetId))];
    this.historyIndex = 0;
    this.historySubscribers = new Set(); // Debounce the input for 1 second.

    this._debounceSetHistory = debounce(this._pushHistory, this._replaceHistory, 1000);
    this.setting.bind(this._handleSettingChange.bind(this));
    this.api.bind('change', this._handleAllSettingsChange.bind(this));
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
    this.save = this.save.bind(this);
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  getWidgets() {
    return this.history[this.historyIndex];
  }

  _emit(...args) {
    for (const callback of this.subscribers) {
      callback(...args);
    }
  }

  _getWidgetIds() {
    return this.setting.get();
  }

  _pushHistory() {
    this.history = [...this.history.slice(0, this.historyIndex + 1), this._getWidgetIds().map(widgetId => this.getWidget(widgetId))];
    this.historyIndex += 1;
    this.historySubscribers.forEach(listener => listener());
  }

  _replaceHistory() {
    this.history[this.historyIndex] = this._getWidgetIds().map(widgetId => this.getWidget(widgetId));
  }

  _handleSettingChange() {
    if (this.locked) {
      return;
    }

    const prevWidgets = this.getWidgets();

    this._pushHistory();

    this._emit(prevWidgets, this.getWidgets());
  }

  _handleAllSettingsChange(setting) {
    if (this.locked) {
      return;
    }

    if (!setting.id.startsWith('widget_')) {
      return;
    }

    const widgetId = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.settingIdToWidgetId)(setting.id);

    if (!this.setting.get().includes(widgetId)) {
      return;
    }

    const prevWidgets = this.getWidgets();

    this._pushHistory();

    this._emit(prevWidgets, this.getWidgets());
  }

  _createWidget(widget) {
    const widgetModel = wp.customize.Widgets.availableWidgets.findWhere({
      id_base: widget.idBase
    });
    let number = widget.number;

    if (widgetModel.get('is_multi') && !number) {
      widgetModel.set('multi_number', widgetModel.get('multi_number') + 1);
      number = widgetModel.get('multi_number');
    }

    const settingId = number ? `widget_${widget.idBase}[${number}]` : `widget_${widget.idBase}`;
    const settingArgs = {
      transport: wp.customize.Widgets.data.selectiveRefreshableWidgets[widgetModel.get('id_base')] ? 'postMessage' : 'refresh',
      previewer: this.setting.previewer
    };
    const setting = this.api.create(settingId, settingId, '', settingArgs);
    setting.set(widget.instance);
    const widgetId = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.settingIdToWidgetId)(settingId);
    return widgetId;
  }

  _removeWidget(widget) {
    const settingId = widgetIdToSettingId(widget.id);
    const setting = this.api(settingId);

    if (setting) {
      const instance = setting.get();
      this.widgetsCache.delete(instance);
    }

    this.api.remove(settingId);
  }

  _updateWidget(widget) {
    const prevWidget = this.getWidget(widget.id); // Bail out update if nothing changed.

    if (prevWidget === widget) {
      return widget.id;
    } // Update existing setting if only the widget's instance changed.


    if (prevWidget.idBase && widget.idBase && prevWidget.idBase === widget.idBase) {
      const settingId = widgetIdToSettingId(widget.id);
      this.api(settingId).set(widget.instance);
      return widget.id;
    } // Otherwise delete and re-create.


    this._removeWidget(widget);

    return this._createWidget(widget);
  }

  getWidget(widgetId) {
    if (!widgetId) {
      return null;
    }

    const {
      idBase,
      number
    } = parseWidgetId(widgetId);
    const settingId = widgetIdToSettingId(widgetId);
    const setting = this.api(settingId);

    if (!setting) {
      return null;
    }

    const instance = setting.get();

    if (this.widgetsCache.has(instance)) {
      return this.widgetsCache.get(instance);
    }

    const widget = {
      id: widgetId,
      idBase,
      number,
      instance
    };
    this.widgetsCache.set(instance, widget);
    return widget;
  }

  _updateWidgets(nextWidgets) {
    this.locked = true;
    const addedWidgetIds = [];
    const nextWidgetIds = nextWidgets.map(nextWidget => {
      if (nextWidget.id && this.getWidget(nextWidget.id)) {
        addedWidgetIds.push(null);
        return this._updateWidget(nextWidget);
      }

      const widgetId = this._createWidget(nextWidget);

      addedWidgetIds.push(widgetId);
      return widgetId;
    });
    const deletedWidgets = this.getWidgets().filter(widget => !nextWidgetIds.includes(widget.id));
    deletedWidgets.forEach(widget => this._removeWidget(widget));
    this.setting.set(nextWidgetIds);
    this.locked = false;
    return addedWidgetIds;
  }

  setWidgets(nextWidgets) {
    const addedWidgetIds = this._updateWidgets(nextWidgets);

    this._debounceSetHistory();

    return addedWidgetIds;
  }
  /**
   * Undo/Redo related features
   */


  hasUndo() {
    return this.historyIndex > 0;
  }

  hasRedo() {
    return this.historyIndex < this.history.length - 1;
  }

  _seek(historyIndex) {
    const currentWidgets = this.getWidgets();
    this.historyIndex = historyIndex;
    const widgets = this.history[this.historyIndex];

    this._updateWidgets(widgets);

    this._emit(currentWidgets, this.getWidgets());

    this.historySubscribers.forEach(listener => listener());

    this._debounceSetHistory.cancel();
  }

  undo() {
    if (!this.hasUndo()) {
      return;
    }

    this._seek(this.historyIndex - 1);
  }

  redo() {
    if (!this.hasRedo()) {
      return;
    }

    this._seek(this.historyIndex + 1);
  }

  subscribeHistory(listener) {
    this.historySubscribers.add(listener);
    return () => {
      this.historySubscribers.delete(listener);
    };
  }

  save() {
    this.api.previewer.save();
  }

}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-editor-provider.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-editor-provider.js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SidebarEditorProvider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_sidebar_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-sidebar-block-editor */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/use-sidebar-block-editor.js");
/* harmony import */ var _focus_control_use_blocks_focus_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../focus-control/use-blocks-focus-control */ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/use-blocks-focus-control.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/customize-widgets/build-module/lock-unlock.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const {
  ExperimentalBlockEditorProvider
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function SidebarEditorProvider({
  sidebar,
  settings,
  children
}) {
  const [blocks, onInput, onChange] = (0,_use_sidebar_block_editor__WEBPACK_IMPORTED_MODULE_2__["default"])(sidebar);
  (0,_focus_control_use_blocks_focus_control__WEBPACK_IMPORTED_MODULE_3__["default"])(blocks);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExperimentalBlockEditorProvider, {
    value: blocks,
    onInput: onInput,
    onChange: onChange,
    settings: settings,
    useSubRegistry: false
  }, children);
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/use-sidebar-block-editor.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/use-sidebar-block-editor.js ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useSidebarBlockEditor; }
/* harmony export */ });
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal/es6 */ "./node_modules/fast-deep-equal/es6/index.js");
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./node_modules/@wordpress/customize-widgets/build-module/utils.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function widgetsToBlocks(widgets) {
  return widgets.map(widget => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.widgetToBlock)(widget));
}

function useSidebarBlockEditor(sidebar) {
  const [blocks, setBlocks] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(() => widgetsToBlocks(sidebar.getWidgets()));
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return sidebar.subscribe((prevWidgets, nextWidgets) => {
      setBlocks(prevBlocks => {
        const prevWidgetsMap = new Map(prevWidgets.map(widget => [widget.id, widget]));
        const prevBlocksMap = new Map(prevBlocks.map(block => [(0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.getWidgetIdFromBlock)(block), block]));
        const nextBlocks = nextWidgets.map(nextWidget => {
          const prevWidget = prevWidgetsMap.get(nextWidget.id); // Bail out updates.

          if (prevWidget && prevWidget === nextWidget) {
            return prevBlocksMap.get(nextWidget.id);
          }

          return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.widgetToBlock)(nextWidget);
        }); // Bail out updates.

        if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default()(prevBlocks, nextBlocks)) {
          return prevBlocks;
        }

        return nextBlocks;
      });
    });
  }, [sidebar]);
  const onChangeBlocks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(nextBlocks => {
    setBlocks(prevBlocks => {
      if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default()(prevBlocks, nextBlocks)) {
        return prevBlocks;
      }

      const prevBlocksMap = new Map(prevBlocks.map(block => [(0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.getWidgetIdFromBlock)(block), block]));
      const nextWidgets = nextBlocks.map(nextBlock => {
        const widgetId = (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.getWidgetIdFromBlock)(nextBlock); // Update existing widgets.

        if (widgetId && prevBlocksMap.has(widgetId)) {
          const prevBlock = prevBlocksMap.get(widgetId);
          const prevWidget = sidebar.getWidget(widgetId); // Bail out updates by returning the previous widgets.
          // Deep equality is necessary until the block editor's internals changes.

          if (fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default()(nextBlock, prevBlock) && prevWidget) {
            return prevWidget;
          }

          return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.blockToWidget)(nextBlock, prevWidget);
        } // Add a new widget.


        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.blockToWidget)(nextBlock);
      }); // Bail out updates if the updated widgets are the same.

      if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default()(sidebar.getWidgets(), nextWidgets)) {
        return prevBlocks;
      }

      const addedWidgetIds = sidebar.setWidgets(nextWidgets);
      return nextBlocks.reduce((updatedNextBlocks, nextBlock, index) => {
        const addedWidgetId = addedWidgetIds[index];

        if (addedWidgetId !== null) {
          // Only create a new instance if necessary to prevent
          // the whole editor from re-rendering on every edit.
          if (updatedNextBlocks === nextBlocks) {
            updatedNextBlocks = nextBlocks.slice();
          }

          updatedNextBlocks[index] = (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.addWidgetIdToBlock)(nextBlock, addedWidgetId);
        }

        return updatedNextBlocks;
      }, nextBlocks);
    });
  }, [sidebar]);
  return [blocks, onChangeBlocks, onChangeBlocks];
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarControlsContext": function() { return /* binding */ SidebarControlsContext; },
/* harmony export */   "default": function() { return /* binding */ SidebarControls; },
/* harmony export */   "useActiveSidebarControl": function() { return /* binding */ useActiveSidebarControl; },
/* harmony export */   "useSidebarControls": function() { return /* binding */ useSidebarControls; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */

const SidebarControlsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function SidebarControls({
  sidebarControls,
  activeSidebarControl,
  children
}) {
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sidebarControls,
    activeSidebarControl
  }), [sidebarControls, activeSidebarControl]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SidebarControlsContext.Provider, {
    value: context
  }, children);
}
function useSidebarControls() {
  const {
    sidebarControls
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(SidebarControlsContext);
  return sidebarControls;
}
function useActiveSidebarControl() {
  const {
    activeSidebarControl
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(SidebarControlsContext);
  return activeSidebarControl;
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/welcome-guide/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/welcome-guide/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuide; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */




function WelcomeGuide({
  sidebar
}) {
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_4__.store);
  const isEntirelyBlockWidgets = sidebar.getWidgets().every(widget => widget.id.startsWith('block-'));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "customize-widgets-welcome-guide"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "customize-widgets-welcome-guide__image__wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    srcSet: "https://s.w.org/images/block-editor/welcome-editor.svg",
    media: "(prefers-reduced-motion: reduce)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "customize-widgets-welcome-guide__image",
    src: "https://s.w.org/images/block-editor/welcome-editor.gif",
    width: "312",
    height: "240",
    alt: ""
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "customize-widgets-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Welcome to block Widgets')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "customize-widgets-welcome-guide__text"
  }, isEntirelyBlockWidgets ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your theme provides different “block” areas for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can now add any block to your site’s widget areas. Don’t worry, all of your favorite widgets still work flawlessly.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "customize-widgets-welcome-guide__button",
    variant: "primary",
    onClick: () => toggle('core/customize-widgets', 'welcomeGuide')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Got it')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    className: "customize-widgets-welcome-guide__separator"
  }), !isEntirelyBlockWidgets && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "customize-widgets-welcome-guide__more-info"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Want to stick with the old widgets?'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://wordpress.org/plugins/classic-widgets/')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Get the Classic Widgets plugin.'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "customize-widgets-welcome-guide__more-info"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('New to the block editor?'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://wordpress.org/documentation/article/wordpress-block-editor/')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Here's a detailed guide."))));
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/controls/inserter-outer-section.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/controls/inserter-outer-section.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getInserterOuterSection; }
/* harmony export */ });
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom */ "@wordpress/dom");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function getInserterOuterSection() {
  const {
    wp: {
      customize
    }
  } = window;
  const OuterSection = customize.OuterSection; // Override the OuterSection class to handle multiple outer sections.
  // It closes all the other outer sections whenever one is opened.
  // The result is that at most one outer section can be opened at the same time.

  customize.OuterSection = class extends OuterSection {
    onChangeExpanded(expanded, args) {
      if (expanded) {
        customize.section.each(section => {
          if (section.params.type === 'outer' && section.id !== this.id) {
            if (section.expanded()) {
              section.collapse();
            }
          }
        });
      }

      return super.onChangeExpanded(expanded, args);
    }

  }; // Handle constructor so that "params.type" can be correctly pointed to "outer".

  customize.sectionConstructor.outer = customize.OuterSection;
  return class InserterOuterSection extends customize.OuterSection {
    constructor(...args) {
      super(...args); // This is necessary since we're creating a new class which is not identical to the original OuterSection.
      // @See https://github.com/WordPress/wordpress-develop/blob/42b05c397c50d9dc244083eff52991413909d4bd/src/js/_enqueues/wp/customize/controls.js#L1427-L1436

      this.params.type = 'outer';
      this.activeElementBeforeExpanded = null;
      const ownerWindow = this.contentContainer[0].ownerDocument.defaultView; // Handle closing the inserter when pressing the Escape key.

      ownerWindow.addEventListener('keydown', event => {
        if (this.expanded() && (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__.ESCAPE || event.code === 'Escape') && !event.defaultPrevented) {
          event.preventDefault();
          event.stopPropagation();
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store).setIsInserterOpened(false);
        }
      }, // Use capture mode to make this run before other event listeners.
      true);
      this.contentContainer.addClass('widgets-inserter'); // Set a flag if the state is being changed from open() or close().
      // Don't propagate the event if it's an internal action to prevent infinite loop.

      this.isFromInternalAction = false;
      this.expanded.bind(() => {
        if (!this.isFromInternalAction) {
          // Propagate the event to React to sync the state.
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store).setIsInserterOpened(this.expanded());
        }

        this.isFromInternalAction = false;
      });
    }

    open() {
      if (!this.expanded()) {
        const contentContainer = this.contentContainer[0];
        this.activeElementBeforeExpanded = contentContainer.ownerDocument.activeElement;
        this.isFromInternalAction = true;
        this.expand({
          completeCallback() {
            // We have to do this in a "completeCallback" or else the elements will not yet be visible/tabbable.
            // The first one should be the close button,
            // we want to skip it and choose the second one instead, which is the search box.
            const searchBox = _wordpress_dom__WEBPACK_IMPORTED_MODULE_1__.focus.tabbable.find(contentContainer)[1];

            if (searchBox) {
              searchBox.focus();
            }
          }

        });
      }
    }

    close() {
      if (this.expanded()) {
        const contentContainer = this.contentContainer[0];
        const activeElement = contentContainer.ownerDocument.activeElement;
        this.isFromInternalAction = true;
        this.collapse({
          completeCallback() {
            // Return back the focus when closing the inserter.
            // Only do this if the active element which triggers the action is inside the inserter,
            // (the close button for instance). In that case the focus will be lost.
            // Otherwise, we don't hijack the focus when the user is focusing on other elements
            // (like the quick inserter).
            if (contentContainer.contains(activeElement)) {
              // Return back the focus when closing the inserter.
              if (this.activeElementBeforeExpanded) {
                this.activeElementBeforeExpanded.focus();
              }
            }
          }

        });
      }
    }

  };
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/controls/inspector-section.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/controls/inspector-section.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getInspectorSection; }
/* harmony export */ });
function getInspectorSection() {
  const {
    wp: {
      customize
    }
  } = window;
  return class InspectorSection extends customize.Section {
    constructor(id, options) {
      super(id, options);
      this.parentSection = options.parentSection;
      this.returnFocusWhenClose = null;
      this._isOpen = false;
    }

    get isOpen() {
      return this._isOpen;
    }

    set isOpen(value) {
      this._isOpen = value;
      this.triggerActiveCallbacks();
    }

    ready() {
      this.contentContainer[0].classList.add('customize-widgets-layout__inspector');
    }

    isContextuallyActive() {
      return this.isOpen;
    }

    onChangeExpanded(expanded, args) {
      super.onChangeExpanded(expanded, args);

      if (this.parentSection && !args.unchanged) {
        if (expanded) {
          this.parentSection.collapse({
            manualTransition: true
          });
        } else {
          this.parentSection.expand({
            manualTransition: true,
            completeCallback: () => {
              // Return focus after finishing the transition.
              if (this.returnFocusWhenClose && !this.contentContainer[0].contains(this.returnFocusWhenClose)) {
                this.returnFocusWhenClose.focus();
              }
            }
          });
        }
      }
    }

    open({
      returnFocusWhenClose
    } = {}) {
      this.isOpen = true;
      this.returnFocusWhenClose = returnFocusWhenClose;
      this.expand({
        allowMultiple: true
      });
    }

    close() {
      this.collapse({
        allowMultiple: true
      });
    }

    collapse(options) {
      // Overridden collapse() function. Mostly call the parent collapse(), but also
      // move our .isOpen to false.
      // Initially, I tried tracking this with onChangeExpanded(), but it doesn't work
      // because the block settings sidebar is a layer "on top of" the G editor sidebar.
      //
      // For example, when closing the block settings sidebar, the G
      // editor sidebar would display, and onChangeExpanded in
      // inspector-section would run with expanded=true, but I want
      // isOpen to be false when the block settings is closed.
      this.isOpen = false;
      super.collapse(options);
    }

    triggerActiveCallbacks() {
      // Manually fire the callbacks associated with moving this.active
      // from false to true.  "active" is always true for this section,
      // and "isContextuallyActive" reflects if the block settings
      // sidebar is currently visible, that is, it has replaced the main
      // Gutenberg view.
      // The WP customizer only checks ".isContextuallyActive()" when
      // ".active" changes values. But our ".active" never changes value.
      // The WP customizer never foresaw a section being used a way we
      // fit the block settings sidebar into a section. By manually
      // triggering the "this.active" callbacks, we force the WP
      // customizer to query our .isContextuallyActive() function and
      // update its view of our status.
      this.active.callbacks.fireWith(this.active, [false, true]);
    }

  };
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-control.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-control.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getSidebarControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sidebar_block_editor_sidebar_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidebar-block-editor/sidebar-adapter */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-adapter.js");
/* harmony import */ var _inserter_outer_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inserter-outer-section */ "./node_modules/@wordpress/customize-widgets/build-module/controls/inserter-outer-section.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





const getInserterId = controlId => `widgets-inserter-${controlId}`;

function getSidebarControl() {
  const {
    wp: {
      customize
    }
  } = window;
  return class SidebarControl extends customize.Control {
    constructor(...args) {
      super(...args);
      this.subscribers = new Set();
    }

    ready() {
      const InserterOuterSection = (0,_inserter_outer_section__WEBPACK_IMPORTED_MODULE_2__["default"])();
      this.inserter = new InserterOuterSection(getInserterId(this.id), {});
      customize.section.add(this.inserter);
      this.sectionInstance = customize.section(this.section());
      this.inspector = this.sectionInstance.inspector;
      this.sidebarAdapter = new _components_sidebar_block_editor_sidebar_adapter__WEBPACK_IMPORTED_MODULE_1__["default"](this.setting, customize);
    }

    subscribe(callback) {
      this.subscribers.add(callback);
      return () => {
        this.subscribers.delete(callback);
      };
    }

    onChangeSectionExpanded(expanded, args) {
      if (!args.unchanged) {
        // Close the inserter when the section collapses.
        if (!expanded) {
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store).setIsInserterOpened(false);
        }

        this.subscribers.forEach(subscriber => subscriber(expanded, args));
      }
    }

  };
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-section.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-section.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getSidebarSection; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector-section */ "./node_modules/@wordpress/customize-widgets/build-module/controls/inspector-section.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const getInspectorSectionId = sidebarId => `widgets-inspector-${sidebarId}`;

function getSidebarSection() {
  const {
    wp: {
      customize
    }
  } = window;
  const reduceMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = reduceMotionMediaQuery.matches;
  reduceMotionMediaQuery.addEventListener('change', event => {
    isReducedMotion = event.matches;
  });
  return class SidebarSection extends customize.Section {
    ready() {
      const InspectorSection = (0,_inspector_section__WEBPACK_IMPORTED_MODULE_1__["default"])();
      this.inspector = new InspectorSection(getInspectorSectionId(this.id), {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings'),
        parentSection: this,
        customizeAction: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Customizing'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Widgets'), this.params.title].join(' ▸ ')
      });
      customize.section.add(this.inspector);
      this.contentContainer[0].classList.add('customize-widgets__sidebar-section');
    }

    hasSubSectionOpened() {
      return this.inspector.expanded();
    }

    onChangeExpanded(expanded, _args) {
      const controls = this.controls();
      const args = { ..._args,

        completeCallback() {
          controls.forEach(control => {
            control.onChangeSectionExpanded?.(expanded, args);
          });
          _args.completeCallback?.();
        }

      };

      if (args.manualTransition) {
        if (expanded) {
          this.contentContainer.addClass(['busy', 'open']);
          this.contentContainer.removeClass('is-sub-section-open');
          this.contentContainer.closest('.wp-full-overlay').addClass('section-open');
        } else {
          this.contentContainer.addClass(['busy', 'is-sub-section-open']);
          this.contentContainer.closest('.wp-full-overlay').addClass('section-open');
          this.contentContainer.removeClass('open');
        }

        const handleTransitionEnd = () => {
          this.contentContainer.removeClass('busy');
          args.completeCallback();
        };

        if (isReducedMotion) {
          handleTransitionEnd();
        } else {
          this.contentContainer.one('transitionend', handleTransitionEnd);
        }
      } else {
        super.onChangeExpanded(expanded, args);
      }
    }

  };
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/filters/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/filters/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _move_to_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move-to-sidebar */ "./node_modules/@wordpress/customize-widgets/build-module/filters/move-to-sidebar.js");
/* harmony import */ var _replace_media_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replace-media-upload */ "./node_modules/@wordpress/customize-widgets/build-module/filters/replace-media-upload.js");
/* harmony import */ var _wide_widget_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wide-widget-display */ "./node_modules/@wordpress/customize-widgets/build-module/filters/wide-widget-display.js");
/**
 * Internal dependencies
 */





/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/filters/move-to-sidebar.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/filters/move-to-sidebar.js ***!
  \*******************************************************************************************/
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
/* harmony import */ var _components_sidebar_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sidebar-controls */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js");
/* harmony import */ var _components_focus_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/focus-control */ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/customize-widgets/build-module/utils.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const withMoveToSidebarToolbarItem = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => props => {
  let widgetId = (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_5__.getWidgetIdFromBlock)(props);
  const sidebarControls = (0,_components_sidebar_controls__WEBPACK_IMPORTED_MODULE_6__.useSidebarControls)();
  const activeSidebarControl = (0,_components_sidebar_controls__WEBPACK_IMPORTED_MODULE_6__.useActiveSidebarControl)();
  const hasMultipleSidebars = sidebarControls?.length > 1;
  const blockName = props.name;
  const clientId = props.clientId;
  const canInsertBlockInSidebar = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    // Use an empty string to represent the root block list, which
    // in the customizer editor represents a sidebar/widget area.
    return select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).canInsertBlockType(blockName, '');
  }, [blockName]);
  const block = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlock(clientId), [clientId]);
  const {
    removeBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  const [, focusWidget] = (0,_components_focus_control__WEBPACK_IMPORTED_MODULE_7__.useFocusControl)();

  function moveToSidebar(sidebarControlId) {
    const newSidebarControl = sidebarControls.find(sidebarControl => sidebarControl.id === sidebarControlId);

    if (widgetId) {
      /**
       * If there's a widgetId, move it to the other sidebar.
       */
      const oldSetting = activeSidebarControl.setting;
      const newSetting = newSidebarControl.setting;
      oldSetting(oldSetting().filter(id => id !== widgetId));
      newSetting([...newSetting(), widgetId]);
    } else {
      /**
       * If there isn't a widgetId, it's most likely a inner block.
       * First, remove the block in the original sidebar,
       * then, create a new widget in the new sidebar and get back its widgetId.
       */
      const sidebarAdapter = newSidebarControl.sidebarAdapter;
      removeBlock(clientId);
      const addedWidgetIds = sidebarAdapter.setWidgets([...sidebarAdapter.getWidgets(), (0,_utils__WEBPACK_IMPORTED_MODULE_8__.blockToWidget)(block)]); // The last non-null id is the added widget's id.

      widgetId = addedWidgetIds.reverse().find(id => !!id);
    } // Move focus to the moved widget and expand the sidebar.


    focusWidget(widgetId);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, { ...props
  }), hasMultipleSidebars && canInsertBlockInSidebar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_5__.MoveToWidgetArea, {
    widgetAreas: sidebarControls.map(sidebarControl => ({
      id: sidebarControl.id,
      name: sidebarControl.params.label,
      description: sidebarControl.params.description
    })),
    currentWidgetAreaId: activeSidebarControl?.id,
    onSelect: moveToSidebar
  })));
}, 'withMoveToSidebarToolbarItem');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockEdit', 'core/customize-widgets/block-edit', withMoveToSidebarToolbarItem);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/filters/replace-media-upload.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/filters/replace-media-upload.js ***!
  \************************************************************************************************/
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

/***/ "./node_modules/@wordpress/customize-widgets/build-module/filters/wide-widget-display.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/filters/wide-widget-display.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


const {
  wp
} = window;
const withWideWidgetDisplay = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => props => {
  var _wp$customize$Widgets;

  const {
    idBase
  } = props.attributes;
  const isWide = (_wp$customize$Widgets = wp.customize.Widgets.data.availableWidgets.find(widget => widget.id_base === idBase)?.is_wide) !== null && _wp$customize$Widgets !== void 0 ? _wp$customize$Widgets : false;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, { ...props,
    isWide: isWide
  });
}, 'withWideWidgetDisplay');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'core/customize-widgets/wide-widget-display', withWideWidgetDisplay);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/lock-unlock.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/lock-unlock.js ***!
  \*******************************************************************************/
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
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/customize-widgets');


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/actions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/actions.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setIsInserterOpened": function() { return /* binding */ setIsInserterOpened; }
/* harmony export */ });
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


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/constants.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/constants.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; }
/* harmony export */ });
/**
 * Module Constants
 */
const STORE_NAME = 'core/customize-widgets';


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/customize-widgets/build-module/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/customize-widgets/build-module/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/customize-widgets/build-module/store/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/customize-widgets/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registering-a-store
 *
 * @type {Object}
 */

const storeConfig = {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__
};
/**
 * Store definition for the edit widgets namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME, storeConfig);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/reducer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/reducer.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Reducer tracking whether the inserter is open.
 *
 * @param {boolean|Object} state
 * @param {Object}         action
 */

function blockInserterPanel(state = false, action) {
  switch (action.type) {
    case 'SET_IS_INSERTER_OPENED':
      return action.value;
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  blockInserterPanel
}));


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/selectors.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/selectors.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalGetInsertionPoint": function() { return /* binding */ __experimentalGetInsertionPoint; },
/* harmony export */   "isInserterOpened": function() { return /* binding */ isInserterOpened; }
/* harmony export */ });
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


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/utils.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockToWidget": function() { return /* binding */ blockToWidget; },
/* harmony export */   "settingIdToWidgetId": function() { return /* binding */ settingIdToWidgetId; },
/* harmony export */   "widgetToBlock": function() { return /* binding */ widgetToBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__);
// @ts-check

/**
 * WordPress dependencies
 */


/**
 * Convert settingId to widgetId.
 *
 * @param {string} settingId The setting id.
 * @return {string} The widget id.
 */

function settingIdToWidgetId(settingId) {
  const matches = settingId.match(/^widget_(.+)(?:\[(\d+)\])$/);

  if (matches) {
    const idBase = matches[1];
    const number = parseInt(matches[2], 10);
    return `${idBase}-${number}`;
  }

  return settingId;
}
/**
 * Transform a block to a customizable widget.
 *
 * @param {WPBlock} block          The block to be transformed from.
 * @param {Object}  existingWidget The widget to be extended from.
 * @return {Object} The transformed widget.
 */

function blockToWidget(block, existingWidget = null) {
  let widget;
  const isValidLegacyWidgetBlock = block.name === 'core/legacy-widget' && (block.attributes.id || block.attributes.instance);

  if (isValidLegacyWidgetBlock) {
    if (block.attributes.id) {
      // Widget that does not extend WP_Widget.
      widget = {
        id: block.attributes.id
      };
    } else {
      const {
        encoded,
        hash,
        raw,
        ...rest
      } = block.attributes.instance; // Widget that extends WP_Widget.

      widget = {
        idBase: block.attributes.idBase,
        instance: { ...existingWidget?.instance,
          // Required only for the customizer.
          is_widget_customizer_js_value: true,
          encoded_serialized_instance: encoded,
          instance_hash_key: hash,
          raw_instance: raw,
          ...rest
        }
      };
    }
  } else {
    const instance = {
      content: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.serialize)(block)
    };
    widget = {
      idBase: 'block',
      widgetClass: 'WP_Widget_Block',
      instance: {
        raw_instance: instance
      }
    };
  }

  const {
    form,
    rendered,
    ...restExistingWidget
  } = existingWidget || {};
  return { ...restExistingWidget,
    ...widget
  };
}
/**
 * Transform a widget to a block.
 *
 * @param {Object} widget          The widget to be transformed from.
 * @param {string} widget.id       The widget id.
 * @param {string} widget.idBase   The id base of the widget.
 * @param {number} widget.number   The number/index of the widget.
 * @param {Object} widget.instance The instance of the widget.
 * @return {WPBlock} The transformed block.
 */

function widgetToBlock({
  id,
  idBase,
  number,
  instance
}) {
  let block;
  const {
    encoded_serialized_instance: encoded,
    instance_hash_key: hash,
    raw_instance: raw,
    ...rest
  } = instance;

  if (idBase === 'block') {
    var _raw$content;

    const parsedBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.parse)((_raw$content = raw.content) !== null && _raw$content !== void 0 ? _raw$content : '', {
      __unstableSkipAutop: true
    });
    block = parsedBlocks.length ? parsedBlocks[0] : (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {});
  } else if (number) {
    // Widget that extends WP_Widget.
    block = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/legacy-widget', {
      idBase,
      instance: {
        encoded,
        hash,
        raw,
        ...rest
      }
    });
  } else {
    // Widget that does not extend WP_Widget.
    block = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/legacy-widget', {
      id
    });
  }

  return (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__.addWidgetIdToBlock)(block, id);
}


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

/***/ "./node_modules/fast-deep-equal/es6/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-deep-equal/es6/index.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";


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

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["a11y"];

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

/***/ "@wordpress/is-shallow-equal":
/*!****************************************!*\
  !*** external ["wp","isShallowEqual"] ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["isShallowEqual"];

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
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/index.js ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": function() { return /* binding */ initialize; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_customize_widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customize-widgets */ "./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/index.js");
/* harmony import */ var _controls_sidebar_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/sidebar-section */ "./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-section.js");
/* harmony import */ var _controls_sidebar_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/sidebar-control */ "./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-control.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters */ "./node_modules/@wordpress/customize-widgets/build-module/filters/index.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





const {
  wp
} = window;
const DISABLED_BLOCKS = ['core/more', 'core/block', 'core/freeform', 'core/template-part'];
const ENABLE_EXPERIMENTAL_FSE_BLOCKS = false;
/**
 * Initializes the widgets block editor in the customizer.
 *
 * @param {string} editorName          The editor name.
 * @param {Object} blockEditorSettings Block editor settings.
 */

function initialize(editorName, blockEditorSettings) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store).setDefaults('core/customize-widgets', {
    fixedToolbar: false,
    welcomeGuide: true
  });

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.store).__experimentalReapplyBlockTypeFilters();

  const coreBlocks = (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__.__experimentalGetCoreBlocks)().filter(block => {
    return !(DISABLED_BLOCKS.includes(block.name) || block.name.startsWith('core/post') || block.name.startsWith('core/query') || block.name.startsWith('core/site') || block.name.startsWith('core/navigation'));
  });

  (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__.registerCoreBlocks)(coreBlocks);
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__.registerLegacyWidgetBlock)();

  if (false) {}

  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__.registerLegacyWidgetVariations)(blockEditorSettings);
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__.registerWidgetGroupBlock)(); // As we are unregistering `core/freeform` to avoid the Classic block, we must
  // replace it with something as the default freeform content handler. Failure to
  // do this will result in errors in the default block parser.
  // see: https://github.com/WordPress/gutenberg/issues/33097

  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.setFreeformContentHandlerName)('core/html');
  const SidebarControl = (0,_controls_sidebar_control__WEBPACK_IMPORTED_MODULE_8__["default"])(blockEditorSettings);
  wp.customize.sectionConstructor.sidebar = (0,_controls_sidebar_section__WEBPACK_IMPORTED_MODULE_7__["default"])();
  wp.customize.controlConstructor.sidebar_block_editor = SidebarControl;
  const container = document.createElement('div');
  document.body.appendChild(container);
  wp.customize.bind('ready', () => {
    const sidebarControls = [];
    wp.customize.control.each(control => {
      if (control instanceof SidebarControl) {
        sidebarControls.push(control);
      }
    });
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container).render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_customize_widgets__WEBPACK_IMPORTED_MODULE_6__["default"], {
      api: wp.customize,
      sidebarControls: sidebarControls,
      blockEditorSettings: blockEditorSettings
    }));
  });
}

}();
(window.wp = window.wp || {}).customizeWidgets = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=customize-widgets.js.map