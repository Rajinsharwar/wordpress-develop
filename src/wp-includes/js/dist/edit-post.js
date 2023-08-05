/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/edit-post/build-module/components/block-manager/category.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/block-manager/category.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checklist */ "./node_modules/@wordpress/edit-post/build-module/components/block-manager/checklist.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function BlockManagerCategory({
  title,
  blockTypes
}) {
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useInstanceId)(BlockManagerCategory);
  const {
    defaultAllowedBlockTypes,
    hiddenBlockTypes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEditorSettings
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      getHiddenBlockTypes
    } = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);
    return {
      defaultAllowedBlockTypes: getEditorSettings().defaultAllowedBlockTypes,
      hiddenBlockTypes: getHiddenBlockTypes()
    };
  }, []);
  const filteredBlockTypes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (defaultAllowedBlockTypes === true) {
      return blockTypes;
    }

    return blockTypes.filter(({
      name
    }) => {
      return defaultAllowedBlockTypes?.includes(name);
    });
  }, [defaultAllowedBlockTypes, blockTypes]);
  const {
    showBlockTypes,
    hideBlockTypes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const toggleVisible = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((blockName, nextIsChecked) => {
    if (nextIsChecked) {
      showBlockTypes(blockName);
    } else {
      hideBlockTypes(blockName);
    }
  }, []);
  const toggleAllVisible = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(nextIsChecked => {
    const blockNames = blockTypes.map(({
      name
    }) => name);

    if (nextIsChecked) {
      showBlockTypes(blockNames);
    } else {
      hideBlockTypes(blockNames);
    }
  }, [blockTypes]);

  if (!filteredBlockTypes.length) {
    return null;
  }

  const checkedBlockNames = filteredBlockTypes.map(({
    name
  }) => name).filter(type => !hiddenBlockTypes.includes(type));
  const titleId = 'edit-post-block-manager__category-title-' + instanceId;
  const isAllChecked = checkedBlockNames.length === filteredBlockTypes.length;
  const isIndeterminate = !isAllChecked && checkedBlockNames.length > 0;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    role: "group",
    "aria-labelledby": titleId,
    className: "edit-post-block-manager__category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    __nextHasNoMarginBottom: true,
    checked: isAllChecked,
    onChange: toggleAllVisible,
    className: "edit-post-block-manager__category-title",
    indeterminate: isIndeterminate,
    label: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      id: titleId
    }, title)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_checklist__WEBPACK_IMPORTED_MODULE_5__["default"], {
    blockTypes: filteredBlockTypes,
    value: checkedBlockNames,
    onItemChange: toggleVisible
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockManagerCategory);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/block-manager/checklist.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/block-manager/checklist.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */



function BlockTypesChecklist({
  blockTypes,
  value,
  onItemChange
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "edit-post-block-manager__checklist"
  }, blockTypes.map(blockType => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: blockType.name,
    className: "edit-post-block-manager__checklist-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    __nextHasNoMarginBottom: true,
    label: blockType.title,
    checked: value.includes(blockType.name),
    onChange: (...args) => onItemChange(blockType.name, ...args)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockIcon, {
    icon: blockType.icon
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockTypesChecklist);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/block-manager/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/block-manager/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category */ "./node_modules/@wordpress/edit-post/build-module/components/block-manager/category.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




function BlockManager({
  blockTypes,
  categories,
  hasBlockSupport,
  isMatchingSearchTerm,
  numberOfHiddenBlocks,
  enableAllBlockTypes
}) {
  const debouncedSpeak = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useDebounce)(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_6__.speak, 500);
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // Filtering occurs here (as opposed to `withSelect`) to avoid
  // wasted renders by consequence of `Array#filter` producing
  // a new value reference on each call.

  blockTypes = blockTypes.filter(blockType => hasBlockSupport(blockType, 'inserter', true) && (!search || isMatchingSearchTerm(blockType, search)) && (!blockType.parent || blockType.parent.includes('core/post-content'))); // Announce search results on change

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!search) {
      return;
    }

    const count = blockTypes.length;
    const resultsFoundMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
    /* translators: %d: number of results. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__._n)('%d result found.', '%d results found.', count), count);
    debouncedSpeak(resultsFoundMessage);
  }, [blockTypes.length, search, debouncedSpeak]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-block-manager__content"
  }, !!numberOfHiddenBlocks && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-block-manager__disabled-blocks-count"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
  /* translators: %d: number of blocks. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__._n)('%d block is hidden.', '%d blocks are hidden.', numberOfHiddenBlocks), numberOfHiddenBlocks), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    onClick: () => enableAllBlockTypes(blockTypes)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Reset'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SearchControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search for a block'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Search for a block'),
    value: search,
    onChange: nextSearch => setSearch(nextSearch),
    className: "edit-post-block-manager__search"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    tabIndex: "0",
    role: "region",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Available block types'),
    className: "edit-post-block-manager__results"
  }, blockTypes.length === 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-post-block-manager__no-results"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No blocks found.')), categories.map(category => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_category__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: category.slug,
    title: category.title,
    blockTypes: blockTypes.filter(blockType => blockType.category === category.slug)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_category__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Uncategorized'),
    blockTypes: blockTypes.filter(({
      category
    }) => !category)
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const {
    getBlockTypes,
    getCategories,
    hasBlockSupport,
    isMatchingSearchTerm
  } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    getHiddenBlockTypes
  } = select(_store__WEBPACK_IMPORTED_MODULE_8__.store); // Some hidden blocks become unregistered
  // by removing for instance the plugin that registered them, yet
  // they're still remain as hidden by the user's action.
  // We consider "hidden", blocks which were hidden and
  // are still registered.

  const blockTypes = getBlockTypes();
  const hiddenBlockTypes = getHiddenBlockTypes().filter(hiddenBlock => {
    return blockTypes.some(registeredBlock => registeredBlock.name === hiddenBlock);
  });
  const numberOfHiddenBlocks = Array.isArray(hiddenBlockTypes) && hiddenBlockTypes.length;
  return {
    blockTypes,
    categories: getCategories(),
    hasBlockSupport,
    isMatchingSearchTerm,
    numberOfHiddenBlocks
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withDispatch)(dispatch => {
  const {
    showBlockTypes
  } = dispatch(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  return {
    enableAllBlockTypes: blockTypes => {
      const blockNames = blockTypes.map(({
        name
      }) => name);
      showBlockTypes(blockNames);
    }
  };
})])(BlockManager));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-item.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-item.js ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




const isEverySelectedBlockAllowed = (selected, allowed) => selected.filter(id => !allowed.includes(id)).length === 0;
/**
 * Plugins may want to add an item to the menu either for every block
 * or only for the specific ones provided in the `allowedBlocks` component property.
 *
 * If there are multiple blocks selected the item will be rendered if every block
 * is of one allowed type (not necessarily the same).
 *
 * @param {string[]} selectedBlocks Array containing the names of the blocks selected
 * @param {string[]} allowedBlocks  Array containing the names of the blocks allowed
 * @return {boolean} Whether the item will be rendered or not.
 */


const shouldRenderItem = (selectedBlocks, allowedBlocks) => !Array.isArray(allowedBlocks) || isEverySelectedBlockAllowed(selectedBlocks, allowedBlocks);
/**
 * Renders a new item in the block settings menu.
 *
 * @param {Object}                props                 Component props.
 * @param {Array}                 [props.allowedBlocks] An array containing a list of block names for which the item should be shown. If not present, it'll be rendered for any block. If multiple blocks are selected, it'll be shown if and only if all of them are in the allowed list.
 * @param {WPBlockTypeIconRender} [props.icon]          The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.
 * @param {string}                props.label           The menu item text.
 * @param {Function}              props.onClick         Callback function to be executed when the user click the menu item.
 * @param {boolean}               [props.small]         Whether to render the label or not.
 * @param {string}                [props.role]          The ARIA role for the menu item.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;
 *
 * function doOnClick(){
 * 	// To be called when the user clicks the menu item.
 * }
 *
 * function MyPluginBlockSettingsMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginBlockSettingsMenuItem,
 * 		{
 * 			allowedBlocks: [ 'core/paragraph' ],
 * 			icon: 'dashicon-name',
 * 			label: __( 'Menu item text' ),
 * 			onClick: doOnClick,
 * 		}
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
 *
 * const doOnClick = ( ) => {
 *     // To be called when the user clicks the menu item.
 * };
 *
 * const MyPluginBlockSettingsMenuItem = () => (
 *     <PluginBlockSettingsMenuItem
 * 		allowedBlocks={ [ 'core/paragraph' ] }
 * 		icon='dashicon-name'
 * 		label={ __( 'Menu item text' ) }
 * 		onClick={ doOnClick } />
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */


const PluginBlockSettingsMenuItem = ({
  allowedBlocks,
  icon,
  label,
  onClick,
  small,
  role
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockSettingsMenuControls, null, ({
  selectedBlocks,
  onClose
}) => {
  if (!shouldRenderItem(selectedBlocks, allowedBlocks)) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)(onClick, onClose),
    icon: icon,
    label: small ? label : undefined,
    role: role
  }, !small && label);
});

/* harmony default export */ __webpack_exports__["default"] = (PluginBlockSettingsMenuItem);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/browser-url/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/browser-url/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserURL": function() { return /* binding */ BrowserURL; },
/* harmony export */   "getPostEditURL": function() { return /* binding */ getPostEditURL; },
/* harmony export */   "getPostTrashedURL": function() { return /* binding */ getPostTrashedURL; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Returns the Post's Edit URL.
 *
 * @param {number} postId Post ID.
 *
 * @return {string} Post edit URL.
 */

function getPostEditURL(postId) {
  return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)('post.php', {
    post: postId,
    action: 'edit'
  });
}
/**
 * Returns the Post's Trashed URL.
 *
 * @param {number} postId   Post ID.
 * @param {string} postType Post Type.
 *
 * @return {string} Post trashed URL.
 */

function getPostTrashedURL(postId, postType) {
  return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)('edit.php', {
    trashed: 1,
    post_type: postType,
    ids: postId
  });
}
class BrowserURL extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      historyId: null
    };
  }

  componentDidUpdate(prevProps) {
    const {
      postId,
      postStatus,
      postType,
      isSavingPost
    } = this.props;
    const {
      historyId
    } = this.state; // Posts are still dirty while saving so wait for saving to finish
    // to avoid the unsaved changes warning when trashing posts.

    if (postStatus === 'trash' && !isSavingPost) {
      this.setTrashURL(postId, postType);
      return;
    }

    if ((postId !== prevProps.postId || postId !== historyId) && postStatus !== 'auto-draft' && postId) {
      this.setBrowserURL(postId);
    }
  }
  /**
   * Navigates the browser to the post trashed URL to show a notice about the trashed post.
   *
   * @param {number} postId   Post ID.
   * @param {string} postType Post Type.
   */


  setTrashURL(postId, postType) {
    window.location.href = getPostTrashedURL(postId, postType);
  }
  /**
   * Replaces the browser URL with a post editor link for the given post ID.
   *
   * Note it is important that, since this function may be called when the
   * editor first loads, the result generated `getPostEditURL` matches that
   * produced by the server. Otherwise, the URL will change unexpectedly.
   *
   * @param {number} postId Post ID for which to generate post editor URL.
   */


  setBrowserURL(postId) {
    window.history.replaceState({
      id: postId
    }, 'Post ' + postId, getPostEditURL(postId));
    this.setState(() => ({
      historyId: postId
    }));
  }

  render() {
    return null;
  }

}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => {
  const {
    getCurrentPost,
    isSavingPost
  } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const post = getCurrentPost();
  let {
    id,
    status,
    type
  } = post;
  const isTemplate = ['wp_template', 'wp_template_part'].includes(type);

  if (isTemplate) {
    id = post.wp_id;
  }

  return {
    postId: id,
    postStatus: status,
    postType: type,
    isSavingPost: isSavingPost()
  };
})(BrowserURL));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/device-preview/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/device-preview/index.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DevicePreview; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function DevicePreview() {
  const {
    hasActiveMetaboxes,
    isPostSaveable,
    isSaving,
    isViewable,
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    var _postType$viewable;

    const {
      getEditedPostAttribute
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const {
      getPostType
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const postType = getPostType(getEditedPostAttribute('type'));
    return {
      hasActiveMetaboxes: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).hasMetaBoxes(),
      isSaving: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isSavingMetaBoxes(),
      isPostSaveable: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).isEditedPostSaveable(),
      isViewable: (_postType$viewable = postType?.viewable) !== null && _postType$viewable !== void 0 ? _postType$viewable : false,
      deviceType: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).__experimentalGetPreviewDeviceType()
    };
  }, []);
  const {
    __experimentalSetPreviewDeviceType: setPreviewDeviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalPreviewOptions, {
    isEnabled: isPostSaveable,
    className: "edit-post-post-preview-dropdown",
    deviceType: deviceType,
    setDeviceType: setPreviewDeviceType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Preview')
  }, isViewable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-header-preview__grouping-external"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostPreviewButton, {
    className: 'edit-post-header-preview__button-external',
    role: "menuitem",
    forceIsAutosaveable: hasActiveMetaboxes,
    forcePreviewLink: isSaving ? null : undefined,
    textContent: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Preview in new tab'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
    }))
  }))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditorInitialization; }
/* harmony export */ });
/* harmony import */ var _listener_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listener-hooks */ "./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/listener-hooks.js");
/**
 * Internal dependencies
 */

/**
 * Data component used for initializing the editor and re-initializes
 * when postId changes or on unmount.
 *
 * @param {number} postId The id of the post.
 * @return {null} This is a data component so does not render any ui.
 */

function EditorInitialization({
  postId
}) {
  (0,_listener_hooks__WEBPACK_IMPORTED_MODULE_0__.useBlockSelectionListener)(postId);
  (0,_listener_hooks__WEBPACK_IMPORTED_MODULE_0__.useUpdatePostLinkListener)(postId);
  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/listener-hooks.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/listener-hooks.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBlockSelectionListener": function() { return /* binding */ useBlockSelectionListener; },
/* harmony export */   "useUpdatePostLinkListener": function() { return /* binding */ useUpdatePostLinkListener; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/constants */ "./node_modules/@wordpress/edit-post/build-module/store/constants.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * This listener hook monitors for block selection and triggers the appropriate
 * sidebar state.
 *
 * @param {number} postId The current post id.
 */

const useBlockSelectionListener = postId => {
  const {
    hasBlockSelection,
    isEditorSidebarOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    hasBlockSelection: !!select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getBlockSelectionStart(),
    isEditorSidebarOpened: select(_store_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).isEditorSidebarOpened()
  }), [postId]);
  const {
    openGeneralSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_store_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isEditorSidebarOpened) {
      return;
    }

    if (hasBlockSelection) {
      openGeneralSidebar('edit-post/block');
    } else {
      openGeneralSidebar('edit-post/document');
    }
  }, [hasBlockSelection, isEditorSidebarOpened]);
};
/**
 * This listener hook monitors any change in permalink and updates the view
 * post link in the admin bar.
 *
 * @param {number} postId
 */

const useUpdatePostLinkListener = postId => {
  const {
    newPermalink
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    newPermalink: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).getCurrentPost().link
  }), [postId]);
  const nodeToUpdate = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    nodeToUpdate.current = document.querySelector(_store_constants__WEBPACK_IMPORTED_MODULE_4__.VIEW_AS_PREVIEW_LINK_SELECTOR) || document.querySelector(_store_constants__WEBPACK_IMPORTED_MODULE_4__.VIEW_AS_LINK_SELECTOR);
  }, [postId]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!newPermalink || !nodeToUpdate.current) {
      return;
    }

    nodeToUpdate.current.setAttribute('href', newPermalink);
  }, [newPermalink]);
};


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/document-actions/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/document-actions/index.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-right-small.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left-small.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function DocumentActions() {
  const {
    template,
    isEditing
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      isEditingTemplate,
      getEditedPostTemplate
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);

    const _isEditing = isEditingTemplate();

    return {
      template: _isEditing ? getEditedPostTemplate() : null,
      isEditing: _isEditing
    };
  }, []);
  const {
    clearSelectedBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    setIsEditingTemplate
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    open: openCommandCenter
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_commands__WEBPACK_IMPORTED_MODULE_5__.store);

  if (!isEditing || !template) {
    return null;
  }

  let templateTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default');

  if (template?.title) {
    templateTitle = template.title;
  } else if (!!template) {
    templateTitle = template.slug;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-document-actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "edit-post-document-actions__back",
    onClick: () => {
      clearSelectedBlock();
      setIsEditingTemplate(false);
    },
    icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Back')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "edit-post-document-actions__command",
    onClick: () => openCommandCenter()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHStack, {
    className: "edit-post-document-actions__title",
    spacing: 1,
    justify: "center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockIcon, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalText, {
    size: "body",
    as: "h1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.VisuallyHidden, {
    as: "span"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Editing template: ')), templateTitle)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "edit-post-document-actions__shortcut"
  }, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_6__.displayShortcut.primary('k'))));
}

/* harmony default export */ __webpack_exports__["default"] = (DocumentActions);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/fullscreen-mode-close/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/fullscreen-mode-close/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/wordpress.js");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



function FullscreenModeClose({
  showTooltip,
  icon,
  href
}) {
  var _postType$labels$view;

  const {
    isActive,
    isRequestingSiteIcon,
    postType,
    siteIconUrl
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getCurrentPostType
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    const {
      isFeatureActive
    } = select(_store__WEBPACK_IMPORTED_MODULE_9__.store);
    const {
      getEntityRecord,
      getPostType,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__.store);
    const siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    return {
      isActive: isFeatureActive('fullscreenMode'),
      isRequestingSiteIcon: isResolving('getEntityRecord', ['root', '__unstableBase', undefined]),
      postType: getPostType(getCurrentPostType()),
      siteIconUrl: siteData.site_icon_url
    };
  }, []);
  const disableMotion = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__.useReducedMotion)();

  if (!isActive || !postType) {
    return null;
  }

  let buttonIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    size: "36px",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
  });
  const effect = {
    expand: {
      scale: 1.25,
      transition: {
        type: 'tween',
        duration: '0.3'
      }
    }
  };

  if (siteIconUrl) {
    buttonIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.img, {
      variants: !disableMotion && effect,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Site Icon'),
      className: "edit-post-fullscreen-mode-close_site-icon",
      src: siteIconUrl
    });
  }

  if (isRequestingSiteIcon) {
    buttonIcon = null;
  } // Override default icon if custom icon is provided via props.


  if (icon) {
    buttonIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      size: "36px",
      icon: icon
    });
  }

  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'edit-post-fullscreen-mode-close': true,
    'has-icon': siteIconUrl
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__unstableMotion.div, {
    whileHover: "expand"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: classes,
    href: href !== null && href !== void 0 ? href : (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)('edit.php', {
      post_type: postType.slug
    }),
    label: (_postType$labels$view = postType?.labels?.view_items) !== null && _postType$labels$view !== void 0 ? _postType$labels$view : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Back'),
    showTooltip: showTooltip
  }, buttonIcon));
}

/* harmony default export */ __webpack_exports__["default"] = (FullscreenModeClose);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/header-toolbar/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/header-toolbar/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/list-view.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */



const {
  useShouldContextualToolbarShow
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_10__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.privateApis);

const preventDefault = event => {
  event.preventDefault();
};

function HeaderToolbar() {
  const inserterButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    setIsInserterOpened,
    setIsListViewOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const {
    get: getPreference
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__.store);
  const hasFixedToolbar = getPreference('core/edit-post', 'fixedToolbar');
  const {
    isInserterEnabled,
    isInserterOpened,
    isTextModeEnabled,
    showIconLabels,
    isListViewOpen,
    listViewShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      hasInserterItems,
      getBlockRootClientId,
      getBlockSelectionEnd
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      getEditorSettings
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      getEditorMode,
      isFeatureActive,
      isListViewOpened
    } = select(_store__WEBPACK_IMPORTED_MODULE_9__.store);
    const {
      getShortcutRepresentation
    } = select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__.store);
    return {
      // This setting (richEditingEnabled) should not live in the block editor's setting.
      isInserterEnabled: getEditorMode() === 'visual' && getEditorSettings().richEditingEnabled && hasInserterItems(getBlockRootClientId(getBlockSelectionEnd())),
      isInserterOpened: select(_store__WEBPACK_IMPORTED_MODULE_9__.store).isInserterOpened(),
      isTextModeEnabled: getEditorMode() === 'text',
      showIconLabels: isFeatureActive('showIconLabels'),
      isListViewOpen: isListViewOpened(),
      listViewShortcut: getShortcutRepresentation('core/edit-post/toggle-list-view')
    };
  }, []);
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useViewportMatch)('medium');
  const isWideViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useViewportMatch)('wide');
  const {
    shouldShowContextualToolbar,
    canFocusHiddenToolbar,
    fixedToolbarCanBeFocused
  } = useShouldContextualToolbarShow(); // If there's a block toolbar to be focused, disable the focus shortcut for the document toolbar.
  // There's a fixed block toolbar when the fixed toolbar option is enabled or when the browser width is less than the large viewport.

  const blockToolbarCanBeFocused = shouldShowContextualToolbar || canFocusHiddenToolbar || fixedToolbarCanBeFocused;
  /* translators: accessibility text for the editor toolbar */

  const toolbarAriaLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Document tools');

  const toggleListView = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setIsListViewOpened(!isListViewOpen), [setIsListViewOpened, isListViewOpen]);
  const overflowItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, {
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button,
    className: "edit-post-header-toolbar__document-overview-toggle",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
    disabled: isTextModeEnabled,
    isPressed: isListViewOpen
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Document Overview'),
    onClick: toggleListView,
    shortcut: listViewShortcut,
    showTooltip: !showIconLabels,
    variant: showIconLabels ? 'tertiary' : undefined
  }));
  const toggleInserter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isInserterOpened) {
      // Focusing the inserter button should close the inserter popover.
      // However, there are some cases it won't close when the focus is lost.
      // See https://github.com/WordPress/gutenberg/issues/43090 for more details.
      inserterButton.current.focus();
      setIsInserterOpened(false);
    } else {
      setIsInserterOpened(true);
    }
  }, [isInserterOpened, setIsInserterOpened]);
  /* translators: button label text should, if possible, be under 16 characters. */

  const longLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('Toggle block inserter', 'Generic label for block inserter button');

  const shortLabel = !isInserterOpened ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Close');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.NavigableToolbar, {
    className: "edit-post-header-toolbar",
    "aria-label": toolbarAriaLabel,
    shouldUseKeyboardFocusShortcut: !blockToolbarCanBeFocused
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-header-toolbar__left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, {
    ref: inserterButton,
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button,
    className: "edit-post-header-toolbar__inserter-toggle",
    variant: "primary",
    isPressed: isInserterOpened,
    onMouseDown: preventDefault,
    onClick: toggleInserter,
    disabled: !isInserterEnabled,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
    label: showIconLabels ? shortLabel : longLabel,
    showTooltip: !showIconLabels
  }), (isWideViewport || !showIconLabels) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isLargeViewport && !hasFixedToolbar && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, {
    as: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.ToolSelector,
    showTooltip: !showIconLabels,
    variant: showIconLabels ? 'tertiary' : undefined,
    disabled: isTextModeEnabled
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, {
    as: _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.EditorHistoryUndo,
    showTooltip: !showIconLabels,
    variant: showIconLabels ? 'tertiary' : undefined
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarItem, {
    as: _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.EditorHistoryRedo,
    showTooltip: !showIconLabels,
    variant: showIconLabels ? 'tertiary' : undefined
  }), overflowItems)));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderToolbar);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullscreen-mode-close */ "./node_modules/@wordpress/edit-post/build-module/components/header/fullscreen-mode-close/index.js");
/* harmony import */ var _header_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-toolbar */ "./node_modules/@wordpress/edit-post/build-module/components/header/header-toolbar/index.js");
/* harmony import */ var _more_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more-menu */ "./node_modules/@wordpress/edit-post/build-module/components/header/more-menu/index.js");
/* harmony import */ var _post_publish_button_or_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post-publish-button-or-toggle */ "./node_modules/@wordpress/edit-post/build-module/components/header/post-publish-button-or-toggle.js");
/* harmony import */ var _device_preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../device-preview */ "./node_modules/@wordpress/edit-post/build-module/components/device-preview/index.js");
/* harmony import */ var _view_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../view-link */ "./node_modules/@wordpress/edit-post/build-module/components/view-link/index.js");
/* harmony import */ var _main_dashboard_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-dashboard-button */ "./node_modules/@wordpress/edit-post/build-module/components/header/main-dashboard-button/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _document_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./document-actions */ "./node_modules/@wordpress/edit-post/build-module/components/header/document-actions/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */










const slideY = {
  hidden: {
    y: '-50px'
  },
  hover: {
    y: 0,
    transition: {
      type: 'tween',
      delay: 0.2
    }
  }
};
const slideX = {
  hidden: {
    x: '-100%'
  },
  hover: {
    x: 0,
    transition: {
      type: 'tween',
      delay: 0.2
    }
  }
};

