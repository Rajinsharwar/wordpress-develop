/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/format-library/build-module/bold/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/bold/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bold": function() { return /* binding */ bold; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-bold.js");


/**
 * WordPress dependencies
 */




const name = 'core/bold';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bold');

const bold = {
  name,
  title,
  tagName: 'strong',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name,
        title
      }));
    }

    function onClick() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name
      }));
      onFocus();
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextShortcut, {
      type: "primary",
      character: "b",
      onUse: onToggle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
      name: "bold",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: title,
      onClick: onClick,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "b"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableRichTextInputEvent, {
      inputType: "formatBold",
      onInput: onToggle
    }));
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/code/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/code/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "code": function() { return /* binding */ code; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/code.js");


/**
 * WordPress dependencies
 */




const name = 'core/code';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline code');

const code = {
  name,
  title,
  tagName: 'code',
  className: null,

  __unstableInputRule(value) {
    const BACKTICK = '`';
    const {
      start,
      text
    } = value;
    const characterBefore = text[start - 1]; // Quick check the text for the necessary character.

    if (characterBefore !== BACKTICK) {
      return value;
    }

    if (start - 2 < 0) {
      return value;
    }

    const indexBefore = text.lastIndexOf(BACKTICK, start - 2);

    if (indexBefore === -1) {
      return value;
    }

    const startIndex = indexBefore;
    const endIndex = start - 2;

    if (startIndex === endIndex) {
      return value;
    }

    value = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.remove)(value, startIndex, startIndex + 1);
    value = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.remove)(value, endIndex, endIndex + 1);
    value = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.applyFormat)(value, {
      type: name
    }, startIndex, endIndex);
    return value;
  },

  edit({
    value,
    onChange,
    onFocus,
    isActive
  }) {
    function onClick() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name,
        title
      }));
      onFocus();
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextShortcut, {
      type: "access",
      character: "x",
      onUse: onClick
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: title,
      onClick: onClick,
      isActive: isActive,
      role: "menuitemcheckbox"
    }));
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/default-formats.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/default-formats.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ "./node_modules/@wordpress/format-library/build-module/bold/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code */ "./node_modules/@wordpress/format-library/build-module/code/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./node_modules/@wordpress/format-library/build-module/image/index.js");
/* harmony import */ var _italic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./italic */ "./node_modules/@wordpress/format-library/build-module/italic/index.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link */ "./node_modules/@wordpress/format-library/build-module/link/index.js");
/* harmony import */ var _strikethrough__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strikethrough */ "./node_modules/@wordpress/format-library/build-module/strikethrough/index.js");
/* harmony import */ var _underline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./underline */ "./node_modules/@wordpress/format-library/build-module/underline/index.js");
/* harmony import */ var _text_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-color */ "./node_modules/@wordpress/format-library/build-module/text-color/index.js");
/* harmony import */ var _subscript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscript */ "./node_modules/@wordpress/format-library/build-module/subscript/index.js");
/* harmony import */ var _superscript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./superscript */ "./node_modules/@wordpress/format-library/build-module/superscript/index.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./keyboard */ "./node_modules/@wordpress/format-library/build-module/keyboard/index.js");
/* harmony import */ var _unknown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./unknown */ "./node_modules/@wordpress/format-library/build-module/unknown/index.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./language */ "./node_modules/@wordpress/format-library/build-module/language/index.js");
/**
 * Internal dependencies
 */













/* harmony default export */ __webpack_exports__["default"] = ([_bold__WEBPACK_IMPORTED_MODULE_0__.bold, _code__WEBPACK_IMPORTED_MODULE_1__.code, _image__WEBPACK_IMPORTED_MODULE_2__.image, _italic__WEBPACK_IMPORTED_MODULE_3__.italic, _link__WEBPACK_IMPORTED_MODULE_4__.link, _strikethrough__WEBPACK_IMPORTED_MODULE_5__.strikethrough, _underline__WEBPACK_IMPORTED_MODULE_6__.underline, _text_color__WEBPACK_IMPORTED_MODULE_7__.textColor, _subscript__WEBPACK_IMPORTED_MODULE_8__.subscript, _superscript__WEBPACK_IMPORTED_MODULE_9__.superscript, _keyboard__WEBPACK_IMPORTED_MODULE_10__.keyboard, _unknown__WEBPACK_IMPORTED_MODULE_11__.unknown, _language__WEBPACK_IMPORTED_MODULE_12__.language]);


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/image/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/image/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "image": function() { return /* binding */ image; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/keyboard-return.js");


/**
 * WordPress dependencies
 */






const ALLOWED_MEDIA_TYPES = ['image'];
const name = 'core/image';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inline image');

const image = {
  name,
  title,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('photo'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('media')],
  object: true,
  tagName: 'img',
  className: null,
  attributes: {
    className: 'class',
    style: 'style',
    url: 'src',
    alt: 'alt'
  },
  edit: Edit
};

function InlineUI({
  value,
  onChange,
  activeObjectAttributes,
  contentRef
}) {
  const {
    style
  } = activeObjectAttributes;
  const [width, setWidth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(style?.replace(/\D/g, ''));
  const popoverAnchor = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__.useAnchor)({
    editableContentElement: contentRef.current,
    settings: image
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    placement: "bottom",
    focusOnMount: false,
    anchor: popoverAnchor,
    className: "block-editor-format-toolbar__image-popover"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "block-editor-format-toolbar__image-container-content",
    onSubmit: event => {
      const newReplacements = value.replacements.slice();
      newReplacements[value.start] = {
        type: name,
        attributes: { ...activeObjectAttributes,
          style: width ? `width: ${width}px;` : ''
        }
      };
      onChange({ ...value,
        replacements: newReplacements
      });
      event.preventDefault();
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    alignment: "bottom",
    spacing: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    className: "block-editor-format-toolbar__image-container-value",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Width'),
    value: width,
    min: 1,
    onChange: newWidth => setWidth(newWidth)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "block-editor-format-toolbar__image-container-button",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Apply'),
    type: "submit"
  }))));
}

