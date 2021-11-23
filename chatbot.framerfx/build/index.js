(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("framer/resource"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer/resource", "react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("framer/resource"), require("react"), require("react-dom")) : factory(root["Framer"], root["framer/resource"], root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_resource__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AnswerComment.tsx": "./code/AnswerComment.tsx",
	"./AnswerEmoji.tsx": "./code/AnswerEmoji.tsx",
	"./AnswerLikertCover.tsx": "./code/AnswerLikertCover.tsx",
	"./AnswerLikertDesc.tsx": "./code/AnswerLikertDesc.tsx",
	"./AnswerMultiple.tsx": "./code/AnswerMultiple.tsx",
	"./App.tsx": "./code/App.tsx",
	"./AppHelmet.tsx": "./code/AppHelmet.tsx",
	"./Chat.tsx": "./code/Chat.tsx",
	"./ChatList.tsx": "./code/ChatList.tsx",
	"./Cursor.tsx": "./code/Cursor.tsx",
	"./Examples.tsx": "./code/Examples.tsx",
	"./Preview_Loaction.tsx": "./code/Preview_Loaction.tsx",
	"./RemoveFramerXStyles.tsx": "./code/RemoveFramerXStyles.tsx",
	"./Slider.tsx": "./code/Slider.tsx",
	"./animate/index.js": "./code/animate/index.js",
	"./animate/likertCircle.js": "./code/animate/likertCircle.js",
	"./canvas.tsx": "./code/canvas.tsx",
	"./components/AnswerCommentComp/index.js": "./code/components/AnswerCommentComp/index.js",
	"./components/AnswerEmojiComp/Emoji.js": "./code/components/AnswerEmojiComp/Emoji.js",
	"./components/AnswerEmojiComp/index.js": "./code/components/AnswerEmojiComp/index.js",
	"./components/AnswerLikertCoverComp/Mock.js": "./code/components/AnswerLikertCoverComp/Mock.js",
	"./components/AnswerLikertCoverComp/index.js": "./code/components/AnswerLikertCoverComp/index.js",
	"./components/AnswerLikertDescComp/index.js": "./code/components/AnswerLikertDescComp/index.js",
	"./components/AnswerMultipleComp/Choice.js": "./code/components/AnswerMultipleComp/Choice.js",
	"./components/AnswerMultipleComp/ChoiceCover.js": "./code/components/AnswerMultipleComp/ChoiceCover.js",
	"./components/AnswerMultipleComp/ChoiceCoverText.js": "./code/components/AnswerMultipleComp/ChoiceCoverText.js",
	"./components/AnswerMultipleComp/ChoiceWrap.js": "./code/components/AnswerMultipleComp/ChoiceWrap.js",
	"./components/AnswerMultipleComp/ChoiceWrapNo.js": "./code/components/AnswerMultipleComp/ChoiceWrapNo.js",
	"./components/AnswerMultipleComp/index.js": "./code/components/AnswerMultipleComp/index.js",
	"./components/ChatComp/Bubble.js": "./code/components/ChatComp/Bubble.js",
	"./components/ChatComp/Bubble/Loading.js": "./code/components/ChatComp/Bubble/Loading.js",
	"./components/ChatComp/Bubble/index.js": "./code/components/ChatComp/Bubble/index.js",
	"./components/ChatComp/Loading.js": "./code/components/ChatComp/Loading.js",
	"./components/ChatComp/index.js": "./code/components/ChatComp/index.js",
	"./components/ChatListComp/Lychee.js": "./code/components/ChatListComp/Lychee.js",
	"./components/ChatListComp/index.js": "./code/components/ChatListComp/index.js",
	"./datas/answer.js": "./code/datas/answer.js",
	"./datas/chats.js": "./code/datas/chats.js",
	"./datas/company.js": "./code/datas/company.js",
	"./datas/demoQuestions.js": "./code/datas/demoQuestions.js",
	"./datas/index.js": "./code/datas/index.js",
	"./datas/likert.js": "./code/datas/likert.js",
	"./datas/multiple.js": "./code/datas/multiple.js",
	"./datas/slider.js": "./code/datas/slider.js",
	"./datas/starRating.js": "./code/datas/starRating.js",
	"./handlers/addChat.js": "./code/handlers/addChat.js",
	"./handlers/handleAnswerClick.js": "./code/handlers/handleAnswerClick.js",
	"./handlers/index.js": "./code/handlers/index.js",
	"./handlers/initDataLoad.js": "./code/handlers/initDataLoad.js",
	"./handlers/setAnswers.js": "./code/handlers/setAnswers.js",
	"./handlers/showNextQuestion.js": "./code/handlers/showNextQuestion.js",
	"./handlers/showNoQuestions.js": "./code/handlers/showNoQuestions.js",
	"./handlers/showSubQuestion.js": "./code/handlers/showSubQuestion.js",
	"./handlers/termination.js": "./code/handlers/termination.js",
	"./shared/consts.js": "./code/shared/consts.js",
	"./shared/utils.js": "./code/shared/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/AnswerComment.tsx":
/*!********************************!*\
  !*** ./code/AnswerComment.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5zd2VyQ29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQW5zd2VyQ29tbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsc0VBQThEO0FBSTlELE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUFnQjtJQUN2RCxNQUFNOztRQUNKLE9BQU8sb0JBQUMsMkJBQWlCLG9CQUFLLElBQUksQ0FBQyxLQUFLLEVBQUksQ0FBQTtLQUM3Qzs7QUFISCxzQ0FRQztBQUhRLDBCQUFZLEdBQVUsRUFBRSxDQUFBO0FBRXhCLDhCQUFnQixHQUE0QixFQUFFLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const AnswerCommentComp_1 = __webpack_require__(/*! ./components/AnswerCommentComp */ "./code/components/AnswerCommentComp/index.js");
class AnswerComment extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(AnswerCommentComp_1.default, Object.assign({}, this.props));
    }
}
exports.AnswerComment = AnswerComment;
AnswerComment.defaultProps = {};
AnswerComment.propertyControls = {};
exports.__info__ = [{ "name": "AnswerComment", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/AnswerEmoji.tsx":
/*!******************************!*\
  !*** ./code/AnswerEmoji.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5zd2VyRW1vamkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0Fuc3dlckVtb2ppLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5QixrRUFBMEQ7QUFJMUQsTUFBYSxXQUFZLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBQ3JELE1BQU07O1FBQ0osT0FBTyxvQkFBQyx5QkFBZSxvQkFBSyxJQUFJLENBQUMsS0FBSyxFQUFJLENBQUE7S0FDM0M7O0FBSEgsa0NBUUM7QUFIUSx3QkFBWSxHQUFVLEVBQUUsQ0FBQTtBQUV4Qiw0QkFBZ0IsR0FBNEIsRUFBRSxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const AnswerEmojiComp_1 = __webpack_require__(/*! ./components/AnswerEmojiComp */ "./code/components/AnswerEmojiComp/index.js");
class AnswerEmoji extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(AnswerEmojiComp_1.default, Object.assign({}, this.props));
    }
}
exports.AnswerEmoji = AnswerEmoji;
AnswerEmoji.defaultProps = {};
AnswerEmoji.propertyControls = {};
exports.__info__ = [{ "name": "AnswerEmoji", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/AnswerLikertCover.tsx":
/*!************************************!*\
  !*** ./code/AnswerLikertCover.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5zd2VyTGlrZXJ0Q292ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0Fuc3dlckxpa2VydENvdmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5Qiw4RUFBc0U7QUFJdEUsTUFBYSxpQkFBa0IsU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFDM0QsTUFBTTs7UUFDSixPQUFPLG9CQUFDLCtCQUFxQixvQkFBSyxJQUFJLENBQUMsS0FBSyxFQUFJLENBQUE7S0FDakQ7O0FBSEgsOENBUUM7QUFIUSw4QkFBWSxHQUFVLEVBQUUsQ0FBQTtBQUV4QixrQ0FBZ0IsR0FBNEIsRUFBRSxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const AnswerLikertCoverComp_1 = __webpack_require__(/*! ./components/AnswerLikertCoverComp */ "./code/components/AnswerLikertCoverComp/index.js");
class AnswerLikertCover extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(AnswerLikertCoverComp_1.default, Object.assign({}, this.props));
    }
}
exports.AnswerLikertCover = AnswerLikertCover;
AnswerLikertCover.defaultProps = {};
AnswerLikertCover.propertyControls = {};
exports.__info__ = [{ "name": "AnswerLikertCover", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/AnswerLikertDesc.tsx":
/*!***********************************!*\
  !*** ./code/AnswerLikertDesc.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5zd2VyTGlrZXJ0RGVzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQW5zd2VyTGlrZXJ0RGVzYy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsNEVBQW9FO0FBSXBFLE1BQWEsZ0JBQWlCLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBQzFELE1BQU07O1FBQ0osT0FBTyxvQkFBQyw4QkFBb0Isb0JBQUssSUFBSSxDQUFDLEtBQUssRUFBSSxDQUFBO0tBQ2hEOztBQUhILDRDQVFDO0FBSFEsNkJBQVksR0FBVSxFQUFFLENBQUE7QUFFeEIsaUNBQWdCLEdBQTRCLEVBQUUsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const AnswerLikertDescComp_1 = __webpack_require__(/*! ./components/AnswerLikertDescComp */ "./code/components/AnswerLikertDescComp/index.js");
class AnswerLikertDesc extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(AnswerLikertDescComp_1.default, Object.assign({}, this.props));
    }
}
exports.AnswerLikertDesc = AnswerLikertDesc;
AnswerLikertDesc.defaultProps = {};
AnswerLikertDesc.propertyControls = {};
exports.__info__ = [{ "name": "AnswerLikertDesc", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/AnswerMultiple.tsx":
/*!*********************************!*\
  !*** ./code/AnswerMultiple.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5zd2VyTXVsdGlwbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0Fuc3dlck11bHRpcGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5Qix3RUFBZ0U7QUFJaEUsTUFBYSxjQUFlLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBQ3hELE1BQU07O1FBQ0osT0FBTyxvQkFBQyw0QkFBa0Isb0JBQUssSUFBSSxDQUFDLEtBQUssRUFBSSxDQUFBO0tBQzlDOztBQUhILHdDQVFDO0FBSFEsMkJBQVksR0FBVSxFQUFFLENBQUE7QUFFeEIsK0JBQWdCLEdBQTRCLEVBQUUsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const AnswerMultipleComp_1 = __webpack_require__(/*! ./components/AnswerMultipleComp */ "./code/components/AnswerMultipleComp/index.js");
class AnswerMultiple extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(AnswerMultipleComp_1.default, Object.assign({}, this.props));
    }
}
exports.AnswerMultiple = AnswerMultiple;
AnswerMultiple.defaultProps = {};
AnswerMultiple.propertyControls = {};
exports.__info__ = [{ "name": "AnswerMultiple", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsOENBQXFDO0FBQ3JDLG1DQVFnQjtBQUNoQix5Q0FBNEQ7QUFDNUQsNENBQXVFO0FBQ3ZFLDBDQUE2RDtBQUU3RCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUE7QUFDVCxRQUFBLElBQUksR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDcEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxlQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFBO0lBQ2hELHFCQUFxQjtJQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsVUFBVSxHQUFHLElBQUksQ0FBQTtRQUNqQix1QkFBWSxFQUFFLENBQUE7S0FDZjtJQUVELE9BQU8sRUFBRSxDQUFBO0NBQ1YsQ0FBQTtBQUVEOztHQUVHO0FBRVUsUUFBQSxXQUFXLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQzNDLE9BQU87UUFDTCxPQUFPLEVBQUUsZUFBTyxDQUFDLE9BQU87UUFDeEIsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLFNBQVM7U0FDbEI7S0FDRixDQUFBO0NBQ0YsQ0FBQTtBQUNZLFFBQUEsV0FBVyxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUMzQyxPQUFPO1FBQ0wsVUFBVSxFQUFFLGVBQU8sQ0FBQyxJQUFJO0tBQ3pCLENBQUE7Q0FDRixDQUFBO0FBQ1ksUUFBQSxXQUFXLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQzNDLE9BQU87UUFDTCxJQUFJLEVBQUUsZUFBTyxDQUFDLElBQUk7UUFDbEIsS0FBSyxFQUFFLEdBQUc7S0FDWCxDQUFBO0NBQ0YsQ0FBQTtBQUNZLFFBQUEsYUFBYSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUM3QyxPQUFPO1FBQ0wsSUFBSSxFQUFFLGVBQU8sQ0FBQyxNQUFNO1FBQ3BCLEtBQUssRUFBRSxHQUFHO0tBQ1gsQ0FBQTtDQUNGLENBQUE7QUFDWSxRQUFBLGlCQUFpQixHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUNqRCxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLFNBQVM7U0FDbEI7UUFDRCxLQUFLOztZQUNILGVBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1NBQ3ZCO0tBQ0YsQ0FBQTtDQUNGLENBQUE7QUFDWSxRQUFBLE9BQU8sR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDdkMsT0FBTztRQUNMLE9BQU8sRUFBRSxlQUFPLENBQUMsT0FBTztRQUN4QixLQUFLOztZQUNILGVBQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1NBQ3hCO0tBQ0YsQ0FBQTtDQUNGLENBQUE7QUFFWSxRQUFBLFFBQVEsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDeEMsT0FBTztRQUNMLFFBQVEsRUFBRSxhQUFLLENBQUMsSUFBSTtRQUNwQixZQUFZLEVBQUUsY0FBTSxDQUFDLE1BQU07S0FDNUIsQ0FBQTtDQUNGLENBQUE7QUFFRDs7R0FFRztBQUNVLFFBQUEsV0FBVyxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUMzQyxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wseUNBQXlDO1lBQ3pDLFNBQVMsRUFDUCxtRUFBbUU7U0FDdEU7S0FDRixDQUFBO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsV0FBVyxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUMzQyxPQUFPO1FBQ0wsT0FBTyxFQUFFLGNBQU0sQ0FBQyxJQUFJLElBQUksY0FBYztRQUN0QyxlQUFlLEVBQUUsY0FBTSxDQUFDLGVBQWU7S0FDeEMsQ0FBQTtDQUNGLENBQUE7QUFFRCxTQUFTO0FBQ0ksUUFBQSxZQUFZLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQzVDLE9BQU87UUFDTCxPQUFPLEVBQUUsY0FBTSxDQUFDLElBQUksSUFBSSxRQUFRO1FBQ2hDLGVBQWUsRUFBRSxjQUFNLENBQUMsZUFBZTtLQUN4QyxDQUFBO0NBQ0YsQ0FBQTtBQUNZLFFBQUEsTUFBTSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUN0QyxPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sRUFBRTtZQUNQLEdBQUcsRUFBRSxjQUFNLENBQUMsR0FBRztZQUNmLE9BQU8sRUFBRSxjQUFNLENBQUMsT0FBTztTQUN4QjtRQUNELFVBQVUsRUFBRSxjQUFNLENBQUMsVUFBVTtLQUM5QixDQUFBO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsaUJBQWlCLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQ2pELElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFBO0lBRTlELE9BQU87UUFDTCxLQUFLLEVBQUU7WUFDTCxVQUFVLEVBQUUsdURBQXVEO1NBQ3BFO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxjQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUM1QjtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxjQUFNLENBQUMsb0JBQW9CO1NBQ25DO0tBQ0YsQ0FBQTtDQUNGLENBQUE7QUFFWSxRQUFBLGtCQUFrQixHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUNsRCxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQTtJQUM5RCxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsVUFBVSxFQUFFLHVEQUF1RDtTQUNwRTtRQUNELE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsY0FBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsY0FBTSxDQUFDLHFCQUFxQjtTQUNwQztLQUNGLENBQUE7Q0FDRixDQUFBO0FBRVksUUFBQSxpQkFBaUIsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDakQsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUE7SUFDOUQsT0FBTztRQUNMLEtBQUssRUFBRTtZQUNMLFVBQVUsRUFBRSx1REFBdUQ7U0FDcEU7UUFDRCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsQ0FBQztTQUNUO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLGNBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLGNBQU0sQ0FBQyxvQkFBb0I7U0FDbkM7S0FDRixDQUFBO0NBQ0YsQ0FBQTtBQUNZLFFBQUEsVUFBVSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUMxQyxPQUFPO1FBQ0wsR0FBRyxFQUFFLGNBQU0sQ0FBQyxXQUFXO0tBQ3hCLENBQUE7Q0FDRixDQUFBO0FBRUQsY0FBYztBQUNELFFBQUEsZ0JBQWdCLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQ2hELE9BQU87UUFDTCxPQUFPLEVBQUUsY0FBTSxDQUFDLElBQUksSUFBSSxhQUFhO0tBQ3RDLENBQUE7Q0FDRixDQUFBO0FBRVksUUFBQSxVQUFVLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQzFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFBO0lBRTlELE1BQU0sWUFBWSxHQUFHLENBQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRTs7UUFDL0Msa0JBQVUsQ0FBQyxxQkFBcUIsR0FBRyxVQUFVLENBQUE7UUFDN0Msa0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO01BQy9CLENBQUE7SUFDRCxNQUFNLG9CQUFvQixHQUFHLENBQU0sQ0FBQyxFQUFDLEVBQUU7O1FBQ3JDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFO1lBQ3JCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLFdBQVc7U0FDbEIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFakIsWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUU7WUFDbkIsUUFBUSxFQUFFLEdBQUc7WUFDYixJQUFJLEVBQUUsV0FBVztTQUNsQixDQUFDLENBQUE7UUFDRixNQUFNLGFBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVoQixZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNqQixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxXQUFXO1NBQ2xCLENBQUMsQ0FBQTtRQUNGLE1BQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWpCLFlBQVksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLFdBQVc7U0FDbEIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFakIsWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUU7WUFDbkIsUUFBUSxFQUFFLEdBQUc7WUFDYixJQUFJLEVBQUUsV0FBVztTQUNsQixDQUFDLENBQUE7UUFDRixNQUFNLGFBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtNQUNqQixDQUFBO0lBRUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFNLENBQUMsRUFBQyxFQUFFOztRQUNuQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNuQixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxXQUFXO1NBQ2xCLENBQUMsQ0FBQTtRQUNGLE1BQU0sYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWpCLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLFdBQVc7U0FDbEIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7TUFDbEIsQ0FBQTtJQUVELE1BQU0sU0FBUyxHQUFHLEdBQVMsRUFBRTs7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDMUIsa0JBQWtCO1lBQ2xCLGtCQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM3QixrQkFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDL0Isa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRTNCLGtCQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRW5DLGdDQUFnQztZQUNoQyxrQkFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDL0Isa0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFBO1lBQy9CLGtCQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUMvQixrQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQTtTQUNoQztRQUVELGtDQUFrQztRQUNsQyxrQkFBVSxDQUFDLFNBQVMsR0FBRztZQUNyQixpQ0FBaUM7Z0JBQy9CLGNBQUcsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDbEMsR0FBRztZQUNMLGlDQUFpQztnQkFDL0IsY0FBRyxDQUFDLDZCQUE2QixDQUFDO2dCQUNsQyxHQUFHO1lBQ0wsaUNBQWlDO2dCQUMvQixjQUFHLENBQUMsNkJBQTZCLENBQUM7Z0JBQ2xDLEdBQUc7WUFDTCxpQ0FBaUM7Z0JBQy9CLGNBQUcsQ0FBQyw2QkFBNkIsQ0FBQztnQkFDbEMsR0FBRztZQUNMLGlDQUFpQztnQkFDL0IsY0FBRyxDQUFDLDZCQUE2QixDQUFDO2dCQUNsQyxHQUFHO1NBQ04sQ0FBQTtNQUNGLENBQUE7SUFFRCxPQUFPO1FBQ0wsT0FBTyxFQUFFO1lBQ1AsR0FBRyxFQUFFLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsR0FBRyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLEVBQUUsa0JBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLEtBQUssRUFBRSxrQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFDRCxVQUFVLEVBQUU7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxrQkFBVSxDQUFDLHFCQUFxQjtZQUN2QyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUk7WUFDZixPQUFPLEVBQUUsa0JBQVUsQ0FBQyx1QkFBdUI7WUFDM0MsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRSxXQUFXO2FBQ2xCO1NBQ0Y7UUFFRCxVQUFVLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25DLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxTQUFTO1NBQ2xCO1FBQ0ssS0FBSzs7O2dCQUNULElBQUksQ0FBQyxjQUFNLENBQUMsUUFBUSxFQUFFO29CQUNwQixjQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtvQkFDdEIsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQTtvQkFFcEIsdUJBQXVCO29CQUN2QixvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFFdkIsc0JBQXNCO29CQUN0QixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUE7b0JBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O3dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ1Ysa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQ3JCLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLGlDQUFpQztnQ0FDL0IsY0FBRyxDQUFDLHlCQUF5QixHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7Z0NBQzNDLEdBQUcsQ0FDTixDQUFBO3lCQUNGO3FCQUNGO29CQUNELGtCQUFVLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQTtvQkFFcEMsYUFBYTtvQkFDYixNQUFNLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDakIsa0JBQVUsQ0FBQyx1QkFBdUIsR0FBRzt3QkFDbkMsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsSUFBSSxFQUFFLFFBQVE7cUJBQ2YsQ0FBQTtvQkFDRCxnQ0FBZ0M7b0JBQ2hDLGlCQUFpQjtvQkFDakIsc0NBQXNDO29CQUN0QyxNQUFNO29CQUNOLElBQUk7b0JBQ0osTUFBTSxhQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ2hCLGtDQUFrQztvQkFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7O3dCQUFFLGtCQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtxQkFBQTtvQkFFM0QsbUJBQW1CO29CQUNuQixNQUFNLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDakIsWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUU7d0JBQ25CLFFBQVEsRUFBRSxJQUFJO3dCQUNkLElBQUksRUFBRSxXQUFXO3FCQUNsQixDQUFDLENBQUE7b0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7d0JBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDVCxZQUFZLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQ0FDbkIsUUFBUSxFQUFFLElBQUk7Z0NBQ2QsSUFBSSxFQUFFLFdBQVc7NkJBQ2xCLENBQUMsQ0FBQTt5QkFDSDtxQkFDRjtvQkFDRCxNQUFNLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFFakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7d0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDVixZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQ0FDakIsUUFBUSxFQUFFLElBQUk7Z0NBQ2QsSUFBSSxFQUFFLFdBQVc7NkJBQ2xCLENBQUMsQ0FBQTt5QkFDSDtxQkFDRjtvQkFFRCxnQkFBZ0I7b0JBQ2hCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFFL0MsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDckIseUNBQXlDO3dCQUN6QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTt3QkFDeEMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUE7d0JBQ25ELDJDQUEyQzt3QkFDM0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDdkMsdURBQXVEO3dCQUN2RCxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUMvQixJQUFJLFNBQVMsR0FDWCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7NEJBQ3ZCLEdBQUc7NEJBQ0gsSUFBSSxHQUFHLGdCQUFnQjs0QkFDdkIsQ0FBQyxDQUFBLENBQUMsSUFBSTt3QkFDUixJQUFJLFVBQVUsR0FDWixNQUFNLENBQUMsV0FBVzs0QkFDbEIsWUFBWSxDQUFDLE1BQU07NEJBQ25CLEdBQUcsR0FBRyw2QkFBNkI7NEJBQ25DLEVBQUUsR0FBRyw4QkFBOEI7NEJBQ25DLEVBQUUsR0FBRyxvQkFBb0I7NEJBQ3pCLEdBQUcsQ0FBQSxDQUFDLElBQUk7d0JBRVYsa0JBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUMvQixrQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUE7d0JBQy9CLGtCQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQTt3QkFDeEMsa0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUE7cUJBQ3ZDO29CQUVELE1BQU0sYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUVkLGdCQUFnQjtvQkFDaEIsa0JBQVUsQ0FBQyx1QkFBdUIsR0FBRzt3QkFDbkMsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsSUFBSSxFQUFFLFFBQVE7cUJBQ2YsQ0FBQTtvQkFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOzt3QkFDMUIsa0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7cUJBQ3BDO29CQUNELE1BQU0sYUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUVoQixpQkFBaUI7b0JBQ2pCLFNBQVMsRUFBRSxDQUFBO29CQUVYLDRCQUFpQixDQUFDLENBQUMsRUFBRSxjQUFHLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUE7b0JBQ2pFLGNBQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO2lCQUN4Qjs7U0FDRjtLQUNGLENBQUE7Q0FDRixDQUFBO0FBRVksUUFBQSxlQUFlLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQy9DLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFBO0lBRTlELE9BQU87UUFDTCxPQUFPLEVBQUU7WUFDUCxHQUFHLEVBQUUsRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLEVBQUU7WUFDUCxHQUFHLEVBQUUsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxrQkFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUN4QyxLQUFLLEVBQUUsa0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsa0JBQVUsQ0FBQyxxQkFBcUI7WUFDdkMsT0FBTyxFQUFFLGtCQUFVLENBQUMsdUJBQXVCO1lBQzNDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSTtZQUNmLEdBQUcsRUFBRTtnQkFDSCxJQUFJLEVBQUUsV0FBVzthQUNsQjtTQUNGO1FBQ0QsVUFBVSxFQUNSLGlDQUFpQztZQUNqQyxjQUFHLENBQUMsNkJBQTZCLENBQUM7WUFDbEMsR0FBRztLQUNOLENBQUE7Q0FDRixDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDaEQsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUE7SUFFOUQsT0FBTztRQUNMLFVBQVUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxrQkFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEMsS0FBSyxFQUFFLGtCQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFLLEVBQUUsa0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxrQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDbkM7UUFDRCxVQUFVLEVBQUU7WUFDVixPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFZO2dCQUN0QixJQUFJLEVBQUUsV0FBVzthQUNsQjtZQUNELEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUscUJBQVksR0FBRyxHQUFHO2dCQUM1QixJQUFJLEVBQUUsUUFBUTthQUNmO1lBRUQsS0FBSyxFQUFFO2dCQUNMLFFBQVEsRUFBRSxxQkFBWTtnQkFDdEIsSUFBSSxFQUFFLFdBQVc7YUFDbEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLHFCQUFZO2dCQUN0QixJQUFJLEVBQUUsV0FBVzthQUNsQjtTQUNGO0tBQ0YsQ0FBQTtDQUNGLENBQUE7QUFFRCxXQUFXO0FBQ0UsUUFBQSxjQUFjLEdBQWEsS0FBSyxDQUFDLEVBQUU7O0lBQzlDLE9BQU87UUFDTCxPQUFPLEVBQUUsY0FBTSxDQUFDLElBQUksSUFBSSxpQkFBaUI7UUFDekMsZUFBZSxFQUFFLGNBQU0sQ0FBQyxlQUFlO1FBQ3ZDLGdCQUFnQixFQUFFLGdCQUFRLENBQUMsZ0JBQWdCO0tBQzVDLENBQUE7Q0FDRixDQUFBO0FBRUQsU0FBUztBQUNULElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQTtBQUNOLFFBQUEsWUFBWSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUM1QyxPQUFPO1FBQ0wsT0FBTyxFQUFFLGNBQU0sQ0FBQyxJQUFJLElBQUksUUFBUTtLQUNqQyxDQUFBO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUN0QyxJQUFJLEdBQUcsR0FBRyxjQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBQ25ELE9BQU87UUFDTCxLQUFLLEVBQUUsQ0FBQztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsYUFBYSxDQUFDLEtBQUs7O1lBQ2pCLFdBQVcsR0FBRyxLQUFLLENBQUE7U0FDcEI7UUFDSyxPQUFPOzs7Z0JBQ1gsSUFBSSxDQUFDLGNBQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ3BCLGNBQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO29CQUN0QixNQUFNLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLDJCQUEyQjtvQkFDMUMsNEJBQWlCLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7b0JBQzNELGNBQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO2lCQUN4Qjs7U0FDRjtLQUNGLENBQUE7Q0FDRixDQUFBO0FBRVksUUFBQSxjQUFjLEdBQWEsR0FBRyxFQUFFOztJQUMzQyxPQUFPO1FBQ0wsSUFBSSxFQUFFLGNBQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWE7UUFDckQsU0FBUyxFQUFFLGFBQWE7UUFDeEIsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxVQUFVLEVBQUU7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRixDQUFBO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsZUFBZSxHQUFhLEdBQUcsRUFBRTs7SUFDNUMsSUFBSSxZQUFZLEdBQUcsY0FBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO0lBQ3hELE9BQU87UUFDTCxJQUFJLEVBQUUsY0FBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWE7UUFDcEUsU0FBUyxFQUFFLGFBQWE7UUFDeEIsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxVQUFVLEVBQUU7WUFDVixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRixDQUFBO0NBQ0YsQ0FBQTtBQUVELGdCQUFnQjtBQUNILFFBQUEsYUFBYSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUM3QyxPQUFPO1FBQ0wsT0FBTyxFQUFFLGNBQU0sQ0FBQyxJQUFJLElBQUksU0FBUztLQUNsQyxDQUFBO0NBQ0YsQ0FBQSJ9

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = __webpack_require__(/*! framer/resource */ "framer/resource");
const datas_1 = __webpack_require__(/*! ./datas */ "./code/datas/index.js");
const handlers_1 = __webpack_require__(/*! ./handlers */ "./code/handlers/index.js");
const consts_1 = __webpack_require__(/*! ./shared/consts */ "./code/shared/consts.js");
const utils_1 = __webpack_require__(/*! ./shared/utils */ "./code/shared/utils.js");
var dataLoaded = false;
exports.Main = props => {
    window["__checkBudget__"]();
    window.log = consts_1.isProd ? () => void 0 : console.log;
    // Init DataLoad Once
    if (!dataLoaded) {
        dataLoaded = true;
        handlers_1.initDataLoad();
    }
    return {};
};
/**
 * CompanyInfo
 */
exports.CompanyInfo = props => {
    window["__checkBudget__"]();
    return {
        visible: datas_1.company.visible,
        style: {
            cursor: 'pointer',
        },
    };
};
exports.CompanyLogo = props => {
    window["__checkBudget__"]();
    return {
        background: datas_1.company.logo,
    };
};
exports.CompanyName = props => {
    window["__checkBudget__"]();
    return {
        text: datas_1.company.name,
        width: 171,
    };
};
exports.CompanySector = props => {
    window["__checkBudget__"]();
    return {
        text: datas_1.company.sector,
        width: 171,
    };
};
exports.CompanyInfoButton = props => {
    window["__checkBudget__"]();
    return {
        style: {
            cursor: 'pointer',
        },
        onTap() {
            window["__checkBudget__"]();
            datas_1.company.visible = true;
        },
    };
};
exports.Overlay = props => {
    window["__checkBudget__"]();
    return {
        visible: datas_1.company.visible,
        onTap() {
            window["__checkBudget__"]();
            datas_1.company.visible = false;
        },
    };
};
exports.ChatList = props => {
    window["__checkBudget__"]();
    return {
        chatList: datas_1.chats.list,
        answerResult: datas_1.answer.result,
    };
};
/**
 * Answer Types
 */
exports.AnswerTypes = props => {
    window["__checkBudget__"]();
    return {
        style: {
            // add border inside without moving child
            boxShadow: 'inset -2.5px 0px 0px 0px #ebebeb, inset 2.5px 0px 0px 0px #ebebeb',
        },
    };
};
exports.AnswerEmoji = props => {
    window["__checkBudget__"]();
    return {
        visible: datas_1.answer.type == 'Emoji Rating',
        currentQuestion: datas_1.answer.currentQuestion,
    };
};
// Likert
exports.AnswerLikert = props => {
    window["__checkBudget__"]();
    return {
        visible: datas_1.answer.type == 'Likert',
        currentQuestion: datas_1.answer.currentQuestion,
    };
};
exports.Likert = props => {
    window["__checkBudget__"]();
    return {
        initial: {
            top: 124 + 44,
            opacity: 0,
        },
        animate: {
            top: datas_1.likert.top,
            opacity: datas_1.likert.opacity,
        },
        transition: datas_1.likert.transition,
    };
};
exports.LikertCircleLarge = props => {
    window["__checkBudget__"]();
    let i = props.children[0].props.children[0].props.currentIndex;
    return {
        style: {
            background: 'linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289)',
        },
        initial: {
            scale: 0,
        },
        animate: {
            scale: datas_1.likert.largeScale[i],
        },
        transition: {
            scale: datas_1.likert.largeScaleTransition,
        },
    };
};
exports.LikertCircleMedium = props => {
    window["__checkBudget__"]();
    let i = props.children[0].props.children[0].props.currentIndex;
    return {
        style: {
            background: 'linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289)',
        },
        initial: {
            scale: 0,
        },
        animate: {
            scale: datas_1.likert.mediumScale[i],
        },
        transition: {
            scale: datas_1.likert.mediumScaleTransition,
        },
    };
};
exports.LikertCircleSmall = props => {
    window["__checkBudget__"]();
    let i = props.children[0].props.children[0].props.currentIndex;
    return {
        style: {
            background: 'linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289)',
        },
        initial: {
            scale: 0,
        },
        animate: {
            scale: datas_1.likert.smallScale[i],
        },
        transition: {
            scale: datas_1.likert.smallScaleTransition,
        },
    };
};
exports.LikertDesc = props => {
    window["__checkBudget__"]();
    return {
        hey: datas_1.likert.descOpacity,
    };
};
// Star Rating
exports.AnswerStarRating = props => {
    window["__checkBudget__"]();
    return {
        visible: datas_1.answer.type == 'Star Rating',
    };
};
exports.StarOption = props => {
    window["__checkBudget__"]();
    let i = props.children[0].props.children[0].props.currentIndex;
    const animateScale = (i, to, transition) => __awaiter(void 0, void 0, void 0, function* () {
        window["__checkBudget__"]();
        datas_1.starRating.optionScaleTransition = transition;
        datas_1.starRating.optionScale[i] = to;
    });
    const animateSelectedScale = (i) => __awaiter(void 0, void 0, void 0, function* () {
        window["__checkBudget__"]();
        animateScale(i, 0.703, {
            duration: 0.24,
            ease: 'easeInOut',
        });
        yield utils_1.sleep(0.24);
        animateScale(i, 1.3, {
            duration: 0.1,
            ease: 'easeInOut',
        });
        yield utils_1.sleep(0.1);
        animateScale(i, 1, {
            duration: 0.26,
            ease: 'easeInOut',
        });
        yield utils_1.sleep(0.26);
        animateScale(i, 1.3, {
            duration: 0.17,
            ease: 'easeInOut',
        });
        yield utils_1.sleep(0.17);
        animateScale(i, 1.3, {
            duration: 0.2,
            ease: 'easeInOut',
        });
        yield utils_1.sleep(0.2);
    });
    const animateOthersScale = (i) => __awaiter(void 0, void 0, void 0, function* () {
        window["__checkBudget__"]();
        animateScale(i, 0.8, {
            duration: 0.34,
            ease: 'easeInOut',
        });
        yield utils_1.sleep(0.34);
        animateScale(i, 1, {
            duration: 0.34,
            ease: 'easeInOut',
        });
        yield utils_1.sleep(0.34);
    });
    const initStars = () => __awaiter(void 0, void 0, void 0, function* () {
        window["__checkBudget__"]();
        for (let i = 0; i < 5; i++) {
            window["__checkBudget__"]();
            // reset animation
            datas_1.starRating.optionScale[i] = 1;
            datas_1.starRating.optionOpacity[i] = 1;
            datas_1.starRating.optionTop[i] = 0;
            datas_1.starRating.optionBaseOpacity[i] = 1;
            // reset selected result postion
            datas_1.starRating.resultOpacity[i] = 0;
            datas_1.starRating.resultWidth[i] = 298;
            datas_1.starRating.resultBottom[i] = 21;
            datas_1.starRating.resultRight[i] = -32;
        }
        // reset star backgrounds (images)
        datas_1.starRating.optionImg = [
            'center / contain no-repeat url(' +
                resource_1.url('../images/start-default.png') +
                ')',
            'center / contain no-repeat url(' +
                resource_1.url('../images/start-default.png') +
                ')',
            'center / contain no-repeat url(' +
                resource_1.url('../images/start-default.png') +
                ')',
            'center / contain no-repeat url(' +
                resource_1.url('../images/start-default.png') +
                ')',
            'center / contain no-repeat url(' +
                resource_1.url('../images/start-default.png') +
                ')',
        ];
    });
    return {
        initial: {
            top: 44,
            opacity: 0,
        },
        animate: {
            top: datas_1.starRating.optionTop[i],
            opacity: datas_1.starRating.optionOpacity[i],
            scale: datas_1.starRating.optionScale[i],
        },
        transition: {
            duration: 0.47,
            scale: datas_1.starRating.optionScaleTransition,
            delay: i * 0.04,
            opacity: datas_1.starRating.optionOpacityTransition,
            top: {
                ease: 'easeInOut',
            },
        },
        background: datas_1.starRating.optionImg[i],
        style: {
            cursor: 'pointer',
        },
        onTap() {
            return __awaiter(this, void 0, void 0, function* () {
                window["__checkBudget__"]();
                if (!datas_1.answer.clicking) {
                    datas_1.answer.clicking = true;
                    log('onTap! - i', i);
                    // animate clicked star
                    animateSelectedScale(i);
                    // fill selected stars
                    var newOptionImgs = [];
                    for (let j = 0; j < 5; j++) {
                        window["__checkBudget__"]();
                        if (j <= i) {
                            animateOthersScale(j);
                            newOptionImgs.push('center / contain no-repeat url(' +
                                resource_1.url('../images/start-active-' + j + '.png') +
                                ')');
                        }
                    }
                    datas_1.starRating.optionImg = newOptionImgs;
                    // hide fills
                    yield utils_1.sleep(0.73);
                    datas_1.starRating.optionOpacityTransition = {
                        duration: 0.3,
                        ease: 'linear',
                    };
                    // for (let k = 0; k < 5; k++) {
                    //   if (k < i) {
                    //     starRating.optionOpacity[k] = 0
                    //   }
                    // }
                    yield utils_1.sleep(0.2);
                    // starRating.optionOpacity[i] = 0
                    for (let k = 0; k < 5; k++) {
                        window["__checkBudget__"]();
                        datas_1.starRating.optionOpacity[k] = 0;
                    }
                    // last spring anim
                    yield utils_1.sleep(0.27);
                    animateScale(i, 0.8, {
                        duration: 0.34,
                        ease: 'easeInOut',
                    });
                    for (let l = 0; l < 5; l++) {
                        window["__checkBudget__"]();
                        if (l < i) {
                            animateScale(l, 0.8, {
                                duration: 0.34,
                                ease: 'easeInOut',
                            });
                        }
                    }
                    yield utils_1.sleep(0.34);
                    for (let p = 0; p < 5; p++) {
                        window["__checkBudget__"]();
                        if (p <= i) {
                            animateScale(p, 1, {
                                duration: 0.37,
                                ease: 'easeInOut',
                            });
                        }
                    }
                    // show resultBG
                    var target = document.querySelectorAll('.chat');
                    if (target.length > 2) {
                        // calculate of left, bottom target point
                        let lastChat = target[target.length - 1];
                        var lastChatRect = lastChat.getBoundingClientRect();
                        // var pad = (window.innerWidth * 0.09) / 2
                        var pad = (window.innerWidth - 326) / 2;
                        // var gutter = (window.innerWidth * 0.91 - 52 * 5) / 4
                        var gutter = (326 - 52 * 5) / 4;
                        var rightMove = (4 - i) * (52 + gutter) +
                            pad -
                            15.5 - // minus padding
                            3; // ?
                        var bottomMove = window.innerHeight -
                            lastChatRect.bottom -
                            139 - // minus distance from bottom
                            12 - // add last chat bottom-margin
                            15 - // add result height
                            3.5; // ?
                        datas_1.starRating.resultOpacity[i] = 1;
                        datas_1.starRating.resultWidth[i] = 115;
                        datas_1.starRating.resultBottom[i] += bottomMove;
                        datas_1.starRating.resultRight[i] = -rightMove;
                    }
                    yield utils_1.sleep(2);
                    // answerEndAnim
                    datas_1.starRating.optionOpacityTransition = {
                        duration: 0.5,
                        ease: 'linear',
                    };
                    for (let k = 0; k < 5; k++) {
                        window["__checkBudget__"]();
                        datas_1.starRating.optionBaseOpacity[k] = 0;
                    }
                    yield utils_1.sleep(0.5);
                    // Init Animation
                    initStars();
                    handlers_1.handleAnswerClick(i, resource_1.url('../images/start-answer-' + i + '.png'));
                    datas_1.answer.clicking = false;
                }
            });
        },
    };
};
exports.StarOptionsBase = props => {
    window["__checkBudget__"]();
    let i = props.children[0].props.children[0].props.currentIndex;
    return {
        initial: {
            top: 44,
            opacity: 0,
        },
        animate: {
            top: datas_1.starRating.optionTop[i],
            opacity: datas_1.starRating.optionBaseOpacity[i],
            scale: datas_1.starRating.optionScale[i],
        },
        transition: {
            duration: 0.47,
            scale: datas_1.starRating.optionScaleTransition,
            opacity: datas_1.starRating.optionOpacityTransition,
            delay: i * 0.04,
            top: {
                ease: 'easeInOut',
            },
        },
        background: 'center / contain no-repeat url(' +
            resource_1.url('../images/start-default.png') +
            ')',
    };
};
exports.StarOptionResult = props => {
    window["__checkBudget__"]();
    let i = props.children[0].props.children[0].props.currentIndex;
    return {
        background: datas_1.starRating.resultBG[i],
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: datas_1.starRating.resultOpacity[i],
            width: datas_1.starRating.resultWidth[i],
            right: datas_1.starRating.resultRight[i],
            bottom: datas_1.starRating.resultBottom[i],
        },
        transition: {
            opacity: {
                duration: consts_1.baseDuration,
                ease: 'easeInOut',
            },
            width: {
                duration: consts_1.baseDuration - 0.2,
                ease: 'linear',
            },
            right: {
                duration: consts_1.baseDuration,
                ease: 'easeInOut',
            },
            bottom: {
                duration: consts_1.baseDuration,
                ease: 'easeInOut',
            },
        },
    };
};
// Multiple
exports.AnswerMultiple = props => {
    window["__checkBudget__"]();
    return {
        visible: datas_1.answer.type == 'Multiple Choice',
        currentQuestion: datas_1.answer.currentQuestion,
        coverTextVisible: datas_1.multiple.coverTextVisible,
    };
};
// Slider
var optionValue = 0;
exports.AnswerSlider = props => {
    window["__checkBudget__"]();
    return {
        visible: datas_1.answer.type == 'Slider',
    };
};
exports.Slider = props => {
    window["__checkBudget__"]();
    var max = datas_1.answer.currentQuestion.choices.length - 1;
    return {
        value: 0,
        max: max,
        onValueChange(value) {
            window["__checkBudget__"]();
            optionValue = value;
        },
        confirm() {
            return __awaiter(this, void 0, void 0, function* () {
                window["__checkBudget__"]();
                if (!datas_1.answer.clicking) {
                    datas_1.answer.clicking = true;
                    yield utils_1.sleep(1); // wait for cursor anim end
                    handlers_1.handleAnswerClick(parseInt(optionValue + 0.05 * max), null);
                    datas_1.answer.clicking = false;
                }
            });
        },
    };
};
exports.SliderDescLeft = () => {
    window["__checkBudget__"]();
    return {
        text: datas_1.answer.currentQuestion.choices[0].koDescription,
        className: 'slider-desc',
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        transition: {
            duration: 0.54,
            ease: 'linear',
        },
    };
};
exports.SliderDescRight = () => {
    window["__checkBudget__"]();
    var choiceLength = datas_1.answer.currentQuestion.choices.length;
    return {
        text: datas_1.answer.currentQuestion.choices[choiceLength - 1].koDescription,
        className: 'slider-desc',
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        transition: {
            duration: 0.54,
            ease: 'linear',
        },
    };
};
// AnswerComment
exports.AnswerComment = props => {
    window["__checkBudget__"]();
    return {
        visible: datas_1.answer.type == 'Comment',
    };
};
exports.__info__ = [{ "name": "Main", "type": "override" }, { "name": "CompanyInfo", "type": "override" }, { "name": "CompanyLogo", "type": "override" }, { "name": "CompanyName", "type": "override" }, { "name": "CompanySector", "type": "override" }, { "name": "CompanyInfoButton", "type": "override" }, { "name": "Overlay", "type": "override" }, { "name": "ChatList", "type": "override" }, { "name": "AnswerTypes", "type": "override" }, { "name": "AnswerEmoji", "type": "override" }, { "name": "AnswerLikert", "type": "override" }, { "name": "Likert", "type": "override" }, { "name": "LikertCircleLarge", "type": "override" }, { "name": "LikertCircleMedium", "type": "override" }, { "name": "LikertCircleSmall", "type": "override" }, { "name": "LikertDesc", "type": "override" }, { "name": "AnswerStarRating", "type": "override" }, { "name": "StarOption", "type": "override" }, { "name": "StarOptionsBase", "type": "override" }, { "name": "StarOptionResult", "type": "override" }, { "name": "AnswerMultiple", "type": "override" }, { "name": "AnswerSlider", "type": "override" }, { "name": "Slider", "type": "override" }, { "name": "SliderDescLeft", "type": "override" }, { "name": "SliderDescRight", "type": "override" }, { "name": "AnswerComment", "type": "override" }];


/***/ }),

