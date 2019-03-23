(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["BattleWithoutEnd"] = factory(require("React"));
	else
		root["BattleWithoutEnd"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/component/dom/main.jsx":
/*!************************************!*\
  !*** ./src/component/dom/main.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stage_PresetStage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage/PresetStage.js */ "./src/component/dom/stage/PresetStage.js");
/* harmony import */ var _stage_welcome_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage/welcome.jsx */ "./src/component/dom/stage/welcome.jsx");
/* harmony import */ var _stage_theme_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stage/theme.jsx */ "./src/component/dom/stage/theme.jsx");
/* harmony import */ var _stage_archive_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stage/archive/index.jsx */ "./src/component/dom/stage/archive/index.jsx");
/* harmony import */ var _stage_career_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stage/career.jsx */ "./src/component/dom/stage/career.jsx");






const filing = {
  create(name) {
    alert(name);
  },

  read() {},

  delete() {}

};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const [stage, nextStage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_stage_PresetStage_js__WEBPACK_IMPORTED_MODULE_1__["default"].welcome);

  const onCreate = function (name) {
    filing.create(name);
    nextStage(_stage_PresetStage_js__WEBPACK_IMPORTED_MODULE_1__["default"].career);
  };

  switch (stage) {
    case _stage_PresetStage_js__WEBPACK_IMPORTED_MODULE_1__["default"].welcome:
      setTimeout(nextStage, 0, _stage_PresetStage_js__WEBPACK_IMPORTED_MODULE_1__["default"].theme);
      return React.createElement(_stage_welcome_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null);

    case _stage_PresetStage_js__WEBPACK_IMPORTED_MODULE_1__["default"].theme:
      return React.createElement(_stage_theme_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onStart: nextStage.bind(null, _stage_PresetStage_js__WEBPACK_IMPORTED_MODULE_1__["default"].archive)
      });

    case _stage_PresetStage_js__WEBPACK_IMPORTED_MODULE_1__["default"].archive:
      return React.createElement(_stage_archive_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        source: [],
        onCreate: onCreate,
        onRead: filing.read,
        onDelete: filing.delete
      });

    case _stage_PresetStage_js__WEBPACK_IMPORTED_MODULE_1__["default"].career:
      return React.createElement(_stage_career_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }
});

/***/ }),

/***/ "./src/component/dom/stage/PresetStage.js":
/*!************************************************!*\
  !*** ./src/component/dom/stage/PresetStage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    welcome: 0,
    theme: 1,
    archive: 2,
    career: 3,
});

/***/ }),

/***/ "./src/component/dom/stage/archive/index.jsx":
/*!***************************************************!*\
  !*** ./src/component/dom/stage/archive/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unloadArchiveItem_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unloadArchiveItem.jsx */ "./src/component/dom/stage/archive/unloadArchiveItem.jsx");
/* harmony import */ var _loadArchiveItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadArchiveItem.jsx */ "./src/component/dom/stage/archive/loadArchiveItem.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const maxLength = 4;
/* harmony default export */ __webpack_exports__["default"] = (function (prop) {
  const rest = [];

  for (let i = 0; i !== maxLength - prop.source.length; i++) {
    rest.push(React.createElement(_unloadArchiveItem_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
      onCreate: prop.onCreate
    }));
  }

  return React.createElement("ul", null, prop.source.map(role => ({
    id: role.id,
    name: role.name,
    time: role.time
  })).map(role => React.createElement(_loadArchiveItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, role, {
    onRead: prop.onRead,
    onDelete: prop.onDelete
  }))), rest);
});

/***/ }),

/***/ "./src/component/dom/stage/archive/loadArchiveItem.jsx":
/*!*************************************************************!*\
  !*** ./src/component/dom/stage/archive/loadArchiveItem.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const formatTime = function (date) {
  return `[${date.getMonth()}/${date.getDay()}/${date.getHours()}:${date.getMinutes()}]`;
};

/* harmony default export */ __webpack_exports__["default"] = (function (prop) {
  return React.createElement("li", null, React.createElement("span", null, "\u89D2\u8272"), React.createElement("span", null, prop.name), React.createElement("input", {
    type: "button",
    value: "\u8BFB\u53D6",
    onClick: prop.onRead.bind(null, prop.id)
  }), React.createElement("span", null, formatTime(prop.time)), React.createElement("input", {
    type: "button",
    value: "\u5220\u9664",
    onClick: prop.onDelete.bind(null, prop.id)
  }));
});
;