function Edit({
  value,
  onChange,
  onFocus,
  isObjectActive,
  activeObjectAttributes,
  contentRef
}) {
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichTextToolbarButton, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
      d: "M4 18.5h16V17H4v1.5zM16 13v1.5h4V13h-4zM5.1 15h7.8c.6 0 1.1-.5 1.1-1.1V6.1c0-.6-.5-1.1-1.1-1.1H5.1C4.5 5 4 5.5 4 6.1v7.8c0 .6.5 1.1 1.1 1.1zm.4-8.5h7V10l-1-1c-.3-.3-.8-.3-1 0l-1.6 1.5-1.2-.7c-.3-.2-.6-.2-.9 0l-1.3 1V6.5zm0 6.1l1.8-1.3 1.3.8c.3.2.7.2.9-.1l1.5-1.4 1.5 1.4v1.5h-7v-.9z"
    })),
    title: title,
    onClick: openModal,
    isActive: isObjectActive
  }), isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    allowedTypes: ALLOWED_MEDIA_TYPES,
    onSelect: ({
      id,
      url,
      alt,
      width: imgWidth
    }) => {
      closeModal();
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__.insertObject)(value, {
        type: name,
        attributes: {
          className: `wp-image-${id}`,
          style: `width: ${Math.min(imgWidth, 150)}px;`,
          url,
          alt
        }
      }));
      onFocus();
    },
    onClose: closeModal,
    render: ({
      open
    }) => {
      open();
      return null;
    }
  }), isObjectActive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InlineUI, {
    value: value,
    onChange: onChange,
    activeObjectAttributes: activeObjectAttributes,
    contentRef: contentRef
  }));
}


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/italic/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/italic/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "italic": function() { return /* binding */ italic; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-italic.js");


/**
 * WordPress dependencies
 */




const name = 'core/italic';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Italic');

const italic = {
  name,
  title,
  tagName: 'em',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name,
        title
      }));
    }

    function onClick() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name
      }));
      onFocus();
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextShortcut, {
      type: "primary",
      character: "i",
      onUse: onToggle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
      name: "italic",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: title,
      onClick: onClick,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "i"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableRichTextInputEvent, {
      inputType: "formatItalic",
      onInput: onToggle
    }));
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/keyboard/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/keyboard/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyboard": function() { return /* binding */ keyboard; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/button.js");


/**
 * WordPress dependencies
 */




const name = 'core/keyboard';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Keyboard input');

const keyboard = {
  name,
  title,
  tagName: 'kbd',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name,
        title
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: title,
      onClick: onClick,
      isActive: isActive,
      role: "menuitemcheckbox"
    });
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/language/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/language/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "language": function() { return /* binding */ language; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/language.js");


/**
 * WordPress dependencies
 */

/**
 * WordPress dependencies
 */






const name = 'core/language';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Language');

const language = {
  name,
  tagName: 'bdo',
  className: null,
  edit: Edit,
  title
};

function Edit({
  isActive,
  value,
  onChange,
  contentRef
}) {
  const [isPopoverVisible, setIsPopoverVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const togglePopover = () => {
    setIsPopoverVisible(state => !state);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichTextToolbarButton, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    label: title,
    title: title,
    onClick: () => {
      if (isActive) {
        onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.removeFormat)(value, name));
      } else {
        togglePopover();
      }
    },
    isActive: isActive,
    role: "menuitemcheckbox"
  }), isPopoverVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InlineLanguageUI, {
    value: value,
    onChange: onChange,
    onClose: togglePopover,
    contentRef: contentRef
  }));
}

function InlineLanguageUI({
  value,
  contentRef,
  onChange,
  onClose
}) {
  const popoverAnchor = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.useAnchor)({
    editableContentElement: contentRef.current,
    settings: language
  });
  const [lang, setLang] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [dir, setDir] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('ltr');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    className: "block-editor-format-toolbar__language-popover",
    anchor: popoverAnchor,
    placement: "bottom",
    onClose: onClose
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "block-editor-format-toolbar__language-container-content",
    onSubmit: event => {
      event.preventDefault();
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.applyFormat)(value, {
        type: name,
        attributes: {
          lang,
          dir
        }
      }));
      onClose();
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: title,
    value: lang,
    onChange: val => setLang(val),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A valid language attribute, like "en" or "fr".')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text direction'),
    value: dir,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left to right'),
      value: 'ltr'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right to left'),
      value: 'rtl'
    }],
    onChange: val => setDir(val)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
    alignment: "right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    type: "submit",
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apply')
  }))));
}


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/link/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/link/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "link": function() { return /* binding */ link; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inline */ "./node_modules/@wordpress/format-library/build-module/link/inline.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/format-library/build-module/link/utils.js");


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */



