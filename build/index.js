/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/components/editorControl.js":
/*!*****************************************!*\
  !*** ./src/components/editorControl.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/services.js");



var render = function render(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {}, props.attributes.filter === true ? 'Filter panel: yes' : 'Filter panel: no'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {}, Object(_services__WEBPACK_IMPORTED_MODULE_1__["RENDER_POSTS"])(Object(_services__WEBPACK_IMPORTED_MODULE_1__["SELECTED_POSTS"])(props.attributes.posts), props.attributes.template, {
    title: true,
    excerpt: true,
    image: true
  }, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])));
};

var editorControl = function editorControl(props) {
  return render(props);
};

/* harmony default export */ __webpack_exports__["default"] = (editorControl);

/***/ }),

/***/ "./src/components/filterControl.js":
/*!*****************************************!*\
  !*** ./src/components/filterControl.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




var render = function render(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: 'Filter',
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: 'Enable filter',
    onChange: function onChange(event) {
      props.setAttributes({
        filter: event
      });
    },
    checked: props.attributes.filter
  })))));
};

var filterControl = function filterControl(props) {
  return render(props);
};

/* harmony default export */ __webpack_exports__["default"] = (filterControl);

/***/ }),

/***/ "./src/components/postControl.js":
/*!***************************************!*\
  !*** ./src/components/postControl.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/services.js");






var checkboxControlElement = function checkboxControlElement(props, post, index) {
  var getStateChecked = function getStateChecked(idx) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_4__["GET_POSTS"])(props.attributes.posts)[idx].selected;
  };

  var setStateOnChange = function setStateOnChange(idx) {
    var postsArray = Object(_services__WEBPACK_IMPORTED_MODULE_4__["GET_POSTS"])(props.attributes.posts);
    postsArray[idx].selected = !getStateChecked(idx);
    props.setAttributes({
      posts: Object(_services__WEBPACK_IMPORTED_MODULE_4__["SET_POSTS"])(postsArray)
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
    key: post.id,
    label: post.title,
    className: 'get-posts-block-checkboxes',
    checked: getStateChecked(index),
    onChange: function onChange() {
      setStateOnChange(index);
    }
  });
};

var modalBody = function modalBody(props) {
  // console.log('[modalContents] Render modal contents');
  var postList = [];
  Object(_services__WEBPACK_IMPORTED_MODULE_4__["GET_POSTS"])(props.attributes.posts).forEach(function (post, index) {
    postList.push(checkboxControlElement(props, post, index));
  });
  return postList;
};

var render = function render(props) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var openModal = function openModal() {
    return setOpen(true);
  };

  var closeModal = function closeModal() {
    return setOpen(false);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: 'Post',
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    label: 'Select post(s) from existing',
    isPrimary: true,
    onClick: function onClick() {
      return openModal();
    }
  }, "Selected posts (".concat(Object(_services__WEBPACK_IMPORTED_MODULE_4__["GET_POSTS"])(Object(_services__WEBPACK_IMPORTED_MODULE_4__["SELECTED_POSTS"])(props.attributes.posts)).length, ")")), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: 'Select post(s) from existing',
    onRequestClose: function onRequestClose() {
      return closeModal();
    }
  }, modalBody(props))))));
};

var postControl = function postControl(props) {
  return render(props);
};

/* harmony default export */ __webpack_exports__["default"] = (postControl);

/***/ }),

/***/ "./src/components/templateControl.js":
/*!*******************************************!*\
  !*** ./src/components/templateControl.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





var render = function render(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: 'Template',
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', {
    className: 'get-posts-block-preview-template',
    style: {
      backgroundImage: "url(\"/wp-content/plugins/get-posts-block/images/".concat(props.attributes.template, ".png\")")
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], {}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    // multiple: true,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select post template'),
    value: props.attributes.template,
    // e.g: value = [ 'a', 'c' ]
    onChange: function onChange(tpl) {
      console.log("Selected: ".concat(tpl));
      props.setAttributes({
        template: tpl
      });
    },
    options: [{
      value: 'default',
      label: 'Template 1'
    }, {
      value: 'theme2',
      label: 'Template 2'
    }, {
      value: 'theme3',
      label: 'Template 3'
    }]
  })))));
};

var templateControl = function templateControl(props) {
  return render(props);
};

/* harmony default export */ __webpack_exports__["default"] = (templateControl);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return editBlock; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _components_filterControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filterControl */ "./src/components/filterControl.js");
/* harmony import */ var _components_postControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/postControl */ "./src/components/postControl.js");
/* harmony import */ var _components_templateControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/templateControl */ "./src/components/templateControl.js");
/* harmony import */ var _components_editorControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/editorControl */ "./src/components/editorControl.js");