function Header({
  setEntitiesSavedStatesCallback
}) {
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('large');
  const {
    hasActiveMetaboxes,
    isPublishSidebarOpened,
    isSaving,
    showIconLabels
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => ({
    hasActiveMetaboxes: select(_store__WEBPACK_IMPORTED_MODULE_13__.store).hasMetaBoxes(),
    isPublishSidebarOpened: select(_store__WEBPACK_IMPORTED_MODULE_13__.store).isPublishSidebarOpened(),
    isSaving: select(_store__WEBPACK_IMPORTED_MODULE_13__.store).isSavingMetaBoxes(),
    showIconLabels: select(_store__WEBPACK_IMPORTED_MODULE_13__.store).isFeatureActive('showIconLabels')
  }), []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_main_dashboard_button__WEBPACK_IMPORTED_MODULE_12__["default"].Slot, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__unstableMotion.div, {
    variants: slideX,
    transition: {
      type: 'tween',
      delay: 0.8
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_6__["default"], {
    showTooltip: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__unstableMotion.div, {
    variants: slideY,
    transition: {
      type: 'tween',
      delay: 0.8
    },
    className: "edit-post-header__toolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header_toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-header__center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_document_actions__WEBPACK_IMPORTED_MODULE_14__["default"], null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__unstableMotion.div, {
    variants: slideY,
    transition: {
      type: 'tween',
      delay: 0.8
    },
    className: "edit-post-header__settings"
  }, !isPublishSidebarOpened && // This button isn't completely hidden by the publish sidebar.
  // We can't hide the whole toolbar when the publish sidebar is open because
  // we want to prevent mounting/unmounting the PostPublishButtonOrToggle DOM node.
  // We track that DOM node to return focus to the PostPublishButtonOrToggle
  // when the publish sidebar has been closed.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostSavedState, {
    forceIsDirty: hasActiveMetaboxes,
    forceIsSaving: isSaving,
    showIconLabels: showIconLabels
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_device_preview__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostPreviewButton, {
    forceIsAutosaveable: hasActiveMetaboxes,
    forcePreviewLink: isSaving ? null : undefined
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_view_link__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_publish_button_or_toggle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    forceIsDirty: hasActiveMetaboxes,
    forceIsSaving: isSaving,
    setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
  }), (isLargeViewport || !showIconLabels) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.PinnedItems.Slot, {
    scope: "core/edit-post"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_more_menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    showIconLabels: showIconLabels
  })), showIconLabels && !isLargeViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_more_menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    showIconLabels: showIconLabels
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/main-dashboard-button/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/main-dashboard-button/index.js ***!
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

const slotName = '__experimentalMainDashboardButton';
const {
  Fill,
  Slot: MainDashboardButtonSlot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)(slotName);
const MainDashboardButton = Fill;

const Slot = ({
  children
}) => {
  const fills = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseSlotFills)(slotName);
  const hasFills = Boolean(fills && fills.length);

  if (!hasFills) {
    return children;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MainDashboardButtonSlot, {
    bubblesVirtually: true
  });
};

MainDashboardButton.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (MainDashboardButton);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/mode-switcher/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/mode-switcher/index.js ***!
  \*************************************************************************************************/
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
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Set of available mode options.
 *
 * @type {Array}
 */

const MODES = [{
  value: 'visual',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visual editor')
}, {
  value: 'text',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Code editor')
}];

function ModeSwitcher() {
  const {
    shortcut,
    isRichEditingEnabled,
    isCodeEditingEnabled,
    isEditingTemplate,
    mode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    shortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.store).getShortcutRepresentation('core/edit-post/toggle-mode'),
    isRichEditingEnabled: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).getEditorSettings().richEditingEnabled,
    isCodeEditingEnabled: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).getEditorSettings().codeEditingEnabled,
    isEditingTemplate: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).isEditingTemplate(),
    mode: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).getEditorMode()
  }), []);
  const {
    switchEditorMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);

  if (isEditingTemplate) {
    return null;
  }

  if (!isRichEditingEnabled || !isCodeEditingEnabled) {
    return null;
  }

  const choices = MODES.map(choice => {
    if (choice.value !== mode) {
      return { ...choice,
        shortcut
      };
    }

    return choice;
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Editor')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItemsChoice, {
    choices: choices,
    value: mode,
    onSelect: switchEditorMode
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ModeSwitcher);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/more-menu/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/more-menu/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mode_switcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mode-switcher */ "./node_modules/@wordpress/edit-post/build-module/components/header/mode-switcher/index.js");
/* harmony import */ var _preferences_menu_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../preferences-menu-item */ "./node_modules/@wordpress/edit-post/build-module/components/header/preferences-menu-item/index.js");
/* harmony import */ var _tools_more_menu_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools-more-menu-group */ "./node_modules/@wordpress/edit-post/build-module/components/header/tools-more-menu-group/index.js");
/* harmony import */ var _writing_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../writing-menu */ "./node_modules/@wordpress/edit-post/build-module/components/header/writing-menu/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */






const MoreMenu = ({
  showIconLabels
}) => {
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('large');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.MoreMenuDropdown, {
    toggleProps: {
      showTooltip: !showIconLabels,
      ...(showIconLabels && {
        variant: 'tertiary'
      })
    }
  }, ({
    onClose
  }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, showIconLabels && !isLargeViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.PinnedItems.Slot, {
    className: showIconLabels && 'show-icon-labels',
    scope: "core/edit-post"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_writing_menu__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_mode_switcher__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_3__.ActionItem.Slot, {
    name: "core/edit-post/plugin-more-menu",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plugins'),
    as: _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup,
    fillProps: {
      onClick: onClose
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tools_more_menu_group__WEBPACK_IMPORTED_MODULE_7__["default"].Slot, {
    fillProps: {
      onClose
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preferences_menu_item__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (MoreMenu);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/plugin-more-menu-item/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/plugin-more-menu-item/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button or link depending on the props provided.
 * The text within the component appears as the menu item label.
 *
 * @param {Object}                props                                 Component properties.
 * @param {string}                [props.href]                          When `href` is provided then the menu item is represented as an anchor rather than button. It corresponds to the `href` attribute of the anchor.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 * @param {Function}              [props.onClick=noop]                  The callback function to be executed when the user clicks the menu item.
 * @param {...*}                  [props.other]                         Any additional props are passed through to the underlying [MenuItem](https://github.com/WordPress/gutenberg/tree/HEAD/packages/components/src/menu-item/README.md) component.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * function MyButtonMoreMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginMoreMenuItem,
 * 		{
 * 			icon: moreIcon,
 * 			onClick: onButtonClick,
 * 		},
 * 		__( 'My button title' )
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginMoreMenuItem } from '@wordpress/edit-post';
 * import { more } from '@wordpress/icons';
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * const MyButtonMoreMenuItem = () => (
 * 	<PluginMoreMenuItem
 * 		icon={ more }
 * 		onClick={ onButtonClick }
 * 	>
 * 		{ __( 'My button title' ) }
 * 	</PluginMoreMenuItem>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)((0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__.withPluginContext)((context, ownProps) => {
  var _ownProps$as;

  return {
    as: (_ownProps$as = ownProps.as) !== null && _ownProps$as !== void 0 ? _ownProps$as : _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem,
    icon: ownProps.icon || context.icon,
    name: 'core/edit-post/plugin-more-menu'
  };
}))(_wordpress_interface__WEBPACK_IMPORTED_MODULE_0__.ActionItem));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/plugin-sidebar-more-menu-item/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/plugin-sidebar-more-menu-item/index.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PluginSidebarMoreMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");


/**
 * WordPress dependencies
 */

/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down,
 * and can be used to activate the corresponding `PluginSidebar` component.
 * The text within the component appears as the menu item label.
 *
 * @param {Object}                props                                 Component props.
 * @param {string}                props.target                          A string identifying the target sidebar you wish to be activated by this menu item. Must be the same as the `name` prop you have given to that sidebar.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function MySidebarMoreMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginSidebarMoreMenuItem,
 * 		{
 * 			target: 'my-sidebar',
 * 			icon: moreIcon,
 * 		},
 * 		__( 'My sidebar title' )
 * 	)
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
 * import { more } from '@wordpress/icons';
 *
 * const MySidebarMoreMenuItem = () => (
 * 	<PluginSidebarMoreMenuItem
 * 		target="my-sidebar"
 * 		icon={ more }
 * 	>
 * 		{ __( 'My sidebar title' ) }
 * 	</PluginSidebarMoreMenuItem>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */

function PluginSidebarMoreMenuItem(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.ComplementaryAreaMoreMenuItem // Menu item is marked with unstable prop for backward compatibility.
  // @see https://github.com/WordPress/gutenberg/issues/14457
  , {
    __unstableExplicitMenuItem: true,
    scope: "core/edit-post",
    ...props
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/post-publish-button-or-toggle.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/post-publish-button-or-toggle.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPublishButtonOrToggle": function() { return /* binding */ PostPublishButtonOrToggle; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PostPublishButtonOrToggle({
  forceIsDirty,
  forceIsSaving,
  hasPublishAction,
  isBeingScheduled,
  isPending,
  isPublished,
  isPublishSidebarEnabled,
  isPublishSidebarOpened,
  isScheduled,
  togglePublishSidebar,
  setEntitiesSavedStatesCallback
}) {
  const IS_TOGGLE = 'toggle';
  const IS_BUTTON = 'button';
  const isSmallerThanMediumViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useViewportMatch)('medium', '<');
  let component;
  /**
   * Conditions to show a BUTTON (publish directly) or a TOGGLE (open publish sidebar):
   *
   * 1) We want to show a BUTTON when the post status is at the _final stage_
   * for a particular role (see https://wordpress.org/documentation/article/post-status/):
   *
   * - is published
   * - is scheduled to be published
   * - is pending and can't be published (but only for viewports >= medium).
   * 	 Originally, we considered showing a button for pending posts that couldn't be published
   * 	 (for example, for an author with the contributor role). Some languages can have
   * 	 long translations for "Submit for review", so given the lack of UI real estate available
   * 	 we decided to take into account the viewport in that case.
   *  	 See: https://github.com/WordPress/gutenberg/issues/10475
   *
   * 2) Then, in small viewports, we'll show a TOGGLE.
   *
   * 3) Finally, we'll use the publish sidebar status to decide:
   *
   * - if it is enabled, we show a TOGGLE
   * - if it is disabled, we show a BUTTON
   */

  if (isPublished || isScheduled && isBeingScheduled || isPending && !hasPublishAction && !isSmallerThanMediumViewport) {
    component = IS_BUTTON;
  } else if (isSmallerThanMediumViewport) {
    component = IS_TOGGLE;
  } else if (isPublishSidebarEnabled) {
    component = IS_TOGGLE;
  } else {
    component = IS_BUTTON;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostPublishButton, {
    forceIsDirty: forceIsDirty,
    forceIsSaving: forceIsSaving,
    isOpen: isPublishSidebarOpened,
    isToggle: component === IS_TOGGLE,
    onToggle: togglePublishSidebar,
    setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
  });
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  var _select$getCurrentPos;

  return {
    hasPublishAction: (_select$getCurrentPos = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).getCurrentPost()?._links?.['wp:action-publish']) !== null && _select$getCurrentPos !== void 0 ? _select$getCurrentPos : false,
    isBeingScheduled: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isEditedPostBeingScheduled(),
    isPending: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isCurrentPostPending(),
    isPublished: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isCurrentPostPublished(),
    isPublishSidebarEnabled: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isPublishSidebarEnabled(),
    isPublishSidebarOpened: select(_store__WEBPACK_IMPORTED_MODULE_4__.store).isPublishSidebarOpened(),
    isScheduled: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isCurrentPostScheduled()
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withDispatch)(dispatch => {
  const {
    togglePublishSidebar
  } = dispatch(_store__WEBPACK_IMPORTED_MODULE_4__.store);
  return {
    togglePublishSidebar
  };
}))(PostPublishButtonOrToggle));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/preferences-menu-item/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/preferences-menu-item/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreferencesMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _components_preferences_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/preferences-modal */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PreferencesMenuItem() {
  const {
    openModal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
    onClick: () => {
      openModal(_components_preferences_modal__WEBPACK_IMPORTED_MODULE_5__.PREFERENCES_MODAL_NAME);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preferences'));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/tools-more-menu-group/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/tools-more-menu-group/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


const {
  Fill: ToolsMoreMenuGroup,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('ToolsMoreMenuGroup');

ToolsMoreMenuGroup.Slot = ({
  fillProps
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Slot, {
  fillProps: fillProps
}, fills => fills.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tools')
}, fills));

/* harmony default export */ __webpack_exports__["default"] = (ToolsMoreMenuGroup);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/header/writing-menu/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/header/writing-menu/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function WritingMenu() {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useRegistry)();
  const isDistractionFree = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store).getSettings().isDistractionFree, []);
  const {
    setIsInserterOpened,
    setIsListViewOpened,
    closeGeneralSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.store);
  const {
    set: setPreference
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.store);

  const toggleDistractionFree = () => {
    registry.batch(() => {
      setPreference('core/edit-post', 'fixedToolbar', false);
      setIsInserterOpened(false);
      setIsListViewOpened(false);
      closeGeneralSidebar();
    });
  };

  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('medium');

  if (!isLargeViewport) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('View', 'noun')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.PreferenceToggleMenuItem, {
    scope: "core/edit-post",
    disabled: isDistractionFree,
    name: "fixedToolbar",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top toolbar'),
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Access all block and document tools in a single place'),
    messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top toolbar activated'),
    messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Top toolbar deactivated')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.PreferenceToggleMenuItem, {
    scope: "core/edit-post",
    name: "focusMode",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Spotlight mode'),
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Focus on one block at a time'),
    messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Spotlight mode activated'),
    messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Spotlight mode deactivated')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.PreferenceToggleMenuItem, {
    scope: "core/edit-post",
    name: "fullscreenMode",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fullscreen mode'),
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show and hide admin UI'),
    messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fullscreen mode activated'),
    messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fullscreen mode deactivated'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.displayShortcut.secondary('f')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.PreferenceToggleMenuItem, {
    scope: "core/edit-post",
    name: "distractionFree",
    onToggle: toggleDistractionFree,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Distraction free'),
    info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Write with calmness'),
    messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Distraction free mode activated'),
    messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Distraction free mode deactivated'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.displayShortcut.primaryShift('\\')
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (WritingMenu);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/config.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/config.js ***!
  \**********************************************************************************************************/
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

/***/ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/shortcut.js");


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

/***/ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/index.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_SHORTCUT_HELP_MODAL_NAME": function() { return /* binding */ KEYBOARD_SHORTCUT_HELP_MODAL_NAME; },
/* harmony export */   "KeyboardShortcutHelpModal": function() { return /* binding */ KeyboardShortcutHelpModal; }
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/config.js");
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/shortcut.js");
/* harmony import */ var _dynamic_shortcut__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dynamic-shortcut */ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const KEYBOARD_SHORTCUT_HELP_MODAL_NAME = 'edit-post/keyboard-shortcut-help';

const ShortcutList = ({
  shortcuts
}) =>
/*
 * Disable reason: The `list` ARIA role is redundant but
 * Safari+VoiceOver won't announce the list otherwise.
 */

/* eslint-disable jsx-a11y/no-redundant-roles */
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
  className: "edit-post-keyboard-shortcut-help-modal__shortcut-list",
  role: "list"
}, shortcuts.map((shortcut, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  className: "edit-post-keyboard-shortcut-help-modal__shortcut",
  key: index
}, typeof shortcut === 'string' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dynamic_shortcut__WEBPACK_IMPORTED_MODULE_10__["default"], {
  name: shortcut
}) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_shortcut__WEBPACK_IMPORTED_MODULE_9__["default"], { ...shortcut
}))))
/* eslint-enable jsx-a11y/no-redundant-roles */
;

const ShortcutSection = ({
  title,
  shortcuts,
  className
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-post-keyboard-shortcut-help-modal__section', className)
}, !!title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
  className: "edit-post-keyboard-shortcut-help-modal__section-title"
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
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.useShortcut)('core/edit-post/keyboard-shortcuts', toggleModal);

  if (!isModalActive) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: "edit-post-keyboard-shortcut-help-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Keyboard shortcuts'),
    closeButtonLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Close'),
    onRequestClose: toggleModal
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ShortcutSection, {
    className: "edit-post-keyboard-shortcut-help-modal__main-shortcuts",
    shortcuts: ['core/edit-post/keyboard-shortcuts']
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
    shortcuts: _config__WEBPACK_IMPORTED_MODULE_8__.textFormattingShortcuts
  }));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(select => ({
  isModalActive: select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_7__.store).isModalActive(KEYBOARD_SHORTCUT_HELP_MODAL_NAME)
})), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)((dispatch, {
  isModalActive
}) => {
  const {
    openModal,
    closeModal
  } = dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_7__.store);
  return {
    toggleModal: () => isModalActive ? closeModal() : openModal(KEYBOARD_SHORTCUT_HELP_MODAL_NAME)
  };
})])(KeyboardShortcutHelpModal));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/shortcut.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/shortcut.js ***!
  \************************************************************************************************************/
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
    className: "edit-post-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel
  }, (Array.isArray(shortcut) ? shortcut : [shortcut]).map((character, index) => {
    if (character === '+') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: index
      }, character);
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("kbd", {
      key: index,
      className: "edit-post-keyboard-shortcut-help-modal__shortcut-key"
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
    className: "edit-post-keyboard-shortcut-help-modal__shortcut-description"
  }, description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-keyboard-shortcut-help-modal__shortcut-term"
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

/***/ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcuts/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcuts/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



function KeyboardShortcuts() {
  const {
    getBlockSelectionStart
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    getEditorMode,
    isEditorSidebarOpened,
    isListViewOpened,
    isFeatureActive
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const isModeToggleDisabled = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      richEditingEnabled,
      codeEditingEnabled
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store).getEditorSettings();
    return !richEditingEnabled || !codeEditingEnabled;
  }, []);
  const {
    createInfoNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    switchEditorMode,
    openGeneralSidebar,
    closeGeneralSidebar,
    toggleFeature,
    setIsListViewOpened,
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const {
    registerShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    set: setPreference
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__.store);

  const toggleDistractionFree = () => {
    setPreference('core/edit-post', 'fixedToolbar', false);
    setIsInserterOpened(false);
    setIsListViewOpened(false);
    closeGeneralSidebar();
  };

  const {
    replaceBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    getBlockName,
    getSelectedBlockClientId,
    getBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);

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
    replaceBlocks(currentClientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__.createBlock)(destinationBlockName, {
      level,
      content: attributes.content,
      ...{
        [destinationTextAlign]: attributes[textAlign]
      }
    }));
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    registerShortcut({
      name: 'core/edit-post/toggle-mode',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Switch between visual editor and code editor.'),
      keyCombination: {
        modifier: 'secondary',
        character: 'm'
      }
    });
    registerShortcut({
      name: 'core/edit-post/toggle-distraction-free',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggle distraction free mode.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: '\\'
      }
    });
    registerShortcut({
      name: 'core/edit-post/toggle-fullscreen',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggle fullscreen mode.'),
      keyCombination: {
        modifier: 'secondary',
        character: 'f'
      }
    });
    registerShortcut({
      name: 'core/edit-post/toggle-list-view',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Open the block list view.'),
      keyCombination: {
        modifier: 'access',
        character: 'o'
      }
    });
    registerShortcut({
      name: 'core/edit-post/toggle-sidebar',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show or hide the Settings sidebar.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: ','
      }
    });
    registerShortcut({
      name: 'core/edit-post/next-region',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Navigate to the next part of the editor.'),
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
      name: 'core/edit-post/previous-region',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Navigate to the previous part of the editor.'),
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
      name: 'core/edit-post/keyboard-shortcuts',
      category: 'main',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display these keyboard shortcuts.'),
      keyCombination: {
        modifier: 'access',
        character: 'h'
      }
    });
    registerShortcut({
      name: 'core/edit-post/transform-heading-to-paragraph',
      category: 'block-library',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Transform heading to paragraph.'),
      keyCombination: {
        modifier: 'access',
        character: `0`
      }
    });
    [1, 2, 3, 4, 5, 6].forEach(level => {
      registerShortcut({
        name: `core/edit-post/transform-paragraph-to-heading-${level}`,
        category: 'block-library',
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Transform paragraph to heading.'),
        keyCombination: {
          modifier: 'access',
          character: `${level}`
        }
      });
    });
  }, []);
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)('core/edit-post/toggle-mode', () => {
    switchEditorMode(getEditorMode() === 'visual' ? 'text' : 'visual');
  }, {
    isDisabled: isModeToggleDisabled
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)('core/edit-post/toggle-fullscreen', () => {
    toggleFeature('fullscreenMode');
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)('core/edit-post/toggle-distraction-free', () => {
    toggleDistractionFree();
    toggleFeature('distractionFree');
    createInfoNotice(isFeatureActive('distractionFree') ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Distraction free mode turned on.') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Distraction free mode turned off.'), {
      id: 'core/edit-post/distraction-free-mode/notice',
      type: 'snackbar'
    });
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)('core/edit-post/toggle-sidebar', event => {
    // This shortcut has no known clashes, but use preventDefault to prevent any
    // obscure shortcuts from triggering.
    event.preventDefault();

    if (isEditorSidebarOpened()) {
      closeGeneralSidebar();
    } else {
      const sidebarToOpen = getBlockSelectionStart() ? 'edit-post/block' : 'edit-post/document';
      openGeneralSidebar(sidebarToOpen);
    }
  }); // Only opens the list view. Other functionality for this shortcut happens in the rendered sidebar.

  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)('core/edit-post/toggle-list-view', () => {
    if (!isListViewOpened()) {
      setIsListViewOpened(true);
    }
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)('core/edit-post/transform-heading-to-paragraph', event => handleTextLevelShortcut(event, 0));
  [1, 2, 3, 4, 5, 6].forEach(level => {
    //the loop is based off on a constant therefore
    //the hook will execute the same way every time
    //eslint-disable-next-line react-hooks/rules-of-hooks
    (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)(`core/edit-post/transform-paragraph-to-heading-${level}`, event => handleTextLevelShortcut(event, level));
  });
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (KeyboardShortcuts);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/layout/actions-panel.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/layout/actions-panel.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsPanelFill": function() { return /* binding */ ActionsPanelFill; },
/* harmony export */   "default": function() { return /* binding */ ActionsPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sidebar_plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sidebar/plugin-post-publish-panel */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-publish-panel/index.js");
/* harmony import */ var _sidebar_plugin_pre_publish_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar/plugin-pre-publish-panel */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-pre-publish-panel/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.createSlotFill)('ActionsPanel');
const ActionsPanelFill = Fill;
function ActionsPanel({
  setEntitiesSavedStatesCallback,
  closeEntitiesSavedStates,
  isEntitiesSavedStatesOpen
}) {
  const {
    closePublishSidebar,
    togglePublishSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    publishSidebarOpened,
    hasActiveMetaboxes,
    isSavingMetaBoxes,
    hasNonPostEntityChanges
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      publishSidebarOpened: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isPublishSidebarOpened(),
      hasActiveMetaboxes: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).hasMetaBoxes(),
      isSavingMetaBoxes: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isSavingMetaBoxes(),
      hasNonPostEntityChanges: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.store).hasNonPostEntityChanges()
    };
  }, []);
  const openEntitiesSavedStates = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setEntitiesSavedStatesCallback(true), []); // It is ok for these components to be unmounted when not in visual use.
  // We don't want more than one present at a time, decide which to render.

  let unmountableContent;

  if (publishSidebarOpened) {
    unmountableContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostPublishPanel, {
      onClose: closePublishSidebar,
      forceIsDirty: hasActiveMetaboxes,
      forceIsSaving: isSavingMetaBoxes,
      PrePublishExtension: _sidebar_plugin_pre_publish_panel__WEBPACK_IMPORTED_MODULE_6__["default"].Slot,
      PostPublishExtension: _sidebar_plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_5__["default"].Slot
    });
  } else if (hasNonPostEntityChanges) {
    unmountableContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-post-layout__toggle-entities-saved-states-panel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      className: "edit-post-layout__toggle-entities-saved-states-panel-button",
      onClick: openEntitiesSavedStates,
      "aria-expanded": false
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Open save panel')));
  } else {
    unmountableContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-post-layout__toggle-publish-panel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      className: "edit-post-layout__toggle-publish-panel-button",
      onClick: togglePublishSidebar,
      "aria-expanded": false
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Open publish panel')));
  } // Since EntitiesSavedStates controls its own panel, we can keep it
  // always mounted to retain its own component state (such as checkboxes).


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isEntitiesSavedStatesOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.EntitiesSavedStates, {
    close: closeEntitiesSavedStates
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Slot, {
    bubblesVirtually: true
  }), !isEntitiesSavedStatesOpen && unmountableContent);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/layout/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/layout/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _text_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../text-editor */ "./node_modules/@wordpress/edit-post/build-module/components/text-editor/index.js");
