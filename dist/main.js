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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.container-for-boards {\n  display: flex;\n}\n\n#board-1,\n#board-2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  background: red;\n  height: 50vh;\n  width: 50vw;\n}\n\n#board-2 {\n  background-color: lightblue;\n}\n\n.gridColumn,\n.gridColumn2 {\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.cell {\n  border: 1px solid black;\n  background-color: bisque;\n  width: 100%;\n  height: 100%;\n}\n\n.gridColumn2 > button {\n  background: lightcoral;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-setup-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-setup-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-setup-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-setup-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-setup-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-setup-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-setup-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-setup-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-setup-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-setup-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attack: () => (/* binding */ attack),\n/* harmony export */   disableAttackedCells: () => (/* binding */ disableAttackedCells),\n/* harmony export */   displayText: () => (/* binding */ displayText),\n/* harmony export */   gridForPlayers: () => (/* binding */ gridForPlayers),\n/* harmony export */   placeColorShip: () => (/* binding */ placeColorShip)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nconst board1 = document.getElementById(\"board-1\");\nconst board2 = document.getElementById(\"board-2\");\n\nfunction makeColumn(rowNum, container, className) {\n  for (let r = 0; r < rowNum; r++) {\n    const row = document.createElement(\"div\");\n    container.appendChild(row).className = `${className}`;\n    row.setAttribute(\"id\", `${r + 1}`);\n  }\n}\n\nfunction makeRows(cellNum, className, board) {\n  const rows = document.getElementsByClassName(`${className}`);\n  let charCode = 65;\n  let tranlateToletter;\n  for (let i = 0; i < rows.length; i++) {\n    for (let j = 0; j < cellNum; j++) {\n      const newCell = document.createElement(\"button\");\n      rows[j].appendChild(newCell).className = \"cell\";\n      const rowId = rows[j].getAttribute(\"id\");\n      tranlateToletter = String.fromCharCode(charCode);\n      newCell.setAttribute(\n        \"data-coordinate\",\n        `${tranlateToletter}${rowId}-${board}`,\n      );\n      newCell.setAttribute(\"disabled\", \"\");\n    }\n    charCode += 1;\n  }\n}\n\nfunction defaultGrid(num, container, className, board) {\n  makeColumn(num, container, className);\n  makeRows(num, className, board);\n}\n\nfunction gridForPlayers() {\n  defaultGrid(10, board1, \"gridColumn\", 1);\n  defaultGrid(10, board2, \"gridColumn2\", 2);\n}\n\nfunction placeColorShip() {\n  Object.keys(_logic__WEBPACK_IMPORTED_MODULE_0__.player1.board).forEach((key) => {\n    const board = document.querySelectorAll(\".cell\");\n    board.forEach((n) => {\n      const coordinate = n.getAttribute(\"data-coordinate\");\n      if (coordinate === key) {\n        n.style.backgroundColor = \"lightBlue\";\n      }\n    });\n  });\n  Object.keys(_logic__WEBPACK_IMPORTED_MODULE_0__.player2.board).forEach((key) => {\n    const board = document.querySelectorAll(\".cell\");\n    board.forEach((n) => {\n      const coordinate = n.getAttribute(\"data-coordinate\");\n      if (coordinate === key) {\n        n.style.backgroundColor = \"lightBlue\";\n      }\n    });\n  });\n}\n\nfunction attack(coord) {\n  const board = document.querySelectorAll(\".cell\");\n  board.forEach((n) => {\n    const coordinate = n.getAttribute(\"data-coordinate\");\n    if (coordinate === coord) {\n      n.style.backgroundColor = \"red\";\n    }\n  });\n}\n\nfunction disableAttackedCells() {\n  const allAttackedCells = document.querySelectorAll(\"[data-attacked]\");\n  allAttackedCells.forEach((c) => {\n    c.disabled = true;\n  });\n}\n\nconst displayText = (() => {\n  const announce = document.getElementById(\"announcer\");\n\n  function playerTurn(player) {\n    announce.textContent = `It's ${player}'s turn`;\n  }\n\n  function win(player) {\n    announce.textContent = `${player} has won!!`;\n    alert(`${player} has won!!`);\n    window.location.reload();\n  }\n\n  return { playerTurn, win };\n})();\n\n\n\n\n//# sourceURL=webpack://project-setup-template/./src/DOM.js?");

/***/ }),

