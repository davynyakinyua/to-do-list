/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* reset default browser settings */\n* {\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n\n}\n\n/* styles for the body element */\nbody {\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    font-size:16px;\n    background-color:azure;\n}\n\n/* style for the main container  */\n.main-container {\n    height:100vh;\n    display:grid;\n    grid-template-columns:20% 70%;\n    grid-template-rows:10% 10% 60% 10%;\n    justify-content: center;\n    padding-top:1rem;\n    \n}\n\n\n\n/* styles for the div item one */\n.one {\n    grid-column:1/3;\n    display:flex;\n    justify-content: center;\n    align-items:center;\n}\n\n/* styles for the div item two */\n.two {\n    grid-column:1/3;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* styles for the div heading id */\n.head-container {\n    height:80%;\n    width:60%;\n    margin-left:2.5rem;\n    display:grid;\n    grid-template-columns:60% 10%;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#list-name {\n    width:90%;\n    height:70%;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    font-size:2rem;\n    font-weight:bolder;\n}\n\n#list-btn {\n    background-color:blue;\n    color:white;\n    height:70%;\n    width:7vw;\n    font-weight:bolder;\n}\n\n/* styles for the div item five */\n.five {\n    grid-row:4/5;\n    grid-column:1/3;\n    display:flex;justify-content: end;\n    align-items: center;\n    \n}\n\n\n.three {\n    display:grid;\n    grid-template-rows:10% 70%;\n    justify-items: center;\n    gap:0.4rem;\n}\n\n\n.favorite {\n    width:300px;\n    width:80%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color:gold;\n}\n\n#left-panel {\n\n    width:80%;\n    display:flex;\n    justify-content: start;\n    align-items: center;\n    flex-direction: column;\n    gap:0.2rem;\n}\n\n.left-panel-items {\n    border:1px solid gold;\n    width:100%;\n    height:10%;\n    background-color:gold;\n    border-radius:10px;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    \n\n}\n\n.svg {\n    width:20%;\n    height:auto;\n}\n\n\n/* styles for add task button */\n#task-btn {\n    height:60%;\n    width:5%;\n    margin-right:2rem;\n    font-size:3rem;\n    display:flex;\n    align-items:center;\n    justify-content: center;\n    border-radius:10px;\n    background-color:blue;\n    color:white;\n}\n\n/* styles for the dynamic form */\n.form {\n    border:2px solid red;\n    height:90%;\n    width:30%;\n    margin:auto;\n    margin-top:1.5rem;\n    background-color:gold;\n}\n\n/* styles for the form legend */\n.legend {\n    border:2px solid blue;\n    display:flex;\n    flex-direction:column;\n    gap:0.5rem;\n    padding:1rem;\n    height:100%\n\n}\n\n/* style for the task name input */\n.name-input {\n    height:2rem;\n}\n\n/* style for task name input and description */\n.name-input, .description {\n    font-size:1rem;\n    padding:0.2rem;\n}\n\n/* style for the description text area */\n.description {\n    height:30%;\n}\n\n\n/* style for date input */\n.date-input {\n    width:60%;\n    font-size:1rem;\n    font-weight:bold;\n    padding:0.2rem;\n}\n\n/* style for time input */\n.time-input {\n    width:70%;\n    height:2rem;\n    padding:0 0.8rem 0 0.8rem;\n    font-size:1rem;\n}\n\n/* style for submit button for the form */\n.submit-btn {\n    height:6vh;\n    width:8vw;\n    background-color:blue;\n    border-radius:10px;\n    color:white;\n}\n\n/* style for the display with default list */\n.display-default {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    font-size:2rem;\n    background-color:white;\n}\n\n\n/* styles for the dynamic tasks */\n.task-background {\n    background-color:#344bb3;\n    display:flex;\n    flex-wrap:wrap;\n    width:100%;\n    align-content:start;\n}\n\n.task-container {\n    width:17%;\n    height:35%;\n    font-size:1rem;\n    margin:0.4rem;\n    padding:0.2rem;\n    background-color:white;\n    margin-bottom:0.4rem;\n}\n\n.task-title, .del-btn-container, .task-description, .task-date-container, .task-date, .task-time {\n    padding:0.2rem;\n}\n\n.task-title {\n    font-weight:bolder;\n    font-size:1.3rem;\n}\n\n.task-description {\n    height:40%;\n    color:grey;\n}\n\n.task-date-container {\n    display:flex;\n    font-size:0.8rem;\n    justify-content: space-around;\n}\n\n.task-date, .task-time {\n    color:grey;\n}\n\n\n.del-btn-container {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#delete-btn {\n    background-color:red;\n    color:white;\n    font-weight:bolder;\n    width:60%;\n    height:3vh;\n    border:1px solid red;\n    border-radius:10px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLeftPanel: () => (/* binding */ addLeftPanel),\n/* harmony export */   dashboardList: () => (/* binding */ dashboardList),\n/* harmony export */   defaultList: () => (/* binding */ defaultList),\n/* harmony export */   form: () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n//import { list } from \"./list\";\n\n\n// change list name on the panel\nfunction dashboardList(name) {\n  var listName = document.getElementById(\"list-name\");\n  listName.innerHTML = \"\";\n  listName.textContent = name;\n  listName.className = \"list-title\";\n}\n\n// function to add state of the default class\nfunction defaultList() {\n  var display = document.getElementById(\"display\");\n  // clear the display\n  display.innerHTML = \"\";\n  display.textContent = \"No Task Yet, Add Task\";\n  display.className = \"display-default\";\n}\n\n// display task on viewport\nfunction taskDisplay(listOutput) {\n  var display = document.getElementById(\"display\");\n  display.className = \"task-background\";\n  // clear the display\n  display.innerHTML = \"\";\n\n  // loop throught each object in the array\n  if (_list__WEBPACK_IMPORTED_MODULE_0__.listArchive[listOutput]) {\n    _list__WEBPACK_IMPORTED_MODULE_0__.listArchive[listOutput].forEach(function (item) {\n      // create a dynamic container for the task\n      var container = document.createElement(\"div\");\n      container.className = \"task-container\";\n\n      // create a div for task name\n      var title = document.createElement(\"div\");\n      title.className = \"task-title\";\n      title.textContent = item.name;\n\n      //  create a div for description\n      var des = document.createElement(\"div\");\n      des.className = \"task-description\";\n      des.textContent = item.description;\n\n      // create a div container for date and time\n      var dateContainer = document.createElement(\"div\");\n      dateContainer.className = \"task-date-container\";\n\n      // create divs for both date and time\n      var dateDiv = document.createElement(\"div\");\n      dateDiv.className = \"task-date\";\n      dateDiv.textContent = item.date;\n      var timeDiv = document.createElement(\"div\");\n      timeDiv.className = \"task-time\";\n      timeDiv.textContent = item.time;\n\n      // create a container for the button\n      var btnContainer = document.createElement(\"div\");\n      btnContainer.className = \"del-btn-container\";\n      // create a button for delete task\n      var btn = document.createElement(\"button\");\n      btn.id = \"delete-btn\";\n      btn.textContent = \"Delete\";\n\n      // append date div to container\n      dateContainer.appendChild(dateDiv);\n      dateContainer.appendChild(timeDiv);\n      btnContainer.appendChild(btn);\n      // append items to container\n      container.appendChild(title);\n      container.appendChild(des);\n      container.appendChild(dateContainer);\n      container.appendChild(btnContainer);\n      display.appendChild(container);\n\n      // add event listener to delete button\n      btn.addEventListener(\"click\", function (event) {\n        console.log(event.target.textContent);\n      });\n    });\n  }\n}\n\n// function to add list on the left panel\nfunction addLeftPanel(name) {\n  // select the left panel on the DOM\n  var leftPanel = document.getElementById(\"left-panel\");\n  // create a list item\n  var addList = document.createElement(\"div\");\n  // add the name of the class on left panel\n  addList.textContent = name;\n  // add class for styling\n  addList.className = \"left-panel-items\";\n\n  // append addlist to left panel\n  leftPanel.appendChild(addList);\n\n  // add event listener to display list items on the viewport\n  addList.addEventListener(\"click\", function (event) {\n    console.log(\"list clicked!\");\n    var selectedList = event.target.textContent;\n    dashboardList(selectedList);\n    console.log(selectedList);\n    taskDisplay(selectedList);\n  });\n}\n\n// function to create a form input for task\nfunction form() {\n  var display = document.getElementById(\"display\");\n  // clear the display\n  display.innerHTML = \"\";\n  var form = document.createElement(\"form\");\n  form.className = \"form\";\n  form.id = \"form-id\";\n  // legend\n  var legend = document.createElement(\"legend\");\n  legend.className = \"legend\";\n  // create label and input new task name\n  var nameLabel = document.createElement(\"label\");\n  nameLabel.textContent = \"New Task\";\n  var nameInput = document.createElement(\"input\");\n  nameInput.type = \"text\";\n  nameInput.id = \"new-task\";\n  nameInput.className = \"name-input\";\n  nameInput.required = true;\n  // label and input for task description\n  var descriptionLabel = document.createElement(\"label\");\n  descriptionLabel.textContent = \"Description\";\n  var descriptionInput = document.createElement(\"textarea\");\n  descriptionInput.rows = 2;\n  descriptionInput.className = \"description\";\n  // label and input for date\n  var dateLabel = document.createElement(\"label\");\n  dateLabel.textContent = \"Date: \";\n  var dateInput = document.createElement(\"input\");\n  dateInput.type = \"date\";\n  dateInput.required = true;\n  dateInput.className = \"date-input\";\n  // label for time\n  var timeLabel = document.createElement(\"label\");\n  timeLabel.textContent = \"Time: \";\n  var timeInput = document.createElement(\"input\");\n  timeInput.type = \"time\";\n  timeInput.id = \"time\";\n  timeInput.className = \"time-input\";\n  timeInput.required = true;\n\n  // submit button\n  var submitBtn = document.createElement(\"button\");\n  submitBtn.type = \"submit\";\n  submitBtn.textContent = \"Add Task\";\n  submitBtn.className = \"submit-btn\";\n\n  // append to legend\n  legend.appendChild(nameLabel);\n  legend.appendChild(nameInput);\n  legend.appendChild(descriptionLabel);\n  legend.appendChild(descriptionInput);\n  legend.appendChild(dateLabel);\n  legend.appendChild(dateInput);\n  legend.appendChild(timeLabel);\n  legend.appendChild(timeInput);\n  legend.appendChild(submitBtn);\n  form.appendChild(legend);\n  display.appendChild(form);\n  submitBtn.addEventListener(\"click\", function (event) {\n    // prevent submit button default behavior\n    event.preventDefault();\n\n    // collect user input\n    var taskName = nameInput.value;\n    var description = descriptionInput.value;\n    var date = dateInput.value;\n    var time = timeInput.value;\n\n    // store data collected\n    console.log(\"name: \".concat(taskName, \" description:\").concat(description, \" date: \").concat(date, \" time: \").concat(time));\n\n    // create object to store the task\n    var task = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(taskName, description, date, time);\n\n    // list to add task\n    var listName = document.getElementById(\"list-name\");\n    var selectedList = listName.textContent;\n    // call function to add task to list on the dashboard\n    (0,_list__WEBPACK_IMPORTED_MODULE_0__.addTask)(selectedList, task);\n    console.log(_list__WEBPACK_IMPORTED_MODULE_0__.listArchive);\n\n    // call task display to print task on the viewport\n    taskDisplay(selectedList);\n  });\n}\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconsole.log(\"hello world\");\n\n\n\n\n\n\n// default list\n(0,_dom__WEBPACK_IMPORTED_MODULE_2__.dashboardList)(\"default\");\n(0,_dom__WEBPACK_IMPORTED_MODULE_2__.addLeftPanel)(\"default\");\n(0,_dom__WEBPACK_IMPORTED_MODULE_2__.defaultList)();\nvar listBtn = document.getElementById(\"list-btn\");\nvar taskBtn = document.getElementById(\"task-btn\");\n\n//const favorite = document.getElementById(\"favorite\");\n\nvar formBtn = document.getElementById(\"form-id\");\n\n//favorite.addEventListener(\"click\", );\n\nlistBtn.addEventListener(\"click\", _list__WEBPACK_IMPORTED_MODULE_0__.createList);\ntaskBtn.addEventListener(\"click\", _task__WEBPACK_IMPORTED_MODULE_1__.taskInput);\n\n//# sourceURL=webpack://to-do-list/./src/index.js?\n}");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   createList: () => (/* binding */ createList),\n/* harmony export */   list: () => (/* binding */ list),\n/* harmony export */   listArchive: () => (/* binding */ listArchive)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n// archive for all lists\nvar listArchive = {};\nvar list = \"default\";\n\n// function to get the name of the new list\nfunction createList() {\n  var display = document.getElementById(\"display\");\n  display.className = \"task-background\";\n  // clear the display\n  display.innerHTML = \"\";\n  // prompt input from user to create a list\n  list = prompt(\"enter list name\");\n  // call function for adding list name on the dashboard\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.dashboardList)(list);\n  // call function for adding list name on left panel\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addLeftPanel)(list);\n  // store list in list archive\n  list;\n}\n;\n\n// function to add a task to a specific list\nfunction addTask(list, taskObj) {\n  // check if list exist if not initialize it as an empty array\n  if (!listArchive[list]) {\n    listArchive[list] = [];\n  }\n\n  // push the task object to the specific list\n  listArchive[list].push(taskObj);\n}\n\n//# sourceURL=webpack://to-do-list/./src/list.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?\n}");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   taskInput: () => (/* binding */ taskInput)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n// forms for collecting task input\nfunction taskInput() {\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.form)();\n}\n\n// create tasks using a class\nvar Task = /*#__PURE__*/function () {\n  function Task(name, description, date, time) {\n    _classCallCheck(this, Task);\n    this.name = name;\n    this.description = description;\n    this.date = date;\n    this.time = time;\n  }\n  return _createClass(Task, [{\n    key: \"response\",\n    value: function response() {\n      return \"Hello \".concat(this.name, \", it is \").concat(this.time);\n    }\n  }]);\n}();\n;\n\n//# sourceURL=webpack://to-do-list/./src/task.js?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;