/* harmony import */ var _visual_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../visual-editor */ "./node_modules/@wordpress/edit-post/build-module/components/visual-editor/index.js");
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../keyboard-shortcuts */ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcuts/index.js");
/* harmony import */ var _keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../keyboard-shortcut-help-modal */ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/index.js");
/* harmony import */ var _preferences_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../preferences-modal */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/index.js");
/* harmony import */ var _browser_url__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../browser-url */ "./node_modules/@wordpress/edit-post/build-module/components/browser-url/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../header */ "./node_modules/@wordpress/edit-post/build-module/components/header/index.js");
/* harmony import */ var _secondary_sidebar_inserter_sidebar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../secondary-sidebar/inserter-sidebar */ "./node_modules/@wordpress/edit-post/build-module/components/secondary-sidebar/inserter-sidebar.js");
/* harmony import */ var _secondary_sidebar_list_view_sidebar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../secondary-sidebar/list-view-sidebar */ "./node_modules/@wordpress/edit-post/build-module/components/secondary-sidebar/list-view-sidebar.js");
/* harmony import */ var _sidebar_settings_sidebar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../sidebar/settings-sidebar */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/settings-sidebar/index.js");
/* harmony import */ var _meta_boxes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../meta-boxes */ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/index.js");
/* harmony import */ var _welcome_guide__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../welcome-guide */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/index.js");
/* harmony import */ var _actions_panel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./actions-panel */ "./node_modules/@wordpress/edit-post/build-module/components/layout/actions-panel.js");
/* harmony import */ var _start_page_options__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../start-page-options */ "./node_modules/@wordpress/edit-post/build-module/components/start-page-options/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */












/**
 * Internal dependencies
 */

















const {
  getLayoutStyles
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_27__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.privateApis);
const interfaceLabels = {
  /* translators: accessibility text for the editor top bar landmark region. */
  header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Editor top bar'),

  /* translators: accessibility text for the editor content landmark region. */
  body: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Editor content'),

  /* translators: accessibility text for the editor settings landmark region. */
  sidebar: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Editor settings'),

  /* translators: accessibility text for the editor publish landmark region. */
  actions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Editor publish'),

  /* translators: accessibility text for the editor footer landmark region. */
  footer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Editor footer')
};

function Layout() {
  const isMobileViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useViewportMatch)('medium', '<');
  const isHugeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useViewportMatch)('huge', '>=');
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useViewportMatch)('large');
  const {
    openGeneralSidebar,
    closeGeneralSidebar,
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_26__.store);
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_11__.store);
  const {
    mode,
    isFullscreenActive,
    isRichEditingEnabled,
    sidebarIsOpened,
    hasActiveMetaboxes,
    hasFixedToolbar,
    previousShortcut,
    nextShortcut,
    hasBlockSelected,
    isInserterOpened,
    isListViewOpened,
    showIconLabels,
    isDistractionFree,
    showBlockBreadcrumbs,
    isTemplateMode,
    documentLabel,
    styles
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getEditorSettings,
      getPostTypeLabel
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const {
      isFeatureActive
    } = select(_store__WEBPACK_IMPORTED_MODULE_26__.store);
    const editorSettings = getEditorSettings();
    const postTypeLabel = getPostTypeLabel();
    const hasThemeStyles = isFeatureActive('themeStyles');
    const themeStyles = [];
    const presetStyles = [];
    editorSettings.styles?.forEach(style => {
      if (!style.__unstableType || style.__unstableType === 'theme') {
        themeStyles.push(style);
      } else {
        presetStyles.push(style);
      }
    });
    const defaultEditorStyles = [...editorSettings.defaultEditorStyles, ...presetStyles]; // If theme styles are not present or displayed, ensure that
    // base layout styles are still present in the editor.

    if (!editorSettings.disableLayoutStyles && !(hasThemeStyles && themeStyles.length)) {
      defaultEditorStyles.push({
        css: getLayoutStyles({
          style: {},
          selector: 'body',
          hasBlockGapSupport: false,
          hasFallbackGapSupport: true,
          fallbackGapValue: '0.5em'
        })
      });
    }

    return {
      isTemplateMode: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).isEditingTemplate(),
      hasFixedToolbar: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).isFeatureActive('fixedToolbar'),
      sidebarIsOpened: !!(select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_9__.store).getActiveComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_26__.store.name) || select(_store__WEBPACK_IMPORTED_MODULE_26__.store).isPublishSidebarOpened()),
      isFullscreenActive: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).isFeatureActive('fullscreenMode'),
      isInserterOpened: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).isInserterOpened(),
      isListViewOpened: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).isListViewOpened(),
      mode: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).getEditorMode(),
      isRichEditingEnabled: editorSettings.richEditingEnabled,
      hasActiveMetaboxes: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).hasMetaBoxes(),
      previousShortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_10__.store).getAllShortcutKeyCombinations('core/edit-post/previous-region'),
      nextShortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_10__.store).getAllShortcutKeyCombinations('core/edit-post/next-region'),
      showIconLabels: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).isFeatureActive('showIconLabels'),
      isDistractionFree: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).isFeatureActive('distractionFree'),
      showBlockBreadcrumbs: select(_store__WEBPACK_IMPORTED_MODULE_26__.store).isFeatureActive('showBlockBreadcrumbs'),
      // translators: Default label for the Document in the Block Breadcrumb.
      documentLabel: postTypeLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__._x)('Document', 'noun'),
      styles: hasThemeStyles && themeStyles.length ? editorSettings.styles : defaultEditorStyles
    };
  }, []);

  const openSidebarPanel = () => openGeneralSidebar(hasBlockSelected ? 'edit-post/block' : 'edit-post/document'); // Inserter and Sidebars are mutually exclusive


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (sidebarIsOpened && !isHugeViewport) {
      setIsInserterOpened(false);
    }
  }, [sidebarIsOpened, isHugeViewport]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isInserterOpened && !isHugeViewport) {
      closeGeneralSidebar();
    }
  }, [isInserterOpened, isHugeViewport]); // Local state for save panel.
  // Note 'truthy' callback implies an open panel.

  const [entitiesSavedStatesCallback, setEntitiesSavedStatesCallback] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const closeEntitiesSavedStates = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(arg => {
    if (typeof entitiesSavedStatesCallback === 'function') {
      entitiesSavedStatesCallback(arg);
    }

    setEntitiesSavedStatesCallback(false);
  }, [entitiesSavedStatesCallback]);
  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-post-layout', 'is-mode-' + mode, {
    'is-sidebar-opened': sidebarIsOpened,
    'has-fixed-toolbar': hasFixedToolbar,
    'has-metaboxes': hasActiveMetaboxes,
    'show-icon-labels': showIconLabels,
    'is-distraction-free': isDistractionFree && isLargeViewport,
    'is-entity-save-view-open': !!entitiesSavedStatesCallback
  });
  const secondarySidebarLabel = isListViewOpened ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Document Overview') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Block Library');

  const secondarySidebar = () => {
    if (mode === 'visual' && isInserterOpened) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_secondary_sidebar_inserter_sidebar__WEBPACK_IMPORTED_MODULE_19__["default"], null);
    }

    if (mode === 'visual' && isListViewOpened) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_secondary_sidebar_list_view_sidebar__WEBPACK_IMPORTED_MODULE_20__["default"], null);
    }

    return null;
  };

  function onPluginAreaError(name) {
    createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.sprintf)(
    /* translators: %s: plugin name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('The "%s" plugin has encountered an error and cannot be rendered.'), name));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_9__.FullscreenMode, {
    isActive: isFullscreenActive
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_browser_url__WEBPACK_IMPORTED_MODULE_17__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.UnsavedChangesWarning, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.AutosaveMonitor, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.LocalAutosaveMonitor, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_14__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.EditorKeyboardShortcutsRegister, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_sidebar_settings_sidebar__WEBPACK_IMPORTED_MODULE_21__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_9__.InterfaceSkeleton, {
    isDistractionFree: isDistractionFree && isLargeViewport,
    className: className,
    labels: { ...interfaceLabels,
      secondarySidebar: secondarySidebarLabel
    },
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_header__WEBPACK_IMPORTED_MODULE_18__["default"], {
      setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
    }),
    editorNotices: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.EditorNotices, null),
    secondarySidebar: secondarySidebar(),
    sidebar: (!isMobileViewport || sidebarIsOpened) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !isMobileViewport && !sidebarIsOpened && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-post-layout__toggle-sidebar-panel"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "secondary",
      className: "edit-post-layout__toggle-sidebar-panel-button",
      onClick: openSidebarPanel,
      "aria-expanded": false
    }, hasBlockSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Open block settings') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('Open document settings'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_9__.ComplementaryArea.Slot, {
      scope: "core/edit-post"
    })),
    notices: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.EditorSnackbars, null),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !isDistractionFree && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.EditorNotices, null), (mode === 'text' || !isRichEditingEnabled) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_text_editor__WEBPACK_IMPORTED_MODULE_12__["default"], null), isRichEditingEnabled && mode === 'visual' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_visual_editor__WEBPACK_IMPORTED_MODULE_13__["default"], {
      styles: styles
    }), !isDistractionFree && !isTemplateMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-post-layout__metaboxes"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_meta_boxes__WEBPACK_IMPORTED_MODULE_22__["default"], {
      location: "normal"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_meta_boxes__WEBPACK_IMPORTED_MODULE_22__["default"], {
      location: "advanced"
    })), isMobileViewport && sidebarIsOpened && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ScrollLock, null)),
    footer: !isDistractionFree && !isMobileViewport && showBlockBreadcrumbs && isRichEditingEnabled && mode === 'visual' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-post-layout__footer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockBreadcrumb, {
      rootLabelText: documentLabel
    })),
    actions: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_actions_panel__WEBPACK_IMPORTED_MODULE_24__["default"], {
      closeEntitiesSavedStates: closeEntitiesSavedStates,
      isEntitiesSavedStatesOpen: entitiesSavedStatesCallback,
      setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
    }),
    shortcuts: {
      previous: previousShortcut,
      next: nextShortcut
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preferences_modal__WEBPACK_IMPORTED_MODULE_16__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_15__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_welcome_guide__WEBPACK_IMPORTED_MODULE_23__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostSyncStatusModal, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_start_page_options__WEBPACK_IMPORTED_MODULE_25__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Popover.Slot, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_7__.PluginArea, {
    onError: onPluginAreaError
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MetaBoxes; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meta_boxes_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta-boxes-area */ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js");
/* harmony import */ var _meta_box_visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta-box-visibility */ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-box-visibility.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function MetaBoxes({
  location
}) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useRegistry)();
  const {
    metaBoxes,
    areMetaBoxesInitialized,
    isEditorReady
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      __unstableIsEditorReady
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const {
      getMetaBoxesPerLocation,
      areMetaBoxesInitialized: _areMetaBoxesInitialized
    } = select(_store__WEBPACK_IMPORTED_MODULE_5__.store);
    return {
      metaBoxes: getMetaBoxesPerLocation(location),
      areMetaBoxesInitialized: _areMetaBoxesInitialized(),
      isEditorReady: __unstableIsEditorReady()
    };
  }, [location]); // When editor is ready, initialize postboxes (wp core script) and metabox
  // saving. This initializes all meta box locations, not just this specific
  // one.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isEditorReady && !areMetaBoxesInitialized) {
      registry.dispatch(_store__WEBPACK_IMPORTED_MODULE_5__.store).initializeMetaBoxes();
    }
  }, [isEditorReady, areMetaBoxesInitialized]);

  if (!areMetaBoxesInitialized) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (metaBoxes !== null && metaBoxes !== void 0 ? metaBoxes : []).map(({
    id
  }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_meta_box_visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: id,
    id: id
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_meta_boxes_area__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: location
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-box-visibility.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-box-visibility.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



class MetaBoxVisibility extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  componentDidMount() {
    this.updateDOM();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isVisible !== prevProps.isVisible) {
      this.updateDOM();
    }
  }

  updateDOM() {
    const {
      id,
      isVisible
    } = this.props;
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    if (isVisible) {
      element.classList.remove('is-hidden');
    } else {
      element.classList.add('is-hidden');
    }
  }

  render() {
    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)((select, {
  id
}) => ({
  isVisible: select(_store__WEBPACK_IMPORTED_MODULE_2__.store).isEditorPanelEnabled(`meta-box-${id}`)
}))(MetaBoxVisibility));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js ***!
  \*******************************************************************************************************/
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Render metabox area.
 *
 * @param {Object} props          Component props.
 * @param {string} props.location metabox location.
 * @return {WPComponent} The component to be rendered.
 */

function MetaBoxesArea({
  location
}) {
  const container = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const formRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    formRef.current = document.querySelector('.metabox-location-' + location);

    if (formRef.current) {
      container.current.appendChild(formRef.current);
    }

    return () => {
      if (formRef.current) {
        document.querySelector('#metaboxes').appendChild(formRef.current);
      }
    };
  }, [location]);
  const isSaving = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select(_store__WEBPACK_IMPORTED_MODULE_4__.store).isSavingMetaBoxes();
  }, []);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-post-meta-boxes-area', `is-${location}`, {
    'is-loading': isSaving
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, isSaving && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-meta-boxes-area__container",
    ref: container
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-meta-boxes-area__clear"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MetaBoxesArea);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/index.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PREFERENCES_MODAL_NAME": function() { return /* binding */ PREFERENCES_MODAL_NAME; },
/* harmony export */   "default": function() { return /* binding */ EditPostPreferencesModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/index.js");
/* harmony import */ var _meta_boxes_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meta-boxes-section */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/meta-boxes-section.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _block_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../block-manager */ "./node_modules/@wordpress/edit-post/build-module/components/block-manager/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





const PREFERENCES_MODAL_NAME = 'edit-post/preferences';
function EditPostPreferencesModal() {
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch)('medium');
  const {
    closeModal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.store);
  const [isModalActive, showBlockBreadcrumbsOption] = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getEditorSettings
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      getEditorMode,
      isFeatureActive
    } = select(_store__WEBPACK_IMPORTED_MODULE_9__.store);
    const modalActive = select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.store).isModalActive(PREFERENCES_MODAL_NAME);
    const mode = getEditorMode();
    const isRichEditingEnabled = getEditorSettings().richEditingEnabled;
    const isDistractionFreeEnabled = isFeatureActive('distractionFree');
    return [modalActive, !isDistractionFreeEnabled && isLargeViewport && isRichEditingEnabled && mode === 'visual', isDistractionFreeEnabled];
  }, [isLargeViewport]);
  const {
    closeGeneralSidebar,
    setIsListViewOpened,
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const {
    set: setPreference
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.store);

  const toggleDistractionFree = () => {
    setPreference('core/edit-post', 'fixedToolbar', false);
    setIsInserterOpened(false);
    setIsListViewOpened(false);
    closeGeneralSidebar();
  };

  const sections = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    name: 'general',
    tabLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General'),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isLargeViewport && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.PreferencesModalSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Publishing'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change options related to publishing.')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnablePublishSidebarOption, {
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Review settings, such as visibility and tags.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Include pre-publish checklist')
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.PreferencesModalSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Appearance'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customize options related to the block editor interface and editing flow.')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnableFeature, {
      featureName: "distractionFree",
      onToggle: toggleDistractionFree,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reduce visual distractions by hiding the toolbar and other elements to focus on writing.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Distraction free')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnableFeature, {
      featureName: "focusMode",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Highlights the current block and fades other content.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spotlight mode')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnableFeature, {
      featureName: "showIconLabels",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show button text labels'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show text instead of icons on buttons.')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnableFeature, {
      featureName: "showListViewByDefault",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Opens the block list view sidebar by default.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Always open list view')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnableFeature, {
      featureName: "themeStyles",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Make the editor look like your theme.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use theme styles')
    }), showBlockBreadcrumbsOption && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnableFeature, {
      featureName: "showBlockBreadcrumbs",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shows block breadcrumbs at the bottom of the editor.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display block breadcrumbs')
    })))
  }, {
    name: 'blocks',
    tabLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blocks'),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.PreferencesModalSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block interactions'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customize how you interact with blocks in the block library and editing canvas.')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnableFeature, {
      featureName: "mostUsedBlocks",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Places the most frequent blocks in the block library.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show most used blocks')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnableFeature, {
      featureName: "keepCaretInsideBlock",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Aids screen readers by stopping text caret from leaving blocks.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Contain text cursor inside block')
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.PreferencesModalSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visible blocks'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Disable blocks that you don't want to appear in the inserter. They can always be toggled back on later.")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_manager__WEBPACK_IMPORTED_MODULE_10__["default"], null)))
  }, {
    name: 'panels',
    tabLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Panels'),
    content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.PreferencesModalSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Document settings'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose what displays in the panel.')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnablePluginDocumentSettingPanelOption.Slot, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.PostTaxonomies, {
      taxonomyWrapper: (content, taxonomy) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnablePanelOption, {
        label: taxonomy.labels.menu_name,
        panelName: `taxonomy-panel-${taxonomy.slug}`
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.PostFeaturedImageCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnablePanelOption, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Featured image'),
      panelName: "featured-image"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.PostExcerptCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnablePanelOption, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Excerpt'),
      panelName: "post-excerpt"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.PostTypeSupportCheck, {
      supportKeys: ['comments', 'trackbacks']
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnablePanelOption, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Discussion'),
      panelName: "discussion-panel"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.PageAttributesCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_7__.EnablePanelOption, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Page attributes'),
      panelName: "page-attributes"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_meta_boxes_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Additional'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add extra areas to the editor.')
    }))
  }], [isLargeViewport, showBlockBreadcrumbsOption]);

  if (!isModalActive) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.PreferencesModal, {
    closeModal: closeModal
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.PreferencesModalTabs, {
    sections: sections
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/meta-boxes-section.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/meta-boxes-section.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaBoxesSection": function() { return /* binding */ MetaBoxesSection; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function MetaBoxesSection({
  areCustomFieldsRegistered,
  metaBoxes,
  ...sectionProps
}) {
  // The 'Custom Fields' meta box is a special case that we handle separately.
  const thirdPartyMetaBoxes = metaBoxes.filter(({
    id
  }) => id !== 'postcustom');

  if (!areCustomFieldsRegistered && thirdPartyMetaBoxes.length === 0) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.PreferencesModalSection, { ...sectionProps
  }, areCustomFieldsRegistered && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_5__.EnableCustomFieldsOption, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom fields')
  }), thirdPartyMetaBoxes.map(({
    id,
    title
  }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options__WEBPACK_IMPORTED_MODULE_5__.EnablePanelOption, {
    key: id,
    label: title,
    panelName: `meta-box-${id}`
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  const {
    getEditorSettings
  } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    getAllMetaBoxes
  } = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  return {
    // This setting should not live in the block editor's store.
    areCustomFieldsRegistered: getEditorSettings().enableCustomFields !== undefined,
    metaBoxes: getAllMetaBoxes()
  };
})(MetaBoxesSection));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-custom-fields.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-custom-fields.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomFieldsConfirmation": function() { return /* binding */ CustomFieldsConfirmation; },
/* harmony export */   "EnableCustomFieldsOption": function() { return /* binding */ EnableCustomFieldsOption; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");


/**
 * WordPress dependencies
 */






function CustomFieldsConfirmation({
  willEnable
}) {
  const [isReloading, setIsReloading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-post-preferences-modal__custom-fields-confirmation-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A page reload is required for this change. Make sure your content is saved before reloading.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "edit-post-preferences-modal__custom-fields-confirmation-button",
    variant: "secondary",
    isBusy: isReloading,
    disabled: isReloading,
    onClick: () => {
      setIsReloading(true);
      document.getElementById('toggle-custom-fields-form').submit();
    }
  }, willEnable ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show & Reload Page') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide & Reload Page')));
}
function EnableCustomFieldsOption({
  label,
  areCustomFieldsEnabled
}) {
  const [isChecked, setIsChecked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(areCustomFieldsEnabled);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.___unstablePreferencesModalBaseOption, {
    label: label,
    isChecked: isChecked,
    onChange: setIsChecked
  }, isChecked !== areCustomFieldsEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomFieldsConfirmation, {
    willEnable: isChecked
  }));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => ({
  areCustomFieldsEnabled: !!select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store).getEditorSettings().enableCustomFields
}))(EnableCustomFieldsOption));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-feature.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-feature.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)((select, {
  featureName
}) => {
  const {
    isFeatureActive
  } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  return {
    isChecked: isFeatureActive(featureName)
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withDispatch)((dispatch, {
  featureName,
  onToggle = () => {}
}) => ({
  onChange: () => {
    onToggle();
    dispatch(_store__WEBPACK_IMPORTED_MODULE_3__.store).toggleFeature(featureName);
  }
})))(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.___unstablePreferencesModalBaseOption));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-panel.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-panel.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)((select, {
  panelName
}) => {
  const {
    isEditorPanelEnabled,
    isEditorPanelRemoved
  } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
  return {
    isRemoved: isEditorPanelRemoved(panelName),
    isChecked: isEditorPanelEnabled(panelName)
  };
}), (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.ifCondition)(({
  isRemoved
}) => !isRemoved), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withDispatch)((dispatch, {
  panelName
}) => ({
  onChange: () => dispatch(_store__WEBPACK_IMPORTED_MODULE_3__.store).toggleEditorPanelEnabled(panelName)
})))(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.___unstablePreferencesModalBaseOption));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-plugin-document-setting-panel.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-plugin-document-setting-panel.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('EnablePluginDocumentSettingPanelOption');

const EnablePluginDocumentSettingPanelOption = ({
  label,
  panelName
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_index__WEBPACK_IMPORTED_MODULE_2__.EnablePanelOption, {
  label: label,
  panelName: panelName
}));

EnablePluginDocumentSettingPanelOption.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (EnablePluginDocumentSettingPanelOption);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-publish-sidebar.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-publish-sidebar.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/viewport */ "@wordpress/viewport");
/* harmony import */ var _wordpress_viewport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_viewport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/**
 * WordPress dependencies
 */





/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => ({
  isChecked: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isPublishSidebarEnabled()
})), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withDispatch)(dispatch => {
  const {
    enablePublishSidebar,
    disablePublishSidebar
  } = dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  return {
    onChange: isEnabled => isEnabled ? enablePublishSidebar() : disablePublishSidebar()
  };
}), // In < medium viewports we override this option and always show the publish sidebar.
// See the edit-post's header component for the specific logic.
(0,_wordpress_viewport__WEBPACK_IMPORTED_MODULE_2__.ifViewportMatches)('medium'))(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.___unstablePreferencesModalBaseOption));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/index.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnableCustomFieldsOption": function() { return /* reexport safe */ _enable_custom_fields__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "EnableFeature": function() { return /* reexport safe */ _enable_feature__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "EnablePanelOption": function() { return /* reexport safe */ _enable_panel__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "EnablePluginDocumentSettingPanelOption": function() { return /* reexport safe */ _enable_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "EnablePublishSidebarOption": function() { return /* reexport safe */ _enable_publish_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"]; }
/* harmony export */ });
/* harmony import */ var _enable_custom_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enable-custom-fields */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-custom-fields.js");
/* harmony import */ var _enable_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enable-panel */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-panel.js");
/* harmony import */ var _enable_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enable-plugin-document-setting-panel */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-plugin-document-setting-panel.js");
/* harmony import */ var _enable_publish_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enable-publish-sidebar */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-publish-sidebar.js");
/* harmony import */ var _enable_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enable-feature */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-feature.js");