/***/ "./src/eventListener.js":
/*!******************************!*\
  !*** ./src/eventListener.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\n\nconst eventListeners = () => {\n  const allCells = document.querySelectorAll(\".cell\");\n  const controller = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.gameController)();\n  allCells.forEach((c) => {\n    const coord = c.getAttribute(\"data-coordinate\");\n    c.addEventListener(\"click\", () => {\n      c.setAttribute(\"data-attacked\", \"true\");\n      controller.updateRecieveAttack(coord);\n      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.attack)(coord);\n      controller.checkContinueTurn(coord);\n      controller.getActivePlayer().checkAllShipsSunk(\"playerone\");\n    });\n  });\n  controller.disableCells();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);\n\n\n//# sourceURL=webpack://project-setup-template/./src/eventListener.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListener */ \"./src/eventListener.js\");\n\n\n\n\n(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.gridForPlayers)();\n(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.placeColorShip)();\n(0,_eventListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://project-setup-template/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoard: () => (/* binding */ gameBoard),\n/* harmony export */   gameController: () => (/* binding */ gameController),\n/* harmony export */   player1: () => (/* binding */ player1),\n/* harmony export */   player2: () => (/* binding */ player2),\n/* harmony export */   ships: () => (/* binding */ ships)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nconst ships = () => {\n  const tasks = {\n    length: 1,\n    hits: 0,\n    sunk: false,\n    hit() {\n      this.hits += 1;\n      this.length -= 1;\n    },\n    isSunk() {\n      return this.length === 0 ? (this.sunk = true) : (this.sunk = false);\n    },\n  };\n\n  const battleShip = { ...tasks };\n  const cruiser = { ...tasks };\n  const carrier = { ...tasks };\n  const submarine = { ...tasks };\n  const destroyer = { ...tasks };\n\n  const allShips = [battleShip, cruiser, carrier, submarine, destroyer];\n  allShips.forEach((ship) => {\n    if (ship === carrier) ship.length = 5;\n    if (ship === battleShip) ship.length = 4;\n    if (ship === cruiser || ship === submarine) ship.length = 3;\n    if (ship === destroyer) ship.length = 2;\n  });\n\n  return {\n    battleShip,\n    cruiser,\n    carrier,\n    submarine,\n    destroyer,\n  };\n};\n\nconst gameBoard = () => {\n  const board = {};\n  const missed = [];\n  const allShips = [];\n\n  const getBoard = () => board;\n\n  function placeShip(shipObject, XCoord, YCoord, direction, boardNum) {\n    allShips.push(shipObject);\n    let coordinates = [XCoord, YCoord];\n    let join = coordinates.join(\"\");\n    board[`${join}-${boardNum}`] = [shipObject];\n    if (direction === \"horizontal\") {\n      let newY = YCoord;\n      for (let i = 0; i < shipObject.length - 1; i++) {\n        coordinates = [XCoord, (newY += 1)];\n        join = coordinates.join(\"\");\n        board[`${join}-${boardNum}`] = [shipObject];\n      }\n    } else {\n      let charCode = XCoord.charCodeAt(0);\n      let tranlateToletter;\n      for (let i = 0; i < shipObject.length - 1; i++) {\n        charCode += 1;\n        tranlateToletter = String.fromCharCode(charCode);\n        coordinates = [tranlateToletter, YCoord];\n        join = coordinates.join(\"\");\n        board[`${join}-${boardNum}`] = [shipObject];\n      }\n    }\n  }\n\n  function recieveAttack(coord) {\n    if (coord in board) {\n      board[coord][0].hit();\n      board[coord].push(\"hit\");\n    } else {\n      missed.push(coord);\n    }\n  }\n\n  function checkAllShipsSunk(player) {\n    for (let i = 0; i < allShips.length; i++) {\n      if (allShips[i].length !== 0) {\n        return;\n      }\n    }\n    // eslint-disable-next-line consistent-return\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.displayText.win(player);\n  }\n\n  return {\n    placeShip,\n    board,\n    recieveAttack,\n    missed,\n    checkAllShipsSunk,\n    getBoard,\n  };\n};\n\nconst Player = () => {\n  const real = gameBoard();\n  const computer = gameBoard();\n\n  return {\n    real,\n    computer,\n  };\n};\n\nconst player1 = Player().real;\nconst player2 = Player().computer;\n\nconst gameController = (playerone = player1, playertwo = player2) => {\n  const players = [playerone, playertwo];\n\n  let activePlayer = players[0];\n\n  // eslint-disable-next-line no-unused-vars\n  let nonActivePlayer = players[1];\n\n  const getActivePlayer = () => activePlayer;\n\n  function switchPlayer() {\n    if (activePlayer === players[0]) {\n      activePlayer = players[1];\n      nonActivePlayer = players[0];\n      _DOM__WEBPACK_IMPORTED_MODULE_0__.displayText.playerTurn(\"computer\");\n    } else {\n      activePlayer = players[0];\n      nonActivePlayer = players[1];\n      _DOM__WEBPACK_IMPORTED_MODULE_0__.displayText.playerTurn(\"playerone\");\n    }\n  }\n\n  function generateRandomCoord() {\n    const randomX = () => {\n      const num = Math.floor(Math.random() * (74 - 65 + 1)) + 65;\n      return String.fromCharCode(num);\n    };\n    const randomY = () => Math.floor(Math.random() * 10 + 1);\n    return `${randomX()}${randomY()}-1`;\n  }\n\n  function updateRecieveAttack(coord) {\n    if (getActivePlayer() === playerone) player1.recieveAttack(coord);\n    if (getActivePlayer() === playertwo) player2.recieveAttack(coord);\n  }\n\n  function computerMoves() {\n    const randomCoord = generateRandomCoord();\n    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.attack)(randomCoord);\n    updateRecieveAttack(randomCoord);\n    getActivePlayer().checkAllShipsSunk(\"computer\");\n    // eslint-disable-next-line no-use-before-define\n    checkContinueTurn(randomCoord);\n    if (getActivePlayer() === player2) setTimeout(computerMoves, 1000);\n  }\n\n  function disableCells() {\n    if (getActivePlayer() === playertwo) {\n      const cells = document.querySelectorAll(\".cell\");\n      cells.forEach((n) => {\n        const attribute = n.getAttribute(\"data-coordinate\");\n        if (\n          attribute[3] === \"1\" ||\n          attribute[4] === \"1\" ||\n          attribute[3] === \"2\" ||\n          attribute[4] === \"2\"\n        ) {\n          n.disabled = true;\n        }\n      });\n      setTimeout(computerMoves, 1000);\n    } else {\n      const cells = document.querySelectorAll(\".cell\");\n      cells.forEach((n) => {\n        const attribute = n.getAttribute(\"data-coordinate\");\n        if (attribute[3] === \"2\" || attribute[4] === \"2\") {\n          n.removeAttribute(\"disabled\");\n        }\n      });\n    }\n  }\n\n  function checkContinueTurn(coordinates) {\n    if (nonActivePlayer.board[coordinates]) {\n      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.disableAttackedCells)();\n    } else {\n      switchPlayer();\n      disableCells();\n      (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.disableAttackedCells)();\n    }\n  }\n\n  return {\n    switchPlayer,\n    disableCells,\n    getActivePlayer,\n    updateRecieveAttack,\n    checkContinueTurn,\n  };\n};\n\nconst allShipsPlayer1 = ships();\nplayer1.placeShip(allShipsPlayer1.carrier, \"B\", 2, \"vertical\", 1);\nplayer1.placeShip(allShipsPlayer1.battleShip, \"D\", 8, \"horizontal\", 1);\nplayer1.placeShip(allShipsPlayer1.cruiser, \"I\", 1, \"horizontal\", 1);\nplayer1.placeShip(allShipsPlayer1.submarine, \"A\", 4, \"vertical\", 1);\nplayer1.placeShip(allShipsPlayer1.destroyer, \"B\", 6, \"vertical\", 1);\n\nconst allShipsPlayer2 = ships();\nplayer2.placeShip(allShipsPlayer2.carrier, \"B\", 2, \"vertical\", 2);\nplayer2.placeShip(allShipsPlayer2.battleShip, \"F\", 8, \"horizontal\", 2);\nplayer2.placeShip(allShipsPlayer2.cruiser, \"J\", 5, \"horizontal\", 2);\nplayer2.placeShip(allShipsPlayer2.submarine, \"A\", 8, \"vertical\", 2);\nplayer2.placeShip(allShipsPlayer2.destroyer, \"B\", 6, \"vertical\", 2);\n\n\n\n\n//# sourceURL=webpack://project-setup-template/./src/logic.js?");

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