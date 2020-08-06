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

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return editBlock; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");


function editBlock(props, wp) {
  var __ = wp.i18n.__;
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      createElement = _wp$element.createElement,
      Fragment = _wp$element.Fragment;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$components = wp.components,
      Button = _wp$components.Button,
      CheckboxControl = _wp$components.CheckboxControl,
      Modal = _wp$components.Modal,
      ToggleControl = _wp$components.ToggleControl,
      PanelBody = _wp$components.PanelBody,
      PanelRow = _wp$components.PanelRow,
      SelectControl = _wp$components.SelectControl;

  var _useState = useState(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var openModal = function openModal() {
    return setOpen(true);
  };

  var closeModal = function closeModal() {
    return setOpen(false);
  };
  /*
   * Onstart function
   */


  var onStart = function onStart() {
    if (!attributes.posts.length) {
      var apiPostsArray = Object(_functions__WEBPACK_IMPORTED_MODULE_1__["HTTP_CLIENT"])('/wp-json/wp/v2/posts').map(function (post) {
        return {
          id: post.id,
          title: post.title.rendered,
          selected: false,
          excerpt: 'need to found',
          categories: post.categories
        };
      });
      setAttributes({
        posts: Object(_functions__WEBPACK_IMPORTED_MODULE_1__["SET_POSTS"])(apiPostsArray)
      });
    }
  };
  /*
   * Rendering part
   */

  /* Render modal contents */


  var modalContents = function modalContents() {
    // console.log('[modalContents] Render modal contents');
    var checkboxControlElement = function checkboxControlElement(post, index) {
      var getStateChecked = function getStateChecked(idx) {
        return Object(_functions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS"])(attributes.posts)[idx].selected;
      };

      var setStateOnChange = function setStateOnChange(idx) {
        var postsArray = Object(_functions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS"])(attributes.posts);
        postsArray[idx].selected = !getStateChecked(idx);
        setAttributes({
          posts: Object(_functions__WEBPACK_IMPORTED_MODULE_1__["SET_POSTS"])(postsArray)
        });
      };

      return createElement(CheckboxControl, {
        key: post.id,
        label: post.title,
        className: 'get-posts-block-checkboxes',
        checked: getStateChecked(index),
        onChange: function onChange() {
          setStateOnChange(index);
        }
      });
    };

    var loadPosts = function loadPosts() {
      var postList = [];
      Object(_functions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS"])(attributes.posts).forEach(function (post, index) {
        postList.push(checkboxControlElement(post, index));
      });
      return postList;
    };

    return loadPosts();
  };
  /* Settings panel */


  var controls = [createElement(Fragment, {}, createElement(InspectorControls, {}, createElement(PanelBody, {
    title: 'Filter',
    initialOpen: true
  }, createElement(PanelRow, {}, createElement(ToggleControl, {
    label: 'Enable filter',
    onChange: function onChange(event) {
      setAttributes({
        filter: event
      });
    },
    checked: attributes.filter
  }))))), createElement(Fragment, {}, createElement(InspectorControls, {}, createElement(PanelBody, {
    title: 'Post',
    initialOpen: true
  }, createElement(PanelRow, {}, createElement(Button, {
    label: 'Select post(s) from existing',
    isPrimary: true,
    onClick: function onClick() {
      return openModal();
    }
  }, "Selected posts (".concat(Object(_functions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS"])(Object(_functions__WEBPACK_IMPORTED_MODULE_1__["SELECTED_POSTS"])(attributes.posts)).length, ")")), isOpen && createElement(Modal, {
    title: 'Select post(s) from existing',
    onRequestClose: function onRequestClose() {
      return closeModal();
    }
  }, modalContents()))
  /*  */
  ))), createElement(Fragment, {}, createElement(InspectorControls, {}, createElement(PanelBody, {
    title: 'Template',
    initialOpen: true
  }, createElement(PanelRow, {}, createElement('div', {
    className: 'get-posts-block-preview-template',
    style: {
      backgroundImage: "url(\"/wp-content/plugins/get-posts-block/".concat(attributes.template, ".png\")")
    }
  })), createElement(PanelRow, {}, createElement(SelectControl, {
    // multiple: true,
    label: __('Select post template'),
    value: attributes.template,
    // e.g: value = [ 'a', 'c' ]
    onChange: function onChange(tpl) {
      console.log("Selected: ".concat(tpl));
      setAttributes({
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
  })))))];
  /* Editor block */

  var editor = createElement('div', {}, createElement('div', {}, attributes.filter === true ? 'Filter panel: yes' : 'Filter panel: no'), createElement('div', {}, Object(_functions__WEBPACK_IMPORTED_MODULE_1__["RENDER_POSTS"])(Object(_functions__WEBPACK_IMPORTED_MODULE_1__["SELECTED_POSTS"])(attributes.posts), attributes.template, createElement)));
  /*
   * Initiation part
   */

  onStart();
  return [controls, editor];
}

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: SET_POSTS, GET_POSTS, HTTP_CLIENT, QUERY_POST, RENDER_POSTS, SELECTED_POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POSTS", function() { return SET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_CLIENT", function() { return HTTP_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_POST", function() { return QUERY_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_POSTS", function() { return RENDER_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_POSTS", function() { return SELECTED_POSTS; });
/* Array to JSON transformations */
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
/* Render post elements inside block in editor */

var RENDER_POSTS = function RENDER_POSTS(JSONstr, template, createElement) {
  // console.log('[RENDER_POSTS] Rendering posts elements');
  var selectedPostsElements = [];

  if (GET_POSTS(JSONstr).length > 0) {
    QUERY_POST(GET_POSTS(JSONstr)).forEach(function (post) {
      selectedPostsElements.push(createElement('li', {}, createElement('a', {
        href: post.link
      }, // createElement('div', {}, post.title.rendered),
      post.title.rendered)));
    });
    return createElement('ul', {}, selectedPostsElements);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");



(function (wp) {
  var __ = wp.i18n.__; // The __() function for internationalization

  var registerBlockType = wp.blocks.registerBlockType;
  registerBlockType('common/get-posts-block', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block
  {
    title: __('Get Posts Block'),
    // Block title. __() function allows for internationalization
    description: __('Block for getting posts values'),
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
      return Object(_edit__WEBPACK_IMPORTED_MODULE_1__["default"])(props, wp);
    },
    save: function save(props) {
      // console.log('[save] Rendering save view, props:');
      // console.log(props);
      return Object(_save__WEBPACK_IMPORTED_MODULE_0__["default"])(props, wp);
    }
  });
})(window.wp);

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
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");

function saveBlock(props, wp) {
  var attributes = props.attributes;
  var createElement = wp.element.createElement;
  return createElement('div', {
    className: 'get-posts-block-wrapper'
  }, createElement('div', {
    className: 'get-posts-block-filter'
  }, attributes.filter === true ? 'Filter panel: yes' : 'Filter panel: no'), Object(_functions__WEBPACK_IMPORTED_MODULE_0__["RENDER_POSTS"])(Object(_functions__WEBPACK_IMPORTED_MODULE_0__["SELECTED_POSTS"])(attributes.posts), attributes.template, createElement));
}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map