/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/secondary-sidebar/inserter-sidebar.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/secondary-sidebar/inserter-sidebar.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InserterSidebar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function InserterSidebar() {
  const {
    insertionPoint,
    showMostUsedBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      isFeatureActive,
      __experimentalGetInsertionPoint
    } = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);
    return {
      insertionPoint: __experimentalGetInsertionPoint(),
      showMostUsedBlocks: isFeatureActive('mostUsedBlocks')
    };
  }, []);
  const {
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const isMobileViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('medium', '<');
  const TagName = !isMobileViewport ? _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.VisuallyHidden : 'div';
  const [inserterDialogRef, inserterDialogProps] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.__experimentalUseDialog)({
    onClose: () => setIsInserterOpened(false),
    focusOnMount: null
  });
  const libraryRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    libraryRef.current.focusSearch();
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: inserterDialogRef,
    ...inserterDialogProps,
    className: "edit-post-editor__inserter-panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
    className: "edit-post-editor__inserter-panel-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Close block inserter'),
    onClick: () => setIsInserterOpened(false)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-editor__inserter-panel-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalLibrary, {
    showMostUsedBlocks: showMostUsedBlocks,
    showInserterHelpPanel: true,
    shouldFocusBlock: isMobileViewport,
    rootClientId: insertionPoint.rootClientId,
    __experimentalInsertionIndex: insertionPoint.insertionIndex,
    __experimentalFilterValue: insertionPoint.filterValue,
    ref: libraryRef
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/secondary-sidebar/list-view-outline.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/secondary-sidebar/list-view-outline.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ListViewOutline; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function EmptyOutlineIllustration() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
    width: "138",
    height: "148",
    viewBox: "0 0 138 148",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Rect, {
    width: "138",
    height: "148",
    rx: "4",
    fill: "#F0F6FC"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Line, {
    x1: "44",
    y1: "28",
    x2: "24",
    y2: "28",
    stroke: "#DDDDDD"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Rect, {
    x: "48",
    y: "16",
    width: "27",
    height: "23",
    rx: "4",
    fill: "#DDDDDD"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
    d: "M54.7585 32V23.2727H56.6037V26.8736H60.3494V23.2727H62.1903V32H60.3494V28.3949H56.6037V32H54.7585ZM67.4574 23.2727V32H65.6122V25.0241H65.5611L63.5625 26.277V24.6406L65.723 23.2727H67.4574Z",
    fill: "black"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Line, {
    x1: "55",
    y1: "59",
    x2: "24",
    y2: "59",
    stroke: "#DDDDDD"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Rect, {
    x: "59",
    y: "47",
    width: "29",
    height: "23",
    rx: "4",
    fill: "#DDDDDD"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
    d: "M65.7585 63V54.2727H67.6037V57.8736H71.3494V54.2727H73.1903V63H71.3494V59.3949H67.6037V63H65.7585ZM74.6605 63V61.6705L77.767 58.794C78.0313 58.5384 78.2528 58.3082 78.4318 58.1037C78.6136 57.8991 78.7514 57.6989 78.8452 57.5028C78.9389 57.304 78.9858 57.0895 78.9858 56.8594C78.9858 56.6037 78.9276 56.3835 78.8111 56.1989C78.6946 56.0114 78.5355 55.8679 78.3338 55.7685C78.1321 55.6662 77.9034 55.6151 77.6477 55.6151C77.3807 55.6151 77.1477 55.669 76.9489 55.777C76.75 55.8849 76.5966 56.0398 76.4886 56.2415C76.3807 56.4432 76.3267 56.6832 76.3267 56.9616H74.5753C74.5753 56.3906 74.7045 55.8949 74.9631 55.4744C75.2216 55.054 75.5838 54.7287 76.0497 54.4986C76.5156 54.2685 77.0526 54.1534 77.6605 54.1534C78.2855 54.1534 78.8295 54.2642 79.2926 54.4858C79.7585 54.7045 80.1207 55.0085 80.3793 55.3977C80.6378 55.7869 80.767 56.233 80.767 56.7358C80.767 57.0653 80.7017 57.3906 80.571 57.7116C80.4432 58.0327 80.2145 58.3892 79.8849 58.7812C79.5554 59.1705 79.0909 59.6378 78.4915 60.1832L77.2173 61.4318V61.4915H80.8821V63H74.6605Z",
    fill: "black"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Line, {
    x1: "80",
    y1: "90",
    x2: "24",
    y2: "90",
    stroke: "#DDDDDD"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Rect, {
    x: "84",
    y: "78",
    width: "30",
    height: "23",
    rx: "4",
    fill: "#F0B849"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
    d: "M90.7585 94V85.2727H92.6037V88.8736H96.3494V85.2727H98.1903V94H96.3494V90.3949H92.6037V94H90.7585ZM99.5284 92.4659V91.0128L103.172 85.2727H104.425V87.2841H103.683L101.386 90.919V90.9872H106.564V92.4659H99.5284ZM103.717 94V92.0227L103.751 91.3793V85.2727H105.482V94H103.717Z",
    fill: "black"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Line, {
    x1: "66",
    y1: "121",
    x2: "24",
    y2: "121",
    stroke: "#DDDDDD"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Rect, {
    x: "70",
    y: "109",
    width: "29",
    height: "23",
    rx: "4",
    fill: "#DDDDDD"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
    d: "M76.7585 125V116.273H78.6037V119.874H82.3494V116.273H84.1903V125H82.3494V121.395H78.6037V125H76.7585ZM88.8864 125.119C88.25 125.119 87.6832 125.01 87.1861 124.791C86.6918 124.57 86.3011 124.266 86.0142 123.879C85.7301 123.49 85.5838 123.041 85.5753 122.533H87.4332C87.4446 122.746 87.5142 122.933 87.642 123.095C87.7727 123.254 87.946 123.378 88.1619 123.466C88.3778 123.554 88.6207 123.598 88.8906 123.598C89.1719 123.598 89.4205 123.548 89.6364 123.449C89.8523 123.349 90.0213 123.212 90.1435 123.036C90.2656 122.859 90.3267 122.656 90.3267 122.426C90.3267 122.193 90.2614 121.987 90.1307 121.808C90.0028 121.626 89.8182 121.484 89.5767 121.382C89.3381 121.28 89.054 121.229 88.7244 121.229H87.9105V119.874H88.7244C89.0028 119.874 89.2486 119.825 89.4616 119.729C89.6776 119.632 89.8452 119.499 89.9645 119.328C90.0838 119.155 90.1435 118.953 90.1435 118.723C90.1435 118.504 90.0909 118.312 89.9858 118.148C89.8835 117.98 89.7386 117.849 89.5511 117.756C89.3665 117.662 89.1506 117.615 88.9034 117.615C88.6534 117.615 88.4247 117.661 88.2173 117.751C88.0099 117.839 87.8438 117.966 87.7188 118.131C87.5938 118.295 87.527 118.489 87.5185 118.71H85.75C85.7585 118.207 85.902 117.764 86.1804 117.381C86.4588 116.997 86.8338 116.697 87.3054 116.482C87.7798 116.263 88.3153 116.153 88.9119 116.153C89.5142 116.153 90.0412 116.263 90.4929 116.482C90.9446 116.7 91.2955 116.996 91.5455 117.368C91.7983 117.737 91.9233 118.152 91.9205 118.612C91.9233 119.101 91.7713 119.509 91.4645 119.835C91.1605 120.162 90.7642 120.369 90.2756 120.457V120.526C90.9176 120.608 91.4063 120.831 91.7415 121.195C92.0795 121.555 92.2472 122.007 92.2443 122.55C92.2472 123.047 92.1037 123.489 91.8139 123.875C91.527 124.261 91.1307 124.565 90.625 124.787C90.1193 125.009 89.5398 125.119 88.8864 125.119Z",
    fill: "black"
  }));
}

function ListViewOutline() {
  const {
    headingCount
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getGlobalBlockCount
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    return {
      headingCount: getGlobalBlockCount('core/heading')
    };
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-editor__list-view-overview"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Characters:')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalText, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.CharacterCount, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Words:')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.WordCount, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Time to read:')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.TimeToRead, null))), headingCount > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.DocumentOutline, null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-editor__list-view-empty-headings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EmptyOutlineIllustration, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Navigate the structure of your document and address issues like empty or incorrect heading levels.'))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/secondary-sidebar/list-view-sidebar.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/secondary-sidebar/list-view-sidebar.js ***!
  \**********************************************************************************************************/
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
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/dom */ "@wordpress/dom");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _list_view_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-view-outline */ "./node_modules/@wordpress/edit-post/build-module/components/secondary-sidebar/list-view-outline.js");


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */



function ListViewSidebar() {
  const {
    setIsListViewOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.store); // This hook handles focus when the sidebar first renders.

  const focusOnMountRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusOnMount)('firstElement'); // The next 2 hooks handle focus for when the sidebar closes and returning focus to the element that had focus before sidebar opened.

  const headerFocusReturnRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusReturn)();
  const contentFocusReturnRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useFocusReturn)();

  function closeOnEscape(event) {
    if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__.ESCAPE && !event.defaultPrevented) {
      event.preventDefault();
      setIsListViewOpened(false);
    }
  } // Use internal state instead of a ref to make sure that the component
  // re-renders when the dropZoneElement updates.


  const [dropZoneElement, setDropZoneElement] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Tracks our current tab.

  const [tab, setTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('list-view'); // This ref refers to the sidebar as a whole.

  const sidebarRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // This ref refers to the tab panel.

  const tabPanelRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // This ref refers to the list view application area.

  const listViewRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Must merge the refs together so focus can be handled properly in the next function.

  const listViewContainerRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)([contentFocusReturnRef, focusOnMountRef, listViewRef, setDropZoneElement]);
  /*
   * Callback function to handle list view or outline focus.
   *
   * @param {string} currentTab The current tab. Either list view or outline.
   *
   * @return void
   */

  function handleSidebarFocus(currentTab) {
    // Tab panel focus.
    const tabPanelFocus = _wordpress_dom__WEBPACK_IMPORTED_MODULE_5__.focus.tabbable.find(tabPanelRef.current)[0]; // List view tab is selected.

    if (currentTab === 'list-view') {
      // Either focus the list view or the tab panel. Must have a fallback because the list view does not render when there are no blocks.
      const listViewApplicationFocus = _wordpress_dom__WEBPACK_IMPORTED_MODULE_5__.focus.tabbable.find(listViewRef.current)[0];
      const listViewFocusArea = sidebarRef.current.contains(listViewApplicationFocus) ? listViewApplicationFocus : tabPanelFocus;
      listViewFocusArea.focus(); // Outline tab is selected.
    } else {
      tabPanelFocus.focus();
    }
  } // This only fires when the sidebar is open because of the conditional rendering. It is the same shortcut to open but that is defined as a global shortcut and only fires when the sidebar is closed.


  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_7__.useShortcut)('core/edit-post/toggle-list-view', () => {
    // If the sidebar has focus, it is safe to close.
    if (sidebarRef.current.contains(sidebarRef.current.ownerDocument.activeElement)) {
      setIsListViewOpened(false); // If the list view or outline does not have focus, focus should be moved to it.
    } else {
      handleSidebarFocus(tab);
    }
  });
  /**
   * Render tab content for a given tab name.
   *
   * @param {string} tabName The name of the tab to render.
   */

  function renderTabContent(tabName) {
    if (tabName === 'list-view') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "edit-post-editor__list-view-panel-content"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalListView, {
        dropZoneElement: dropZoneElement
      }));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_list_view_outline__WEBPACK_IMPORTED_MODULE_10__["default"], null);
  }

  return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-post-editor__document-overview-panel",
      onKeyDown: closeOnEscape,
      ref: sidebarRef
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "edit-post-editor__document-overview-panel__close-button",
      ref: headerFocusReturnRef,
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Close'),
      onClick: () => setIsListViewOpened(false)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: "edit-post-editor__document-overview-panel__tab-panel",
      ref: tabPanelRef,
      onSelect: tabName => setTab(tabName),
      selectOnMove: false,
      tabs: [{
        name: 'list-view',
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__._x)('List View', 'Post overview'),
        className: 'edit-post-sidebar__panel-tab'
      }, {
        name: 'outline',
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__._x)('Outline', 'Post overview'),
        className: 'edit-post-sidebar__panel-tab'
      }]
    }, currentTab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "edit-post-editor__list-view-container",
      ref: listViewContainerRef
    }, renderTabContent(currentTab.name))))
  );
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/discussion-panel/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/discussion-panel/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

const PANEL_NAME = 'discussion-panel';

function DiscussionPanel({
  isEnabled,
  isOpened,
  onTogglePanel
}) {
  if (!isEnabled) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostTypeSupportCheck, {
    supportKeys: ['comments', 'trackbacks']
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Discussion'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostTypeSupportCheck, {
    supportKeys: "comments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostComments, null))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostTypeSupportCheck, {
    supportKeys: "trackbacks"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostPingbacks, null)))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(select => {
  return {
    isEnabled: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).isEditorPanelEnabled(PANEL_NAME),
    isOpened: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).isEditorPanelOpened(PANEL_NAME)
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(dispatch => ({
  onTogglePanel() {
    return dispatch(_store__WEBPACK_IMPORTED_MODULE_6__.store).toggleEditorPanelOpened(PANEL_NAME);
  }

}))])(DiscussionPanel));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/featured-image/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/featured-image/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

const PANEL_NAME = 'featured-image';

function FeaturedImage({
  isEnabled,
  isOpened,
  postType,
  onTogglePanel
}) {
  var _postType$labels$feat;

  if (!isEnabled) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostFeaturedImageCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (_postType$labels$feat = postType?.labels?.featured_image) !== null && _postType$labels$feat !== void 0 ? _postType$labels$feat : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Featured image'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostFeaturedImage, null)));
}

const applyWithSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(select => {
  const {
    getEditedPostAttribute
  } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    getPostType
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    isEditorPanelEnabled,
    isEditorPanelOpened
  } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  return {
    postType: getPostType(getEditedPostAttribute('type')),
    isEnabled: isEditorPanelEnabled(PANEL_NAME),
    isOpened: isEditorPanelOpened(PANEL_NAME)
  };
});
const applyWithDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(dispatch => {
  const {
    toggleEditorPanelOpened
  } = dispatch(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  return {
    onTogglePanel: (...args) => toggleEditorPanelOpened(PANEL_NAME, ...args)
  };
});
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)(applyWithSelect, applyWithDispatch)(FeaturedImage));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/last-revision/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/last-revision/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */



function LastRevision() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostLastRevisionCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    className: "edit-post-last-revision__panel"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostLastRevision, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (LastRevision);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/page-attributes/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/page-attributes/index.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAttributes": function() { return /* binding */ PageAttributes; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

const PANEL_NAME = 'page-attributes';
function PageAttributes() {
  var _postType$labels$attr;

  const {
    isEnabled,
    isOpened,
    postType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEditedPostAttribute
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const {
      isEditorPanelEnabled,
      isEditorPanelOpened
    } = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);
    const {
      getPostType
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    return {
      isEnabled: isEditorPanelEnabled(PANEL_NAME),
      isOpened: isEditorPanelOpened(PANEL_NAME),
      postType: getPostType(getEditedPostAttribute('type'))
    };
  }, []);
  const {
    toggleEditorPanelOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);

  if (!isEnabled || !postType) {
    return null;
  }

  const onTogglePanel = (...args) => toggleEditorPanelOpened(PANEL_NAME, ...args);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PageAttributesCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (_postType$labels$attr = postType?.labels?.attributes) !== null && _postType$labels$attr !== void 0 ? _postType$labels$attr : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Page attributes'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PageAttributesParent, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PageAttributesOrder, null))));
}
/* harmony default export */ __webpack_exports__["default"] = (PageAttributes);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-document-setting-panel/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-document-setting-panel/index.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/warning */ "@wordpress/warning");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _preferences_modal_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../preferences-modal/options */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * Defines as extensibility slot for the Settings sidebar
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('PluginDocumentSettingPanel');

const PluginDocumentSettingFill = ({
  isEnabled,
  panelName,
  opened,
  onToggle,
  className,
  title,
  icon,
  children
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preferences_modal_options__WEBPACK_IMPORTED_MODULE_6__.EnablePluginDocumentSettingPanelOption, {
    label: title,
    panelName: panelName
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, isEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    className: className,
    title: title,
    icon: icon,
    opened: opened,
    onToggle: onToggle
  }, children)));
};
/**
 * Renders items below the Status & Availability panel in the Document Sidebar.
 *
 * @param {Object}                props                                 Component properties.
 * @param {string}                [props.name]                          The machine-friendly name for the panel.
 * @param {string}                [props.className]                     An optional class name added to the row.
 * @param {string}                [props.title]                         The title of the panel
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var el = wp.element.createElement;
 * var __ = wp.i18n.__;
 * var registerPlugin = wp.plugins.registerPlugin;
 * var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
 *
 * function MyDocumentSettingPlugin() {
 * 	return el(
 * 		PluginDocumentSettingPanel,
 * 		{
 * 			className: 'my-document-setting-plugin',
 * 			title: 'My Panel',
 * 		},
 * 		__( 'My Document Setting Panel' )
 * 	);
 * }
 *
 * registerPlugin( 'my-document-setting-plugin', {
 * 		render: MyDocumentSettingPlugin
 * } );
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { registerPlugin } from '@wordpress/plugins';
 * import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
 *
 * const MyDocumentSettingTest = () => (
 * 		<PluginDocumentSettingPanel className="my-document-setting-plugin" title="My Panel">
 *			<p>My Document Setting Panel</p>
 *		</PluginDocumentSettingPanel>
 *	);
 *
 *  registerPlugin( 'document-setting-test', { render: MyDocumentSettingTest } );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */


const PluginDocumentSettingPanel = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)((0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__.withPluginContext)((context, ownProps) => {
  if (undefined === ownProps.name) {
    typeof process !== "undefined" && process.env && "development" !== "production" ? _wordpress_warning__WEBPACK_IMPORTED_MODULE_5___default()('PluginDocumentSettingPanel requires a name property.') : void 0;
  }

  return {
    panelName: `${context.name}/${ownProps.name}`
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)((select, {
  panelName
}) => {
  return {
    opened: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isEditorPanelOpened(panelName),
    isEnabled: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).isEditorPanelEnabled(panelName)
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withDispatch)((dispatch, {
  panelName
}) => ({
  onToggle() {
    return dispatch(_store__WEBPACK_IMPORTED_MODULE_7__.store).toggleEditorPanelOpened(panelName);
  }

})))(PluginDocumentSettingFill);
PluginDocumentSettingPanel.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PluginDocumentSettingPanel);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-publish-panel/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-publish-panel/index.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.createSlotFill)('PluginPostPublishPanel');

const PluginPostPublishPanelFill = ({
  children,
  className,
  title,
  initialOpen = false,
  icon
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
  className: className,
  initialOpen: initialOpen || !title,
  title: title,
  icon: icon
}, children));
/**
 * Renders provided content to the post-publish panel in the publish flow
 * (side panel that opens after a user publishes the post).
 *
 * @param {Object}                props                                 Component properties.
 * @param {string}                [props.className]                     An optional class name added to the panel.
 * @param {string}                [props.title]                         Title displayed at the top of the panel.
 * @param {boolean}               [props.initialOpen=false]             Whether to have the panel initially opened. When no title is provided it is always opened.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPostPublishPanel = wp.editPost.PluginPostPublishPanel;
 *
 * function MyPluginPostPublishPanel() {
 * 	return wp.element.createElement(
 * 		PluginPostPublishPanel,
 * 		{
 * 			className: 'my-plugin-post-publish-panel',
 * 			title: __( 'My panel title' ),
 * 			initialOpen: true,
 * 		},
 * 		__( 'My panel content' )
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginPostPublishPanel } from '@wordpress/edit-post';
 *
 * const MyPluginPostPublishPanel = () => (
 * 	<PluginPostPublishPanel
 * 		className="my-plugin-post-publish-panel"
 * 		title={ __( 'My panel title' ) }
 * 		initialOpen={ true }
 * 	>
 *         { __( 'My panel content' ) }
 * 	</PluginPostPublishPanel>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */


const PluginPostPublishPanel = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)((0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__.withPluginContext)((context, ownProps) => {
  return {
    icon: ownProps.icon || context.icon
  };
}))(PluginPostPublishPanelFill);
PluginPostPublishPanel.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PluginPostPublishPanel);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-status-info/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-status-info/index.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Defines as extensibility slot for the Summary panel.
 */

/**
 * WordPress dependencies
 */

const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('PluginPostStatusInfo');
/**
 * Renders a row in the Summary panel of the Document sidebar.
 * It should be noted that this is named and implemented around the function it serves
 * and not its location, which may change in future iterations.
 *
 * @param {Object}    props             Component properties.
 * @param {string}    [props.className] An optional class name added to the row.
 * @param {WPElement} props.children    Children to be rendered.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;
 *
 * function MyPluginPostStatusInfo() {
 * 	return wp.element.createElement(
 * 		PluginPostStatusInfo,
 * 		{
 * 			className: 'my-plugin-post-status-info',
 * 		},
 * 		__( 'My post status info' )
 * 	)
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginPostStatusInfo } from '@wordpress/edit-post';
 *
 * const MyPluginPostStatusInfo = () => (
 * 	<PluginPostStatusInfo
 * 		className="my-plugin-post-status-info"
 * 	>
 * 		{ __( 'My post status info' ) }
 * 	</PluginPostStatusInfo>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */

const PluginPostStatusInfo = ({
  children,
  className
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
  className: className
}, children));

PluginPostStatusInfo.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PluginPostStatusInfo);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-pre-publish-panel/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-pre-publish-panel/index.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('PluginPrePublishPanel');

const PluginPrePublishPanelFill = ({
  children,
  className,
  title,
  initialOpen = false,
  icon
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
  className: className,
  initialOpen: initialOpen || !title,
  title: title,
  icon: icon
}, children));
/**
 * Renders provided content to the pre-publish side panel in the publish flow
 * (side panel that opens when a user first pushes "Publish" from the main editor).
 *
 * @param {Object}                props                                 Component props.
 * @param {string}                [props.className]                     An optional class name added to the panel.
 * @param {string}                [props.title]                         Title displayed at the top of the panel.
 * @param {boolean}               [props.initialOpen=false]             Whether to have the panel initially opened.
 *                                                                      When no title is provided it is always opened.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/)
 *                                                                      icon slug string, or an SVG WP element, to be rendered when
 *                                                                      the sidebar is pinned to toolbar.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPrePublishPanel = wp.editPost.PluginPrePublishPanel;
 *
 * function MyPluginPrePublishPanel() {
 * 	return wp.element.createElement(
 * 		PluginPrePublishPanel,
 * 		{
 * 			className: 'my-plugin-pre-publish-panel',
 * 			title: __( 'My panel title' ),
 * 			initialOpen: true,
 * 		},
 * 		__( 'My panel content' )
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginPrePublishPanel } from '@wordpress/edit-post';
 *
 * const MyPluginPrePublishPanel = () => (
 * 	<PluginPrePublishPanel
 * 		className="my-plugin-pre-publish-panel"
 * 		title={ __( 'My panel title' ) }
 * 		initialOpen={ true }
 * 	>
 * 	    { __( 'My panel content' ) }
 * 	</PluginPrePublishPanel>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */


const PluginPrePublishPanel = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)((0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__.withPluginContext)((context, ownProps) => {
  return {
    icon: ownProps.icon || context.icon
  };
}))(PluginPrePublishPanelFill);
PluginPrePublishPanel.Slot = Slot;
/* harmony default export */ __webpack_exports__["default"] = (PluginPrePublishPanel);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-sidebar/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-sidebar/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PluginSidebarEditPost; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Renders a sidebar when activated. The contents within the `PluginSidebar` will appear as content within the sidebar.
 * It also automatically renders a corresponding `PluginSidebarMenuItem` component when `isPinnable` flag is set to `true`.
 * If you wish to display the sidebar, you can with use the `PluginSidebarMoreMenuItem` component or the `wp.data.dispatch` API:
 *
 * ```js
 * wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar( 'plugin-name/sidebar-name' );
 * ```
 *
 * @see PluginSidebarMoreMenuItem
 *
 * @param {Object}                props                                 Element props.
 * @param {string}                props.name                            A string identifying the sidebar. Must be unique for every sidebar registered within the scope of your plugin.
 * @param {string}                [props.className]                     An optional class name added to the sidebar body.
 * @param {string}                props.title                           Title displayed at the top of the sidebar.
 * @param {boolean}               [props.isPinnable=true]               Whether to allow to pin sidebar to the toolbar. When set to `true` it also automatically renders a corresponding menu item.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var el = wp.element.createElement;
 * var PanelBody = wp.components.PanelBody;
 * var PluginSidebar = wp.editPost.PluginSidebar;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function MyPluginSidebar() {
 * 	return el(
 * 			PluginSidebar,
 * 			{
 * 				name: 'my-sidebar',
 * 				title: 'My sidebar title',
 * 				icon: moreIcon,
 * 			},
 * 			el(
 * 				PanelBody,
 * 				{},
 * 				__( 'My sidebar content' )
 * 			)
 * 	);
 * }
 * ```
 *
 * @example
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PanelBody } from '@wordpress/components';
 * import { PluginSidebar } from '@wordpress/edit-post';
 * import { more } from '@wordpress/icons';
 *
 * const MyPluginSidebar = () => (
 * 	<PluginSidebar
 * 		name="my-sidebar"
 * 		title="My sidebar title"
 * 		icon={ more }
 * 	>
 * 		<PanelBody>
 * 			{ __( 'My sidebar content' ) }
 * 		</PanelBody>
 * 	</PluginSidebar>
 * );
 * ```
 */

function PluginSidebarEditPost({
  className,
  ...props
}) {
  const {
    postTitle,
    shortcut,
    showIconLabels
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      postTitle: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).getEditedPostAttribute('title'),
      shortcut: select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.store).getShortcutRepresentation('core/edit-post/toggle-sidebar'),
      showIconLabels: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).isFeatureActive('showIconLabels')
    };
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_1__.ComplementaryArea, {
    panelClassName: className,
    className: "edit-post-sidebar",
    smallScreenTitle: postTitle || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('(no title)'),
    scope: "core/edit-post",
    toggleShortcut: shortcut,
    showIconLabels: showIconLabels,
    ...props
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-author/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-author/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostAuthor": function() { return /* binding */ PostAuthor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostAuthor() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostAuthorCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "edit-post-post-author"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostAuthor, null)));
}
/* harmony default export */ __webpack_exports__["default"] = (PostAuthor);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-excerpt/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-excerpt/index.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

const PANEL_NAME = 'post-excerpt';