const name = 'core/link';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link');

function Edit({
  isActive,
  activeAttributes,
  value,
  onChange,
  onFocus,
  contentRef
}) {
  const [addingLink, setAddingLink] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function addLink() {
    const text = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.getTextContent)((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.slice)(value));

    if (text && (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.isURL)(text) && (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isValidHref)(text)) {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.applyFormat)(value, {
        type: name,
        attributes: {
          url: text
        }
      }));
    } else if (text && (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.isEmail)(text)) {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.applyFormat)(value, {
        type: name,
        attributes: {
          url: `mailto:${text}`
        }
      }));
    } else {
      setAddingLink(true);
    }
  }

  function stopAddingLink(returnFocus = true) {
    setAddingLink(false);

    if (returnFocus) {
      onFocus();
    }
  }

  function onRemoveFormat() {
    onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.removeFormat)(value, name));
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_6__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link removed.'), 'assertive');
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichTextShortcut, {
    type: "primary",
    character: "k",
    onUse: addLink
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichTextShortcut, {
    type: "primaryShift",
    character: "k",
    onUse: onRemoveFormat
  }), isActive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichTextToolbarButton, {
    name: "link",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Unlink'),
    onClick: onRemoveFormat,
    isActive: isActive,
    shortcutType: "primaryShift",
    shortcutCharacter: "k"
  }), !isActive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichTextToolbarButton, {
    name: "link",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    title: title,
    onClick: addLink,
    isActive: isActive,
    shortcutType: "primary",
    shortcutCharacter: "k"
  }), (addingLink || isActive) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inline__WEBPACK_IMPORTED_MODULE_7__["default"], {
    addingLink: addingLink,
    stopAddingLink: stopAddingLink,
    isActive: isActive,
    activeAttributes: activeAttributes,
    value: value,
    onChange: onChange,
    contentRef: contentRef
  }));
}

const link = {
  name,
  title,
  tagName: 'a',
  className: null,
  attributes: {
    url: 'href',
    type: 'data-type',
    id: 'data-id',
    target: 'target'
  },

  __unstablePasteRule(value, {
    html,
    plainText
  }) {
    if ((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.isCollapsed)(value)) {
      return value;
    }

    const pastedText = (html || plainText).replace(/<[^>]+>/g, '').trim(); // A URL was pasted, turn the selection into a link.

    if (!(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.isURL)(pastedText)) {
      return value;
    } // Allows us to ask for this information when we get a report.


    window.console.log('Created link:\n\n', pastedText);
    return (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.applyFormat)(value, {
      type: name,
      attributes: {
        url: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__.decodeEntities)(pastedText)
      }
    });
  },

  edit: Edit
};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/link/inline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/link/inline.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/@wordpress/format-library/build-module/link/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ "./node_modules/@wordpress/format-library/build-module/link/index.js");
/* harmony import */ var _use_link_instance_key__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-link-instance-key */ "./node_modules/@wordpress/format-library/build-module/link/use-link-instance-key.js");


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





