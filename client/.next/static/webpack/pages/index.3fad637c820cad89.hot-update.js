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

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// MsgList => Create / MsgItem => Update\nvar MsgInput = function(param) {\n    var mutate = param.mutate, _id = param.id, id = _id === void 0 ? undefined : _id;\n    _s();\n    var textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var onSubmit = function(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        var text = textRef.current.value;\n        textRef.current.value = \"\";\n        mutate(text, id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages_input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                placeholder: \"내용을 입력하세요\"\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgInput.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgInput.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgInput.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(MsgInput, \"w6wg8oN6T1JIeHvMfowtaM3MyjI=\");\n_c = MsgInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgInput);\nvar _c;\n$RefreshReg$(_c, \"MsgInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUE4QjtBQUU5Qix3Q0FBd0M7QUFDeEMsSUFBTUMsUUFBUSxHQUFHLGdCQUFnQztRQUE3QkMsTUFBTSxTQUFOQSxNQUFNLGNBQUVDLEVBQUUsRUFBRkEsRUFBRSxvQkFBR0MsU0FBUzs7SUFDeEMsSUFBTUMsT0FBTyxHQUFHTCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUU1QixJQUFNTSxRQUFRLEdBQUdDLFNBQUFBLENBQUMsRUFBSTtRQUNwQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFDbEJELENBQUMsQ0FBQ0UsZUFBZSxFQUFFO1FBQ25CLElBQU1DLElBQUksR0FBR0wsT0FBTyxDQUFDTSxPQUFPLENBQUNDLEtBQUs7UUFDbENQLE9BQU8sQ0FBQ00sT0FBTyxDQUFDQyxLQUFLLEdBQUcsRUFBRTtRQUMxQlYsTUFBTSxDQUFDUSxJQUFJLEVBQUVQLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQscUJBQ0UsOERBQUNVLE1BQUk7UUFBQ0MsU0FBUyxFQUFDLGdCQUFnQjtRQUFDUixRQUFRLEVBQUVBLFFBQVE7OzBCQUNqRCw4REFBQ1MsVUFBUTtnQkFBQ0MsR0FBRyxFQUFFWCxPQUFPO2dCQUFFWSxXQUFXLEVBQUMsV0FBVzs7Ozs7cUJBQUc7MEJBQ2xELDhEQUFDQyxRQUFNO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTswQkFBQyxJQUFFOzs7OztxQkFBUzs7Ozs7O2FBQzVCLENBQ1I7QUFDSCxDQUFDO0dBakJLbEIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBbUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcz9jYzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5cbi8vIE1zZ0xpc3QgPT4gQ3JlYXRlIC8gTXNnSXRlbSA9PiBVcGRhdGVcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbClcblxuICBjb25zdCBvblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlXG4gICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJydcbiAgICBtdXRhdGUodGV4dCwgaWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX2lucHV0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalFwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQ7Il0sIm5hbWVzIjpbInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0ZXh0IiwiY3VycmVudCIsInZhbHVlIiwiZm9ybSIsImNsYXNzTmFtZSIsInRleHRhcmVhIiwicmVmIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n"));

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\nvar _this = undefined;\n\n\n// MsgInput => Update\nvar MsgItem = function(param) {\n    var id = param.id, userId = param.userId, timestamp = param.timestamp, text = param.text, onUpdate = param.onUpdate, isEditing = param.isEditing, startEdit = param.startEdit;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    userId,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {}, void 0, false, {\n                        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                mutate: onUpdate,\n                id: id\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, _this) : text,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages_buttons\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: startEdit,\n                    children: \"수정\"\n                }, void 0, false, {\n                    fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgItem.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = MsgItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgItem);\nvar _c;\n$RefreshReg$(_c, \"MsgItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUFpQztBQUVqQyxxQkFBcUI7QUFDckIsSUFBTUMsT0FBTyxHQUFHLGdCQVFWO1FBUEpDLEVBQUUsU0FBRkEsRUFBRSxFQUNGQyxNQUFNLFNBQU5BLE1BQU0sRUFDTkMsU0FBUyxTQUFUQSxTQUFTLEVBQ1RDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsU0FBUyxTQUFUQSxTQUFTLEVBQ1RDLFNBQVMsU0FBVEEsU0FBUztJQUVULHFCQUNFLDhEQUFDQyxJQUFFO1FBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7OzBCQUM1Qiw4REFBQ0MsSUFBRTs7b0JBQ0FSLE1BQU07b0JBQUUsR0FBRztrQ0FDWiw4REFBQ1MsS0FBRzs7Ozs2QkFTRTs7Ozs7O3FCQUNIO1lBRUhMLFNBQVMsaUJBQ0wsOERBQUNQLGlEQUFRO2dCQUFDYSxNQUFNLEVBQUVQLFFBQVE7Z0JBQUVKLEVBQUUsRUFBRUEsRUFBRTs7Ozs7cUJBQUksR0FDdENHLElBQUk7MEJBR1YsOERBQUNTLEtBQUc7Z0JBQUNKLFNBQVMsRUFBQyxrQkFBa0I7MEJBQy9CLDRFQUFDSyxRQUFNO29CQUFDQyxPQUFPLEVBQUVSLFNBQVM7OEJBQUUsSUFBRTs7Ozs7eUJBQVM7Ozs7O3FCQUNuQzs7Ozs7O2FBQ0gsQ0FDTjtBQUNILENBQUM7QUFuQ0tQLEtBQUFBLE9BQU87QUFxQ2IsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJdGVtLmpzP2MzMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCJcblxuLy8gTXNnSW5wdXQgPT4gVXBkYXRlXG5jb25zdCBNc2dJdGVtID0gKHtcbiAgaWQsXG4gIHVzZXJJZCxcbiAgdGltZXN0YW1wLFxuICB0ZXh0LFxuICBvblVwZGF0ZSxcbiAgaXNFZGl0aW5nLFxuICBzdGFydEVkaXRcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cbiAgICAgIDxoMz5cbiAgICAgICAge3VzZXJJZH17JyAnfVxuICAgICAgICA8c3ViPlxuICAgICAgICAgIHsvKiB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygna28tS1InLCB7XG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIGhvdXIxMjogdHJ1ZVxuICAgICAgICAgIH0pfSAqL31cbiAgICAgICAgPC9zdWI+XG4gICAgICA8L2gzPlxuICAgICAge1xuICAgICAgICBpc0VkaXRpbmdcbiAgICAgICAgICA/IDxNc2dJbnB1dCBtdXRhdGU9e29uVXBkYXRlfSBpZD17aWR9IC8+XG4gICAgICAgICAgOiB0ZXh0XG4gICAgICB9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNfYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iXSwibmFtZXMiOlsiTXNnSW5wdXQiLCJNc2dJdGVtIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0Iiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJsaSIsImNsYXNzTmFtZSIsImgzIiwic3ViIiwibXV0YXRlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n"));

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"../node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"../node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar userIds = [\n    \"roy\",\n    \"jay\"\n];\nvar getRandomUserId = function() {\n    return userIds[Math.round(Math.random())];\n};\nvar ogMsgs = Array(50).fill().map(function(_, i) {\n    return {\n        id: i + 1,\n        // userId: getRandomUserId(),\n        userId: \"philip\",\n        // timestamp: 1234567890123 + i * 1000 * 60,\n        timestamp: \"2022-10-4\",\n        text: \"\".concat(i + 1, \" mock text\")\n    };\n});\n// MsgInput => Create\nvar MsgList = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ogMsgs), msgs = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), editingID = ref1[0], setEditingID = ref1[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs.length,\n            // userId: getRandomUserId(),\n            userId: \"philip\",\n            // timestamp: Date.now(),\n            timestamp: \"2022-10-4\",\n            text: \"\".concat(msgs.length, \" \").concat(text)\n        };\n        setMsgs(function(msgs) {\n            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs).concat([\n                newMsg\n            ]);\n        });\n    };\n    var onUpdate = function(text, id) {\n        var targetIndex = msgs.findIndex(function(msg) {\n            return msg.id === id;\n        });\n        if (targetIndex < 0) return msgs;\n        var newMsgs = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(msgs);\n        newMsgs.splice(targetIndex, 1, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, msgs[targetIndex]), {\n            text: text\n        }));\n        return newMsgs;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgList.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, x), {\n                        onUpdate: onUpdate,\n                        startEdit: function() {\n                            return setEditingID(x.id);\n                        },\n                        isEditing: editingID === x.id\n                    }), x.id, false, {\n                        fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgList.js\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/minjaelee/Desktop/development/toy_project/client/components/MsgList.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"JcCv3ooMcM3clGQIJ/G8R2GD00g=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsS0FBS2MsQ0FBQyxDQUFDckIsRUFBRTt3QkFKeEJxQixDQUFDLENBQUNyQixFQUFFOzs7OzZCQUtUO2lCQUFBLENBQUM7Ozs7O3FCQUVGOztvQkFDSixDQUNKO0FBQ0gsQ0FBQztHQTNDS0ksT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBNkNiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiXG5pbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCJcblxuY29uc3QgdXNlcklkcyA9IFsncm95JywgJ2pheSddXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiB1c2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldXG5cbmNvbnN0IG9nTXNncyA9IEFycmF5KDUwKS5maWxsKCkubWFwKChfLCBpKSA9PiAoe1xuICBpZDogaSArIDEsXG4gIC8vIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gIHVzZXJJZDogJ3BoaWxpcCcsXG4gIC8vIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAsXG4gIHRpbWVzdGFtcDogJzIwMjItMTAtNCcsXG4gIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgXG59KSlcblxuLy8gTXNnSW5wdXQgPT4gQ3JlYXRlXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvZ01zZ3MpXG4gIGNvbnN0IFtlZGl0aW5nSUQsIHNldEVkaXRpbmdJRF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0ge1xuICAgICAgaWQ6IG1zZ3MubGVuZ3RoLFxuICAgICAgLy8gdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAgIHVzZXJJZDogJ3BoaWxpcCcsXG4gICAgICAvLyB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICB0aW1lc3RhbXA6ICcyMDIyLTEwLTQnLFxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGh9ICR7dGV4dH1gXG4gICAgfVxuICAgIHNldE1zZ3MobXNncyA9PiAoWy4uLm1zZ3MsIG5ld01zZ10pKVxuICB9XG5cbiAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxuICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXG4gICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XG4gICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgIHRleHRcbiAgICB9KVxuICAgIHJldHVybiBuZXdNc2dzXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7XG4gICAgICAgICAgbXNncy5tYXAoeCA9PiA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJRCh4LmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lEID09PSB4LmlkfVxuICAgICAgICAgIC8+KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNc2dJbnB1dCIsIk1zZ0l0ZW0iLCJ1c2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib2dNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSUQiLCJzZXRFZGl0aW5nSUQiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});