function PostExcerpt({
  isEnabled,
  isOpened,
  onTogglePanel
}) {
  if (!isEnabled) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostExcerptCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Excerpt'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostExcerpt, null)));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(select => {
  return {
    isEnabled: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).isEditorPanelEnabled(PANEL_NAME),
    isOpened: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).isEditorPanelOpened(PANEL_NAME)
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(dispatch => ({
  onTogglePanel() {
    return dispatch(_store__WEBPACK_IMPORTED_MODULE_6__.store).toggleEditorPanelOpened(PANEL_NAME);
  }

}))])(PostExcerpt));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-format/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-format/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostFormat": function() { return /* binding */ PostFormat; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostFormat() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostFormatCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "edit-post-post-format"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostFormat, null)));
}
/* harmony default export */ __webpack_exports__["default"] = (PostFormat);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-pending-status/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-pending-status/index.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPendingStatus": function() { return /* binding */ PostPendingStatus; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostPendingStatus() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostPendingStatusCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostPendingStatus, null)));
}
/* harmony default export */ __webpack_exports__["default"] = (PostPendingStatus);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-schedule/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-schedule/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostSchedule; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




function PostSchedule() {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Memoize popoverProps to avoid returning a new object every time.

  const popoverProps = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    anchor: popoverAnchor,
    placement: 'bottom-end'
  }), [popoverAnchor]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostScheduleCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    className: "edit-post-post-schedule",
    ref: setPopoverAnchor
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Publish')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    popoverProps: popoverProps,
    contentClassName: "edit-post-post-schedule__dialog",
    focusOnMount: true,
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostScheduleToggle, {
      isOpen: isOpen,
      onClick: onToggle
    }),
    renderContent: ({
      onClose
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostSchedule, {
      onClose: onClose
    })
  })));
}

function PostScheduleToggle({
  isOpen,
  onClick
}) {
  const label = (0,_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.usePostScheduleLabel)();
  const fullLabel = (0,_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.usePostScheduleLabel)({
    full: true
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "edit-post-post-schedule__toggle",
    variant: "tertiary",
    label: fullLabel,
    showTooltip: true,
    "aria-expanded": isOpen // translators: %s: Current post date.
    ,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change date: %s'), label),
    onClick: onClick
  }, label);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-slug/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-slug/index.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostSlug": function() { return /* binding */ PostSlug; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostSlug() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostSlugCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "edit-post-post-slug"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostSlug, null)));
}
/* harmony default export */ __webpack_exports__["default"] = (PostSlug);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-status/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-status/index.js ***!
  \************************************************************************************************/
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _post_visibility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-visibility */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-visibility/index.js");
/* harmony import */ var _post_trash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-trash */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-trash/index.js");
/* harmony import */ var _post_schedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-schedule */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-schedule/index.js");
/* harmony import */ var _post_sticky__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post-sticky */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-sticky/index.js");
/* harmony import */ var _post_author__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-author */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-author/index.js");
/* harmony import */ var _post_slug__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../post-slug */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-slug/index.js");
/* harmony import */ var _post_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post-format */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-format/index.js");
/* harmony import */ var _post_pending_status__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../post-pending-status */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-pending-status/index.js");
/* harmony import */ var _plugin_post_status_info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../plugin-post-status-info */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-status-info/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _post_template__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../post-template */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/index.js");
/* harmony import */ var _post_url__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../post-url */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-url/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */













/**
 * Module Constants
 */

const PANEL_NAME = 'post-status';

function PostStatus({
  isOpened,
  onTogglePanel
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    className: "edit-post-post-status",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Summary'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plugin_post_status_info__WEBPACK_IMPORTED_MODULE_14__["default"].Slot, null, fills => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_visibility__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_schedule__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_template__WEBPACK_IMPORTED_MODULE_16__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_url__WEBPACK_IMPORTED_MODULE_17__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_sticky__WEBPACK_IMPORTED_MODULE_9__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_pending_status__WEBPACK_IMPORTED_MODULE_13__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_format__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_slug__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_author__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.PostSyncStatus, null), fills, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    style: {
      marginTop: '16px'
    },
    spacing: 4,
    wrap: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.PostSwitchToDraftButton, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_trash__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => {
  // We use isEditorPanelRemoved to hide the panel if it was programatically removed. We do
  // not use isEditorPanelEnabled since this panel should not be disabled through the UI.
  const {
    isEditorPanelRemoved,
    isEditorPanelOpened
  } = select(_store__WEBPACK_IMPORTED_MODULE_15__.store);
  return {
    isRemoved: isEditorPanelRemoved(PANEL_NAME),
    isOpened: isEditorPanelOpened(PANEL_NAME)
  };
}), (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.ifCondition)(({
  isRemoved
}) => !isRemoved), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(dispatch => ({
  onTogglePanel() {
    return dispatch(_store__WEBPACK_IMPORTED_MODULE_15__.store).toggleEditorPanelOpened(PANEL_NAME);
  }

}))])(PostStatus));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-sticky/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-sticky/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostSticky": function() { return /* binding */ PostSticky; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function PostSticky() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostStickyCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostSticky, null)));
}
/* harmony default export */ __webpack_exports__["default"] = (PostSticky);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-taxonomies/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-taxonomies/index.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _taxonomy_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taxonomy-panel */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-taxonomies/taxonomy-panel.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PostTaxonomies() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostTaxonomiesCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostTaxonomies, {
    taxonomyWrapper: (content, taxonomy) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_taxonomy_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        taxonomy: taxonomy
      }, content);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PostTaxonomies);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-taxonomies/taxonomy-panel.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-taxonomies/taxonomy-panel.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function TaxonomyPanel({
  isEnabled,
  taxonomy,
  isOpened,
  onTogglePanel,
  children
}) {
  if (!isEnabled) {
    return null;
  }

  const taxonomyMenuName = taxonomy?.labels?.menu_name;

  if (!taxonomyMenuName) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: taxonomyMenuName,
    opened: isOpened,
    onToggle: onTogglePanel
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)((select, ownProps) => {
  const slug = ownProps.taxonomy?.slug;
  const panelName = slug ? `taxonomy-panel-${slug}` : '';
  return {
    panelName,
    isEnabled: slug ? select(_store__WEBPACK_IMPORTED_MODULE_4__.store).isEditorPanelEnabled(panelName) : false,
    isOpened: slug ? select(_store__WEBPACK_IMPORTED_MODULE_4__.store).isEditorPanelOpened(panelName) : false
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)((dispatch, ownProps) => ({
  onTogglePanel: () => {
    dispatch(_store__WEBPACK_IMPORTED_MODULE_4__.store).toggleEditorPanelOpened(ownProps.panelName);
  }
})))(TaxonomyPanel));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/create-modal.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/create-modal.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostTemplateCreateModal; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



const DEFAULT_TITLE = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Custom Template');

function PostTemplateCreateModal({
  onClose
}) {
  const defaultBlockTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getEditorSettings().defaultBlockTemplate, []);
  const {
    __unstableCreateTemplate,
    __unstableSwitchToTemplateMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isBusy, setIsBusy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const cancel = () => {
    setTitle('');
    onClose();
  };

  const submit = async event => {
    event.preventDefault();

    if (isBusy) {
      return;
    }

    setIsBusy(true);
    const newTemplateContent = defaultBlockTemplate !== null && defaultBlockTemplate !== void 0 ? defaultBlockTemplate : (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/group', {
      tagName: 'header',
      layout: {
        inherit: true
      }
    }, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/site-title'), (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/site-tagline')]), (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/separator'), (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/group', {
      tagName: 'main'
    }, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/group', {
      layout: {
        inherit: true
      }
    }, [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/post-title')]), (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/post-content', {
      layout: {
        inherit: true
      }
    })])]);
    await __unstableCreateTemplate({
      slug: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.cleanForSlug)(title || DEFAULT_TITLE),
      content: newTemplateContent,
      title: title || DEFAULT_TITLE
    });
    setIsBusy(false);
    cancel();

    __unstableSwitchToTemplateMode(true);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Create custom template'),
    onRequestClose: cancel,
    className: "edit-post-post-template__create-modal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "edit-post-post-template__create-form",
    onSubmit: submit
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalVStack, {
    spacing: "3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Name'),
    value: title,
    onChange: setTitle,
    placeholder: DEFAULT_TITLE,
    disabled: isBusy,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Describe the template, e.g. "Post with sidebar". A custom template can be manually applied to any post or page.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHStack, {
    justify: "right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "tertiary",
    onClick: cancel
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "primary",
    type: "submit",
    isBusy: isBusy,
    "aria-disabled": isBusy
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Create'))))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/form.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/form.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostTemplateForm; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/add-template.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _create_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-modal */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/create-modal.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



function PostTemplateForm({
  onClose
}) {
  var _options$find, _selectedOption$value;

  const {
    isPostsPage,
    availableTemplates,
    fetchedTemplates,
    selectedTemplateSlug,
    canCreate,
    canEdit
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      canUser,
      getEntityRecord,
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const editorSettings = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).getEditorSettings();
    const siteSettings = canUser('read', 'settings') ? getEntityRecord('root', 'site') : undefined;

    const _isPostsPage = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).getCurrentPostId() === siteSettings?.page_for_posts;

    const canCreateTemplates = canUser('create', 'templates');
    return {
      isPostsPage: _isPostsPage,
      availableTemplates: editorSettings.availableTemplates,
      fetchedTemplates: canCreateTemplates ? getEntityRecords('postType', 'wp_template', {
        post_type: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).getCurrentPostType(),
        per_page: -1
      }) : undefined,
      selectedTemplateSlug: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).getEditedPostAttribute('template'),
      canCreate: canCreateTemplates && !_isPostsPage && editorSettings.supportsTemplateMode,
      canEdit: canCreateTemplates && editorSettings.supportsTemplateMode && !!select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getEditedPostTemplate()
    };
  }, []);
  const options = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.entries({ ...availableTemplates,
    ...Object.fromEntries((fetchedTemplates !== null && fetchedTemplates !== void 0 ? fetchedTemplates : []).map(({
      slug,
      title
    }) => [slug, title.rendered]))
  }).map(([slug, title]) => ({
    value: slug,
    label: title
  })), [availableTemplates, fetchedTemplates]);
  const selectedOption = (_options$find = options.find(option => option.value === selectedTemplateSlug)) !== null && _options$find !== void 0 ? _options$find : options.find(option => !option.value); // The default option has '' value.

  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    __unstableSwitchToTemplateMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const [isCreateModalOpen, setIsCreateModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-post-template__form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalInspectorPopoverHeader, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Templates define the way content is displayed when viewing your site.'),
    actions: canCreate ? [{
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add template'),
      onClick: () => setIsCreateModalOpen(true)
    }] : [],
    onClose: onClose
  }), isPostsPage ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Notice, {
    className: "edit-post-post-template__notice",
    status: "warning",
    isDismissible: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The posts page template cannot be changed.')) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    __nextHasNoMarginBottom: true,
    hideLabelFromVision: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template'),
    value: (_selectedOption$value = selectedOption?.value) !== null && _selectedOption$value !== void 0 ? _selectedOption$value : '',
    options: options,
    onChange: slug => editPost({
      template: slug || ''
    })
  }), canEdit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    onClick: () => __unstableSwitchToTemplateMode()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit template'))), isCreateModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_create_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClose: () => setIsCreateModalOpen(false)
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/index.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostTemplate; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/form.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function PostTemplate() {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Memoize popoverProps to avoid returning a new object every time.

  const popoverProps = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    anchor: popoverAnchor,
    placement: 'bottom-end'
  }), [popoverAnchor]);
  const isVisible = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    var _select$canUser;

    const postTypeSlug = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store).getCurrentPostType();
    const postType = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getPostType(postTypeSlug);

    if (!postType?.viewable) {
      return false;
    }

    const settings = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store).getEditorSettings();
    const hasTemplates = !!settings.availableTemplates && Object.keys(settings.availableTemplates).length > 0;

    if (hasTemplates) {
      return true;
    }

    if (!settings.supportsTemplateMode) {
      return false;
    }

    const canCreateTemplates = (_select$canUser = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).canUser('create', 'templates')) !== null && _select$canUser !== void 0 ? _select$canUser : false;
    return canCreateTemplates;
  }, []);

  if (!isVisible) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "edit-post-post-template",
    ref: setPopoverAnchor
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    popoverProps: popoverProps,
    className: "edit-post-post-template__dropdown",
    contentClassName: "edit-post-post-template__dialog",
    focusOnMount: true,
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostTemplateToggle, {
      isOpen: isOpen,
      onClick: onToggle
    }),
    renderContent: ({
      onClose
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClose: onClose
    })
  }));
}

function PostTemplateToggle({
  isOpen,
  onClick
}) {
  const templateTitle = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const templateSlug = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store).getEditedPostAttribute('template');
    const {
      supportsTemplateMode,
      availableTemplates
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store).getEditorSettings();

    if (!supportsTemplateMode && availableTemplates[templateSlug]) {
      return availableTemplates[templateSlug];
    }

    const template = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).canUser('create', 'templates') && select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getEditedPostTemplate();
    return template?.title || template?.slug || availableTemplates?.[templateSlug];
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "edit-post-post-template__toggle",
    variant: "tertiary",
    "aria-expanded": isOpen,
    "aria-label": templateTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( // translators: %s: Name of the currently selected template.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select template: %s'), templateTitle) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select template'),
    onClick: onClick
  }, templateTitle !== null && templateTitle !== void 0 ? templateTitle : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default template'));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-trash/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-trash/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostTrash; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

function PostTrash() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostTrashCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostTrash, null));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-url/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-url/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostURL; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




function PostURL() {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Memoize popoverProps to avoid returning a new object every time.

  const popoverProps = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    anchor: popoverAnchor,
    placement: 'bottom-end'
  }), [popoverAnchor]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostURLCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "edit-post-post-url",
    ref: setPopoverAnchor
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    popoverProps: popoverProps,
    className: "edit-post-post-url__dropdown",
    contentClassName: "edit-post-post-url__dialog",
    focusOnMount: true,
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostURLToggle, {
      isOpen: isOpen,
      onClick: onToggle
    }),
    renderContent: ({
      onClose
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostURL, {
      onClose: onClose
    })
  })));
}

function PostURLToggle({
  isOpen,
  onClick
}) {
  const label = (0,_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.usePostURLLabel)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "edit-post-post-url__toggle",
    variant: "tertiary",
    "aria-expanded": isOpen // translators: %s: Current post URL.
    ,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Change URL: %s'), label),
    onClick: onClick
  }, label);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-visibility/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-visibility/index.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostVisibility": function() { return /* binding */ PostVisibility; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




function PostVisibility() {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Memoize popoverProps to avoid returning a new object every time.

  const popoverProps = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'bottom-end'
  }), [popoverAnchor]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostVisibilityCheck, {
    render: ({
      canEdit
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      ref: setPopoverAnchor,
      className: "edit-post-post-visibility"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visibility')), !canEdit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostVisibilityLabel, null)), canEdit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
      contentClassName: "edit-post-post-visibility__dialog",
      popoverProps: popoverProps,
      focusOnMount: true,
      renderToggle: ({
        isOpen,
        onToggle
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PostVisibilityToggle, {
        isOpen: isOpen,
        onClick: onToggle
      }),
      renderContent: ({
        onClose
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostVisibility, {
        onClose: onClose
      })
    }))
  });
}

function PostVisibilityToggle({
  isOpen,
  onClick
}) {
  const label = (0,_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.usePostVisibilityLabel)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "edit-post-post-visibility__toggle",
    variant: "tertiary",
    "aria-expanded": isOpen // translators: %s: Current post visibility.
    ,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select visibility: %s'), label),
    onClick: onClick
  }, label);
}

/* harmony default export */ __webpack_exports__["default"] = (PostVisibility);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/settings-header/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/settings-header/index.js ***!
  \****************************************************************************************************/
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
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const SettingsHeader = ({
  sidebarName
}) => {
  const {
    openGeneralSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);

  const openDocumentSettings = () => openGeneralSidebar('edit-post/document');

  const openBlockSettings = () => openGeneralSidebar('edit-post/block');

  const {
    documentLabel,
    isTemplateMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const postTypeLabel = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store).getPostTypeLabel();
    return {
      // translators: Default label for the Document sidebar tab, not selected.
      documentLabel: postTypeLabel || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Document', 'noun'),
      isTemplateMode: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).isEditingTemplate()
    };
  }, []);
  const [documentAriaLabel, documentActiveClass] = sidebarName === 'edit-post/document' ? // translators: ARIA label for the Document sidebar tab, selected. %s: Document label.
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%s (selected)'), documentLabel), 'is-active'] : [documentLabel, ''];
  const [blockAriaLabel, blockActiveClass] = sidebarName === 'edit-post/block' ? // translators: ARIA label for the Block Settings Sidebar tab, selected.
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block (selected)'), 'is-active'] : // translators: ARIA label for the Block Settings Sidebar tab, not selected.
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block'), ''];
  const [templateAriaLabel, templateActiveClass] = sidebarName === 'edit-post/document' ? [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template (selected)'), 'is-active'] : [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template'), ''];
  /* Use a list so screen readers will announce how many tabs there are. */

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, !isTemplateMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: openDocumentSettings,
    className: `edit-post-sidebar__panel-tab ${documentActiveClass}`,
    "aria-label": documentAriaLabel,
    "data-label": documentLabel
  }, documentLabel)), isTemplateMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: openDocumentSettings,
    className: `edit-post-sidebar__panel-tab ${templateActiveClass}`,
    "aria-label": templateAriaLabel,
    "data-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Template'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: openBlockSettings,
    className: `edit-post-sidebar__panel-tab ${blockActiveClass}`,
    "aria-label": blockAriaLabel // translators: Data label for the Block Settings Sidebar tab.
    ,
    "data-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block')
  }, // translators: Text label for the Block Settings Sidebar tab.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block'))));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsHeader);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/settings-sidebar/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/settings-sidebar/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/drawer-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/drawer-right.js");
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _settings_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings-header */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/settings-header/index.js");
/* harmony import */ var _post_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-status */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-status/index.js");
/* harmony import */ var _last_revision__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../last-revision */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/last-revision/index.js");
/* harmony import */ var _post_taxonomies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post-taxonomies */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-taxonomies/index.js");
/* harmony import */ var _featured_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../featured-image */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/featured-image/index.js");
/* harmony import */ var _post_excerpt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../post-excerpt */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-excerpt/index.js");
/* harmony import */ var _discussion_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../discussion-panel */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/discussion-panel/index.js");
/* harmony import */ var _page_attributes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../page-attributes */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/page-attributes/index.js");
/* harmony import */ var _meta_boxes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../meta-boxes */ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/index.js");
/* harmony import */ var _plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../plugin-document-setting-panel */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-document-setting-panel/index.js");
/* harmony import */ var _plugin_sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../plugin-sidebar */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-sidebar/index.js");
/* harmony import */ var _template_summary__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../template-summary */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/template-summary/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */














const SIDEBAR_ACTIVE_BY_DEFAULT = _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Platform.select({
  web: true,
  native: false
});

const SettingsSidebar = () => {
  const {
    sidebarName,
    keyboardShortcut,
    isTemplateMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    // The settings sidebar is used by the edit-post/document and edit-post/block sidebars.
    // sidebarName represents the sidebar that is active or that should be active when the SettingsSidebar toggle button is pressed.
    // If one of the two sidebars is active the component will contain the content of that sidebar.
    // When neither of the two sidebars is active we can not simply return null, because the PluginSidebarEditPost
    // component, besides being used to render the sidebar, also renders the toggle button. In that case sidebarName
    // should contain the sidebar that will be active when the toggle button is pressed. If a block
    // is selected, that should be edit-post/block otherwise it's edit-post/document.
    let sidebar = select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.store).getActiveComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_18__.store.name);

    if (!['edit-post/document', 'edit-post/block'].includes(sidebar)) {
      if (select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlockSelectionStart()) {
        sidebar = 'edit-post/block';
      }

      sidebar = 'edit-post/document';
    }

    const shortcut = select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__.store).getShortcutRepresentation('core/edit-post/toggle-sidebar');
    return {
      sidebarName: sidebar,
      keyboardShortcut: shortcut,
      isTemplateMode: select(_store__WEBPACK_IMPORTED_MODULE_18__.store).isEditingTemplate()
    };
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plugin_sidebar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    identifier: sidebarName,
    header: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sidebarName: sidebarName
    }),
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Close Settings'),
    headerClassName: "edit-post-sidebar__panel-tabs"
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings'),
    toggleShortcut: keyboardShortcut,
    icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_19__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_20__["default"],
    isActiveByDefault: SIDEBAR_ACTIVE_BY_DEFAULT
  }, !isTemplateMode && sidebarName === 'edit-post/document' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_status__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_15__["default"].Slot, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_last_revision__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_taxonomies__WEBPACK_IMPORTED_MODULE_9__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_featured_image__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_excerpt__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_discussion_panel__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_page_attributes__WEBPACK_IMPORTED_MODULE_13__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_meta_boxes__WEBPACK_IMPORTED_MODULE_14__["default"], {
    location: "side"
  })), isTemplateMode && sidebarName === 'edit-post/document' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template_summary__WEBPACK_IMPORTED_MODULE_17__["default"], null), sidebarName === 'edit-post/block' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockInspector, null));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsSidebar);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/template-summary/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/sidebar/template-summary/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function TemplateSummary() {
  const template = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEditedPostTemplate
    } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
    return getEditedPostTemplate();
  }, []);

  if (!template) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    align: "flex-start",
    gap: "3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "edit-post-template-summary__title"
  }, template?.title || template?.slug), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, template?.description))));
}

/* harmony default export */ __webpack_exports__["default"] = (TemplateSummary);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/start-page-options/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/start-page-options/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StartPageOptions; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function useStartPatterns() {
  // A pattern is a start pattern if it includes 'core/post-content' in its blockTypes,
  // and it has no postTypes declares and the current post type is page or if
  // the current post type is part of the postTypes declared.
  const {
    blockPatternsWithPostContentBlockType,
    postType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getPatternsByBlockTypes
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const {
      getCurrentPostType
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    return {
      blockPatternsWithPostContentBlockType: getPatternsByBlockTypes('core/post-content'),
      postType: getCurrentPostType()
    };
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // filter patterns without postTypes declared if the current postType is page
    // or patterns that declare the current postType in its post type array.
    return blockPatternsWithPostContentBlockType.filter(pattern => {
      return postType === 'page' && !pattern.postTypes || Array.isArray(pattern.postTypes) && pattern.postTypes.includes(postType);
    });
  }, [postType, blockPatternsWithPostContentBlockType]);
}

function PatternSelection({
  onChoosePattern
}) {
  const blockPatterns = useStartPatterns();
  const shownBlockPatterns = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useAsyncList)(blockPatterns);
  const {
    resetEditorBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalBlockPatternsList, {
    blockPatterns: blockPatterns,
    shownPatterns: shownBlockPatterns,
    onClickPattern: (_pattern, blocks) => {
      resetEditorBlocks(blocks);
      onChoosePattern();
    }
  });
}

const START_PAGE_MODAL_STATES = {
  INITIAL: 'INITIAL',
  PATTERN: 'PATTERN',
  CLOSED: 'CLOSED'
};
function StartPageOptions() {
  const [modalState, setModalState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(START_PAGE_MODAL_STATES.INITIAL);
  const blockPatterns = useStartPatterns();
  const hasStartPattern = blockPatterns.length > 0;
  const shouldOpenModel = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    if (!hasStartPattern || modalState !== START_PAGE_MODAL_STATES.INITIAL) {
      return false;
    }

    const {
      getEditedPostContent,
      isEditedPostSaveable
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    const {
      isEditingTemplate,
      isFeatureActive
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    return !isEditedPostSaveable() && '' === getEditedPostContent() && !isEditingTemplate() && !isFeatureActive('welcomeGuide');
  }, [modalState, hasStartPattern]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shouldOpenModel) {
      setModalState(START_PAGE_MODAL_STATES.PATTERN);
    }
  }, [shouldOpenModel]);

  if (modalState === START_PAGE_MODAL_STATES.INITIAL || modalState === START_PAGE_MODAL_STATES.CLOSED) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    className: "edit-post-start-page-options__modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose a pattern'),
    isFullScreen: true,
    onRequestClose: () => {
      setModalState(START_PAGE_MODAL_STATES.CLOSED);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-start-page-options__modal-content"
  }, modalState === START_PAGE_MODAL_STATES.PATTERN && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PatternSelection, {
    onChoosePattern: () => {
      setModalState(START_PAGE_MODAL_STATES.CLOSED);
    }
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/text-editor/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/text-editor/index.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextEditor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function TextEditor() {
  const isRichEditingEnabled = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.store).getEditorSettings().richEditingEnabled;
  }, []);
  const {
    switchEditorMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-text-editor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.TextEditorGlobalKeyboardShortcuts, null), isRichEditingEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-text-editor__toolbar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Editing code')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "tertiary",
    onClick: () => switchEditorMode('visual'),
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_5__.displayShortcut.secondary('m')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Exit code editor'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "edit-post-text-editor__body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostTitle, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostTextEditor, null)));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/view-link/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/view-link/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewLink; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






function ViewLink() {
  const {
    permalink,
    isPublished,
    label
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    // Grab post type to retrieve the view_item label.
    const postTypeSlug = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).getCurrentPostType();
    const postType = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getPostType(postTypeSlug);
    return {
      permalink: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).getPermalink(),
      isPublished: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isCurrentPostPublished(),
      label: postType?.labels.view_item
    };
  }, []); // Only render the view button if the post is published and has a permalink.

  if (!isPublished || !permalink) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    label: label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('View post'),
    href: permalink,
    target: "_blank"
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/visual-editor/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/visual-editor/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VisualEditor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



