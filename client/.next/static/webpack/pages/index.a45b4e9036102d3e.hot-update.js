"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInputAddition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInputAddition */ \"./components/MsgInputAddition.js\");\nvar _this = undefined;\n\n\n// MsgInput => Update\nvar MsgItem = function(param) {\n    var id = param.id, userId = param.userId, timestamp = param.timestamp, text = param.text, onUpdate = param.onUpdate, isEditing = param.isEditing, startEdit = param.startEdit;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    userId,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {}, void 0, false, {\n                        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInputAddition__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                mutate: onUpdate,\n                id: id\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages_buttons\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: startEdit,\n                    children: \"수정\"\n                }, void 0, false, {\n                    fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = MsgItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgItem);\nvar _c;\n$RefreshReg$(_c, \"MsgItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUFpRDtBQUVqRCxxQkFBcUI7QUFDckIsSUFBTUMsT0FBTyxHQUFHLGdCQVFWO1FBUEpDLEVBQUUsU0FBRkEsRUFBRSxFQUNGQyxNQUFNLFNBQU5BLE1BQU0sRUFDTkMsU0FBUyxTQUFUQSxTQUFTLEVBQ1RDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsU0FBUyxTQUFUQSxTQUFTLEVBQ1RDLFNBQVMsU0FBVEEsU0FBUztJQUVULHFCQUNFLDhEQUFDQyxJQUFFO1FBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7OzBCQUM1Qiw4REFBQ0MsSUFBRTs7b0JBQ0FSLE1BQU07b0JBQUUsR0FBRztrQ0FDWiw4REFBQ1MsS0FBRzs7Ozs2QkFTRTs7Ozs7O3FCQUNIOzBCQU1MLDhEQUFDWix5REFBZ0I7Z0JBQUNhLE1BQU0sRUFBRVAsUUFBUTtnQkFBRUosRUFBRSxFQUFFQSxFQUFFOzs7OztxQkFBSTswQkFFOUMsOERBQUNZLEtBQUc7Z0JBQUNKLFNBQVMsRUFBQyxrQkFBa0I7MEJBQy9CLDRFQUFDSyxRQUFNO29CQUFDQyxPQUFPLEVBQUVSLFNBQVM7OEJBQUUsSUFBRTs7Ozs7eUJBQVM7Ozs7O3FCQUNuQzs7Ozs7O2FBQ0gsQ0FDTjtBQUNILENBQUM7QUFwQ0tQLEtBQUFBLE9BQU87QUFzQ2IsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJdGVtLmpzP2MzMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0QWRkaXRpb24gZnJvbSBcIi4vTXNnSW5wdXRBZGRpdGlvblwiXG5cbi8vIE1zZ0lucHV0ID0+IFVwZGF0ZVxuY29uc3QgTXNnSXRlbSA9ICh7XG4gIGlkLFxuICB1c2VySWQsXG4gIHRpbWVzdGFtcCxcbiAgdGV4dCxcbiAgb25VcGRhdGUsXG4gIGlzRWRpdGluZyxcbiAgc3RhcnRFZGl0XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XG4gICAgICA8aDM+XG4gICAgICAgIHt1c2VySWR9eycgJ31cbiAgICAgICAgPHN1Yj5cbiAgICAgICAgICB7Lyoge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICBob3VyMTI6IHRydWVcbiAgICAgICAgICB9KX0gKi99XG4gICAgICAgIDwvc3ViPlxuICAgICAgPC9oMz5cbiAgICAgIHsvKiB7XG4gICAgICAgIGlzRWRpdGluZ1xuICAgICAgICAgID8gPE1zZ0lucHV0QWRkaXRpb24gbXV0YXRlPXtvblVwZGF0ZX0gaWQ9e2lkfSAvPlxuICAgICAgICAgIDogdGV4dFxuICAgICAgfSAqL31cbiAgICAgIDxNc2dJbnB1dEFkZGl0aW9uIG11dGF0ZT17b25VcGRhdGV9IGlkPXtpZH0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19idXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSJdLCJuYW1lcyI6WyJNc2dJbnB1dEFkZGl0aW9uIiwiTXNnSXRlbSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0IiwibGkiLCJjbGFzc05hbWUiLCJoMyIsInN1YiIsIm11dGF0ZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n"));

/***/ })

});