function InlineLinkUI({
  isActive,
  activeAttributes,
  addingLink,
  value,
  onChange,
  speak,
  stopAddingLink,
  contentRef
}) {
  const richLinkTextValue = getRichTextValueFromSelection(value, isActive); // Get the text content minus any HTML tags.

  const richTextText = richLinkTextValue.text;
  /**
   * Pending settings to be applied to the next link. When inserting a new
   * link, toggle values cannot be applied immediately, because there is not
   * yet a link for them to apply to. Thus, they are maintained in a state
   * value until the time that the link can be inserted or edited.
   *
   * @type {[Object|undefined,Function]}
   */

  const [nextLinkValue, setNextLinkValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    createPageEntity,
    userCanCreatePages
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);

    const _settings = getSettings();

    return {
      createPageEntity: _settings.__experimentalCreatePageEntity,
      userCanCreatePages: _settings.__experimentalUserCanCreatePages
    };
  }, []);
  const linkValue = {
    url: activeAttributes.url,
    type: activeAttributes.type,
    id: activeAttributes.id,
    opensInNewTab: activeAttributes.target === '_blank',
    title: richTextText,
    ...nextLinkValue
  };

  function removeLink() {
    const newValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.removeFormat)(value, 'core/link');
    onChange(newValue);
    stopAddingLink();
    speak((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link removed.'), 'assertive');
  }

  function onChangeLink(nextValue) {
    // Merge with values from state, both for the purpose of assigning the
    // next state value, and for use in constructing the new link format if
    // the link is ready to be applied.
    nextValue = { ...nextLinkValue,
      ...nextValue
    }; // LinkControl calls `onChange` immediately upon the toggling a setting.

    const didToggleSetting = linkValue.opensInNewTab !== nextValue.opensInNewTab && linkValue.url === nextValue.url; // If change handler was called as a result of a settings change during
    // link insertion, it must be held in state until the link is ready to
    // be applied.

    const didToggleSettingForNewLink = didToggleSetting && nextValue.url === undefined; // If link will be assigned, the state value can be considered flushed.
    // Otherwise, persist the pending changes.

    setNextLinkValue(didToggleSettingForNewLink ? nextValue : undefined);

    if (didToggleSettingForNewLink) {
      return;
    }

    const newUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.prependHTTP)(nextValue.url);
    const linkFormat = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.createLinkFormat)({
      url: newUrl,
      type: nextValue.type,
      id: nextValue.id !== undefined && nextValue.id !== null ? String(nextValue.id) : undefined,
      opensInNewWindow: nextValue.opensInNewTab
    });
    const newText = nextValue.title || newUrl;

    if ((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.isCollapsed)(value) && !isActive) {
      // Scenario: we don't have any actively selected text or formats.
      const toInsert = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.applyFormat)((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.create)({
        text: newText
      }), linkFormat, 0, newText.length);
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.insert)(value, toInsert));
    } else {
      // Scenario: we have any active text selection or an active format.
      let newValue;

      if (newText === richTextText) {
        // If we're not updating the text then ignore.
        newValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.applyFormat)(value, linkFormat);
      } else {
        // Create new RichText value for the new text in order that we
        // can apply formats to it.
        newValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.create)({
          text: newText
        }); // Apply the new Link format to this new text value.

        newValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.applyFormat)(newValue, linkFormat, 0, newText.length); // Get the boundaries of the active link format.

        const boundary = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getFormatBoundary)(value, {
          type: 'core/link'
        }); // Split the value at the start of the active link format.
        // Passing "start" as the 3rd parameter is required to ensure
        // the second half of the split value is split at the format's
        // start boundary and avoids relying on the value's "end" property
        // which may not correspond correctly.

        const [valBefore, valAfter] = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.split)(value, boundary.start, boundary.start); // Update the original (full) RichTextValue replacing the
        // target text with the *new* RichTextValue containing:
        // 1. The new text content.
        // 2. The new link format.
        // As "replace" will operate on the first match only, it is
        // run only against the second half of the value which was
        // split at the active format's boundary. This avoids a bug
        // with incorrectly targetted replacements.
        // See: https://github.com/WordPress/gutenberg/issues/41771.
        // Note original formats will be lost when applying this change.
        // That is expected behaviour.
        // See: https://github.com/WordPress/gutenberg/pull/33849#issuecomment-936134179.

        const newValAfter = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.replace)(valAfter, richTextText, newValue);
        newValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.concat)(valBefore, newValAfter);
      }

      newValue.start = newValue.end;
      newValue.activeFormats = [];
      onChange(newValue);
    } // Focus should only be shifted back to the formatted segment when the
    // URL is submitted.


    if (!didToggleSetting) {
      stopAddingLink();
    }

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_7__.isValidHref)(newUrl)) {
      speak((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Warning: the link has been inserted but may have errors. Please test it.'), 'assertive');
    } else if (isActive) {
      speak((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link edited.'), 'assertive');
    } else {
      speak((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link inserted.'), 'assertive');
    }
  }

  const popoverAnchor = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.useAnchor)({
    editableContentElement: contentRef.current,
    settings: _index__WEBPACK_IMPORTED_MODULE_8__.link
  }); // Generate a string based key that is unique to this anchor reference.
  // This is used to force re-mount the LinkControl component to avoid
  // potential stale state bugs caused by the component not being remounted
  // See https://github.com/WordPress/gutenberg/pull/34742.

  const forceRemountKey = (0,_use_link_instance_key__WEBPACK_IMPORTED_MODULE_9__["default"])(popoverAnchor); // The focusOnMount prop shouldn't evolve during render of a Popover
  // otherwise it causes a render of the content.

  const focusOnMount = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(addingLink ? 'firstElement' : false);

  async function handleCreate(pageTitle) {
    const page = await createPageEntity({
      title: pageTitle,
      status: 'draft'
    });
    return {
      id: page.id,
      type: page.type,
      title: page.title.rendered,
      url: page.link,
      kind: 'post-type'
    };
  }

  function createButtonText(searchTerm) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    /* translators: %s: search term. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Create page: <mark>%s</mark>'), searchTerm), {
      mark: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mark", null)
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    anchor: popoverAnchor,
    focusOnMount: focusOnMount.current,
    onClose: stopAddingLink,
    onFocusOutside: () => stopAddingLink(false),
    placement: "bottom",
    shift: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalLinkControl, {
    key: forceRemountKey,
    value: linkValue,
    onChange: onChangeLink,
    onRemove: removeLink,
    forceIsEditingLink: addingLink,
    hasRichPreviews: true,
    createSuggestion: createPageEntity && handleCreate,
    withCreateSuggestion: userCanCreatePages,
    createSuggestionButtonText: createButtonText,
    hasTextControl: true
  }));
}

function getRichTextValueFromSelection(value, isActive) {
  // Default to the selection ranges on the RichTextValue object.
  let textStart = value.start;
  let textEnd = value.end; // If the format is currently active then the rich text value
  // should always be taken from the bounds of the active format
  // and not the selected text.

  if (isActive) {
    const boundary = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getFormatBoundary)(value, {
      type: 'core/link'
    });
    textStart = boundary.start; // Text *selection* always extends +1 beyond the edge of the format.
    // We account for that here.

    textEnd = boundary.end + 1;
  } // Get a RichTextValue containing the selected text content.


  return (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_4__.slice)(value, textStart, textEnd);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.withSpokenMessages)(InlineLinkUI));


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/link/use-link-instance-key.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/link/use-link-instance-key.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Weakly referenced map allows unused ids to be garbage collected.
const weakMap = new WeakMap(); // Incrementing zero-based ID value.

let id = -1;
const prefix = 'link-control-instance';

function getKey(_id) {
  return `${prefix}-${_id}`;
}
/**
 * Builds a unique link control key for the given object reference.
 *
 * @param {Object} instance an unique object reference specific to this link control instance.
 * @return {string | undefined} the unique key to use for this link control.
 */


function useLinkInstanceKey(instance) {
  if (!instance) {
    return;
  }

  if (weakMap.has(instance)) {
    return getKey(weakMap.get(instance));
  }

  id += 1;
  weakMap.set(instance, id);
  return getKey(id);
}

/* harmony default export */ __webpack_exports__["default"] = (useLinkInstanceKey);


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/link/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/link/utils.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLinkFormat": function() { return /* binding */ createLinkFormat; },
/* harmony export */   "getFormatBoundary": function() { return /* binding */ getFormatBoundary; },
/* harmony export */   "isValidHref": function() { return /* binding */ isValidHref; }
/* harmony export */ });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Check for issues with the provided href.
 *
 * @param {string} href The href.
 *
 * @return {boolean} Is the href invalid?
 */

function isValidHref(href) {
  if (!href) {
    return false;
  }

  const trimmedHref = href.trim();

  if (!trimmedHref) {
    return false;
  } // Does the href start with something that looks like a URL protocol?


  if (/^\S+:/.test(trimmedHref)) {
    const protocol = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.getProtocol)(trimmedHref);

    if (!(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.isValidProtocol)(protocol)) {
      return false;
    } // Add some extra checks for http(s) URIs, since these are the most common use-case.
    // This ensures URIs with an http protocol have exactly two forward slashes following the protocol.


    if (protocol.startsWith('http') && !/^https?:\/\/[^\/\s]/i.test(trimmedHref)) {
      return false;
    }

    const authority = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.getAuthority)(trimmedHref);

    if (!(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.isValidAuthority)(authority)) {
      return false;
    }

    const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.getPath)(trimmedHref);

    if (path && !(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.isValidPath)(path)) {
      return false;
    }

    const queryString = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.getQueryString)(trimmedHref);

    if (queryString && !(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.isValidQueryString)(queryString)) {
      return false;
    }

    const fragment = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.getFragment)(trimmedHref);

    if (fragment && !(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.isValidFragment)(fragment)) {
      return false;
    }
  } // Validate anchor links.


  if (trimmedHref.startsWith('#') && !(0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.isValidFragment)(trimmedHref)) {
    return false;
  }

  return true;
}
/**
 * Generates the format object that will be applied to the link text.
 *
 * @param {Object}  options
 * @param {string}  options.url              The href of the link.
 * @param {string}  options.type             The type of the link.
 * @param {string}  options.id               The ID of the link.
 * @param {boolean} options.opensInNewWindow Whether this link will open in a new window.
 *
 * @return {Object} The final format object.
 */

