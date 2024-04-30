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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   gameBoard: () => (/* binding */ gameBoard),\n/* harmony export */   ships: () => (/* binding */ ships)\n/* harmony export */ });\nconst ships = () => {\n  const tasks = {\n    length: 1,\n    hits: 0,\n    sunk: false,\n    hit() {\n      this.hits += 1;\n      this.length -= 1;\n    },\n    isSunk() {\n      return this.length === 0 ? (this.sunk = true) : (this.sunk = false);\n    },\n  };\n\n  const battleShip = { ...tasks };\n  const cruiser = { ...tasks };\n  const carrier = { ...tasks };\n  const submarine = { ...tasks };\n  const destroyer = { ...tasks };\n\n  const allShips = [battleShip, cruiser, carrier, submarine, destroyer];\n  allShips.forEach((ship) => {\n    if (ship === carrier) ship.length = 4;\n    if (ship === battleShip) ship.length = 3;\n    if (ship === cruiser || ship === submarine) ship.length = 2;\n    if (ship === destroyer) ship.length = 1;\n  });\n\n  return {\n    battleShip,\n    cruiser,\n    carrier,\n    submarine,\n    destroyer,\n  };\n};\n\nconst gameBoard = () => {\n  const board = {};\n  const missed = [];\n  const allShips = [];\n\n  function placeShip(shipObject, XCoord, YCoord, direction) {\n    allShips.push(shipObject);\n    let coordinates = [XCoord, YCoord];\n    let join = coordinates.join(\"\");\n    board[join] = [shipObject];\n    if (direction === \"horizontal\") {\n      let newY = YCoord;\n      for (let i = 0; i < shipObject.length - 1; i++) {\n        coordinates = [XCoord, (newY += 1)];\n        join = coordinates.join(\"\");\n        board[join] = [shipObject];\n      }\n    } else {\n      let charCode = XCoord.charCodeAt(0);\n      let tranlateToletter;\n      for (let i = 0; i < shipObject.length - 1; i++) {\n        charCode += 1;\n        tranlateToletter = String.fromCharCode(charCode);\n        coordinates = [tranlateToletter, YCoord];\n        join = coordinates.join(\"\");\n        board[join] = [shipObject];\n      }\n    }\n  }\n\n  function recieveAttack(coord) {\n    if (coord in board) {\n      board[coord][0].hit();\n      board[coord].push(\"hit\");\n    } else {\n      missed.push(coord);\n    }\n  }\n\n  function checkAllShipsSunk() {\n    for (let i = 0; i < allShips.length; i++) {\n      if (allShips[i].length !== 0) {\n        return \"not over\";\n      }\n    }\n    return \"GameOver\";\n  }\n\n  return {\n    placeShip,\n    board,\n    recieveAttack,\n    missed,\n    checkAllShipsSunk,\n  };\n};\n\nconst Player = () => {\n  const real = gameBoard();\n  const computer = gameBoard();\n\n  return {\n    real,\n    computer,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://project-setup-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;