/***/ "./code/AppHelmet.tsx":
/*!****************************!*\
  !*** ./code/AppHelmet.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwSGVsbWV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHBIZWxtZXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLCtDQUFxQztBQUNyQyx5REFBcUQ7QUFDckQsc0RBQXFEO0FBRXJELHNDQUFzQztBQUN0QyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUE7QUFFdkIsTUFBTSxXQUFXLEdBQUcscUNBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCcEMsQ0FBQTtBQUtELE1BQU0sTUFBTSxHQUFHLENBQ2Isb0JBQUMscUJBQU07SUFFTCw4QkFDRSxJQUFJLEVBQUMsZ0VBQWdFLEVBQ3JFLEdBQUcsRUFBQyxZQUFZLEVBQ2hCLElBQUksRUFBQyxVQUFVLEdBQ2YsQ0FDSyxDQUNWLENBQUE7QUFFRCxNQUFhLFNBQVUsU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFPbkQsTUFBTTs7UUFDSixPQUFPLENBQ0w7WUFDRyxNQUFNO1lBQ1Asb0JBQUMsV0FBVyxPQUFHLENBQ1gsQ0FDUCxDQUFBO0tBQ0Y7O0FBZEgsOEJBZUM7QUFkQyx5QkFBeUI7QUFDbEIsc0JBQVksR0FBRyxFQUFFLENBQUE7QUFFeEIsZ0NBQWdDO0FBQ3pCLDBCQUFnQixHQUFxQixFQUFFLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_helmet_1 = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
const styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
const smoothscroll = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
// kick off the smoothscroll polyfill!
smoothscroll.polyfill();
const GlobalStyle = styled_components_1.createGlobalStyle `

  .slider-desc {
    /* font styles */
    span[data-text='true'] {
      font-family: 'Spoqa Han Sans';
      font-weight: bold;
      line-height: 1.22;
      font-size: 11.75px;
      /* white-space: nowrap; */
    }
    /* vertically center */
    div[data-contents='true'] {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
const helmet = (React.createElement(react_helmet_1.Helmet, null,
    React.createElement("link", { href: "https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css", rel: "stylesheet", type: "text/css" })));
class AppHelmet extends React.Component {
    render() {
        window["__checkBudget__"]();
        return (React.createElement("div", null,
            helmet,
            React.createElement(GlobalStyle, null)));
    }
}
exports.AppHelmet = AppHelmet;
// Set default properties
AppHelmet.defaultProps = {};
// Items shown in property panel
AppHelmet.propertyControls = {};
exports.__info__ = [{ "name": "AppHelmet", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Chat.tsx":
/*!***********************!*\
  !*** ./code/Chat.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQ2hhdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXNEO0FBQ3RELG9EQUE0QztBQUk1QyxNQUFhLElBQUssU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFDOUMsTUFBTTs7UUFDSixPQUFPLG9CQUFDLGtCQUFRLG9CQUFLLElBQUksQ0FBQyxLQUFLLEVBQUksQ0FBQTtLQUNwQzs7QUFISCxvQkFZQztBQVBRLGlCQUFZLEdBQVU7SUFDM0IsSUFBSSxFQUFFLGdCQUFnQjtDQUN2QixDQUFBO0FBRU0scUJBQWdCLEdBQTRCO0lBQ2pELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0NBQ2xELENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const ChatComp_1 = __webpack_require__(/*! ./components/ChatComp */ "./code/components/ChatComp/index.js");
class Chat extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(ChatComp_1.default, Object.assign({}, this.props));
    }
}
exports.Chat = Chat;
Chat.defaultProps = {
    text: "Hello Chatbot!",
};
Chat.propertyControls = {
    text: { type: framer_1.ControlType.String, title: "Text" },
};
exports.__info__ = [{ "name": "Chat", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/ChatList.tsx":
/*!***************************!*\
  !*** ./code/ChatList.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NoYXRMaXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5Qiw0REFBb0Q7QUFHcEQsTUFBYSxRQUFTLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBQ2xELE1BQU07O1FBQ0osT0FBTyxvQkFBQyxzQkFBWSxvQkFBSyxJQUFJLENBQUMsS0FBSyxFQUFJLENBQUE7S0FDeEM7O0FBSEgsNEJBUUM7QUFIUSxxQkFBWSxHQUFVLEVBQUUsQ0FBQTtBQUV4Qix5QkFBZ0IsR0FBNEIsRUFBRSxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ChatListComp_1 = __webpack_require__(/*! ./components/ChatListComp */ "./code/components/ChatListComp/index.js");
class ChatList extends React.Component {
    render() {
        window["__checkBudget__"]();
        return React.createElement(ChatListComp_1.default, Object.assign({}, this.props));
    }
}
exports.ChatList = ChatList;
ChatList.defaultProps = {};
ChatList.propertyControls = {};
exports.__info__ = [{ "name": "ChatList", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Cursor.tsx":
/*!*************************!*\
  !*** ./code/Cursor.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3Vyc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9DdXJzb3IudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE0QztBQUU1QyxTQUFnQixNQUFNOztJQUNwQixNQUFNLElBQUksR0FBRyxxQkFBWSxFQUFFLENBQUE7SUFDM0IsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBQ3RCLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQTtJQUV0QixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUE7SUFFckIsTUFBTSxVQUFVLEdBQUcsQ0FBTSxLQUFLLEVBQUMsRUFBRTs7UUFDL0IsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUMsU0FBUyxHQUFHLElBQUksQ0FBQTtZQUNoQixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDVCxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsQ0FBQztnQkFDbEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLENBQUM7Z0JBQ25DLFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUUsQ0FBQztpQkFDWjthQUNGLENBQUMsQ0FBQTtZQUVGLGdCQUFnQjtZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNULEtBQUssRUFBRSxJQUFJO2dCQUNYLFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUUsSUFBSTtpQkFDZjthQUNGLENBQUMsQ0FBQTtZQUVGLGtCQUFrQjtZQUNsQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ2YsU0FBUyxFQUNQLHdFQUF3RTtnQkFDMUUsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLFFBQVEsRUFBRSxJQUFJO29CQUNkLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0YsQ0FBQyxDQUFBO1lBRUYsY0FBYztZQUNkLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDZixLQUFLLEVBQUUsQ0FBQztnQkFDUixTQUFTLEVBQ1AsUUFBUTtvQkFDUixXQUFXLEdBQUcsQ0FBQztvQkFDZixpRUFBaUU7Z0JBQ25FLFdBQVcsRUFBRSxXQUFXLEdBQUcsQ0FBQztnQkFDNUIsVUFBVSxFQUFFO29CQUNWLFFBQVEsRUFBRSxDQUFDO2lCQUNaO2FBQ0YsQ0FBQyxDQUFBO1lBRUYsU0FBUyxHQUFHLEtBQUssQ0FBQTtTQUNsQjtNQUNGLENBQUE7SUFFRCxtQkFBbUI7SUFDbkIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRTs7UUFDOUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNuQixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDbEIsQ0FBQyxDQUFBO0lBRUYsb0JBQW9CO0lBQ3BCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDdkIsT0FBTyxFQUNQLEtBQUssQ0FBQyxFQUFFOztRQUNOLGdDQUFnQztRQUNoQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDbEIsRUFDRCxLQUFLLENBQ04sQ0FBQTtJQUVELE9BQU8sQ0FDTCxvQkFBQyxjQUFLLElBQ0osT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLENBQUM7U0FDVCxFQUNELE9BQU8sRUFBRSxJQUFJLEVBQ2IsSUFBSSxFQUFFLFdBQVcsRUFDakIsVUFBVSxFQUFDLGFBQWEsRUFDeEIsTUFBTSxFQUFFLEdBQUc7UUFDWCw4QkFBOEI7UUFDOUIsTUFBTSxFQUFFLFdBQVcsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEVBQzFDLEtBQUssRUFBRTtZQUNMLCtCQUErQjtZQUMvQixTQUFTLEVBQ1AsUUFBUTtnQkFDUixXQUFXLEdBQUcsQ0FBQztnQkFDZixpRUFBaUU7U0FDcEUsR0FDRCxDQUNILENBQUE7Q0FDRjtBQTNGRCx3QkEyRkMifQ==

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Cursor() {
    window["__checkBudget__"]();
    const anim = framer_1.useAnimation();
    const cursorWidth = 90;
    const strokeWidth = 95;
    var animating = false;
    const cursorAnim = (event) => __awaiter(this, void 0, void 0, function* () {
        window["__checkBudget__"]();
        if (event.pageX && event.pageY && !animating) {
            animating = true;
            // move position
            anim.start({
                top: event.pageY - cursorWidth / 2,
                left: event.pageX - cursorWidth / 2,
                transition: {
                    duration: 0,
                },
            });
            // animate scale
            anim.start({
                scale: 0.55,
                transition: {
                    duration: 0.54,
                },
            });
            // animate strokes
            yield anim.start({
                boxShadow: '0 0 0 0px rgba(255, 255, 255, 1), 7px 7px 23px 0px rgba(0, 0, 0, 0.12)',
                borderWidth: 0,
                transition: {
                    duration: 0.54,
                    delay: 0.23,
                },
            });
            // init values
            yield anim.start({
                scale: 0,
                boxShadow: '0 0 0 ' +
                    strokeWidth / 2 +
                    'px rgba(255, 255, 255, 1), 7px 7px 23px 0px rgba(0, 0, 0, 0.12)',
                borderWidth: strokeWidth / 2,
                transition: {
                    duration: 0,
                },
            });
            animating = false;
        }
    });
    // for mobile touch
    document.addEventListener('touchstart', event => {
        window["__checkBudget__"]();
        log('event', event);
        cursorAnim(event);
    });
    // for desktop click
    document.addEventListener('click', event => {
        window["__checkBudget__"]();
        // log('event - (click)', event)
        cursorAnim(event);
    }, false);
    return (React.createElement(framer_1.Frame, { initial: {
            scale: 0,
        }, animate: anim, size: cursorWidth, background: "transparent", radius: 100, 
        // use border as inline stroke
        border: strokeWidth / 2 + 'px solid white', style: {
            // use shadow as outline stroke
            boxShadow: '0 0 0 ' +
                strokeWidth / 2 +
                'px rgba(255, 255, 255, 1), 7px 7px 23px 0px rgba(0, 0, 0, 0.12)',
        } }));
}
exports.Cursor = Cursor;
exports.__info__ = [{ "name": "Cursor", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE0RDtBQUU1RCxNQUFNLElBQUksR0FBRyxhQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxtQkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxtQkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUV2SCxRQUFBLEtBQUssR0FBYSxHQUFHLEVBQUU7O0lBQ2hDLE9BQU87UUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsS0FBSzs7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNuQixnQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ2hDO0tBQ0osQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLE1BQU0sR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRWpDLE9BQU87UUFDSCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsS0FBSzs7WUFDRCxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNwRCxPQUFPLEVBQUUsR0FBRztnQkFDWixRQUFRLEVBQUUsRUFBRTthQUNmLENBQUMsQ0FBQTtTQUNMO0tBQ0osQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLElBQUksR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRS9CLE9BQU87UUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDckIsS0FBSzs7WUFDRCxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUN2QztLQUNKLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxVQUFVLEdBQWEsR0FBRyxFQUFFOztJQUNyQyxPQUFPO1FBQ0gsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO0tBQzVCLENBQUE7Q0FDSixDQUFBO0FBRVksUUFBQSxTQUFTLEdBQWEsR0FBRyxFQUFFOztJQUNwQyxPQUFPO1FBQ0gsS0FBSzs7WUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1lBQzFCLGdCQUFPLENBQUMsTUFBTSxDQUNWLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDN0I7Z0JBQ0ksU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCLEVBQ0QsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FDakMsQ0FBQTtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUE7U0FDeEI7S0FDSixDQUFBO0NBQ0osQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0), rotationY: framer_1.Animatable(0) });
exports.Scale = () => {
    window["__checkBudget__"]();
    return {
        scale: data.scale,
        onTap() {
            window["__checkBudget__"]();
            data.scale.set(0.6);
            framer_1.animate.spring(data.scale, 1);
        },
    };
};
exports.Rotate = props => {
    window["__checkBudget__"]();
    data.rotation.set(props.rotation);
    return {
        rotation: data.rotation,
        onTap() {
            window["__checkBudget__"]();
            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {
                tension: 250,
                friction: 20,
            });
        },
    };
};
exports.Fade = props => {
    window["__checkBudget__"]();
    data.opacity.set(props.opacity);
    return {
        opacity: data.opacity,
        onTap() {
            window["__checkBudget__"]();
            framer_1.animate.linear(data.opacity, 0, 0.2);
        },
    };
};
exports.FlipOutput = () => {
    window["__checkBudget__"]();
    return {
        rotationY: data.rotationY,
    };
};
exports.FlipInput = () => {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            const toggle = data.toggle;
            framer_1.animate.spring({ rotationY: data.rotationY }, {
                rotationY: toggle ? 360 : 0,
            }, { tension: 200, friction: 20 });
            data.toggle = !toggle;
        },
    };
};
exports.__info__ = [{ "name": "Scale", "type": "override" }, { "name": "Rotate", "type": "override" }, { "name": "Fade", "type": "override" }, { "name": "FlipOutput", "type": "override" }, { "name": "FlipInput", "type": "override" }];


/***/ }),

/***/ "./code/Preview_Loaction.tsx":
/*!***********************************!*\
  !*** ./code/Preview_Loaction.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldmlld19Mb2FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUHJldmlld19Mb2FjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsMENBQXlDO0FBRXpDLHlCQUF5QjtBQUN6Qiw0Q0FBNEM7QUFFNUMsU0FBZ0IsZ0JBQWdCOztJQUM5QixPQUFPLENBQ0wsNkJBQ0UsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLE1BQU07WUFDYixVQUFVLEVBQUUsZ0JBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSztTQUMxQztRQUVEO1lBQ0csUUFBUSxDQUFDLElBQUk7O1lBQUssZ0JBQVEsQ0FDdEIsQ0FDSCxDQUNQLENBQUE7Q0FDRjtBQWJELDRDQWFDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const utils_1 = __webpack_require__(/*! ./shared/utils */ "./code/shared/utils.js");
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
function Preview_Loaction() {
    window["__checkBudget__"]();
    return (React.createElement("div", { style: {
            width: '100%',
            background: utils_1.isCanvas > 0 ? 'blue' : 'red',
        } },
        React.createElement("span", null,
            location.href,
            " + ",
            utils_1.isCanvas)));
}
exports.Preview_Loaction = Preview_Loaction;
exports.__info__ = [{ "name": "Preview_Loaction", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/RemoveFramerXStyles.tsx":
/*!**************************************!*\
  !*** ./code/RemoveFramerXStyles.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVtb3ZlRnJhbWVyWFN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUmVtb3ZlRnJhbWVyWFN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXNEO0FBQ3RELHlEQUFrRTtBQUNsRSwrQ0FBK0M7QUFFL0MsTUFBTSxXQUFXLEdBQUcscUNBQWlCLENBQUE7O0lBRWpDLEtBQUssQ0FBQyxFQUFFLENBQ1IsS0FBSyxDQUFDLFlBQVk7SUFDbEIsdUJBQUcsQ0FBQTs7OztLQUlGO0lBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FDUixLQUFLLENBQUMsZUFBZTtJQUNyQix1QkFBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0REY7SUFDRCxLQUFLLENBQUMsRUFBRSxDQUNSLEtBQUssQ0FBQyxjQUFjO0lBQ3BCLHVCQUFHLENBQUE7Ozs7S0FJRjtJQUNELEtBQUssQ0FBQyxFQUFFLENBQ1IsS0FBSyxDQUFDLFdBQVc7SUFDakIsdUJBQUcsQ0FBQTs7Ozs7Ozs7Ozs7O3FDQVk4QixLQUFLLENBQUMsVUFBVSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQnBEO0lBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FDUixLQUFLLENBQUMsWUFBWTtJQUNsQix1QkFBRyxDQUFBOzs7Ozs7OztLQVFGOztDQUVKLENBQUE7QUFZRCxNQUFhLG1CQUFvQixTQUFRLEtBQUssQ0FBQyxTQUFnQjtJQTJDN0QsTUFBTTs7UUFDSixPQUFPLENBQ0wsb0JBQUMsV0FBVyxJQUNWLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDckMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUMzQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQ3pDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFDbkMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQ2pDLENBQ0gsQ0FBQTtLQUNGOztBQXRESCxrREF1REM7QUF0REMseUJBQXlCO0FBQ2xCLGdDQUFZLEdBQUc7SUFDcEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtJQUNWLFlBQVksRUFBRSxJQUFJO0lBQ2xCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUE7QUFFRCxnQ0FBZ0M7QUFDekIsb0NBQWdCLEdBQXFCO0lBQzFDLFlBQVksRUFBRTtRQUNaLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLGVBQWU7S0FDdkI7SUFFRCxlQUFlLEVBQUU7UUFDZixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxtQkFBbUI7S0FDM0I7SUFDRCxjQUFjLEVBQUU7UUFDZCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxpQkFBaUI7S0FDekI7SUFDRCxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxvQkFBb0I7S0FDNUI7SUFDRCxZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxlQUFlO0tBQ3ZCO0lBRUQsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsYUFBYTtLQUNyQjtDQUNGLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
// import bootstrapGrid from './bootstrap-grid'
const GlobalStyle = styled_components_1.createGlobalStyle `

  ${props => props.removeCursor &&
    styled_components_1.css `
      .__framer-touch-cursor-area {
        cursor: initial !important;
      }
    `}
  ${props => props.removeScaleDown &&
    styled_components_1.css `
      /* @media screen and (max-width: 768px) { */
      .__framer-touch-cursor-area {
        height: 100% !important;
        position: initial !important;
        transform: initial !important;
        > div {
          width: initial !important;
          height: 100% !important;
          position: initial !important;
          transform: initial !important;
          > div {
            width: initial !important;
            height: 100% !important;
            position: initial !important;
            transform: initial !important;
            > div {
              width: initial !important;
              height: 100% !important;
              position: initial !important;
              transform: initial !important;
              > div {
                width: initial !important;
                position: initial !important;
                transform: initial !important;
                > div {
                  /* disable link transition */
                  /* width: initial !important;
                    height: 100% !important;
                    position: initial !important;
                    */
                  left: 50%;
                  transform: translateX(-50%) !important;
                  > div {
                    /* disable link transition */
                    /* width: initial !important;
                      height: 100% !important;
                      position: initial !important;
                    
                      &:first-child {
                        display: none !important;
                      } */
                    /* transform: initial !important; */
                    > div {
                      margin: 0 auto;
                      height: 100% !important;
                      position: initial !important;
                      /* transform: initial !important; */
                      @media screen and (max-width: 768px) {
                        margin: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      /* } */
    `}
  ${props => props.overflowScroll &&
    styled_components_1.css `
      body {
        overflow-y: scroll !important;
      }
    `}
  ${props => props.enableFixed &&
    styled_components_1.css `
      /* @media screen and (max-width: 768px) { */
      .__framer-touch-cursor-area {
        > div {
          > div {
            > div {
              will-change: initial !important;
              > div {
                > div {
                  will-change: initial !important;
                  transform: initial !important;
                  overflow: visible !important;
                  left: calc(50% - ${props.frameWidth / 2}px);
                  &:nth-child(2) {
                    /* remove unusing full screen border */
                    display: none;
                  }
                  > div {
                    will-change: initial !important;
                    transform: initial !important;
                    > div {
                      transform: initial !important;
                    }
                  }
                }
              }
            }
          }
        }
      }
      /* } */
    `}
  ${props => props.scrollSmooth &&
    styled_components_1.css `
      body {
        scroll-behavior: smooth !important;
        -webkit-overflow-scrolling: touch !important;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    `}

`;
class RemoveFramerXStyles extends React.Component {
    render() {
        window["__checkBudget__"]();
        return (React.createElement(GlobalStyle, { removeCursor: this.props.removeCursor, removeScaleDown: this.props.removeScaleDown, overflowScroll: this.props.overflowScroll, enableFixed: this.props.enableFixed, scrollSmooth: this.props.scrollSmooth, frameWidth: this.props.frameWidth }));
    }
}
exports.RemoveFramerXStyles = RemoveFramerXStyles;
// Set default properties
RemoveFramerXStyles.defaultProps = {
    width: 50,
    height: 50,
    removeCursor: true,
    removeScaleDown: false,
    overflowScroll: false,
    enableFixed: false,
    scrollSmooth: true,
    frameWidth: '187.5',
};
// Items shown in property panel
RemoveFramerXStyles.propertyControls = {
    removeCursor: {
        type: framer_1.ControlType.Boolean,
        title: 'Remove Cursor',
    },
    removeScaleDown: {
        type: framer_1.ControlType.Boolean,
        title: 'Remove Scale Down',
    },
    overflowScroll: {
        type: framer_1.ControlType.Boolean,
        title: 'Overflow Scroll',
    },
    enableFixed: {
        type: framer_1.ControlType.Boolean,
        title: 'Enable Child Fixed',
    },
    scrollSmooth: {
        type: framer_1.ControlType.Boolean,
        title: 'Scroll Smooth',
    },
    frameWidth: {
        type: framer_1.ControlType.String,
        title: 'Frame Width',
    },
};
exports.__info__ = [{ "name": "RemoveFramerXStyles", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Slider.tsx":
/*!*************************!*\
  !*** ./code/Slider.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TbGlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUErRTtBQUMvRSw4Q0FBcUM7QUFDckMseURBQStDO0FBRS9DLE1BQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7O2lCQUliLEVBQUUsR0FBRyxFQUFFOzs7SUFHcEIsS0FBSyxDQUFDLEVBQUUsQ0FDUixLQUFLLENBQUMsUUFBUTtJQUNkLHVCQUFHLENBQUE7MkJBQ29CLEtBQUssQ0FBQyxRQUFRO0tBQ3BDO0NBQ0osQ0FBQTtBQUNELE1BQU0sTUFBTSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7Ozs7Ozs7SUFTckIsS0FBSyxDQUFDLEVBQUUsQ0FDUixLQUFLLENBQUMsS0FBSztJQUNYLHVCQUFHLENBQUE7Y0FDTyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUU7S0FDekI7O0lBRUQsS0FBSyxDQUFDLEVBQUUsQ0FDUixLQUFLLENBQUMsTUFBTTtJQUNaLHVCQUFHLENBQUE7O0tBRUY7Q0FDSixDQUFBO0FBQ0QsTUFBTSxLQUFLLEdBQUcsMkJBQU0sQ0FBQyxjQUFLLENBQUMsQ0FBQTs7Q0FFMUIsQ0FBQTtBQUNELE1BQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFBOzs7Ozs7SUFNdEIsS0FBSyxDQUFDLEVBQUUsQ0FDUixLQUFLLENBQUMsUUFBUTtJQUNkLHVCQUFHLENBQUE7MkJBQ29CLEtBQUssQ0FBQyxRQUFRO3FCQUNwQixLQUFLLENBQUMsUUFBUSxHQUFHLENBQUM7S0FDbEM7Q0FDSixDQUFBO0FBQ0QsTUFBTSxJQUFJLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUE7Ozs7OztJQU1uQixLQUFLLENBQUMsRUFBRSxDQUNSLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQztJQUNoQix1QkFBRyxDQUFBO2NBQ08sS0FBSyxDQUFDLEtBQUss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RyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksRUFFakUsS0FBSyxFQUFFLENBQUMsUUFHRDtvQkFDVCxvQkFBQyxNQUFNLElBQ0wsTUFBTSxFQUNKLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksRUFFakUsS0FBSyxFQUFFLENBQUMsUUFHRDtvQkFDVCxvQkFBQyxNQUFNLElBQ0wsTUFBTSxFQUNKLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksRUFFakUsS0FBSyxFQUFFLENBQUMsUUFHRDtvQkFDVCxvQkFBQyxNQUFNLElBQ0wsTUFBTSxFQUNKLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksRUFFakUsS0FBSyxFQUFFLENBQUMsUUFHRDtvQkFDVCxvQkFBQyxNQUFNLElBQ0wsTUFBTSxFQUNKLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksRUFFakUsS0FBSyxFQUFFLENBQUMsUUFHRDtvQkFDVCxvQkFBQyxNQUFNLElBQ0wsTUFBTSxFQUNKLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksRUFFakUsS0FBSyxFQUFFLENBQUMsUUFHRDtvQkFDVCxvQkFBQyxNQUFNLElBQUMs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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const resource_1 = __webpack_require__(/*! framer/resource */ "framer/resource");
const styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
const NumbersWrap = styled_components_1.default.div `
  background: green;
  width: calc(100% - 35.5px);
  margin: 0 auto;
  margin-top: -${15 + 13}px;
  position: relative;

  ${props => props.knobSize &&
    styled_components_1.css `
      width: calc(100% - ${props.knobSize}px);
    `}
`;
const Number = styled_components_1.default.div `
  font-family: Spoqa Han Sans;
  font-size: 16.25px;
  font-weight: bold;
  line-height: 0.86;
  color: #cccbcb;
  transform: translateX(-50%);

  position: absolute;
  ${props => props.order &&
    styled_components_1.css `
      left: ${props.order * 10}%;
    `}

  ${props => props.active &&
    styled_components_1.css `
      color: #000000;
    `}
`;
const Track = styled_components_1.default(framer_1.Frame) `
  background: #cccbcb !important;
`;
const TrackBG = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  z-index: -1;
  ${props => props.knobSize &&
    styled_components_1.css `
      width: calc(100% - ${props.knobSize}px);
      padding: 9px ${props.knobSize / 2}px;
    `}
`;
const Line = styled_components_1.default.div `
  width: 1px;
  border-radius: 2px;
  height: calc(100% - 18px);
  background: white;
  position: absolute;
  ${props => props.order >= 0 &&
    styled_components_1.css `
      left: ${props.order * 10}%;
    `}
`;
const modulate = (value, r1, r2) => {
    window["__checkBudget__"]();
    return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
};
var tempValue = -1;
class Slider extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: Slider.defaultProps.value,
            propsValue: Slider.defaultProps.value,
            knobOffset: 0,
        };
        this.onMove = (event) => {
            window["__checkBudget__"]();
            const { onValueChange } = this.props;
            const value = this.pointToValue(event.x);
            this.setState({ value });
            if (onValueChange) {
                onValueChange(value);
            }
        };
        this.valueToPoint = value => {
            window["__checkBudget__"]();
            const { min, max, width, constrained, knobSize } = this.props;
            if (constrained) {
                return modulate(value, [min, max], [0, width - knobSize]);
            }
            else {
                return modulate(value, [min, max], [-knobSize / 2, width - knobSize / 2]);
            }
        };
        this.pointToValue = point => {
            window["__checkBudget__"]();
            const { min, max, width, constrained, knobSize } = this.props;
            if (constrained) {
                return modulate(point, [0, width - knobSize], [min, max]);
            }
            else {
                return modulate(point, [-knobSize / 2, width - knobSize / 2], [min, max]);
            }
        };
    }
    componentDidMount() {
        window["__checkBudget__"]();
        const { value, onValueChange } = this.props;
        this.setState({ value });
        if (onValueChange) {
            onValueChange(value);
        }
    }
    static getDerivedStateFromProps(props, state) {
        window["__checkBudget__"]();
        return {
            propsValue: props.value,
            value: props.value !== state.propsValue ? props.value : state.value,
        };
    }
    render() {
        window["__checkBudget__"]();
        const { knob, track, tint, width, height, knobSize, trackHeight, constrained, min, max, } = this.props;
        let left = this.valueToPoint(max);
        let ratio = (left + knobSize / 2) / width;
        if (this.state.value < max) {
            left = this.valueToPoint(this.state.value);
            ratio = (left + knobSize / 2) / width;
        }
        if (min > this.state.value) {
            ratio = this.valueToPoint(min) / width;
            left = this.valueToPoint(min);
        }
        if (min === max && max < this.state.value) {
            ratio = 1;
            if (constrained) {
                left = width - knobSize;
            }
            else {
                left = width - knobSize / 2;
            }
        }
        if ((min === max && max > this.state.value) ||
            (min === max && min === this.state.value)) {
            ratio = 0;
            if (constrained) {
                left = 0;
            }
            else {
                left = -knobSize / 2;
            }
        }
        const constraintsX = constrained ? 0 : -knobSize / 2;
        const constraintsWidth = constrained ? width : width + knobSize;
        if (ratio > 1) {
            ratio = 1;
        }
        else if (ratio < 0) {
            ratio = 0;
        }
        const constraints = {
            x: constraintsX,
            y: height / 2 - knobSize / 2,
            width: constraintsWidth,
            height: knobSize,
        };
        return (React.createElement(React.Fragment, null,
            React.createElement(NumbersWrap, { knobSize: knobSize },
                React.createElement(framer_1.Frame, { width: "100%", height: "100%", initial: {
                        opacity: 0,
                    }, animate: {
                        opacity: 1,
                    }, transition: {
                        duration: 0.54,
                        ease: 'linear',
                    } },
                    React.createElement(Number, { active: 0 <= this.state.value && this.state.value < max * 0.05, order: 0 }, "0"),
                    React.createElement(Number, { active: max * 0.05 <= this.state.value && this.state.value < max * 0.15, order: 1 }, "1"),
                    React.createElement(Number, { active: max * 0.15 <= this.state.value && this.state.value < max * 0.25, order: 2 }, "2"),
                    React.createElement(Number, { active: max * 0.25 <= this.state.value && this.state.value < max * 0.35, order: 3 }, "3"),
                    React.createElement(Number, { active: max * 0.35 <= this.state.value && this.state.value < max * 0.45, order: 4 }, "4"),
                    React.createElement(Number, { active: max * 0.45 <= this.state.value && this.state.value < max * 0.55, order: 5 }, "5"),
                    React.createElement(Number, { active: max * 0.55 <= this.state.value && this.state.value < max * 0.65, order: 6 }, "6"),
                    React.createElement(Number, { active: max * 0.65 <= this.state.value && this.state.value < max * 0.75, order: 7 }, "7"),
                    React.createElement(Number, { active: max * 0.75 <= this.state.value && this.state.value < max * 0.85, order: 8 }, "8"),
                    React.createElement(Number, { active: max * 0.85 <= this.state.value && this.state.value < max * 0.95, order: 9 }, "9"),
                    React.createElement(Number, { active: max * 0.95 <= this.state.value, order: 10 }, "10"))),
            React.createElement(Track, { left: 0, height: trackHeight, width: width, 
                // top={(height - trackHeight) / 2}
                radius: 50, overflow: 'hidden', initial: {
                    top: (height - trackHeight) / 2 + 99,
                    opacity: 0,
                }, animate: {
                    top: (height - trackHeight) / 2,
                    opacity: 1,
                }, transition: {
                    duration: 0.54,
                    opacity: {
                        ease: 'linear',
                    },
                    top: {
                        ease: 'easeInOut',
                    },
                } },
                React.createElement(framer_1.Frame, { width: `${(ratio +
                        knobSize / width / 2 + // add half of knobSize
                        (34 - 30) / width / 2) * // add little gap size
                        100}%`, top: 0, left: 0, bottom: 0, background: tint, radius: 50 }),
                React.createElement(framer_1.Draggable, { width: knobSize, height: knobSize, constraints: constraints, bounce: false, overdrag: false, onMove: this.onMove, horizontal: true, vertical: false, left: left, top: (height - this.props.knobSize) / 2, background: knob, radius: '50%', momentum: false, onMouseUp: () => {
                        window["__checkBudget__"]();
                        var newValue = Math.round(this.state.value);
                        if (tempValue != newValue) {
                            // set tempValue
                            tempValue = newValue;
                            this.setState({
                                value: newValue,
                            });
                        }
                        else {
                            // execute onTap
                            this.props.confirm && this.props.confirm();
                        }
                        this.setState({
                            value: newValue,
                        });
                    }, shadows: [
                        {
                            inset: false,
                            color: `${this.props.shadow}`,
                            x: 0,
                            y: 1,
                            blur: 2,
                            spread: 0,
                        },
                        {
                            inset: false,
                            color: `${this.props.shadow}`,
                            x: 0,
                            y: 2,
                            blur: 4,
                            spread: 0,
                        },
                        {
                            inset: false,
                            color: `${this.props.shadow}`,
                            x: 0,
                            y: 4,
                            blur: 8,
                            spread: 0,
                        },
                    ], style: {
                        cursor: 'pointer',
                    } }),
                React.createElement(TrackBG, { knobSize: knobSize },
                    React.createElement(Line, { order: 0 }),
                    React.createElement(Line, { order: 1 }),
                    React.createElement(Line, { order: 2 }),
                    React.createElement(Line, { order: 3 }),
                    React.createElement(Line, { order: 4 }),
                    React.createElement(Line, { order: 5 }),
                    React.createElement(Line, { order: 6 }),
                    React.createElement(Line, { order: 7 }),
                    React.createElement(Line, { order: 8 }),
                    React.createElement(Line, { order: 9 }),
                    React.createElement(Line, { order: 10 })))));
    }
}
exports.Slider = Slider;
Slider.defaultProps = {
    width: 278,
    height: 38.5,
    value: 50,
    knob: 'center / contain no-repeat url(' + resource_1.url('../images/knob.svg') + ')',
    track: 'center / cover no-repeat url(' + resource_1.url('../images/slider-bg.png') + ')',
    tint: 'linear-gradient(92deg, #fc9057, #fd5863 50%, #e0528e 98%)',
    min: 0,
    max: 100,
    knobSize: 35.5,
    shadow: 'rgba(0,0,0,0)',
    trackHeight: 38.5,
    constrained: true,
};
Slider.propertyControls = {
    tint: { type: framer_1.ControlType.Color, title: 'Tint' },
    track: { type: framer_1.ControlType.Color, title: 'Track' },
    shadow: { type: framer_1.ControlType.Color, title: 'Shadow' },
    min: { type: framer_1.ControlType.Number, title: 'Min', min: 0 },
    max: { type: framer_1.ControlType.Number, title: 'Max', min: 0, max: 360 },
    value: { type: framer_1.ControlType.Number, title: 'Value', min: 0, max: 360 },
    knobSize: { type: framer_1.ControlType.Number, title: 'Knob', min: 20, max: 50 },
    trackHeight: {
        type: framer_1.ControlType.Number,
        title: 'Height',
        min: 1,
        max: 500,
    },
    constrained: { type: framer_1.ControlType.Boolean, title: 'Constrain' },
};
exports.__info__ = [{ "name": "Slider", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/animate/index.js":
/*!*******************************!*\
  !*** ./code/animate/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.likertCircle = undefined;

var _likertCircle = __webpack_require__(/*! ./likertCircle */ "./code/animate/likertCircle.js");

var _likertCircle2 = _interopRequireDefault(_likertCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.likertCircle = _likertCircle2.default;

/***/ }),

/***/ "./code/animate/likertCircle.js":
/*!**************************************!*\
  !*** ./code/animate/likertCircle.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _datas = __webpack_require__(/*! ../datas */ "./code/datas/index.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./code/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animFix = 1 / 2;

var animate = function animate(i) {
  return new Promise(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve) {
      var animateLarge, animatingLarge, animateMedium, animatingMedium, animateSmall, animatingSmall;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              animateLarge = function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(i, to, transition) {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _datas.likert.largeScaleTransition = transition;
                          _datas.likert.largeScale[i] = to;

                        case 2:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, undefined);
                }));

                return function animateLarge(_x2, _x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }();

              animatingLarge = function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          // LikertCircleLarge
                          animateLarge(i, 0.933, {
                            duration: 0.57 * animFix,
                            ease: 'easeIn'
                          });
                          _context2.next = 3;
                          return (0, _utils.sleep)(0.57 * animFix);

                        case 3:

                          animateLarge(i, 0.68, {
                            duration: 0.97 * animFix,
                            ease: 'easeInOut'
                          });
                          _context2.next = 6;
                          return (0, _utils.sleep)((0.97 + 0.1) * animFix);

                        case 6:

                          animateLarge(i, 0.933, {
                            duration: 0.6 * animFix,
                            ease: 'linear'
                          });
                          _context2.next = 9;
                          return (0, _utils.sleep)(0.6 * animFix);

                        case 9:

                          animateLarge(i, 0.68, {
                            duration: 0.97 * animFix,
                            ease: 'easeInOut'
                          });
                          _context2.next = 12;
                          return (0, _utils.sleep)(0.97 * animFix);

                        case 12:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, undefined);
                }));

                return function animatingLarge() {
                  return _ref3.apply(this, arguments);
                };
              }();

              animateMedium = function () {
                var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(i, to, transition) {
                  return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _datas.likert.mediumScaleTransition = transition;
                          _datas.likert.mediumScale[i] = to;

                        case 2:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  }, _callee3, undefined);
                }));

                return function animateMedium(_x5, _x6, _x7) {
                  return _ref4.apply(this, arguments);
                };
              }();

              animatingMedium = function () {
                var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                  return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          // LikertCircleMedium
                          animateMedium(i, 0.84, {
                            duration: 0.53 * animFix,
                            ease: 'easeIn'
                          });
                          _context4.next = 3;
                          return (0, _utils.sleep)(0.53 * animFix);

                        case 3:

                          animateMedium(i, 0.612, {
                            duration: 0.64 * animFix,
                            ease: 'easeInOut'
                          });
                          _context4.next = 6;
                          return (0, _utils.sleep)((0.64 + 0.16) * animFix);

                        case 6:

                          animateMedium(i, 0.84, {
                            duration: 0.34 * animFix,
                            ease: 'linear'
                          });
                          _context4.next = 9;
                          return (0, _utils.sleep)(0.34 * animFix);

                        case 9:

                          animateMedium(i, 0.612, {
                            duration: 0.33 * animFix,
                            ease: 'easeInOut'
                          });
                          _context4.next = 12;
                          return (0, _utils.sleep)(0.33 * animFix);

                        case 12:
                        case 'end':
                          return _context4.stop();
                      }
                    }
                  }, _callee4, undefined);
                }));

                return function animatingMedium() {
                  return _ref5.apply(this, arguments);
                };
              }();

              animateSmall = function () {
                var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(i, to, transition) {
                  return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _datas.likert.smallScaleTransition = transition;
                          _datas.likert.smallScale[i] = to;

                        case 2:
                        case 'end':
                          return _context5.stop();
                      }
                    }
                  }, _callee5, undefined);
                }));

                return function animateSmall(_x8, _x9, _x10) {
                  return _ref6.apply(this, arguments);
                };
              }();

              animatingSmall = function () {
                var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
                  return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          // LikertCircleSmall
                          animateSmall(i, 0.7, {
                            duration: 0.43 * animFix,
                            ease: 'easeIn'
                          });
                          _context6.next = 3;
                          return (0, _utils.sleep)(0.43 * animFix);

                        case 3:

                          animateSmall(i, 0.509, {
                            duration: 0.26 * animFix,
                            ease: 'easeIn'
                          });
                          _context6.next = 6;
                          return (0, _utils.sleep)(0.26 * animFix);

                        case 6:

                          animateSmall(i, 0.4, {
                            duration: 0.48 * animFix,
                            ease: 'linear'
                          });
                          _context6.next = 9;
                          return (0, _utils.sleep)(0.48 * animFix);

                        case 9:

                          animateSmall(i, 0.7, {
                            duration: 0.77 * animFix,
                            ease: 'easeIn'
                          });
                          _context6.next = 12;
                          return (0, _utils.sleep)(0.77 * animFix);

                        case 12:

                          animateSmall(i, 0.51, {
                            duration: 0.42 * animFix,
                            ease: 'easeIn'
                          });
                          _context6.next = 15;
                          return (0, _utils.sleep)(0.42 * animFix);

                        case 15:
                        case 'end':
                          return _context6.stop();
                      }
                    }
                  }, _callee6, undefined);
                }));

                return function animatingSmall() {
                  return _ref7.apply(this, arguments);
                };
              }();

              animatingLarge();
              animatingMedium();
              animatingSmall();

              // wait until animatingLarge end
              _context7.next = 11;
              return (0, _utils.sleep)(3.11 * animFix);

            case 11:

              // init values
              animateLarge(i, 0, {
                duration: 0
              });
              animateMedium(i, 0, {
                duration: 0
              });
              animateSmall(i, 0, {
                duration: 0
              });

              resolve();

            case 15:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.default = animate;

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./code/components/AnswerCommentComp/index.js":
/*!****************************************************!*\
  !*** ./code/components/AnswerCommentComp/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  /* background: rebeccapurple; */\n  position: absolute;\n  width: 100%;\n  bottom: 68px;\n'], ['\n  /* background: rebeccapurple; */\n  position: absolute;\n  width: 100%;\n  bottom: 68px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 331px;\n  min-height: 33.5px;\n  margin: 0 auto;\n  display: block;\n  border-radius: 15.25px 15.25px 15.25px 5px;\n  resize: none;\n  padding: 10.5px 62px 10px 17.5px;\n\n  /* fonts */\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  line-height: 18.25px;\n  color: #292929;\n\n  /* inner border */\n  border: none;\n  -o-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n\n  /* Remove textarea inner shadow on Mobile Safari (iPhone) */\n  -webkit-appearance: none;\n\n  &:focus {\n    outline: none;\n  }\n'], ['\n  width: 331px;\n  min-height: 33.5px;\n  margin: 0 auto;\n  display: block;\n  border-radius: 15.25px 15.25px 15.25px 5px;\n  resize: none;\n  padding: 10.5px 62px 10px 17.5px;\n\n  /* fonts */\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  line-height: 18.25px;\n  color: #292929;\n\n  /* inner border */\n  border: none;\n  -o-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #bfbfbf;\n\n  /* Remove textarea inner shadow on Mobile Safari (iPhone) */\n  -webkit-appearance: none;\n\n  &:focus {\n    outline: none;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 27.5px;\n  height: 27.5px;\n  background-color: #bfbfbf;\n  border-radius: 200px;\n  position: absolute;\n  right: calc(50% - 165.5px + 3px);\n  bottom: 3px;\n  cursor: pointer;\n  ', '\n'], ['\n  width: 27.5px;\n  height: 27.5px;\n  background-color: #bfbfbf;\n  border-radius: 200px;\n  position: absolute;\n  right: calc(50% - 165.5px + 3px);\n  bottom: 3px;\n  cursor: pointer;\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      background: linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289);\n    '], ['\n      background: linear-gradient(92deg, #fd8d58, #fd5664 50%, #e35289);\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  width: 15.25px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n'], ['\n  width: 15.25px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _handlers = __webpack_require__(/*! ../../handlers */ "./code/handlers/index.js");

var _datas = __webpack_require__(/*! ../../datas */ "./code/datas/index.js");

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _resource = __webpack_require__(/*! framer/resource */ "framer/resource");

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _reactAutosizeTextarea = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");

var _reactAutosizeTextarea2 = _interopRequireDefault(_reactAutosizeTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);
var TextBox = (0, _styledComponents2.default)(_reactAutosizeTextarea2.default)(_templateObject2);
var SendIcon = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject4);
});
var Arrow = _styledComponents2.default.img(_templateObject5);

var AnswerCommentComp = function AnswerCommentComp(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  return _react2.default.createElement(
    Wrap,
    null,
    _react2.default.createElement(TextBox, {
      onResize: function onResize(e) {},
      onChange: function onChange(e) {
        setComment(e.target.value);
      },
      onClick: function onClick() {
        return (0, _utils.scrollToLastChat)();
      } // fix galaxy issue that keyboard covers chatList
    }),
    _react2.default.createElement(
      SendIcon,
      {
        onClick: function onClick() {
          (0, _handlers.handleAnswerClick)(comment, null);
        },
        active: comment
      },
      _react2.default.createElement(Arrow, { src: (0, _resource.url)('../images/arrow-01.svg') })
    )
  );
};

exports.default = AnswerCommentComp;

/***/ }),

/***/ "./code/components/AnswerEmojiComp/Emoji.js":
/*!**************************************************!*\
  !*** ./code/components/AnswerEmojiComp/Emoji.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 51px !important;\n  height: 51px !important;\n  background-color: transparent !important;\n  cursor: pointer;\n'], ['\n  width: 51px !important;\n  height: 51px !important;\n  background-color: transparent !important;\n  cursor: pointer;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _resource = __webpack_require__(/*! framer/resource */ "framer/resource");

var _framer = __webpack_require__(/*! framer */ "framer");

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _handlers = __webpack_require__(/*! ../../handlers */ "./code/handlers/index.js");

var _reactMeasure = __webpack_require__(/*! react-measure */ "./node_modules/react-measure/dist/index.esm.js");

var _datas = __webpack_require__(/*! ../../datas */ "./code/datas/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Img = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);

var Emoji = function Emoji(_ref) {
  var choiceOrder = _ref.choiceOrder,
      type = _ref.type,
      clicked = _ref.clicked,
      setClicked = _ref.setClicked,
      isBase = _ref.isBase,
      measureRef = _ref.measureRef,
      measure = _ref.measure,
      contentRect = _ref.contentRect,
      props = (0, _objectWithoutProperties3.default)(_ref, ['choiceOrder', 'type', 'clicked', 'setClicked', 'isBase', 'measureRef', 'measure', 'contentRect']);

  var source = (0, _resource.url)('../images/emoji-' + type + '.png');
  var anim = (0, _framer.useAnimation)();

  var throwAnim = function throwAnim() {
    return new Promise(function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve) {
        var target, lastChat, lastChatRect, leftMove, topMove;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // calculate of left, bottom target point
                target = document.querySelectorAll('.chat');

                if (!(target.length > 2)) {
                  _context.next = 8;
                  break;
                }

                lastChat = target[target.length - 1];
                lastChatRect = lastChat.getBoundingClientRect();
                leftMove = window.innerWidth - (contentRect.bounds.left + contentRect.bounds.width) - // use left value, cause right pin is at weird position on Framer Beta
                15.5 - // minus right padding
                2 + //minus increased height?
                -1; // cause emoji not gonna scale like multipe

                topMove = -(contentRect.bounds.top - lastChatRect.bottom - 163); // minus something..

                _context.next = 8;
                return anim.start({
                  left: leftMove,
                  top: topMove,
                  transition: {
                    duration: 0.83 / 2, // make x2 speed
                    ease: 'easeInOut'
                  }
                });

              case 8:

                resolve();
                setClicked({
                  key: choiceOrder,
                  animating: false
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
  var handleClicked = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.7,
                  ease: 'easeIn'
                }
              });

            case 2:
              _context2.next = 4;
              return anim.start({
                opacity: 1,
                transition: {
                  duration: 0.34,
                  ease: 'easeInOut'
                }
              });

            case 4:
              _context2.next = 6;
              return throwAnim();

            case 6:
              _context2.next = 8;
              return (0, _utils.sleep)(0.5);

            case 8:
              // sleep for anwserEndAnim

              (0, _handlers.handleAnswerClick)(choiceOrder, (0, _resource.url)('../images/emoji-' + type + '.png'));

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function handleClicked() {
      return _ref3.apply(this, arguments);
    };
  }();
  var fadeAnim = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _utils.sleep)(0.37);

            case 2:
              _context3.next = 4;
              return anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.1,
                  ease: 'easeInOut'
                }
              });

            case 4:
              _context3.next = 6;
              return (0, _utils.sleep)(3);

            case 6:

              anim.start({
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: 'linear'
                }
              });

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function fadeAnim() {
      return _ref4.apply(this, arguments);
    };
  }();

  var answerEndAnim = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(isBase || clicked.key != choiceOrder)) {
                _context4.next = 3;
                break;
              }

              _context4.next = 3;
              return anim.start({
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: 'linear'
                }
              });

            case 3:
              _datas.answer.clicking = false;

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function answerEndAnim() {
      return _ref5.apply(this, arguments);
    };
  }();

  // check states for animations
  if (clicked.key == -1) {
    anim.start({
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.33,
        ease: 'easeInOut',
        delay: 0.03 * choiceOrder
      }
    });
  } else {
    if (clicked.animating) {
      if (clicked.key == choiceOrder) {
        log('clickedAnim! - ', choiceOrder);
        if (!isBase) handleClicked();else fadeAnim();
      } else if (clicked.key != choiceOrder) {
        log('fadeAnim! - ', choiceOrder);
        fadeAnim();
      }
    } else if (!clicked.animating) {
      log('answerEndAnim!!');
      answerEndAnim();
    }
  }

  return _react2.default.createElement(Img, {
    ref: measureRef,
    onTap: function onTap() {
      if (!_datas.answer.clicking) {
        _datas.answer.clicking = true;
        log('clicked', clicked);
        setClicked({
          key: choiceOrder,
          animating: true
        });
      }
    },
    image: source,
    active: clicked.key == -1 || clicked.key == choiceOrder,
    initial: {
      opacity: 0.3,
      top: 163
    },
    animate: anim
  });
};

exports.default = (0, _reactMeasure.withContentRect)('bounds')(Emoji);

/***/ }),

/***/ "./code/components/AnswerEmojiComp/index.js":
/*!**************************************************!*\
  !*** ./code/components/AnswerEmojiComp/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _handlers = __webpack_require__(/*! ../../handlers */ "./code/handlers/index.js");

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _resource = __webpack_require__(/*! framer/resource */ "framer/resource");

var _Emoji = __webpack_require__(/*! ./Emoji */ "./code/components/AnswerEmojiComp/Emoji.js");

var _Emoji2 = _interopRequireDefault(_Emoji);

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _framer = __webpack_require__(/*! framer */ "framer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnswerEmojiComp = function AnswerEmojiComp(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  var _useState = (0, _react.useState)({
    key: -1,
    animating: false
  }),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var emojiTypes = ['angry', 'sad', 'normal', 'good', 'happy'];
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _framer.Stack,
      {
        size: '100%',
        direction: 'horizontal',
        distribution: 'center',
        gap: 19
      },
      (0, _map2.default)(emojiTypes, function (type, choiceOrder) {
        return _react2.default.createElement(_Emoji2.default, {
          key: choiceOrder,
          choiceOrder: choiceOrder,
          type: type,
          isBase: true,
          clicked: clicked,
          setClicked: setClicked
        });
      })
    ),
    _react2.default.createElement(
      _framer.Stack,
      {
        size: '100%',
        direction: 'horizontal',
        distribution: 'center',
        gap: 19
      },
      (0, _map2.default)(emojiTypes, function (type, choiceOrder) {
        return _react2.default.createElement(_Emoji2.default, {
          key: choiceOrder,
          choiceOrder: choiceOrder,
          type: type,
          clicked: clicked,
          setClicked: setClicked
        });
      })
    )
  );
};

exports.default = AnswerEmojiComp;

/***/ }),

/***/ "./code/components/AnswerLikertCoverComp/Mock.js":
/*!*******************************************************!*\
  !*** ./code/components/AnswerLikertCoverComp/Mock.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 35px;\n  border-radius: 35px;\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n  color: #292929;\n  padding: 0 12px;\n  display: inline-block;\n  visibility: hidden;\n'], ['\n  line-height: 35px;\n  border-radius: 35px;\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n  color: #292929;\n  padding: 0 12px;\n  display: inline-block;\n  visibility: hidden;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);

var Mock = function Mock(_ref) {
  var choice = _ref.choice,
      props = (0, _objectWithoutProperties3.default)(_ref, ['choice']);

  return choice ? _react2.default.createElement(
    Wrap,
    null,
    choice.koDescription
  ) : '';
};

exports.default = Mock;

/***/ }),

/***/ "./code/components/AnswerLikertCoverComp/index.js":
/*!********************************************************!*\
  !*** ./code/components/AnswerLikertCoverComp/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 20% !important;\n  height: 50px !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n  background: blue;\n'], ['\n  width: 20% !important;\n  height: 50px !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n  background: blue;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  white-space: nowrap;\n'], ['\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  white-space: nowrap;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _datas = __webpack_require__(/*! ../../datas */ "./code/datas/index.js");

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _ChoiceCover = __webpack_require__(/*! ../AnswerMultipleComp/ChoiceCover */ "./code/components/AnswerMultipleComp/ChoiceCover.js");

var _ChoiceCover2 = _interopRequireDefault(_ChoiceCover);

var _Mock = __webpack_require__(/*! ./Mock */ "./code/components/AnswerLikertCoverComp/Mock.js");

var _Mock2 = _interopRequireDefault(_Mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceWrap = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);

var Center = _styledComponents2.default.div(_templateObject2);

var AnswerLikertCoverComp = function AnswerLikertCoverComp(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  var _useState = (0, _react.useState)({
    key: -1,
    animating: false
  }),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return _react2.default.createElement(
    _framer.Stack,
    {
      size: '100%',
      direction: 'horizontal',
      distribution: 'center',
      gap: 0,
      style: {
        flexWrap: 'wrap',
        alignContent: 'center'
      }
    },
    (0, _map2.default)(_datas.answer.currentQuestion.choices, function (choice, choiceOrder) {
      return _react2.default.createElement(
        ChoiceWrap,
        { key: choiceOrder },
        _react2.default.createElement(
          Center,
          null,
          _react2.default.createElement(_ChoiceCover2.default, {
            type: 'likert',
            choice: choice,
            choiceOrder: choiceOrder,
            clicked: clicked,
            setClicked: setClicked
          }),
          _react2.default.createElement(_Mock2.default, { choice: choice })
        )
      );
    })
  );
};

exports.default = AnswerLikertCoverComp;

/***/ }),

/***/ "./code/components/AnswerLikertDescComp/index.js":
/*!*******************************************************!*\
  !*** ./code/components/AnswerLikertDescComp/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  width: 20% !important;\n  height: 100% !important;\n  background: transparent !important;\n  text-align: center;\n  vertical-align: top;\n  position: relative;\n  &:first-child {\n    > div {\n      padding-left: 3vw;\n    }\n  }\n  &:last-child {\n    > div {\n      padding-right: 3vw;\n    }\n  }\n'], ['\n  display: inline-block;\n  width: 20% !important;\n  height: 100% !important;\n  background: transparent !important;\n  text-align: center;\n  vertical-align: top;\n  position: relative;\n  &:first-child {\n    > div {\n      padding-left: 3vw;\n    }\n  }\n  &:last-child {\n    > div {\n      padding-right: 3vw;\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  font-family: Spoqa Han Sans;\n  font-size: 10.25px;\n  font-weight: bold;\n  line-height: 1.22;\n  color: #000000;\n  padding: 0 1.5vw;\n'], ['\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  font-family: Spoqa Han Sans;\n  font-size: 10.25px;\n  font-weight: bold;\n  line-height: 1.22;\n  color: #000000;\n  padding: 0 1.5vw;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _handlers = __webpack_require__(/*! ../../handlers */ "./code/handlers/index.js");

var _datas = __webpack_require__(/*! ../../datas */ "./code/datas/index.js");

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _resource = __webpack_require__(/*! framer/resource */ "framer/resource");

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Desc = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);
var DescText = _styledComponents2.default.div(_templateObject2);

var AnswerLikertDescComp = function AnswerLikertDescComp(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  var choices = _datas.answer.currentQuestion.choices;
  return _react2.default.createElement(
    _framer.Stack,
    {
      center: true,
      size: '85%',
      direction: 'horizontal',
      distribution: 'center',
      gap: 0,
      style: {
        flexWrap: 'wrap',
        alignContent: 'center'
      }
    },
    (0, _map2.default)(choices, function (choice, choiceOrder) {
      return _react2.default.createElement(
        Desc,
        {
          key: choiceOrder,
          initial: {
            opacity: 0
          },
          animate: {
            opacity: _datas.likert.descOpacity
          },
          transition: _datas.likert.descTransition
        },
        _react2.default.createElement(DescText, {
          dangerouslySetInnerHTML: {
            __html: choice.koDescription
          }
        })
      );
    })
  );
};

exports.default = AnswerLikertDescComp;

/***/ }),

/***/ "./code/components/AnswerMultipleComp/Choice.js":
/*!******************************************************!*\
  !*** ./code/components/AnswerMultipleComp/Choice.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  z-index: -1;\n  background: transparent !important;\n'], ['\n  z-index: -1;\n  background: transparent !important;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 35px;\n  border-radius: 35px;\n\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n  color: #292929;\n  padding: 0 12px;\n  display: inline-block;\n  white-space: nowrap;\n'], ['\n  line-height: 35px;\n  border-radius: 35px;\n\n  -webkit-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  -moz-box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n  box-shadow: inset 0px 0px 0px 1.5px #fd5863;\n\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n  color: #292929;\n  padding: 0 12px;\n  display: inline-block;\n  white-space: nowrap;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

var _handlers = __webpack_require__(/*! ../../handlers */ "./code/handlers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);
var Text = _styledComponents2.default.div(_templateObject2);

var Choice = function Choice(_ref) {
  var type = _ref.type,
      choice = _ref.choice,
      choiceOrder = _ref.choiceOrder,
      clicked = _ref.clicked,
      props = (0, _objectWithoutProperties3.default)(_ref, ['type', 'choice', 'choiceOrder', 'clicked']);

  var anim = (0, _framer.useAnimation)();

  var clickedAnim = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.34,
                  ease: 'linear'
                }
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function clickedAnim() {
      return _ref2.apply(this, arguments);
    };
  }();

  var answerEndAnim = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              log('answerEndAnim', choiceOrder);
              _context2.next = 3;
              return anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.34,
                  ease: 'linear'
                }
              });

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function answerEndAnim() {
      return _ref3.apply(this, arguments);
    };
  }();

  if (clicked.key == -1) {
    anim.start({
      opacity: 1,
      transition: {
        opacity: {
          duration: _consts.baseDuration,
          ease: 'linear'
        },
        delay: 0.33 + 0.77
      }
    });
  } else if (clicked.key == choiceOrder)
    // fade only clicked
    clickedAnim();else if (!clicked.animating)
    // make end of answer anim
    answerEndAnim();

  return choice ? _react2.default.createElement(
    ChoiceFrame,
    {
      width: 'initial',
      height: 'initial',
      position: 'relative',
      initial: {
        opacity: 0
      },
      animate: anim
    },
    _react2.default.createElement(
      Text,
      { type: type },
      choice.koDescription
    )
  ) : '';
};

exports.default = Choice;

/***/ }),

/***/ "./code/components/AnswerMultipleComp/ChoiceCover.js":
/*!***********************************************************!*\
  !*** ./code/components/AnswerMultipleComp/ChoiceCover.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100% !important;\n  height: 35px !important;\n  background: transparent !important;\n  overflow: hidden;\n  border-radius: 35px;\n  /* -webkit-mask-image: -webkit-radial-gradient(white, black); */\n  transition: ', 's height ease,\n    ', 's border-radius ease !important;\n  ', '\n'], ['\n  width: 100% !important;\n  height: 35px !important;\n  background: transparent !important;\n  overflow: hidden;\n  border-radius: 35px;\n  /* -webkit-mask-image: -webkit-radial-gradient(white, black); */\n  transition: ', 's height ease,\n    ', 's border-radius ease !important;\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      height: 37px !important;\n      border-radius: 0;\n    '], ['\n      height: 37px !important;\n      border-radius: 0;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  background: #fd5863 !important;\n  width: 100% !important;\n  height: 100% !important;\n  z-index: 1;\n  overflow: hidden;\n  border-radius: 35px;\n\n  transition: ', 's border-radius ease !important;\n  ', '\n'], ['\n  display: inline-block;\n  background: #fd5863 !important;\n  width: 100% !important;\n  height: 100% !important;\n  z-index: 1;\n  overflow: hidden;\n  border-radius: 35px;\n\n  transition: ', 's border-radius ease !important;\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      border-radius: 15.25px 15.25px 5px 15.25px;\n    '], ['\n      border-radius: 15.25px 15.25px 5px 15.25px;\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background: linear-gradient(92deg, #fc9057, #fd5863 50%, #e0528e 98%);\n  width: 100% !important;\n  height: 100% !important;\n  transition: ', 's opacity ease !important;\n  ', '\n'], ['\n  background: linear-gradient(92deg, #fc9057, #fd5863 50%, #e0528e 98%);\n  width: 100% !important;\n  height: 100% !important;\n  transition: ', 's opacity ease !important;\n  ', '\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      opacity: 0;\n    '], ['\n      opacity: 0;\n    ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100% !important;\n  height: 100% !important;\n  background: transparent !important;\n\n  z-index: 1;\n  cursor: pointer;\n\n  color: #ffffff;\n  font-family: Spoqa Han Sans !important;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n'], ['\n  width: 100% !important;\n  height: 100% !important;\n  background: transparent !important;\n\n  z-index: 1;\n  cursor: pointer;\n\n  color: #ffffff;\n  font-family: Spoqa Han Sans !important;\n  font-size: 13.5px;\n  font-weight: bold;\n  letter-spacing: 0.205px;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _handlers = __webpack_require__(/*! ../../handlers */ "./code/handlers/index.js");

var _datas = __webpack_require__(/*! ../../datas */ "./code/datas/index.js");

var _animate = __webpack_require__(/*! ../../animate */ "./code/animate/index.js");

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

var _reactMeasure = __webpack_require__(/*! react-measure */ "./node_modules/react-measure/dist/index.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapTransformTime = 0.05;

var WrapFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject, wrapTransformTime, wrapTransformTime, function (props) {
  return props.clicked.key >= 0 && (0, _styledComponents.css)(_templateObject2);
});
var CoverFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject3, wrapTransformTime, function (props) {
  return props.clicked.key >= 0 && (0, _styledComponents.css)(_templateObject4);
});

var BGGrdient = (0, _styledComponents2.default)(_framer.Frame)(_templateObject5, wrapTransformTime, function (props) {
  return props.clicked.key >= 0 && (0, _styledComponents.css)(_templateObject6);
});

var TextFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject7);

var ChoiceCover = function ChoiceCover(_ref) {
  var choice = _ref.choice,
      choiceOrder = _ref.choiceOrder,
      type = _ref.type,
      clicked = _ref.clicked,
      setClicked = _ref.setClicked,
      measureRef = _ref.measureRef,
      measure = _ref.measure,
      contentRect = _ref.contentRect,
      props = (0, _objectWithoutProperties3.default)(_ref, ['choice', 'choiceOrder', 'type', 'clicked', 'setClicked', 'measureRef', 'measure', 'contentRect']);

  var wrapAnim = (0, _framer.useAnimation)();
  var coverAnim = (0, _framer.useAnimation)();
  var coverTextAnim = (0, _framer.useAnimation)();
  // const [clicked, setClicked] = useState(false)

  var throwAnim = function throwAnim() {
    return new Promise(function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve) {
        var target, lastChat, lastChatRect, leftMove, bottomMove;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // make same style of wrap as target bubble using css
                setClicked({
                  key: choiceOrder,
                  animating: true
                });

                // calculate of left, bottom target point
                target = document.querySelectorAll('.chat');

                if (!(target.length >= 1)) {
                  _context.next = 16;
                  break;
                }

                lastChat = target[target.length - 1];
                lastChatRect = lastChat.getBoundingClientRect();
                leftMove = window.innerWidth - (contentRect.bounds.left + contentRect.bounds.width) - // use left value, cause right pin is at weird position on Framer Beta
                15.5 - // minus right padding
                2; //minus increased height?

                bottomMove = contentRect.bounds.bottom - lastChatRect.bottom - 2; //minus increased height

                if (type == 'multiple') bottomMove -= 88; // minus initial of top anim

                wrapAnim.start({
                  left: leftMove,
                  bottom: bottomMove,
                  transition: {
                    duration: _consts.muitipleBaseDuration,
                    ease: 'easeInOut'
                  }
                });

                _context.next = 11;
                return wrapAnim.start({
                  scale: 1.19,
                  transition: {
                    duration: _consts.muitipleBaseDuration / 3,
                    ease: 'easeOut'
                  }
                });

              case 11:
                _context.next = 13;
                return wrapAnim.start({
                  scale: 1,
                  transition: {
                    duration: _consts.muitipleBaseDuration / 3 * 2,
                    ease: 'easeIn'
                  }
                });

              case 13:
                log('resolve!!');
                resolve();
                setClicked({
                  key: choiceOrder,
                  animating: false
                });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  return _react2.default.createElement(
    'div',
    { ref: measureRef },
    contentRect.bounds.width ? _react2.default.createElement(
      WrapFrame,
      { animate: wrapAnim, clicked: clicked },
      _react2.default.createElement(
        CoverFrame,
        {
          initial: {
            left: type == 'likert' ? 0 : -(contentRect.bounds.width + 30), // Add 30px To fix galaxy issue
            scale: type == 'likert' ? 0 : 1
          },
          animate: coverAnim,
          clicked: clicked
        },
        _react2.default.createElement(BGGrdient, { clicked: clicked })
      ),
      _react2.default.createElement(
        TextFrame,
        {
          initial: {
            opacity: 0
          },
          animate: coverTextAnim,
          onTap: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      log('onTap! - AnswerMultipleComp');
                      log('contentRect.bounds.width', contentRect.bounds.width);

                      if (_datas.answer.clicking) {
                        _context2.next = 33;
                        break;
                      }

                      _datas.answer.clicking = true;

                      if (!(type == 'likert')) {
                        _context2.next = 23;
                        break;
                      }

                      _context2.next = 7;
                      return (0, _animate.likertCircle)(choiceOrder);

                    case 7:

                      // scale anim
                      coverAnim.start({
                        scale: 1,
                        transition: {
                          duration: _consts.muitipleBaseDuration,
                          ease: 'easeInOut'
                        }
                      });

                      _context2.next = 10;
                      return throwAnim();

                    case 10:
                      _context2.next = 12;
                      return coverTextAnim.start({
                        opacity: 1,
                        transition: {
                          duration: 0.42,
                          ease: 'easeInOut'
                        }
                      });

                    case 12:

                      // answerEndAnim
                      _datas.likert.transition = {
                        duration: 0.54,
                        ease: 'linear'
                      };
                      _datas.likert.opacity = 0;
                      _datas.likert.descTransition = {
                        duration: 0.54,
                        ease: 'linear'
                      };
                      _datas.likert.descOpacity = 0;
                      _context2.next = 18;
                      return (0, _utils.sleep)(0.54);

                    case 18:

                      // init value
                      _datas.likert.top = 124;
                      _datas.likert.opacity = 1;
                      _datas.likert.descOpacity = 1;
                      _context2.next = 31;
                      break;

                    case 23:
                      if (!(type == 'multiple')) {
                        _context2.next = 31;
                        break;
                      }

                      // show Cover
                      coverAnim.start({
                        left: 0,
                        transition: {
                          duration: 0.42,
                          ease: 'linear'
                        }
                      });

                      // show Text
                      _context2.next = 27;
                      return coverTextAnim.start({
                        opacity: 1,
                        transition: {
                          duration: 0.42,
                          ease: 'easeInOut'
                        }
                      });

                    case 27:
                      _context2.next = 29;
                      return throwAnim();

                    case 29:
                      _context2.next = 31;
                      return (0, _utils.sleep)(0.34);

                    case 31:
                      (0, _handlers.handleAnswerClick)(choiceOrder, null);
                      _datas.answer.clicking = false;

                    case 33:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, undefined);
            }));

            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }()
        },
        choice.koDescription
      )
    ) : ''
  );
};

exports.default = (0, _reactMeasure.withContentRect)('bounds')(ChoiceCover);

/***/ }),

/***/ "./code/components/AnswerMultipleComp/ChoiceCoverText.js":
/*!***************************************************************!*\
  !*** ./code/components/AnswerMultipleComp/ChoiceCoverText.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100% !important;\n  height: 100% !important;\n  background: transparent !important;\n  z-index: 1;\n  cursor: pointer;\n\n  /* > div { */\n  color: #ffffff;\n  font-family: Spoqa Han Sans !important;\n  font-size: 12.5px;\n  font-weight: bold;\n  line-height: 35px;\n  /* } */\n'], ['\n  width: 100% !important;\n  height: 100% !important;\n  background: transparent !important;\n  z-index: 1;\n  cursor: pointer;\n\n  /* > div { */\n  color: #ffffff;\n  font-family: Spoqa Han Sans !important;\n  font-size: 12.5px;\n  font-weight: bold;\n  line-height: 35px;\n  /* } */\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _handlers = __webpack_require__(/*! ../../handlers */ "./code/handlers/index.js");

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceCoverTextFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);

var ChoiceCoverText = function ChoiceCoverText(_ref) {
  var choice = _ref.choice,
      contentRect = _ref.contentRect,
      props = (0, _objectWithoutProperties3.default)(_ref, ['choice', 'contentRect']);

  var coverAnim = (0, _framer.useAnimation)();
  var coverTextAnim = (0, _framer.useAnimation)();

  return _react2.default.createElement(
    ChoiceCoverTextFrame,
    {
      initial: {
        opacity: 0
      },
      animate: coverTextAnim,
      onTap: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  log('onTap! - AnswerMultipleComp');
                  log('e', e);

                  // Animate choiceOrder Cover
                  coverAnim.start({
                    left: -contentRect.bounds.width,
                    transition: {
                      duration: 0
                    }
                  });
                  coverAnim.start({
                    left: 0,
                    transition: {
                      duration: _consts.defaultDuration
                    }
                  });

                  _context.next = 6;
                  return (0, _utils.sleep)(0.15);

                case 6:

                  // show coverText
                  coverTextAnim.start({
                    opacity: 1,
                    transition: {
                      duration: _consts.defaultDuration
                    }
                  });

                  _context.next = 9;
                  return (0, _utils.sleep)(_consts.defaultDuration);

                case 9:

                  log('handleAnswerClick!');
                  // handleAnswerClick(choiceOrder, null)

                  // Init Animation Values
                  // for (let i = 0; i < coverAnim.length; i++) {
                  //   coverAnim[i].start({
                  //     left: -1000,
                  //     transition: {
                  //       duration: 0,
                  //     },
                  //   })
                  //   coverTextAnim.start({
                  //     opacity: 0,
                  //     transition: {
                  //       duration: 0,
                  //     },
                  //   })
                  // }

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, undefined);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    },
    choice.koDescription
  );
};

exports.default = ChoiceCoverText;

/***/ }),

/***/ "./code/components/AnswerMultipleComp/ChoiceWrap.js":
/*!**********************************************************!*\
  !*** ./code/components/AnswerMultipleComp/ChoiceWrap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n'], ['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceWrapFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);
var ChoiceWrap = function ChoiceWrap(_ref) {
  var children = _ref.children,
      choiceOrder = _ref.choiceOrder,
      clicked = _ref.clicked,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'choiceOrder', 'clicked']);

  var anim = (0, _framer.useAnimation)();

  var clickedAnim = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.sleep)(0.37);

            case 2:
              anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.1,
                  ease: 'easeInOut'
                }
              });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function clickedAnim() {
      return _ref2.apply(this, arguments);
    };
  }();

  var fadeAnim = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function fadeAnim() {
      return _ref3.apply(this, arguments);
    };
  }();

  if (clicked == -1) {
    anim.start({
      top: 0,
      opacity: 1,
      transition: {
        top: {
          duration: _consts.baseDuration,
          ease: _consts.powerEaseInOut
        },
        opacity: {
          duration: _consts.baseDuration,
          ease: 'linear'
        },
        delay: 0.33 + 0.77
      }
    });
  } else if (clicked == choiceOrder) {
    log('clickedAnim! - ', choiceOrder);
    clickedAnim();
  } else if (clicked != choiceOrder) {
    log('fadeAnim! - ', choiceOrder);
    fadeAnim();
  }

  return _react2.default.createElement(
    ChoiceWrapFrame,
    {
      initial: {
        top: 88,
        opacity: 0
      }
      // animate={{
      //   top: 0,
      //   opacity: 1,
      // }}
      , animate: anim
      // transition={{

      // }}
    },
    children
  );
};

exports.default = ChoiceWrap;

/***/ }),

/***/ "./code/components/AnswerMultipleComp/ChoiceWrapNo.js":
/*!************************************************************!*\
  !*** ./code/components/AnswerMultipleComp/ChoiceWrapNo.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n'], ['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceWrapFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);
var ChoiceWrap = function ChoiceWrap(_ref) {
  var children = _ref.children,
      choiceOrder = _ref.choiceOrder,
      clicked = _ref.clicked,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'choiceOrder', 'clicked']);

  var anim = (0, _framer.useAnimation)();

  var clickedAnim = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.sleep)(0.37);

            case 2:
              anim.start({
                opacity: 0.3,
                transition: {
                  duration: 0.1,
                  ease: 'easeInOut'
                }
              });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function clickedAnim() {
      return _ref2.apply(this, arguments);
    };
  }();

  var fadeAnim = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function fadeAnim() {
      return _ref3.apply(this, arguments);
    };
  }();

  if (clicked == -1) {
    anim.start({
      top: 0,
      opacity: 1,
      transition: {
        top: {
          duration: _consts.baseDuration,
          ease: _consts.powerEaseInOut
        },
        opacity: {
          duration: _consts.baseDuration,
          ease: 'linear'
        },
        delay: 0.33 + 0.77
      }
    });
  } else if (clicked == choiceOrder) {
    log('clickedAnim! - ', choiceOrder);
    clickedAnim();
  } else if (clicked != choiceOrder) {
    log('fadeAnim! - ', choiceOrder);
    fadeAnim();
  }

  return _react2.default.createElement(
    ChoiceWrapFrame,
    {
      initial: {
        top: 88
        // opacity: 0,
      },
      animate: {
        top: 0
        // opacity: 1,
      }
      // animate={anim}
      // transition={{

      // }}
    },
    children
  );
};

exports.default = ChoiceWrap;

/***/ }),

/***/ "./code/components/AnswerMultipleComp/index.js":
/*!*****************************************************!*\
  !*** ./code/components/AnswerMultipleComp/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n'], ['\n  width: initial !important;\n  height: initial !important;\n  background: transparent !important;\n\n  border-radius: 35px;\n\n  margin-right: 3px;\n  margin-left: 3px;\n  margin-bottom: 13px !important;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _datas = __webpack_require__(/*! ../../datas */ "./code/datas/index.js");

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _ChoiceCover = __webpack_require__(/*! ./ChoiceCover */ "./code/components/AnswerMultipleComp/ChoiceCover.js");

var _ChoiceCover2 = _interopRequireDefault(_ChoiceCover);

var _Choice = __webpack_require__(/*! ./Choice */ "./code/components/AnswerMultipleComp/Choice.js");

var _Choice2 = _interopRequireDefault(_Choice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceWrap = (0, _styledComponents2.default)(_framer.Frame)(_templateObject);

var AnswerMultipleComp = function AnswerMultipleComp(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  var _useState = (0, _react.useState)({
    key: -1,
    animating: false
  }),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return _react2.default.createElement(
    _framer.Stack,
    {
      size: '100%',
      direction: 'horizontal',
      distribution: 'center',
      gap: 0,
      style: {
        flexWrap: 'wrap',
        alignContent: 'center'
      }
    },
    (0, _map2.default)(_datas.answer.currentQuestion.choices, function (choice, choiceOrder) {
      return _react2.default.createElement(
        ChoiceWrap,
        {
          key: choiceOrder,
          initial: {
            top: 88
          },
          animate: {
            top: 0
          },
          transition: {
            top: {
              duration: _consts.baseDuration,
              ease: _consts.powerEaseInOut
            },
            opacity: {
              duration: _consts.baseDuration,
              ease: 'linear'
            },
            delay: 0.33 + 0.77
          }
        },
        _react2.default.createElement(_ChoiceCover2.default, {
          type: 'multiple',
          choice: choice,
          choiceOrder: choiceOrder,
          clicked: clicked,
          setClicked: setClicked
        }),
        _react2.default.createElement(_Choice2.default, {
          choice: choice,
          choiceOrder: choiceOrder,
          clicked: clicked
        })
      );
    })
  );
};

exports.default = AnswerMultipleComp;

/***/ }),

/***/ "./code/components/ChatComp/Bubble.js":
/*!********************************************!*\
  !*** ./code/components/ChatComp/Bubble.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  text-align: right;\n\n\n  ', '\n\n      \n  /* Only Question Styles */\n  ', '\n\n    ', '\n\n \n  /* Only Answer Styles */\n  ', '\n\n    ', '\n\n  ', '\n\n  ', '\n\n\n'], ['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  text-align: right;\n\n\n  ', '\n\n      \n  /* Only Question Styles */\n  ', '\n\n    ', '\n\n \n  /* Only Answer Styles */\n  ', '\n\n    ', '\n\n  ', '\n\n  ', '\n\n\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n        padding: 0;\n      }\n    '], ['\n      ', ' {\n        padding: 0;\n      }\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      text-align: left;\n\n      ', ' {\n        background: #ebebeb !important;\n        border-radius: 15.25px 15.25px 15.25px 5px;\n        max-width: ', 'px;\n      }\n      ', ' {\n        color: #292929;\n        text-align: left !important;\n        line-height: 18.25px;\n      }\n    '], ['\n      text-align: left;\n\n      ', ' {\n        background: #ebebeb !important;\n        border-radius: 15.25px 15.25px 15.25px 5px;\n        max-width: ', 'px;\n      }\n      ', ' {\n        color: #292929;\n        text-align: left !important;\n        line-height: 18.25px;\n      }\n    ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n        ', ' {\n          /* fix height of Img, cause it makes weird scroll */\n          height: 100px;\n          background: transparent !important;\n        }\n      '], ['\n        ', ' {\n          /* fix height of Img, cause it makes weird scroll */\n          height: 100px;\n          background: transparent !important;\n        }\n      ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n        white-space: nowrap;\n      }\n    '], ['\n      ', ' {\n        white-space: nowrap;\n      }\n    ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n        ', ' {\n          background: transparent !important;\n          padding: 0;\n          height: 51px !important;\n        }\n\n        ', ' {\n          min-width: 100%;\n          min-height: 100%;\n        }\n      '], ['\n        ', ' {\n          background: transparent !important;\n          padding: 0;\n          height: 51px !important;\n        }\n\n        ', ' {\n          min-width: 100%;\n          min-height: 100%;\n        }\n      ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n        /* background: linear-gradient(\n          92deg,\n          #fd8d58,\n          #fd5664 50%,\n          #e35289\n        ) !important; */\n        width: 115px;\n        height: 30px;\n      }\n\n      ', ' {\n        width: 100%;\n        padding: 0;\n        object-fit: contain;\n      }\n    '], ['\n      ', ' {\n        /* background: linear-gradient(\n          92deg,\n          #fd8d58,\n          #fd5664 50%,\n          #e35289\n        ) !important; */\n        width: 115px;\n        height: 30px;\n      }\n\n      ', ' {\n        width: 100%;\n        padding: 0;\n        object-fit: contain;\n      }\n    ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n        text-align: left !important;\n      }\n    '], ['\n      ', ' {\n        text-align: left !important;\n      }\n    ']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = __webpack_require__(/*! ./ */ "./code/components/ChatComp/index.js");

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BubbleFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject, function (props) {
  return props.isImg && (0, _styledComponents.css)(_templateObject2, _.Content);
}, function (props) {
  return props.questionType && (0, _styledComponents.css)(_templateObject3, _.Content, 549 / 2, _.Text);
}, function (props) {
  return props.questionType && props.isImg && (0, _styledComponents.css)(_templateObject4, _.Content);
}, function (props) {
  return props.answerType == 'Multiple Choice' && !props.questionType && (0, _styledComponents.css)(_templateObject5, _.Text);
}, function (props) {
  return props.answerType == 'Emoji Rating' && !props.questionType && (0, _styledComponents.css)(_templateObject6, _.Content, _.Img);
}, function (props) {
  return props.answerType == 'Star Rating' && !props.questionType && (0, _styledComponents.css)(_templateObject7, _.Content, _.Img);
}, function (props) {
  return props.answerType == 'Comment' && !props.questionType && (0, _styledComponents.css)(_templateObject8, _.Text);
});

var Bubble = function Bubble(_ref) {
  var questionType = _ref.questionType,
      answerType = _ref.answerType,
      isImg = _ref.isImg,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['questionType', 'answerType', 'isImg', 'children']);

  var questionInitial = {
    scale: 0
  };
  var answerInitial = {
    scale: 1
  };
  return _react2.default.createElement(
    BubbleFrame,
    {
      initial: questionType ? questionInitial : answerInitial,
      animate: {
        scale: 1
      },
      originX: 0,
      originY: 1,
      transition: {
        scale: { duration: 0.33, ease: _consts.powerEaseInOut },
        delay: _consts.delayBeforeNewQuestion
      },
      questionType: questionType,
      answerType: answerType,
      isImg: isImg,
      className: 'chat' // for auto scrolling
    },
    children
  );
};

exports.default = Bubble;

/***/ }),

/***/ "./code/components/ChatComp/Bubble/Loading.js":
/*!****************************************************!*\
  !*** ./code/components/ChatComp/Bubble/Loading.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);
// const Circle = styled.div``

var Loading = function Loading(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  return _react2.default.createElement(
    _framer.Stack,
    {
      direction: 'horizontal',
      distribution: 'center',
      background: 'green',
      size: '100%'
    },
    _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'red' }),
    _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'red' }),
    _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'red' })
  );
};

exports.default = Loading;

/***/ }),

/***/ "./code/components/ChatComp/Bubble/index.js":
/*!**************************************************!*\
  !*** ./code/components/ChatComp/Bubble/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  text-align: right;\n\n  ', '\n'], ['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  text-align: right;\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      text-align: left;\n\n      ', ' {\n        background: #ebebeb !important;\n        border-radius: 15.25px 15.25px 15.25px 5px;\n      }\n      ', ' {\n        color: #292929;\n        text-align: left !important;\n        line-height: 18.25px;\n      }\n    '], ['\n      text-align: left;\n\n      ', ' {\n        background: #ebebeb !important;\n        border-radius: 15.25px 15.25px 15.25px 5px;\n      }\n      ', ' {\n        color: #292929;\n        text-align: left !important;\n        line-height: 18.25px;\n      }\n    ']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = __webpack_require__(/*! ../ */ "./code/components/ChatComp/index.js");

var _consts = __webpack_require__(/*! ../../../shared/consts */ "./code/shared/consts.js");

var _Loading = __webpack_require__(/*! ./Loading */ "./code/components/ChatComp/Bubble/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BubbleFrame = (0, _styledComponents2.default)(_framer.Frame)(_templateObject, function (props) {
  return props.questionType && (0, _styledComponents.css)(_templateObject2, _.Content, _.Text);
});

var Bubble = function Bubble(_ref) {
  var questionType = _ref.questionType,
      children = _ref.children,
      index = _ref.index,
      props = (0, _objectWithoutProperties3.default)(_ref, ['questionType', 'children', 'index']);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var questionInitial = {
    scale: 0
  };
  var answerInitial = {
    scale: 1
  };
  return _react2.default.createElement(
    BubbleFrame,
    {
      initial: questionType ? questionInitial : answerInitial,
      animate: {
        scale: 1
      },
      originX: 0,
      originY: 1,
      transition: {
        scale: { duration: 0.33, ease: _consts.powerEaseInOut },
        delay: _consts.delayBeforeNewQuestion
      },
      questionType: questionType,
      className: 'chat' // for auto scrolling
    },
    loading ? _react2.default.createElement(_Loading2.default, null) : children
  );
};

exports.default = Bubble;

/***/ }),

/***/ "./code/components/ChatComp/Loading.js":
/*!*********************************************!*\
  !*** ./code/components/ChatComp/Loading.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 25.25px;\n  height: 18px;\n'], ['\n  width: 25.25px;\n  height: 18px;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

var _Bubble = __webpack_require__(/*! ./Bubble */ "./code/components/ChatComp/Bubble.js");

var _Bubble2 = _interopRequireDefault(_Bubble);

var _ = __webpack_require__(/*! ./ */ "./code/components/ChatComp/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);

var Loading = function Loading(_ref) {
  var questionType = _ref.questionType,
      props = (0, _objectWithoutProperties3.default)(_ref, ['questionType']);

  return _react2.default.createElement(
    _Bubble2.default,
    { questionType: 1 },
    _react2.default.createElement(
      _.Content,
      null,
      _react2.default.createElement(
        _.Text,
        null,
        _react2.default.createElement(
          Wrap,
          null,
          _react2.default.createElement(
            _framer.Stack,
            {
              direction: 'horizontal',
              distribution: 'center',
              background: '#ebebeb',
              size: '100%',
              gap: 4.69,
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              },
              transition: {
                delay: _consts.loadingDuration,
                duration: _consts.loadingEndAnimDuration,
                ease: 'easeInOut'
              }
            },
            _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'white', opacity: 0.25, radius: 20 }),
            _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'white', opacity: 0.5, radius: 20 }),
            _react2.default.createElement(_framer.Frame, { size: 6.8, background: 'white', opacity: 1, radius: 20 })
          )
        )
      )
    )
  );
};

exports.default = Loading;

/***/ }),

/***/ "./code/components/ChatComp/index.js":
/*!*******************************************!*\
  !*** ./code/components/ChatComp/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Img = exports.Content = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  border-radius: 15.25px 15.25px 5px 15.25px;\n  padding: 12px;\n\n  background: #fd5863 !important;\n  margin-bottom: 12px;\n  display: inline-block;\n  overflow: hidden;\n'], ['\n  border-radius: 15.25px 15.25px 5px 15.25px;\n  padding: 12px;\n\n  background: #fd5863 !important;\n  margin-bottom: 12px;\n  display: inline-block;\n  overflow: hidden;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  max-width: 100%;\n  height: 100%;\n'], ['\n  display: block;\n  max-width: 100%;\n  height: 100%;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  line-height: 13px;\n  letter-spacing: 0.205px;\n  color: #ffffff;\n'], ['\n  width: initial !important;\n  height: initial !important;\n  position: relative !important;\n  background: transparent !important;\n\n  font-family: Spoqa Han Sans;\n  font-size: 13.5px;\n  line-height: 13px;\n  letter-spacing: 0.205px;\n  color: #ffffff;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _Bubble = __webpack_require__(/*! ./Bubble */ "./code/components/ChatComp/Bubble.js");

var _Bubble2 = _interopRequireDefault(_Bubble);

var _Loading = __webpack_require__(/*! ./Loading */ "./code/components/ChatComp/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles
var Wrap = _styledComponents2.default.div(_templateObject);

var Content = exports.Content = _styledComponents2.default.div(_templateObject2);

var Img = exports.Img = _styledComponents2.default.img(_templateObject3);
var Text = exports.Text = (0, _styledComponents2.default)(_framer.Frame)(_templateObject4);

// Comp
var ChatComp = function ChatComp(_ref) {
  var questionType = _ref.questionType,
      answerType = _ref.answerType,
      chat = _ref.chat,
      text = _ref.text,
      index = _ref.index,
      props = (0, _objectWithoutProperties3.default)(_ref, ['questionType', 'answerType', 'chat', 'text', 'index']);

  var questionInitial = {
    opacity: 0
  };
  var answerInitial = {
    opacity: 1
  };

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0, _react.useEffect)(function () {
    var fakeLoading = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 1. scroll to loading
                (0, _utils.scrollToLastChat)();

                if (!questionType) {
                  _context.next = 5;
                  break;
                }

                _context.next = 4;
                return (0, _utils.sleep)(_consts.loadingDuration + _consts.loadingEndAnimDuration);

              case 4:
                setLoading(false);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function fakeLoading() {
        return _ref2.apply(this, arguments);
      };
    }();
    fakeLoading();
  }, []);
  (0, _react.useEffect)(function () {
    if (!loading && questionType) (0, _utils.scrollToLastChat)(); // 3. scroll to question after loading End(!)
  }, [loading]);

  return loading && questionType ? _react2.default.createElement(_Loading2.default, { questionType: questionType }) : _react2.default.createElement(
    Wrap,
    null,
    chat.image ? _react2.default.createElement(
      _Bubble2.default,
      {
        questionType: questionType,
        answerType: answerType,
        isImg: true
      },
      _react2.default.createElement(
        Content,
        null,
        chat.image.includes('http') ? _react2.default.createElement(Img, { src: chat.image }) : _react2.default.createElement(Img, { src: _consts.assetsEndPoint + '/' + chat.image })
      )
    ) : '',
    chat.koDescription ? _react2.default.createElement(
      _Bubble2.default,
      { questionType: questionType, answerType: answerType },
      _react2.default.createElement(
        Content,
        null,
        _react2.default.createElement(
          Text,
          {
            initial: questionType ? questionInitial : answerInitial,
            animate: {
              opacity: 1
            },
            transition: {
              delay: 0.3,
              ease: 'easeInOut'
            }
          },
          chat.koDescription
        )
      )
    ) : ''
  );
};

exports.default = ChatComp;

/***/ }),

/***/ "./code/components/ChatListComp/Lychee.js":
/*!************************************************!*\
  !*** ./code/components/ChatListComp/Lychee.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _framer = __webpack_require__(/*! framer */ "framer");

var _resource = __webpack_require__(/*! framer/resource */ "framer/resource");

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lychee = function Lychee() {
  var anim = (0, _framer.useAnimation)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      revealed = _useState2[0],
      setRevealed = _useState2[1];

  (0, _react.useEffect)(function () {
    var startLycheeAnim = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _utils.sleep)(_consts.delayBeforeNewQuestion);

              case 2:
                _context.next = 4;
                return anim.start({
                  scale: 1.193,
                  transition: {
                    duration: 0.16,
                    ease: 'easeInOut'
                  }
                });

              case 4:
                anim.start({
                  scale: 1,
                  transition: {
                    duration: 0.14,
                    ease: 'easeInOut'
                  }
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function startLycheeAnim() {
        return _ref.apply(this, arguments);
      };
    }();

    if (!revealed) {
      startLycheeAnim();
      setRevealed(true);
    }
  });
  return _react2.default.createElement(_framer.Frame
  // width={26.5}
  // height={25.5} <- .5 crops image after animation
  , { width: 27,
    height: 26,
    left: -36,
    style: {
      background: 'center / contain no-repeat url("' + (0, _resource.url)('../images/lychee.png') + '")'
    },
    initial: { scale: 0 },
    animate: anim
  });
};

exports.default = Lychee;

/***/ }),

/***/ "./code/components/ChatListComp/index.js":
/*!***********************************************!*\
  !*** ./code/components/ChatListComp/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  overflow: scroll;\n  /* padding for preventing cropping answers */\n  padding-bottom: 100px;\n  background: white;\n  height: 100%;\n  padding-left: 49.5px;\n  padding-right: 15.5px;\n  padding-top: 35.5px;\n  /* fix right border of Main not show up */\n  border-right: 2.5px solid #ebebeb;\n  border-left: 2.5px solid #ebebeb;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n'], ['\n  overflow: scroll;\n  /* padding for preventing cropping answers */\n  padding-bottom: 100px;\n  background: white;\n  height: 100%;\n  padding-left: 49.5px;\n  padding-right: 15.5px;\n  padding-top: 35.5px;\n  /* fix right border of Main not show up */\n  border-right: 2.5px solid #ebebeb;\n  border-left: 2.5px solid #ebebeb;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n'], ['\n  position: relative;\n']);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Chat = __webpack_require__(/*! ../../../code/Chat */ "./code/Chat.tsx");

var _utils = __webpack_require__(/*! ../../shared/utils */ "./code/shared/utils.js");

var _consts = __webpack_require__(/*! ../../shared/consts */ "./code/shared/consts.js");

var _map = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");

var _map2 = _interopRequireDefault(_map);

var _Lychee = __webpack_require__(/*! ./Lychee */ "./code/components/ChatListComp/Lychee.js");

var _Lychee2 = _interopRequireDefault(_Lychee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrap = _styledComponents2.default.div(_templateObject);

var ChatWrap = _styledComponents2.default.div(_templateObject2);

var ChatListComp = function ChatListComp(_ref) {
  var chatList = _ref.chatList,
      props = (0, _objectWithoutProperties3.default)(_ref, ['chatList']);

  return _react2.default.createElement(
    Wrap,
    { className: 'chat-list' },
    (0, _map2.default)(chatList, function (chat, id) {
      return _react2.default.createElement(
        ChatWrap,
        { key: id },
        id == 0 || chat.questionType && // show Lychee when it's a question
        !chatList[id - 1].questionType ? // show Lychee only after an answer
        _react2.default.createElement(_Lychee2.default, null) : '',
        _react2.default.createElement(_Chat.Chat, {
          index: id,
          chat: chat,
          questionType: chat.questionType,
          answerType: chat.answerType
        })
      );
    })
  );
};

exports.default = ChatListComp;

/***/ }),

/***/ "./code/datas/answer.js":
/*!******************************!*\
  !*** ./code/datas/answer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = __webpack_require__(/*! framer */ "framer");

var type = null;
// 'None', "Emoji Rating", "Likert", "Star Rating", "Slider", "Comment"
var currentOrder = 0;
var currentQuestion = null;
var currentQuestionDepth = 0;
var subQuestions = null;
var subQuestionOrder = 0;
var result = [];
var clicking = false;

exports.default = (0, _framer.Data)({
  type: type,
  currentOrder: currentOrder,
  currentQuestion: currentQuestion,
  currentQuestionDepth: currentQuestionDepth,
  subQuestions: subQuestions,
  subQuestionOrder: subQuestionOrder,
  result: result,
  clicking: clicking
});

/***/ }),

/***/ "./code/datas/chats.js":
/*!*****************************!*\
  !*** ./code/datas/chats.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = __webpack_require__(/*! framer */ "framer");

var _demoQuestions = __webpack_require__(/*! ./demoQuestions */ "./code/datas/demoQuestions.js");

var _demoQuestions2 = _interopRequireDefault(_demoQuestions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questions = _demoQuestions2.default;
var list = null;

exports.default = (0, _framer.Data)({
  questions: questions,
  list: list
});

/***/ }),

/***/ "./code/datas/company.js":
/*!*******************************!*\
  !*** ./code/datas/company.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _framer = __webpack_require__(/*! framer */ "framer")

var _resource = __webpack_require__(/*! framer/resource */ "framer/resource")

var visible = false
var name = "CHATBOT"
var logo =
  "center / contain no-repeat url(" +
  (0, _resource.url)("../images/chatbot-logo.png") +
  ")"
var sector = ""

exports.default = (0, _framer.Data)({
  visible: visible,
  name: name,
  logo: logo,
  sector: sector,
})


/***/ }),

/***/ "./code/datas/demoQuestions.js":
/*!*************************************!*\
  !*** ./code/datas/demoQuestions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true,
})
var data = [
  {
    questionType: "greetings",
    answerType: "None",
    koDescription: "Hi~ I'm P-BOT to get survey for OOO employees life 😀",
    enDescription: "",
    dashboardDescription: "",
    order: 1,
    image: null,
    questionSubtype: null,
    id: 1153,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [],
  },
  {
    questionType: "greetings",
    answerType: "None",
    koDescription:
      "I am a chatbot developed by the HR Analytics company Chatbot, and we will regularly hear from our employees.",
    enDescription: "",
    dashboardDescription: "",
    order: 2,
    image: null,
    questionSubtype: null,
    id: 1154,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [],
  },
  {
    questionType: "greetings",
    answerType: "None",
    koDescription: "Thank you very much~😉",
    enDescription: "",
    dashboardDescription: "",
    order: 3,
    image: null,
    questionSubtype: null,
    id: 1155,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [],
  },
  {
    questionType: "greetings",
    answerType: "Multiple Choice",
    koDescription:
      "The answer is thoroughly anonymous, so please give a frank answer. Time required is less than 3 minutes. Can I get started right away?",
    enDescription: "",
    dashboardDescription: "",
    order: 4,
    image: null,
    questionSubtype: null,
    id: 1156,
    surveyId: 11,
    parentId: null,
    subquestions: [
      {
        questionType: "Remind",
        answerType: "Multiple Choice",
        koDescription: "Yes, please choose a comfortable time!😊",
        enDescription: "",
        dashboardDescription: "",
        order: 1,
        image: null,
        questionSubtype: "",
        id: 1170,
        surveyId: 11,
        parentId: 1156,
        choices: [
          {
            koDescription: "1 hour later",
            enDescription: "",
            order: 1,
            score: 0,
            subquestion: 2,
            id: 3761,
            questionId: 1170,
          },
          {
            koDescription: "3 hour later",
            enDescription: "",
            order: 2,
            score: 0,
            subquestion: 2,
            id: 3762,
            questionId: 1170,
          },
          {
            koDescription: "Tomorrow",
            enDescription: "",
            order: 3,
            score: 0,
            subquestion: 2,
            id: 3763,
            questionId: 1170,
          },
        ],
      },
      {
        questionType: "termination",
        answerType: "None",
        koDescription: "I'll meet you on time.~🤗",
        enDescription: "",
        dashboardDescription: "",
        order: 2,
        image: null,
        questionSubtype: "",
        id: 1171,
        surveyId: 11,
        parentId: 1156,
        choices: [],
      },
    ],
    choices: [
      {
        koDescription: "👌 Start",
        enDescription: "",
        order: 1,
        score: 0,
        subquestion: null,
        id: 3701,
        questionId: 1156,
      },
      {
        koDescription: "Let me know it again later~",
        enDescription: "",
        order: 2,
        score: 0,
        subquestion: 1,
        id: 3702,
        questionId: 1156,
      },
    ],
  },
  {
    questionType: "greetings",
    answerType: "None",
    koDescription:
      "Please remind yourself of the experiences you have had in your last month~",
    enDescription: "",
    dashboardDescription: "",
    order: 5,
    image: null,
    questionSubtype: null,
    id: 1157,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [],
  },
  {
    questionType: "Work-life Balance",
    answerType: "Emoji Rating",
    koDescription:
      "Do you think the balance of work and life in the past month has been appropriate?",
    enDescription: "",
    dashboardDescription:
      "I think the balance of my work and life in the past month has been appropriate.",
    order: 6,
    image: null,
    questionSubtype: "",
    id: 1158,
    surveyId: 11,
    parentId: null,
    subquestions: [
      {
        questionType: "Normal",
        answerType: "Multiple Choice",
        koDescription: "How many hours have you worked overtime this month?",
        enDescription: "",
        dashboardDescription: "Average overtime per day",
        order: 1,
        image: null,
        questionSubtype: "Overtime",
        id: 1172,
        surveyId: 11,
        parentId: 1158,
        choices: [
          {
            koDescription: "Less than 1 hour",
            enDescription: "",
            order: 1,
            score: 1,
            subquestion: null,
            id: 3764,
            questionId: 1172,
          },
          {
            koDescription: "1-2 hours",
            enDescription: "",
            order: 2,
            score: 2,
            subquestion: null,
            id: 3765,
            questionId: 1172,
          },
          {
            koDescription: "2-3 hours",
            enDescription: "",
            order: 3,
            score: 3,
            subquestion: 2,
            id: 3766,
            questionId: 1172,
          },
          {
            koDescription: "More than 3 hours",
            enDescription: "",
            order: 4,
            score: 4,
            subquestion: 3,
            id: 3767,
            questionId: 1172,
          },
        ],
      },
      {
        questionType: "greetings",
        answerType: "None",
        koDescription: "😨",
        enDescription: "",
        dashboardDescription: "",
        order: 2,
        image: null,
        questionSubtype: null,
        id: 1173,
        surveyId: 11,
        parentId: 1158,
        choices: [],
      },
      {
        questionType: "greetings",
        answerType: "None",
        koDescription: "😱",
        enDescription: "",
        dashboardDescription: "",
        order: 3,
        image: null,
        questionSubtype: null,
        id: 1174,
        surveyId: 11,
        parentId: 1158,
        choices: [],
      },
    ],
    choices: [
      {
        koDescription: "😡",
        enDescription: "😡",
        order: 1,
        score: 20,
        subquestion: 1,
        id: 3703,
        questionId: 1158,
      },
      {
        koDescription: "😠",
        enDescription: "😠",
        order: 2,
        score: 40,
        subquestion: 1,
        id: 3704,
        questionId: 1158,
      },
      {
        koDescription: "😐",
        enDescription: "😐",
        order: 3,
        score: 60,
        subquestion: 1,
        id: 3705,
        questionId: 1158,
      },
      {
        koDescription: "😏",
        enDescription: "😏",
        order: 4,
        score: 80,
        subquestion: 0,
        id: 3706,
        questionId: 1158,
      },
      {
        koDescription: "😃",
        enDescription: "😃",
        order: 5,
        score: 100,
        subquestion: 0,
        id: 3707,
        questionId: 1158,
      },
    ],
  },
  {
    questionType: "Meaningful Work",
    answerType: "Likert",
    koDescription:
      "How did you feel about the last month's work? Was it worth it enough?",
    enDescription: "",
    dashboardDescription: "I think the work I did was valuable.",
    order: 7,
    image: null,
    questionSubtype: "",
    id: 1159,
    surveyId: 11,
    parentId: null,
    subquestions: [
      {
        questionType: "Normal",
        answerType: "Multiple Choice",
        koDescription: "What makes you feel that your work is not worth it? 😥",
        enDescription: "",
        dashboardDescription: "Why business value is low",
        order: 1,
        image: null,
        questionSubtype: "Important business value",
        id: 1175,
        surveyId: 11,
        parentId: 1159,
        choices: [
          {
            koDescription: "Unproductive work",
            enDescription: "",
            order: 1,
            score: 1,
            subquestion: null,
            id: 3781,
            questionId: 1175,
          },
          {
            koDescription: "Unnecessary work",
            enDescription: "",
            order: 2,
            score: 2,
            subquestion: null,
            id: 3782,
            questionId: 1175,
          },
          {
            koDescription: "Unacceptable work",
            enDescription: "",
            order: 3,
            score: 3,
            subquestion: null,
            id: 3784,
            questionId: 1175,
          },
          {
            koDescription: "Things that do not fit my capacity",
            enDescription: "",
            order: 4,
            score: 4,
            subquestion: null,
            id: 3783,
            questionId: 1175,
          },
          {
            koDescription: "Other",
            enDescription: "",
            order: 5,
            score: 5,
            subquestion: null,
            id: 3785,
            questionId: 1175,
          },
        ],
      },
    ],
    choices: [
      {
        koDescription: "Very Unworthiness",
        enDescription: "",
        order: 1,
        score: 20,
        subquestion: 1,
        id: 3708,
        questionId: 1159,
      },
      {
        koDescription: "Unworthiness",
        enDescription: "",
        order: 2,
        score: 40,
        subquestion: 1,
        id: 3709,
        questionId: 1159,
      },
      {
        koDescription: "Normal",
        enDescription: "",
        order: 3,
        score: 60,
        subquestion: 1,
        id: 3710,
        questionId: 1159,
      },
      {
        koDescription: "Worthiness",
        enDescription: "",
        order: 4,
        score: 80,
        subquestion: null,
        id: 3711,
        questionId: 1159,
      },
      {
        koDescription: "Very Worthiness",
        enDescription: "",
        order: 5,
        score: 100,
        subquestion: null,
        id: 3712,
        questionId: 1159,
      },
    ],
  },
  {
    questionType: "Mental Wellness",
    answerType: "Emoji Rating",
    koDescription:
      "Overall, how was your mental condition during the past month?",
    enDescription: "",
    dashboardDescription: "My mental health status in the past month",
    order: 8,
    image: null,
    questionSubtype: "",
    id: 1160,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [
      {
        koDescription: "😡",
        enDescription: "😡",
        order: 1,
        score: 20,
        subquestion: null,
        id: 3713,
        questionId: 1160,
      },
      {
        koDescription: "😠",
        enDescription: "😠",
        order: 2,
        score: 40,
        subquestion: null,
        id: 3714,
        questionId: 1160,
      },
      {
        koDescription: "😐",
        enDescription: "😐",
        order: 3,
        score: 60,
        subquestion: null,
        id: 3722,
        questionId: 1160,
      },
      {
        koDescription: "😏",
        enDescription: "😏",
        order: 4,
        score: 80,
        subquestion: null,
        id: 3715,
        questionId: 1160,
      },
      {
        koDescription: "😃",
        enDescription: "😃",
        order: 5,
        score: 100,
        subquestion: null,
        id: 3716,
        questionId: 1160,
      },
    ],
  },
  {
    questionType: "Leadership",
    answerType: "Star Rating",
    koDescription:
      "Do you think your boss now shows effective leadership for his role?",
    enDescription: "",
    dashboardDescription:
      "My boss thinks that it shows effective leadership for the role.",
    order: 9,
    image: null,
    questionSubtype: "",
    id: 1161,
    surveyId: 11,
    parentId: null,
    subquestions: [
      {
        questionType: "Normal",
        answerType: "Multiple Choice",
        koDescription: "What parts do you feel needing supplementation?",
        enDescription: "",
        dashboardDescription: "Areas requiring development",
        order: 1,
        image: null,
        questionSubtype: "Leadership Improvements",
        id: 1178,
        surveyId: 11,
        parentId: 1161,
        choices: [
          {
            koDescription: "Coaching / Feedback",
            enDescription: "",
            order: 1,
            score: 0,
            subquestion: null,
            id: 3774,
            questionId: 1178,
          },
          {
            koDescription: "Motivation",
            enDescription: "",
            order: 2,
            score: 1,
            subquestion: null,
            id: 3775,
            questionId: 1178,
          },
          {
            koDescription: "Fairness",
            enDescription: "",
            order: 3,
            score: 2,
            subquestion: null,
            id: 3776,
            questionId: 1178,
          },
          {
            koDescription: "Respect / consideration",
            enDescription: "",
            order: 4,
            score: 3,
            subquestion: null,
            id: 3777,
            questionId: 1178,
          },
          {
            koDescription: "problem solving",
            enDescription: "",
            order: 5,
            score: 4,
            subquestion: null,
            id: 3778,
            questionId: 1178,
          },
          {
            koDescription: "Indication",
            enDescription: "",
            order: 6,
            score: 5,
            subquestion: null,
            id: 3779,
            questionId: 1178,
          },
          {
            koDescription: "Other",
            enDescription: "",
            order: 7,
            score: 6,
            subquestion: null,
            id: 3780,
            questionId: 1178,
          },
        ],
      },
      {
        questionType: "greetings",
        answerType: "None",
        koDescription: "👍",
        enDescription: "",
        dashboardDescription: "",
        order: 2,
        image: null,
        questionSubtype: null,
        id: 1176,
        surveyId: 11,
        parentId: 1161,
        choices: [],
      },
    ],
    choices: [
      {
        koDescription: "1",
        enDescription: "1",
        order: 1,
        score: 20,
        subquestion: 1,
        id: 3717,
        questionId: 1161,
      },
      {
        koDescription: "2",
        enDescription: "2",
        order: 2,
        score: 40,
        subquestion: 1,
        id: 3718,
        questionId: 1161,
      },
      {
        koDescription: "3",
        enDescription: "3",
        order: 3,
        score: 60,
        subquestion: 1,
        id: 3719,
        questionId: 1161,
      },
      {
        koDescription: "4",
        enDescription: "4",
        order: 4,
        score: 80,
        subquestion: 2,
        id: 3720,
        questionId: 1161,
      },
      {
        koDescription: "5",
        enDescription: "5",
        order: 5,
        score: 100,
        subquestion: 2,
        id: 3721,
        questionId: 1161,
      },
    ],
  },
  {
    questionType: "Turnover Intention",
    answerType: "Likert",
    koDescription: "Have you ever thought about leaving the last month?",
    enDescription: "",
    dashboardDescription:
      "I have been thinking about leaving or leaving for the last month.",
    order: 10,
    image: null,
    questionSubtype: "",
    id: 1152,
    surveyId: 11,
    parentId: null,
    subquestions: [
      {
        questionType: "Normal",
        answerType: "Multiple Choice",
        koDescription: "What are the main reasons for that?",
        enDescription: "",
        dashboardDescription: "Reasons for this retirement idea",
        order: 1,
        image: null,
        questionSubtype: "Reasons for leaving work",
        id: 1169,
        surveyId: 11,
        parentId: 1152,
        choices: [
          {
            koDescription: "Work related",
            enDescription: "",
            order: 1,
            score: 1,
            subquestion: null,
            id: 3754,
            questionId: 1169,
          },
          {
            koDescription: "Career Vision",
            enDescription: "",
            order: 2,
            score: 2,
            subquestion: null,
            id: 3755,
            questionId: 1169,
          },
          {
            koDescription: "Boss related",
            enDescription: "",
            order: 3,
            score: 3,
            subquestion: null,
            id: 3756,
            questionId: 1169,
          },
          {
            koDescription: "Compensation related",
            enDescription: "",
            order: 4,
            score: 4,
            subquestion: null,
            id: 3757,
            questionId: 1169,
          },
          {
            koDescription: "HR system issues",
            enDescription: "",
            order: 5,
            score: 5,
            subquestion: null,
            id: 3758,
            questionId: 1169,
          },
          {
            koDescription: "Work-life balance",
            enDescription: "",
            order: 6,
            score: 6,
            subquestion: null,
            id: 3759,
            questionId: 1169,
          },
          {
            koDescription: "Other",
            enDescription: "",
            order: 7,
            score: 7,
            subquestion: null,
            id: 3760,
            questionId: 1169,
          },
        ],
      },
    ],
    choices: [
      {
        koDescription: "Not at all",
        enDescription: "",
        order: 1,
        score: 20,
        subquestion: null,
        id: 3696,
        questionId: 1152,
      },
      {
        koDescription: "Almost none",
        enDescription: "",
        order: 2,
        score: 40,
        subquestion: null,
        id: 3697,
        questionId: 1152,
      },
      {
        koDescription: "Sometimes",
        enDescription: "",
        order: 3,
        score: 60,
        subquestion: 1,
        id: 3698,
        questionId: 1152,
      },
      {
        koDescription: "Frequent",
        enDescription: "",
        order: 4,
        score: 80,
        subquestion: 1,
        id: 3699,
        questionId: 1152,
      },
      {
        koDescription: "Very often",
        enDescription: "",
        order: 5,
        score: 100,
        subquestion: 1,
        id: 3700,
        questionId: 1152,
      },
    ],
  },
  {
    questionType: "Enabler",
    answerType: "Emoji Rating",
    koDescription:
      "Is your team or company providing effective support so you can do your job better now?",
    enDescription: "",
    dashboardDescription:
      "I think that effective support is being provided by the team and the company so that I can do my job better.",
    order: 11,
    image: null,
    questionSubtype: "",
    id: 1162,
    surveyId: 11,
    parentId: null,
    subquestions: [
      {
        questionType: "Normal",
        answerType: "Multiple Choice",
        koDescription: "Which part do you think needs improvement?",
        enDescription: "",
        dashboardDescription: "Area to improve",
        order: 1,
        image: null,
        questionSubtype: "Support complaint",
        id: 1177,
        surveyId: 11,
        parentId: 1162,
        choices: [
          {
            koDescription: "Workforce reinforcement",
            enDescription: "",
            order: 1,
            score: 1,
            subquestion: null,
            id: 3768,
            questionId: 1177,
          },
          {
            koDescription: "Equipment / Systems",
            enDescription: "",
            order: 2,
            score: 2,
            subquestion: null,
            id: 3769,
            questionId: 1177,
          },
          {
            koDescription: "System / Process",
            enDescription: "",
            order: 3,
            score: 3,
            subquestion: null,
            id: 3770,
            questionId: 1177,
          },
          {
            koDescription: "Organizational structure",
            enDescription: "",
            order: 4,
            score: 4,
            subquestion: null,
            id: 3771,
            questionId: 1177,
          },
          {
            koDescription: "R&R",
            enDescription: "",
            order: 5,
            score: 5,
            subquestion: null,
            id: 3772,
            questionId: 1177,
          },
          {
            koDescription: "Others",
            enDescription: "",
            order: 6,
            score: 6,
            subquestion: null,
            id: 3773,
            questionId: 1177,
          },
        ],
      },
      {
        questionType: "greetings",
        answerType: "None",
        koDescription: "👍",
        enDescription: "",
        dashboardDescription: "",
        order: 2,
        image: null,
        questionSubtype: null,
        id: 1179,
        surveyId: 11,
        parentId: 1162,
        choices: [],
      },
    ],
    choices: [
      {
        koDescription: "😡",
        enDescription: "😡",
        order: 1,
        score: 20,
        subquestion: 1,
        id: 3733,
        questionId: 1162,
      },
      {
        koDescription: "😠",
        enDescription: "😠",
        order: 2,
        score: 40,
        subquestion: 1,
        id: 3734,
        questionId: 1162,
      },
      {
        koDescription: "😐",
        enDescription: "😐",
        order: 3,
        score: 60,
        subquestion: 1,
        id: 3735,
        questionId: 1162,
      },
      {
        koDescription: "😏",
        enDescription: "😏",
        order: 4,
        score: 80,
        subquestion: 2,
        id: 3736,
        questionId: 1162,
      },
      {
        koDescription: "😃",
        enDescription: "😃",
        order: 5,
        score: 100,
        subquestion: 2,
        id: 3737,
        questionId: 1162,
      },
    ],
  },
  {
    questionType: "Recognition",
    answerType: "Emoji Rating",
    koDescription:
      "Do you think you've received enough recognition from your boss or colleague about what you did well in the last month?",
    enDescription: "",
    dashboardDescription:
      "I think I got enough recognition from my boss or colleague about what I did well in the past month.",
    order: 12,
    image: null,
    questionSubtype: "",
    id: 1163,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [
      {
        koDescription: "😡",
        enDescription: "😡",
        order: 1,
        score: 20,
        subquestion: null,
        id: 3723,
        questionId: 1163,
      },
      {
        koDescription: "😠",
        enDescription: "😠",
        order: 2,
        score: 40,
        subquestion: null,
        id: 3732,
        questionId: 1163,
      },
      {
        koDescription: "😐",
        enDescription: "😐",
        order: 3,
        score: 60,
        subquestion: null,
        id: 3724,
        questionId: 1163,
      },
      {
        koDescription: "😏",
        enDescription: "😏",
        order: 4,
        score: 80,
        subquestion: null,
        id: 3725,
        questionId: 1163,
      },
      {
        koDescription: "😃",
        enDescription: "😃",
        order: 5,
        score: 100,
        subquestion: null,
        id: 3726,
        questionId: 1163,
      },
    ],
  },
  {
    questionType: "Empowerment",
    answerType: "Emoji Rating",
    koDescription:
      "Do you think you have been given enough autonomy and authority to perform your work over the last month?",
    enDescription: "",
    dashboardDescription:
      "I think I have been given enough autonomy and authority to carry out my work over the past month.",
    order: 13,
    image: null,
    questionSubtype: "",
    id: 1164,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [
      {
        koDescription: "😡",
        enDescription: "😡",
        order: 1,
        score: 20,
        subquestion: null,
        id: 3727,
        questionId: 1164,
      },
      {
        koDescription: "😠",
        enDescription: "😠",
        order: 2,
        score: 40,
        subquestion: null,
        id: 3728,
        questionId: 1164,
      },
      {
        koDescription: "😐",
        enDescription: "😐",
        order: 3,
        score: 60,
        subquestion: null,
        id: 3729,
        questionId: 1164,
      },
      {
        koDescription: "😏",
        enDescription: "😏",
        order: 4,
        score: 80,
        subquestion: null,
        id: 3730,
        questionId: 1164,
      },
      {
        koDescription: "😃",
        enDescription: "😃",
        order: 5,
        score: 100,
        subquestion: null,
        id: 3731,
        questionId: 1164,
      },
    ],
  },
  {
    questionType: "Growth",
    answerType: "Likert",
    koDescription:
      "Do you feel that there is a high possibility of personal growth in the company now?",
    enDescription: "",
    dashboardDescription:
      "I think the growth potential of the company is great now.",
    order: 14,
    image: null,
    questionSubtype: "",
    id: 1165,
    surveyId: 11,
    parentId: null,
    subquestions: [
      {
        questionType: "Normal",
        answerType: "Multiple Choice",
        koDescription: "Why do you think growth is unlikely?",
        enDescription: "",
        dashboardDescription: "Why you think growth potential is low",
        order: 1,
        image: null,
        questionSubtype: "Growth inhibition factor",
        id: 1180,
        surveyId: 11,
        parentId: 1165,
        choices: [
          {
            koDescription: "Lack of career opportunity",
            enDescription: "",
            order: 1,
            score: 1,
            subquestion: null,
            id: 3786,
            questionId: 1180,
          },
          {
            koDescription: "Inadequate education development",
            enDescription: "",
            order: 2,
            score: 2,
            subquestion: null,
            id: 3787,
            questionId: 1180,
          },
          {
            koDescription: "Lack of employment stability",
            enDescription: "",
            order: 3,
            score: 3,
            subquestion: null,
            id: 3788,
            questionId: 1180,
          },
          {
            koDescription: "HR operational justice",
            enDescription: "",
            order: 4,
            score: 4,
            subquestion: null,
            id: 3789,
            questionId: 1180,
          },
          {
            koDescription: "Other",
            enDescription: "",
            order: 5,
            score: 5,
            subquestion: null,
            id: 3790,
            questionId: 1180,
          },
        ],
      },
      {
        questionType: "greetings",
        answerType: "None",
        koDescription: "👍",
        enDescription: "",
        dashboardDescription: "",
        order: 2,
        image: null,
        questionSubtype: null,
        id: 1181,
        surveyId: 11,
        parentId: 1165,
        choices: [],
      },
    ],
    choices: [
      {
        koDescription: "It is not very",
        enDescription: "",
        order: 1,
        score: 20,
        subquestion: 1,
        id: 3738,
        questionId: 1165,
      },
      {
        koDescription: "Not like that",
        enDescription: "",
        order: 2,
        score: 40,
        subquestion: 1,
        id: 3739,
        questionId: 1165,
      },
      {
        koDescription: "Nomal",
        enDescription: "",
        order: 3,
        score: 60,
        subquestion: 1,
        id: 3740,
        questionId: 1165,
      },
      {
        koDescription: "Yes",
        enDescription: "",
        order: 4,
        score: 80,
        subquestion: 2,
        id: 3741,
        questionId: 1165,
      },
      {
        koDescription: "It really is",
        enDescription: "",
        order: 5,
        score: 100,
        subquestion: 2,
        id: 3742,
        questionId: 1165,
      },
    ],
  },
  {
    questionType: "eNPS",
    answerType: "Slider",
    koDescription:
      "If you have a friend who is looking for a job, are you willing to recommend our company?",
    enDescription: "",
    dashboardDescription:
      "I am willing to recommend my company to a friend or friend who is looking for a job.",
    order: 15,
    image: null,
    questionSubtype: "",
    id: 1166,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [
      {
        koDescription: "Never",
        enDescription: "",
        order: 1,
        score: 0,
        subquestion: null,
        id: 3743,
        questionId: 1166,
      },
      {
        koDescription: "",
        enDescription: "",
        order: 2,
        score: 1,
        subquestion: null,
        id: 3744,
        questionId: 1166,
      },
      {
        koDescription: "",
        enDescription: "",
        order: 3,
        score: 2,
        subquestion: null,
        id: 3752,
        questionId: 1166,
      },
      {
        koDescription: "",
        enDescription: "",
        order: 4,
        score: 3,
        subquestion: null,
        id: 3745,
        questionId: 1166,
      },
      {
        koDescription: "",
        enDescription: "",
        order: 5,
        score: 4,
        subquestion: null,
        id: 3746,
        questionId: 1166,
      },
      {
        koDescription: "",
        enDescription: "",
        order: 6,
        score: 5,
        subquestion: null,
        id: 3747,
        questionId: 1166,
      },
      {
        koDescription: "",
        enDescription: "",
        order: 7,
        score: 6,
        subquestion: null,
        id: 3748,
        questionId: 1166,
      },
      {
        koDescription: "",
        enDescription: "",
        order: 8,
        score: 7,
        subquestion: null,
        id: 3749,
        questionId: 1166,
      },
      {
        koDescription: "",
        enDescription: "",
        order: 9,
        score: 8,
        subquestion: null,
        id: 3750,
        questionId: 1166,
      },
      {
        koDescription: "",
        enDescription: "",
        order: 10,
        score: 9,
        subquestion: null,
        id: 3751,
        questionId: 1166,
      },
      {
        koDescription: "Highly",
        enDescription: "",
        order: 11,
        score: 10,
        subquestion: null,
        id: 3753,
        questionId: 1166,
      },
    ],
  },
  {
    questionType: "Open-ended",
    answerType: "Comment",
    koDescription:
      "Finally, if you have any suggestions for your company, please fill it free. 🧞",
    enDescription: "",
    dashboardDescription: "In addition, I want to leave the company comment",
    order: 16,
    image: null,
    questionSubtype: "Suggestion",
    id: 1167,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [],
  },
  {
    questionType: "termination",
    answerType: "None",
    koDescription: "Thank you for participating.",
    enDescription: "",
    dashboardDescription: "",
    order: 17,
    image: "79RM6MH5J6VA5724054F2GT8SRLC703FD62I.gif",
    questionSubtype: "",
    id: 1168,
    surveyId: 11,
    parentId: null,
    subquestions: [],
    choices: [],
  },
]

exports.default = data


/***/ }),

/***/ "./code/datas/index.js":
/*!*****************************!*\
  !*** ./code/datas/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demoQuestions = exports.company = exports.multiple = exports.slider = exports.starRating = exports.likert = exports.answer = exports.chats = undefined;

var _chats = __webpack_require__(/*! ./chats */ "./code/datas/chats.js");

var _chats2 = _interopRequireDefault(_chats);

var _answer = __webpack_require__(/*! ./answer */ "./code/datas/answer.js");

var _answer2 = _interopRequireDefault(_answer);

var _likert = __webpack_require__(/*! ./likert */ "./code/datas/likert.js");

var _likert2 = _interopRequireDefault(_likert);

var _starRating = __webpack_require__(/*! ./starRating */ "./code/datas/starRating.js");

var _starRating2 = _interopRequireDefault(_starRating);

var _slider = __webpack_require__(/*! ./slider */ "./code/datas/slider.js");

var _slider2 = _interopRequireDefault(_slider);

var _multiple = __webpack_require__(/*! ./multiple */ "./code/datas/multiple.js");

var _multiple2 = _interopRequireDefault(_multiple);

var _company = __webpack_require__(/*! ./company */ "./code/datas/company.js");

var _company2 = _interopRequireDefault(_company);

var _demoQuestions = __webpack_require__(/*! ./demoQuestions */ "./code/datas/demoQuestions.js");

var _demoQuestions2 = _interopRequireDefault(_demoQuestions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.chats = _chats2.default;
exports.answer = _answer2.default;
exports.likert = _likert2.default;
exports.starRating = _starRating2.default;
exports.slider = _slider2.default;
exports.multiple = _multiple2.default;
exports.company = _company2.default;
exports.demoQuestions = _demoQuestions2.default;

/***/ }),

/***/ "./code/datas/likert.js":
/*!******************************!*\
  !*** ./code/datas/likert.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = __webpack_require__(/*! framer */ "framer");

var top = 124;
var opacity = 1;
var transition = {
  duration: 0.34,
  ease: 'easeInOut'
};

var descOpacity = 1;
var descTransition = {
  duration: 0.33,
  delay: 0.14,
  ease: 'easeInOut'
};

var largeScale = [0, 0, 0, 0, 0];
var largeScaleTransition = {
  duration: 0
};

var mediumScale = [0, 0, 0, 0, 0];
var mediumScaleTransition = {
  duration: 0
};

var smallScale = [0, 0, 0, 0, 0];
var smallScaleTransition = {
  duration: 0
};

exports.default = (0, _framer.Data)({
  top: top,
  opacity: opacity,
  transition: transition,
  descOpacity: descOpacity,
  descTransition: descTransition,

  largeScale: largeScale,
  largeScaleTransition: largeScaleTransition,
  mediumScale: mediumScale,
  mediumScaleTransition: mediumScaleTransition,
  smallScale: smallScale,
  smallScaleTransition: smallScaleTransition
});

/***/ }),

/***/ "./code/datas/multiple.js":
/*!********************************!*\
  !*** ./code/datas/multiple.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = __webpack_require__(/*! framer */ "framer");

var _resource = __webpack_require__(/*! framer/resource */ "framer/resource");

exports.default = (0, _framer.Data)({});

/***/ }),

/***/ "./code/datas/slider.js":
/*!******************************!*\
  !*** ./code/datas/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = __webpack_require__(/*! framer */ "framer");

var _resource = __webpack_require__(/*! framer/resource */ "framer/resource");

var optionValue = null;
var knobSize = (0, _framer.Animatable)(30);
var tint = (0, _framer.Animatable)('blue');

exports.default = (0, _framer.Data)({
  optionValue: optionValue,
  knobSize: knobSize,
  tint: tint
});

/***/ }),

/***/ "./code/datas/starRating.js":
/*!**********************************!*\
  !*** ./code/datas/starRating.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = __webpack_require__(/*! framer */ "framer");

var _resource = __webpack_require__(/*! framer/resource */ "framer/resource");

var optionTop = [0, 0, 0, 0, 0];

var optionOpacity = [1, 1, 1, 1, 1];
var optionOpacityTransition = {
  ease: 'linear'
};
var optionScale = [1, 1, 1, 1, 1];
var optionScaleTransition = {
  duration: 0.2
};

var optionBaseOpacity = [1, 1, 1, 1, 1];

var optionImg = ['center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-default.png') + ')'];

var resultBG = ['center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-0.png') + '), #FD5863', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-1.png') + '), #FD5863', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-2.png') + '), #FD5863', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-3.png') + '), #FD5863', 'center / contain no-repeat url(' + (0, _resource.url)('../images/start-answer-4.png') + '), #FD5863'];

var resultWidth = [298, 298, 298, 298, 215];
var resultOpacity = [0, 0, 0, 0, 0];
var resultBottom = [21, 21, 21, 21, 21];
var resultRight = [-32, -32, -32, -32, -32];

exports.default = (0, _framer.Data)({
  optionTop: optionTop,
  optionOpacity: optionOpacity,
  optionOpacityTransition: optionOpacityTransition,
  optionBaseOpacity: optionBaseOpacity,
  optionImg: optionImg,
  optionScale: optionScale,
  optionScaleTransition: optionScaleTransition,
  resultBG: resultBG,
  resultWidth: resultWidth,
  resultOpacity: resultOpacity,
  resultBottom: resultBottom,
  resultRight: resultRight
});

/***/ }),

/***/ "./code/handlers/addChat.js":
/*!**********************************!*\
  !*** ./code/handlers/addChat.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _datas = __webpack_require__(/*! ../datas */ "./code/datas/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler(question) {
  if (_datas.chats.list == null) _datas.chats.list = [question];else _datas.chats.list = [].concat((0, _toConsumableArray3.default)(_datas.chats.list), [question]);
};

exports.default = handler;

/***/ }),

/***/ "./code/handlers/handleAnswerClick.js":
/*!********************************************!*\
  !*** ./code/handlers/handleAnswerClick.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _datas = __webpack_require__(/*! ../datas */ "./code/datas/index.js");

var _handlers = __webpack_require__(/*! ../handlers */ "./code/handlers/index.js");

var _consts = __webpack_require__(/*! ../shared/consts */ "./code/shared/consts.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./code/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(choiceOrder, answerImage) {
    var choices, newChat, subquestion;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            log('handleAnswerClick');
            choices = _datas.answer.currentQuestion.choices;

            // 1. save answer

            (0, _handlers.setAnswers)(_datas.answer.currentQuestion.id, typeof choiceOrder == 'string' ? choiceOrder : null, choices.length ? choices[choiceOrder].id : null, choices.length ? choices[choiceOrder].score : null);

            // 2. add answer to chat.list

            if (answerImage || choices.length && choices[choiceOrder].koDescription)
              // use contents of currentQuestion
              newChat = {
                image: answerImage,
                koDescription: answerImage ? '' : choices[choiceOrder].koDescription, // if this chat has answerImage, don't add koDescription
                answerType: _datas.answer.currentQuestion.answerType
                // if there is no contents in currentQuestion
              };else newChat = {
              image: null,
              koDescription: choiceOrder,
              answerType: _datas.answer.currentQuestion.answerType
            };
            (0, _handlers.addChat)(newChat);
            log('addChat! - handleAnswerClick');

            // 3. Hide Current Answer Type
            _datas.answer.type = 'Temp';

            // 4. check it has subquestion of choices
            subquestion = choices.length ? choices[choiceOrder].subquestion : null;


            if (subquestion > 0) {
              // 4-1. show subquestions
              (0, _handlers.showSubQuestion)(subquestion);
            } else {
              // 4-2. show next
              (0, _handlers.showNextQuestion)(_datas.answer.currentOrder);
            }

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function handler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = handler;

/***/ }),

/***/ "./code/handlers/index.js":
/*!********************************!*\
  !*** ./code/handlers/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.termination = exports.handleAnswerClick = exports.showSubQuestion = exports.showNoQuestions = exports.showNextQuestion = exports.setAnswers = exports.addChat = exports.initDataLoad = undefined;

var _initDataLoad = __webpack_require__(/*! ./initDataLoad */ "./code/handlers/initDataLoad.js");

var _initDataLoad2 = _interopRequireDefault(_initDataLoad);

var _addChat = __webpack_require__(/*! ./addChat */ "./code/handlers/addChat.js");

var _addChat2 = _interopRequireDefault(_addChat);

var _setAnswers = __webpack_require__(/*! ./setAnswers */ "./code/handlers/setAnswers.js");

var _setAnswers2 = _interopRequireDefault(_setAnswers);

var _showNextQuestion = __webpack_require__(/*! ./showNextQuestion */ "./code/handlers/showNextQuestion.js");

var _showNextQuestion2 = _interopRequireDefault(_showNextQuestion);

var _showNoQuestions = __webpack_require__(/*! ./showNoQuestions */ "./code/handlers/showNoQuestions.js");

var _showNoQuestions2 = _interopRequireDefault(_showNoQuestions);

var _showSubQuestion = __webpack_require__(/*! ./showSubQuestion */ "./code/handlers/showSubQuestion.js");

var _showSubQuestion2 = _interopRequireDefault(_showSubQuestion);

var _handleAnswerClick = __webpack_require__(/*! ./handleAnswerClick */ "./code/handlers/handleAnswerClick.js");

var _handleAnswerClick2 = _interopRequireDefault(_handleAnswerClick);

var _termination = __webpack_require__(/*! ./termination */ "./code/handlers/termination.js");

var _termination2 = _interopRequireDefault(_termination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.initDataLoad = _initDataLoad2.default;
exports.addChat = _addChat2.default;
exports.setAnswers = _setAnswers2.default;
exports.showNextQuestion = _showNextQuestion2.default;
exports.showNoQuestions = _showNoQuestions2.default;
exports.showSubQuestion = _showSubQuestion2.default;
exports.handleAnswerClick = _handleAnswerClick2.default;
exports.termination = _termination2.default;

/***/ }),

/***/ "./code/handlers/initDataLoad.js":
/*!***************************************!*\
  !*** ./code/handlers/initDataLoad.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _datas = __webpack_require__(/*! ../datas */ "./code/datas/index.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _consts = __webpack_require__(/*! ../shared/consts */ "./code/shared/consts.js");

var _handlers = __webpack_require__(/*! ../handlers */ "./code/handlers/index.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./code/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            log('init load!');

            if (_consts.token == 'demo' || _utils.isCanvas) {
              _datas.chats.questions = _datas.demoQuestions;
              _datas.company.sector = 'Demo';
              (0, _handlers.showNextQuestion)(-1); // add first chat
            } else _axios2.default.get(_consts.endPoint + '/Surveys/getSurvey' + '/' + _consts.token, {}).then(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _datas.chats.questions = res.data.survey.questions;
                        log('initDataLoad', res);
                        log('all questions', res.data.survey.questions);

                        _datas.company.name = res.data.company.name;
                        _datas.company.sector = res.data.company.sector;
                        _datas.company.logo = 'center / contain no-repeat url(' + _consts.assetsEndPoint + '/' + res.data.company.logo + ')';

                        (0, _handlers.showNextQuestion)(-1); // add first chat

                      case 7:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()).catch(function (error) {
              log('error - (initDataLoad)', error);
              (0, _handlers.showNoQuestions)();
            });

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function handler() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = handler;

/***/ }),

/***/ "./code/handlers/setAnswers.js":
/*!*************************************!*\
  !*** ./code/handlers/setAnswers.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _datas = __webpack_require__(/*! ../datas */ "./code/datas/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler(questionId, content, choiceId, choiceScore) {
  var newData = {
    questionId: questionId, // (number)
    content: content, // 주관식 질문에만 해당 (string)
    choiceId: choiceId, // 객관식 질문에 해당, survey에 적혀있는 choice의 ID 사용 (number)
    choiceScore: choiceScore // score
  };
  _datas.answer.result = [].concat((0, _toConsumableArray3.default)(_datas.answer.result), [newData]);

  log('answer.result - (setAnswers)', _datas.answer.result);
};

exports.default = handler;

/***/ }),

/***/ "./code/handlers/showNextQuestion.js":
/*!*******************************************!*\
  !*** ./code/handlers/showNextQuestion.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _datas = __webpack_require__(/*! ../datas */ "./code/datas/index.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./code/shared/utils.js");

var _consts = __webpack_require__(/*! ../shared/consts */ "./code/shared/consts.js");

var _handlers = __webpack_require__(/*! ../handlers */ "./code/handlers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(before) {
    var next, i, question;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            next = before + 1;

            _datas.answer.currentOrder = next;
            _datas.answer.currentQuestionDepth = 0;

            // 1. go loop until found proper answerType (answerType != 'None')
            i = next;

          case 4:
            if (!(i < _datas.chats.questions.length)) {
              _context.next = 26;
              break;
            }

            question = _datas.chats.questions[i];

            // 1-1. add to Chat & move currentOrder (except first chat)

            _context.t0 = i > 0;

            if (!_context.t0) {
              _context.next = 10;
              break;
            }

            _context.next = 10;
            return (0, _utils.sleep)(_consts.chatInterval);

          case 10:
            (0, _handlers.addChat)(question);
            log('addChat - showNextQuestion');
            _datas.answer.currentOrder = i;

            // 2. find(show) answerType & break Loop

            if (!(question.questionType == 'termination')) {
              _context.next = 17;
              break;
            }

            // 2-1. termination (!)
            (0, _handlers.termination)();
            _context.next = 23;
            break;

          case 17:
            if (!(question.answerType != 'None')) {
              _context.next = 23;
              break;
            }

            // 2-2. show new answerType & break loop
            // set currentQuestion
            _datas.answer.currentQuestion = question;
            // show answerType
            _context.next = 21;
            return (0, _utils.sleep)(_consts.delayBeforeNewAnswerType);

          case 21:
            _datas.answer.type = question.answerType;
            // break Loop!
            return _context.abrupt('break', 26);

          case 23:
            i++;
            _context.next = 4;
            break;

          case 26:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function handler(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = handler;

/***/ }),

/***/ "./code/handlers/showNoQuestions.js":
/*!******************************************!*\
  !*** ./code/handlers/showNoQuestions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handlers = __webpack_require__(/*! ../handlers */ "./code/handlers/index.js");

var handler = function handler() {
  (0, _handlers.addChat)({
    questionType: 'greetings',
    koDescription: "You've already finished talking with me, or it's not time to talk ~"
  });
};

exports.default = handler;

/***/ }),

/***/ "./code/handlers/showSubQuestion.js":
/*!******************************************!*\
  !*** ./code/handlers/showSubQuestion.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _datas = __webpack_require__(/*! ../datas */ "./code/datas/index.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./code/shared/utils.js");

var _handlers = __webpack_require__(/*! ../handlers */ "./code/handlers/index.js");

var _consts = __webpack_require__(/*! ../shared/consts */ "./code/shared/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(subquestion) {
    var question;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_datas.answer.currentQuestionDepth == 0) {
              // 1-1. using currentQuestion
              question = _datas.answer.currentQuestion.subquestions[subquestion - 1];
              // 1-1-1. save subquestions
              _datas.answer.subQuestions = _datas.answer.currentQuestion.subquestions;

              log('answer.subQuestions - (showSubQuestion)', _datas.answer.subQuestions);
            } else if (_datas.answer.currentQuestionDepth == 1) {
              // 1-2. using savevd subQuestions
              question = _datas.answer.subQuestions[subquestion - 1];
            }
            // 1. make question


            log('question - (showSubQuestion)', question);

            // 2-1. add to Chat
            (0, _handlers.addChat)(question);
            log('addChat - showSubQuestion');

            if (!(question.questionType == 'termination')) {
              _context.next = 8;
              break;
            }

            // 2-2. termination (!)
            (0, _handlers.termination)();
            _context.next = 14;
            break;

          case 8:
            // 2-2. set currentQuestion
            _datas.answer.currentQuestion = question;
            // 2-3. show answerType
            _context.next = 11;
            return (0, _utils.sleep)(_consts.delayBeforeNewAnswerType);

          case 11:
            _datas.answer.type = question.answerType;

            // 3. increase currentQuestionDepth
            _datas.answer.currentQuestionDepth++;

            // 4. break out subQuestions
            if (_datas.answer.currentQuestionDepth == 2 || question.answerType == 'None') {
              // await sleep(chatInterval)
              log('break out subQuestions!');
              (0, _handlers.showNextQuestion)(_datas.answer.currentOrder);
            }

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function handler(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = handler;

/***/ }),

/***/ "./code/handlers/termination.js":
/*!**************************************!*\
  !*** ./code/handlers/termination.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datas = __webpack_require__(/*! ../datas */ "./code/datas/index.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _consts = __webpack_require__(/*! ../shared/consts */ "./code/shared/consts.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./code/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = function handler() {
  //  send results
  log('send results!', _datas.answer.result);

  if (_consts.token == 'demo') {
    console.log('demo end');
    (0, _utils.scrollToLastChat)();
    (0, _utils.closeWindow)();
  } else if (_datas.answer.currentQuestion.questionType == 'Remind')
    // handle Remind termination
    _axios2.default.post(_consts.endPoint + '/Surveys/delaySurvey/' + _consts.token, {
      token: _consts.token,
      hoursToDelay: _datas.answer.result[_datas.answer.result.length - 1].choiceScore
    }).then(function (response) {
      log('response - (Remind)', response);
      (0, _utils.scrollToLastChat)();
      (0, _utils.closeWindow)();
    }).catch(function (error) {
      log('error - (Remind)', error);
    });else _axios2.default.post(_consts.endPoint + '/Surveys/submit/' + _consts.token, {
    token: _consts.token,
    answers: _datas.answer.result
  }).then(function (response) {
    log('response', response);
    (0, _utils.scrollToLastChat)();
    (0, _utils.closeWindow)();
  }).catch(function (error) {
    log('error', error);
  });

  // hide answerType
  _datas.answer.type = 'None';
};

exports.default = handler;

/***/ }),

/***/ "./code/shared/consts.js":
/*!*******************************!*\
  !*** ./code/shared/consts.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.delayBeforeNewAnswerType =
  exports.delayBeforeNewQuestion =
  exports.chatInterval =
  exports.powerEaseInOut =
  exports.loadingEndAnimDuration =
  exports.loadingDuration =
  exports.muitipleBaseDuration =
  exports.baseDuration =
  exports.token =
  exports.assetsEndPoint =
  exports.endPoint =
  exports.isProd =
    undefined

var _ruucmUtil = __webpack_require__(/*! ruucm-util */ "./node_modules/ruucm-util/index.js")

var isProd = (exports.isProd = true)

var endPoint = (exports.endPoint = "https://api.chatbot.co/api")
var assetsEndPoint = (exports.assetsEndPoint = "https://static.chatbot.co")

var token = (exports.token = (0, _ruucmUtil.getParameterByName)("token"))
console.log("token", token)

// Animation
var baseDuration = (exports.baseDuration = 0.67)
var muitipleBaseDuration = (exports.muitipleBaseDuration = baseDuration / 2)
var loadingDuration = (exports.loadingDuration = 1 / 1.5)
var loadingEndAnimDuration = (exports.loadingEndAnimDuration = 0.3)
var powerEaseInOut = (exports.powerEaseInOut = [0.66, 0.13, 0.36, 0.97])

// intervals
var chatInterval = (exports.chatInterval = isProd
  ? 0.97 + loadingDuration
  : 0.1)
var delayBeforeNewQuestion = (exports.delayBeforeNewQuestion = isProd ? 0.1 : 0)
var delayBeforeNewAnswerType = (exports.delayBeforeNewAnswerType = 1.6)


/***/ }),

/***/ "./code/shared/utils.js":
/*!******************************!*\
  !*** ./code/shared/utils.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCanvas = exports.closeWindow = exports.isMobile = exports.scrollToLastChat = exports.goPageTop = exports.sleep = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _consts = __webpack_require__(/*! ./consts */ "./code/shared/consts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sleep = exports.sleep = function sleep(sec) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, sec * 1000);
  });
};

var goPageTop = exports.goPageTop = function goPageTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

var scrollToLastChat = exports.scrollToLastChat = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {
    var myScroll, target, goHere;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            myScroll = function myScroll(element, to, duration) {
              var start = element.scrollTop,
                  change = to - start,
                  currentTime = 0,
                  increment = 20;

              var animateScroll = function animateScroll() {
                currentTime += increment;
                var val = Math.easeInOutQuad(currentTime, start, change, duration);
                element.scrollTop = val;
                if (currentTime < duration) {
                  setTimeout(animateScroll, increment);
                }
              };
              animateScroll();
            };
            // custom animating scroll from https://gist.github.com/andjosh/6764939


            //t = current time
            //b = start value
            //c = change in value
            //d = duration
            Math.easeInOutQuad = function (t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
            };

            target = document.querySelectorAll('.chat-list');

            if (target.length > 0) {
              goHere = target[target.length - 1];

              myScroll(goHere, goHere.scrollHeight, 600);
            }

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function scrollToLastChat(_x) {
    return _ref.apply(this, arguments);
  };
}();

var isMobile = exports.isMobile = screen.width <= 730;

var closeWindow = exports.closeWindow = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var r;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return sleep(3);

          case 2:
            r = confirm(_consts.token == 'demo' ? 'Survey is now over. Do you want to close the survey window?' : '설문이 완료되었습니다. 설문창을 닫을까요?');

            if (r == true) {
              window.location.href = 'about:blank';
            }

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function closeWindow() {
    return _ref2.apply(this, arguments);
  };
}();

var regex = /^(file:\/\/)/g;
var found = location.href.match(regex);
var isCanvas = exports.isCanvas = found ? true : false;

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.0.5","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.16.11","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/ruucm.index-frame"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/ruucm.index-frame */ "framer-package-loader.js!./node_modules/@framer/ruucm.index-frame/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/ruucm.index-frame"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16","framer":"^0.10.4"},"peerDependencies":{"framer":"^0.10.4","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"842c95a7-affe-40f9-8515-473e05a1b460","displayName":"Index Frame"},"author":". ruucm","name":"@framer/ruucm.index-frame","version":"1.0.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-hand-iphone-1"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-1 */ "framer-package-loader.js!./node_modules/@framer/framer.device-hand-iphone-1/build/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-hand-iphone-1"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-1","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.device-skin-apple-iphone-xs-spacegrey"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone-xs-spacegrey */ "framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone-xs-spacegrey/build/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.device-skin-apple-iphone-xs-spacegrey"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone-xs-spacegrey","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^3.0.1"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, scripts, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"scripts\":{\"start\":\"babel --watch --copy-files ./src -d ./code\",\"deploy\":\"npm run sync && npm run cache-invalidate\",\"sync\":\"./sync.sh\",\"cache-invalidate\":\"aws cloudfront create-invalidation --distribution-id EUBTXL6TZYGRD --paths \\\"/*\\\"\"},\"devDependencies\":{\"@framer/framer.device-hand-iphone-1\":\"^1.0.0\",\"@framer/framer.device-skin-apple-iphone-xs-spacegrey\":\"^1.0.0\",\"@types/react\":\"^16.8\",\"babel-cli\":\"^6.26.0\",\"babel-plugin-transform-class-properties\":\"^6.24.1\",\"babel-plugin-transform-runtime\":\"^6.23.0\",\"babel-preset-env\":\"^1.6.1\",\"babel-preset-es2015\":\"^6.24.1\",\"babel-preset-react\":\"^6.24.1\",\"babel-preset-stage-0\":\"^6.24.1\",\"framer\":\"1.0.5\"},\"peerDependencies\":{\"framer\":\"^1\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"821875f8-5be4-44ef-b981-69e410989031\"},\"author\":\". ruucm\",\"dependencies\":{\"@framer/ruucm.index-frame\":\"^1.0.0\",\"axios\":\"^0.18.0\",\"lodash\":\"^4.17.11\",\"react-autosize-textarea\":\"^6.0.0\",\"react-helmet\":\"^5.2.0\",\"react-measure\":\"^2.2.4\",\"ruucm-util\":\"^0.14.0\",\"smoothscroll-polyfill\":\"^0.4.4\",\"styled-components\":\"^4.2.0\"}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer/resource":
/*!******************************************************************************************************************************!*\
  !*** external {"root":"framer/resource","commonjs2":"framer/resource","commonjs":"framer/resource","amd":"framer/resource"} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer_resource__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});