function createLinkFormat({
  url,
  type,
  id,
  opensInNewWindow
}) {
  const format = {
    type: 'core/link',
    attributes: {
      url
    }
  };
  if (type) format.attributes.type = type;
  if (id) format.attributes.id = id;

  if (opensInNewWindow) {
    format.attributes.target = '_blank';
    format.attributes.rel = 'noreferrer noopener';
  }

  return format;
}
/* eslint-disable jsdoc/no-undefined-types */

/**
 * Get the start and end boundaries of a given format from a rich text value.
 *
 *
 * @param {RichTextValue} value      the rich text value to interrogate.
 * @param {string}        format     the identifier for the target format (e.g. `core/link`, `core/bold`).
 * @param {number?}       startIndex optional startIndex to seek from.
 * @param {number?}       endIndex   optional endIndex to seek from.
 * @return {Object}	object containing start and end values for the given format.
 */

/* eslint-enable jsdoc/no-undefined-types */

function getFormatBoundary(value, format, startIndex = value.start, endIndex = value.end) {
  const EMPTY_BOUNDARIES = {
    start: null,
    end: null
  };
  const {
    formats
  } = value;
  let targetFormat;
  let initialIndex;

  if (!formats?.length) {
    return EMPTY_BOUNDARIES;
  } // Clone formats to avoid modifying source formats.


  const newFormats = formats.slice();
  const formatAtStart = newFormats[startIndex]?.find(({
    type
  }) => type === format.type);
  const formatAtEnd = newFormats[endIndex]?.find(({
    type
  }) => type === format.type);
  const formatAtEndMinusOne = newFormats[endIndex - 1]?.find(({
    type
  }) => type === format.type);

  if (!!formatAtStart) {
    // Set values to conform to "start"
    targetFormat = formatAtStart;
    initialIndex = startIndex;
  } else if (!!formatAtEnd) {
    // Set values to conform to "end"
    targetFormat = formatAtEnd;
    initialIndex = endIndex;
  } else if (!!formatAtEndMinusOne) {
    // This is an edge case which will occur if you create a format, then place
    // the caret just before the format and hit the back ARROW key. The resulting
    // value object will have start and end +1 beyond the edge of the format boundary.
    targetFormat = formatAtEndMinusOne;
    initialIndex = endIndex - 1;
  } else {
    return EMPTY_BOUNDARIES;
  }

  const index = newFormats[initialIndex].indexOf(targetFormat);
  const walkingArgs = [newFormats, initialIndex, targetFormat, index]; // Walk the startIndex "backwards" to the leading "edge" of the matching format.

  startIndex = walkToStart(...walkingArgs); // Walk the endIndex "forwards" until the trailing "edge" of the matching format.

  endIndex = walkToEnd(...walkingArgs); // Safe guard: start index cannot be less than 0.

  startIndex = startIndex < 0 ? 0 : startIndex; // // Return the indicies of the "edges" as the boundaries.

  return {
    start: startIndex,
    end: endIndex
  };
}
/**
 * Walks forwards/backwards towards the boundary of a given format within an
 * array of format objects. Returns the index of the boundary.
 *
 * @param {Array}  formats         the formats to search for the given format type.
 * @param {number} initialIndex    the starting index from which to walk.
 * @param {Object} targetFormatRef a reference to the format type object being sought.
 * @param {number} formatIndex     the index at which we expect the target format object to be.
 * @param {string} direction       either 'forwards' or 'backwards' to indicate the direction.
 * @return {number} the index of the boundary of the given format.
 */