function editBlock(props) {
  /*
   * Onstart function
   */
  var onStart = function onStart() {
    if (!props.attributes.posts.length) {
      var apiPostsArray = Object(_services__WEBPACK_IMPORTED_MODULE_0__["HTTP_CLIENT"])('/wp-json/wp/v2/posts').map(function (post) {
        // console.log(post);
        return {
          id: post.id,
          title: post.title.rendered,
          selected: false,
          excerpt: 'need to found',
          categories: post.categories
        };
      }); // console.log(apiPostsArray);

      props.setAttributes({
        posts: Object(_services__WEBPACK_IMPORTED_MODULE_0__["SET_POSTS"])(apiPostsArray)
      });
    }
  };
  /*
   * Rendering part
   */

  /* Settings panel */


  var controls = [Object(_components_filterControl__WEBPACK_IMPORTED_MODULE_1__["default"])(props), Object(_components_postControl__WEBPACK_IMPORTED_MODULE_2__["default"])(props), Object(_components_templateControl__WEBPACK_IMPORTED_MODULE_3__["default"])(props)];
  /* Editor block */

  var editor = Object(_components_editorControl__WEBPACK_IMPORTED_MODULE_4__["default"])(props);
  /*
   * Initiation part
   */

  onStart();
  return [controls, editor];
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('common/get-posts-block', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block
{
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Get Posts Block'),
  // Block title. __() function allows for internationalization
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Block for getting posts values'),
  // Block description
  icon: 'admin-page',
  // Block icon from Dashicons. https://developer.wordpress.org/resource/dashicons/
  category: 'common',
  // Block category. Group blocks together based on common traits E.g. common, formatting, layout widgets, embed
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p',
      default: 'Default text'
    },
    fields: {
      type: 'string',
      default: ''
    },
    filter: {
      type: 'boolean',
      default: true
    },
    posts: {
      type: 'string',
      default: ''
    },
    template: {
      type: 'string',
      default: 'default'
    }
  },
  edit: function edit(props) {
    // console.log('[edit] Rendering edit view, props:');
    // console.log(props);
    return Object(_edit__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
  },
  save: function save(props) {
    // console.log('[save] Rendering save view, props:');
    // console.log(props);
    return Object(_save__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
  }
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return saveBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/services.js");


function saveBlock(props) {
  var attributes = props.attributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: 'get-posts-block-wrapper'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: 'get-posts-block-filter'
  }, attributes.filter === true ? 'Filter panel: yes' : 'Filter panel: no'), Object(_services__WEBPACK_IMPORTED_MODULE_1__["RENDER_POSTS"])(Object(_services__WEBPACK_IMPORTED_MODULE_1__["SELECTED_POSTS"])(attributes.posts), attributes.template, {
    title: true,
    excerpt: true,
    image: true
  }, _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"]));
}

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/*! exports provided: SET_POSTS, GET_POSTS, HTTP_CLIENT, QUERY_POST, RENDER_TEMPLATE, RENDER_POSTS, SELECTED_POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POSTS", function() { return SET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_CLIENT", function() { return HTTP_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_POST", function() { return QUERY_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_TEMPLATE", function() { return RENDER_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_POSTS", function() { return RENDER_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_POSTS", function() { return SELECTED_POSTS; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* JSON and Array transformations */

var SET_POSTS = function SET_POSTS(JSONstr) {
  return JSON.stringify(JSONstr);
};
var GET_POSTS = function GET_POSTS(JSONstr) {
  return JSONstr === '' ? [] : JSON.parse(JSONstr);
};
/* HTTP client in synchronous mode */

var HTTP_CLIENT = function HTTP_CLIENT(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', url, false); // false for synchronous request

  xmlHttp.send(null);

  if (xmlHttp.responseText) {
    return JSON.parse(xmlHttp.responseText);
  }

  return false;
};
/* Performing API query */

var QUERY_POST = function QUERY_POST(postsArray) {
  if (postsArray.length > 0) {
    var postfix = '&include[]=';
    var fullpostfix = '';
    postsArray.forEach(function (post) {
      fullpostfix += postfix + post.id;
    });
    return HTTP_CLIENT("/wp-json/wp/v2/posts/?".concat(fullpostfix));
  }

  return false;
};
/* Render post template */

var RENDER_TEMPLATE = function RENDER_TEMPLATE(post, template, fields) {
  // console.log(post);
  var postImageStyle = function postImageStyle() {
    return post.jetpack_featured_media_url.length > 0 ? {
      backgroundImage: "url(\"".concat(post.jetpack_featured_media_url, "\")")
    } : {
      backgroundImage: "url(\"/wp-content/plugins/get-posts-block/images/no-article-logo.png\")"
    };
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: 'get-posts-block-card-body'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', {
    href: post.link
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: 'get-posts-block-post-image',
    style: postImageStyle()
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: 'get-posts-block-content-body'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('a', {
    className: 'get-posts-block-a-container',
    href: post.link
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: 'get-posts-block-content-container'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', {
    className: 'get-posts-block-content-title'
  }, post.title.rendered), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])('small', {
    className: 'get-posts-block-content-excerpt'
  }, post.excerpt.rendered.replace(/<[^>]*>?/gm, ''))))));
};
/* Render post elements inside block in editor */

var RENDER_POSTS = function RENDER_POSTS(JSONstr, template, fields) {
  // console.log('[RENDER_POSTS] Rendering posts elements');
  var selectedPostsElements = [];

  if (GET_POSTS(JSONstr).length > 0) {
    QUERY_POST(GET_POSTS(JSONstr)).forEach(function (post) {
      selectedPostsElements.push(RENDER_TEMPLATE(post, template, fields));
    });
    return selectedPostsElements;
  }

  return false;
};
var SELECTED_POSTS = function SELECTED_POSTS(JSONstr) {
  var selectedPosts = GET_POSTS(JSONstr).filter(function (post) {
    return post.selected === true;
  });
  return SET_POSTS(selectedPosts);
};

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map