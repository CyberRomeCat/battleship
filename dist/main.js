/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const ships = () => {\n  let tasks = {\n    length: 1,\n    hits: 0,\n    sunk: false,\n    hit() {\n      this.hits += 1;\n      this.length -= 1;\n    },\n    isSunk() {\n      return this.length === 0 ? (this.sunk = true) : (this.sunk = false);\n    },\n  };\n\n  let battleShip = Object.assign({}, tasks);\n  let cruiser = Object.assign({}, tasks);\n  let carrier = Object.assign({}, tasks);\n  let submarine = Object.assign({}, tasks);\n  let destroyer = Object.assign({}, tasks);\n\n  let allShips = [battleShip, cruiser, carrier, submarine, destroyer];\n  allShips.forEach((ship) => {\n    if (ship === carrier) ship.length = 5;\n    if (ship == battleShip) ship.length = 4;\n    if (ship == cruiser || ship == submarine) ship.length = 3;\n    if (ship == destroyer) ship.length = 2;\n  });\n\n  return {\n    battleShip,\n    cruiser,\n    carrier,\n    submarine,\n    destroyer,\n  };\n};\n\n\n//# sourceURL=webpack://project-setup-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;