function walkToBoundary(formats, initialIndex, targetFormatRef, formatIndex, direction) {
  let index = initialIndex;
  const directions = {
    forwards: 1,
    backwards: -1
  };
  const directionIncrement = directions[direction] || 1; // invalid direction arg default to forwards

  const inverseDirectionIncrement = directionIncrement * -1;

  while (formats[index] && formats[index][formatIndex] === targetFormatRef) {
    // Increment/decrement in the direction of operation.
    index = index + directionIncrement;
  } // Restore by one in inverse direction of operation
  // to avoid out of bounds.


  index = index + inverseDirectionIncrement;
  return index;
}

const partialRight = (fn, ...partialArgs) => (...args) => fn(...args, ...partialArgs);

const walkToStart = partialRight(walkToBoundary, 'backwards');
const walkToEnd = partialRight(walkToBoundary, 'forwards');


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/strikethrough/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/strikethrough/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "strikethrough": function() { return /* binding */ strikethrough; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js");


/**
 * WordPress dependencies
 */




const name = 'core/strikethrough';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Strikethrough');

const strikethrough = {
  name,
  title,
  tagName: 's',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onClick() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name,
        title
      }));
      onFocus();
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextShortcut, {
      type: "access",
      character: "d",
      onUse: onClick
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: title,
      onClick: onClick,
      isActive: isActive,
      role: "menuitemcheckbox"
    }));
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/subscript/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/subscript/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subscript": function() { return /* binding */ subscript; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/subscript.js");


/**
 * WordPress dependencies
 */




const name = 'core/subscript';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subscript');

const subscript = {
  name,
  title,
  tagName: 'sub',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name,
        title
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: title,
      onClick: onClick,
      isActive: isActive,
      role: "menuitemcheckbox"
    });
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/superscript/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/superscript/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "superscript": function() { return /* binding */ superscript; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/superscript.js");


/**
 * WordPress dependencies
 */




const name = 'core/superscript';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Superscript');

const superscript = {
  name,
  title,
  tagName: 'sup',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onToggle() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name,
        title
      }));
    }

    function onClick() {
      onToggle();
      onFocus();
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: title,
      onClick: onClick,
      isActive: isActive,
      role: "menuitemcheckbox"
    });
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/text-color/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/text-color/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textColor": function() { return /* binding */ textColor; },
/* harmony export */   "transparentValue": function() { return /* binding */ transparentValue; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/text-color.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/color.js");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline */ "./node_modules/@wordpress/format-library/build-module/text-color/inline.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const transparentValue = 'rgba(0, 0, 0, 0)';
const name = 'core/text-color';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Highlight');

const EMPTY_ARRAY = [];

function getComputedStyleProperty(element, property) {
  const {
    ownerDocument
  } = element;
  const {
    defaultView
  } = ownerDocument;
  const style = defaultView.getComputedStyle(element);
  const value = style.getPropertyValue(property);

  if (property === 'background-color' && value === transparentValue && element.parentElement) {
    return getComputedStyleProperty(element.parentElement, property);
  }

  return value;
}

function fillComputedColors(element, {
  color,
  backgroundColor
}) {
  if (!color && !backgroundColor) {
    return;
  }

  return {
    color: color || getComputedStyleProperty(element, 'color'),
    backgroundColor: backgroundColor === transparentValue ? getComputedStyleProperty(element, 'background-color') : backgroundColor
  };
}

function TextColorEdit({
  value,
  onChange,
  isActive,
  activeAttributes,
  contentRef
}) {
  const allowCustomControl = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.custom');
  const colors = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.palette') || EMPTY_ARRAY;
  const [isAddingColor, setIsAddingColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const enableIsAddingColor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setIsAddingColor(true), [setIsAddingColor]);
  const disableIsAddingColor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setIsAddingColor(false), [setIsAddingColor]);
  const colorIndicatorStyle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => fillComputedColors(contentRef.current, (0,_inline__WEBPACK_IMPORTED_MODULE_4__.getActiveColors)(value, name, colors)), [value, colors]);
  const hasColorsToChoose = colors.length || !allowCustomControl;

  if (!hasColorsToChoose && !isActive) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichTextToolbarButton, {
    className: "format-library-text-color-button",
    isActive: isActive,
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: Object.keys(activeAttributes).length ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
      style: colorIndicatorStyle
    }),
    title: title // If has no colors to choose but a color is active remove the color onClick.
    ,
    onClick: hasColorsToChoose ? enableIsAddingColor : () => onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_3__.removeFormat)(value, name)),
    role: "menuitemcheckbox"
  }), isAddingColor && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: name,
    onClose: disableIsAddingColor,
    activeAttributes: activeAttributes,
    value: value,
    onChange: onChange,
    contentRef: contentRef
  }));
}

