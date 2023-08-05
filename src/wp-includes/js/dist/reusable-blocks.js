/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/symbol.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/symbol.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const symbol = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (symbol);


/***/ }),

/***/ "./node_modules/@wordpress/reusable-blocks/build-module/components/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/components/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReusableBlocksMenuItems": function() { return /* reexport safe */ _reusable_blocks_menu_items__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _reusable_blocks_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reusable-blocks-menu-items */ "./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/index.js");



/***/ }),

/***/ "./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/index.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ReusableBlocksMenuItems; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reusable_block_convert_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reusable-block-convert-button */ "./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-block-convert-button.js");
/* harmony import */ var _reusable_blocks_manage_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reusable-blocks-manage-button */ "./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-blocks-manage-button.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function ReusableBlocksMenuItems({
  rootClientId
}) {
  const clientIds = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getSelectedBlockClientIds(), []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reusable_block_convert_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clientIds: clientIds,
    rootClientId: rootClientId
  }), clientIds.length === 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reusable_blocks_manage_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clientId: clientIds[0]
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-block-convert-button.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-block-convert-button.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ReusableBlockConvertButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/symbol.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/reusable-blocks/build-module/store/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/reusable-blocks/build-module/lock-unlock.js");


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



/**
 * Menu control to convert block(s) to reusable block.
 *
 * @param {Object}   props              Component props.
 * @param {string[]} props.clientIds    Client ids of selected blocks.
 * @param {string}   props.rootClientId ID of the currently selected top-level block.
 * @return {import('@wordpress/element').WPComponent} The menu control or null.
 */

function ReusableBlockConvertButton({
  clientIds,
  rootClientId
}) {
  const {
    useReusableBlocksRenameHint,
    ReusableBlocksRenameHint
  } = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_9__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.privateApis);
  const showRenameHint = useReusableBlocksRenameHint();
  const [syncType, setSyncType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const canConvert = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    var _getBlocksByClientId;

    const {
      canUser
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
    const {
      getBlocksByClientId,
      canInsertBlockType,
      getBlockRootClientId
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const rootId = rootClientId || (clientIds.length > 0 ? getBlockRootClientId(clientIds[0]) : undefined);
    const blocks = (_getBlocksByClientId = getBlocksByClientId(clientIds)) !== null && _getBlocksByClientId !== void 0 ? _getBlocksByClientId : [];
    const isReusable = blocks.length === 1 && blocks[0] && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.isReusableBlock)(blocks[0]) && !!select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store).getEntityRecord('postType', 'wp_block', blocks[0].attributes.ref);

    const _canConvert = // Hide when this is already a reusable block.
    !isReusable && // Hide when reusable blocks are disabled.
    canInsertBlockType('core/block', rootId) && blocks.every(block => // Guard against the case where a regular block has *just* been converted.
    !!block && // Hide on invalid blocks.
    block.isValid && // Hide when block doesn't support being made reusable.
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.hasBlockSupport)(block.name, 'reusable', true)) && // Hide when current doesn't have permission to do that.
    !!canUser('create', 'blocks');

    return _canConvert;
  }, [clientIds, rootClientId]);
  const {
    __experimentalConvertBlocksToReusable: convertBlocksToReusable
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store);
  const onConvert = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async function (reusableBlockTitle) {
    try {
      await convertBlocksToReusable(clientIds, reusableBlockTitle, syncType);
      createSuccessNotice(!syncType ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)( // translators: %s: the name the user has given to the pattern.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Synced Pattern created: %s'), reusableBlockTitle) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)( // translators: %s: the name the user has given to the pattern.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Unsynced Pattern created: %s'), reusableBlockTitle), {
        type: 'snackbar',
        id: 'convert-to-reusable-block-success'
      });
    } catch (error) {
      createErrorNotice(error.message, {
        type: 'snackbar',
        id: 'convert-to-reusable-block-error'
      });
    }
  }, [convertBlocksToReusable, clientIds, syncType, createSuccessNotice, createErrorNotice]);

  if (!canConvert) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockSettingsMenuControls, null, ({
    onClose
  }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    onClick: () => setIsModalOpen(true)
  }, showRenameHint ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Create pattern/reusable block') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Create pattern')), isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Create pattern'),
    onRequestClose: () => {
      setIsModalOpen(false);
      setTitle('');
    },
    overlayClassName: "reusable-blocks-menu-items__convert-modal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: event => {
      event.preventDefault();
      onConvert(title);
      setIsModalOpen(false);
      setTitle('');
      onClose();
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalVStack, {
    spacing: "5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReusableBlocksRenameHint, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Name'),
    value: title,
    onChange: setTitle,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('My pattern')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Synced'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Editing the pattern will update it anywhere it is used.'),
    checked: !syncType,
    onChange: () => {
      setSyncType(!syncType ? 'unsynced' : undefined);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
    justify: "right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "tertiary",
    onClick: () => {
      setIsModalOpen(false);
      setTitle('');
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    type: "submit"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Create'))))))));
}


/***/ }),