/***/ }),

/***/ "./src/component/dom/stage/archive/unloadArchiveItem.jsx":
/*!***************************************************************!*\
  !*** ./src/component/dom/stage/archive/unloadArchiveItem.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (prop) {
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return React.createElement("li", null, React.createElement("label", null, "\u89D2\u8272", React.createElement("input", {
    type: "text",
    value: name,
    onChange: event => setName(event.target.value)
  })), name.length !== 0 && React.createElement("input", {
    type: "button",
    value: "\u65B0\u5EFA",
    onClick: prop.onCreate.bind(null, name)
  }));
});
;

/***/ }),

/***/ "./src/component/dom/stage/career.jsx":
/*!********************************************!*\
  !*** ./src/component/dom/stage/career.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (prop) {
  return [React.createElement("h1", null, "\u6218\u6597\u65E0\u6B62\u5883"), React.createElement("ul", null, React.createElement("li", null))];
});

/***/ }),

/***/ "./src/component/dom/stage/theme.jsx":
/*!*******************************************!*\
  !*** ./src/component/dom/stage/theme.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (prop) {
  return [React.createElement("h1", null, "\u6218\u6597\u65E0\u6B62\u5883"), React.createElement("input", {
    type: "button",
    value: "\u5F00\u59CB\u6E38\u620F",
    onClick: prop.onStart
  })];
});

/***/ }),