const {
  LayoutStyle,
  useLayoutClasses,
  useLayoutStyles
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_10__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.privateApis);
const isGutenbergPlugin =  false ? 0 : false;

function MaybeIframe({
  children,
  contentRef,
  shouldIframe,
  styles,
  style
}) {
  const ref = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableUseMouseMoveTypingReset)();

  if (!shouldIframe) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableEditorStyles, {
      styles: styles
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.WritingFlow, {
      ref: contentRef,
      className: "editor-styles-wrapper",
      style: {
        flex: '1',
        ...style
      },
      tabIndex: -1
    }, children));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableIframe, {
    ref: ref,
    contentRef: contentRef,
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    },
    name: "editor-canvas"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableEditorStyles, {
    styles: styles
  }), children);
}
/**
 * Given an array of nested blocks, find the first Post Content
 * block inside it, recursing through any nesting levels,
 * and return its attributes.
 *
 * @param {Array} blocks A list of blocks.
 *
 * @return {Object | undefined} The Post Content block.
 */


function getPostContentAttributes(blocks) {
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].name === 'core/post-content') {
      return blocks[i].attributes;
    }

    if (blocks[i].innerBlocks.length) {
      const nestedPostContent = getPostContentAttributes(blocks[i].innerBlocks);

      if (nestedPostContent) {
        return nestedPostContent;
      }
    }
  }
}