/***/ "./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-blocks-manage-button.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-blocks-manage-button.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/reusable-blocks/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function ReusableBlocksManageButton({
  clientId
}) {
  const {
    canRemove,
    isVisible,
    innerBlockCount,
    managePatternsUrl
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getBlock,
      canRemoveBlock,
      getBlockCount,
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      canUser
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
    const reusableBlock = getBlock(clientId);

    const isBlockTheme = getSettings().__unstableIsBlockBasedTheme;

    return {
      canRemove: canRemoveBlock(clientId),
      isVisible: !!reusableBlock && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.isReusableBlock)(reusableBlock) && !!canUser('update', 'blocks', reusableBlock.attributes.ref),
      innerBlockCount: getBlockCount(clientId),
      // The site editor and templates both check whether the user
      // has edit_theme_options capabilities. We can leverage that here
      // and omit the manage patterns link if the user can't access it.
      managePatternsUrl: isBlockTheme && canUser('read', 'templates') ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', {
        path: '/patterns'
      }) : (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('edit.php', {
        post_type: 'wp_block'
      })
    };
  }, [clientId]);
  const {
    __experimentalConvertBlockToStatic: convertBlockToStatic
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.store);

  if (!isVisible) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockSettingsMenuControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    href: managePatternsUrl
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Manage patterns')), canRemove && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    onClick: () => convertBlockToStatic(clientId)
  }, innerBlockCount > 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Detach patterns') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Detach pattern')));
}

/* harmony default export */ __webpack_exports__["default"] = (ReusableBlocksManageButton);


/***/ }),

/***/ "./node_modules/@wordpress/reusable-blocks/build-module/lock-unlock.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/lock-unlock.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unlock": function() { return /* binding */ unlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/private-apis */ "@wordpress/private-apis");
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const {
  unlock
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/reusable-blocks');


/***/ }),

/***/ "./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalConvertBlockToStatic": function() { return /* binding */ __experimentalConvertBlockToStatic; },
/* harmony export */   "__experimentalConvertBlocksToReusable": function() { return /* binding */ __experimentalConvertBlocksToReusable; },
/* harmony export */   "__experimentalDeleteReusableBlock": function() { return /* binding */ __experimentalDeleteReusableBlock; },
/* harmony export */   "__experimentalSetEditingReusableBlock": function() { return /* binding */ __experimentalSetEditingReusableBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Returns a generator converting a reusable block into a static block.
 *
 * @param {string} clientId The client ID of the block to attach.
 */

const __experimentalConvertBlockToStatic = clientId => ({
  registry
}) => {
  const oldBlock = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlock(clientId);
  const reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', oldBlock.attributes.ref);
  const newBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.parse)(typeof reusableBlock.content === 'function' ? reusableBlock.content(reusableBlock) : reusableBlock.content);
  registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).replaceBlocks(oldBlock.clientId, newBlocks);
};
/**
 * Returns a generator converting one or more static blocks into a pattern.
 *
 * @param {string[]}             clientIds The client IDs of the block to detach.
 * @param {string}               title     Pattern title.
 * @param {undefined|'unsynced'} syncType  They way block is synced, current undefined (synced) and 'unsynced'.
 */

