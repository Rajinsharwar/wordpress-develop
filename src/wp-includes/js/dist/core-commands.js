/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/core-commands/build-module/admin-navigation-commands.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/admin-navigation-commands.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAdminNavigationCommands": function() { return /* binding */ useAdminNavigationCommands; }
/* harmony export */ });
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/**
 * WordPress dependencies
 */



function useAdminNavigationCommands() {
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommand)({
    name: 'core/add-new-post',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add new post'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    callback: () => {
      document.location.href = 'post-new.php';
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommand)({
    name: 'core/add-new-page',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add new page'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
    callback: () => {
      document.location.href = 'post-new.php?post_type=page';
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommand)({
    name: 'core/manage-reusable-blocks',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage all of my patterns'),
    callback: () => {
      document.location.href = 'edit.php?post_type=wp_block';
    },
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/core-commands/build-module/lock-unlock.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/lock-unlock.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/core-commands');


/***/ }),

/***/ "./node_modules/@wordpress/core-commands/build-module/private-apis.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/private-apis.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "privateApis": function() { return /* binding */ privateApis; }
/* harmony export */ });
/* harmony import */ var _admin_navigation_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-navigation-commands */ "./node_modules/@wordpress/core-commands/build-module/admin-navigation-commands.js");
/* harmony import */ var _site_editor_navigation_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-editor-navigation-commands */ "./node_modules/@wordpress/core-commands/build-module/site-editor-navigation-commands.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/core-commands/build-module/lock-unlock.js");
/**
 * Internal dependencies
 */




function useCommands() {
  (0,_admin_navigation_commands__WEBPACK_IMPORTED_MODULE_0__.useAdminNavigationCommands)();
  (0,_site_editor_navigation_commands__WEBPACK_IMPORTED_MODULE_1__.useSiteEditorNavigationCommands)();
}

const privateApis = {};
(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_2__.lock)(privateApis, {
  useCommands
});


/***/ }),

/***/ "./node_modules/@wordpress/core-commands/build-module/site-editor-navigation-commands.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/site-editor-navigation-commands.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSiteEditorNavigationCommands": function() { return /* binding */ useSiteEditorNavigationCommands; }
/* harmony export */ });
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/post.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/page.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/symbol-filled.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/navigation.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/styles.js");
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/router */ "@wordpress/router");
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/core-commands/build-module/lock-unlock.js");
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


const {
  useHistory
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_7__.unlock)(_wordpress_router__WEBPACK_IMPORTED_MODULE_5__.privateApis);
const icons = {
  post: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
  page: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
  wp_template: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
  wp_template_part: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"]
};

const getNavigationCommandLoaderPerPostType = postType => function useNavigationCommandLoader({
  search
}) {
  const history = useHistory();
  const supportsSearch = !['wp_template', 'wp_template_part'].includes(postType);
  const {
    records,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    const query = supportsSearch ? {
      search: !!search ? search : undefined,
      per_page: 10,
      orderby: search ? 'relevance' : 'date',
      status: ['publish', 'future', 'draft', 'pending', 'private']
    } : {
      per_page: -1
    };
    return {
      records: getEntityRecords('postType', postType, query),
      isLoading: !select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).hasFinishedResolution('getEntityRecords', ['postType', postType, query])
    };
  }, [supportsSearch, search]);
  const commands = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return (records !== null && records !== void 0 ? records : []).slice(0, 10).map(record => {
      const isSiteEditor = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.getPath)(window.location.href)?.includes('site-editor.php');
      const extraArgs = isSiteEditor ? {
        canvas: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.getQueryArg)(window.location.href, 'canvas')
      } : {};
      return {
        name: postType + '-' + record.id,
        searchLabel: record.title?.rendered + ' ' + record.id,
        label: record.title?.rendered ? record.title?.rendered : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(no title)'),
        icon: icons[postType],
        callback: ({
          close
        }) => {
          const args = {
            postType,
            postId: record.id,
            ...extraArgs
          };
          const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);

          if (isSiteEditor) {
            history.push(args);
          } else {
            document.location = targetUrl;
          }

          close();
        }
      };
    });
  }, [records, history]);
  return {
    commands,
    isLoading
  };
};