const textColor = {
  name,
  title,
  tagName: 'mark',
  className: 'has-inline-color',
  attributes: {
    style: 'style',
    class: 'class'
  },

  /*
   * Since this format relies on the <mark> tag, it's important to
   * prevent the default yellow background color applied by most
   * browsers. The solution is to detect when this format is used with a
   * text color but no background color, and in such cases to override
   * the default styling with a transparent background.
   *
   * @see https://github.com/WordPress/gutenberg/pull/35516
   */
  __unstableFilterAttributeValue(key, value) {
    if (key !== 'style') return value; // We should not add a background-color if it's already set.

    if (value && value.includes('background-color')) return value;
    const addedCSS = ['background-color', transparentValue].join(':'); // Prepend `addedCSS` to avoid a double `;;` as any the existing CSS
    // rules will already include a `;`.

    return value ? [addedCSS, value].join(';') : addedCSS;
  },

  edit: TextColorEdit
};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/text-color/inline.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/text-color/inline.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InlineColorUI; },
/* harmony export */   "getActiveColors": function() { return /* binding */ getActiveColors; },
/* harmony export */   "parseClassName": function() { return /* binding */ parseClassName; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./node_modules/@wordpress/format-library/build-module/text-color/index.js");


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function parseCSS(css = '') {
  return css.split(';').reduce((accumulator, rule) => {
    if (rule) {
      const [property, value] = rule.split(':');
      if (property === 'color') accumulator.color = value;
      if (property === 'background-color' && value !== _index__WEBPACK_IMPORTED_MODULE_6__.transparentValue) accumulator.backgroundColor = value;
    }

    return accumulator;
  }, {});
}

function parseClassName(className = '', colorSettings) {
  return className.split(' ').reduce((accumulator, name) => {
    // `colorSlug` could contain dashes, so simply match the start and end.
    if (name.startsWith('has-') && name.endsWith('-color')) {
      const colorSlug = name.replace(/^has-/, '').replace(/-color$/, '');
      const colorObject = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorObjectByAttributeValues)(colorSettings, colorSlug);
      accumulator.color = colorObject.color;
    }

    return accumulator;
  }, {});
}
function getActiveColors(value, name, colorSettings) {
  const activeColorFormat = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.getActiveFormat)(value, name);

  if (!activeColorFormat) {
    return {};
  }

  return { ...parseCSS(activeColorFormat.attributes.style),
    ...parseClassName(activeColorFormat.attributes.class, colorSettings)
  };
}

function setColors(value, name, colorSettings, colors) {
  const {
    color,
    backgroundColor
  } = { ...getActiveColors(value, name, colorSettings),
    ...colors
  };

  if (!color && !backgroundColor) {
    return (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.removeFormat)(value, name);
  }

  const styles = [];
  const classNames = [];
  const attributes = {};

  if (backgroundColor) {
    styles.push(['background-color', backgroundColor].join(':'));
  } else {
    // Override default browser color for mark element.
    styles.push(['background-color', _index__WEBPACK_IMPORTED_MODULE_6__.transparentValue].join(':'));
  }

  if (color) {
    const colorObject = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorObjectByColorValue)(colorSettings, color);

    if (colorObject) {
      classNames.push((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', colorObject.slug));
    } else {
      styles.push(['color', color].join(':'));
    }
  }

  if (styles.length) attributes.style = styles.join(';');
  if (classNames.length) attributes.class = classNames.join(' ');
  return (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.applyFormat)(value, {
    type: name,
    attributes
  });
}

function ColorPicker({
  name,
  property,
  value,
  onChange
}) {
  const colors = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    var _getSettings$colors;

    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    return (_getSettings$colors = getSettings().colors) !== null && _getSettings$colors !== void 0 ? _getSettings$colors : [];
  }, []);
  const onColorChange = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(color => {
    onChange(setColors(value, name, colors, {
      [property]: color
    }));
  }, [colors, onChange, property]);
  const activeColors = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getActiveColors(value, name, colors), [name, value, colors]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: activeColors[property],
    onChange: onColorChange
  });
}