const __experimentalConvertBlocksToReusable = (clientIds, title, syncType) => async ({
  registry,
  dispatch
}) => {
  const meta = syncType === 'unsynced' ? {
    wp_pattern_sync_status: syncType
  } : undefined;
  const reusableBlock = {
    title: title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Untitled Pattern block'),
    content: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.serialize)(registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlocksByClientId(clientIds)),
    status: 'publish',
    meta
  };
  const updatedRecord = await registry.dispatch('core').saveEntityRecord('postType', 'wp_block', reusableBlock);

  if (syncType === 'unsynced') {
    return;
  }

  const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)('core/block', {
    ref: updatedRecord.id
  });
  registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).replaceBlocks(clientIds, newBlock);

  dispatch.__experimentalSetEditingReusableBlock(newBlock.clientId, true);
};
/**
 * Returns a generator deleting a reusable block.
 *
 * @param {string} id The ID of the reusable block to delete.
 */

const __experimentalDeleteReusableBlock = id => async ({
  registry
}) => {
  const reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', id); // Don't allow a reusable block with a temporary ID to be deleted.

  if (!reusableBlock) {
    return;
  } // Remove any other blocks that reference this reusable block.


  const allBlocks = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlocks();
  const associatedBlocks = allBlocks.filter(block => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.isReusableBlock)(block) && block.attributes.ref === id);
  const associatedBlockClientIds = associatedBlocks.map(block => block.clientId); // Remove the parsed block.

  if (associatedBlockClientIds.length) {
    registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).removeBlocks(associatedBlockClientIds);
  }

  await registry.dispatch('core').deleteEntityRecord('postType', 'wp_block', id);
};
/**
 * Returns an action descriptor for SET_EDITING_REUSABLE_BLOCK action.
 *
 * @param {string}  clientId  The clientID of the reusable block to target.
 * @param {boolean} isEditing Whether the block should be in editing state.
 * @return {Object} Action descriptor.
 */

function __experimentalSetEditingReusableBlock(clientId, isEditing) {
  return {
    type: 'SET_EDITING_REUSABLE_BLOCK',
    clientId,
    isEditing
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/reusable-blocks/build-module/store/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/store/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/reusable-blocks/build-module/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const STORE_NAME = 'core/reusable-blocks';
/**
 * Store definition for the reusable blocks namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(STORE_NAME, {
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__,
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/reusable-blocks/build-module/store/reducer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/store/reducer.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEditingReusableBlock": function() { return /* binding */ isEditingReusableBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function isEditingReusableBlock(state = {}, action) {
  if (action?.type === 'SET_EDITING_REUSABLE_BLOCK') {
    return { ...state,
      [action.clientId]: action.isEditing
    };
  }

  return state;
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  isEditingReusableBlock
}));


/***/ }),

/***/ "./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalIsEditingReusableBlock": function() { return /* binding */ __experimentalIsEditingReusableBlock; }
/* harmony export */ });
/**
 * Returns true if reusable block is in the editing state.
 *
 * @param {Object} state    Global application state.
 * @param {number} clientId the clientID of the block.
 * @return {boolean} Whether the reusable block is in the editing state.
 */
function __experimentalIsEditingReusableBlock(state, clientId) {
  return state.isEditingReusableBlock[clientId];
}


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

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

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

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

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/private-apis":
/*!*************************************!*\
  !*** external ["wp","privateApis"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["privateApis"];

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
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/reusable-blocks/build-module/index.js ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReusableBlocksMenuItems": function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ReusableBlocksMenuItems; },
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.store; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/reusable-blocks/build-module/store/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/@wordpress/reusable-blocks/build-module/components/index.js");



}();
(window.wp = window.wp || {}).reusableBlocks = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=reusable-blocks.js.map