const usePageNavigationCommandLoader = getNavigationCommandLoaderPerPostType('page');
const usePostNavigationCommandLoader = getNavigationCommandLoaderPerPostType('post');
const useTemplateNavigationCommandLoader = getNavigationCommandLoaderPerPostType('wp_template');
const useTemplatePartNavigationCommandLoader = getNavigationCommandLoaderPerPostType('wp_template_part');

function useSiteEditorBasicNavigationCommands() {
  const history = useHistory();
  const isSiteEditor = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.getPath)(window.location.href)?.includes('site-editor.php');
  const commands = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const result = [];
    result.push({
      name: 'core/edit-site/open-navigation',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open navigation'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
      callback: ({
        close
      }) => {
        const args = {
          path: '/navigation'
        };
        const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);

        if (isSiteEditor) {
          history.push(args);
        } else {
          document.location = targetUrl;
        }

        close();
      }
    });
    result.push({
      name: 'core/edit-site/open-pages',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open pages'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
      callback: ({
        close
      }) => {
        const args = {
          path: '/page'
        };
        const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);

        if (isSiteEditor) {
          history.push(args);
        } else {
          document.location = targetUrl;
        }

        close();
      }
    });
    result.push({
      name: 'core/edit-site/open-style-variations',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open style variations'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
      callback: ({
        close
      }) => {
        const args = {
          path: '/wp_global_styles'
        };
        const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);

        if (isSiteEditor) {
          history.push(args);
        } else {
          document.location = targetUrl;
        }

        close();
      }
    });
    result.push({
      name: 'core/edit-site/open-templates',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open templates'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
      callback: ({
        close
      }) => {
        const args = {
          path: '/wp_template'
        };
        const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);

        if (isSiteEditor) {
          history.push(args);
        } else {
          document.location = targetUrl;
        }

        close();
      }
    });
    result.push({
      name: 'core/edit-site/open-template-parts',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open library'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
      callback: ({
        close
      }) => {
        const args = {
          path: '/patterns'
        };
        const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);

        if (isSiteEditor) {
          history.push(args);
        } else {
          document.location = targetUrl;
        }

        close();
      }
    });
    return result;
  }, [history, isSiteEditor]);
  return {
    commands,
    isLoading: false
  };
}

function useSiteEditorNavigationCommands() {
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/navigate-pages',
    hook: usePageNavigationCommandLoader
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/navigate-posts',
    hook: usePostNavigationCommandLoader
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/navigate-templates',
    hook: useTemplateNavigationCommandLoader
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/navigate-template-parts',
    hook: useTemplatePartNavigationCommandLoader
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/basic-navigation',
    hook: useSiteEditorBasicNavigationCommands,
    context: 'site-editor'
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/external.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./node_modules/@wordpress/icons/build-module/library/layout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/layout.js ***!
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

const layout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (layout);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/navigation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/navigation.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const navigation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (navigation);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/page.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/page.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const page = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (page);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./node_modules/@wordpress/icons/build-module/library/post.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const post = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m7.3 9.7 1.4 1.4c.2-.2.3-.3.4-.5 0 0 0-.1.1-.1.3-.5.4-1.1.3-1.6L12 7 9 4 7.2 6.5c-.6-.1-1.1 0-1.6.3 0 0-.1 0-.1.1-.3.1-.4.2-.6.4l1.4 1.4L4 11v1h1l2.3-2.3zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (post);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/styles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const styles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (styles);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/symbol-filled.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/symbol-filled.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const symbolFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (symbolFilled);


/***/ }),

/***/ "@wordpress/commands":
/*!**********************************!*\
  !*** external ["wp","commands"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["commands"];

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

/***/ "@wordpress/router":
/*!********************************!*\
  !*** external ["wp","router"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["router"];

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
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/index.js ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "privateApis": function() { return /* reexport safe */ _private_apis__WEBPACK_IMPORTED_MODULE_0__.privateApis; }
/* harmony export */ });
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private-apis */ "./node_modules/@wordpress/core-commands/build-module/private-apis.js");


}();
(window.wp = window.wp || {}).coreCommands = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=core-commands.js.map