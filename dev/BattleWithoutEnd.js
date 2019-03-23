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
      return React.createElement(_stage_career_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        source: []
      });
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
  })).map(role => React.createElement(_loadArchiveItem_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    role: role,
    onRead: prop.onRead,
    onDelete: prop.onDelete
  })), rest);
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
  return React.createElement("li", null, React.createElement("span", null, "\u89D2\u8272"), React.createElement("span", null, prop.role.name), React.createElement("input", {
    type: "button",
    value: "\u8BFB\u53D6",
    onClick: prop.onRead.bind(null, prop.role.id)
  }), React.createElement("span", null, formatTime(prop.role.time)), React.createElement("input", {
    type: "button",
    value: "\u5220\u9664",
    onClick: prop.onDelete.bind(null, prop.role.id)
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
  return [React.createElement("h1", null, "\u6218\u6597\u65E0\u6B62\u5883"), React.createElement("ul", null, React.createElement("li", null)), React.createElement("div", null, React.createElement("ul", null, React.createElement("li", null)), React.createElement("div", null), React.createElement("input", {
    type: "button"
  }))];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYXR0bGVXaXRob3V0RW5kL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9CYXR0bGVXaXRob3V0RW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvY29tcG9uZW50L2RvbS9tYWluLmpzeCIsIndlYnBhY2s6Ly9CYXR0bGVXaXRob3V0RW5kLy4vc3JjL2NvbXBvbmVudC9kb20vc3RhZ2UvUHJlc2V0U3RhZ2UuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlV2l0aG91dEVuZC8uL3NyYy9jb21wb25lbnQvZG9tL3N0YWdlL2FyY2hpdmUvaW5kZXguanN4Iiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvY29tcG9uZW50L2RvbS9zdGFnZS9hcmNoaXZlL2xvYWRBcmNoaXZlSXRlbS5qc3giLCJ3ZWJwYWNrOi8vQmF0dGxlV2l0aG91dEVuZC8uL3NyYy9jb21wb25lbnQvZG9tL3N0YWdlL2FyY2hpdmUvdW5sb2FkQXJjaGl2ZUl0ZW0uanN4Iiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvY29tcG9uZW50L2RvbS9zdGFnZS9jYXJlZXIuanN4Iiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvY29tcG9uZW50L2RvbS9zdGFnZS90aGVtZS5qc3giLCJ3ZWJwYWNrOi8vQmF0dGxlV2l0aG91dEVuZC8uL3NyYy9jb21wb25lbnQvZG9tL3N0YWdlL3dlbGNvbWUuanN4Iiwid2VicGFjazovL0JhdHRsZVdpdGhvdXRFbmQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQmF0dGxlV2l0aG91dEVuZC9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsiZmlsaW5nIiwiY3JlYXRlIiwibmFtZSIsImFsZXJ0IiwicmVhZCIsImRlbGV0ZSIsInN0YWdlIiwibmV4dFN0YWdlIiwidXNlU3RhdGUiLCJQcmVzZXRTdGFnZSIsIndlbGNvbWUiLCJvbkNyZWF0ZSIsImNhcmVlciIsInNldFRpbWVvdXQiLCJ0aGVtZSIsImJpbmQiLCJhcmNoaXZlIiwibWF4TGVuZ3RoIiwicHJvcCIsInJlc3QiLCJpIiwic291cmNlIiwibGVuZ3RoIiwicHVzaCIsIm1hcCIsInJvbGUiLCJpZCIsInRpbWUiLCJvblJlYWQiLCJvbkRlbGV0ZSIsImZvcm1hdFRpbWUiLCJkYXRlIiwiZ2V0TW9udGgiLCJnZXREYXkiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJzZXROYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3RhcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtB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Qzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBZSx5RUFBVWdCLElBQVYsRUFBZ0I7QUFDM0IsU0FBTyxDQUNILGlFQURHLEVBRUgsZ0NBQ0ksK0JBREosQ0FGRyxFQUtILGlDQUNJLGdDQUNJLCtCQURKLENBREosRUFJSSxnQ0FKSixFQUtJO0FBQU8sUUFBSSxFQUFDO0FBQVosSUFMSixDQUxHLENBQVA7QUFhSCxDOzs7Ozs7Ozs7Ozs7QUNkRDtBQUFlLHlFQUFVQSxJQUFWLEVBQWdCO0FBQzNCLFNBQU8sQ0FDSCxpRUFERyxFQUVIO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLDBCQUEzQjtBQUFrQyxXQUFPLEVBQUVBLElBQUksQ0FBQ3NCO0FBQWhELElBRkcsQ0FBUDtBQUlILEM7Ozs7Ozs7Ozs7OztBQ0xEO0FBQWUsMkVBQVU7QUFDckIsU0FBTyxJQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDRkQ7QUFBQTtBQUEyQztBQUM1Qiw4SDs7Ozs7Ozs7Ozs7QUNEZixtRCIsImZpbGUiOiJCYXR0bGVXaXRob3V0RW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiUmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQmF0dGxlV2l0aG91dEVuZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIlJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJCYXR0bGVXaXRob3V0RW5kXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcmVzZXRTdGFnZSBmcm9tICcuL3N0YWdlL1ByZXNldFN0YWdlLmpzJ1xyXG5pbXBvcnQgV2VsY29tZSBmcm9tICcuL3N0YWdlL3dlbGNvbWUuanN4J1xyXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi9zdGFnZS90aGVtZS5qc3gnXHJcbmltcG9ydCBBcmNoaXZlIGZyb20gJy4vc3RhZ2UvYXJjaGl2ZS9pbmRleC5qc3gnXHJcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi9zdGFnZS9jYXJlZXIuanN4J1xyXG5cclxuY29uc3QgZmlsaW5nID0ge1xyXG4gICAgY3JlYXRlKG5hbWUpIHtcclxuICAgICAgICBhbGVydChuYW1lKTtcclxuICAgIH0sXHJcbiAgICByZWFkKCkge1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZSgpIHtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFtzdGFnZSwgbmV4dFN0YWdlXSA9IHVzZVN0YXRlKFByZXNldFN0YWdlLndlbGNvbWUpO1xyXG5cclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBmaWxpbmcuY3JlYXRlKG5hbWUpO1xyXG4gICAgICAgIG5leHRTdGFnZShQcmVzZXRTdGFnZS5jYXJlZXIpO1xyXG4gICAgfTtcclxuICAgIHN3aXRjaCAoc3RhZ2UpIHtcclxuICAgICAgICBjYXNlIFByZXNldFN0YWdlLndlbGNvbWU6XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQobmV4dFN0YWdlLCAwLCBQcmVzZXRTdGFnZS50aGVtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiA8V2VsY29tZT48L1dlbGNvbWU+O1xyXG4gICAgICAgIGNhc2UgUHJlc2V0U3RhZ2UudGhlbWU6XHJcbiAgICAgICAgICAgIHJldHVybiA8VGhlbWUgb25TdGFydD17bmV4dFN0YWdlLmJpbmQobnVsbCwgUHJlc2V0U3RhZ2UuYXJjaGl2ZSl9PjwvVGhlbWU+O1xyXG4gICAgICAgIGNhc2UgUHJlc2V0U3RhZ2UuYXJjaGl2ZTpcclxuICAgICAgICAgICAgcmV0dXJuIDxBcmNoaXZlIHNvdXJjZT17W119IG9uQ3JlYXRlPXtvbkNyZWF0ZX0gb25SZWFkPXtmaWxpbmcucmVhZH0gb25EZWxldGU9e2ZpbGluZy5kZWxldGV9PjwvQXJjaGl2ZT47XHJcbiAgICAgICAgY2FzZSBQcmVzZXRTdGFnZS5jYXJlZXI6XHJcbiAgICAgICAgICAgIHJldHVybiA8Q2FyZWVyIHNvdXJjZT17W119PjwvQ2FyZWVyPlxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgd2VsY29tZTogMCxcclxuICAgIHRoZW1lOiAxLFxyXG4gICAgYXJjaGl2ZTogMixcclxuICAgIGNhcmVlcjogMyxcclxufSIsImltcG9ydCBVbmxvYWRBcmNoaXZlSXRlbSBmcm9tICcuL3VubG9hZEFyY2hpdmVJdGVtLmpzeCdcclxuaW1wb3J0IExvYWRBcmNoaXZlSXRlbSBmcm9tICcuL2xvYWRBcmNoaXZlSXRlbS5qc3gnXHJcblxyXG5jb25zdCBtYXhMZW5ndGggPSA0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3ApIHtcclxuICAgIGNvbnN0IHJlc3QgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBtYXhMZW5ndGggLSBwcm9wLnNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlc3QucHVzaCg8VW5sb2FkQXJjaGl2ZUl0ZW0gb25DcmVhdGU9e3Byb3Aub25DcmVhdGV9ID48L1VubG9hZEFyY2hpdmVJdGVtPik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3Byb3Auc291cmNlLm1hcChyb2xlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogcm9sZS5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHJvbGUubmFtZSxcclxuICAgICAgICAgICAgICAgIHRpbWU6IHJvbGUudGltZVxyXG4gICAgICAgICAgICB9KSkubWFwKHJvbGUgPT4gPExvYWRBcmNoaXZlSXRlbSByb2xlPXtyb2xlfSBvblJlYWQ9e3Byb3Aub25SZWFkfSBvbkRlbGV0ZT17cHJvcC5vbkRlbGV0ZX0gPjwvTG9hZEFyY2hpdmVJdGVtPil9XHJcbiAgICAgICAgICAgIHtyZXN0fVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG59IiwiY29uc3QgZm9ybWF0VGltZSA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICByZXR1cm4gYFske2RhdGUuZ2V0TW9udGgoKX0vJHtkYXRlLmdldERheSgpfS8ke2RhdGUuZ2V0SG91cnMoKX06JHtkYXRlLmdldE1pbnV0ZXMoKX1dYDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+6KeS6ImyPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJvcC5yb2xlLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi6K+75Y+WXCIgb25DbGljaz17cHJvcC5vblJlYWQuYmluZChudWxsLCBwcm9wLnJvbGUuaWQpfSAvPlxyXG4gICAgICAgICAgICA8c3Bhbj57Zm9ybWF0VGltZShwcm9wLnJvbGUudGltZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi5Yig6ZmkXCIgb25DbGljaz17cHJvcC5vbkRlbGV0ZS5iaW5kKG51bGwsIHByb3Aucm9sZS5pZCl9IC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn07IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAg6KeS6ImyXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICB7bmFtZS5sZW5ndGggIT09IDAgJiYgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuaWsOW7ulwiIG9uQ2xpY2s9e3Byb3Aub25DcmVhdGUuYmluZChudWxsLCBuYW1lKX0gLz59XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3ApIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgPGgxPuaImOaWl+aXoOatouWigzwvaDE+LFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgPC91bD4sXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIF07XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICA8aDE+5oiY5paX5peg5q2i5aKDPC9oMT4sXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuW8gOWni+a4uOaIj1wiIG9uQ2xpY2s9e3Byb3Aub25TdGFydH0gLz5cclxuICAgIF07XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn0iLCJpbXBvcnQgbWFpbiBmcm9tICcuL2NvbXBvbmVudC9kb20vbWFpbi5qc3gnXHJcbmV4cG9ydCBkZWZhdWx0IG1haW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9