function VisualEditor({
  styles
}) {
  const {
    deviceType,
    isWelcomeGuideVisible,
    isTemplateMode,
    postContentAttributes,
    editedPostTemplate = {},
    wrapperBlockName,
    wrapperUniqueId,
    isBlockBasedTheme,
    hasV3BlocksOnly
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      isFeatureActive,
      isEditingTemplate,
      getEditedPostTemplate,
      __experimentalGetPreviewDeviceType
    } = select(_store__WEBPACK_IMPORTED_MODULE_9__.store);
    const {
      getCurrentPostId,
      getCurrentPostType,
      getEditorSettings
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const {
      getBlockTypes
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.store);

    const _isTemplateMode = isEditingTemplate();

    let _wrapperBlockName;

    if (getCurrentPostType() === 'wp_block') {
      _wrapperBlockName = 'core/block';
    } else if (!_isTemplateMode) {
      _wrapperBlockName = 'core/post-content';
    }

    const editorSettings = getEditorSettings();
    const supportsTemplateMode = editorSettings.supportsTemplateMode;
    const canEditTemplate = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__.store).canUser('create', 'templates');
    return {
      deviceType: __experimentalGetPreviewDeviceType(),
      isWelcomeGuideVisible: isFeatureActive('welcomeGuide'),
      isTemplateMode: _isTemplateMode,
      postContentAttributes: getEditorSettings().postContentAttributes,
      // Post template fetch returns a 404 on classic themes, which
      // messes with e2e tests, so check it's a block theme first.
      editedPostTemplate: supportsTemplateMode && canEditTemplate ? getEditedPostTemplate() : undefined,
      wrapperBlockName: _wrapperBlockName,
      wrapperUniqueId: getCurrentPostId(),
      isBlockBasedTheme: editorSettings.__unstableIsBlockBasedTheme,
      hasV3BlocksOnly: getBlockTypes().every(type => {
        return type.apiVersion >= 3;
      })
    };
  }, []);
  const {
    isCleanNewPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const hasMetaBoxes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_9__.store).hasMetaBoxes(), []);
  const {
    hasRootPaddingAwareAlignments,
    isFocusMode,
    themeHasDisabledLayoutStyles,
    themeSupportsLayout
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const _settings = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).getSettings();

    return {
      themeHasDisabledLayoutStyles: _settings.disableLayoutStyles,
      themeSupportsLayout: _settings.supportsLayout,
      isFocusMode: _settings.focusMode,
      hasRootPaddingAwareAlignments: _settings.__experimentalFeatures?.useRootPaddingAwareAlignments
    };
  }, []);
  const desktopCanvasStyles = {
    height: '100%',
    width: '100%',
    margin: 0,
    display: 'flex',
    flexFlow: 'column',
    // Default background color so that grey
    // .edit-post-editor-regions__content color doesn't show through.
    background: 'white'
  };
  const templateModeStyles = { ...desktopCanvasStyles,
    borderRadius: '2px 2px 0 0',
    border: '1px solid #ddd',
    borderBottom: 0
  };
  const resizedCanvasStyles = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseResizeCanvas)(deviceType, isTemplateMode);
  const globalLayoutSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useSetting)('layout');
  const previewMode = 'is-' + deviceType.toLowerCase() + '-preview';
  let animatedStyles = isTemplateMode ? templateModeStyles : desktopCanvasStyles;

  if (resizedCanvasStyles) {
    animatedStyles = resizedCanvasStyles;
  }

  let paddingBottom; // Add a constant padding for the typewritter effect. When typing at the
  // bottom, there needs to be room to scroll up.

  if (!hasMetaBoxes && !resizedCanvasStyles && !isTemplateMode) {
    paddingBottom = '40vh';
  }

  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const contentRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useMergeRefs)([ref, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableUseClipboardHandler)(), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableUseTypewriter)(), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableUseTypingObserver)(), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableUseBlockSelectionClearer)()]);
  const blockSelectionClearerRef = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableUseBlockSelectionClearer)(); // fallbackLayout is used if there is no Post Content,
  // and for Post Title.

  const fallbackLayout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isTemplateMode) {
      return {
        type: 'default'
      };
    }

    if (themeSupportsLayout) {
      // We need to ensure support for wide and full alignments,
      // so we add the constrained type.
      return { ...globalLayoutSettings,
        type: 'constrained'
      };
    } // Set default layout for classic themes so all alignments are supported.


    return {
      type: 'default'
    };
  }, [isTemplateMode, themeSupportsLayout, globalLayoutSettings]);
  const newestPostContentAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!editedPostTemplate?.content && !editedPostTemplate?.blocks) {
      return postContentAttributes;
    } // When in template editing mode, we can access the blocks directly.


    if (editedPostTemplate?.blocks) {
      return getPostContentAttributes(editedPostTemplate?.blocks);
    } // If there are no blocks, we have to parse the content string.
    // Best double-check it's a string otherwise the parse function gets unhappy.


    const parseableContent = typeof editedPostTemplate?.content === 'string' ? editedPostTemplate?.content : '';
    return getPostContentAttributes((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.parse)(parseableContent)) || {};
  }, [editedPostTemplate?.content, editedPostTemplate?.blocks, postContentAttributes]);
  const {
    layout = {},
    align = ''
  } = newestPostContentAttributes || {};
  const postContentLayoutClasses = useLayoutClasses(newestPostContentAttributes, 'core/post-content');
  const blockListLayoutClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'is-layout-flow': !themeSupportsLayout
  }, themeSupportsLayout && postContentLayoutClasses, align && `align${align}`);
  const postContentLayoutStyles = useLayoutStyles(newestPostContentAttributes, 'core/post-content', '.block-editor-block-list__layout.is-root-container'); // Update type for blocks using legacy layouts.

  const postContentLayout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return layout && (layout?.type === 'constrained' || layout?.inherit || layout?.contentSize || layout?.wideSize) ? { ...globalLayoutSettings,
      ...layout,
      type: 'constrained'
    } : { ...globalLayoutSettings,
      ...layout,
      type: 'default'
    };
  }, [layout?.type, layout?.inherit, layout?.contentSize, layout?.wideSize, globalLayoutSettings]); // If there is a Post Content block we use its layout for the block list;
  // if not, this must be a classic theme, in which case we use the fallback layout.

  const blockListLayout = postContentAttributes ? postContentLayout : fallbackLayout;
  const titleRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isWelcomeGuideVisible || !isCleanNewPost()) {
      return;
    }

    titleRef?.current?.focus();
  }, [isWelcomeGuideVisible, isCleanNewPost]);
  styles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...styles, {
    // We should move this in to future to the body.
    css: `.edit-post-visual-editor__post-title-wrapper{margin-top:4rem}` + (paddingBottom ? `body{padding-bottom:${paddingBottom}}` : '')
  }], [styles]); // Add some styles for alignwide/alignfull Post Content and its children.

  const alignCSS = `.is-root-container.alignwide { max-width: var(--wp--style--global--wide-size); margin-left: auto; margin-right: auto;}
		.is-root-container.alignwide:where(.is-layout-flow) > :not(.alignleft):not(.alignright) { max-width: var(--wp--style--global--wide-size);}
		.is-root-container.alignfull { max-width: none; margin-left: auto; margin-right: auto;}
		.is-root-container.alignfull:where(.is-layout-flow) > :not(.alignleft):not(.alignright) { max-width: none;}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockTools, {
    __unstableContentRef: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-post-visual-editor', {
      'is-template-mode': isTemplateMode
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.VisualEditorGlobalKeyboardShortcuts, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__unstableMotion.div, {
    className: "edit-post-visual-editor__content-area",
    animate: {
      padding: isTemplateMode ? '48px 48px 0' : 0
    },
    ref: blockSelectionClearerRef
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__unstableMotion.div, {
    animate: animatedStyles,
    initial: desktopCanvasStyles,
    className: previewMode
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MaybeIframe, {
    shouldIframe: (hasV3BlocksOnly || isGutenbergPlugin && isBlockBasedTheme) && !hasMetaBoxes || isTemplateMode || deviceType === 'Tablet' || deviceType === 'Mobile',
    contentRef: contentRef,
    styles: styles
  }, themeSupportsLayout && !themeHasDisabledLayoutStyles && !isTemplateMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LayoutStyle, {
    selector: ".edit-post-visual-editor__post-title-wrapper",
    layout: fallbackLayout
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LayoutStyle, {
    selector: ".block-editor-block-list__layout.is-root-container",
    layout: blockListLayout
  }), align && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LayoutStyle, {
    css: alignCSS
  }), postContentLayoutStyles && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LayoutStyle, {
    layout: postContentLayout,
    css: postContentLayoutStyles
  })), !isTemplateMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-post-visual-editor__post-title-wrapper', {
      'is-focus-mode': isFocusMode,
      'has-global-padding': hasRootPaddingAwareAlignments
    }),
    contentEditable: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PostTitle, {
    ref: titleRef
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalRecursionProvider, {
    blockName: wrapperBlockName,
    uniqueId: wrapperUniqueId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockList, {
    className: isTemplateMode ? 'wp-site-blocks' : `${blockListLayoutClass} wp-block-post-content` // Ensure root level blocks receive default/flow blockGap styling rules.
    ,
    layout: blockListLayout
  }))))));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/default.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/default.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuideDefault; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/image.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function WelcomeGuideDefault() {
  const {
    toggleFeature
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Guide, {
    className: "edit-post-welcome-guide",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to the block editor'),
    finishButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Get started'),
    onFinish: () => toggleFeature('welcomeGuide'),
    pages: [{
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-post-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to the block editor')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-post-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('In the WordPress editor, each paragraph, image, or video is presented as a distinct “block” of content.')))
    }, {
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-editor.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-editor.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-post-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Make each block your own')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-post-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Each block comes with its own set of controls for changing things like color, width, and alignment. These will show and hide automatically when you have a block selected.')))
    }, {
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-library.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-library.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-post-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Get to know the block library')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-post-welcome-guide__text"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('All of the blocks available to you live in the block library. You’ll find it wherever you see the <InserterIconImage /> icon.'), {
        InserterIconImage: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('inserter'),
          src: "data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='18' height='18' rx='2' fill='%231E1E1E'/%3E%3Cpath d='M9.22727 4V14M4 8.77273H14' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E%0A"
        })
      })))
    }, {
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-post-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Learn how to use the block editor')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-post-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('New to the block editor? Want to learn more about using it? '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
        href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('https://wordpress.org/documentation/article/wordpress-block-editor/')
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Here's a detailed guide."))))
    }]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/image.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/image.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuideImage; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function WelcomeGuideImage({
  nonAnimatedSrc,
  animatedSrc
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "edit-post-welcome-guide__image"
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

/***/ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/index.js ***!
  \******************************************************************************************/
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
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/default.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/template.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




function WelcomeGuide() {
  const {
    isActive,
    isTemplateMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      isFeatureActive,
      isEditingTemplate
    } = select(_store__WEBPACK_IMPORTED_MODULE_4__.store);

    const _isTemplateMode = isEditingTemplate();

    const feature = _isTemplateMode ? 'welcomeGuideTemplate' : 'welcomeGuide';
    return {
      isActive: isFeatureActive(feature),
      isTemplateMode: _isTemplateMode
    };
  }, []);

  if (!isActive) {
    return null;
  }

  return isTemplateMode ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_template__WEBPACK_IMPORTED_MODULE_3__["default"], null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_default__WEBPACK_IMPORTED_MODULE_2__["default"], null);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/template.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/template.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuideTemplate; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/image.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function WelcomeGuideTemplate() {
  const {
    toggleFeature
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Guide, {
    className: "edit-template-welcome-guide",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to the template editor'),
    finishButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Get started'),
    onFinish: () => toggleFeature('welcomeGuideTemplate'),
    pages: [{
      image: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-template-editor.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-template-editor.gif"
      }),
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
        className: "edit-post-welcome-guide__heading"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome to the template editor')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "edit-post-welcome-guide__text"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Templates help define the layout of the site. You can customize all aspects of your posts and pages using blocks and patterns in this editor.')))
    }]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/editor.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/editor.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_core_commands__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/core-commands */ "@wordpress/core-commands");
/* harmony import */ var _wordpress_core_commands__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_commands__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout */ "./node_modules/@wordpress/edit-post/build-module/components/layout/index.js");
/* harmony import */ var _components_editor_initialization__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/editor-initialization */ "./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var _hooks_commands_use_common_commands__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hooks/commands/use-common-commands */ "./node_modules/@wordpress/edit-post/build-module/hooks/commands/use-common-commands.js");


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */






const {
  ExperimentalEditorProvider
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_13__.unlock)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.privateApis);
const {
  useCommands
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_13__.unlock)(_wordpress_core_commands__WEBPACK_IMPORTED_MODULE_9__.privateApis);

function Editor({
  postId,
  postType,
  settings,
  initialEdits,
  ...props
}) {
  useCommands();
  (0,_hooks_commands_use_common_commands__WEBPACK_IMPORTED_MODULE_14__["default"])();
  const {
    hasFixedToolbar,
    focusMode,
    isDistractionFree,
    hasInlineToolbar,
    post,
    preferredStyleVariations,
    hiddenBlockTypes,
    blockTypes,
    keepCaretInsideBlock,
    isTemplateMode,
    template
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    var _getPostType$viewable;

    const {
      isFeatureActive,
      isEditingTemplate,
      getEditedPostTemplate,
      getHiddenBlockTypes
    } = select(_store__WEBPACK_IMPORTED_MODULE_12__.store);
    const {
      getEntityRecord,
      getPostType,
      getEntityRecords,
      canUser
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      getEditorSettings
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const {
      getBlockTypes
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.store);
    const isTemplate = ['wp_template', 'wp_template_part'].includes(postType); // Ideally the initializeEditor function should be called using the ID of the REST endpoint.
    // to avoid the special case.

    let postObject;

    if (isTemplate) {
      const posts = getEntityRecords('postType', postType, {
        wp_id: postId
      });
      postObject = posts?.[0];
    } else {
      postObject = getEntityRecord('postType', postType, postId);
    }

    const supportsTemplateMode = getEditorSettings().supportsTemplateMode;
    const isViewable = (_getPostType$viewable = getPostType(postType)?.viewable) !== null && _getPostType$viewable !== void 0 ? _getPostType$viewable : false;
    const canEditTemplate = canUser('create', 'templates');
    return {
      hasFixedToolbar: isFeatureActive('fixedToolbar'),
      focusMode: isFeatureActive('focusMode'),
      isDistractionFree: isFeatureActive('distractionFree'),
      hasInlineToolbar: isFeatureActive('inlineToolbar'),
      preferredStyleVariations: select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_7__.store).get('core/edit-post', 'preferredStyleVariations'),
      hiddenBlockTypes: getHiddenBlockTypes(),
      blockTypes: getBlockTypes(),
      keepCaretInsideBlock: isFeatureActive('keepCaretInsideBlock'),
      isTemplateMode: isEditingTemplate(),
      template: supportsTemplateMode && isViewable && canEditTemplate ? getEditedPostTemplate() : null,
      post: postObject
    };
  }, [postType, postId]);
  const {
    updatePreferredStyleVariations,
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_12__.store);
  const editorSettings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const result = { ...settings,
      __experimentalPreferredStyleVariations: {
        value: preferredStyleVariations,
        onChange: updatePreferredStyleVariations
      },
      hasFixedToolbar,
      focusMode,
      isDistractionFree,
      hasInlineToolbar,
      // This is marked as experimental to give time for the quick inserter to mature.
      __experimentalSetIsInserterOpened: setIsInserterOpened,
      keepCaretInsideBlock,
      // Keep a reference of the `allowedBlockTypes` from the server to handle use cases
      // where we need to differentiate if a block is disabled by the user or some plugin.
      defaultAllowedBlockTypes: settings.allowedBlockTypes
    }; // Omit hidden block types if exists and non-empty.

    if (hiddenBlockTypes.length > 0) {
      // Defer to passed setting for `allowedBlockTypes` if provided as
      // anything other than `true` (where `true` is equivalent to allow
      // all block types).
      const defaultAllowedBlockTypes = true === settings.allowedBlockTypes ? blockTypes.map(({
        name
      }) => name) : settings.allowedBlockTypes || [];
      result.allowedBlockTypes = defaultAllowedBlockTypes.filter(type => !hiddenBlockTypes.includes(type));
    }

    return result;
  }, [settings, hasFixedToolbar, hasInlineToolbar, focusMode, isDistractionFree, hiddenBlockTypes, blockTypes, preferredStyleVariations, setIsInserterOpened, updatePreferredStyleVariations, keepCaretInsideBlock]);

  if (!post) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__.ShortcutProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SlotFillProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExperimentalEditorProvider, {
    settings: editorSettings,
    post: post,
    initialEdits: initialEdits,
    useSubRegistry: false,
    __unstableTemplate: isTemplateMode ? template : undefined,
    ...props
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundary, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_commands__WEBPACK_IMPORTED_MODULE_8__.CommandMenu, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_editor_initialization__WEBPACK_IMPORTED_MODULE_11__["default"], {
    postId: postId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PostLockedModal, null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Editor);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/hooks/commands/use-common-commands.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/hooks/commands/use-common-commands.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useCommonCommands; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/drawer-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/drawer-right.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/block-default.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/cog.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/desktop.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/list-view.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/code.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/keyboard-close.js");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _components_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/keyboard-shortcut-help-modal */ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/index.js");
/* harmony import */ var _components_preferences_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/preferences-modal */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




function useCommonCommands() {
  const {
    openGeneralSidebar,
    closeGeneralSidebar,
    switchEditorMode,
    setIsListViewOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    openModal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    editorMode,
    activeSidebar,
    isListViewOpen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getEditorMode,
      isListViewOpened
    } = select(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    return {
      activeSidebar: select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_4__.store).getActiveComplementaryArea(_store__WEBPACK_IMPORTED_MODULE_7__.store.name),
      editorMode: getEditorMode(),
      isListViewOpen: isListViewOpened()
    };
  }, []);
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store);
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/open-settings-sidebar',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle settings sidebar'),
    icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
    callback: ({
      close
    }) => {
      close();

      if (activeSidebar === 'edit-post/document') {
        closeGeneralSidebar();
      } else {
        openGeneralSidebar('edit-post/document');
      }
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/open-block-inspector',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle block inspector'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    callback: ({
      close
    }) => {
      close();

      if (activeSidebar === 'edit-post/block') {
        closeGeneralSidebar();
      } else {
        openGeneralSidebar('edit-post/block');
      }
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/toggle-distraction-free',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle distraction free'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
    callback: ({
      close
    }) => {
      toggle('core/edit-post', 'distractionFree');
      close();
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/toggle-spotlight-mode',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle spotlight mode'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
    callback: ({
      close
    }) => {
      toggle('core/edit-post', 'focusMode');
      close();
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/toggle-fullscreen-mode',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle fullscreen mode'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
    callback: ({
      close
    }) => {
      toggle('core/edit-post', 'fullscreenMode');
      close();
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/toggle-list-view',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle list view'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
    callback: ({
      close
    }) => {
      setIsListViewOpened(!isListViewOpen);
      close();
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/toggle-top-toolbar',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle top toolbar'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
    callback: ({
      close
    }) => {
      toggle('core/edit-post', 'fixedToolbar');
      close();
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/toggle-code-editor',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle code editor'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
    callback: ({
      close
    }) => {
      switchEditorMode(editorMode === 'visual' ? 'text' : 'visual');
      close();
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/open-preferences',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open editor preferences'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
    callback: () => {
      openModal(_components_preferences_modal__WEBPACK_IMPORTED_MODULE_6__.PREFERENCES_MODAL_NAME);
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/open-shortcut-help',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open keyboard shortcuts'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__["default"],
    callback: () => {
      openModal(_components_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_5__.KEYBOARD_SHORTCUT_HELP_MODAL_NAME);
    }
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/hooks/components/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/hooks/components/index.js ***!
  \**********************************************************************************/
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

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.MediaUpload', 'core/edit-post/replace-media-upload', replaceMediaUpload);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/hooks/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/hooks/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/@wordpress/edit-post/build-module/hooks/components/index.js");
/* harmony import */ var _validate_multiple_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate-multiple-use */ "./node_modules/@wordpress/edit-post/build-module/hooks/validate-multiple-use/index.js");
/**
 * Internal dependencies
 */




/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/hooks/validate-multiple-use/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/hooks/validate-multiple-use/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);


/**
 * WordPress dependencies
 */







const enhance = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.compose)(
/**
 * For blocks whose block type doesn't support `multiple`, provides the
 * wrapped component with `originalBlockClientId` -- a reference to the
 * first block of the same type in the content -- if and only if that
 * "original" block is not the current one. Thus, an inexisting
 * `originalBlockClientId` prop signals that the block is valid.
 *
 * @param {WPComponent} WrappedBlockEdit A filtered BlockEdit instance.
 *
 * @return {WPComponent} Enhanced component with merged state data props.
 */
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)((select, block) => {
  const multiple = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.hasBlockSupport)(block.name, 'multiple', true); // For block types with `multiple` support, there is no "original
  // block" to be found in the content, as the block itself is valid.

  if (multiple) {
    return {};
  } // Otherwise, only pass `originalBlockClientId` if it refers to a different
  // block from the current one.


  const blocks = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store).getBlocks();
  const firstOfSameType = blocks.find(({
    name
  }) => block.name === name);
  const isInvalid = firstOfSameType && firstOfSameType.clientId !== block.clientId;
  return {
    originalBlockClientId: isInvalid && firstOfSameType.clientId
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)((dispatch, {
  originalBlockClientId
}) => ({
  selectFirst: () => dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store).selectBlock(originalBlockClientId)
})));
const withMultipleValidation = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.createHigherOrderComponent)(BlockEdit => {
  return enhance(({
    originalBlockClientId,
    selectFirst,
    ...props
  }) => {
    if (!originalBlockClientId) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, { ...props
      });
    }

    const blockType = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockType)(props.name);
    const outboundType = getOutboundType(props.name);
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: "invalid-preview",
      style: {
        minHeight: '60px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      key: "block-edit",
      ...props
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.Warning, {
      key: "multiple-use-warning",
      actions: [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: "find-original",
        variant: "secondary",
        onClick: selectFirst
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Find original')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: "remove",
        variant: "secondary",
        onClick: () => props.onReplace([])
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Remove')), outboundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        key: "transform",
        variant: "secondary",
        onClick: () => props.onReplace((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.createBlock)(outboundType.name, props.attributes))
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Transform into:'), " ", outboundType.title)]
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, blockType?.title, ": "), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('This block can only be used once.'))];
  });
}, 'withMultipleValidation');
/**
 * Given a base block name, returns the default block type to which to offer
 * transforms.
 *
 * @param {string} blockName Base block name.
 *
 * @return {?Object} The chosen default block type.
 */

function getOutboundType(blockName) {
  // Grab the first outbound transform.
  const transform = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.findTransform)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockTransforms)('to', blockName), ({
    type,
    blocks
  }) => type === 'block' && blocks.length === 1 // What about when .length > 1?
  );

  if (!transform) {
    return null;
  }

  return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockType)(transform.blocks[0]);
}

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.addFilter)('editor.BlockEdit', 'core/edit-post/validate-multiple-use/with-multiple-validation', withMultipleValidation);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/lock-unlock.js ***!
  \***********************************************************************/
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
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/edit-post');


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/plugins/copy-content-menu-item/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/plugins/copy-content-menu-item/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CopyContentMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__);


/**
 * WordPress dependencies
 */






function CopyContentMenuItem() {
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);
  const getText = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => () => select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_6__.store).getEditedPostAttribute('content'), []);

  function onSuccess() {
    createNotice('info', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('All content copied.'), {
      isDismissible: true,
      type: 'snackbar'
    });
  }

  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useCopyToClipboard)(getText, onSuccess);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    ref: ref
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Copy all blocks'));
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/plugins/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/plugins/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _copy_content_menu_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./copy-content-menu-item */ "./node_modules/@wordpress/edit-post/build-module/plugins/copy-content-menu-item/index.js");
/* harmony import */ var _keyboard_shortcuts_help_menu_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./keyboard-shortcuts-help-menu-item */ "./node_modules/@wordpress/edit-post/build-module/plugins/keyboard-shortcuts-help-menu-item/index.js");
/* harmony import */ var _components_header_tools_more_menu_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/header/tools-more-menu-group */ "./node_modules/@wordpress/edit-post/build-module/components/header/tools-more-menu-group/index.js");
/* harmony import */ var _welcome_guide_menu_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./welcome-guide-menu-item */ "./node_modules/@wordpress/edit-post/build-module/plugins/welcome-guide-menu-item/index.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */






function ManagePatternsMenuItem() {
  const url = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      canUser
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const {
      getEditorSettings
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);

    const isBlockTheme = getEditorSettings().__unstableIsBlockBasedTheme;

    const defaultUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)('edit.php', {
      post_type: 'wp_block'
    });
    const patternsUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)('site-editor.php', {
      path: '/patterns'
    }); // The site editor and templates both check whether the user has
    // edit_theme_options capabilities. We can leverage that here and not
    // display the manage patterns link if the user can't access it.

    return canUser('read', 'templates') && isBlockTheme ? patternsUrl : defaultUrl;
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    role: "menuitem",
    href: url
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Manage patterns'));
}

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_6__.registerPlugin)('edit-post', {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_header_tools_more_menu_group__WEBPACK_IMPORTED_MODULE_10__["default"], null, ({
      onClose
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ManagePatternsMenuItem, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_keyboard_shortcuts_help_menu_item__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onSelect: onClose
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_welcome_guide_menu_item__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_copy_content_menu_item__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
      role: "menuitem",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
      href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('https://wordpress.org/documentation/article/wordpress-block-editor/'),
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Help'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
      as: "span"
    },
    /* translators: accessibility text */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('(opens in a new tab)'))))));
  }

});


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/plugins/keyboard-shortcuts-help-menu-item/index.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/plugins/keyboard-shortcuts-help-menu-item/index.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardShortcutsHelpMenuItem": function() { return /* binding */ KeyboardShortcutsHelpMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _components_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/keyboard-shortcut-help-modal */ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function KeyboardShortcutsHelpMenuItem({
  openModal
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
    onClick: () => {
      openModal(_components_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_6__.KEYBOARD_SHORTCUT_HELP_MODAL_NAME);
    },
    shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.access('h')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Keyboard shortcuts'));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withDispatch)(dispatch => {
  const {
    openModal
  } = dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_5__.store);
  return {
    openModal
  };
})(KeyboardShortcutsHelpMenuItem));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/plugins/welcome-guide-menu-item/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/plugins/welcome-guide-menu-item/index.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeGuideMenuItem; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function WelcomeGuideMenuItem() {
  const isTemplateMode = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_4__.store).isEditingTemplate(), []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_2__.PreferenceToggleMenuItem, {
    scope: "core/edit-post",
    name: isTemplateMode ? 'welcomeGuideTemplate' : 'welcomeGuide',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Welcome Guide')
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/actions.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalSetPreviewDeviceType": function() { return /* binding */ __experimentalSetPreviewDeviceType; },
/* harmony export */   "__unstableCreateTemplate": function() { return /* binding */ __unstableCreateTemplate; },
/* harmony export */   "__unstableSwitchToTemplateMode": function() { return /* binding */ __unstableSwitchToTemplateMode; },
/* harmony export */   "closeGeneralSidebar": function() { return /* binding */ closeGeneralSidebar; },
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "closePublishSidebar": function() { return /* binding */ closePublishSidebar; },
/* harmony export */   "hideBlockTypes": function() { return /* binding */ hideBlockTypes; },
/* harmony export */   "initializeMetaBoxes": function() { return /* binding */ initializeMetaBoxes; },
/* harmony export */   "metaBoxUpdatesFailure": function() { return /* binding */ metaBoxUpdatesFailure; },
/* harmony export */   "metaBoxUpdatesSuccess": function() { return /* binding */ metaBoxUpdatesSuccess; },
/* harmony export */   "openGeneralSidebar": function() { return /* binding */ openGeneralSidebar; },
/* harmony export */   "openModal": function() { return /* binding */ openModal; },
/* harmony export */   "openPublishSidebar": function() { return /* binding */ openPublishSidebar; },
/* harmony export */   "removeEditorPanel": function() { return /* binding */ removeEditorPanel; },
/* harmony export */   "requestMetaBoxUpdates": function() { return /* binding */ requestMetaBoxUpdates; },
/* harmony export */   "setAvailableMetaBoxesPerLocation": function() { return /* binding */ setAvailableMetaBoxesPerLocation; },
/* harmony export */   "setIsEditingTemplate": function() { return /* binding */ setIsEditingTemplate; },
/* harmony export */   "setIsInserterOpened": function() { return /* binding */ setIsInserterOpened; },
/* harmony export */   "setIsListViewOpened": function() { return /* binding */ setIsListViewOpened; },
/* harmony export */   "showBlockTypes": function() { return /* binding */ showBlockTypes; },
/* harmony export */   "switchEditorMode": function() { return /* binding */ switchEditorMode; },
/* harmony export */   "toggleEditorPanelEnabled": function() { return /* binding */ toggleEditorPanelEnabled; },
/* harmony export */   "toggleEditorPanelOpened": function() { return /* binding */ toggleEditorPanelOpened; },
/* harmony export */   "toggleFeature": function() { return /* binding */ toggleFeature; },
/* harmony export */   "togglePinnedPluginItem": function() { return /* binding */ togglePinnedPluginItem; },
/* harmony export */   "togglePublishSidebar": function() { return /* binding */ togglePublishSidebar; },
/* harmony export */   "updatePreferredStyleVariations": function() { return /* binding */ updatePreferredStyleVariations; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_meta_boxes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/meta-boxes */ "./node_modules/@wordpress/edit-post/build-module/utils/meta-boxes.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! . */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */



/**
 * Returns an action object used in signalling that the user opened an editor sidebar.
 *
 * @param {?string} name Sidebar name to be opened.
 */

const openGeneralSidebar = name => ({
  registry
}) => registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).enableComplementaryArea(___WEBPACK_IMPORTED_MODULE_11__.store.name, name);
/**
 * Returns an action object signalling that the user closed the sidebar.
 */

const closeGeneralSidebar = () => ({
  registry
}) => registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).disableComplementaryArea(___WEBPACK_IMPORTED_MODULE_11__.store.name);
/**
 * Returns an action object used in signalling that the user opened a modal.
 *
 * @deprecated since WP 6.3 use `core/interface` store's action with the same name instead.
 *
 *
 * @param {string} name A string that uniquely identifies the modal.
 *
 * @return {Object} Action object.
 */

const openModal = name => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_9___default()("select( 'core/edit-post' ).openModal( name )", {
    since: '6.3',
    alternative: "select( 'core/interface').openModal( name )"
  });
  return registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).openModal(name);
};
/**
 * Returns an action object signalling that the user closed a modal.
 *
 * @deprecated since WP 6.3 use `core/interface` store's action with the same name instead.
 *
 * @return {Object} Action object.
 */

const closeModal = () => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_9___default()("select( 'core/edit-post' ).closeModal()", {
    since: '6.3',
    alternative: "select( 'core/interface').closeModal()"
  });
  return registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).closeModal();
};
/**
 * Returns an action object used in signalling that the user opened the publish
 * sidebar.
 *
 * @return {Object} Action object
 */

function openPublishSidebar() {
  return {
    type: 'OPEN_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user closed the
 * publish sidebar.
 *
 * @return {Object} Action object.
 */

function closePublishSidebar() {
  return {
    type: 'CLOSE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user toggles the publish sidebar.
 *
 * @return {Object} Action object
 */

function togglePublishSidebar() {
  return {
    type: 'TOGGLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used to enable or disable a panel in the editor.
 *
 * @param {string} panelName A string that identifies the panel to enable or disable.
 *
 * @return {Object} Action object.
 */

const toggleEditorPanelEnabled = panelName => ({
  registry
}) => {
  var _registry$select$get;

  const inactivePanels = (_registry$select$get = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'inactivePanels')) !== null && _registry$select$get !== void 0 ? _registry$select$get : [];
  const isPanelInactive = !!inactivePanels?.includes(panelName); // If the panel is inactive, remove it to enable it, else add it to
  // make it inactive.

  let updatedInactivePanels;

  if (isPanelInactive) {
    updatedInactivePanels = inactivePanels.filter(invactivePanelName => invactivePanelName !== panelName);
  } else {
    updatedInactivePanels = [...inactivePanels, panelName];
  }

  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).set('core/edit-post', 'inactivePanels', updatedInactivePanels);
};
/**
 * Opens a closed panel and closes an open panel.
 *
 * @param {string} panelName A string that identifies the panel to open or close.
 */

const toggleEditorPanelOpened = panelName => ({
  registry
}) => {
  var _registry$select$get2;

  const openPanels = (_registry$select$get2 = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'openPanels')) !== null && _registry$select$get2 !== void 0 ? _registry$select$get2 : [];
  const isPanelOpen = !!openPanels?.includes(panelName); // If the panel is open, remove it to close it, else add it to
  // make it open.

  let updatedOpenPanels;

  if (isPanelOpen) {
    updatedOpenPanels = openPanels.filter(openPanelName => openPanelName !== panelName);
  } else {
    updatedOpenPanels = [...openPanels, panelName];
  }

  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).set('core/edit-post', 'openPanels', updatedOpenPanels);
};
/**
 * Returns an action object used to remove a panel from the editor.
 *
 * @param {string} panelName A string that identifies the panel to remove.
 *
 * @return {Object} Action object.
 */

function removeEditorPanel(panelName) {
  return {
    type: 'REMOVE_PANEL',
    panelName
  };
}
/**
 * Triggers an action used to toggle a feature flag.
 *
 * @param {string} feature Feature name.
 */

const toggleFeature = feature => ({
  registry
}) => registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).toggle('core/edit-post', feature);
/**
 * Triggers an action used to switch editor mode.
 *
 * @param {string} mode The editor mode.
 */

const switchEditorMode = mode => ({
  registry
}) => {
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).set('core/edit-post', 'editorMode', mode); // Unselect blocks when we switch to the code editor.

  if (mode !== 'visual') {
    registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.store).clearSelectedBlock();
  }

  const message = mode === 'visual' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Visual editor selected') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Code editor selected');
  (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_4__.speak)(message, 'assertive');
};
/**
 * Triggers an action object used to toggle a plugin name flag.
 *
 * @param {string} pluginName Plugin name.
 */

const togglePinnedPluginItem = pluginName => ({
  registry
}) => {
  const isPinned = registry.select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).isItemPinned('core/edit-post', pluginName);
  registry.dispatch(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store)[isPinned ? 'unpinItem' : 'pinItem']('core/edit-post', pluginName);
};
/**
 * Returns an action object used in signaling that a style should be auto-applied when a block is created.
 *
 * @param {string}  blockName  Name of the block.
 * @param {?string} blockStyle Name of the style that should be auto applied. If undefined, the "auto apply" setting of the block is removed.
 */

const updatePreferredStyleVariations = (blockName, blockStyle) => ({
  registry
}) => {
  var _registry$select$get3;

  if (!blockName) {
    return;
  }

  const existingVariations = (_registry$select$get3 = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'preferredStyleVariations')) !== null && _registry$select$get3 !== void 0 ? _registry$select$get3 : {}; // When the blockStyle is omitted, remove the block's preferred variation.

  if (!blockStyle) {
    const updatedVariations = { ...existingVariations
    };
    delete updatedVariations[blockName];
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).set('core/edit-post', 'preferredStyleVariations', updatedVariations);
  } else {
    // Else add the variation.
    registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).set('core/edit-post', 'preferredStyleVariations', { ...existingVariations,
      [blockName]: blockStyle
    });
  }
};
/**
 * Update the provided block types to be visible.
 *
 * @param {string[]} blockNames Names of block types to show.
 */

const showBlockTypes = blockNames => ({
  registry
}) => {
  var _registry$select$get4;

  const existingBlockNames = (_registry$select$get4 = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'hiddenBlockTypes')) !== null && _registry$select$get4 !== void 0 ? _registry$select$get4 : [];
  const newBlockNames = existingBlockNames.filter(type => !(Array.isArray(blockNames) ? blockNames : [blockNames]).includes(type));
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).set('core/edit-post', 'hiddenBlockTypes', newBlockNames);
};
/**
 * Update the provided block types to be hidden.
 *
 * @param {string[]} blockNames Names of block types to hide.
 */

const hideBlockTypes = blockNames => ({
  registry
}) => {
  var _registry$select$get5;

  const existingBlockNames = (_registry$select$get5 = registry.select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'hiddenBlockTypes')) !== null && _registry$select$get5 !== void 0 ? _registry$select$get5 : [];
  const mergedBlockNames = new Set([...existingBlockNames, ...(Array.isArray(blockNames) ? blockNames : [blockNames])]);
  registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).set('core/edit-post', 'hiddenBlockTypes', [...mergedBlockNames]);
};
/**
 * Stores info about which Meta boxes are available in which location.
 *
 * @param {Object} metaBoxesPerLocation Meta boxes per location.
 */

function setAvailableMetaBoxesPerLocation(metaBoxesPerLocation) {
  return {
    type: 'SET_META_BOXES_PER_LOCATIONS',
    metaBoxesPerLocation
  };
}
/**
 * Update a metabox.
 */

const requestMetaBoxUpdates = () => async ({
  registry,
  select,
  dispatch
}) => {
  dispatch({
    type: 'REQUEST_META_BOX_UPDATES'
  }); // Saves the wp_editor fields.

  if (window.tinyMCE) {
    window.tinyMCE.triggerSave();
  } // Additional data needed for backward compatibility.
  // If we do not provide this data, the post will be overridden with the default values.


  const post = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__.store).getCurrentPost();
  const additionalData = [post.comment_status ? ['comment_status', post.comment_status] : false, post.ping_status ? ['ping_status', post.ping_status] : false, post.sticky ? ['sticky', post.sticky] : false, post.author ? ['post_author', post.author] : false].filter(Boolean); // We gather all the metaboxes locations data and the base form data.

  const baseFormData = new window.FormData(document.querySelector('.metabox-base-form'));
  const activeMetaBoxLocations = select.getActiveMetaBoxLocations();
  const formDataToMerge = [baseFormData, ...activeMetaBoxLocations.map(location => new window.FormData((0,_utils_meta_boxes__WEBPACK_IMPORTED_MODULE_10__.getMetaBoxContainer)(location)))]; // Merge all form data objects into a single one.

  const formData = formDataToMerge.reduce((memo, currentFormData) => {
    for (const [key, value] of currentFormData) {
      memo.append(key, value);
    }

    return memo;
  }, new window.FormData());
  additionalData.forEach(([key, value]) => formData.append(key, value));

  try {
    // Save the metaboxes.
    await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      url: window._wpMetaBoxUrl,
      method: 'POST',
      body: formData,
      parse: false
    });
    dispatch.metaBoxUpdatesSuccess();
  } catch {
    dispatch.metaBoxUpdatesFailure();
  }
};
/**
 * Returns an action object used to signal a successful meta box update.
 *
 * @return {Object} Action object.
 */

function metaBoxUpdatesSuccess() {
  return {
    type: 'META_BOX_UPDATES_SUCCESS'
  };
}
/**
 * Returns an action object used to signal a failed meta box update.
 *
 * @return {Object} Action object.
 */

function metaBoxUpdatesFailure() {
  return {
    type: 'META_BOX_UPDATES_FAILURE'
  };
}
/**
 * Returns an action object used to toggle the width of the editing canvas.
 *
 * @param {string} deviceType
 *
 * @return {Object} Action object.
 */

function __experimentalSetPreviewDeviceType(deviceType) {
  return {
    type: 'SET_PREVIEW_DEVICE_TYPE',
    deviceType
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
 * Returns an action object used to switch to template editing.
 *
 * @param {boolean} value Is editing template.
 * @return {Object} Action object.
 */

function setIsEditingTemplate(value) {
  return {
    type: 'SET_IS_EDITING_TEMPLATE',
    value
  };
}
/**
 * Switches to the template mode.
 *
 * @param {boolean} newTemplate Is new template.
 */

const __unstableSwitchToTemplateMode = (newTemplate = false) => ({
  registry,
  select,
  dispatch
}) => {
  dispatch(setIsEditingTemplate(true));
  const isWelcomeGuideActive = select.isFeatureActive('welcomeGuideTemplate');

  if (!isWelcomeGuideActive) {
    const message = newTemplate ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom template created. You're in template mode now.") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editing template. Changes made here affect all posts and pages that use the template.');
    registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).createSuccessNotice(message, {
      type: 'snackbar'
    });
  }
};
/**
 * Create a block based template.
 *
 * @param {Object?} template Template to create and assign.
 */

const __unstableCreateTemplate = template => async ({
  registry
}) => {
  const savedTemplate = await registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).saveEntityRecord('postType', 'wp_template', template);
  const post = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__.store).getCurrentPost();
  registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store).editEntityRecord('postType', post.type, post.id, {
    template: savedTemplate.slug
  });
};
let metaBoxesInitialized = false;
/**
 * Initializes WordPress `postboxes` script and the logic for saving meta boxes.
 */

const initializeMetaBoxes = () => ({
  registry,
  select,
  dispatch
}) => {
  const isEditorReady = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__.store).__unstableIsEditorReady();

  if (!isEditorReady) {
    return;
  } // Only initialize once.


  if (metaBoxesInitialized) {
    return;
  }

  const postType = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__.store).getCurrentPostType();

  if (window.postboxes.page !== postType) {
    window.postboxes.add_postbox_toggles(postType);
  }

  metaBoxesInitialized = true;
  let wasSavingPost = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__.store).isSavingPost();
  let wasAutosavingPost = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__.store).isAutosavingPost(); // Save metaboxes when performing a full save on the post.

  registry.subscribe(async () => {
    const isSavingPost = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__.store).isSavingPost();
    const isAutosavingPost = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__.store).isAutosavingPost(); // Save metaboxes on save completion, except for autosaves.

    const shouldTriggerMetaboxesSave = wasSavingPost && !wasAutosavingPost && !isSavingPost && select.hasMetaBoxes(); // Save current state for next inspection.

    wasSavingPost = isSavingPost;
    wasAutosavingPost = isAutosavingPost;

    if (shouldTriggerMetaboxesSave) {
      await dispatch.requestMetaBoxUpdates();
    }
  });
  dispatch({
    type: 'META_BOXES_INITIALIZED'
  });
};


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/constants.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/constants.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORE_NAME": function() { return /* binding */ STORE_NAME; },
/* harmony export */   "VIEW_AS_LINK_SELECTOR": function() { return /* binding */ VIEW_AS_LINK_SELECTOR; },
/* harmony export */   "VIEW_AS_PREVIEW_LINK_SELECTOR": function() { return /* binding */ VIEW_AS_PREVIEW_LINK_SELECTOR; }
/* harmony export */ });
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const STORE_NAME = 'core/edit-post';
/**
 * CSS selector string for the admin bar view post link anchor tag.
 *
 * @type {string}
 */

const VIEW_AS_LINK_SELECTOR = '#wp-admin-bar-view a';
/**
 * CSS selector string for the admin bar preview post link anchor tag.
 *
 * @type {string}
 */

const VIEW_AS_PREVIEW_LINK_SELECTOR = '#wp-admin-bar-preview a';


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/edit-post/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/edit-post/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/edit-post/build-module/store/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-post/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Store definition for the edit post namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/reducer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/reducer.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockInserterPanel": function() { return /* binding */ blockInserterPanel; },
/* harmony export */   "deviceType": function() { return /* binding */ deviceType; },
/* harmony export */   "isSavingMetaBoxes": function() { return /* binding */ isSavingMetaBoxes; },
/* harmony export */   "listViewPanel": function() { return /* binding */ listViewPanel; },
/* harmony export */   "metaBoxLocations": function() { return /* binding */ metaBoxLocations; },
/* harmony export */   "publishSidebarActive": function() { return /* binding */ publishSidebarActive; },
/* harmony export */   "removedPanels": function() { return /* binding */ removedPanels; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Reducer storing the list of all programmatically removed panels.
 *
 * @param {Array}  state  Current state.
 * @param {Object} action Action object.
 *
 * @return {Array} Updated state.
 */

function removedPanels(state = [], action) {
  switch (action.type) {
    case 'REMOVE_PANEL':
      if (!state.includes(action.panelName)) {
        return [...state, action.panelName];
      }

  }

  return state;
}
function publishSidebarActive(state = false, action) {
  switch (action.type) {
    case 'OPEN_PUBLISH_SIDEBAR':
      return true;

    case 'CLOSE_PUBLISH_SIDEBAR':
      return false;

    case 'TOGGLE_PUBLISH_SIDEBAR':
      return !state;
  }

  return state;
}
/**
 * Reducer keeping track of the meta boxes isSaving state.
 * A "true" value means the meta boxes saving request is in-flight.
 *
 *
 * @param {boolean} state  Previous state.
 * @param {Object}  action Action Object.
 *
 * @return {Object} Updated state.
 */

function isSavingMetaBoxes(state = false, action) {
  switch (action.type) {
    case 'REQUEST_META_BOX_UPDATES':
      return true;

    case 'META_BOX_UPDATES_SUCCESS':
    case 'META_BOX_UPDATES_FAILURE':
      return false;

    default:
      return state;
  }
}

function mergeMetaboxes(metaboxes = [], newMetaboxes) {
  const mergedMetaboxes = [...metaboxes];

  for (const metabox of newMetaboxes) {
    const existing = mergedMetaboxes.findIndex(box => box.id === metabox.id);

    if (existing !== -1) {
      mergedMetaboxes[existing] = metabox;
    } else {
      mergedMetaboxes.push(metabox);
    }
  }

  return mergedMetaboxes;
}
/**
 * Reducer keeping track of the meta boxes per location.
 *
 * @param {boolean} state  Previous state.
 * @param {Object}  action Action Object.
 *
 * @return {Object} Updated state.
 */


function metaBoxLocations(state = {}, action) {
  switch (action.type) {
    case 'SET_META_BOXES_PER_LOCATIONS':
      {
        const newState = { ...state
        };

        for (const [location, metaboxes] of Object.entries(action.metaBoxesPerLocation)) {
          newState[location] = mergeMetaboxes(newState[location], metaboxes);
        }

        return newState;
      }
  }

  return state;
}
/**
 * Reducer returning the editing canvas device type.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function deviceType(state = 'Desktop', action) {
  switch (action.type) {
    case 'SET_PREVIEW_DEVICE_TYPE':
      return action.deviceType;
  }

  return state;
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
/**
 * Reducer tracking whether template editing is on or off.
 *
 * @param {boolean} state
 * @param {Object}  action
 */

function isEditingTemplate(state = false, action) {
  switch (action.type) {
    case 'SET_IS_EDITING_TEMPLATE':
      return action.value;
  }

  return state;
}
/**
 * Reducer tracking whether meta boxes are initialized.
 *
 * @param {boolean} state
 * @param {Object}  action
 *
 * @return {boolean} Updated state.
 */


function metaBoxesInitialized(state = false, action) {
  switch (action.type) {
    case 'META_BOXES_INITIALIZED':
      return true;
  }

  return state;
}

const metaBoxes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  isSaving: isSavingMetaBoxes,
  locations: metaBoxLocations,
  initialized: metaBoxesInitialized
});
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  metaBoxes,
  publishSidebarActive,
  removedPanels,
  deviceType,
  blockInserterPanel,
  listViewPanel,
  isEditingTemplate
}));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/selectors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/selectors.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__experimentalGetInsertionPoint": function() { return /* binding */ __experimentalGetInsertionPoint; },
/* harmony export */   "__experimentalGetPreviewDeviceType": function() { return /* binding */ __experimentalGetPreviewDeviceType; },
/* harmony export */   "areMetaBoxesInitialized": function() { return /* binding */ areMetaBoxesInitialized; },
/* harmony export */   "getActiveGeneralSidebarName": function() { return /* binding */ getActiveGeneralSidebarName; },
/* harmony export */   "getActiveMetaBoxLocations": function() { return /* binding */ getActiveMetaBoxLocations; },
/* harmony export */   "getAllMetaBoxes": function() { return /* binding */ getAllMetaBoxes; },
/* harmony export */   "getEditedPostTemplate": function() { return /* binding */ getEditedPostTemplate; },
/* harmony export */   "getEditorMode": function() { return /* binding */ getEditorMode; },
/* harmony export */   "getHiddenBlockTypes": function() { return /* binding */ getHiddenBlockTypes; },
/* harmony export */   "getMetaBoxesPerLocation": function() { return /* binding */ getMetaBoxesPerLocation; },
/* harmony export */   "getPreference": function() { return /* binding */ getPreference; },
/* harmony export */   "getPreferences": function() { return /* binding */ getPreferences; },
/* harmony export */   "hasMetaBoxes": function() { return /* binding */ hasMetaBoxes; },
/* harmony export */   "isEditingTemplate": function() { return /* binding */ isEditingTemplate; },
/* harmony export */   "isEditorPanelEnabled": function() { return /* binding */ isEditorPanelEnabled; },
/* harmony export */   "isEditorPanelOpened": function() { return /* binding */ isEditorPanelOpened; },
/* harmony export */   "isEditorPanelRemoved": function() { return /* binding */ isEditorPanelRemoved; },
/* harmony export */   "isEditorSidebarOpened": function() { return /* binding */ isEditorSidebarOpened; },
/* harmony export */   "isFeatureActive": function() { return /* binding */ isFeatureActive; },
/* harmony export */   "isInserterOpened": function() { return /* binding */ isInserterOpened; },
/* harmony export */   "isListViewOpened": function() { return /* binding */ isListViewOpened; },
/* harmony export */   "isMetaBoxLocationActive": function() { return /* binding */ isMetaBoxLocationActive; },
/* harmony export */   "isMetaBoxLocationVisible": function() { return /* binding */ isMetaBoxLocationVisible; },
/* harmony export */   "isModalActive": function() { return /* binding */ isModalActive; },
/* harmony export */   "isPluginItemPinned": function() { return /* binding */ isPluginItemPinned; },
/* harmony export */   "isPluginSidebarOpened": function() { return /* binding */ isPluginSidebarOpened; },
/* harmony export */   "isPublishSidebarOpened": function() { return /* binding */ isPublishSidebarOpened; },
/* harmony export */   "isSavingMetaBoxes": function() { return /* binding */ isSavingMetaBoxes; }
/* harmony export */ });
/* harmony import */ var rememo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rememo */ "./node_modules/rememo/rememo.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/interface */ "./node_modules/@wordpress/interface/build-module/index.js");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







const EMPTY_ARRAY = [];
const EMPTY_OBJECT = {};
/**
 * Returns the current editing mode.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Editing mode.
 */

const getEditorMode = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => () => {
  var _select$get;

  return (_select$get = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'editorMode')) !== null && _select$get !== void 0 ? _select$get : 'visual';
});
/**
 * Returns true if the editor sidebar is opened.
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether the editor sidebar is opened.
 */

const isEditorSidebarOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => () => {
  const activeGeneralSidebar = select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).getActiveComplementaryArea('core/edit-post');
  return ['edit-post/document', 'edit-post/block'].includes(activeGeneralSidebar);
});
/**
 * Returns true if the plugin sidebar is opened.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the plugin sidebar is opened.
 */

const isPluginSidebarOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => () => {
  const activeGeneralSidebar = select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).getActiveComplementaryArea('core/edit-post');
  return !!activeGeneralSidebar && !['edit-post/document', 'edit-post/block'].includes(activeGeneralSidebar);
});
/**
 * Returns the current active general sidebar name, or null if there is no
 * general sidebar active. The active general sidebar is a unique name to
 * identify either an editor or plugin sidebar.
 *
 * Examples:
 *
 *  - `edit-post/document`
 *  - `my-plugin/insert-image-sidebar`
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Active general sidebar name.
 */

const getActiveGeneralSidebarName = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => () => {
  return select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).getActiveComplementaryArea('core/edit-post');
});
/**
 * Converts panels from the new preferences store format to the old format
 * that the post editor previously used.
 *
 * The resultant converted data should look like this:
 * {
 *     panelName: {
 *         enabled: false,
 *         opened: true,
 *     },
 *     anotherPanelName: {
 *         opened: true
 *     },
 * }
 *
 * @param {string[] | undefined} inactivePanels An array of inactive panel names.
 * @param {string[] | undefined} openPanels     An array of open panel names.
 *
 * @return {Object} The converted panel data.
 */

function convertPanelsToOldFormat(inactivePanels, openPanels) {
  var _ref;

  // First reduce the inactive panels.
  const panelsWithEnabledState = inactivePanels?.reduce((accumulatedPanels, panelName) => ({ ...accumulatedPanels,
    [panelName]: {
      enabled: false
    }
  }), {}); // Then reduce the open panels, passing in the result of the previous
  // reduction as the initial value so that both open and inactive
  // panel state is combined.

  const panels = openPanels?.reduce((accumulatedPanels, panelName) => {
    const currentPanelState = accumulatedPanels?.[panelName];
    return { ...accumulatedPanels,
      [panelName]: { ...currentPanelState,
        opened: true
      }
    };
  }, panelsWithEnabledState !== null && panelsWithEnabledState !== void 0 ? panelsWithEnabledState : {}); // The panels variable will only be set if openPanels wasn't `undefined`.
  // If it isn't set just return `panelsWithEnabledState`, and if that isn't
  // set return an empty object.

  return (_ref = panels !== null && panels !== void 0 ? panels : panelsWithEnabledState) !== null && _ref !== void 0 ? _ref : EMPTY_OBJECT;
}
/**
 * Returns the preferences (these preferences are persisted locally).
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Preferences Object.
 */


const getPreferences = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => () => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()(`select( 'core/edit-post' ).getPreferences`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get`
  }); // These preferences now exist in the preferences store.
  // Fetch them so that they can be merged into the post
  // editor preferences.

  const preferences = ['hiddenBlockTypes', 'editorMode', 'preferredStyleVariations'].reduce((accumulatedPrefs, preferenceKey) => {
    const value = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', preferenceKey);
    return { ...accumulatedPrefs,
      [preferenceKey]: value
    };
  }, {}); // Panels were a preference, but the data structure changed when the state
  // was migrated to the preferences store. They need to be converted from
  // the new preferences store format to old format to ensure no breaking
  // changes for plugins.

  const inactivePanels = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'inactivePanels');
  const openPanels = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'openPanels');
  const panels = convertPanelsToOldFormat(inactivePanels, openPanels);
  return { ...preferences,
    panels
  };
});
/**
 *
 * @param {Object} state         Global application state.
 * @param {string} preferenceKey Preference Key.
 * @param {*}      defaultValue  Default Value.
 *
 * @return {*} Preference Value.
 */