function InlineColorUI({
  name,
  value,
  onChange,
  onClose,
  contentRef
}) {
  /*
   As you change the text color by typing a HEX value into a field,
   the return value of document.getSelection jumps to the field you're editing,
   not the highlighted text. Given that useAnchor uses document.getSelection,
   it will return null, since it can't find the <mark> element within the HEX input.
   This caches the last truthy value of the selection anchor reference.
   */
  const popoverAnchor = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useCachedTruthy)((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.useAnchor)({
    editableContentElement: contentRef.current,
    settings: _index__WEBPACK_IMPORTED_MODULE_6__.textColor
  }));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Popover, {
    onClose: onClose,
    className: "components-inline-color-popover",
    anchor: popoverAnchor
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    tabs: [{
      name: 'color',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Text')
    }, {
      name: 'backgroundColor',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Background')
    }]
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
    name: name,
    property: tab.name,
    value: value,
    onChange: onChange
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/underline/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/underline/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "underline": function() { return /* binding */ underline; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



const name = 'core/underline';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Underline');

const underline = {
  name,
  title,
  tagName: 'span',
  className: null,
  attributes: {
    style: 'style'
  },

  edit({
    value,
    onChange
  }) {
    const onToggle = () => {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.toggleFormat)(value, {
        type: name,
        attributes: {
          style: 'text-decoration: underline;'
        },
        title
      }));
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextShortcut, {
      type: "primary",
      character: "u",
      onUse: onToggle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__unstableRichTextInputEvent, {
      inputType: "formatUnderline",
      onInput: onToggle
    }));
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/format-library/build-module/unknown/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/unknown/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unknown": function() { return /* binding */ unknown; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/help.js");


/**
 * WordPress dependencies
 */




const name = 'core/unknown';

const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear Unknown Formatting');

const unknown = {
  name,
  title,
  tagName: '*',
  className: null,

  edit({
    isActive,
    value,
    onChange,
    onFocus
  }) {
    function onClick() {
      onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.removeFormat)(value, name));
      onFocus();
    }

    const selectedValue = (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.slice)(value);
    const hasUnknownFormats = selectedValue.formats.some(formats => {
      return formats.some(format => format.type === name);
    });

    if (!isActive && !hasUnknownFormats) {
      return null;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
      name: "unknown",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: title,
      onClick: onClick,
      isActive: true
    });
  }

};


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./node_modules/@wordpress/icons/build-module/library/button.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/button.js ***!
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

const button = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M8 12.5h8V11H8v1.5Z M19 6.5H5a2 2 0 0 0-2 2V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2ZM5 8h14a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.5A.5.5 0 0 1 5 8Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (button);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/code.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/code.js ***!
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

const code = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (code);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/color.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/color.js ***!
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

const color = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (color);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-bold.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-bold.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatBold = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatBold);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-italic.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-italic.js ***!
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

const formatItalic = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.5 5L10 19h1.9l2.5-14z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatItalic);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatStrikethrough = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatStrikethrough);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/help.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/help.js ***!
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

const help = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (help);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/keyboard-return.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/keyboard-return.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const keyboardReturn = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"
}));
/* harmony default export */ __webpack_exports__["default"] = (keyboardReturn);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/language.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/language.js ***!
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

const language = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.5 10h-1.7l-3.7 10.5h1.7l.9-2.6h3.9l.9 2.6h1.7L17.5 10zm-2.2 6.3 1.4-4 1.4 4h-2.8zm-4.8-3.8c1.6-1.8 2.9-3.6 3.7-5.7H16V5.2h-5.8V3H8.8v2.2H3v1.5h9.6c-.7 1.6-1.8 3.1-3.1 4.6C8.6 10.2 7.8 9 7.2 8H5.6c.6 1.4 1.7 2.9 2.9 4.4l-2.4 2.4c-.3.4-.7.8-1.1 1.2l1 1 1.2-1.2c.8-.8 1.6-1.5 2.3-2.3.8.9 1.7 1.7 2.5 2.5l.6-1.5c-.7-.6-1.4-1.3-2.1-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (language);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link-off.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link-off.js ***!
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

const linkOff = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (linkOff);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
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

const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (link);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/subscript.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/subscript.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const subscript = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (subscript);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/superscript.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/superscript.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const superscript = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (superscript);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/text-color.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/text-color.js ***!
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

const textColor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (textColor);


/***/ }),

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["a11y"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

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

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ (function(module) {

module.exports = window["wp"]["htmlEntities"];

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

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["richText"];

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
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/format-library/build-module/index.js ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-formats */ "./node_modules/@wordpress/format-library/build-module/default-formats.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


_default_formats__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(({
  name,
  ...settings
}) => (0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__.registerFormatType)(name, settings));

}();
(window.wp = window.wp || {}).formatLibrary = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=format-library.js.map