/***/ "./src/component/dom/stage/welcome.jsx":
/*!*********************************************!*\
  !*** ./src/component/dom/stage/welcome.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return null;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_dom_main_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/dom/main.jsx */ "./src/component/dom/main.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_component_dom_main_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYXR0bGVXaXRob3V0RW5kL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9CYXR0bGVXaXRob3V0RW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvY29tcG9uZW50L2RvbS9tYWluLmpzeCIsIndlYnBhY2s6Ly9CYXR0bGVXaXRob3V0RW5kLy4vc3JjL2NvbXBvbmVudC9kb20vc3RhZ2UvUHJlc2V0U3RhZ2UuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlV2l0aG91dEVuZC8uL3NyYy9jb21wb25lbnQvZG9tL3N0YWdlL2FyY2hpdmUvaW5kZXguanN4Iiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvY29tcG9uZW50L2RvbS9zdGFnZS9hcmNoaXZlL2xvYWRBcmNoaXZlSXRlbS5qc3giLCJ3ZWJwYWNrOi8vQmF0dGxlV2l0aG91dEVuZC8uL3NyYy9jb21wb25lbnQvZG9tL3N0YWdlL2FyY2hpdmUvdW5sb2FkQXJjaGl2ZUl0ZW0uanN4Iiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvY29tcG9uZW50L2RvbS9zdGFnZS9jYXJlZXIuanN4Iiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvY29tcG9uZW50L2RvbS9zdGFnZS90aGVtZS5qc3giLCJ3ZWJwYWNrOi8vQmF0dGxlV2l0aG91dEVuZC8uL3NyYy9jb21wb25lbnQvZG9tL3N0YWdlL3dlbGNvbWUuanN4Iiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQmF0dGxlV2l0aG91dEVuZC9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsiZmlsaW5nIiwiY3JlYXRlIiwibmFtZSIsImFsZXJ0IiwicmVhZCIsImRlbGV0ZSIsInN0YWdlIiwibmV4dFN0YWdlIiwidXNlU3RhdGUiLCJQcmVzZXRTdGFnZSIsIndlbGNvbWUiLCJvbkNyZWF0ZSIsImNhcmVlciIsInNldFRpbWVvdXQiLCJ0aGVtZSIsImJpbmQiLCJhcmNoaXZlIiwibWF4TGVuZ3RoIiwicHJvcCIsInJlc3QiLCJpIiwic291cmNlIiwibGVuZ3RoIiwicHVzaCIsIm1hcCIsInJvbGUiLCJpZCIsInRpbWUiLCJvblJlYWQiLCJvbkRlbGV0ZSIsImZvcm1hdFRpbWUiLCJkYXRlIiwiZ2V0TW9udGgiLCJnZXREYXkiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJzZXROYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3RhcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FBUDtBQU1ILEM7Ozs7Ozs7Ozs7OztBQ1BEO0FBQWUseUVBQVVBLElBQVYsRUFBZ0I7QUFDM0IsU0FBTyxDQUNILGlFQURHLEVBRUg7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsMEJBQTNCO0FBQWtDLFdBQU8sRUFBRUEsSUFBSSxDQUFDc0I7QUFBaEQsSUFGRyxDQUFQO0FBSUgsQzs7Ozs7Ozs7Ozs7O0FDTEQ7QUFBZSwyRUFBVTtBQUNyQixTQUFPLElBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNGRDtBQUFBO0FBQTJDO0FBQzVCLDhIOzs7Ozs7Ozs7OztBQ0RmLG1EIiwiZmlsZSI6IkJhdHRsZVdpdGhvdXRFbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJSZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJCYXR0bGVXaXRob3V0RW5kXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkJhdHRsZVdpdGhvdXRFbmRcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByZXNldFN0YWdlIGZyb20gJy4vc3RhZ2UvUHJlc2V0U3RhZ2UuanMnXHJcbmltcG9ydCBXZWxjb21lIGZyb20gJy4vc3RhZ2Uvd2VsY29tZS5qc3gnXHJcbmltcG9ydCBUaGVtZSBmcm9tICcuL3N0YWdlL3RoZW1lLmpzeCdcclxuaW1wb3J0IEFyY2hpdmUgZnJvbSAnLi9zdGFnZS9hcmNoaXZlL2luZGV4LmpzeCdcclxuaW1wb3J0IENhcmVlciBmcm9tICcuL3N0YWdlL2NhcmVlci5qc3gnXHJcblxyXG5jb25zdCBmaWxpbmcgPSB7XHJcbiAgICBjcmVhdGUobmFtZSkge1xyXG4gICAgICAgIGFsZXJ0KG5hbWUpO1xyXG4gICAgfSxcclxuICAgIHJlYWQoKSB7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgW3N0YWdlLCBuZXh0U3RhZ2VdID0gdXNlU3RhdGUoUHJlc2V0U3RhZ2Uud2VsY29tZSk7XHJcblxyXG4gICAgY29uc3Qgb25DcmVhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIGZpbGluZy5jcmVhdGUobmFtZSk7XHJcbiAgICAgICAgbmV4dFN0YWdlKFByZXNldFN0YWdlLmNhcmVlcik7XHJcbiAgICB9O1xyXG4gICAgc3dpdGNoIChzdGFnZSkge1xyXG4gICAgICAgIGNhc2UgUHJlc2V0U3RhZ2Uud2VsY29tZTpcclxuICAgICAgICAgICAgc2V0VGltZW91dChuZXh0U3RhZ2UsIDAsIFByZXNldFN0YWdlLnRoZW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIDxXZWxjb21lPjwvV2VsY29tZT47XHJcbiAgICAgICAgY2FzZSBQcmVzZXRTdGFnZS50aGVtZTpcclxuICAgICAgICAgICAgcmV0dXJuIDxUaGVtZSBvblN0YXJ0PXtuZXh0U3RhZ2UuYmluZChudWxsLCBQcmVzZXRTdGFnZS5hcmNoaXZlKX0+PC9UaGVtZT47XHJcbiAgICAgICAgY2FzZSBQcmVzZXRTdGFnZS5hcmNoaXZlOlxyXG4gICAgICAgICAgICByZXR1cm4gPEFyY2hpdmUgc291cmNlPXtbXX0gb25DcmVhdGU9e29uQ3JlYXRlfSBvblJlYWQ9e2ZpbGluZy5yZWFkfSBvbkRlbGV0ZT17ZmlsaW5nLmRlbGV0ZX0+PC9BcmNoaXZlPjtcclxuICAgICAgICBjYXNlIFByZXNldFN0YWdlLmNhcmVlcjpcclxuICAgICAgICAgICAgcmV0dXJuIDxDYXJlZXI+PC9DYXJlZXI+XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICB3ZWxjb21lOiAwLFxyXG4gICAgdGhlbWU6IDEsXHJcbiAgICBhcmNoaXZlOiAyLFxyXG4gICAgY2FyZWVyOiAzLFxyXG59IiwiaW1wb3J0IFVubG9hZEFyY2hpdmVJdGVtIGZyb20gJy4vdW5sb2FkQXJjaGl2ZUl0ZW0uanN4J1xyXG5pbXBvcnQgTG9hZEFyY2hpdmVJdGVtIGZyb20gJy4vbG9hZEFyY2hpdmVJdGVtLmpzeCdcclxuXHJcbmNvbnN0IG1heExlbmd0aCA9IDQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgY29uc3QgcmVzdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IG1heExlbmd0aCAtIHByb3Auc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmVzdC5wdXNoKDxVbmxvYWRBcmNoaXZlSXRlbSBvbkNyZWF0ZT17cHJvcC5vbkNyZWF0ZX0gPjwvVW5sb2FkQXJjaGl2ZUl0ZW0+KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cHJvcC5zb3VyY2UubWFwKHJvbGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiByb2xlLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogcm9sZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdGltZTogcm9sZS50aW1lXHJcbiAgICAgICAgICAgIH0pKS5tYXAocm9sZSA9PiA8TG9hZEFyY2hpdmVJdGVtIHsuLi5yb2xlfSBvblJlYWQ9e3Byb3Aub25SZWFkfSBvbkRlbGV0ZT17cHJvcC5vbkRlbGV0ZX0gPjwvTG9hZEFyY2hpdmVJdGVtPil9XHJcbiAgICAgICAgICAgIHtyZXN0fVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG59IiwiY29uc3QgZm9ybWF0VGltZSA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICByZXR1cm4gYFske2RhdGUuZ2V0TW9udGgoKX0vJHtkYXRlLmdldERheSgpfS8ke2RhdGUuZ2V0SG91cnMoKX06JHtkYXRlLmdldE1pbnV0ZXMoKX1dYDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+6KeS6ImyPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuivu+WPllwiIG9uQ2xpY2s9e3Byb3Aub25SZWFkLmJpbmQobnVsbCwgcHJvcC5pZCl9IC8+XHJcbiAgICAgICAgICAgIDxzcGFuPntmb3JtYXRUaW1lKHByb3AudGltZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi5Yig6ZmkXCIgb25DbGljaz17cHJvcC5vbkRlbGV0ZS5iaW5kKG51bGwsIHByb3AuaWQpfSAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG59OyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIOinkuiJslxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAge25hbWUubGVuZ3RoICE9PSAwICYmIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLmlrDlu7pcIiBvbkNsaWNrPXtwcm9wLm9uQ3JlYXRlLmJpbmQobnVsbCwgbmFtZSl9IC8+fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIDxoMT7miJjmlpfml6DmraLlooM8L2gxPixcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICBdO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3ApIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgPGgxPuaImOaWl+aXoOatouWigzwvaDE+LFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLlvIDlp4vmuLjmiI9cIiBvbkNsaWNrPXtwcm9wLm9uU3RhcnR9IC8+XHJcbiAgICBdO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBudWxsO1xyXG59IiwiaW1wb3J0IG1haW4gZnJvbSAnLi9jb21wb25lbnQvZG9tL21haW4uanN4J1xyXG5leHBvcnQgZGVmYXVsdCBtYWluIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sInNvdXJjZVJvb3QiOiIifQ==