function getPreference(state, preferenceKey, defaultValue) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()(`select( 'core/edit-post' ).getPreference`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get`
  }); // Avoid using the `getPreferences` registry selector where possible.

  const preferences = getPreferences(state);
  const value = preferences[preferenceKey];
  return value === undefined ? defaultValue : value;
}
/**
 * Returns an array of blocks that are hidden.
 *
 * @return {Array} A list of the hidden block types
 */

const getHiddenBlockTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => () => {
  var _select$get2;

  return (_select$get2 = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'hiddenBlockTypes')) !== null && _select$get2 !== void 0 ? _select$get2 : EMPTY_ARRAY;
});
/**
 * Returns true if the publish sidebar is opened.
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether the publish sidebar is open.
 */

function isPublishSidebarOpened(state) {
  return state.publishSidebarActive;
}
/**
 * Returns true if the given panel was programmatically removed, or false otherwise.
 * All panels are not removed by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is removed.
 */

function isEditorPanelRemoved(state, panelName) {
  return state.removedPanels.includes(panelName);
}
/**
 * Returns true if the given panel is enabled, or false otherwise. Panels are
 * enabled by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is enabled.
 */

const isEditorPanelEnabled = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => (state, panelName) => {
  const inactivePanels = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'inactivePanels');
  return !isEditorPanelRemoved(state, panelName) && !inactivePanels?.includes(panelName);
});
/**
 * Returns true if the given panel is open, or false otherwise. Panels are
 * closed by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is open.
 */

const isEditorPanelOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => (state, panelName) => {
  const openPanels = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', 'openPanels');
  return !!openPanels?.includes(panelName);
});
/**
 * Returns true if a modal is active, or false otherwise.
 *
 * @deprecated since WP 6.3 use `core/interface` store's selector with the same name instead.
 *
 * @param {Object} state     Global application state.
 * @param {string} modalName A string that uniquely identifies the modal.
 *
 * @return {boolean} Whether the modal is active.
 */

const isModalActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => (state, modalName) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_6___default()(`select( 'core/edit-post' ).isModalActive`, {
    since: '6.3',
    alternative: `select( 'core/interface' ).isModalActive`
  });
  return !!select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).isModalActive(modalName);
});
/**
 * Returns whether the given feature is enabled or not.
 *
 * @param {Object} state   Global application state.
 * @param {string} feature Feature slug.
 *
 * @return {boolean} Is active.
 */

const isFeatureActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => (state, feature) => {
  return !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store).get('core/edit-post', feature);
});
/**
 * Returns true if the plugin item is pinned to the header.
 * When the value is not set it defaults to true.
 *
 * @param {Object} state      Global application state.
 * @param {string} pluginName Plugin item name.
 *
 * @return {boolean} Whether the plugin item is pinned.
 */

const isPluginItemPinned = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => (state, pluginName) => {
  return select(_wordpress_interface__WEBPACK_IMPORTED_MODULE_2__.store).isItemPinned('core/edit-post', pluginName);
});
/**
 * Returns an array of active meta box locations.
 *
 * @param {Object} state Post editor state.
 *
 * @return {string[]} Active meta box locations.
 */

const getActiveMetaBoxLocations = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(state => {
  return Object.keys(state.metaBoxes.locations).filter(location => isMetaBoxLocationActive(state, location));
}, state => [state.metaBoxes.locations]);
/**
 * Returns true if a metabox location is active and visible
 *
 * @param {Object} state    Post editor state.
 * @param {string} location Meta box location to test.
 *
 * @return {boolean} Whether the meta box location is active and visible.
 */

function isMetaBoxLocationVisible(state, location) {
  return isMetaBoxLocationActive(state, location) && getMetaBoxesPerLocation(state, location)?.some(({
    id
  }) => {
    return isEditorPanelEnabled(state, `meta-box-${id}`);
  });
}
/**
 * Returns true if there is an active meta box in the given location, or false
 * otherwise.
 *
 * @param {Object} state    Post editor state.
 * @param {string} location Meta box location to test.
 *
 * @return {boolean} Whether the meta box location is active.
 */

function isMetaBoxLocationActive(state, location) {
  const metaBoxes = getMetaBoxesPerLocation(state, location);
  return !!metaBoxes && metaBoxes.length !== 0;
}
/**
 * Returns the list of all the available meta boxes for a given location.
 *
 * @param {Object} state    Global application state.
 * @param {string} location Meta box location to test.
 *
 * @return {?Array} List of meta boxes.
 */

function getMetaBoxesPerLocation(state, location) {
  return state.metaBoxes.locations[location];
}
/**
 * Returns the list of all the available meta boxes.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} List of meta boxes.
 */

const getAllMetaBoxes = (0,rememo__WEBPACK_IMPORTED_MODULE_0__["default"])(state => {
  return Object.values(state.metaBoxes.locations).flat();
}, state => [state.metaBoxes.locations]);
/**
 * Returns true if the post is using Meta Boxes
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether there are metaboxes or not.
 */

function hasMetaBoxes(state) {
  return getActiveMetaBoxLocations(state).length > 0;
}
/**
 * Returns true if the Meta Boxes are being saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the metaboxes are being saved.
 */

function isSavingMetaBoxes(state) {
  return state.metaBoxes.isSaving;
}
/**
 * Returns the current editing canvas device type.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Device type.
 */

function __experimentalGetPreviewDeviceType(state) {
  return state.deviceType;
}
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
 * @return {Object} The root client ID, index to insert at and starting filter value.
 */

function __experimentalGetInsertionPoint(state) {
  const {
    rootClientId,
    insertionIndex,
    filterValue
  } = state.blockInserterPanel;
  return {
    rootClientId,
    insertionIndex,
    filterValue
  };
}
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
/**
 * Returns true if the template editing mode is enabled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether we're editing the template.
 */

function isEditingTemplate(state) {
  return state.isEditingTemplate;
}
/**
 * Returns true if meta boxes are initialized.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether meta boxes are initialized.
 */

function areMetaBoxesInitialized(state) {
  return state.metaBoxes.initialized;
}
/**
 * Retrieves the template of the currently edited post.
 *
 * @return {Object?} Post Template.
 */

const getEditedPostTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createRegistrySelector)(select => () => {
  const currentTemplate = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).getEditedPostAttribute('template');

  if (currentTemplate) {
    const templateWithSameSlug = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords('postType', 'wp_template', {
      per_page: -1
    })?.find(template => template.slug === currentTemplate);

    if (!templateWithSameSlug) {
      return templateWithSameSlug;
    }

    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEditedEntityRecord('postType', 'wp_template', templateWithSameSlug.id);
  }

  const post = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store).getCurrentPost();

  if (post.link) {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).__experimentalGetTemplateForLink(post.link);
  }

  return null;
});


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/utils/meta-boxes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/utils/meta-boxes.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMetaBoxContainer": function() { return /* binding */ getMetaBoxContainer; }
/* harmony export */ });
/**
 * Function returning the current Meta Boxes DOM Node in the editor
 * whether the meta box area is opened or not.
 * If the MetaBox Area is visible returns it, and returns the original container instead.
 *
 * @param {string} location Meta Box location.
 *
 * @return {string} HTML content.
 */
const getMetaBoxContainer = location => {
  const area = document.querySelector(`.edit-post-meta-boxes-area.is-${location} .metabox-location-${location}`);

  if (area) {
    return area;
  }

  return document.querySelector('#metaboxes .metabox-location-' + location);
};


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

/***/ "./node_modules/@wordpress/icons/build-module/library/add-template.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/add-template.js ***!
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

const addTemplate = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18.5 5.5V8H20V5.5H22.5V4H20V1.5H18.5V4H16V5.5H18.5ZM13.9624 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10.0391H18.5V18C18.5 18.2761 18.2761 18.5 18 18.5H10L10 10.4917L16.4589 10.5139L16.4641 9.01389L5.5 8.97618V6C5.5 5.72386 5.72386 5.5 6 5.5H13.9624V4ZM5.5 10.4762V18C5.5 18.2761 5.72386 18.5 6 18.5H8.5L8.5 10.4865L5.5 10.4762Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (addTemplate);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-left-small.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-left-small.js ***!
  \**********************************************************************************/
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

const chevronLeftSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m13.1 16-3.4-4 3.4-4 1.1 1-2.6 3 2.6 3-1.1 1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronLeftSmall);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-right-small.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-right-small.js ***!
  \***********************************************************************************/
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

const chevronRightSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronRightSmall);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/code.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/code.js ***!
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

const code = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (code);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/cog.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/cog.js ***!
  \*******************************************************************/
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

const cog = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (cog);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/desktop.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/desktop.js ***!
  \***********************************************************************/
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

const desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (desktop);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/keyboard-close.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/keyboard-close.js ***!
  \******************************************************************************/
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

const keyboardClose = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18,0 L2,0 C0.9,0 0.01,0.9 0.01,2 L0,12 C0,13.1 0.9,14 2,14 L18,14 C19.1,14 20,13.1 20,12 L20,2 C20,0.9 19.1,0 18,0 Z M18,12 L2,12 L2,2 L18,2 L18,12 Z M9,3 L11,3 L11,5 L9,5 L9,3 Z M9,6 L11,6 L11,8 L9,8 L9,6 Z M6,3 L8,3 L8,5 L6,5 L6,3 Z M6,6 L8,6 L8,8 L6,8 L6,6 Z M3,6 L5,6 L5,8 L3,8 L3,6 Z M3,3 L5,3 L5,5 L3,5 L3,3 Z M6,9 L14,9 L14,11 L6,11 L6,9 Z M12,6 L14,6 L14,8 L12,8 L12,6 Z M12,3 L14,3 L14,5 L12,5 L12,3 Z M15,6 L17,6 L17,8 L15,8 L15,6 Z M15,3 L17,3 L17,5 L15,5 L15,3 Z M10,20 L14,16 L6,16 L10,20 Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (keyboardClose);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/layout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/layout.js ***!
  \**********************************************************************/
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

const layout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (layout);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/wordpress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/wordpress.js ***!
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

const wordpress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (wordpress);


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

/***/ "@wordpress/commands":
/*!**********************************!*\
  !*** external ["wp","commands"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["commands"];

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

/***/ "@wordpress/core-commands":
/*!**************************************!*\
  !*** external ["wp","coreCommands"] ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreCommands"];

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

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editor"];

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

/***/ "@wordpress/warning":
/*!*********************************!*\
  !*** external ["wp","warning"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["warning"];

/***/ }),

/***/ "@wordpress/widgets":
/*!*********************************!*\
  !*** external ["wp","widgets"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["widgets"];

/***/ }),

/***/ "./node_modules/rememo/rememo.js":
/*!***************************************!*\
  !*** ./node_modules/rememo/rememo.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/index.js ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginBlockSettingsMenuItem": function() { return /* reexport safe */ _components_block_settings_menu_plugin_block_settings_menu_item__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "PluginDocumentSettingPanel": function() { return /* reexport safe */ _components_sidebar_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "PluginMoreMenuItem": function() { return /* reexport safe */ _components_header_plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "PluginPostPublishPanel": function() { return /* reexport safe */ _components_sidebar_plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "PluginPostStatusInfo": function() { return /* reexport safe */ _components_sidebar_plugin_post_status_info__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   "PluginPrePublishPanel": function() { return /* reexport safe */ _components_sidebar_plugin_pre_publish_panel__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   "PluginSidebar": function() { return /* reexport safe */ _components_sidebar_plugin_sidebar__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   "PluginSidebarMoreMenuItem": function() { return /* reexport safe */ _components_header_plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   "__experimentalFullscreenModeClose": function() { return /* reexport safe */ _components_header_fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   "__experimentalMainDashboardButton": function() { return /* reexport safe */ _components_header_main_dashboard_button__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   "initializeEditor": function() { return /* binding */ initializeEditor; },
/* harmony export */   "reinitializeEditor": function() { return /* binding */ reinitializeEditor; },
/* harmony export */   "store": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_11__.store; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks */ "./node_modules/@wordpress/edit-post/build-module/hooks/index.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins */ "./node_modules/@wordpress/edit-post/build-module/plugins/index.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor */ "./node_modules/@wordpress/edit-post/build-module/editor.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _components_block_settings_menu_plugin_block_settings_menu_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/block-settings-menu/plugin-block-settings-menu-item */ "./node_modules/@wordpress/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-item.js");
/* harmony import */ var _components_sidebar_plugin_document_setting_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar/plugin-document-setting-panel */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-document-setting-panel/index.js");
/* harmony import */ var _components_header_plugin_more_menu_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/plugin-more-menu-item */ "./node_modules/@wordpress/edit-post/build-module/components/header/plugin-more-menu-item/index.js");
/* harmony import */ var _components_sidebar_plugin_post_publish_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sidebar/plugin-post-publish-panel */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-publish-panel/index.js");
/* harmony import */ var _components_sidebar_plugin_post_status_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sidebar/plugin-post-status-info */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-status-info/index.js");
/* harmony import */ var _components_sidebar_plugin_pre_publish_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sidebar/plugin-pre-publish-panel */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-pre-publish-panel/index.js");
/* harmony import */ var _components_sidebar_plugin_sidebar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sidebar/plugin-sidebar */ "./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-sidebar/index.js");
/* harmony import */ var _components_header_plugin_sidebar_more_menu_item__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/header/plugin-sidebar-more-menu-item */ "./node_modules/@wordpress/edit-post/build-module/components/header/plugin-sidebar-more-menu-item/index.js");
/* harmony import */ var _components_header_fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/header/fullscreen-mode-close */ "./node_modules/@wordpress/edit-post/build-module/components/header/fullscreen-mode-close/index.js");
/* harmony import */ var _components_header_main_dashboard_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/header/main-dashboard-button */ "./node_modules/@wordpress/edit-post/build-module/components/header/main-dashboard-button/index.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





/**
 * Initializes and returns an instance of Editor.
 *
 * @param {string}  id           Unique identifier for editor instance.
 * @param {string}  postType     Post type of the post to edit.
 * @param {Object}  postId       ID of the post to edit.
 * @param {?Object} settings     Editor settings object.
 * @param {Object}  initialEdits Programmatic edits to apply initially, to be
 *                               considered as non-user-initiated (bypass for
 *                               unsaved changes prompt).
 */

function initializeEditor(id, postType, postId, settings, initialEdits) {
  const target = document.getElementById(id);
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(target);
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.store).setDefaults('core/edit-post', {
    editorMode: 'visual',
    fixedToolbar: false,
    fullscreenMode: true,
    hiddenBlockTypes: [],
    inactivePanels: [],
    isPublishSidebarEnabled: true,
    openPanels: ['post-status'],
    preferredStyleVariations: {},
    showBlockBreadcrumbs: true,
    showIconLabels: false,
    showListViewByDefault: false,
    themeStyles: true,
    welcomeGuide: true,
    welcomeGuideTemplate: true
  });

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.store).__experimentalReapplyBlockTypeFilters(); // Check if the block list view should be open by default.
  // If `distractionFree` mode is enabled, the block list view should not be open.


  if ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(_store__WEBPACK_IMPORTED_MODULE_11__.store).isFeatureActive('showListViewByDefault') && !(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(_store__WEBPACK_IMPORTED_MODULE_11__.store).isFeatureActive('distractionFree')) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_11__.store).setIsListViewOpened(true);
  }

  (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_2__.registerCoreBlocks)();
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_7__.registerLegacyWidgetBlock)({
    inserter: false
  });
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_7__.registerWidgetGroupBlock)({
    inserter: false
  });

  if (false) {}
  /*
   * Prevent adding template part in the post editor.
   * Only add the filter when the post editor is initialized, not imported.
   * Also only add the filter(s) after registerCoreBlocks()
   * so that common filters in the block library are not overwritten.
   */


  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.addFilter)('blockEditor.__unstableCanInsertBlockType', 'removeTemplatePartsFromInserter', (canInsert, blockType) => {
    if (!(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(_store__WEBPACK_IMPORTED_MODULE_11__.store).isEditingTemplate() && blockType.name === 'core/template-part') {
      return false;
    }

    return canInsert;
  });
  /*
   * Prevent adding post content block (except in query block) in the post editor.
   * Only add the filter when the post editor is initialized, not imported.
   * Also only add the filter(s) after registerCoreBlocks()
   * so that common filters in the block library are not overwritten.
   */

  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.addFilter)('blockEditor.__unstableCanInsertBlockType', 'removePostContentFromInserter', (canInsert, blockType, rootClientId, {
    getBlockParentsByBlockName
  }) => {
    if (!(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(_store__WEBPACK_IMPORTED_MODULE_11__.store).isEditingTemplate() && blockType.name === 'core/post-content') {
      return getBlockParentsByBlockName(rootClientId, 'core/query').length > 0;
    }

    return canInsert;
  }); // Show a console log warning if the browser is not in Standards rendering mode.

  const documentMode = document.compatMode === 'CSS1Compat' ? 'Standards' : 'Quirks';

  if (documentMode !== 'Standards') {
    // eslint-disable-next-line no-console
    console.warn("Your browser is using Quirks Mode. \nThis can cause rendering issues such as blocks overlaying meta boxes in the editor. Quirks Mode can be triggered by PHP errors or HTML code appearing before the opening <!DOCTYPE html>. Try checking the raw page source or your site's PHP error log and resolving errors there, removing any HTML before the doctype, or disabling plugins.");
  } // This is a temporary fix for a couple of issues specific to Webkit on iOS.
  // Without this hack the browser scrolls the mobile toolbar off-screen.
  // Once supported in Safari we can replace this in favor of preventScroll.
  // For details see issue #18632 and PR #18686
  // Specifically, we scroll `interface-interface-skeleton__body` to enable a fixed top toolbar.
  // But Mobile Safari forces the `html` element to scroll upwards, hiding the toolbar.


  const isIphone = window.navigator.userAgent.indexOf('iPhone') !== -1;

  if (isIphone) {
    window.addEventListener('scroll', event => {
      const editorScrollContainer = document.getElementsByClassName('interface-interface-skeleton__body')[0];

      if (event.target === document) {
        // Scroll element into view by scrolling the editor container by the same amount
        // that Mobile Safari tried to scroll the html element upwards.
        if (window.scrollY > 100) {
          editorScrollContainer.scrollTop = editorScrollContainer.scrollTop + window.scrollY;
        } // Undo unwanted scroll on html element, but only in the visual editor.


        if (document.getElementsByClassName('is-mode-visual')[0]) {
          window.scrollTo(0, 0);
        }
      }
    });
  } // Prevent the default browser action for files dropped outside of dropzones.


  window.addEventListener('dragover', e => e.preventDefault(), false);
  window.addEventListener('drop', e => e.preventDefault(), false);
  root.render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor__WEBPACK_IMPORTED_MODULE_10__["default"], {
    settings: settings,
    postId: postId,
    postType: postType,
    initialEdits: initialEdits
  }));
  return root;
}
/**
 * Used to reinitialize the editor after an error. Now it's a deprecated noop function.
 */

function reinitializeEditor() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()('wp.editPost.reinitializeEditor', {
    since: '6.2',
    version: '6.3'
  });
}












}();
(window.wp = window.wp || {}).editPost = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=edit-post.js.map